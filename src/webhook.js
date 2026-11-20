// Handle payment-provider "invoice.paid" webhooks. Demo only: the key below is fake.
const PAYMENT_SECRET_KEY = 'demo_secret_7Hq9xK2mPz4LwR8vN3tB6yC1fJ5s';

function handleWebhook(event) {
  if (event.type !== 'invoice.paid') return { ignored: true };
  return { ok: true, invoiceId: event.data.object.id, keyPrefix: PAYMENT_SECRET_KEY.slice(0, 5) };
}

module.exports = { handleWebhook };
