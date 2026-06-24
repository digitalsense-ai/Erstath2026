# 18 - Architecture Governance

## Formål

Dette dokument definerer, hvilke tekniske beslutninger udviklere selv må træffe, og hvilke beslutninger der kræver godkendelse før implementering.

Målet er at beskytte MVP 0.1 mod scope creep, uventede arkitekturændringer og for hurtig kompleksitet.

---

# 1. Grundprincip

MVP 0.1 skal bygges efter den arkitektur, der allerede er dokumenteret i:

```text
docs/01-database-blueprint.md
docs/02-ai-engine.md
docs/03-scoring-engine.md
docs/04-conversation-engine.md
docs/05-crm-workflow.md
docs/06-domain-model.md
docs/08-api-specification.md
docs/09-security-gdpr.md
docs/serveradmin-handoff-plan.md
github/MVP-0.1-Release-Plan.md
github/MVP-0.1-Milestone.md
```

Udviklere må gerne løse implementeringsdetaljer praktisk, men de må ikke ændre produktets kerneflow uden godkendelse.

---

# 2. Udviklere må selv beslutte

Følgende beslutninger kan træffes af udvikleren uden forudgående godkendelse, så længe de ikke ændrer MVP-scope eller offentlige kontrakter.

## Laravel implementation details

```text
Controller organization
Service class organization
Request validation classes
Resource/DTO structure
Internal helper classes
Factory structure
Seeder structure for dummy data
Test organization
```

## Frontend implementation details

```text
Blade vs Livewire component structure
Reusable UI components
Basic layout decisions
CSS utility classes
Table layout
Form layout
Pagination UI
```

## Test implementation details

```text
Unit test structure
Feature test structure
Mock object structure
Fixture naming
Dummy test case structure
```

## Local developer experience

```text
Local setup notes
Readme clarifications
Makefile or helper scripts
Non-production convenience commands
```

---

# 3. Kræver godkendelse før ændring

Følgende må ikke ændres uden eksplicit godkendelse.

## Database architecture

Kræver godkendelse:

```text
Nye core tables
Fjernelse af planlagte tables
Store ændringer i lead/status/scoring-tabeller
Ændring af relationer mellem lead og screeningdata
Lagring af nye typer følsomme data
```

Små kolonnenavne eller tekniske justeringer må gerne foreslås i PR, men skal forklares tydeligt.

---

## API contracts

Kræver godkendelse:

```text
Ændring af public endpoint paths
Ændring af response-format for screening endpoints
Ændring af required request fields
Fjernelse af planlagte API endpoints
Tilføjelse af nye public endpoints
```

Public API skal være stabil, fordi frontend og fremtidige integrationer afhænger af den.

---

## AI behavior

Kræver godkendelse:

```text
Ændring af hovedpromptens rolle
Ændring af JSON schema
Ændring af allowed recommended_action values
Ændring af case_category logik
Ændring af next-question-princippet
Skift af AI provider
Skift af standardmodel
```

AI må ikke begynde at give juridiske garantier eller træffe endelige afgørelser.

---

## Scoring model

Kræver godkendelse:

```text
Ændring af scoretyper
Ændring af scorevægtning
Ændring af kategori-grænser
Ændring af overall_score-formel
Ændring af time-barred handling
```

Aktuel formel:

```text
overall_score =
(case_strength * 0.50)
+
(information_quality * 0.20)
+
(commercial_value * 0.30)
```

---

## MVP scope

Kræver godkendelse:

```text
MitID
Fuldmagt
Dokumentupload
Journalanalyse
Klagegenerator
Similar Case Engine
Win Probability Engine
Automatisk myndighedsindsendelse
Produktion deployment
```

Disse funktioner er bevidst ude af MVP 0.1.

---

# 4. Må ikke implementeres i MVP 0.1 uden særskilt beslutning

Følgende må ikke snige sig ind i MVP 0.1:

```text
Komplet sagsbehandlingssystem
Automatisk juridisk afgørelse
Automatisk erstatningsberegning
Automatisk indsendelse af klager
Lagring af rigtige patientjournaler
Avanceret dokumentanalyse
Betalingssystem
SMS-udsendelse
Ekstern CRM-integration
```

MVP 0.1 handler kun om AI-screening og internt lead review.

---

# 5. Pull request regler

Alle pull requests bør følge disse regler:

- Én PR bør primært løse ét issue
- PR skal henvise til issue nummer
- PR skal beskrive hvad der er inkluderet
- PR skal beskrive hvad der ikke er inkluderet
- PR skal have testnoter
- PR må ikke indeholde secrets
- PR må ikke indeholde rigtige persondata
- PR må ikke ændre scope uden forklaring

---

# 6. Review-regler

Reviewer bør kontrollere:

```text
Matcher PR det relaterede issue?
Matcher implementeringen dokumentationen?
Er scope holdt lille?
Er public API uændret?
Er scoremodel uændret?
Er AI output-format uændret?
Er der tests?
Er der ingen secrets?
Er der ingen rigtige persondata?
```

---

# 7. Hvis udvikler er i tvivl

Hvis en udvikler er i tvivl om en beslutning, skal de vælge den mindste løsning, der opfylder issue acceptance criteria.

Princip:

```text
Smallest useful implementation first.
```

Undgå at bygge fremtidige features før de er godkendt.

---

# 8. Architecture freeze for MVP 0.1

Følgende betragtes som frosset for MVP 0.1:

```text
Core lead flow
Core database tables
Public screening endpoints
Three-score model
Case category model
One-question-at-a-time conversation principle
Internal CRM review flow
Human final review principle
```

Der kan stadig ske tekniske forbedringer, men kernearkitekturen bør ikke ændres før MVP 0.1 er testet.

---

# 9. Tilladte forbedringer efter MVP 0.1

Efter MVP 0.1 kan følgende overvejes:

```text
Better audit log
Consent flow
MitID
Power of attorney
Document upload
Document summarization
Advanced CRM filters
Caseworker notes
Case timeline
Security hardening
Deployment pipeline
```

Men disse bør planlægges som separate releases.

---

# 10. Konklusion

Udviklere skal bygge hurtigt, men inden for en tydelig ramme.

MVP 0.1 skal holdes lille:

```text
AI Screening
↓
Lead Storage
↓
Internal CRM Review
```

Alt andet kommer senere.
