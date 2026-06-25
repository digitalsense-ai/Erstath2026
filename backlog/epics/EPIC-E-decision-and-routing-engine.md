# EPIC-E - Decision and Routing Engine

Version: 1.0 Draft
Status: Planned
Owner: Product / Architecture / Engineering
Domain: Decision / Routing / Policy
Sprint Alignment: SPRINT-003 Decision Engine
Related: BACKLOG-000 Traceable Backlog Index, docs/03-scoring-engine.md, docs/31-acceptance-and-routing-architecture.md, docs/12-data-dictionary.md, DEC-000 Decision Catalog, POL-000 Policy Catalog

## Purpose

This epic defines the Decision and Routing Engine for ErstatningsHjaelp.

The goal is to convert structured facts, scores, confidence, information quality and policy rules into auditable decisions and responsible routing recommendations.

The engine must ensure that scores do not become direct outcomes, and that routing remains explainable, policy-constrained and safe for users.

---

## Business Objectives

EPIC-E enables the platform to:

- separate scoring from final routing
- make decision outcomes auditable
- apply policies consistently
- identify when more information is needed
- identify when human review is required
- prevent premature guide-away decisions
- prevent premature identity, consent or document steps
- create structured CRM handover data

---

## Success Metrics

This epic is successful when:

- decisions are stored as explicit records
- routing recommendations reference decision and policy rules
- low confidence and serious indicators can trigger human review
- missing information can block premature routing
- guide-away cannot happen without policy checks
- identity, consent and document gates are not triggered by default
- CRM receives routing reason and next action
- decision behavior is testable without real AI

---

## Bounded Context

```text
Decision Context
```

The Decision Context owns:

- information quality decisions
- acceptance policy evaluation
- confidence policy checks
- human review trigger checks
- routing recommendations
- identity/consent/document gate recommendations
- decision records
- CRM assignment signals

The Decision Context must never own:

- conversation UI
- AI prompt generation
- raw AI provider calls
- CRM presentation UI
- final legal conclusions
- external authority submission

---

## Domain Responsibilities

### Owns

```text
decision evaluation
policy application
routing recommendation
review trigger evaluation
decision audit data
```

### Must never own

```text
AI output generation
user interface rendering
document file processing
MitID provider integration
human reviewer final judgment
```

### Inbound Events

```text
ConversationStepCompleted
FactsUpdated
FactsConfirmed
AiOutputValidated
ScoresCalculated
MissingInformationDetected
```

### Outbound Events

```text
DecisionRecorded
InformationQualityEvaluated
AcceptancePolicyEvaluated
RoutingRecommendationCreated
HumanReviewRequested
CrmAssignmentRecommended
```

### Public Contracts

```text
DecisionEngine
RoutingRecommendationService
PolicyEvaluationService
HumanReviewTriggerService
CrmAssignmentRecommendationService
```

### Internal Contracts

```text
InformationQualityEvaluator
AcceptancePolicyEvaluator
ConfidencePolicyEvaluator
RoutingPriorityResolver
DecisionRecorder
```

---

## Domain Model

### Entities

```text
LeadDecision
LeadScore
LeadReview
MissingInformationItem
LeadFact
```

### Value Objects

```text
DecisionId
PolicyId
DecisionOutcome
RoutingOutcome
ReviewReason
ConfidenceBand
InformationQualityState
PolicyEvaluationResult
RoutingReason
```

### Domain Services

```text
DecisionEngine
InformationQualityDecisionService
AcceptancePolicyDecisionService
RoutingRecommendationService
HumanReviewTriggerService
RoutingPriorityResolver
CrmAssignmentDecisionService
```

### Application Services

```text
EvaluateLeadInformationQuality
EvaluateLeadAcceptance
CreateRoutingRecommendation
RequestHumanReviewIfNeeded
CreateCrmAssignmentSignal
```

### Events

```text
InformationQualityEvaluated
AcceptanceDecisionCreated
RoutingRecommendationCreated
HumanReviewRequired
CrmAssignmentSignalCreated
DecisionAuditRecorded
```

