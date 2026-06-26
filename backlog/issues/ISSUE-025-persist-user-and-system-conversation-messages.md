# ISSUE-025 - Persist User and System Conversation Messages

Version: 1.0 Draft
Status: Planned
Epic: EPIC-C Digital First Conversation
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: Conversation / Persistence
Related: docs/04-conversation-engine.md, docs/experience/DOC-021-digital-first-conversation-flow.md, backlog/epics/EPIC-C-digital-first-conversation.md, sprints/SPRINT-002-conversation.md

## Purpose

Persist user and system messages during the conversation flow.

## Scope

- save user messages
- save system messages
- keep message order
- relate messages to Lead
- expose messages to later handover and review work

## Out of Scope

- AI provider integration
- full frontend chat UI
- CRM handover generation

## Data Impact

Uses `lead_conversations` from SPRINT-001.

## Acceptance Criteria

- user messages can be saved
- system messages can be saved
- messages are ordered correctly
- messages relate to the correct Lead
- tests use fake data only

## Test Requirements

- message persistence test
- message ordering test

## Definition of Done

```text
user messages persist
system messages persist
message ordering works
relationship to Lead works
tests pass
```
