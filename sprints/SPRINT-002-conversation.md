# SPRINT-002 - Conversation

Version: 1.0 Draft
Status: Planned
Owner: Product / Delivery / Engineering
Sprint Type: Feature
Related Epics: EPIC-C Digital First Conversation, EPIC-D AI Screening Service
Related: BACKLOG-000 Traceable Backlog Index, DOC-020 Experience Architecture, DOC-021 Digital First Conversation Flow, DOC-022 Conversation Patterns, DOC-023 Tone of Voice Guide, docs/04-conversation-engine.md, backlog/epics/EPIC-C-digital-first-conversation.md, backlog/epics/EPIC-D-ai-screening-service.md

## Purpose

This sprint implements the MVP digital-first conversation flow and the first AI-assisted screening support needed to understand user input safely.

The sprint should allow a user to start with a natural description, receive a respectful response, confirm or correct the system understanding, and provide missing information without feeling like they are completing a long static form.

SPRINT-002 must keep AI as an assistant to the flow, not as an uncontrolled decision-maker.

---

## Sprint Goal

```text
Create the MVP conversation flow that captures user input, stores structured facts, confirms understanding and uses validated AI support for fact and missing-information extraction.
```

---

## Business Value

This sprint should create value by:

- reducing friction at first contact
- creating a more human and respectful intake experience
- capturing the user's story in their own words
- turning conversation input into structured facts
- identifying missing information early
- preparing clean inputs for later decision and CRM work
- keeping AI output validated and auditable

---

## Scope

This sprint includes:

- conversation response contract
- conversation state model
- conversation session controller/service
- user and assistant message persistence
- original description storage
- empathy reflection step
- understanding confirmation and correction flow
- fact extraction stub or validated AI extraction
- fact merge behavior
- missing information detection
- Smart Skip behavior
- AI service contract and fake AI provider
- AI output schema and validation
- AI run logging for conversation-related AI calls
- conversation flow tests

---

## Out of Scope

This sprint does not include:

- final scoring logic
- final routing decisions
- CRM board UI
- human review queue UI
- document upload
- MitID or identity verification
- consent signing
- final legal assessment
- production AI model tuning

---

## Related Architecture

```text
DOC-020 - Experience Architecture
DOC-021 - Digital First Conversation Flow
DOC-022 - Conversation Patterns
DOC-023 - Tone of Voice Guide
docs/04-conversation-engine.md - Conversation Engine
docs/12-data-dictionary.md - Data Dictionary
```

---

## Related Patterns

```text
PAT-001 - Speak Human Store Structured
PAT-002 - Understanding Before Questioning
PAT-003 - Confirm Before Classify
PAT-004 - Never Ask Twice
PAT-005 - Explain Why
PAT-006 - Smart Skip
PAT-007 - One Thought Per Screen
PAT-009 - Human Review Bridge
```

---

## Related Decisions

```text
DEC-001 - Start Conversation
DEC-002 - Empathy Reflection
DEC-003 - Confirm Understanding
DEC-004 - Smart Skip Decision
DEC-007 - Information Quality
```

---

## Related Policies

```text
POL-003 - Confidence Policy
POL-007 - Communication Policy
POL-008 - AI Usage Policy
```

---

## Included Epics

```text
EPIC-C - Digital First Conversation
EPIC-D - AI Screening Service
```

---

## Included Issues

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

## Data Impact

This sprint reads and writes:

```text
leads
lead_conversations
lead_facts
lead_missing_information
ai_runs
audit_logs
```

This sprint prepares later use of:

```text
lead_scores
lead_decisions
lead_reviews
lead_handover_snapshots
```

AI-inferred facts must not be stored as confirmed facts unless the user has confirmed or corrected them.

---

## Implementation Sequence

Recommended sequence:

```text
1. Define conversation response contract
2. Create conversation state model
3. Implement conversation session controller and service
4. Persist conversation messages
5. Implement original description and empathy reflection
6. Implement confirmation/correction flow
7. Implement fact extraction stub and merge behavior
8. Implement missing information and Smart Skip services
9. Define AI screening contract and fake provider
10. Add AI output schema and validation
11. Log AI runs
12. Add safe AI failure behavior
13. Add conversation and AI service tests
14. Document implementation notes
```

---

## Dependencies

This sprint depends on:

- SPRINT-000 Foundation
- SPRINT-001 Data Model
- EPIC-C Digital First Conversation
- EPIC-D AI Screening Service
- Experience Pack
- Pattern Library
- Policy Pack

This sprint enables:

- SPRINT-003 Decision Engine
- SPRINT-004 CRM Handover
- SPRINT-005 Security, Audit and Testing

---

## Acceptance Criteria

This sprint is complete when:

- a user can start a conversation with free text
- the original description is persisted
- conversation messages are persisted
- the system can produce or store an empathy reflection
- the user can confirm or correct the system understanding
- facts are stored with source, confidence and confirmation state
- missing information can be detected and stored
- Smart Skip avoids repeated questions
- AI output is validated before use
- AI runs are logged when AI is used
- fake AI provider can be used in tests
- conversation can reach a state ready for later decision evaluation

---

## Test Requirements

Tests should verify:

- conversation can start
- user messages are stored
- assistant messages are stored
- empathy reflection is generated or recorded
- understanding can be confirmed
- understanding can be corrected
- facts are stored as inferred until confirmed
- missing information is detected
- Smart Skip prevents repeated questions
- invalid AI output is rejected
- fake AI provider works in tests
- failed AI call returns safe fallback behavior

---

## Security and Privacy Considerations

SPRINT-002 must ensure:

- user-provided text is handled as sensitive data
- AI input is minimized where possible
- raw AI output is not shown directly to users
- user-facing messages follow Communication Policy
- internal labels are not exposed to users
- AI-inferred facts are distinguishable from confirmed facts
- no real data is used in test fixtures

---

## Risks

| Risk | Mitigation |
|---|---|
| Conversation becomes a long form in disguise | Follow DOC-021 and PAT-007 |
| AI output is treated as truth | Apply confirmation state and validation |
| User sees internal labels | Validate user-facing messages |
| Smart Skip skips required information | Store skip reasons and test required paths |
| Tests depend on real AI | Use fake AI provider |

---

## Open Questions

- Should empathy reflection be AI-generated in MVP or template-assisted?
- Should question definitions live in code, config or database records?
- Should AI output validation use DTOs, JSON schema or Laravel validation rules?
- How much raw AI output should be stored in MVP?
- Should Danish copy live in translation files from day one?

---

## Review Checklist

Before closing this sprint, confirm:

```text
Architecture references are still valid
Conversation patterns are followed
AI policy constraints are followed
Tests pass
No real data is introduced
No final routing or legal decision is implemented
Documentation was updated if needed
ServerAdmin handoff impact was considered
```

---

## Definition of Done

```text
Sprint goal achieved
Conversation flow works end-to-end for MVP intake
Messages are persisted
Facts and missing information are structured
Understanding can be confirmed or corrected
AI output validation exists
Fake AI provider works for tests
Core conversation and AI tests pass
Next sprint dependencies are clear
```
