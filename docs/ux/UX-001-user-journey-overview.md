# UX-001 - User Journey Overview

Version: 1.0
Status: Active Draft
Scope: Customer and caseworker journey

## Purpose

This document describes the high-level user journeys for ErstatningsHjaelp.

It covers both the customer journey and the caseworker journey.

## UX Goal

The product should help a user explain a possible patient injury case in a calm, structured and respectful way.

The experience should reduce confusion, avoid long forms and make the next step clear.

## Primary Personas

## Persona 1 - Customer / Potential Claimant

The customer may be:

- the patient
- a relative
- a parent
- a spouse or partner
- a person helping someone else

Needs:

- understand if the matter may be relevant
- explain what happened in plain language
- avoid repeating themselves
- know what happens next
- feel taken seriously

Risks:

- emotional stress
- uncertainty about dates and documents
- fear of legal complexity
- lack of medical or legal language

## Persona 2 - Caseworker

The caseworker reviews and handles leads.

Needs:

- quick overview
- clear AI summary
- known and missing facts
- reason codes
- document status
- review priority
- next best action

Risks:

- too much unstructured text
- unclear AI reasoning
- duplicate information
- missing audit trail

## Customer Journey Stages

```text
1. Entry
2. Welcome
3. First message
4. AI-supported clarification
5. Smart question loop
6. Preliminary route
7. Next step
8. Follow-up or handover
```

## Stage 1 - Entry

The user enters from:

- website CTA
- search result
- referral
- campaign
- direct link

UX objective:

Make it clear that the user can start by writing freely.

Main message:

```text
Tell us briefly what happened. We will ask one question at a time if we need more information.
```

## Stage 2 - Welcome

The welcome screen should explain:

- this is an initial screening
- AI helps structure the case
- a human may review relevant cases
- no final decision is made immediately
- the user can write in their own words

The screen should not feel legal-heavy.

## Stage 3 - First Message

The user writes a free-text message.

The interface should:

- accept short or long messages
- support mobile typing
- show helper examples
- not require documents yet
- not ask for CPR or sensitive identity details in the first slice

## Stage 4 - AI-Supported Clarification

After the first message, the system processes the input.

The user should see:

- AI thinking/loading state
- a short reassurance message
- one next question or next step

The system should not show internal scores to the user.

## Stage 5 - Smart Question Loop

The system asks one question at a time.

Examples:

```text
When did this happen, approximately?
Which hospital or clinic was involved?
What consequences did this have for the patient?
```

UX rules:

- one question per screen or chat turn
- show why the question is relevant when helpful
- accept approximate answers
- do not ask the same thing twice
- allow the user to skip if they do not know

## Stage 6 - Preliminary Route

The system may route to:

```text
continue conversation
request documents later
human review
guide-away
onboarding later
```

The user-facing language should be careful and non-final.

## Stage 7 - Next Step

The user should always know what happens next.

Possible next steps:

- answer one more question
- wait for review
- prepare documents
- continue later
- receive a respectful guide-away message

## Stage 8 - Follow-Up Or Handover

Later versions may include:

- email follow-up
- document upload
- consent or power of attorney
- caseworker contact
- status page

These are not required in the first slice.

## Caseworker Journey Stages

```text
1. Dashboard overview
2. Lead list or kanban
3. Lead detail
4. AI summary review
5. Fact and missing information review
6. Document review
7. Human review decision
8. Next action
```

## Caseworker Stage 1 - Dashboard

Shows operational overview:

- new leads
- leads needing review
- high-priority cases
- guide-away volume
- missing document cases

## Caseworker Stage 2 - Lead List Or Kanban

Allows staff to filter by:

- status
- review priority
- case type
- confidence
- missing documents
- date created

## Caseworker Stage 3 - Lead Detail

The lead detail should show:

- user messages
- AI summary
- extracted facts
- missing information
- scores and confidence
- reason codes
- next recommended action
- activity timeline

## Caseworker Stage 4 - Human Review

The reviewer should be able to:

- approve AI recommendation
- change route
- request documents
- mark for follow-up
- guide away
- add internal note

Every override should be logged.

## First MVP Journey

For the first vertical slice, only this is required:

```text
user opens intake
user writes first message
system stores message
Fake AI creates signals
AI Case Brain evaluates
system returns one next question
feature test confirms flow
```

## UX Success Criteria

The journey is successful when:

- user understands what to do first
- user can start without documents
- system asks one clear question
- user does not see internal AI scoring
- caseworker can later understand why the system asked or routed
- flow works well on mobile

## References

- UX-000-ux-index.md
- docs/ai-case-brain/BRAIN-013-smart-question-rules.md
- docs/ai-case-brain/BRAIN-018-brain-output-model.md
- docs/rulebook/RULEBOOK-090-smart-question-rules.md
