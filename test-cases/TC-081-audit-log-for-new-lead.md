# TC-081 - Audit Log for New Lead

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that creating a new fictional lead creates the expected audit trail.

## Initial User Description

```text
I want to start and explain what happened.
```

## Expected System Behavior

- create a lead
- store the first message
- create an audit event for lead creation
- create an audit event for conversation start
- avoid storing unnecessary sensitive data in audit metadata

## Expected Facts

```text
lead_created = true
conversation_started = true
audit_required = true
```

## Expected Audit Events

```text
lead.created
conversation.started
conversation.message_saved
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
lead exists
audit events exist
audit metadata is minimal
conversation message is stored
```
