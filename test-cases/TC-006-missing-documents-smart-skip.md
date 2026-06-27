# TC-006 - Missing Documents and Smart Skip

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system tracks missing documents and does not ask twice once the user has answered.

## Scenario

A fictional user describes an injury but does not yet have medical records.

## Initial User Description

```text
I think I was injured during treatment, but I do not have the journal or any documents yet. I can maybe get them later.
```

## Expected Conversation Behavior

- ask what happened
- record that documents are not available yet
- do not repeatedly ask for the same document status
- mark documents as missing or deferred
- continue with information the user can provide

## Expected Facts

```text
possible_treatment_injury = true
documents_available = false
documents_may_be_available_later = true
```

## Expected Missing Information

```text
documentation_available = deferred
event_details
current_consequence
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
document status is stored
Smart Skip prevents duplicate document question
missing information remains visible
conversation continues respectfully
```
