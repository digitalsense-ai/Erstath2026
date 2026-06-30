# BRAIN-020 - First 50 MVP Rules Catalog

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document lists the first 50 rules that should be implemented or simulated in the MVP rule layer.

The purpose is to avoid trying to implement all future rules at once.

## Rule Selection Principle

The first 50 rules should support the first vertical slice and the most important screening flows.

Priority is given to rules that help the system:

- classify patient injury domain
- identify common case types
- detect time limit gaps
- identify consequence severity
- ask the next best question
- route uncertain cases to human review
- guide weak cases away carefully
- produce reason codes

## Domain Rules

### MVP-001 / DOM-001 Healthcare Provider Mentioned

Detect healthcare provider signals.

Reason code:

```text
healthcare_provider_mentioned
```

### MVP-002 / DOM-002 Treatment Event Mentioned

Detect treatment, diagnosis, medication, surgery, referral or follow-up signals.

Reason code:

```text
treatment_event_mentioned
```

### MVP-003 / DOM-003 Injury Or Consequence Mentioned

Detect harm, death, worsening condition, permanent injury or economic loss.

Reason code:

```text
injury_or_consequence_mentioned
```

### MVP-004 / DOM-004 Complaint Without Injury

Detect complaint-only cases without concrete injury.

Reason code:

```text
complaint_without_injury
```

### MVP-005 / DOM-009 Unclear Domain

Detect vague messages requiring clarification.

Reason code:

```text
domain_unclear
```

## Case Type Rules

### MVP-006 / TYPE-001 Diagnosis Delay

Detect delayed diagnosis patterns.

Reason code:

```text
possible_diagnosis_delay
```

### MVP-007 / TYPE-002 Misdiagnosis

Detect wrong diagnosis patterns.

Reason code:

```text
possible_misdiagnosis
```

### MVP-008 / TYPE-003 Surgical Error

Detect operation and complication patterns.

Reason code:

```text
possible_surgical_error
```

### MVP-009 / TYPE-004 Medication Injury

Detect medicine, dose, allergy and side-effect patterns.

Reason code:

```text
possible_medication_injury
```

### MVP-010 / TYPE-006 Birth Injury

Detect childbirth and pregnancy-related injury patterns.

Reason code:

```text
possible_birth_injury
```

## Time Limit Rules

### MVP-011 / TL-001 Event Date Missing

Prioritise date question when event date is missing.

Reason code:

```text
event_date_missing
```

### MVP-012 / TL-002 Discovery Date Missing

Ask discovery date when relevant.

Reason code:

```text
discovery_date_missing
```

### MVP-013 / TL-004 Approximate Date Is Acceptable

Accept approximate dates for screening.

Reason code:

```text
approximate_date_provided
```

### MVP-014 / TL-006 Potential Time Limit Issue

Escalate or clarify possible time limit issues.

Reason code:

```text
potential_time_limit_issue
```

### MVP-015 / TL-009 Date Conflict

Detect conflicting dates.

Reason code:

```text
date_conflict_detected
```

## Injury and Consequence Rules

### MVP-016 / INJ-001 Death Mentioned

Detect death as consequence.

Reason code:

```text
death_indicated
```

### MVP-017 / INJ-002 Severe Permanent Injury

Detect severe permanent injury.

Reason code:

```text
severe_permanent_injury_indicated
```

### MVP-018 / INJ-003 Permanent Injury

Detect lasting harm.

Reason code:

```text
permanent_injury_indicated
```

### MVP-019 / INJ-006 Worsened Condition

Detect worsening of disease or condition.

Reason code:

```text
worsened_condition_indicated
```

### MVP-020 / INJ-009 No Specific Consequence

Detect missing consequence.

Reason code:

```text
consequence_missing
```

## Causation Rules

### MVP-021 / CAUS-001 Direct Timeline Connection

Detect harm shortly after treatment or event.

Reason code:

```text
direct_timeline_connection
```

### MVP-022 / CAUS-002 Delay Worsened Outcome

Detect delay worsening outcome.

Reason code:

```text
delay_worsened_outcome_signal
```

### MVP-023 / CAUS-006 Missing Treatment Link

Detect missing connection to treatment.

Reason code:

```text
treatment_link_missing
```

### MVP-024 / CAUS-008 Test Result Not Acted On

Detect missed or delayed test result follow-up.

