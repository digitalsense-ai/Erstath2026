# DEC-000 - Decision Catalog

Version: 1.0 Draft
Status: Draft
Owner: Product / Decision Architecture
Domain: Decision
Related: DOC-000 Product Constitution, DOC-001 Architecture Overview, DOC-020 Experience Architecture, ADR-000 Enterprise Architecture Principles

## Purpose

This catalog defines the official decision cards used by Erstatningshjaelp.

A decision card describes a recurring product, business, AI or routing decision that the platform must make or support.

The catalog makes decision logic explicit, traceable and reviewable.

## Decision Principles

All decisions should follow these principles:

- AI may assist, but humans decide when uncertainty, sensitivity or policy requires review
- important recommendations must be explainable
- business rules should be documented before implementation
- raw scores and internal labels should not be exposed directly to users
- every important decision should be auditable
- confidence and source of facts matter

## Decision Flow Model

The standard decision flow is:

1. Input information
2. Interpretation
3. Confidence assessment
4. Policy check
5. Decision or recommendation
6. Explanation
7. Next action
8. Audit record

## Decision Card Format

Each decision card should include:

- purpose
- decision owner
- input data
- decision rules
- possible outcomes
- user-facing impact
- CRM impact
- audit requirements
- related policies
- related patterns
- test requirements

## Initial Decision Catalog

| ID | Decision | Status | Purpose |
| --- | --- | --- | --- |
| DEC-001 | Start Conversation | Draft | Decide how the first user interaction begins |
| DEC-002 | Empathy Reflection | Draft | Decide how the system reflects understanding |
| DEC-003 | Confirm Understanding | Planned | Decide whether inferred facts need confirmation |
| DEC-004 | Smart Skip | Planned | Decide which questions to ask, skip or postpone |
| DEC-005 | Routing Recommendation | Planned | Decide the recommended next route |
| DEC-006 | Human Review | Planned | Decide whether human review is required |
| DEC-007 | Information Quality | Planned | Decide whether information is sufficient |
| DEC-008 | Acceptance Policy | Planned | Apply business acceptance policy |
| DEC-009 | Identity Gate | Planned | Decide whether identity verification is relevant |
| DEC-010 | Consent Gate | Planned | Decide whether consent is required |
| DEC-011 | Document Readiness | Planned | Decide whether documents are needed now or later |
| DEC-012 | Guide Elsewhere | Planned | Decide whether to guide the user elsewhere respectfully |
| DEC-013 | CRM Assignment | Planned | Decide internal assignment or queue |

## Decision Outcome Types

Decision outcomes may include:

- continue
- ask follow-up question
- confirm understanding
- collect more information
- prepare for documents
- request human review
- route to CRM
- verify identity when relevant
- request consent when relevant
- guide elsewhere respectfully

## User-Facing Rule

Decision outcomes must be translated into human language before being shown to users.

Do not show raw internal outcomes such as reject, low score, routing failure or confidence too low.

## CRM Rule

CRM should receive structured decision data including:

- decision id
- decision outcome
- reason
- confidence
- source facts
- missing information
- suggested next action
- user-facing message shown

## Audit Rule

Each important decision should be logged with:

- input snapshot
- rules applied
- confidence
- outcome
- explanation
- timestamp
- version of decision logic

## Governance

New decision cards must be added to this catalog before implementation.

Changes to important decision logic should trigger architecture review and may require an ADR.
