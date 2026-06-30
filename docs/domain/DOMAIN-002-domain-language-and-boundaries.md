# DOMAIN-002 - Domain Language and Boundaries

Version: 1.0
Status: Active Draft
Scope: Domain terminology and scope boundaries

## Purpose

This document defines core domain language and boundaries for ErstatningsHjaelp.

It helps the system distinguish between patient injury screening, complaint matters, general medical questions and out-of-scope matters.

## Core Boundary Principle

A possible patient injury case normally needs three elements:

```text
healthcare context
possible injury or worsening
possible connection between healthcare handling and consequence
```

If one or more elements are missing, the system should ask a clarifying question before routing away, unless the matter is clearly out of scope.

## Healthcare Context

Healthcare context may include:

```text
hospital
general practitioner
specialist doctor
dentist
emergency department
psychiatric treatment
private clinic
public clinic
municipal healthcare service
medicine or prescription
medical examination
surgery
birth or maternity care
rehabilitation or follow-up
```

The healthcare context may be public or private.

## Treatment Event

A treatment event is something that happened in connection with healthcare.

Examples:

```text
consultation
examination
scan
blood test
biopsy
operation
medication prescription
medication administration
hospital admission
discharge
follow-up appointment
referral
triage
birth handling
infection control
```

## Injury Or Worsening

The user may describe:

```text
new injury
worsened disease
permanent symptoms
temporary symptoms
pain
loss of function
psychological consequence
loss of work capacity
death
```

A complaint about experience alone is not the same as injury.

## Possible Connection

Possible connection means the user describes or implies that the consequence may be linked to healthcare handling.

Examples:

```text
diagnosis came too late
wrong medicine caused reaction
operation led to loss of function
scan result was not followed up
infection happened after treatment
symptoms were dismissed repeatedly
```

## Complaint Without Injury

Complaint matters may include:

```text
poor communication
rude behavior
long waiting time
administrative delay
lack of explanation
feeling ignored
```

If no health consequence is described, the system should not treat it as a strong compensation case signal.

## General Medical Advice Boundary

General medical advice requests ask what the user should do medically.

Examples:

```text
What does this symptom mean?
Should I stop taking medicine?
Is my doctor right?
What treatment should I choose?
```

The system should not provide diagnosis or treatment instructions.

## Legal Other Boundary

Legal other matters may include:

```text
employment dispute
municipality decision
insurance dispute
property damage
traffic accident without healthcare issue
family law
criminal matter
```

These may need guide-away or external direction later, but are not the main patient injury flow.

## Insurance Or Private Damage Boundary

Insurance or private damage matters may include:

```text
home insurance
travel insurance
car accident
private accident claim
property damage
lost income unrelated to healthcare injury
```

If the healthcare link is missing, classify outside main flow.

## Unclear Boundary

Some messages are too vague to classify.

Examples:

```text
I need help with compensation.
Something went wrong.
Can you help me?
I was treated badly.
```

The system should ask one clarifying question rather than guessing.

## Customer-Facing Language

Customer-facing language should avoid domain labels unless explained.

Instead of:

```text
Your case domain is unclear.
```

Use:

```text
Vi mangler lige at forstå, hvad sagen handler om.
```

## Internal Labels

Allowed internal labels:

```text
patient_injury
patient_complaint
general_medical_question
insurance_or_private_damage
employment_or_social_case
legal_other
unclear
out_of_scope
```

## References

- DOMAIN-001-patient-compensation-overview.md
- docs/rulebook/RULEBOOK-010-domain-rules.md
- docs/ai-case-brain/BRAIN-005-domain-classification-rules.md
