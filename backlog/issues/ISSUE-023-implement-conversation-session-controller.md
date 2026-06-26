# ISSUE-023 - Implement Conversation Session Controller

Version: 1.0 Draft
Status: Planned
Epic: EPIC-C Digital First Conversation
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: Conversation / Backend
Related: docs/04-conversation-engine.md, backlog/epics/EPIC-C-digital-first-conversation.md, sprints/SPRINT-002-conversation.md

## Purpose

Implement the controller for conversation session requests.

## Scope

- create conversation session controller
- validate incoming request shape
- call the conversation service
- return a consistent JSON response
- handle known error states

## Out of Scope

- AI provider integration
- CRM handover
- frontend UI

## Data Impact

Uses Lead and LeadConversation records.

## Acceptance Criteria

- controller exists
- request validation exists
- controller delegates to service layer
- response format is consistent
- tests use fake data only

## Test Requirements

- valid request test
- invalid request test

## Definition of Done

```text
controller implemented
request validation added
service delegation works
feature tests pass
```
