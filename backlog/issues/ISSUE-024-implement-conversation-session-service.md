# ISSUE-024 - Implement Conversation Session Service

Version: 1.0 Draft
Status: Planned
Epic: EPIC-C Digital First Conversation
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: Conversation / Service
Related: docs/04-conversation-engine.md, backlog/epics/EPIC-C-digital-first-conversation.md, sprints/SPRINT-002-conversation.md

## Purpose

Implement the service layer for conversation session handling.

## Scope

- create conversation session service
- load lead and current state
- save incoming user input
- return structured response data
- keep controller thin

## Out of Scope

- AI provider calls
- CRM handover
- frontend UI

## Data Impact

Uses Lead and LeadConversation records.

## Acceptance Criteria

- service exists
- controller delegates to service
- user input can be saved
- response structure is predictable
- tests use fake data only

## Test Requirements

- normal session service test
- invalid state service test

## Definition of Done

```text
conversation service implemented
controller uses service
user input can be processed
service tests pass
```
