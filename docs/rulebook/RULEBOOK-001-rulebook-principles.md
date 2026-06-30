# RULEBOOK-001 - Rulebook Principles

Version: 1.0
Status: Active Draft
Scope: Long-term AI Case Brain rule library

## Purpose

This document defines the principles for writing and maintaining AI Case Brain rules.

The rulebook should make the system explainable, testable and adjustable over time.

## Principle 1 - Rules Must Be Explicit

Important screening behavior should not live only inside prompts.

Rules should be written down with:

- trigger
- condition
- effect
- reason code
- test reference

## Principle 2 - Rules Support, Humans Decide

Rules may support:

- screening
- prioritisation
- routing
- missing information
- smart questions
- human review escalation

Rules must not make final legal, medical or business decisions without human review where required.

## Principle 3 - MVP First

The full rulebook should not block implementation.

Start with the first 50 MVP rules.

Expand only when:

- first vertical slice works
- tests exist
- new cases require more coverage
- staff feedback shows a gap

## Principle 4 - Reason Codes Are Mandatory

Every important rule must produce or support a reason code.

Reason codes make the system:

- explainable
- testable
- auditable
- easier to debug

## Principle 5 - Facts Are Not Confirmed By Default

AI-extracted facts start as:

```text
unconfirmed
```

A rule must not mark a fact as confirmed unless it comes from a trusted source, document, integration or human verification.

## Principle 6 - One Question At A Time

Question rules must preserve the conversational experience.

The system should ask one high-value question instead of behaving like a long form.

## Principle 7 - Commercial Logic Is Internal

Commercial value rules may support internal prioritisation.

They should not produce user-facing language about internal value, profit or expected revenue.

## Principle 8 - Human Review Overrides Automation

Human review must override automated recommendations when:

- confidence is low
- facts conflict
- case is sensitive
- serious consequence exists
- staff manually escalates

## Principle 9 - Guide-Away Must Be Respectful

Guide-away rules should never say that the user has no case as a final statement.

They should explain that the information currently provided is not enough to continue in the main flow.

## Principle 10 - Rules Must Be Testable

Every important rule should have at least one:

- unit test
- feature test
- business test case
- fake AI scenario

## Principle 11 - Rules Must Be Versioned

Rules can change over time.

When a rule changes materially, update:

- version
- changelog note
- reason code if needed
- tests if needed

## Principle 12 - Avoid Duplicate Rules

Before adding a rule, check whether an existing rule already covers the behavior.

Prefer updating an existing rule over creating a near-duplicate.

## References

- RULEBOOK-000-index.md
- RULEBOOK-002-rule-id-and-versioning-standard.md
- RULEBOOK-003-rule-authoring-template.md
- docs/ai-case-brain/BRAIN-002-decision-principles-and-guardrails.md
