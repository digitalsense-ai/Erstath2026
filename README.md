# ErstatningsHjælp

ErstatningsHjælp er et AI-baseret screenings- og CRM-system til vurdering og prioritering af potentielle patientskade- og erstatningssager.

Målet er ikke, at AI skal afgøre en sag juridisk. Målet er at bruge AI til at:

- modtage leads
- stille intelligente opfølgende spørgsmål
- udtrække relevante fakta
- beregne interne scores
- prioritere de bedste sager
- forberede sagsbehandlerens arbejde

Systemet skal fungere som en lead engine, hvor svage eller irrelevante sager filtreres tidligt fra, mens lovende sager senere kan sendes videre til næste kvalificeringstrin og manuel vurdering.

---

# Current project status

```text
Current phase: Implementation preparation complete
Current milestone: MVP 0.1 - AI Screening & CRM
Current priority: PR-001 Laravel Foundation
Implementation status: Not started
ServerAdmin status: Awaiting implementation start
```

## Project assets

```text
Documents: 21
Prompts: 6
Epics: 8
GitHub Issues: 30 planned/open + 1 closed duplicate
PR Plans: 9 active implementation plans
Release documents: 2
Handoff plan: 1
Governance document: 1
```

## First build order

```text
PR-001 Laravel Foundation
PR-002 Core Database Migrations
PR-003 Core Eloquent Models
PR-004 Prompt Repository
PR-005 AiScreeningService
PR-006 AI JSON Validator
PR-007 LeadScoringService
PR-008 Screening Start Endpoint
PR-009 Continue Screening Endpoint
```

After PR-009, continue with CRM implementation from GitHub Issues #10-#15.

---

# MVP 0.1 goal

MVP 0.1 must prove the core product flow:

```text
User writes a short case description
↓
AI screens the case
↓
System extracts structured facts
↓
System calculates internal scores
↓
System asks the next relevant question
↓
Lead is saved
↓
Internal user reviews lead in CRM
```

---

# Kerneidé

Traditionelt flow:

```text
Landing page
↓
Long form
↓
Manual review
```

ErstatningsHjælp-flow:

```text
Landing page
↓
Bruger fortæller kort hvad der skete
↓
AI stiller få intelligente spørgsmål
↓
System beregner 3 scores
↓
Kun lovende sager går videre
↓
Sagsbehandler vurderer lead i CRM
```

---

# De 3 hovedscores

## 1. Case Strength Score

Måler hvor stærk sagen umiddelbart ser ud.

## 2. Information Quality Score

Måler hvor meget brugbar information systemet har.

## 3. Commercial Value Score

Måler om sagen er økonomisk interessant for virksomheden.

## Overall Score

```text
overall_score =
(case_strength * 0.50)
+
(information_quality * 0.20)
+
(commercial_value * 0.30)
```

---

# Sagskategorier

| Kategori | Beskrivelse | Handling |
|---|---|---|
| A | Stærk sag | Gå videre til næste kvalificeringstrin |
| B | Lovende, men mangler info | Indhent flere oplysninger |
| C | Usikker sag | Manuel vurdering eller flere oplysninger |
| D | Svag/irrelevant/forældet | Afvis venligt eller giv generel information |

---

# Foreslået teknologistak

- Laravel 12
- Livewire 3 eller Blade til første CRM
- MySQL
- OpenAI API via isoleret service-lag
- Laravel Breeze eller tilsvarende auth
- Hetzner VPS eller tilsvarende VPS senere

---

# Repository structure

