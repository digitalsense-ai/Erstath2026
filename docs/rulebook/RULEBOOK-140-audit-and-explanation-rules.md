# RULEBOOK-140 - Audit and Explanation Rules

Version: 1.0
Status: Active Draft
Scope: Long-term AI Case Brain rule library

## Purpose

This document defines audit and explanation rules for AI Case Brain.

Audit and explanation rules make automated recommendations traceable, testable and understandable for staff and QA.

## Explanation Levels

```text
user_facing
caseworker_facing
developer_facing
```

## Rule AUD-001 - Reason Codes Required

Version: 1.0
Status: active
Category: Audit and explanation
Reason code: reason_codes_required

### Trigger

A routing, score, next question, guide-away or review recommendation is produced.

### Effect

Attach reason codes.

### Test References

TC-096

## Rule AUD-002 - Internal Summary Required

Version: 1.0
Status: active
Category: Audit and explanation
Reason code: internal_summary_required

### Trigger

A decision support result is generated.

### Effect

Store a short internal summary for staff and QA.

### Test References

TC-096

## Rule AUD-003 - User-Safe Summary Required

Version: 1.0
Status: active
Category: Audit and explanation
Reason code: user_safe_summary_required

### Trigger

A response is shown to the user.

### Effect

Use careful language that does not promise an outcome.

### Test References

TC-096

## Rule AUD-004 - Validation Status Recorded

Version: 1.0
Status: active
Category: Audit and explanation
Reason code: validation_status_recorded

### Trigger

AI or Brain output is accepted, rejected or adjusted by rule logic.

### Effect

Record validation status.

### Test References

TC-089
TC-095

## Rule AUD-005 - Human Review Reason Recorded

Version: 1.0
Status: active
Category: Audit and explanation
Reason code: human_review_reason_recorded

### Trigger

human_review_required is true.

### Effect

Record review reason codes and priority.

### Test References

TC-095
TC-097

## Rule AUD-006 - Guide-Away Reason Recorded

Version: 1.0
Status: active
Category: Audit and explanation
Reason code: guide_away_reason_recorded

### Trigger

routing_target is guide_away.

### Effect

Record guide-away reason codes.

### Test References

TC-021
TC-095

## Rule AUD-007 - Score Drivers Recorded

Version: 1.0
Status: active
Category: Audit and explanation
Reason code: score_drivers_recorded

### Trigger

case strength, information quality or commercial value is calculated.

### Effect

Record the main positive and negative score drivers.

### Test References

TC-095
TC-096

## Rule AUD-008 - Staff Override Recorded

Version: 1.0
Status: active
Category: Audit and explanation
Reason code: staff_override_recorded

### Trigger

A staff member changes an automated recommendation or review outcome.

### Effect

Record original recommendation, human outcome and reviewer note.

### Test References

TC-097

## Rule AUD-009 - User Text Must Hide Internal Value

Version: 1.0
Status: active
Category: Audit and explanation
Reason code: user_text_hides_internal_value

### Trigger

User-facing text is generated.

### Effect

Do not expose internal commercial value or internal prioritisation score.

### Test References

TC-096

## Rule AUD-010 - Rule Test Traceability Required

Version: 1.0
Status: active
Category: Audit and explanation
Reason code: rule_test_traceability_required

### Trigger

A rule is added, changed or implemented.

### Effect

Link the rule to test references where possible.

### Test References

TC-095

## Rule AUD-011 - Output Shape Traceable

Version: 1.0
Status: active
Category: Audit and explanation
Reason code: output_shape_traceable

### Trigger

A Brain result is returned from API or persisted.

### Effect

Ensure the result can be traced to contracts and rule groups.

### Test References

TC-089
TC-096

## Rule AUD-012 - Explanation Cannot Add New Facts

Version: 1.0
Status: active
Category: Audit and explanation
Reason code: explanation_cannot_add_new_facts

### Trigger

An explanation summary is generated.

### Effect

The explanation must not introduce facts that were not in the input or rule result.

### Test References

TC-096

## References

- RULEBOOK-003-rule-authoring-template.md
- docs/ai-case-brain/BRAIN-017-audit-and-explanation-rules.md
- docs/ai-case-brain/BRAIN-020-first-50-mvp-rules-catalog.md
