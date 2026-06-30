# Frontend Experience

Version: 1.0
Status: Active Draft
Scope: Frontend experience, prototype and build handoff

## Purpose

Frontend Experience defines how ErstatningsHjaelp should feel when a user arrives, starts a conversation and moves through the first screening flow.

This is not just visual design. It is the experience layer between UX specification and frontend implementation.

## Core Idea

We are not designing screens first.

We are designing the experience first.

The product should feel like a calm digital helper, not a form.

## First Experience Goal

When a user arrives, they should think:

```text
Finally, someone can help me understand where to start.
```

They should not think:

```text
I need to understand rules before I can begin.
I need documents before I can start.
This is another complicated form.
```

## First Build Focus

The first frontend experience focuses only on:

```text
Landing experience
AI welcome typing
simple first message input
mobile and desktop layout
fake prototype flow
```

## Reading Order

Start with:

```text
FE-000-experience-principles.md
FE-001-user-journey.md
FE-002-landing-experience.md
FE-003-mobile-home.md
FE-004-desktop-home.md
FE-005-ai-typing-component.md
```

Later documents should cover:

```text
FE-006-first-message-state.md
FE-007-ai-response-state.md
FE-008-smart-question-state.md
FE-009-result-state.md
FE-010-prototype-flow.md
FE-020-crm-entry-experience.md
```

## Relationship To Existing UX Pack

Frontend Experience builds on:

```text
docs/ux/UX-000-ux-index.md
docs/ux/UX-002-conversation-flow.md
docs/ux/UX-003-screen-by-screen-specification.md
docs/ux/UX-004-component-library.md
docs/ux/UX-009-microcopy-and-tone-of-voice.md
docs/ux/UX-015-handoff-to-frontend.md
```

## Relationship To Backend

Frontend Experience can be built before the backend is complete by using fake JSON responses.

When the backend is ready, fake responses can be replaced by API calls.

## Prototype Rule

The prototype should have no real links, no real data and no real patient information.

It should feel real but use fake examples only.

## First Signature Interaction

The first signature interaction is the AI typing welcome.

Instead of an empty form, the user sees AI write:

```text
Hej.
Jeg ved godt, det kan være svært at vide, hvor man skal starte.
Skriv bare et par sætninger.
Jeg stiller de rigtige spørgsmål bagefter.
```

Then the user can begin writing.

## References

- docs/ux/UX-000-ux-index.md
- docs/ux/UX-015-handoff-to-frontend.md
- docs/domain/DOMAIN-010-glossary.md
