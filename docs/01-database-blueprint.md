# Dokument 1 - Database Blueprint v1.0

## Formål

Systemet skal kunne:

- modtage leads
- køre AI-screening
- gemme samtaler
- beregne scores
- prioritere sager
- overføre kvalificerede leads til sager

---

## Tabel: leads

Hver person starter som et lead.

| Felt | Type | Beskrivelse |
|---|---|---|
| id | bigint | Primær nøgle |
| uuid | uuid | Ekstern identifikator |
| first_name | varchar | Fornavn |
| last_name | varchar | Efternavn |
| email | varchar | Email |
| phone | varchar | Telefon |
| status | varchar | Lead status |
| created_at | timestamp | Oprettet |
| updated_at | timestamp | Opdateret |

### Statusværdier

```text
NEW
SCREENING
AWAITING_INFO
QUALIFIED
REJECTED
MITID_PENDING
POA_PENDING
DOCUMENTS_PENDING
REVIEW
ACTIVE_CASE
CLOSED
```

---

## Tabel: lead_conversations

Gemmer hele AI-chatten.

| Felt | Type | Beskrivelse |
|---|---|---|
| id | bigint | Primær nøgle |
| lead_id | bigint | Reference til lead |
| role | enum | user, assistant eller system |
| message | text | Beskedindhold |
| created_at | timestamp | Oprettet |

---

## Tabel: lead_scores

De 3 kerne-scores.

| Felt | Type | Beskrivelse |
|---|---|---|
| id | bigint | Primær nøgle |
| lead_id | bigint | Reference til lead |
| case_strength | integer | Sagens styrke |
| information_quality | integer | Informationskvalitet |
| commercial_value | integer | Kommerciel værdi |
| overall_score | integer | Samlet lead score |
| confidence | decimal | AI sikkerhed |

Eksempel:

```json
{
  "case_strength": 82,
  "information_quality": 71,
  "commercial_value": 75,
  "overall_score": 76,
  "confidence": 0.88
}
```

---

## Tabel: lead_entities

AI's udtrukne information.

| Felt | Type | Beskrivelse |
|---|---|---|
| id | bigint | Primær nøgle |
| lead_id | bigint | Reference til lead |
| entity_type | varchar | Type, fx diagnosis eller hospital |
| entity_value | text | Værdi |
| confidence | decimal | AI sikkerhed |

Eksempler:

```text
diagnosis = brystkræft
hospital = Herlev
death = true
injury_type = diagnoseforsinkelse
year = 2017
```

---

## Tabel: lead_documents

Dokumenter uploadet af bruger.

| Felt | Type | Beskrivelse |
|---|---|---|
| id | bigint | Primær nøgle |
| lead_id | bigint | Reference til lead |
| file_name | varchar | Originalt filnavn |
| file_path | varchar | Sikker storage path |
| document_type | varchar | Dokumenttype |
| uploaded_at | timestamp | Uploadtidspunkt |

### Dokumenttyper

```text
journal
afgoerelse
loenseddel
kvittering
fuldmagt
andet
```

---

## Tabel: lead_missing_information

AI's mangelliste.

| Felt | Type | Beskrivelse |
|---|---|---|
| id | bigint | Primær nøgle |
| lead_id | bigint | Reference til lead |
| field_name | varchar | Manglende felt |
| priority | integer | Prioritet |
| resolved | boolean | Er manglen løst? |

Eksempler:

```text
diagnosis_date
hospital
journal
```

---

## Tabel: lead_assessments

AI-resumé og anbefaling.

| Felt | Type | Beskrivelse |
|---|---|---|
| id | bigint | Primær nøgle |
| lead_id | bigint | Reference til lead |
| summary | longtext | AI-resumé |
| recommendation | text | AI-anbefaling |
| generated_at | timestamp | Genereret tidspunkt |

---

## Tabel: cases

Oprettes først når et lead er kvalificeret.

| Felt | Type | Beskrivelse |
|---|---|---|
| id | bigint | Primær nøgle |
| lead_id | bigint | Reference til lead |
| case_number | varchar | Internt sagsnummer |
| status | varchar | Sagsstatus |
| assigned_to | bigint | Sagsbehandler |
| created_at | timestamp | Oprettet |

---

## Tabel: case_events

Tidslinje for sagen.

| Felt | Type | Beskrivelse |
|---|---|---|
| id | bigint | Primær nøgle |
| case_id | bigint | Reference til sag |
| event_date | date | Dato |
| title | varchar | Titel |
| description | text | Beskrivelse |

---

## Tabel: power_of_attorneys

Fuldmagter.

| Felt | Type | Beskrivelse |
|---|---|---|
| id | bigint | Primær nøgle |
| lead_id | bigint | Reference til lead |
| signed_at | timestamp | Underskrevet tidspunkt |
| file_path | varchar | Dokumentplacering |
| valid | boolean | Gyldig? |

---

## Resultat

Når Sprint 1 er færdigt, skal databasen kunne håndtere:

```text
Lead
↓
AI Chat
↓
Scores
↓
Mangelliste
↓
Kvalificering
↓
MitID
↓
Fuldmagt
↓
Dokumenter
↓
Sag
```
