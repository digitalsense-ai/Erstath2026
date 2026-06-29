# BRAIN-006 - Case Type Classification Rules

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document defines the first case type classification rules for AI Case Brain.

The goal is to classify the likely patient injury type from the user's message and extracted facts.

## Case Type Output Values

Recommended values:

```text
diagnosis_delay
misdiagnosis
surgical_error
medication_injury
infection
birth_injury
equipment_or_device_failure
lack_of_follow_up
journal_or_information_error
consent_or_information_issue
unknown_patient_injury_type
out_of_scope
```

## Rule TYPE-001 - Diagnosis Delay

Trigger:

The user indicates that a diagnosis was made too late, symptoms were ignored, referral was delayed, test results were not acted on, or cancer/serious disease was discovered late.

Effect:

Set case_type to diagnosis_delay.

Reason code:

```text
possible_diagnosis_delay
```

Important missing information:

- first_contact_date
- diagnosis_date
- provider
- condition
- consequence

## Rule TYPE-002 - Misdiagnosis

Trigger:

The user indicates that the wrong diagnosis was given, the patient was treated for the wrong condition, or a diagnosis was later corrected.

Effect:

Set case_type to misdiagnosis.

Reason code:

```text
possible_misdiagnosis
```

Important missing information:

- original_diagnosis
- correct_diagnosis
- correction_date
- consequence

## Rule TYPE-003 - Surgical Error

Trigger:

The user mentions an operation, surgical procedure, wrong procedure, complication, nerve damage, bleeding, organ damage or retained object.

Effect:

Set case_type to surgical_error unless the issue is a known ordinary complication without error signals.

Reason code:

```text
possible_surgical_error
```

Important missing information:

- operation_type
- operation_date
- complication
- current_consequence
- documentation_status

## Rule TYPE-004 - Medication Injury

Trigger:

The user mentions wrong medicine, wrong dose, allergy not considered, side effect, medication interaction or medicine given despite warning signs.

Effect:

Set case_type to medication_injury.

Reason code:

```text
possible_medication_injury
```

Important missing information:

- medication_name
- dose_or_change
- reaction_date
- consequence
- provider

## Rule TYPE-005 - Infection

Trigger:

The user mentions infection after treatment, hospital-acquired infection, wound infection or delayed infection treatment.

Effect:

Set case_type to infection.

Reason code:

```text
possible_treatment_related_infection
```

Important missing information:

- treatment_date
- infection_date
- infection_type
- treatment_place
- consequence

## Rule TYPE-006 - Birth Injury

Trigger:

The user mentions childbirth, pregnancy, fetal monitoring, emergency cesarean, child injury, mother injury or delayed birth intervention.

Effect:

Set case_type to birth_injury.

Reason code:

```text
possible_birth_injury
```

Important missing information:

- birth_date
- hospital
- mother_or_child_injury
- intervention_timeline
- current_consequence

## Rule TYPE-007 - Equipment Or Device Failure

Trigger:

The user mentions medical equipment, implant, prosthesis, device failure, scanner error or technical equipment error.

Effect:

Set case_type to equipment_or_device_failure.

Reason code:

```text
possible_equipment_or_device_failure
```

## Rule TYPE-008 - Lack Of Follow-Up

Trigger:

The user indicates that test results, appointments, referrals, monitoring or follow-up were missed or delayed.

Effect:

Set case_type to lack_of_follow_up unless diagnosis_delay is stronger.

Reason code:

```text
possible_lack_of_follow_up
```

## Rule TYPE-009 - Journal Or Information Error

Trigger:

The user indicates that wrong journal information, missing records, incorrect patient data or communication errors caused treatment issues.

Effect:

Set case_type to journal_or_information_error.

Reason code:

```text
possible_information_error
```

## Rule TYPE-010 - Consent Or Information Issue

Trigger:

The user mainly describes lack of information, no consent, not being warned of risks or inadequate explanation before treatment.

Effect:

Set case_type to consent_or_information_issue.

Reason code:

```text
possible_consent_or_information_issue
```

## Rule TYPE-011 - Multiple Case Types

Trigger:

More than one case type has strong signals.

Effect:

Set primary case_type to the strongest type and store secondary_case_types.

Reason code:

```text
multiple_case_type_signals
```

## Rule TYPE-012 - Unknown Patient Injury Type

Trigger:

Healthcare injury domain is likely, but the specific type cannot be classified safely.

Effect:

Set case_type to unknown_patient_injury_type and ask a clarifying question.

Reason code:

```text
case_type_unclear
```

## Classification Priority

If multiple rules match, use this priority unless confidence suggests otherwise:

1. diagnosis_delay
2. birth_injury
3. surgical_error
4. medication_injury
5. infection
6. misdiagnosis
7. lack_of_follow_up
8. equipment_or_device_failure
9. journal_or_information_error
10. consent_or_information_issue

## Test References

- TC-001 Basic Patient Injury Flow
- TC-011 Diagnosis Delay Flow
- TC-012 Surgical Error Flow
- TC-013 Medication Injury Flow
- TC-014 Birth Injury Flow
- TC-041 Human Review Unclear Case

## References

- BRAIN-005-domain-classification-rules.md
- docs/contracts/CONTRACT-003-fact-extraction-contract.md
- docs/prompts/PROMPT-003-fact-extraction-prompt.md
