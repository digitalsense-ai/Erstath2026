# TC-043 - High Impact on Work Ability

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system recommends human review when a fictional user describes a major effect on work ability.

## Initial User Description

```text
After the treatment I have not been able to work like before. I am still affected and do not know what will happen next.
```

## Expected Conversation Behavior

- acknowledge the impact carefully
- ask what changed in work ability
- ask when the change started
- ask whether follow-up or documentation exists
- avoid making a final conclusion

## Expected Facts

```text
work_ability_affected = true
ongoing_consequence = true
severity_possible = high
```

## Expected Missing Information

```text
work_impact_details
symptom_start_date
follow_up_details
documentation_available
```

## Expected Next Step

```text
human_review
```

## Acceptance Checks

```text
work impact is captured
ongoing consequence is captured
human review is recommended
no final conclusion is claimed
```
