# TC-096 - Failed Attachment Handling

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that a failed attachment or document upload is handled safely.

## Initial User Description

```text
I tried to share a file, but it did not seem to upload correctly.
```

## Expected System Behavior

- detect that the upload did not complete
- keep the conversation state intact
- show a safe user-facing message
- allow retry where appropriate
- avoid marking the document as received before it exists

## Expected Facts

```text
attachment_upload_failed = true
document_received = false
retry_possible = true
```

## Expected Missing Information

```text
document_upload_pending
```

## Expected Next Step

```text
retry_upload_or_continue_without_document
```

## Acceptance Checks

```text
failed upload is detected
document is not falsely marked received
safe retry path is available
conversation state is preserved
```
