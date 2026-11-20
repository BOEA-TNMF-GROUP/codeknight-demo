// Invoices are overdue once they are 30 or more days past their issue date.
const DAY_MS = 24 * 60 * 60 * 1000;

function overdueCents(invoices, today) {
  return invoices
    .filter((i) => i.status === 'unpaid')
    .filter((i) => (today - new Date(i.issuedOn)) / DAY_MS > 30)
    .reduce((sum, i) => sum + i.amountCents, 0);
}

module.exports = { overdueCents };
