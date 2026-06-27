# TC-023 - Rude Treatment Only

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a guide-away flow where the fictional user mainly describes rude or poor interpersonal treatment.

## Initial User Description

```text
The staff spoke to me in a way that felt disrespectful. I do not have any injury, but I want someone to know about it.
```

## Expected Conversation Behavior

- acknowledge the experience respectfully
- clarify that no injury is described
- explain that this may be a complaint rather than an intake case
- guide elsewhere without dismissive language

## Expected Facts

```text
interpersonal_complaint = true
injury_described = false
complaint_goal = true
```

## Expected Missing Information

```text
none_required_for_guide_elsewhere
```

## Expected Next Step

```text
guide_elsewhere
```

## Acceptance Checks

```text
user is treated respectfully
no unnecessary medical questions are asked
reason code can be stored
```
