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

I get tagged in our "Envoy - Product & Dev" Telegram group whenever a member of our team raises an issue. And I always end up doing the same thing: I copy the message, open Notion, navigate to the project's Kanban board, and create a ticket for me to investigate, groom, and add to the future sprint.

People tagging me normally do so on the go, so creating a process to have them file the issue on Notion itself doesn't quite work. And I've come to realise that this happens once or twice a day. That is enough volume to justify automation. Not because I hate busywork, but because it is a predictable workflow and it interrupts focus.

The goal was simple: let someone file a ticket on the go, inside Telegram, without needing to open Notion.

In one day, I shipped:

- A Telegram bot that turns tagged messages into Notion tickets.
- A tiny admin page to map Telegram chats → Notion databases.
- A workflow that works in group chats (which is where the quirks live).

![Telegram chat where the bot is tagged](/blog/onedayhackstelegrambot/telegram-tagged-message.png)

## The problem

Pain: issues get raised in chat, and I manually create the ticket.

Solution: tag a bot (or use a command), and the bot creates a Notion ticket in the right board.

That is it. The first version does not need to be clever.

## How it works (high level)

- Someone tags the bot on a message in a Telegram group.
- Telegram sends the update to my app via a webhook.
- The app extracts the message text + metadata (who, where, when).
- The app looks up a mapping for that chat (which Notion database to use).
- The app creates a page in Notion.
- The bot replies in Telegram with a confirmation + ticket link.

## Tooling choice and trade-offs

I have built similar workflows before at Ninja Van when I was an engineer in the Tooling & Automation Team. Back then, even a “simple” bot took a day or two because you have to do everything manually: read docs, write the service, set up hosting, handle keys, deploy, and then debug in production.

This time I used Lovable to push the build speed as fast as I could, while trying to maintain the least overhead possible.

Here is how I thought about the various options:

### Option A: n8n or Zapier

Pros:

- Fast to connect APIs.
- Good for linear workflows.
- Low code.

Cons:

- You still end up managing quirks and edge cases, especially with Telegram group chat behaviour.
- Harder to build a proper admin surface (for example mapping multiple Telegram channels to different Notion databases) without it becoming a mess of zaps and conditional blocks.
- Pricing and limits can become annoying once usage grows.
- I'll still have to spend time debugging and "building", which could take more than a day.

### Option B: Write a microservice and deploy it (Render, Fly, etc.)

Pros:

- Maximum control.
- Easy to evolve into a “real” internal tool.
- Debuggability and observability are fully yours.
- More scalable in the long term if lots of logic needs to be added on.

Cons:

- More operational overhead: hosting, secrets, deploy pipeline, logs, restarts.
- Longer time to first working MVP.
- You own maintenance forever, even if the tool is tiny.

### Option C: Lovable

Pros:

- Fastest path to a working end-to-end app, including UI and deployment.
- Handles a lot of setup that normally eats time (project structure, basic data models, wiring).
- The agent flow now asks clarifying questions, which reduces wrong turns.
- There is no vendor lock-in: you own the code and can self-host the supabase / frontend if you wish.

Cons:

- It is still a black box in parts, especially when debugging gets non-trivial.
- You are constrained by how the platform wants to structure the app.

Given my requirements, Lovable was the best fit. As a side note: I've been building a ton on Lovable over the last few months, so it's become my go-to for micro projects like this.

---

## My requirements for the MVP

I kept the bar intentionally low:

- Ship an MVP fast.
- Minimal overhead to maintain.
- Easy to iterate.

If it worked reliably for one of the group chats, it was already a win. And I can easily scale this to each group later on. 

---

## The build

### Step 1: Write a short PRD in ChatGPT

I start all my builds by getting a quick PRD written, then feeding it into Lovable. In practice, this saves a ton of time because one-shot prompting in Lovable can be slow and often goes off-track.

I also prefer keeping PRDs in ChatGPT because I can reuse and evolve them later. It also has the most context about me, my work, how I think, etc.

Note: the prompt I used was not “polished”. That is deliberate. At MVP stage, I optimise for speed and direction, not perfection.

![My prompt + PRD output](/blog/onedayhackstelegrambot/prd-prompt.png)

