# TC-043 - High Impact Work Limitation

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system recommends human review when a fictional user describes a major everyday or work limitation after treatment.

## Initial User Description

```text
Since the treatment I have not been able to work the same way as before. I need help with tasks that used to be normal for me.
```

## Expected Conversation Behavior

- acknowledge the impact carefully
- ask what changed after treatment
- ask about timing
- ask whether follow-up care or documents exist
- avoid making a final conclusion

## Expected Facts

```text
work_limitation = true
functional_impact = true
current_consequence = true
```

## Expected Missing Information

```text
treatment_date
functional_impact_details
follow_up_context
documentation_available
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
functional impact is captured
seriousness is recognized
human review is recommended
no final conclusion is claimed
```
