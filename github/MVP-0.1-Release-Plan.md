# MVP 0.1 - Release Plan

## Formål

Dette dokument samler den første implementeringspakke for ErstatningsHjælp.

MVP 0.1 skal bevise den vigtigste produktværdi:

```text
En bruger kan beskrive en mulig patientskadesag
↓
AI kan screene sagen
↓
Systemet kan gemme lead, scores og næste spørgsmål
↓
En intern bruger kan se leadet i CRM
```

Dette dokument er den praktiske releaseplan for Issues #1-#15.

---

# Release scope

## MVP 0.1 skal indeholde

```text
Laravel foundation
Core database
Core models
Prompt loading
AI screening service
AI JSON validation
Deterministic scoring
Screening start endpoint
Continue screening endpoint
Internal authentication
Lead list API
Lead detail API
CRM lead board
CRM lead detail page
Lead status updates
```

## MVP 0.1 skal ikke indeholde

```text
MitID
Fuldmagt
Dokumentupload
Journalanalyse
Klagegenerator
Similar Case Engine
Win Probability Engine
Automatisk indsendelse
Produktion deployment
```

---

# Phase 1 - Foundation

## Formål

Få Laravel og databasegrundlaget klar.

## Issues

```text
#1 Sprint 0.2: Install Laravel 12 project foundation
#2 Sprint 0.2: Create core database migrations
#3 Sprint 0.2: Create core Eloquent models
```

## Exit criteria

- Laravel starter lokalt
- `.env.example` findes
- `.env` er ikke committet
- Migrations kører uden fejl
- Core models og relationer findes

## Demo efter Phase 1

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

---

# Phase 2 - AI Service Layer

## Formål

Bygge AI-laget uden først at bygge offentlige endpoints.

## Issues

```text
#4 Sprint 1: Create Prompt Repository
#5 Sprint 1: Create AiScreeningService
#6 Sprint 1: Create AI JSON Validator
#7 Sprint 1: Create LeadScoringService
```

## Exit criteria

- PromptRepository kan læse prompt-filer
- AiScreeningService kan kaldes med input
- AI JSON kan valideres
- LeadScoringService kan beregne scores deterministisk
- Unit tests findes for scoring og validation

## Demo efter Phase 2

Fra Tinker eller test:

```text
Input: kort sagsbeskrivelse
Output: struktureret AI/scoring array
```

---

# Phase 3 - Public Screening API

## Formål

Gøre AI-screening tilgængelig via API.

## Issues

```text
#8 Sprint 1: Implement POST /api/v1/screening/start
#9 Sprint 1: Implement POST /api/v1/screening/{lead}/message
```

## Exit criteria

- Ny screening kan startes
- Lead oprettes
- Brugerbesked gemmes
- AI pipeline kaldes
- Scores, entities, missing information og assessment gemmes
- Næste spørgsmål returneres
- Samtale kan fortsættes

## Demo efter Phase 3

Eksempel:

```http
POST /api/v1/screening/start
```

```json
{
  "message": "Min mor fik ikke diagnosticeret kræft i tide og døde senere."
}
```

Forventet:

```json
{
  "success": true,
  "data": {
    "lead_id": 123,
    "status": "SCREENING",
    "case_category": "B",
    "next_question": "Hvornår blev kræften diagnosticeret?"
  }
}
```

---

# Phase 4 - Internal CRM Foundation

## Formål

Gøre leads synlige og brugbare for interne medarbejdere.

## Issues

```text
#12 Sprint 2: Install internal authentication
#10 Sprint 2: Implement GET /api/v1/leads/{lead}
#11 Sprint 2: Implement GET /api/v1/leads
#13 Sprint 2: Create CRM Lead Board
#14 Sprint 2: Create Lead Detail Page
#15 Sprint 2: Implement Lead Status Updates
```

Bemærk: #12 kan implementeres før #10 og #11, fordi CRM og interne endpoints bør beskyttes tidligt.

## Exit criteria

- Intern bruger kan logge ind
- Lead list API virker
- Lead detail API virker
- CRM lead board viser leads
- Lead detail page viser AI-vurdering, scores og samtale
- Status kan ændres internt

## Demo efter Phase 4

```text
Intern bruger logger ind
↓
Åbner CRM
↓
Ser lead fra AI-screening
↓
Åbner lead detail
↓
Ser scores, entities, conversation og AI summary
↓
Ændrer status til REVIEW eller QUALIFIED
```

---

# Release Candidate Checklist

Før MVP 0.1 kan kaldes release candidate:

- [ ] `composer install` virker på clean clone
- [ ] `.env.example` er opdateret
- [ ] `.env` er ikke committet
- [ ] `php artisan migrate` virker
- [ ] Laravel starter lokalt
- [ ] Screening start endpoint virker
- [ ] Continue screening endpoint virker
- [ ] AI failure håndteres sikkert
- [ ] AI JSON validator afviser ugyldigt output
- [ ] LeadScoringService har unit tests
- [ ] CRM kræver login
- [ ] CRM viser leads
- [ ] Lead detail page viser screeningdata
- [ ] Status update virker
- [ ] Ingen rigtige persondata i repoet
- [ ] Ingen API keys i repoet

---

# Smoke test scenario

## Testcase 1 - Diagnose delay with death

Input:

```text
Min mor fik ikke diagnosticeret kræft i tide og døde senere.
```

Expected:

```text
Lead created
injury_type = diagnose_delay
case_strength > 50
information_quality low/moderate
case_category B or C depending on details
next_question asks about date or diagnosis timing
```

---

## Testcase 2 - Very little information

Input:

```text
Jeg tror der skete en fejl på hospitalet.
```

Expected:

```text
Lead created
information_quality low
next_question asks what happened or when
no legal guarantee
```

---

## Testcase 3 - Possible expired case

Input:

```text
Fejlen skete i 2008, og jeg har vidst det siden 2009.
```

Expected:

```text
Lead created
case_strength low or manual review
recommended_action reject or manual_review
no hard legal conclusion without caution
```

---

# Technical release notes

## Public endpoints

```http
POST /api/v1/screening/start
POST /api/v1/screening/{lead}/message
```

## Protected/internal endpoints

```http
GET /api/v1/leads
GET /api/v1/leads/{lead}
PATCH /api/v1/leads/{lead}/status
GET /crm/leads
GET /crm/leads/{lead}
```

---

# Definition of MVP 0.1 Done

MVP 0.1 er færdig når:

```text
En bruger kan starte en screening
AI kan analysere og returnere næste spørgsmål
Lead og screeningdata gemmes
Intern bruger kan se lead i CRM
Intern bruger kan ændre status
```

Alt andet kommer senere.

---

# Next release after MVP 0.1

Efter MVP 0.1 bør næste release sandsynligvis være:

```text
MVP 0.2 - Testing, Security & Operational Hardening
```

Mulige issues:

```text
Screening fixtures
Scoring tests
AI regression tests
Audit log foundation
Consent model foundation
Security checks
```

---

# Resultat

Denne releaseplan gør det tydeligt, hvad der skal bygges først, og hvornår MVP 0.1 kan betragtes som færdig.
