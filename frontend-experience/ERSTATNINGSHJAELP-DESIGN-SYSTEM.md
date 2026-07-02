# ErstatningsHjælp Design System

Version: 0.1  
Status: Working principles  
Purpose: This document defines the product behaviour, UX principles, AI conversation rules, trust principles and case-building principles for ErstatningsHjælp.

---

## 1. Product philosophy

ErstatningsHjælp is not a form.

ErstatningsHjælp is a digital case intake experience that helps a person tell their story, feel understood and move toward a clearer next step.

The product must feel like a calm, experienced caseworker who listens first, understands before asking, and only asks for help when something is missing.

### Core idea

> The user should not build the case alone.  
> AI should build the case from the user's story and ask only when it needs help.

### Emotional target

When the user leaves the first experience, they should think:

> "That was actually reassuring. It felt like the system understood me."

Not:

> "That was a smart AI."

---

## 2. Golden rules

### Rule 1: The user must never work harder than the AI

Traditional forms make the user do all the work:

- Find the right category
- Remember dates
- Know what matters
- Fill out fields
- Explain the case in legal terms

ErstatningsHjælp must reverse this.

The user should primarily:

- Tell in their own words
- Confirm
- Choose
- Correct
- Add missing details

The AI should:

- Read
- Understand
- Structure
- Infer cautiously
- Suggest likely answers
- Ask only for missing information

### Rule 2: AI must always show that it has learned something

The experience must never feel like a static questionnaire.

Bad:

> Next question.

Good:

> Thank you. Now I understand that the treatment was an operation, and that the main concern is what happened afterwards. I still need to understand approximately when it happened.

### Rule 3: AI must never ask a question it already knows the answer to

If the user writes:

> I was treated at Aarhus University Hospital.

AI must not ask:

> Which hospital was it?

It should say:

> I can see that the treatment was at Aarhus University Hospital. Is that correct?

Options:

- Yes, that is correct
- No, I want to correct it
- I am not sure

### Rule 4: AI must explain why it asks

AI must never ask an isolated question without a short reason.

Bad:

> When did it happen?

Good:

> I would like to understand approximately when it happened, because timing can matter for whether the case can still be assessed.

### Rule 5: Click before write

Whenever possible, the user should be able to continue by clicking.

A free-text answer should always remain available, but the product should reduce the amount of writing needed.

### Rule 6: AI must prove that it listened before it asks more

After the user's first message, AI should not immediately ask a new question.

It should first say:

> Let me check if I understood you correctly.

Then show a short summary:

- You had treatment / examination / surgery
- Something happened afterwards
- You are unsure whether it should be investigated

Then ask:

> Is that correctly understood?

Options:

- Yes, that is correct
- Partly
- No, I want to correct something

### Rule 7: AI should impress the user at least once

The experience should contain at least one moment where the user feels:

> It actually read what I wrote.

Example:

User writes:

> I had a blood clot after the operation.

AI responds:

> I notice that you mention both an operation and a blood clot. The order of those events may be important, so I would like to understand what happened first.

---

## 3. UX principles

### 3.1 One thing at a time

The user must never face a large form or a long list of unrelated questions.

The interface should focus on one task:

- Tell what happened
- Confirm understanding
- Choose a missing detail
- Correct a detail
- Review the case summary

### 3.2 Start with the concern, not the legal issue

The first real question should not be legal or administrative.

Bad:

> Describe the incident.

Better:

> What worries you most right now?

The user may not know whether this is a complaint, compensation case, treatment injury or something else. The system should not require that knowledge.

### 3.3 The page should feel calm

No overloaded UI.

Avoid:

- Too many boxes
- Too many steps
- Technical labels
- Legal terminology too early
- Visible complexity
- Aggressive progress indicators

Use:

- Large readable text
- Few choices
- Calm spacing
- Clear next step
- Soft reassurance
- Plain Danish

### 3.4 The user should feel continuity from landing page

Text written on the landing page must be carried into the dialogue.

The user should feel:

> We continue from where I started.

Not:

> I have to start over.

### 3.5 No dead ends

Every user answer must have a safe next step.

Examples:

- "I do not remember" is valid
- "I am not sure" is valid
- "None of these fit" is valid
- "I want to write it myself" is valid

---

## 4. AI conversation principles

### 4.1 AI tone

AI should sound like a calm and experienced caseworker.

It should be:

- Calm
- Respectful
- Clear
- Human
- Precise
- Non-judgmental
- Reassuring without overpromising

It should not sound like:

- A chatbot
- A lawyer
- A government form
- A sales assistant
- A medical expert making conclusions

### 4.2 Words AI should use often

