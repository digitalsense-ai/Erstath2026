# RULEBOOK-020 - Case Type Rules

Version: 1.0
Status: Active Draft
Scope: Long-term AI Case Brain rule library

## Purpose

This document defines case type classification rules.

Case type rules determine which patient injury pattern the user appears to describe.

## Case Type Outputs

Allowed case type outputs:

```text
diagnosis_delay
misdiagnosis
surgical_error
medication_injury
infection
birth_injury
equipment_or_device_injury
lack_of_follow_up
journal_or_information_error
consent_or_information_issue
unknown_patient_injury_type
out_of_scope
```

## Rule TYPE-001 - Diagnosis Delay

Version: 1.0
Status: active
Category: Case type classification
Reason code: possible_diagnosis_delay

### Trigger

The user mentions delayed diagnosis, late discovery, missed symptoms, ignored symptoms or waiting too long for diagnosis.

### Condition

The delay appears connected to healthcare contact or lack of follow-up.

### Effect

Set or increase likelihood of case_type diagnosis_delay.

### Question Impact

Prioritise timeline questions such as first contact and diagnosis date.

### Test References

TC-001
TC-061

## Rule TYPE-002 - Misdiagnosis

Version: 1.0
Status: active
Category: Case type classification
Reason code: possible_misdiagnosis

### Trigger

The user says the diagnosis was wrong, incorrect or changed later.

### Condition

The wrong diagnosis appears to have affected treatment or outcome.

### Effect

Set or increase likelihood of case_type misdiagnosis.

### Test References

TC-002
TC-073

## Rule TYPE-003 - Surgical Error

Version: 1.0
Status: active
Category: Case type classification
Reason code: possible_surgical_error

### Trigger

The user mentions operation, surgery, procedure, complication, nerve damage, bleeding, wrong site or unexpected injury after surgery.

### Condition

The injury appears temporally or causally connected to the procedure.

### Effect

Set or increase likelihood of case_type surgical_error.

### Test References

TC-003
TC-071

## Rule TYPE-004 - Medication Injury

Version: 1.0
Status: active
Category: Case type classification
Reason code: possible_medication_injury

### Trigger

The user mentions medication, medicine, dose, wrong dose, allergy, side effect, contraindication or prescription error.

### Condition

The consequence appears connected to medication handling.

### Effect

Set or increase likelihood of case_type medication_injury.

### Test References

TC-004
TC-073

## Rule TYPE-005 - Infection

Version: 1.0
Status: active
Category: Case type classification
Reason code: possible_infection_case

### Trigger

The user mentions infection after treatment, operation, hospital stay, wound, implant or procedure.

### Condition

The infection appears connected to healthcare treatment.

### Effect

Set or increase likelihood of case_type infection.

### Test References

TC-005

## Rule TYPE-006 - Birth Injury

Version: 1.0
Status: active
Category: Case type classification
Reason code: possible_birth_injury

### Trigger

The user mentions pregnancy, childbirth, delivery, midwife, fetal monitoring, caesarean section, mother injury or child injury.

### Condition

The consequence appears connected to pregnancy or birth care.

### Effect

Set or increase likelihood of case_type birth_injury.

### Human Review Impact

Consider human review when serious child or mother injury is described.

### Test References

TC-006
TC-071

## Rule TYPE-007 - Equipment Or Device Injury

Version: 1.0
Status: active
Category: Case type classification
Reason code: possible_equipment_or_device_injury

### Trigger

The user mentions medical equipment, implant, prosthesis, device, catheter, scanner, instrument or technical equipment.

### Condition

The injury appears connected to use, failure or handling of the device.

### Effect

Set or increase likelihood of case_type equipment_or_device_injury.

### Test References

TC-007

## Rule TYPE-008 - Lack Of Follow-Up

Version: 1.0
Status: active
Category: Case type classification
Reason code: possible_lack_of_follow_up

### Trigger

The user mentions no follow-up, missed control, ignored test result, delayed referral, no response or lost appointment.

### Condition

The missing follow-up appears connected to worsened outcome.

### Effect

Set or increase likelihood of case_type lack_of_follow_up.

### Test References

TC-008
TC-073

## Rule TYPE-009 - Journal Or Information Error

Version: 1.0
Status: active
Category: Case type classification
Reason code: possible_journal_or_information_error

### Trigger

The user mentions wrong journal entry, missing journal note, incorrect information, wrong patient data or lost documentation.

### Condition

The information problem appears to have affected treatment, decision or outcome.

### Effect

Set or increase likelihood of case_type journal_or_information_error.

### Test References

TC-009

## Rule TYPE-010 - Consent Or Information Issue

Version: 1.0
Status: active
Category: Case type classification
Reason code: possible_consent_or_information_issue

### Trigger

The user mentions missing consent, lack of information about risk, not being informed, or treatment without adequate explanation.

### Condition

The issue appears connected to healthcare treatment or procedure.

### Effect

Set or increase likelihood of case_type consent_or_information_issue.

### Test References

TC-010

## Rule TYPE-011 - Multiple Case Types

Version: 1.0
Status: active
Category: Case type classification
Reason code: multiple_case_types_detected

### Trigger

The user describes more than one plausible case type.

### Condition

Two or more case type rules match with meaningful confidence.

### Effect

Set primary case_type and add secondary_case_types.

### Human Review Impact

Consider human review when serious consequence and unclear primary case type exist.

### Test References

TC-041
TC-073

## Rule TYPE-012 - Unknown Patient Injury Type

Version: 1.0
Status: active
Category: Case type classification
Reason code: patient_injury_type_unknown

### Trigger

The domain appears to be patient injury, but no specific case type can be safely identified.

### Condition

No case type rule reaches threshold.

### Effect

Set case_type to unknown_patient_injury_type.

### Question Impact

Ask one clarification question based on the highest missing information priority.

### Test References

TC-066
TC-081

## References

- RULEBOOK-003-rule-authoring-template.md
- docs/ai-case-brain/BRAIN-006-case-type-classification-rules.md
- docs/ai-case-brain/BRAIN-020-first-50-mvp-rules-catalog.md
