# TC-012 - Communication Only Complaint

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a guide-away flow where the fictional user mainly describes poor communication and no clear harm.

## Initial User Description

```text
I felt badly informed during my contact with the clinic. I do not think I have any injury, but I want to complain about how I was treated.
```

## Expected Conversation Behavior

- acknowledge the experience respectfully
- clarify whether any harm or consequence occurred
- explain why harm information matters
- guide elsewhere if the matter is only a complaint

## Expected Facts

```text
communication_complaint = true
harm_described = false
complaint_only_possible = true
```

## Expected Missing Information

```text
whether_any_consequence_exists
```

## Expected Next Step

```text
guide_elsewhere
```

## Acceptance Checks

```text
system clarifies harm before guide-away
respectful explanation is given
reason code can be stored
no legal conclusion is claimed
```
