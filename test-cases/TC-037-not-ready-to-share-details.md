# TC-037 - Not Ready to Share Details

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system handles a fictional user who is not ready to share details yet.

## Initial User Description

```text
I think something happened, but I do not want to share many details right now.
```

## Expected Conversation Behavior

- respect the user's limit
- explain that more details are needed for intake
- ask only for minimal safe context
- allow the user to stop or continue later

## Expected Facts

```text
limited_details = true
user_not_ready = true
case_context_incomplete = true
```

## Expected Missing Information

```text
event_description
provider_context
current_consequence
```

## Expected Next Step

```text
pause_or_continue_intake
```

## Acceptance Checks

```text
user boundary is respected
minimal context is requested
no pressure is applied
```
