# DOC-020 - Experience Architecture

Version: 1.0 Draft
Status: Draft
Owner: Product / Experience Architecture
Domain: Experience
Related: DOC-000 Product Constitution, DOC-001 Architecture Overview, ADR-000 Enterprise Architecture Principles

## Purpose

This document defines the experience architecture for Erstatningshjaelp.

The purpose is to ensure that the platform meets users with clarity, respect, empathy and structure while still collecting the information needed for screening, routing and internal review.

The experience must support both users who may continue in the process and users who may be guided elsewhere.

## Experience North Star

Every user should leave the platform with more clarity, more trust and a clearer understanding of the next step than when they began.

This applies even when the platform cannot continue with the case.

## Scope

This document covers:

- digital first conversation
- user-facing screening flow
- empathy reflection
- guided questions
- smart skip
- confirmation before classification
- tone and language
- interaction principles
- respectful routing
- experience handover to CRM

This document does not define detailed legal assessment, final business policy or technical implementation.

## Experience Principles

### Speak Human, Store Structured

The user should experience a human and simple conversation.

The system may store structured entities, tags and scores internally, but the user should not be exposed to raw data models or technical categories.

### Understanding Before Questioning

Before asking many questions, the system should first show that it has understood the user's situation.

### Confirm Before Classify

The system may infer meaning from the user's free text, but important classifications should be confirmed before being used for routing or assessment.

### Never Ask Twice

The system should avoid asking for information already provided or confirmed.

If uncertain, it should confirm naturally instead of asking a full repeated question.

### One Thought Per Screen

Each screen should focus on one clear task or thought.

The user should not be overwhelmed by long forms or multiple complex questions at once.

### Explain Why

When the system asks for sensitive information, identity, consent or documents, it should explain why.

### Progressive Disclosure

The user should only see the next relevant step.

Complex requirements should be introduced when they become relevant, not at the beginning.

### Respect Emotional Context

The experience must adapt when the user describes serious harm, death, children, cancer, long illness, uncertainty or distress.

### Responsible Guidance

The platform must avoid harsh rejection language.

If the case does not continue, the user should still receive respectful guidance and a clear explanation of what they can do next.

## Core Experience Flow

The default experience flow is:

1. User describes the situation in free text
2. System extracts possible facts and uncertainty internally
3. System responds with an empathy reflection
4. User confirms, corrects or adds information
5. System asks only missing and relevant follow-up questions
6. System builds structured screening information
7. System creates a routing recommendation
8. System explains the next step in user-facing language
9. Internal CRM receives structured handover

## Digital First Conversation

The first screen should invite the user to explain the situation in their own words.

The user should not be forced into a long form before the system has understood the situation.

The first conversation should:

- lower friction
- reduce pressure
- allow uncertainty
- support emotional context
- create a structured basis for later questions

## Empathy Reflection

After the first free text input, the system should reflect what it understood in simple language.

The reflection should not expose internal tags or technical categories.

The user should be able to choose:

- yes, that is correct
- no, correct it
- I want to add something

## Guided Screening

After confirmation, the system should move into guided screening.

Guided screening should ask one relevant question at a time and use simple answer options when possible.

The system should always allow uncertainty where realistic.

## Smart Skip

Smart Skip means the system does not ask questions that have already been answered with sufficient confidence.

Examples:

- If the user has already stated who the case concerns, do not ask the same thing again.
- If the user has already stated a date, ask only for missing precision when needed.
- If the user has already stated a severe outcome, acknowledge it instead of re-asking bluntly.

## User-Facing Language

The language should be:

- calm
- clear
- respectful
- non-technical
- non-promising
- honest about uncertainty

The system should avoid:

- legal conclusions
- raw scores
- technical labels
- harsh rejection wording
- unnecessary repetition
- long blocks of text

## Internal Structure

While the user experiences a conversation, the system may store:

- extracted entities
- inferred facts
- confirmed facts
- missing information
- confidence levels
- tags
- screening answers
- routing recommendation
- audit trail

## Handover to CRM

The CRM handover should include:

- original user description
- empathy reflection
- user confirmation status
- confirmed facts
- inferred facts
- missing information
- confidence levels
- scores where relevant
- routing recommendation
- reasons for routing
- suggested next action

## Experience Quality Criteria

An experience flow is acceptable when:

- the user understands what is happening
- the user is not asked the same thing repeatedly
- the system explains why sensitive steps are needed
- the system does not make false promises
- the system handles emotional context respectfully
- the internal handover is structured and useful

## Related Future Artifacts

Planned related artifacts:

- DOC-021 Digital First Conversation Flow
- DOC-022 Conversation Patterns
- DOC-023 Tone of Voice Guide
- PAT-001 Speak Human, Store Structured
- PAT-002 Understanding Before Questioning
- PAT-003 Confirm Before Classify
- PAT-004 Never Ask Twice
- PAT-005 Explain Why
- PAT-006 Smart Skip
- PAT-007 One Thought Per Screen

## Governance

Any major change to the user-facing first conversation, routing explanation, identity prompt, document request or guide-away flow should be reviewed against this document.
