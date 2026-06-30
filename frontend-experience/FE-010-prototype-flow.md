# FE-010 - Prototype Flow

Version: 1.0
Status: Active Draft
Scope: Clickable frontend prototype flow without backend

## Purpose

This document defines the first clickable frontend prototype flow for ErstatningsHjaelp.

The prototype should make the product feel real without requiring a backend, real AI or real user data.

## Prototype Goal

The prototype should demonstrate:

```text
landing experience
AI typing welcome
first free-text message
AI thinking state
one smart question
user answer
result / next-step card
```

## Prototype Rule

No real links, no real patient data and no real backend are required.

All data must be fake.

## Flow Overview

```text
Screen 1 - Landing
↓
Screen 2 - User writes first message
↓
Screen 3 - AI thinking
↓
Screen 4 - AI asks one smart question
↓
Screen 5 - User answers
↓
Screen 6 - Result / next step
```

## Screen 1 - Landing

State:

```text
ai_typing_intro
empty_input
cta_disabled
```

Main content:

```text
AI welcome
large input
short reassurance
```

## Screen 2 - User Writes First Message

State:

```text
user_typing
cta_active
```

Example input:

```text
Jeg fik en operation i knæet i 2023, og siden har jeg haft smerter og svært ved at arbejde.
```

Action:

```text
click Start gratis vurdering
```

## Screen 3 - AI Thinking

State:

```text
submitting
ai_thinking
```

Copy:

```text
Tak. Jeg gennemgår din beskrivelse og finder det vigtigste næste spørgsmål.
```

Prototype timing:

```text
800-1500 ms
```

## Screen 4 - Smart Question

State:

```text
showing_question
```

Question:

```text
Hvornår blev operationen udført cirka?
```

Helper:

```text
Du kan fx skrive 2023, sidste sommer eller en præcis dato.
```

Actions:

```text
answer
I do not know
```

## Screen 5 - User Answers

Example answer:

```text
Det var i marts 2023.
```

Action:

```text
click Fortsæt
```

## Screen 6 - Result / Next Step

Prototype result:

```text
Ud fra det, du har fortalt, kan sagen være relevant at gennemgå nærmere.
En specialist bør se på oplysningerne.
```

Primary CTA:

```text
Fortsæt og opret sag
```

Secondary:

```text
Tilføj flere oplysninger
```

## Prototype Variants

The first prototype should support at least three fake paths:

```text
operation injury path
possible diagnosis delay path
service complaint without injury path
```

## Variant A - Operation Injury

Input:

```text
Jeg fik en operation i knæet i 2023, og siden har jeg haft smerter.
```

Question:

```text
Hvornår blev operationen udført cirka?
```

Result:

```text
Sagen kan være relevant at gennemgå nærmere.
```

## Variant B - Diagnosis Delay

Input:

```text
Min sygdom blev først opdaget flere måneder senere, selvom jeg havde været til læge flere gange.
```

Question:

```text
Hvornår kontaktede du første gang lægen om symptomerne?
```

Result:

```text
Tidsforløbet kan være vigtigt, og sagen bør gennemgås nærmere.
```

## Variant C - Complaint Without Injury

Input:

```text
Jeg blev behandlet dårligt i receptionen og ventede meget længe.
```

Question:

```text
Fik forløbet konkrete konsekvenser for dit helbred?
```

Result:

```text
Det lyder lige nu mest som en klage over forløbet. Hvis der også var en konkret helbredsmæssig skade, kan du tilføje det.
```

## Prototype Implementation Notes

Prototype can be implemented using:

```text
static frontend state
fake JSON file
local component state
no authentication
no API calls
```

Later, replace fake state with:

```text
POST /api/v1/conversations
POST /api/v1/conversations/{id}/messages
```

## Acceptance Criteria

Prototype flow is accepted when:

```text
user can click through landing to result
AI typing welcome works
input can be filled
one smart question appears
result state appears
mobile and desktop variants are possible
no real data is used
```

## References

- FE-002-landing-experience.md
- FE-006-first-message-state.md
- FE-007-ai-response-state.md
- FE-008-smart-question-state.md
- FE-009-result-state.md
- docs/ux/UX-013-prototype-flow.md
