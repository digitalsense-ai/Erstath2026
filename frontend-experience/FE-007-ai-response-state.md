# FE-007 - AI Response State

Version: 1.0
Status: Active Draft
Scope: First AI acknowledgement and next question state

## Purpose

This document defines what happens after the user submits the first message.

The AI response state should confirm that the user has been heard and then ask one useful next question.

## Experience Goal

The user should feel:

```text
The system understood enough to continue.
I am not being judged yet.
I only need to answer one question now.
```

## Core Rule

AI should respond with:

```text
short acknowledgement
one next question
optional reassurance
```

Not with:

```text
score
legal conclusion
long analysis
many questions
internal labels
```

## Recommended Response Structure

```text
Tak. Det hjælper mig med at forstå forløbet.

[One next question]

Du kan svare cirka, hvis du ikke kender den præcise dato.
```

## Example - Operation

User wrote:

```text
Jeg fik en operation i knæet, og siden har jeg haft smerter.
```

AI response:

```text
Tak. Det lyder som et forløb, hvor tidspunktet kan være vigtigt.

Hvornår blev operationen udført cirka?
```

## Example - Diagnosis Delay

User wrote:

```text
Min sygdom blev først opdaget flere måneder senere.
```

AI response:

```text
Tak. Jeg vil gerne forstå tidsforløbet lidt bedre.

Hvornår kontaktede du første gang lægen om symptomerne?
```

## Example - Medication

User wrote:

```text
Jeg fik forkert medicin og blev meget syg.
```

AI response:

```text
Tak. For at forstå sagen bedre skal vi starte med medicinen.

Hvilken medicin var der tale om?
```

## Example - Vague Message

User wrote:

```text
Kan I hjælpe mig med erstatning?
```

AI response:

```text
Ja, vi kan starte helt enkelt.

Hvad handler sagen kort om?
```

## Visual Layout

Mobile:

```text
[User message card]
[AI thinking small state]
[AI response card]
[Answer input]
[Continue button]
```

Desktop:

```text
conversation column with user message and AI response
optional side card with progress/reassurance
```

## AI Thinking Transition

Before showing response:

```text
Jeg gennemgår din beskrivelse og finder det vigtigste næste spørgsmål.
```

Duration:

```text
short, typically 800-1500 ms in prototype
```

Do not fake long processing.

## Response Card Requirements

Response card should show:

```text
AI/helper label
acknowledgement
one question
answer field
optional unknown/skip option
```

## Answer Field

The answer field should match the question type.

Examples:

```text
date text input for approximate date
free text for explanation
short text for medicine name
unknown option for uncertain facts
```

## Unknown / Not Sure Option

If relevant, show:

```text
Jeg ved det ikke
```

or:

```text
Jeg er ikke sikker
```

This should be secondary to answering, but visible.

## Progress Hint

Optional small text:

```text
Du svarer kun på ét spørgsmål ad gangen.
```

Do not show fake percentage unless backed by real logic.

## Internal Data Not Shown

Do not show:

```text
case_type
route
confidence
reason_codes
commercial_value
review_priority
```

## Error Fallback

If AI response fails:

```text
Vi kunne ikke finde næste spørgsmål lige nu. Prøv igen om lidt.
```

If using fallback question:

```text
Hvad var den vigtigste konsekvens for patienten?
```

## Reduced Motion

If animation is disabled:

```text
show AI response immediately
keep loading state accessible
```

## Acceptance Criteria

AI response state is accepted when:

```text
acknowledgement is human and brief
only one next question is shown
question is relevant to the first message
user can answer approximately
internal AI data is hidden
loading is calm and short
```

## References

- FE-006-first-message-state.md
- FE-005-ai-typing-component.md
- docs/ux/UX-002-conversation-flow.md
- docs/ux/UX-009-microcopy-and-tone-of-voice.md
- docs/ai-case-brain/BRAIN-013-smart-question-rules.md
