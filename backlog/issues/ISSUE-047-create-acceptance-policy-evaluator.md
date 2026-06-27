# ISSUE-047 - Create Acceptance Policy Evaluator

Version: 1.0 Draft
Status: Planned
Epic: EPIC-E Decision and Routing Engine
Sprint: SPRINT-003 Decision Engine
Priority: High
Owner: Engineering
Domain: Decision / Acceptance
Related: docs/31-acceptance-and-routing-architecture.md, policies/POL-001-acceptance-policy.md, backlog/epics/EPIC-E-decision-and-routing-engine.md, sprints/SPRINT-003-decision-engine.md

## Purpose

Create an evaluator for MVP acceptance rules.

## Scope

- evaluate decision input
- return outcome
- return reason code
- support policy reference

## Out of Scope

- CRM UI
- final legal assessment
- AI provider calls

## Acceptance Criteria

- evaluator exists
- outcome is returned
- reason code is returned
- tests use fake data only

## Test Requirements

- accepted path test
- not accepted path test
- review path test

## Definition of Done

```text
evaluator exists
outcome returned
reason code returned
tests pass
```
