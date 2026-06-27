# TC-022 - Dissatisfaction With Waiting Time

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a guide-away flow where the fictional user mainly describes dissatisfaction with waiting time and no clear harm.

## Initial User Description

```text
I had to wait a long time before I was seen. I am unhappy about the experience, but I do not know if it caused any actual problem.
```

## Expected Conversation Behavior

- acknowledge the experience
- ask whether the wait caused a concrete consequence
- explain why consequence information matters
- guide elsewhere if no consequence is described

## Expected Facts

```text
waiting_time_complaint = true
consequence_unclear = true
harm_not_yet_described = true
```

## Expected Missing Information

```text
whether_wait_caused_consequence
```

## Expected Next Step

```text
continue_intake_if_consequence_unclear or guide_elsewhere
```

## Acceptance Checks

```text
system asks about consequence before guide-away
complaint is handled respectfully
no final legal conclusion is claimed
```
