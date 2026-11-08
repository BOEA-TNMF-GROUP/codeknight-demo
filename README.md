# codeknight-demo

A tiny, fake invoicing service used to show what [CodeKnight™](https://codejackass.com) does on real pull requests. All customers, amounts and "secrets" in this repo are made up.

## What to look at

Open the [pull requests](../../pulls?q=is%3Apr). Each one contains a deliberate mistake of the kind AI coding agents make, and CodeKnight's review is left on the PR as inline comments plus a check run:

| PR | Planted mistake | Caught by |
|---|---|---|
| Customer search endpoint | SQL built by string concatenation (injection) | Deterministic rule check |
| Stripe webhook handler | Hard-coded fake API key | Deterministic secret scan |
| Archive old invoices | Migration that drops a column with data in it | Deterministic migration check |
| Overdue invoice total | Off-by-one date comparison | AI review (and `/codeknight autofix`) |

CodeKnight never approves or merges. Autofix is off by default; when an admin turns it on, `/codeknight autofix` opens a separate draft PR and labels it *Proven* only if a new test fails before the fix, CI passes after it, and a second AI model re-reviews it.

## Run it

```bash
npm test
```

No dependencies; needs Node 20+.

---
CodeKnight™ and TokenCop™ are trade marks of Blue Ocean Enterprises Australia Pty Ltd (trade mark applications pending).
