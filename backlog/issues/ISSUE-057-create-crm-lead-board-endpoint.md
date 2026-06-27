# ISSUE-057 - Create CRM Lead Board Endpoint

Version: 1.0 Draft
Status: Planned
Epic: EPIC-F CRM Lead Board and Detail
Sprint: SPRINT-004 CRM Handover
Priority: High
Owner: Engineering
Domain: CRM / Backend
Related: docs/05-crm-workflow.md, backlog/epics/EPIC-F-crm-lead-board-and-detail.md, sprints/SPRINT-004-crm-handover.md

## Purpose

Create the backend endpoint for listing leads on the CRM board.

## Scope

- create lead board endpoint
- return lead status, priority and latest decision summary
- support basic pagination
- support simple filters
- use fake data in tests

## Acceptance Criteria

- endpoint exists
- board data shape is stable
- pagination works
- filters work where defined
- tests pass

## Definition of Done

```text
CRM board endpoint exists
response shape documented
pagination works
basic filters work
tests pass
```
