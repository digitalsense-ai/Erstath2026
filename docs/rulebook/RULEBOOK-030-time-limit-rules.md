# RULEBOOK-030 - Time Limit Rules

Version: 1.0
Status: Active Draft
Scope: Long-term AI Case Brain rule library

## Purpose

This document defines time limit and date-related rules for AI Case Brain.

Time limit rules do not make final legal conclusions. They help the system identify important dates, missing timeline information, uncertainty and cases that may require human review.

## Important Date Fields

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

Version: 1.0
Status: active
Category: Time limit
Reason code: event_date_missing

### Trigger

The case appears potentially relevant, but no event date, treatment date or approximate year is known.

### Effect

Add event_date to missing information with high priority.

### Question Impact

Ask when it happened, approximately.

### Test References

TC-061
ConversationStartTest

## Rule TL-002 - Discovery Date Missing

Version: 1.0
Status: active
Category: Time limit
Reason code: discovery_date_missing

### Trigger

The event may be old, or the user describes discovering the injury later.

### Effect

Add discovery_date to missing information.

### Question Impact

Ask when the user first became aware that the injury might be connected to treatment.

### Test References

TC-062

## Rule TL-003 - Treatment Date Known

Version: 1.0
Status: active
Category: Time limit
Reason code: treatment_date_known

### Trigger

The user provides a concrete treatment date, operation date or hospital contact date.

### Effect

Increase information quality and enable timeline assessment.

### Test References

TC-061

## Rule TL-004 - Approximate Date Provided

Version: 1.0
Status: active
Category: Time limit
Reason code: approximate_date_provided

### Trigger

The user provides an approximate time such as a year, season or month.

### Effect

Accept the approximate date for screening.

### Question Impact

Only ask for more precision if needed.

### Test References

TC-067

## Rule TL-005 - Diagnosis Delay Timeline Missing

Version: 1.0
Status: active
Category: Time limit
Reason code: diagnosis_delay_timeline_missing

### Trigger

case_type is diagnosis_delay, but first contact date or diagnosis date is missing.

### Effect

Add missing timeline item to missing information.

### Question Impact

Ask one timeline question at a time.

### Test References

TC-001
TC-061

## Rule TL-006 - Potential Time Limit Issue

Version: 1.0
Status: active
Category: Time limit
Reason code: potential_time_limit_issue

### Trigger

Known dates suggest that timing may be important or potentially blocking.

### Effect

Increase caution and consider human review if uncertainty remains.

### Human Review Impact

Escalate when serious consequence or unclear discovery date exists.

### Test References

TC-041
TC-071

## Rule TL-007 - Recent Event

Version: 1.0
Status: active
Category: Time limit
Reason code: recent_event_indicated

### Trigger

The user indicates that the event happened recently.

### Effect

Reduce time-limit uncertainty and continue screening.

### Test References

TC-001

## Rule TL-008 - Old Event With Later Discovery

Version: 1.0
Status: active
Category: Time limit
Reason code: old_event_later_discovery

### Trigger

The event happened long ago, but the user first discovered the possible injury connection later.

### Effect

Ask or store discovery_date and increase review sensitivity.

### Human Review Impact

Consider human review when consequence is serious.

### Test References

TC-041
TC-062

## Rule TL-009 - Date Conflict Detected

Version: 1.0
Status: active
Category: Time limit
Reason code: date_conflict_detected

### Trigger

User-provided dates conflict or make the timeline unclear.

### Effect

Reduce confidence and request clarification or human review.

### Test References

TC-041
TC-089

## Rule TL-010 - Previous Decision Date Relevant

Version: 1.0
Status: active
Category: Time limit
Reason code: previous_decision_date_relevant

### Trigger

The user mentions a previous decision, rejection, complaint or appeal.

### Effect

Ask for or store previous_decision_date when relevant.

### Human Review Impact

Route to human review if procedural status affects next step.

### Test References

TC-041

## Rule TL-011 - Complaint Date Known

Version: 1.0
Status: active
Category: Time limit
Reason code: complaint_date_known

### Trigger

The user provides the date when a complaint or claim was submitted.

### Effect

Store complaint_date as an unconfirmed fact unless verified.

### Test References

TC-041

## Rule TL-012 - Timeline Sufficient For Screening

Version: 1.0
Status: active
Category: Time limit
Reason code: timeline_sufficient_for_screening

### Trigger

Enough timeline information exists to continue screening without another date question.

### Effect

Do not ask more date questions. Move to provider, consequence, causation or document status.

### Test References

TC-067

## References

- RULEBOOK-003-rule-authoring-template.md
- docs/ai-case-brain/BRAIN-007-time-limit-rules.md
- docs/ai-case-brain/BRAIN-020-first-50-mvp-rules-catalog.md
