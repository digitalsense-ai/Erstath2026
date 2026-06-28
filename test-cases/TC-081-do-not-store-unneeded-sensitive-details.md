# TC-081 - Do Not Store Unneeded Sensitive Details

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system avoids collecting or storing details that are not needed for intake.

## Initial User Description

```text
I can share many private details, but I am not sure which ones are needed.
```

## Expected Conversation Behavior

- ask only for relevant intake information
- explain that unnecessary private details are not needed now
- keep the conversation focused
- avoid storing extra details in structured fields

## Expected Facts

```text
privacy_minimization_needed = true
user_offers_extra_details = true
```

## Expected Missing Information

```text
only_relevant_open_items
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
unneeded details are not requested
privacy-minimizing guidance is given
structured facts remain relevant
conversation continues safely
```
