# EPIC-D - AI Screening Service

Version: 1.0 Draft
Status: Planned
Owner: Product / AI Governance / Engineering
Domain: AI / Screening / Backend
Sprint Alignment: SPRINT-002 Conversation and SPRINT-003 Decision Engine
Related: BACKLOG-000 Traceable Backlog Index, docs/03-scoring-engine.md, docs/04-conversation-engine.md, docs/12-data-dictionary.md, POL-003 Confidence Policy, POL-007 Communication Policy, POL-008 AI Usage Policy, DEC-002 Empathy Reflection, DEC-003 Confirm Understanding, DEC-004 Smart Skip Decision, DEC-007 Information Quality

## Purpose

This epic defines the AI Screening Service for ErstatningsHjaelp.

The goal is to use AI to help interpret user descriptions, extract possible facts, identify missing information, generate structured summaries and support the screening conversation.

AI must assist the platform. It must not become an uncontrolled decision-maker.

---

## Business Objectives

EPIC-D enables the platform to:

- understand free-text user descriptions faster
- convert natural language into structured screening data
- identify missing information early
- support better follow-up questions
- reduce manual reconstruction work for CRM users
- provide internal summaries and risk notes
- prepare clean inputs for scoring and routing

---

## Success Metrics

This epic is successful when:

- AI output is validated before use
- extracted facts are stored with confidence and confirmation state
- missing information is stored in structured form
- AI-generated summaries are distinguishable from confirmed facts
- AI runs are logged with prompt and validation metadata
- raw AI output is never shown directly to users without validation
- AI recommendations cannot bypass policies or human review triggers

---

## Bounded Context

```text
AI Screening Context
```

The AI Screening Context is responsible for:

- interpreting user text
- proposing facts
- proposing missing information
- generating internal summaries
- generating or supporting empathy reflection
- validating AI outputs
- logging AI runs

It is not responsible for:

- final routing
- final acceptance decisions
- human review outcomes
- identity or consent decisions
- document collection decisions

---

## Domain Model

### Entities

```text
AiRun
LeadFact
MissingInformationItem
ConversationMessage
```

### Value Objects

```text
AiPromptName
AiPromptVersion
AiModelName
AiOutputValidationResult
ExtractedFactCandidate
ConfidenceValue
ConfirmationState
MissingInformationCandidate
```

### Domain Services

```text
AiScreeningService
AiOutputValidationService
FactCandidateNormalizer
MissingInformationDetector
ScreeningSummaryService
PromptContextBuilder
```

### Application Services

```text
RunInitialScreening
RunEmpathyReflectionSupport
RunMissingInformationAnalysis
RunScreeningSummaryGeneration
```

### Events

```text
AiScreeningRequested
AiScreeningCompleted
AiOutputValidationFailed
FactCandidateExtracted
MissingInformationDetected
ScreeningSummaryGenerated
```

These names are implementation suggestions and may be refined.

---

## Architecture Decision Mapping

| Architecture Artifact | Implementation Meaning |
|---|---|
| POL-008 AI Usage Policy | Defines permitted and prohibited AI use |
| POL-003 Confidence Policy | Defines how confidence affects confirmation and routing |
| POL-007 Communication Policy | Prevents raw or unsafe user-facing AI output |
| DEC-002 Empathy Reflection | AI may support reflective response generation |
| DEC-003 Confirm Understanding | AI-inferred facts require confirmation where important |
| DEC-004 Smart Skip Decision | AI may support question relevance and skip logic |
| DEC-007 Information Quality | AI may identify missing information but not decide final routing |
| docs/12-data-dictionary.md | Defines AI run, fact and missing information storage |

---

## Scope

EPIC-D includes:

- AI run abstraction
- prompt context building
- AI output schema definition
- AI output validation
- fact candidate extraction
- missing information candidate extraction
- internal summary generation
- AI run logging
- safe error handling for failed AI calls
- non-AI fallback considerations

---

## Out of Scope

EPIC-D does not include:

- final legal conclusions
- final acceptance decisions
- direct guide-away decisions
- identity requests
- consent requests
- document upload or document analysis
- production model tuning
- automated learning from historical outcomes

---

## AI Usage Rules

AI may produce:

```text
fact candidates
missing information candidates
summary drafts
empathy reflection drafts
question suggestions
confidence estimates
```

AI must not independently produce:

```text
final legal assessment
final acceptance outcome
final guide-away message without policy validation
identity or consent request
unvalidated routing decision
```

---

## Output Validation Requirements

AI outputs must be validated before use.

Validation should check:

