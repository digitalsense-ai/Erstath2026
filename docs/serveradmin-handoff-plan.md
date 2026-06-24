# ServerAdmin Handoff Plan v2.0

## Formål

Dette dokument er skrevet til ServerAdmin eller en teknisk udvikler, der skal overtage opsætning, implementering og senere deployment af ErstatningsHjælp.

Projektet skal kunne bygges uden at ServerAdmin har været med i hele idé- og designfasen.

Derfor samler dette dokument:

- projektstatus
- vigtigste dokumenter
- implementeringsrækkefølge
- GitHub Issues
- sikkerhedsregler
- tekniske beslutninger
- første MVP-milepæl

---

# 1. Kort projektbeskrivelse

ErstatningsHjælp er en AI-understøttet platform til indledende screening og prioritering af potentielle patientskade- og erstatningssager.

Første version skal ikke være et fuldt juridisk sagsbehandlingssystem.

Første version skal bevise denne kernefunktion:

```text
Bruger skriver kort hvad der skete
↓
AI analyserer sagen
↓
Systemet udtrækker fakta
↓
Systemet beregner scores
↓
Systemet stiller næste relevante spørgsmål
↓
Lead vises i internt CRM
```

---

# 2. Projektstatus

Designfasen er afsluttet.

Projektet har nu:

- 17 hoveddokumenter
- 6 prompt-filer
- 6 epics
- GitHub Issues #1-#15
- Sprint 0, Sprint 1 og Sprint 2 specificeret

Laravel-kode er endnu ikke implementeret.

ServerAdmin skal derfor starte med foundation og derefter følge issue-rækkefølgen.

---

# 3. Vigtigste dokumenter

## Core documentation

```text
docs/01-database-blueprint.md
docs/02-ai-engine.md
docs/03-scoring-engine.md
docs/04-conversation-engine.md
docs/05-crm-workflow.md
docs/06-domain-model.md
docs/07-mvp-roadmap.md
docs/08-api-specification.md
docs/09-security-gdpr.md
docs/10-testing-strategy.md
docs/11-laravel-build-queue.md
docs/12-data-dictionary.md
docs/13-ai-cost-operations-model.md
docs/14-business-metrics-kpi-framework.md
docs/15-case-intelligence-roadmap.md
docs/16-project-review.md
docs/17-user-journey.md
```

## Prompt Pack

```text
prompts/01-screening-system-prompt.md
prompts/02-entity-extraction-prompt.md
prompts/03-score-engine-prompt.md
prompts/04-next-question-prompt.md
prompts/05-summary-prompt.md
prompts/06-case-category-prompt.md
```

## Epics

```text
github/Epic-01-Laravel-Foundation.md
github/Epic-02-AI-Screening.md
github/Epic-03-CRM.md
github/Epic-04-Testing.md
github/Epic-05-Security-GDPR.md
github/Epic-06-Documents.md
```

---

# 4. Arbejdsprincip

Alt teknisk arbejde skal ske via GitHub Issues.

Hver opgave skal have:

- tydeligt mål
- konkret opgaveliste
- acceptance criteria
- relevant dokument-reference
- commit eller pull request når opgaven er færdig

Arbejd ikke direkte ud fra løse chatbeskeder.

GitHub Issues er den officielle arbejdsordre.

---

# 5. MVP 0.1 - Implementeringsrækkefølge

## Phase 1 - Laravel Foundation

Start her.

```text
#1 Laravel Foundation
#2 Core Database Migrations
#3 Core Eloquent Models
```

Målet er at få Laravel til at køre lokalt og have databasefundamentet klar.

---

## Phase 2 - AI Service Layer

Fortsæt her efter foundation.

```text
#4 Prompt Repository
#5 AiScreeningService
#6 AI JSON Validator
#7 LeadScoringService
```

Målet er at gøre AI-laget implementerbart og testbart.

---

## Phase 3 - Public Screening API

```text
#8 POST /api/v1/screening/start
#9 POST /api/v1/screening/{lead}/message
```

Målet er at kunne starte og fortsætte en AI-screening.

---

## Phase 4 - Internal CRM API and UI

```text
#10 GET /api/v1/leads/{lead}
#11 GET /api/v1/leads
#12 Internal Authentication
#13 CRM Lead Board
#14 Lead Detail Page
#15 Lead Status Updates
```

