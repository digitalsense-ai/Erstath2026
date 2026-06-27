# TC-046 - Known Risk Unclear

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system recommends human review when it is unclear whether the described outcome was an expected risk.

## Initial User Description

```text
I was told afterwards that this can sometimes happen, but I do not remember being told about it before the treatment. I am unsure what that means.
```

## Expected Conversation Behavior

- acknowledge the uncertainty
- ask what the user was told before treatment
- ask what happened afterwards
- ask whether documents are available
- avoid deciding whether the outcome was expected

## Expected Facts

```text
known_risk_unclear = true
information_before_treatment_unclear = true
outcome_after_treatment = true
```

## Expected Missing Information

```text
pre_treatment_information
outcome_description
documentation_available
current_consequence
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
known-risk uncertainty is captured
system avoids final conclusion
human review is recommended
reason code can be stored
```
