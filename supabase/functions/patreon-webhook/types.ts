// Patreon webhook payload structure
export interface PatreonWebhookPayload {
  data: {
    id: string
    type: string
    attributes: {
      email?: string
      full_name?: string
      patron_status?: string
      currently_entitled_amount_cents?: number
      pledge_relationship_start?: string
    }
    relationships?: {
      user?: {
        data?: {
          id: string
          type: string
        }
      }
      address?: {
        data?: {
          id: string
        } | null
      }
    }
  }
  included?: Array<{
    id: string
    type: string
    attributes?: Record<string, unknown>
  }>
  [key: string]: unknown
}

export interface PatreonWebhookRecord {
  raw_payload: PatreonWebhookPayload
  amount?: number
  patreon_id?: string
}

export interface SubscriberUpdate {
  nickname: string
  valid_to: string
  address: string | null
  email: string | null
  patreon_id: string | null
}

export interface ExistingSubscriber {
  valid_to: string | null
  nickname: string
}
