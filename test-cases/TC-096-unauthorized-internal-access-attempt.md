# TC-096 - Unauthorized Internal Access Attempt

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that restricted internal case information is not exposed to an unauthorized user.

## Initial User Description

```text
An internal user attempts to view a lead they should not have access to.
```

## Expected System Behavior

- deny access
- avoid exposing restricted data
- create an audit event where appropriate
- show a safe error response

## Expected Facts

```text
unauthorized_access_attempt = true
access_denied = true
audit_required = true
```

## Expected Audit Event

```text
access.denied
```

## Expected Next Step

```text
show_access_denied
```

## Acceptance Checks

```text
restricted data is not shown
access denial is handled safely
audit event can be reviewed
technical details are not exposed
```
