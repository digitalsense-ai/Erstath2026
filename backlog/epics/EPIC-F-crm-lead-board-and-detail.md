# EPIC-F - CRM Lead Board and Detail

Version: 1.0 Draft
Status: Planned
Owner: Product / Operations / Engineering
Domain: CRM / Internal Workflow / Frontend / Backend
Sprint Alignment: SPRINT-004 CRM Handover
Related: BACKLOG-000 Traceable Backlog Index, docs/05-crm-workflow.md, docs/12-data-dictionary.md, DEC-013 CRM Assignment, POL-001 Acceptance Policy, POL-002 Routing Policy, POL-005 Human Review Policy, POL-007 Communication Policy, POL-008 AI Usage Policy

## Purpose

This epic defines the internal CRM lead board and lead detail experience for ErstatningsHjaelp.

The goal is to give internal users a clear, structured and auditable view of leads, including what the platform understood, what is confirmed, what is inferred, what is missing, why the lead was routed, and what the recommended next action is.

CRM must be a decision handover surface, not just a lead list.

---

## Business Objectives

This epic enables the platform to:

- help internal users understand leads quickly
- reduce manual reconstruction from conversation history
- show routing and review reasons clearly
- distinguish confirmed facts from inferred facts
- show missing information and next actions
- support responsible follow-up
- improve operational oversight of the intake pipeline
- make AI-assisted screening explainable to humans

---

## Success Metrics

This epic is successful when:

- internal users can view a lead board
- lead status, routing outcome and review state are visible
- lead detail shows original description and conversation summary
- confirmed, inferred and unresolved facts are separated
- missing information is visible
- decision and policy references are visible to authorized users
- user-facing messages shown to the user are visible internally
- CRM views do not expose data to unauthorized users

---

## Bounded Context

```text
CRM Handover Context
```

The CRM Handover Context owns the internal representation of lead state, routing context, decision handover and operational next actions.

It does not own the original AI generation, decision evaluation, legal conclusion or final case handling.

---

## Domain Responsibilities

### Owns

```text
lead board read model
lead detail read model
CRM handover display
routing reason display
review reason display
missing information display
confirmed and inferred fact display
next action display
internal status visibility
```

### Must never own

```text
AI prompt execution
routing policy evaluation
final legal assessment
identity provider integration
document file processing
human reviewer final judgment
```

### Inbound Events

```text
LeadCreated
ConversationStepCompleted
DecisionRecorded
RoutingRecommendationCreated
HumanReviewRequested
CrmAssignmentSignalCreated
LeadHandoverSnapshotCreated
```

### Outbound Events

```text
LeadViewedInternally
CrmStatusChanged
InternalNoteAdded
LeadAssigned
FollowUpActionSelected
```

### Public Contracts

```text
CrmLeadBoardQuery
CrmLeadDetailQuery
CrmHandoverPresenter
CrmStatusService
LeadAssignmentService
```

### Internal Contracts

```text
LeadBoardReadModelBuilder
LeadDetailReadModelBuilder
HandoverSnapshotResolver
CrmAccessPolicy
CrmFilterResolver
```

---

## Domain Model

### Entities

```text
Lead
LeadHandoverSnapshot
LeadDecision
LeadReview
LeadFact
LeadConversation
AuditLog
```

### Value Objects

```text
LeadStatus
CrmQueue
RoutingOutcome
ReviewReason
NextAction
FactReliabilityState
CrmPriority
```

### Domain Services

```text
CrmLeadBoardService
CrmLeadDetailService
CrmAssignmentService
CrmAccessControlService
CrmAuditService
```

### Application Services

```text
ListCrmLeads
ShowCrmLeadDetail
UpdateCrmLeadStatus
AssignLeadToUser
AddInternalLeadNote
```

### Events

```text
CrmLeadBoardOpened
CrmLeadDetailViewed
LeadAssignedToUser
CrmStatusUpdated
InternalNoteCreated
```

---

## Architecture Decision Mapping

| Architecture Artifact | Implementation Meaning |
|---|---|
| docs/05-crm-workflow.md | Defines CRM workflow, queues and handover requirements |
| docs/12-data-dictionary.md | Defines fields needed for CRM read models |
| DEC-013 CRM Assignment | Defines CRM assignment and queue logic |
| DEC-005 Routing Recommendation | Provides routing outcome and reason |
| DEC-006 Human Review | Provides review state and reason |
| DEC-007 Information Quality | Provides missing information context |
| POL-001 Acceptance Policy | Provides acceptance outcome context |
| POL-002 Routing Policy | Provides route sequencing and priority |
| POL-005 Human Review Policy | Defines review trigger visibility |
| POL-007 Communication Policy | Requires user-facing message visibility and label separation |
| POL-008 AI Usage Policy | Requires separation of AI-generated and confirmed information |

---

## Proposed Implementation Components

Potential Laravel components:

```text
CrmLeadBoardController
CrmLeadDetailController
CrmLeadBoardService
CrmLeadDetailService
CrmLeadBoardQuery
CrmLeadDetailQuery
CrmHandoverPresenter
CrmAccessPolicy
LeadAssignmentService
InternalLeadNoteService
CrmAuditService
```

Potential frontend components:

```text
LeadBoardPage
LeadBoardColumn
LeadBoardFilters
LeadDetailPage
LeadFactPanel
LeadDecisionPanel
LeadConversationPanel
LeadMissingInformationPanel
LeadNextActionPanel
```

These names are suggestions and may be refined during implementation.

---

## Scope

This epic includes:

