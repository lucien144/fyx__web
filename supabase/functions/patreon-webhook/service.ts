import type { SupabaseClient } from 'jsr:@supabase/supabase-js@2'
import type {
  PatreonWebhookPayload,
  PatreonWebhookRecord,
  SubscriberUpdate,
  ExistingSubscriber,
} from './types.ts'

export class PatreonWebhookService {
  constructor(private supabase: SupabaseClient) {}

  /**
   * Extracts patreon_id from payload
   */
  extractPatreonId(payload: PatreonWebhookPayload): string | undefined {
    return payload.data?.relationships?.user?.data?.id
  }

  /**
   * Extracts amount from payload (in cents)
   */
  extractAmount(payload: PatreonWebhookPayload): number | undefined {
    return payload.data?.attributes?.currently_entitled_amount_cents
  }

  /**
   * Extracts email from payload
   */
  extractEmail(payload: PatreonWebhookPayload): string | undefined {
    return payload.data?.attributes?.email
  }

  /**
   * Extracts address from included data
   */
  extractAddress(payload: PatreonWebhookPayload): string | null {
    const addressId = payload.data?.relationships?.address?.data?.id
    if (!addressId) return null

    const addressData = payload.included?.find(
      (item) => item.type === 'address' && item.id === addressId
    )

    if (!addressData?.attributes) return null

    // Build address string from available fields
    const attrs = addressData.attributes
    const parts = [
      attrs.line_1,
      attrs.line_2,
      attrs.city,
      attrs.state,
      attrs.postal_code,
      attrs.country,
    ].filter(Boolean)

    return parts.length > 0 ? parts.join(', ') : null
  }

  /**
   * Generates a unique nickname from patreon_id
   */
  generateNickname(patreonId: string): string {
    return `patreon_${patreonId}`
  }

  /**
   * Calculates new valid_to date (adds 1 month + 1 day)
   * If existingValidTo is in the past, start from today
   */
  calculateNewValidTo(existingValidTo: string | null): string {
    let newValidTo: Date
    const today = new Date()
    today.setHours(0, 0, 0, 0) // Reset time part for comparison

    if (existingValidTo) {
      const validToDate = new Date(existingValidTo)
      validToDate.setHours(0, 0, 0, 0)

      // If valid_to is in the future, extend from that date
      // If in the past, start from today
      if (validToDate > today) {
        newValidTo = validToDate
      } else {
        newValidTo = today
      }
    } else {
      // Start from today
      newValidTo = today
    }

    // Add 1 month + 1 day
    newValidTo.setMonth(newValidTo.getMonth() + 1)
    newValidTo.setDate(newValidTo.getDate() + 1)

    // Format as YYYY-MM-DD
    return newValidTo.toISOString().split('T')[0]
  }

  /**
   * Fetches existing subscriber by patreon_id
   */
  async getExistingSubscriberByPatreonId(
    patreonId: string
  ): Promise<ExistingSubscriber | null> {
    const { data, error } = await this.supabase
      .from('subscribers')
      .select('valid_to, nickname')
      .eq('patreon_id', patreonId)
      .single()

    if (error) {
      if (error.code !== 'PGRST116') {
        console.error('Error fetching subscriber by patreon_id:', error)
      }
      return null
    }

    return data
  }

  /**
   * Updates or creates subscriber record
   */
  async upsertSubscriber(update: SubscriberUpdate): Promise<boolean> {
    const { error } = await this.supabase
      .from('subscribers')
      .upsert(update, {
        onConflict: 'nickname',
      })

    if (error) {
      console.error('Database error updating subscriber:', error)
      return false
    }

    return true
  }

  /**
   * Saves webhook data to database
   */
  async saveWebhook(
    payload: PatreonWebhookPayload
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const webhookData: PatreonWebhookRecord = {
        raw_payload: payload,
        amount: this.extractAmount(payload),
        patreon_id: this.extractPatreonId(payload),
      }

      const { error } = await this.supabase
        .from('patreon_webhooks')
        .insert(webhookData)

      if (error) {
        console.error('Database error saving webhook:', error)
        return { success: false, error: error.message }
      }

      console.log('Successfully saved Patreon webhook')

      return { success: true }
    } catch (error) {
      console.error('Unexpected error saving webhook:', error)
      return { success: false, error: 'Unexpected error' }
    }
  }

  /**
   * Updates or creates subscriber based on webhook data
   */
  async upsertSubscriberFromWebhook(
    payload: PatreonWebhookPayload
  ): Promise<{ success: boolean; error?: string }> {
    const patreonId = this.extractPatreonId(payload)

    if (!patreonId) {
      return { success: false, error: 'Missing patreon_id in payload' }
    }

    // Check if amount is at least 300 cents (3 USD)
    const amount = this.extractAmount(payload)
    if (amount === undefined || amount < 300) {
      console.log(
        `Skipping subscriber upsert for patreon_id ${patreonId}: amount ${amount} is below 300 cents threshold`
      )
      return { success: true, error: 'Amount below threshold (300 cents)' }
    }

    // Try to find existing subscriber by patreon_id
    const existingSubscriber =
      await this.getExistingSubscriberByPatreonId(patreonId)

    const email = this.extractEmail(payload)
    const address = this.extractAddress(payload)

    let nickname: string
    let newValidTo: string

    if (existingSubscriber) {
      // Update existing subscriber
      nickname = existingSubscriber.nickname
      newValidTo = this.calculateNewValidTo(existingSubscriber.valid_to || null)
      console.log(
        `Updating existing subscriber ${nickname} (patreon_id: ${patreonId})`
      )
    } else {
      // Create new subscriber
      nickname = this.generateNickname(patreonId)
      newValidTo = this.calculateNewValidTo(null)
      console.log(
        `Creating new subscriber ${nickname} (patreon_id: ${patreonId})`
      )
    }

    const subscriberUpdate: SubscriberUpdate = {
      nickname: nickname,
      valid_to: newValidTo,
      address: address,
      email: email || null,
      patreon_id: patreonId,
    }

    const success = await this.upsertSubscriber(subscriberUpdate)

    if (!success) {
      return { success: false, error: 'Failed to upsert subscriber' }
    }

    console.log(`Successfully upserted subscriber ${nickname}, valid_to: ${newValidTo}`)

    return { success: true }
  }

  /**
   * Processes Patreon webhook
   */
  async processWebhook(
    payload: PatreonWebhookPayload
  ): Promise<{ success: boolean; error?: string }> {
    // Save webhook first
    const webhookResult = await this.saveWebhook(payload)
    if (!webhookResult.success) {
      return webhookResult
    }

    // Upsert subscriber (create or update)
    const subscriberResult = await this.upsertSubscriberFromWebhook(payload)
    if (!subscriberResult.success) {
      console.error('Failed to upsert subscriber:', subscriberResult.error)
      // Don't fail the webhook, just log the error
    }

    return { success: true }
  }
}
