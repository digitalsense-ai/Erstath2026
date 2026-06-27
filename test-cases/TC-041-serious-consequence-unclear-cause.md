# TC-041 - Serious Consequence With Unclear Cause

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system recommends human review when a fictional user describes a serious consequence but the cause is unclear.

## Initial User Description

```text
After treatment I had a serious problem that changed my everyday life. I do not know if it was caused by the treatment or by something else.
```

## Expected Conversation Behavior

- acknowledge the seriousness carefully
- ask what changed in everyday life
- ask when treatment happened
- ask when the consequence started
- ask whether documents are available
- avoid making a final conclusion

## Expected Facts

```text
serious_consequence_possible = true
cause_unclear = true
everyday_life_affected = true
```

## Expected Missing Information

```text
treatment_date
consequence_start_date
current_consequence_details
documentation_available
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
seriousness is recognized
cause uncertainty is captured
human review is recommended
no final conclusion is claimed
```
