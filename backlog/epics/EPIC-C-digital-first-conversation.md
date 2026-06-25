# EPIC-C - Digital First Conversation

Version: 1.0 Draft
Status: Planned
Owner: Product / Delivery / Engineering
Domain: Conversation / UX / Backend
Sprint Alignment: SPRINT-002 Conversation
Related: BACKLOG-000 Traceable Backlog Index, DOC-020 Experience Architecture, DOC-021 Digital First Conversation Flow, DOC-022 Conversation Patterns, DOC-023 Tone of Voice Guide, PAT-001 through PAT-007, DEC-001 through DEC-004, POL-003 Confidence Policy, POL-007 Communication Policy, POL-008 AI Usage Policy

## Purpose

This epic implements the digital-first conversation flow for ErstatningsHjaelp.

The goal is to let users begin with a natural free-text description instead of a long form, then guide them through a respectful, structured and auditable screening conversation.

The platform should speak human to the user and store structured data internally.

---

## Business Objectives

EPIC-C enables the platform to:

- reduce friction at first contact
- create a more respectful intake experience
- capture the user's story in their own words
- confirm understanding before classification
- avoid asking the same information twice
- collect structured screening data gradually
- prepare data for scoring, decisions and CRM handover

---

## Success Metrics

This epic is successful when:

- users can start with free text
- the system stores the original description
- the system can produce an empathy reflection
- the user can confirm or correct the understanding
- questions are selected based on known and missing information
- repeated questions are avoided
- user-facing text follows communication policy
- conversation state is persisted and testable

---

## Scope

EPIC-C includes:

- conversation start flow
- free-text intake
- original description storage
- empathy reflection step
- confirmation or correction step
- structured question selection
- Smart Skip behavior
- conversation state persistence
- user-facing message persistence
- basic frontend/API flow for conversation steps

---

## Out of Scope

EPIC-C does not include:

- final scoring logic
- final routing decisions
- CRM board UI
- human review queue UI
- real document upload
- MitID integration
- consent signing
- final legal conclusions
- advanced AI document analysis

These are handled in later epics.

---

## Architecture Decision Mapping

| Architecture Artifact | Implementation Meaning |
|---|---|
| DOC-020 Experience Architecture | Defines the digital-first and trust-first experience principles |
| DOC-021 Digital First Conversation Flow | Defines the main conversation sequence |
| DOC-022 Conversation Patterns | Defines reusable interaction patterns |
| DOC-023 Tone of Voice Guide | Defines user-facing wording principles |
| PAT-001 Speak Human Store Structured | User sees natural language, system stores structured data |
| PAT-002 Understanding Before Questioning | System reflects before asking too much |
| PAT-003 Confirm Before Classify | Important inferred facts require confirmation |
| PAT-004 Never Ask Twice | Known information should not be asked again |
| PAT-006 Smart Skip | Questions are skipped, postponed or asked based on context |
| PAT-007 One Thought Per Screen | Conversation should avoid overloaded messages |
| DEC-001 Start Conversation | Starts the intake flow |
| DEC-002 Empathy Reflection | Produces first reflective response |
| DEC-003 Confirm Understanding | Handles confirmation or correction |
| DEC-004 Smart Skip Decision | Selects next question or skips it |
| POL-003 Confidence Policy | Controls when inference requires confirmation |
| POL-007 Communication Policy | Controls user-facing messages |
| POL-008 AI Usage Policy | Controls AI output, validation and logging |

---

## Proposed Implementation Components

Potential Laravel components:

```text
ConversationController
ConversationSessionService
ConversationStateMachine
ConversationMessageRepository
ConversationQuestionService
EmpathyReflectionService
UnderstandingConfirmationService
SmartSkipService
UserFacingMessageValidator
ConversationAuditService
```

Potential value objects or DTOs:

```text
ConversationState
ConversationStep
UserDescriptionInput
EmpathyReflectionResult
ConfirmationResult
QuestionCandidate
SmartSkipDecisionResult
```

Potential events:

```text
ConversationStarted
UserDescriptionSubmitted
EmpathyReflectionGenerated
UnderstandingConfirmed
UnderstandingCorrected
QuestionAsked
QuestionSkipped
ConversationStepCompleted
```

