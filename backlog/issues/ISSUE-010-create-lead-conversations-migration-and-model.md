# ISSUE-010 - Create Lead Conversations Migration and Model

Version: 1.0 Draft
Status: Planned
Epic: EPIC-B Data Model and Migrations
Sprint: SPRINT-001 Data Model
Priority: High
Owner: Engineering
Domain: Data / Conversation
Related: docs/12-data-dictionary.md, docs/04-conversation-engine.md, backlog/epics/EPIC-B-data-model-and-migrations.md, sprints/SPRINT-001-data-model.md

## Purpose

Create the `lead_conversations` table and Laravel model.

This table stores user and system conversation messages so the intake flow remains auditable and can support CRM handover later.

## Scope

- create `lead_conversations` migration
- create `LeadConversation` model
- relate conversation messages to `Lead`
- store sender or role information
- store message content safely
- include ordering or timestamp strategy
- add fake-only factory if needed

## Out of Scope

- building the conversation UI
- implementing AI responses
- implementing Smart Skip
- creating CRM views

## Data Impact

Creates:

```text
lead_conversations
LeadConversation model
Lead -> lead_conversations relationship
```

## Acceptance Criteria

- migration exists
- model exists
- relationship to Lead works
- user/system message type can be stored
- messages can be ordered by time or sequence
- no real personal data is included in tests or factories

## Test Requirements

- migration runs
- a lead can have conversation messages
- messages can be retrieved in expected order

## Security and Privacy

Conversation text may contain sensitive information. Tests and factories must use fake-only examples.

## Definition of Done

```text
lead_conversations table exists
LeadConversation model exists
Lead relationship works
basic model test passes
no real data introduced
```
