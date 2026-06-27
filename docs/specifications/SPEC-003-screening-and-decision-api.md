# SPEC-003 - Screening and Decision API

Version: 1.0 Draft
Status: Planned
Owner: Product / Engineering
Domain: API Specification / Screening and Decision
Related: docs/03-scoring-engine.md, docs/31-acceptance-and-routing-architecture.md, backlog/issues/ISSUE-034-create-ai-screening-service-interface.md, backlog/issues/ISSUE-045-create-decision-engine-service-interface.md

## Purpose

Define the MVP API endpoints for screening and decision evaluation.

These endpoints may be internal-only in the first MVP version.

## Endpoints

```text
POST /api/v1/leads/{lead_id}/screening/run
GET  /api/v1/leads/{lead_id}/screening/latest
POST /api/v1/leads/{lead_id}/decision/run
GET  /api/v1/leads/{lead_id}/decision/latest
```

## Run Screening

```text
POST /api/v1/leads/{lead_id}/screening/run
```

Request:

```json
{
  "mode": "standard"
}
```

Response:

```json
{
  "data": {
    "lead_id": "uuid",
    "ai_run_id": "uuid",
    "status": "completed",
    "facts_created": 0,
    "scores_created": 0
  },
  "meta": {},
  "errors": []
}
```

## Get Latest Screening

```text
GET /api/v1/leads/{lead_id}/screening/latest
```

Response includes latest AI run metadata, validation status, facts suggested and scores created.

## Run Decision

```text
POST /api/v1/leads/{lead_id}/decision/run
```

Request:

```json
{
  "mode": "standard"
}
```

Response:

```json
{
  "data": {
    "lead_id": "uuid",
    "decision_id": "uuid",
    "outcome": "string",
    "next_step": "string",
    "reason_codes": []
  },
  "meta": {},
  "errors": []
}
```

## Get Latest Decision

```text
GET /api/v1/leads/{lead_id}/decision/latest
```

Response includes latest decision outcome, next step, reason codes and evaluator version.

## Error Cases

- lead_not_found
- insufficient_information
- screening_unavailable
- validation_error
- decision_not_available

## Definition of Done

```text
screening endpoints listed
decision endpoints listed
request examples included
response examples included
error cases listed
```
