# BRAIN-005 - Domain Classification Rules

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document defines the first domain classification rules for AI Case Brain.

The goal is to decide whether a user message belongs in the patient injury screening domain or should be routed elsewhere.

## Domain Classification Output

Recommended values:

```text
patient_injury
patient_complaint
insurance_or_private_damage
employment_or_social_case
general_medical_question
legal_question_other
out_of_scope
unclear
```

## Rule DOM-001 - Healthcare Provider Mentioned

Trigger:

A message mentions a hospital, clinic, doctor, nurse, dentist, emergency department, medical department or other healthcare provider.

Effect:

Increase likelihood of patient_injury or patient_complaint domain.

Reason code:

```text
healthcare_provider_mentioned
```

## Rule DOM-002 - Treatment Event Mentioned

Trigger:

A message mentions treatment, operation, diagnosis, medication, birth, examination, referral, discharge or follow-up.

Effect:

Increase likelihood of patient_injury domain.

Reason code:

```text
treatment_event_mentioned
```

## Rule DOM-003 - Injury Or Consequence Mentioned

Trigger:

A message mentions harm, worsening condition, death, permanent injury, pain, loss of function, delayed diagnosis or economic loss.

Effect:

Increase likelihood of patient_injury domain.

Reason code:

```text
injury_or_consequence_mentioned
```

## Rule DOM-004 - Complaint Without Injury

Trigger:

The user complains about attitude, waiting time, communication or service quality without a concrete injury or consequence.

Effect:

Classify as patient_complaint unless later information indicates patient injury.

Reason code:

```text
complaint_without_injury
```

## Rule DOM-005 - General Medical Advice Request

Trigger:

The user mainly asks for diagnosis, medication, treatment advice or whether symptoms are dangerous.

Effect:

Classify as general_medical_question.

Route to safe guidance or human review depending on risk.

Reason code:

```text
general_medical_question
```

## Rule DOM-006 - Private Accident Or Insurance Matter

Trigger:

The event concerns traffic accident, home damage, workplace accident, private insurance, property damage or similar without healthcare treatment error.

Effect:

Classify as insurance_or_private_damage or legal_question_other.

Reason code:

```text
non_healthcare_damage_matter
```

## Rule DOM-007 - Employment Or Social Case

Trigger:

The main issue concerns employment, sickness benefits, municipality, job center, unemployment or social benefits.

Effect:

Classify as employment_or_social_case.

Reason code:

```text
employment_or_social_case
```

## Rule DOM-008 - Prior Patient Compensation Mention

Trigger:

The message mentions Patienterstatningen, patient compensation, prior compensation claim, rejection, reopening or appeal.

Effect:

Increase likelihood of patient_injury or patient_compensation_followup.

Reason code:

```text
prior_patient_compensation_context
```

## Rule DOM-009 - Unclear Domain

Trigger:

The message is too vague to classify.

Effect:

Classify as unclear and ask one broad clarifying question.

Reason code:

```text
domain_unclear
```

Recommended next question:

```text
Can you briefly describe whether this happened in connection with medical treatment, diagnosis, medication or a hospital/clinic visit?
```

## Rule DOM-010 - Mixed Domain

Trigger:

The message contains both healthcare injury signals and other legal or insurance signals.

Effect:

Classify primary domain as patient_injury if healthcare injury signal is strong; otherwise human review.

Reason code:

```text
mixed_domain_signals
```

## Domain Confidence Guidance

High confidence:

- healthcare provider + treatment event + injury/consequence

Medium confidence:

- provider or treatment event, but consequence unclear

Low confidence:

- vague message, no provider, no treatment, no injury

## Test References

- TC-001 Basic Patient Injury Flow
- TC-021 Guide Away Weak Case
- TC-041 Human Review Unclear Case
- TC-081 Out of Scope Flow

## References

- BRAIN-004-rule-library-structure.md
- policies/POL-002-routing-policy.md
- docs/contracts/CONTRACT-003-fact-extraction-contract.md
