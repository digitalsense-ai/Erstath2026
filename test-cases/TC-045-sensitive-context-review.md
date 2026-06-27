# TC-045 - Sensitive Context Review

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system recommends human review when the fictional user describes a sensitive context and important uncertainty remains.

## Initial User Description

```text
This is hard for me to explain, but the treatment affected me in a very personal way. I am not sure what details I want to share yet.
```

## Expected Conversation Behavior

- use careful and respectful language
- respect the user's boundaries
- ask only for minimal context needed to continue
- explain that more details may be needed later
- avoid pressure and avoid final conclusions

## Expected Facts

```text
sensitive_context = true
limited_details = true
user_boundary_present = true
important_uncertainty = true
```

## Expected Missing Information

```text
basic_event_context
current_consequence
consent_to_continue_details
```

## Expected Next Step

```text
human_review or pause_until_user_ready
```

## Acceptance Checks

```text
sensitive tone is used
user boundary is respected
review can be recommended
no final conclusion is claimed
```
