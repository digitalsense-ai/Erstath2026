# TC-026 - Inconvenience Without Harm

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a respectful guide-away flow where the fictional user describes inconvenience but no harm.

## Initial User Description

```text
The appointment was inconvenient and caused me stress, but I did not have any physical problem afterwards.
```

## Expected Conversation Behavior

- acknowledge the inconvenience
- clarify whether any health consequence occurred
- explain why consequence matters
- guide elsewhere if no harm is confirmed

## Expected Facts

```text
inconvenience_reported = true
physical_harm_described = false
current_consequence = false
```

## Expected Missing Information

```text
none_if_no_consequence_confirmed
```

## Expected Next Step

```text
guide_elsewhere
```

## Acceptance Checks

```text
system handles concern respectfully
consequence is clarified
guide-away is explained
no final legal conclusion is claimed
```
