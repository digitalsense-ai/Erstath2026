# RULEBOOK-040 - Injury and Consequence Rules

Version: 1.0
Status: Active Draft
Scope: Long-term AI Case Brain rule library

## Purpose

This document defines rules for identifying injuries and consequences described by the user.

These rules help AI Case Brain assess severity, information quality, commercial relevance, human review need and the next best question.

## Consequence Outputs

Allowed consequence outputs:

```text
death
severe_permanent_injury
permanent_injury
loss_of_work_capacity
temporary_injury
worsened_condition
pain_or_function_loss
psychological_consequence
economic_loss_only
no_specific_consequence
unknown
```

## Rule INJ-001 - Death Mentioned

Version: 1.0
Status: active
Category: Injury and consequence
Reason code: death_indicated

### Trigger

The user states that the patient died.

### Effect

Classify consequence as death and increase review sensitivity.

### Human Review Impact

Usually route to human review or high-priority careful handling.

### Test References

TC-041
TC-071

## Rule INJ-002 - Severe Permanent Injury

Version: 1.0
Status: active
Category: Injury and consequence
Reason code: severe_permanent_injury_indicated

### Trigger

The user describes life-changing harm, paralysis, major brain injury, loss of organ function, severe disability or similar serious permanent consequence.

### Effect

Classify as severe_permanent_injury.

### Human Review Impact

Increase review priority, especially if causation is unclear.

### Test References

TC-071

## Rule INJ-003 - Permanent Injury

Version: 1.0
Status: active
Category: Injury and consequence
Reason code: permanent_injury_indicated

### Trigger

The user describes lasting harm, chronic symptoms, permanent impairment or long-term functional limitation.

### Effect

Classify as permanent_injury.

### Score Impact

Increase case value and consequence severity signal.

### Test References

TC-003
TC-071

## Rule INJ-004 - Loss Of Work Capacity

Version: 1.0
Status: active
Category: Injury and consequence
Reason code: loss_of_work_capacity_indicated

### Trigger

The user mentions inability to work, long sick leave, reduced working ability, loss of income or early retirement.

### Effect

Add loss_of_work_capacity signal.

### Score Impact

Increase commercial value and review priority.

### Test References

TC-071
TC-074

## Rule INJ-005 - Temporary Injury

Version: 1.0
Status: active
Category: Injury and consequence
Reason code: temporary_injury_indicated

### Trigger

The user describes temporary symptoms, short-term pain, temporary infection or recovery without lasting effect.

### Effect

Classify as temporary_injury unless other severity signals exist.

### Test References

TC-021
TC-022

## Rule INJ-006 - Worsened Condition

Version: 1.0
Status: active
Category: Injury and consequence
Reason code: worsened_condition_indicated

### Trigger

The user says the condition worsened, disease progressed or treatment result became worse because of delay or handling.

### Effect

Classify as worsened_condition.

### Case Type Impact

Often supports diagnosis_delay or lack_of_follow_up.

### Test References

TC-001
TC-073

## Rule INJ-007 - Pain Or Functional Loss

Version: 1.0
Status: active
Category: Injury and consequence
Reason code: pain_or_function_loss_indicated

### Trigger

The user mentions pain, reduced mobility, reduced function, nerve symptoms, sensory loss or reduced daily ability.

### Effect

Classify as pain_or_function_loss unless stronger severity rule applies.

### Test References

TC-003

## Rule INJ-008 - Psychological Consequence

Version: 1.0
Status: active
Category: Injury and consequence
Reason code: psychological_consequence_indicated

### Trigger

The user mentions anxiety, trauma, depression, stress reaction or other psychological consequence linked to the event.

### Effect

Add psychological_consequence signal.

### Human Review Impact

Consider review if severe or combined with serious physical harm.

### Test References

TC-041

## Rule INJ-009 - No Specific Consequence

Version: 1.0
Status: active
Category: Injury and consequence
Reason code: consequence_missing

### Trigger

The user describes a possible error but no concrete consequence.

### Effect

Add consequence to missing information.

### Question Impact

Ask what consequence the event had for the patient.

### Test References

TC-022
TC-066

## Rule INJ-010 - Economic Loss Only

Version: 1.0
Status: active
Category: Injury and consequence
Reason code: economic_loss_only

### Trigger

The user only describes money loss, extra costs or income loss without describing patient injury or health consequence.

### Effect

Classify consequence as economic_loss_only and ask clarification if healthcare injury link is unclear.

### Routing Impact

May guide away if no patient injury signal exists.

### Test References

TC-021
TC-081

## Rule INJ-011 - Consequence Severity Unknown

Version: 1.0
Status: active
Category: Injury and consequence
Reason code: consequence_severity_unknown

### Trigger

A consequence is mentioned, but severity cannot be determined.

### Effect

Keep consequence as unknown and ask one clarifying question if needed.

### Test References

TC-066

## Rule INJ-012 - Multiple Consequences

Version: 1.0
Status: active
Category: Injury and consequence
Reason code: multiple_consequences_detected

### Trigger

The user describes several consequences.

### Effect

Store all relevant consequence signals and use the most severe consequence for routing priority.

### Human Review Impact

Escalate if severe consequence is among the signals and causation is unclear.

### Test References

TC-071
TC-073

## Rule INJ-013 - Child Or Birth Consequence

Version: 1.0
Status: active
Category: Injury and consequence
Reason code: child_or_birth_consequence_indicated

### Trigger

The user describes harm to a child, newborn or mother during pregnancy or birth.

### Effect

Increase review sensitivity and link to birth injury classification.

### Human Review Impact

Consider human review when consequence is serious or unclear.

### Test References

TC-006
TC-071

## Rule INJ-014 - Consequence Known Enough For Screening

Version: 1.0
Status: active
Category: Injury and consequence
Reason code: consequence_known_enough_for_screening

### Trigger

The consequence is described well enough to continue screening.

### Effect

Do not ask more consequence questions. Move to timeline, provider, causation or documentation depending on missing information priority.

### Test References

TC-067

## References

- RULEBOOK-003-rule-authoring-template.md
- docs/ai-case-brain/BRAIN-008-injury-and-consequence-rules.md
- docs/ai-case-brain/BRAIN-020-first-50-mvp-rules-catalog.md
