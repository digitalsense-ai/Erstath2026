# BRAIN-024 - Fake AI Brain Scenarios

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document defines deterministic Fake AI scenarios for testing AI Case Brain before connecting a real AI provider.

The goal is stable feature tests and predictable rule evaluation.

## Scenario Principle

Fake AI should return structured signals.

AI Case Brain should then validate, interpret and route those signals.

Fake AI should not bypass the Brain rule layer.

## Scenario 1 - Diagnosis Delay Basic

Input example:

```text
My mother was diagnosed with cancer too late.
```

Fake AI signals:

```json
{
  "case_domain": "patient_injury",
  "case_type": "diagnosis_delay",
  "facts": [
    {
      "key": "condition_type",
      "value": "cancer",
      "confidence": 0.78,
      "confirmation_status": "unconfirmed"
    }
  ],
  "missing_information": [
    "event_date",
    "provider",
    "consequence"
  ]
}
```

Expected Brain result:

- next question asks about time
- reason_codes includes possible_diagnosis_delay
- missing_information includes event_date
- facts remain unconfirmed

## Scenario 2 - Missing Consequence

Input example:

```text
The hospital made a mistake during my treatment.
```

Fake AI signals:

```json
{
  "case_domain": "patient_injury",
  "case_type": "unknown_patient_injury_type",
  "facts": [],
  "missing_information": [
    "consequence",
    "event_date",
    "provider"
  ]
}
```

Expected Brain result:

- next question asks about consequence or time depending on priority
- reason_codes includes consequence_missing or critical_fact_missing

## Scenario 3 - Surgical Error

Input example:

```text
I had surgery and got permanent nerve damage afterwards.
```

Fake AI signals:

```json
{
  "case_domain": "patient_injury",
  "case_type": "surgical_error",
  "facts": [
    {
      "key": "consequence",
      "value": "permanent_injury",
      "confidence": 0.74,
      "confirmation_status": "unconfirmed"
    }
  ],
  "missing_information": [
    "event_date",
    "provider",
    "operation_type"
  ]
}
```

Expected Brain result:

- case_type is surgical_error
- consequence is detected
- next question asks about time or provider
- commercial value remains internal

## Scenario 4 - Out Of Scope

Input example:

```text
My car insurance company rejected my claim.
```

Fake AI signals:

```json
{
  "case_domain": "insurance_or_private_damage",
  "case_type": "out_of_scope",
  "facts": [],
  "missing_information": []
}
```

Expected Brain result:

- routing_target is guide_away
- reason_codes includes clearly_out_of_scope
- user-safe summary does not give legal conclusions

## Scenario 5 - Serious Case With Low Confidence

Input example:

```text
My father died after several hospital visits, but I do not know what happened.
```

Fake AI signals:

```json
{
  "case_domain": "patient_injury",
  "case_type": "unknown_patient_injury_type",
  "facts": [
    {
      "key": "consequence",
      "value": "death",
      "confidence": 0.7,
      "confirmation_status": "unconfirmed"
    }
  ],
  "missing_information": [
    "event_date",
    "provider",
    "treatment_link"
  ]
}
```

Expected Brain result:

- human_review_required may be true if confidence is low
- review priority is high or medium depending on implementation
- reason_codes includes serious_consequence_with_missing_facts

## Scenario 6 - Invalid Fake AI Output

Input example:

```text
Invalid output simulation
```

Fake AI signals:

```json
{
  "case_domain": null,
  "facts": "invalid"
}
```

Expected Brain result:

- output validator rejects the result
- safe fallback is used
- error handling follows API-READINESS-004

## Scenario 7 - Repeated Question Prevention

Conversation:

```text
Assistant asked: When did this happen?
User answered: It happened in 2022.
```

Fake AI signals:

```json
{
  "case_domain": "patient_injury",
  "case_type": "diagnosis_delay",
  "facts": [
    {
      "key": "event_date",
      "value": "2022",
      "confidence": 0.65,
      "confirmation_status": "unconfirmed"
    }
  ],
  "missing_information": [
    "provider",
    "consequence"
  ]
}
```

Expected Brain result:

- next question must not ask for event_date again
- reason_codes includes skip_repeated_question or reuse_partial_answer

## Test References

- TC-001
- TC-016
- TC-041
- TC-066
- TC-067
- TC-081
- TC-088
- TC-089

## References

- BRAIN-018-brain-output-model.md
- BRAIN-023-implementation-checklist.md
- docs/mvp-start/MVP-START-004-fake-ai-provider-implementation-plan.md
