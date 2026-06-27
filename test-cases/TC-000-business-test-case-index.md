# TC-000 - Business Test Case Index

Version: 1.0 Draft
Status: Active
Owner: Product / Medical Domain / Engineering
Domain: Business Test Cases
Related: docs/IMPLEMENTATION-MASTER-INDEX.md, architecture-freeze/AF-004-design-freeze-v1.md, docs/specifications/SPEC-002-conversation-api.md, docs/specifications/SPEC-003-screening-and-decision-api.md

## Purpose

Create a structured library of business test cases for validating the MVP user journey, AI screening, decision engine, CRM handover and human review flow.

These are not PHPUnit tests. They are business scenarios that later automated and manual tests can be based on.

## Test Case Format

Each test case should include:

```text
Scenario summary
User story
Input narrative
Expected extracted facts
Expected missing information
Expected screening behavior
Expected decision behavior
Expected next step
Expected CRM or review output
Notes
```

## Categories

Initial categories:

```text
A. Clear potential compensation case
B. Incomplete information case
C. No compensable damage case
D. Needs human review case
E. Time limit or eligibility risk case
F. Document missing case
G. Complex multi-event case
H. User correction case
```

## Initial Test Case Files

```text
test-cases/TC-001-clear-infection-after-operation.md
test-cases/TC-002-medication-error-without-damage.md
test-cases/TC-003-nerve-injury-after-operation.md
test-cases/TC-004-incomplete-hospital-event.md
test-cases/TC-005-old-event-time-limit-risk.md
```

## Rules

- Test cases must be fictional.
- Do not use real patient names.
- Do not use CPR numbers.
- Do not copy real case text.
- Use realistic but fake narratives.

## Definition of Done

```text
test case format defined
categories listed
initial test case files identified
fake-data rule documented
```
