# HANDOFF-000 - Handoff Index

Version: 1.0
Status: Active Draft
Scope: ServerAdmin and implementation handoff

## Purpose

This is the short index for implementation handoff documents.

Use this folder when moving from planning and architecture into Laravel implementation.

## Handoff Documents

```text
handoff/SERVERADMIN-HANDOFF-001-laravel-to-first-slice.md
handoff/SERVERADMIN-HANDOFF-002-ai-case-brain-first-slice.md
```

## Recommended Reading Order

### 1. Laravel Baseline to First Slice

```text
handoff/SERVERADMIN-HANDOFF-001-laravel-to-first-slice.md
```

Use this when ServerAdmin prepares the Laravel 12 baseline and Sprint 000 foundation.

### 2. AI Case Brain First Slice

```text
handoff/SERVERADMIN-HANDOFF-002-ai-case-brain-first-slice.md
```

Use this when implementing the first Brain-supported conversation slice.

## Full Project Entry Points

For the complete implementation map:

```text
docs/IMPLEMENTATION-MASTER-INDEX.md
```

For AI Case Brain:

```text
docs/ai-case-brain/BRAIN-000-ai-case-brain-index.md
```

For the first API slice:

```text
docs/api/API-READINESS-003-first-vertical-slice-plan.md
```

For MVP start:

```text
docs/mvp-start/MVP-START-001-laravel-baseline-handoff-checklist.md
docs/mvp-start/MVP-START-002-sprint-000-implementation-order.md
```

## First Implementation Path

```text
Laravel baseline
↓
Sprint 000 foundation
↓
First API vertical slice
↓
Fake AI provider
↓
AI Case Brain minimum rules
↓
Feature tests
```

## Rule

Do not start real AI, MitID, signing, document analysis or advanced CRM until the first conversation slice works with Fake AI and AI Case Brain.
