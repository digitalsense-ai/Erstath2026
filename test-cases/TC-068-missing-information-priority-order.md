# TC-068 - Missing Information Priority Order

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system prioritizes the most important missing information first.

## Initial User Description

```text
I think the treatment caused problems, but I have not said when it happened or what the consequence is today.
```

## Expected Conversation Behavior

- identify both timing and consequence as missing
- choose the highest-priority missing field
- ask one clear question
- keep the other missing field for later

## Expected Facts

```text
multiple_gaps = true
priority_selection_needed = true
```

## Expected Missing Information

```text
event_date
current_consequence
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
missing fields are prioritized
only the highest-priority question is asked
remaining gaps are retained
```
