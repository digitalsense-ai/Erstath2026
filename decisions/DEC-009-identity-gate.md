# DEC-009 - Identity Gate

Version: 1.0 Draft
Status: Draft
Owner: Product / Decision Architecture
Domain: Decision / Identity
Related: DEC-000 Decision Catalog, DEC-005 Routing Recommendation, DEC-008 Acceptance Policy Decision, PAT-005 Explain Why, ADR-000 Enterprise Architecture Principles

## Purpose

This decision card defines when the platform should introduce identity verification.

The goal is to ensure that identity verification is used only when there is a clear product, process or data-protection reason.

## Decision Question

Is identity verification relevant at this point in the user journey?

## Inputs

- Routing recommendation
- Current process stage
- Case continuation status
- Need for secure access
- Need for consent or authorization
- Need to connect user to later case handling
- Policy requirements
- User relation to affected person

## Decision Rules

### Rule 1 - Do not introduce identity too early

Identity verification should not be the default next step immediately after initial description.

### Rule 2 - Use identity when continuation requires it

Identity verification may be introduced when the platform needs to continue safely into a more formal process.

### Rule 3 - Explain why

The user should receive a short explanation of why identity verification is needed.

### Rule 4 - Respect relation and authorization

If the user is acting on behalf of someone else, identity may need to be linked to authorization or consent logic.

### Rule 5 - Do not use identity as a screening shortcut

Identity verification should not replace screening, routing or review logic.

## Possible Outcomes

- identity verification required now
- identity verification not needed yet
- identity verification postponed
- consent or authorization check needed first
- human review required before identity step

## User-Facing Impact

The user should understand why identity verification is being introduced.

The system should avoid presenting identity verification as a generic continuation step without context.

## Internal Impact

The system should store:

- identity gate outcome
- reason
- related routing state
- whether consent or authorization is also needed
- policy reference

## Audit Requirements

Log:

- decision id
- identity gate outcome
- reason
- policy reference
- process stage
- timestamp

## Related Patterns

- PAT-005 Explain Why
- PAT-007 One Thought Per Screen
- PAT-009 Human Review Bridge

## Test Requirements

Test that:

- identity is not requested too early
- identity is requested when required by process stage
- user-facing copy explains why identity is needed
- relation and authorization uncertainty can route to review
- identity gate decisions are logged
