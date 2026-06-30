# BRAIN-021 - Mapping Brain Rules to JSON Contracts

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document maps AI Case Brain outputs to the existing JSON contracts.

The goal is to ensure that rule evaluation can be persisted, tested and returned by the API without inventing a separate output format later.

## Contract Mapping Overview

AI Case Brain connects to these contracts:

```text
CONTRACT-002 Conversation Message Contract
CONTRACT-003 Fact Extraction Contract
CONTRACT-004 Screening Output Contract
CONTRACT-005 Decision Output Contract
CONTRACT-006 CRM Handover Contract
CONTRACT-007 Human Review Contract
```

## Conversation Contract Mapping

Used when:

- user sends a message
- assistant returns one next question
- conversation state changes

Brain fields:

```text
next_question.question
next_question.reason_code
routing.recommended_action
reason_codes
explanation.user_safe_summary
```

Maps to:

```text
CONTRACT-002
```

## Fact Extraction Contract Mapping

Used when:

- AI extracts possible facts
- rule layer marks facts as unconfirmed
- missing information is identified

Brain fields:

```text
facts[]
missing_information[]
confidence
reason_codes
```

Maps to:

```text
CONTRACT-003
```

Important rule:

```text
AI-created facts must be unconfirmed by default.
```

## Screening Output Contract Mapping

Used when:

- scores are calculated
- case type is classified
- information quality is estimated
- case category is assigned

Brain fields:

```text
case_domain
case_type
secondary_case_types
case_category
scores.case_strength
scores.information_quality
scores.commercial_value
confidence.value
confidence.band
reason_codes
```

Maps to:

```text
CONTRACT-004
```

## Decision Output Contract Mapping

Used when:

- routing target is selected
- recommended action is created
- guide-away or onboarding later is suggested

Brain fields:

```text
routing.routing_target
routing.recommended_action
routing.human_review_required
case_category
confidence
reason_codes
explanation.internal_summary
explanation.user_safe_summary
```

Maps to:

```text
CONTRACT-005
```

## CRM Handover Contract Mapping

Used when:

- a lead is ready for internal CRM handling
- caseworker needs a summary
- missing information and reason codes are shown

Brain fields:

```text
case_domain
case_type
scores
confidence
facts
missing_information
routing
reason_codes
explanation.internal_summary
```

Maps to:

```text
CONTRACT-006
```

## Human Review Contract Mapping

Used when:

- human_review_required is true
- review priority is set
- staff must review uncertainty, sensitivity or conflicts

Brain fields:

```text
routing.human_review_required
routing.review_priority
review_reason_codes
confidence
reason_codes
explanation.internal_summary
```

Maps to:

```text
CONTRACT-007
```

## Recommended Data Flow

```text
User message
↓
Conversation contract
↓
Fact extraction contract
↓
Brain rule evaluation
↓
Screening output contract
↓
Decision output contract
↓
CRM or human review contract when relevant
```

## Validation Requirements

Before saving or returning the brain result:

- validate required fields
- validate score ranges
- validate confidence range
- validate enum values
- validate one-question rule
- validate unconfirmed AI facts
- validate reason codes exist for important recommendations

## First Vertical Slice Mapping

For the first vertical slice, minimum mapping is:

```text
CONTRACT-002 conversation response
CONTRACT-003 extracted facts and missing information
BRAIN-018 combined output model
```

The full screening and decision contracts can be introduced as the next slices mature.

## References

- BRAIN-018-brain-output-model.md
- docs/contracts/CONTRACT-001-json-contracts-overview.md
- docs/api/API-READINESS-003-first-vertical-slice-plan.md
