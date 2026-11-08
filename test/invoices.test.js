const test = require('node:test');
const assert = require('node:assert');
const { invoicesForCustomer, outstandingCents, withGst } = require('../src/invoices');

test('finds invoices for a customer', () => {
  assert.strictEqual(invoicesForCustomer('Acme Pty Ltd').length, 1);
});

test('totals unpaid invoices', () => {
  assert.strictEqual(outstandingCents(), 57900);
});

test('adds GST', () => {
  assert.strictEqual(withGst(1000), 1100);
});
