# TC-045 - High Uncertainty Documents Needed

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system recommends review or document collection when the case cannot be assessed from the conversation alone.

## Initial User Description

```text
I think the documents will explain it better than I can. I remember some details, but I am not sure I can describe it correctly.
```

## Expected Conversation Behavior

- respect the user's uncertainty
- ask what documents may exist
- capture the basic story without pressure
- mark document need clearly
- recommend review or document follow-up

## Expected Facts

```text
user_uncertain = true
documents_important = true
case_description_incomplete = true
```

## Expected Missing Information

```text
document_types
basic_event_summary
current_consequence
```

## Expected Next Step

```text
human_review or collect_documents
```

## Acceptance Checks

```text
document need is captured
uncertainty is respected
review or document follow-up is recommended
no final conclusion is claimed
```
