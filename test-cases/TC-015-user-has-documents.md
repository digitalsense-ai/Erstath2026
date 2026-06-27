# TC-015 - User Has Documents

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system records when a fictional user has relevant documents available.

## Initial User Description

```text
I have documents from the provider and can share them if needed. I also have a short summary of what happened.
```

## Expected Conversation Behavior

- record that documents are available
- ask what document types the user has
- avoid asking later as if no documents exist
- continue collecting the story

## Expected Facts

```text
documents_available = true
user_has_summary = true
```

## Expected Missing Information

```text
document_types
case_story_details
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
document availability is stored
Smart Skip avoids duplicate document questions
conversation continues
```
