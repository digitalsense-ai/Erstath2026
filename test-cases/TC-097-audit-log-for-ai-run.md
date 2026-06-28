# TC-097 - Audit Log for AI Run

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that AI screening activity is traceable without storing unnecessary sensitive payloads.

## Initial User Description

```text
The system runs a screening step for a lead.
```

## Expected System Behavior

- store AI run metadata
- store prompt or schema version where available
- store validation status
- avoid storing unnecessary sensitive data in logs
- make the run traceable for internal review

## Expected Facts

```text
ai_run_created = true
validation_status_recorded = true
traceability_required = true
```

## Expected Audit Event

```text
screening.run_created
```

## Expected Next Step

```text
continue_screening_flow
```

## Acceptance Checks

```text
AI run metadata is stored
validation status is available
unnecessary sensitive payloads are avoided
run is traceable internally
```
