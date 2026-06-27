# ISSUE-034 - Create AI Screening Service Interface

Version: 1.0 Draft
Status: Planned
Epic: EPIC-D AI Screening Service
Sprint: SPRINT-002 Conversation
Priority: High
Owner: Engineering
Domain: AI / Screening
Related: POL-008 AI Usage Policy, docs/03-scoring-engine.md, backlog/epics/EPIC-D-ai-screening-service.md, sprints/SPRINT-002-conversation.md

## Purpose

Create an interface for the AI screening service.

## Scope

- define service contract
- define input structure
- define output structure
- keep provider implementation replaceable
- support fake implementation for tests

## Out of Scope

- real AI provider integration
- prompt tuning
- final decision routing

## Data Impact

Uses Lead, LeadFact, LeadScore and AiRun records where relevant.

## Acceptance Criteria

- interface exists
- fake implementation can be used in tests
- service contract is documented
- no real provider call is required

## Test Requirements

- contract test or fake service test

## Definition of Done

```text
AI screening interface exists
fake implementation possible
contract documented
tests pass
```
