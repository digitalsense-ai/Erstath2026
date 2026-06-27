# TC-003 - Human Review Nerve Injury

Version: 1.0 Draft
Status: Planned
Owner: Product / QA / Engineering
Domain: Business Test Case
Related: TC-000-test-case-catalog.md, docs/specifications/SPEC-004-crm-and-review-api.md, policies/POL-005-human-review-policy.md

## Purpose

Validate a flow where the user describes a serious complication after treatment and the system should route the case to human review.

## Scenario

A fake patient describes an operation followed by nerve symptoms and possible lasting impairment.

## Input Story

```text
I had an operation and after that I started having numbness and pain down my leg. It has not gone away, and I have been told it may be nerve damage. I do not know whether this was a known risk or something that went wrong.
```

## Expected Conversation Behavior

The system should:

- acknowledge the seriousness carefully
- ask about timing, treatment, symptoms and current consequences
- ask whether the user has documents or medical notes
- avoid making a final legal conclusion
- confirm understanding before screening

## Expected Facts

Potential facts:

```text
treatment_context = operation
reported_symptom = numbness_and_pain
possible_injury = nerve_damage
lasting_consequence_possible = true
known_risk_unclear = true
```

## Expected Missing Information

Possible missing information:

```text
operation_date
treatment_location
medical_documentation
current_functional_impact
whether_risk_was_explained
```

## Expected Screening Behavior

Screening should recognize seriousness and uncertainty.

AI-created facts should remain unconfirmed until user confirmation.

## Expected Decision or Next Step

Expected next step:

```text
human_review
```

Potential reason codes:

```text
SERIOUS_CONSEQUENCE_POSSIBLE
MEDICAL_CAUSALITY_UNCLEAR
KNOWN_RISK_UNCLEAR
```

## Expected CRM or Review Behavior

A review record should be created or made available with:

- review reason
- confirmed facts
- open missing information
- latest decision context

## Acceptance Checks

```text
case is not rejected automatically
human review is recommended
review reason codes are stored
handover or review detail includes relevant context
no final legal conclusion is claimed
```
