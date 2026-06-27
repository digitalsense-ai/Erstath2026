# ISSUE-040 - Add Screening Fallback Handling

Version: 1.0 Draft
Status: Planned
Epic: EPIC-D AI Screening Service
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: Screening / Reliability
Related: docs/03-scoring-engine.md, backlog/epics/EPIC-D-ai-screening-service.md, sprints/SPRINT-002-conversation.md

## Purpose

Add predictable fallback behavior for screening runs when normal processing cannot continue.

## Scope

- define fallback states
- record run status
- prevent incomplete results from being used
- return a safe service response

## Out of Scope

- final decision engine
- CRM UI
- provider tuning

## Acceptance Criteria

- fallback states are defined
- run status is recorded
- incomplete results are not mapped
- fallback response is predictable

## Test Requirements

- fallback state test
- status recording test

## Definition of Done

```text
fallback handling exists
run status recorded
incomplete result not mapped
tests pass
```
