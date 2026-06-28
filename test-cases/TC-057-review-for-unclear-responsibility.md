# TC-057 - Review for Unclear Responsibility

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system recommends human review when responsibility or routing is unclear.

## Initial User Description

```text
Several people were involved, and I do not know who was responsible for what. I only know that the result affected me.
```

## Expected Conversation Behavior

- acknowledge the uncertainty
- ask which providers or contacts were involved
- ask what result affects the user today
- avoid assigning responsibility automatically
- recommend review if responsibility remains unclear

## Expected Facts

```text
responsibility_unclear = true
multiple_parties = true
current_consequence = true
```

## Expected Missing Information

```text
involved_parties
role_of_each_party
current_consequence_details
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
responsibility uncertainty is captured
system avoids assigning responsibility
human review is recommended
reason code can be stored
```
