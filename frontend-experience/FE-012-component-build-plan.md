# FE-012 - Component Build Plan

Version: 1.0
Status: Active Draft
Scope: Frontend component build order

## Purpose

This document defines the component build plan for the first ErstatningsHjaelp frontend prototype.

The goal is to let a frontend developer build the first clickable experience without waiting for backend or real AI.

## Build Principle

Build reusable components first, then compose screens from them.

Do not hardcode the full flow directly into one page.

## First Prototype Component List

Required components:

```text
AppShell
HeaderMinimal
AiTypingWelcome
LandingHero
FirstMessageInput
PrimaryButton
SecondaryButton
TrustHintList
ThinkingState
ConversationMessageCard
SmartQuestionCard
QuestionAnswerInput
ResultCard
PrototypeScenarioSwitcher
```

## Build Order

Recommended order:

```text
1. AppShell
2. HeaderMinimal
3. PrimaryButton and SecondaryButton
4. AiTypingWelcome
5. FirstMessageInput
6. LandingHero
7. ThinkingState
8. ConversationMessageCard
9. SmartQuestionCard
10. QuestionAnswerInput
11. ResultCard
12. PrototypeScenarioSwitcher
```

## Component - AppShell

Purpose:

```text
Provide page layout, spacing, background, mobile/desktop responsive wrapper.
```

Props:

```text
children
variant: landing | conversation | result
```

## Component - HeaderMinimal

Purpose:

```text
Show logo and minimal navigation.
```

First prototype content:

```text
ErstatningsHjaelp
```

Optional later:

```text
Sådan virker det
FAQ
Kontakt
```

## Component - AiTypingWelcome

Purpose:

```text
Signature animated AI welcome and example rotation.
```

Source:

```text
FE-005-ai-typing-component.md
```

Must support:

```text
intro messages
example messages
stop on user input
reduced motion
```

## Component - LandingHero

Purpose:

```text
Combine headline, AI typing, first message input and CTA.
```

Should render differently on mobile and desktop but keep same content model.

## Component - FirstMessageInput

Purpose:

```text
Capture the user's first free-text description.
```

Must support:

```text
multi-line input
soft validation
example placeholders
active/inactive CTA state
error preservation
```

## Component - ThinkingState

Purpose:

```text
Show calm processing while fake or real AI prepares next question.
```

Copy:

```text
Jeg gennemgår din beskrivelse og finder det vigtigste næste spørgsmål.
```

## Component - ConversationMessageCard

Purpose:

```text
Show user and AI messages in the conversation flow.
```

Variants:

```text
user
assistant
system
```

## Component - SmartQuestionCard

Purpose:

```text
Render one question at a time.
```

Must support question types:

```text
free_text
approximate_date
short_text
yes_no_unknown
```

## Component - QuestionAnswerInput

Purpose:

```text
Render answer input based on question type.
```

Must support:

```text
text input
textarea
unknown button
soft validation
```

## Component - ResultCard

Purpose:

```text
Show result or next-step state without final legal conclusion.
```

Must support result types:

```text
human_review
guide_away_carefully
continue_conversation
request_documents_later
create_case_later
```

## Component - PrototypeScenarioSwitcher

Purpose:

```text
Allow demo mode to switch between fake scenarios.
```

Only for prototype/dev mode.

Scenarios:

```text
operation injury
diagnosis delay
complaint without injury
```

## State Management

First prototype can use local state:

```text
currentScreen
currentScenario
firstMessage
currentQuestion
currentAnswer
result
isTyping
isSubmitting
error
```

No backend required.

## File Structure Suggestion

```text
resources/js/components/frontend-experience/
  AppShell.vue
  HeaderMinimal.vue
  AiTypingWelcome.vue
  LandingHero.vue
  FirstMessageInput.vue
  ThinkingState.vue
  ConversationMessageCard.vue
  SmartQuestionCard.vue
  QuestionAnswerInput.vue
  ResultCard.vue
  PrototypeScenarioSwitcher.vue
```

If not using Vue, keep the same conceptual component names.

## Acceptance Criteria

Component build plan is accepted when:

```text
landing can be built from reusable components
conversation state can reuse message/question components
prototype can run without backend
mobile and desktop use same content model
internal AI data is not shown to users
```

## References

- FE-005-ai-typing-component.md
- FE-010-prototype-flow.md
- FE-011-fake-json-prototype-data.md
- docs/ux/UX-004-component-library.md
