# ISSUE-049 - Create Review Flag Evaluator

Version: 1.0 Draft
Status: Planned
Epic: EPIC-E Decision and Routing Engine
Sprint: SPRINT-003 Decision Engine
Priority: High
Owner: Engineering
Domain: Decision / Review
Related: docs/31-acceptance-and-routing-architecture.md, policies/POL-005-human-review-policy.md, backlog/epics/EPIC-E-decision-and-routing-engine.md, sprints/SPRINT-003-decision-engine.md

## Purpose

Create an evaluator that sets review flags for leads that need extra handling.

## Scope

- evaluate review flag rules
- return flag result
- return reason code
- support priority where practical

## Out of Scope

- review queue UI
- reviewer assignment
- final legal assessment

## Acceptance Criteria

- evaluator exists
- flag result can be returned
- reason code is returned
- tests use fake data only

## Test Requirements

- flag created test
- no flag test
- priority test if implemented

## Definition of Done

```text
review flag evaluator exists
flag result returned
reason code returned
tests pass
```
