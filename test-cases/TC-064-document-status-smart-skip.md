# TC-064 - Document Status Smart Skip

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that document status is stored and not asked repeatedly.

## Initial User Description

```text
I do not have documents right now, but I may get them later.
```

## Expected Conversation Behavior

- record current document status
- avoid repeated document questions
- continue with other available information

## Expected Facts

```text
documents_available = false
documents_later_possible = true
```

## Expected Missing Information

```text
document_status_deferred
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
document status is stored
Smart Skip prevents repeated question
conversation continues
```
