# DOC-003 - Architecture Index

Version: 1.0 Draft
Status: Draft
Owner: Enterprise Architecture
Domain: Foundation
Related: DOC-000 Product Constitution, DOC-001 Architecture Overview, DOC-002 Repository Constitution

## Purpose

This document is the official architecture index for Erstatningshjaelp.

It gives contributors, developers and stakeholders a single place to find the current architecture documents, policies, patterns, decision records and backlog references.

GitHub is the single source of truth. This index should be updated whenever a new official architecture artifact is created, moved, replaced or frozen.

## Foundation Documents

| ID | Document | Path | Status |
| --- | --- | --- | --- |
| DOC-000 | Product Constitution | docs/foundation/DOC-000-product-constitution.md | Draft |
| DOC-001 | Architecture Overview | docs/foundation/DOC-001-architecture-overview.md | Draft |
| DOC-002 | Repository Constitution | docs/foundation/DOC-002-repository-constitution.md | Draft |
| DOC-003 | Architecture Index | docs/foundation/DOC-003-architecture-index.md | Draft |

## Existing Core Documents

| Document | Current Path | Target Domain | Notes |
| --- | --- | --- | --- |
| Database Blueprint | docs/01-database-blueprint.md | Platform / Data | Existing MVP document |
| AI Engine | docs/02-ai-engine.md | AI | Existing MVP document |
| Scoring Engine | docs/03-scoring-engine.md | Decision / AI | Existing MVP document |
| Conversation Engine | docs/04-conversation-engine.md | Experience / AI | Existing MVP document |
| CRM Workflow | docs/05-crm-workflow.md | Case | Existing MVP document |
| Domain Model | docs/06-domain-model.md | Foundation / Platform | Existing MVP document |
| MVP Roadmap | docs/07-mvp-roadmap.md | Backlog / Roadmap | Existing MVP document |
| API Specification | docs/08-api-specification.md | Platform | Existing MVP document |
| Security GDPR | docs/09-security-gdpr.md | Security | Existing MVP document |
| Testing Strategy | docs/10-testing-strategy.md | Governance / QA | Existing MVP document |
| Laravel Build Queue | docs/11-laravel-build-queue.md | Platform / Backlog | Existing MVP document |
| Data Dictionary | docs/12-data-dictionary.md | Platform / Data | Existing MVP document |
| AI Cost Operations Model | docs/13-ai-cost-operations-model.md | AI / Operations | Existing MVP document |
| Business Metrics KPI Framework | docs/14-business-metrics-kpi-framework.md | Analytics | Existing MVP document |
| Case Intelligence Roadmap | docs/15-case-intelligence-roadmap.md | AI / Decision | Existing roadmap document |
| Project Review | docs/16-project-review.md | Reviews | Existing review document |
| User Journey | docs/17-user-journey.md | Experience | Existing experience document |
| Architecture Governance | docs/18-architecture-governance.md | Governance | Existing governance document |
| Architecture Review Final | docs/19-architecture-review-final.md | Reviews | Existing review document |
| Data Dictionary v2 | docs/20-data-dictionary-v2.md | Platform / Data | Existing data document |
| Consistency Review | docs/21-consistency-review.md | Reviews | Existing review document |
| MVP 0.2 Roadmap | docs/22-mvp-0.2-roadmap.md | Backlog / Roadmap | Existing roadmap document |
| MVP 1.0 Vision | docs/23-mvp-1.0-vision.md | Foundation / Roadmap | Existing vision document |
| Repository Audit Final Report | docs/24-repository-audit-final-report.md | Reviews | Existing audit document |
| Post MVP Sprint Plan | docs/25-post-mvp-sprint-plan.md | Sprints | Existing sprint document |
| Future Module Architecture | docs/26-future-module-architecture.md | Platform | Existing architecture document |
| Sprint Backlog Masterplan | docs/27-sprint-backlog-masterplan.md | Backlog / Sprints | Existing backlog document |
| AI Guided Screening Flow | docs/28-ai-guided-screening-flow.md | Experience / AI | Existing experience document |
| Empathy Engine | docs/29-empathy-engine.md | Experience / Trust | Existing experience document |
| UX Design Principles | docs/30-ux-design-principles.md | Experience | Existing UX document |
| Acceptance and Routing Architecture | docs/31-acceptance-and-routing-architecture.md | Decision | Existing decision document |
| Digital First Conversation Flow | docs/32-digital-first-conversation-flow.md | Experience | Existing experience document |

