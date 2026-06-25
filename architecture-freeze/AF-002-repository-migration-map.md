# AF-002 - Repository Migration Map

Version: 1.0 Draft
Status: Draft
Owner: Enterprise Architecture / Repository Governance
Domain: Architecture Freeze / Migration
Related: AF-001 Architecture Freeze Report, REV-001 Repository Consistency Review, DOC-002 Repository Constitution, DOC-003 Architecture Index

## Purpose

This document maps the old repository documentation structure to the new enterprise architecture structure.

The goal is to avoid two competing sources of truth.

No document should be deleted until it has been classified and either updated, migrated, superseded or archived.

---

## Migration Status Values

### CURRENT

The document is currently valid and part of the active baseline.

### UPDATED

The document was previously old or incomplete, but has been updated to align with the current architecture baseline.

### UNDER REVIEW

The document may contain useful information, but it must not be treated as final implementation truth until reviewed.

### SUPERSEDED

The document has been replaced by a newer architecture artifact.

### MIGRATE LATER

The document should eventually be moved into a better folder or backlog structure, but does not need immediate content changes.

### ARCHIVE LATER

The document is useful historically but should not guide new implementation.

---

## Active Architecture Baseline

| File | Status | Notes |
|---|---|---|
| README.md | UPDATED | Repository entry point updated for architecture baseline |
| docs/foundation/DOC-000-product-constitution.md | CURRENT | Product constitution |
| docs/foundation/DOC-001-architecture-overview.md | CURRENT | Architecture overview |
| docs/foundation/DOC-002-repository-constitution.md | CURRENT | Repository governance |
| docs/foundation/DOC-003-architecture-index.md | CURRENT | Primary architecture index |
| adr/ADR-000-enterprise-architecture-principles.md | CURRENT | Enterprise architecture principles |
| reviews/REV-001-repository-consistency-review.md | CURRENT | Consistency review and migration guide |
| architecture-freeze/AF-001-architecture-freeze-report.md | CURRENT | Freeze report |
| architecture-freeze/AF-002-repository-migration-map.md | CURRENT | This migration map |

---

## Experience Baseline

| File | Status | Notes |
|---|---|---|
| docs/experience/DOC-020-experience-architecture.md | CURRENT | User experience baseline |
| docs/experience/DOC-021-digital-first-conversation-flow.md | CURRENT | Conversation flow baseline |
| docs/experience/DOC-022-conversation-patterns.md | CURRENT | Experience pattern overview |
| docs/experience/DOC-023-tone-of-voice-guide.md | CURRENT | Tone and user-facing wording |
| patterns/PAT-001-speak-human-store-structured.md | CURRENT | Pattern library |
| patterns/PAT-002-understanding-before-questioning.md | CURRENT | Pattern library |
| patterns/PAT-003-confirm-before-classify.md | CURRENT | Pattern library |
| patterns/PAT-004-never-ask-twice.md | CURRENT | Pattern library |
| patterns/PAT-005-explain-why.md | CURRENT | Pattern library |
| patterns/PAT-006-smart-skip.md | CURRENT | Pattern library |
| patterns/PAT-007-one-thought-per-screen.md | CURRENT | Pattern library |
| patterns/PAT-008-respectful-guide-away.md | CURRENT | Pattern library |
| patterns/PAT-009-human-review-bridge.md | CURRENT | Pattern library |

---

## Decision Baseline

| File | Status | Notes |
|---|---|---|
| decisions/DEC-000-decision-catalog.md | CURRENT | Decision catalog |
| decisions/DEC-001-start-conversation.md | CURRENT | Decision Pack |
| decisions/DEC-002-empathy-reflection.md | CURRENT | Decision Pack |
| decisions/DEC-003-confirm-understanding.md | CURRENT | Decision Pack |
| decisions/DEC-004-smart-skip-decision.md | CURRENT | Decision Pack |
| decisions/DEC-005-routing-recommendation.md | CURRENT | Decision Pack |
| decisions/DEC-006-human-review.md | CURRENT | Decision Pack |
| decisions/DEC-007-information-quality.md | CURRENT | Decision Pack |
| decisions/DEC-008-acceptance-policy.md | CURRENT | Decision Pack |
| decisions/DEC-009-identity-gate.md | CURRENT | Decision Pack |
| decisions/DEC-010-consent-gate.md | CURRENT | Decision Pack |
| decisions/DEC-011-document-readiness.md | CURRENT | Decision Pack |
| decisions/DEC-012-guide-elsewhere.md | CURRENT | Decision Pack |
| decisions/DEC-013-crm-assignment.md | CURRENT | Decision Pack |

---

## Updated Legacy Documents

These files were part of the old flat documentation structure but have been updated to align with the new baseline.

| File | Status | Notes |
|---|---|---|
| docs/serveradmin-handoff-plan.md | UPDATED | Updated to v4.0, implementation no longer starts blindly from old PR plan |
| docs/03-scoring-engine.md | UPDATED | Updated to v2.0, scores are now decision inputs |
| docs/04-conversation-engine.md | UPDATED | Updated to v2.0, aligned with Experience and Decision Packs |
| docs/05-crm-workflow.md | UPDATED | Updated to v2.0, CRM handover and review model added |
| docs/12-data-dictionary.md | UPDATED | Updated to v2.0, decision and CRM handover fields added |
| docs/27-sprint-backlog-masterplan.md | UPDATED | Updated to v2.0, implementation now depends on Policy Pack and traceable backlog |
| docs/31-acceptance-and-routing-architecture.md | UPDATED | Updated to v2.0, now bridge to Decision and Policy Packs |

