# Dokument 12 - Data Dictionary v2.0

Status: Updated for Enterprise Architecture Baseline
Domain: Platform / Data / Decision / CRM
Related: DOC-001 Architecture Overview, DOC-002 Repository Constitution, DEC-000 Decision Catalog, DEC-005 Routing Recommendation, DEC-007 Information Quality, DEC-013 CRM Assignment, PAT-001 Speak Human Store Structured, PAT-003 Confirm Before Classify

## Formaal

Dette dokument beskriver de vigtigste databasefelter i ErstatningsHjaelp.

Data Dictionary er broen mellem:

```text
Architecture
↓
Decision Pack
↓
Database migrations
↓
Eloquent models
↓
API responses
↓
CRM UI
↓
Audit
```

Dette dokument er opdateret efter Enterprise Architecture Baseline.

Det betyder, at data ikke kun skal understøtte scoring, men også:

- digital first conversation
- empathy reflection
- confirmed vs inferred facts
- confidence levels
- Smart Skip
- decision logging
- routing recommendation
- human review
- CRM handover
- identity, consent and document readiness gates

---

## Generelle principper

### Naming

- Brug engelske tabel- og feltnavne.
- Brug snake_case.
- Brug entydige navne.
- Brug `uuid` til eksterne referencer.
- Brug interne `id`-felter til database relationer.

### Fact reliability

Systemet skal kunne skelne mellem:

```text
ai_inferred
user_confirmed
user_corrected
document_supported
human_reviewed
```

Et AI-inferred fact maa ikke behandles som lige saa sikkert som et confirmed eller human-reviewed fact.

### User-facing vs internal data

Brugeren maa ikke se raw scores, raw labels, routingkoder eller interne beslutningsnavne i foerste samtaleflow.

CRM og audit maa gerne se interne data.

---

# Table: leads

## Formaal

Hovedobjektet for en potentiel sag eller henvendelse.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Intern primaer noegle |
| uuid | uuid | yes | Ekstern reference til API/frontend |
| first_name | varchar | no | Brugerens fornavn, hvis oplyst |
| last_name | varchar | no | Brugerens efternavn, hvis oplyst |
| email | varchar | no | Email, hvis oplyst |
| phone | varchar | no | Telefon, hvis oplyst |
| status | varchar | yes | Aktuel lead-status |
| source | varchar | no | Lead source, fx website eller campaign |
| priority_score | integer | no | Intern prioritet 0-100 |
| current_routing_outcome | varchar | no | Seneste routing outcome |
| current_review_required | boolean | yes | Om human review er kraevet |
| current_review_reason | varchar | no | Primær review reason |
| created_at | timestamp | yes | Oprettet tidspunkt |
| updated_at | timestamp | yes | Senest opdateret |
| deleted_at | timestamp | no | Soft delete |

## MVP status values

```text
NEW
SCREENING
AWAITING_INFO
QUALIFIED
REVIEW
GUIDE_ELSEWHERE
REJECTED
CLOSED
```

`REJECTED` maa kun bruges som intern legacy/administrativ status. User-facing flow skal bruge respectful guide-away language.

## Future reserved statuses

```text
MITID_PENDING
POA_PENDING
DOCUMENTS_PENDING
ACTIVE_CASE
SUBMITTED
DECISION
```

Disse maa ikke drive MVP 0.1 uden separat arkitektur og backlog.

---

# Table: lead_conversations

## Formaal

Gemmer samtalen mellem bruger og system.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primaer noegle |
| lead_id | bigint | yes | Reference til leads.id |
| role | varchar | yes | user, assistant eller system |
| message | text | yes | Beskedindhold |
| step_id | varchar | no | Conversation step, fx empathy_reflection |
| decision_id | varchar | no | Beslutning der producerede beskeden, fx DEC-002 |
| user_facing | boolean | yes | Om beskeden blev vist til bruger |
| metadata | json | no | Prompt version, model info, token info, etc. |
| created_at | timestamp | yes | Oprettet tidspunkt |

## Role values

```text
user
assistant
system
internal
```

---

# Table: lead_facts

