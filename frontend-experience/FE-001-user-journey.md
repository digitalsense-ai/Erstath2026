# FE-001 - User Journey

Version: 1.0
Status: Active Draft
Scope: Frontend experience user journey

## Purpose

This document describes the first user journey for the ErstatningsHjaelp frontend experience.

The journey is written as an experience timeline, not only as a technical flow.

## Journey Goal

The user should move from uncertainty to action.

Initial feeling:

```text
I do not know whether I have a case.
I do not know what to write.
I do not know whether this is worth starting.
```

Desired feeling after first interaction:

```text
I can explain this in my own words.
The system understands enough to ask the next question.
I am not alone in figuring this out.
```

## Journey Overview

```text
arrive on page
↓
AI welcomes user
↓
AI explains that simple words are enough
↓
user sees example-style guidance
↓
user writes first message
↓
CTA becomes active
↓
user submits
↓
AI acknowledges
↓
AI asks one useful next question
↓
user answers
↓
system continues or shows next step
```

## Stage 1 - Arrival

## User State

The user may be:

```text
unsure
stressed
curious
angry
sad
skeptical
```

## Product Responsibility

The product must reduce pressure immediately.

The first screen should not ask for formal data.

## Experience Requirements

```text
clear headline
calm visual design
AI welcome visible
large text input
simple CTA
no legal overload
```

## Stage 2 - AI Welcome

## User Question

```text
What should I do here?
```

## Product Answer

AI should answer through the welcome message:

```text
You do not need to know the rules.
You can write in your own words.
We will ask the right questions afterwards.
```

## Stage 3 - Example Guidance

## User Question

```text
How simple can my explanation be?
```

## Product Answer

Show short examples through typing or rotating prompts:

```text
Jeg fik en operation, og siden har jeg haft smerter.
Min sygdom blev først opdaget flere måneder senere.
Jeg fik forkert medicin og blev meget syg.
Mit barn kom til skade under fødslen.
```

## Stage 4 - First Message

## User Action

The user writes freely.

The system should accept:

```text
short message
long message
uncertain wording
approximate dates
non-medical language
```

## Product Behavior

```text
show character guidance if needed
activate CTA when enough text exists
avoid harsh validation
save draft locally if possible later
```

## Stage 5 - Submit

## User Question

```text
What happens now?
```

## Product Answer

Show a calm processing state:

```text
Tak. Jeg gennemgår din beskrivelse og finder det vigtigste næste spørgsmål.
```

## Stage 6 - AI First Response

## Product Behavior

AI should acknowledge the user and ask one next question.

Example:

```text
Tak. Det hjælper mig med at forstå forløbet.
Hvornår skete operationen cirka?
```

## Experience Rule

Do not immediately show scores or conclusions.

## Stage 7 - Answering Questions

The system continues one question at a time.

The user should always understand:

```text
why the question matters
that approximate answers are okay
that they can say they do not know
```

## Stage 8 - Next Step

Possible next steps:

```text
continue conversation
human review
request documents later
guide-away carefully
create case later
```

The first prototype may only show:

```text
next question
human review confirmation
simple next step card
```

## Emotional Design Notes

The journey should avoid:

```text
legal pressure
medical jargon
large forms
final rejection language
fake certainty
```

The journey should use:

```text
warm welcome
plain language
small steps
clear next action
calm reassurance
```

## Journey Success Criteria

The journey works if:

```text
user starts writing without needing instructions
user understands examples are only examples
user feels allowed to be unsure
user can answer first AI question
user knows what happens after submitting
```

## Prototype Journey

First prototype should include:

```text
Landing
AI welcome typing
First message input
Submitting state
AI acknowledgement
One smart question
User answer
Next step placeholder
```

## References

- FE-000-experience-principles.md
- docs/ux/UX-001-user-journey-overview.md
- docs/ux/UX-002-conversation-flow.md
