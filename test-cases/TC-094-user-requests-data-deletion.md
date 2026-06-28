# TC-094 - User Requests Data Deletion

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that a user request about deleting stored data is routed safely.

## Initial User Description

```text
I want my information removed from the system.
```

## Expected System Behavior

- recognize the data request
- avoid continuing normal intake automatically
- route to the appropriate internal privacy process
- keep necessary audit information according to policy
- provide a safe user-facing response

## Expected Facts

```text
data_deletion_request = true
privacy_process_needed = true
normal_intake_paused = true
```

## Expected Missing Information

```text
identity_verification_or_privacy_process_step
```

## Expected Next Step

```text
privacy_request_process
```

## Acceptance Checks

```text
data request is recognized
normal intake is paused
privacy process is triggered
response avoids technical details
```
