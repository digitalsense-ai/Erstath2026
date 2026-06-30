# UX-003 - Screen-by-Screen Specification

Version: 1.0
Status: Active Draft
Scope: Customer intake screens

## Purpose

This document defines the first customer-facing screens for the ErstatningsHjaelp intake experience.

The goal is to give frontend developers a clear screen-by-screen build guide.

## Screen List

First MVP screens:

```text
Screen 1 - Welcome
Screen 2 - First Message
Screen 3 - AI Thinking
Screen 4 - Smart Question
Screen 5 - Answer Submitted
Screen 6 - Next Step
Screen 7 - Guide-Away
Screen 8 - Human Review Confirmation
```

## Screen 1 - Welcome

### Purpose

Introduce the service and invite the user to start.

### Main Content

Headline:

```text
Fortæl os kort, hvad der skete
```

Body:

```text
Du kan beskrive sagen med dine egne ord. Vi hjælper med at finde de vigtigste oplysninger og spørger kun om én ting ad gangen.
```

Support text:

```text
Du behøver ikke have dokumenter klar for at starte.
```

Primary CTA:

```text
Start vurdering
```

Secondary link:

```text
Sådan fungerer det
```

### Components

- PageHeader
- IntroCard
- PrimaryButton
- SecondaryLink
- TrustNote

### Mobile Notes

The CTA should be visible without scrolling on common mobile sizes.

## Screen 2 - First Message

### Purpose

Let the user describe the situation freely.

### Main Content

Prompt:

```text
Hvad skete der?
```

Helper text:

```text
Skriv kort med dine egne ord. Du kan fx nævne behandling, diagnose, operation, medicin eller opfølgning.
```

Textarea placeholder:

```text
Eksempel: Min mor fik stillet sin diagnose for sent, og sygdommen blev værre...
```

Primary CTA:

```text
Send beskrivelse
```

Secondary action:

```text
Ryd tekst
```

### Validation

If empty:

```text
Skriv kort, hvad sagen handler om, før du fortsætter.
```

If very short:

```text
Du må gerne skrive lidt mere, hvis du kan. Det hjælper os med at stille det rigtige næste spørgsmål.
```

### Components

- ConversationShell
- TextAreaInput
- HelperExamples
- PrimaryButton
- InlineValidationMessage

## Screen 3 - AI Thinking

### Purpose

Show that the system is processing the message.

### Main Content

Text:

```text
Vi gennemgår din beskrivelse og finder det vigtigste næste spørgsmål.
```

Optional secondary text:

```text
Det tager normalt kun et øjeblik.
```

### Components

- LoadingCard
- ThinkingIndicator
- SkeletonMessage

### Rules

Do not show:

- internal scores
- reason codes
- technical logs
- final conclusions

## Screen 4 - Smart Question

### Purpose

Ask exactly one next question.

### Layout

Show:

- short acknowledgement
- one question
- answer input
- submit button
- optional skip button

### Example Content

Acknowledgement:

```text
Tak. Vi mangler én oplysning for at forstå sagen bedre.
```

Question:

```text
Hvornår skete det cirka?
```

Placeholder:

```text
Fx 2021, sidste sommer eller for cirka 3 år siden
```

Primary CTA:

```text
Svar
```

Skip action:

```text
Jeg ved det ikke
```

### Components

- AIQuestionCard
- AnswerInput
- PrimaryButton
- SecondaryButton
- ProgressHint

### Rule

Only one question should be visible as the primary task.

## Screen 5 - Answer Submitted

### Purpose

Confirm that the answer has been received and prepare next evaluation.

### Main Content

Short state:

```text
Tak, vi har gemt dit svar.
```

Then transition to AI Thinking state.

### Components

- ConfirmationToast
- LoadingCard

### Notes

This screen may be a short transient state rather than a separate route.

## Screen 6 - Next Step

### Purpose

Show the next action after enough information has been collected or the route changes.

Possible variants:

```text
continue_conversation
request_documents_later
human_review
onboarding_later
guide_away
```

Each variant should have its own copy and CTA.

## Screen 7 - Guide-Away

### Purpose

Respectfully explain that the current information does not support continuing in the main flow.

### Main Content

Text:

```text
Ud fra de oplysninger, du har givet indtil nu, kan vi ikke se nok grundlag til at fortsætte i denne vurdering.
```

Support text:

```text
Hvis der mangler noget vigtigt, kan du tilføje flere oplysninger.
```

Primary CTA:

```text
Tilføj flere oplysninger
```

Secondary CTA:

```text
Afslut for nu
```

### Rules

Do not say:

- you have no case
- compensation is impossible
- no one made a mistake
- the provider is not responsible

## Screen 8 - Human Review Confirmation

### Purpose

Tell the user that the matter should be reviewed further.

### Main Content

Text:

```text
Tak. Det du har skrevet, bør gennemgås nærmere.
```

Support text:

```text
Vi sender oplysningerne videre til manuel vurdering. Du kan blive bedt om flere oplysninger senere.
```

Primary CTA:

```text
Forstået
```

### Rules

Do not expose:

- internal priority
- internal value score
- detailed reason codes
- legal conclusion

## Shared Screen Requirements

All screens should:

- work on mobile first
- use plain Danish
- have one primary action
- preserve user trust
- avoid unnecessary legal language
- avoid internal AI terms unless explained

## First Slice Build Scope

For the first vertical slice, build only:

```text
Welcome
First Message
AI Thinking
Smart Question
Answer Submitted
```

Guide-away and human review screens can be stubbed if routing already returns those states.

## References

- UX-002-conversation-flow.md
- docs/ai-case-brain/BRAIN-018-brain-output-model.md
- docs/rulebook/RULEBOOK-100-routing-rules.md
