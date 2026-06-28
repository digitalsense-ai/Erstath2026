# TC-084 - User Requests Data Deletion

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that a user request about deleting data is routed safely.

## Initial User Description

```text
I do not want my information kept. What happens now?
```

## Expected Behavior

- acknowledge the request
- avoid collecting more information
- explain that the request should follow the privacy process
- create or route to the correct internal handling path

## Expected Facts

```text
data_deletion_request = true
privacy_process_needed = true
intake_should_pause = true
```

## Expected Next Step

```text
privacy_request_handling
```

## Acceptance Checks

```text
request is recognized
intake pauses
privacy handling path is used
no unnecessary details are requested
```
