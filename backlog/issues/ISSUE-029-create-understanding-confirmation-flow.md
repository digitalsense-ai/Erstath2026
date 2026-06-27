# ISSUE-029 - Create Understanding Confirmation Flow

Version: 1.0 Draft
Status: Planned
Epic: EPIC-C Digital First Conversation
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: Conversation / Confirmation
Related: docs/experience/DOC-021-digital-first-conversation-flow.md, backlog/epics/EPIC-C-digital-first-conversation.md, sprints/SPRINT-002-conversation.md

## Purpose

Create a flow where the system confirms understood facts before later use.

## Scope

- build confirmation step
- show understood facts
- allow correction
- mark confirmed facts
- keep unconfirmed facts separate

## Out of Scope

- routing decision
- CRM UI
- AI provider integration

## Data Impact

Uses `lead_facts` and conversation messages.

## Acceptance Criteria

- confirmation flow exists
- facts can be confirmed
- facts can be corrected
- confirmed state is stored
- tests use fake data only

## Test Requirements

- confirmation test
- correction test
- unconfirmed facts test

## Definition of Done

```text
confirmation flow exists
fact confirmation works
fact correction works
tests pass
```
