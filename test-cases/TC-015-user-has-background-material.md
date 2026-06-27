# TC-015 - User Has Background Material

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system records when the fictional user has relevant background material available.

## Initial User Description

```text
I have some written material about what happened and can provide details from it if needed.
```

## Expected Conversation Behavior

- record that background material is available
- ask what type of material exists
- avoid asking later as if no material exists
- continue collecting the story

## Expected Facts

```text
background_material_available = true
user_can_provide_details = true
```

## Expected Missing Information

```text
material_type
case_story_details
```

## Expected Next Step

```text
continue_intake
```

## Acceptance Checks

```text
material availability is stored
Smart Skip avoids duplicate questions
conversation continues
```
