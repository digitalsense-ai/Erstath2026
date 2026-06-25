# DOC-002 - Repository Constitution

Version: 1.0 Draft
Status: Draft
Owner: Enterprise Architecture / Repository Governance
Domain: Foundation
Related: DOC-000 Product Constitution, DOC-001 Architecture Overview

## Purpose

This document defines how the Erstatningshjaelp repository is organized, governed and maintained.

The repository is the official source of truth for product architecture, business rules, decision logic, backlog, implementation plans and handover material.

Chat discussions may be used for exploration, but GitHub is the authoritative project memory.

## Repository Rule

If a decision is not documented, versioned and committed in GitHub, it is not part of the official architecture.

## Repository Goals

The repository must make it possible for a new contributor to understand:

- what the product is
- why it exists
- how the architecture is structured
- which business rules apply
- how AI is allowed to assist
- how decisions are made and reviewed
- how implementation work is tracked
- how changes are governed

## Target Repository Structure

The target structure is:

```text
/docs
  /foundation
  /experience
  /decision
  /trust
  /ai
  /case
  /identity
  /document
  /communication
  /security
  /governance
  /platform

/adr
/policies
/patterns
/decisions
/backlog
  /epics
  /issues
/sprints
/reviews
/handover
/prompts
/github
```

## Directory Ownership

### /docs

Contains architecture and domain documentation.

### /docs/foundation

Contains product constitution, architecture overview, repository constitution and architecture index.

### /docs/experience

Contains user journey, conversation flow, tone of voice and experience architecture.

### /docs/decision

Contains business decision architecture, routing, confidence and explainability.

### /docs/trust

Contains trust architecture, transparency, user control and responsible guidance.

### /docs/ai

Contains AI architecture, prompt strategy, extraction and AI operations.

### /docs/case

Contains CRM, workflow, case lifecycle and internal case handling.

### /docs/identity

Contains identity, authorization and consent architecture.

### /docs/document

Contains document collection, document status, readiness and future document analysis.

### /docs/security

Contains security, GDPR, privacy and access control documentation.

### /docs/governance

Contains architecture governance, review process and standards.

### /adr

Contains Architecture Decision Records.

### /policies

Contains business policies that can guide implementation without being hard-coded directly into product copy.

### /decisions

Contains decision cards and decision catalog entries.

### /patterns

Contains reusable UX, AI and business interaction patterns.

### /backlog

Contains epics and issue descriptions linked to architecture.

### /sprints

Contains sprint plans and delivery tracking.

### /reviews

Contains architecture reviews, audits and readiness reviews.

### /handover

Contains material intended for implementation handover.

## Document Standard

All major documents should use this structure where relevant:

```text
Title
Version
Status
Owner
Domain
Related documents
Purpose
Scope
Principles
Architecture or rules
Data impact
UX impact
AI impact
CRM impact
Audit requirements
Test requirements
Future work
```

## Document Statuses

Allowed document statuses:

- Draft
- Review
- Approved
- Frozen
- Superseded

## Definition of Draft

A document is Draft when it is created but not yet reviewed or approved.

## Definition of Review

A document is in Review when it is ready for structured review by product, architecture or implementation stakeholders.

## Definition of Approved

A document is Approved when it can be used as official guidance for implementation.

## Definition of Frozen

A document is Frozen when it should not change without an ADR or explicit architecture review.

## Definition of Superseded

A document is Superseded when a newer document replaces it.

## Naming Standard

Foundation documents use the format:

```text
DOC-000-document-name.md
```

Architecture Decision Records use the format:

```text
ADR-000-decision-name.md
```

Policies use the format:

```text
POL-000-policy-name.md
```

Decision cards use the format:

```text
DEC-000-decision-name.md
```

Patterns use the format:

```text
PAT-000-pattern-name.md
```

## Traceability Standard

Implementation work should reference at least one of the following:

- Product document
- Architecture document
- Policy
- Decision card
- Pattern
- ADR
- Epic

The ideal traceability chain is:

```text
Principle -> Architecture -> Policy -> Decision -> Epic -> Issue -> Code -> Test
```

## Issue Standard

Implementation issues should include:

- Purpose
- Related architecture
- Related policy where relevant
- Related decision where relevant
- Acceptance criteria
- Test cases
- Notes

## Epic Standard

Epics should include:

- Objective
- Scope
- Related documents
- Related ADRs
- Included issues
- Out of scope
- Definition of done

## ADR Standard

An ADR must be created when a change affects:

- product principles
- major architecture
- routing logic
- acceptance policy
- AI responsibility
- identity or consent flow
- security model
- data model
- user trust model

## Pull Request Standard

A pull request should explain:

- what changed
- why it changed
- related issue
- related architecture or policy
- test performed

## Review Standard

Review should check:

- architecture alignment
- product principle alignment
- security and privacy impact
- user experience impact
- AI responsibility impact
- test coverage

## Governance Rule

No major implementation work should begin without a documented architecture reference and clear acceptance criteria.

## Migration Rule

Existing documents should not be moved randomly.

A repository migration map should define:

- current file location
- target file location
- reason for move
- replacement or consolidation notes

## Single Source of Truth

GitHub is the official source of truth.

Chat may contain working discussion, but committed repository files define the official project state.
