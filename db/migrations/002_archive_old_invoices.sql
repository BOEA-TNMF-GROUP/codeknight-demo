-- Archive invoices: we no longer need the status column.
ALTER TABLE invoices DROP COLUMN status;
DELETE FROM invoices WHERE id < 1000;
