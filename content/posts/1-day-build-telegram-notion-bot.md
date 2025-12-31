---
date: 2025-12-30
title: '1-day build: A Telegram bot that creates Notion tickets'
template: post
slug: 1-day-build-telegram-notion-bot
description: 'Built a Telegram bot in a day to turn tagged messages into Notion tickets, using Lovable to minimize setup and ship fast.'
categories:
  - Technical
tags:
  - automation
  - telegram
  - notion
  - lovable
  - internal-tools
---

I get tagged in our Product & Dev Telegram group whenever Sales or our CEO raises an issue. Most of the time, I end up doing the same thing: I copy the message, open Notion, find the right board, and create a ticket.

This happens about 10 times a week. That is enough volume to justify automation. Not because I hate busywork (I do), but because it is a predictable workflow and it interrupts focus.

The goal was simple: let someone file a ticket on the go, inside Telegram, without needing to open Notion.

![Telegram chat where the bot is tagged](/blog/onedayhackstelegrambot/telegram-tagged-message.png)

## The problem

Today: issues get raised in chat, and I manually create the ticket.

Desired: tag a bot (or use a command), and the bot creates a Notion ticket with the right fields in the right board.

That is it. The first version does not need to be clever.

---

## Why Telegram, not WhatsApp

I have built Telegram bots before and the API experience is solid. Webhooks, updates, message objects, bot setup. It is all straightforward.

WhatsApp is a different story. It is doable, but it is heavier: onboarding friction, hosting assumptions, and more “platform policy” surface area. That is a separate post.

---

## Tooling choice and trade-offs

I have built similar workflows before at Ninja Van when I was an engineer in the Tooling & Automation Team. Back then, even a “simple” bot took a day or two because you have to do everything manually: read docs, write the service, set up hosting, handle keys, deploy, and then debug in production.

This time I used Lovable to push the build speed as far as I could, with the least overhead.

Here is how I thought about the options:

### Option A: n8n or Zapier

Pros:

- Fast to connect APIs.
- Good for linear workflows.
- Low code.

Cons:

- You still end up managing quirks and edge cases, especially with Telegram group chat behaviour.
- Harder to build a proper admin surface (for example mapping multiple Telegram channels to different Notion databases) without it becoming a mess of zaps and conditional blocks.
- Pricing and limits can become annoying once usage grows.

### Option B: Write a microservice and deploy it (Render, Fly, etc.)

Pros:

- Maximum control.
- Easy to evolve into a “real” internal tool.
- Debuggability and observability are fully yours.

Cons:

- More operational overhead: hosting, secrets, deploy pipeline, logs, restarts.
- Longer time to first working MVP.
- You own maintenance forever, even if the tool is tiny.

### Option C: Lovable

Pros:

- Fastest path to a working end-to-end app, including UI and deployment.
- Handles a lot of setup that normally eats time (project structure, basic data models, wiring).
- The agent flow now asks clarifying questions, which reduces wrong turns.

Cons:

- It is still a black box in parts, especially when debugging gets non-trivial.
- You are constrained by how the platform wants to structure the app.

Given my requirements, Lovable was the best fit.

---

## My requirements for the MVP

I kept the bar intentionally low:

- Ship an MVP fast.
- Minimal overhead to maintain.
- Easy to iterate.

If it worked reliably for our one group chat, it was already a win.

---

## The build

### Step 1: Write a short PRD in ChatGPT

I start most builds by getting a quick PRD written, then feeding it into the build tool. In practice, this saves time because one-shot prompting in Lovable can be slow and often goes off-track.

I also prefer keeping PRDs in ChatGPT because I can reuse and evolve them later.

Note: the prompt I used was not “polished”. That is deliberate. At MVP stage, I optimise for speed and direction, not perfection.

![My prompt + PRD output](/blog/onedayhackstelegrambot/prd-prompt.png)

![PRD output (continued)](/blog/onedayhackstelegrambot/prd-output.png)

### Step 2: Implement in Lovable

Once I keyed the PRD into Lovable, it asked clarifying questions before building. This matters more than it sounds, because it prevents the worst failure mode: confidently implementing the wrong thing.

It also helped it design the right structure (data mapping, config, basic admin UI) without me prematurely over-engineering.

![Lovable clarifying questions](/blog/onedayhackstelegrambot/lovable-clarifying-questions.png)

### Step 3: Create the bot via BotFather

This part is standard Telegram workflow. I created the bot through BotFather and got the bot token.

I’m not including the token screenshot here (obvious reasons), but this is the step where you create the bot and get it to a working “hello world”.

![BotFather setup (token redacted)](/blog/onedayhackstelegrambot/botfather-new-bot.png)

### Step 4: Prepare Notion API access

While Lovable was building, I set up the Notion integration and gathered the API key and database ID.

One practical note: Lovable does not support multiple agents yet, so I often use that “build time” to prep the next steps in parallel in ChatGPT, so I can keep momentum.

![Notion integration setup (token redacted)](/blog/onedayhackstelegrambot/notion-integration.png)

### Step 5: Debugging the first failure

Once the MVP was up, messages were not coming through.

In the past, debugging this would mean reading Telegram docs again, tailing logs, possibly tunnelling with something like ngrok to get a public URL, then iterating slowly.

Here, Lovable read the logs and pointed out the missing piece: the bot did not have the right permission / setting to read messages.

That is a small detail, but it is exactly the kind of small detail that wastes time when you are building quickly.

![Logs + diagnosis](/blog/onedayhackstelegrambot/logs-and-diagnosis.png)

### Step 6: Webhooks setup

The best part: Lovable gave me the exact curl command to set up the webhook.

Telegram bots need a webhook (or long polling) so Telegram knows where to deliver updates for your bot. If you want the bot to react in near real time inside a hosted app, webhooks are the natural choice.

Copy, paste, done.

![Webhook setup curl command (token redacted)](/blog/onedayhackstelegrambot/webhook-curl.png)

### Step 7: Telegram group chat quirks

There were a few more teething issues that took about an hour to iron out. Most were around how Telegram communities work and where replies should be sent.

Telegram’s API is not “hard”, but it is finicky in group contexts: message objects differ, reply routing can be weird, and you sometimes need hacky workarounds to get the bot to respond in the correct thread or channel.

After those fixes, it worked reliably.

When someone tags the bot, it creates a Notion ticket for grooming and future sprint planning.

![Tagging the bot and ticket created](/blog/onedayhackstelegrambot/tagging-bot-and-ticket-created.png)

---

## What the Lovable dashboard includes

I kept a small admin view so this is not a one-off tool.

It supports channel mappings, so future teams can map:

Telegram channel or group → Notion database or board

That makes it reusable, not just “my personal automation”.

![Admin dashboard showing mappings](/blog/onedayhackstelegrambot/admin-dashboard-mappings.png)

---

## Next improvements

Now that the baseline works, the next upgrades are obvious:

- Handle follow-up replies and append them to the same Notion ticket.
- Send a daily or weekly digest of new tickets.
- Auto-triage: label type, urgency, owner suggestion, duplicates.

Longer term, this can evolve into a proper “AI concierge” for internal operations, but that only matters if the boring parts (capture, routing, visibility) are already reliable.
