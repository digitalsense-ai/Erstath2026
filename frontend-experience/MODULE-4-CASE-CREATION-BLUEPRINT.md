# Module 4 Blueprint - Case Creation

Version: 0.1
Status: Working blueprint
Purpose: Define the journey from a positive screening result to an opened case.

---

## Core idea

Module 4 is not a form.

It is the part of the journey where we help the user make the case ready.

The user should feel:

> We are not starting over. We are continuing from the story I already told.

---

## Main promise

Recommended wording:

> We have enough information to continue.
> Now we only need the practical details that allow us to create the case and help you further.
> This usually takes around 10 minutes.

Important rules:

- Do not ask the user to retell the story.
- Do not require every document before case creation.
- Make missing documents feel normal.
- Keep the experience guided and calm.

---

## Required before case creation

Needed before a case can be created:

- Confirmed case summary
- Contact details
- Basic identity details if required
- Permission to continue
- Acceptance of terms
- Final confirmation

---

## Can be collected later

These should not block the user unless the business rules require it:

- Journal files
- Images
- Letters
- Receipts
- Extra timeline details
- Additional documents

Product rule:

> A missing document should not stop a motivated user.

---

## Flow overview

1. M4.0 Handoff from screening
2. M4.1 Confirm case summary
3. M4.2 Contact details
4. M4.3 Basic identity details
5. M4.4 Permission and terms
6. M4.5 Documents
7. M4.6 Final confirmation
8. M4.7 Case created
9. M4.8 Caseworker queue

---

## M4.0 - Handoff from screening

Purpose:
Move the user from screening to case creation.

User sees:

> We can see several things in your story that make it relevant to continue.
> The next step is to create the case so it can be reviewed.
> It usually takes around 10 minutes.

Primary action:

> Continue and create my case

Secondary action:

> Read my summary again

---

## M4.1 - Confirm case summary

Purpose:
Let the user approve the story before it becomes part of the case.

User sees:

- What happened
- Where it happened if known
- Approximate timing if known
- What changed afterwards
- Why the case is being created

Actions:

- Yes, this looks right
- I want to correct something
- I want to add something

Data:

- summary confirmed
- corrections
- additions

Required before case creation: yes.

---

## M4.2 - Contact details

Purpose:
Collect the minimum details needed to contact the user.

User sees:

> We need to know how to contact you if we have questions.

Data:

- name
- email
- phone

Required before case creation: yes.

Rule:
Do not ask again if the user already provided it.

---

## M4.3 - Basic identity details

Purpose:
Collect only the identity details required to create and handle the case.

User sees:

> To create the case correctly, we may need a few basic details. We only ask for what is necessary.

Data depends on final business rules.

Required before case creation: to be decided.

Rule:
Ask for sensitive details as late as possible and explain why they are needed.

---

## M4.4 - Permission and terms

Purpose:
Make sure the user clearly agrees that ErstatningsHjaelp may work with the case.

User sees:

> To help you further, we need your permission to use the information you have shared and contact you about the case.

Actions:

- I agree and want to continue
- I want to read the terms first
- I do not want to continue

Required before case creation: yes.

---

## M4.5 - Documents

Purpose:
Let the user add documents without blocking case creation unnecessarily.

User sees:

> If you have documents ready, you can add them now. If not, you can still continue and add them later.

Document categories:

- Journal
- Letters
- Images
- Test results
- Receipts
- Other documents

Actions:

- Upload documents now
- I do not have documents ready
- I will add them later

Required before case creation: no, unless business rules require it.

---

## M4.6 - Final confirmation

Purpose:
Let the user confirm that the case can be created.

User sees a checklist:

Ready:

- Story confirmed
- Contact details added
- Permission accepted

Can be added later:

- Journal
- Images
- Extra documents

Primary action:

> Create my case

Required before case creation: yes.

---

## M4.7 - Case created

Purpose:
Confirm that the user has successfully created a case.

User sees:

> Your case has been created.
> We will now review the information you have shared.

Show:

- Case number
- What happens next
- Expected response time if known
- Link to upload more documents
- Link to case status

---

## M4.8 - Internal queue

Purpose:
Move the created case into an internal review queue.

Internal statuses may include:

- new case
- needs documents
- ready for review
- requires manual screening

User sees only a simple status:

> Your case is ready for review.

or

> We still need a few documents before full review.

---

## Decline path

If the screening does not support continuing, the user should still be treated respectfully.

Example wording:

> Based on the information you have shared, we cannot currently see enough basis for us to take the case further.
> This is not a legal decision. If important information is missing, you may add more details or documents.

Actions:

- Add more information
- Save my summary
- Read general guidance

Rule:
Do not make rejection feel like a dead end.

---

## Internal recommendation wording

Internal labels should not be shown directly.

Strong case:

> We can see several things in your story that make us recommend continuing to the next step.

Medium case:

> There are elements in your story that make it relevant to review the case more closely.

Needs more information:

> We need a little more information before we can say whether it makes sense to continue.

Decline:

> Based on the current information, we cannot see enough basis for us to take the case further right now.

---

## Recommended first design direction

Working title:

> Let us make your case ready

Danish direction:

> Lad os gøre din sag klar

Recommended structure:

- Conversational intro
- Checklist progress
- Small field cards
- Optional document upload
- Final confirmation

---

## Open questions

1. Exactly when is a person considered a customer?
2. Which identity details are required before case creation?
3. Is MitID needed in the first version?
4. Can the case be created before documents are uploaded?
5. What permission text is legally required?
6. What terms must be accepted?
7. What documents are required before human review?
8. What is the expected response time after case creation?
9. Should a person manually approve every AI recommendation?
10. What happens if the user stops halfway through Module 4?

---

## Product decision rule

Before adding a step to Module 4, ask:

> Is this required to create the case, or can it be collected later?

If it can be collected later, do not block the user.
