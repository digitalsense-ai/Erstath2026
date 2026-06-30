# RULEBOOK-080 - Commercial Value Rules

Version: 1.0
Status: Active Draft
Scope: Long-term AI Case Brain rule library

## Purpose

This document defines internal commercial value rules.

Commercial value is used only for internal prioritisation. It must not be exposed to the user as a score, revenue estimate or profit-related statement.

## Commercial Value Bands

```text
80-100 very_high
60-79 high
40-59 medium
0-39 low
unknown
```

## Rule CV-001 - Death Value Signal

Version: 1.0
Status: active
Category: Commercial value
Reason code: death_commercial_value_signal

### Trigger

The consequence includes death.

### Effect

Increase internal commercial value and review sensitivity.

### Test References

TC-071

## Rule CV-002 - Severe Permanent Injury Value Signal

Version: 1.0
Status: active
Category: Commercial value
Reason code: severe_permanent_injury_value_signal

### Trigger

The consequence includes severe permanent injury or life-changing harm.

### Effect

Increase internal commercial value.

### Test References

TC-071

## Rule CV-003 - Permanent Injury Value Signal

Version: 1.0
Status: active
Category: Commercial value
Reason code: permanent_injury_value_signal

### Trigger

The consequence includes lasting injury, chronic symptoms or permanent functional loss.

### Effect

Increase internal commercial value.

### Test References

TC-071

## Rule CV-004 - Work Capacity Loss Value Signal

Version: 1.0
Status: active
Category: Commercial value
Reason code: work_capacity_loss_value_signal

### Trigger

The user mentions loss of work capacity, long sick leave, reduced ability to work or income loss.

### Effect

Increase internal commercial value.

### Test References

TC-071
TC-074

## Rule CV-005 - Serious Disease Progression Value Signal

Version: 1.0
Status: active
Category: Commercial value
Reason code: serious_disease_progression_value_signal

### Trigger

The user describes worsened disease, delayed diagnosis or lack of follow-up with serious consequence.

### Effect

Increase internal commercial value when causation signal is meaningful.

### Test References

TC-001
TC-073

## Rule CV-006 - Documentation Supports Value Estimate

Version: 1.0
Status: active
Category: Commercial value
Reason code: documentation_supports_value_estimate

### Trigger

Relevant documentation, prior decision or provider acknowledgement is mentioned.

### Effect

Increase confidence in the internal value estimate.

### Test References

TC-074

## Rule CV-007 - Low Consequence Value Signal

Version: 1.0
Status: active
Category: Commercial value
Reason code: low_consequence_value_signal

### Trigger

The user describes only minor, temporary or unclear consequence.

### Effect

Lower internal commercial value unless other signals override.

### Test References

TC-021
TC-022

## Rule CV-008 - High Effort Low Evidence Signal

Version: 1.0
Status: active
Category: Commercial value
Reason code: high_effort_low_evidence_signal

### Trigger

Case appears complex, evidence is weak and consequence signal is low or unclear.

### Effect

Lower internal priority or route to review when uncertainty remains.

### Test References

TC-041

## Rule CV-009 - Commercial Value Unknown

Version: 1.0
Status: active
Category: Commercial value
Reason code: commercial_value_unknown

### Trigger

Consequence, work impact or economic impact is not known.

### Effect

Set commercial value to unknown rather than assuming low value.

### Question Impact

Ask consequence or impact question only when relevant for next step.

### Test References

TC-066

## Rule CV-010 - Commercial Value Internal Only

Version: 1.0
Status: active
Category: Commercial value
Reason code: commercial_value_internal_only

### Trigger

Any user-facing response is generated.

### Effect

Do not expose commercial value score or internal prioritisation language to the user.

### Test References

TC-096

## Rule CV-011 - High Value But Weak Causation

Version: 1.0
Status: active
Category: Commercial value
Reason code: high_value_weak_causation_signal

### Trigger

Value signals are high, but causation is weak or unclear.

### Effect

Route to human review rather than automatic onboarding or guide-away.

### Test References

TC-041
TC-073

## Rule CV-012 - Value Sufficient For Internal Priority

Version: 1.0
Status: active
Category: Commercial value
Reason code: value_sufficient_for_internal_priority

### Trigger

Commercial value signals are medium or high and case strength is not clearly weak.

### Effect

Mark as internal priority candidate for staff review or next-step handling.

### Test References

TC-074

## References

- RULEBOOK-003-rule-authoring-template.md
- docs/ai-case-brain/BRAIN-012-commercial-value-rules.md
- docs/ai-case-brain/BRAIN-020-first-50-mvp-rules-catalog.md
