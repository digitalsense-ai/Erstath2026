# TC-082 - User Requests Data Deletion

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system handles a user request to delete or stop processing their information.

## Initial User Description

```text
I do not want to continue. Please delete what I have shared if possible.
```

## Expected Conversation Behavior

- acknowledge the request
- stop normal intake flow
- route to the configured privacy process
- avoid asking unrelated follow-up questions

## Expected Facts

```text
privacy_request = true
intake_should_stop = true
data_deletion_requested = true
```

## Expected Missing Information

```text
privacy_process_reference_if_needed
```

## Expected Next Step

```text
privacy_process
```

## Acceptance Checks

```text
intake stops
privacy request is recorded
user is guided to the correct process
no unrelated questions are asked
```
