# TC-083 - Audit Log for Status Change

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that important status changes create audit events.

## Initial User Description

```text
The lead moves from screening to review after the system finds uncertainty.
```

## Expected System Behavior

- update lead status
- create an audit event
- include action, actor type and timestamp
- avoid storing unnecessary private text in the audit event

## Expected Facts

```text
status_change = true
audit_event_required = true
```

## Expected Audit Event

```text
lead.status_changed
```

## Expected Next Step

```text
review_queue
```

## Acceptance Checks

```text
status is updated
audit event is created
audit event is minimal and useful
private text is not copied unnecessarily
```
