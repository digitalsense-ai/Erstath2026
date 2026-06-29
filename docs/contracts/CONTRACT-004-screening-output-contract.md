# CONTRACT-004 - Screening Output Contract

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering / AI
Domain: JSON Contracts / Screening
Related: docs/specifications/SPEC-003-screening-and-decision-api.md, docs/specifications/SPEC-009-screening-decision-review-schema.md

## Purpose

Define the JSON shape for screening results.

## Screening Input

```json
{
  "lead_id": "uuid",
  "facts": [],
  "missing_information": [],
  "conversation_summary": "string"
}
```

## Screening Output

```json
{
  "ai_run": {
    "prompt_name": "screening_v1",
    "prompt_version": "v1",
    "status": "completed",
    "validation_status": "valid"
  },
  "scores": [],
  "summary": "string",
  "screening_flags": [],
  "confidence": 0.0
}
```

## Score Shape

```json
{
  "score_type": "case_strength",
  "score_value": 72,
  "confidence": 0.8,
  "version": "v1",
  "explanation": [
    "Treatment context described",
    "Current consequence described"
  ]
}
```

## Allowed Score Types

```text
case_strength
information_quality
commercial_value
lead_score
```

## Screening Flag Shape

```json
{
  "code": "needs_human_review",
  "severity": "medium",
  "message": "Causality is unclear."
}
```

## Validation Rules

```text
scores must be array
score_type must be allowed value
score_value must be between 0 and 100
confidence must be between 0 and 1
AI output must be validated before scores are persisted
```

## Definition of Done

```text
screening input defined
screening output defined
score shape defined
allowed score types listed
validation rules documented
```
