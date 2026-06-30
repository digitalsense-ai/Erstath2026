# RULEBOOK-070 - Information Quality Rules

Version: 1.0
Status: Active Draft
Scope: Long-term AI Case Brain rule library

## Purpose

This document defines information quality rules for AI Case Brain.

Information quality shows whether the system has enough useful information to continue, ask one more question, request documents, route to review or guide away.

## Information Quality Bands

```text
80-100 complete
60-79 good
40-59 partial
0-39 insufficient
```

## Rule IQ-001 - Case Domain Known

Version: 1.0
Status: active
Category: Information quality
Reason code: case_domain_known

Trigger: domain can be classified.

Effect: increase information quality.

Test references: TC-001

## Rule IQ-002 - Case Type Known

Version: 1.0
Status: active
Category: Information quality
Reason code: case_type_known

Trigger: likely case type can be classified.

Effect: increase information quality.

Test references: TC-001

## Rule IQ-003 - Event Date Known

Version: 1.0
Status: active
Category: Information quality
Reason code: event_date_known

Trigger: date, month, year or approximate time is known.

Effect: increase information quality and support timeline assessment.

Test references: TC-061, TC-067

## Rule IQ-004 - Discovery Date Known

Version: 1.0
Status: active
Category: Information quality
Reason code: discovery_date_known

Trigger: discovery date is known where relevant.

Effect: reduce timeline uncertainty.

Test references: TC-062

## Rule IQ-005 - Provider Known

Version: 1.0
Status: active
Category: Information quality
Reason code: provider_known

Trigger: healthcare provider or treatment place is known.

Effect: increase information quality.

Test references: TC-001

## Rule IQ-006 - Consequence Known

Version: 1.0
Status: active
Category: Information quality
Reason code: consequence_known

Trigger: consequence is described.

Effect: support severity and routing assessment.

Test references: TC-071

## Rule IQ-007 - Treatment Link Described

Version: 1.0
Status: active
Category: Information quality
Reason code: treatment_link_described

Trigger: user explains possible connection to healthcare handling.

Effect: increase causation clarity.

Test references: TC-073

## Rule IQ-008 - Document Status Known

Version: 1.0
Status: active
Category: Information quality
Reason code: document_status_known

Trigger: user says whether documents exist.

Effect: increase information quality.

Test references: TC-074

## Rule IQ-009 - Previous Decision Status Known

Version: 1.0
Status: active
Category: Information quality
Reason code: previous_decision_status_known

Trigger: user mentions previous complaint, claim, rejection or decision.

Effect: increase procedural clarity.

Test references: TC-041

## Rule IQ-010 - Critical Fact Missing

Version: 1.0
Status: active
Category: Information quality
Reason code: critical_fact_missing

Trigger: important fact is missing.

Important facts:

```text
event_date
provider
consequence
case_type
treatment_link
```

Effect: reduce information quality and add missing information priority.

Test references: TC-061, TC-066

## Rule IQ-011 - Conflicting Information

Version: 1.0
Status: active
Category: Information quality
Reason code: conflicting_information

Trigger: known facts conflict.

Effect: reduce information quality and confidence.

Test references: TC-041, TC-089

## Rule IQ-012 - Insufficient After Questions

Version: 1.0
Status: active
Category: Information quality
Reason code: insufficient_information_after_questions

Trigger: important facts are still missing after question limit.

Effect: stop repeated questioning and route according to signals.

Test references: TC-068

## Rule IQ-013 - Information Quality Sufficient

Version: 1.0
Status: active
Category: Information quality
Reason code: information_quality_sufficient

Trigger: core facts are known.

Effect: allow routing to next step.

Test references: TC-001, TC-074

## Rule IQ-014 - Partial Answer Reusable

Version: 1.0
Status: active
Category: Information quality
Reason code: partial_answer_reusable

Trigger: partial but useful information exists.

Effect: use it for screening and avoid asking the same thing again.

Test references: TC-067

## Rule IQ-015 - Repeated Question Risk

Version: 1.0
Status: active
Category: Information quality
Reason code: repeated_question_risk

Trigger: candidate next question asks for already known information.

Effect: block repeated question and choose another missing item.

Test references: TC-016, TC-067

## References

- RULEBOOK-003-rule-authoring-template.md
- docs/ai-case-brain/BRAIN-011-information-quality-rules.md
- docs/ai-case-brain/BRAIN-020-first-50-mvp-rules-catalog.md
