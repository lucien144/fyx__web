# Patreon Webhook Function

Supabase Edge Function for handling Patreon webhook events.

## Overview

This function:
1. Receives webhook events from Patreon
2. Verifies the webhook signature using HMAC-MD5
3. Extracts relevant data from the payload
4. Stores the complete webhook data in the `patreon_webhooks` table

## Webhook Events

The function accepts all Patreon webhook events, including:
- `members:create` - New patron pledges
- `members:update` - Patron updates their pledge
- `members:delete` - Patron cancels their pledge
- `members:pledge:create` - New pledge created
- `members:pledge:update` - Pledge updated
- `members:pledge:delete` - Pledge deleted

## Environment Variables

Required environment variables (set in Supabase project settings):

- `PATREON_WEBHOOK_SECRET` - Secret key from Patreon webhook settings
- `SUPABASE_URL` - Automatically provided by Supabase
- `SUPABASE_SERVICE_ROLE_KEY` - Automatically provided by Supabase

## Database Schema

The function stores webhook data in the `patreon_webhooks` table:

```sql
CREATE TABLE patreon_webhooks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  raw_payload jsonb NOT NULL,
  amount bigint,
  patreon_id text,
  created_at timestamp NOT NULL DEFAULT now()
)
```

And updates the `subscribers` table:

```sql
CREATE TABLE subscribers (
  nickname varchar PRIMARY KEY,
  valid_to date,
  is_god boolean DEFAULT false,
  created_at timestamp DEFAULT now() NOT NULL,
  address text,
  email text,
  patreon_id text UNIQUE
)
```

## Webhook Processing Logic

When a webhook is received:
1. Webhook data is saved to `patreon_webhooks` with extracted `amount` and `patreon_id`
2. If a subscriber exists with matching `patreon_id`, their record is updated:
   - `valid_to` is extended by 1 month + 1 day
   - `email` is updated if present in payload
   - `address` is updated if present in payload

## Setup

1. Run the migration to create the `patreon_webhooks` table:
   ```bash
   supabase db push
   ```

2. Deploy the function:
   ```bash
   supabase functions deploy patreon-webhook
   ```

3. Set the webhook secret:
   ```bash
   supabase secrets set PATREON_WEBHOOK_SECRET=your_secret_key
   ```

4. Configure Patreon webhook:
   - Go to your Patreon Creator Portal
   - Navigate to Settings > Webhooks
   - Add webhook URL: `https://your-project.supabase.co/functions/v1/patreon-webhook`
   - Copy the webhook secret and set it as environment variable

## Testing

Test the webhook locally:

```bash
supabase functions serve patreon-webhook --env-file .env.local
```

Send a test webhook:

```bash
curl -X POST http://localhost:54321/functions/v1/patreon-webhook \
  -H "Content-Type: application/json" \
  -H "x-patreon-signature: YOUR_SIGNATURE" \
  -d '{
    "event": "members:pledge:create",
    "data": {
      "id": "test-123",
      "attributes": {
        "patron_status": "active_patron",
        "email": "test@example.com",
        "full_name": "Test User",
        "currently_entitled_amount_cents": 500,
        "currency": "USD"
      }
    }
  }'
```

## Security

- The function verifies webhook signatures using HMAC-MD5
- All webhook events are stored in their raw form
- Invalid signatures result in 401 Unauthorized response

## Monitoring

Check function logs:
```bash
supabase functions logs patreon-webhook
```

Query webhook data:
```sql
SELECT * FROM patreon_webhooks
ORDER BY created_at DESC
LIMIT 10;
```
