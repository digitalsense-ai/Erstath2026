# BACKLOG-000 - Traceable Backlog Index

Version: 1.0 Draft
Status: Draft
Owner: Product / Delivery / Architecture
Domain: Backlog / Implementation Planning
Related: AF-003 Implementation Readiness Checklist, POL-000 Policy Catalog, docs/27-sprint-backlog-masterplan.md, docs/serveradmin-handoff-plan.md, DOC-003 Architecture Index

## Purpose

This document is the entry point for the traceable implementation backlog.

The purpose is to ensure that every implementation item can be traced back to the architecture, decisions, patterns and policies it implements.

The project should not move into coding from old PR plans alone.

---

## Backlog Principle

Every implementation item should answer:

```text
What are we building?
Why are we building it?
Which architecture supports it?
Which decision does it implement?
Which policy constrains it?
Which data structures are affected?
What must be tested?
What is out of scope?
```

---

## Target Structure

```text
/backlog
  BACKLOG-000-traceable-backlog-index.md
  /epics
    EPIC-A-laravel-foundation.md
    EPIC-B-data-model-and-migrations.md
    EPIC-C-digital-first-conversation.md
    EPIC-D-ai-screening-service.md
    EPIC-E-decision-and-routing-engine.md
    EPIC-F-crm-lead-board-and-detail.md
    EPIC-G-human-review-queue.md
    EPIC-H-security-audit-and-testing.md
  /issues
    ISSUE-*.md
/sprints
  SPRINT-000-foundation.md
  SPRINT-001-data-model.md
  SPRINT-002-conversation.md
  SPRINT-003-decision-engine.md
  SPRINT-004-crm-handover.md
  SPRINT-005-security-audit-testing.md
```

---

## Required Traceability Layers

Each epic and issue should reference relevant items from:

```text
DOC - Architecture documents
ADR - Architecture decisions
PAT - Experience patterns
DEC - Decision cards
POL - Policies
DATA - Data Dictionary fields/tables
TEST - Testing requirements
```

---

## MVP 0.1 Epic Set

| Epic | Title | Purpose | Status |
|---|---|---|---|
| EPIC-A | Laravel Foundation | Establish Laravel project baseline | Planned |
| EPIC-B | Data Model and Migrations | Implement core database structures | Planned |
| EPIC-C | Digital First Conversation | Implement first user conversation flow | Planned |
| EPIC-D | AI Screening Service | Implement AI-assisted interpretation and screening | Planned |
| EPIC-E | Decision and Routing Engine | Implement decisions, routing and policy application | Planned |
| EPIC-F | CRM Lead Board and Detail | Implement CRM board, detail view and handover | Planned |
| EPIC-G | Human Review Queue | Implement human review workflow | Planned |
| EPIC-H | Security, Audit and Testing | Implement baseline security, audit and tests | Planned |

---

## MVP 0.1 Sprint Set

| Sprint | Title | Primary Epic Focus | Status |
|---|---|---|---|
| SPRINT-000 | Foundation | EPIC-A | Planned |
| SPRINT-001 | Data Model | EPIC-B | Planned |
| SPRINT-002 | Conversation | EPIC-C, EPIC-D | Planned |
| SPRINT-003 | Decision Engine | EPIC-E | Planned |
| SPRINT-004 | CRM Handover | EPIC-F, EPIC-G | Planned |
| SPRINT-005 | Security, Audit and Testing | EPIC-H | Planned |

---

## Migration From Old GitHub Planning Folder

The old `/github` folder may contain useful planning material.

It should be migrated gradually into this traceable structure.

Rules:

1. Do not copy old PR plans blindly.
2. Preserve useful implementation details.
3. Add architecture, decision and policy references.
4. Add test requirements.
5. Mark outdated assumptions as superseded.

---

## Issue Template Standard

Each issue document should use this structure:

```text
# ISSUE-XXX - Title

Status:
Epic:
Sprint:
Priority:
Owner:

## Purpose
## Related Architecture
## Related Decisions
## Related Patterns
## Related Policies
## Data Impact
## Acceptance Criteria
## Test Requirements
## Out of Scope
## Implementation Notes
```

---

## Definition of Backlog Ready

The backlog is ready when:

```text
all MVP 0.1 epics exist
Sprint 0-5 documents exist
initial issues exist for Sprint 0 and Sprint 1
old PR plans are reviewed or mapped
ServerAdmin handoff references this backlog
Architecture Index references this backlog
```

---

## Current Status

```text
Traceable backlog index: created
Epics: not yet created
Sprints: not yet created
Issues: not yet created
Ready for coding: no
```

---

## Next Step

Create MVP 0.1 epic documents:

```text
EPIC-A through EPIC-H
```

Then create Sprint 0-5 documents and initial implementation issues.