Målet er at en intern bruger kan se, forstå og behandle leads.

---

# 6. GitHub Issues overview

## Sprint 0 - Foundation

### Issue #1 - Laravel Foundation

Mål:

- Installere Laravel 12 i repository root
- Sikre at projektet starter lokalt
- Sikre at `.env.example` findes
- Sikre at `.env` ikke committes

Forventede kommandoer:

```bash
composer create-project laravel/laravel .
composer install
cp .env.example .env
php artisan key:generate
php artisan serve
```

Acceptance criteria:

```bash
php artisan serve
```

starter applikationen uden fejl.

---

### Issue #2 - Core Database Migrations

Opret tabeller:

```text
leads
lead_conversations
lead_scores
lead_entities
lead_assessments
lead_missing_information
lead_documents
```

Reference:

```text
docs/01-database-blueprint.md
docs/12-data-dictionary.md
```

Acceptance criteria:

```bash
php artisan migrate
```

kører uden fejl.

---

### Issue #3 - Core Eloquent Models

Opret modeller:

```text
Lead
ConversationMessage
LeadScore
LeadEntity
LeadAssessment
MissingInformation
Document
```

Reference:

```text
docs/06-domain-model.md
```

Acceptance criteria:

- relationer er defineret
- fillable/casts er defineret
- modeller matcher domænemodellen

---

# 7. Sprint 1 - AI Screening

## Issue #4 - Prompt Repository

Opret service:

```php
App\Services\Prompts\PromptRepository
```

Ansvar:

- læse prompt-filer fra `/prompts`
- returnere prompt content som string
- håndtere manglende prompt sikkert

---

## Issue #5 - AiScreeningService

Opret service:

```php
App\Services\AI\AiScreeningService
```

Ansvar:

- kalde AI provider
- bruge PromptRepository
- returnere decoded JSON array
- håndtere provider-fejl sikkert

---

## Issue #6 - AI JSON Validator

Opret service:

```php
App\Services\AI\AiResponseValidator
```

Ansvar:

- validere AI JSON
- validere required fields
- validere score ranges
- validere allowed values
- sikre safe fallback ved fejl

---

## Issue #7 - LeadScoringService

Opret service:

```php
App\Services\Scoring\LeadScoringService
```

Scoreformel:

```text
overall_score =
(case_strength * 0.50)
+
(information_quality * 0.20)
+
(commercial_value * 0.30)
```

Vigtigt:

AI kan foreslå vurdering, men officiel score bør være deterministisk og testbar.

---

## Issue #8 - Screening Start Endpoint

Endpoint:

```http
POST /api/v1/screening/start
```

Ansvar:

- oprette lead
- gemme første brugerbesked
- kalde AI pipeline
- gemme entities, scores, mangler og assessment
- returnere next_question

---

## Issue #9 - Continue Screening Endpoint

Endpoint:

```http
POST /api/v1/screening/{lead}/message
```

Ansvar:

- gemme ny brugerbesked
- bygge relevant kontekst
- kalde AI pipeline
- opdatere lead data
- returnere næste spørgsmål eller handling

---

# 8. Sprint 2 - CRM

## Issue #10 - Get Lead

Endpoint:

```http
GET /api/v1/leads/{lead}
```

Bruges af lead detail page.

---

## Issue #11 - List Leads

Endpoint:

```http
GET /api/v1/leads
```

Bruges af CRM lead board.

Skal understøtte filtrering og pagination.

---

## Issue #12 - Internal Authentication

Public endpoints:

```http
POST /api/v1/screening/start
POST /api/v1/screening/{lead}/message
```

Protected endpoints/routes:

```http
GET /api/v1/leads
GET /api/v1/leads/{lead}
PATCH /api/v1/leads/{lead}/status
GET /crm/*
```

---

## Issue #13 - CRM Lead Board

Route:

```http
GET /crm/leads
```

Viser:

- status
- category
- scores
- summary
- recommended action

---

## Issue #14 - Lead Detail Page

Route:

```http
GET /crm/leads/{lead}
```

Viser:

- kontaktinfo
- samtalehistorik
- scores
- entities
- missing information
- AI summary
- recommended action

---

## Issue #15 - Lead Status Updates

