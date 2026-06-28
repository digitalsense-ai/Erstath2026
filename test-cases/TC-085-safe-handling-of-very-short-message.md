# TC-085 - Safe Handling of Very Short Message

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system handles a very short message without over-interpreting it.

## Initial User Description

```text
Help.
```

## Expected Conversation Behavior

- do not infer a case type from too little information
- ask a simple open question
- avoid scoring until basic context exists
- keep tone calm and supportive

## Expected Facts

```text
message_too_short = true
case_type_unknown = true
scoring_not_ready = true
```

## Expected Missing Information

```text
initial_event_description
```

## Expected Next Step

```text
ask_initial_context
```

## Acceptance Checks

```text
message is not over-interpreted
simple follow-up is asked
scoring is delayed
system remains stable
```
