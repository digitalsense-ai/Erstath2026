# REV-001 - Repository Consistency Review

Version: 1.0 Draft
Status: Draft
Owner: Enterprise Architecture / Repository Governance
Domain: Reviews / Governance
Related: DOC-001 Architecture Overview, DOC-002 Repository Constitution, DOC-003 Architecture Index, ADR-000 Enterprise Architecture Principles

## Purpose

This review defines how the existing repository documents should be reconciled with the new enterprise repository structure.

The repository now contains both:

- early flat MVP documents under docs/
- new domain-based architecture documents under docs/foundation/, docs/experience/, patterns/ and decisions/

The goal is to avoid duplicate truth, outdated guidance and conflicting implementation instructions.

## Review Principle

Do not delete old documents immediately.

Instead:

1. classify each existing document
2. decide whether it should remain, move, merge, update or become superseded
3. create a migration map
4. update references
5. only then archive or remove old files if needed

## Current Repository Situation

The repository contains an early MVP documentation set and a newer enterprise architecture set.

The new structure is now the target structure.

GitHub remains the single source of truth, but the source of truth must be consistent.

## Target Actions

Each file should receive one of these actions:

- KEEP
- UPDATE
- MOVE
- MERGE
- SUPERSEDE
- ARCHIVE

## Action Definitions

### KEEP

The document is still valid and can remain where it is for now.

### UPDATE

The document is still useful, but must be updated to reference the new architecture.

### MOVE

The document belongs in a new domain folder but does not need major content changes.

### MERGE

The document overlaps with a newer document and should be merged into the new structure.

### SUPERSEDE

The document has been replaced by a new architecture artifact and should be marked as superseded.

### ARCHIVE

The document is no longer active but should be kept for historical reasons.

## Initial Findings

### Foundation

The new foundation documents now define the current architecture baseline:

- docs/foundation/DOC-000-product-constitution.md
- docs/foundation/DOC-001-architecture-overview.md
- docs/foundation/DOC-002-repository-constitution.md
- docs/foundation/DOC-003-architecture-index.md
- adr/ADR-000-enterprise-architecture-principles.md

These should become the primary reference documents.

### Experience

The new experience documents and patterns now define the current experience baseline:

- docs/experience/DOC-020-experience-architecture.md
- docs/experience/DOC-021-digital-first-conversation-flow.md
- docs/experience/DOC-022-conversation-patterns.md
- docs/experience/DOC-023-tone-of-voice-guide.md
- patterns/PAT-001 through PAT-009

Older documents about conversation, user journey and UX should be reviewed against these.

### Decision

The new decision catalog and decision cards now define the current decision baseline:

- decisions/DEC-000-decision-catalog.md
- decisions/DEC-001 through DEC-012 currently created

Older scoring, AI screening, routing and acceptance-related documents should be reviewed against this decision model.

## Initial Migration Map

