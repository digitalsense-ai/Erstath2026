# TC-051 - High Impact With Missing Documents

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can recommend human review when the impact is high, even if documents are not yet available.

## Initial User Description

```text
This has affected my everyday life a lot, but I do not have the documents yet. I may be able to get them later.
```

## Expected Conversation Behavior

- acknowledge the impact carefully
- record that documents are not available yet
- ask what changed in everyday life
- ask about timing and treatment context
- avoid blocking the flow only because documents are missing

## Expected Facts

```text
high_impact_possible = true
documents_available = false
documents_may_be_available_later = true
```

## Expected Missing Information

```text
documentation_available = deferred
impact_details
treatment_context
event_date
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
high impact is recognized
missing documents are tracked
case is not stopped only due to missing documents
human review is recommended
```
