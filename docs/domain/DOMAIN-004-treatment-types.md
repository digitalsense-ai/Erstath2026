# DOMAIN-004 - Treatment Types

Version: 1.0
Status: Active Draft
Scope: Healthcare event and treatment terminology

## Purpose

This document defines common treatment and healthcare event types used in patient compensation screening.

Treatment type language helps AI Case Brain and staff understand what kind of healthcare contact the user describes.

## Important Limitation

A treatment type does not decide whether the case is strong or weak.

It only helps classify the event and choose relevant follow-up questions.

## Treatment Type Categories

Allowed high-level treatment categories:

```text
consultation
emergency_care
examination_or_test
imaging
pathology_or_lab
surgery
medication
hospital_admission
discharge
follow_up
referral
birth_or_maternity
psychiatric_care
dental_care
rehabilitation
medical_device_or_equipment
unknown
```

## Consultation

Includes:

```text
general practitioner visit
specialist consultation
telephone consultation
video consultation
outpatient appointment
```

Relevant questions:

```text
Who did the user contact?
When did the consultation happen?
What symptoms or issue was discussed?
What did the provider decide?
```

## Emergency Care

Includes:

```text
emergency department
acute clinic
urgent triage
ambulance contact
out-of-hours doctor
```

Relevant questions:

```text
When was acute help sought?
What symptoms were present?
Was the user sent home or admitted?
What happened afterwards?
```

## Examination Or Test

Includes:

```text
physical examination
blood test
urine test
ECG
biopsy
clinical measurement
```

Relevant questions:

```text
What test was performed?
When was the test taken?
Was the result followed up?
What did the result show, if known?
```

## Imaging

Includes:

```text
X-ray
CT scan
MRI scan
ultrasound
mammography
PET scan
```

Relevant questions:

```text
What scan was performed?
When was it performed?
Was the result communicated?
Was follow-up delayed or missing?
```

## Pathology Or Lab

Includes:

```text
pathology result
biopsy analysis
cancer cell analysis
microbiology result
lab report
```

Relevant questions:

```text
What result was involved?
When was it available?
Who should have followed up?
What consequence followed?
```

## Surgery

Includes:

```text
planned operation
emergency operation
minor procedure
endoscopy with intervention
caesarean section
post-operative care
```

Relevant questions:

```text
What operation was performed?
When was it performed?
What injury or complication occurred?
What follow-up was needed?
```

## Medication

Includes:

```text
prescription
wrong medicine
wrong dose
side effect
allergic reaction
medicine interaction
missed medication
```

Relevant questions:

```text
What medicine was involved?
Who prescribed or administered it?
What reaction or injury occurred?
Was an allergy or risk known?
```

## Hospital Admission

Includes:

```text
admission
inpatient stay
observation
transfer between departments
intensive care
```

Relevant questions:

```text
When was the user admitted?
What was the reason?
What happened during admission?
What consequence occurred?
```

## Discharge

Includes:

```text
discharge from hospital
send home decision
discharge plan
follow-up instructions
discharge letter
```

Relevant questions:

```text
When was the user discharged?
Was a follow-up plan made?
What happened after discharge?
Was the user readmitted?
```

## Follow-Up

Includes:

```text
control appointment
scan follow-up
test result follow-up
post-surgery check
specialist review
```

Relevant questions:

```text
What should have been followed up?
When should follow-up have happened?
Did it happen?
What consequence followed?
```

## Referral

Includes:

```text
referral to specialist
hospital referral
urgent referral
cancer pathway referral
missed referral
late referral
```

Relevant questions:

```text
Who should have referred?
When was referral made or missed?
When was the user seen?
What changed because of timing?
```

## Birth Or Maternity

Includes:

```text
pregnancy care
birth handling
fetal monitoring
caesarean section
midwife contact
newborn care
```

Relevant questions:

```text
Was mother or child affected?
When did the event happen?
What signs or complications were present?
What consequence occurred?
```

## Psychiatric Care

Includes:

```text
psychiatric assessment
medication
admission
discharge
suicide risk assessment
follow-up plan
```

Relevant questions:

```text
What care was provided?
What concern or symptom was known?
What follow-up was planned?
What consequence occurred?
```

## Dental Care

Includes:

```text
dental treatment
oral surgery
root canal
implant treatment
jaw treatment
```

Relevant questions:

```text
What dental treatment was performed?
What injury or consequence occurred?
When did it happen?
```

## Rehabilitation

Includes:

```text
physiotherapy
occupational therapy
rehabilitation plan
training after injury
follow-up after operation
```

Relevant questions:

```text
What rehabilitation was planned?
Was it delayed, missing or harmful?
What consequence occurred?
```

## Medical Device Or Equipment

Includes:

```text
implant
prosthesis
medical device
hospital equipment
monitoring equipment
catheter
drain
```

Relevant questions:

```text
What device or equipment was involved?
What happened?
What consequence occurred?
Was replacement or further treatment needed?
```

## Unknown Treatment Type

Use unknown when healthcare context is visible but the treatment type is not clear.

Recommended next question:

```text
Hvilken behandling, undersøgelse eller kontakt med sundhedsvæsenet handlede det om?
```

## References

- DOMAIN-003-common-case-patterns.md
- docs/rulebook/RULEBOOK-020-case-type-rules.md
- docs/rulebook/RULEBOOK-090-smart-question-rules.md
