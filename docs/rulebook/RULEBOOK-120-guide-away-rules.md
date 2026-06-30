# RULEBOOK-120 - Guide-Away Rules

Version: 1.0
Status: Active Draft
Scope: Long-term AI Case Brain rule library

## Purpose

This document defines guide-away rules for AI Case Brain.

Guide-away rules are used when the system should carefully move the user away from the main patient injury compensation flow.

## Core Principle

Guide-away must be respectful and non-final.

The system should not say that the user has no case. It should say that the information currently provided does not show enough basis to continue in the main flow.

## Guide-Away Outputs

Allowed guide-away outputs:

```text
no_specific_injury
no_healthcare_treatment_link
general_medical_advice_request
service_complaint_without_injury
clearly_out_of_scope
weak_screening_signals
time_limit_appears_blocking
additional_information_allowed
```

## Rule GA-001 - No Specific Injury

Version: 1.0
Status: active
Category: Guide-away
Reason code: no_specific_injury

### Trigger

The user describes dissatisfaction or possible error but no concrete consequence.

### Effect

Ask one consequence question first. If no consequence is provided, guide away respectfully.

### Test References

TC-021
TC-022

## Rule GA-002 - No Healthcare Treatment Link

Version: 1.0
Status: active
Category: Guide-away
Reason code: no_healthcare_treatment_link

### Trigger

The user describes harm or loss, but no link to healthcare treatment, diagnosis, medication or follow-up is visible.

### Effect

Ask one clarification question. If no healthcare link exists, guide away from patient injury flow.

### Test References

TC-081

## Rule GA-003 - General Medical Advice Request

Version: 1.0
Status: active
Category: Guide-away
Reason code: general_medical_advice_request

### Trigger

The user asks for diagnosis, treatment, symptom or medicine advice rather than compensation screening.

### Effect

Guide away from compensation flow using safe general wording.

### Test References

TC-081

## Rule GA-004 - Service Complaint Without Injury

Version: 1.0
Status: active
Category: Guide-away
Reason code: service_complaint_without_injury

### Trigger

The user complains about service, tone, waiting time, communication or administration without injury.

### Effect

Route to patient complaint or guide away from compensation screening.

### Test References

TC-021
TC-022

## Rule GA-005 - Clearly Out Of Scope

Version: 1.0
Status: active
Category: Guide-away
Reason code: clearly_out_of_scope

### Trigger

The case is clearly about insurance, employment, municipality, property damage or another non-healthcare area.

### Effect

Guide away from the patient injury flow.

### Test References

TC-081

## Rule GA-006 - Weak Screening Signals

Version: 1.0
Status: active
Category: Guide-away
Reason code: weak_screening_signals

### Trigger

Case strength is low and no human review override applies.

### Effect

Guide away respectfully after relevant clarification has been attempted.

### Test References

TC-021
TC-022

## Rule GA-007 - Time Limit Appears Blocking

Version: 1.0
Status: active
Category: Guide-away
Reason code: time_limit_appears_blocking

### Trigger

Known dates strongly indicate a possible blocking time issue and no uncertainty or review trigger remains.

### Effect

Guide away carefully or route to review if uncertainty remains.

### Test References

TC-041
TC-062

## Rule GA-008 - Allow Additional Information

Version: 1.0
Status: active
Category: Guide-away
Reason code: additional_information_allowed

### Trigger

Any guide-away response is generated.

### Effect

Tell the user they may add important missing information.

### Test References

TC-021
TC-022
TC-081

## Rule GA-009 - Human Review Blocks Guide-Away

Version: 1.0
Status: active
Category: Guide-away
Reason code: human_review_blocks_guide_away

### Trigger

A guide-away rule and human review rule both apply.

### Effect

Choose human review instead of guide-away.

### Test References

TC-041
TC-071

## Rule GA-010 - No Final Rejection Language

Version: 1.0
Status: active
Category: Guide-away
Reason code: no_final_rejection_language

### Trigger

A guide-away response is generated.

### Effect

Do not use final rejection wording. Use careful and non-final language.

### Test References

TC-096

## References

- RULEBOOK-003-rule-authoring-template.md
- docs/ai-case-brain/BRAIN-015-guide-away-rules.md
- docs/ai-case-brain/BRAIN-020-first-50-mvp-rules-catalog.md
