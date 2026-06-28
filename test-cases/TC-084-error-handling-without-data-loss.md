# TC-084 - Error Handling Without Data Loss

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that a temporary system error does not lose already submitted information.

## Initial User Description

```text
I submitted my answer, but something seemed to fail on the page.
```

## Expected System Behavior

- preserve the user's submitted message if possible
- show a safe and understandable error message
- avoid duplicate lead creation on retry
- allow the user to continue
- log the error internally

## Expected Facts

```text
temporary_error_possible = true
retry_possible = true
data_preservation_required = true
```

## Expected Audit Events

```text
system.error_occurred
conversation.message_saved_if_successful
```

## Expected Next Step

```text
retry_or_continue
```

## Acceptance Checks

```text
submitted data is not lost when save succeeded
retry does not duplicate lead
safe error message is shown
internal error is logged
```
