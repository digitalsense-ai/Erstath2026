# EPIC-G - Human Review Queue

Version: 1.0 Draft
Status: Planned
Owner: Product / Operations / Engineering
Domain: Human Review / CRM / Internal Workflow
Sprint Alignment: SPRINT-004 CRM Handover
Related: BACKLOG-000 Traceable Backlog Index, docs/05-crm-workflow.md, docs/12-data-dictionary.md, DEC-006 Human Review, DEC-013 CRM Assignment, POL-003 Confidence Policy, POL-005 Human Review Policy, POL-007 Communication Policy, POL-008 AI Usage Policy

## Purpose

This epic defines the Human Review Queue for ErstatningsHjaelp.

The goal is to ensure that leads requiring human judgment are clearly identified, queued, explained and resolved by internal users before the platform takes the next significant step.

Human review is a safety mechanism, not a rejection.

---

## Business Objectives

This epic enables the platform to:

- prevent unsafe automatic routing
- support responsible handling of uncertain or sensitive leads
- make review reasons visible to internal users
- reduce the risk of premature guide-away decisions
- ensure serious or unclear cases are not mishandled
- create an auditable path from AI-assisted screening to human action
- support internal quality control and future learning

---

## Success Metrics

This epic is successful when:

- leads can be marked as requiring human review
- review reasons are visible in CRM
- reviewers can see confirmed, inferred and unresolved facts
- reviewers can select a review outcome
- review outcomes are stored and auditable
- guide-away, identity, consent or document steps are blocked when review is required
- user-facing review messages follow communication policy

---

## Bounded Context

```text
Human Review Context
```

The Human Review Context owns the workflow for human evaluation of leads that cannot be routed safely by automated rules alone.

It does not own AI interpretation, routing policy definition, final legal conclusions or full case lifecycle management.

---

## Domain Responsibilities

### Owns

```text
review queue
review reason visibility
review assignment state
review outcome capture
review audit trail
reviewer action recording
review blocking rules for unsafe next steps
```

### Must never own

```text
AI prompt execution
initial conversation flow
policy rule definition
final legal assessment
identity provider integration
document file processing
external submission workflow
```

### Inbound Events

```text
HumanReviewRequired
RoutingRecommendationCreated
CrmAssignmentSignalCreated
LeadHandoverSnapshotCreated
ReviewerOpenedLead
```

### Outbound Events

```text
HumanReviewStarted
HumanReviewCompleted
ReviewerRequestedMoreInformation
ReviewerMarkedQualified
ReviewerGuidedElsewhere
ReviewerClosedLead
```

### Public Contracts

```text
HumanReviewQueueQuery
HumanReviewDetailQuery
HumanReviewOutcomeService
HumanReviewAssignmentService
```

### Internal Contracts

```text
ReviewReasonResolver
ReviewOutcomeRecorder
ReviewAccessPolicy
ReviewAuditRecorder
ReviewBlockingRuleChecker
```

---

## Domain Model

### Entities

```text
LeadReview
Lead
LeadDecision
LeadFact
LeadHandoverSnapshot
AuditLog
```

### Value Objects

```text
ReviewReason
ReviewStatus
ReviewOutcome
ReviewerId
ReviewPriority
ReviewBlockingState
```

### Domain Services

```text
HumanReviewQueueService
HumanReviewOutcomeService
ReviewBlockingService
ReviewAuditService
ReviewAssignmentService
```

### Application Services

```text
ListHumanReviewQueue
ShowHumanReviewCase
StartHumanReview
CompleteHumanReview
RecordReviewOutcome
```

### Events

```text
HumanReviewQueued
HumanReviewStarted
HumanReviewOutcomeRecorded
HumanReviewCompleted
ReviewAuditRecorded
```

---

## Architecture Decision Mapping

| Architecture Artifact | Implementation Meaning |
|---|---|
| DEC-006 Human Review | Defines when human review is required |
| DEC-005 Routing Recommendation | Provides routing context before review |
| DEC-007 Information Quality | Provides missing information context |
| DEC-013 CRM Assignment | Places review cases into CRM queues |
| POL-003 Confidence Policy | Defines confidence-based review triggers |
| POL-005 Human Review Policy | Primary policy for review workflow and outcomes |
| POL-007 Communication Policy | Controls user-facing review messages |
| POL-008 AI Usage Policy | Ensures AI cannot bypass review triggers |
| docs/05-crm-workflow.md | Defines CRM review visibility requirements |
| docs/12-data-dictionary.md | Defines lead_reviews and related data structures |

---

## Proposed Implementation Components

Potential Laravel components:

```text
HumanReviewQueueController
HumanReviewDetailController
HumanReviewQueueService
HumanReviewOutcomeService
HumanReviewAssignmentService
ReviewBlockingService
ReviewAuditService
HumanReviewPolicy
```

Potential frontend components:

```text
HumanReviewQueuePage
HumanReviewCaseCard
HumanReviewDetailPanel
ReviewReasonPanel
ReviewOutcomeForm
ReviewFactComparisonPanel
ReviewAuditTimeline
```

