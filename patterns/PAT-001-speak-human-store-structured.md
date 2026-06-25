# PAT-001 - Speak Human, Store Structured

Version: 1.0 Draft
Status: Draft
Owner: Product / Experience Architecture
Domain: Experience
Related: DOC-020 Experience Architecture, DOC-021 Digital First Conversation Flow, DOC-022 Conversation Patterns, DOC-023 Tone of Voice Guide, ADR-000 Enterprise Architecture Principles

## Purpose

This pattern defines how Erstatningshjaelp should communicate with users in human language while storing structured information internally.

The user should experience a calm and understandable conversation.

The system should internally produce structured data that can support screening, routing, CRM handover, audit and later review.

## Principle

Speak human to the user.

Store structured for the system.

The user should not be exposed to internal data models, raw AI tags, scores, technical routing labels or implementation language.

## Use This Pattern When

Use this pattern whenever the system:

- asks a user a question
- reflects understanding
- explains a next step
- asks for documents
- asks for identity or consent
- guides the user elsewhere
- creates CRM handover data
- converts free text into internal structure

## User-Facing Layer

The user-facing layer should use:

- plain language
- short sentences
- clear next steps
- respectful tone
- uncertainty-aware wording
- explanations before sensitive requests

The user-facing layer should avoid:

- raw tags
- raw scores
- routing codes
- internal field names
- legal conclusions
- technical system language

## Internal Structured Layer

The internal layer may store:

- extracted entities
- inferred facts
- confirmed facts
- missing information
- confidence levels
- user corrections
- screening answers
- routing recommendation
- routing reasons
- audit trail
- CRM handover summary

## Example

User-facing wording:

"Thank you for sharing this. I understand that the situation concerns your mother and that the treatment may have had serious consequences. Is that correctly understood?"

Internal structure may store:

- relation: mother
- affected_person: someone_else
- severity_indicator: serious
- confirmation_status: pending
- confidence: medium

The structured data is useful internally, but should not be shown directly to the user.

## Bad Example

Do not show wording like:

"Detected tags: relative_case, severe_outcome, possible_compensation_case. Confidence 0.72. Please confirm category."

This exposes system logic and reduces trust.

## Acceptance Criteria

This pattern is correctly implemented when:

- the user sees natural language
- internal systems receive structured fields
- raw AI labels are not exposed
- raw scores are not exposed in the first conversation
- user corrections update the structured state
- CRM handover contains both original text and structured interpretation

## Data Requirements

The system should preserve:

- original user wording
- interpreted facts
- confirmation state
- confidence level
- source of fact

A fact inferred by AI should not be treated the same as a user-confirmed or human-reviewed fact.

## CRM Impact

CRM should receive both:

- human-readable summary
- structured fields for filtering, routing and follow-up

## Governance

Any user-facing copy or interaction that exposes raw internal labels should be reviewed against this pattern.

Any new structured field used for routing should be documented in the relevant architecture or data dictionary.
