# DOMAIN-008 - Document Types

Version: 1.0
Status: Active Draft
Scope: Document terminology for intake and screening

## Purpose

This document defines common document types that may appear in patient compensation screening.

The goal is to help AI Case Brain, Rulebook, UX and caseworkers identify what documentation may support clarification, screening or later review.

## Important Limitation

Document presence does not prove that a case is valid.

Document absence does not prove that a case is invalid.

Documents are supporting signals and must be reviewed before they are treated as confirmed evidence.

## Document Categories

Allowed high-level document categories:

```text
medical_record
journal_note
hospital_letter
discharge_summary
referral
test_result
scan_result
pathology_result
medication_list
prescription_record
operation_report
birth_record
complaint_document
previous_decision
insurance_or_authority_letter
salary_or_income_document
expense_document
correspondence
power_of_attorney
unknown_document
no_documents
```

## Medical Record

Description:

A broader patient record or journal extract.

May include:

```text
consultations
diagnoses
treatment notes
operation notes
medication notes
follow-up notes
```

Screening relevance:

Often useful for reconstructing timeline, provider actions and documented symptoms.

## Journal Note

Description:

A specific note from a doctor, nurse, hospital department or clinic.

Useful for:

```text
symptoms described
provider assessment
plan or missing plan
follow-up instructions
patient contact dates
```

## Hospital Letter

Description:

A letter from hospital, department or specialist.

May include:

```text
summary of treatment
appointment information
results
follow-up plan
referral response
```

## Discharge Summary

Description:

A summary given when a patient is discharged from hospital.

Useful for:

```text
discharge date
diagnosis
treatment given
follow-up plan
medication changes
warnings or instructions
```

## Referral

Description:

A document or message referring the patient to another provider or specialist.

Useful for:

```text
referral date
urgency
reason for referral
recipient
possible delay
```

## Test Result

Description:

A result from blood test, urine test, ECG or other clinical test.

Useful for:

```text
result date
abnormal findings
follow-up need
whether result was acted on
```

## Scan Result

Description:

A result from imaging such as X-ray, CT, MRI, ultrasound, mammography or similar.

Useful for:

```text
scan date
findings
recommendations
follow-up
possible delay
```

## Pathology Result

Description:

A result from biopsy, tissue analysis or pathology.

Useful for:

```text
cancer diagnosis
abnormal cells
result date
communication delay
follow-up need
```

## Medication List

Description:

A list of medication the patient used or was prescribed.

Useful for:

```text
medicine name
dose
start date
stop date
interactions
allergy or known risk
```

## Prescription Record

Description:

A record showing prescription, dose or medication changes.

Useful for medication injury cases.

## Operation Report

Description:

A report from an operation or procedure.

Useful for:

```text
operation date
procedure type
complication notes
surgeon notes
post-operative plan
```

## Birth Record

Description:

Documents from pregnancy, birth or newborn care.

Useful for:

```text
birth timeline
fetal monitoring
interventions
complications
mother or child status
```

## Complaint Document

Description:

A complaint submitted to hospital, authority or other body.

Useful for:

```text
complaint date
complaint content
response status
procedural history
```

## Previous Decision

Description:

A prior decision, rejection, appeal decision or similar.

Screening relevance:

Previous decisions often affect next step and should normally trigger staff review.

## Insurance Or Authority Letter

Description:

Correspondence from insurer, municipality, authority or similar.

Screening relevance:

May be relevant, but can also indicate out-of-scope domain.

## Salary Or Income Document

Description:

Documents showing income, sick leave, employment or work capacity impact.

Useful for consequence and value assessment, but later than first intake.

## Expense Document

Description:

Receipts or expense records.

Useful later if economic consequence becomes relevant.

## Correspondence

Description:

Emails, letters, messages or portal communication between user and provider.

Useful for:

```text
communication timeline
provider acknowledgement
follow-up promises
missing response
```

## Power Of Attorney

Description:

Document allowing someone to act on behalf of the patient.

First slice note:

Not required for first screening slice.

## Unknown Document

Use when the user says they have documents, but type is unclear.

Suggested question:

```text
Hvilke dokumenter har du om sagen, fx journal, breve eller afgørelser?
```

## No Documents

Use when the user says they have no documents.

UX note:

Do not block first screening only because documents are missing.

## Document Status Values

Recommended internal statuses:

```text
not_requested
mentioned_not_uploaded
requested
received
reviewed
missing
not_relevant
unknown
```

## First Slice Document Scope

First vertical slice only needs to capture:

```text
document_status_unknown
no_documents
has_documents_unknown_type
```

Later slices can expand to upload and document review.

## References

- DOMAIN-007-time-limit-reference.md
- docs/rulebook/RULEBOOK-060-evidence-and-document-rules.md
- docs/ai-case-brain/BRAIN-010-evidence-and-document-rules.md
- docs/ux/UX-012-notification-and-status-patterns.md
