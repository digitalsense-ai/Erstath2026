# TC-069 - Missing Information Priority Order

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system prioritizes the most important missing information first.

## Initial User Description

```text
I had treatment and now have problems, but I have not shared the date, place or documents yet.
```

## Expected Conversation Behavior

- detect multiple missing facts
- prioritize timing if needed for screening
- ask one question at a time
- keep the remaining missing facts in the list

## Expected Facts

```text
multiple_missing_facts = true
priority_order_needed = true
```

## Expected Missing Information

```text
event_date
provider_context
document_status
current_consequence_details
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
most important missing fact is selected first
only one question is asked
remaining gaps stay visible
priority order is consistent
```
