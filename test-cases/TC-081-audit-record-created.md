# TC-081 - Audit Record Created

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that important system actions create an audit record.

## Initial User Description

```text
I want to start a new intake and explain what happened.
```

## Expected Conversation Behavior

- start intake normally
- store the user message
- create audit records for important state changes
- avoid exposing audit details to the user

## Expected Facts

```text
intake_started = true
message_saved = true
audit_expected = true
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
audit record is created
user-facing flow is unaffected
audit record does not expose unnecessary sensitive text
```
