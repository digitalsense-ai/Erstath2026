# TC-054 - Review for High Value Missing Facts

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that human review can be recommended when a few missing facts are too important for safe automatic routing.

## Initial User Description

```text
I can explain what happened, but I do not know the exact date or what the provider wrote afterwards. Those details may matter.
```

## Expected Conversation Behavior

- capture the known story
- identify important missing facts
- explain why the missing facts matter
- avoid automatic routing if the missing facts are critical

## Expected Facts

```text
story_available = true
critical_missing_facts = true
automatic_routing_risky = true
```

## Expected Missing Information

```text
exact_or_approximate_date
provider_record_summary
current_consequence
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
critical missing facts are identified
reason is explained
human review is recommended
no final conclusion is claimed
```
