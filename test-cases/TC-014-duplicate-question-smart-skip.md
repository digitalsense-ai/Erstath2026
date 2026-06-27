# TC-014 - Duplicate Question Smart Skip

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system does not repeatedly ask for the same information once the user has answered.

## Scenario

A fictional user already gave the treatment date and document status.

## Initial User Description

```text
The treatment happened in March 2024, and I do not have the documents yet. I can try to get them later.
```

## Expected Conversation Behavior

- store treatment date
- store document status
- avoid asking the same date question again
- avoid asking the same document question again
- continue with the next missing information

## Expected Facts

```text
treatment_date = March 2024
documents_available = false
documents_may_be_available_later = true
```

## Expected Missing Information

```text
case_details
current_consequence
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
answered fields are recognized
Smart Skip prevents repeat questions
conversation moves forward
```
