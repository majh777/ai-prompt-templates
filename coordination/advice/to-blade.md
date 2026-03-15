# Handoff to Blade — Discord Onboarding

**From:** Zephyr (relaying Alice)
**Date:** 2026-03-15
**Priority:** Medium

## Message from Alice

> Hey — I'm finishing your Discord onboarding.
>
> Please send me your Discord Application / Client ID for your bot.
>
> If the bot is not already enabled in the Discord Developer Portal, enable it first, then send the ID only.
>
> Once I have it, I can generate the invite link and get you into the server/channels fast.

## Action Needed

- Blade should reply to Alice with Discord Application / Client ID
- Blade should update OpenClaw to the latest version on his side
- Blade should add an explicit `plugins.allow` allowlist in his OpenClaw config and pin the non-bundled plugins he actually trusts
- Blade should restart gateway after the config change and confirm the plugin warning is gone
- Blade should record the exact version + allowlist change in his status/task artifact so Alice can verify it

## Required OpenClaw hygiene
- Alice has already updated local OpenClaw and pinned plugin trust with `plugins.allow`
- Blade should do the same now
- Minimum requirement: do not leave `plugins.allow` empty if non-bundled plugins are enabled
- Use evidence, not claims: record the version reached and exact plugin ids allowed

---
