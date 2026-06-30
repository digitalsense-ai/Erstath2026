# BRAIN-012 - Commercial Value Rules

Version: 1.0
Status: Draft
Scope: AI Case Brain v1.0

## Purpose

This document defines how AI Case Brain estimates internal commercial relevance during screening.

Commercial value is an internal prioritisation signal. It must not be presented to the user in a way that feels transactional or insensitive.

## Commercial Value Inputs

The brain may consider:

```text
severity of consequence
permanent injury signal
loss of work capacity
death or dependent loss signal
economic loss
case type
case strength
information quality
documentation signal
expected work effort
uncertainty and review need
```

## Rule CV-001 - Death Signal

Trigger:

Consequence includes death.

Effect:

Increase commercial relevance and human review sensitivity.

Reason code:

```text
death_commercial_value_signal
```

## Rule CV-002 - Severe Permanent Injury Signal

Trigger:

The user describes severe permanent injury or life-changing harm.

Effect:

Increase commercial relevance.

Reason code:

```text
severe_permanent_injury_value_signal
```

## Rule CV-003 - Permanent Injury Signal

Trigger:

The user describes lasting harm, chronic symptoms, permanent impairment or similar.

Effect:

Increase commercial relevance.

Reason code:

```text
permanent_injury_value_signal
```

## Rule CV-004 - Loss Of Work Capacity Signal

Trigger:

The user mentions loss of income, inability to work, long sick leave, reduced work capacity or early retirement.

Effect:

Increase commercial relevance.

Reason code:

```text
work_capacity_loss_value_signal
```

## Rule CV-005 - High-Value Case Type Signal

Trigger:

case_type is diagnosis_delay, birth_injury, surgical_error or severe medication injury with serious consequence.

Effect:

Increase commercial relevance when case strength is also meaningful.

Reason code:

```text
high_value_case_type_signal
```

## Rule CV-006 - Documentation Strength Signal

Trigger:

Relevant documents are available or prior authority/provider acknowledgement is mentioned.

Effect:

Increase confidence in commercial value estimate.

Reason code:

```text
documentation_supports_value_estimate
```

## Rule CV-007 - Low Consequence Signal

Trigger:

The user describes minor temporary discomfort, dissatisfaction, inconvenience or no specific injury.

Effect:

Lower commercial value.

Reason code:

```text
low_consequence_value_signal
```

## Rule CV-008 - High Work Effort And Low Evidence

Trigger:

The case appears complex, evidence is weak and commercial signals are low or unknown.

Effect:

Lower commercial value or route to human review if case strength is uncertain.

Reason code:

```text
high_effort_low_evidence_signal
```

## Rule CV-009 - Commercial Value Unknown

Trigger:

Consequence, work capacity and economic impact are not known.

Effect:

Do not assume low value. Ask one relevant consequence or impact question if case strength is meaningful.

Reason code:

```text
commercial_value_unknown
```

## Rule CV-010 - Do Not Expose Internal Value

Trigger:

Any user-facing response is generated.

Effect:

Do not expose internal commercial value score, estimated provision or profit language to the user during intake.

Reason code:

```text
commercial_value_internal_only
```

## Suggested Scoring Model

Commercial Value can be estimated from weighted signals:

```text
severity signal                 30
permanent injury or death        25
work capacity or economic loss   20
case type value                  10
documentation support            10
work effort adjustment            5
```

Total:

```text
100
```

## Commercial Value Bands

```text
80-100 very high internal priority
60-79 high internal priority
40-59 medium internal priority
0-39 low internal priority
```

## Human Review Guidance

Commercial value should not override low legal or factual strength.

Route to human review when:

- value signal is high but causation is unclear
- severe consequence exists but information quality is low
- documents may change the assessment significantly

## Test References

- TC-001 Basic Patient Injury Flow
- TC-041 Human Review Unclear Case
- TC-071 Serious Consequence Review Priority
- TC-074 Documentation Missing But Strong Case

## References

- BRAIN-008-injury-and-consequence-rules.md
- BRAIN-009-causation-signal-rules.md
- BRAIN-010-evidence-and-document-rules.md
- docs/contracts/CONTRACT-004-screening-output-contract.md
