# SPEC-009 - Screening Decision Review Schema

Version: 1.0 Draft
Status: Planned
Owner: Product / Engineering
Domain: Database Specification / Screening Decision Review
Related: docs/12-data-dictionary.md, backlog/issues/ISSUE-013-create-lead-scores-migration-and-model.md, backlog/issues/ISSUE-014-create-lead-decisions-migration-and-model.md, backlog/issues/ISSUE-015-create-lead-reviews-migration-and-model.md, backlog/issues/ISSUE-017-create-ai-runs-migration-and-model.md

## Purpose

Define the MVP schema for AI runs, scores, decisions and review records.

## Table: ai_runs

Purpose: stores metadata about screening runs and validation state.

Suggested columns:

```text
id                  bigint or uuid primary key
lead_id             foreign key nullable indexed
provider            string nullable
model               string nullable
prompt_name         string nullable indexed
prompt_version      string nullable indexed
status              string indexed
validation_status   string nullable indexed
error_code          string nullable indexed
metadata            json nullable
created_at          timestamp
updated_at          timestamp
```

## Table: lead_scores

Purpose: stores score outputs used as decision inputs.

Suggested columns:

```text
id                  bigint or uuid primary key
lead_id             foreign key indexed
ai_run_id           foreign key nullable indexed
score_type          string indexed
score_value         decimal nullable
confidence          decimal nullable
version             string nullable indexed
metadata            json nullable
created_at          timestamp
updated_at          timestamp
```

## Table: lead_decisions

Purpose: stores final decision engine outputs for a lead.

Suggested columns:

```text
id                  bigint or uuid primary key
lead_id             foreign key indexed
outcome             string indexed
next_step           string nullable indexed
reason_codes        json nullable
evaluator_version   string nullable indexed
input_snapshot      json nullable
created_at          timestamp
updated_at          timestamp
```

## Table: lead_reviews

Purpose: stores human review state and outcome.

Suggested columns:

```text
id                  bigint or uuid primary key
lead_id             foreign key indexed
status              string indexed
reason              string nullable indexed
outcome             string nullable indexed
note                text nullable
started_at          timestamp nullable
completed_at        timestamp nullable
created_at          timestamp
updated_at          timestamp
```

## Status Values

AI run status:

```text
pending
completed
fallback
failed
```

Review status:

```text
open
in_review
completed
cancelled
```

## Relationship Rules

- Scores belong to Lead and may belong to AiRun.
- Decisions belong to Lead.
- Reviews belong to Lead.
- Scores are not final decisions.
- Decisions must store reason codes.

## Definition of Done

```text
ai_runs schema defined
lead_scores schema defined
lead_decisions schema defined
lead_reviews schema defined
relationship rules documented
```
