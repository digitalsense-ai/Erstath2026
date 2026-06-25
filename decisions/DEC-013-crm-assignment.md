# DEC-013 - CRM Assignment

Version: 1.0 Draft
Status: Draft
Owner: Product / Decision Architecture
Domain: Decision / Case
Related: DEC-000 Decision Catalog, DEC-005 Routing Recommendation, DEC-006 Human Review, DEC-007 Information Quality, DEC-008 Acceptance Policy Decision, PAT-009 Human Review Bridge

## Purpose

This decision card defines how the platform should assign or queue a lead in the internal CRM after screening, routing or review decisions.

The goal is to ensure that internal users receive a clear, structured and prioritized handover.

## Decision Question

Where should this lead be placed in the CRM, and what should internal users do next?

## Inputs

- Routing recommendation
- Human review outcome
- Information quality
- Acceptance policy outcome
- Identity and consent state
- Document readiness state
- Missing information
- Severity indicators
- Confidence levels
- User corrections
- Current lead status

## Decision Rules

### Rule 1 - CRM assignment follows routing

The CRM queue or assignment should reflect the latest routing recommendation and review requirements.

### Rule 2 - Human review requires clear reason

If a lead is sent to review, the CRM must show why review is needed.

### Rule 3 - Missing information must be visible

If follow-up is needed, CRM should clearly show which information is missing.

### Rule 4 - Do not hide uncertainty

Internal users should be able to distinguish confirmed facts from inferred or unresolved facts.

### Rule 5 - Next action must be explicit

Every CRM assignment should include a suggested next action.

## Possible Outcomes

- new lead queue
- screening in progress
- awaiting information
- human review queue
- qualified queue
- document preparation queue
- identity or consent pending queue
- guide-away / closed review queue
- manual follow-up queue

## Internal CRM Impact

CRM should display:

- current lead status
- routing recommendation
- review reason if relevant
- missing information
- confirmed facts
- inferred facts
- unresolved facts
- confidence levels
- suggested next action
- user-facing message shown

## User-Facing Impact

The user should only see the next relevant step, not the internal CRM assignment.

If the assignment affects waiting time or review, the user-facing message should explain this simply.

## Audit Requirements

Log:

- decision id
- CRM assignment outcome
- reason
- lead status before and after
- routing reference
- user-facing message shown if relevant
- timestamp

## Related Patterns

- PAT-001 Speak Human, Store Structured
- PAT-006 Smart Skip
- PAT-009 Human Review Bridge

## Test Requirements

Test that:

- each routing outcome maps to a CRM state or queue
- review queues include a review reason
- missing information is visible internally
- confirmed and inferred facts are distinguishable
- CRM assignment decisions are auditable
- user-facing messages do not expose internal queue labels

## Governance

CRM assignment rules should be updated when lead statuses, routing outcomes or internal workflows change.

Major changes should be reflected in case architecture, data dictionary and sprint backlog documents.