---

## Legacy Documents Under Review

These documents may still contain useful implementation detail, but they are not primary source of truth until reviewed.

| File | Status | Recommended Action | Notes |
|---|---|---|---|
| docs/01-database-blueprint.md | UNDER REVIEW | Update or merge | Must align with Data Dictionary v2.0 |
| docs/02-ai-engine.md | UNDER REVIEW | Update | Must align with AI responsibility model and Decision Pack |
| docs/06-domain-model.md | UNDER REVIEW | Update | Must align with Foundation architecture |
| docs/07-mvp-roadmap.md | UNDER REVIEW | Update or archive | Must align with Sprint Backlog Masterplan v2.0 |
| docs/08-api-specification.md | UNDER REVIEW | Update | Must align with Data Dictionary v2.0 and Decision Pack |
| docs/09-security-gdpr.md | UNDER REVIEW | Update | Must align with identity, consent and audit decisions |
| docs/10-testing-strategy.md | UNDER REVIEW | Update | Must include pattern, decision and policy tests |
| docs/11-laravel-build-queue.md | UNDER REVIEW | Update or merge | Must align with traceable backlog |
| docs/13-ai-cost-operations-model.md | UNDER REVIEW | Update | Must align with future AI Usage Policy |
| docs/14-business-metrics-kpi-framework.md | UNDER REVIEW | Update | Must include responsible acceptance and trust metrics |
| docs/15-case-intelligence-roadmap.md | UNDER REVIEW | Update | Must align with future AI governance |
| docs/16-project-review.md | ARCHIVE LATER | Archive | Historical review |
| docs/17-user-journey.md | SUPERSEDED | Mark superseded | Replaced by DOC-020 and DOC-021 |
| docs/18-architecture-governance.md | UNDER REVIEW | Update | Must reference ADR-000 and Repository Constitution |
| docs/19-architecture-review-final.md | ARCHIVE LATER | Archive | Historical review |
| docs/20-data-dictionary-v2.md | UNDER REVIEW | Merge or supersede | Must be reconciled with docs/12-data-dictionary.md v2.0 |
| docs/21-consistency-review.md | SUPERSEDED | Mark superseded | Replaced by REV-001 and AF-002 |
| docs/22-mvp-0.2-roadmap.md | UNDER REVIEW | Update | Must align with Sprint Backlog Masterplan v2.0 |
| docs/23-mvp-1.0-vision.md | UNDER REVIEW | Update | Must align with Product Constitution |
| docs/24-repository-audit-final-report.md | ARCHIVE LATER | Archive | Historical audit |
| docs/25-post-mvp-sprint-plan.md | UNDER REVIEW | Merge | Must align with Sprint Backlog Masterplan v2.0 |
| docs/26-future-module-architecture.md | UNDER REVIEW | Update | Must align with domain architecture |
| docs/28-ai-guided-screening-flow.md | SUPERSEDED | Mark superseded | Replaced by DOC-021 and Conversation Engine v2.0 |
| docs/29-empathy-engine.md | SUPERSEDED | Mark superseded | Replaced by DEC-002 and Experience Pack |
| docs/30-ux-design-principles.md | SUPERSEDED | Mark superseded | Replaced by Experience Pack and Pattern Library |
| docs/32-digital-first-conversation-flow.md | SUPERSEDED | Mark superseded | Replaced by DOC-021 |

---

## GitHub Planning Folder

The old `/github` folder contains early epics, issue descriptions and PR plans.

These should not be deleted immediately.

They should be migrated into:

```text
/backlog/epics
/backlog/issues
/sprints
```

| File Group | Status | Recommended Action |
|---|---|---|
| github/Epic-*.md | MIGRATE LATER | Convert into traceable epics |
| github/PR-*.md | MIGRATE LATER | Convert into issue/PR implementation plans |
| github/MVP-*.md | UNDER REVIEW | Reconcile with Architecture Freeze and Sprint Masterplan |

---

## Prompt Folder

The `/prompts` folder should be reviewed after Policy Pack is created.

| File Group | Status | Recommended Action |
|---|---|---|
| prompts/*.md | UNDER REVIEW | Align prompts with Experience, Decision and Policy Packs |

Prompt files must not override architecture, decisions or policies.

---

## Target Migration Order

1. Complete AF-003 Implementation Readiness Checklist.
2. Create Policy Pack v1.0.
3. Review AI, API, security and testing documents.
4. Create `/backlog/epics` and `/backlog/issues`.
5. Migrate old GitHub planning files gradually.
6. Mark superseded docs clearly before archiving.
7. Update Architecture Index after each migration wave.

---

## Governance Rule

If an old document conflicts with the current baseline, the current baseline wins.

Priority order:

```text
README / Architecture Index
↓
Architecture Freeze docs
↓
Foundation / Experience / Decision / Pattern docs
↓
Updated legacy docs
↓
Under-review legacy docs
↓
Archived docs
```

---

## Outcome

This migration map makes it possible to keep historical work without allowing it to create conflicting implementation guidance.

The repository should now move toward Policy Pack and traceable backlog creation.
