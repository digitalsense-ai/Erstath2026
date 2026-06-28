# TC-049 - Staff Review Needed for Ethical Concern

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system recommends human review when the fictional user describes an ethical concern that should not be handled only by automation.

## Initial User Description

```text
I felt that the situation was handled in a way that was not right, but I cannot tell if it is about treatment, communication or something else.
```

## Expected Conversation Behavior

- acknowledge the concern
- ask what happened in simple language
- clarify whether there was a consequence
- avoid reducing the concern too quickly
- recommend review if the concern cannot be safely categorized

## Expected Facts

```text
ethical_concern_possible = true
category_unclear = true
consequence_unclear = true
```

## Expected Missing Information

```text
event_description
category_clarification
current_consequence
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
concern is captured without dismissal
category uncertainty is preserved
human review can be recommended
no final conclusion is claimed
```
