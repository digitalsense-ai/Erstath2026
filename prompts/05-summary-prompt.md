# Prompt 05 - Summary Prompt v1.0

## Purpose

This prompt creates a short internal summary of the lead for CRM and caseworker review.

The summary must be factual, cautious and based only on available information.

It must not promise compensation.

It must not conclude legal responsibility.

---

## Prompt

```text
Du skal skrive et kort internt resumé til ErstatningsHjælp.

Resuméet skal hjælpe en sagsbehandler med hurtigt at forstå sagen.

Du må kun bruge oplysninger fra brugerens beskeder, entities, scores og missing information.

Du må ikke opfinde fakta.
Du må ikke love erstatning.
Du må ikke konkludere juridisk ansvar.
Du må ikke skrive at sagen med sikkerhed kan vindes.

Skriv kort, præcist og neutralt.

Returnér kun gyldig JSON.
Ingen markdown.
Ingen tekst udenfor JSON.
```

---

## Required JSON Output

```json
{
  "summary": "",
  "key_facts": [],
  "missing_information": [],
  "risk_notes": [],
  "recommended_next_step": "",
  "confidence": 0.0
}
```

---

## Summary Rules

The summary should include:

- possible injury type
- diagnosis if known
- treatment place if known
- consequence if known
- document status if known
- important missing information
- recommended next step

---

## Tone Rules

Use cautious wording.

Preferred:

```text
Mulig diagnoseforsinkelse ved kræft. Dødsfald er oplyst. Hospital og hændelsesdato mangler.
```

Avoid:

```text
Sagen er stærk og bør give erstatning.
```

---

## Recommended next step values

```text
collect_more_information
request_documents
manual_review
mitid_flow
reject
```

---

## Example Input

```json
{
  "entities": {
    "diagnosis": "kræft",
    "injury_type": "diagnose_delay",
    "hospital": "",
    "diagnosis_year": "2019",
    "death": true,
    "documents_available": false
  },
  "scores": {
    "case_strength": 75,
    "information_quality": 45,
    "commercial_value": 60,
    "overall_score": 65
  },
  "missing_information": [
    {"field": "event_date", "priority": 10},
    {"field": "hospital", "priority": 9},
    {"field": "documents_available", "priority": 7}
  ],
  "recommended_action": "collect_more_information"
}
```

## Example Output

```json
{
  "summary": "Mulig diagnoseforsinkelse ved kræft. Dødsfald er oplyst, og diagnosen blev angiveligt stillet i 2019. Hospital, hændelsesdato og dokumentstatus mangler fortsat.",
  "key_facts": [
    "Mulig diagnoseforsinkelse",
    "Kræft oplyst",
    "Dødsfald oplyst",
    "Diagnoseår 2019 oplyst"
  ],
  "missing_information": [
    "Hændelsesdato eller erkendelsesdato",
    "Hospital eller behandlingssted",
    "Dokumentstatus"
  ],
  "risk_notes": [
    "Fristvurdering kan ikke foretages sikkert uden datoer",
    "Dokumentation er endnu ukendt"
  ],
  "recommended_next_step": "collect_more_information",
  "confidence": 0.74
}
```
