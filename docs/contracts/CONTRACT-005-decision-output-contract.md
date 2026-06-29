# CONTRACT-005 - Decision Output Contract

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering
Domain: JSON Contracts / Decision
Related: docs/specifications/SPEC-003-screening-and-decision-api.md, docs/specifications/SPEC-009-screening-decision-review-schema.md, docs/developer-handbook/DEV-006-decision-engine-guide.md

## Purpose

Define the JSON shape for decision engine output.

## Decision Input

```json
{
  "lead_id": "uuid",
  "scores": [],
  "facts": [],
  "missing_information": [],
  "screening_flags": []
}
```

## Decision Output

```json
{
  "outcome": "continue_intake",
  "next_step": "ask_next_question",
  "reason_codes": [],
  "confidence": 0.0,
  "evaluator_version": "v1",
  "input_snapshot": {}
}
```

## Allowed Outcomes

```text
continue_intake
request_documents
human_review
crm_handover
guide_elsewhere
pause
```

## Allowed Next Steps

```text
ask_next_question
request_documents
create_review
create_handover
guide_elsewhere
wait_for_user
```

## Reason Code Shape

```json
{
  "code": "MISSING_CRITICAL_INFORMATION",
  "message": "A critical item is still missing.",
  "severity": "medium"
}
```

## Validation Rules

```text
outcome is required
next_step is required
reason_codes must be array
confidence must be between 0 and 1
input_snapshot should preserve relevant input for traceability
```

## Definition of Done

```text
decision input defined
decision output defined
allowed outcomes listed
next steps listed
reason code shape defined
validation rules documented
```
