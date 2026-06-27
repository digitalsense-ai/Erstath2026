# TC-005 - Dental Treatment Complication

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a case where a user describes a dental treatment complication.

## Scenario

A fictional patient reports pain and loss of function after dental treatment.

## Initial User Description

```text
I had a tooth treatment and after that I had strong pain and problems chewing. I had to go to another dentist to have it corrected.
```

## Expected Conversation Behavior

- ask what treatment was done
- ask when it happened
- ask what symptoms followed
- ask whether corrective treatment was needed
- ask whether documents or invoices exist

## Expected Facts

```text
treatment_area = dental
complication_reported = true
corrective_treatment_needed = true
functional_problem = chewing_problem
```

## Expected Missing Information

```text
treatment_date
provider_name
documentation_available
current_consequence
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
dental context is understood
corrective treatment is captured
missing documentation is tracked
handover snapshot can summarize the case
```
