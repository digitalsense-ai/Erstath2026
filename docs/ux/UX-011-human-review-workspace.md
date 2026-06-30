# UX-011 - Human Review Workspace

Version: 1.0
Status: Active Draft
Scope: Human review and staff decision support UX

## Purpose

This document defines the human review workspace for ErstatningsHjaelp.

The workspace should help staff review AI-supported screening results safely, quickly and consistently.

## Core Principle

AI can support screening, but staff must be able to understand, override and document decisions.

The workspace should never make AI output feel like a final legal or medical decision.

## Human Review Goals

The reviewer should be able to answer:

```text
Why is this case here?
What happened?
What facts are known?
What facts are missing?
What did AI suggest?
What should we do next?
What needs to be documented?
```

## Workspace Entry Points

Human review can be opened from:

```text
Dashboard review card
Human review queue
Lead detail page
Kanban card
Notification
Search result
```

## Review Queue

The review queue should show cases needing attention.

Recommended fields:

```text
created time
lead summary
case type
review priority
review reason
confidence band
missing information count
document status
assigned reviewer
```

Filters:

```text
priority
case type
reason code
confidence band
document status
assigned reviewer
created date
```

## Review Priority

Allowed priority values:

```text
low
medium
high
urgent
```

Priority should be visible to staff but not to the user.

High or urgent cases should be visually distinct, but not rely on color alone.

## Review Workspace Layout

Recommended desktop layout:

```text
Top: lead header and actions
Left: conversation and timeline
Center: facts, missing information, documents
Right: AI recommendation and review decision
```

Recommended mobile/tablet fallback:

```text
Header
AI recommendation
Review actions
Facts
Missing information
Conversation
Timeline
Documents
```

## Lead Header

Should display:

```text
lead status
case type
review priority
confidence band
next recommended action
created time
assigned reviewer
```

Actions:

```text
assign to me
change status
add note
request information
request documents
```

## AI Recommendation Panel

Shows the AI-supported recommendation.

Content:

```text
routing target
short internal summary
main reason codes
confidence band
missing information
suggested next action
```

Rules:

- clearly label as suggestion
- show reason codes only to staff
- show uncertainty when relevant
- do not hide missing facts

## Known Facts Panel

Shows extracted facts.

Each fact should show:

```text
fact label
value
source
status
confidence
last updated
```

Fact statuses:

```text
unconfirmed
user_confirmed
document_supported
staff_confirmed
conflicting
```

## Missing Information Panel

Shows missing information sorted by priority.

Each item should show:

```text
missing field
priority
why it matters
suggested question
recommended action
```

Actions:

```text
ask user
mark not needed
add manually
```

## Document Review Panel

First slice can be placeholder.

Later should show:

```text
document type
filename
status
related facts
review notes
uploaded date
reviewed by
```

Statuses:

```text
not_requested
requested
received
reviewed
missing
not_relevant
```

## Conversation Panel

Shows the user conversation in chronological order.

Each item should clearly show:

```text
actor
message
created time
linked extracted facts if relevant
```

## Timeline Panel

Shows system and staff events:

```text
conversation created
AI evaluated
question asked
user answered
route changed
review required
staff note added
status changed
document requested
```

## Review Decision Card

The decision card is the main action area.

Decision options:

```text
approve AI route
change route
request more information
request documents
mark guide-away
mark ready for next step
close lead
```

Each decision should support an internal note.

Major decisions should require confirmation.

## Review Notes

Review notes should support:

```text
internal note
visible to user later
review reason
next action note
```

First slice only needs internal note.

## Staff Override

When staff changes AI recommendation, the system must log:

```text
old route
new route
reviewer
timestamp
note
reason
```

## Human Review Acceptance Criteria

The workspace is ready when staff can:

- see why review is required
- understand the case in under one minute
- see AI recommendation and reason codes
- inspect known and missing facts
- see conversation history
- choose a review decision
- add a note
- change route with audit trail

## First Build Scope

When implementation starts, build:

```text
review queue
lead header
AI recommendation panel
known facts panel
missing information panel
conversation panel
review decision card
```

Documents can be placeholder until upload flow exists.

## References

- UX-010-caseworker-crm-ux.md
- UX-004-component-library.md
- docs/rulebook/RULEBOOK-110-human-review-rules.md
- docs/contracts/CONTRACT-007-human-review-contract.md
- docs/ai-case-brain/BRAIN-018-brain-output-model.md
