# ISSUE-026 - Create Fact Extraction Stub and Merge Service

Version: 1.0 Draft
Status: Planned
Epic: EPIC-C Digital First Conversation
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: Conversation / Facts
Related: docs/04-conversation-engine.md, docs/12-data-dictionary.md, patterns/PAT-001-speak-human-store-structured.md, backlog/epics/EPIC-C-digital-first-conversation.md, sprints/SPRINT-002-conversation.md

## Purpose

Create a fact extraction stub and merge service for storing structured facts from the conversation.

## Scope

- create fact extraction stub
- create fact merge service
- write facts to LeadFact records
- preserve source and confidence values
- avoid marking extracted facts as confirmed by default

## Out of Scope

- production AI extraction
- final scoring
- CRM UI

## Data Impact

Uses Lead and LeadFact records.

## Acceptance Criteria

- extraction stub exists
- merge service exists
- facts can be created or updated
- confidence and source are stored
- tests use fake data only

## Test Requirements

- new fact test
- existing fact merge test
- unconfirmed fact state test

## Definition of Done

```text
fact extraction stub exists
fact merge service exists
LeadFact records can be written
source and confidence are stored
tests pass
```
