# DOC-001 - Architecture Overview

Version: 1.0 Draft
Status: Draft
Owner: Enterprise Architecture
Domain: Foundation
Related: DOC-000 Product Constitution

## Purpose

This document gives a high-level overview of the Erstatningshjaelp platform architecture.

It defines the main domains, architecture layers, repository structure, decision flow and governance model.

The document is intentionally high level. Each domain is described in its own architecture document.

## Product Context

Erstatningshjaelp is a digital platform for structured case intake, AI-assisted screening, routing and internal case handling.

The platform should support a safe first conversation, structured information capture, responsible AI assistance and clear internal workflows.

## Architecture Principles

The platform follows these architecture principles:

- Human first
- Explainable decisions
- AI assists, humans decide
- Policy before code
- Single source of truth
- Security by design
- Privacy by design
- Traceability
- Modular architecture
- Domain ownership

## Enterprise Domain Map

The main domains are:

1. Product
2. Experience
3. Decision
4. Trust
5. AI
6. Knowledge
7. Case Management
8. Identity
9. Documents
10. Communication
11. Analytics
12. Security
13. Governance
14. Platform

Each domain must have clear ownership, documentation and implementation boundaries.

## Architecture Layers

### Layer 1 - Product

Defines mission, vision, product promise, product principles and success criteria.

### Layer 2 - Experience

Defines the user journey, digital first conversation, tone of voice, interaction patterns and user-facing guidance.

### Layer 3 - Decision

Defines business decisions, routing, acceptance policy, confidence, explainability and escalation rules.

### Layer 4 - AI

Defines prompt strategy, entity extraction, summarization, scoring support, knowledge support and future document analysis.

### Layer 5 - Operations

Defines CRM, internal workflows, document handling, identity, communication, administration and analytics.

## Core User Flow

The primary platform flow is:

1. Landing page
2. Digital first conversation
3. Empathy reflection
4. Guided screening
5. Information quality assessment
6. Case strength assessment
7. Business value assessment
8. Routing recommendation
9. Human review when needed
10. Identity and consent when relevant
11. Document collection when relevant
12. Case management

## Decision Flow

All automated or AI-assisted decisions should follow this model:

1. Information is collected
2. Information is interpreted
3. Confidence is assessed
4. Policy is applied
5. A recommendation is created
6. The recommendation is explained
7. The next action is selected
8. The decision is logged for audit

## Repository Structure

The target repository structure is:

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
/sprints
/reviews
/handover
```

## Traceability

All implementation work should be traceable from product intent to code.

Traceability model:

1. Product principle
2. Architecture document
3. Policy where relevant
4. Decision record where relevant
5. Epic
6. Issue
7. Code
8. Test
9. Release

## Governance

The project is governed through:

- Product Constitution
- Architecture documents
- Architecture Decision Records
- Policies
- Decision Catalog
- Pattern Library
- Sprint planning
- Code review
- Architecture review

## Architecture Freeze

An architecture area can be marked Frozen when:

- documentation exists
- GitHub is updated
- related ADRs are created where needed
- backlog is updated
- handover is updated
- implementation can begin without ambiguity

## Success Criteria

This architecture is successful when:

- all major domains are documented
- decisions are explainable
- AI assistance is auditable
- user experience is consistent
- internal users get a clear decision basis
- developers can implement from GitHub without relying on chat history
