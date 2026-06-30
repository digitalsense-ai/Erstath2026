# UX-008 - Accessibility Guidelines

Version: 1.0
Status: Active Draft
Scope: Accessibility and inclusive UX

## Purpose

This document defines accessibility guidelines for ErstatningsHjaelp.

The product should be usable by people with different devices, abilities, stress levels and language confidence.

## Accessibility Principles

The experience should be:

- keyboard accessible
- readable
- understandable
- predictable
- screen-reader friendly
- usable on mobile
- tolerant of uncertainty and mistakes

## Plain Language

Use clear and simple Danish.

Avoid:

- legal jargon
- medical jargon unless explained
- long paragraphs
- internal AI terms
- unnecessary abbreviations

Preferred pattern:

```text
Short headline
Short explanation
One clear action
```

## Color Contrast

Text must have sufficient contrast against the background.

Rules:

- do not use light grey text on white backgrounds
- do not rely on color alone
- status colors must include labels
- focus states must be visible

## Keyboard Navigation

All interactive elements must be reachable by keyboard.

Required:

- logical tab order
- visible focus state
- submit button reachable after input
- skip action reachable
- modal focus trap when modals are used later

## Screen Reader Support

Important UI elements should have clear labels.

Examples:

```text
Textarea label: Hvad skete der?
Button label: Send beskrivelse
Loading status: Vi finder næste spørgsmål
```

Do not use icon-only controls without accessible labels.

## Form Accessibility

Inputs must include:

- visible label
- helper text if useful
- validation message close to field
- aria-describedby style relationship where implemented

Placeholder text is not a replacement for labels.

## Error Accessibility

Validation errors should be:

- clear
- close to the field
- announced when possible
- non-blaming

Example:

```text
Skriv kort, hvad sagen handler om, før du fortsætter.
```

## Loading Accessibility

Loading states should include text, not only animation.

Example:

```text
Vi gennemgår din beskrivelse og finder det vigtigste næste spørgsmål.
```

Avoid endless spinners without explanation.

## Motion Accessibility

Motion should be subtle.

Avoid:

- flashing
- fast movement
- auto-playing distracting animation
- animation required to understand content

Users should not lose information if motion is reduced.

## Mobile Accessibility

Mobile screens should support:

- large touch targets
- full-width inputs
- readable font sizes
- no horizontal scrolling
- stable layout when keyboard opens

## Cognitive Accessibility

The user may be stressed or unsure.

Support this by:

- asking one question at a time
- using short text
- accepting approximate answers
- allowing skip when the user does not know
- avoiding repeated questions
- clearly explaining next step

## Customer Intake Accessibility Checklist

Before accepting intake UX:

- every input has a visible label
- every button has clear text
- one primary action is visible
- error messages are field-specific
- loading state has readable text
- no internal scores are shown
- guide-away language is non-final
- mobile keyboard does not block the main task

## CRM Accessibility Checklist

Before accepting CRM UX:

- tables have readable headers
- filters are keyboard accessible
- status badges include text
- reason codes have explainable labels or tooltips
- panels can be navigated by keyboard
- color is not the only indicator of priority

## References

- UX-005-design-system.md
- UX-006-mobile-first-guidelines.md
- UX-007-loading-empty-error-states.md
