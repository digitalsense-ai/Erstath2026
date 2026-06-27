# AF-004 - Design Freeze v1.0

Version: 1.0 Draft
Status: Active
Owner: Product / Engineering / Delivery
Domain: Architecture Freeze
Related: docs/IMPLEMENTATION-MASTER-INDEX.md, architecture-freeze/AF-001-architecture-freeze-report.md, backlog/BACKLOG-000-traceable-backlog-index.md

## Purpose

Freeze the MVP design so implementation can start from a stable baseline.

This document marks the transition from planning and specification into implementation preparation.

## Freeze Rule

From this point, the MVP should not add new product areas, new core workflows or new major data structures without an explicit change decision.

Allowed changes:

- fixing documentation errors
- clarifying existing specifications
- adding missing test cases
- adding implementation notes that do not change scope
- creating follow-up items for later versions

Not allowed without a decision:

- new major features
- new MVP modules
- new core tables outside the existing specification
- new user journeys outside the current flow
- bypassing the sprint order

## Frozen MVP Scope

The frozen MVP includes:

- Foundation
- Data Model
- Digital Conversation
- AI Screening
- Decision Engine
- CRM Handover
- Human Review
- Security, Audit and Testing

## Implementation Source of Truth

Implementation should follow:

```text
docs/IMPLEMENTATION-MASTER-INDEX.md
backlog/BACKLOG-000-traceable-backlog-index.md
backlog/issues/ISSUE-000-issue-catalog.md
docs/specifications/
docs/developer-handbook/
```

## Change Control

If a developer finds a required change, it should be recorded as a follow-up note or new issue.

Changes that affect architecture, data model, API shape or user flow require product and engineering approval before implementation.

## Definition of Done

```text
MVP design freeze documented
allowed changes listed
blocked changes listed
implementation source of truth listed
change control rule documented
```
