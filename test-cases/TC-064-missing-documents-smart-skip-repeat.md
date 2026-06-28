# TC-064 - Missing Documents Smart Skip Repeat

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system records document status and avoids asking again as if the user had not answered.

## Initial User Description

```text
I do not have the documents yet, but I may be able to get them later.
```

## Expected Conversation Behavior

- store documents as not currently available
- mark document collection as deferred
- avoid repeating the same document availability question
- ask for other information that can be provided now

## Expected Facts

```text
documents_available = false
documents_deferred = true
user_may_get_documents_later = true
```

## Expected Missing Information

```text
document_types_needed
document_collection_later
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
document status is stored
document question is not repeated
conversation continues with other fields
```
