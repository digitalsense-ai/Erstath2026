# PAT-005 - Explain Why

Version: 1.0 Draft
Status: Draft
Owner: Product / Experience Architecture
Domain: Experience / Trust
Related: DOC-020 Experience Architecture, DOC-021 Digital First Conversation Flow, DOC-022 Conversation Patterns, DOC-023 Tone of Voice Guide, PAT-001 Speak Human Store Structured, PAT-002 Understanding Before Questioning, ADR-000 Enterprise Architecture Principles

## Purpose

This pattern defines how Erstatningshjaelp should explain why it asks for information or introduces a new step.

The purpose is to create trust, reduce confusion and help the user understand why each step is relevant.

## Principle

Explain why before asking for something sensitive, demanding or unclear.

The user should not have to guess why the platform needs a piece of information, a document, identity verification, consent or authorization.

## Use This Pattern When

Use this pattern when the system asks for:

- sensitive personal information
- dates or timing
- relation to the affected person
- identity verification
- consent
- authorization
- documents
- previous decisions
- health-related details
- follow-up information after the user has already described the situation

## User-Facing Behavior

The explanation should be:

- short
- practical
- calm
- specific to the question or step
- free from technical or internal labels

The explanation should come before or together with the question.

## Good Examples

"We ask this because the timing may affect which next step is relevant."

"We ask this because we need to know whether you are describing your own situation or helping someone else."

"We ask this because documents may help us understand what happened later in the process."

"We ask for identity only when it is needed to continue safely."

## Bad Examples

Avoid explanations such as:

"This is required by system logic."

"The routing engine needs this field."

"Your score cannot be calculated without this answer."

"This is mandatory."

These explanations expose internal mechanics or feel too abrupt.

## Internal Behavior

The system should know which questions or steps require explanation.

Examples of explainable events:

- asking about timing
- asking about relation
- asking about documents
- asking about previous case status
- asking for identity verification
- asking for consent
- guiding the user to human review
- guiding the user elsewhere

## Acceptance Criteria

This pattern is correctly implemented when:

- sensitive or unclear requests include a short explanation
- identity and consent are never introduced without context
- explanations do not expose raw system logic
- explanations are understandable to non-technical users
- the user is not pressured or misled
- the CRM handover can record why a step was shown when relevant

## CRM Impact

CRM may store:

- which explanation was shown
- which step the explanation related to
- whether the user continued, corrected or stopped

This can help evaluate whether explanations reduce drop-off or confusion.

## AI Impact

AI may help choose or generate the correct explanation, but explanations should follow approved tone and policy.

AI-generated explanations must not promise outcomes or create unsupported conclusions.

## Decision Impact

Decision and routing logic should identify when an explanation is required before presenting the next step.

Examples:

- MitID or identity step requires explanation
- consent step requires explanation
- document request requires explanation
- guide-away requires explanation

## Do Not Do

Do not:

- ask for sensitive information without explaining why
- use technical system reasons as user-facing explanations
- over-explain simple questions
- imply that an answer guarantees a specific outcome
- use pressure-based language

## Governance

Any user-facing flow that asks for sensitive information, identity, consent or documents should be reviewed against this pattern.
