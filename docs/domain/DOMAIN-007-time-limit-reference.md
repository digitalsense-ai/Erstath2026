# DOMAIN-007 - Time Limit Reference

Version: 1.0
Status: Active Draft
Scope: Time concepts for intake and screening

## Purpose

This document defines time-related concepts used in patient compensation intake and screening.

The goal is to help AI Case Brain ask the right time questions and identify timeline uncertainty without making a final time-bar or limitation decision.

## Important Limitation

This document is not a legal limitation guide.

The system must not make final legal conclusions about whether a case is too old. Time signals should support questions, routing and human review.

## Core Time Concepts

Important time fields:

```text
event_date
treatment_date
first_contact_date
diagnosis_date
discovery_date
injury_recognition_date
complaint_date
previous_decision_date
death_date
document_date
unknown_date
approximate_date
```

## Event Date

Meaning:

The date when the user believes the relevant event happened.

Examples:

```text
operation date
medicine date
hospital visit date
injury date
wrong treatment date
```

User wording:

```text
Det skete i 2021.
Det var sidste sommer.
Det var omkring marts.
```

UX note:

Approximate dates are acceptable during first screening.

## Treatment Date

Meaning:

The date of the healthcare contact, treatment, examination or procedure.

Examples:

```text
consultation date
scan date
operation date
discharge date
medicine prescription date
```

Relevant when:

```text
case involves a concrete healthcare action
case type is surgery, medication, scan, referral or follow-up
```

## First Contact Date

Meaning:

The first time the patient contacted healthcare about symptoms or concern.

Relevant especially for:

```text
diagnosis delay
misdiagnosis
lack of follow-up
serious disease progression
```

User wording:

```text
Jeg gik til lægen første gang i foråret.
Hun kontaktede lægen flere gange.
Symptomerne startede længe før diagnosen.
```

## Diagnosis Date

Meaning:

The date when the correct diagnosis was made or communicated.

Relevant especially for:

```text
diagnosis delay
misdiagnosis
worsened disease
cancer pathway issues
```

Important relation:

```text
first_contact_date -> diagnosis_date
```

The gap between these dates may be relevant for screening, but does not prove fault.

## Discovery Date

Meaning:

The date when the user became aware, or should reasonably have become aware, that there may be an injury or possible connection.

User wording:

```text
Vi fandt først ud af det senere.
Jeg opdagede først sammenhængen sidste år.
Jeg vidste ikke, at det kunne være en skade før lægen sagde det.
```

UX note:

Discovery date can be difficult for users. Ask in plain language.

Suggested question:

```text
Hvornår fandt du ud af, at skaden måske kunne hænge sammen med behandlingen?
```

## Injury Recognition Date

Meaning:

The date when the injury or consequence became visible or recognised.

Examples:

```text
symptoms started after surgery
infection was diagnosed
permanent damage was assessed
work capacity changed
```

This may be different from event date and discovery date.

## Complaint Date

Meaning:

The date when the user complained to a hospital, authority, Patienterstatningen or another body.

Relevant when:

```text
previous complaint exists
procedural status matters
there may be prior decision or appeal
```

## Previous Decision Date

Meaning:

The date of a previous decision, rejection, appeal decision or similar.

Relevant when:

```text
user mentions prior rejection
case may be reopening or appeal-related
human review is needed
```

Human review note:

Previous decisions should usually route to staff review before automatic guidance.

## Death Date

Meaning:

The date of death when the consequence is death.

Important facts:

```text
death_date
healthcare event before death
cause of death if known
relation to user
```

## Document Date

Meaning:

The date shown on relevant documents.

Examples:

```text
journal note date
scan result date
referral date
discharge letter date
previous decision date
```

Document dates can help clarify timeline, but facts remain unconfirmed until reviewed.

## Approximate Date

Meaning:

A date that is not exact but useful for screening.

Examples:

```text
2021
summer 2022
about three years ago
before Christmas
around Easter
```

UX rule:

Accept approximate date instead of blocking the user.

## Unknown Date

Meaning:

The user does not know the date.

User wording:

```text
Jeg ved det ikke.
Jeg kan ikke huske datoen.
Det var for nogle år siden.
```

UX response:

```text
Det er helt okay. Vi går videre med det, du ved.
```

## Date Conflicts

Date conflicts can occur when:

```text
user gives inconsistent dates
one date appears before another impossible date
document date differs from user memory
time gap is unclear
```

Handling:

```text
reduce confidence
ask clarification if useful
route to human review if important
```

## Time Question Priority

Time questions are important early when:

```text
event date is missing
discovery date may matter
case appears old
diagnosis delay timeline is unclear
prior decision exists
```

Do not ask many date questions at once.

## Suggested Plain Danish Questions

Event date:

```text
Hvornår skete det cirka?
```

First contact:

```text
Hvornår kontaktede patienten første gang sundhedsvæsenet om symptomerne?
```

Diagnosis date:

```text
Hvornår blev den rigtige diagnose stillet?
```

Discovery date:

```text
Hvornår fandt du ud af, at skaden måske kunne hænge sammen med behandlingen?
```

Previous decision:

```text
Har der tidligere været en afgørelse eller klage i sagen?
```

## First Slice Time Scope

The first vertical slice only needs to support:

```text
event_date
approximate_date
unknown_date
```

Later slices can expand to:

```text
first_contact_date
diagnosis_date
discovery_date
previous_decision_date
document_date
```

## References

- DOMAIN-003-common-case-patterns.md
- docs/rulebook/RULEBOOK-030-time-limit-rules.md
- docs/rulebook/RULEBOOK-090-smart-question-rules.md
- docs/ai-case-brain/BRAIN-007-time-limit-rules.md
