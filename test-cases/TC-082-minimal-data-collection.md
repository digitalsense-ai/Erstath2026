# TC-082 - Minimal Data Collection

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that early intake asks only for needed information.

## Initial User Description

```text
I can share more details later, but I want to know what is needed now.
```

## Expected Conversation Behavior

- ask only for case context needed now
- delay identity details until the correct step
- explain that more may be needed later
- keep the flow simple

## Expected Facts

```text
early_intake = true
minimal_data_collection = true
identity_step_later = true
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
only needed information is requested
early flow remains simple
identity step is separated
```
