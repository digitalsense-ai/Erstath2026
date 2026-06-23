# Epic 03 - CRM

## Formål

Bygge det første interne CRM-lag for ErstatningsHjælp.

CRM'et skal give interne brugere overblik over leads, AI-vurderinger, scores, manglende oplysninger og næste handling.

Dette er ikke et fuldt sagsbehandlingssystem i MVP.

Det er et simpelt lead- og reviewværktøj.

---

# Mål

Når Epic 03 er færdig, skal en intern bruger kunne:

```text
Logge ind
↓
Se leads
↓
Filtrere på status og score
↓
Åbne et lead
↓
Se samtale, scores, entities og AI-resumé
↓
Ændre status eller sende til review
```

---

# Scope

## In scope

- Intern login
- CRM lead list
- Lead detail page
- Statusvisning
- Scorevisning
- Case category
- Conversation history
- Missing information
- AI assessment summary
- Basic filters

## Out of scope

- Avanceret sagsstyring
- Dokumentanalyse
- MitID
- Fuldmagt
- Fakturering
- Automatisk indsendelse

---

# Related documents

```text
docs/05-crm-workflow.md
docs/08-api-specification.md
docs/11-laravel-build-queue.md
docs/14-business-metrics-kpi-framework.md
docs/16-project-review.md
```

---

# Issues in this epic

## Issue 12 - Install internal auth

### Goal

Create authentication for internal CRM users.

### Suggested implementation

```text
Laravel Breeze
```

or another simple Laravel auth starter.

### Definition of Done

- Internal user can log in
- CRM routes require authentication
- Public screening endpoints do not require login

---

## Issue 13 - Create CRM lead board

### Goal

Create the first overview of leads.

### Fields to show

```text
Lead ID / UUID
Created date
Status
Case category
Case Strength
Information Quality
Commercial Value
Overall Score
Short summary
Recommended action
```

### Definition of Done

- Leads can be listed
- Leads can be filtered by status
- Leads can be sorted by newest or priority
- Only authenticated users can access page

---

## Issue 14 - Create Lead detail page

### Goal

Create a detail page for one lead.

### Sections

```text
Contact information
Status
Scores
Entities
Missing information
AI summary
Conversation history
Recommended action
```

### Definition of Done

- Internal user can understand the lead without reading raw JSON
- Conversation history is visible
- Scores and missing information are visible

---

## Issue 18 - Implement lead status update in CRM

### Goal

Allow internal users to change lead status.

### Allowed status examples

```text
AWAITING_INFO
QUALIFIED
REJECTED
REVIEW
ACTIVE_CASE
```

### Definition of Done

- Status can be changed from lead detail page
- Change is saved
- Invalid status is rejected
- Optional audit log hook is prepared

---

# CRM design principle

The CRM should be simple.

Do not build a full case management system before screening has proven value.

---

# Acceptance criteria for Epic 03

Epic 03 is complete when:

- [ ] Internal auth exists
- [ ] CRM lead list exists
- [ ] Lead detail page exists
- [ ] Scores are visible
- [ ] Conversation history is visible
- [ ] Missing information is visible
- [ ] Status can be changed
- [ ] CRM routes are protected

---

# Result

Epic 03 makes AI-screening useful for human review and internal prioritisation.
