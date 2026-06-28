# TC-067 - Approximate Answer Accepted

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that approximate answers are accepted when the fictional user cannot provide exact information.

## Initial User Description

```text
I do not remember the exact date or exact department, but I think it was around spring two years ago at the main hospital.
```

## Expected Conversation Behavior

- accept approximate information
- store uncertainty clearly
- ask for more detail only if necessary
- avoid blocking the intake because exact details are missing

## Expected Facts

```text
approximate_date_available = true
approximate_location_available = true
exact_details_missing = true
```

## Expected Missing Information

```text
exact_event_date_optional
exact_department_optional
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
approximate answer is stored
uncertainty is preserved
intake continues
system does not demand exact details too early
```
