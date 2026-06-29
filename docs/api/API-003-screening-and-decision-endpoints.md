# API-003 - Screening and Decision Endpoints

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: API Implementation Readiness / Screening and Decision
Related: docs/contracts/CONTRACT-004-screening-output-contract.md, docs/contracts/CONTRACT-005-decision-output-contract.md, docs/prompts/PROMPT-004-screening-prompt.md, docs/prompts/PROMPT-005-decision-support-prompt.md

## Purpose

Define implementation-ready API and service boundaries for screening and decision execution.

---

## Endpoints

```text
POST /api/leads/{lead_public_id}/screening-runs
GET  /api/leads/{lead_public_id}/scores
POST /api/leads/{lead_public_id}/decisions
GET  /api/leads/{lead_public_id}/decisions/latest
```

---

## POST /api/leads/{lead_public_id}/screening-runs

Purpose:

```text
Create an AI run, validate screening output and persist score rows.
```

Controller:

```text
Api/ScreeningRunController@store
```

Service:

```text
ScreeningService::runForLead
```

Request DTO:

```text
RunScreeningData
```

Response follows CONTRACT-004.

Implementation rules:

```text
Create ai_runs row before AI call when possible.
Store validation_status.
Do not persist invalid score output.
Use fallback or human review if validation fails.
```

---

## GET /api/leads/{lead_public_id}/scores

Purpose:

```text
Return latest persisted score rows for a lead.
```

Controller:

```text
Api/LeadScoreController@index
```

Response:

```json
{
  "data": {
    "lead_public_id": "uuid",
    "scores": []
  },
  "meta": {},
  "errors": []
}
```

---

## POST /api/leads/{lead_public_id}/decisions

Purpose:

```text
Run deterministic decision logic using facts, missing information, scores and screening flags.
```

Controller:

```text
Api/LeadDecisionController@store
```

Service:

```text
DecisionService::decideForLead
```

Request DTO:

```text
CreateDecisionData
```

Response follows CONTRACT-005.

Implementation rules:

```text
Decision engine owns final outcome.
AI may support reason-code candidates only.
Every decision must include reason_codes.
Decision must store input_snapshot.
Lead latest_decision_id may be updated after decision is saved.
```

---

## GET /api/leads/{lead_public_id}/decisions/latest

Purpose:

```text
Return latest decision for a lead.
```

Controller:

```text
Api/LeadDecisionController@latest
```

---

## Definition of Done

```text
screening endpoints listed
decision endpoints listed
controllers identified
services identified
DTOs identified
validation and persistence rules documented
```
