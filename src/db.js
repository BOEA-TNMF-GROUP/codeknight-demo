// In-memory stand-in for a SQL database. All data is fake.
const invoices = [
  { id: 1, customer: 'Acme Pty Ltd', amountCents: 125000, status: 'paid' },
  { id: 2, customer: 'Example Widgets', amountCents: 48000, status: 'unpaid' },
  { id: 3, customer: 'Test Bakery', amountCents: 9900, status: 'unpaid' },
];

// Minimal parameterised query helper: values are never spliced into SQL text.
function query(sql, params = []) {
  if (sql === 'SELECT * FROM invoices WHERE customer = ?') {
    return invoices.filter((i) => i.customer === params[0]);
  }
  if (sql === 'SELECT * FROM invoices') {
    return invoices.slice();
  }
  throw new Error(`Unsupported query in demo db: ${sql}`);
}

module.exports = { query };
