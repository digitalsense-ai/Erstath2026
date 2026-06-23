# Epic 04 - Testing

## Formål

Sikre at ErstatningsHjælp kan bygges stabilt, sikkert og forklarbart.

Projektet indeholder både klassisk Laravel-logik og AI-logik. Derfor skal tests dække både kode, API, scoring, prompts og workflow.

---

# Mål

Når Epic 04 er færdig, skal projektet kunne teste:

```text
Migrations
Models
Scoring rules
AI JSON validation
Screening API
CRM endpoints
Workflow transitions
Security basics
Prompt regression
```

---

# Scope

## In scope

- Unit tests
- Feature tests
- API tests
- Scoring tests
- Prompt output tests
- AI regression fixtures
- Basic security checks

## Out of scope

- Full penetration test
- Load testing at scale
- Medical/legal validation
- Real patient datasets

---

# Related documents

```text
docs/10-testing-strategy.md
docs/03-scoring-engine.md
docs/08-api-specification.md
docs/09-security-gdpr.md
docs/11-laravel-build-queue.md
prompts/
```

---

# Issues in this epic

## Issue 15 - Add screening fixtures

### Goal

Create a library of dummy screening cases.

### Suggested path

```text
tests/Fixtures/screening-cases.json
```

### Definition of Done

- At least 10 dummy cases exist
- No real personal data is used
- Fixtures include expected injury_type, category and score ranges

---

## Issue 19 - Add scoring unit tests

### Goal

Test the deterministic scoring logic.

### Definition of Done

- Case Strength tests exist
- Information Quality tests exist
- Commercial Value tests exist
- Overall Score formula is tested
- Expired/time-barred case handling is tested

---

## Issue 20 - Add API feature tests

### Goal

Test the public screening API and lead endpoints.

### Endpoints

```http
POST /api/v1/screening/start
POST /api/v1/screening/{lead}/message
GET /api/v1/leads/{lead}
GET /api/v1/leads
```

### Definition of Done

- Valid input returns success
- Invalid input returns 422
- Lead is persisted
- Conversation is persisted
- Scores are persisted

---

## Issue 21 - Add AI response validation tests

### Goal

Ensure AI output is safe before being stored.

### Definition of Done

- Valid JSON passes
- Invalid JSON fails
- Missing required fields fail
- Invalid score ranges fail
- Invalid recommended_action fails
- Multiple-question next_question is flagged if possible

---

## Issue 22 - Add prompt regression tests

### Goal

Run fixed dummy cases against prompt behavior.

### Definition of Done

- Prompt test runner exists
- Fixtures can be evaluated
- Output is checked for structure and allowed values
- Regression failures are visible

---

# Testing principles

## No real data

Never use real patients, CPR numbers, journals or health documents in tests.

## Deterministic where possible

Business logic should be testable without AI.

## AI must be validated

AI output is never trusted until validated.

---

# Acceptance criteria for Epic 04

Epic 04 is complete when:

- [ ] Fixtures exist
- [ ] Scoring unit tests exist
- [ ] API feature tests exist
- [ ] AI validation tests exist
- [ ] Prompt regression structure exists
- [ ] Basic security checks exist

---

# Result

Epic 04 makes the MVP safer to build and easier to improve without breaking core screening behavior.