These names are suggestions and may be refined during implementation.

---

## Data Impact

EPIC-C depends on data structures from EPIC-B:

```text
leads
lead_conversations
lead_facts
lead_missing_information
lead_decisions
ai_runs
audit_logs
```

Minimum stored data:

- original user description
- all user-facing messages shown
- system conversation steps
- extracted or inferred facts where applicable
- confirmation state
- skipped questions and reasons
- AI run metadata if AI is used

---

## Non-Functional Requirements

The conversation flow should be:

- understandable
- respectful
- auditable
- testable
- resilient to incomplete answers
- compatible with non-AI fallback where possible
- protected from exposing internal labels

---

## Security and Privacy Considerations

The conversation may contain sensitive personal information.

Implementation must ensure:

- no real user data in tests or fixtures
- no internal system labels shown to users
- AI inputs are minimized where possible
- user-facing messages are stored for audit
- raw AI output is validated before display
- conversation data is not publicly exposed

---

## Acceptance Criteria

EPIC-C is complete when:

- a lead can start a conversation with free text
- the original description is persisted
- the system can generate or store an empathy reflection
- the user can confirm or correct the reflection
- known facts can be stored with confirmation state
- the next question can be selected from missing information
- Smart Skip decisions are persisted or auditable
- user-facing messages follow communication policy
- basic conversation flow tests pass

---

## Test Strategy

Minimum tests should cover:

- starting a conversation
- storing a user message
- storing an assistant message
- generating or recording an empathy reflection
- confirming understanding
- correcting understanding
- skipping a known question
- asking a missing-information question
- preventing raw internal labels from appearing in user-facing messages
- storing conversation decisions and audit events

---

## Risks

| Risk | Mitigation |
|---|---|
| Conversation becomes a long form in disguise | Follow DOC-021 and PAT-007 |
| AI-inferred facts are treated as confirmed | Apply PAT-003 and POL-003 |
| User sees internal labels | Apply POL-007 and message validation |
| Smart Skip skips too much | Store skip reasons and test required questions |
| AI output is displayed without validation | Apply POL-008 output validation rules |

---

## Open Questions

- Should conversation state be stored as explicit enum values or derived from latest step?
- Should question definitions live in config files, database records or code?
- Should empathy reflection be AI-generated in MVP or template-assisted?
- How much AI output should be logged in MVP?
- Should user correction update facts immediately or create pending correction records?

---

## Proposed Issues

Initial issue candidates:

```text
ISSUE-021 - Define conversation state model
ISSUE-022 - Create conversation start endpoint
ISSUE-023 - Store original user description
ISSUE-024 - Implement empathy reflection step
ISSUE-025 - Implement understanding confirmation and correction
ISSUE-026 - Implement question candidate model
ISSUE-027 - Implement Smart Skip service
ISSUE-028 - Persist skipped question reasons
ISSUE-029 - Add user-facing message validation
ISSUE-030 - Add conversation flow tests
ISSUE-031 - Add audit events for conversation flow
```

---

## Dependencies

EPIC-C depends on:

- EPIC-A Laravel Foundation
- EPIC-B Data Model and Migrations
- Experience Pack
- Pattern Library
- Decision Pack
- Policy Pack

EPIC-C enables:

- EPIC-D AI Screening Service
- EPIC-E Decision and Routing Engine
- EPIC-F CRM Lead Board and Detail

---

## Implementation Sequence

Recommended sequence:

```text
1. Define conversation states and steps
2. Implement start endpoint and persistence
3. Store original description
4. Implement empathy reflection
5. Implement confirmation/correction flow
6. Implement question candidate selection
7. Implement Smart Skip behavior
8. Add message validation
9. Add tests and audit events
```

---

## Future Extensions

Future versions may add:

- multilingual conversation support
- adaptive question paths
- richer frontend conversation UI
- conversation recovery/resume links
- advanced prompt versioning
- analytics for repeated question rate
- A/B testing for tone and question order

---

## Definition of Done

```text
Conversation can start from free text
Original description is stored
Empathy reflection is stored or generated
User can confirm or correct understanding
Questions can be asked or skipped based on context
User-facing messages are policy-compliant
Conversation state is auditable
Core tests pass
```
