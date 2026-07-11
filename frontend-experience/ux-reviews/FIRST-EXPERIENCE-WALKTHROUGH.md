# First Experience Walkthrough

Version: 0.1  
Status: Active UX review  
Scope: Landing page → AI conversation → Screening → Case creation

---

## 1. Review objective

The purpose of this walkthrough is to evaluate the complete first-time user experience as one continuous journey.

The product should not feel like a collection of separate pages. It should feel like one guided experience where the user:

1. Understands the value quickly
2. Feels safe enough to start
3. Feels understood during the AI conversation
4. Receives a clear and careful screening result
5. Is helped all the way until the case is ready for a human caseworker

Primary product promise:

> You tell your story once. We help with the rest.

---

## 2. Core review questions

At every step, ask:

1. Does the user understand what is happening?
2. Does the user understand why we are asking?
3. Is the user doing work the AI could do instead?
4. Is the next action obvious?
5. Does the experience create trust without overpromising?
6. Does the flow feel like one continuous conversation?
7. Is anything repeated unnecessarily?
8. Can the user pause and continue later?

---

# 3. Module 1 — Landing page

## User goal

Understand within a few seconds whether ErstatningsHjælp may be relevant and whether it feels safe to continue.

## Desired user thought

> This seems relevant to me, and I can start without committing to anything.

## Review points

### First five seconds

- Is it immediately clear what ErstatningsHjælp does?
- Is the main value understandable without scrolling?
- Does the page avoid legal or technical language?
- Is the primary CTA visible and specific?

### Hero message

The hero should explain:

- What the service helps with
- That the user can begin by telling their story
- That the first screening is preliminary
- That no complete document package is required to start

### Primary CTA

Recommended direction:

> Start min vurdering

The CTA should not imply that the user has already created a case or entered a client relationship.

### Trust

The user should quickly understand:

- Who is behind the service
- How personal and health information is treated
- That AI supports the process but does not make the final legal decision
- That a human caseworker becomes involved when appropriate

### Friction risks

- Too much text before the CTA
- Claims that sound like compensation promises
- Unclear pricing or business model
- A generic “Contact us” CTA
- Asking for sensitive information before the user understands the service

## Initial UX observations

- The landing page should carry the user's first story input into the AI conversation.
- The user should never be asked to paste the same story again.
- The visual language must match the conversation experience.

---

# 4. Module 2 — AI conversation

## User goal

Explain what happened without needing legal or medical expertise.

## Desired user thought

> They understand what I am trying to explain.

## Review points

### Opening

The AI should:

- Acknowledge the user's first story
- Briefly show what it understood
- Ask one useful question at a time
- Explain why the question matters when it is not obvious

### Conversation behaviour

The AI must:

- Reuse known information
- Offer clickable options when possible
- Allow free text when needed
- Avoid interrogation-like questioning
- Avoid asking for exact details too early
- Distinguish facts from assumptions

### Understanding proof

Before asking the next question, the AI should sometimes show:

> Sådan forstår jeg det indtil nu…

This reduces uncertainty and gives the user an easy correction path.

### Tone

The assistant should be:

- Calm
- Clear
- Respectful
- Human without pretending to be human
- Helpful without sounding overly enthusiastic about a serious situation

### Friction risks

- Too many questions in one message
- Long AI explanations
- Repeating the same question in a new form
- Asking the user to classify their own case legally
- Showing internal scores or technical reasoning
- Moving to screening before the story is sufficiently understood

## Initial UX observations

- AI messages should remain on the left and user messages on the right.
- The living summary should remain visible on desktop.
- AI “thinking” states should be short and reassuring, not technical.

---

# 5. Module 3 — Screening result

## User goal

Understand whether there is something worth continuing with and what the next step is.

## Desired user thought

> There is something here. Let us get it ready so someone can review it.

## Review points

### Positive result

The result should be more useful than:

> Your case may be relevant.

Recommended direction:

> We can see several aspects of your case that make it worth reviewing more closely.

The result should explain why, using plain language and only facts supported by the conversation.

### Important balance

The page may create hope and momentum, but must not promise:

- Compensation
- Case acceptance
- A strong legal position
- A specific outcome

### Explanation structure

The result should show:

- What supports continuing
- What remains uncertain
- What will happen next
- How long the next practical step usually takes

### CTA

Recommended direction:

> Lad os få sagen i mål

or

> Fortsæt og gør sagen klar

Avoid:

- Become a client
- Submit claim
- Buy now

### Alternative routes

The system also needs:

- Needs more information
- Human review before offer
- Respectful decline

Each route should preserve dignity and provide a correction path when important information may be missing.

## Initial UX observations

- Current Module 3 versions are strong foundations.
- The best final version may combine the warmth of variant B, transparency of D and momentum of E.
- The transition must feel like a continuation of the AI conversation.

---

# 6. Module 4 — AI-assisted case creation

## User goal

Provide the minimum practical information needed to create the case without feeling sent into a long form.

## Desired user thought

> I have already done the difficult part. They are helping me finish the rest.

## Review points

### Continuity

The AI assistant should remain present throughout the flow.

Useful transition:

> Du har allerede gjort den svære del. Nu hjælper jeg dig med resten.

### Information order

Recommended sequence:

1. Confirm the case understanding
2. Collect contact information
3. Ask whether documents are available
4. Allow local file selection
5. Obtain consent and accept terms
6. Upload and analyse documents only after consent
7. Show what AI found
8. Confirm case creation and human handoff

### Consent rule

The user may select files locally before consent, but the system must not upload, store or analyse them before the required consent is given.

### AI assistance

After consent and upload, AI may show:

- Document type found
- Treatment date found
- Hospital or department found
- Suggested timeline event
- Missing or unreadable pages

Every extracted fact must be correctable by the user or reviewable by a caseworker.

### Completion

The final screen should clearly show:

- The case has been created
- Current status
- What happens next
- How to add documents later
- That a human caseworker now owns the next substantive step

### Friction risks

- Showing eight rigid form steps rather than one assisted journey
- Asking for documents before explaining why
- Processing documents without consent
- Pre-selected legal consent checkboxes
- Requiring every document before case creation
- Suggesting the case has been accepted before human review

## Initial UX observations

- The current AI-assisted prototype is the correct direction.
- Consent is now placed late enough to reduce friction, but before document processing.
- The right-side progress model is useful, but the user-facing step labels should remain simple.

---

# 7. Cross-module continuity review

The complete journey should preserve:

## Same story

The user's original description must follow the journey from landing page into the AI conversation and later into the confirmed case summary.

## Same assistant voice

The assistant should use the same tone, terminology and explanation style throughout.

## Same visual identity

The interface should not feel like it changes product between modules.

## Same promise

> You tell your story once. We help with the rest.

## Clear legal boundaries

The interface must always distinguish between:

- Preliminary AI screening
- Request for assistance
- Formal case creation
- Human acceptance or review
- Final legal or medical conclusions

---

# 8. Priority findings

## P0 — Must be correct before real testing

1. No document upload or AI analysis before valid consent
2. No compensation promise
3. No repeated story entry
4. Clear correction path for AI summaries
5. Clear point where the case is formally created
6. Clear point where a human takes over

## P1 — High-value UX improvements

1. Combine the strongest Module 3 wording into one preferred version
2. Make Module 4 feel even less like separate steps
3. Add realistic AI document-reading feedback
4. Explain why sensitive information is requested
5. Add save-and-resume reassurance

## P2 — Later optimisation

1. CTA experiments
2. Typing animation timing
3. Progress presentation
4. Alternative wording tests
5. Mobile spacing and visual polish

---

# 9. Recommended next actions

1. Create and maintain the UX log
2. Select one preferred Module 3 direction
3. Connect the selected Module 3 page directly to Module 4
4. Create one full end-to-end prototype entry point
5. Run the walkthrough as three user types:
   - Confident user with documents
   - Uncertain user without documents
   - Vulnerable user with an unclear timeline
6. Record every issue in the UX log before changing the prototype

---

# 10. Definition of done for this review sprint

The first-experience review is complete when:

- The entire journey can be completed from one entry point
- The user never repeats their story
- Every transition is understandable
- Consent and document processing occur in the correct order
- The user receives a careful but motivating screening result
- The case creation flow feels assisted rather than administrative
- The final handoff to a human caseworker is clear
- All discovered issues are recorded and prioritised in the UX log