These names are suggestions and may be refined during implementation.

---

## Scope

This epic includes:

- internal human review queue
- review detail view or review section inside CRM detail
- review reason display
- review status tracking
- review outcome capture
- reviewer notes
- blocking unsafe next steps while review is pending
- review audit events
- tests for review routing and outcomes

---

## Out of Scope

This epic does not include:

- full legal case assessment workflow
- external communication automation
- document analysis UI
- MitID integration
- consent signing implementation
- advanced reviewer workload optimization
- automated model retraining from review outcomes

---

## Data Impact

This epic reads from:

```text
leads
lead_reviews
lead_decisions
lead_facts
lead_missing_information
lead_handover_snapshots
audit_logs
```

This epic may update:

```text
lead_reviews.status
lead_reviews.outcome
lead_reviews.review_notes
lead_reviews.assigned_to
lead_reviews.completed_at
leads.status
audit_logs
```

---

## API Boundaries

Human review APIs are internal-only.

Suggested internal endpoints:

```text
GET /internal/reviews
GET /internal/reviews/{lead}
POST /internal/reviews/{lead}/start
POST /internal/reviews/{lead}/complete
POST /internal/reviews/{lead}/outcome
```

Public users should not see raw review labels or internal review notes.

---

## Queue and Event Considerations

MVP can handle review queue updates synchronously.

Future queue jobs may include:

```text
NotifyReviewerOfNewReview
RefreshReviewQueueReadModel
CreateReviewFollowUpReminder
```

---

## Cache Strategy

MVP should avoid caching review state.

Review state must remain accurate because it can block guide-away, identity, consent or document collection.

---

## Non-Functional Requirements

This epic should be:

- access controlled
- auditable
- clear for reviewers
- safe against premature routing
- testable
- resilient to incomplete data
- aligned with review policy

---

## Security and Privacy Considerations

Human review views may expose sensitive information.

Implementation must ensure:

- internal authentication is required
- role-based access can be added later
- review notes are internal only
- review outcomes are auditable
- AI-generated facts are clearly marked
- reviewer actions do not expose internal labels to users
- no real data is used in tests or seeders

---

## Acceptance Criteria

EPIC-G is complete when:

- human review queue exists for authorized internal users
- pending review leads are visible
- review reason is visible
- relevant facts and missing information are visible
- reviewer can record outcome
- review outcome updates review state
- review outcome is audited
- pending review blocks unsafe automated next steps
- tests cover review queue and outcomes

---

## Test Strategy

Minimum tests should cover:

- lead requiring review appears in review queue
- unauthorized users cannot access review queue
- review detail shows review reason
- reviewer can start review
- reviewer can complete review with outcome
- review outcome is stored
- audit log is created
- pending review blocks guide-away or identity flow
- user-facing messages do not expose internal review labels

---

## Risks

| Risk | Mitigation |
|---|---|
| Review becomes a hidden dead-end | Require review status and next action visibility |
| Review reasons are unclear | Store and display review_reason and policy refs |
| Review notes leak to users | Keep review notes internal-only and test access |
| Automated routing bypasses review | Centralize review blocking rules |
| Review workload becomes unmanageable later | Add future assignment and priority extensions |

---

## Open Questions

- Should human review be a separate page or part of CRM lead detail in MVP?
- Which review outcomes should be allowed in MVP 0.1?
- Should reviewers be assignable in MVP or later?
- Should review notes be required for all outcomes?
- Should completed reviews be immutable or editable with audit history?

---

## Proposed Issues

Initial issue candidates:

```text
ISSUE-066 - Define human review MVP workflow
ISSUE-067 - Create human review queue query
ISSUE-068 - Create human review detail endpoint
ISSUE-069 - Build human review queue UI
ISSUE-070 - Build review outcome form
ISSUE-071 - Implement review blocking rules
ISSUE-072 - Persist review outcomes and notes
ISSUE-073 - Add review audit events
ISSUE-074 - Add human review access tests
ISSUE-075 - Add review outcome tests
```

---

## Dependencies

This epic depends on:

- EPIC-A Laravel Foundation
- EPIC-B Data Model and Migrations
- EPIC-E Decision and Routing Engine
- EPIC-F CRM Lead Board and Detail
- POL-005 Human Review Policy

This epic enables:

- safer guide-away handling
- internal quality control
- future reviewer assignment workflows
- future review analytics

---

## Implementation Sequence

Recommended sequence:

```text
1. Define review workflow states and outcomes
2. Implement review queue read model
3. Implement review detail endpoint
4. Add review UI or CRM detail section
5. Implement outcome recording
6. Implement review blocking rules
7. Add audit events
8. Add access and outcome tests
```

---

## Future Extensions

Future versions may add:

- reviewer assignment
- reviewer workload dashboards
- SLA timers
- review templates
- reviewer quality metrics
- review-to-policy feedback loop
- review analytics
- escalation levels

---

## Definition of Done

```text
Human review queue exists
Review reasons are visible
Reviewer outcomes can be recorded
Pending review blocks unsafe next steps
Review actions are auditable
Access control is enforced
Core review tests pass
```