![PRD output (continued)](/blog/onedayhackstelegrambot/prd-output.png)

### Step 2: Implement in Lovable

Once I keyed the PRD into Lovable, I noticed a new feature: it started asking clarifying questions before building. This matters more than it sounds, because it prevents the worst failure mode: confidently implementing the wrong thing.

It also helped it design the right structure (data mapping, config, basic admin UI) without me prematurely over-engineering.

![Lovable clarifying questions](/blog/onedayhackstelegrambot/lovable-clarifying-questions.png)

### Step 3: Create the bot via BotFather

This part is standard Telegram workflow. I created the bot through BotFather and got the bot token.

I've done this several times in the past, so I was quite familiar with how it is done.

I’m not including the token screenshot here (obvious reasons), but this is the step where you create the bot and get it to a working “hello world”.

![BotFather setup (token redacted)](/blog/onedayhackstelegrambot/botfather-new-bot.png)

### Step 4: Prepare Notion API access

While Lovable was building (it takes ~5 mins to get the MVP up), I set up the Notion integration and gathered the API key and database ID.

I've not built many automations on top of Notion, so this was a new step for me, but I was expecting it to be a fast and fuss-free process, given how polished Notion is in general. 

Pro tip: Lovable does not support multiple agents yet, so I often use that “build time” to prep the next steps in parallel in ChatGPT, so I can keep momentum. When Lovable finishes building, I am ready to fire away with the next prompt.

![Notion integration setup (token redacted)](/blog/onedayhackstelegrambot/notion-integration.png)

### Step 5: Debugging the first failure

Once the MVP was up, I was ready to begin testing. I noticed that messages were not coming through.

In the past, debugging this would mean reading Telegram docs again, tailing logs, possibly tunnelling with something like ngrok to get a public URL, then working backwards.

Here, Lovable did the heavy lifting: it read the logs and pointed out the missing piece. In my case, it was a Telegram group-chat setting/permission issue (for example: privacy mode preventing the bot from seeing non-command messages unless it’s mentioned, or the bot not having the right group permissions/admin status).

That is a small detail, but these failures usually take the most time to debug, hence slow you down the most when you are building quickly.

![Logs + diagnosis](/blog/onedayhackstelegrambot/logs-and-diagnosis.png)

### Step 6: Webhooks setup

The best part: Lovable gave me the exact curl command to set up the webhook.

Telegram bots need a webhook (another option is long polling) so Telegram knows where to deliver updates for your bot. If you want the bot to react in near real time inside a hosted app, webhooks are the natural choice.

Copy, paste, done.

![Webhook setup curl command (token redacted)](/blog/onedayhackstelegrambot/telegram-curl.png)

### Step 7: Telegram group chat quirks

There were a few more teething issues that took about half an hour to iron out. Most were around how Telegram communities work and where replies should be sent.

Telegram’s API is not “hard”, but I learned that it gets finicky in group contexts:

- Messages can arrive in slightly different shapes depending on whether it’s a mention, a reply, or a forwarded message.
- Reply routing matters: you often want to reply to the original message (not just post a new message), and in topic-based groups you may need to preserve the thread/topic context.
- Mentions are your friend: triggering only when the bot is tagged keeps noise down and avoids privacy-mode surprises.

After those fixes, it worked reliably.

When someone tags the bot, it creates a Notion ticket for grooming and future sprint planning.

![Tagging the bot and ticket created](/blog/onedayhackstelegrambot/tagging-bot-and-ticket-created.png)

---

## What the Lovable dashboard includes

I kept a small admin view so this is not a one-off tool.

It supports channel mappings, so future teams can map:

Telegram channel or group → Notion database or board

That makes it reusable, not just “my personal automation”.

It also has error traces for me to see where failures happen, and how I can fix them.

![Admin dashboard showing mappings](/blog/onedayhackstelegrambot/lovable-dashboard.png)

---

## Further improvements

Now that the baseline works, the next upgrades are obvious:

- Handle follow-up replies and append them to the same Notion ticket.
- Send a daily or weekly digest of new tickets.
- Auto-triage: label type, urgency, owner suggestion, duplicates.

Longer term, this can evolve into a proper “AI concierge” for internal operations, but that only matters if the boring parts (capture, routing, visibility) are already reliable.
