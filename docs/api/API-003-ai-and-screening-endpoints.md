# API-003 - AI and Screening Endpoints

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering / AI
Domain: API Implementation Readiness / AI and Screening
Related: docs/contracts/CONTRACT-003-fact-extraction-contract.md, docs/contracts/CONTRACT-004-screening-output-contract.md, docs/prompts/PROMPT-003-fact-extraction-prompt.md, docs/prompts/PROMPT-004-screening-prompt.md

## Purpose

Define the MVP endpoints and internal boundaries for fact extraction and screening.

## Endpoint Summary

```text
POST /api/leads/{lead_public_id}/facts/extract
GET /api/leads/{lead_public_id}/facts
POST /api/leads/{lead_public_id}/screening
GET /api/leads/{lead_public_id}/screening/latest
```

## POST /api/leads/{lead_public_id}/facts/extract

Purpose:

```text
Run fact extraction against the latest user message or supplied conversation context.
```

Controller:

```text
FactExtractionController@store
```

Request:

```json
{
  "data": {
    "message_id": "integer|null",
    "force": false
  },
  "meta": {},
  "errors": []
}
```

Response follows CONTRACT-003.

Implementation notes:

```text
AI output must be validated before facts are persisted.
AI-created facts must be unconfirmed by default.
Invalid AI output must create an ai_runs failure or fallback record.
```

## GET /api/leads/{lead_public_id}/facts

Purpose:

```text
Return known facts and missing information for a lead.
```

Controller:

```text
LeadFactController@index
```

Response should include:

```text
facts
missing_information
confirmation_state
source
confidence
```

## POST /api/leads/{lead_public_id}/screening

Purpose:

```text
Run screening based on current facts, missing information and conversation summary.
```

Controller:

```text
ScreeningController@store
```

Response follows CONTRACT-004.

Implementation notes:

```text
Create ai_runs record.
Validate screening JSON.
Persist lead_scores only after validation.
Store screening flags in metadata or follow-up table if needed.
Do not create final decision here.
```

## GET /api/leads/{lead_public_id}/screening/latest

Purpose:

```text
Return latest screening run and score inputs.
```

Controller:

```text
ScreeningController@showLatest
```

## Required Services

```text
AiClient
AiRunService
FactExtractionService
FactValidationService
LeadFactService
MissingInformationService
ScreeningService
ScreeningValidationService
LeadScoreService
AuditLogger
```

## Feature Tests

Initial tests should cover:

```text
fact extraction stores unconfirmed facts
invalid fact JSON is rejected
missing information is created
screening creates ai_run
screening stores score rows
invalid screening output does not persist scores
screening does not create final decision
```

## Definition of Done

```text
AI endpoints listed
screening endpoints listed
controllers mapped
validation behavior documented
required services listed
initial feature tests listed
```
