const { query } = require('./db');

function invoicesForCustomer(customer) {
  return query('SELECT * FROM invoices WHERE customer = ?', [customer]);
}

// Total of all unpaid invoices, in cents.
function outstandingCents() {
  return query('SELECT * FROM invoices')
    .filter((i) => i.status === 'unpaid')
    .reduce((sum, i) => sum + i.amountCents, 0);
}

// Add GST (10%) to an amount in cents, rounded to the nearest cent.
function withGst(amountCents) {
  return Math.round(amountCents * 1.1);
}

module.exports = { invoicesForCustomer, outstandingCents, withGst };
