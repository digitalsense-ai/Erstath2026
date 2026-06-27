# ISSUE-058 - Create CRM Lead Detail Endpoint

Version: 1.0 Draft
Status: Planned
Epic: EPIC-F CRM Lead Board and Detail
Sprint: SPRINT-004 CRM Handover
Priority: High
Owner: Engineering
Domain: CRM / Backend
Related: docs/05-crm-workflow.md, backlog/epics/EPIC-F-crm-lead-board-and-detail.md, sprints/SPRINT-004-crm-handover.md

## Purpose

Create the backend endpoint for viewing one lead in CRM detail.

## Scope

- return lead overview
- return confirmed facts
- return open missing information
- return latest decision and handover snapshot
- return review state if relevant

## Acceptance Criteria

- endpoint exists
- response includes core lead detail
- response separates facts, decisions and review data
- tests use fake data only

## Definition of Done

```text
CRM lead detail endpoint exists
core sections returned
response shape documented
tests pass
```
