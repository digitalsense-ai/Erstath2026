# TC-024 - Expected Course After Treatment

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a case where the fictional user describes discomfort that may be part of an expected treatment course.

## Initial User Description

```text
I had discomfort after treatment, but I was told it can be normal for a while. I am not sure whether I should do anything.
```

## Expected Conversation Behavior

- ask what discomfort occurred
- ask how long it lasted
- ask whether it improved
- ask whether extra care was needed
- avoid assuming compensation relevance

## Expected Facts

```text
post_treatment_discomfort = true
expected_course_possible = true
extra_care_unknown = true
```

## Expected Missing Information

```text
duration
improvement_status
extra_care_needed
current_consequence
```

## Expected Next Step

```text
continue_intake or guide_elsewhere
```

## Acceptance Checks

```text
system clarifies severity and duration
expected course uncertainty is captured
no final conclusion is claimed
```
