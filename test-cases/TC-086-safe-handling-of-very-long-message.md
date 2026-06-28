# TC-086 - Safe Handling of Very Long Message

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system handles a very long user message without losing structure.

## Initial User Description

```text
The user writes a long free-text story with many details, repeated points and uncertain timing.
```

## Expected Conversation Behavior

- summarize the main points
- extract only useful facts
- avoid creating unsupported facts
- identify the most important missing item
- ask one follow-up question

## Expected Facts

```text
long_message = true
summary_needed = true
fact_extraction_needed = true
```

## Expected Missing Information

```text
highest_priority_open_item
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
long message is handled safely
summary is created
unsupported facts are not created
one follow-up question is asked
```
