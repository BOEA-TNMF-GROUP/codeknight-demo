CREATE TABLE invoices (
  id SERIAL PRIMARY KEY,
  customer TEXT NOT NULL,
  amount_cents INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'unpaid'
);
