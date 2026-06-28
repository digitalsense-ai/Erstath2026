# TC-047 - Document Review Needed

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can mark a case for review when relevant documents exist but their content is not yet known.

## Initial User Description

```text
I have some documents about the situation, but I cannot explain all details from memory.
```

## Expected Conversation Behavior

- record that documents exist
- ask what types of documents are available
- collect the user's short description
- avoid assuming what the documents say
- mark review need if the case remains unclear

## Expected Facts

```text
documents_available = true
document_content_unknown = true
story_incomplete = true
```

## Expected Missing Information

```text
document_types
case_story_details
current_consequence
```

## Expected Next Step

```text
human_review or continue_intake
```

## Acceptance Checks

```text
document availability is stored
document content is not invented
review need can be triggered
```
