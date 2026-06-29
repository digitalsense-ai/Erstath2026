# MVP-START-002 - Sprint 000 Implementation Order

Version: 1.0
Status: Ready for implementation
Scope: Sprint 000 Foundation

## Purpose

This document defines the recommended implementation order for Sprint 000 after the Laravel baseline has been added.

Sprint 000 should make the project technically stable before domain features are added.

## Sprint 000 Goal

Create a working foundation for the MVP:

- Laravel boots
- environment is documented
- tests run
- API health endpoint works
- basic CI can be added
- repository rules are clear

## Implementation Order

### Step 1 - Confirm Laravel Baseline

Related issue:

- ISSUE-001

Tasks:

- Confirm Laravel version.
- Confirm PHP version.
- Confirm composer dependencies.
- Confirm standard Laravel folders exist.
- Confirm no generated runtime folders are committed.

Done when:

- Laravel baseline is complete.

### Step 2 - Confirm Environment Example

Related issue:

- ISSUE-003

Tasks:

- Review `.env.example`.
- Add placeholders for database, queue, cache and AI fake mode.
- Ensure no real credentials exist.

Done when:

- new developer can copy `.env.example` to `.env` safely.

### Step 3 - Confirm Local Setup Documentation

Related issue:

- ISSUE-004

Tasks:

- Confirm local setup guide exists.
- Confirm install commands are clear.
- Confirm test commands are clear.

Done when:

- ServerAdmin or developer can start the project from the README and docs.

### Step 4 - Validate Test Runner

Related issue:

- ISSUE-005

Tasks:

- Confirm `php artisan test` works.
- Confirm `tests/TestCase.php` exists.
- Confirm at least one feature test passes.

Done when:

- baseline test suite passes locally.

### Step 5 - Add Health Endpoint

Related issue:

- ISSUE-006 or first API readiness slice if already covered.

Tasks:

- Confirm `GET /api/v1/health` exists.
- Confirm it returns JSON.
- Add feature test if missing.

Expected response:

```json
{
  "data": {
    "status": "ok"
  }
}
```

Done when:

- health endpoint passes a feature test.

### Step 6 - Add Basic CI Workflow

Related issue:

- ISSUE-006

Tasks:

- Add GitHub Actions workflow for PHP install and tests.
- Run composer validation if practical.
- Run test suite.

Done when:

- CI can run on pull requests.

### Step 7 - Add Repository Guardrails

Related issue:

- ISSUE-007

Tasks:

- Confirm `.gitignore`.
- Confirm no secrets are committed.
- Confirm docs explain implementation order.

Done when:

- repository is safe for development.

## Sprint 000 Acceptance Criteria

Sprint 000 is complete when:

- Laravel baseline is present.
- Environment example is safe.
- Health endpoint works.
- Test runner works.
- CI workflow is present or planned.
- Repository guardrails are documented.
- Sprint 001 can begin.

## What Not To Build In Sprint 000

Do not build:

- Conversation Engine
- AI Screening
- Decision Engine
- CRM
- Human Review
- MitID
- Document upload

These belong to later sprints.

## Next Sprint

After Sprint 000, start:

- Sprint 001 Data Model
