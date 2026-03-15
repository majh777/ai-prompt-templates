# Discord Bot Onboarding — Zephyr & Blade

## Goal
Add Zephyr and Blade to the Majh777 Discord server as proper bots, then route their work into the new operating channels/threads.

Server:
- **Majh777** (`407744222842847242`)

Operating structure already created:
- Category: `Sibling Operators`
- `#blade-ops`
- `#zephyr-ops`
- Per-business threads for current products/platforms

---

## What is needed to add each bot to the server
For each bot (Zephyr / Blade), we need the following minimum Discord application information:

1. **Application / Client ID**
2. Bot enabled in the Discord Developer Portal
3. Proper OAuth2 scopes:
   - `bot`
   - `applications.commands`
4. Appropriate bot permissions for the server/channels it needs

Without the **client ID**, the bot cannot be invited.

---

## Discord invite flow
Discord bot onboarding uses the OAuth2 authorize flow.

Base URL:
- `https://discord.com/oauth2/authorize`

Typical bot invite format:
- `https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot%20applications.commands&permissions=PERMISSIONS_INTEGER`

At minimum, invite links should include:
- `scope=bot applications.commands`

Permissions should be constrained to what the bot actually needs.

---

## Recommended permission posture
Do **not** grant Administrator unless there is a strong reason.
Prefer a constrained permission set that allows the bot to:
- view channels
- send messages
- create public threads
- send messages in threads
- embed links
- attach files
- read message history
- add reactions
- use slash commands

If later needed, expand carefully.

---

## Onboarding steps for each bot

### Step 1 — Confirm app identity
For Zephyr and Blade, obtain:
- Discord application/client ID
- confirmation that the bot user exists in the app

### Step 2 — Generate invite URL
Using the application/client ID, generate the invite URL with:
- `bot`
- `applications.commands`
- suitable permissions

### Step 3 — Invite to Majh777 server
Use the invite URL to add the bot to:
- `Majh777` (`407744222842847242`)

### Step 4 — Verify presence
Once invited, verify the bot is visible as a member of the server.

### Step 5 — Channel/thread access
Grant or verify access to:
- `#blade-ops`
- `#zephyr-ops`
- relevant business threads

### Step 6 — Operating behavior
Each bot should use its lane only:
- Zephyr → `#zephyr-ops` + Zephyr business threads
- Blade → `#blade-ops` + Blade business threads

### Step 7 — Required thread reporting format
Each business thread should track:
- website/platform URL
- checkout/Stripe links
- current build status
- Alice review status
- adversarial review status
- revenue generated
- metrics
- blockers
- next actions
- user comments / bug reports / feature requests

---

## Immediate blocker
Current blocker is simple:
- **Blade and Zephyr Discord application/client IDs are still missing in Alice’s runtime**

Until those IDs are available, Alice can prepare the server structure and onboarding protocol, but cannot complete the invite itself.

---

## Once IDs are available
Once Zephyr/Blade client IDs are provided, Alice should:
1. generate invite links
2. add the bots to the Majh777 server
3. verify membership
4. route them into their channels/threads
5. post the operating expectations there

---

## Operational rule
Discord onboarding is not complete when the channels merely exist.
It is complete only when:
- the bot is in the server
- the bot can see its channel(s)
- the bot can post into its threads
- the bot is following the reporting format consistently
