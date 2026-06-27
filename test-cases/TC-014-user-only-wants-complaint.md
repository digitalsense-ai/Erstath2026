# TC-014 - User Only Wants Complaint

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can guide a user respectfully when they only want to complain and do not describe an injury or consequence.

## Scenario

A fictional user is unhappy with communication and wants to complain.

## Initial User Description

```text
I was treated rudely and I want to complain about how I was spoken to. I do not have an injury from the treatment.
```

## Expected Conversation Behavior

- acknowledge the experience respectfully
- clarify that no injury is described
- avoid pushing the user into a compensation flow
- guide the user toward a complaint path if appropriate

## Expected Facts

```text
complaint_only = true
injury_described = false
current_consequence_described = false
```

## Expected Missing Information

```text
none_required_for_compensation_flow_if_confirmed
```

## Expected Next Step

```text
guide_elsewhere
```

## Acceptance Checks

```text
user is guided respectfully
no compensation case is forced
reason code is stored
no final legal conclusion is claimed
```
