# TC-082 - Privacy Minimal Data Collection

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system collects only the information needed for the current intake step.

## Initial User Description

```text
I can explain the situation, but I do not want to share more personal details than necessary right now.
```

## Expected System Behavior

- respect the user's limit
- ask only for information needed for screening
- delay identity details until the correct later step
- avoid collecting unnecessary personal data early

## Expected Facts

```text
privacy_limit_expressed = true
minimal_collection_required = true
identity_not_needed_yet = true
```

## Expected Missing Information

```text
case_story_details
current_consequence
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
unnecessary personal details are not requested
identity flow is not triggered too early
user boundary is respected
screening can continue with minimal data
```