---

## Architecture Decision Mapping

| Architecture Artifact | Implementation Meaning |
|---|---|
| DEC-005 Routing Recommendation | Defines routing recommendation decision point |
| DEC-006 Human Review | Defines when human review is required |
| DEC-007 Information Quality | Defines missing/insufficient information decisions |
| DEC-008 Acceptance Policy Decision | Defines acceptance policy decision point |
| DEC-009 Identity Gate | Prevents identity from being default next step |
| DEC-010 Consent Gate | Controls consent timing |
| DEC-011 Document Readiness | Controls document readiness timing |
| DEC-012 Guide Elsewhere | Controls respectful guide-away |
| DEC-013 CRM Assignment | Defines CRM assignment output |
| POL-001 Acceptance Policy | Defines acceptance constraints |
| POL-002 Routing Policy | Defines route priority and sequence |
| POL-003 Confidence Policy | Defines confidence gates |
| POL-004 Identity and Consent Policy | Defines identity and consent constraints |
| POL-005 Human Review Policy | Defines review triggers |
| POL-006 Document Collection Policy | Defines document constraints |
| POL-007 Communication Policy | Defines user-facing route explanations |
| POL-008 AI Usage Policy | Ensures AI does not bypass decisions |

---

## Scope

EPIC-E includes:

- decision service contracts
- information quality evaluation
- acceptance policy evaluation
- confidence policy evaluation
- human review trigger evaluation
- routing recommendation generation
- decision persistence
- routing audit data
- CRM assignment signal generation
- decision tests

---

## Out of Scope

EPIC-E does not include:

- AI prompt execution
- conversation UI
- CRM frontend implementation
- MitID provider integration
- consent signing implementation
- document upload or document analysis
- final legal assessment
- automated learning from historical outcomes

---

## Routing Sequence

The implementation should follow this sequence:

```text
1. Gather current lead state
2. Evaluate information quality
3. Evaluate acceptance policy
4. Evaluate confidence constraints
5. Evaluate human review triggers
6. Resolve routing priority
7. Create routing recommendation
8. Create CRM assignment signal
9. Store decision records
10. Emit relevant events
```

---

## Routing Priority Rules

When multiple outcomes are possible, follow policy priority:

```text
human_review_required
collect_more_information
guide_elsewhere_respectfully
continue
prepare_documents_later
identity_step_when_relevant
consent_step_when_relevant
crm_assignment
```

This order may be refined by POL-002 and POL-005.

---

## Data Impact

EPIC-E uses these structures:

```text
leads
lead_facts
lead_missing_information
lead_scores
lead_decisions
lead_reviews
lead_handover_snapshots
audit_logs
```

Minimum decision record fields:

```text
lead_id
decision_id
decision_version
outcome
reason
confidence
input_snapshot
policy_refs
pattern_refs
user_facing_message
created_at
```

---

## API Boundaries

The Decision Context should expose internal application services, not raw database access.

Possible internal service APIs:

```text
DecisionEngine::evaluateLead(LeadId $leadId): DecisionResult
RoutingRecommendationService::recommend(LeadState $state): RoutingRecommendation
HumanReviewTriggerService::evaluate(LeadState $state): ReviewTriggerResult
```

External/public API endpoints should not expose raw decision internals directly to users.

CRM-specific APIs may expose internal data to authorized users only.

---

## Queue and Event Considerations

Initial MVP can evaluate decisions synchronously.

Future versions may use queues for:

```text
AI screening completed -> decision evaluation
Decision recorded -> CRM handover snapshot generation
Human review required -> internal notification
```

MVP should avoid queue complexity unless necessary.

---

## Cache Strategy

MVP should avoid caching decision outcomes unless needed.

If caching is introduced later, cached decisions must include:

- decision version
- policy version
- input snapshot hash
- invalidation rules when facts or scores change

---

## Non-Functional Requirements

