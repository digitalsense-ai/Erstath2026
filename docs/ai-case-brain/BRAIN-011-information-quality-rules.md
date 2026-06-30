# BRAIN-011 - Information Quality Rules

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document defines how AI Case Brain evaluates information quality during intake and screening.

Information quality measures whether the system has enough reliable information to continue, route, request documents or escalate to human review.

## Information Quality Inputs

The brain should evaluate whether these facts are known:

```text
case_domain
case_type
event_date or approximate date
discovery_date when relevant
provider or treatment place
patient consequence
treatment link
causation signal
document status
previous complaint or decision status
contact information when appropriate
```

## Rule IQ-001 - Case Domain Known

Trigger:

The system can classify whether the matter belongs to patient injury screening.

Effect:

Increase information quality.

Reason code:

```text
case_domain_known
```

## Rule IQ-002 - Case Type Known

Trigger:

The system can classify a likely case type such as diagnosis_delay, surgical_error or medication_injury.

Effect:

Increase information quality.

Reason code:

```text
case_type_known
```

## Rule IQ-003 - Event Date Known

Trigger:

The event date, treatment date or approximate year is provided.

Effect:

Increase information quality and support time limit assessment.

Reason code:

```text
event_date_known
```

## Rule IQ-004 - Discovery Date Known When Needed

Trigger:

Discovery date is known in cases where the event may be old or where injury recognition happened later.

Effect:

Increase information quality and reduce time-limit uncertainty.

Reason code:

```text
discovery_date_known
```

## Rule IQ-005 - Provider Known

Trigger:

Hospital, clinic, department, doctor, dentist or other provider is known.

Effect:

Increase information quality.

Reason code:

```text
provider_known
```

## Rule IQ-006 - Consequence Known

Trigger:

The user has described a concrete consequence or injury.

Effect:

Increase information quality and allow severity assessment.

Reason code:

```text
consequence_known
```

## Rule IQ-007 - Treatment Link Described

Trigger:

The user explains how the consequence may be connected to healthcare treatment, diagnosis, medication or follow-up.

Effect:

Increase information quality.

Reason code:

```text
treatment_link_described
```

## Rule IQ-008 - Document Status Known

Trigger:

The user has indicated whether relevant documentation exists.

Effect:

Increase information quality.

Reason code:

```text
document_status_known
```

## Rule IQ-009 - Previous Decision Status Known

Trigger:

The user has stated whether there has been a previous complaint, rejection, decision or compensation process.

Effect:

Increase information quality when relevant.

Reason code:

```text
previous_decision_status_known
```

## Rule IQ-010 - Critical Fact Missing

Trigger:

One or more critical facts are missing.

Critical facts:

```text
event_date
provider
consequence
case_type
```

Effect:

Reduce information quality and prioritise next question.

Reason code:

```text
critical_fact_missing
```

## Rule IQ-011 - Facts Conflict

Trigger:

User-provided facts contradict each other or make the timeline impossible.

Effect:

Reduce information quality and route to human review if important.

Reason code:

```text
conflicting_information
```

## Rule IQ-012 - Too Vague To Screen

Trigger:

The message remains too vague after the configured number of questions.

Effect:

Route to human review or guide-away depending on severity and confidence.

Reason code:

```text
insufficient_information_after_questions
```

## Rule IQ-013 - Strong Enough To Proceed

Trigger:

The key facts are known and no blocking uncertainty remains.

Effect:

Allow routing to document request, onboarding later or human review depending on scores.

Reason code:

```text
information_quality_sufficient
```

## Suggested Scoring Model

Information Quality can be calculated from weighted facts:

```text
case_domain known           10
case_type known             10
event date known            15
provider known              15
consequence known           15
treatment link described    15
document status known       10
previous decision status     5
confidence and consistency   5
```

Total:

```text
100
```

## Information Quality Bands

```text
80-100 complete
60-79 good
40-59 partial
0-39 insufficient
```

## Test References

- TC-001 Basic Patient Injury Flow
- TC-016 Repeated Question Prevention
- TC-061 Missing Date Smart Follow-up
- TC-066 One Question at a Time
- TC-067 Prior Answer Reuse

## References

- BRAIN-007-time-limit-rules.md
- BRAIN-008-injury-and-consequence-rules.md
- BRAIN-010-evidence-and-document-rules.md
- docs/contracts/CONTRACT-004-screening-output-contract.md