Endpoint:

```http
PATCH /api/v1/leads/{lead}/status
```

Statusser:

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

# 9. Første tekniske demo

Når Issues #1-#9 er færdige, skal systemet kunne:

```text
Bruger skriver:
"Min mor fik ikke diagnosticeret kræft i tide og døde senere."
↓
Laravel modtager request
↓
Lead oprettes
↓
AI analyserer teksten
↓
Entities udtrækkes
↓
Scores beregnes
↓
Next question returneres
```

Når Issues #10-#15 er færdige, skal systemet også kunne:

```text
Intern bruger logger ind
↓
Ser leads i CRM
↓
Åbner lead detail page
↓
Ser AI summary, scores og samtale
↓
Ændrer status
```

---

# 10. Teknologistak

Forventet stack:

```text
Laravel 12
PHP 8.3+
MySQL
Laravel Breeze eller tilsvarende auth
Livewire eller Blade til CRM MVP
OpenAI API
Nginx senere
Hetzner VPS senere
```

---

# 11. Environment variables

Følgende skal defineres i `.env.example`:

```env
APP_NAME=ErstatningsHjaelp
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=erstatningshjaelp
DB_USERNAME=root
DB_PASSWORD=

OPENAI_API_KEY=
OPENAI_DEFAULT_MODEL=
OPENAI_STRONG_MODEL=
OPENAI_MAX_INPUT_TOKENS=
OPENAI_MAX_OUTPUT_TOKENS=
AI_LOG_INPUTS=true
AI_LOG_OUTPUTS=true
AI_MONTHLY_BUDGET_USD=
```

`.env` må aldrig committes.

---

# 12. Vigtige sikkerhedsregler

Der må aldrig committes:

- rigtige CPR-numre
- rigtige patientjournaler
- rigtige helbredsoplysninger
- rigtige fuldmagter
- API-nøgler
- `.env`
- private dokumenter
- database dumps med persondata

Udvikling og tests skal bruge dummy-data.

---

# 13. MVP scope

## Skal bygges først

```text
Laravel foundation
Database
AI screening
Scores
Next question
Lead storage
Basic CRM
Lead status update
```

## Må ikke bygges i MVP 0.1

```text
MitID
Fuldmagt
Dokumentupload
Journalanalyse
Klagegenerator
Similar Case Engine
Win Probability Engine
Automatisk juridisk vurdering
Automatisk indsendelse
```

Disse funktioner kommer senere.

---

# 14. Definition of MVP 0.1 Done

MVP 0.1 er klar når:

- [ ] Laravel kører lokalt
- [ ] Database migrations virker
- [ ] Core models findes
- [ ] PromptRepository virker
- [ ] AiScreeningService virker med mock eller rigtig API
- [ ] AI JSON valideres
- [ ] LeadScoringService virker
- [ ] Screening start endpoint virker
- [ ] Continue screening endpoint virker
- [ ] Intern auth virker
- [ ] CRM lead board virker
- [ ] Lead detail page virker
- [ ] Status update virker
- [ ] Ingen følsomme testdata findes i repoet
- [ ] Basic tests findes for kerneflow

---

# 15. Deployment senere

Deployment er ikke del af første lokale MVP.

Når MVP fungerer lokalt, skal ServerAdmin senere forberede:

- VPS
- PHP version
- Composer
- MySQL
- Nginx
- SSL
- queue worker
- scheduler
- backup
- secure file storage
- monitoring
- log rotation
- restore-test

---

# 16. Anbefalet arbejdsordre til ServerAdmin

Start altid her:

```text
#1
#2
#3
```

Fortsæt derefter:

```text
#4
#5
#6
#7
```

Derefter:

```text
#8
#9
```

Til sidst for første MVP:

```text
#12
#10
#11
#13
#14
#15
```

Bemærk: #12 kan implementeres før #10-#11 hvis CRM skal beskyttes tidligt.

---

# 17. Samlet handoff-konklusion

Projektet er klar til teknisk opstart.

ServerAdmin skal ikke starte med deployment, MitID, dokumentupload eller avanceret AI.

ServerAdmin skal bygge MVP-kernen:

```text
Laravel
↓
Database
↓
AI Screening
↓
API
↓
CRM
```

Når denne kerne virker, kan næste fase planlægges.
