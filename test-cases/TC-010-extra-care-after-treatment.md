# TC-010 - Extra Care After Treatment

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a case where a fictional user needed extra care after an initial treatment.

## Initial User Description

```text
After my treatment I had problems and needed extra follow-up. I am unsure if the original treatment was handled correctly.
```

## Expected Conversation Behavior

- ask when the first treatment happened
- ask what follow-up was needed
- ask whether the problem still affects the user
- ask whether documents are available
- confirm understanding before screening

## Expected Facts

```text
extra_follow_up_needed = true
original_treatment_unclear = true
current_consequence_unknown = true
```

## Expected Missing Information

```text
treatment_date
follow_up_details
current_consequence
documentation_available
```

## Expected Next Step

```text
continue_intake or human_review
```

## Acceptance Checks

```text
follow-up need is captured
timing is requested
missing information is tracked
no final conclusion is claimed
```
