# BRAIN-018 - Brain Output Model

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document defines the recommended combined output model for AI Case Brain.

The output model combines classification, scores, routing, confidence, next question, review flags and reason codes into one structured result.

## Output Principle

The brain output should be:

- valid JSON
- contract compatible
- testable
- explainable
- safe for persistence
- separated from user-facing wording where possible

## Recommended Output Shape

```json
{
  "case_domain": "patient_injury",
  "case_type": "diagnosis_delay",
  "secondary_case_types": [],
  "case_category": "B",
  "scores": {
    "case_strength": 74,
    "information_quality": 55,
    "commercial_value": 68
  },
  "confidence": {
    "value": 0.72,
    "band": "medium_high",
    "reason_codes": [
      "strong_domain_signal",
      "event_date_missing"
    ]
  },
  "routing": {
    "routing_target": "continue_conversation",
    "recommended_action": "ask_next_question",
    "human_review_required": false,
    "review_priority": null
  },
  "facts": [
    {
      "key": "injury_type",
      "value": "diagnosis_delay",
      "confidence": 0.82,
      "confirmation_status": "unconfirmed"
    }
  ],
  "missing_information": [
    {
      "key": "event_date",
      "priority": 100,
      "reason_code": "event_date_missing"
    }
  ],
  "next_question": {
    "question": "When did this happen, approximately?",
    "reason_code": "ask_time_question_first"
  },
  "reason_codes": [
    "possible_diagnosis_delay",
    "event_date_missing",
    "ask_time_question_first"
  ],
  "explanation": {
    "internal_summary": "Possible delayed diagnosis. Event date is missing, so screening should continue with a time question.",
    "user_safe_summary": "We need one more detail to better understand when this happened."
  }
}
```

## Required Sections

For MVP v1, the output should include:

- case_domain
- case_type
- scores
- confidence
- routing
- facts
- missing_information
- next_question or null
- reason_codes
- explanation

## Field Rules

### case_domain

Must use values defined in BRAIN-005.

### case_type

Must use values defined in BRAIN-006.

### scores

Must include:

- case_strength
- information_quality
- commercial_value

### confidence

Must include:

- value
- band
- reason_codes

### routing

Must include:

- routing_target
- recommended_action
- human_review_required
- review_priority when relevant

### facts

AI-created facts must start as:

```text
unconfirmed
```

### missing_information

Each missing item should include:

- key
- priority
- reason_code

### next_question

Should be null when the next step is not a question.

When present, it must contain one question only.

### reason_codes

Reason codes should explain the main route and recommendation.

### explanation

Should contain:

- internal_summary
- user_safe_summary

## Validation Rules

Reject or fallback when:

- required fields are missing
- confidence is outside 0-1
- scores are outside 0-100
- routing target is unknown
- case type is unknown without reason
- multiple questions are returned in next_question
- facts are marked confirmed without trusted source

## Relationship To Contracts

This output model should map into existing JSON contracts:

- CONTRACT-003 Fact Extraction Contract
- CONTRACT-004 Screening Output Contract
- CONTRACT-005 Decision Output Contract
- CONTRACT-007 Human Review Contract

## Test References

- TC-001 Basic Patient Injury Flow
- TC-016 Repeated Question Prevention
- TC-066 One Question at a Time
- TC-088 AI Service Unavailable Fallback
- TC-089 Invalid AI Output Fallback
- TC-096 Reason Code Explanation

## References

- BRAIN-001-ai-case-brain-overview.md
- BRAIN-004-rule-library-structure.md
- BRAIN-013-smart-question-rules.md
- BRAIN-016-confidence-model-rules.md
- BRAIN-017-audit-and-explanation-rules.md