Reason code:

```text
test_result_not_acted_on
```

### MVP-025 / CAUS-010 Causation Unclear

Detect unclear causation.

Reason code:

```text
causation_unclear
```

## Evidence and Document Rules

### MVP-026 / DOC-001 Medical Record Available

Detect medical record availability.

Reason code:

```text
medical_record_available
```

### MVP-027 / DOC-002 Previous Decision Available

Detect prior decision or rejection.

Reason code:

```text
previous_decision_available
```

### MVP-028 / DOC-003 Test Result Or Scan Mentioned

Detect test or scan evidence relevance.

Reason code:

```text
test_or_scan_document_relevant
```

### MVP-029 / DOC-008 No Documents Available

Handle no documents without automatic rejection.

Reason code:

```text
no_documents_available
```

### MVP-030 / DOC-009 Document Status Unknown

Detect unknown document status.

Reason code:

```text
document_status_unknown
```

## Information Quality Rules

### MVP-031 / IQ-003 Event Date Known

Increase information quality when event date is known.

Reason code:

```text
event_date_known
```

### MVP-032 / IQ-005 Provider Known

Increase information quality when provider is known.

Reason code:

```text
provider_known
```

### MVP-033 / IQ-006 Consequence Known

Increase information quality when consequence is known.

Reason code:

```text
consequence_known
```

### MVP-034 / IQ-010 Critical Fact Missing

Detect missing critical facts.

Reason code:

```text
critical_fact_missing
```

### MVP-035 / IQ-013 Strong Enough To Proceed

Detect sufficient information for routing.

Reason code:

```text
information_quality_sufficient
```

## Commercial Value Rules

### MVP-036 / CV-001 Death Signal

Internal value signal for death cases.

Reason code:

```text
death_commercial_value_signal
```

### MVP-037 / CV-003 Permanent Injury Signal

Internal value signal for permanent injury.

Reason code:

```text
permanent_injury_value_signal
```

### MVP-038 / CV-004 Loss Of Work Capacity Signal

Internal value signal for work capacity loss.

Reason code:

```text
work_capacity_loss_value_signal
```

### MVP-039 / CV-007 Low Consequence Signal

Internal low value signal for minor consequence.

Reason code:

```text
low_consequence_value_signal
```

### MVP-040 / CV-010 Do Not Expose Internal Value

Prevent user-facing commercial value exposure.

Reason code:

```text
commercial_value_internal_only
```

## Smart Question Rules

### MVP-041 / Q-001 Ask About Time First When Missing

Ask time question when required.

Reason code:

```text
ask_time_question_first
```

### MVP-042 / Q-002 Ask About Provider When Date Is Known

Ask provider question after time is known.

Reason code:

```text
ask_provider_question
```

### MVP-043 / Q-003 Ask About Consequence When Missing

Ask consequence question when needed.

Reason code:

```text
ask_consequence_question
```

### MVP-044 / Q-009 Do Not Repeat Answered Question

Avoid repeated questions.

Reason code:

```text
skip_repeated_question
```

### MVP-045 / Q-011 Stop At Question Limit

Stop automated questioning at configured limit.

Reason code:

```text
question_limit_reached
```

## Human Review and Guide-Away Rules

### MVP-046 / HR-001 Low Confidence

Escalate low confidence relevant cases.

Reason code:

```text
low_confidence
```

### MVP-047 / HR-002 Serious Consequence With Missing Facts

Escalate serious but incomplete cases.

Reason code:

```text
serious_consequence_with_missing_facts
```

### MVP-048 / GA-001 No Specific Injury

Guide away after missing consequence clarification fails.

Reason code:

```text
no_specific_injury
```

### MVP-049 / CONF-003 Critical Facts Missing

Reduce confidence when critical facts are missing.

Reason code:

```text
critical_facts_missing_confidence_reduction
```

### MVP-050 / AUD-001 Reason Codes Required

Attach reason codes to all important recommendations.

Reason code:

```text
reason_codes_required
```

## Implementation Note

These 50 rules are enough to support the first tested conversation slice and several important business test cases.

They should be implemented before expanding toward the full 150-250 rule target.

## References

- BRAIN-004-rule-library-structure.md
- BRAIN-019-rule-evaluation-order.md
- docs/mvp-start/MVP-START-003-first-feature-test-plan.md
