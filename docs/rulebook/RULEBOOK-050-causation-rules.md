# RULEBOOK-050 - Causation Rules

Version: 1.0
Status: Active Draft
Scope: Long-term AI Case Brain rule library

## Purpose

This document defines causation signal rules for AI Case Brain.

Causation rules do not decide final legal causation. They identify whether the user describes a possible connection between healthcare handling and the injury or consequence.

## Causation Outputs

Allowed causation outputs:

```text
strong_possible_connection
possible_connection
weak_or_unclear_connection
no_visible_connection
unknown
```

## Rule CAUS-001 - Direct Timeline Connection

Version: 1.0
Status: active
Category: Causation
Reason code: direct_timeline_connection

### Trigger

The user describes that harm occurred shortly after treatment, operation, medication, test, scan, discharge or another healthcare event.

### Effect

Increase causation signal to possible_connection or strong_possible_connection depending on context.

### Test References

TC-003
TC-073

## Rule CAUS-002 - Delay Worsened Outcome

Version: 1.0
Status: active
Category: Causation
Reason code: delay_worsened_outcome_signal

### Trigger

The user describes that delayed diagnosis, referral, follow-up or treatment worsened the outcome.

### Effect

Increase causation signal and support diagnosis_delay or lack_of_follow_up case types.

### Test References

TC-001
TC-073

## Rule CAUS-003 - Wrong Treatment Caused Harm

Version: 1.0
Status: active
Category: Causation
Reason code: wrong_treatment_caused_harm_signal

### Trigger

The user describes harm after allegedly wrong treatment, wrong medication, wrong procedure or wrong diagnosis.

### Effect

Increase causation signal.

### Test References

TC-002
TC-004

## Rule CAUS-004 - Medication Reaction Signal

Version: 1.0
Status: active
Category: Causation
Reason code: medication_reaction_signal

### Trigger

The user links symptoms or injury to medicine, dose, allergy, interaction or prescription handling.

### Effect

Increase possible_connection and support medication_injury case type.

### Test References

TC-004

## Rule CAUS-005 - Infection After Treatment Signal

Version: 1.0
Status: active
Category: Causation
Reason code: infection_after_treatment_signal

### Trigger

The user describes infection after operation, hospital stay, wound care, implant, injection or procedure.

### Effect

Increase possible_connection and support infection case type.

### Test References

TC-005

## Rule CAUS-006 - Treatment Link Missing

Version: 1.0
Status: active
Category: Causation
Reason code: treatment_link_missing

### Trigger

The user describes harm or loss but does not explain how it may be connected to healthcare treatment or handling.

### Effect

Add treatment_link to missing information.

### Question Impact

Ask how the user believes the consequence is connected to treatment or healthcare contact.

### Test References

TC-066
TC-073

## Rule CAUS-007 - Natural Disease Progression Possible

Version: 1.0
Status: active
Category: Causation
Reason code: natural_disease_progression_possible

### Trigger

The user describes worsening of an underlying disease where it is unclear whether healthcare handling changed the outcome.

### Effect

Lower causation confidence and consider human review if serious.

### Human Review Impact

Route to review when consequence is serious and causation remains unclear.

### Test References

TC-041
TC-073

## Rule CAUS-008 - Test Result Not Acted On

Version: 1.0
Status: active
Category: Causation
Reason code: test_result_not_acted_on

### Trigger

The user describes a test, scan, biopsy, blood sample or result that was ignored, delayed or not followed up.

### Effect

Increase causation signal and support lack_of_follow_up or diagnosis_delay case type.

### Test References

TC-008
TC-073

## Rule CAUS-009 - Provider Acknowledgement Signal

Version: 1.0
Status: active
Category: Causation
Reason code: provider_acknowledgement_signal

### Trigger

The user says a provider, authority, doctor or document acknowledged an error, delay or connection.

### Effect

Increase causation signal and evidence relevance, but keep fact unconfirmed until verified.

### Test References

TC-074

## Rule CAUS-010 - Causation Unclear

Version: 1.0
Status: active
Category: Causation
Reason code: causation_unclear

### Trigger

The user describes an injury but the connection to healthcare handling is unclear.

### Effect

Set causation to weak_or_unclear_connection.

### Question Impact

Ask one clarification question unless human review is safer.

### Test References

TC-041
TC-073

## Rule CAUS-011 - No Visible Treatment Connection

Version: 1.0
Status: active
Category: Causation
Reason code: no_visible_treatment_connection

### Trigger

The message describes harm, but no healthcare treatment, provider, diagnosis, medication or follow-up connection is visible.

### Effect

Set causation to no_visible_connection.

### Routing Impact

Guide away if domain is also out of scope and no serious uncertainty exists.

### Test References

TC-021
TC-081

## Rule CAUS-012 - Multiple Possible Causes

Version: 1.0
Status: active
Category: Causation
Reason code: multiple_possible_causes

### Trigger

The user describes several possible causes or an unclear mix of disease progression, treatment and external factors.

### Effect

Lower causation confidence and route to human review when consequence is serious or case value is high.

### Test References

TC-041
TC-073

## Rule CAUS-013 - Causation Signal Strong Enough For Screening

Version: 1.0
Status: active
Category: Causation
Reason code: causation_signal_sufficient_for_screening

### Trigger

The user gives enough information to understand a possible connection between healthcare handling and consequence.

### Effect

Do not ask more causation questions. Move to missing timeline, provider, documents or routing.

### Test References

TC-067
TC-073

## References

- RULEBOOK-003-rule-authoring-template.md
- docs/ai-case-brain/BRAIN-009-causation-signal-rules.md
- docs/ai-case-brain/BRAIN-020-first-50-mvp-rules-catalog.md
