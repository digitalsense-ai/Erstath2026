# TC-085 - Access Denied Private Record

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that private lead information is not shown to the wrong user or role.

## Initial User Description

```text
I want to see information for a case that is not connected to me.
```

## Expected Conversation Behavior

- avoid showing private information
- explain that access cannot be granted without proper authorization
- route to safe support path if relevant

## Expected Facts

```text
access_request = true
authorization_missing = true
private_information_protected = true
```

## Expected Missing Information

```text
proper_authorization
valid_case_reference_if_applicable
```

## Expected Next Step

```text
access_denied_or_support_path
```

## Acceptance Checks

```text
private information is not exposed
authorization is required
safe explanation is shown
access attempt can be audited
```
