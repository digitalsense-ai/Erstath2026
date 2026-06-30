# FE-008 - Smart Question State

Version: 1.0
Status: Active Draft
Scope: One-question-at-a-time frontend state

## Purpose

This document defines the frontend state where AI asks the user one smart question after the first message.

The goal is to make the conversation feel simple, focused and safe.

## Experience Goal

The user should feel:

```text
This is manageable.
I only need to answer one thing now.
It is okay if I do not know the exact answer.
```

## Core Rule

Only one primary question should be shown at a time.

Do not show a long form, checklist or multiple required fields in this state.

## Smart Question Structure

Each question card should contain:

```text
short acknowledgement or context
one question
answer input
optional helper text
primary continue button
secondary unsure/skip option when relevant
```

## Example Layout - Mobile

```text
--------------------------------
AI
Tak. Det hjælper mig med at forstå forløbet.

Hvornår blev operationen udført cirka?

[ Skriv fx 2022, sidste sommer eller præcis dato ]

[ Fortsæt ]

[ Jeg ved det ikke ]
--------------------------------
```

## Example Layout - Desktop

```text
Conversation column:

User message
AI acknowledgement
Question card
Answer input

Side card:
Du svarer på ét spørgsmål ad gangen.
Du kan altid svare cirka.
```

## Question Types

Allowed first prototype question types:

```text
free_text
approximate_date
short_text
yes_no_unknown
```

Later:

```text
document_status
provider_selector
multi_choice_with_other
file_request_later
```

## Approximate Date Input

Accept answers like:

```text
2021
foråret 2022
sidste sommer
for cirka 3 år siden
jeg ved det ikke
```

Do not require exact date during first screening.

## Unknown Option

When the user may not know the answer, show:

```text
Jeg ved det ikke
```

or:

```text
Jeg er ikke sikker
```

Behavior:

```text
submit answer as unknown
continue to next useful question or next step
```

## Validation

Validation should be soft.

Good copy:

```text
Skriv bare det, du ved - det behøver ikke være præcist.
```

Avoid:

```text
Invalid date.
Required answer missing.
```

## Progress Hint

Use gentle progress language:

```text
Vi tager ét spørgsmål ad gangen.
```

Avoid fake precision:

```text
37% complete
```

unless backed by real logic later.

## Answer Submit Behavior

On submit:

```text
save answer
show short saving state
run fake or real evaluation
show next question or next step
```

## Loading Copy

```text
Tak. Jeg ser på dit svar og finder næste bedste skridt.
```

## Error State

```text
Noget gik galt. Dit svar er ikke forsvundet. Prøv igen om lidt.
```

## Internal Data Hidden

Do not show:

```text
reason_codes
confidence
case_type
commercial_value
review_priority
```

## Acceptance Criteria

Smart question state is accepted when:

```text
only one question is visible
answering feels easy
unknown option exists when useful
approximate answers are accepted
frontend can render different question types
state can continue to next question or result
```

## References

- FE-007-ai-response-state.md
- docs/ux/UX-002-conversation-flow.md
- docs/ai-case-brain/BRAIN-013-smart-question-rules.md
- docs/rulebook/RULEBOOK-090-smart-question-rules.md
