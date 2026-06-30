# BRAIN-025 - QA and Test Matrix

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document maps AI Case Brain behavior to QA expectations and automated tests.

The goal is to make the rule layer testable before and after the real AI provider is added.

## QA Principle

Every important brain behavior should be testable through at least one of these:

- feature test
- unit test
- business test case
- fake AI scenario
- contract validation test

## Test Layers

### Feature Tests

Feature tests validate API behavior.

Examples:

- start conversation
- continue conversation
- validation error
- fake AI fallback
- human review fallback

### Unit Tests

Unit tests validate services and rules.

Examples:

- rule evaluation order
- smart question selection
- missing information priority
- confidence calculation
- routing decision

### Contract Tests

Contract tests validate JSON shape.

Examples:

- Brain result has required fields
- scores are 0-100
- confidence is 0-1
- facts are unconfirmed by default
- next question contains one question only

## Matrix

| Behavior | Brain Docs | Test Type | Suggested Test |
|---|---|---|---|
| Classify patient injury domain | BRAIN-005 | Unit | DomainClassificationRulesTest |
| Detect diagnosis delay | BRAIN-006 | Unit | CaseTypeClassificationRulesTest |
| Ask date question when date missing | BRAIN-007, BRAIN-013 | Unit + Feature | SmartQuestionSelectorTest, ConversationStartTest |
| Accept approximate date | BRAIN-007 | Unit | TimeLimitRulesTest |
| Detect serious consequence | BRAIN-008 | Unit | InjuryConsequenceRulesTest |
| Detect unclear causation | BRAIN-009 | Unit | CausationSignalRulesTest |
| Detect document availability | BRAIN-010 | Unit | EvidenceDocumentRulesTest |
| Calculate information quality | BRAIN-011 | Unit | InformationQualityRulesTest |
| Keep commercial value internal | BRAIN-012 | Unit + Feature | CommercialValueRulesTest |
| Prevent repeated questions | BRAIN-013 | Unit + Feature | SmartQuestionSelectorTest |
| Route low confidence to review | BRAIN-014, BRAIN-016 | Unit | BrainRoutingServiceTest |
| Guide weak case away respectfully | BRAIN-015 | Feature | GuideAwayFlowTest |
| Validate confidence range | BRAIN-016, BRAIN-018 | Contract | BrainOutputValidatorTest |
| Preserve reason codes | BRAIN-017 | Contract | ReasonCodeCollectorTest |
| Validate full output model | BRAIN-018 | Contract | BrainOutputValidatorTest |
| Run rules in fixed order | BRAIN-019 | Unit | RuleEvaluationPipelineTest |
| Support first 50 MVP rules | BRAIN-020 | Unit | MvpRulesCatalogCoverageTest |
| Map to JSON contracts | BRAIN-021 | Contract | BrainContractMappingTest |
| Map to Laravel services | BRAIN-022 | Unit | BrainServiceBoundaryTest |
| Support first implementation checklist | BRAIN-023 | Feature | ConversationStartTest |
| Support fake scenarios | BRAIN-024 | Feature + Unit | FakeAiBrainScenarioTest |

## First Required Tests

For the first vertical slice, implement these tests first:

```text
tests/Feature/Api/ConversationStartTest.php
tests/Unit/Brain/SmartQuestionSelectorTest.php
tests/Unit/Brain/MissingInformationPrioritiserTest.php
tests/Unit/Brain/BrainOutputValidatorTest.php
tests/Unit/Brain/ReasonCodeCollectorTest.php
```

## Minimum Assertions For ConversationStartTest

The first conversation feature test should assert:

- response is JSON
- lead is created
- conversation is created
- user message is stored
- assistant message is returned
- next question exists
- only one question is returned
- missing information includes event_date when date is missing
- reason_codes is not empty
- facts are unconfirmed by default

## Fake Scenario Coverage

Use BRAIN-024 scenarios for deterministic tests:

```text
Scenario 1 - Diagnosis Delay Basic
Scenario 2 - Missing Consequence
Scenario 3 - Surgical Error
Scenario 4 - Out Of Scope
Scenario 5 - Serious Case With Low Confidence
Scenario 6 - Invalid Fake AI Output
Scenario 7 - Repeated Question Prevention
```

## Definition Of Done

AI Case Brain QA baseline is ready when:

- first feature test passes with Fake AI
- key brain services have unit tests
- output validator rejects invalid shape
- one-question rule is tested
- reason codes are tested
- fallback behavior is tested

## References

- BRAIN-018-brain-output-model.md
- BRAIN-020-first-50-mvp-rules-catalog.md
- BRAIN-024-fake-ai-brain-scenarios.md
- docs/mvp-start/MVP-START-003-first-feature-test-plan.md
