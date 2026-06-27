# SPEC-006 - Database Overview

Version: 1.0 Draft
Status: Planned
Owner: Product / Engineering
Domain: Database Specification
Related: docs/12-data-dictionary.md, backlog/epics/EPIC-B-data-model-and-migrations.md, sprints/SPRINT-001-data-model.md

## Purpose

Define the MVP database structure at a level that makes Laravel migrations and model relationships predictable.

## Database Groups

The MVP database is grouped into:

- Lead core tables
- Conversation and fact tables
- Screening and decision tables
- CRM and review tables
- Audit and support tables

## General Rules

- Use UUIDs for public-facing identifiers where practical.
- Keep internal numeric ids if Laravel defaults are preferred.
- Use timestamps on all business tables.
- Use soft deletes only where explicitly needed.
- Test data must be fake only.
- Sensitive data should be minimized.

## Naming Rules

Tables use snake_case plural names.

Models use Laravel singular PascalCase names.

Examples:

```text
leads -> Lead
lead_facts -> LeadFact
lead_decisions -> LeadDecision
```

## Relationship Principles

- Lead is the root entity.
- Most MVP business records belong to Lead.
- Scores are decision inputs, not final decisions.
- Decisions are stored separately from scores.
- AI-created facts are unconfirmed by default.

## Next Documents

- SPEC-007 Lead Core Schema
- SPEC-008 Conversation and Facts Schema
- SPEC-009 Screening Decision Review Schema
- SPEC-010 Audit and Supporting Schema

## Definition of Done

```text
database groups defined
naming rules defined
relationship principles defined
next schema specs identified
```
