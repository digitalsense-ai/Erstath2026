# RULEBOOK-060 - Evidence and Document Rules

Version: 1.0
Status: Active Draft
Scope: Long-term AI Case Brain rule library

## Purpose

This document defines rules for identifying evidence and document signals.

Evidence and document rules help AI Case Brain understand what documentation may support the case, what is missing, and when document collection should be prioritised.

## Document Outputs

Allowed document outputs:

```text
medical_record
hospital_letter
referral
test_result
scan_result
pathology_result
medication_list
discharge_summary
previous_patient_compensation_decision
complaint_decision
salary_or_income_document
receipt_or_expense_document
power_of_attorney
unknown_document_status
no_documents_available
```

## Rule DOC-001 - Medical Record Available

Version: 1.0
Status: active
Category: Evidence and document
Reason code: medical_record_available

### Trigger

The user says they have medical records, journal material or patient records.

### Effect

Add medical_record as available document signal.

### Score Impact

Increase evidence strength and information quality slightly.

### Test References

TC-074

## Rule DOC-002 - Previous Decision Available

Version: 1.0
Status: active
Category: Evidence and document
Reason code: previous_decision_available

### Trigger

The user mentions a previous decision, rejection, complaint answer or authority decision.

### Effect

Add previous decision as relevant document signal.

### Human Review Impact

Route to human review when procedural status affects next step.

### Test References

TC-041
TC-074

## Rule DOC-003 - Test Or Scan Document Relevant

Version: 1.0
Status: active
Category: Evidence and document
Reason code: test_or_scan_document_relevant

### Trigger

The user mentions blood test, scan, biopsy, X-ray, pathology result or similar.

### Effect

Add test_result, scan_result or pathology_result as relevant document signal.

### Case Type Impact

Often supports diagnosis_delay or lack_of_follow_up cases.

### Test References

TC-001
TC-073

## Rule DOC-004 - Referral Document Relevant

Version: 1.0
Status: active
Category: Evidence and document
Reason code: referral_document_relevant

### Trigger

The user mentions referral, delayed referral, missing referral or specialist appointment.

### Effect

Add referral as relevant document signal.

### Test References

TC-008
TC-073

## Rule DOC-005 - Discharge Summary Relevant

Version: 1.0
Status: active
Category: Evidence and document
Reason code: discharge_summary_relevant

### Trigger

The user mentions discharge, hospital stay, follow-up plan or discharge letter.

### Effect

Add discharge_summary as relevant document signal.

### Test References

TC-008

## Rule DOC-006 - Medication List Relevant

Version: 1.0
Status: active
Category: Evidence and document
Reason code: medication_list_relevant

### Trigger

The user describes medication injury, wrong dose, allergy or prescription problem.

### Effect

Add medication_list as relevant document signal.

### Test References

TC-004

## Rule DOC-007 - Income Document Relevant

Version: 1.0
Status: active
Category: Evidence and document
Reason code: income_document_relevant

### Trigger

The user mentions loss of income, sick leave, work capacity loss or financial consequence.

### Effect

Add salary_or_income_document as relevant document signal.

### Test References

TC-071
TC-074

## Rule DOC-008 - No Documents Available

Version: 1.0
Status: active
Category: Evidence and document
Reason code: no_documents_available

### Trigger

The user says they do not have documents.

### Effect

Store no_documents_available, but do not reject automatically.

### Question Impact

Continue with facts if case signals are otherwise meaningful.

### Test References

TC-074

## Rule DOC-009 - Document Status Unknown

Version: 1.0
Status: active
Category: Evidence and document
Reason code: document_status_unknown

### Trigger

No document status is known after core facts are collected.

### Effect

Add document_status to missing information.

### Question Impact

Ask whether the user has relevant documents.

### Test References

TC-066
TC-074

## Rule DOC-010 - Document Contradiction Signal

Version: 1.0
Status: active
Category: Evidence and document
Reason code: document_contradiction_signal

### Trigger

User-provided information appears to conflict with document content or described document conclusions.

### Effect

Reduce confidence and route to human review when important.

### Test References

TC-041
TC-089

## Rule DOC-011 - Provider Acknowledgement Document

Version: 1.0
Status: active
Category: Evidence and document
Reason code: provider_acknowledgement_document_signal

### Trigger

The user mentions a letter, journal note or message where a provider acknowledges delay, error or complication.

### Effect

Increase evidence relevance, but keep fact unconfirmed until reviewed.

### Human Review Impact

Consider review when consequence is serious or value is high.

### Test References

TC-074

## Rule DOC-012 - Power Of Attorney Not Needed In First Slice

Version: 1.0
Status: active
Category: Evidence and document
Reason code: power_of_attorney_not_first_slice

### Trigger

The flow is still in first MVP conversation slice.

### Effect

Do not require power of attorney before basic screening works.

### Test References

TC-001

## Rule DOC-013 - Document Request Ready

Version: 1.0
Status: active
Category: Evidence and document
Reason code: document_request_ready

### Trigger

Core facts are known and documents are relevant for next step.

### Effect

Allow routing to request_documents.

### Test References

TC-074

## References

- RULEBOOK-003-rule-authoring-template.md
- docs/ai-case-brain/BRAIN-010-evidence-and-document-rules.md
- docs/ai-case-brain/BRAIN-020-first-50-mvp-rules-catalog.md