- required fields exist
- enum values are allowed
- confidence values are valid
- user-facing text follows policy constraints
- no prohibited legal or medical conclusions are present
- internal labels are not included in user-facing messages
- fact candidates include source and confidence metadata

Invalid AI output should be stored for debugging only if safe and must not be shown to users.

---

## Prompt Governance

Prompts must reference relevant architecture and policies.

Prompt files should include:

```text
prompt_name
prompt_version
purpose
allowed outputs
prohibited outputs
related DEC/POL references
expected JSON schema
```

Prompts must not override policies.

---

## Data Impact

EPIC-D uses these data structures:

```text
ai_runs
lead_facts
lead_missing_information
lead_conversations
lead_decisions if AI output affects a decision
lead_handover_snapshots later
```

AI run records should include:

```text
provider
model
prompt_name
prompt_version
input_hash
input_json if safe
output_json
output_validated
validation_errors
tokens_input
tokens_output
success
error_message
created_at
```

---

## Non-Functional Requirements

The AI Screening Service should be:

- auditable
- policy-constrained
- testable with fake AI responses
- resilient to malformed AI output
- able to run in safe local development mode
- replaceable if AI provider changes
- isolated from final decision logic

---

## Security and Privacy Considerations

Implementation must ensure:

- AI input is minimized
- no unnecessary sensitive data is sent to AI providers
- no real test data is used
- raw AI output is not publicly exposed
- prompt and output logs are access controlled
- failed AI output does not break the user flow unsafely

---

## Acceptance Criteria

EPIC-D is complete when:

- AI screening can be invoked through an internal service abstraction
- AI output schema is defined
- AI output validation exists
- fact candidates can be stored with confidence and confirmation state
- missing information candidates can be stored
- AI runs are logged
- fake AI responses can be used in tests
- invalid AI output is handled safely
- AI cannot bypass decision or policy layers

---

## Test Strategy

Minimum tests should cover:

- valid AI output is accepted
- invalid AI output is rejected
- extracted facts are stored as inferred, not confirmed
- confidence values are stored
- missing information is stored
- AI run is logged
- prohibited user-facing wording is blocked
- service works with fake AI provider
- failed AI call returns safe fallback behavior

---

## Risks

| Risk | Mitigation |
|---|---|
| AI output is treated as truth | Store facts as inferred and apply confirmation policy |
| AI produces unsafe user-facing text | Validate output against Communication Policy |
| AI becomes hidden decision-maker | Keep routing in EPIC-E and policies |
| Sensitive data is over-sent to provider | Apply data minimization rules |
| Tests become dependent on real AI | Use fake provider and fixtures |

---

## Open Questions

- Should MVP use a real AI provider immediately or begin with fake provider contracts?
- Should prompt definitions live in `/prompts`, config files or database records?
- Should AI output schemas be implemented as PHP DTOs, JSON schemas or validation rules?
- Should AI run logging store full output or minimized structured output?
- Should empathy reflection be AI-generated or template-assisted in MVP?

---

## Proposed Issues

Initial issue candidates:

```text
ISSUE-032 - Define AI screening service contract
ISSUE-033 - Create fake AI provider for local testing
ISSUE-034 - Define initial AI output schema
ISSUE-035 - Implement AI output validation service
ISSUE-036 - Implement prompt context builder
ISSUE-037 - Implement fact candidate extraction handling
ISSUE-038 - Implement missing information detection handling
ISSUE-039 - Implement AI run logging
ISSUE-040 - Add safe AI failure handling
ISSUE-041 - Add AI screening service tests
ISSUE-042 - Add prompt governance documentation
```

---

## Dependencies

EPIC-D depends on:

- EPIC-A Laravel Foundation
- EPIC-B Data Model and Migrations
- EPIC-C Digital First Conversation
- POL-008 AI Usage Policy

EPIC-D enables:

- EPIC-E Decision and Routing Engine
- EPIC-F CRM Lead Board and Detail
- EPIC-G Human Review Queue

---

## Implementation Sequence

Recommended sequence:

```text
1. Define AI service contract
2. Add fake provider
3. Define output schema
4. Implement output validation
5. Implement prompt context builder
6. Store AI runs
7. Store fact and missing information candidates
8. Add safe failure handling
9. Add tests
```

---

## Future Extensions

Future versions may add:

- prompt version management UI
- multi-provider AI routing
- document analysis prompts
- evaluation datasets
- AI quality dashboards
- human feedback loops
- model comparison tests

---

## Definition of Done

```text
AI screening service contract exists
Fake provider works for tests
AI output validation exists
AI runs are logged
Facts are stored with confidence and confirmation state
Missing information is stored
Unsafe output is blocked
AI does not bypass decision or policy layers
Core tests pass
```
