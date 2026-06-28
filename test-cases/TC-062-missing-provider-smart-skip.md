# TC-062 - Missing Provider Smart Skip

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system records partial provider information and avoids repeating the same provider question.

## Initial User Description

```text
It happened at a hospital, but I do not remember the department name right now.
```

## Expected Conversation Behavior

- store hospital as provider type
- ask for hospital name only if missing and important
- ask for department later only if needed
- do not ask again whether it was a hospital or clinic

## Expected Facts

```text
provider_type = hospital
department_unknown = true
provider_context_partial = true
```

## Expected Missing Information

```text
hospital_name
department_name_optional
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
partial provider context is stored
known provider type is reused
Smart Skip prevents duplicate provider-type question
missing information is narrowed
```
