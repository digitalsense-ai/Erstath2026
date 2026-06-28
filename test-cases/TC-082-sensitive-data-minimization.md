# TC-082 - Sensitive Data Minimization

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system minimizes sensitive data collection during early intake.

## Initial User Description

```text
I can give you many personal details if needed.
```

## Expected Behavior

- avoid requesting unnecessary personal details early
- collect only what is needed for the current step
- explain that more details may be needed later
- keep early intake focused on the event story

## Expected Facts

```text
sensitive_data_offered = true
data_minimization_needed = true
early_intake = true
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
unnecessary sensitive details are not requested
early intake remains focused
data minimization rule is respected
```
