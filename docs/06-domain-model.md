# Dokument 6 - Domain Model v1.0

## Formål

Domænemodellen beskriver:

- forretningsobjekter
- relationer
- ansvar
- livscyklus

Målet er:

```text
Forretning først
Database bagefter
```

---

# Systemets kerneobjekter

```text
Lead
│
├── Conversation
├── Score
├── Entity
├── Assessment
├── MissingInformation
├── Document
│
└── Case
      │
      ├── Timeline
      ├── Event
      ├── Document
      ├── PowerOfAttorney
      ├── Submission
      └── Decision
```

---

# 1. Lead

Lead er systemets vigtigste objekt.

Alt starter som et Lead.

## Ansvar

Lead skal:

- indeholde kontaktinformation
- indeholde AI-screening
- indeholde score
- kunne kvalificeres
- kunne afvises
- kunne konverteres til sag

## Livscyklus

```text
NEW
↓
SCREENING
↓
QUALIFIED
↓
CASE
```

---

# 2. Conversation

Repræsenterer dialogen mellem bruger og AI.

Relation:

```text
Lead
  hasMany
ConversationMessages
```

---

# 3. Score

Beskriver AI's vurdering.

Typer:

```text
Case Strength
Information Quality
Commercial Value
Overall Score
```

Relation:

```text
Lead
  hasOne
Score
```

---

# 4. Entity

Strukturerede fakta udtrukket af AI.

Eksempler:

```text
Hospital = Herlev
Diagnosis = Kræft
Death = true
InjuryType = Diagnoseforsinkelse
```

Relation:

```text
Lead
  hasMany
Entities
```

---

# 5. Missing Information

Alt AI mangler.

Eksempler:

```text
Hospital
Diagnosedato
Journal
```

Relation:

```text
Lead
  hasMany
MissingInformation
```

---

# 6. Assessment

AI's samlede vurdering.

Eksempel:

```text
Mulig diagnoseforsinkelse.
Dødsfald oplyst.
Journal mangler.
```

Relation:

```text
Lead
  hasOne
Assessment
```

---

# 7. Document

Uploadede filer.

Typer:

```text
Journal
Afgørelse
Lønseddel
Kvittering
Fuldmagt
Andet
```

Relation:

```text
Lead
  hasMany
Documents
```

Senere:

```text
Case
  hasMany
Documents
```

---

# Lead Aggregate

Indtil kvalificering er Lead et samlet domæneobjekt:

```text
Lead
├── Conversation
├── Score
├── Entity
├── MissingInformation
├── Assessment
└── Documents
```

---

# 8. Case

Oprettes først efter kvalificering.

Regel:

```text
Kun kvalificerede leads
kan blive til Cases
```

Ansvar:

- sagsbehandling
- dokumenter
- tidslinje
- Patienterstatningen

Livscyklus:

```text
ACTIVE
↓
SUBMITTED
↓
DECISION
↓
CLOSED
```

---

# 9. Timeline

Samlet hændelsesforløb.

Eksempel:

```text
2016 Første kontakt
2017 Kræft diagnosticeret
2017 Patient dør
```

Relation:

```text
Case
  hasOne
Timeline
```

---

# 10. Timeline Event

Et enkelt punkt i tidslinjen.

Felter:

```text
Dato
Titel
Beskrivelse
Kilde
```

Relation:

```text
Timeline
  hasMany
Events
```

---

# 11. Power Of Attorney

Fuldmagt.

Status:

```text
Pending
Signed
Expired
Revoked
```

Relation:

```text
Case
  hasOne
PowerOfAttorney
```

---

# 12. Submission

Indsendelse til Patienterstatningen.

Gemmer:

```text
Dato
Status
Reference
Bilag
```

Relation:

```text
Case
  hasMany
Submissions
```

---

# 13. Decision

Afgørelse.

Mulige udfald:

```text
Medhold
Delvist medhold
Afslag
Genoptagelse
```

Relation:

```text
Case
  hasMany
Decisions
```

---

# 14. User

Interne brugere.

Typer:

```text
Admin
Sagsbehandler
Rådgiver
Support
```

---

# 15. Task

Fremtidig udvidelse.

Eksempler:

```text
Indhent journal
Ring kunde
Send fuldmagt
Gennemgå afgørelse
```

---

# Bounded Contexts

## Lead Qualification

```text
Lead
Conversation
Score
Assessment
MissingInformation
```

## Customer Onboarding

```text
MitID
Samtykke
Fuldmagt
Dokumenter
```

## Case Management

```text
Case
Timeline
Submission
Decision
```

## AI Services

```text
Entity Extraction
Scoring
Summaries
Document Analysis
```

---

# Laravel Model Roadmap

Første modeller:

```php
Lead
ConversationMessage
LeadScore
LeadEntity
MissingInformation
Assessment
Document
```

Version 2:

```php
CaseModel
Timeline
TimelineEvent
PowerOfAttorney
Submission
Decision
```

---

# Resultat

Når Domain Model er implementeret, har projektet en fælles forståelse af alle centrale objekter, relationer og ansvarsområder.

Dokumentet fungerer som fundament for modeller, migrations, services og fremtidig systemarkitektur.
