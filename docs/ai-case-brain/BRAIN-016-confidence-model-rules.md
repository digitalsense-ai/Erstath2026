# BRAIN-016 - Confidence Model Rules

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document defines how AI Case Brain should estimate confidence in classification, scoring, routing and next-question selection.

Confidence is not a truth score. It is a system signal that indicates how safe it is to rely on the automated recommendation.

## Confidence Output

Recommended output:

```json
{
  "confidence": 0.72,
  "confidence_band": "medium_high",
  "confidence_reason_codes": [
    "case_type_known",
    "event_date_missing",
    "provider_known"
  ]
}
```

## Confidence Bands

```text
0.00-0.39 low
0.40-0.54 medium_low
0.55-0.74 medium_high
0.75-1.00 high
```

## Rule CONF-001 - Strong Domain Signal

Trigger:

Healthcare provider, treatment event and consequence are all present.

Effect:

Increase confidence in domain classification.

Reason code:

```text
strong_domain_signal
```

## Rule CONF-002 - Clear Case Type Signal

Trigger:

The user describes a clear pattern matching a known case type.

Effect:

Increase confidence in case_type.

Reason code:

```text
clear_case_type_signal
```

## Rule CONF-003 - Critical Facts Missing

Trigger:

Date, provider, consequence or treatment link is missing.

Effect:

Reduce confidence.

Reason code:

```text
critical_facts_missing_confidence_reduction
```

## Rule CONF-004 - Conflicting Facts

Trigger:

Timeline, consequence, provider or causation facts conflict.

Effect:

Reduce confidence and consider human review.

Reason code:

```text
conflicting_facts_confidence_reduction
```

## Rule CONF-005 - Documentation Signal Present

Trigger:

The user reports relevant documents or prior authority/provider acknowledgement.

Effect:

Increase confidence slightly, but do not mark facts confirmed until documents are seen.

Reason code:

```text
documentation_signal_confidence_increase
```

## Rule CONF-006 - Serious Case With Unclear Causation

Trigger:

Serious consequence is present but causation signal is weak or unclear.

Effect:

Reduce routing confidence and require human review.

Reason code:

```text
serious_case_unclear_causation_confidence_reduction
```

## Rule CONF-007 - Out Of Scope Clarity

Trigger:

The matter is clearly outside patient injury compensation screening.

Effect:

Increase confidence in guide-away routing.

Reason code:

```text
clear_out_of_scope_confidence
```

## Rule CONF-008 - Vague Message

Trigger:

The user message is too short or vague to classify.

Effect:

Set low confidence and ask one clarifying question.

Reason code:

```text
vague_message_low_confidence
```

## Rule CONF-009 - Repeated Unknowns

Trigger:

The system has asked multiple questions but critical facts remain unknown.

Effect:

Reduce confidence and route to review or guide-away depending on severity.

Reason code:

```text
repeated_unknowns_confidence_reduction
```

## Rule CONF-010 - AI Output Validated

Trigger:

AI output matches required schema and passes rule validation.

Effect:

Allow confidence to be used for routing.

Reason code:

```text
ai_output_validated
```

## Confidence Use In Routing

Suggested routing behavior:

```text
confidence < 0.40      human review or clarification
0.40-0.54              continue conversation or human review
0.55-0.74              use automated routing with caution
0.75-1.00              use automated routing unless guardrail triggers
```

## Confidence Must Not Override Guardrails

Even high confidence must not override:

- serious policy guardrails
- human review requirements
- validated blocking conditions
- staff override

## Test References

- TC-041 Human Review Unclear Case
- TC-066 One Question at a Time
- TC-088 AI Service Unavailable Fallback
- TC-089 Invalid AI Output Fallback

## References

- BRAIN-002-decision-principles-and-guardrails.md
- BRAIN-014-human-review-escalation-rules.md
- docs/contracts/CONTRACT-004-screening-output-contract.md
