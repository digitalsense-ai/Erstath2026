# DEC-012 - Guide Elsewhere

Version: 1.0 Draft
Status: Draft
Owner: Product / Decision Architecture
Domain: Decision / Trust
Related: DEC-000 Decision Catalog, DEC-005 Routing Recommendation, DEC-008 Acceptance Policy Decision, PAT-008 Respectful Guide-Away, ADR-000 Enterprise Architecture Principles

## Purpose

This decision card defines when the platform should guide a user elsewhere respectfully instead of continuing automatically.

The goal is to avoid harsh rejection language while still making responsible routing decisions.

## Decision Question

Should the user be guided elsewhere based on the current information and policy rules?

## Inputs

- Confirmed facts
- Inferred facts
- Information quality
- Confidence levels
- Missing information
- Business policy rules
- Routing recommendation
- Human review triggers
- User corrections

## Decision Rules

### Rule 1 - Do not guide away when key uncertainty remains

If important information is missing or confidence is low, collect more information or route to human review instead.

### Rule 2 - Use guide-away only when policy supports it

The platform should only guide elsewhere when documented policy supports that route.

### Rule 3 - Avoid final conclusions

The user-facing message should not present the route as a final legal or definitive conclusion.

### Rule 4 - Allow additional information when relevant

If missing information could change the route, the user should be allowed to add more information.

### Rule 5 - Keep tone respectful

The user should receive clarity without feeling dismissed.

## Possible Outcomes

- guide elsewhere respectfully
- collect more information
- route to human review
- continue with next step
- hold for CRM review

## User-Facing Impact

The user should see a calm explanation and a clear next step.

The system should not show raw labels such as rejected, low score, no case or not qualified.

## Internal Impact

The system should store:

- guide-away outcome
- reason
- policy reference
- confidence level
- missing information
- whether additional information is allowed
- user-facing message shown

## Audit Requirements

Log:

- decision id
- guide-away outcome
- policy reference
- reason
- state snapshot
- user-facing message shown

## Related Patterns

- PAT-005 Explain Why
- PAT-008 Respectful Guide-Away
- PAT-009 Human Review Bridge

## Test Requirements

Test that:

- guide-away is not used when confidence is too low
- user-facing language is respectful
- raw rejection labels are not shown
- additional information can be added where relevant
- CRM receives guide-away reason and policy reference
