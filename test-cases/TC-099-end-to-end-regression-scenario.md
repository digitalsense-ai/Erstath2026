# TC-099 - End-to-End Regression Scenario

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate the full MVP flow from initial intake to internal handover using safe fictional data.

## Initial User Description

```text
I had treatment, later experienced a problem, know approximately when it happened, and have some documents available.
```

## Expected System Behavior

- start a conversation
- store messages
- extract useful facts as unconfirmed
- identify open items
- run screening safely
- create a decision or next step
- prepare CRM or review context
- keep audit events for important actions

## Expected Facts

```text
conversation_started = true
facts_extracted = true
screening_completed = true
next_step_created = true
handover_context_available = true
```

## Expected Missing Information

```text
remaining_open_items_if_any
```

## Expected Next Step

```text
crm_handover_or_human_review
```

## Acceptance Checks

```text
conversation state is preserved
facts remain traceable
screening result is stored
next step is explainable
handover context can be generated
audit events exist for key actions
```
