# ISSUE-064 - Add CRM Handover Status Update

Version: 1.0 Draft
Status: Planned
Epic: EPIC-F CRM Lead Board and Detail
Sprint: SPRINT-004 CRM Handover
Priority: High
Owner: Engineering
Domain: CRM / Status
Related: docs/05-crm-workflow.md, backlog/epics/EPIC-F-crm-lead-board-and-detail.md, sprints/SPRINT-004-crm-handover.md

## Purpose

Allow the system to mark when a lead has been prepared for CRM handover.

## Scope

- define handover status values
- update lead status after snapshot creation
- store timestamp where relevant
- keep status update separate from final case handling

## Acceptance Criteria

- handover status can be updated
- timestamp can be stored where relevant
- update is covered by tests
- fake data only

## Definition of Done

```text
handover status supported
lead status updates correctly
timestamp handled
tests pass
```
