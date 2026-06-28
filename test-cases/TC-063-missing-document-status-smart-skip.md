# TC-063 - Missing Document Status Smart Skip

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system records document status and does not repeatedly ask whether documents exist.

## Initial User Description

```text
I do not have the documents yet, but I think I can request them later.
```

## Expected Conversation Behavior

- store that documents are not currently available
- store that documents may be available later
- avoid asking the same document-availability question again
- continue with facts the user can provide now

## Expected Facts

```text
documents_available = false
documents_possible_later = true
document_status_known = true
```

## Expected Missing Information

```text
document_types_needed
document_follow_up_later
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
document status is stored
Smart Skip prevents duplicate document question
missing documents remain visible
conversation continues
```
