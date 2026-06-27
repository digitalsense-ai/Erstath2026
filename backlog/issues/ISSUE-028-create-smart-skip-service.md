# ISSUE-028 - Create Smart Skip Service

Version: 1.0 Draft
Status: Planned
Epic: EPIC-C Digital First Conversation
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: Conversation / Smart Skip
Related: docs/04-conversation-engine.md, PAT-006 Smart Skip, DEC-004 Smart Skip Decision, backlog/epics/EPIC-C-digital-first-conversation.md, sprints/SPRINT-002-conversation.md

## Purpose

Create a Smart Skip service so the system avoids asking for information it already has or can safely infer.

## Scope

- create Smart Skip service
- evaluate known facts
- evaluate missing information records
- decide whether a question can be skipped
- record skip reason where appropriate

## Out of Scope

- AI provider calls
- final decision logic
- frontend UI

## Data Impact

Uses facts and missing information records.

## Acceptance Criteria

- service exists
- known facts prevent duplicate questions
- skip reasons can be returned
- uncertain information is not treated as confirmed
- tests use fake data only

## Test Requirements

- test skip when confirmed fact exists
- test no skip when fact is uncertain
- test skip reason output

## Definition of Done

```text
Smart Skip service exists
skip logic works for known facts
uncertain facts are handled safely
service tests pass
```