The Decision and Routing Engine must be:

- deterministic where possible
- auditable
- testable without AI provider calls
- policy-constrained
- version-aware
- explainable in CRM
- safe against missing or contradictory data

---

## Security and Privacy Considerations

Decision records may contain sensitive context.

Implementation must ensure:

- decision input snapshots are minimized
- CRM access controls protect internal decision details
- user-facing messages do not expose raw labels
- audit logs do not leak sensitive data publicly
- policy references are stored without exposing sensitive reasoning to users

---

## Acceptance Criteria

EPIC-E is complete when:

- decision services exist
- information quality can be evaluated
- acceptance policy can be evaluated
- routing recommendations can be created
- human review triggers can be evaluated
- decisions are persisted in `lead_decisions`
- review requirements are persisted in `lead_reviews`
- routing data can feed CRM handover
- policy references are stored
- test cases cover key routing paths

---

## Test Strategy

Minimum tests should cover:

- sufficient information routes forward
- missing critical information routes to collect_more_information
- low confidence triggers human review when appropriate
- serious indicators block automatic guide-away
- guide-away does not expose raw labels
- identity is not default after screening
- document absence does not automatically stop the flow
- decisions are stored with decision and policy references
- CRM assignment signal is produced

---

## Risks

| Risk | Mitigation |
|---|---|
| Score thresholds become hidden decisions | Store decisions separately and apply policies |
| Routing becomes hard-coded and untraceable | Require DEC and POL references in decision records |
| Human review triggers are bypassed | Centralize review trigger evaluation |
| CRM cannot explain why a lead was routed | Store routing reason and input snapshot |
| Decision logic becomes too complex too early | Implement MVP route set first |

---

## Open Questions

- Should policy rules be implemented as code classes, config files or database records in MVP?
- Should decision versions match DEC file versions or code release versions?
- Should input snapshots store full JSON or minimized references?
- Should routing recommendation and CRM assignment be separate records or one decision output?
- Should user-facing messages be generated in this context or delegated to a communication service?

---

## Proposed Issues

Initial issue candidates:

```text
ISSUE-043 - Define decision engine service contracts
ISSUE-044 - Implement LeadState read model
ISSUE-045 - Implement information quality evaluator
ISSUE-046 - Implement acceptance policy evaluator
ISSUE-047 - Implement confidence policy evaluator
ISSUE-048 - Implement human review trigger service
ISSUE-049 - Implement routing priority resolver
ISSUE-050 - Persist lead decision records
ISSUE-051 - Persist human review requirements
ISSUE-052 - Generate CRM assignment signal
ISSUE-053 - Add decision audit events
ISSUE-054 - Add decision engine tests
```

---

## Dependencies

EPIC-E depends on:

- EPIC-A Laravel Foundation
- EPIC-B Data Model and Migrations
- EPIC-C Digital First Conversation
- EPIC-D AI Screening Service inputs
- Policy Pack v1.0 Draft

EPIC-E enables:

- EPIC-F CRM Lead Board and Detail
- EPIC-G Human Review Queue
- EPIC-H Security, Audit and Testing

---

## Implementation Sequence

Recommended sequence:

```text
1. Define decision contracts
2. Create LeadState read model
3. Implement information quality evaluator
4. Implement acceptance and confidence evaluators
5. Implement human review trigger service
6. Implement routing resolver
7. Persist decisions and review requirements
8. Generate CRM assignment signal
9. Add audit events
10. Add tests
```

---

## Future Extensions

Future versions may add:

- policy rule engine
- policy versioning UI
- decision simulation tools
- reviewer feedback loop
- decision analytics
- route performance dashboards
- configurable business acceptance thresholds

---

## Definition of Done

```text
Decision contracts exist
Decision evaluation works from stored lead state
Routing recommendations are policy-constrained
Human review triggers are enforced
Decisions are persisted and auditable
CRM assignment signal can be generated
Core routing tests pass
AI cannot bypass the decision layer
```
