# TC-097 - Session Resume After Interruption

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that a user can resume after an interrupted intake session.

## Initial User Description

```text
I started earlier and want to continue where I stopped.
```

## Expected System Behavior

- find the existing session where available
- preserve previous messages and facts
- show or infer the next safe step
- avoid restarting the whole flow unnecessarily
- keep unresolved open items visible

## Expected Facts

```text
resume_requested = true
existing_session_possible = true
previous_context_should_be_reused = true
```

## Expected Missing Information

```text
remaining_open_items
```

## Expected Next Step

```text
resume_intake
```

## Acceptance Checks

```text
previous context is reused
known facts are preserved
open items remain visible
flow does not restart unnecessarily
```
