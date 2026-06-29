# BRAIN-003 - Routing Model

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document defines how the AI Case Brain routes a lead after intake and screening.

Routing is not only about A, B, C and D categories. It also decides whether the next step is another question, document collection, human review, onboarding or respectful guide-away.

## Routing Inputs

The routing model uses:

- case domain
- case type
- case strength score
- information quality score
- commercial value score
- confidence
- time limit signals
- consequence severity
- evidence signals
- missing information
- user vulnerability signals
- prior decision or complaint status

## Primary Routing Targets

### 1. continue_conversation

Use when the case may be relevant but important information is missing.

Typical conditions:

```text
case_strength >= 40
information_quality < 70
critical_missing_information exists
question_limit_not_reached
```

### 2. request_documents

Use when the case looks relevant but evidence is needed.

Typical conditions:

```text
case_strength >= 70
information_quality >= 50
documentation_missing_or_unclear
```

### 3. human_review

Use when the case is uncertain, sensitive or high-impact.

Typical conditions:

```text
confidence < 0.55
or causation_unclear
or serious_consequence_indicated
or unusual_case_type
or conflicting_information
```

### 4. onboarding_later

Use when the case appears strong enough to continue after screening.

Typical conditions:

```text
case_strength >= 80
information_quality >= 70
commercial_value >= 50
confidence >= 0.70
no_blocking_time_limit_issue
```

Note:

Onboarding may include MitID, consent and power of attorney later, but it should not be the first step before screening.

### 5. guide_away

Use when the case appears weak, out of scope or clearly blocked.

Typical conditions:

```text
case_strength < 40
or no_specific_injury
or no_treatment_connection
or clearly_out_of_scope
```

Guide-away must be respectful and should allow the user to add missing important information.

## Case Category Mapping

### A Category

Likely strong lead.

Typical signals:

```text
case_strength >= 85
information_quality >= 70
commercial_value >= 60
confidence >= 0.70
```

Default routing:

```text
onboarding_later
```

Human review may still be required for sensitive or uncertain cases.

### B Category

Promising lead, but not complete.

Typical signals:

```text
case_strength 70-84
information_quality 50-69
commercial_value >= 50
```

Default routing:

```text
continue_conversation
or request_documents
```

### C Category

Uncertain lead.

Typical signals:

```text
case_strength 40-69
or confidence < 0.55
```

Default routing:

```text
continue_conversation
or human_review
```

### D Category

Weak or blocked lead.

Typical signals:

```text
case_strength < 40
or clear blocking condition
```

Default routing:

```text
guide_away
```

## Blocking Conditions

The following may block normal progression:

- clearly outside relevant time limits
- no identifiable patient injury
- no healthcare provider involved
- no described consequence
- unrelated legal or insurance matter
- duplicate or abusive submission

If uncertainty exists, use human review instead of hard guide-away.

## Human Review Escalation Overrides

Route to human review when:

- confidence is low
- facts conflict
- case involves death or severe permanent injury and information is incomplete
- possible high-value case with weak documentation
- user appears vulnerable or distressed
- AI cannot classify the case type safely
- system detects a policy or safety risk

## Routing Output Shape

Recommended output:

```json
{
  "routing_target": "human_review",
  "case_category": "C",
  "recommended_action": "manual_review",
  "human_review_required": true,
  "confidence": 0.48,
  "reason_codes": [
    "low_confidence",
    "causation_unclear",
    "serious_consequence_indicated"
  ]
}
```

## User-Facing Routing Language

### Continue Conversation

```text
For us to better understand whether this may be relevant, the next important question is...
```

### Request Documents

```text
The information you have provided may be relevant. The next helpful step is to understand what documentation exists.
```

### Human Review

```text
Your situation may need a closer review. We will not draw a conclusion based only on the automated screening.
```

### Guide Away

```text
Based on the information provided so far, we cannot currently see enough basis to continue. You can still add more information if something important is missing.
```

## References

- BRAIN-002-decision-principles-and-guardrails.md
- docs/contracts/CONTRACT-005-decision-output-contract.md
- policies/POL-002-routing-policy.md
- policies/POL-005-human-review-policy.md
