# DEC-008 - Acceptance Policy Decision

Version: 1.0 Draft
Status: Draft
Owner: Product / Decision Architecture
Domain: Decision / Policy
Related: DEC-000 Decision Catalog, DEC-005 Routing Recommendation, DEC-006 Human Review, DEC-007 Information Quality, PAT-008 Respectful Guide-Away, PAT-009 Human Review Bridge

## Purpose

This decision card defines how the platform applies acceptance policy during screening and routing.

The goal is to support responsible business decisions while avoiding premature or unclear user-facing conclusions.

## Decision Question

Based on the current information and policy rules, should the platform continue, collect more information, route to review or guide the user elsewhere?

## Inputs

- Confirmed facts
- Inferred facts
- Information quality
- Confidence levels
- Severity indicators
- Timing indicators
- Documentation signals
- Prior decision or case signals
- Business policy rules
- Review triggers
- Routing recommendation

## Decision Rules

### Rule 1 - Policy must be explicit

Acceptance logic should be based on documented policy rules, not hidden implementation logic.

### Rule 2 - Low confidence should not produce a final outcome

If confidence is too low, route to human review or collect more information.

### Rule 3 - Serious or sensitive cases may require review

If the situation appears serious, sensitive or complex, human review may be required before a final routing outcome.

### Rule 4 - Missing information may pause acceptance

If critical information is missing, the system should collect more information before applying a strong acceptance outcome.

### Rule 5 - User-facing language must remain respectful

Internal acceptance outcomes must not be shown as raw labels or scores.

## Possible Outcomes

- continue
- collect more information
- human review required
- prepare for documents later
- identity step when relevant
- consent step when relevant
- guide elsewhere respectfully

## User-Facing Impact

The user should receive a clear and respectful next step.

The system should not say that the user is accepted or rejected based only on an automated policy check.

## Internal Impact

The system should store:

- policy decision outcome
- policy rules applied
- confidence level
- missing information
- review triggers
- suggested next action

## Audit Requirements

Log:

- decision id
- policy version
- rules applied
- input snapshot
- outcome
- explanation
- user-facing message shown

## Related Patterns

- PAT-003 Confirm Before Classify
- PAT-005 Explain Why
- PAT-008 Respectful Guide-Away
- PAT-009 Human Review Bridge

## Related Future Policies

- POL-001 Acceptance Policy
- POL-002 Routing Policy
- POL-003 Confidence Policy
- POL-005 Human Review Policy

## Test Requirements

Test that:

- policy rules are applied consistently
- low confidence routes to review or more information
- missing critical information does not create a final outcome
- serious or sensitive cases can trigger review
- raw acceptance labels are not shown to users
- audit records include policy version and rule references
