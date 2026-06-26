# ISSUE-000 - Issue Catalog and Numbering Plan

Version: 1.0 Draft
Status: Planned
Owner: Product / Delivery / Architecture
Domain: Backlog / Issue Planning
Related: BACKLOG-000 Traceable Backlog Index, backlog/templates/ISSUE-TEMPLATE.md, sprints/SPRINT-000-foundation.md, sprints/SPRINT-001-data-model.md, sprints/SPRINT-002-conversation.md, sprints/SPRINT-003-decision-engine.md, sprints/SPRINT-004-crm-handover.md, sprints/SPRINT-005-security-audit-testing.md

## Purpose

This document defines the official issue numbering plan for the MVP 0.1 implementation backlog.

The purpose is to avoid duplicate issue numbers, keep epics and sprints aligned, and make it clear which issues belong to which implementation area.

Issue files should be created from this catalog after the sprint layer has been completed.

---

## Numbering Rules

```text
ISSUE-000 is reserved for this catalog.
ISSUE-001 through ISSUE-090 are reserved for MVP 0.1 implementation planning.
Issue numbers must not be reused.
If an issue is removed or deferred, keep the number reserved and mark it as deferred.
New issues after MVP 0.1 should continue from ISSUE-091.
```

---

## MVP 0.1 Issue Ranges

| Range | Epic | Sprint | Area |
|---|---|---|---|
| ISSUE-001 - ISSUE-007 | EPIC-A | SPRINT-000 | Laravel Foundation |
| ISSUE-008 - ISSUE-020 | EPIC-B | SPRINT-001 | Data Model and Migrations |
| ISSUE-021 - ISSUE-033 | EPIC-C | SPRINT-002 | Digital First Conversation |
| ISSUE-034 - ISSUE-044 | EPIC-D | SPRINT-002 | AI Screening Service |
| ISSUE-045 - ISSUE-056 | EPIC-E | SPRINT-003 | Decision and Routing Engine |
| ISSUE-057 - ISSUE-067 | EPIC-F | SPRINT-004 | CRM Lead Board and Detail |
| ISSUE-068 - ISSUE-077 | EPIC-G | SPRINT-004 | Human Review Queue |
| ISSUE-078 - ISSUE-090 | EPIC-H | SPRINT-005 | Security, Audit and Testing |

---

## SPRINT-000 - Foundation

```text
ISSUE-001 - Confirm Laravel version and foundation constraints
ISSUE-002 - Create Laravel application baseline
ISSUE-003 - Add environment example and ignore rules
ISSUE-004 - Add local development setup documentation
ISSUE-005 - Add basic test runner validation
ISSUE-006 - Add baseline CI workflow
ISSUE-007 - Add repository implementation guardrails
```

---

## SPRINT-001 - Data Model

```text
ISSUE-008 - Define MVP data model implementation approach
ISSUE-009 - Create leads migration and model
ISSUE-010 - Create lead_conversations migration and model
ISSUE-011 - Create lead_facts migration and model
ISSUE-012 - Create lead_missing_information migration and model
ISSUE-013 - Create lead_scores migration and model
ISSUE-014 - Create lead_decisions migration and model
ISSUE-015 - Create lead_reviews migration and model
ISSUE-016 - Create lead_handover_snapshots migration and model
ISSUE-017 - Create ai_runs migration and model
ISSUE-018 - Create audit_logs migration and model
ISSUE-019 - Add model relationship tests
ISSUE-020 - Add fake-only seed data guardrails
```

---

## SPRINT-002 - Conversation

