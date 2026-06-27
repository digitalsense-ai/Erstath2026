# TC-022 - Service Delay Concern

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a flow where a fictional user describes concern about delay, but consequence is unclear.

## Initial User Description

```text
I had to wait longer than expected before I was seen. It was frustrating, but I do not know if it caused any lasting problem.
```

## Expected Conversation Behavior

- acknowledge the concern
- ask whether the delay caused a consequence
- avoid assuming damage
- guide elsewhere if no consequence is described

## Expected Facts

```text
delay_concern = true
lasting_problem_unclear = true
```

## Expected Missing Information

```text
whether_delay_caused_consequence
current_consequence
```

## Expected Next Step

```text
continue_intake_if_consequence_unclear or guide_elsewhere_if_no_consequence
```

## Acceptance Checks

```text
consequence is clarified
concern is handled respectfully
no final conclusion is claimed
```