- "Lad mig se, om jeg har forstået dig rigtigt"
- "Det behøver ikke være præcist endnu"
- "Du kan svare cirka"
- "Jeg spørger, fordi..."
- "Det er helt okay, hvis du ikke ved det"
- "Jeg har nu forstået..."
- "Jeg mangler stadig at forstå..."

### 4.3 Words AI should avoid early

Avoid these in the first experience unless necessary:

- Erstatningsberettiget
- Ansvarsgrundlag
- Forældelse
- Journalmateriale
- Bevisbyrde
- Patientskadeerstatning as a heavy legal term
- Afgørelse
- Krav

Use softer alternatives:

- "om sagen bør undersøges nærmere"
- "om der kan være grundlag"
- "første vurdering"
- "næste skridt"

### 4.4 AI must separate understanding from assessment

AI must not assess too early.

First:

> I want to understand what happened.

Later:

> Now I can make an initial assessment of whether this should be investigated further.

### 4.5 AI must be transparent about uncertainty

If AI infers something, it must present it as an assumption.

Example:

> I may be misunderstanding this, but it sounds like the pain started after the operation. Is that correct?

---

## 5. Guided AI Interview model

The main product experience should be a Guided AI Interview.

It is not:

- A static form
- A classic chatbot
- A wizard
- A FAQ flow

It is:

- A guided conversation
- With AI-generated answer choices
- Where the user can click through most of the experience
- While AI builds a structured case in the background

### 5.1 Interaction pattern

1. User tells something in free text
2. AI summarizes what it understood
3. User confirms or corrects
4. AI asks one missing thing
5. AI offers likely answer choices
6. User clicks or writes
7. AI updates its understanding
8. Repeat until enough information is collected
9. AI presents a structured case summary
10. User approves or corrects
11. AI provides initial next step / assessment

---

## 6. Answer choice principles

### 6.1 Suggested answers should reduce friction

The user should not need to write when a click is enough.

Example question:

> What worries you most?

Possible options:

- I got worse after treatment
- The diagnosis may have been delayed
- Something happened during surgery
- I had side effects from medication
- I do not know what went wrong
- Something else

### 6.2 Suggested answers should be adaptive

Options should depend on what the user already said.

If user writes:

> I had hip surgery.

AI may suggest:

- Pain after surgery
- Infection
- Nerve injury
- Difference in leg length
- Reduced mobility
- Something else

If user writes:

> My cancer was discovered late.

AI may suggest:

- Delayed diagnosis
- Wrong test result
- Missing referral
- Symptoms not taken seriously
- Something else

If user writes:

> Something happened during childbirth.

AI may suggest:

- Injury to the child
- Injury to the mother
- Delayed caesarean section
- Lack of monitoring
- Something else

### 6.3 Always include escape options

Every set of choices should include one or more of:

- None of these fit
- I am not sure
- I want to write it myself
- I do not remember

### 6.4 Do not show too many options

Default maximum: 2-4 primary options plus escape options.

Too many choices makes the experience feel like a form.

### 6.5 Choices should feel like help, not limitation

The user must never feel forced into a category.

Use wording like:

> Does one of these fit?

Not:

> Choose the correct category.

---

## 7. Case-building principles

### 7.1 AI builds a hidden structured case

While the user talks, AI should map the story into a structured model.

Core fields:

- User concern
- Treatment type
- Treatment place
- Approximate time
- Event / suspected issue
- Symptoms or consequences
- Timeline
- Current uncertainty
- Missing information
- Potential next step

### 7.2 The structured case should be shown back to the user

The system must not silently collect data.

At key moments, it should say:

> This is how I currently understand your case.

Then show:

- What AI understands
- What AI is unsure about
- What AI still needs

### 7.3 Corrections are part of the flow

Corrections should not feel like errors.

Use:

- "Ret det her"
- "Det er delvist rigtigt"
- "Jeg vil forklare det anderledes"

Avoid:

- "Forkert"
- "Error"
- "Invalid"

### 7.4 AI must not over-structure too early

In the first phase, AI should let the user tell their story naturally.

Structure comes after listening.

---

## 8. Trust principles

### 8.1 Be honest about what this is

Early experience:

> This is not a final decision. It is an initial help to understand whether the case should be investigated further.

### 8.2 Do not promise compensation

Avoid:

- "You have a case"
- "You can get compensation"
- "We can win this"

Use:

- "There may be something that should be investigated"
- "This may be relevant to look at more closely"
- "The next step could be..."

### 8.3 Explain sensitive questions

If asking about health consequences, treatment place, dates or documents, explain why.

### 8.4 Give control to the user

The user should always be able to:

