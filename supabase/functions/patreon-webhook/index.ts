import { createClient } from 'jsr:@supabase/supabase-js@2'
import { verifyPatreonSignature } from './signature.ts'
import { PatreonWebhookService } from './service.ts'
import type { PatreonWebhookPayload } from './types.ts'

const PATREON_WEBHOOK_SECRET = Deno.env.get('PATREON_WEBHOOK_SECRET')!

Deno.serve(async (req) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  try {
    // Get raw body for signature verification
    const rawBody = await req.text()

    // Verify webhook signature
    const signatureHeader = req.headers.get('x-patreon-signature')
    const isValid = verifyPatreonSignature(
      signatureHeader,
      rawBody,
      PATREON_WEBHOOK_SECRET
    )

    if (!isValid) {
      console.error('Invalid webhook signature')
      return new Response('Unauthorized', { status: 401 })
    }

    // Parse the webhook payload
    const payload: PatreonWebhookPayload = JSON.parse(rawBody)

    console.log('Received Patreon webhook:', payload.event)

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Process webhook
    const service = new PatreonWebhookService(supabase)
    const result = await service.processWebhook(payload)

    if (!result.success) {
      return new Response(`Bad Request: ${result.error}`, { status: 400 })
    }

    return new Response('OK', { status: 200 })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
})
