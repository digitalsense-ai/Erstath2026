# TC-087 - Safe Handling of Unsupported Language

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system handles an unsupported or unclear language input safely.

## Initial User Description

```text
The user sends a message that the system cannot reliably understand.
```

## Expected Conversation Behavior

- do not guess important facts
- explain that the message was not understood clearly
- ask the user to restate in a supported language or simpler wording
- avoid scoring until the message is understood

## Expected Facts

```text
language_unclear = true
facts_created = false
scoring_not_ready = true
```

## Expected Missing Information

```text
understandable_event_description
```

## Expected Next Step

```text
ask_for_clarification
```

## Acceptance Checks

```text
system does not guess
clarification is requested
scoring is delayed
conversation remains safe
```
