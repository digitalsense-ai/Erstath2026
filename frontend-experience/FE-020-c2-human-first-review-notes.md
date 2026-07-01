# FE-020 - C2 Human First Review Notes

Version: 1.0
Status: Active Draft

## Direction

C2 is no longer only called Trusted Conversation.

The working direction is:

```text
C2 - Human First
```

## User Feedback Captured

### 1. Logo

The final logo exists in another conversation and should be reused.

Decision:

- Do not invent a new logo in this prototype.
- Keep the current EH placeholder until the real logo is added.

### 2. Reassurance Bar

Feedback:

- It may work better below the typing/input box.
- The previous phrases felt weak and not human enough.

Decision:

Move reassurance below the input area and rewrite the phrases to speak more directly to the user.

New direction:

- You can start with what you remember.
- You do not need to know the rules.
- It is okay to be unsure.
- We take one step at a time.

### 3. AI Welcome Block

Feedback:

- It is unclear whether the AI welcome block should be there.

Decision:

Remove the large AI welcome block from the first viewport in C2.

Reason:

- It was competing with the input field.
- The page should not feel like a chatbot before the user has started.
- AI can become visible after the first user action.

### 4. Input Field

Feedback:

- The field needs living example text.

Decision:

Keep rotating example text inside the input area.

Purpose:

- Help the user recognize possible starting points.
- Reduce fear of writing the wrong thing.
- Make the first action easier.

### 5. Trust Card

Feedback:

- Text should be reviewed carefully.

Decision:

Rewrite the trust card to be more human and less system-like.

Tone:

- calm
- plain Danish
- no legal jargon
- no overpromising

## Design Principle

Every text on the intro page must do at least one of these things:

- remove a worry
- make the user feel allowed to start
- explain what happens next
- reduce pressure

If it does none of those, it should be removed or moved down.

## Current Prototype

Updated file:

- `public/frontend-experience/concept-c2-trusted-conversation.html`

Latest direction:

- C2 - Human First
