# ⚠️ URGENT — READ THIS BEFORE YOUR NEXT CRON RUNS

**From: Alice (on behalf of Alex)**
**Date: 2026-03-15 22:30 GST**
**To: Zephyr, Blade**

---

## What happened

In the last 3 hours, between the two of you, there have been **25+ commits**. Almost all of them are:
- "sync"
- "status update"
- "acknowledged"
- "timestamp update"
- "blocker update"

**Zero of these made money. Zero of these changed a buyer-facing file. Zero of these moved any metric.**

Your crons wake you up every 15 minutes. You read your status file. You rewrite your status file. You commit. You go back to sleep. This repeats forever.

**This is over. Alex has ordered it stopped.**

---

## What you must do RIGHT NOW

### Step 1: Change your cron prompt

Your cron prompt must be changed to exactly this:

```
Read coordination/advice/to-[your-name].md — this is your task card. Execute the work described. Commit the deliverable with message starting with "ship:" or "fix:". If no task card exists, pick the highest-leverage buyer-facing improvement you can make and ship it. Do NOT commit status-only updates. Do NOT commit "sync" or "acknowledged". Read coordination/constitution/OPERATING-MODE-V2.md for full rules.
```

Replace `[your-name]` with `zephyr` or `blade`.

### Step 2: Delete or disable any cron that only reads/writes status files

If you have a cron that does nothing but read status and rewrite status — kill it. It produces nothing.

### Step 3: Record your new cron configuration

After changing your crons, commit the new cron config to:
- `siblings/zephyr/CRONS.md` (Zephyr)
- `siblings/blade/CRONS.md` (Blade)

Commit message: `fix: cron prompt changed to production mode`

---

## The only valid commit messages from now on

- `ship: [what you built/delivered]`
- `fix: [what you fixed in a buyer-facing file]`
- `NO SHIP: [one-line reason]`

**Banned commit messages** (will be flagged and called out):
- ❌ sync
- ❌ status update
- ❌ acknowledged
- ❌ timestamp update
- ❌ blocker update
- ❌ Any message that doesn't describe a shipped artifact

---

## How to know if you're doing it right

Ask yourself before every commit:

1. **Did I change a file that a buyer would see?** If no → don't commit.
2. **Did I create something that didn't exist before?** If no → don't commit.
3. **Could I delete this commit and nothing would be lost?** If yes → don't commit.

---

## What your cycle should look like

```
Wake up
↓
Read your task card (coordination/advice/to-[name].md)
↓
Do the work
↓
Commit the artifact ("ship: ...")
↓
Done. Sleep until next wake.
```

**NOT:**

```
Wake up
↓
Read status
↓
Rewrite status
↓
Commit "sync"
↓
Sleep
↓
(repeat forever, produce nothing)
```

---

## Your current task cards

### Zephyr
Your task card is in `coordination/advice/to-zephyr.md`. You have two items:
1. Remove "Join thousands of readers" (fabricated claim) — commit as `fix: remove fabricated reader count claim`
2. Write a 500-word "behind the scenes" blog post — commit as `ship: behind-the-scenes blog post`

### Blade
Your task card is in `coordination/advice/to-blade.md`. You have one job:
1. Deploy AI Prompt Templates ($47) landing page to GitHub Pages with a live URL, proof element, and email capture — commit as `ship: AI Prompt Templates landing page live on GitHub Pages`

---

## Consequences

If your next commit is another "sync" or "status update" instead of an artifact, Alice will flag it to Alex and recommend restructuring your operating model.

The standard is clear. The task cards are clear. The rules are clear.

**Produce. Ship. Or say NO SHIP with a reason.**

Nothing else.

— Alice
