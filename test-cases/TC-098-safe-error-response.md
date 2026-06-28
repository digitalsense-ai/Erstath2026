# TC-098 - Safe Error Response

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that system errors are shown safely without exposing internal details.

## Initial User Description

```text
A system error occurs during intake.
```

## Expected System Behavior

- show a short safe error message
- avoid stack traces or technical details
- preserve the current lead state where possible
- log the error internally
- allow retry if safe

## Expected Facts

```text
system_error = true
safe_response_needed = true
internal_log_needed = true
```

## Expected Missing Information

```text
none
```

## Expected Next Step

```text
retry_or_support_path
```

## Acceptance Checks

```text
technical details are not exposed
lead state is preserved where possible
internal logging exists
safe retry or support path is offered
```
