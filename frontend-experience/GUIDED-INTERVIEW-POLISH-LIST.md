# Guided AI Interview - Polish List

Status: Working checklist  
Prototype: `/public/frontend-experience/guided-interview-prototype.html`  
Purpose: This document collects product, UX, wording, color, animation, trust and accessibility improvements for the Guided AI Interview experience.

---

## 1. Product feeling

Goal: The experience should feel calm, human and reassuring.

The user should feel:

> I am being understood, not processed.

The interface should feel more like a guided conversation than a form, chatbot or legal intake system.

---

## 2. Current prototype strengths

1. The two-column layout works well on desktop.
2. AI messages on the left and user messages on the right feel familiar.
3. The fixed answer area makes the flow easier to use.
4. The internal chat scroll makes the product feel more app-like.
5. The right-side summary gives the feeling that the case is being built.
6. The thinking/typing states create more trust than instant answers.
7. The concept is now strong enough to focus on polish instead of basic structure.

---

## 3. Color polish

### 3.1 Reduce visual noise

Current direction should remain calm:

- Deep blue for AI and primary actions
- Soft green for positive understanding and confirmation
- Light blue/green for explanation boxes
- White for main content
- Warm off-white/grey for the background

Avoid too many strong colors at the same time.

### 3.2 Yellow warning tone

Avoid yellow unless the user actually needs attention or warning.

The reason box should feel helpful, not like a warning.

Preferred tone:

- Soft blue-green
- Low contrast background
- Dark readable text

### 3.3 User bubble color

Current user bubble uses the same deep blue as primary actions.

Possible improvement:

- Keep user bubble blue for clarity
- Or test a slightly softer green tone for user answers
- Make sure it still feels readable and familiar

Decision pending.

### 3.4 AI avatar

The AI avatar should feel calm and official, not playful.

Possible options:

- Keep `EH`
- Use small logo icon later
- Avoid emoji in the avatar

---

## 4. Wording polish

### 4.1 Page title

Current:

> Guided AI Interview

Potential alternatives:

1. Din første vurdering
2. Lad os forstå dit forløb
3. Vi gennemgår dit forløb sammen
4. Fortæl lidt mere om dit forløb
5. Samtale om dit forløb

Preferred direction:

> Lad os forstå dit forløb

Reason: More human, less technical.

### 4.2 Top status

Current:

> Sagen bygges live

Potential alternatives:

1. Forløbet samles løbende
2. Din historie samles løbende
3. Jeg samler oplysningerne undervejs
4. Du kan rette alt senere

Preferred direction:

> Din historie samles løbende

### 4.3 Right panel title

Current:

> Din sag indtil nu

Potential alternatives:

1. Sådan forstår jeg dit forløb
2. Det jeg har forstået indtil nu
3. Min foreløbige forståelse
4. Din historie indtil nu
5. Overblik over dit forløb

Preferred direction:

> Sådan forstår jeg dit forløb

Reason: Warmer and less legal than `Din sag`.

### 4.4 Right panel intro

Current:

> Her kan brugeren se, hvad systemet har fanget. Det er ikke en afgørelse, og alt kan rettes senere.

Improved:

> Her samler jeg det, jeg har forstået. Det er ikke en vurdering endnu, og du kan altid rette oplysningerne.

### 4.5 First AI thinking text

Current:

> Jeg læser lige det, du skrev...

Keep this. It is simple and human.

Potential alternatives:

- Jeg læser din besked...
- Jeg tager lige et øjeblik til at forstå det...
- Jeg samler lige det vigtigste...

Preferred:

> Jeg læser lige det, du skrev...

### 4.6 Thinking subtext

Current:

> Jeg prøver at finde det vigtigste i din første besked.

Improved:

> Jeg prøver at forstå, hvad der fylder mest for dig.

Reason: More human and less mechanical.

### 4.7 Confirmation headline

Current:

> Lad mig se, om jeg har forstået dig rigtigt.

Improved:

> Jeg har læst det, du skrev.

Then:

> Lad mig se, om jeg har forstået det rigtigt.

### 4.8 Confirmation question

Current:

> Er det korrekt forstået?

Potential alternatives:

- Passer det nogenlunde?
- Er det rigtigt forstået?
- Har jeg forstået det nogenlunde rigtigt?

Preferred:

