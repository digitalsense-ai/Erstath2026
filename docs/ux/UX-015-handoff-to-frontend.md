# UX-015 - Handoff to Frontend

Version: 1.0
Status: Active Draft
Scope: Frontend implementation handoff

## Purpose

This document defines the frontend handoff for the ErstatningsHjaelp UX Pack.

It should help frontend developers build the first customer intake and later CRM screens without guessing UX behavior.

## Handoff Principle

Frontend should implement the documented UX states and components, not invent new flows that conflict with AI Case Brain, Rulebook, API contracts or test cases.

## First Frontend Priority

Build the first customer conversation slice:

```text
Welcome
First Message
AI Thinking
Smart Question
Answer Submitted
Next Step placeholder
```

This supports the first backend vertical slice:

```text
POST /api/v1/conversations
Fake AI
AI Case Brain
one next question
validated JSON
```

## Recommended Frontend Structure

Suggested structure:

```text
resources/js/
  components/
    intake/
    crm/
    shared/
  pages/
    intake/
    crm/
  composables/
  stores/
  api/
```

If using Blade first, keep component boundaries conceptually similar.

## Customer Intake Components

First slice components:

```text
ConversationShell
IntroCard
TextAreaInput
HelperExamples
ThinkingIndicator
AIQuestionCard
PrimaryButton
SecondaryButton
InlineValidationMessage
ConfirmationToast
```

Later components:

```text
GuideAwayCard
HumanReviewCard
DocumentRequestCard
ProgressHint
```

## Suggested Page Routes

First slice can be a single route:

```text
/intake
```

Later routes may include:

```text
/intake/:conversationId
/intake/:conversationId/documents
/intake/:conversationId/status
```

## Frontend State Model

Minimum customer intake states:

```text
idle
editing_first_message
submitting
ai_thinking
showing_question
saving_answer
showing_next_step
error
```

Suggested local state fields:

```text
conversation_id
messages
current_question
answer_text
next_step
loading
error
validation_errors
```

## API Binding - Create Conversation

Frontend action:

```text
submit first message
```

Expected behavior:

```text
show saving/loading
POST /api/v1/conversations
receive conversation and brain result
show one next question or next step
```

User-facing error fallback:

```text
Noget gik galt. Prøv igen om lidt.
```

## API Binding - Submit Answer

Later action:

```text
submit answer to current question
```

Expected behavior:

```text
save answer
run next evaluation
show next question or next step
```

## Rendering Brain Result

Frontend should map backend routing to UI states:

```text
continue_conversation -> AIQuestionCard
request_documents -> DocumentRequestCard later
human_review -> HumanReviewCard
guide_away -> GuideAwayCard
onboarding_later -> NextStepCard later
```

## User-Facing Data Rules

Do not show these to customer:

```text
commercial value
internal priority
raw reason codes
internal confidence score
validation internals
stack traces
provider errors
```

Allowed customer-facing content:

```text
question text
short explanation
next step text
loading text
validation text
status text
```

## Staff-Facing Data Rules

CRM may show:

```text
reason codes
confidence band
review priority
missing information
AI summary
route recommendation
fact confidence
status history
```

But staff UI should still label AI output as suggestion, not final decision.

## Styling Handoff

Use the design system in:

```text
UX-005-design-system.md
```

Required for first slice:

```text
page background
card surface
primary button
secondary button
textarea
validation message
loading state
confirmation toast
```

## Mobile Requirements

Use:

```text
UX-006-mobile-first-guidelines.md
```

First slice must pass:

```text
no horizontal scrolling
CTA visible
textarea usable with keyboard open
single question clearly visible
skip action tappable
validation visible
```

## Accessibility Requirements

Use:

```text
UX-008-accessibility-guidelines.md
```

Minimum:

```text
visible labels
keyboard access
visible focus states
readable loading text
field-specific errors
text labels for statuses
```

## Error Handling

Use:

```text
UX-007-loading-empty-error-states.md
```

First slice must support:

```text
empty message
very short message warning
network error
server error
AI unavailable
invalid output fallback
```

## Microcopy Source

All customer-facing copy should start from:

```text
UX-009-microcopy-and-tone-of-voice.md
```

Do not rewrite tone casually during implementation unless copy is reviewed.

## CRM Handoff

When CRM frontend starts, use:

```text
UX-010-caseworker-crm-ux.md
UX-011-human-review-workspace.md
UX-012-notification-and-status-patterns.md
```

Build first:

```text
Lead list
Lead detail header
AI summary panel
Facts panel
Missing information panel
Conversation timeline
Review decision card
```

## Prototype Handoff

Use prototype scenarios from:

```text
UX-013-prototype-flow.md
```

These scenarios should be available as fake/demo data.

## Testing Handoff

Use:

```text
UX-014-usability-test-checklist.md
```

Frontend acceptance should include:

```text
mobile smoke test
keyboard navigation smoke test
loading/error state test
first message submission test
smart question rendering test
guide-away rendering test if available
human review rendering test if available
```

## Do Not Build Yet

Do not build before backend supports it or explicit placeholder scope is agreed:

```text
MitID
real document analysis
signing
real AI provider UI
payment
full onboarding
advanced CRM automation
```

## References

- UX-000-ux-index.md
- UX-002-conversation-flow.md
- UX-003-screen-by-screen-specification.md
- UX-004-component-library.md
- UX-005-design-system.md
- UX-014-usability-test-checklist.md
- docs/ai-case-brain/BRAIN-018-brain-output-model.md
- docs/rulebook/RULEBOOK-150-rule-to-code-mapping.md
