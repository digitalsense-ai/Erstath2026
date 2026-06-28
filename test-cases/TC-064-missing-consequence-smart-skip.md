# TC-064 - Missing Consequence Smart Skip

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system narrows missing consequence information instead of repeating broad questions.

## Initial User Description

```text
It still affects me, but mostly in daily activities. I am not sure how to describe it precisely.
```

## Expected Conversation Behavior

- store that there is a current consequence
- ask a narrower follow-up about daily activity impact
- avoid asking again whether any consequence exists
- use simple language

## Expected Facts

```text
current_consequence = true
daily_activity_impact = true
consequence_details_unclear = true
```

## Expected Missing Information

```text
daily_activity_impact_details
severity_description
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
current consequence is stored
follow-up question is narrowed
Smart Skip prevents duplicate consequence question
conversation remains simple
```
