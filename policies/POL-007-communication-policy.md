# POL-007 - Communication Policy

Version: 1.0 Draft
Status: Draft
Owner: Product / UX / Legal Review Required
Domain: Policy / Communication
Related: DOC-020 Experience Architecture, DOC-021 Digital First Conversation Flow, DOC-023 Tone of Voice Guide, PAT-001 Speak Human Store Structured, PAT-005 Explain Why, PAT-008 Respectful Guide-Away, PAT-009 Human Review Bridge, POL-001 Acceptance Policy, POL-002 Routing Policy, POL-003 Confidence Policy

## Purpose

This policy defines how ErstatningsHjaelp should communicate with users during screening, clarification, routing, review, identity, consent, document readiness and guide-away flows.

The purpose is to ensure that communication is clear, respectful, honest and non-technical.

---

## Core Principle

The platform should speak like a helpful human and store structured data internally.

User-facing communication must not expose internal system language unless it has been translated into understandable and respectful wording.

Related:

```text
PAT-001 Speak Human, Store Structured
DOC-023 Tone of Voice Guide
```

---

## Do Not Expose Internal Labels

Do not show users raw labels such as:

```text
REJECTED
LOW_SCORE
GUIDE_ELSEWHERE
HUMAN_REVIEW_REQUIRED
MITID_PENDING
DOCUMENTS_PENDING
AI_CONFIDENCE_LOW
CASE_STRENGTH_42
COMMERCIAL_VALUE_LOW
```

Internal labels belong in CRM, audit and decision logs.

User-facing text must explain the situation in normal language.

---

## Tone Principles

All user-facing messages should be:

- calm
- clear
- respectful
- non-judgmental
- short enough to understand
- honest about uncertainty
- careful with legal or medical conclusions
- specific about the next step

Avoid sounding like a legal rejection letter, a chatbot error or a sales funnel.

---

## First Response Principle

The first response after the user describes their situation should usually include:

1. acknowledgement
2. brief reflection of what the system understood
3. confirmation or gentle next question

Example:

```text
Tak fordi du beskriver det. Jeg forstår det sådan, at der kan være tale om et forløb, hvor en skade eller forsinkelse kan have haft betydning for dig eller en pårørende. Før vi går videre, vil jeg lige sikre mig, at jeg har forstået det rigtigt.
```

Related:

```text
DEC-002 Empathy Reflection
DEC-003 Confirm Understanding
```

---

## Asking Questions

Questions should be asked one thought at a time.

Avoid asking several unrelated questions in one message.

Prefer:

```text
Hvornår skete forløbet cirka?
```

Avoid:

```text
Hvornår skete det, hvor skete det, hvilken skade fik du, har du dokumenter, og har du klaget før?
```

Related:

```text
PAT-007 One Thought Per Screen
```

---

## Explaining Why

When asking for sensitive, difficult or high-friction information, explain why.

Examples include:

- identity verification
- consent
- documents
- relation to affected person
- previous decision
- timing

Example:

```text
Vi spørger om tidspunktet, fordi det kan have betydning for, hvilke muligheder der stadig er åbne.
```

Related:

```text
PAT-005 Explain Why
```

---

## Communicating Uncertainty

The platform may communicate uncertainty, but not in a way that exposes raw AI mechanics.

Do not write:

```text
AI confidence is low.
```

Prefer:

```text
Vi mangler lidt mere information, før vi kan vurdere næste skridt sikkert.
```

or:

```text
Der er nogle forhold, som bør gennemgås nærmere, før vi går videre.
```

---

## Human Review Communication

When routing to human review, the message should reassure the user that review is part of responsible handling.

Do not write:

```text
Your case is too complicated for the AI.
```

Prefer:

```text
Der er nogle forhold i det, du har beskrevet, som bør gennemgås nærmere, før vi går videre.
```

Related:

```text
PAT-009 Human Review Bridge
POL-005 Human Review Policy
```

---

## Guide-Away Communication

Guide-away must be respectful and not final-sounding unless reviewed and approved.

Do not write:

```text
Du har ingen sag.
Din sag er afvist.
Vi kan ikke hjælpe dig.
```

Prefer:

```text
Ud fra de oplysninger vi har nu, ser det ikke ud til, at dette er det rigtige næste skridt. Hvis der er vigtige oplysninger, vi ikke har fået med, kan du stadig tilføje dem.
```

Guide-away should normally include a correction option when relevant.

Related:

```text
PAT-008 Respectful Guide-Away
DEC-012 Guide Elsewhere
POL-001 Acceptance Policy
```

---

## Identity and Consent Communication

Identity and consent messages must explain:

- why the step is needed
- what it enables
- what happens next
- how the information will be used

Do not write:

```text
Log ind med MitID for at fortsætte.
```

Prefer:

```text
For at kunne gå videre med dette trin skal vi først bekræfte din identitet. Det gør vi for at sikre, at oplysningerne behandles korrekt.
```

Related:

```text
POL-004 Identity and Consent Policy
```

---

## Document Communication

Document messages must avoid making users feel blocked too early.

Do not write:

```text
Upload dokumenter for at fortsætte.
```

unless documents are truly required for that step.

Prefer:

```text
Dokumenter kan hjælpe med at afklare forløbet senere. Du behøver ikke have dem klar lige nu, men det er nyttigt at vide, om de findes.
```

Related:

```text
POL-006 Document Collection Policy
```

---

## CRM and Internal Communication

CRM may show internal labels, scores and policy outcomes, but they must be clearly marked as internal.

CRM should also store the exact user-facing message shown, so internal users can understand what the user was told.

---

## Prohibited User-Facing Claims

The platform must not claim:

```text
You are legally entitled to compensation.
You definitely have no case.
Another authority will accept your case.
This is a final legal assessment.
```

Unless such wording has been reviewed and approved by qualified legal/human review.

---

## Data Requirements

User-facing messages should be stored with:

```text
lead_id
conversation_id if relevant
decision_id if relevant
policy_id if relevant
message_text
message_type
shown_to_user
created_at
```

---

## Audit Requirements

Important user-facing messages should be auditable, especially messages related to:

- routing
- guide-away
- human review
- identity
- consent
- documents
- acceptance-related decisions

---

## Test Requirements

Tests should verify that:

- raw internal labels are not shown to users
- guide-away language is respectful
- identity and consent messages explain why
- document messages do not create premature barriers
- low confidence is not exposed as numeric AI confidence
- human review messages are calm and non-technical
- user-facing messages are stored for audit

---

## Governance

This policy is a draft and requires product, UX and legal review before production use.

Changes to communication policy may affect:

- conversation prompts
- frontend text
- routing explanations
- CRM message history
- testing requirements
- user trust metrics

All major user-facing wording should be versioned or traceable to this policy.