```text
erstatningshjaelp/
│
├── docs/
│   ├── 01-database-blueprint.md
│   ├── 02-ai-engine.md
│   ├── 03-scoring-engine.md
│   ├── 04-conversation-engine.md
│   ├── 05-crm-workflow.md
│   ├── 06-domain-model.md
│   ├── 07-mvp-roadmap.md
│   ├── 08-api-specification.md
│   ├── 09-security-gdpr.md
│   ├── 10-testing-strategy.md
│   ├── 11-laravel-build-queue.md
│   ├── 12-data-dictionary.md
│   ├── 13-ai-cost-operations-model.md
│   ├── 14-business-metrics-kpi-framework.md
│   ├── 15-case-intelligence-roadmap.md
│   ├── 16-project-review.md
│   ├── 17-user-journey.md
│   ├── 18-architecture-governance.md
│   ├── 19-architecture-review-final.md
│   ├── 20-data-dictionary-v2.md
│   ├── 21-consistency-review.md
│   ├── serveradmin-handoff-plan.md
│   └── sprint-00.md
│
├── prompts/
│   ├── 01-screening-system-prompt.md
│   ├── 02-entity-extraction-prompt.md
│   ├── 03-score-engine-prompt.md
│   ├── 04-next-question-prompt.md
│   ├── 05-summary-prompt.md
│   └── 06-case-category-prompt.md
│
├── github/
│   ├── Epic-01-Laravel-Foundation.md
│   ├── Epic-02-AI-Screening.md
│   ├── Epic-03-CRM.md
│   ├── Epic-04-Testing.md
│   ├── Epic-05-Security-GDPR.md
│   ├── Epic-06-Documents.md
│   ├── Epic-07-Testing-QA-Safety-Net.md
│   ├── Epic-08-Security-Compliance-Hardening.md
│   ├── MVP-0.1-Release-Plan.md
│   ├── MVP-0.1-Milestone.md
│   ├── PR-001-Laravel-Foundation.md
│   ├── PR-002-Core-Database-Migrations.md
│   ├── PR-003-Core-Eloquent-Models.md
│   ├── PR-004-Prompt-Repository.md
│   ├── PR-005-AiScreeningService.md
│   ├── PR-006-AI-JSON-Validator.md
│   ├── PR-007-LeadScoringService.md
│   ├── PR-008-Screening-Start-Endpoint.md
│   └── PR-009-Continue-Screening-Endpoint.md
│
├── app/
├── database/
├── resources/
├── routes/
├── tests/
└── README.md
```

Laravel-projektet placeres som udgangspunkt direkte i repo-roden, medmindre andet besluttes senere.

---

# MVP 0.1 scope

## Version 0.1.0 skal indeholde

- Laravel foundation
- Core database migrations
- Core Eloquent models
- Prompt Repository
- AI screening service
- AI JSON validation
- Deterministic scoring service
- Screening start endpoint
- Continue screening endpoint
- Internal authentication
- Lead list API
- Lead detail API
- CRM lead board
- CRM lead detail page
- Lead status updates
- Testing and QA foundation
- Security and compliance foundation

## Version 0.1.0 skal ikke indeholde

- Advanced identity integrations
- Authorization signing flows
- Active file upload implementation
- Advanced document analysis
- Complaint generator
- Automated final decision
- Automated compensation calculation
- Automated external submission
- Production deployment

---

# MVP-active status flow

```text
NEW
↓
SCREENING
↓
AWAITING_INFO
↓
QUALIFIED
↓
REVIEW
↓
CLOSED
```

Sidegren:

```text
REJECTED
```

Future-reserved statuses are documented in the data dictionary and must not be activated before the related flow exists.

---

# Security and compliance

Dette projekt kan senere komme til at håndtere følsomme oplysninger.

Derfor gælder følgende fra start:

- Ingen rigtige CPR-numre i kode, tests eller seed-data
- Ingen rigtigt sagsmateriale i repoet
- Ingen API-nøgler i GitHub
- Real local environment files må aldrig committes
- Brug kun dummy-data i udvikling
- Dokumenter og uploads skal senere opbevares sikkert udenfor public webroot
- Public endpoints må ikke eksponere raw AI/debug payloads

---

# Key project documents

Start her:

```text
README.md
docs/serveradmin-handoff-plan.md
github/MVP-0.1-Release-Plan.md
github/MVP-0.1-Milestone.md
docs/18-architecture-governance.md
docs/19-architecture-review-final.md
docs/20-data-dictionary-v2.md
docs/21-consistency-review.md
```

Hvis du skal implementere:

```text
github/PR-001-Laravel-Foundation.md
```

Hvis du skal forstå arkitektur:

```text
docs/01-database-blueprint.md
docs/02-ai-engine.md
docs/03-scoring-engine.md
docs/04-conversation-engine.md
docs/05-crm-workflow.md
docs/06-domain-model.md
docs/08-api-specification.md
docs/19-architecture-review-final.md
docs/20-data-dictionary-v2.md
docs/21-consistency-review.md
```

---

# Næste skridt

Start implementering med:

```text
github/PR-001-Laravel-Foundation.md
```

Derefter følges PR-planerne i rækkefølge:

```text
PR-001
PR-002
PR-003
PR-004
PR-005
PR-006
PR-007
PR-008
PR-009
```

Når PR-009 er færdig, er AI-screening-kernen bygget.

Derefter fortsættes med CRM-issues:

```text
#10
#11
#12
#13
#14
#15
```

---

# Projektprincip

Byg småt først.

Første mål er ikke at bygge hele sagsmotoren.

Første mål er at bevise:

> Kan AI modtage en kort sagsbeskrivelse og returnere struktureret screening med scores, manglende oplysninger og næste bedste spørgsmål?

Hvis det virker, kan resten bygges ovenpå.
