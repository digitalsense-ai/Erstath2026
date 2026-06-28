# TC-056 - Review for Borderline Guide Away

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that borderline guide-away cases can be routed to human review when the system is unsure.

## Initial User Description

```text
It may only be a complaint, but I also feel there might be a real consequence. I am not sure how to separate it.
```

## Expected Conversation Behavior

- acknowledge both possibilities
- ask about current consequence
- ask what makes the user think there may be a real impact
- avoid immediate guide-away
- recommend review if the distinction remains unclear

## Expected Facts

```text
borderline_guide_away = true
possible_consequence = true
category_unclear = true
```

## Expected Missing Information

```text
current_consequence
complaint_vs_consequence_clarification
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
system does not guide away too early
possible consequence is explored
human review is recommended if uncertainty remains
```
