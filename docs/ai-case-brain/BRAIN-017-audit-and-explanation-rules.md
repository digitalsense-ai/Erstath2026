# BRAIN-017 - Audit and Explanation Rules

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document defines how AI Case Brain should keep recommendations explainable and traceable.

The system must be able to show why a route, score, review flag or next question was chosen.

## Core Principle

Important automated recommendations must include structured reason codes.

Reason codes support:

- QA
- debugging
- human review
- future improvement
- implementation tests

## Recommended Explanation Output

```json
{
  "reason_codes": [
    "possible_diagnosis_delay",
    "event_date_missing",
    "serious_consequence_indicated"
  ],
  "internal_summary": "Possible delayed diagnosis with serious consequence. Event date is missing.",
  "user_safe_summary": "We need one more detail to better understand when this happened."
}
```

## Rule AUD-001 - Reason Codes Required

Trigger:

A routing, score, next question, guide-away or review recommendation is produced.

Effect:

Attach reason codes.

Reason code:

```text
reason_codes_required
```

## Rule AUD-002 - Internal Summary Required

Trigger:

A decision support result is generated.

Effect:

Store a short internal summary for staff and QA.

Reason code:

```text
internal_summary_required
```

## Rule AUD-003 - User-Safe Summary Required

Trigger:

A response is shown to the user.

Effect:

Use careful language that does not promise an outcome.

Reason code:

```text
user_safe_summary_required
```

## Rule AUD-004 - Validation Status Recorded

Trigger:

AI output is accepted, rejected or adjusted by rule logic.

Effect:

Record validation status.

Reason code:

```text
validation_status_recorded
```

## Rule AUD-005 - Human Review Reason Recorded

Trigger:

human_review_required is true.

Effect:

Record review reason codes and priority.

Reason code:

```text
human_review_reason_recorded
```

## Rule AUD-006 - Guide-Away Reason Recorded

Trigger:

routing_target is guide_away.

Effect:

Record guide-away reason codes.

Reason code:

```text
guide_away_reason_recorded
```

## Rule AUD-007 - Score Drivers Recorded

Trigger:

case strength, information quality or commercial value is calculated.

Effect:

Record main positive and negative score drivers.

Reason code:

```text
score_drivers_recorded
```

## Rule AUD-008 - Staff Override Recorded

Trigger:

A human changes an AI recommendation or review outcome.

Effect:

Record original recommendation, human outcome and reviewer note.

Reason code:

```text
staff_override_recorded
```

## Explanation Levels

### User-facing

Short and careful.

### Caseworker-facing

Includes reason codes, missing facts and confidence.

### Developer-facing

Includes rule IDs, validation status and test references.

## Do Not Expose In User-Facing Text

Do not expose:

- internal commercial value
- raw provider output
- internal debug details
- final legal conclusions

## Test References

- TC-095 Audit Trail Integrity
- TC-096 Reason Code Explanation
- TC-097 Human Override Audit
- TC-089 Invalid AI Output Fallback

## References

- BRAIN-002-decision-principles-and-guardrails.md
- BRAIN-016-confidence-model-rules.md
- docs/contracts/CONTRACT-005-decision-output-contract.md
- docs/contracts/CONTRACT-007-human-review-contract.md
