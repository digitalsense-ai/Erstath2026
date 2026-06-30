# BRAIN-000 - AI Case Brain Index

Version: 1.0
Status: Active Draft
Scope: AI Case Brain v1.0

## Purpose

This is the navigation index for AI Case Brain.

AI Case Brain defines the structured decision intelligence layer behind intake, screening, routing, smart questions, human review and explanation.

## Reading Order

Start with:

```text
BRAIN-001-ai-case-brain-overview.md
BRAIN-002-decision-principles-and-guardrails.md
BRAIN-003-routing-model.md
BRAIN-004-rule-library-structure.md
```

Then read the rule groups:

```text
BRAIN-005-domain-classification-rules.md
BRAIN-006-case-type-classification-rules.md
BRAIN-007-time-limit-rules.md
BRAIN-008-injury-and-consequence-rules.md
BRAIN-009-causation-signal-rules.md
BRAIN-010-evidence-and-document-rules.md
BRAIN-011-information-quality-rules.md
BRAIN-012-commercial-value-rules.md
BRAIN-013-smart-question-rules.md
BRAIN-014-human-review-escalation-rules.md
BRAIN-015-guide-away-rules.md
BRAIN-016-confidence-model-rules.md
BRAIN-017-audit-and-explanation-rules.md
```

Then read the implementation and test guidance:

```text
BRAIN-018-brain-output-model.md
BRAIN-019-rule-evaluation-order.md
BRAIN-020-first-50-mvp-rules-catalog.md
BRAIN-021-mapping-brain-rules-to-json-contracts.md
BRAIN-022-mapping-brain-rules-to-laravel-services.md
BRAIN-023-implementation-checklist.md
BRAIN-024-fake-ai-brain-scenarios.md
BRAIN-025-qa-and-test-matrix.md
```

## Document Map

| Document | Purpose |
|---|---|
| BRAIN-001 | Overall concept and scope |
| BRAIN-002 | Decision principles and guardrails |
| BRAIN-003 | Routing targets and routing logic |
| BRAIN-004 | Rule library structure |
| BRAIN-005 | Domain classification |
| BRAIN-006 | Case type classification |
| BRAIN-007 | Time limit and date logic |
| BRAIN-008 | Injury and consequence logic |
| BRAIN-009 | Causation signal logic |
| BRAIN-010 | Evidence and document logic |
| BRAIN-011 | Information quality logic |
| BRAIN-012 | Internal commercial value logic |
| BRAIN-013 | Smart question selection |
| BRAIN-014 | Human review escalation |
| BRAIN-015 | Guide-away behavior |
| BRAIN-016 | Confidence model |
| BRAIN-017 | Audit and explanation rules |
| BRAIN-018 | Combined Brain output model |
| BRAIN-019 | Rule evaluation order |
| BRAIN-020 | First 50 MVP rules catalog |
| BRAIN-021 | Mapping to JSON contracts |
| BRAIN-022 | Mapping to Laravel services |
| BRAIN-023 | Implementation checklist |
| BRAIN-024 | Fake AI test scenarios |
| BRAIN-025 | QA and test matrix |

## First Vertical Slice Focus

The first vertical slice should only implement the minimum required Brain behavior:

```text
classify domain
classify likely case type
identify missing information
select one next question
return reason codes
validate output
```

Related documents:

```text
BRAIN-018-brain-output-model.md
BRAIN-020-first-50-mvp-rules-catalog.md
BRAIN-023-implementation-checklist.md
BRAIN-024-fake-ai-brain-scenarios.md
BRAIN-025-qa-and-test-matrix.md
```

## Implementation Rule

Do not place Brain logic in controllers.

Use services as described in:

```text
BRAIN-022-mapping-brain-rules-to-laravel-services.md
```

## Contract Rule

Brain output must map to the JSON contracts described in:

```text
BRAIN-021-mapping-brain-rules-to-json-contracts.md
```

## QA Rule

Every important Brain behavior should be covered by at least one test or business test case.

Use:

```text
BRAIN-025-qa-and-test-matrix.md
```

## Related Project Documents

```text
docs/IMPLEMENTATION-MASTER-INDEX.md
docs/api/API-READINESS-003-first-vertical-slice-plan.md
docs/mvp-start/MVP-START-003-first-feature-test-plan.md
docs/mvp-start/MVP-START-004-fake-ai-provider-implementation-plan.md
```
