# TC-021 - No Harm Confirmed

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a respectful guide-away flow when a fictional user confirms that no harm or consequence occurred.

## Initial User Description

```text
I was worried about what happened during my appointment, but nothing bad happened afterwards and I have no symptoms now.
```

## Expected Conversation Behavior

- acknowledge the concern
- clarify that no harm or consequence is described
- explain why consequence information matters
- guide elsewhere respectfully if the user wants to complain

## Expected Facts

```text
concern_reported = true
harm_confirmed_absent = true
current_symptoms_absent = true
```

## Expected Missing Information

```text
complaint_goal_if_any
```

## Expected Next Step

```text
guide_elsewhere
```

## Acceptance Checks

```text
no harm is captured
user is not pushed toward a claim
respectful explanation is provided
reason code can be stored
```
