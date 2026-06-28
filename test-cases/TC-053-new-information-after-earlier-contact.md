# TC-053 - New Information After Earlier Contact

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system recommends review when a fictional user has new information after earlier contact.

## Initial User Description

```text
I contacted someone before and was told it might not be relevant. Now I have more information and I am unsure if it changes anything.
```

## Expected Conversation Behavior

- acknowledge the earlier contact neutrally
- ask what new information exists
- avoid promising a different outcome
- avoid automatic guide-away
- recommend review if the new information may matter

## Expected Facts

```text
earlier_contact_exists = true
new_information_possible = true
review_needed = true
```

## Expected Missing Information

```text
earlier_contact_summary
new_information_summary
current_consequence
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
earlier contact is captured neutrally
new information is requested
automatic guide-away is avoided
human review is recommended
```
