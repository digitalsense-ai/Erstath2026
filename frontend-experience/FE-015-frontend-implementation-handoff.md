# FE-015 - Frontend Implementation Handoff

Version: 1.0
Status: Active Draft
Scope: Frontend prototype and first implementation handoff

## Purpose

This document gives a practical handoff for building the first ErstatningsHjaelp frontend prototype and first intake implementation.

It bridges the Frontend Experience documents, UX Pack and future Laravel API.

## Build Goal

Build a working clickable prototype that demonstrates:

```text
mobile landing
desktop landing
AI typing welcome
first message input
AI thinking state
one smart question
answer submission
result card
```

No backend is required for the first prototype.

## Recommended Build Mode

Start with:

```text
static frontend prototype
local component state
fake JSON data
no authentication
no real links
no real patient data
```

Then replace fake state with API calls when Laravel endpoint is ready.

## First Routes

Suggested prototype routes:

```text
/
/intake
/intake/prototype
```

Optional dev route:

```text
/dev/prototype-scenarios
```

## First Components To Build

Use the build order from FE-012:

```text
AppShell
HeaderMinimal
PrimaryButton
SecondaryButton
AiTypingWelcome
FirstMessageInput
LandingHero
ThinkingState
ConversationMessageCard
SmartQuestionCard
QuestionAnswerInput
ResultCard
PrototypeScenarioSwitcher
```

## First Prototype Flow

```text
LandingHero
↓
FirstMessageInput
↓
ThinkingState
↓
SmartQuestionCard
↓
QuestionAnswerInput
↓
ResultCard
```

## Fake Data Source

Use:

```text
frontend-experience/FE-011-fake-json-prototype-data.md
```

Create a local file later such as:

```text
resources/js/prototype/fakeConversationData.ts
```

or:

```text
resources/js/prototype/fakeConversationData.json
```

## State Machine

Minimum state machine:

```text
landing_empty
landing_typing_intro
first_message_typing
submitting_first_message
showing_question
answering_question
submitting_answer
showing_result
error
```

## API Replacement Later

Prototype fake submit:

```text
local state -> fake JSON response
```

Real later:

```text
POST /api/v1/conversations
POST /api/v1/conversations/{id}/messages
```

## Response Mapping

```text
state: showing_question -> SmartQuestionCard
state: result -> ResultCard
result.type: human_review -> human review result card
result.type: guide_away_carefully -> guide-away result card
```

## Data Safety Rules

The prototype must not include:

```text
real names
real CPR numbers
real hospitals in identifiable case context
real journal text
real screenshots with patient data
secrets or API keys
```

Use only fictional examples.

## Frontend Must Not Show

Do not show to customer:

```text
raw reason codes
internal confidence score
commercial value
review priority
case weakness labels
```

## User-Facing Copy Source

Use copy from:

```text
frontend-experience docs
UX-009-microcopy-and-tone-of-voice.md
```

Do not invent harsh validation or final legal wording.

## Styling Direction

Use a calm, trustworthy style.

Visual inspiration can combine:

```text
light background
soft cards
clear CTA
blue/green trust palette
large readable type
human spacing
```

Exact colors can be refined later.

## Mobile Requirements

Prototype must be tested on mobile widths:

```text
360 px
390 px
430 px
```

Must pass:

```text
no horizontal scroll
input usable with keyboard
CTA tappable
smart question readable
result card readable
```

## Desktop Requirements

Prototype must support:

```text
1024 px+
1280 px+
```

Must pass:

```text
free-text input central
trust card not dominant
CTA above fold
conversation transition clear
```

## Accessibility Requirements

Minimum:

```text
visible labels
keyboard focus
reduced motion support for typing
button states clear
errors announced or visible
no color-only status
```

## Definition Of Done - Prototype

Prototype is done when:

```text
user can open landing
AI welcome types
user can write message
CTA activates
fake submit shows thinking
one smart question appears
user can answer
result card appears
three demo scenarios work
mobile and desktop are usable
no real data exists
```

## Definition Of Done - API Ready Frontend

Frontend is API-ready when:

```text
fake JSON mapping matches expected backend shape closely
component state can be replaced by API response
error states exist
loading states exist
result types are mapped
internal fields are hidden
```

## Do Not Build Yet

Do not build yet:

```text
login
CPR
MitID
file upload
real AI provider call
full CRM
payment
advanced dashboard
```

## Recommended Next Implementation Task

First concrete frontend task:

```text
Build LandingHero with AiTypingWelcome and FirstMessageInput using fake local state.
```

Second task:

```text
Build prototype flow using operation_injury_demo fake data.
```

Third task:

```text
Add diagnosis_delay_demo and complaint_without_injury_demo scenario switcher.
```

## References

- FE-000-experience-principles.md
- FE-010-prototype-flow.md
- FE-011-fake-json-prototype-data.md
- FE-012-component-build-plan.md
- FE-013-mobile-wireframe-spec.md
- FE-014-desktop-wireframe-spec.md
- docs/ux/UX-015-handoff-to-frontend.md
