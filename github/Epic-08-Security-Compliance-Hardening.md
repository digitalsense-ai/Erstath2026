# Epic 08 - Security & Compliance Hardening

## Formål

Dette epic definerer Sprint 4 for ErstatningsHjælp MVP 0.1.

Sprint 4 handler om at styrke sikkerhed, sporbarhed og compliance-fundamentet før der bygges tungere funktioner som MitID, fuldmagt, dokumentupload og journalanalyse.

Målet er ikke at gøre platformen fuldt produktionsklar.

Målet er at sikre, at MVP-kernen bygges med de rigtige sikkerhedsprincipper fra starten.

---

# Hvorfor dette epic er vigtigt

ErstatningsHjælp kan senere komme til at håndtere følsomme oplysninger.

Derfor skal systemet tidligt have klare rammer for:

```text
Audit logs
Consent tracking
Access control
Data minimization
Retention
Secure development rules
Operational security
```

Hvis dette først tilføjes senere, bliver det dyrere og mere risikabelt.

---

# Sprint 4 scope

## Skal inkluderes

```text
Audit log foundation
Consent tracking foundation
Role and permission model
Data retention policy
Security review checklist
Sensitive data handling rules
Operational security checklist
```

## Skal ikke inkluderes

```text
MitID integration
Power of attorney signing
Real document upload
Medical journal analysis
Production deployment
Penetration test
External DPO/legal approval
Advanced encryption implementation
```

---

# 1. Audit log foundation

Systemet bør kunne registrere vigtige interne hændelser.

Eksempler:

```text
lead.created
lead.status_changed
lead.viewed
assessment.updated
consent.recorded
user.login
```

MVP kan starte med en simpel audit log struktur.

---

# 2. Consent tracking foundation

Selvom fuldt samtykkeflow kommer senere, bør systemet have en plan for at registrere samtykke.

Eksempler:

```text
consent_type
consent_version
consent_given_at
consent_withdrawn_at
source
```

---

# 3. Role and permission model

Interne brugere bør ikke alle have samme adgang på længere sigt.

MVP kan starte simpelt, men modellen bør planlægges.

Mulige roller:

```text
admin
caseworker
viewer
```

---

# 4. Data retention policy

Der bør defineres, hvor længe leads og screeningdata gemmes.

Dette skal ikke nødvendigvis automatiseres i Sprint 4, men policy og teknisk plan skal dokumenteres.

---

# 5. Security review checklist

Alle fremtidige PRs bør kunne reviewes mod en simpel sikkerhedsliste.

Eksempler:

```text
No secrets committed
No real personal data in tests
Auth required for internal routes
Public endpoints expose minimal data
Errors do not leak sensitive details
AI logs do not store unnecessary content
```

---

# 6. Sensitive data handling rules

Der skal være klare regler for, hvad MVP 0.1 må og ikke må gemme.

MVP 0.1 bør stadig undgå:

```text
CPR
Patient journals
Real documents
Unnecessary health details
Large raw AI logs with sensitive text
```

---

# 7. Operational security checklist

Før senere deployment bør projektet have en liste over driftskrav.

Eksempler:

```text
Environment variables
Backups
Log rotation
Access control
SSL
Database credentials
Queue worker security
File storage security
```

---

# Proposed Sprint 4 issues

```text
Create audit log foundation
Create consent tracking foundation
Define role and permission model
Create data retention policy
Create security review checklist
Define sensitive data handling rules
Create operational security checklist
```

---

# Definition of Done

Sprint 4 er færdig når:

- [ ] Audit log foundation er planlagt eller implementeret
- [ ] Consent tracking foundation er planlagt eller implementeret
- [ ] Rollemodel er defineret
- [ ] Data retention policy findes
- [ ] Security review checklist findes
- [ ] Sensitive data handling rules findes
- [ ] Operational security checklist findes
- [ ] Ingen nye features har udvidet MVP-scope uden beslutning

---

# Konklusion

Sprint 4 skal beskytte projektets fremtidige fundament.

Inden ErstatningsHjælp håndterer mere følsomme processer, skal systemets sikkerhedsramme være tydelig.

MVP 0.1 skal fortsat være lille:

```text
AI Screening
↓
Lead Storage
↓
Internal CRM Review
↓
Basic Security Foundation
```
