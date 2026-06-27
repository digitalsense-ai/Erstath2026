# TC-034 - Resolved Short Term Symptom

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a weak-case flow where the fictional user had a short-term symptom that resolved quickly.

## Initial User Description

```text
I felt discomfort for a short time after the appointment, but it went away and I have no issues now.
```

## Expected Conversation Behavior

- ask how long the symptom lasted
- ask whether any follow-up was needed
- clarify current consequence
- guide elsewhere if no ongoing consequence is confirmed

## Expected Facts

```text
short_term_symptom = true
resolved = true
current_consequence = false
follow_up_needed = false
```

## Expected Missing Information

```text
symptom_duration
```

## Expected Next Step

```text
guide_elsewhere
```

## Acceptance Checks

```text
resolution is captured
current consequence is clarified
guide-away is explained respectfully
```
