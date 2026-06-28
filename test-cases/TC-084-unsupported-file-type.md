# TC-084 - Unsupported File Type

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system handles an unsupported uploaded file type safely.

## Initial User Description

```text
I tried to share a file, but the system cannot read this type.
```

## Expected Conversation Behavior

- explain that the file type is not supported
- ask for an accepted format if needed
- keep the intake state intact
- avoid losing already collected information

## Expected Facts

```text
unsupported_file_type = true
existing_intake_state_preserved = true
```

## Expected Missing Information

```text
supported_document_version_if_needed
```

## Expected Next Step

```text
request_supported_file_or_continue_intake
```

## Acceptance Checks

```text
unsupported file is rejected safely
clear user message is shown
existing facts remain unchanged
conversation can continue
```
