# TC-027 - Admin Error Without Injury

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a guide-away flow where the fictional user describes an administrative issue but no injury.

## Initial User Description

```text
There was a mistake in my appointment information, but I was not injured and did not need extra care.
```

## Expected Conversation Behavior

- acknowledge the issue
- clarify whether any health consequence occurred
- identify the matter as possibly administrative
- guide elsewhere if no harm is confirmed

## Expected Facts

```text
administrative_issue = true
injury_described = false
extra_care_needed = false
```

## Expected Missing Information

```text
none_if_no_harm_confirmed
```

## Expected Next Step

```text
guide_elsewhere
```

## Acceptance Checks

```text
administrative issue is recognized
harm is clarified
respectful guide-away can occur
```
