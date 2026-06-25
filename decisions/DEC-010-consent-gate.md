# DEC-010 - Consent Gate

Version: 1.0 Draft
Status: Draft
Owner: Product / Decision Architecture
Domain: Decision / Identity
Related: DEC-000 Decision Catalog, DEC-009 Identity Gate, PAT-005 Explain Why, ADR-000 Enterprise Architecture Principles

## Purpose

This decision card defines when the platform should ask for consent or authorization.

The goal is to ensure that consent is requested only when it is relevant, understandable and connected to a clear next step.

## Decision Question

Is consent or authorization required at this point in the user journey?

## Inputs

- Current process stage
- Routing recommendation
- Identity state
- User relation to affected person
- Need to access or process additional information
- Need for document handling
- Policy requirements
- Existing consent state

## Decision Rules

### Rule 1 - Do not ask for consent without context

Consent should not be requested before the user understands why it is needed.

### Rule 2 - Consent follows purpose

The system should only ask for consent when there is a clear purpose for the next process step.

### Rule 3 - Relation matters

If the user is acting on behalf of someone else, the system may need authorization logic before continuing.

### Rule 4 - Explain why

The system must explain what consent is for in simple language.

### Rule 5 - Store consent state

Consent state must be stored and auditable.

## Possible Outcomes

- consent required now
- consent not needed yet
- authorization check required
- consent postponed
- human review required before consent step

## User-Facing Impact

The user should understand why consent is requested and what it enables.

The system should not use broad or unclear consent wording.

## Internal Impact

The system should store:

- consent gate outcome
- consent purpose
- consent status
- relation state
- authorization requirement
- policy reference

## Audit Requirements

Log:

- decision id
- consent gate outcome
- consent purpose
- policy reference
- timestamp
- process stage

## Related Patterns

- PAT-005 Explain Why
- PAT-007 One Thought Per Screen
- PAT-009 Human Review Bridge

## Test Requirements

Test that:

- consent is not requested without purpose
- consent copy explains why it is needed
- relation uncertainty can trigger review
- consent status is stored
- consent gate decisions are auditable
