# UX-000 - UX Pack Index

Version: 1.0
Status: Active Draft
Scope: Product UX and frontend handoff

## Purpose

This is the main index for the UX Pack.

The UX Pack defines the user-facing and caseworker-facing experience for ErstatningsHjaelp.

It should make the product easy to build, test and review before frontend implementation starts.

## UX Pack Goals

The UX Pack should define:

- customer journey
- conversation flow
- screen-by-screen behavior
- component library
- design system
- mobile-first guidelines
- loading, empty and error states
- accessibility rules
- tone of voice
- CRM and caseworker UX
- human review workspace
- notification and status patterns
- frontend handoff

## Reading Order

Start with:

```text
UX-001-user-journey-overview.md
UX-002-conversation-flow.md
UX-003-screen-by-screen-specification.md
```

Then use:

```text
UX-004-component-library.md
UX-005-design-system.md
UX-006-mobile-first-guidelines.md
UX-007-loading-empty-error-states.md
UX-008-accessibility-guidelines.md
UX-009-microcopy-and-tone-of-voice.md
```

Then continue with staff and operational UX:

```text
UX-010-caseworker-crm-ux.md
UX-011-human-review-workspace.md
UX-012-notification-and-status-patterns.md
```

Finally use:

```text
UX-013-prototype-flow.md
UX-014-usability-test-checklist.md
UX-015-handoff-to-frontend.md
```

## UX Principles

The experience should be:

- simple
- mobile-first
- respectful
- clear about next step
- transparent about what AI does
- careful with uncertainty
- focused on one question at a time
- accessible
- easy for a caseworker to review

## Customer UX Scope

The customer experience includes:

```text
landing into intake
welcome screen
first free-text message
AI-supported conversation
smart questions
progress indication
document request later
screening result or next step
handover or guide-away
```

## Caseworker UX Scope

The caseworker experience includes:

```text
dashboard
lead list
kanban board
lead detail
facts panel
AI summary panel
document panel
human review panel
timeline
activity log
status changes
```

## Relationship To AI Case Brain

AI Case Brain decides what the system should ask or recommend.

UX defines how that should be presented to the user and caseworker.

Use together:

```text
docs/ai-case-brain/BRAIN-000-ai-case-brain-index.md
docs/rulebook/RULEBOOK-000-index.md
docs/ux/UX-000-ux-index.md
```

## First UX Priority

The first UX priority is the customer conversation flow:

```text
welcome
first message
AI thinking state
one smart question
answer submitted
next step shown
```

## Implementation Rule

Do not let the frontend invent UX behavior that conflicts with AI Case Brain, JSON contracts or business test cases.

UX should be implemented through reusable components and states.

## Related Documents

```text
docs/IMPLEMENTATION-MASTER-INDEX.md
docs/ai-case-brain/BRAIN-013-smart-question-rules.md
docs/ai-case-brain/BRAIN-018-brain-output-model.md
docs/rulebook/RULEBOOK-090-smart-question-rules.md
docs/mvp-start/MVP-START-003-first-feature-test-plan.md
```
