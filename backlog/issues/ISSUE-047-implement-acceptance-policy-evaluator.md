# ISSUE-047 - Implement Acceptance Policy Evaluator

Version: 1.0 Draft
Status: Planned
Epic: EPIC-E Decision and Routing Engine
Sprint: SPRINT-003 Decision Engine
Priority: High
Owner: Engineering
Domain: Decision Engine / Acceptance
Related: POL-001 Acceptance Policy, DEC-008 Acceptance Policy, docs/31-acceptance-and-routing-architecture.md, backlog/epics/EPIC-E-decision-and-routing-engine.md, sprints/SPRINT-003-decision-engine.md

## Purpose

Implement an evaluator for MVP acceptance policy rules.

## Scope

- create acceptance policy evaluator
- evaluate required facts
- evaluate missing information status
- evaluate minimum quality state
- return structured result and reason codes

## Out of Scope

- CRM UI
- final legal assessment
- manual review UI

## Acceptance Criteria

- evaluator exists
- result includes outcome and reasons
- incomplete cases are handled safely
- tests use fake data only

## Test Requirements

- accepted path test
- incomplete path test
- not accepted path test

## Definition of Done

```text
acceptance evaluator exists
reason codes returned
incomplete cases handled
tests pass
```
