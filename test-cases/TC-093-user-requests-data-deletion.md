# TC-093 - User Requests Data Deletion

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that a user request about deleting stored information is routed safely.

## Initial User Description

```text
I want my information removed from the system.
```

## Expected System Behavior

- acknowledge the request
- avoid continuing intake automatically
- route to the correct privacy or support process
- create an internal record of the request where appropriate

## Expected Facts

```text
data_deletion_request = true
intake_should_pause = true
privacy_process_needed = true
```

## Expected Missing Information

```text
identity_verification_if_required
```

## Expected Next Step

```text
privacy_request_flow
```

## Acceptance Checks

```text
data request is recognized
intake pauses
privacy process is selected
request is auditable where appropriate
```
