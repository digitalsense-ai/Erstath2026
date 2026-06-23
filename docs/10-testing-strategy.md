# Dokument 10 - Testing Strategy v1.0

## Formål

Dette dokument beskriver hvordan ErstatningsHjælp skal testes.

Projektet indeholder både klassisk softwarelogik og AI-logik. Derfor skal teststrategien dække:

- Laravel kode
- Database
- API endpoints
- Scoring rules
- Prompt output
- AI regression
- CRM workflow
- Sikkerhed

Målet er ikke kun at teste om systemet virker teknisk.

Målet er også at teste om systemet kvalificerer leads stabilt og forklarbart.

---

# Testprincipper

## 1. Ingen rigtige persondata

Alle tests skal bruge dummy-data.

Der må aldrig bruges:

```text
Rigtige CPR-numre
Rigtige journaler
Rigtige patientdata
Rigtige helbredsoplysninger
Rigtige fuldmagter
```

---

## 2. Deterministisk logik testes separat

Scoring rules skal kunne testes uden AI.

Eksempel:

```text
Input: diagnose_delay + death + documents_available
Expected: bestemt score-interval
```

AI må gerne hjælpe med entity extraction, men den officielle score bør kunne beregnes af en separat regelmotor.

---

## 3. AI-output skal valideres

AI-output skal altid valideres mod JSON schema.

Hvis AI returnerer ugyldig JSON, skal systemet håndtere fejlen sikkert.

---

# Testtyper

## Unit Tests

Tester små dele af systemet isoleret.

Eksempler:

- LeadScore beregning
- Overall Score formel
- Status transitions
- MissingInformation priority
- Case category mapping

---

## Feature Tests

Tester hele flows i Laravel.

Eksempler:

- Start screening
- Send opfølgende besked
- Hent lead
- List leads
- Opdater status

---

## API Tests

Tester endpoints fra `docs/08-api-specification.md`.

Første endpoints:

```http
POST /api/v1/screening/start
POST /api/v1/screening/{lead}/message
GET /api/v1/leads/{lead}
GET /api/v1/leads
GET /api/v1/crm/board
```

---

## Prompt Tests

Tester om prompts returnerer forventet struktur.

Alle prompts i `prompts/` skal testes med faste cases.

Test skal kontrollere:

- gyldig JSON
- obligatoriske felter findes
- allowed values bruges
- ingen markdown returneres
- ingen juridiske garantier returneres
- kun ét næste spørgsmål returneres

---

## AI Regression Tests

AI-modeller kan ændre adfærd.

Derfor skal vi have faste testcases, som køres igen efter promptændringer eller modelændringer.

Eksempel:

```text
Case: Diagnoseforsinkelse + kræft + dødsfald
Expected: injury_type = diagnose_delay
Expected: death = true
Expected: case_category ikke D medmindre forældelse er tydelig
```

---

# Testcase Library

Der skal opbygges et bibliotek med testcases.

Foreslået placering:

```text
tests/Fixtures/screening-cases.json
```

---

## Minimum testcases v1

### 1. Stærk diagnoseforsinkelse

Input:

```text
Min mor fik ikke diagnosticeret kræft i tide på hospitalet og døde senere.
```

Expected:

```text
injury_type = diagnose_delay
death = true
case_strength >= 60
next_question handler om dato eller diagnoseår
```

---

### 2. Operationsskade

Input:

```text
Jeg blev opereret i knæet, men efter operationen fik jeg varige smerter og kan ikke arbejde som før.
```

Expected:

```text
injury_type = surgical_error
permanent_injury = true eller unknown afhængigt af wording
commercial_value >= 30
next_question handler om dato, hospital eller operationstype
```

---

### 3. Medicinsk skade

Input:

```text
Jeg fik forkert medicin og blev meget syg bagefter.
```

Expected:

```text
injury_type = medication_injury
information_quality lav
next_question handler om medicin, dato eller konsekvens
```

---

### 4. Mulig forældelse

Input:

```text
Fejlen skete i 2008, og jeg har vidst det siden 2009.
```

Expected:

```text
case_strength lav
case_category = D eller manual_review afhængigt af detaljer
recommended_action = reject eller manual_review
```

---

### 5. Meget lidt information

Input:

```text
Jeg tror der skete en fejl på hospitalet.
```

Expected:

```text
information_quality lav
case_category = C eller D
next_question handler om hvad der skete eller hvornår
```

---

### 6. Tidligere afgørelse

Input:

```text
Jeg har fået afslag fra Patienterstatningen, men mener de har overset min journal.
```

Expected:

```text
previous_claim = true
previous_decision = afslag
next_question handler om afgørelsesdato eller dokumenter
```

---

### 7. Dokumenter findes

Input:

```text
Jeg har journalen og en lægeudtalelse, som viser at diagnosen blev stillet for sent.
```

Expected:

```text
documents_available = true
case_strength får dokumentationsbonus
next_question handler om dato eller behandlingssted hvis mangler
```

---

# JSON Schema Validation

AI responses skal valideres mod schema.

Hvis response er ugyldig:

```text
1. Gem fejlen i log
2. Forsøg eventuelt én repair
3. Hvis stadig ugyldig, send til manual_review
4. Returnér sikker brugerbesked
```

---

# Scoring Tests

ScoringService skal testes deterministisk.

Eksempel:

```php
public function test_diagnose_delay_with_death_scores_high_case_strength()
{
    // Arrange
    // Act
    // Assert
}
```

Testområder:

- Case Strength
- Information Quality
- Commercial Value
- Overall Score
- Category mapping
- Expired case handling

---

# Workflow Tests

Workflow skal teste statusovergange.

Eksempler:

```text
NEW -> SCREENING
SCREENING -> AWAITING_INFO
SCREENING -> QUALIFIED
QUALIFIED -> MITID_PENDING
REVIEW -> ACTIVE_CASE
ANY -> REJECTED
```

Ugyldige overgange bør afvises eller logges.

---

# Security Tests

Minimum:

- `.env` må ikke committes
- API keys må ikke ligge i repo
- CRM endpoints kræver auth
- Dokumenter må ikke ligge i public folder
- Debug endpoints må kun virke i local environment

---

# Performance Tests

Senere, ikke MVP:

- AI response time
- CRM lead list performance
- Document upload size
- Queue handling

---

# Manual Review Tests

AI skal kunne sende sager til manuel vurdering.

Triggers:

```text
Lav confidence
Modstridende oplysninger
Mulig forældelse
Høj økonomisk værdi men lav information quality
Usædvanlig sagstype
```

---

# Definition of Done for MVP Tests

Før MVP kan betragtes som teknisk klar:

- [ ] Unit tests for scoring rules
- [ ] Feature tests for screening endpoints
- [ ] JSON validation for AI responses
- [ ] Minimum 10 screening fixtures
- [ ] Prompt regression test runner
- [ ] Basic security checks
- [ ] CRM list endpoint test

---

# Test Roadmap

## Sprint 0.2

- Basic Laravel test setup
- Migration tests
- Model relationship tests

## Sprint 1

- Screening endpoint tests
- Scoring service tests
- Prompt output tests

## Sprint 2

- CRM dashboard tests
- Workflow transition tests
- Manual review tests

## Sprint 3

- Document upload tests
- Security tests
- Audit log tests

---

# Resultat

Testing Strategy sikrer, at ErstatningsHjælp ikke kun bygges hurtigt, men også stabilt, sikkert og forklarbart.

AI skal kunne forbedres uden at ødelægge eksisterende adfærd.
