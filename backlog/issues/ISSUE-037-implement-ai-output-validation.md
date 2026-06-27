# ISSUE-037 - Implement AI Output Validation

Version: 1.0 Draft
Status: Planned
Epic: EPIC-D AI Screening Service
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: AI Screening / Validation
Related: docs/03-scoring-engine.md, backlog/epics/EPIC-D-ai-screening-service.md, sprints/SPRINT-002-conversation.md

## Purpose

Validate AI screening output before it is stored or used.

## Scope

- create output validator
- validate required fields
- validate score ranges
- validate confidence values
- reject malformed output
- return clear validation errors

## Out of Scope

- provider integration
- final decision engine
- CRM UI

## Acceptance Criteria

- validator exists
- valid output passes
- invalid output fails safely
- errors are recorded clearly
- tests use fake fixtures only

## Test Requirements

- valid output test
- invalid output test
- missing field test

## Definition of Done

```text
validator exists
valid output accepted
invalid output rejected safely
tests pass
```
