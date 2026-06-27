# ISSUE-035 - Create AI Screening Request Builder

Version: 1.0 Draft
Status: Planned
Epic: EPIC-D AI Screening Service
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: AI Screening / Request
Related: docs/03-scoring-engine.md, backlog/epics/EPIC-D-ai-screening-service.md, sprints/SPRINT-002-conversation.md

## Purpose

Create a request builder for AI screening input.

## Scope

- collect relevant lead data
- include confirmed facts
- include open missing information
- include conversation summary if available
- exclude unnecessary data

## Out of Scope

- provider call
- response parsing
- decision engine

## Acceptance Criteria

- builder exists
- request payload is predictable
- unnecessary data is excluded
- tests use fake data only

## Test Requirements

- request builder test
- missing data test

## Definition of Done

```text
request builder exists
payload shape is stable
unnecessary data excluded
tests pass
```
