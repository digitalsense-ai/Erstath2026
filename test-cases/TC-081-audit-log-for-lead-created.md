# TC-081 - Audit Log for Lead Created

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that lead creation creates an audit event.

## Initial User Description

```text
I want to start and briefly explain what happened.
```

## Expected Conversation Behavior

- create a lead
- start conversation state
- record the creation event
- avoid storing unnecessary sensitive data in the audit event

## Expected Facts

```text
lead_created = true
conversation_started = true
audit_event_required = true
```

## Expected Audit Event

```text
lead.created
conversation.started
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
lead is created
audit event is recorded
audit metadata is minimal
conversation starts successfully
```
