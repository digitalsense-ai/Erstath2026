# Dokument 12 - Data Dictionary v1.0

## Formål

Dette dokument beskriver de vigtigste databasefelter i ErstatningsHjælp.

Data Dictionary bruges som bro mellem:

```text
Database Blueprint
↓
Laravel migrations
↓
Eloquent models
↓
API responses
↓
CRM UI
```

Målet er, at udviklere ikke skal gætte hvad felterne betyder.

---

# Generelle principper

## Navngivning

- Brug engelske tabel- og feltnavne i databasen.
- Brug snake_case.
- Brug entydige navne.
- Brug `uuid` til eksterne referencer.
- Brug interne `id`-felter til database relationer.

---

## Timestamps

De fleste tabeller bør have:

```text
created_at
updated_at
```

Nogle tabeller bør også have:

```text
deleted_at
```

hvis soft delete er relevant.

---

# Table: leads

## Formål

Hver person starter som et lead.

Lead er hovedobjektet i screeningfasen.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Intern primær nøgle |
| uuid | uuid | yes | Ekstern reference, bruges i API og frontend |
| first_name | varchar | no | Brugerens fornavn |
| last_name | varchar | no | Brugerens efternavn |
| email | varchar | no | Brugerens email |
| phone | varchar | no | Brugerens telefonnummer |
| status | varchar | yes | Aktuel lead-status |
| source | varchar | no | Hvor leadet kom fra, fx website eller campaign |
| case_category | varchar | no | A, B, C eller D |
| priority_score | integer | no | Intern prioritet 0-100 |
| created_at | timestamp | yes | Oprettet tidspunkt |
| updated_at | timestamp | yes | Senest opdateret |
| deleted_at | timestamp | no | Soft delete |

## Status values

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

## Notes

Kontaktfelter er frivillige i MVP, fordi brugeren først skal kunne starte screening uden lang formular.

---

# Table: lead_conversations

## Formål

Gemmer samtalen mellem bruger og AI.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primær nøgle |
| lead_id | bigint | yes | Reference til leads.id |
| role | varchar | yes | user, assistant eller system |
| message | text | yes | Selve beskeden |
| metadata | json | no | Ekstra data, fx prompt version eller token info |
| created_at | timestamp | yes | Oprettet tidspunkt |

## Role values

```text
user
assistant
system
```

## Notes

Denne tabel er vigtig for at kunne rekonstruere screeningforløbet.

---

# Table: lead_scores

## Formål

Gemmer de tre hovedscores og samlet score.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primær nøgle |
| lead_id | bigint | yes | Reference til leads.id |
| case_strength | integer | yes | Sagens styrke 0-100 |
| information_quality | integer | yes | Informationskvalitet 0-100 |
| commercial_value | integer | yes | Kommerciel værdi 0-100 |
| overall_score | integer | yes | Vægtet samlet score 0-100 |
| confidence | decimal | yes | AI/system confidence 0.00-1.00 |
| explanation | json | no | Forklaring pr. score |
| created_at | timestamp | yes | Oprettet tidspunkt |
| updated_at | timestamp | yes | Senest opdateret |

## Score ranges

```text
0-39 = lav
40-69 = middel/usikker
70-84 = stærk
85-100 = meget stærk
```

## Notes

Der bør som udgangspunkt kun være én aktuel score pr. lead.

Senere kan man tilføje score history.

---

# Table: lead_entities

## Formål

Gemmer strukturerede fakta udtrukket af AI.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primær nøgle |
| lead_id | bigint | yes | Reference til leads.id |
| entity_type | varchar | yes | Type, fx diagnosis eller hospital |
| entity_value | text | no | Værdien |
| confidence | decimal | no | AI confidence 0.00-1.00 |
| source_message_id | bigint | no | Reference til samtalebesked |
| created_at | timestamp | yes | Oprettet tidspunkt |
| updated_at | timestamp | yes | Senest opdateret |

## Common entity_type values

```text
diagnosis
injury_type
hospital
doctor
event_year
event_date
diagnosis_year
diagnosis_date
death
permanent_injury
economic_loss
documents_available
previous_claim
previous_decision
patient_relation
```

## Notes

Key-value modellen gør det let at udvide entities uden migration hver gang.

---

# Table: lead_missing_information

## Formål

Gemmer oplysninger som AI mener mangler.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primær nøgle |
| lead_id | bigint | yes | Reference til leads.id |
| field_name | varchar | yes | Manglende felt |
| priority | integer | yes | Prioritet 1-10 |
| resolved | boolean | yes | Om manglen er løst |
| resolved_at | timestamp | no | Hvornår manglen blev løst |
| created_at | timestamp | yes | Oprettet tidspunkt |
| updated_at | timestamp | yes | Senest opdateret |

## Priority values

```text
10 = kritisk
7-9 = høj prioritet
4-6 = middel prioritet
1-3 = lav prioritet
```

## Examples

```text
event_date
hospital
diagnosis_date
documents_available
previous_decision
```

---

# Table: lead_assessments

## Formål

