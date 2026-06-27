# ISSUE-030 - Create Conversation Summary and Handover Builder

Version: 1.0 Draft
Status: Planned
Epic: EPIC-C Digital First Conversation
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: Conversation / Handover
Related: docs/04-conversation-engine.md, docs/05-crm-workflow.md, backlog/epics/EPIC-C-digital-first-conversation.md, sprints/SPRINT-002-conversation.md

## Purpose

Create a builder that produces a structured conversation summary for later CRM and review use.

## Scope

- build summary from messages and facts
- include open missing information
- include confirmation status
- save or prepare handover snapshot
- keep output predictable

## Out of Scope

- CRM UI
- final routing logic
- external export

## Data Impact

Uses Lead, LeadConversation, LeadFact, LeadMissingInformation and LeadHandoverSnapshot.

## Acceptance Criteria

- summary builder exists
- output includes known facts
- output includes missing information
- output can support handover snapshot
- tests use fake data only

## Test Requirements

- summary builder test
- missing information summary test

## Definition of Done

```text
summary builder exists
handover-ready output exists
facts and missing information included
tests pass
```
