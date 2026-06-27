# ISSUE-039 - Map AI Screening Output to Facts and Scores

Version: 1.0 Draft
Status: Planned
Epic: EPIC-D AI Screening Service
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: AI Screening / Mapping
Related: docs/03-scoring-engine.md, docs/12-data-dictionary.md, backlog/epics/EPIC-D-ai-screening-service.md, sprints/SPRINT-002-conversation.md

## Purpose

Map validated AI screening output into lead facts and lead scores.

## Scope

- create mapping service
- map fact suggestions to LeadFact
- map score output to LeadScore
- keep AI-created facts unconfirmed by default
- preserve source and confidence metadata

## Out of Scope

- final decision engine
- CRM UI
- provider setup

## Acceptance Criteria

- mapper exists
- validated output can create facts
- validated output can create scores
- AI facts are unconfirmed by default
- tests use fake data only

## Test Requirements

- map facts test
- map scores test
- confirmation state test

## Definition of Done

```text
mapper exists
facts mapped correctly
scores mapped correctly
AI facts remain unconfirmed
tests pass
```
