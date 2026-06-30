# UX-006 - Mobile-First Guidelines

Version: 1.0
Status: Active Draft
Scope: Mobile-first product UX

## Purpose

This document defines mobile-first UX rules for ErstatningsHjaelp.

Many users may start the intake from a phone. The experience must be easy to understand and complete on a small screen.

## Core Principle

Design for mobile first, then expand to desktop.

The customer intake should not depend on desktop-only behavior.

## Mobile Priorities

The mobile experience must prioritise:

- one task at a time
- short text
- large touch targets
- visible primary CTA
- simple progress indication
- clear validation
- no dense tables
- no side-by-side dependencies

## Breakpoint Strategy

Use simple responsive thinking:

```text
mobile: single column
small tablet: single column with wider cards
desktop: centered conversation or multi-panel CRM
```

Customer intake should remain mostly single-column even on desktop.

## Touch Targets

Interactive elements should be easy to tap.

Guidelines:

```text
minimum practical tap area: 44x44px
primary buttons: full width on mobile
secondary actions: clear but less visually dominant
```

Avoid placing two small actions too close together.

## Text Inputs

Textarea and input fields should:

- be full-width on mobile
- have visible labels
- not rely only on placeholder text
- support multiline answers
- keep submit button visible after typing where practical

## Keyboard Behavior

When the mobile keyboard opens:

- the active input should remain visible
- the primary action should not disappear unpredictably
- validation should appear near the input
- avoid layout jumps where possible

## Conversation Layout

Mobile intake layout:

```text
Header
Progress hint
Main card
Input area
Primary action
Secondary action
```

The user should not need to scan a complex page to know what to do.

## Sticky Actions

Sticky bottom actions may be used when helpful.

Use carefully:

- primary action can be sticky
- avoid covering input text
- ensure safe-area support on iOS
- do not create double buttons

## Progress On Mobile

Use lightweight progress.

Examples:

```text
Spørgsmål 1
Vi spørger kun om én ting ad gangen
Næste trin: ét kort spørgsmål
```

Do not show long stepper flows in the first slice.

## Error Handling On Mobile

Validation should be:

- close to the field
- short
- clear
- not modal unless required

Example:

```text
Skriv kort, hvad sagen handler om, før du fortsætter.
```

## Loading On Mobile

Loading states should be calm and short.

Example:

```text
Vi finder det vigtigste næste spørgsmål.
```

Avoid technical loading messages.

## Desktop Expansion

On desktop, the intake can use:

- centered max-width content
- wider cards
- optional right-side help panel

But the core flow should remain the same as mobile.

## CRM Mobile Behavior

CRM is primarily desktop-first, but should still degrade safely on tablet/mobile.

Rules:

- lead list can be mobile cards
- kanban can become list view
- lead detail panels stack vertically
- internal tables should become cards where practical

## First Slice Mobile Scope

For the first vertical slice, ensure mobile works for:

```text
Welcome
First Message
AI Thinking
Smart Question
Answer Submitted
```

## Mobile QA Checklist

Before accepting the first slice:

- CTA visible on welcome screen
- textarea usable with keyboard open
- one question visible clearly
- skip action tappable
- loading state readable
- validation message visible
- no horizontal scrolling
- no internal scores shown

## References

- UX-003-screen-by-screen-specification.md
- UX-004-component-library.md
- UX-005-design-system.md
