# 28 - AI Guided Screening Flow

## Status

Post-audit architecture improvement for the screening experience.

This document defines a refined user flow for ErstatningsHjælp where the first user input is still free text, but the system immediately converts the text into confirmable tags, click choices, and structured data.

The goal is to improve:

- conversion
- data quality
- AI precision
- user trust
- scoring consistency

This document does not replace MVP 0.1. It should be treated as a high-priority UX and architecture improvement for the screening flow.

---

## 1. Core principle

The screening flow should not feel like a long form and it should not feel like an open-ended chatbot.

The recommended model is:

```text
Free text
↓
AI extracts likely facts
↓
User confirms or edits tags
↓
System uses click choices where possible
↓
AI asks only necessary follow-up questions
↓
Scores are calculated
↓
Lead is routed to the correct next step
```

The short name for this principle is:

```text
Free Text → Confirm → Continue
```

---

## 2. Why this matters

A pure free-text flow gives flexibility, but users may not know what information matters.

A pure form gives structure, but feels heavy and lowers conversion.

A guided screening flow combines both:

```text
User speaks naturally
AI structures the answer
User confirms with clicks
System gets cleaner data
```

This creates the feeling that the system understands the user instead of interrogating them.

---

## 3. Example user flow

### Step 1 - Free text

User sees:

```text
Beskriv med dine egne ord hvad der skete.
Du behøver ikke kende alle detaljer.
```

User writes:

```text
Min mor fik ikke diagnosticeret kræft i tide og døde senere.
```

---

### Step 2 - AI proposes tags

The system shows:

```text
Vi tror sagen handler om:

[✓ Diagnoseforsinkelse]
[✓ Kræft]
[✓ Dødsfald]
[+ Tilføj]
```

User can confirm, remove, or add tags.

---

### Step 3 - Confirm relationship

The system asks:

```text
Hvem handler sagen om?

[ ] Mig selv
[ ] Mit barn
[ ] Min ægtefælle
[ ] Min forælder
[ ] Anden pårørende
```

This is important because cases may involve relatives, estates, guardians, or other representatives.

---

### Step 4 - Confirm timing

Instead of asking for exact dates immediately, the system can begin with ranges:

```text
Hvornår skete behandlingen?

[ ] Under 1 år siden
[ ] 1-3 år siden
[ ] 3-10 år siden
[ ] Mere end 10 år siden
[ ] Ved ikke
```

Then, if relevant, the system can ask for more precise dates.

---

### Step 5 - Confirm consequences

```text
Hvilke konsekvenser oplevede I?

[ ] Dødsfald
[ ] Varigt mén
[ ] Tab af arbejde
[ ] Længere sygdomsforløb
[ ] Ekstra behandling
[ ] Andet
[ ] Ved ikke
```

---

### Step 6 - Confirm documentation

```text
Hvilke dokumenter har du?

[ ] Journal
[ ] Afgørelse
[ ] Breve fra hospital/læge
[ ] Lægeudtalelse
[ ] Ingen endnu
[ ] Ved ikke
```

---

## 4. Tag categories

The first version should support tags in these categories.

### Case type tags

```text
diagnose_delay
misdiagnosis
surgical_error
medication_injury
infection
birth_injury
equipment_failure
other
unknown
```

### Condition tags

```text
cancer
heart_condition
infection
nerve_damage
birth_related
medicine_related
unknown
```

### Consequence tags

```text
death
permanent_injury
loss_of_work_capacity
additional_treatment
longer_illness_course
economic_loss
other
unknown
```

### Documentation tags

```text
medical_record
previous_decision
letter_or_message
medical_statement
receipt_or_expense
none_yet
unknown
```

### Previous case tags

```text
never_submitted
submitted_to_patient_compensation
rejected
partly_accepted
accepted
appealed
unknown
```

---

## 5. Data model impact

This flow can be supported without replacing the existing Lead model.

Recommended additions for later implementation:

