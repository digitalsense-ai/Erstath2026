# ISSUE-032 - Add Feature Tests for Conversation Flow

Version: 1.0 Draft
Status: Planned
Epic: EPIC-C Digital First Conversation
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: Conversation / Testing
Related: docs/04-conversation-engine.md, backlog/epics/EPIC-C-digital-first-conversation.md, sprints/SPRINT-002-conversation.md

## Purpose

Add feature tests for the MVP conversation flow.

## Scope

- test starting a conversation
- test sending a user message
- test storing system response
- test fact and missing information behavior where practical
- test confirmation flow at feature level

## Out of Scope

- real AI calls
- CRM UI testing
- browser end-to-end tests

## Data Impact

No schema changes expected.

## Acceptance Criteria

- feature tests exist
- normal conversation path is covered
- invalid input path is covered
- tests use fake data only
- no external services are required

## Test Requirements

This issue is fulfilled by the feature tests.

## Definition of Done

```text
conversation feature tests exist
happy path covered
invalid input covered
no external service dependency
tests pass
```
