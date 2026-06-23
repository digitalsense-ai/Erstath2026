# Dokument 11 - Laravel Build Queue v1.0

## Formål

Dette dokument omsætter arkitektur, API, prompts, database og teststrategi til en konkret byggeplan for Laravel MVP'en.

Målet er, at en udvikler senere kan følge denne kø uden at skulle træffe store arkitekturbeslutninger selv.

---

# Overordnet mål

Første tekniske MVP skal kunne:

```text
Bruger skriver kort hvad der skete
↓
Laravel modtager beskeden
↓
Lead oprettes
↓
AI analyserer beskeden
↓
Entities, scores og mangler gemmes
↓
System returnerer næste spørgsmål
↓
Lead vises i CRM
```

---

# Sprint 0.2 - Laravel Foundation

## Formål

Etablere Laravel-projektets tekniske fundament.

## Issues

### Issue #1 - Install Laravel 12 project foundation

Afhængigheder:

```text
Ingen
```

Opgaver:

- Installer Laravel 12 i repository root
- Konfigurer `.env.example`
- Sikr at `.env` ikke committes
- Verificer lokal opstart
- Tilføj standard `.gitignore`

Definition of Done:

```bash
composer install
php artisan key:generate
php artisan serve
```

virker lokalt.

---

### Issue #2 - Create core database migrations

Afhængigheder:

```text
Issue #1
```

Opret migrations for:

- leads
- lead_conversations
- lead_scores
- lead_entities
- lead_assessments
- lead_missing_information
- lead_documents

Definition of Done:

```bash
php artisan migrate
```

kører uden fejl.

---

### Issue #3 - Create core Eloquent models

Afhængigheder:

```text
Issue #2
```

Opret modeller:

- Lead
- ConversationMessage
- LeadScore
- LeadEntity
- LeadAssessment
- MissingInformation
- Document

Definition of Done:

- relationer er defineret
- fillable/casts er defineret
- basic factories er oprettet hvor relevant

---

# Sprint 1 - AI Screening Backend

## Formål

Bygge første fungerende AI-screening pipeline.

---

### Issue #4 - Create Prompt Repository

Afhængigheder:

```text
Issue #1
```

Opgaver:

- Opret Laravel service til at læse prompt-filer fra `/prompts`
- Versionér promptnavne
- Gør prompt loading testbar

Foreslået klasse:

```php
App\Services\Prompts\PromptRepository
```

Definition of Done:

- Kan læse alle prompt-filer
- Returnerer tekstindhold som string
- Tests findes for mindst én prompt

---

### Issue #5 - Create AiScreeningService

Afhængigheder:

```text
Issue #4
```

Foreslået klasse:

```php
App\Services\AI\AiScreeningService
```

Ansvar:

- kalde OpenAI API
- sende korrekt prompt og input
- returnere decoded JSON
- håndtere ugyldig JSON sikkert

Definition of Done:

- Service kan kaldes med en besked
- Returnerer PHP array
- Logger fejl sikkert
- Ingen API keys hardcodes

---

### Issue #6 - Create AI JSON Validator

Afhængigheder:

```text
Issue #5
```

Foreslået klasse:

```php
App\Services\AI\AiResponseValidator
```

Ansvar:

- validere required fields
- validere allowed values
- sikre at scores er mellem 0 og 100
- sikre at `next_question` kun indeholder ét spørgsmål

Definition of Done:

- Ugyldig JSON afvises
- Manglende required fields opdages
- Tests findes for valid/invalid responses

---

### Issue #7 - Create ScoringService

Afhængigheder:

```text
Issue #2
```

Foreslået klasse:

```php
App\Services\Scoring\LeadScoringService
```

Ansvar:

- beregne Case Strength
- beregne Information Quality
- beregne Commercial Value
- beregne Overall Score
- returnere score explanation

Vigtigt:

Den officielle score bør være deterministisk og testbar.

Definition of Done:

- Unit tests for scoring rules
- Overall Score formel virker
- Expired/forældet sag håndteres

---

# Sprint 2 - Screening API

## Formål

Gøre AI-screening tilgængelig via Laravel API.

---

### Issue #8 - Implement POST /api/v1/screening/start

Afhængigheder:

```text
Issue #5
Issue #6
Issue #7
```

Endpoint:

```http
POST /api/v1/screening/start
```

Ansvar:

- opret Lead
- gem første brugerbesked
- kald AI Screening Service
- gem entities
- gem scores
- gem missing information
- returner next_question

Definition of Done:

- Endpoint matcher docs/08-api-specification.md
- Feature test findes
- Fejl håndteres pænt

