# TC-047 - Documentation Conflict Review

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system recommends human review when the fictional user's description and available documents appear to point in different directions.

## Initial User Description

```text
My own notes say one thing, but the provider document seems to describe the situation differently. I am not sure which is correct.
```

## Expected Conversation Behavior

- acknowledge the uncertainty
- ask what each source says at a high level
- avoid deciding which source is correct
- mark the conflict clearly
- recommend review if the conflict affects next step

## Expected Facts

```text
documentation_conflict = true
source_difference = true
clarification_needed = true
```

## Expected Missing Information

```text
user_note_summary
provider_document_summary
conflict_description
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
conflict is captured
system does not choose a side
human review is recommended
reason code can be stored
```