> Har jeg forstået det nogenlunde rigtigt?

Reason: Softer and less absolute.

### 4.9 User confirmation option

Current:

> Ja, det er korrekt

Improved:

> Ja, det passer

Reason: More natural Danish.

### 4.10 Next question wording

Current:

> Der er én ting, jeg gerne vil forstå bedre nu: cirka hvornår det skete.

Improved:

> Det næste, der vil hjælpe mig mest, er at vide cirka hvornår det skete.

Reason: More helpful and less formal.

---

## 5. Right panel content polish

The right panel should not feel like a database or checklist.

Preferred structure:

```text
Sådan forstår jeg dit forløb

Behandlingen
Du fortæller, at der var et behandlingsforløb.

Det der bekymrer dig
Problemerne opstod bagefter, og du er i tvivl om forløbet bør undersøges.

Det jeg mangler at forstå
- Cirka hvornår det skete
- Hvor forløbet foregik
- Hvad følgerne blev
```

### 5.1 Replace data-like labels

Current:

- Det jeg har forstået
- Det jeg mangler
- Næste spørgsmål

Potential improved labels:

- Min forståelse
- Det jeg mangler at forstå
- Det næste jeg spørger om

### 5.2 Use story sections instead of only checkmarks

Checkmarks are useful, but the panel should read like a short story.

Use a mix of:

- Small headings
- Short sentences
- Few checkmarks

### 5.3 Add edit affordance later

Later prototype should include:

- `Ret` link on each understood section
- `Ikke rigtigt` option
- `Tilføj noget` option

---

## 6. Animation polish

### 6.1 Thinking state

The thinking state should be visible long enough to feel real, but not slow.

Target:

- 600-1200 ms for normal answers
- 1200-1800 ms for summary/assessment moments

### 6.2 Typewriter speed

Current typewriter may be slightly slow for long text.

Target:

- Fast enough not to irritate
- Slow enough to feel intentional

### 6.3 Thought visibility

The small thought should appear briefly and then fade.

Important:

- It should not look like hidden chain-of-thought
- It should be a user-facing reassurance line
- It should be written as a simple status

Better label than `Tanke:`:

- `Jeg samler lige:`
- `Kort status:`
- No label at all

Preferred:

> Jeg samler lige det vigtigste, før jeg spørger videre.

### 6.4 Right panel update animation

When the user answers, the right panel should gently update.

Potential animation:

- New fact fades in
- Checkmark appears
- Small `Tilføjet` label for 1 second

Avoid:

- Flashy movement
- Confetti
- Game-like effects

---

## 7. Layout polish

### 7.1 Viewport fit

Desktop should not require full-page scroll.

Required behaviour:

- Body locked to viewport height
- Chat messages scroll internally
- Answer buttons fixed at bottom of chat panel
- Right panel scrolls internally if needed

This has been started and should be preserved.

### 7.2 Header height

Header should stay compact.

Too much top space reduces room for the chat.

Potential change:

- Replace large title with smaller product context
- Keep only essential status text

### 7.3 Chat bubble width

Current max width works, but should be tested.

Potential:

- AI: max 74-78%
- User: max 62-70%

User answers are often short, so they should not become too wide.

### 7.4 Answer buttons

Buttons should be easy to scan.

Potential improvements:

- Primary answer first
- Fewer choices at once
- Escape option visually less dominant
- `Skriv selv` always last

### 7.5 Mobile

On mobile, the right panel cannot stay beside the chat.

Potential mobile pattern:

- Chat first
- Collapsible summary drawer
- Sticky bottom answer choices
- `Se hvad jeg har forstået` button

---

## 8. Trust polish

### 8.1 No legal overpromising

Avoid:

- `Du har en sag`
- `Du kan få erstatning`
- `Det lyder som en fejl`

Use:

- `Det kan være relevant at undersøge nærmere`
- `Det er for tidligt at vurdere endnu`
- `Først vil jeg gerne forstå forløbet`

### 8.2 Repeat correction safety

The user should frequently see:

> Du kan altid rette oplysningerne senere.

But do not overuse it.

Suggested locations:

- Right panel footer
- Case summary screen
- Before first assessment

### 8.3 Explain questions softly

Reason box should not feel like a form help text.

Current:

> Jeg spørger om tidspunktet, fordi det kan have betydning for, hvordan sagen bør vurderes senere.

