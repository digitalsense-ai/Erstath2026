# TC-081 - Audit Event Start

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that starting an intake creates a traceable event.

## Initial User Description

```text
I want to explain what happened.
```

## Expected Behavior

- create or identify the lead
- store the first message
- create a trace event
- avoid unnecessary sensitive data in the event

## Expected Facts

```text
intake_started = true
first_message_saved = true
trace_event_expected = true
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
start event is stored
lead relationship is traceable
sensitive data is minimized
```
