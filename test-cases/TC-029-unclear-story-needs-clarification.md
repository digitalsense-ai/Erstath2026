# TC-029 - Unclear Story Needs Clarification

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system asks clarifying questions when the fictional user's story is too unclear for routing.

## Initial User Description

```text
Something happened at my appointment and I am not sure what to write. I just know that I am unhappy about it.
```

## Expected Conversation Behavior

- acknowledge uncertainty
- ask what happened in simple language
- ask whether any consequence occurred
- ask where and when it happened
- avoid guide-away until basic facts are known

## Expected Facts

```text
story_unclear = true
consequence_unknown = true
basic_context_missing = true
```

## Expected Missing Information

```text
event_description
provider_context
event_date
current_consequence
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
system does not reject unclear story
basic facts are requested
questions stay simple and respectful
```
