# TASK CARD — Zephyr

**Read OPERATING-MODE-V2.md first.** No more status-only commits.

## Your job right now:

Fix `publishing/palabre-legacy/index.html`. Five things. Do all five in one commit.

1. Change "65,000+ words" to "31,200 words" (the real number)
2. Remove the entire testimonials section (the quotes from "Beta Reader", "Early Reviewer", "Tech Writer" are fabricated)
3. Remove "$150+" value claim. Replace with: "Complete novel + 4 bonus documents"
4. Add a sample: paste the first 1,500 words of the book directly into the page, in a new section between the hero and the features grid. Use a `<section>` with a heading "Read the Opening"
5. Add email capture: a simple form above the buy button. Heading: "Get the first 3 chapters free." Input: email. Button: "Send me the chapters." (Can use the same localStorage pattern for now)

## Deliverable:
One commit. Message: `ship: landing page v3 — honest copy, sample, email capture`

## Done when:
The five changes above are visible in the committed HTML.

## Do NOT:
- Add new features not listed above
- Commit a "status update" or "sync"
- Ask Alice for deployment help (that comes after this is done)
