# TC-013 - Information Only No Case

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate a case where the user only wants general information and does not describe a personal case.

## Scenario

A fictional user asks how the process works but does not provide a treatment story.

## Initial User Description

```text
I just want to understand how this works. I do not have a specific case to describe right now.
```

## Expected Conversation Behavior

- answer at a high level
- do not force case intake
- offer to start intake if the user later wants it
- do not create unnecessary facts
- do not run screening

## Expected Facts

```text
information_request_only = true
case_story_provided = false
```

## Expected Missing Information

```text
none unless user chooses to start intake
```

## Expected Next Step

```text
provide_information
```

## Acceptance Checks

```text
no unnecessary case classification occurs
screening is not run
user is not pushed into intake
```
