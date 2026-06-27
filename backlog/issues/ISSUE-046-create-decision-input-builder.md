# ISSUE-046 - Create Decision Input Builder

Version: 1.0 Draft
Status: Planned
Epic: EPIC-E Decision and Routing Engine
Sprint: SPRINT-003 Decision Engine
Priority: High
Owner: Engineering
Domain: Decision / Input
Related: docs/31-acceptance-and-routing-architecture.md, docs/12-data-dictionary.md, backlog/epics/EPIC-E-decision-and-routing-engine.md, sprints/SPRINT-003-decision-engine.md

## Purpose

Create a builder that prepares the structured input used by the decision engine.

## Scope

- collect confirmed facts
- collect scores
- collect missing information status
- include screening result references
- exclude unnecessary data

## Out of Scope

- decision rules implementation
- CRM UI
- AI provider calls

## Acceptance Criteria

- builder exists
- input payload shape is stable
- required inputs are included
- unnecessary data is excluded
- tests use fake data only

## Test Requirements

- builder test with complete lead data
- builder test with missing data

## Definition of Done

```text
decision input builder exists
payload shape stable
required inputs included
tests pass
```
