# TC-042 - Conflicting User Information

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system routes to human review when the fictional user's information is important but internally inconsistent.

## Initial User Description

```text
I first thought the problem started before the treatment, but now I think it may have started right after. I am not completely sure.
```

## Expected Conversation Behavior

- acknowledge uncertainty without blame
- ask for the best approximate timeline
- preserve both versions as context
- ask clarifying questions gently
- avoid overwriting earlier facts silently

## Expected Facts

```text
timeline_conflict = true
cause_unclear = true
user_uncertain = true
```

## Expected Missing Information

```text
best_known_timeline
symptom_start_context
supporting_documents
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
conflict is captured
facts are not silently overwritten
human review is recommended
conversation remains respectful
```
