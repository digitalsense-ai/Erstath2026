# UX-002 - Conversation Flow

Version: 1.0
Status: Active Draft
Scope: Customer intake conversation UX

## Purpose

This document defines the customer conversation flow for ErstatningsHjaelp.

The flow should feel simple, respectful and focused. The user should not feel like they are filling out a long legal form.

## Core UX Principle

The conversation should ask one useful question at a time.

The user should always understand:

- what to do now
- why the system asks
- what happens next

## First MVP Flow

The first MVP conversation flow is:

```text
1. Welcome
2. First free-text message
3. AI thinking state
4. One smart question
5. User answer
6. Next smart question or next step
```

## Full Conversation Flow

```text
Start
↓
Welcome screen
↓
User writes first message
↓
System creates conversation
↓
AI thinking state
↓
AI Case Brain evaluates
↓
One of:
  - ask next question
  - request documents later
  - route to human review
  - guide away respectfully
  - prepare onboarding later
↓
User sees next step
```

## Step 1 - Welcome

Purpose:

Introduce the service without overwhelming the user.

Content should explain:

- user can write freely
- AI helps structure the information
- a person may review relevant cases
- no final decision is made immediately
- no documents are required to start

Primary CTA:

```text
Start vurdering
```

Secondary option:

```text
Læs hvordan det virker
```

## Step 2 - First Free-Text Message

The user should be invited to describe what happened.

Prompt example:

```text
Fortæl kort, hvad der skete. Du kan skrive med dine egne ord.
```

Helper examples:

```text
Eksempel: Min diagnose blev stillet for sent.
Eksempel: Jeg fik en skade efter en operation.
Eksempel: Der blev ikke fulgt op på en scanning.
```

Do not require:

- CPR
- login
- documents
- exact legal language
- final claim amount

## Step 3 - AI Thinking State

After submit, show a short state such as:

```text
Vi gennemgår din beskrivelse og finder det vigtigste næste spørgsmål.
```

UX rules:

- should feel calm
- should not imply final legal assessment
- should not show internal scoring
- should be short on mobile

## Step 4 - One Smart Question

The system asks exactly one next question.

Question examples:

```text
Hvornår skete det cirka?
Hvilket hospital eller hvilken klinik var involveret?
Hvilke konsekvenser fik det for patienten?
Hvordan mener du, at skaden hænger sammen med behandlingen?
```

The question card should include:

- question text
- optional short explanation
- answer field
- submit button
- optional skip / I do not know

## Step 5 - User Answer

The user answers the question.

The system should:

- accept approximate answers
- not punish uncertainty
- not force long text
- not ask the same question again

Example accepted answers:

```text
2021
for cirka 3 år siden
jeg ved ikke præcis
Rigshospitalet
min mor døde senere
```

## Step 6 - Next Step

After each answer, AI Case Brain decides next step.

Allowed next steps:

```text
ask_next_question
request_documents_later
human_review
guide_away
onboarding_later
```

## Flow: Ask Next Question

Used when more information is needed.

User-facing pattern:

```text
Tak. Vi mangler én oplysning mere for at forstå sagen bedre.
```

Then show one question.

## Flow: Human Review

Used when the case needs manual attention.

User-facing pattern:

```text
Tak. Ud fra det du har skrevet, bør sagen gennemgås nærmere. Vi sender den videre til vurdering.
```

Do not show internal review priority to the user.

## Flow: Guide-Away

Used when the case does not currently fit the main flow.

User-facing pattern:

```text
Ud fra de oplysninger, du har givet indtil nu, kan vi ikke se nok grundlag til at fortsætte i denne vurdering. Hvis der mangler noget vigtigt, kan du tilføje det her.
```

Must include option:

```text
Tilføj flere oplysninger
```

## Flow: Request Documents Later

Not required in first MVP slice.

Later pattern:

```text
Det næste relevante skridt er at se dokumentation. Du kan senere uploade journal, breve eller afgørelser.
```

## Flow: Onboarding Later

Not required in first MVP slice.

Later pattern:

```text
Sagen ser ud til at være relevant at gå videre med. Næste trin er at oprette dine kontaktoplysninger.
```

## Back And Edit Behavior

The user should be able to:

- edit last answer
- add more information
- continue later in future versions

For first slice:

- edit and resume can be postponed
- conversation history should still be stored

## Skip Behavior

The user may not know an answer.

Skip labels:

```text
Jeg ved det ikke
Jeg er ikke sikker
Spring over for nu
```

Skip should not end the flow automatically.

It should add missing information or reduce confidence depending on the question.

## Repeated Question Prevention

The UX must not ask the same question twice.

If the answer is partial, the system should use it unless precision is necessary.

## Tone Rules

Use:

- calm language
- plain Danish
- short sentences
- respectful wording
- no legal conclusions

Avoid:

- long legal explanations
- final rejection language
- internal scores
- blame wording
- pressure

## First Slice Acceptance Criteria

The first conversation flow is ready when:

- user can submit a first message
- loading state appears
- one next question is returned
- the question can be answered
- reason codes are stored internally
- user-facing text does not expose internal scores

## References

- UX-001-user-journey-overview.md
- docs/ai-case-brain/BRAIN-013-smart-question-rules.md
- docs/rulebook/RULEBOOK-090-smart-question-rules.md
- docs/ai-case-brain/BRAIN-018-brain-output-model.md
