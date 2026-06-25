# PAT-009 - Human Review Bridge

Version: 1.0 Draft
Status: Draft
Owner: Product / Experience Architecture
Domain: Experience / Decision / Trust
Related: DOC-020 Experience Architecture, DOC-021 Digital First Conversation Flow, DOC-022 Conversation Patterns, DOC-023 Tone of Voice Guide, PAT-001 Speak Human Store Structured, PAT-003 Confirm Before Classify, PAT-005 Explain Why, PAT-008 Respectful Guide-Away, ADR-000 Enterprise Architecture Principles

## Purpose

This pattern defines how Erstatningshjaelp should move a user from AI-assisted screening to human review when the system cannot responsibly continue automatically.

The purpose is to avoid forcing uncertain or sensitive situations into a simple automated outcome.

## Principle

When uncertainty, sensitivity or policy requires it, bridge to human review.

Do not pretend that the system can decide everything automatically.

## Use This Pattern When

Use this pattern when:

- confidence is low
- the situation is sensitive
- the facts are contradictory
- the case may be serious but incomplete
- policy requires manual review
- the user has corrected important information
- routing is unclear
- the system should not guide away automatically

## User-Facing Behavior

The user-facing message should explain that the information needs to be reviewed before a clear next step can be given.

The message should be calm and practical.

It should not expose raw scores, internal uncertainty codes or technical routing labels.

## Preferred Language

Use language such as:

"Based on what you have shared, we need to review the information before we can guide you further. This helps ensure that important details are not missed."

or:

"There are a few details that may be important, so the next step is that the information should be reviewed before we continue."

## Avoid

Do not say:

- the AI is unsure
- your score is too low
- the system cannot classify you
- rejected pending review
- manual escalation triggered

These phrases expose internal mechanics or may reduce trust.

## Internal Behavior

The system should store:

- review reason
- confidence level
- unresolved facts
- confirmed facts
- inferred facts
- user corrections
- severity indicators
- policy triggers
- recommended reviewer action

## Review Reasons

Common review reasons include:

- low confidence
- high severity
- sensitive context
- inconsistent information
- missing key information
- possible deadline issue
- previous decision mentioned
- relation or authorization unclear
- documents may be important

## Acceptance Criteria

This pattern is correctly implemented when:

- uncertain cases can be routed to human review
- the user receives a respectful explanation
- internal reviewers receive a structured reason
- raw internal labels are not exposed to the user
- the user understands that review is a step, not a rejection
- CRM can prioritize and handle the review

## CRM Impact

CRM should display:

- review required flag
- review reason
- confirmed facts
- unresolved facts
- confidence level
- suggested next action
- user-facing message shown

## AI Impact

AI may recommend human review when uncertainty, sensitivity or policy triggers are present.

AI must not override policy-required review.

AI should explain internally why review is recommended.

## Decision Impact

Decision logic should include human review as a valid routing outcome.

Human review is not the same as rejection.

It is a safety mechanism for uncertain or important cases.

## Do Not Do

Do not:

- force uncertain cases into automatic continuation or guide-away
- show raw scores to users
- describe review as a failure
- make the user feel blocked without explanation
- hide the reason for review from CRM

## Governance

Any routing or screening implementation should include a human review path.

Human review criteria should be documented in the relevant policy and decision architecture documents.