## Target Architecture Domains

### Foundation

Purpose: Defines the product constitution, architecture overview, repository rules and index.

Target path: docs/foundation/

### Experience

Purpose: Defines the digital first conversation, empathy, guided screening, tone of voice, UX principles and interaction patterns.

Target path: docs/experience/

### Decision

Purpose: Defines business decisions, routing, acceptance policy, confidence, explainability and escalation.

Target path: docs/decision/

### Trust

Purpose: Defines trust, transparency, user control, respectful guidance and responsible expectations.

Target path: docs/trust/

### AI

Purpose: Defines AI responsibilities, prompt strategy, extraction, summarization, scoring support and future document analysis.

Target path: docs/ai/

### Case

Purpose: Defines CRM, case lifecycle, internal workflow, tasks, handover and caseworker support.

Target path: docs/case/

### Identity

Purpose: Defines identity verification, consent, authorization and access boundaries.

Target path: docs/identity/

### Document

Purpose: Defines document collection, document readiness, document status and future document analysis.

Target path: docs/document/

### Communication

Purpose: Defines communication flows, email, notifications, user updates and internal messages.

Target path: docs/communication/

### Security

Purpose: Defines privacy, security, GDPR, access control, audit and data protection.

Target path: docs/security/

### Governance

Purpose: Defines architecture governance, review process, ADR process, issue standards and release discipline.

Target path: docs/governance/

### Platform

Purpose: Defines Laravel architecture, APIs, jobs, queues, storage, integrations and deployment.

Target path: docs/platform/

## Artifact Index

### Architecture Decision Records

Target path: adr/

Planned initial ADRs:

| ID | Title | Status |
| --- | --- | --- |
| ADR-000 | Enterprise Architecture Principles | Planned |
| ADR-001 | GitHub as Single Source of Truth | Planned |
| ADR-002 | Digital First Conversation | Planned |
| ADR-003 | Acceptance and Routing | Planned |
| ADR-004 | MitID as Decision Gate | Planned |

### Policies

Target path: policies/

Planned initial policies:

| ID | Title | Status |
| --- | --- | --- |
| POL-001 | Acceptance Policy | Planned |
| POL-002 | Routing Policy | Planned |
| POL-003 | Confidence Policy | Planned |
| POL-004 | Identity and Consent Policy | Planned |
| POL-005 | Human Review Policy | Planned |

### Decisions

Target path: decisions/

Planned initial decisions:

| ID | Title | Status |
| --- | --- | --- |
| DEC-000 | Decision Catalog | Planned |
| DEC-001 | Start Conversation | Planned |
| DEC-002 | Empathy Reflection | Planned |
| DEC-003 | Confirmation | Planned |
| DEC-004 | Smart Skip | Planned |
| DEC-005 | Routing | Planned |
| DEC-006 | MitID Gate | Planned |

### Patterns

Target path: patterns/

Planned initial patterns:

| ID | Title | Status |
| --- | --- | --- |
| PAT-001 | Speak Human, Store Structured | Planned |
| PAT-002 | Understanding Before Questioning | Planned |
| PAT-003 | Confirm Before Classify | Planned |
| PAT-004 | Never Ask Twice | Planned |
| PAT-005 | Explain Why | Planned |
| PAT-006 | Smart Skip | Planned |
| PAT-007 | One Thought Per Screen | Planned |

## Migration Status

The repository currently contains both old flat documentation under docs/ and new domain-based documentation under docs/foundation/.

Migration should happen gradually and through a documented migration map.

No existing document should be deleted until its replacement or target location is confirmed.

## Foundation Pack Status

| Artifact | Status |
| --- | --- |
| DOC-000 Product Constitution | Created |
| DOC-001 Architecture Overview | Created |
| DOC-002 Repository Constitution | Created |
| DOC-003 Architecture Index | Created |
| ADR-000 Enterprise Architecture Principles | Planned |

## Governance Rule

This index must be updated whenever:

- a new official architecture document is created
- an architecture document is moved
- an architecture document is replaced
- a document changes status to Approved or Frozen
- a new ADR, policy, decision card or pattern is introduced
