# RULEBOOK-000 - AI Case Brain Rulebook Index

Version: 1.1
Status: Active Draft
Scope: Long-term AI Case Brain rule library

## Purpose

This is the index for the long-term AI Case Brain Rulebook.

The rulebook is the structured knowledge base for how ErstatningsHjaelp should screen, prioritise, route and explain potential patient compensation cases.

It extends the MVP-first Brain documents without blocking the first vertical slice.

## Relationship To AI Case Brain

AI Case Brain defines the architecture, output model, evaluation order and first MVP rule set.

The Rulebook defines the expanded long-term rule library and maps it to future Laravel implementation.

Use together:

```text
docs/ai-case-brain/BRAIN-000-ai-case-brain-index.md
docs/rulebook/RULEBOOK-000-index.md
```

## Rulebook Reading Order

Start with:

```text
RULEBOOK-001-rulebook-principles.md
RULEBOOK-002-rule-id-and-versioning-standard.md
RULEBOOK-003-rule-authoring-template.md
```

Then use the rule groups:

```text
RULEBOOK-010-domain-rules.md
RULEBOOK-020-case-type-rules.md
RULEBOOK-030-time-limit-rules.md
RULEBOOK-040-injury-and-consequence-rules.md
RULEBOOK-050-causation-rules.md
RULEBOOK-060-evidence-and-document-rules.md
RULEBOOK-070-information-quality-rules.md
RULEBOOK-080-commercial-value-rules.md
RULEBOOK-090-smart-question-rules.md
RULEBOOK-100-routing-rules.md
RULEBOOK-110-human-review-rules.md
RULEBOOK-120-guide-away-rules.md
RULEBOOK-130-confidence-rules.md
RULEBOOK-140-audit-and-explanation-rules.md
```

Then read the implementation mapping:

```text
RULEBOOK-150-rule-to-code-mapping.md
```

## MVP vs Full Rulebook

MVP implementation should start with:

```text
docs/ai-case-brain/BRAIN-020-first-50-mvp-rules-catalog.md
```

The full rulebook is for controlled expansion after the first slice works.

## Rule Count Target

Long-term target:

```text
150-250 explicit rules
```

Suggested distribution:

```text
Domain rules                   10-20
Case type rules                20-30
Time limit rules               10-15
Injury and consequence rules   20-30
Causation rules                10-20
Evidence and document rules    10-20
Information quality rules      10-20
Commercial value rules         10-20
Smart question rules           20-40
Routing rules                  10-20
Human review rules             10-20
Guide-away rules                5-10
Confidence rules                5-10
Audit and explanation rules     5-10
```

## Implementation Rule

Do not implement all rulebook rules before the first vertical slice works.

First implement:

```text
Fake AI
AI Case Brain minimum rules
ConversationStartTest
```

Then expand rulebook coverage sprint by sprint.

## Code Mapping

Use the code mapping document before turning Rulebook groups into Laravel services:

```text
docs/rulebook/RULEBOOK-150-rule-to-code-mapping.md
```

It maps rule groups to:

```text
BrainEvaluationService
RuleEvaluationPipeline
SmartQuestionSelector
BrainRoutingService
BrainConfidenceService
BrainOutputValidator
ReasonCodeCollector
BrainExplanationBuilder
```

## Related Documents

```text
docs/ai-case-brain/BRAIN-004-rule-library-structure.md
docs/ai-case-brain/BRAIN-019-rule-evaluation-order.md
docs/ai-case-brain/BRAIN-020-first-50-mvp-rules-catalog.md
docs/ai-case-brain/BRAIN-023-implementation-checklist.md
docs/rulebook/RULEBOOK-150-rule-to-code-mapping.md
```
