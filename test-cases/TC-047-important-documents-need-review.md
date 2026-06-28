# TC-047 - Important Documents Need Review

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system recommends human review when the fictional user has important documents that should be assessed before routing.

## Initial User Description

```text
I have notes and letters about the treatment. I think they show something important, but I do not know how to understand them.
```

## Expected Conversation Behavior

- record that documents are available
- ask what document types exist
- avoid interpreting documents as final proof
- recommend review if document context is important

## Expected Facts

```text
documents_available = true
document_context_important = true
user_needs_help_understanding = true
```

## Expected Missing Information

```text
document_types
event_description
current_consequence
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
document availability is captured
system does not over-interpret documents
human review is recommended
reason code can be stored
```
