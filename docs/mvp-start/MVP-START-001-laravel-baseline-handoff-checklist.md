# MVP-START-001 - Laravel Baseline Handoff Checklist

Version: 1.0
Status: Ready for ServerAdmin handoff
Scope: MVP 0.1

## Purpose

This checklist defines what should be present after ServerAdmin adds the Laravel 12 baseline.

The project should use a clean Laravel installation as the framework foundation. The ErstatningsHjælp domain layer should be added after the baseline is complete.

## Expected Baseline

The repository should include the normal Laravel application structure:

- artisan
- composer.json
- composer.lock
- .env.example
- phpunit.xml
- bootstrap/app.php
- app/
- config/
- database/
- public/
- resources/
- routes/
- storage/
- tests/

The runtime dependency folder should not be committed.

## Expected Routes

The baseline should include:

- routes/web.php
- routes/api.php
- routes/console.php

The MVP API should use the prefix:

```text
/api/v1
```

## Expected Tests

The baseline should include:

- tests/TestCase.php
- tests/Feature/
- tests/Unit/

A simple health endpoint test should pass before domain work starts.

## Environment Example

The environment example should include placeholders for:

- app settings
- database settings
- queue settings
- cache settings
- logging settings
- AI provider settings
- fake AI mode

No real credentials should be committed.

## Verification

ServerAdmin should confirm that:

- the application boots
- tests can run
- routes can be listed
- the database connection can be configured
- the health endpoint works

## Done Criteria

This handoff is complete when:

- Laravel 12 baseline is present
- test runner works
- health endpoint passes
- no real secrets are committed
- Sprint 000 implementation can begin

## Next Document

After this checklist is complete, follow:

- MVP-START-002 Sprint 000 Implementation Order