Potential:

> Det næste, der hjælper mig, er tidspunktet. Det behøver ikke være præcist.

### 8.4 Avoid system language

Avoid words like:

- Systemet
- Data
- Input
- Felter
- Klassificering

Use:

- Jeg
- Forløb
- Oplysninger
- Det jeg har forstået
- Det jeg mangler

---

## 9. Accessibility polish

### 9.1 Button targets

All answer buttons should be large enough for touch.

Minimum target:

- 44 px height
- clear spacing

### 9.2 Keyboard navigation

Future interactive version must support:

- Tab through answer buttons
- Enter/Space to choose
- Visible focus style

### 9.3 Reduced motion

Add support for `prefers-reduced-motion`.

If reduced motion is enabled:

- Disable typewriter animation
- Disable pulsing dots
- Show messages instantly

### 9.4 Screen reader wording

Loader should not constantly announce.

Potential:

- Use `aria-live="polite"` later
- Do not create noisy updates

---

## 10. Interaction polish

### 10.1 Full interactive flow

Next prototype should make answer buttons work.

When user clicks:

1. User bubble appears on the right
2. AI thinking state appears on the left
3. Right panel updates softly
4. AI next message types in
5. New answer choices appear

### 10.2 Avoid instant panel update before AI responds

Better sequence:

1. User answers
2. AI says it is updating
3. Panel updates
4. AI explains what changed

This feels more trustworthy.

### 10.3 Allow correction

Every major AI summary should include:

- `Ja, det passer`
- `Delvist`
- `Jeg vil rette noget`

---

## 11. Specific wording replacements for current prototype

### Replace page subtitle

Current:

> En rolig dialog, hvor systemet viser hvad det forstår undervejs.

Suggested:

> Vi gennemgår dit forløb trin for trin. Du kan rette alt undervejs.

### Replace status badge

Current:

> Sagen bygges live

Suggested:

> Din historie samles løbende

### Replace first thinking subtext

Current:

> Jeg prøver at finde det vigtigste i din første besked.

Suggested:

> Jeg prøver at forstå, hvad der fylder mest for dig.

### Replace confirmation heading

Current:

> Lad mig se, om jeg har forstået dig rigtigt.

Suggested:

> Jeg har læst det, du skrev.

Follow-up sentence:

> Lad mig se, om jeg har forstået det rigtigt.

### Replace confirmation question

Current:

> Er det korrekt forstået?

Suggested:

> Har jeg forstået det nogenlunde rigtigt?

### Replace thought label

Current:

> Tanke: Brugeren har bekræftet bekymringen. Nu giver tidspunktet mening at spørge om.

Suggested:

> Jeg samler lige det vigtigste, før jeg spørger videre.

### Replace right panel title

Current:

> Din sag indtil nu

Suggested:

> Sådan forstår jeg dit forløb

### Replace right panel intro

Current:

> Her kan brugeren se, hvad systemet har fanget. Det er ikke en afgørelse, og alt kan rettes senere.

Suggested:

> Her samler jeg det, jeg har forstået. Det er ikke en vurdering endnu, og du kan altid rette oplysningerne.

---

## 12. Priority list

### Priority 1

1. Update wording in current prototype.
2. Replace `Din sag indtil nu` with `Sådan forstår jeg dit forløb`.
3. Replace yellow reason box with calmer blue-green tone. Done in first color pass.
4. Keep viewport-fit layout.
5. Remove technical-sounding `Tanke:` wording.

### Priority 2

6. Make answer buttons interactive.
7. Add real chat scroll behaviour with automatic scroll to latest message.
8. Update right panel dynamically.
9. Add small panel update animation.
10. Add correction option.

### Priority 3

11. Create mobile-specific summary drawer.
12. Add reduced-motion support.
13. Add keyboard focus states.
14. Create final case summary screen.
15. Create initial assessment screen.

---

## 13. Definition of done for the next prototype iteration

The next version should feel complete enough that a test user can:

1. Read the first message.
2. Confirm the AI's understanding.
3. Click through at least three questions.
4. See the right panel update.
5. Feel that the AI is guiding the process.
6. Understand that this is not a final assessment.
7. Know that they can correct the information later.

---

## 14. Design principle to keep visible

> The experience should not prove that the AI is smart.  
> It should prove that the user has been understood.
