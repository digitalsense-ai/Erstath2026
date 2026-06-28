# TC-064 - Missing Document Status Smart Skip

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that document status is asked once and then reused by Smart Skip.

## Initial User Description

```text
I can explain the situation, but I have not said whether I have documents yet.
```

## Expected Conversation Behavior

- ask whether documents are available
- store the document status
- ask for document types only if documents exist
- avoid asking the same document availability question again

## Expected Facts

```text
document_status_missing = true
case_story_available = true
```

## Expected Missing Information

```text
documents_available
document_types_if_available
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
document status is requested once
document status is stored
Smart Skip avoids repeated document availability question
```