---

### Issue #9 - Implement POST /api/v1/screening/{lead}/message

Afhængigheder:

```text
Issue #8
```

Endpoint:

```http
POST /api/v1/screening/{lead}/message
```

Ansvar:

- gem ny brugerbesked
- hent relevant kontekst
- kør AI igen
- opdater lead data
- returner næste spørgsmål eller handling

Definition of Done:

- Kan fortsætte samtale
- Opdaterer scores/entities/mangler
- Feature test findes

---

### Issue #10 - Implement GET /api/v1/leads/{lead}

Afhængigheder:

```text
Issue #3
```

Endpoint:

```http
GET /api/v1/leads/{lead}
```

Ansvar:

- returnere lead
- returnere scores
- returnere entities
- returnere samtale
- returnere mangelliste
- returnere assessment

Definition of Done:

- JSON matcher API spec
- Feature test findes

---

### Issue #11 - Implement GET /api/v1/leads

Afhængigheder:

```text
Issue #10
```

Endpoint:

```http
GET /api/v1/leads
```

Ansvar:

- liste leads
- filtrere på status
- filtrere på score
- sortere efter prioritet eller nyeste

Definition of Done:

- Pagination findes
- Filtrering virker
- Feature test findes

---

# Sprint 3 - Basic CRM Dashboard

## Formål

Give interne brugere et første overblik over leads.

---

### Issue #12 - Install internal auth

Afhængigheder:

```text
Issue #1
```

Opgaver:

- Installer Laravel Breeze eller tilsvarende
- Opret login
- Beskyt CRM routes

Definition of Done:

- CRM kræver login
- Public screening kræver ikke login

---

### Issue #13 - Create CRM lead board

Afhængigheder:

```text
Issue #11
Issue #12
```

Opgaver:

- Vis leads grupperet efter status
- Vis scores
- Vis case category
- Vis kort summary

Definition of Done:

- Intern bruger kan se leads
- Board matcher CRM workflow

---

### Issue #14 - Create Lead detail page

Afhængigheder:

```text
Issue #13
```

Opgaver:

- Vis samtalehistorik
- Vis entities
- Vis scores
- Vis mangelliste
- Vis AI-resumé

Definition of Done:

- Sagsbehandler kan forstå leadet uden at læse rå JSON

---

# Sprint 4 - Testing & Hardening

## Formål

Gøre MVP stabil og testbar.

---

### Issue #15 - Add screening fixtures

Afhængigheder:

```text
Issue #8
```

Opgaver:

- Opret test fixture-fil
- Tilføj mindst 10 dummy cases
- Brug cases til AI regression

Definition of Done:

- Ingen rigtige persondata
- Tests kan køres lokalt

---

### Issue #16 - Add security checks

Afhængigheder:

```text
Issue #12
```

Opgaver:

- Tjek at .env ikke committes
- Tjek debug endpoints kun virker local
- Tjek CRM auth
- Tjek document storage ikke er public

Definition of Done:

- Security tests findes
- Kritiske fejl stopper deployment senere

---

# Sprint 5 - Document Center Foundation

## Formål

Forberede dokumentupload uden fuld AI-journalanalyse.

---

### Issue #17 - Implement document upload endpoint

Afhængigheder:

```text
Issue #3
Issue #12
```

Endpoint:

```http
POST /api/v1/leads/{lead}/documents
```

Definition of Done:

- Filer gemmes udenfor public folder
- Dokumenttype valideres
- Metadata gemmes i database

---

# Implementation Rules

## Regel 1 - Ingen produktionsdata

Der må ikke bruges rigtige personoplysninger i kode, tests eller fixtures.

## Regel 2 - AI må ikke være eneste sandhed

ScoringService skal være testbar uden AI.

## Regel 3 - Små pull requests

Hver issue bør kunne løses i en separat PR.

## Regel 4 - Dokumentation opdateres sammen med kode

Hvis API, database eller prompts ændres, skal docs opdateres.

---

# Definition of MVP Done

MVP 0.1.0 er klar når:

- [ ] Laravel kører lokalt
- [ ] Database migrations virker
- [ ] Lead kan oprettes
- [ ] Screening start endpoint virker
- [ ] Conversation endpoint virker
- [ ] AI JSON valideres
- [ ] Scores gemmes
- [ ] Lead kan ses i CRM
- [ ] Tests findes for kerneflow
- [ ] Ingen følsomme testdata findes i repoet

---

# Resultat

Laravel Build Queue gør projektet klar til implementering.

Denne kø skal bruges sammen med GitHub Issues og ServerAdmin Handoff Plan.
