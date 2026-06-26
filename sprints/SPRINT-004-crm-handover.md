# SPRINT-004 - CRM Handover

Version: 1.0 Draft
Status: Planned
Owner: Product / Operations / Delivery / Engineering
Sprint Type: Feature
Related Epics: EPIC-F CRM Lead Board and Detail, EPIC-G Human Review Queue
Related: BACKLOG-000 Traceable Backlog Index, docs/05-crm-workflow.md, docs/12-data-dictionary.md, DEC-006 Human Review, DEC-013 CRM Assignment, POL-002 Routing Policy, POL-005 Human Review Policy, POL-007 Communication Policy, backlog/epics/EPIC-F-crm-lead-board-and-detail.md, backlog/epics/EPIC-G-human-review-queue.md

## Purpose

This sprint implements the MVP internal CRM handover experience and human review workflow for ErstatningsHjaelp.

The sprint should give internal users a clear view of leads, what the platform understood, what is confirmed, what is inferred, what is missing, why the lead was routed, and whether human review is required.

SPRINT-004 turns automated intake and routing outputs into an operational internal workflow.

---

## Sprint Goal

```text
Create the MVP CRM lead board, lead detail view and human review workflow so internal users can understand, review and act on routed leads safely.
```

---

## Business Value

This sprint should create value by:

- reducing manual reconstruction of leads
- making AI-assisted screening explainable to internal users
- showing routing and review reasons clearly
- separating confirmed, inferred and unresolved facts
- supporting safe follow-up and review outcomes
- preventing unsafe next steps while review is pending
- creating a usable handover from digital intake to internal operations

---

## Scope

This sprint includes:

- CRM MVP read model
- internal CRM access policy
- CRM lead board endpoint
- CRM lead detail endpoint
- CRM lead board UI
- CRM lead detail UI
- display of confirmed, inferred and unresolved facts
- display of routing and review reasons
- display of missing information and next action
- CRM audit events
- human review MVP workflow
- human review queue query
- human review detail endpoint
- human review queue UI
- review outcome form
- review blocking rules
- review outcome and note persistence
- human review access and outcome tests

---

## Out of Scope

This sprint does not include:

- full legal case management
- full case lifecycle workflow
- document upload and document review UI
- MitID provider integration
- consent signing implementation
- external authority submission
- advanced CRM reporting dashboards
- automated reviewer workload optimization
- automated model retraining from review outcomes

---

## Related Architecture

```text
docs/05-crm-workflow.md - CRM Workflow
docs/12-data-dictionary.md - Data Dictionary
DOC-003 - Architecture Index
```

---

## Related Patterns

```text
PAT-005 - Explain Why
PAT-008 - Respectful Guide Away
PAT-009 - Human Review Bridge
```

---

## Related Decisions

```text
DEC-005 - Routing Recommendation
DEC-006 - Human Review
DEC-007 - Information Quality
DEC-013 - CRM Assignment
```

---

## Related Policies

```text
POL-002 - Routing Policy
POL-003 - Confidence Policy
POL-005 - Human Review Policy
POL-007 - Communication Policy
POL-008 - AI Usage Policy
```

---

## Included Epics

```text
EPIC-F - CRM Lead Board and Detail
EPIC-G - Human Review Queue
```

---

## Included Issues

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

## Data Impact

This sprint reads from:

```text
leads
lead_conversations
lead_facts
lead_missing_information
lead_scores
lead_decisions
lead_reviews
lead_handover_snapshots
ai_runs
audit_logs
```

This sprint may update:

```text
leads.status
lead_reviews.status
lead_reviews.outcome
lead_reviews.review_notes
lead_reviews.assigned_to
lead_reviews.completed_at
audit_logs
```

If internal notes, lead assignment or advanced CRM ownership are needed, they should be introduced through explicit future issues.

---

## Implementation Sequence

Recommended sequence:

```text
1. Define CRM read model
2. Implement internal CRM access policy
3. Implement CRM lead board query and endpoint
4. Implement CRM lead detail query and endpoint
5. Build lead board UI
6. Build lead detail UI
7. Add fact, decision, review and missing-information panels
8. Define human review workflow states and outcomes
9. Implement human review queue and detail endpoints
10. Build review UI and outcome form
11. Implement review blocking rules
12. Persist review outcomes and notes
13. Add audit events
14. Add CRM and review access/outcome tests
```

---

## Dependencies

This sprint depends on:

- SPRINT-000 Foundation
- SPRINT-001 Data Model
- SPRINT-002 Conversation
- SPRINT-003 Decision Engine
- EPIC-F CRM Lead Board and Detail
- EPIC-G Human Review Queue
- Policy Pack

This sprint enables:

- SPRINT-005 Security, Audit and Testing
- MVP operational handover
- future internal assignment and notes workflows

---

## Acceptance Criteria

This sprint is complete when:

- authorized internal users can access a CRM lead board
- unauthorized users cannot access CRM views
- lead board shows status, queue, routing and review indicators
- lead detail shows original description and relevant conversation context
- facts are grouped by confirmed, inferred and unresolved state
- missing information is visible
- routing and review reasons are visible
- suggested next action is visible
- human review queue exists
- reviewers can record review outcomes
- pending review blocks unsafe automated next steps
- important CRM and review actions are audited

---

## Test Requirements

Tests should verify:

- unauthorized users cannot access CRM or review routes
- authorized users can view CRM lead board
- authorized users can view CRM lead detail
- lead detail separates fact reliability states
- routing and review reasons are visible internally
- pending review leads appear in review queue
- reviewer can start and complete review
- review outcome is stored
- review actions are audited
- pending review blocks unsafe next steps
- user-facing messages do not expose internal review labels

---

## Security and Privacy Considerations

SPRINT-004 must ensure:

- CRM and review routes are internal-only
- sensitive lead details are protected by access policies
- review notes are internal-only
- AI-generated or inferred information is clearly marked
- audit logs record important internal actions
- internal labels are not exposed publicly
- no real data is used in tests or seeders

---

## Risks

| Risk | Mitigation |
|---|---|
| CRM becomes only a raw lead table | Use structured handover panels |
| Review becomes a hidden dead-end | Require review status and next action visibility |
| Sensitive data is exposed publicly | Enforce internal access policies and tests |
| Review notes leak to users | Keep notes internal-only and test response payloads |
| Automated routing bypasses review | Centralize review blocking rules |

---

## Open Questions

- Should MVP CRM be Kanban, table view or hybrid?
- Should human review be a separate page or embedded inside lead detail?
- Which review outcomes are required for MVP 0.1?
- Should reviewer assignment be included in MVP or deferred?
- Should internal notes be included immediately or later?

---

## Review Checklist

Before closing this sprint, confirm:

```text
Architecture references are still valid
CRM and review policies are followed
Internal access is enforced
Tests pass
No real data is introduced
No final legal case workflow was added accidentally
Documentation was updated if needed
ServerAdmin handoff impact was considered
```

---

## Definition of Done

```text
Sprint goal achieved
CRM lead board exists
CRM lead detail exists
Human review queue exists
Review outcomes can be recorded
Pending review blocks unsafe next steps
Internal access control is enforced
Important actions are audited
Core CRM and review tests pass
Next sprint dependencies are clear
```
