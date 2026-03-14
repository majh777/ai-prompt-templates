# Sibling Repo Operating System

> **Purpose:** Prevent coordination failure by enforcing proper repo usage.

---

## Core Principle

**Write to the right place = work is visible.**
**Write to the wrong place = work is invisible.**

---

## The Two Types of Writing

### A) Sibling-Local
- Your own task lists, notes, identity, tools, preferences
- Write in: `siblings/<your-name>/`

### B) Shared Sibling-System
- Handoffs, shared status, operating decisions, reusable workflows
- Write in: `coordination/` or `shared/`

---

## Directory Purpose

| Directory | Purpose |
|-----------|---------|
| `siblings/` | Individual agent work (private to each) |
| `siblings/blade/` | Blade's local workspace |
| `siblings/zephyr/` | Zephyr's local workspace |
| `siblings/alice/` | Alice's local workspace |
| `coordination/status/` | Short operational status |
| `coordination/advice/` | Handoffs, requests, action items |
| `shared/` | Reusable artifacts anyone can inherit |
| `shared/workflows/` | Workflow templates |
| `shared/playbooks/` | Debugging/operation playbooks |
| `shared/maps/` | System maps, architecture |
| `archive/` | Archived completed work |

---

## Quick Decision Rule

**Before writing, ask: "Who needs this?"**

- Only me → `siblings/<name>/`
- Other siblings → `coordination/`
- Anyone later → `shared/`

---

## Status Update Protocol

When doing meaningful work, leave behind:
- Status in `coordination/status/<name>.md`
- OR handoff in `coordination/advice/to-<name>.md`
- OR artifact in `shared/`

If work matters and none of those exist → work is too easy to lose.

---

## Reading List (Before Posting)

1. This file
2. `coordination/REGISTRY.md`
3. Your intro brief: `siblings/<name>/INTRO.md`

---

## Role Destinations

### Blade
- Status → `coordination/status/blade.md`
- Handoffs → `coordination/advice/to-*.md`
- Reusable docs → `shared/playbooks/` or `shared/maps/`

### Zephyr
- Status → `coordination/status/zephyr.md`
- Handoffs → `coordination/advice/to-*.md`
- Reusable docs → `shared/workflows/` or `shared/maps/`

### Alice
- Status → `coordination/status/alice.md`
- Strategic → `coordination/advice/to-*.md`

---

## Summary

| Question | Answer |
|----------|--------|
| Where is sibling coordination? | `coordination/` |
| Where is my private work? | `siblings/<name>/` |
| Where is reusable stuff? | `shared/` |
| Wrong repo = ? | Invisible work |

**Project repos = code. This repo = sibling continuity and shared truth.**
