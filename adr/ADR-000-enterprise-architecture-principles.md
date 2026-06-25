# ADR-000 - Enterprise Architecture Principles

Version: 1.0 Draft
Status: Draft
Owner: Enterprise Architecture
Domain: Governance / Foundation
Related: DOC-000 Product Constitution, DOC-001 Architecture Overview, DOC-002 Repository Constitution, DOC-003 Architecture Index

## Status

Draft

## Context

Erstatningshjaelp is moving from concept development into structured implementation.

The project now requires a stable set of enterprise architecture principles so future product, AI, UX, business and platform decisions can be evaluated consistently.

The repository already contains many early MVP documents. This ADR establishes the principles that will guide consolidation, future architecture documents, backlog creation and implementation.

## Decision

The project adopts the following enterprise architecture principles.

## Principle 1 - GitHub is the Single Source of Truth

Chat discussions may be used for exploration and drafting, but only committed repository files define the official architecture, backlog, policies and implementation guidance.

## Principle 2 - Human First

The platform must be designed around the user situation first and the technology second.

The system should reduce confusion, avoid unnecessary complexity and create clarity.

## Principle 3 - AI Assists, Humans Decide

AI may extract, summarize, classify, score, suggest and route.

AI must not be treated as the final authority for complex, sensitive or uncertain cases.

Human review must be used when confidence is low, information is sensitive or business rules require escalation.

## Principle 4 - Explainable Decisions

Important recommendations and routing outcomes must be explainable.

The system should be able to show why a recommendation was made, which factors were used and what uncertainty remains.

## Principle 5 - Policy Before Code

Business rules should be documented as policies before they are implemented in code.

Code should implement approved policies rather than hide business logic in undocumented conditionals.

## Principle 6 - Trust Before Efficiency

If speed and user trust conflict, trust wins.

The platform should not rush users through sensitive steps without explanation.

## Principle 7 - Confirm Before Classify

The system may infer meaning from user input, but important classifications should be confirmed before they are used for routing or case assessment.

## Principle 8 - Never Ask Twice

The platform should avoid asking for information that the user has already provided or confirmed.

When uncertain, the system should confirm naturally instead of repeating form questions.

## Principle 9 - Progressive Confidence

Facts should have confidence levels.

A user-provided statement, an AI inference, a confirmed fact, an uploaded document and a human-reviewed fact should not be treated as equally reliable.

## Principle 10 - Traceability

Important features should be traceable from principle to architecture, policy, decision, epic, issue, code and test.

## Principle 11 - Modular Domain Ownership

Each major domain should have clear ownership, documentation and implementation boundaries.

This reduces duplication and makes future change safer.

## Principle 12 - Security and Privacy by Design

Security, privacy and data minimization must be considered from the beginning of each feature.

Sensitive information should only be collected when it has a clear purpose.

## Principle 13 - Architecture Before Major Sprint

Major implementation work should not begin without a relevant architecture reference and clear acceptance criteria.

## Principle 14 - ADR for Major Changes

A new ADR is required when a change affects product principles, major architecture, routing logic, acceptance policy, AI responsibility, identity flow, consent, security, data model or trust model.

## Consequences

These principles mean that future work must:

- be documented before implementation when it affects architecture or business logic
- reference related documents, policies or decisions
- preserve user trust and explainability
- include human review paths for uncertain or sensitive situations
- keep GitHub as the official project memory

## Alternatives Considered

### Continue with informal documentation

Rejected. The project has become too complex to rely on chat history or scattered documents.

### Put business rules directly into code first

Rejected. This would make future policy changes difficult and reduce auditability.

### Treat AI output as final decision

Rejected. The platform requires responsible human oversight and explainable routing.

## Implementation Notes

This ADR should be referenced by:

- future architecture documents
- policies
- decision catalog entries
- issue templates
- architecture reviews
- implementation handover documents

## Review Trigger

This ADR should be reviewed if:

- the product scope changes materially
- the decision engine changes materially
- the AI responsibility model changes
- identity or consent flows change
- the repository governance model changes

## Outcome

ADR-000 establishes the baseline principles for Enterprise Architecture Baseline v1.0.
