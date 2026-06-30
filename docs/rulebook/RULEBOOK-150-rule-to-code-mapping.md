# RULEBOOK-150 - Rule-to-Code Mapping

Version: 1.0
Status: Active Draft
Scope: Rulebook to Laravel implementation

## Purpose

This document maps Rulebook groups to the Laravel service classes that should implement or orchestrate them.

The goal is to make the transition from documentation to code direct and predictable.

## Core Principle

Rules should not live in controllers.

Controllers should call application services. Application services should call Brain services. Brain services should evaluate rules and return structured DTOs.

## High-Level Flow

```text
ConversationController
↓
ConversationSessionService
↓
FakeAiScreeningService or AiProviderService
↓
BrainEvaluationService
↓
RuleEvaluationPipeline
↓
Rule groups
↓
BrainResultData
↓
Conversation response resource
```

## Main Brain Services

Recommended service namespace:

```text
App\Services\Brain
```

Recommended services:

```text
BrainEvaluationService
BrainInputBuilder
RuleEvaluationPipeline
ReasonCodeCollector
MissingInformationPrioritiser
SmartQuestionSelector
BrainRoutingService
BrainConfidenceService
BrainExplanationBuilder
BrainOutputValidator
```

## Recommended DTO Namespace

```text
App\Data\Brain
```

Recommended DTOs:

```text
BrainInputData
BrainResultData
BrainScoreData
BrainRoutingData
BrainConfidenceData
BrainQuestionData
BrainExplanationData
BrainMissingInformationData
BrainFactData
```

## Rule Group Mapping

| Rulebook Group | Rule Prefix | Suggested Laravel Owner |
|---|---:|---|
| RULEBOOK-010 Domain Rules | DOM | DomainClassificationRules |
| RULEBOOK-020 Case Type Rules | TYPE | CaseTypeClassificationRules |
| RULEBOOK-030 Time Limit Rules | TL | TimeLimitRules |
| RULEBOOK-040 Injury and Consequence Rules | INJ | InjuryConsequenceRules |
| RULEBOOK-050 Causation Rules | CAUS | CausationSignalRules |
| RULEBOOK-060 Evidence and Document Rules | DOC | EvidenceDocumentRules |
| RULEBOOK-070 Information Quality Rules | IQ | InformationQualityRules |
| RULEBOOK-080 Commercial Value Rules | CV | CommercialValueRules |
| RULEBOOK-090 Smart Question Rules | Q | SmartQuestionRules / SmartQuestionSelector |
| RULEBOOK-100 Routing Rules | ROUTE | BrainRoutingService |
| RULEBOOK-110 Human Review Rules | HR | HumanReviewRules |
| RULEBOOK-120 Guide-Away Rules | GA | GuideAwayRules |
| RULEBOOK-130 Confidence Rules | CONF | BrainConfidenceService |
| RULEBOOK-140 Audit and Explanation Rules | AUD | BrainExplanationBuilder / ReasonCodeCollector |

## Suggested Rule Class Namespace

For the first implementation, grouped classes are enough:

```text
App\Services\Brain\Rules\DomainClassificationRules
App\Services\Brain\Rules\CaseTypeClassificationRules
App\Services\Brain\Rules\TimeLimitRules
App\Services\Brain\Rules\InjuryConsequenceRules
App\Services\Brain\Rules\CausationSignalRules
App\Services\Brain\Rules\EvidenceDocumentRules
App\Services\Brain\Rules\InformationQualityRules
App\Services\Brain\Rules\CommercialValueRules
App\Services\Brain\Rules\SmartQuestionRules
App\Services\Brain\Rules\HumanReviewRules
App\Services\Brain\Rules\GuideAwayRules
```

Later, rules can be split into individual classes if complexity grows.

## Individual Rule Class Pattern

When individual classes are needed, use this pattern:

```text
App\Services\Brain\Rules\TimeLimit\EventDateMissingRule
App\Services\Brain\Rules\SmartQuestion\AskTimeFirstWhenMissingRule
App\Services\Brain\Rules\HumanReview\SeriousConsequenceWithMissingFactsRule
```

Each individual rule should expose a consistent method shape, for example:

```php
public function evaluate(BrainState $state): BrainRuleResult
```

## Brain State

The pipeline should pass a mutable or replaceable BrainState object between rule groups.

Suggested state fields:

```text
input
facts
missing_information
scores
confidence
routing
reason_codes
review_flags
guide_away_flags
next_question
explanation
validation_errors
```

## Rule Result

Each rule group should return a structured result containing:

```text
matched_rules
new_facts
missing_information
score_changes
routing_flags
review_flags
reason_codes
notes
```

## Evaluation Order

Use the order from:

```text
docs/ai-case-brain/BRAIN-019-rule-evaluation-order.md
```

Short version:

```text
input validation
safety guardrails
domain
case type
time limit
injury/consequence
causation
evidence/documents
information quality
commercial value
case strength
confidence
missing information
smart question
routing
human review
guide-away
audit/explanation
output validation
```

## First Slice Implementation

For the first vertical slice, implement only:

```text
BrainEvaluationService
BrainInputBuilder
RuleEvaluationPipeline
MissingInformationPrioritiser
SmartQuestionSelector
BrainOutputValidator
ReasonCodeCollector
```

Minimum rule groups:

```text
DomainClassificationRules
CaseTypeClassificationRules
TimeLimitRules
InformationQualityRules
SmartQuestionRules
ConfidenceRules
AuditExplanationRules
```

## Tests

Minimum tests:

```text
tests/Feature/Api/ConversationStartTest.php
tests/Unit/Brain/SmartQuestionSelectorTest.php
tests/Unit/Brain/MissingInformationPrioritiserTest.php
tests/Unit/Brain/BrainOutputValidatorTest.php
tests/Unit/Brain/ReasonCodeCollectorTest.php
tests/Unit/Brain/RuleEvaluationPipelineTest.php
```

## Do Not Implement Yet

Do not implement the full 150-250 rules before the first slice passes.

Do not build:

```text
real AI provider
document analysis
MitID
signing
advanced CRM routing
historical win probability
```

## References

- RULEBOOK-000-index.md
- RULEBOOK-003-rule-authoring-template.md
- docs/ai-case-brain/BRAIN-018-brain-output-model.md
- docs/ai-case-brain/BRAIN-019-rule-evaluation-order.md
- docs/ai-case-brain/BRAIN-022-mapping-brain-rules-to-laravel-services.md
- docs/ai-case-brain/BRAIN-023-implementation-checklist.md
