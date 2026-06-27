# ISSUE-036 - Create AI Screening Response Schema

Version: 1.0 Draft
Status: Planned
Epic: EPIC-D AI Screening Service
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: AI Screening / Schema
Related: docs/03-scoring-engine.md, backlog/epics/EPIC-D-ai-screening-service.md, sprints/SPRINT-002-conversation.md

## Purpose

Create a response schema for AI screening output.

## Scope

- define expected response fields
- define score fields
- define fact suggestion fields
- define confidence fields
- define error or incomplete states

## Out of Scope

- provider integration
- final routing decision
- CRM UI

## Acceptance Criteria

- schema exists
- required fields are documented
- optional fields are documented
- invalid output can be detected later

## Test Requirements

- schema fixture test if practical
- invalid response fixture test if practical

## Definition of Done

```text
response schema exists
required fields documented
invalid output cases considered
```
