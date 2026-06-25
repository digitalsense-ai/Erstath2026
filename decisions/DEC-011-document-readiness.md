# DEC-011 - Document Readiness

Version: 1.0 Draft
Status: Draft
Owner: Product / Decision Architecture
Domain: Decision / Document
Related: DEC-000 Decision Catalog, DEC-005 Routing Recommendation, DEC-007 Information Quality, PAT-005 Explain Why, ADR-000 Enterprise Architecture Principles

## Purpose

This decision card defines when the platform should ask about documents, prepare for document collection or postpone document handling until later.

The goal is to avoid asking for documents too early while still identifying whether documents may be important for the next stage.

## Decision Question

Are documents relevant now, later or not yet?

## Inputs

- Current process stage
- Routing recommendation
- Information quality
- Missing information
- User statements about documents
- Prior decision or case signals
- Need for human review
- Policy requirements
- Identity and consent state

## Decision Rules

### Rule 1 - Do not request documents too early

The first conversation should not immediately become a document collection flow unless the next step requires it.

### Rule 2 - Ask about document existence when useful

The system may ask whether documents exist if this helps assess readiness or internal follow-up.

### Rule 3 - Document collection may require identity or consent

Actual upload or access to documents may require identity, consent or authorization depending on the process stage.

### Rule 4 - Missing documents do not always stop the flow

The absence of documents should not automatically stop the process if other information is sufficient for review or routing.

### Rule 5 - Explain why documents are relevant

When documents are requested or discussed, the user should understand why.

## Possible Outcomes

- ask whether documents exist
- postpone document question
- prepare document collection later
- request documents now if process allows
- route to human review
- continue without documents for now

## User-Facing Impact

The user should receive a simple explanation if documents are mentioned.

The system should not make the user feel blocked if documents are not immediately available.

## Internal Impact

The system should store:

- document readiness state
- document types mentioned
- whether documents exist
- whether documents are needed now or later
- missing document notes
- relation to identity or consent requirements

## Audit Requirements

Log:

- decision id
- document readiness outcome
- reason
- process stage
- policy reference if relevant
- next action

## Related Patterns

- PAT-005 Explain Why
- PAT-006 Smart Skip
- PAT-007 One Thought Per Screen

## Test Requirements

Test that:

- document collection is not introduced too early
- document existence can be recorded
- document absence does not automatically stop the flow
- document requests include a clear reason
- identity and consent dependencies are respected
