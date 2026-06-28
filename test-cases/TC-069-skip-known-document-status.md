# TC-069 - Skip Known Document Status

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system does not ask about documents again when document status is already known.

## Initial User Description

```text
I have the documents from the provider. I am not sure which ones are important.
```

## Expected Conversation Behavior

- store that documents are available
- ask what type of documents exist if needed
- do not ask whether documents exist again
- continue with the next missing fact

## Expected Facts

```text
documents_available = true
document_type_unknown = true
```

## Expected Missing Information

```text
document_types
event_date
current_consequence
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
document availability is reused
document existence question is skipped
document type can be requested if needed
Smart Skip works for document status
```
