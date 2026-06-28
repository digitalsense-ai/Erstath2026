# SPRINT-000 - Foundation Constraints

Version: 1.0
Status: Active
Owner: Engineering / Delivery
Sprint: SPRINT-000 Foundation
Issue: ISSUE-001 Confirm Laravel Version and Foundation Constraints
Related: sprints/SPRINT-000-foundation.md, backlog/issues/ISSUE-001-confirm-laravel-version-and-foundation-constraints.md

## Purpose

Confirm the technical foundation constraints before creating or modifying the Laravel application baseline.

This document completes ISSUE-001 and allows ISSUE-002 to begin.

## Confirmed Foundation Target

```text
Framework: Laravel 12 application baseline
PHP: ^8.2 minimum
Dependency manager: Composer
Frontend build tooling: Deferred until UI sprint unless Laravel baseline requires it
Test runner: PHPUnit first, Pest optional later
Docker: Optional, not required for MVP baseline
CI: GitHub Actions baseline workflow
Database during foundation: SQLite for tests, production database choice deferred to environment setup
Business logic in Sprint 000: Not allowed
AI provider integration in Sprint 000: Not allowed
MitID or external identity integration in Sprint 000: Not allowed
Document upload implementation in Sprint 000: Not allowed
```

## Scope Boundary

SPRINT-000 may create:

```text
composer.json
artisan
bootstrap/app.php
routes
.env.example
.gitignore
phpunit.xml
basic tests
.github/workflows/*
local setup documentation
repository guardrails
```

SPRINT-000 must not create:

```text
business migrations
case scoring logic
conversation engine logic
AI provider calls
CRM workflow
human review workflow
MitID integration
consent signing
document upload business flow
```

## Test Runner Decision

PHPUnit is the default runner for MVP foundation because it is the Laravel default and gives the lowest implementation friction.

Pest may be added later if the team chooses it, but it is not required for Sprint 000.

## Docker Decision

Docker is optional.

The MVP baseline should be installable without Docker so ServerAdmin and developers can start quickly.

A Docker setup may be added later if deployment or local environment consistency requires it.

## CI Decision

A baseline GitHub Actions workflow should be added after the application baseline exists.

The workflow should run:

```text
composer install
php artisan test
```

## Fake Data and Secret Rules

No real personal data, secrets, production credentials or real case material may be added to the repository.

Examples and tests must use fake data only.

## Definition of Done

```text
Laravel target confirmed
PHP target confirmed
test runner confirmed
Docker requirement confirmed
CI expectation confirmed
business logic exclusion confirmed
ISSUE-002 may begin
```
