# TC-056 - Review After Guide Away Risk

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system avoids guide-away when the fictional user's story has both weak and serious signals.

## Initial User Description

```text
At first I thought this was only a complaint, but I also still have problems that may be connected.
```

## Expected Conversation Behavior

- do not guide away immediately
- ask about the ongoing problems
- ask about timing and treatment context
- preserve both weak and serious signals
- recommend review if uncertainty remains

## Expected Facts

```text
complaint_signal = true
ongoing_problem_possible = true
mixed_signals = true
```

## Expected Missing Information

```text
ongoing_problem_details
treatment_context
event_timing
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
guide-away is not triggered too early
mixed signals are captured
human review can be recommended
```
