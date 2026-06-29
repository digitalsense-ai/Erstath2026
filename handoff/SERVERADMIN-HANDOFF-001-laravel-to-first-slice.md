# SERVERADMIN-HANDOFF-001 - Laravel Baseline to First Slice

Version: 1.0
Status: Ready for ServerAdmin
Scope: MVP 0.1

## Purpose

This note gives ServerAdmin the short implementation order from Laravel baseline to the first working MVP slice.

## Step 1 - Laravel Baseline

Read:

```text
docs/mvp-start/MVP-START-001-laravel-baseline-handoff-checklist.md
```

Expected result:

- Laravel 12 baseline is present
- tests can run
- routes can be listed
- health endpoint can work
- no real credentials are committed

## Step 2 - Sprint 000 Foundation

Read:

```text
docs/mvp-start/MVP-START-002-sprint-000-implementation-order.md
sprints/SPRINT-000-foundation.md
```

Expected result:

- environment baseline is clear
- test runner works
- health endpoint works
- repository guardrails are confirmed

## Step 3 - First Vertical Slice

Read:

```text
docs/api/API-READINESS-003-first-vertical-slice-plan.md
docs/mvp-start/MVP-START-003-first-feature-test-plan.md
docs/mvp-start/MVP-START-004-fake-ai-provider-implementation-plan.md
```

Expected first flow:

```text
user message
lead created
conversation created
message stored
fake AI response processed
next question returned
```

## First Endpoint

```text
POST /api/v1/conversations
```

## First Test

```text
tests/Feature/Api/ConversationStartTest.php
```

Related business testcase:

```text
TC-001 Basic Patient Injury Flow
```

## Rules

- Use Fake AI first.
- Keep controllers thin.
- Put business logic in services.
- Validate AI output before saving.
- Save AI facts as unconfirmed by default.
- Return JSON only from API routes.
- Do not start MitID, signing or document analysis before the first slice works.

## Main Index

```text
docs/IMPLEMENTATION-MASTER-INDEX.md
```
