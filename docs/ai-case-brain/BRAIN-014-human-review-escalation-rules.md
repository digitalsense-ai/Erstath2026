# BRAIN-014 - Human Review Escalation Rules

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document defines when AI Case Brain should route a lead to human review instead of continuing automated screening.

Human review is required when the system should not rely only on automated intake, scoring or routing.

## Human Review Output

Recommended output fields:

```json
{
  "human_review_required": true,
  "review_priority": "high",
  "review_reason_codes": [
    "low_confidence",
    "serious_consequence_indicated"
  ]
}
```

## Review Priority Values

```text
low
medium
high
urgent
```

## Rule HR-001 - Low Confidence

Trigger:

AI confidence is below configured threshold.

Default threshold:

```text
confidence < 0.55
```

Effect:

Route to human review if the case may still be relevant.

Reason code:

```text
low_confidence
```

## Rule HR-002 - Serious Consequence With Missing Facts

Trigger:

Death, severe permanent injury or major work capacity loss is indicated, but critical facts are missing.

Effect:

Route to human review or increase review priority.

Reason code:

```text
serious_consequence_with_missing_facts
```

## Rule HR-003 - Causation Unclear In Serious Case

Trigger:

Consequence is serious and causation is unclear.

Effect:

Route to human review.

Reason code:

```text
serious_case_causation_unclear
```

## Rule HR-004 - Time Limit Uncertainty

Trigger:

The case may be time sensitive, old or close to a possible limitation issue, and dates are unclear.

Effect:

Route to human review if automated clarification cannot resolve it.

Reason code:

```text
time_limit_uncertainty
```

## Rule HR-005 - Conflicting Information

Trigger:

The user's answers conflict with each other, or documents later conflict with user statements.

Effect:

Route to human review.

Reason code:

```text
conflicting_information_review
```

## Rule HR-006 - Vulnerable Patient Signal

Trigger:

The patient appears to be a child, elderly, disabled, severely ill or otherwise vulnerable.

Effect:

Increase review priority depending on severity and uncertainty.

Reason code:

```text
vulnerable_patient_review_signal
```

## Rule HR-007 - Prior Rejection Or Decision

Trigger:

The user mentions previous rejection, decision, complaint, appeal or reopening request.

Effect:

Route to human review when legal or procedural status affects next step.

Reason code:

```text
prior_decision_requires_review
```

## Rule HR-008 - High Value But Weak Evidence

Trigger:

Commercial value signals are high, but documentation and causation signals are weak.

Effect:

Route to human review before onboarding or rejection.

Reason code:

```text
high_value_weak_evidence_review
```

## Rule HR-009 - Out Of Scope But Sensitive

Trigger:

The case may be out of scope, but the user describes severe harm, distress or sensitive facts.

Effect:

Use careful guide-away or human review depending on policy.

Reason code:

```text
sensitive_out_of_scope_review
```

## Rule HR-010 - AI Output Validation Problem

Trigger:

AI output is missing required fields, invalid JSON, inconsistent or fails contract validation.

Effect:

Do not use the output for final routing. Use fallback and log review need when appropriate.

Reason code:

```text
ai_output_validation_problem
```

## Rule HR-011 - Question Limit Reached With Medium Potential

Trigger:

Question limit has been reached, but case strength is not clearly weak or strong.

Effect:

Route to human review instead of continuing automated questioning.

Reason code:

```text
question_limit_medium_potential_review
```

## Rule HR-012 - Staff Override

Trigger:

A staff member marks the lead for review or changes review priority.

Effect:

Human review status overrides automated route.

Reason code:

```text
staff_review_override
```

## Priority Guidance

Urgent:

- severe harm and time-sensitive issue
- vulnerable patient and serious consequence
- high-risk policy concern

High:

- death or severe permanent injury
- serious consequence and causation unclear
- high-value case with weak evidence

Medium:

- low confidence but possibly relevant
- prior decision needs procedural review
- conflicting facts without urgent risk

Low:

- quality check
- routine manual review
- borderline guide-away case

## Test References

- TC-041 Human Review Unclear Case
- TC-071 Serious Consequence Review Priority
- TC-073 Causation Unclear Flow
- TC-088 AI Service Unavailable Fallback
- TC-089 Invalid AI Output Fallback

## References

- BRAIN-002-decision-principles-and-guardrails.md
- BRAIN-003-routing-model.md
- policies/POL-005-human-review-policy.md
- docs/contracts/CONTRACT-007-human-review-contract.md
