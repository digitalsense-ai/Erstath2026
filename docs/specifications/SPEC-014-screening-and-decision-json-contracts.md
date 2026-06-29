# SPEC-014 - Screening and Decision JSON Contracts

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: JSON Contracts / Screening and Decision
Related: SPEC-003-screening-and-decision-api.md, SPEC-009-screening-decision-review-schema.md, DEV-005-ai-integration-guide.md, DEV-006-decision-engine-guide.md

## Purpose

Define the JSON contracts for AI screening output, score output and decision results.

## Screening Request Context

```json
{
  "lead_id": "uuid",
  "contract_version": "v1",
  "facts": [],
  "open_items": [],
  "conversation_summary": "string|null"
}
```

## Screening Result

```json
{
  "summary": "string",
  "facts": [],
  "scores": {
    "case_strength": 0,
    "information_quality": 0,
    "commercial_value": 0,
    "lead_score": 0
  },
  "score_explanation": {
    "case_strength": [],
    "information_quality": [],
    "commercial_value": []
  },
  "open_items": [],
  "case_category": "A|B|C|D|null",
  "recommended_action": "collect_more_information|request_documents|manual_review|mitid_flow|guide_elsewhere|null",
  "confidence": 0.0
}
```

## Score Object

```json
{
  "score_type": "case_strength|information_quality|commercial_value|lead_score",
  "score_value": 0,
  "confidence": 0.0,
  "version": "v1",
  "metadata": {}
}
```

## Decision Result

```json
{
  "data": {
    "lead_id": "uuid",
    "outcome": "qualified|needs_more_information|manual_review|guide_elsewhere|not_ready",
    "next_step": "string",
    "reason_codes": [],
    "evaluator_version": "v1",
    "input_snapshot": {}
  },
  "meta": {
    "contract_version": "v1"
  },
  "errors": []
}
```

## Reason Code Object

```json
{
  "code": "SERIOUS_CONSEQUENCE_POSSIBLE",
  "severity": "info|warning|blocking",
  "message": "string"
}
```

## Validation Rules

- Scores must be numbers from 0 to 100.
- Confidence must be a number from 0.0 to 1.0.
- Case category must be A, B, C, D or null.
- Recommended action must use an allowed value.
- Decision result must include reason codes.
- Invalid AI output must not be mapped to facts or scores.

## Error Codes

```text
invalid_ai_output
screening_unavailable
score_out_of_range
invalid_recommended_action
decision_not_ready
```

## Definition of Done

```text
screening request context defined
screening result contract defined
score object defined
decision result defined
reason code object defined
validation rules documented
error codes listed
```