- internal CRM lead board
- lead status display
- queue or column display
- basic filtering
- lead detail page
- conversation summary display
- fact reliability display
- missing information display
- routing reason display
- human review reason display
- suggested next action display
- internal access control
- audit events for internal viewing and updates

---

## Out of Scope

This epic does not include:

- full case lifecycle management
- document upload and review UI
- MitID integration
- consent signing UI
- external authority submission
- advanced reporting dashboard
- automated caseworker assignment optimization
- final legal decision workflow

---

## Data Impact

This epic reads from:

```text
leads
lead_conversations
lead_facts
lead_missing_information
lead_scores
lead_decisions
lead_reviews
lead_handover_snapshots
audit_logs
```

This epic may update:

```text
leads.status
leads.current_review_required
leads.current_review_reason
audit_logs
future lead_assignments
future internal_notes
```

If internal notes or assignments are implemented in MVP, they should be introduced through explicit issues.

---

## API Boundaries

CRM APIs are internal-only.

They may expose decision, policy, review and AI-summary data to authorized internal users, but must not expose these details publicly.

Suggested internal endpoints:

```text
GET /internal/crm/leads
GET /internal/crm/leads/{lead}
PATCH /internal/crm/leads/{lead}/status
POST /internal/crm/leads/{lead}/notes
POST /internal/crm/leads/{lead}/assign
```

Endpoint design may be refined during implementation.

---

## Queue and Event Considerations

MVP can generate CRM read models synchronously.

Future versions may create or refresh handover snapshots asynchronously when decisions are recorded.

Potential future queue jobs:

```text
GenerateLeadHandoverSnapshot
RefreshCrmLeadBoardReadModel
NotifyInternalReviewQueue
```

---

## Cache Strategy

MVP should avoid caching CRM decision data unless performance requires it.

If caching is introduced later, invalidation must occur when:

- facts change
- decisions change
- review state changes
- lead status changes
- handover snapshot changes

---

## Non-Functional Requirements

This epic should be:

- clear for internal users
- access controlled
- auditable
- explainable
- testable
- resilient to incomplete data
- aligned with policy language boundaries

---

## Security and Privacy Considerations

CRM contains sensitive lead information.

Implementation must ensure:

- CRM routes require internal authentication
- access policies are enforced
- internal-only labels are not exposed publicly
- audit logs record important internal actions
- user-facing message history is visible for context
- AI-generated summaries are marked as AI-generated or unconfirmed where relevant
- no real data is used in tests or seeders

---

## Acceptance Criteria

EPIC-F is complete when:

- internal users can access a CRM lead board
- lead board shows status, queue, routing and review indicators
- lead detail shows original description and relevant conversation context
- facts are grouped by confirmed, inferred and unresolved state
- missing information is visible
- routing and review reasons are visible
- suggested next action is visible
- access control protects CRM views
- key internal actions are auditable

---

## Test Strategy

Minimum tests should cover:

- unauthorized users cannot access CRM routes
- authorized users can view lead board
- authorized users can view lead detail
- lead detail separates fact reliability states
- routing reason is visible internally
- review reason is visible internally
- user-facing messages are shown in internal context
- CRM status changes are audited if implemented

---

## Risks

| Risk | Mitigation |
|---|---|
| CRM becomes only a raw lead table | Use handover snapshot and decision panels |
| Internal users cannot understand AI output | Separate confirmed, inferred and unresolved facts |
| Sensitive data is exposed publicly | Restrict CRM routes and test authorization |
| Routing reasons are lost | Store and display lead_decisions and handover data |
| CRM UI encourages premature conclusions | Show review and confidence context clearly |

---

## Open Questions

- Should MVP CRM be a Kanban board, table view or hybrid?
- Should lead assignment be part of MVP 0.1 or MVP 0.2?
- Should internal notes be included immediately or deferred?
- Should lead detail use live data aggregation or handover snapshot only?
- Which user roles are required for MVP internal access?

---

## Proposed Issues

Initial issue candidates:

```text
ISSUE-055 - Define CRM MVP read model
ISSUE-056 - Create internal CRM access policy
ISSUE-057 - Create CRM lead board endpoint
ISSUE-058 - Create CRM lead detail endpoint
ISSUE-059 - Build CRM lead board UI
ISSUE-060 - Build CRM lead detail UI
ISSUE-061 - Display confirmed, inferred and unresolved facts
ISSUE-062 - Display routing and review reasons
ISSUE-063 - Display missing information and next action
ISSUE-064 - Add CRM audit events
ISSUE-065 - Add CRM access and display tests
```

---

## Dependencies

This epic depends on:

- EPIC-A Laravel Foundation
- EPIC-B Data Model and Migrations
- EPIC-C Digital First Conversation
- EPIC-D AI Screening Service outputs
- EPIC-E Decision and Routing Engine

This epic enables:

- EPIC-G Human Review Queue
- EPIC-H Security, Audit and Testing
- future assignment and internal notes workflows

---

## Implementation Sequence

Recommended sequence:

```text
1. Define CRM read model
2. Implement internal access policy
3. Implement lead board query and endpoint
4. Implement lead detail query and endpoint
5. Build lead board UI
6. Build lead detail UI
7. Add decision, fact and review panels
8. Add audit events
9. Add access and display tests
```

---

## Future Extensions

Future versions may add:

- advanced filters
- assignment and ownership
- internal notes
- SLA indicators
- CRM dashboards
- reporting exports
- notification rules
- review queue optimization
- case lifecycle transition

---

## Definition of Done

```text
CRM lead board exists
CRM lead detail exists
Internal access is enforced
Confirmed, inferred and unresolved facts are visible
Routing and review reasons are visible
Missing information and next action are visible
Internal actions are auditable
Core CRM tests pass
```