## Formaal

Ny anbefalet struktur for fakta. Denne tabel kan erstatte eller supplere den gamle `lead_entities`.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primaer noegle |
| lead_id | bigint | yes | Reference til leads.id |
| fact_key | varchar | yes | Feltets noegle, fx relation, event_date |
| fact_value | text/json | no | Faktisk værdi |
| fact_type | varchar | no | Kategori, fx person, timing, consequence |
| source_type | varchar | yes | ai_inferred, user_confirmed, etc. |
| source_ref | varchar | no | Reference til message, document eller reviewer |
| confidence | decimal | no | 0.00-1.00 |
| confirmation_state | varchar | yes | inferred, confirmed, corrected, unresolved |
| is_routing_relevant | boolean | yes | Om fact bruges i routing |
| created_at | timestamp | yes | Oprettet tidspunkt |
| updated_at | timestamp | yes | Senest opdateret |

## confirmation_state values

```text
inferred
confirmation_pending
confirmed
corrected
unresolved
rejected_by_user
document_supported
human_reviewed
```

## Common fact_key values

```text
affected_person
relation_to_affected_person
treatment_context
injury_type
consequence
event_date
event_period
discovery_date
hospital_or_clinic
diagnosis
previous_claim
previous_decision
documents_available
document_types_mentioned
severity_indicator
commercial_value_signal
```

---

# Table: lead_entities

## Status

Legacy-compatible table.

Denne tabel kan fortsat bruges i MVP, men ny arkitektur boer gradvist flytte vigtig beslutningsdata til `lead_facts`.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primaer noegle |
| lead_id | bigint | yes | Reference til leads.id |
| entity_type | varchar | yes | Type, fx diagnosis eller hospital |
| entity_value | text | no | Værdien |
| confidence | decimal | no | AI confidence 0.00-1.00 |
| source_message_id | bigint | no | Reference til samtalebesked |
| confirmation_state | varchar | no | Anbefalet nyt felt |
| created_at | timestamp | yes | Oprettet tidspunkt |
| updated_at | timestamp | yes | Senest opdateret |

---

# Table: lead_questions

## Formaal

Gemmer sporgsmaal, Smart Skip-beslutninger og screeningsflow.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primaer noegle |
| lead_id | bigint | yes | Reference til leads.id |
| question_key | varchar | yes | Sporgsmaals-ID |
| question_text | text | no | User-facing sporgsmaal |
| action | varchar | yes | ask_now, skip, postpone, confirm, review |
| reason | text | no | Intern grund |
| answer | text/json | no | Svar, hvis stillet |
| answered_at | timestamp | no | Besvaret tidspunkt |
| confidence | decimal | no | Confidence for kendt svar |
| decision_id | varchar | no | Typisk DEC-004 |
| created_at | timestamp | yes | Oprettet tidspunkt |

## action values

```text
ask_now
confirm_naturally
skip_already_known
skip_not_relevant
postpone_until_later
human_review
```

---

# Table: lead_missing_information

## Formaal

Gemmer oplysninger, som mangler for at kunne vaelge naeste beslutning.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primaer noegle |
| lead_id | bigint | yes | Reference til leads.id |
| field_name | varchar | yes | Manglende felt |
| priority | integer | yes | Prioritet 1-10 |
| criticality | varchar | yes | critical, important, optional |
| reason_needed | text | no | Hvorfor feltet er relevant |
| related_decision_id | varchar | no | DEC-ID der mangler data |
| resolved | boolean | yes | Om manglen er lost |
| resolved_at | timestamp | no | Hvornar manglen blev lost |
| created_at | timestamp | yes | Oprettet tidspunkt |
| updated_at | timestamp | yes | Senest opdateret |

---

# Table: lead_scores

## Formaal

Gemmer interne scores.

