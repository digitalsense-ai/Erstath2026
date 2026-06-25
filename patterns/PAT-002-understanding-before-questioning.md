# PAT-002 - Understanding Before Questioning

Version: 1.0 Draft
Status: Draft
Owner: Product / Experience Architecture
Domain: Experience
Related: DOC-020 Experience Architecture, DOC-021 Digital First Conversation Flow, DOC-022 Conversation Patterns, DOC-023 Tone of Voice Guide, PAT-001 Speak Human Store Structured, ADR-000 Enterprise Architecture Principles

## Purpose

This pattern defines how Erstatningshjaelp should show understanding before asking the user many follow-up questions.

The goal is to create trust, reduce friction and avoid making the first experience feel like a cold form or interrogation.

## Principle

Before questioning, show understanding.

The system should first reflect what it understood from the user's own words and then ask only the questions that are still needed.

## Use This Pattern When

Use this pattern when:

- the user has submitted an initial free-text description
- the system has enough information to form a preliminary understanding
- the next step would otherwise be a list of structured questions
- the situation may be sensitive, uncertain or emotionally difficult

## Do Not Use This Pattern When

Do not use this pattern as a replacement for required clarification.

If the user's input is too short or unclear to reflect meaningfully, the system may ask one gentle clarification question first.

## User-Facing Behavior

The system should:

1. thank the user for sharing
2. summarize the main situation in simple language
3. avoid legal conclusions
4. acknowledge uncertainty where relevant
5. ask the user to confirm, correct or add information

## Internal Behavior

The system may internally extract:

- possible facts
- inferred entities
- missing information
- confidence levels
- sensitive indicators
- routing signals

These internal interpretations should not be shown directly as raw tags or scores.

## Example

User describes that the situation concerns a family member and a serious treatment outcome.

Good response structure:

"Thank you for sharing this. I understand that this concerns someone close to you and that the treatment may have had serious consequences. Is that correctly understood?"

Then offer:

- yes, that is correct
- no, I want to correct it
- I want to add something

## Bad Example

Do not respond immediately with:

"When did the treatment happen? What hospital was involved? What injury occurred? Do you have documents?"

This may feel abrupt and can reduce trust.

## Confirmation Options

The user should be able to respond with:

- confirmation
- correction
- additional information

The system should update the internal state based on the user's response.

## Acceptance Criteria

This pattern is correctly implemented when:

- the system reflects understanding before asking multiple screening questions
- the reflection is understandable and respectful
- the user can confirm or correct the understanding
- the system does not expose raw internal tags
- the next questions are based on what is missing
- the CRM handover records both the reflection and confirmation status

## CRM Impact

CRM should store:

- original user description
- system reflection
- confirmation status
- user corrections
- confirmed facts
- unresolved facts

## AI Impact

AI should be used to assist with:

- summarizing the user's description
- identifying possible facts
- detecting uncertainty
- preparing a human-readable reflection

AI must not convert an unconfirmed interpretation into a final routing conclusion without sufficient confidence or confirmation.

## Governance

Any first-conversation flow that asks structured questions before reflecting the user's story should be reviewed against this pattern.
