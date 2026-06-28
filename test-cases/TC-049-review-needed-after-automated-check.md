# TC-049 - Review Needed After Automated Check

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that automated screening can safely stop and request review when information quality is not strong enough.

## Initial User Description

```text
I answered the questions as well as I can, but I am still unsure whether the important details are clear.
```

## Expected Conversation Behavior

- acknowledge the uncertainty
- summarize what is known
- show what information is still uncertain
- avoid confident classification
- route to review if needed

## Expected Facts

```text
information_quality_uncertain = true
automated_confidence_low = true
review_needed = true
```

## Expected Missing Information

```text
uncertain_facts
missing_context
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
known information is summarized
uncertainty is made visible
automated flow does not overreach
human review is recommended
```
