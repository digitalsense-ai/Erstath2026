# TC-094 - User Requests Data Export

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that a user request about receiving stored information is routed safely.

## Initial User Description

```text
I would like to know what information you have stored about me.
```

## Expected System Behavior

- recognize the request as a privacy-related request
- pause normal intake if needed
- route to the correct privacy or support process
- avoid exposing information without the right checks
- create an internal record where appropriate

## Expected Facts

```text
data_export_request = true
privacy_process_needed = true
normal_intake_may_pause = true
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
request is recognized
privacy process is selected
information is not exposed too early
request can be audited where appropriate
```
