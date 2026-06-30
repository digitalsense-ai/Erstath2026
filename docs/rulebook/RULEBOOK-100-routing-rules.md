# RULEBOOK-100 - Routing Rules

Version: 1.0
Status: Active Draft
Scope: Long-term AI Case Brain rule library

## Purpose

This document defines routing rules for AI Case Brain.

Routing rules determine the recommended next step after the system has evaluated domain, case type, time, consequence, causation, evidence, information quality and confidence.

## Routing Targets

Allowed routing targets:

```text
continue_conversation
request_documents
human_review
onboarding_later
guide_away
```

## Rule ROUTE-001 - Continue Conversation For Missing Critical Facts

Version: 1.0
Status: active
Category: Routing
Reason code: route_continue_conversation_missing_facts

### Trigger

The case may be relevant, but critical facts are missing and question limit has not been reached.

### Effect

Set routing_target to continue_conversation.

### Test References

TC-001
TC-061
TC-066

## Rule ROUTE-002 - Request Documents When Core Facts Are Known

Version: 1.0
Status: active
Category: Routing
Reason code: route_request_documents_core_facts_known

### Trigger

Core facts are known and documentation is the next useful step.

### Effect

Set routing_target to request_documents.

### Test References

TC-074

## Rule ROUTE-003 - Human Review For Low Confidence Relevant Case

Version: 1.0
Status: active
Category: Routing
Reason code: route_human_review_low_confidence

### Trigger

The case may be relevant, but confidence is low.

### Effect

Set routing_target to human_review.

### Test References

TC-041

## Rule ROUTE-004 - Human Review For Serious Unclear Case

Version: 1.0
Status: active
Category: Routing
Reason code: route_human_review_serious_unclear_case

### Trigger

Serious consequence is described and causation or timeline is unclear.

### Effect

Set routing_target to human_review and increase review priority.

### Test References

TC-041
TC-071
TC-073

## Rule ROUTE-005 - Guide Away Clearly Out Of Scope

Version: 1.0
Status: active
Category: Routing
Reason code: route_guide_away_out_of_scope

### Trigger

The case is clearly outside patient injury compensation scope and no human review override applies.

### Effect

Set routing_target to guide_away.

### Test References

TC-081

## Rule ROUTE-006 - Guide Away Weak Case After Clarification

Version: 1.0
Status: active
Category: Routing
Reason code: route_guide_away_weak_case_after_clarification

### Trigger

The system has asked relevant clarification questions and case signals remain weak.

### Effect

Set routing_target to guide_away with respectful user-safe explanation.

### Test References

TC-021
TC-022

## Rule ROUTE-007 - Onboarding Later For Strong Enough Case

Version: 1.0
Status: active
Category: Routing
Reason code: route_onboarding_later_strong_enough_case

### Trigger

Case strength, information quality and confidence are high enough for next-step onboarding, and no human review override applies.

### Effect

Set routing_target to onboarding_later.

### Test References

TC-001
TC-074

## Rule ROUTE-008 - Do Not Onboard With Missing Critical Facts

Version: 1.0
Status: active
Category: Routing
Reason code: prevent_onboarding_missing_critical_facts

### Trigger

Critical facts are missing.

### Effect

Block onboarding_later route until enough information exists or human review overrides.

### Test References

TC-061
TC-066

## Rule ROUTE-009 - Human Review Overrides Guide-Away

Version: 1.0
Status: active
Category: Routing
Reason code: human_review_overrides_guide_away

### Trigger

Both guide-away and human review rules are active.

### Effect

Choose human_review.

### Test References

TC-041
TC-071

## Rule ROUTE-010 - Staff Override Routing

Version: 1.0
Status: active
Category: Routing
Reason code: staff_override_routing

### Trigger

A staff member manually changes the route.

### Effect

Staff decision overrides automated route and must be logged.

### Test References

TC-097

## Rule ROUTE-011 - Invalid Output Fallback Route

Version: 1.0
Status: active
Category: Routing
Reason code: invalid_output_fallback_route

### Trigger

AI or Brain output fails validation.

### Effect

Use safe fallback routing, usually continue_conversation or human_review depending on context.

### Test References

TC-089

## Rule ROUTE-012 - No Decision Without Reason Codes

Version: 1.0
Status: active
Category: Routing
Reason code: no_routing_without_reason_codes

### Trigger

A routing target is selected without reason codes.

### Effect

Reject or repair output before returning response.

### Test References

TC-096

## References

- RULEBOOK-003-rule-authoring-template.md
- docs/ai-case-brain/BRAIN-003-routing-model.md
- docs/ai-case-brain/BRAIN-018-brain-output-model.md
