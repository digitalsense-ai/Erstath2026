# TC-079 - Open Items Summary

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can summarize open items clearly.

## Initial User Description

```text
Can you tell me what you still need?
```

## Expected Conversation Behavior

- list only open items
- use plain language
- avoid a long question list
- identify the next priority item

## Expected Facts

```text
open_items_summary_requested = true
open_items_exist = true
```

## Expected Missing Information

```text
open_items
next_priority_item
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
open items are summarized clearly
closed items are not listed
next priority item is identified
```
