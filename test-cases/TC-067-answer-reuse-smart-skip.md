# TC-067 - Answer Reuse Smart Skip

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system reuses an answer already given by the fictional user.

## Initial User Description

```text
This happened at a hospital in 2021. Later in the conversation I explain the consequence.
```

## Expected Conversation Behavior

- store hospital as provider context
- store 2021 as approximate timing
- do not ask again whether the user knows where it happened
- do not ask again whether the user knows when it happened
- focus next questions on missing facts only

## Expected Facts

```text
provider_type = hospital
approximate_event_year = 2021
known_facts_should_be_reused = true
```

## Expected Missing Information

```text
current_consequence
document_status
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
known facts are reused
provider question is skipped
timing question is skipped
next question targets only missing information
```
