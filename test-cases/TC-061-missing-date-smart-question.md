# TC-061 - Missing Date Smart Question

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system asks for timing first when the event date is missing and timing is needed for safe routing.

## Initial User Description

```text
I had problems after treatment at a hospital, but I have not said when it happened yet.
```

## Expected Conversation Behavior

- identify that timing is missing
- ask one timing question first
- explain briefly why timing matters if needed
- accept approximate timing if exact date is unknown
- avoid asking several questions at once

## Expected Facts

```text
treatment_context = hospital
event_date_missing = true
current_problem_reported = true
```

## Expected Missing Information

```text
event_date_or_approximate_period
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
only one question is asked
timing is prioritized
approximate answer is accepted
Smart Skip stores the answer
```
