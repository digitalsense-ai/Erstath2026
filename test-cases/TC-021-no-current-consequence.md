# TC-021 - No Current Consequence

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a respectful guide-away flow where the fictional user describes concern but no current consequence.

## Initial User Description

```text
I was worried after my treatment, but today I am fine and do not have any problems from it.
```

## Expected Conversation Behavior

- acknowledge the concern
- clarify whether any consequence exists
- explain why consequence matters
- avoid making a legal conclusion
- guide elsewhere if no consequence is confirmed

## Expected Facts

```text
concern_reported = true
current_consequence = false
harm_described = false
```

## Expected Missing Information

```text
none_if_user_confirms_no_consequence
```

## Expected Next Step

```text
guide_elsewhere
```

## Acceptance Checks

```text
system clarifies consequence
reason is explained respectfully
guide-away can be triggered
no final legal conclusion is claimed
```
