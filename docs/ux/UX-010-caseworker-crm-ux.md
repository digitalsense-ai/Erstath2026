# UX-010 - Caseworker CRM UX

Version: 1.0
Status: Active Draft
Scope: Caseworker CRM and internal lead handling

## Purpose

This document defines the caseworker-facing CRM experience for ErstatningsHjaelp.

The CRM should help staff understand, prioritise and act on leads without reading through unstructured conversation history first.

## CRM UX Goals

The CRM should make it easy to see:

- what the case is about
- what AI found
- what is missing
- why review is needed
- what next action is recommended
- what has happened so far

## Main CRM Views

```text
Dashboard
Lead list
Kanban board
Lead detail
Human review queue
Document overview
Activity timeline
```

## Dashboard

Purpose:

Give staff an operational overview.

Key cards:

```text
New leads
Needs review
High priority review
Waiting for documents
Guide-away suggested
Completed today
```

Useful metrics:

```text
new leads today
average time to first review
human review volume
guide-away percentage
missing information count
```

## Lead List

Purpose:

Allow staff to scan and filter leads quickly.

Columns or card fields:

```text
created time
lead summary
case type
status
review priority
confidence
missing information count
next recommended action
```

Filters:

```text
status
case type
review priority
confidence band
missing information
document status
created date
assigned caseworker
```

## Kanban Board

Suggested lanes:

```text
New
Needs information
Needs review
Waiting for documents
Ready for next step
Guide-away
Closed
```

Rules:

- cards should show only essential summary
- high-priority review should be visually clear
- drag-and-drop can come later
- status change must be logged

## Lead Detail Page

Purpose:

Show everything needed to understand and act on one lead.

Recommended layout on desktop:

```text
Header
Left column: conversation and timeline
Middle column: facts, missing information, documents
Right column: AI summary, review, actions
```

On tablet/mobile:

```text
Header
Summary
Actions
Facts
Conversation
Timeline
```

## Lead Detail Header

Should show:

```text
lead status
primary case type
review priority
confidence band
next recommended action
assigned user
created date
```

Primary actions:

```text
Start review
Request information
Request documents
Change status
Add note
```

## AI Summary Panel

Shows staff-facing AI summary.

Content:

```text
short internal summary
case type
main consequence
causation signal
information quality
confidence
reason codes
```

Rules:

- clearly label facts as unconfirmed
- do not present AI as final decision
- show reason codes in staff-friendly way

## Facts Panel

Shows extracted facts.

Each fact should show:

```text
fact key
value
confirmation status
confidence
source
last updated
```

Confirmation statuses:

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
field
priority
why it matters
suggested question
status
```

Actions:

```text
ask user
mark not needed
add manually
```

## Human Review Panel

Shows:

```text
review required yes/no
review priority
review reasons
recommended action
review notes
staff decision
```

Actions:

```text
approve AI route
change route
request more information
mark guide-away
mark ready for next step
```

Every decision should be logged.

## Documents Panel

First slice:

Can be placeholder.

Later should show:

```text
document type
filename
upload status
related facts
review status
notes
```

Document statuses:

```text
not_requested
requested
received
reviewed
missing
not_relevant
```

## Conversation Timeline

Shows chronological events:

```text
user message
AI question
user answer
AI route change
staff note
status change
document request
human review decision
```

Each timeline item should show:

```text
time
actor
event type
summary
```

## Reason Codes UX

Reason codes are staff-facing only.

They should appear as chips with optional explanation.

Example:

```text
event_date_missing
possible_diagnosis_delay
serious_consequence_with_missing_facts
```

Later, add tooltips or a reason-code dictionary.

## Status Change UX

When staff changes status:

- show current status
- require confirmation for major changes
- allow optional note
- log old and new status

Major changes:

```text
guide-away
close
ready for next step
manual override
```

## Empty States

No leads:

```text
Der er ingen leads i denne visning endnu.
```

No facts:

```text
Der er endnu ikke udtrukket fakta.
```

No documents:

```text
Der er endnu ikke tilføjet dokumenter.
```

## First CRM Slice Scope

Not required before the first customer conversation slice.

When CRM begins, build first:

```text
Lead list
Lead detail header
AI summary panel
Facts panel
Missing information panel
Conversation timeline
```

## CRM Acceptance Criteria

CRM UX is ready when staff can:

- open a lead
- understand the case in under one minute
- see AI summary and reason codes
- see missing information
- see unconfirmed facts
- change status with audit trail
- add a review note

## References

- UX-004-component-library.md
- UX-005-design-system.md
- UX-011-human-review-workspace.md
- docs/ai-case-brain/BRAIN-018-brain-output-model.md
- docs/contracts/CONTRACT-006-crm-handover-contract.md
- docs/contracts/CONTRACT-007-human-review-contract.md
