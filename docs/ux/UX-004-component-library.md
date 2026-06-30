# UX-004 - Component Library

Version: 1.0
Status: Active Draft
Scope: Frontend component planning

## Purpose

This document defines the first reusable UI components for ErstatningsHjaelp.

The component library should help frontend implementation stay consistent across customer intake, CRM and human review screens.

## Component Principles

Components should be:

- reusable
- accessible
- mobile-first
- simple to test
- connected to known states
- not dependent on real user data in examples

## Customer Intake Components

## Component: ConversationShell

Purpose:

Provides the page layout for the customer conversation.

Contains:

- header
- content area
- progress area
- action area

Used on:

- welcome
- first message
- smart question
- next step

## Component: IntroCard

Purpose:

Introduces the intake experience.

Content:

- headline
- short body text
- trust note
- primary CTA

## Component: TextAreaInput

Purpose:

Allows the user to write their first message or answer a question.

Requirements:

- mobile-friendly height
- clear placeholder
- character support for Danish
- validation message slot
- optional helper text

## Component: HelperExamples

Purpose:

Shows short examples to help the user get started.

Example items:

```text
Min diagnose blev stillet for sent.
Jeg fik en skade efter en operation.
Der blev ikke fulgt op på en scanning.
```

## Component: AIQuestionCard

Purpose:

Displays one AI-selected smart question.

Contains:

- acknowledgement text
- question text
- optional explanation
- answer input
- primary action
- skip action

Rules:

- must not show multiple primary questions
- must not expose reason codes to user

## Component: ThinkingIndicator

Purpose:

Shows that the system is processing.

Allowed text:

```text
Vi gennemgår din beskrivelse...
Vi finder det vigtigste næste spørgsmål...
```

Avoid:

```text
AI vurderer om du har en sag
AI beregner din erstatning
```

## Component: ProgressHint

Purpose:

Shows lightweight progress without creating pressure.

Examples:

```text
Spørgsmål 1
Vi spørger kun om én ting ad gangen
Du kan svare cirka, hvis du ikke kender datoen
```

## Component: GuideAwayCard

Purpose:

Shows respectful guide-away message.

Contains:

- non-final explanation
- option to add more information
- optional exit action

## Component: HumanReviewCard

Purpose:

Shows that a case should be reviewed manually.

Contains:

- calm confirmation
- next-step explanation
- no internal priority

## Shared Components

## Component: PrimaryButton

Purpose:

Main action on a screen.

Rules:

- one primary button per screen area
- label should be action-oriented
- loading state required
- disabled state required

## Component: SecondaryButton

Purpose:

Secondary or lower-priority action.

Examples:

```text
Jeg ved det ikke
Tilføj flere oplysninger
Afslut for nu
```

## Component: InlineValidationMessage

Purpose:

Shows validation errors close to the field.

Tone:

- helpful
- non-blaming
- specific

## Component: ConfirmationToast

Purpose:

Briefly confirms that an action succeeded.

Example:

```text
Tak, vi har gemt dit svar.
```

## Component: StatusBadge

Purpose:

Shows internal or staff-facing statuses.

Examples:

```text
New
Needs review
Waiting for documents
Guide-away
```

Do not use internal status badges in the public conversation unless simplified.

## Caseworker Components

## Component: LeadCard

Purpose:

Shows a lead summary in list or kanban view.

Contains:

- lead title or summary
- status
- case type
- review priority
- created time
- missing information count

## Component: LeadDetailHeader

Purpose:

Top area on lead detail page.

Contains:

- lead status
- primary case type
- review priority
- next recommended action

## Component: FactCard

Purpose:

Shows one extracted fact.

Contains:

- fact key
- value
- confidence
- confirmation status
- source

## Component: MissingInformationList

Purpose:

Shows missing information sorted by priority.

Contains:

- missing field
- priority
- reason code
- recommended question if relevant

## Component: AISummaryPanel

Purpose:

Shows internal AI summary for staff.

Contains:

- internal summary
- user-safe summary
- reason codes
- confidence

## Component: ReasonCodeChip

Purpose:

Displays a reason code in staff UI.

Rules:

- staff-facing only
- should have tooltip or explanation later

## Component: DocumentCard

Purpose:

Shows document status and metadata.

First slice:

- may be placeholder only

Later:

- file name
- type
- upload date
- status
- related facts

## Component: TimelineItem

Purpose:

Shows events in chronological order.

Examples:

- user message
- AI question
- user answer
- route changed
- human review note

## Component: ReviewDecisionCard

Purpose:

Supports human review decisions.

Actions:

- approve route
- change route
- request more information
- add note

## First Slice Component Scope

Build only these for the first customer slice:

```text
ConversationShell
IntroCard
TextAreaInput
HelperExamples
ThinkingIndicator
AIQuestionCard
PrimaryButton
SecondaryButton
InlineValidationMessage
ConfirmationToast
```

## Component Test Notes

Each component should have states for:

```text
default
loading
disabled
error
empty
success
```

## References

- UX-002-conversation-flow.md
- UX-003-screen-by-screen-specification.md
- docs/ai-case-brain/BRAIN-018-brain-output-model.md
