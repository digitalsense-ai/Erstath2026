# TC-074 - Skip Irrelevant Document Question

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system does not ask about documents too early when more basic facts are still missing.

## Initial User Description

```text
I am not sure what happened yet. I only know that it was connected to treatment.
```

## Expected Conversation Behavior

- ask for basic event description first
- delay document question until context exists
- track document status as not yet asked
- avoid overwhelming the user

## Expected Facts

```text
basic_context_missing = true
document_question_not_ready = true
```

## Expected Missing Information

```text
event_description
provider_context
current_consequence
document_status_later
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
basic context is prioritized
document question is delayed
only one question is asked
conversation stays simple
```
