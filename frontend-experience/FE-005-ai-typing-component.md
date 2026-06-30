# FE-005 - AI Typing Component

Version: 1.0
Status: Active Draft
Scope: Signature AI typing component

## Purpose

This document defines the AI typing component used in the landing experience and later conversation flow.

The component should make the experience feel like a calm helper is guiding the user.

## Core Idea

The user should not meet an empty form.

They should meet a short, human AI welcome that writes itself in a calm rhythm.

## Component Name

Suggested component name:

```text
AiTypingWelcome
```

Alternative names:

```text
TypingAssistantIntro
AiWelcomeMessage
GuidedStartPrompt
```

## Primary Use Cases

Use this component for:

```text
landing welcome
first message encouragement
AI thinking transition
short explanation before next question
example prompt rotation
```

Do not overuse it for every system message.

## First Welcome Sequence

Recommended sequence:

```text
Hej.
Jeg ved godt, det kan være svært at vide, hvor man skal starte.
Skriv bare et par sætninger om, hvad der skete.
Jeg stiller de rigtige spørgsmål bagefter.
```

## Timing Rules

Typing should feel human but not slow.

Suggested timing:

```text
initial delay: 300-500 ms
characters per second: 35-55
pause between sentences: 500-900 ms
maximum full intro duration: 4-6 seconds
```

## User Override Rule

The user can start typing at any time.

When user starts typing:

```text
stop or complete typing animation
keep input focused
never block user action
```

## Example Rotation

If the user waits, the component can introduce examples:

```text
Mange starter fx sådan her:
```

Then rotate examples:

```text
Jeg fik en operation, og siden har jeg haft smerter.
Min sygdom blev først opdaget flere måneder senere.
Jeg fik forkert medicin og blev meget syg.
Mit barn kom til skade under fødslen.
```

## Example Rotation Rules

```text
examples should be short
examples should not look like required format
examples should stop when user types
examples should not loop aggressively
examples should be varied across case types
```

## Visual Behavior

Suggested visual pattern:

```text
small AI/helper label
message bubble or calm text area
animated text
blinking cursor
soft fade between lines
```

Avoid:

```text
annoying chatbot popup
large robot avatar
sound effects
overly fast flashing cursor
```

## Accessibility

Animation must respect reduced motion preferences.

If reduced motion is enabled:

```text
show full text immediately
no character-by-character animation
```

Screen reader behavior:

```text
avoid announcing every character
announce final message or sentence-level update
```

## States

Recommended states:

```text
idle
intro_typing
intro_complete
example_intro
example_typing
user_typing
paused
reduced_motion
error_fallback
```

## Props / Configuration

Suggested frontend props:

```text
messages: string[]
examples: string[]
typingSpeed: number
sentencePauseMs: number
autoRotateExamples: boolean
stopOnUserInput: boolean
reducedMotion: boolean
```

## Pseudo Flow

```text
load component
wait 300 ms
start intro typing
show blinking cursor
finish intro
focus input or keep input ready
if no user input after delay, show example intro
rotate short examples
stop when user types
```

## First Prototype Behavior

For prototype, implement simple fake behavior:

```text
show intro typing
show input
rotate examples if empty
submit goes to fake AI response
```

No backend is required.

## Copy Rules

Use plain Danish.

Good:

```text
Skriv bare et par sætninger.
Du behøver ikke kende reglerne.
Jeg stiller de rigtige spørgsmål bagefter.
```

Avoid:

```text
Please provide legally relevant information.
Insufficient input.
Case screening initiated.
```

## Acceptance Criteria

The component is successful when:

```text
it makes the user feel invited
it explains how little is needed to start
it does not block typing
it works on mobile
it works with reduced motion
it supports short rotating examples
```

## References

- FE-000-experience-principles.md
- FE-002-landing-experience.md
- docs/ux/UX-009-microcopy-and-tone-of-voice.md