Scores er beslutningsinput, ikke endelige afgorelser.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primaer noegle |
| lead_id | bigint | yes | Reference til leads.id |
| case_strength | integer | yes | 0-100 |
| information_quality | integer | yes | 0-100 |
| commercial_value | integer | yes | 0-100 |
| overall_score | integer | yes | Vægtet score 0-100 |
| confidence | decimal | yes | Overordnet confidence 0.00-1.00 |
| score_version | varchar | yes | Version af scoring model |
| explanation | json | no | Forklaring pr. score |
| created_at | timestamp | yes | Oprettet tidspunkt |
| updated_at | timestamp | yes | Senest opdateret |

---

# Table: lead_decisions

## Formaal

Gemmer beslutninger og anbefalinger fra Decision Pack.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primaer noegle |
| lead_id | bigint | yes | Reference til leads.id |
| decision_id | varchar | yes | Fx DEC-005 |
| decision_version | varchar | no | Version af decision logic |
| outcome | varchar | yes | Beslutningsoutcome |
| reason | text/json | no | Forklaring internt |
| confidence | decimal | no | Decision confidence |
| input_snapshot | json | no | Relevant state ved beslutningstidspunkt |
| policy_refs | json | no | Relaterede policies |
| pattern_refs | json | no | Relaterede patterns |
| user_facing_message | text | no | Besked vist til bruger |
| created_at | timestamp | yes | Oprettet tidspunkt |

## Common decision_id values

```text
DEC-001
DEC-002
DEC-003
DEC-004
DEC-005
DEC-006
DEC-007
DEC-008
DEC-009
DEC-010
DEC-011
DEC-012
DEC-013
```

---

# Table: lead_reviews

## Formaal

Gemmer human review krav og review-resultater.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primaer noegle |
| lead_id | bigint | yes | Reference til leads.id |
| review_required | boolean | yes | Om review er kraevet |
| review_reason | varchar | no | Primær grund |
| review_notes | text | no | Interne noter |
| assigned_to | bigint | no | Intern bruger |
| status | varchar | yes | pending, in_progress, completed |
| outcome | varchar | no | Reviewer outcome |
| completed_at | timestamp | no | Afsluttet tidspunkt |
| created_at | timestamp | yes | Oprettet tidspunkt |
| updated_at | timestamp | yes | Senest opdateret |

## review_reason values

```text
low_confidence
sensitive_context
serious_indicators
contradictory_information
unclear_timing
unclear_relation
previous_decision_mentioned
policy_required_review
missing_critical_information
```

---

# Table: lead_assessments

## Formaal

Gemmer AI's interne resumé og assessment.

Denne tabel maa ikke bruges som eneste beslutningsgrundlag.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primaer noegle |
| lead_id | bigint | yes | Reference til leads.id |
| summary | longtext | yes | Internt resumé |
| recommendation | varchar | no | Legacy/anbefalet handling |
| key_facts | json | no | Centrale fakta |
| risk_notes | json | no | Risikonoter |
| confidence | decimal | no | AI confidence |
| generated_at | timestamp | yes | Genereret tidspunkt |
| created_at | timestamp | yes | Oprettet tidspunkt |
| updated_at | timestamp | yes | Senest opdateret |

## Updated recommendation values

```text
continue
collect_more_information
human_review_required
prepare_documents_later
identity_step_when_relevant
consent_step_when_relevant
guide_elsewhere_respectfully
crm_assignment
unknown
```

Legacy values such as `reject`, `request_documents` and `mitid_flow` must be mapped through Decision Pack before use.

---

# Table: lead_handover_snapshots

## Formaal

Gemmer samlet CRM-handover fra Conversation Engine og Decision Pack.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primaer noegle |
| lead_id | bigint | yes | Reference til leads.id |
| original_description | longtext | no | Brugerens oprindelige beskrivelse |
| empathy_reflection | text | no | Refleksion vist til bruger |
| confirmation_status | varchar | no | Status for brugerbekræftelse |
| confirmed_facts | json | no | Confirmed facts |
| inferred_facts | json | no | Inferred facts |
| unresolved_facts | json | no | Unresolved facts |
| missing_information | json | no | Manglende info |
| scores | json | no | Aktuelle scores |
| decisions | json | no | Seneste beslutninger |
| routing_recommendation | varchar | no | Seneste routing |
| review_reason | varchar | no | Review reason hvis relevant |
| suggested_next_action | varchar | no | Foreslået næste handling |
| user_facing_message | text | no | Seneste besked vist til bruger |
| created_at | timestamp | yes | Oprettet tidspunkt |

