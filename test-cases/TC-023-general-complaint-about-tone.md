# TC-023 - General Complaint About Tone

Version: 1.0 Draft
Status: Planned
Owner: Product / QA
Domain: Business Test Case
Related: TC-000-test-case-catalog.md

## Purpose

Validate that the system can guide a fictional user who describes poor communication style rather than treatment harm.

## Initial User Description

```text
The staff spoke to me in a way that felt dismissive. I do not have an injury from it, but I want someone to know.
```

## Expected Conversation Behavior

- acknowledge the experience respectfully
- clarify that no treatment consequence is described
- explain that this may be a complaint path rather than compensation intake
- guide elsewhere without sounding dismissive

## Expected Facts

```text
communication_issue = true
harm_described = false
complaint_path_possible = true
```

## Expected Missing Information

```text
none_if_no_harm_confirmed
```

## Expected Next Step

```text
guide_elsewhere
```

## Acceptance Checks

```text
respectful tone is used
complaint path is recognized
no final legal conclusion is claimed
```
