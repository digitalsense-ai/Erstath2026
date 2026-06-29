# API-CONTRACT-003 - Screening and Decision API

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering / AI
Domain: API Contracts / Screening and Decision
Related: docs/specifications/SPEC-003-screening-and-decision-api.md, docs/contracts/CONTRACT-003-fact-extraction-contract.md, docs/contracts/CONTRACT-004-screening-output-contract.md, docs/contracts/CONTRACT-005-decision-output-contract.md

## Purpose

Define internal API contracts for fact extraction, screening and decision execution.

These endpoints are internal MVP endpoints and should not be exposed as public user actions.

## POST /api/v1/internal/leads/{lead_public_id}/extract-facts

Extracts structured facts and missing information from recent conversation state.

### Response

```json
{
  "data": {
    "summary": "string",
    "facts": [],
    "missing_information": [],
    "confidence": 0.0
  },
  "meta": {
    "ai_run_id": "id|null"
  },
  "errors": []
}
```

## POST /api/v1/internal/leads/{lead_public_id}/screen

Creates screening output and score records.

### Response

```json
{
  "data": {
    "ai_run": {},
    "scores": [],
    "summary": "string",
    "screening_flags": [],
    "confidence": 0.0
  },
  "meta": {
    "ai_run_id": "id|null"
  },
  "errors": []
}
```

## POST /api/v1/internal/leads/{lead_public_id}/decide

Runs the decision engine using facts, scores, open items and screening flags.

### Response

```json
{
  "data": {
    "outcome": "continue_intake",
    "next_step": "ask_next_question",
    "reason_codes": [],
    "confidence": 0.0,
    "evaluator_version": "v1",
    "input_snapshot": {}
  },
  "meta": {
    "decision_id": "id|null"
  },
  "errors": []
}
```

## Rules

```text
AI output must be validated before database mapping
invalid AI output must not create facts, scores or decisions
scores are not decisions
decision output must include reason codes
deterministic decision rules should override unsupported AI suggestions
```

## Definition of Done

```text
fact extraction endpoint defined
screening endpoint defined
decision endpoint defined
response shapes defined
validation and mapping rules documented
```
