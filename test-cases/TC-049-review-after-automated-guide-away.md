# TC-049 - Review After Automated Guide Away

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can recover when an early guide-away path may not fit because new information appears.

## Initial User Description

```text
At first I said there was no consequence, but I forgot to mention that I later needed follow-up and it still affects me.
```

## Expected Conversation Behavior

- acknowledge the correction
- update facts without hiding the earlier statement
- reopen missing information if needed
- avoid continuing the guide-away path automatically
- recommend review if the new information changes routing

## Expected Facts

```text
prior_no_consequence_statement = true
new_consequence_information = true
follow_up_needed = true
routing_changed = true
```

## Expected Missing Information

```text
follow_up_details
current_consequence_details
updated_timeline
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
correction is captured
earlier statement is preserved
routing can change safely
human review is recommended
```
