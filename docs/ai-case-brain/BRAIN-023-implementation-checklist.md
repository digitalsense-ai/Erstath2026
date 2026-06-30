# BRAIN-023 - Implementation Checklist

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This checklist defines the minimum work needed before AI Case Brain can support the first MVP conversation slice.

## First Goal

Given one user message, the system should be able to:

- classify the likely domain
- detect missing information
- select one next question
- return reason codes

## Required Reading

```text
docs/ai-case-brain/BRAIN-001-ai-case-brain-overview.md
docs/ai-case-brain/BRAIN-018-brain-output-model.md
docs/ai-case-brain/BRAIN-019-rule-evaluation-order.md
docs/ai-case-brain/BRAIN-020-first-50-mvp-rules-catalog.md
docs/ai-case-brain/BRAIN-022-mapping-brain-rules-to-laravel-services.md
```

## Minimum Services

```text
BrainEvaluationService
BrainInputBuilder
RuleEvaluationPipeline
MissingInformationPrioritiser
SmartQuestionSelector
BrainRoutingService
BrainConfidenceService
BrainOutputValidator
ReasonCodeCollector
BrainExplanationBuilder
```

For the first slice these can be simple classes.

## Minimum DTOs

```text
BrainInputData
BrainResultData
BrainScoreData
BrainRoutingData
BrainConfidenceData
BrainQuestionData
BrainExplanationData
```

## Minimum Rules For First Slice

```text
DOM-001 Healthcare Provider Mentioned
DOM-002 Treatment Event Mentioned
DOM-003 Injury Or Consequence Mentioned
TYPE-001 Diagnosis Delay
TL-001 Event Date Missing
INJ-009 No Specific Consequence
IQ-010 Critical Fact Missing
Q-001 Ask About Time First When Missing
Q-003 Ask About Consequence When Missing
CONF-003 Critical Facts Missing
AUD-001 Reason Codes Required
```

## Minimum Output

The brain result should include:

```text
case_domain
case_type
scores
confidence
routing
facts
missing_information
next_question
reason_codes
explanation
```

AI-created facts must start as:

```text
unconfirmed
```

## First Feature Test

```text
tests/Feature/Api/ConversationStartTest.php
```

Expected behavior:

- lead is created
- conversation is created
- first user message is stored
- fake AI output is processed
- brain result includes reason codes
- next question contains one question only
- missing information includes event_date when date is missing

## Done Criteria

AI Case Brain is ready for the first slice when:

- BrainEvaluationService returns a BrainResultData object
- BrainOutputValidator validates ranges and required fields
- SmartQuestionSelector returns one question only
- MissingInformationPrioritiser can prioritise event_date
- ReasonCodeCollector returns non-empty reason codes
- the first feature test can pass with Fake AI

## Not Included Yet

Do not implement in the first slice:

- full rule library
- real AI provider
- document analysis
- MitID
- signing
- advanced CRM routing
- historical win probability

## References

- BRAIN-020-first-50-mvp-rules-catalog.md
- BRAIN-022-mapping-brain-rules-to-laravel-services.md
- docs/api/API-READINESS-003-first-vertical-slice-plan.md
- docs/mvp-start/MVP-START-004-fake-ai-provider-implementation-plan.md
