# Epic 07 - Testing, QA & Safety Net

## Formål

Dette epic definerer Sprint 3 for ErstatningsHjælp MVP 0.1.

Sprint 3 handler ikke om nye features.

Sprint 3 handler om at gøre MVP-kernen testbar, stabil og sikker nok til videre udvikling.

Når AI, scoring, API og CRM begynder at blive implementeret, skal projektet have et solidt testgrundlag, så ændringer ikke ødelægger kerneflowet.

---

# Hvorfor dette epic er vigtigt

ErstatningsHjælp indeholder AI-output, scoring, brugerbeskeder og CRM-workflow.

Det betyder, at fejl kan opstå flere steder:

```text
AI returnerer ugyldigt output
Scoring bliver forkert
Endpoint gemmer ufuldstændige data
CRM viser forkert prioritet
Svage sager bliver overvurderet
Stærke sager bliver overset
```

Sprint 3 skal reducere disse risici.

---

# Sprint 3 scope

## Skal inkluderes

```text
Screening fixtures
Scoring unit tests
AI JSON validation tests
Screening endpoint feature tests
CRM/auth access tests
Safe dummy seed data
Basic CI test workflow
```

## Skal ikke inkluderes

```text
MitID
Fuldmagt
Dokumentupload
Journalanalyse
Produktion deployment
Advanced monitoring
Load testing
External integrations
```

---

# Testområder

## 1. Screening fixtures

Der skal oprettes sikre dummy-testcases for typiske sagsmønstre.

Eksempler:

```text
Diagnosis delay
Wrong treatment
Infection
Medicine injury
Low-information case
Possible expired case
Clearly weak case
```

Fixtures må aldrig indeholde rigtige personoplysninger.

---

## 2. Scoring tests

LeadScoringService skal testes med kendte input og forventede outputintervaller.

Vigtigt:

```text
Strong cases should score higher
Low-information cases should not over-score
Weak cases should score low
Possible expired cases should be handled conservatively
Overall Score formula should be stable
```

---

## 3. AI JSON validation tests

AiResponseValidator skal beskytte systemet mod ugyldigt AI-output.

Tests skal dække:

```text
Valid output
Missing required fields
Invalid score values
Invalid category
Invalid recommended action
Malformed structure
```

---

## 4. Screening endpoint feature tests

Public screening endpoints skal testes med mocked AI responses.

Endpoints:

```text
POST /api/v1/screening/start
POST /api/v1/screening/{lead}/message
```

Tests skal sikre:

```text
Lead creation
Conversation storage
Score storage
Validation errors
AI failure fallback
```

---

## 5. CRM and auth tests

CRM og interne endpoints skal kræve login.

Tests skal sikre:

```text
Unauthenticated users cannot access CRM
Authenticated users can access CRM
Lead list can load
Lead detail can load
Status update requires authentication
```

---

## 6. Safe dummy seeders

Dummy seeders skal gøre lokal udvikling nemmere.

De må kun indeholde fiktive cases.

---

## 7. Basic CI workflow

Projektet bør have en simpel GitHub Actions workflow, der kører tests på pull requests.

MVP-versionen kan være enkel:

```text
Install dependencies
Prepare test environment
Run migrations
Run tests
```

---

# Proposed Sprint 3 issues

```text
Create screening test fixtures
Add scoring unit tests
Add AI JSON validation tests
Add screening endpoint feature tests
Add CRM access/auth tests
Add safe dummy data seeders
Add basic CI test workflow
```

---

# Definition of Done

Sprint 3 er færdig når:

- [ ] Der findes sikre screening fixtures
- [ ] LeadScoringService har relevante unit tests
- [ ] AiResponseValidator har relevante unit tests
- [ ] Screening endpoints har feature tests
- [ ] CRM/auth har access tests
- [ ] Dummy seeders bruger kun fiktive data
- [ ] CI workflow kan køre test suite
- [ ] Ingen rigtige persondata findes i testdata
- [ ] Ingen secrets findes i testdata eller CI config

---

# Konklusion

Sprint 3 gør projektet klar til mere seriøs implementering.

Målet er ikke flere features.

Målet er at sikre, at MVP-kernen kan ændres og udbygges uden at gå i stykker.
