const test = require('node:test');
const assert = require('node:assert');
const { overdueCents } = require('../src/overdue');

test('counts invoices well past due', () => {
  const invoices = [{ status: 'unpaid', amountCents: 500, issuedOn: '2026-01-01' }];
  assert.strictEqual(overdueCents(invoices, new Date('2026-03-01')), 500);
});
