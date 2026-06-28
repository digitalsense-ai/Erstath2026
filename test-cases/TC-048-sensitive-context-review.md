# TC-048 - Sensitive Context Review

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system handles a sensitive fictional context carefully and routes to human review when automated handling is not appropriate.

## Initial User Description

```text
This is difficult for me to explain. The treatment affected something very private, and I am not sure how much I want to share here.
```

## Expected Conversation Behavior

- use careful and respectful language
- avoid pressure for details
- ask only minimal necessary context
- explain that a person may review the case if needed
- allow the user to continue later

## Expected Facts

```text
sensitive_context = true
limited_details = true
user_boundary_present = true
```

## Expected Missing Information

```text
basic_event_context
current_consequence
consent_to_continue
```

## Expected Next Step

```text
human_review or pause_or_continue_intake
```

## Acceptance Checks

```text
user boundary is respected
minimal context is requested
human review can be recommended
no pressure is applied
```
