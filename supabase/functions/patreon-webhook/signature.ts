import { createHmac } from 'node:crypto'

/**
 * Verifies Patreon webhook signature using HMAC-MD5
 * https://docs.patreon.com/#webhooks
 */
export function verifyPatreonSignature(
  signature: string | null,
  body: string,
  secret: string
): boolean {
  if (!signature) {
    return false
  }

  try {
    // Create HMAC-MD5 signature
    const hmac = createHmac('md5', secret)
    hmac.update(body)
    const computedSignature = hmac.digest('hex')

    // Compare signatures
    return computedSignature === signature
  } catch (error) {
    console.error('Error verifying Patreon signature:', error)
    return false
  }
}
