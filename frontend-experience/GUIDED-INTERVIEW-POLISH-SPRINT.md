# Guided AI Interview - Polish Sprint

Version: 0.1  
Status: Working checklist  
Purpose: Improve the Guided AI Interview prototype so it feels calmer, warmer and more trustworthy.

---

## Goal

The goal is not to add more features.

The goal is to make the experience feel like a calm digital caseworker who reads, understands and helps the user move forward without stress.

Success criteria:

> The user should feel: "It has understood me, and I know what happens next."

---

## 1. Color polish

### Current direction

Use a restrained palette:

- Deep blue: AI, primary actions, trust
- Soft green: positive confirmation, progress, gentle success states
- Warm off-white: cards and chat bubbles
- Light grey-green: page background and secondary surfaces
- No strong warning yellow in the first experience

### Checklist

- [ ] Reduce visual noise from too many colors
- [ ] Use deep blue for AI and primary actions
- [ ] Use green only for confirmation and progress
- [ ] Replace yellow info boxes with soft blue/green information boxes
- [ ] Keep user message bubble strong but not aggressive
- [ ] Make the right summary panel calmer than the chat panel
- [ ] Ensure contrast is still WCAG-friendly
- [ ] Test colors on mobile and desktop

---

## 2. Wording polish

### Tone target

The AI should sound like a calm experienced caseworker.

It should not sound like:

- A chatbot
- A legal form
- A medical expert making conclusions
- A sales assistant

### Preferred wording examples

Instead of:

> Guided AI Interview

Consider:

> Vi hjælper dig igennem det trin for trin

Instead of:

> Din sag indtil nu

Use:

> Sådan forstår jeg dit forløb

Instead of:

> Jeg spørger om tidspunktet, fordi...

Use:

> Det næste, der hjælper mig mest, er at vide cirka hvornår det skete.

Instead of:

> Tanke: Brugeren har bekræftet...

Use:

> Jeg samler det, du har bekræftet, før jeg spørger videre.

### Checklist

- [ ] Replace technical headings with human headings
- [ ] Avoid English labels in the user-facing prototype
- [ ] Use "forløb" before "sag" in early experience
- [ ] Use "jeg" carefully so the AI feels human but not fake
- [ ] Avoid heavy legal terms early
- [ ] Make every question explain why it is being asked
- [ ] Keep AI thinking text short and reassuring
- [ ] Avoid showing internal reasoning as technical "thoughts"

---

## 3. Chat polish

### Principles

The chat should feel familiar, but not like a generic chatbot.

- AI messages on the left
- User messages on the right
- AI thinking state before important answers
- Typewriter only for meaningful AI moments
- The answer area should always be visible
- Chat should scroll internally

### Checklist

- [ ] Keep answer buttons visible without page scroll
- [ ] Internal scroll only in chat on desktop
- [ ] Internal scroll in right summary if needed
- [ ] Make AI loader feel calm and not gimmicky
- [ ] Keep typewriter effect subtle
- [ ] Ensure reduced motion can be supported later
- [ ] Make chat bubbles readable on mobile
- [ ] Keep maximum bubble width comfortable

---

## 4. Summary panel polish

### New direction

The right panel should not feel like a database status box.

It should feel like:

> A living explanation of how the system currently understands the user's story.

Preferred title:

> Sådan forstår jeg dit forløb

Preferred structure:

- Det, jeg har forstået
- Det, jeg stadig mangler
- Næste skridt
- Reassurance that everything can be corrected

### Checklist

- [ ] Rename "Din sag indtil nu"
- [ ] Use plain Danish, not field names
- [ ] Reduce checkbox/data feeling
- [ ] Make missing items feel normal, not errors
- [ ] Add short reassurance: "Du kan rette det senere"
- [ ] Keep it readable with short paragraphs
- [ ] Animate future updates gently
- [ ] Avoid legal assessment language in the summary

---

## 5. Trust polish

### Trust moments to add

- AI shows it read the first message
- AI confirms before asking more
- AI explains why it asks
- AI says uncertainty is okay
- AI never promises compensation
- AI separates understanding from assessment

### Checklist

- [ ] Add "Det behøver ikke være præcist" where relevant
- [ ] Add "Det er okay, hvis du ikke ved det"
- [ ] Avoid words like "afgørelse" too early
- [ ] Keep initial assessment careful
- [ ] Add visible correction route
- [ ] Make "Skriv selv" available where choices may not fit

---

## 6. Accessibility polish

### Checklist

- [ ] Large readable text
- [ ] Strong focus states on buttons
- [ ] Do not rely on color only
- [ ] Avoid long paragraphs
- [ ] Support keyboard navigation
- [ ] Mobile layout remains clear
- [ ] No essential information only in animation
- [ ] Respect reduced-motion preference later

---

## 7. Immediate prototype improvements

Priority order:

1. Improve user-facing wording
2. Rename the right panel
3. Replace technical AI thought wording
4. Keep the viewport-fixed layout
5. Soften remaining colors
6. Make the right panel feel more like a story
7. Add interactive flow when JS can be safely added

---

## 8. Decision rule

Before every polish change, ask:

> Does this make the user feel more understood, calmer or more in control?

If not, do not add it.
