# BRAIN-022 - Mapping Brain Rules to Laravel Services

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document maps AI Case Brain concepts to Laravel service classes.

The goal is to make the rule layer implementable without putting business logic in controllers or prompts.

## Implementation Principle

Controllers should not evaluate brain rules.

Prompts should not be the only place where rules exist.

The rule layer should live in services that can be tested independently.

## Recommended Service Structure

```text
App\Services\Brain\
  BrainEvaluationService
  BrainInputBuilder
  BrainOutputValidator
  RuleEvaluationPipeline
  ReasonCodeCollector
  MissingInformationPrioritiser
  SmartQuestionSelector
  BrainRoutingService
  BrainConfidenceService
  BrainExplanationBuilder
```

## Core Service Responsibilities

### BrainEvaluationService

Main orchestrator.

Responsibilities:

- receive structured input
- run rule pipeline
- return BrainResult DTO
- ensure output validation

### BrainInputBuilder

Builds the input from:

- user message
- conversation history
- known facts
- existing lead state
- previous questions

### RuleEvaluationPipeline

Runs rule stages in the order defined by BRAIN-019.

Responsibilities:

- evaluate rule groups
- collect rule effects
- resolve conflicts
- pass intermediate state forward

### ReasonCodeCollector

Collects reason codes from all rule stages.

Responsibilities:

- avoid duplicates
- preserve order where useful
- expose main reason codes for API output

### MissingInformationPrioritiser

Creates and sorts missing information.

Responsibilities:

- identify critical missing facts
- assign priority
- avoid already resolved items
- prepare candidates for SmartQuestionSelector

### SmartQuestionSelector

Selects one next question.

Responsibilities:

- ask only one question
- avoid repeated questions
- use priority order
- return null when routing should happen instead

### BrainRoutingService

Maps scores, confidence and rule flags to routing targets.

Responsibilities:

- continue conversation
- request documents
- human review
- onboarding later
- guide away

### BrainConfidenceService

Calculates confidence and confidence band.

Responsibilities:

- combine positive and negative signals
- lower confidence for missing or conflicting facts
- trigger review when below threshold

### BrainExplanationBuilder

Builds explanation output.

Responsibilities:

- internal summary
- user-safe summary
- score drivers
- review reasons

### BrainOutputValidator

Validates final Brain output.

Responsibilities:

- required fields
- score ranges
- confidence ranges
- enum values
- one-question rule
- unconfirmed AI facts by default

## Suggested DTOs

```text
App\Data\Brain\BrainInputData
App\Data\Brain\BrainResultData
App\Data\Brain\BrainScoreData
App\Data\Brain\BrainRoutingData
App\Data\Brain\BrainConfidenceData
App\Data\Brain\BrainQuestionData
App\Data\Brain\BrainExplanationData
```

## Suggested Rule Classes

For MVP, use grouped rule classes:

```text
DomainClassificationRules
CaseTypeClassificationRules
TimeLimitRules
InjuryConsequenceRules
CausationSignalRules
EvidenceDocumentRules
InformationQualityRules
CommercialValueRules
SmartQuestionRules
HumanReviewRules
GuideAwayRules
ConfidenceRules
AuditExplanationRules
```

Later, high-value rules can become individual classes.

## First Vertical Slice Integration

For the first vertical slice:

```text
ConversationController
↓
ConversationSessionService
↓
FakeAiScreeningService
↓
BrainEvaluationService
↓
ConversationTurnResource
```

## Service Boundary Rule

ConversationSessionService owns conversation state.

BrainEvaluationService owns reasoning.

FakeAiScreeningService owns deterministic fake AI output.

The controller owns none of these behaviors.

## Test Strategy

Feature tests:

- API creates conversation and returns next question
- validation error returns standard JSON
- fake AI fallback behaves safely

Unit tests:

- BrainEvaluationService returns expected routing
- SmartQuestionSelector returns one question
- MissingInformationPrioritiser sorts critical facts
- BrainOutputValidator rejects invalid output
- BrainRoutingService routes low confidence to review

## References

- BRAIN-018-brain-output-model.md
- BRAIN-019-rule-evaluation-order.md
- BRAIN-020-first-50-mvp-rules-catalog.md
- BRAIN-021-mapping-brain-rules-to-json-contracts.md
- API-READINESS-005-controller-service-boundary-rules.md
