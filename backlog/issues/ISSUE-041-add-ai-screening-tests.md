# ISSUE-041 - Add AI Screening Tests

Version: 1.0 Draft
Status: Planned
Epic: EPIC-D AI Screening Service
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: AI Screening / Testing
Related: docs/03-scoring-engine.md, backlog/epics/EPIC-D-ai-screening-service.md, sprints/SPRINT-002-conversation.md

## Purpose

Add tests for the AI screening service components.

## Scope

- test request builder
- test response schema or validator
- test output mapping
- test run metadata persistence
- test fallback behavior

## Out of Scope

- live provider tests
- CRM UI tests
- final routing tests

## Acceptance Criteria

- screening tests exist
- mocked service path is covered
- mapping path is covered
- fallback path is covered
- fake data only

## Test Requirements

This issue is fulfilled by the screening test suite.

## Definition of Done

```text
screening tests exist
mock path covered
mapping path covered
fallback path covered
tests pass
```
