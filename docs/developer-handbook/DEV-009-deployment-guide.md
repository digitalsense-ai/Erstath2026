# DEV-009 - Deployment Guide

Version: 1.0 Draft
Status: Planned
Owner: Engineering / ServerAdmin
Domain: Developer Handbook / Deployment
Related: docs/serveradmin-handoff-plan.md, backlog/issues/ISSUE-006-add-baseline-ci-workflow.md, backlog/issues/ISSUE-086-add-mvp-release-readiness-review.md

## Purpose

Define initial deployment expectations for the MVP.

This is not a full production runbook. It is a starting point for safe release preparation.

## Deployment Principles

- Do not deploy before tests pass.
- Do not deploy with real secrets in the repository.
- Use environment variables for configuration.
- Keep production data separate from development data.
- Confirm database migrations before release.
- Confirm rollback approach before release.

## Pre-Deployment Checklist

```text
latest code reviewed
tests pass
environment variables configured
migrations reviewed
fake data removed from production seed path
logs checked
health endpoint available
rollback plan known
```

## Environment Rules

Production credentials must never be committed.

`.env.example` should show required keys without real values.

## Migration Rules

Migrations should be reviewed before running in a shared or production environment.

Destructive changes require extra review.

## Definition of Done

```text
deployment principles documented
pre-deployment checklist documented
environment rules documented
migration rules documented
```