| Existing file | Proposed action | Target domain | Notes |
| --- | --- | --- | --- |
| README.md | UPDATE | Foundation | Should reference DOC-000, DOC-001 and DOC-003 |
| docs/01-database-blueprint.md | UPDATE / MOVE | Platform / Data | Must reference new decision and experience fields |
| docs/02-ai-engine.md | UPDATE / MOVE | AI | Must align with AI assists, humans decide |
| docs/03-scoring-engine.md | UPDATE / MERGE | Decision / AI | Must align with DEC and future confidence policy |
| docs/04-conversation-engine.md | MERGE / SUPERSEDE | Experience | Replaced partly by DOC-020 to DOC-023 and PAT library |
| docs/05-crm-workflow.md | UPDATE / MOVE | Case | Must include routing reasons and decision handover |
| docs/06-domain-model.md | UPDATE | Foundation / Platform | Must align with enterprise domain map |
| docs/07-mvp-roadmap.md | UPDATE | Backlog / Roadmap | Must reflect architecture packs and freeze program |
| docs/08-api-specification.md | UPDATE | Platform | APIs must reference decision and routing model |
| docs/09-security-gdpr.md | UPDATE / MOVE | Security | Must include new consent and identity gates |
| docs/10-testing-strategy.md | UPDATE | Governance / QA | Must include pattern and decision tests |
| docs/11-laravel-build-queue.md | UPDATE | Platform / Backlog | Must align with new implementation order |
| docs/12-data-dictionary.md | UPDATE | Platform / Data | Must include confirmation state, decision audit and routing fields |
| docs/13-ai-cost-operations-model.md | UPDATE | AI / Operations | Must align with decision-driven AI usage |
| docs/14-business-metrics-kpi-framework.md | UPDATE | Analytics | Must include responsible acceptance and false rejection metrics |
| docs/15-case-intelligence-roadmap.md | UPDATE | AI / Decision | Must align with decision catalog and learning rules |
| docs/16-project-review.md | ARCHIVE / UPDATE | Reviews | Historical review, may remain as review artifact |
| docs/17-user-journey.md | MERGE / SUPERSEDE | Experience | Should be reconciled with DOC-021 |
| docs/18-architecture-governance.md | UPDATE / MOVE | Governance | Must reference ADR-000 and Repository Constitution |
| docs/19-architecture-review-final.md | ARCHIVE / UPDATE | Reviews | Historical review, may remain with status note |
| docs/20-data-dictionary-v2.md | UPDATE | Platform / Data | Must become current data reference or be superseded |
| docs/21-consistency-review.md | MERGE / SUPERSEDE | Reviews | Should be replaced by this review if older |
| docs/22-mvp-0.2-roadmap.md | UPDATE | Backlog / Roadmap | Must align with Architecture Freeze |
| docs/23-mvp-1.0-vision.md | UPDATE | Foundation / Roadmap | Must align with Product Constitution |
| docs/24-repository-audit-final-report.md | UPDATE / ARCHIVE | Reviews | Keep as historical audit with reference to new review |
| docs/25-post-mvp-sprint-plan.md | UPDATE | Sprints | Must align with new pack-based planning |
| docs/26-future-module-architecture.md | UPDATE | Platform / Roadmap | Must align with enterprise domain map |
| docs/27-sprint-backlog-masterplan.md | UPDATE | Backlog / Sprints | Must reference new packs and decisions |
| docs/28-ai-guided-screening-flow.md | MERGE / SUPERSEDE | Experience | Largely replaced by DOC-021 and patterns |
| docs/29-empathy-engine.md | MERGE / SUPERSEDE | Experience / Trust | Replaced partly by DOC-020, DOC-021, PAT-002 and DEC-002 |
| docs/30-ux-design-principles.md | MERGE / SUPERSEDE | Experience | Replaced by DOC-020 and Pattern Library |
| docs/31-acceptance-and-routing-architecture.md | UPDATE / MOVE | Decision | Should align with DEC-005 and DEC-008 and future policies |
| docs/32-digital-first-conversation-flow.md | MERGE / SUPERSEDE | Experience | Replaced by DOC-021 |
| docs/serveradmin-handoff-plan.md | UPDATE | Handover | Must reference new architecture packs and decision cards |
| github/Epic-*.md | UPDATE / MOVE | Backlog / Epics | Should move under backlog/epics and reference architecture IDs |
| github/PR-*.md | UPDATE / MOVE | Backlog / Issues | Should move under backlog/issues or sprints with references |

## Immediate Required Updates

The following files should be updated first:

1. README.md
2. docs/serveradmin-handoff-plan.md
3. docs/27-sprint-backlog-masterplan.md
4. docs/03-scoring-engine.md
5. docs/04-conversation-engine.md
6. docs/05-crm-workflow.md
7. docs/12-data-dictionary.md
8. docs/31-acceptance-and-routing-architecture.md

These are most likely to conflict with the new architecture if left unchanged.

## Migration Strategy

### Phase 1 - Review and mark status

Add a status note to older documents stating whether they are current, under review or superseded.

### Phase 2 - Update primary references

Update README, handover and sprint masterplan to point to the new Architecture Index.

### Phase 3 - Domain migration

Move documents gradually into domain folders only after references are updated.

### Phase 4 - Supersede duplicates

Documents replaced by new architecture should be marked superseded before any deletion is considered.

### Phase 5 - Backlog migration

Move old github/Epic and PR planning documents into backlog/epics and backlog/issues or connect them through new issue templates.

## Decision

The repository should not continue with two parallel documentation structures indefinitely.

The new enterprise structure is the target.

Older documents should be reconciled through controlled review and migration.

## Next Actions

1. Update README to point to Architecture Index.
2. Update serveradmin handover to point to Foundation, Experience and Decision packs.
3. Finish Decision Pack with DEC-013.
4. Create Policy Pack.
5. Update old docs with superseded or under-review status.
6. Move epics and PR plans into backlog structure.

## Governance Rule

No old document should be deleted until it has a clear replacement or archive decision.
