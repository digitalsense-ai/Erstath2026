# Epic 01 - Laravel Foundation

## Formål

Etablere det tekniske fundament for ErstatningsHjælp i Laravel.

Denne epic handler ikke om AI, CRM eller avanceret forretningslogik.

Den handler om at få projektet til at køre stabilt lokalt og gøre databasen klar.

---

# Mål

Når Epic 01 er færdig, skal projektet kunne:

```text
Clone repo
↓
Install dependencies
↓
Configure .env
↓
Run migrations
↓
Start Laravel locally
```

---

# Scope

## In scope

- Laravel 12 installation
- `.env.example`
- `.gitignore`
- Database connection
- Core migrations
- Core Eloquent models
- Model relationships
- Basic factories
- Local development setup

## Out of scope

- AI integration
- OpenAI API
- CRM UI
- MitID
- Document upload
- Deployment

---

# Related documents

```text
docs/sprint-00.md
docs/01-database-blueprint.md
docs/06-domain-model.md
docs/11-laravel-build-queue.md
docs/12-data-dictionary.md
docs/serveradmin-handoff-plan.md
```

---

# Issues in this epic

## Issue 1 - Install Laravel 12 project foundation

Status: already created as GitHub Issue #1

### Goal

Install Laravel in repository root and verify local startup.

### Definition of Done

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan serve
```

works locally.

---

## Issue 2 - Create core database migrations

Status: already created as GitHub Issue #2

### Goal

Create database structure for the screening MVP.

### Tables

```text
leads
lead_conversations
lead_scores
lead_entities
lead_assessments
lead_missing_information
lead_documents
```

### Definition of Done

```bash
php artisan migrate
```

runs without errors.

---

## Issue 3 - Create core Eloquent models

Status: already created as GitHub Issue #3

### Goal

Create Laravel models and relationships.

### Models

```text
Lead
ConversationMessage
LeadScore
LeadEntity
LeadAssessment
MissingInformation
Document
```

---

# Recommended implementation order

```text
1. Laravel install
2. Environment setup
3. Migrations
4. Models
5. Relationships
6. Factories
7. Basic tests
```

---

# Technical notes

## Case model naming

Do not use `Case` as a PHP model name because `case` is a language keyword.

Use:

```php
CaseModel
```

or later:

```php
PatientCase
```

---

# Acceptance criteria for Epic 01

Epic 01 is complete when:

- [ ] Laravel runs locally
- [ ] Database connection works
- [ ] Core migrations exist
- [ ] Core models exist
- [ ] Relationships are implemented
- [ ] `.env` is not committed
- [ ] `.env.example` contains required keys
- [ ] Basic model tests pass

---

# Result

Epic 01 makes the project technically ready for AI Screening implementation.