Gemmer AI's interne vurdering og resumé.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primær nøgle |
| lead_id | bigint | yes | Reference til leads.id |
| summary | longtext | yes | Kort internt resumé |
| recommendation | varchar | no | Anbefalet handling |
| key_facts | json | no | Centrale fakta |
| risk_notes | json | no | Risikonoter |
| confidence | decimal | no | AI confidence |
| generated_at | timestamp | yes | Hvornår vurderingen blev genereret |
| created_at | timestamp | yes | Oprettet tidspunkt |
| updated_at | timestamp | yes | Senest opdateret |

## recommendation values

```text
reject
collect_more_information
request_documents
manual_review
mitid_flow
unknown
```

---

# Table: lead_documents

## Formål

Gemmer metadata om dokumenter uploadet af bruger.

Filen selv gemmes i sikker storage, ikke i databasen.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primær nøgle |
| lead_id | bigint | yes | Reference til leads.id |
| file_name | varchar | yes | Originalt filnavn |
| file_path | varchar | yes | Intern storage path |
| mime_type | varchar | no | Filtype |
| file_size | integer | no | Filstørrelse i bytes |
| document_type | varchar | yes | Dokumenttype |
| uploaded_by | bigint | no | Bruger der uploadede filen |
| uploaded_at | timestamp | yes | Uploadtidspunkt |
| created_at | timestamp | yes | Oprettet tidspunkt |
| updated_at | timestamp | yes | Senest opdateret |

## document_type values

```text
journal
afgoerelse
loenseddel
kvittering
fuldmagt
andet
```

## Notes

Filer må aldrig gemmes i public folder.

---

# Table: ai_runs

## Formål

Gemmer AI-kørsler til debugging, audit og omkostningskontrol.

Denne tabel er ikke nødvendig i første mini-MVP, men anbefales tidligt.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primær nøgle |
| lead_id | bigint | no | Reference til leads.id |
| provider | varchar | yes | AI provider, fx openai |
| model | varchar | yes | Modelnavn |
| prompt_name | varchar | yes | Prompt-fil |
| prompt_version | varchar | no | Prompt version |
| input_hash | varchar | no | Hash af input |
| input_json | json | no | Input til AI, helst minimeret |
| output_json | json | no | AI response |
| tokens_input | integer | no | Input tokens |
| tokens_output | integer | no | Output tokens |
| cost_estimate | decimal | no | Estimeret omkostning |
| success | boolean | yes | Om kaldet lykkedes |
| error_message | text | no | Fejlbesked hvis relevant |
| created_at | timestamp | yes | Oprettet tidspunkt |

## Notes

Undgå at logge unødvendige følsomme oplysninger.

---

# Table: cases

## Formål

Oprettes først når et lead bliver til en reel sag.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primær nøgle |
| lead_id | bigint | yes | Reference til leads.id |
| case_number | varchar | yes | Internt sagsnummer |
| status | varchar | yes | Sagsstatus |
| assigned_to | bigint | no | Ansvarlig medarbejder |
| expected_value | integer | no | Forventet erstatningsværdi |
| expected_revenue | integer | no | Forventet omsætning |
| created_at | timestamp | yes | Oprettet tidspunkt |
| updated_at | timestamp | yes | Senest opdateret |

## status values

```text
ACTIVE_CASE
SUBMITTED
DECISION
CLOSED
```

---

# Table: audit_logs

## Formål

Logger væsentlige handlinger i systemet.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primær nøgle |
| user_id | bigint | no | Intern bruger |
| lead_id | bigint | no | Reference til lead |
| case_id | bigint | no | Reference til sag |
| action | varchar | yes | Handling |
| metadata | json | no | Ekstra information |
| ip_address | varchar | no | IP-adresse |
| user_agent | text | no | Browser/klient |
| created_at | timestamp | yes | Tidspunkt |

## Example actions

```text
lead.created
lead.viewed
lead.status_changed
document.uploaded
consent.accepted
ai.screening_generated
```

---

# Table: consents

## Formål

Gemmer samtykker.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primær nøgle |
| lead_id | bigint | yes | Reference til lead |
| consent_type | varchar | yes | Type samtykke |
| consent_text_version | varchar | yes | Version af samtykketekst |
| accepted_at | timestamp | no | Hvornår accepteret |
| withdrawn_at | timestamp | no | Hvornår trukket tilbage |
| ip_address | varchar | no | IP-adresse |
| user_agent | text | no | Browser/klient |
| created_at | timestamp | yes | Oprettet tidspunkt |
| updated_at | timestamp | yes | Senest opdateret |

## consent_type examples

```text
screening
health_data_processing
document_processing
power_of_attorney
```

---

# MVP Priority

## Must have for MVP 0.1.0

```text
leads
lead_conversations
lead_scores
lead_entities
lead_missing_information
lead_assessments
ai_runs
```

## Later

```text
lead_documents
cases
audit_logs
consents
```

---

# Resultat

Data Dictionary gør databasen implementerbar uden at miste betydningen bag hvert felt.

Dette dokument skal holdes opdateret, når migrations ændres.
