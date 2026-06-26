# SPRINT-003 - Decision Engine

Version: 1.0 Draft
Status: Planned
Owner: Product / Delivery / Engineering
Sprint Type: Feature
Related Epics: EPIC-E Decision and Routing Engine
Related: BACKLOG-000 Traceable Backlog Index, docs/03-scoring-engine.md, docs/31-acceptance-and-routing-architecture.md, docs/12-data-dictionary.md, DEC-000 Decision Catalog, POL-000 Policy Catalog, backlog/epics/EPIC-E-decision-and-routing-engine.md

## Purpose

This sprint implements the MVP Decision and Routing Engine for ErstatningsHjaelp.

The sprint should turn structured lead state, facts, scores, confidence, missing information and policy constraints into auditable decision records and routing recommendations.

SPRINT-003 must keep scoring, AI interpretation and routing decisions separated. Scores and AI outputs are inputs. They are not final outcomes.

---

## Sprint Goal

```text
Create a policy-constrained decision and routing engine that evaluates lead state, stores decisions, triggers human review when needed and creates CRM-ready routing recommendations.
```

---

## Business Value

This sprint should create value by:

- making routing explainable and auditable
- preventing scores from becoming hidden decisions
- preventing AI from bypassing policy rules
- identifying when more information is required
- identifying when human review is required
- creating structured CRM assignment signals
- reducing unsafe guide-away or premature next-step behavior

---

## Scope

This sprint includes:

- decision engine service contracts
- LeadState read model
- information quality evaluator
- acceptance policy evaluator
- confidence policy evaluator
- human review trigger service
- routing priority resolver
- decision persistence
- review requirement persistence
- CRM assignment signal generation
- decision audit events
- decision engine tests

---

## Out of Scope

This sprint does not include:

- AI prompt execution
- conversation UI
- CRM frontend implementation
- human review UI
- MitID provider integration
- consent signing implementation
- document upload or document analysis
- final legal assessment
- automated learning from historical outcomes

---

## Related Architecture

```text
docs/03-scoring-engine.md - Scoring Engine
docs/31-acceptance-and-routing-architecture.md - Acceptance and Routing Architecture
docs/12-data-dictionary.md - Data Dictionary
DOC-003 - Architecture Index
```

---

## Related Patterns

```text
PAT-003 - Confirm Before Classify
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
DEC-008 - Acceptance Policy
DEC-009 - Identity Gate
DEC-010 - Consent Gate
DEC-011 - Document Readiness
DEC-012 - Guide Elsewhere
DEC-013 - CRM Assignment
```

---

## Related Policies

```text
POL-001 - Acceptance Policy
POL-002 - Routing Policy
POL-003 - Confidence Policy
POL-004 - Identity and Consent Policy
POL-005 - Human Review Policy
POL-006 - Document Collection Policy
POL-007 - Communication Policy
POL-008 - AI Usage Policy
```

---

## Included Epics

```text
EPIC-E - Decision and Routing Engine
```

---

## Included Issues

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

## Data Impact

This sprint reads from:

```text
leads
lead_facts
lead_missing_information
lead_scores
ai_runs
```

This sprint writes to:

```text
lead_decisions
lead_reviews
lead_handover_snapshots later if needed
audit_logs
```

Decision records must store enough context to explain why a routing recommendation was created.

---

## Implementation Sequence

Recommended sequence:

```text
1. Define decision service contracts
2. Create LeadState read model
3. Implement information quality evaluator
4. Implement acceptance policy evaluator
5. Implement confidence policy evaluator
6. Implement human review trigger service
7. Implement routing priority resolver
8. Persist decision records
9. Persist review requirements
10. Generate CRM assignment signal
11. Add audit events
12. Add decision engine tests
```

---

## Dependencies

This sprint depends on:

- SPRINT-000 Foundation
- SPRINT-001 Data Model
- SPRINT-002 Conversation outputs
- EPIC-E Decision and Routing Engine
- Decision Pack
- Policy Pack

This sprint enables:

- SPRINT-004 CRM Handover
- SPRINT-005 Security, Audit and Testing
- concrete CRM and review workflows

---

## Acceptance Criteria

This sprint is complete when:

- decision service contracts exist
- LeadState can be built from stored lead data
- information quality can be evaluated
- acceptance policy can be evaluated
- confidence constraints can be evaluated
- human review triggers can be evaluated
- routing priority can be resolved
- decisions are stored in `lead_decisions`
- review requirements are stored in `lead_reviews`
- CRM assignment signal can be generated
- decision audit events are recorded
- key routing paths are covered by tests

---

## Test Requirements

Tests should verify:

- sufficient information routes forward
- missing critical information routes to collect more information
- low confidence can trigger human review
- serious indicators block automatic guide-away
- guide-away does not expose raw labels
- identity is not default after screening
- consent is not requested prematurely
- document absence does not automatically stop the flow
- decisions are stored with decision and policy references
- CRM assignment signal is produced

---

## Security and Privacy Considerations

SPRINT-003 must ensure:

- decision input snapshots are minimized
- user-facing routing messages do not expose internal labels
- AI outputs cannot bypass decision services
- sensitive decision context is available only internally
- audit logs do not expose sensitive details publicly
- no real data is used in tests or fixtures

---

## Risks

| Risk | Mitigation |
|---|---|
| Scores become hidden final decisions | Store decisions separately and require policy evaluation |
| AI bypasses routing policy | Keep AI as input only and test decision boundaries |
| Human review triggers are skipped | Centralize review trigger service |
| CRM cannot explain routing | Store decision reasons and policy refs |
| Identity or documents are requested too early | Apply DEC-009, DEC-010 and DEC-011 gates |

---

## Open Questions

- Should policy rules be implemented as code classes, config files or database records in MVP?
- Should decision versions match DEC file versions or code release versions?
- Should input snapshots store full JSON or minimized references?
- Should routing recommendation and CRM assignment be separate outputs?
- Should user-facing route messages be generated here or delegated to a communication service?

---

## Review Checklist

Before closing this sprint, confirm:

```text
Architecture references are still valid
Decision and policy mappings are followed
Tests pass
AI does not make final decisions
No real data is introduced
No CRM UI or review UI was added accidentally
Documentation was updated if needed
ServerAdmin handoff impact was considered
```

---

## Definition of Done

```text
Sprint goal achieved
Decision contracts exist
LeadState read model exists
Decision evaluation works from stored data
Routing is policy-constrained
Human review triggers are enforced
Decision and review records are auditable
Core decision tests pass
Next sprint dependencies are clear
```
