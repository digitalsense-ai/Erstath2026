# RULEBOOK-010 - Domain Rules

Version: 1.0
Status: Active Draft
Scope: Long-term AI Case Brain rule library

## Purpose

This document defines domain classification rules.

Domain rules determine whether a user message appears to belong to the patient injury compensation flow or should be routed elsewhere.

## Domain Outputs

Allowed domain outputs:

```text
patient_injury
patient_complaint
insurance_or_private_damage
employment_or_social_case
general_medical_question
legal_other
out_of_scope
unclear
```

## Rule DOM-001 - Healthcare Provider Mentioned

Version: 1.0
Status: active
Category: Domain classification
Reason code: healthcare_provider_mentioned

### Trigger

The user mentions a hospital, clinic, doctor, dentist, emergency department, specialist, municipal healthcare provider or similar healthcare actor.

### Condition

The provider appears connected to the user's described problem.

### Effect

Increase probability of patient_injury or patient_complaint domain.

### Routing Impact

Continue classification. Do not route based on this rule alone.

### Test References

TC-001
TC-061

## Rule DOM-002 - Treatment Event Mentioned

Version: 1.0
Status: active
Category: Domain classification
Reason code: treatment_event_mentioned

### Trigger

The user mentions treatment, operation, diagnosis, medication, referral, test, scan, childbirth, follow-up or discharge.

### Condition

The event appears related to healthcare.

### Effect

Increase patient_injury domain probability.

### Test References

TC-001
TC-003

## Rule DOM-003 - Injury Or Consequence Mentioned

Version: 1.0
Status: active
Category: Domain classification
Reason code: injury_or_consequence_mentioned

### Trigger

The user mentions death, harm, worsened condition, permanent injury, pain, functional loss, delayed recovery, loss of income or other consequence.

### Condition

The consequence appears connected to healthcare or possible healthcare handling.

### Effect

Increase patient_injury domain probability.

### Test References

TC-001
TC-071

## Rule DOM-004 - Complaint Without Injury

Version: 1.0
Status: active
Category: Domain classification
Reason code: complaint_without_injury

### Trigger

The user describes poor service, bad tone, waiting time, communication problem or dissatisfaction without a specific injury.

### Condition

No concrete physical, psychological or economic consequence is described.

### Effect

Classify as patient_complaint or ask one consequence question.

### Routing Impact

May route away from compensation screening if no injury is confirmed.

### Test References

TC-021
TC-022

## Rule DOM-005 - General Medical Question

Version: 1.0
Status: active
Category: Domain classification
Reason code: general_medical_question

### Trigger

The user asks for diagnosis, symptom interpretation, treatment recommendation, medication advice or similar.

### Condition

The message does not describe a compensation-relevant event.

### Effect

Classify as general_medical_question.

### Routing Impact

Guide away from compensation flow using safe language.

### Test References

TC-081

## Rule DOM-006 - Insurance Or Private Damage Matter

Version: 1.0
Status: active
Category: Domain classification
Reason code: insurance_or_private_damage_matter

### Trigger

The user describes car insurance, home insurance, travel insurance, private property damage or private insurance rejection.

### Condition

No healthcare treatment link is present.

### Effect

Classify as insurance_or_private_damage.

### Routing Impact

Guide away from patient injury flow.

### Test References

TC-081

## Rule DOM-007 - Employment Or Social Case

Version: 1.0
Status: active
Category: Domain classification
Reason code: employment_or_social_case

### Trigger

The user describes employer, unemployment benefits, municipality, pension, social benefits or workplace conflict.

### Condition

No healthcare injury handling link is present.

### Effect

Classify as employment_or_social_case.

### Routing Impact

Guide away or route to out-of-scope handling.

### Test References

TC-081

## Rule DOM-008 - Legal Other Matter

Version: 1.0
Status: active
Category: Domain classification
Reason code: legal_other_matter

### Trigger

The user asks about legal matters unrelated to healthcare compensation.

### Condition

The matter cannot reasonably be mapped to patient injury compensation.

### Effect

Classify as legal_other.

### Test References

TC-081

## Rule DOM-009 - Unclear Domain

Version: 1.0
Status: active
Category: Domain classification
Reason code: domain_unclear

### Trigger

The message is too vague to classify.

### Condition

No clear healthcare, injury, complaint or out-of-scope signal exists.

### Effect

Classify as unclear and ask one broad clarification question.

### Question Impact

Ask what happened in plain language.

### Test References

TC-066
TC-081

## Rule DOM-010 - Mixed Domain

Version: 1.0
Status: active
Category: Domain classification
Reason code: mixed_domain_detected

### Trigger

The message contains both healthcare-related and non-healthcare-related signals.

### Condition

It is unclear which part is the user's main issue.

### Effect

Ask one clarification question or route to human review if serious harm is mentioned.

### Human Review Impact

Escalate if serious consequence exists and domain remains unclear.

### Test References

TC-041
TC-081

## References

- RULEBOOK-003-rule-authoring-template.md
- docs/ai-case-brain/BRAIN-005-domain-classification-rules.md
- docs/ai-case-brain/BRAIN-020-first-50-mvp-rules-catalog.md
