# TC-054 - Simple Language Needed

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system uses simple language when a fictional user has difficulty explaining the situation.

## Initial User Description

```text
I find it difficult to explain this in writing. I am worried that I may write it wrong.
```

## Expected Conversation Behavior

- use simple language
- ask one question at a time
- accept approximate wording
- recommend review if meaning remains unclear

## Expected Facts

```text
simple_language_needed = true
meaning_unclear = true
support_needed = true
```

## Expected Missing Information

```text
event_description
current_consequence
support_preference
```

## Expected Next Step

```text
continue_intake or human_review
```

## Acceptance Checks

```text
simple language is used
user is not penalized for uncertainty
human review can be recommended
```