---

# Table: lead_documents

## Formaal

Gemmer metadata om dokumenter.

MVP 0.1 kan registrere document readiness, men aktiv upload og analyse er future scope medmindre særskilt besluttet.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primaer noegle |
| lead_id | bigint | yes | Reference til leads.id |
| file_name | varchar | no | Originalt filnavn |
| file_path | varchar | no | Intern storage path |
| mime_type | varchar | no | Filtype |
| file_size | integer | no | Filstorrelse |
| document_type | varchar | no | Dokumenttype |
| readiness_state | varchar | no | mentioned, available, needed_later, not_needed_now |
| uploaded_by | bigint | no | Bruger der uploadede fil |
| uploaded_at | timestamp | no | Uploadtidspunkt |
| created_at | timestamp | yes | Oprettet tidspunkt |
| updated_at | timestamp | yes | Senest opdateret |

---

# Table: consents

## Formaal

Gemmer samtykke og authorization-state.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primaer noegle |
| lead_id | bigint | yes | Reference til lead |
| consent_type | varchar | yes | Type samtykke |
| consent_purpose | text | yes | Hvorfor samtykke indhentes |
| consent_text_version | varchar | yes | Version af samtykketekst |
| status | varchar | yes | pending, accepted, withdrawn, expired |
| accepted_at | timestamp | no | Accepteret tidspunkt |
| withdrawn_at | timestamp | no | Tilbagetrukket tidspunkt |
| created_at | timestamp | yes | Oprettet tidspunkt |
| updated_at | timestamp | yes | Senest opdateret |

---

# Table: ai_runs

## Formaal

Gemmer AI-koersler til audit, debugging og omkostningskontrol.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primaer noegle |
| lead_id | bigint | no | Reference til leads.id |
| provider | varchar | yes | AI provider |
| model | varchar | yes | Modelnavn |
| prompt_name | varchar | yes | Prompt-fil |
| prompt_version | varchar | no | Prompt version |
| input_hash | varchar | no | Hash af input |
| input_json | json | no | Minimeret input |
| output_json | json | no | AI response |
| output_validated | boolean | yes | Om output er valideret |
| validation_errors | json | no | Valideringsfejl |
| tokens_input | integer | no | Input tokens |
| tokens_output | integer | no | Output tokens |
| cost_estimate | decimal | no | Estimeret omkostning |
| success | boolean | yes | Om kald lykkedes |
| error_message | text | no | Fejlbesked |
| created_at | timestamp | yes | Oprettet tidspunkt |

Undgå at logge unødvendige følsomme oplysninger.

---

# Table: cases

## Status

Future scope.

Oprettes først når et lead bliver til en aktiv sag.

MVP 0.1 bør ikke afhænge af fuld case lifecycle.

---

# Table: audit_logs

## Formaal

Logger væsentlige handlinger.

| Field | Type | Required | Description |
|---|---|---:|---|
| id | bigint | yes | Primaer noegle |
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
lead.status_changed
conversation.message_created
fact.inferred
fact.confirmed
question.skipped
decision.created
review.required
review.completed
crm.assignment_changed
consent.accepted
document.readiness_updated
ai.run_completed
```

---

# Implementation Notes

## MVP recommended minimum

For MVP 0.1, implement at minimum:

- leads
- lead_conversations
- lead_facts or lead_entities with confirmation_state
- lead_missing_information
- lead_scores
- lead_decisions
- lead_reviews
- lead_handover_snapshots
- ai_runs
- audit_logs

## Future tables

Future releases can expand:

- lead_documents
- consents
- cases
- document analysis tables
- communication tables
- payment or economic tables

## Migration rule

Do not remove legacy fields immediately.

Instead:

1. add new decision-compatible fields
2. map legacy fields to new outcomes
3. update API responses
4. update CRM UI
5. deprecate old fields only after implementation is stable
