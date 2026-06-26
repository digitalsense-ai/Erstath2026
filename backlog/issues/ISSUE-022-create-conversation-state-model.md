# ISSUE-022 - Create Conversation State Model

Version: 1.0 Draft
Status: Planned
Epic: EPIC-C Digital First Conversation
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: Conversation / State
Related: docs/04-conversation-engine.md, docs/experience/DOC-021-digital-first-conversation-flow.md, backlog/epics/EPIC-C-digital-first-conversation.md, sprints/SPRINT-002-conversation.md

## Purpose

Create a clear conversation state model for the MVP intake flow.

The state model should make it possible to know where a lead is in the conversation and what the system should do next.

## Scope

- define conversation states
- define allowed transitions
- store current state on the lead or related structure
- document how state connects to missing information and facts
- support safe fallback state

## Out of Scope

- AI answer generation
- final screening decision
- CRM board implementation

## Data Impact

May use existing Lead fields or a related conversation state structure, depending on ISSUE-008 decisions.

## Acceptance Criteria

- conversation states are defined
- transitions are documented
- current state can be stored
- invalid state transitions are handled safely
- tests use fake data only

## Test Requirements

- test initial conversation state
- test valid state transition
- test invalid state transition handling

## Security and Privacy

State should not expose sensitive details by itself.

## Definition of Done

```text
conversation state model defined
state can be stored
valid transitions tested
invalid transitions handled
no real data introduced
```
