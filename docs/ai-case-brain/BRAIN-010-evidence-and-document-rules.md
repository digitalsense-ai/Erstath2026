# BRAIN-010 - Evidence and Document Rules

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document defines rules for identifying evidence and document signals.

Documents do not prove the case during screening, but they strongly affect information quality, confidence, review readiness and later case handling.

## Document Output Values

Recommended document types:

```text
medical_record
hospital_letter
referral
test_result
scan_result
pathology_result
prescription_or_medication_list
discharge_summary
previous_patient_compensation_decision
complaint_decision
salary_documentation
expense_receipt
power_of_attorney
unknown_document
no_documents
```

## Rule DOC-001 - Medical Record Available

Trigger:

The user states that medical records, journal, records from hospital or health file are available.

Effect:

Increase documentation signal and information quality.

Reason code:

```text
medical_record_available
```

## Rule DOC-002 - Previous Decision Available

Trigger:

The user mentions a previous decision, rejection, partial approval or prior Patienterstatningen decision.

Effect:

Mark previous decision document as relevant and request upload later.

Reason code:

```text
previous_decision_available
```

## Rule DOC-003 - Test Result Or Scan Mentioned

Trigger:

The user mentions blood test, scan, biopsy, pathology, X-ray, MRI, CT or other test result.

Effect:

Mark test_result or scan_result as relevant.

Reason code:

```text
test_or_scan_document_relevant
```

## Rule DOC-004 - Referral Mentioned

Trigger:

The user mentions referral to specialist, hospital, scan, treatment or another department.

Effect:

Mark referral as relevant.

Reason code:

```text
referral_document_relevant
```

## Rule DOC-005 - Medication Documentation Relevant

Trigger:

case_type is medication_injury or medication is central.

Effect:

Mark prescription_or_medication_list as relevant.

Reason code:

```text
medication_documentation_relevant
```

## Rule DOC-006 - Discharge Summary Relevant

Trigger:

The case involves discharge, missing follow-up, infection, complications after admission or readmission.

Effect:

Mark discharge_summary as relevant.

Reason code:

```text
discharge_summary_relevant
```

## Rule DOC-007 - Economic Documentation Relevant

Trigger:

The user mentions lost work, salary loss, expenses, transport costs or other economic loss.

Effect:

Mark salary_documentation or expense_receipt as relevant.

Reason code:

```text
economic_documentation_relevant
```

## Rule DOC-008 - No Documents Available

Trigger:

The user states that no documents are currently available.

Effect:

Do not reject automatically. Continue screening if the case has strong signals, but lower information quality.

Reason code:

```text
no_documents_available
```

## Rule DOC-009 - Document Status Unknown

Trigger:

The user has not stated whether documents exist.

Effect:

Ask about documents only after critical facts such as date, provider and consequence are known.

Reason code:

```text
document_status_unknown
```

## Rule DOC-010 - Documentation Conflicts With User Story

Trigger:

Later document analysis or user-provided document description conflicts with the user's narrative.

Effect:

Route to human review.

Reason code:

```text
document_conflict_detected
```

## Rule DOC-011 - Evidence Strong But Facts Incomplete

Trigger:

The user reports strong documentation, but important facts are still missing.

Effect:

Continue conversation or request documents depending on case strength.

Reason code:

```text
strong_document_signal_but_facts_incomplete
```

## Rule DOC-012 - Authority Or Provider Letter Mentioned

Trigger:

The user mentions a letter from hospital, doctor, authority, municipality, insurer, Patienterstatningen or complaint body.

Effect:

Mark hospital_letter or complaint_decision as relevant.

Reason code:

```text
authority_or_provider_letter_relevant
```

## Document Priority Guidance

High priority documents:

- medical records
- test results
- previous decisions
- discharge summaries
- referral documents

Medium priority documents:

- hospital letters
- medication lists
- salary documentation
- expense receipts

Later-stage documents:

- power of attorney
- consent material
- full claim package

## User-Facing Guidance

Do not ask for all documents at once during first intake.

First ask whether documents exist.

Later, request the most relevant document group.

## Test References

- TC-006 Missing Documents and Smart Skip
- TC-031 Previous Decision Flow
- TC-061 Missing Date Smart Follow-up
- TC-074 Documentation Missing But Strong Case

## References

- BRAIN-008-injury-and-consequence-rules.md
- BRAIN-009-causation-signal-rules.md
- docs/contracts/CONTRACT-006-crm-handover-contract.md
