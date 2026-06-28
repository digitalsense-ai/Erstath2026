# IMP-001 - Foundation Constraints

Version: 1.0 Draft
Status: Active
Owner: Engineering / Delivery
Domain: Implementation / Foundation
Related: sprints/SPRINT-000-foundation.md, backlog/issues/ISSUE-001-confirm-laravel-version-and-foundation-constraints.md, docs/IMPLEMENTATION-MASTER-INDEX.md

## Purpose

Confirm the technical foundation constraints before creating or modifying the Laravel application baseline.

This document completes ISSUE-001 and prevents later implementation work from making conflicting assumptions.

## Confirmed Framework Baseline

```text
Application framework: Laravel
Target Laravel version: Laravel 12 where available, otherwise latest stable Laravel 11 compatible baseline
Target PHP version: PHP 8.3+
Package manager: Composer for PHP dependencies
Frontend tooling: Deferred until UI implementation requires it
Database engine: MySQL or MariaDB compatible baseline for MVP unless deployment environment requires otherwise
```

## Test Runner Baseline

```text
Primary test runner: PHPUnit
Pest: Deferred unless explicitly introduced later
Test data rule: Fake data only
External service tests: Mocked or faked by default
```

## Docker Baseline

```text
Docker requirement: Optional
Local non-Docker setup: Supported where practical
Production containerization: Deferred until deployment planning
```

## CI Baseline

```text
Baseline CI: Required for Sprint 000 if repository structure supports it
Minimum CI checks: composer install, syntax-safe baseline, PHPUnit test command
Deployment CI/CD: Deferred
```

## Out-of-Scope for Sprint 000

Sprint 000 must not implement:

```text
business data migrations
conversation flow
AI provider integration
scoring or routing logic
CRM UI
human review workflow
document upload
MitID or identity integration
consent signing
production deployment
```

## Security and Privacy Rules

```text
Do not commit secrets.
Do not commit real personal data.
Do not add real case examples to tests, seeders, factories or documentation examples.
Do not expose technical exception details to users.
```

## Implementation Notes

ISSUE-002 should use this document as its baseline when creating or verifying the Laravel application structure.

If the environment cannot support Laravel 12 at implementation time, use a Laravel 11 baseline and document the reason before coding further.

## Definition of Done

```text
Laravel target version confirmed
PHP target version confirmed
test runner preference confirmed
Docker requirement confirmed
baseline CI expectation confirmed
business logic exclusions confirmed
foundation constraints documented
```
