# DEV-008 - Testing Standards

Version: 1.0 Draft
Status: Planned
Owner: Engineering
Domain: Developer Handbook / Testing
Related: backlog/issues/ISSUE-005-add-basic-test-runner-validation.md, backlog/issues/ISSUE-019-add-model-relationship-tests.md, backlog/issues/ISSUE-083-add-test-suite-quality-review.md

## Purpose

Define testing standards for MVP implementation.

## General Rules

- Tests must use fake data only.
- Tests should be deterministic.
- Tests should not depend on external services.
- AI behavior should be mocked in automated tests.
- API tests should assert response shape.
- Service tests should assert business behavior.

## Test Types

```text
Unit tests
Service tests
Feature tests
Model relationship tests
API response tests
Security-focused checks where practical
```

## Required Coverage Areas

- model relationships
- conversation flow
- fact merge behavior
- missing information behavior
- AI validation and mapping
- decision engine behavior
- CRM board and detail responses
- review queue and outcome behavior
- audit and privacy guardrails

## Fake Data Rule

Never use real names, real CPR numbers, real emails, real case details or production-like personal data in tests, factories or seeders.

## Definition of Done

```text
testing rules documented
test types listed
coverage areas listed
fake data rule documented
```
