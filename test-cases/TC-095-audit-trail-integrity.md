# TC-095 - Audit Trail Integrity

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that important internal events can be reviewed in a clear audit trail.

## Initial User Description

```text
A lead has moved through several internal steps and the history needs to be checked.
```

## Expected System Behavior

- show important events in order
- include event time where available
- include actor type where available
- preserve status changes
- avoid exposing unnecessary sensitive details

## Expected Facts

```text
audit_trail_needed = true
multiple_events_exist = true
status_history_required = true
```

## Expected Audit Events

```text
lead.created
conversation.message_saved
screening.result_mapped
decision.created
review.status_updated
```

## Expected Next Step

```text
show_audit_trail
```

## Acceptance Checks

```text
audit events are ordered
important actions are visible
sensitive details are minimized
status history is preserved
```
