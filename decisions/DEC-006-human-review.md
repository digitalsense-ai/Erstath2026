# DEC-006 - Human Review

Version: 1.0 Draft
Status: Draft
Owner: Product / Decision Architecture
Domain: Decision / Operations
Related: DEC-000 Decision Catalog, DEC-005 Routing Recommendation, PAT-009 Human Review Bridge, ADR-000 Enterprise Architecture Principles

## Purpose

This decision card defines when Erstatningshjaelp should route a lead or conversation to human review instead of continuing automatically.

Human review is a safety mechanism for uncertain, sensitive, incomplete or policy-relevant situations.

## Decision Question

Should this lead be reviewed by a human before the platform continues or recommends the next route?

## Inputs

- Confirmed facts
- Inferred facts
- Missing information
- Confidence levels
- Severity indicators
- Sensitive context indicators
- Contradictory information
- Previous decision or prior case signals
- Policy triggers
- User corrections
- Routing recommendation

## Decision Rules

### Rule 1 - Low confidence triggers review

If the system lacks sufficient confidence for a meaningful next step, route to human review or collect more information.

### Rule 2 - Sensitive context can trigger review

If the case contains sensitive or serious indicators, route to review when automatic continuation or guide-away would be unsafe.

### Rule 3 - Contradictory facts trigger review

If important facts conflict, route to human review before using them for routing.

### Rule 4 - Policy-required review must be respected

If a policy requires review, the system must not override it automatically.

### Rule 5 - Human review is not rejection

Human review must be treated as a review path, not as a negative outcome.

## Possible Outcomes

- human review required
- continue automatically
- collect more information first
- route to document readiness later
- guide elsewhere respectfully

## User-Facing Impact

The user should be told that the information needs review before the next step can be confirmed.

The message should be respectful and should not expose internal labels, raw scores or technical uncertainty terms.

## Internal Impact

The system should store:

- review flag
- review reason
- confidence level
- unresolved facts
- sensitive indicators
- policy triggers
- suggested reviewer action

## Audit Requirements

Log:

- decision id
- review outcome
- review reason
- confidence level
- policy references
- state snapshot

## Related Patterns

- PAT-003 Confirm Before Classify
- PAT-008 Respectful Guide-Away
- PAT-009 Human Review Bridge

## Test Requirements

Test that:

- low confidence can trigger review
- sensitive or complex situations can trigger review
- policy-required review cannot be skipped
- human review is not shown as rejection
- CRM receives a structured review reason
