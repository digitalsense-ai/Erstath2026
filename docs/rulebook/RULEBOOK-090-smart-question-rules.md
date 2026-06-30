# RULEBOOK-090 - Smart Question Rules

Version: 1.0
Status: Active Draft
Scope: Long-term AI Case Brain rule library

## Purpose

This document defines smart question rules for AI Case Brain.

Smart question rules decide the one best next question to ask the user.

## Core Principle

Ask one question at a time.

The question should collect the most important missing information without making the conversation feel like a long form.

## Question Priority Order

Default priority:

```text
1. time limit critical date
2. provider or treatment place
3. consequence
4. treatment link or causation
5. case-type-specific detail
6. document status
7. previous complaint or decision
8. economic or work impact
```

## Rule Q-001 - Ask Time First When Missing

Version: 1.0
Status: active
Category: Smart question
Reason code: ask_time_question_first

### Trigger

A potentially relevant case is detected and event date is missing.

### Effect

Select a time-related next question.

### User-Facing Impact

Ask in plain language: When did this happen, approximately?

### Test References

TC-061
TC-066

## Rule Q-002 - Ask Provider When Date Is Known

Version: 1.0
Status: active
Category: Smart question
Reason code: ask_provider_question

### Trigger

Date is known or approximate, but provider is missing.

### Effect

Select provider question.

### Test References

TC-001
TC-066

## Rule Q-003 - Ask Consequence When Missing

Version: 1.0
Status: active
Category: Smart question
Reason code: ask_consequence_question

### Trigger

Possible healthcare issue is described, but no consequence is known.

### Effect

Ask what consequence the event had for the patient.

### Test References

TC-022
TC-066

## Rule Q-004 - Ask Treatment Link When Missing

Version: 1.0
Status: active
Category: Smart question
Reason code: ask_treatment_link_question

### Trigger

A consequence is described, but connection to healthcare handling is unclear.

### Effect

Ask how the user believes the consequence is connected to treatment or healthcare contact.

### Test References

TC-073

## Rule Q-005 - Ask Diagnosis Delay Timeline Question

Version: 1.0
Status: active
Category: Smart question
Reason code: ask_diagnosis_delay_timeline_question

### Trigger

case_type is diagnosis_delay and first contact date or diagnosis date is missing.

### Effect

Ask one missing timeline question.

### Test References

TC-001
TC-061

## Rule Q-006 - Ask Surgical Detail Question

Version: 1.0
Status: active
Category: Smart question
Reason code: ask_surgical_detail_question

### Trigger

case_type is surgical_error and operation type or complication detail is missing.

### Effect

Ask one surgical detail question.

### Test References

TC-003

## Rule Q-007 - Ask Medication Detail Question

Version: 1.0
Status: active
Category: Smart question
Reason code: ask_medication_detail_question

### Trigger

case_type is medication_injury and medication name, dose or reaction is missing.

### Effect

Ask one medication detail question.

### Test References

TC-004

## Rule Q-008 - Ask Document Status After Core Facts

Version: 1.0
Status: active
Category: Smart question
Reason code: ask_document_status_question

### Trigger

Core facts are known, but document status is unknown.

### Effect

Ask whether the user has relevant documents.

### Test References

TC-074

## Rule Q-009 - Skip Repeated Question

Version: 1.0
Status: active
Category: Smart question
Reason code: skip_repeated_question

### Trigger

The candidate next question asks for information already given.

### Effect

Do not ask the repeated question. Pick the next highest missing item.

### Test References

TC-016
TC-067

## Rule Q-010 - Reuse Partial Answer

Version: 1.0
Status: active
Category: Smart question
Reason code: reuse_partial_answer

### Trigger

The user gives partial but usable information.

### Effect

Use partial information for screening and avoid unnecessary follow-up.

### Test References

TC-067

## Rule Q-011 - Stop At Question Limit

Version: 1.0
Status: active
Category: Smart question
Reason code: question_limit_reached

### Trigger

The configured question limit is reached.

### Effect

Stop asking more questions and route to review, guide-away or next step.

### Test References

TC-068

## Rule Q-012 - Human Review Instead Of More Questions

Version: 1.0
Status: active
Category: Smart question
Reason code: human_review_instead_of_more_questions

### Trigger

More questions would not safely resolve uncertainty.

### Effect

Route to human review rather than continuing the automated question loop.

### Test References

TC-041
TC-068

## Rule Q-013 - Prevent Compound Question

Version: 1.0
Status: active
Category: Smart question
Reason code: compound_question_prevented

### Trigger

A candidate question contains several separate questions.

### Effect

Split and ask only the highest-priority question.

### Test References

TC-066

## Rule Q-014 - Plain Language Question Required

Version: 1.0
Status: active
Category: Smart question
Reason code: plain_language_question_required

### Trigger

A candidate question uses complex legal, medical or technical language.

### Effect

Rewrite the question in plain language.

### Test References

TC-066

## Rule Q-015 - Ask Previous Decision Status

Version: 1.0
Status: active
Category: Smart question
Reason code: ask_previous_decision_status_question

### Trigger

The user mentions prior complaint, claim, rejection or appeal, but status is unclear.

### Effect

Ask one question about prior decision status.

### Test References

TC-041

## References

- RULEBOOK-003-rule-authoring-template.md
- docs/ai-case-brain/BRAIN-013-smart-question-rules.md
- docs/ai-case-brain/BRAIN-020-first-50-mvp-rules-catalog.md
