# PAT-003 - Confirm Before Classify

Version: 1.0 Draft
Status: Draft
Owner: Product / Experience Architecture
Domain: Experience / Decision
Related: DOC-020 Experience Architecture, DOC-021 Digital First Conversation Flow, DOC-022 Conversation Patterns, PAT-001 Speak Human Store Structured, PAT-002 Understanding Before Questioning, ADR-000 Enterprise Architecture Principles

## Purpose

This pattern defines how Erstatningshjaelp should confirm important inferred information before using it for classification, routing or decision support.

The goal is to avoid acting on misunderstood user input and to create a safer and more trustworthy screening flow.

## Principle

The system may infer.

The system should confirm before important classification.

AI interpretation is useful, but important classifications should not silently become facts without sufficient confidence, user confirmation or later human review.

## Use This Pattern When

Use this pattern when the system has inferred important information such as:

- who the case concerns
- relation to the affected person
- treatment context
- consequence or harm
- timing
- previous decision or complaint
- document availability
- severity indicators
- routing-relevant facts

## User-Facing Behavior

The system should present its understanding in plain language and ask the user to confirm or correct it.

The system should avoid exposing raw tags or categories.

Good structure:

1. Reflect the inferred understanding
2. Ask whether it is correct
3. Offer correction or additional input

## Internal Behavior

The system should store each important fact with a source and confirmation state.

Possible states:

- inferred
- user_confirmed
- user_corrected
- document_supported
- human_reviewed

An inferred fact should not be treated the same as a confirmed or reviewed fact.

## Example

User writes:

"My mother became much worse after treatment."

Good user-facing confirmation:

"I understand this as a situation concerning your mother and that the treatment may have led to serious consequences. Is that correctly understood?"

Internal state may store:

- affected_person: someone_else
- relation: mother
- consequence_severity: serious
- confirmation_status: pending

## Bad Example

Do not silently classify the case and continue as if all inferred facts are confirmed.

Do not show:

"Category: relative_case. Severity: serious. Confirm category."

## Acceptance Criteria

This pattern is correctly implemented when:

- important inferred facts are confirmable
- the user can correct the interpretation
- raw internal categories are not exposed
- confirmation state is stored
- routing does not rely blindly on low-confidence inference
- CRM handover shows which facts were confirmed and which were inferred

## CRM Impact

CRM should display or store:

- confirmed facts
- inferred facts
- corrected facts
- unresolved facts
- confidence levels
- source of fact

This allows caseworkers to understand how reliable the information is.

## AI Impact

AI may assist with inference and summarization.

AI should also mark uncertainty and confidence.

AI should not convert an unconfirmed inference into a final decision without appropriate policy support.

## Decision Impact

Decision logic should distinguish between:

- inferred facts
- confirmed facts
- document-supported facts
- human-reviewed facts

Higher-impact routing decisions should require higher confidence or review.

## Governance

Any flow that uses AI-inferred information for routing or user-facing next steps should be reviewed against this pattern.
