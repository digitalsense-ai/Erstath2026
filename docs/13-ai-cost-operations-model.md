# Dokument 13 - AI Cost & Operations Model v1.0

## Formål

Dette dokument beskriver hvordan ErstatningsHjælp skal styre AI-omkostninger, modelvalg, logging, drift og fallback.

AI er en kernefunktion i produktet, men AI-kald kan blive dyre, ustabile eller svære at debugge hvis de ikke styres fra starten.

Målet er:

```text
Lav pris pr. screening
Stabil kvalitet
Sporbarhed
Kontrol over forbrug
Mulighed for at skifte model senere
```

---

# 1. AI-princip

AI skal bruges målrettet.

AI skal ikke kaldes unødvendigt.

Første version bør bruge AI til:

```text
Entity extraction
Screening summary
Next question
Case category support
```

Men deterministisk Laravel-logik bør håndtere:

```text
Officiel scoring
Status transitions
Validation
Workflow routing
Audit
```

---

# 2. Model strategy

## MVP-anbefaling

Brug en billig og hurtig model til almindelig screening.

Brug en stærkere model kun til:

```text
Usikre sager
Høj kommerciel værdi
Lav confidence
Komplekse dokumenter senere
Manuel review support
```

## Model tiers

```text
Tier 1 - Cheap model
Bruges til standard screening og entity extraction.

Tier 2 - Strong model
Bruges til komplekse eller værdifulde leads.

Tier 3 - Manual review
Bruges når AI confidence er lav eller sagen er usædvanlig.
```

---

# 3. Current OpenAI pricing reference

Priser ændrer sig over tid og skal altid verificeres før produktion.

Pr. dokumentets oprettelse viser OpenAI's officielle API-prisside blandt andet følgende eksempelpriser:

```text
GPT-5.5
Input: $5.00 / 1M tokens
Cached input: $0.50 / 1M tokens
Output: $30.00 / 1M tokens

GPT-5.4
Input: $2.50 / 1M tokens
Cached input: $0.25 / 1M tokens
Output: $15.00 / 1M tokens

GPT-5.4 mini
Input: $0.75 / 1M tokens
Cached input: $0.075 / 1M tokens
Output: $4.50 / 1M tokens
```

OpenAI beskriver også Batch API som en mulighed for 50% rabat på input og output til asynkrone opgaver.

## Vigtigt

Disse priser må ikke hardcodes som permanente forretningsantagelser.

Lav i stedet en konfiguration:

```text
config/ai.php
```

eller databasefelter til:

```text
provider
model
input_price_per_million
output_price_per_million
cached_input_price_per_million
active_from
active_to
```

---

# 4. Cost per screening model

## Antagelser for simpel screening

```text
System prompt: 1,500 tokens
User message + context: 500 tokens
AI output: 700 tokens
Total input: 2,000 tokens
Total output: 700 tokens
```

## Formel

```text
cost =
(input_tokens / 1,000,000 * input_price)
+
(output_tokens / 1,000,000 * output_price)
```

## Eksempel med billig model

Hvis modelpris er:

```text
Input: $0.75 / 1M
Output: $4.50 / 1M
```

Så koster én screening cirka:

```text
Input: 2,000 / 1,000,000 * 0.75 = $0.0015
Output: 700 / 1,000,000 * 4.50 = $0.00315
Total: $0.00465
```

Omregnet til cirka:

```text
under 0.05 DKK pr. simpel screening
```

Afhænger af valutakurs og faktisk tokenforbrug.

---

# 5. Monthly cost scenarios

## Scenario A - 1,000 screeninger/måned

```text
1,000 * $0.00465 = $4.65 / måned
```

## Scenario B - 10,000 screeninger/måned

```text
10,000 * $0.00465 = $46.50 / måned
```

## Scenario C - 100,000 screeninger/måned

```text
100,000 * $0.00465 = $465 / måned
```

Dette er kun for simpel tekstscreening.

Dokumentanalyse, lange journaler og OCR vil være langt dyrere.

---

# 6. Cost control rules

## Rule 1 - Max tokens per request

Sæt grænser:

```text
max_input_tokens
max_output_tokens
```

## Rule 2 - Conversation compression

