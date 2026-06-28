# TC-089 - Invalid AI Output Fallback

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that invalid AI output is handled safely and does not corrupt stored lead data.

## Initial User Description

```text
The AI service returns an invalid or incomplete structured response.
```

## Expected System Behavior

- reject invalid structured output
- store validation status
- avoid mapping invalid facts or scores
- keep the original user message
- route to retry or human review

## Expected Facts

```text
invalid_ai_output = true
validation_failed = true
facts_not_mapped = true
scores_not_mapped = true
```

## Expected Missing Information

```text
valid_screening_result
```

## Expected Next Step

```text
retry_later_or_human_review
```

## Acceptance Checks

```text
invalid output is rejected
lead data is not corrupted
validation failure is stored
safe fallback path is selected
```
