# TC-058 - Review Priority Marker

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that review priority can be set when the available facts support closer staff attention.

## Initial User Description

```text
This still affects my everyday situation, and I would like it to be reviewed carefully.
```

## Expected Conversation Behavior

- acknowledge the user's statement
- ask for simple context
- capture current impact
- avoid a final conclusion
- allow priority to be set when supported

## Expected Facts

```text
current_impact = true
review_priority_possible = true
```

## Expected Missing Information

```text
impact_details
follow_up_status
available_documents
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
impact is captured
review priority can be set
human review is recommended
no final conclusion is claimed
```
