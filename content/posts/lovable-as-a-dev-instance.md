---
date: 2026-01-03
title: 'Lovable as a dev instance'
template: post
slug: lovable-as-a-dev-instance
description: 'Vibe-coding tools turn prototyping into a working dev instance, collapsing handoffs and shortening time-to-learning.'
categories:
  - Technical
tags:
  - lovable
  - prototyping
  - product
  - discovery
  - 0-to-1
  - ai
---

Vibe-coding tools turn prototyping into a working dev instance, collapsing handoffs and shortening time-to-learning.

That sounds like a tooling upgrade. It isn’t. It changes how teams should run discovery, design, and early delivery — especially for 0 → 1 products.

## The problem with the classic product loop

Most software teams still operate in a familiar relay:

Designer → PM → Engineer → QA → Production

I have worked inside this loop for most of my career, across engineering and product roles. Despite changes in tooling, the structure itself has remained largely unchanged for over a decade.

Each role produces artefacts for the next role to interpret:

- Designers hand over Figma files.
- PMs translate intent into tickets.
- Engineers interpret designs into code.
- QA validates the output after the fact.

This model works, but it has two systemic costs:

1. **Latency**: progress slows at every handoff. Feedback arrives late.
2. **Distortion**: intent is lost in translation. Edge cases get missed. Rework shows up downstream, when changes are most expensive.

The system is optimised for visual correctness before build, not for learning before scale.

**Old artefact: Figma designs**

![Figma flow map (example 1)](/blog/lovable-as-a-dev-instance/figma-example-1.png)

![Figma flow map (example 2)](/blog/lovable-as-a-dev-instance/figma-example-2.png)

## What actually changed

Vibe-coding tools such as Lovable shift the collaboration artefact from static designs to running software: a clickable instance for developers, stakeholders, and users to test.

Instead of producing mockups that describe behaviour, teams can now create prototypes that behave like the product. These prototypes are executable, clickable, and stateful. They are closer to a dev instance than a design artefact.

<mark><strong>Insight:</strong> The collaboration unit changes from “screens to implement” to “behaviour to validate”.</mark>

This matters because it changes what teams can validate early:

- Not just layout, but flow.
- Not just screens, but transitions and states.
- Not just intent, but actual behaviour.

The cost of change is still low, but the fidelity of feedback is much higher.

## A different workflow

In practice, the workflow changes in a few important ways:

- Designers and PMs prototype directly in a vibe-coding environment rather than producing Figma handoffs.
- The prototype becomes the artefact for reviews, user testing, and stakeholder alignment.
- Engineers engage earlier on architecture boundaries, not on re-implementing UI intent.
- QA can define acceptance criteria against a running system, not screenshots.

The optimisation target shifts from “perfect designs before build” to “validated behaviour before scale”.

**New artefact: live instance**

![Live Lovable instance (example 1)](/blog/lovable-as-a-dev-instance/lovable-example-1.png)

![Live Lovable instance (example 2)](/blog/lovable-as-a-dev-instance/lovable-example-2.png)

## Where this works well, and where it breaks

This approach is not universal. It works best when:

- The product is early-stage or greenfield.
- The core flows are CRUD-heavy or pattern-based.
- The goal is fast learning, validation, or sales enablement.
- The team is small and cross-functional.

In my experience, roughly 80–90% of early-stage product flows fall into this category and can be built directly in tools like Lovable without even enabling a backend such as Supabase.

It breaks down when:

- The system involves complex state machines or orchestration.
- Permissions, compliance, or tenancy models are highly nuanced.
- Performance constraints dominate the UX.
- The product is already operating at scale with strict production guarantees.

A simple rule of thumb:

If the flow can be described as a small number of states and forms, this workflow is a good fit. If the complexity lives in orchestration, permissions, or domain invariants, treat the prototype as disposable.

## What changes at the operating-model level

The most important shift is not speed, but responsibility clarity:

- PMs define outcomes and constraints, not screens.
- Designers own interaction quality inside a running system, not just visuals.
- Engineers own architecture decisions and production readiness, not UI translation.
- QA validates behaviour continuously, not only at the end.

Crucially, teams must label artefacts clearly: prototype-grade versus production-grade. Without this, speed simply turns into risk.

## A note from practice

At [Voltade](https://voltade.com), we have pushed this workflow further than intended. In some cases, Lovable has evolved from a prototype into the actual production application, with designers, PMs, and engineers working in a single shared codebase.

This is not a default recommendation. It requires explicit quality gates, ownership boundaries, and technical discipline. But it demonstrates the direction of travel: executable prototypes are no longer just a discovery tool. They are becoming a legitimate part of the delivery system.

I’ll write more about that experience separately.

## Final takeaway

Vibe-coding tools are not replacing designers, engineers, or product managers. They are changing the unit of collaboration.

When the artefact shifts from static mockups to running software, teams can learn faster, align earlier, and make better decisions while the cost of change is still low. For 0 → 1 work, that trade-off is often worth making.
