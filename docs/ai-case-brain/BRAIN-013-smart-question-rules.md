# BRAIN-013 - Smart Question Rules

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document defines how AI Case Brain selects the next best question.

The goal is to collect the most important information with the fewest possible questions while avoiding a form-like experience.

## Core Rule

Ask one question at a time.

Never ask a list of several questions unless the flow explicitly changes to a form or document checklist.

## Question Selection Inputs

The brain should consider:

```text
case domain
case type
known facts
missing information
information quality
case strength
commercial value
confidence
question history
answered facts
user wording
human review triggers
question limit
```

## Rule Q-001 - Ask About Time First When Missing

Trigger:

The case may be relevant and event date or discovery date is missing.

Effect:

Ask the most relevant time question.

Reason code:

```text
ask_time_question_first
```

Example:

```text
When did this happen, approximately?
```

## Rule Q-002 - Ask About Provider When Date Is Known

Trigger:

Date is known or approximate, but hospital, clinic or provider is missing.

Effect:

Ask about treatment place.

Reason code:

```text
ask_provider_question
```

Example:

```text
Which hospital, clinic or healthcare provider was involved?
```

## Rule Q-003 - Ask About Consequence When Missing

Trigger:

The user describes a possible error but no concrete consequence.

Effect:

Ask about the effect on the patient.

Reason code:

```text
ask_consequence_question
```

Example:

```text
What consequences did this have for the patient?
```

## Rule Q-004 - Ask About Causation Link When Missing

Trigger:

Injury is described, but connection to healthcare treatment is unclear.

Effect:

Ask for the user's understanding of the link.

Reason code:

```text
ask_treatment_link_question
```

Example:

```text
How do you believe this is connected to the treatment or healthcare contact?
```

## Rule Q-005 - Ask Diagnosis Delay Timeline Questions

Trigger:

case_type is diagnosis_delay and first_contact_date or diagnosis_date is missing.

Effect:

Ask the highest-priority missing timeline question.

Reason code:

```text
ask_diagnosis_delay_timeline_question
```

## Rule Q-006 - Ask Surgical Detail Question

Trigger:

case_type is surgical_error and operation_type or complication is missing.

Effect:

Ask one operation-related question.

Reason code:

```text
ask_surgical_detail_question
```

Example:

```text
What operation was performed?
```

or:

```text
What complication or injury happened after the operation?
```

## Rule Q-007 - Ask Medication Detail Question

Trigger:

case_type is medication_injury and medication name or reaction is missing.

Effect:

Ask one medication-related question.

Reason code:

```text
ask_medication_detail_question
```

## Rule Q-008 - Ask Document Status After Critical Facts

Trigger:

Critical facts are known, but document status is unknown.

Effect:

Ask whether the user has relevant documents.

Reason code:

```text
ask_document_status_question
```

Example:

```text
Do you have medical records, letters or other documents about this?
```

## Rule Q-009 - Do Not Repeat Answered Question

Trigger:

The next candidate question asks for information already provided by the user.

Effect:

Skip to the next highest-priority missing item.

Reason code:

```text
skip_repeated_question
```

## Rule Q-010 - Reuse Partial Answers

Trigger:

The user provides partial information such as year only or provider without department.

Effect:

Accept partial information for screening and ask only if precision is necessary.

Reason code:

```text
reuse_partial_answer
```

## Rule Q-011 - Stop At Question Limit

Trigger:

The configured maximum number of screening questions has been reached.

Effect:

Stop asking questions and route to qualified, review or guide-away.

Reason code:

```text
question_limit_reached
```

## Rule Q-012 - Human Review Instead Of More Questions

Trigger:

The user has provided enough information to show uncertainty or sensitivity, but not enough for safe automated routing.

Effect:

Route to human review instead of asking more questions.

Reason code:

```text
human_review_instead_of_more_questions
```

## Rule Q-013 - Avoid Compound Questions

Trigger:

A generated question contains multiple separate questions.

Effect:

Split and ask only the highest-priority one.

Reason code:

```text
compound_question_prevented
```

## Rule Q-014 - Use Plain Language

Trigger:

A generated question uses legal, medical or technical language that may confuse the user.

Effect:

Rewrite to plain language.

Reason code:

```text
plain_language_question_required
```

## Question Priority Order

Default priority:

1. time limit critical date
2. provider or treatment place
3. consequence
4. causation link
5. case-type-specific timeline/detail
6. document status
7. previous complaint or decision
8. economic impact

## Test References

- TC-016 Repeated Question Prevention
- TC-061 Missing Date Smart Follow-up
- TC-066 One Question at a Time
- TC-067 Prior Answer Reuse
- TC-068 Question Limit Stop

## References

- BRAIN-007-time-limit-rules.md
- BRAIN-011-information-quality-rules.md
- docs/prompts/PROMPT-002-conversation-prompt.md
- docs/contracts/CONTRACT-002-conversation-message-contract.md
