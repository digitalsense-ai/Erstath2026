# ISSUE-015 - Create Lead Reviews Migration and Model

Version: 1.0 Draft
Status: Planned
Epic: EPIC-B Data Model and Migrations
Sprint: SPRINT-001 Data Model
Priority: High
Owner: Engineering
Domain: Data / Human Review
Related: docs/12-data-dictionary.md, DEC-006 Human Review, POL-005 Human Review Policy, backlog/epics/EPIC-B-data-model-and-migrations.md, sprints/SPRINT-001-data-model.md

## Purpose

Create the `lead_reviews` table and Laravel model.

Review records store why a lead needs human review, its review status, and later reviewer outcome.

## Scope

- create `lead_reviews` migration
- create `LeadReview` model
- relate reviews to `Lead`
- store review reason, status and outcome
- support reviewer notes if approved for MVP
- support timestamps for started and completed review

## Out of Scope

- human review UI
- reviewer assignment optimization
- final legal assessment workflow

## Data Impact

Creates `lead_reviews`, `LeadReview` model and Lead relationship.

## Acceptance Criteria

- migration exists
- model exists
- relationship to Lead works
- review reason and status can be stored
- review outcome can be stored when completed

## Test Requirements

- migration runs
- a lead can have review records
- review status and outcome can be stored

## Security and Privacy

Review notes are internal. Use fake-only data in tests.

## Definition of Done

```text
lead_reviews table exists
LeadReview model exists
Lead relationship works
review status and outcome are supported
basic model test passes
```
