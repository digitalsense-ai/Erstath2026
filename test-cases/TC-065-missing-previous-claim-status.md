# TC-065 - Missing Previous Claim Status

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system asks whether the fictional user has already complained or received a previous response when this matters for routing.

## Initial User Description

```text
I have described what happened and when, but I have not said whether I already contacted anyone about it before.
```

## Expected Conversation Behavior

- ask whether the user has previously complained or received a response
- store the answer clearly
- avoid repeating the same question later
- use the answer for routing or missing information

## Expected Facts

```text
previous_claim_status_missing = true
basic_story_available = true
```

## Expected Missing Information

```text
previous_claim_status
previous_response_status
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
previous claim status is requested
answer is stored
Smart Skip prevents repeat question
routing can use the status
```
