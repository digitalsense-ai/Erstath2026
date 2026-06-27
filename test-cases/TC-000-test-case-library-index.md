# TC-000 - Business Test Case Library Index

Version: 1.0 Draft
Status: Planned
Owner: Product / Medical Domain / Engineering
Domain: Business Test Cases
Related: docs/IMPLEMENTATION-MASTER-INDEX.md, architecture-freeze/AF-004-design-freeze-v1.md, docs/specifications/, backlog/issues/ISSUE-083-add-test-suite-quality-review.md

## Purpose

Create a business test case library for validating the patient compensation MVP.

These are not PHPUnit tests. They are scenario-based business cases that later automated and manual tests can be built from.

## Why This Matters

The system must prove that it can handle realistic user stories consistently.

The test case library should validate:

- conversation flow
- fact extraction
- missing information detection
- AI screening boundaries
- decision outcomes
- CRM handover
- human review triggers
- reason codes

## Test Case Format

Each test case should include:

```text
ID
Title
Scenario summary
User story
Input facts
Expected conversation behavior
Expected extracted facts
Expected missing information
Expected screening behavior
Expected decision or next step
Expected CRM or review behavior
Reason codes
Notes
```

## Test Case Groups

Initial groups:

```text
TC-001 to TC-025    Clear potential patient injury cases
TC-026 to TC-050    Weak or incomplete cases
TC-051 to TC-075    Human review cases
TC-076 to TC-100    Guide elsewhere or outside-scope cases
TC-101 to TC-150    Edge cases and conflicting information
TC-151 to TC-200    Regression and stress scenarios
```

## Data Rule

All test cases must be fictional.

Do not use:

```text
real names
real CPR numbers
real hospital case details
real emails
real phone numbers
copied real user messages
```

## Initial Library Files

```text
test-cases/TC-001-clear-infection-after-operation.md
test-cases/TC-002-no-compensable-damage.md
test-cases/TC-003-possible-nerve-damage-human-review.md
test-cases/TC-004-incomplete-timeline-missing-information.md
test-cases/TC-005-outside-healthcare-scope.md
```

## Definition of Done

```text
test case format defined
test case groups defined
fictional data rule documented
initial test case files identified
```