```text
ISSUE-021 - Define digital-first conversation response contract
ISSUE-022 - Create conversation state model
ISSUE-023 - Implement conversation session controller
ISSUE-024 - Implement conversation session service
ISSUE-025 - Persist user and system conversation messages
ISSUE-026 - Implement fact extraction stub and fact merge service
ISSUE-027 - Implement missing information service
ISSUE-028 - Implement Smart Skip service
ISSUE-029 - Implement understanding confirmation flow
ISSUE-030 - Implement conversation summary and handover builder
ISSUE-031 - Add conversation state machine tests
ISSUE-032 - Add feature tests for conversation flow
ISSUE-033 - Document digital-first conversation implementation notes
ISSUE-034 - Define AI screening service contract
ISSUE-035 - Create fake AI provider for local testing
ISSUE-036 - Define initial AI output schema
ISSUE-037 - Implement AI output validation service
ISSUE-038 - Implement prompt context builder
ISSUE-039 - Implement fact candidate extraction handling
ISSUE-040 - Implement missing information detection handling
ISSUE-041 - Implement AI run logging
ISSUE-042 - Add safe AI failure handling
ISSUE-043 - Add AI screening service tests
ISSUE-044 - Add prompt governance documentation
```

---

## SPRINT-003 - Decision Engine

```text
ISSUE-045 - Define decision engine service contracts
ISSUE-046 - Implement LeadState read model
ISSUE-047 - Implement information quality evaluator
ISSUE-048 - Implement acceptance policy evaluator
ISSUE-049 - Implement confidence policy evaluator
ISSUE-050 - Implement human review trigger service
ISSUE-051 - Implement routing priority resolver
ISSUE-052 - Persist lead decision records
ISSUE-053 - Persist human review requirements
ISSUE-054 - Generate CRM assignment signal
ISSUE-055 - Add decision audit events
ISSUE-056 - Add decision engine tests
```

---

## SPRINT-004 - CRM Handover

```text
ISSUE-057 - Define CRM MVP read model
ISSUE-058 - Create internal CRM access policy
ISSUE-059 - Create CRM lead board endpoint
ISSUE-060 - Create CRM lead detail endpoint
ISSUE-061 - Build CRM lead board UI
ISSUE-062 - Build CRM lead detail UI
ISSUE-063 - Display confirmed, inferred and unresolved facts
ISSUE-064 - Display routing and review reasons
ISSUE-065 - Display missing information and next action
ISSUE-066 - Add CRM audit events
ISSUE-067 - Add CRM access and display tests
ISSUE-068 - Define human review MVP workflow
ISSUE-069 - Create human review queue query
ISSUE-070 - Create human review detail endpoint
ISSUE-071 - Build human review queue UI
ISSUE-072 - Build review outcome form
ISSUE-073 - Implement review blocking rules
ISSUE-074 - Persist review outcomes and notes
ISSUE-075 - Add review audit events
ISSUE-076 - Add human review access tests
ISSUE-077 - Add review outcome tests
```

---

## SPRINT-005 - Security, Audit and Testing

```text
ISSUE-078 - Define MVP security and access control baseline
ISSUE-079 - Implement internal route authentication baseline
ISSUE-080 - Implement CRM and review access policies
ISSUE-081 - Implement audit logging service
ISSUE-082 - Define audit event catalog for MVP
ISSUE-083 - Add fake data guardrail rules
ISSUE-084 - Add AI output validation tests
ISSUE-085 - Add decision and routing regression tests
ISSUE-086 - Add CRM and human review access tests
ISSUE-087 - Add human review blocking tests
ISSUE-088 - Add user-facing message safety tests
ISSUE-089 - Add MVP regression test suite
ISSUE-090 - Document security configuration and testing rules
```

---

## Required Follow-Up Updates

The following documents must align with this catalog:

```text
backlog/epics/EPIC-D-ai-screening-service.md
backlog/epics/EPIC-E-decision-and-routing-engine.md
backlog/epics/EPIC-F-crm-lead-board-and-detail.md
backlog/epics/EPIC-G-human-review-queue.md
backlog/epics/EPIC-H-security-audit-and-testing.md
sprints/SPRINT-002-conversation.md
sprints/SPRINT-003-decision-engine.md
sprints/SPRINT-004-crm-handover.md
sprints/SPRINT-005-security-audit-testing.md
```

SPRINT documents currently follow this catalog. Some epic documents may need numbering updates before individual issue files are created.

---

## Definition of Done

```text
Issue catalog exists
Issue ranges are unique
Sprint issue lists are aligned
Epic proposed issue lists are aligned
Individual issue files can be created without duplicate numbers
```
