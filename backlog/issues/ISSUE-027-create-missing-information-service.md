# ISSUE-027 - Create Missing Information Service

Version: 1.0 Draft
Status: Planned
Epic: EPIC-C Digital First Conversation
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: Conversation / Missing Information
Related: docs/04-conversation-engine.md, DEC-007 Information Quality, backlog/epics/EPIC-C-digital-first-conversation.md, sprints/SPRINT-002-conversation.md

## Purpose

Create a service that identifies and tracks missing information for a lead.

## Scope

- create missing information service
- compare required information with available facts
- create open missing information records
- mark records resolved when facts are available
- return next missing item for conversation flow

## Out of Scope

- AI provider calls
- final routing decision
- frontend UI

## Data Impact

Uses `lead_missing_information` and `lead_facts`.

## Acceptance Criteria

- service exists
- missing items can be created
- resolved items can be updated
- next missing item can be returned
- tests use fake data only

## Test Requirements

- test missing item creation
- test resolved status update
- test next missing item selection

## Definition of Done

```text
missing information service exists
missing items are tracked
resolved status works
service tests pass
```
