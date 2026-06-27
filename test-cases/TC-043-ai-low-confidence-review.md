# TC-043 - AI Low Confidence Review

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that low confidence screening output can trigger human review instead of automatic routing.

## Initial User Description

```text
I had treatment and later problems, but I cannot explain clearly what happened or how it connects.
```

## Expected Conversation Behavior

- ask simple clarifying questions
- collect only the facts the user can provide
- avoid forcing a classification
- confirm understanding before screening

## Expected Facts

```text
treatment_occurred = true
later_problem_reported = true
connection_unclear = true
classification_confidence_low = true
```

## Expected Missing Information

```text
event_description
timeline
current_consequence
connection_description
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
low confidence does not create automatic rejection
review trigger is available
missing information is visible
no final conclusion is claimed
```
