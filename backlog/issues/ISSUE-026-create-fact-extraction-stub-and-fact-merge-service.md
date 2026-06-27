# ISSUE-026 - Create Fact Extraction Stub and Fact Merge Service

Version: 1.0 Draft
Status: Planned
Epic: EPIC-C Digital First Conversation
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: Conversation / Facts
Related: docs/04-conversation-engine.md, PAT-001 Speak Human Store Structured, backlog/epics/EPIC-C-digital-first-conversation.md, sprints/SPRINT-002-conversation.md

## Purpose

Create a simple fact extraction stub and merge service for structured lead facts.

## Scope

- create fact extraction interface or stub
- create fact merge service
- store extracted facts as unconfirmed by default
- update existing facts without creating duplicates
- keep source and confidence fields where available

## Out of Scope

- real AI extraction
- final decision logic
- CRM UI

## Data Impact

Uses `lead_facts` from SPRINT-001.

## Acceptance Criteria

- extraction stub exists
- merge service exists
- duplicate facts are handled
- extracted facts are not confirmed by default
- tests use fake data only

## Test Requirements

- test new fact creation
- test duplicate or updated fact handling
- test unconfirmed default state

## Definition of Done

```text
fact extraction stub exists
fact merge service exists
facts persist correctly
merge behavior tested
```
