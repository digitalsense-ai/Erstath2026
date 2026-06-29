# API-003 - Screening and Decision API Contract

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: API Contracts / Screening and Decision
Related: docs/specifications/SPEC-003-screening-and-decision-api.md, docs/contracts/CONTRACT-004-screening-output-contract.md, docs/contracts/CONTRACT-005-decision-output-contract.md

## Purpose

Define MVP endpoints for running screening and creating decisions.

These endpoints may be internal-only in the MVP.

## Endpoints

```text
POST /api/v1/leads/{lead_public_id}/screening-runs
POST /api/v1/leads/{lead_public_id}/decisions
GET  /api/v1/leads/{lead_public_id}/decision-state
```

## POST /api/v1/leads/{lead_public_id}/screening-runs

Purpose: run or queue screening for a lead.

Request:

```json
{
  "data": {
    "mode": "sync",
    "prompt_version": "v1"
  },
  "meta": {},
  "errors": []
}
```

Response:

```json
{
  "data": {
    "lead_public_id": "uuid",
    "ai_run_id": "id|null",
    "status": "completed",
    "scores": [],
    "screening_flags": []
  },
  "meta": {},
  "errors": []
}
```

## POST /api/v1/leads/{lead_public_id}/decisions

Purpose: create a decision from current facts, missing information, scores and screening flags.

Request:

```json
{
  "data": {
    "evaluator_version": "v1"
  },
  "meta": {},
  "errors": []
}
```

Response:

```json
{
  "data": {
    "lead_public_id": "uuid",
    "decision_id": "id",
    "outcome": "continue_intake",
    "next_step": "ask_next_question",
    "reason_codes": []
  },
  "meta": {},
  "errors": []
}
```

## GET /api/v1/leads/{lead_public_id}/decision-state

Purpose: return the latest screening and decision state.

Response:

```json
{
  "data": {
    "lead_public_id": "uuid",
    "latest_scores": [],
    "latest_decision": {},
    "open_items": [],
    "screening_flags": []
  },
  "meta": {},
  "errors": []
}
```

## Validation Rules

```text
lead_public_id must exist
mode may be sync or queued
prompt_version defaults to configured screening prompt version
evaluator_version defaults to configured decision engine version
AI output must pass JSON validation before persistence
```

## Feature Test Priorities

```text
screening run stores ai_run metadata
screening run stores valid score rows
decision creation stores reason codes
invalid AI output triggers fallback or review path
```

## Definition of Done

```text
screening endpoints listed
decision endpoints listed
request and response shapes defined
validation rules documented
feature test priorities documented
```
