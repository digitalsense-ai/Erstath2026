# TC-049 - Multiple Provider Responsibility Unclear

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system recommends review when a fictional story involves several providers and responsibility is unclear.

## Initial User Description

```text
I was seen by more than one provider, and I do not know where the problem started. Each part of the course seems connected.
```

## Expected Conversation Behavior

- identify that several providers may be involved
- ask for the sequence of contacts
- avoid assigning responsibility automatically
- track provider context separately
- recommend review if responsibility remains unclear

## Expected Facts

```text
multiple_providers = true
responsibility_unclear = true
timeline_complex = true
```

## Expected Missing Information

```text
provider_sequence
first_contact
follow_up_contacts
current_consequence
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
providers are separated
responsibility is not assumed
timeline is requested
human review is recommended
```
