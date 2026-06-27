# ISSUE-048 - Create Routing Policy Evaluator

Version: 1.0 Draft
Status: Planned
Epic: EPIC-E Decision and Routing Engine
Sprint: SPRINT-003 Decision Engine
Priority: High
Owner: Engineering
Domain: Decision / Routing
Related: docs/31-acceptance-and-routing-architecture.md, policies/POL-002-routing-policy.md, backlog/epics/EPIC-E-decision-and-routing-engine.md, sprints/SPRINT-003-decision-engine.md

## Purpose

Create an evaluator for MVP routing rules.

## Scope

- evaluate decision input
- return routing recommendation
- return reason code
- support policy reference

## Out of Scope

- CRM board UI
- assignment optimization
- final legal assessment

## Acceptance Criteria

- evaluator exists
- routing recommendation is returned
- reason code is returned
- tests use fake data only

## Test Requirements

- route to CRM test
- route to review test
- guide elsewhere test

## Definition of Done

```text
routing evaluator exists
routing recommendation returned
reason code returned
tests pass
```
