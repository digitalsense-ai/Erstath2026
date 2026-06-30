# DOMAIN-000 - Domain Knowledge Pack Index

Version: 1.0
Status: Active Draft
Scope: Patient compensation domain knowledge

## Purpose

This is the main index for the Domain Knowledge Pack.

The Domain Knowledge Pack defines the shared domain language for ErstatningsHjaelp.

It supports AI Case Brain, Rulebook, prompts, UX, caseworker onboarding, QA and future document analysis.

## Domain Pack Goals

The pack should define:

- patient compensation concepts
- common case patterns
- medical and legal-adjacent terminology
- treatment types
- injury types
- consequence types
- time-limit concepts
- document types
- case examples
- glossary

## Reading Order

Start with:

```text
DOMAIN-001-patient-compensation-overview.md
DOMAIN-002-domain-language-and-boundaries.md
DOMAIN-003-common-case-patterns.md
```

Then use:

```text
DOMAIN-004-treatment-types.md
DOMAIN-005-injury-types.md
DOMAIN-006-consequence-classification.md
DOMAIN-007-time-limit-reference.md
DOMAIN-008-document-types.md
DOMAIN-009-case-examples.md
DOMAIN-010-glossary.md
```

## Core Principle

The Domain Knowledge Pack is not a legal decision engine.

It provides structured language and examples so that the system can understand, classify and explain cases consistently.

Final legal or business decisions must remain with authorised staff.

## Relationship To AI Case Brain

AI Case Brain uses rules and structured outputs.

Domain Knowledge gives those rules a shared vocabulary.

Use together:

```text
docs/ai-case-brain/BRAIN-000-ai-case-brain-index.md
docs/rulebook/RULEBOOK-000-index.md
docs/domain/DOMAIN-000-index.md
```

## Relationship To UX

UX must translate domain knowledge into plain user-facing language.

Domain documents may contain internal terminology, but customer-facing text should remain simple and careful.

Use together:

```text
docs/ux/UX-009-microcopy-and-tone-of-voice.md
docs/domain/DOMAIN-010-glossary.md
```

## Relationship To Future RAG

Later versions may use selected domain documents as a retrieval source.

Before that, every document should be:

- structured
- versioned
- source-aware where relevant
- safe for staff use
- not written as final legal advice

## First Domain Priority

The first priority is to define the language needed for intake and screening:

```text
case patterns
treatment events
injury signals
consequence signals
time concepts
document signals
```

## Implementation Rule

Do not hardcode legal conclusions from domain documents.

Domain knowledge should support classification, questions and explanations. Rulebook and staff review decide how it affects routing.

## Related Documents

```text
docs/IMPLEMENTATION-MASTER-INDEX.md
docs/ai-case-brain/BRAIN-005-domain-classification-rules.md
docs/ai-case-brain/BRAIN-006-case-type-classification-rules.md
docs/rulebook/RULEBOOK-020-case-type-rules.md
docs/rulebook/RULEBOOK-040-injury-and-consequence-rules.md
docs/ux/UX-009-microcopy-and-tone-of-voice.md
```