- Stop
- Go back
- Correct
- Skip uncertain details
- Choose "I do not know"

---

## 9. Accessibility principles

### 9.1 Plain Danish

Use clear, everyday Danish.

Avoid professional jargon unless it is explained.

### 9.2 Readability

Design for people who may be stressed, older, dyslexic or emotionally affected.

Use:

- Large font sizes
- Short paragraphs
- Clear buttons
- High contrast
- Strong focus states
- No dense walls of text

### 9.3 Cognitive load

Reduce the number of simultaneous decisions.

One question.  
Few options.  
Clear next step.

### 9.4 Do not rely only on color

Status should not only be shown with green/yellow/red.

Use labels and text.

---

## 10. Screen-level behaviour

### 10.1 Landing page

Purpose:

> Make the user dare to start.

The landing page should:

- Explain the service simply
- Create trust
- Let the user write a first story
- Not require legal knowledge
- Not require documents

CTA:

> Start min vurdering

When clicked:

- Save the user's first text
- Move into dialogue
- Continue the same story

### 10.2 First dialogue screen

Purpose:

> Prove that AI listened.

Should show:

- The user's first text
- AI's short understanding
- A confirmation question

Primary action:

- Yes, that is correct
- Partly
- I want to correct something

### 10.3 Follow-up question screen

Purpose:

> Collect one missing detail with minimal effort.

Should show:

- Why AI asks
- One question
- 2-4 likely answers
- Escape option
- Free-text option

### 10.4 Understanding screen

Purpose:

> Show progress through understanding, not completion percentage.

Should show:

- I understand...
- I am unsure about...
- I still need...

### 10.5 Case summary screen

Purpose:

> Let the user approve the case before assessment.

Should show:

- Plain-language summary
- Timeline if possible
- Key facts
- Missing details
- Correction options

### 10.6 Initial assessment screen

Purpose:

> Give a clear next step without overpromising.

Should show:

- What seems relevant
- What may need more review
- What information is missing
- Suggested next step
- Whether human review may be relevant

---

## 11. Example dialogue pattern

User writes:

> I was operated on my shoulder, but afterwards I could hardly lift my arm.

AI:

> Thank you. Let me check if I understood you correctly.
>
> You were operated on your shoulder. After the operation, you had significant trouble lifting your arm. You are unsure whether this is a normal consequence or whether something may have gone wrong.
>
> Is that correctly understood?

Options:

- Yes, that is correct
- Partly
- No, I want to correct something

If yes:

AI:

> I would like to understand approximately when this happened, because timing can matter for whether the case can still be assessed. You do not need the exact date.

Options:

- This year
- 1-3 years ago
- 3-10 years ago
- More than 10 years ago
- I do not remember

After answer:

AI:

> Thank you. Now I understand the treatment and the approximate timing. I still need to understand the consequences you experienced afterwards.

---

## 12. What the product must never become

ErstatningsHjælp must not become:

- A long form with nicer styling
- A chatbot that asks generic questions
- A legal questionnaire disguised as AI
- A system that makes the user feel tested
- A system that overpromises compensation
- A system that asks for documents before trust is established

---

## 13. Product signature

The signature experience should be:

1. The user tells their story
2. AI shows that it understood
3. The user confirms or corrects
4. AI asks only what is missing
5. The user can click through most answers
6. AI builds the case visibly
7. The user approves the final understanding
8. AI gives a careful initial next step

In one sentence:

> ErstatningsHjælp builds the case by understanding the user's story, not by forcing the user through a form.

---

## 14. Implementation notes for prototypes

### Current prototype direction

The current Vercel prototype should move away from static flow pages and toward a simulated Guided AI Interview.

The prototype should support:

- Carrying first text from landing page into dialogue
- AI summary screen
- Confirmation choices
- Adaptive answer choices
- Visible understanding state
- Free-text fallback
- Case summary screen

### Suggested next prototype

Build one full simulated flow:

1. Landing page text input
2. AI understanding confirmation
3. Approximate timing question with choices
4. Treatment place question with choices
5. Consequence question with adaptive choices
6. AI understanding update
7. Case summary approval
8. Initial next step

The flow may be fake/simulated at first. The purpose is to test the feeling before implementing real AI logic.

---

## 15. Decision checklist

Before adding a new feature or screen, ask:

1. Does this make the user work less?
2. Does AI show that it understood something?
3. Does the user know why the question is being asked?
4. Can the user click instead of write?
5. Can the user say "I do not know"?
6. Is this plain Danish?
7. Does this build trust without overpromising?
8. Does this help create a stronger case?
9. Is this calmer than a traditional form?
10. Would a stressed user understand what to do next?

If the answer is no, redesign it.
