# TC-000 - Test Case Catalog

Version: 1.0 Draft
Status: Active
Owner: Product / QA / Engineering
Domain: Business Test Cases
Related: docs/IMPLEMENTATION-MASTER-INDEX.md, architecture-freeze/AF-004-design-freeze-v1.md, test-cases/TC-100-business-test-library-complete.md

## Purpose

Catalog business-level test cases for validating the MVP.

These are not PHPUnit tests. They describe expected product behavior across intake, screening, decision, review, audit and fallback handling.

## Completion Status

```text
Business Test Case Library: COMPLETE
Covered range: TC-000 to TC-100
```

## Test Case Groups

```text
TC-001 to TC-020    Basic intake flows
TC-021 to TC-040    Guide-away and weak-case flows
TC-041 to TC-060    Human review and uncertainty flows
TC-061 to TC-080    Missing information and Smart Skip flows
TC-081 to TC-100    Edge, privacy, audit and fallback flows
```

## Group Closeout Files

```text
TC-020 Basic Flow Group Closeout
TC-040 Guide Away Group Closeout
TC-060 Human Review Group Closeout
TC-080 Missing Information Group Closeout
TC-100 Business Test Library Complete
```

## Standard Test Case Format

```text
Purpose
Initial user description or scenario
Expected behavior
Expected facts
Expected missing information
Expected next step
Acceptance checks
```

## Rules

- Use fake examples only.
- Do not use real personal data.
- Keep cases understandable for product, QA and engineering.
- Expected outcomes should be testable.

## How to Use During Implementation

```text
read relevant test cases
map cases to feature tests where possible
use fake data only
verify expected behavior
record gaps as follow-up issues
```

## Definition of Done

```text
test case catalog exists
TC-000 to TC-100 are complete
groups are listed
group closeout files are listed
usage guidance documented
```
