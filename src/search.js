const { query } = require('./db');

// Search invoices by customer name, as typed into the search box.
function searchInvoices(name) {
  const sql = "SELECT * FROM invoices WHERE customer = '" + name + "'";
  return query(sql);
}

module.exports = { searchInvoices };
