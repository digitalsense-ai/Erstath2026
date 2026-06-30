# UX-014 - Usability Test Checklist

Version: 1.0
Status: Active Draft
Scope: UX validation and usability testing

## Purpose

This document defines the usability test checklist for ErstatningsHjaelp.

The checklist should be used before accepting customer intake, CRM and human review UX.

## Core Test Goal

The user should understand what to do without needing instructions from a developer, lawyer or caseworker.

## Customer Intake Test Goals

The customer should be able to:

```text
understand what the service does
start without documents
write the first message
understand the AI thinking state
answer one smart question
skip when unsure
understand the next step
avoid feeling rejected too early
```

## Caseworker Test Goals

The caseworker should be able to:

```text
find a lead
understand the case quickly
see AI summary
see known facts
see missing information
see reason codes
understand why review is required
change route or status
add a review note
```

## Customer Intake Checklist

## Welcome Screen

Pass criteria:

- headline is clear
- user understands they can write freely
- user understands documents are not required to start
- primary CTA is visible on mobile
- text is short enough for mobile

Fail signals:

- user asks what to do first
- user thinks documents are required before starting
- user thinks this is a final legal decision

## First Message Screen

Pass criteria:

- textarea is easy to find
- placeholder helps but is not required to understand the task
- examples are helpful
- submit button is clear
- validation message is understandable

Fail signals:

- user writes only keywords because prompt feels unclear
- user looks for a form instead of writing freely
- user cannot find the submit action

## AI Thinking State

Pass criteria:

- user understands the system is processing
- wording does not imply final decision
- loading state feels calm

Fail signals:

- user thinks AI has made a final decision
- user is confused by technical wording
- loading appears broken

## Smart Question Screen

Pass criteria:

- only one primary question is shown
- question is clear
- answer field is easy to use
- skip option is visible but secondary
- user understands approximate answers are allowed

Fail signals:

- user sees several questions at once
- user feels forced to know exact date
- user cannot find skip option

## Guide-Away Screen

Pass criteria:

- wording is respectful
- wording is non-final
- user can add more information
- no internal score is shown

Fail signals:

- user feels rejected without explanation
- wording says or implies no case exists
- user cannot correct or add information

## Human Review Confirmation

Pass criteria:

- user understands the case will be reviewed
- user understands they may be contacted or asked later
- no internal priority is shown

Fail signals:

- user thinks compensation is guaranteed
- user thinks a final decision has been made
- user sees internal AI terms

## Mobile Checklist

Pass criteria:

```text
no horizontal scrolling
primary CTA visible
touch targets are large enough
keyboard does not hide active input
validation is visible near field
question card fits naturally
loading state readable
```

## Accessibility Checklist

Pass criteria:

```text
all inputs have visible labels
keyboard navigation works
focus states are visible
errors are close to fields
status colors include text
icons have labels when meaningful
copy is plain Danish
```

## CRM Usability Checklist

## Dashboard

Pass criteria:

- staff can see what needs attention
- review volume is visible
- high-priority cases are not hidden
- cards are understandable

## Lead List

Pass criteria:

- staff can scan leads quickly
- filters are useful
- status and review priority are clear
- missing information count is visible

## Lead Detail

Pass criteria:

- staff can understand the case in under one minute
- AI summary is easy to find
- facts are clearly marked as unconfirmed or confirmed
- missing information is visible
- next recommended action is clear

## Human Review Workspace

Pass criteria:

- reviewer understands why review is required
- reason codes are visible to staff
- decision actions are clear
- staff override can be documented
- status change is logged

## Prototype Test Scenarios

Use at least these scenarios:

```text
Scenario A - diagnosis delay
Scenario B - operation injury
Scenario C - service complaint without injury
Scenario D - vague first message
Scenario E - user does not know date
Scenario F - serious consequence but unclear causation
```

## Test Questions For Participants

Ask:

```text
What do you think you should do first?
What do you think happens after you press send?
Did any wording feel unclear or too legal?
Did you understand why the question was asked?
Did you feel you could answer approximately?
What do you expect happens next?
```

For staff:

```text
What is this case about?
Why is it in review?
What information is missing?
What would you do next?
Do you trust the layout enough to act on it?
```

## Acceptance Threshold

Before UX is accepted:

```text
80% of tested users should understand first action
80% should understand the smart question
90% should understand that no final decision is made immediately
caseworkers should understand a lead in under one minute
no critical accessibility blocker remains
```

## References

- UX-002-conversation-flow.md
- UX-003-screen-by-screen-specification.md
- UX-008-accessibility-guidelines.md
- UX-013-prototype-flow.md
