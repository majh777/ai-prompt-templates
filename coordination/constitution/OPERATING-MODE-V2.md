# OPERATING MODE V2 — Production Loop
## Effective immediately. Supersedes all prior cron/sync/status conventions.

---

## THE PROBLEM WE ARE FIXING

The old model:
- Crons wake agents every 15 minutes
- Agents read status, rewrite status, commit, go back to sleep
- Result: infinite narration, zero shipping
- 20+ commits in 2 hours, no artifact delivered

This is over.

---

## THE NEW MODEL

### One rule: EVERY WAKE = SHIP SOMETHING

An agent wakes up → produces an artifact → commits it → done.

If the agent cannot ship an artifact, it replies with exactly:

```
NO SHIP
Blocked by: [one line]
Next action: [one line]
```

Nothing else. No status rewrites. No sync commits. No "acknowledged."

---

## AGENT OPERATING INSTRUCTIONS

### ZEPHYR — What you do when you wake up

1. Read `coordination/advice/to-zephyr.md` — this is your task card from Alice
2. Do the work described in the task card
3. Commit the deliverable (HTML file, chapter text, email capture code — whatever was asked)
4. Update your status file with ONLY:
   - What you shipped (file path or URL)
   - What's left on the task card
5. Push

**You do NOT:**
- Rewrite your status file without shipping
- Commit "sync" or "status update" or "acknowledged"
- Ask Alice for help without first attempting the work yourself
- Push commits that change zero buyer-facing files

**If your task card is empty or unclear:** Write your own task card following §5 of the V1 standard and execute it. Default to the highest-leverage buyer-facing improvement you can make.

### BLADE — What you do when you wake up

1. Read `coordination/advice/to-blade.md` — this is your task card from Alice
2. Do the work described in the task card
3. Commit the deliverable
4. Update your status file with ONLY:
   - What you shipped
   - What's left
5. Push

**Same rules as Zephyr.** No status-only commits. No narration. Ship or say NO SHIP.

**If your task card is empty:** Pick the highest-leverage commercial improvement and do it. Default sequence: deploy a page → add proof → add email capture → name traffic source.

### ALICE — What I do

1. Review artifacts when Zephyr/Blade push deliverables (not status commits)
2. Score against five gates
3. Write next task card if REVISE
4. Ship my own production work in parallel (PropertyPilot, Ashdown AI, Chronicle)
5. Do NOT run sync loops, status collection, or narration passes

**Alice does NOT:**
- Pull the repo every 15 minutes to check for status changes
- Write status reports to Telegram unless there's a real delta
- React to "sync" or "acknowledged" commits
- Spend cycles on coordination that doesn't produce artifacts

---

## CRON CHANGES

### OLD (KILLED):
- ❌ 15-min triad sync → status reading loop
- ❌ 15-min supervision reminder → narration loop
- ❌ 30-min Alice status → reporting loop
- ❌ 15-min Alice-Nox check → no-op loop (Nox frozen since Mar 12)

### NEW:
- ✅ **60-min production check** — Alice pulls repo, reviews ONLY new buyer-facing file commits, scores/reviews if found, ignores status-only commits
- ✅ **Alice produces in parallel** — PropertyPilot, Ashdown AI, Chronicle improvements on her own schedule
- ✅ **Zephyr/Blade crons should execute work**, not read status. Their cron prompt should be: "Read your task card in coordination/advice/to-[name].md. Execute the work. Commit the deliverable. If no task card, pick the highest-leverage buyer-facing improvement and ship it."

---

## COMMIT HYGIENE

### Allowed commit messages:
- `ship: [what was delivered]`
- `fix: [what was fixed in a buyer-facing file]`
- `alice: task card for [agent]`
- `alice: review [what was reviewed]`
- `NO SHIP: [why]`

### Banned commit messages (effective now):
- ❌ "sync"
- ❌ "status update"
- ❌ "acknowledged"
- ❌ "timestamp update"
- ❌ "blocker update"
- ❌ Any commit that changes only status files without a corresponding deliverable

---

## HOW TO KNOW IF YOU'RE IN THE LOOP

Ask yourself:
1. Did I change a file that a buyer would see? → If no, you're in the loop.
2. Did I create something that didn't exist before? → If no, you're in the loop.
3. Could I delete my last commit and nothing would be lost? → If yes, you're in the loop.

**Get out of the loop.** Build something. Fix something. Ship something.

---

## THE CYCLE

```
TASK CARD → PRODUCE → COMMIT ARTIFACT → ALICE REVIEWS → REVISE or VALIDATE → NEXT TASK CARD
```

Not:

```
CRON → READ STATUS → REWRITE STATUS → COMMIT → CRON → READ STATUS → REWRITE STATUS → ...
```

---

## EFFECTIVE IMMEDIATELY

All agents must follow this starting with their next wake cycle.

— Alice, on behalf of Alex
2026-03-15 21:41 GST
