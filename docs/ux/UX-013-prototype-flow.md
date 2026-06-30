# UX-013 - Prototype Flow

Version: 1.0
Status: Active Draft
Scope: Clickable prototype and demo flow planning

## Purpose

This document defines the first prototype flow for ErstatningsHjaelp.

The prototype flow should make it possible to demonstrate the customer intake and staff review concept before the full frontend is implemented.

## Prototype Goal

The prototype should show:

```text
how a user starts
how the AI-supported conversation feels
how one smart question appears
how next step is presented
how staff can review the lead
```

## Prototype Principle

The prototype should feel realistic but not require real AI, real documents, login, MitID or production data.

Use fake cases and fixed responses.

## Prototype Scope

First clickable prototype:

```text
1. Customer welcome
2. First message
3. AI thinking
4. Smart question
5. User answer
6. Human review confirmation or next question
7. Staff dashboard
8. Lead detail
9. Human review decision
```

## Prototype Scenario A - Diagnosis Delay

User story:

```text
A user believes a diagnosis was delayed and the disease became worse.
```

First message example:

```text
Min mor fik stillet sin diagnose for sent. Hun var til lægen flere gange, men blev først sendt videre meget senere. Sygdommen blev værre.
```

AI smart question:

```text
Hvornår kontaktede hun første gang lægen om symptomerne?
```

Possible answer:

```text
Det var omkring foråret 2021.
```

Next route:

```text
human_review
```

User-facing confirmation:

```text
Tak. Det du har skrevet, bør gennemgås nærmere.
```

## Prototype Scenario B - Operation Injury

User story:

```text
A user describes injury after surgery.
```

First message example:

```text
Jeg fik en skade efter en operation på hospitalet og har stadig smerter og nedsat funktion.
```

AI smart question:

```text
Hvilken operation var der tale om?
```

Next route:

```text
continue_conversation
```

## Prototype Scenario C - Guide-Away

User story:

```text
A user describes dissatisfaction with waiting time but no injury or consequence.
```

First message example:

```text
Jeg er utilfreds med den lange ventetid og den måde jeg blev talt til på.
```

AI smart question:

```text
Fik ventetiden eller forløbet konkrete konsekvenser for dit helbred?
```

If answer is no:

```text
guide_away
```

Guide-away copy:

```text
Ud fra de oplysninger, du har givet indtil nu, kan vi ikke se nok grundlag til at fortsætte i denne vurdering. Hvis der mangler noget vigtigt, kan du tilføje flere oplysninger.
```

## Customer Prototype Screens

## Screen P1 - Welcome

Shows:

- headline
- short explanation
- no documents needed note
- Start vurdering CTA

## Screen P2 - First Message

Shows:

- textarea
- helper examples
- Send beskrivelse CTA

## Screen P3 - Thinking

Shows:

```text
Vi gennemgår din beskrivelse og finder det vigtigste næste spørgsmål.
```

## Screen P4 - Smart Question

Shows:

- acknowledgement
- one question
- answer input
- Svar button
- Jeg ved det ikke button

## Screen P5 - Next Step

Variant screens:

```text
next question
human review confirmation
guide-away
```

## Staff Prototype Screens

## Screen S1 - Dashboard

Shows cards:

```text
New leads
Needs review
Waiting for documents
Guide-away suggested
```

## Screen S2 - Lead List

Shows sample lead cards.

Each card includes:

```text
summary
case type
status
review priority
confidence band
missing information count
```

## Screen S3 - Lead Detail

Shows:

```text
lead header
AI summary
facts panel
missing information panel
conversation timeline
review decision card
```

## Screen S4 - Review Decision

Shows decision options:

```text
approve AI route
request more information
request documents
mark guide-away
mark ready for next step
add note
```

## Prototype Data

Use static fake data only.

Do not use:

```text
real CPR
real patient journal
real names unless clearly fake
real hospital-specific sensitive examples
```

## Prototype Acceptance Criteria

The prototype is good enough when a stakeholder can understand:

- what the user sees first
- how the user answers
- how the AI asks one question
- how uncertainty is handled
- how a case reaches human review
- how staff sees AI summary and missing facts
- how staff changes route or adds note

## First Build Recommendation

Build prototype in this order:

```text
customer intake flow first
then lead detail screen
then dashboard and list
then review actions
```

## References

- UX-002-conversation-flow.md
- UX-003-screen-by-screen-specification.md
- UX-010-caseworker-crm-ux.md
- UX-011-human-review-workspace.md
- docs/ai-case-brain/BRAIN-024-fake-ai-brain-scenarios.md
