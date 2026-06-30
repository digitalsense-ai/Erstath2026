# UX-012 - Notification and Status Patterns

Version: 1.0
Status: Active Draft
Scope: Notifications, statuses and user/staff feedback patterns

## Purpose

This document defines notification and status patterns for ErstatningsHjaelp.

The goal is to make system feedback predictable for both users and staff.

## Core Principle

Every important state should be understandable without exposing internal logic to the user.

Staff may see more detail. Users should see clear, calm next-step language.

## Notification Types

Supported notification types:

```text
success
info
warning
error
review
reminder
system
```

## Customer-Facing Notifications

Customer-facing notifications should be:

- short
- helpful
- non-technical
- respectful
- clear about next step

They should not expose:

```text
internal scores
commercial value
reason codes
provider errors
stack traces
review priority
```

## Staff-Facing Notifications

Staff notifications can include:

```text
review required
new lead
missing information
document received
status changed
AI output invalid
lead assigned
SLA risk later
```

Staff messages should still avoid raw technical errors unless shown in a developer/admin context.

## Toast Notifications

Use toast notifications for short, temporary feedback.

Examples:

```text
Tak, vi har gemt dit svar.
Status er opdateret.
Noten er gemt.
```

Toast rules:

- should not contain long explanations
- should not be the only place important information appears
- should be dismissible or disappear after a short time

## Inline Messages

Use inline messages for field validation or contextual guidance.

Examples:

```text
Skriv kort, hvad sagen handler om, før du fortsætter.
Du kan svare cirka, hvis du ikke kender datoen.
```

## Banner Messages

Use banners for page-level state.

Examples:

```text
Der er en forbindelsesfejl. Prøv igen om lidt.
Denne sag kræver manuel gennemgang.
Dokumentupload er ikke aktivt endnu.
```

## Modal Confirmations

Use modals only for important decisions.

Examples:

```text
Guide-away
Close lead
Change route
Delete or remove later
```

Modal rules:

- clear title
- short explanation
- one primary action
- one cancel action
- keyboard accessible

## Customer Statuses

Customer-facing statuses should be simple.

Allowed customer labels:

```text
Vi gennemgår oplysningerne
Vi mangler et svar
Sendt til gennemgang
Afsluttet for nu
Næste trin kommer senere
```

Avoid exposing internal statuses like:

```text
low_confidence
commercial_value_high
route_human_review_low_confidence
```

## Staff Statuses

Staff-facing lead statuses:

```text
new
needs_information
needs_review
waiting_for_documents
ready_for_next_step
guide_away_suggested
guide_away_sent
closed
```

## Status Transition Rules

Recommended transitions:

```text
new -> needs_information
new -> needs_review
new -> guide_away_suggested
needs_information -> needs_review
needs_information -> waiting_for_documents
needs_review -> ready_for_next_step
needs_review -> guide_away_suggested
waiting_for_documents -> needs_review
ready_for_next_step -> closed
guide_away_suggested -> guide_away_sent
guide_away_sent -> closed
```

All staff status changes must be logged.

## Review Notifications

When review is required, staff should see:

```text
review priority
reason summary
case type
created time
next recommended action
```

User should only see:

```text
Tak. Det du har skrevet, bør gennemgås nærmere.
```

## Error Notifications

Customer error pattern:

```text
Noget gik galt. Prøv igen om lidt.
```

Staff error pattern:

```text
Handlingen kunne ikke gennemføres. Prøv igen, eller kontakt admin hvis problemet fortsætter.
```

Developer/admin detail can be logged, not shown as default UI.

## Reminder Patterns

Later versions may include reminders for:

```text
missing user answer
missing documents
staff review overdue
lead inactive
```

Reminder text should be polite and short.

## First Slice Required Patterns

The first customer slice needs:

```text
message sent success
answer saved success
AI thinking state
empty input validation
network error
server error
human review confirmation
guide-away message if route appears
```

## References

- UX-007-loading-empty-error-states.md
- UX-009-microcopy-and-tone-of-voice.md
- UX-010-caseworker-crm-ux.md
- docs/rulebook/RULEBOOK-100-routing-rules.md
