# UX-005 - Design System

Version: 1.0
Status: Active Draft
Scope: Visual design and frontend consistency

## Purpose

This document defines the first design system for ErstatningsHjaelp.

The design system should create a calm, trustworthy and accessible experience across customer intake, CRM and human review screens.

## Design Principles

The interface should feel:

- calm
- professional
- trustworthy
- human
- simple
- clear
- accessible

Avoid a look that feels:

- aggressive
- overly legal
- overly clinical
- sales-heavy
- technical
- stressful

## Visual Direction

The product should feel like a modern Danish public-service-inspired digital experience, but warmer and more personal.

The user may be uncertain or emotionally affected, so the UI should reduce pressure.

## Color Roles

Use color by role rather than by decoration.

Recommended roles:

```text
primary
primary_hover
secondary
background
surface
surface_muted
border
text_primary
text_secondary
success
warning
danger
info
review
```

## Primary Color Direction

Use a trustworthy blue or blue-green as primary.

Primary color should be used for:

- main CTA
- focused states
- selected navigation
- important active elements

Avoid using strong red except for real errors or warnings.

## Backgrounds

Use soft neutral backgrounds.

Recommended background pattern:

```text
page background: very light neutral
card background: white or near-white
muted panel: soft grey/blue-grey
```

The intake experience should not feel like a dense admin system.

## Status Colors

Status colors should be consistent.

Suggested semantics:

```text
success: completed or accepted
warning: needs attention
error: validation or system problem
info: neutral information
review: human review needed
muted: waiting or inactive
```

Do not rely on color alone. Always include text or icon support.

## Typography

Typography should prioritise readability.

Recommended hierarchy:

```text
Display / page headline
Section headline
Card headline
Body text
Small helper text
Caption / metadata
```

Text should be:

- short
- plain language
- readable on mobile
- high contrast

Avoid long paragraphs in the conversation flow.

## Spacing

Use consistent spacing tokens.

Suggested scale:

```text
4px
8px
12px
16px
24px
32px
48px
64px
```

Customer intake should have more whitespace than CRM screens.

CRM screens can be denser but must remain readable.

## Border Radius

Use soft rounded corners.

Suggested radius roles:

```text
small: inputs, chips
medium: cards, buttons
large: panels and modals
full: badges and pills
```

## Shadows

Use subtle shadows only.

Shadows should support layering, not decoration.

Suggested use:

- cards
- modals
- dropdowns
- sticky action bar

Avoid heavy shadows.

## Buttons

Button hierarchy:

```text
PrimaryButton
SecondaryButton
TertiaryButton
DangerButton
IconButton
```

Rules:

- one primary action per screen section
- button labels should be action-based
- loading and disabled states required
- touch target must be mobile friendly

## Inputs

Inputs should include:

- label
- helper text when useful
- placeholder only as example, not label replacement
- validation message
- focus state
- disabled state

Textarea should be comfortable on mobile.

## Cards

Cards are used for:

- AI question
- guide-away
- human review message
- lead summary
- facts
- documents
- timeline items

Cards should have clear headings and one purpose.

## Badges And Chips

Use badges for statuses and chips for metadata.

Examples:

```text
Needs review
Missing date
Diagnosis delay
Unconfirmed fact
```

Internal chips such as reason codes should be staff-facing only.

## Icons

Icons should support meaning, not replace text.

Use icons for:

- information
- warning
- success
- review
- document
- timeline
- status

All important icon meanings must have text labels.

## Motion

Motion should be subtle and calming.

Allowed motion:

- loading pulse
- gentle transition between conversation turns
- toast fade
- accordion expand

Avoid:

- fast flashing
- celebratory animation for sensitive case outcomes
- distracting movement

## Layout System

Use responsive layout patterns:

```text
single-column mobile intake
centered max-width conversation on desktop
side-by-side panels for CRM desktop
stacked CRM panels on tablet/mobile
```

## Accessibility Rules

Design must support:

- keyboard navigation
- visible focus states
- sufficient contrast
- readable font sizes
- text alternatives for icons
- not relying only on color

## First Slice Design Scope

For the first vertical slice, define styles for:

```text
page background
conversation shell
intro card
textarea
AI question card
primary button
secondary button
loading state
validation state
confirmation toast
```

## References

- UX-004-component-library.md
- UX-006-mobile-first-guidelines.md
- UX-008-accessibility-guidelines.md
