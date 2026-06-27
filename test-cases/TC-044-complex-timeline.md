# TC-044 - Complex Timeline

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that a complex or uncertain timeline is handled carefully and may trigger human review.

## Initial User Description

```text
The situation happened over several months. There were appointments, follow-ups and changes in symptoms, and I cannot easily explain the order.
```

## Expected Conversation Behavior

- ask for approximate timeline in small steps
- accept uncertainty
- avoid forcing exact dates immediately
- ask what the user knows first
- route to review if timeline remains important and unclear

## Expected Facts

```text
complex_timeline = true
exact_order_unclear = true
multiple_contacts_possible = true
```

## Expected Missing Information

```text
approximate_timeline
key_dates
current_consequence
```

## Expected Next Step

```text
continue_intake or human_review
```

## Acceptance Checks

```text
system accepts approximate timeline
does not ask too many questions at once
review can be recommended
```
