# RULEBOOK-130 - Confidence Rules

Version: 1.0
Status: Active Draft
Scope: Long-term AI Case Brain rule library

## Purpose

This document defines confidence rules for AI Case Brain.

Confidence shows how safe it is to rely on the automated recommendation. It is not a truth score.

## Confidence Bands

```text
0.00-0.39 low
0.40-0.54 medium_low
0.55-0.74 medium_high
0.75-1.00 high
```

## Rule CONF-001 - Strong Domain Signal

Version: 1.0
Status: active
Category: Confidence
Reason code: strong_domain_signal

### Trigger

Healthcare provider, treatment event and consequence are all present.

### Effect

Increase confidence in domain classification.

### Test References

TC-001

## Rule CONF-002 - Clear Case Type Signal

Version: 1.0
Status: active
Category: Confidence
Reason code: clear_case_type_signal

### Trigger

The user clearly describes a known case type pattern.

### Effect

Increase confidence in case type classification.

### Test References

TC-001
TC-003

## Rule CONF-003 - Critical Facts Missing

Version: 1.0
Status: active
Category: Confidence
Reason code: critical_facts_missing_confidence_reduction

### Trigger

Important facts such as date, provider, consequence or treatment link are missing.

### Effect

Reduce confidence.

### Test References

TC-061
TC-066

## Rule CONF-004 - Conflicting Facts

Version: 1.0
Status: active
Category: Confidence
Reason code: conflicting_facts_confidence_reduction

### Trigger

Known facts conflict.

### Effect

Reduce confidence and consider human review.

### Test References

TC-041
TC-089

## Rule CONF-005 - Documentation Signal Present

Version: 1.0
Status: active
Category: Confidence
Reason code: documentation_signal_confidence_increase

### Trigger

Relevant documents or provider acknowledgement are mentioned.

### Effect

Increase confidence slightly, but keep facts unconfirmed until reviewed.

### Test References

TC-074

## Rule CONF-006 - Serious Case With Unclear Causation

Version: 1.0
Status: active
Category: Confidence
Reason code: serious_case_unclear_causation_confidence_reduction

### Trigger

Serious consequence exists and causation is unclear.

### Effect

Reduce routing confidence and route to human review.

### Test References

TC-041
TC-073

## Rule CONF-007 - Clear Out Of Scope Confidence

Version: 1.0
Status: active
Category: Confidence
Reason code: clear_out_of_scope_confidence

### Trigger

The matter is clearly outside patient injury compensation screening.

### Effect

Increase confidence in guide-away routing, unless human review override applies.

### Test References

TC-081

## Rule CONF-008 - Vague Message Low Confidence

Version: 1.0
Status: active
Category: Confidence
Reason code: vague_message_low_confidence

### Trigger

The user message is too short or vague to classify.

### Effect

Set or keep low confidence and ask one clarifying question.

### Test References

TC-066

## Rule CONF-009 - Repeated Unknowns

Version: 1.0
Status: active
Category: Confidence
Reason code: repeated_unknowns_confidence_reduction

### Trigger

Several questions have been asked and critical facts remain unknown.

### Effect

Reduce confidence and route to review or guide-away depending on other signals.

### Test References

TC-068

## Rule CONF-010 - AI Output Validated

Version: 1.0
Status: active
Category: Confidence
Reason code: ai_output_validated

### Trigger

AI or Brain output matches required schema and rule validation.

### Effect

Allow confidence to be used in routing.

### Test References

TC-089

## Rule CONF-011 - Invalid Output Confidence Block

Version: 1.0
Status: active
Category: Confidence
Reason code: invalid_output_confidence_block

### Trigger

Output fails validation.

### Effect

Do not trust confidence value. Use fallback handling.

### Test References

TC-088
TC-089

## Rule CONF-012 - Confidence Cannot Override Guardrails

Version: 1.0
Status: active
Category: Confidence
Reason code: confidence_cannot_override_guardrails

### Trigger

A high confidence result conflicts with guardrails or human review triggers.

### Effect

Guardrails and review triggers win.

### Test References

TC-041
TC-096

## References

- RULEBOOK-003-rule-authoring-template.md
- docs/ai-case-brain/BRAIN-016-confidence-model-rules.md
- docs/ai-case-brain/BRAIN-020-first-50-mvp-rules-catalog.md