Send ikke hele samtalen hver gang hvis den bliver lang.

Brug i stedet:

```text
latest user message
structured entities
current missing information
current score state
short conversation summary
```

## Rule 3 - One AI call where possible

MVP kan starte med én samlet screening prompt.

Senere kan pipeline opdeles i flere kald, hvis kvaliteten kræver det.

## Rule 4 - Use cheaper model first

Standard:

```text
cheap_model
```

Fallback:

```text
strong_model
```

## Rule 5 - Manual review instead of repeated AI retries

Hvis AI fejler flere gange:

```text
manual_review
```

Ikke 10 retries.

---

# 7. AI run logging

Alle AI-kald bør logges i `ai_runs`.

## Fields

```text
id
lead_id
provider
model
prompt_name
prompt_version
input_hash
input_json
output_json
tokens_input
tokens_output
cost_estimate
success
error_message
created_at
```

## Formål

```text
Debugging
Cost tracking
Prompt regression
Audit
Quality improvement
```

---

# 8. Prompt versioning

Hver prompt bør have version.

Eksempel:

```text
screening-system-prompt v1.0
entity-extraction-prompt v1.0
score-engine-prompt v1.0
```

AI responses skal kunne kobles til prompt-version.

Dette gør det muligt at svare på:

```text
Hvorfor vurderede AI sagen sådan?
Hvilken prompt var aktiv?
Hvornår ændrede vi adfærd?
```

---

# 9. Retry strategy

## Standard retry

```text
1 retry ved teknisk fejl
1 JSON repair attempt ved ugyldig JSON
Derefter manual_review
```

## Må ikke ske

```text
Uendelige retries
Skjulte fejl
Overskrivning af rå AI-output uden log
```

---

# 10. Fallback strategy

## Fallback levels

```text
Level 1: Retry same model
Level 2: Use stronger model
Level 3: Manual review
Level 4: Safe user message
```

## Safe user message

```text
Vi har modtaget dine oplysninger, men sagen kræver manuel gennemgang før vi kan stille næste relevante spørgsmål.
```

---

# 11. Rate limits

Systemet skal kunne håndtere rate limits.

Mulige handlinger:

```text
Queue AI jobs
Retry with delay
Show safe waiting message
Manual review if repeated failure
```

---

# 12. Caching

Caching kan bruges til:

```text
Static prompts
Prompt templates
Repeated test fixtures
```

Caching bør ikke bruges ukritisk til følsomme brugerdata.

---

# 13. Batch usage

Batch API kan være relevant til:

```text
Regression tests
Re-scoring gamle leads
Batch dokumentresuméer
Offline analyser
```

Batch bør ikke bruges til realtime screening, hvor brugeren venter på næste spørgsmål.

---

# 14. Operations dashboard

Senere bør admin kunne se:

```text
AI calls today
AI cost today
Average cost per lead
Failed AI calls
Invalid JSON rate
Average response time
Most expensive prompts
Model distribution
```

---

# 15. Alerts

Systemet bør alarmere ved:

```text
Pludselig høj AI cost
Mange invalid JSON responses
Mange AI failures
Høj latency
Rate limit errors
Model unavailable
```

---

# 16. MVP configuration

Foreslåede env variables:

```text
OPENAI_API_KEY=
OPENAI_DEFAULT_MODEL=
OPENAI_STRONG_MODEL=
OPENAI_MAX_INPUT_TOKENS=
OPENAI_MAX_OUTPUT_TOKENS=
AI_LOG_INPUTS=true
AI_LOG_OUTPUTS=true
AI_MONTHLY_BUDGET_USD=
```

---

# 17. Definition of Done

AI operations er klar til MVP når:

- [ ] AI model kan konfigureres via env
- [ ] AI calls logges i ai_runs
- [ ] Token usage gemmes hvis muligt
- [ ] Cost estimate beregnes
- [ ] Invalid JSON håndteres sikkert
- [ ] Retry-strategi findes
- [ ] Prompt version gemmes
- [ ] Monthly budget kan overvåges manuelt

---

# Resultat

Dette dokument gør AI-laget operationelt styrbart.

AI skal ikke kun virke teknisk.

AI skal være økonomisk kontrollerbar, sporbar og sikker at drive.
