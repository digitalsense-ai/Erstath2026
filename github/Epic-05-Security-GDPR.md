# Epic 05 - Security & GDPR

## Formål

Sikre at ErstatningsHjælp bygges med korrekt grundstruktur for sikkerhed, adgangsstyring og databeskyttelse.

Projektet kan senere behandle helbredsoplysninger, journaler, fuldmagter og andre følsomme oplysninger.

Derfor skal sikkerhed tænkes ind tidligt, også selvom MVP 0.1.0 ikke håndterer fulde journaler eller CPR.

---

# Mål

Når Epic 05 er færdig, skal projektet have:

```text
Auth
Role structure
Protected CRM routes
Basic audit log design
Consent model prepared
Secure document storage principle
No sensitive data in repo/tests
```

---

# Scope

## In scope

- Intern auth
- Beskyttede CRM routes
- Rolleprincipper
- Audit log foundation
- Consent model foundation
- Security checks
- Environment rules
- Secure storage principles

## Out of scope

- Fuld juridisk GDPR-audit
- Penetrationstest
- MitID integration
- Produktion deployment hardening
- Databehandleraftaler
- Fuld samtykkeplatform

---

# Related documents

```text
docs/09-security-gdpr.md
docs/10-testing-strategy.md
docs/11-laravel-build-queue.md
docs/12-data-dictionary.md
docs/16-project-review.md
```

---

# Issues in this epic

## Issue 16 - Add security checks

### Goal

Add basic automated and manual checks for project security.

### Checks

```text
.env is not committed
API keys are not committed
Debug endpoints only work locally
CRM routes require auth
Documents are not stored in public folder
```

### Definition of Done

- Basic checks are documented or automated
- Security expectations are clear
- Tests exist where practical

---

## Issue 23 - Create AuditLog model and migration

### Goal

Prepare audit logging for important system actions.

### Suggested table

```text
audit_logs
```

### Fields

```text
id
user_id
lead_id
case_id
action
metadata
ip_address
user_agent
created_at
```

### Example actions

```text
lead.created
lead.viewed
lead.status_changed
document.uploaded
consent.accepted
ai.screening_generated
```

### Definition of Done

- Migration exists
- Model exists
- Helper/service can write audit event

---

## Issue 24 - Create Consent model and migration

### Goal

Prepare consent tracking before sensitive data processing.

### Suggested table

```text
consents
```

### Fields

```text
id
lead_id
consent_type
consent_text_version
accepted_at
withdrawn_at
ip_address
user_agent
created_at
updated_at
```

### Definition of Done

- Migration exists
- Model exists
- Consent can be stored for a lead

---

## Issue 25 - Define role and permission structure

### Goal

Define internal user roles.

### Initial roles

```text
Admin
Sagsbehandler
Rådgiver
Support
Developer
```

### Definition of Done

- Roles are documented
- CRM access rules are clear
- Future implementation path is defined

---

# Security principles

## Least privilege

Users should only access data needed for their work.

## Data minimization

Do not ask for CPR, full journal or documents before the lead is qualified.

## No sensitive data in development

Use dummy data only.

## Private storage

Documents must never be placed in public webroot.

---

# Acceptance criteria for Epic 05

Epic 05 is complete when:

- [ ] CRM routes require auth
- [ ] Security rules are documented
- [ ] Audit log foundation exists
- [ ] Consent model foundation exists
- [ ] Role structure is defined
- [ ] Sensitive data rules are enforced in development

---

# Result

Epic 05 ensures that the platform can grow into handling sensitive health-related cases without rebuilding the foundation later.
