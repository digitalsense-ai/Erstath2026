# Epic 06 - Documents

## Formål

Forberede dokumentcenteret i ErstatningsHjælp.

Dokumentupload er ikke en del af den absolut første AI Screening MVP, men det bliver nødvendigt kort efter, når kvalificerede leads skal kunne uploade journaler, afgørelser, fuldmagter og andre bilag.

Denne epic handler om fundamentet for sikker dokumenthåndtering.

---

# Mål

Når Epic 06 er færdig, skal systemet kunne:

```text
Koble dokumenter til leads
↓
Validere dokumenttype
↓
Gemme metadata i database
↓
Gemme filer sikkert udenfor public folder
↓
Vise dokumentstatus i CRM
```

---

# Scope

## In scope

- Lead document metadata
- Document upload endpoint
- Private file storage
- Document type validation
- CRM document overview
- Basic file size and MIME validation
- Preparation for future AI document analysis

## Out of scope

- OCR
- AI journal analysis
- Automatic timeline extraction
- Automatic claim drafting
- MitID
- Digital signature
- External document integrations

---

# Related documents

```text
docs/05-crm-workflow.md
docs/08-api-specification.md
docs/09-security-gdpr.md
docs/11-laravel-build-queue.md
docs/12-data-dictionary.md
docs/15-case-intelligence-roadmap.md
```

---

# Issues in this epic

## Issue 17 - Implement document upload endpoint

### Goal

Create endpoint for uploading documents to a lead.

### Endpoint

```http
POST /api/v1/leads/{lead}/documents
```

### Request

Multipart form-data:

```text
file
document_type
```

### Allowed document types

```text
journal
afgoerelse
loenseddel
kvittering
fuldmagt
andet
```

### Definition of Done

- File can be uploaded to a lead
- File is stored outside public folder
- Metadata is saved in `lead_documents`
- Document type is validated
- File size is validated
- MIME type is validated

---

## Issue 26 - Add CRM document overview

### Goal

Show uploaded documents on lead detail page.

### Fields to show

```text
File name
Document type
Uploaded at
File size
Uploaded by
```

### Definition of Done

- Internal user can see uploaded documents
- Documents are grouped by type if possible
- Missing document types can be displayed later

---

## Issue 27 - Add secure document download

### Goal

Allow authorized internal users to download documents securely.

### Rules

```text
No public file URLs
Auth required
Access can be audited later
Files served through controller
```

### Definition of Done

- Documents cannot be accessed directly from public folder
- Download requires authentication
- Missing file returns safe error

---

## Issue 28 - Prepare document AI metadata fields

### Goal

Prepare metadata fields for future document analysis without building the analysis now.

### Possible future fields

```text
document_status
analysis_status
analysis_summary
analysis_confidence
analyzed_at
```

### Definition of Done

- Future AI document analysis is considered
- MVP implementation does not overbuild
- Fields are documented before implementation

---

# Security rules

## Private storage only

Documents must never be stored here:

```text
public/uploads
```

Use private storage such as:

```text
storage/app/private/documents
```

or a secured object storage later.

---

# Document handling principles

## Data minimization

Do not ask for documents before the lead is qualified enough.

## Clear document type

Every uploaded document should have a type.

## Auditability

Later versions should audit:

```text
document uploaded
document viewed
document downloaded
document deleted
```

## Human review

AI document analysis may help later, but a human must approve legal use of document interpretation.

---

# Acceptance criteria for Epic 06

Epic 06 is complete when:

- [ ] Lead document upload endpoint exists
- [ ] Files are stored securely
- [ ] Metadata is saved
- [ ] Document type validation exists
- [ ] CRM can show documents for a lead
- [ ] Secure download path is planned or implemented
- [ ] No documents are stored in public webroot

---

# Result

Epic 06 prepares ErstatningsHjælp for secure document handling and later AI document intelligence without expanding the first MVP too much.
