# TC-047 - Documentation Contradicts User Story

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system recommends human review when available documents and the fictional user's story appear to differ.

## Initial User Description

```text
My own understanding is different from what the documents seem to say. I am not sure which version is correct.
```

## Expected Conversation Behavior

- acknowledge the uncertainty
- ask what the user believes happened
- ask what the documents appear to say
- avoid choosing one version automatically
- mark the difference for human review

## Expected Facts

```text
document_story_difference = true
user_understanding_unclear = true
review_needed = true
```

## Expected Missing Information

```text
user_story_summary
document_summary
specific_difference
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
difference is captured
no version is selected automatically
human review is recommended
reason code can be stored
```
