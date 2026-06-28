# TC-048 - User Story and Documents Differ

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system routes to review when the user's description may differ from available documents.

## Initial User Description

```text
What I remember does not fully match what I was later told. I may need someone to compare the information.
```

## Expected Conversation Behavior

- acknowledge the uncertainty
- preserve the user's description
- ask what information seems different
- avoid deciding which version is correct
- recommend review if the difference matters

## Expected Facts

```text
information_difference_possible = true
user_memory_uncertain = true
comparison_needed = true
```

## Expected Missing Information

```text
which_information_differs
document_types
current_consequence
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
both uncertainty and user story are preserved
system does not choose a version automatically
human review is recommended
```
