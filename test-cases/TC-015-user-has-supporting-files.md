# TC-015 - User Has Supporting Files

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system records when a fictional user has supporting files available.

## Initial User Description

```text
I have some files and a short summary of what happened. I can provide them later if needed.
```

## Expected Conversation Behavior

- record that supporting files are available
- ask what file types the user has
- avoid asking later as if no files exist
- continue collecting the story

## Expected Facts

```text
supporting_files_available = true
user_has_summary = true
```

## Expected Missing Information

```text
file_types
case_story_details
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
file availability is stored
Smart Skip avoids duplicate file questions
conversation continues
```
