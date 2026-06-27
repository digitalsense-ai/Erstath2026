# TC-043 - High Impact Low Confidence

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system chooses human review when potential impact is high but confidence is low.

## Initial User Description

```text
This has affected my work and daily life, but I am not good at explaining the details. I only know that things changed after the treatment.
```

## Expected Conversation Behavior

- acknowledge the impact
- ask simple follow-up questions
- avoid over-relying on incomplete details
- capture low confidence clearly
- route to human review if uncertainty remains high

## Expected Facts

```text
high_impact_possible = true
low_detail_level = true
confidence_low = true
change_after_treatment_reported = true
```

## Expected Missing Information

```text
treatment_date
impact_details
symptom_or_problem_description
documentation_available
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
high impact is recognized
low confidence is recorded
human review is recommended
no final conclusion is claimed
```
