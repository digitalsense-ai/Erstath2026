# RULEBOOK-110 - Human Review Rules

Version: 1.0
Status: Active Draft
Scope: Long-term AI Case Brain rule library

## Purpose

This document defines human review rules for AI Case Brain.

Human review rules decide when automated screening should pause or escalate for staff review.

## Review Priority Values

```text
low
medium
high
urgent
```

## Rule HR-001 - Low Confidence Review

Version: 1.0
Status: active
Category: Human review
Reason code: low_confidence

### Trigger

The case may be relevant, but confidence is below threshold.

### Effect

Set human_review_required to true.

### Test References

TC-041

## Rule HR-002 - Serious Consequence With Missing Facts

Version: 1.0
Status: active
Category: Human review
Reason code: serious_consequence_with_missing_facts

### Trigger

Death, severe permanent injury or major work capacity loss is indicated, but critical facts are missing.

### Effect

Set human_review_required to true and increase review priority.

### Test References

TC-071

## Rule HR-003 - Serious Case Causation Unclear

Version: 1.0
Status: active
Category: Human review
Reason code: serious_case_causation_unclear

### Trigger

Consequence is serious and causation is unclear.

### Effect

Route to human review.

### Test References

TC-041
TC-073

## Rule HR-004 - Time Limit Uncertainty Review

Version: 1.0
Status: active
Category: Human review
Reason code: time_limit_uncertainty

### Trigger

Important dates are missing, old, conflicting or potentially blocking.

### Effect

Route to human review when automated clarification is not enough.

### Test References

TC-041
TC-062

## Rule HR-005 - Conflicting Information Review

Version: 1.0
Status: active
Category: Human review
Reason code: conflicting_information_review

### Trigger

User facts conflict or document signals conflict with user facts.

### Effect

Route to human review.

### Test References

TC-041
TC-089

## Rule HR-006 - Vulnerable Patient Review Signal

Version: 1.0
Status: active
Category: Human review
Reason code: vulnerable_patient_review_signal

### Trigger

The patient appears to be a child, elderly, severely ill or otherwise vulnerable.

### Effect

Increase review priority depending on consequence and uncertainty.

### Test References

TC-006
TC-071

## Rule HR-007 - Prior Decision Requires Review

Version: 1.0
Status: active
Category: Human review
Reason code: prior_decision_requires_review

### Trigger

The user mentions prior rejection, decision, complaint, appeal or reopening.

### Effect

Route to human review if procedural status affects next step.

### Test References

TC-041

## Rule HR-008 - High Value Weak Evidence Review

Version: 1.0
Status: active
Category: Human review
Reason code: high_value_weak_evidence_review

### Trigger

Commercial value signal is high, but evidence or causation signal is weak.

### Effect

Route to human review before onboarding or guide-away.

### Test References

TC-041
TC-074

## Rule HR-009 - Sensitive Out Of Scope Review

Version: 1.0
Status: active
Category: Human review
Reason code: sensitive_out_of_scope_review

### Trigger

The matter may be out of scope, but severe harm or sensitive facts are described.

### Effect

Route to human review or careful guide-away depending on policy.

### Test References

TC-081

## Rule HR-010 - Output Validation Problem Review

Version: 1.0
Status: active
Category: Human review
Reason code: ai_output_validation_problem

### Trigger

AI or Brain output fails validation in a way that affects routing safety.

### Effect

Use fallback handling and mark for review when appropriate.

### Test References

TC-088
TC-089

## Rule HR-011 - Question Limit Medium Potential Review

Version: 1.0
Status: active
Category: Human review
Reason code: question_limit_medium_potential_review

### Trigger

Question limit is reached and case is neither clearly weak nor clearly strong.

### Effect

Route to human review instead of asking more questions.

### Test References

TC-068

## Rule HR-012 - Staff Review Override

Version: 1.0
Status: active
Category: Human review
Reason code: staff_review_override

### Trigger

A staff member marks the lead for review.

### Effect

Staff review status overrides automated routing.

### Test References

TC-097

## Rule HR-013 - Death Case Review Priority

Version: 1.0
Status: active
Category: Human review
Reason code: death_case_review_priority

### Trigger

Consequence is death.

### Effect

Set review priority to high unless another rule sets urgent.

### Test References

TC-071

## Rule HR-014 - Serious Child Case Review Priority

Version: 1.0
Status: active
Category: Human review
Reason code: serious_child_case_review_priority

### Trigger

Child or birth-related serious consequence is described.

### Effect

Set high review priority.

### Test References

TC-006
TC-071

## References

- RULEBOOK-003-rule-authoring-template.md
- docs/ai-case-brain/BRAIN-014-human-review-escalation-rules.md
- docs/ai-case-brain/BRAIN-020-first-50-mvp-rules-catalog.md
