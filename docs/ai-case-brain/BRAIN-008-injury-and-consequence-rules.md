# BRAIN-008 - Injury and Consequence Rules

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document defines rules for identifying injury, consequence and severity signals.

The goal is to separate cases with concrete harm from cases that are only dissatisfaction, concern or general complaint.

## Consequence Output Values

Recommended consequence values:

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
unknown_consequence
```

## Rule INJ-001 - Death Mentioned

Trigger:

The user states that the patient died after or in connection with treatment, delayed diagnosis, medication or lack of follow-up.

Effect:

Mark consequence as death and increase severity.

Reason code:

```text
death_indicated
```

Human review impact:

Death cases should be prioritised for careful review if facts are incomplete or confidence is low.

## Rule INJ-002 - Severe Permanent Injury

Trigger:

The user describes paralysis, brain injury, major organ damage, amputation, severe disability or other life-changing injury.

Effect:

Mark consequence as severe_permanent_injury.

Reason code:

```text
severe_permanent_injury_indicated
```

## Rule INJ-003 - Permanent Injury

Trigger:

The user describes lasting pain, reduced mobility, chronic symptoms, lasting nerve damage, scarring or long-term impairment.

Effect:

Mark consequence as permanent_injury unless severity indicates severe_permanent_injury.

Reason code:

```text
permanent_injury_indicated
```

## Rule INJ-004 - Loss Of Work Capacity

Trigger:

The user mentions inability to work, sick leave, early retirement, reduced income or lost work capacity due to the injury.

Effect:

Mark economic and functional consequence signals.

Reason code:

```text
loss_of_work_capacity_indicated
```

## Rule INJ-005 - Temporary Injury

Trigger:

The user describes short-term pain, temporary complication, temporary treatment need or recovery without lasting consequence.

Effect:

Mark consequence as temporary_injury.

Reason code:

```text
temporary_injury_indicated
```

## Rule INJ-006 - Worsened Condition

Trigger:

The user states that an illness became worse, spread, progressed or required more intensive treatment because of delay or error.

Effect:

Mark consequence as worsened_condition.

Reason code:

```text
worsened_condition_indicated
```

## Rule INJ-007 - Psychological Consequence

Trigger:

The user describes anxiety, trauma, depression, PTSD-like symptoms or psychological harm following treatment or perceived error.

Effect:

Mark psychological_consequence.

Reason code:

```text
psychological_consequence_indicated
```

Human review impact:

Use human review when psychological consequence is central and causation is unclear.

## Rule INJ-008 - Economic Loss Only

Trigger:

The user mainly mentions money, travel cost, lost salary or expense without a concrete medical injury.

Effect:

Mark economic_loss_only and reduce case strength unless medical consequence is later described.

Reason code:

```text
economic_loss_without_medical_injury
```

## Rule INJ-009 - No Specific Consequence

Trigger:

The user describes dissatisfaction or possible error but does not describe any concrete harm or consequence.

Effect:

Ask about consequence before progressing.

Reason code:

```text
consequence_missing
```

Recommended question:

```text
What consequences did this have for the patient?
```

## Rule INJ-010 - Consequence Unclear

Trigger:

The message suggests harm, but the nature or severity is unclear.

Effect:

Set consequence to unknown_consequence and ask one clarifying question.

Reason code:

```text
consequence_unclear
```

## Rule INJ-011 - Child Or Vulnerable Patient

Trigger:

The patient appears to be a child, elderly, disabled or otherwise vulnerable.

Effect:

Increase human review sensitivity.

Reason code:

```text
vulnerable_patient_signal
```

## Rule INJ-012 - Serious Disease Mentioned

Trigger:

The user mentions cancer, stroke, heart disease, sepsis, meningitis or other potentially serious disease.

Effect:

Increase severity signal and prioritise timeline clarification.

Reason code:

```text
serious_disease_indicated
```

## Severity Guidance

High severity:

- death
- severe permanent injury
- loss of work capacity
- worsened serious disease

Medium severity:

- permanent injury
- significant temporary injury
- psychological consequence with treatment impact

Low severity:

- minor temporary discomfort
- dissatisfaction without injury
- economic loss without medical injury

## Test References

- TC-001 Basic Patient Injury Flow
- TC-022 No Specific Injury Guide-Away
- TC-041 Human Review Unclear Case
- TC-071 Serious Consequence Review Priority

## References

- BRAIN-006-case-type-classification-rules.md
- BRAIN-007-time-limit-rules.md
- docs/contracts/CONTRACT-004-screening-output-contract.md
