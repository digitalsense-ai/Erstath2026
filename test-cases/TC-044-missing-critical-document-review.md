# TC-044 - Missing Critical Document Review

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that a case can be routed to human review when key documents are missing but the described situation may be serious.

## Initial User Description

```text
I do not have the documents yet, but I believe the treatment led to a serious problem that still affects me.
```

## Expected Conversation Behavior

- record that documents are not available yet
- ask what happened in simple terms
- ask how the user is affected now
- avoid blocking the conversation only because documents are missing
- recommend review if seriousness remains plausible

## Expected Facts

```text
documents_available = false
serious_consequence_possible = true
current_consequence_reported = true
```

## Expected Missing Information

```text
documentation_available
event_details
treatment_date
current_consequence_details
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
missing documents are tracked
case is not stopped automatically
seriousness can trigger review
no final conclusion is claimed
```
