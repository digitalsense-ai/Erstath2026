# TC-082 - Sensitive Detail Minimization

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system avoids asking for unnecessary sensitive details during early intake.

## Initial User Description

```text
This is personal. I can explain the general situation, but I do not want to share everything yet.
```

## Expected Conversation Behavior

- respect the user's boundary
- ask only for minimum context
- explain that details may be needed later
- avoid requesting unnecessary sensitive information

## Expected Facts

```text
sensitive_context = true
limited_sharing = true
data_minimization_needed = true
```

## Expected Missing Information

```text
minimal_event_context
current_consequence_if_user_wants_to_continue
```

## Expected Next Step

```text
continue_intake_or_pause
```

## Acceptance Checks

```text
only necessary information is requested
user boundary is respected
sensitive collection is minimized
conversation can pause safely
```
