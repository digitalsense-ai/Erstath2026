# TC-059 - Review After System Fallback

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system routes to human review when normal automated handling cannot complete safely.

## Initial User Description

```text
The system could not understand my situation fully, but I still want someone to look at what I wrote.
```

## Expected Conversation Behavior

- acknowledge that the automated flow may be incomplete
- preserve the user's input
- explain that staff review may be needed
- avoid asking the same failed questions repeatedly

## Expected Facts

```text
automated_flow_incomplete = true
fallback_needed = true
review_requested = true
```

## Expected Missing Information

```text
fallback_reason
minimum_context_for_review
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
fallback is captured
input is preserved
human review is recommended
repeat-question loop is avoided
```
