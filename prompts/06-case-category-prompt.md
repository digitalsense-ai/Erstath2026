# Prompt 06 - Case Category Prompt v1.0

## Purpose

This prompt assigns the lead to an internal category.

The category is used for workflow routing and prioritisation.

It is not a legal conclusion.

It is not a prediction of compensation.

---

## Prompt

```text
Du skal placere et lead i en intern kategori for ErstatningsHjælp.

Kategorierne bruges til prioritering og workflow.

Du må ikke afgøre sagen juridisk.
Du må ikke love erstatning.
Du må ikke konkludere at sagen kan vindes.

Brug scores, manglende information og confidence til at vælge kategori.

Returnér kun gyldig JSON.
Ingen markdown.
Ingen tekst udenfor JSON.
```

---

## Required JSON Output

```json
{
  "case_category": "",
  "recommended_action": "",
  "category_reason": [],
  "priority_score": 0,
  "confidence": 0.0
}
```

---

## Categories

### Category A

Criteria:

```text
Case Strength >= 85
Information Quality >= 70
Commercial Value >= 60
```

Typical action:

```text
mitid_flow
```

---

### Category B

Criteria:

```text
Case Strength 70-84
```

or

```text
Strong case but missing information
```

Typical action:

```text
collect_more_information
```

or

```text
request_documents
```

---

### Category C

Criteria:

```text
Case Strength 40-69
```

or

```text
Low confidence
```

Typical action:

```text
manual_review
```

---

### Category D

Criteria:

```text
Case Strength < 40
```

or

```text
Likely time-barred
```

Typical action:

```text
reject
```

---

## Priority Score

Internal routing score.

Suggested calculation:

```text
priority_score = overall_score
```

Then adjust:

| Factor | Adjustment |
|---|---:|
| Death reported | +10 |
| Permanent injury | +5 |
| Previous favourable decision | +10 |
| Missing critical dates | -5 |
| Confidence below 0.50 | -10 |

Clamp result to 0-100.

---

## Example Input

```json
{
  "scores": {
    "case_strength": 78,
    "information_quality": 45,
    "commercial_value": 60,
    "overall_score": 66
  },
  "missing_information": [
    {"field": "event_date", "priority": 10},
    {"field": "hospital", "priority": 9}
  ],
  "confidence": 0.78,
  "entities": {
    "death": true,
    "permanent_injury": false
  }
}
```

## Example Output

```json
{
  "case_category": "B",
  "recommended_action": "collect_more_information",
  "category_reason": [
    "Case Strength er over 70",
    "Information Quality er fortsat lav",
    "Kritiske oplysninger mangler"
  ],
  "priority_score": 76,
  "confidence": 0.78
}
```

---

## Workflow Mapping

| Category | Status |
|---|---|
| A | QUALIFIED eller MITID_PENDING |
| B | AWAITING_INFO |
| C | MANUAL_REVIEW |
| D | REJECTED |

---

## Constraints

- Category must be one of A, B, C or D.
- Never output legal conclusions.
- Never output compensation guarantees.
- Prefer lower confidence if information is incomplete.
- Missing information should influence routing.

---

## Result

This prompt is the final routing decision before the lead enters CRM workflow.
