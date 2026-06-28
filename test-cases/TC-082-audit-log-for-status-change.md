# TC-082 - Audit Log for Status Change

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that important status changes are auditable.

## Initial User Description

```text
The lead moved from screening to review after new information was added.
```

## Expected System Behavior

- record the status change
- record when it happened
- record the actor type where available
- preserve the previous and new status

## Expected Facts

```text
status_changed = true
previous_status = screening
new_status = review
audit_required = true
```

## Expected Audit Event

```text
lead.status_changed
```

## Expected Next Step

```text
continue_review_flow
```

## Acceptance Checks

```text
status change is logged
previous status is preserved
new status is preserved
audit event can be reviewed
```
