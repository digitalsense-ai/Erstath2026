# TC-000 - Test Case Catalog

Version: 1.0 Draft
Status: Active
Owner: Product / QA / Engineering
Domain: Business Test Cases
Related: docs/IMPLEMENTATION-MASTER-INDEX.md, architecture-freeze/AF-004-design-freeze-v1.md

## Purpose

Create a catalog of business-level test cases for validating the MVP end-to-end.

These cases are not PHPUnit tests. They describe realistic intake scenarios and expected system behavior across conversation, facts, screening, decision, CRM and review.

## Test Case Groups

```text
TC-001 to TC-020    Basic patient injury flows
TC-021 to TC-040    No or weak compensable damage flows
TC-041 to TC-060    Human review required flows
TC-061 to TC-080    Missing information and Smart Skip flows
TC-081 to TC-100    CRM handover and internal review flows
```

## Standard Test Case Format

Each test case should include:

```text
Purpose
Scenario
Initial user description
Expected conversation behavior
Expected facts
Expected missing information
Expected screening behavior
Expected decision behavior
Expected CRM or review behavior
Acceptance notes
```

## Rules

- Use realistic but fake examples only.
- Do not use real names, real CPR numbers, real emails or real case details.
- Keep cases understandable for product, QA and engineering.
- Expected outcomes should be testable.

## Initial Cases

```text
TC-001 Basic Patient Injury Flow
TC-002 No Compensable Damage
TC-003 Human Review Nerve Injury
```

## Definition of Done

```text
test case catalog exists
standard format defined
initial case groups defined
fake-data rule documented
```