```text
lead_tags
lead_tag_confirmations
screening_steps
```

### lead_tags

Suggested fields:

```text
id
lead_id
tag_type
tag_value
source
confidence
created_at
updated_at
```

Where source can be:

```text
ai_suggested
user_selected
user_removed
system_inferred
```

### lead_tag_confirmations

Suggested fields:

```text
id
lead_id
tag_type
tag_value
confirmed
confirmed_at
```

### screening_steps

Suggested fields:

```text
id
lead_id
step_key
step_status
response_type
completed_at
```

---

## 6. AI output impact

The AI should not only return entities and scores. It should also return suggested tags.

Example structure:

```json
{
  "summary": "Possible delayed diagnosis with severe consequence.",
  "suggested_tags": [
    {
      "type": "case_type",
      "value": "diagnose_delay",
      "confidence": 0.92
    },
    {
      "type": "condition",
      "value": "cancer",
      "confidence": 0.88
    },
    {
      "type": "consequence",
      "value": "death",
      "confidence": 0.90
    }
  ],
  "next_step": "confirm_tags"
}
```

The backend must still validate AI output before saving anything.

---

## 7. Recommended screening step order

The guided flow should prioritize the most important information first.

```text
1. Free text
2. Confirm AI tags
3. Confirm who the case concerns
4. Confirm timing range
5. Confirm damage type
6. Confirm consequences
7. Confirm previous case status
8. Confirm documentation status
9. Ask one targeted follow-up question if needed
10. Score and route lead
```

This is intentionally shorter than a traditional form.

---

## 8. User experience rules

### Rule 1 - Never show too many choices at once

Each screen should focus on one decision.

### Rule 2 - Always allow "Ved ikke"

Many users do not know exact dates, document types, or legal terms.

### Rule 3 - Always allow free text fallback

Every click step should allow:

```text
Andet / skriv selv
```

### Rule 4 - Confirm before scoring

AI-suggested tags should be user-confirmed before they strongly influence scoring.

### Rule 5 - Do not require documents too early

Documentation status should improve confidence, but lack of documents should not automatically stop a promising lead.

---

## 9. Scoring impact

Confirmed tags should strengthen scoring confidence.

Example:

```text
AI inferred diagnosis delay only:
medium confidence

AI inferred diagnosis delay + user confirmed diagnosis delay:
higher confidence
```

This means the scoring engine should distinguish between:

```text
AI inferred facts
User confirmed facts
Uploaded evidence
Human reviewed facts
```

---

## 10. CRM impact

CRM should show both:

```text
AI suggested tags
User confirmed tags
```

Example:

```text
AI suggested:
- diagnose_delay
- cancer
- death

User confirmed:
- diagnose_delay
- cancer
- death
```

If the user removes a suggested tag, this should also be visible to the caseworker.

---

## 11. Testing requirements

Future tests should cover:

- AI suggests correct tags from free text
- user can confirm tags
- user can remove tags
- user can select "Ved ikke"
- confirmed tags affect information quality
- unconfirmed AI tags do not overrule user input
- CRM displays confirmed tags correctly

---

## 12. Implementation recommendation

This should be implemented after the first MVP screening flow works.

Recommended build order:

```text
1. Add tag schema to AI response validator
2. Add lead_tags table
3. Add tag confirmation endpoint
4. Add UI component for tag confirmation
5. Add click-choice screening steps
6. Update scoring confidence rules
7. Update CRM display
8. Add tests
```

---

## 13. Product conclusion

AI Guided Screening is likely one of the most valuable UX improvements in the project.

It does not change the core business model.
It does not replace the AI engine.
It does not replace CRM.

But it can improve:

```text
Conversion
User trust
Data quality
AI precision
Scoring confidence
Caseworker efficiency
```

Therefore, this flow should be treated as a high-priority post-MVP improvement and a likely candidate for MVP 0.2 or MVP 0.3 depending on implementation speed.
