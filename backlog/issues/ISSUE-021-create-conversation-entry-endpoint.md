# ISSUE-021 - Create Conversation Entry Endpoint

Version: 1.0 Draft
Status: Planned
Epic: EPIC-C Digital First Conversation
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: Conversation / Backend
Related: docs/04-conversation-engine.md, docs/experience/DOC-021-digital-first-conversation-flow.md, backlog/epics/EPIC-C-digital-first-conversation.md, sprints/SPRINT-002-conversation.md

## Purpose

Create the backend entry endpoint for starting a new digital-first conversation.

The endpoint should create or locate the lead context needed for the intake flow.

## Scope

- create conversation start endpoint
- create initial Lead where needed
- return conversation/session reference
- avoid asking for unnecessary information at start
- prepare for later identity and consent gates

## Out of Scope

- full UI implementation
- AI response generation
- final decision logic
- CRM handover

## Data Impact

Uses the `leads` and `lead_conversations` structures from SPRINT-001.

## Acceptance Criteria

- endpoint exists
- a new conversation can be started
- initial lead context is created or returned
- response format is documented
- no real personal data is required for test cases

## Test Requirements

- feature test for starting a conversation
- test uses fake data only
- invalid requests return controlled errors

## Security and Privacy

Do not collect identity information before it is needed and consent rules are implemented.

## Definition of Done

```text
conversation start endpoint exists
lead context is created or returned
response format is documented
feature test passes
no real data introduced
```
