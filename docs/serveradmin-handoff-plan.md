# ServerAdmin Handoff Plan

## Formål

Dette dokument er skrevet til ServerAdmin eller en teknisk udvikler, der senere skal overtage opsætning, installation og deployment.

Projektet skal ikke afhænge af, at ServerAdmin er med fra starten.

Alle beslutninger, kommandoer, rækkefølger og krav skal derfor dokumenteres i GitHub, så arbejdet kan udføres korrekt senere.

---

## Projektstatus

Repository indeholder allerede:

- README.md
- docs/sprint-00.md
- docs/01-database-blueprint.md
- docs/02-ai-engine.md
- docs/03-scoring-engine.md
- docs/04-conversation-engine.md
- docs/05-crm-workflow.md
- docs/06-domain-model.md

Disse dokumenter beskriver forretning, domæne, database, AI, scoring og workflow.

---

## Arbejdsprincip

Alt arbejde skal ske via GitHub Issues.

Hver opgave skal have:

- tydeligt mål
- konkret opgaveliste
- acceptance criteria
- relevant dokument-reference
- commit eller pull request når opgaven er færdig

---

## Sprint 0.2 - Foundation Queue

Sprint 0.2 handler om at gøre Laravel-fundamentet klar.

### Issue #1 - Laravel foundation

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

skal starte applikationen uden fejl.

---

### Issue #2 - Database migrations

Mål:

Oprette de første tabeller:

- leads
- lead_conversations
- lead_scores
- lead_entities
- lead_assessments
- lead_missing_information
- lead_documents

Reference:

```text
docs/01-database-blueprint.md
```

Acceptance criteria:

```bash
php artisan migrate
```

skal køre uden fejl.

---

### Issue #3 - Eloquent models

Mål:

Oprette de første modeller:

- Lead
- ConversationMessage
- LeadScore
- LeadEntity
- LeadAssessment
- MissingInformation
- Document

Reference:

```text
docs/06-domain-model.md
```

Acceptance criteria:

- relationer er defineret
- fillable/casts er defineret
- modeller matcher domænemodellen

---

## Næste backlog efter foundation

Når Issues #1-#3 er færdige, fortsættes med:

1. OpenAI service layer
2. Screening API endpoint
3. Prompt files
4. Scoring service
5. Basic CRM dashboard
6. Local development documentation
7. Deployment preparation

---

## Vigtige regler

### Ingen følsomme data i GitHub

Der må aldrig committes:

- rigtige CPR-numre
- rigtige patientjournaler
- rigtige helbredsoplysninger
- API-nøgler
- `.env`
- private dokumenter

---

## Environment variables

Følgende skal senere defineres i `.env`:

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
OPENAI_MODEL=
```

---

## Deployment senere

Deployment er ikke en del af Sprint 0.2.

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

---

## Første tekniske milepæl

Projektets første tekniske milepæl er:

```text
Bruger skriver en kort sag
↓
Laravel modtager request
↓
OpenAI analyserer teksten
↓
System returnerer JSON
↓
Lead gemmes i databasen
↓
CRM viser leadet
```

Dette er MVP-fundamentet.

Alt andet kommer senere.
