# ISSUE-031 - Add Conversation State Machine Tests

Version: 1.0 Draft
Status: Planned
Epic: EPIC-C Digital First Conversation
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: Conversation / Testing
Related: docs/04-conversation-engine.md, backlog/epics/EPIC-C-digital-first-conversation.md, sprints/SPRINT-002-conversation.md

## Purpose

Add tests for the conversation state machine.

## Scope

- test initial state
- test valid transitions
- test invalid transitions
- test fallback behavior
- test completion state

## Out of Scope

- AI provider tests
- CRM UI tests
- final decision engine tests

## Data Impact

No schema changes expected.

## Acceptance Criteria

- state machine tests exist
- valid transitions pass
- invalid transitions are rejected safely
- tests use fake data only

## Test Requirements

This issue is fulfilled by the state machine test coverage.

## Definition of Done

```text
state machine tests exist
valid transitions covered
invalid transitions covered
fallback behavior covered
tests pass
```
