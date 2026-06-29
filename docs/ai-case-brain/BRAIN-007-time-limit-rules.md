# BRAIN-007 - Time Limit Rules

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document defines the first time limit rules for AI Case Brain.

Time limit clarification should happen early because it can strongly affect whether the system should continue, ask more questions, route to human review or guide away.

## Important Date Fields

The brain should try to identify:

```text
event_date
treatment_date
first_contact_date
diagnosis_date
discovery_date
injury_recognition_date
previous_decision_date
complaint_date
```

## Rule TL-001 - Event Date Missing

Trigger:

The case appears to involve healthcare treatment, but the event date or approximate year is missing.

Effect:

Prioritise a date-related next question.

Reason code:

```text
event_date_missing
```

Recommended question:

```text
When did this happen, approximately?
```

## Rule TL-002 - Discovery Date Missing

Trigger:

The user describes a delayed diagnosis, misdiagnosis or unknown injury timeline, but the date when the issue was discovered is missing.

Effect:

Ask about discovery or diagnosis date.

Reason code:

```text
discovery_date_missing
```

Recommended question:

```text
When did you first become aware that something may have gone wrong?
```

## Rule TL-003 - Diagnosis Delay Timeline Missing

Trigger:

case_type is diagnosis_delay and either first_contact_date or diagnosis_date is missing.

Effect:

Prioritise the missing timeline point.

Reason code:

```text
diagnosis_delay_timeline_missing
```

Recommended questions:

```text
When did the patient first seek medical help for the symptoms?
When was the diagnosis finally made?
```

Ask only one question at a time.

## Rule TL-004 - Approximate Date Is Acceptable

Trigger:

The user gives only year, month or approximate period.

Effect:

Accept the approximate date for screening and mark precision as approximate.

Reason code:

```text
approximate_date_provided
```

## Rule TL-005 - Very Old Event

Trigger:

The event appears to be older than the normal screening threshold or clearly many years old.

Effect:

Do not automatically reject if discovery date is missing. Ask about when the user became aware of the possible injury.

Reason code:

```text
old_event_discovery_date_needed
```

## Rule TL-006 - Potential Time Limit Issue

Trigger:

Known dates suggest a possible time limit problem, but information is incomplete.

Effect:

Route to human review or ask one clarification question before guide-away.

Reason code:

```text
potential_time_limit_issue
```

## Rule TL-007 - Clearly Blocked Time Signal

Trigger:

Known dates strongly indicate the case may be outside relevant time limits and there is no discovery-date exception signal.

Effect:

Lower case strength significantly and consider guide-away or human review depending on confidence.

Reason code:

```text
possible_time_limit_block
```

## Rule TL-008 - Previous Decision Date Mentioned

Trigger:

The user mentions a previous decision, rejection, appeal, reopening or prior complaint.

Effect:

Ask for decision date or document status if missing.

Reason code:

```text
previous_decision_date_relevant
```

Recommended question:

```text
When did you receive the previous decision?
```

## Rule TL-009 - Date Conflict

Trigger:

User-provided dates conflict with each other or timeline appears impossible.

Effect:

Route to human review or ask a clarification question.

Reason code:

```text
date_conflict_detected
```

## Rule TL-010 - Time Limit Not Yet Assessable

Trigger:

No reliable date information is available after one or more questions.

Effect:

Keep time limit assessment as unknown and reduce information quality.

Reason code:

```text
time_limit_not_assessable
```

## Scoring Effects

Time information should affect:

- information_quality
- case_strength
- routing
- human_review_required

Recommended behavior:

- known relevant dates increase information quality
- missing dates reduce information quality
- possible time limit block reduces case strength
- date uncertainty can trigger human review

## Test References

- TC-061 Missing Date Smart Follow-up
- TC-062 Approximate Date Accepted
- TC-063 Old Case Requires Discovery Date
- TC-064 Previous Decision Date Flow
- TC-065 Date Conflict Review

## References

- BRAIN-003-routing-model.md
- BRAIN-004-rule-library-structure.md
- docs/contracts/CONTRACT-004-screening-output-contract.md
