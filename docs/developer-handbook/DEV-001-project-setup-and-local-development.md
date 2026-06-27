# DEV-001 - Project Setup and Local Development

Version: 1.0 Draft
Status: Planned
Owner: Engineering
Domain: Developer Handbook / Setup
Related: README.md, docs/serveradmin-handoff-plan.md

## Purpose

Define how a developer should set up and run the project locally.

## Local Setup Steps

```text
clone repository
install dependencies
copy environment example
configure local database
run migrations
run tests
start local server
```

## Environment Rules

- Use the example environment file as reference.
- Do not commit local environment files.
- Do not commit secrets.
- Use fake values in examples.

## First Validation

A developer setup is valid when:

```text
dependencies install
local environment is configured
migrations run
tests run
local server starts
```

## Definition of Done

```text
local setup documented
environment rules documented
validation steps documented
```
