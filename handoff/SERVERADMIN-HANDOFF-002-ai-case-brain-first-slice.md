# SERVERADMIN-HANDOFF-002 - AI Case Brain First Slice

Version: 1.0
Status: Ready for ServerAdmin
Scope: MVP 0.1

## Purpose

This note gives the short path for implementing AI Case Brain in the first conversation slice.

## Read First

```text
docs/ai-case-brain/BRAIN-000-ai-case-brain-index.md
docs/ai-case-brain/BRAIN-023-implementation-checklist.md
docs/ai-case-brain/BRAIN-024-fake-ai-brain-scenarios.md
docs/ai-case-brain/BRAIN-025-qa-and-test-matrix.md
```

## First Slice Goal

The first Brain implementation should support this flow:

```text
user message
fake AI signals
Brain rule evaluation
missing information prioritised
one next question selected
reason codes returned
validated JSON response
```

## Minimum Classes

For the first slice, create simple versions of:

```text
BrainEvaluationService
BrainInputBuilder
RuleEvaluationPipeline
MissingInformationPrioritiser
SmartQuestionSelector
BrainOutputValidator
ReasonCodeCollector
```

The classes can be small in the first version.

## Minimum Rules

Start with the minimum rules listed in:

```text
docs/ai-case-brain/BRAIN-023-implementation-checklist.md
```

Do not implement all 50 MVP rules at once unless the first slice already passes.

## First Fake Scenario

Start with:

```text
BRAIN-024 Scenario 1 - Diagnosis Delay Basic
```

Expected behavior:

- likely domain is patient injury
- likely case type is diagnosis delay
- event date is missing
- next question asks about time
- reason codes are returned
- extracted facts are unconfirmed

## First Feature Test

```text
tests/Feature/Api/ConversationStartTest.php
```

Minimum assertions:

- response is JSON
- lead is created
- conversation is created
- user message is stored
- next question exists
- only one question is returned
- reason codes are present

## Unit Tests To Add Early

```text
tests/Unit/Brain/SmartQuestionSelectorTest.php
tests/Unit/Brain/MissingInformationPrioritiserTest.php
tests/Unit/Brain/BrainOutputValidatorTest.php
tests/Unit/Brain/ReasonCodeCollectorTest.php
```

## Do Not Build Yet

Do not include in the first Brain slice:

- real AI provider
- document analysis
- full rule library
- MitID
- signing
- CRM board
- historical win probability

## Done Criteria

This handoff is complete when:

- Fake AI scenario 1 works
- Brain result validates
- one next question is returned
- reason codes are present
- ConversationStartTest can pass
