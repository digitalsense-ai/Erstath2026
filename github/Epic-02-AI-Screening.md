# Epic 02 - AI Screening

## Formål

Bygge den første fungerende AI Screening Engine i Laravel.

Denne epic er kernen i MVP'en.

Målet er at brugeren kan skrive en kort sagsbeskrivelse, hvorefter systemet opretter et lead, analyserer teksten, gemmer data og returnerer næste bedste spørgsmål.

---

# Mål

Når Epic 02 er færdig, skal systemet kunne:

```text
Modtage brugerbesked
↓
Oprette lead
↓
Gem besked
↓
Kalde AI
↓
Udtrække entities
↓
Beregne scores
↓
Vælge case category
↓
Returnere next question
```

---

# Scope

## In scope

- Prompt loader
- AI service skeleton
- OpenAI integration
- AI JSON validation
- Scoring service
- Screening start endpoint
- Continue conversation endpoint
- AI run logging
- Basic error handling

## Out of scope

- Dokumentanalyse
- OCR
- Klagegenerator
- Win Probability Engine
- Similar Case Engine
- MitID

---

# Related documents

```text
docs/02-ai-engine.md
docs/03-scoring-engine.md
docs/04-conversation-engine.md
docs/08-api-specification.md
docs/10-testing-strategy.md
docs/11-laravel-build-queue.md
docs/13-ai-cost-operations-model.md
prompts/
```

---

# Issues in this epic

## Issue 4 - Create Prompt Repository

### Goal

Create a Laravel service that loads prompt files from `/prompts`.

### Suggested class

```php
App\Services\Prompts\PromptRepository
```

### Definition of Done

- Prompt files can be loaded by name
- Prompt content is returned as string
- Missing prompt throws controlled exception
- Basic test exists

---

## Issue 5 - Create AiScreeningService

### Goal

Create service responsible for calling AI provider and returning structured data.

### Suggested class

```php
App\Services\AI\AiScreeningService
```

### Definition of Done

- Accepts lead/context input
- Calls configured AI model
- Returns decoded JSON array
- Handles provider errors safely
- Does not hardcode API keys

---

## Issue 6 - Create AI JSON Validator

### Goal

Validate AI output before saving anything to database.

### Suggested class

```php
App\Services\AI\AiResponseValidator
```

### Definition of Done

- Required fields are checked
- Scores are between 0 and 100
- Allowed values are validated
- Invalid JSON triggers safe fallback

---

## Issue 7 - Create LeadScoringService

### Goal

Calculate official deterministic scores.

### Suggested class

```php
App\Services\Scoring\LeadScoringService
```

### Definition of Done

- Case Strength calculated
- Information Quality calculated
- Commercial Value calculated
- Overall Score calculated
- Unit tests exist

---

## Issue 8 - Implement POST /api/v1/screening/start

### Goal

Create the first public screening endpoint.

### Definition of Done

- Lead is created
- User message is saved
- AI is called
- Scores/entities/missing info are saved
- JSON response matches API spec
- Feature test exists

---

## Issue 9 - Implement POST /api/v1/screening/{lead}/message

### Goal

Continue an existing screening conversation.

### Definition of Done

- New user message is saved
- Existing context is used
- Scores/entities/missing info are updated
- Next question is returned
- Feature test exists

---

# Important rules

## AI must not decide legally

AI can screen and prioritize, but not promise compensation or make final legal conclusions.

## Deterministic scoring preferred

AI can suggest scores, but official scoring should be calculated by testable Laravel logic.

## One question at a time

The conversation engine must only ask one next question.

---

# Acceptance criteria for Epic 02

Epic 02 is complete when:

- [ ] PromptRepository exists
- [ ] AiScreeningService exists
- [ ] AI JSON Validator exists
- [ ] LeadScoringService exists
- [ ] Screening start endpoint works
- [ ] Continue conversation endpoint works
- [ ] AI responses are validated
- [ ] AI runs can be logged
- [ ] Basic tests pass

---

# Result

Epic 02 proves the product's core value: AI can screen a potential case and guide the next step.
