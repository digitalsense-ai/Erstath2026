# Module 4 Blueprint — From AI Screening to an Opened Case

Version: 0.2  
Status: Working blueprint  
Language: English in repository, Danish in user-facing product  
Purpose: Define the complete journey from a positive screening result to an opened case that is ready for human review.

---

## 1. Product goal

Module 4 must not feel like a new system or a long form.

It should feel like the same guided experience continuing naturally:

> “We have understood your story. Now we help you make the case ready.”

The user should only provide the information needed to open the case and allow work to begin.

Documents and non-critical details should be collectable later whenever possible.

---

## 2. Entry conditions

Module 4 starts only when Module 3 has completed an internal screening.

Possible internal outcomes:

### A. Offer help

The case appears relevant enough to continue.

User-facing wording:

> We can see several aspects of your case that make it worth reviewing more closely.

### B. Needs human review before offer

The AI cannot safely decide whether help should be offered.

User-facing wording:

> There are details in your case that we would like a caseworker to look at before we recommend the next step.

### C. Do not offer help

The current information does not support continuing.

User-facing wording:

> Based on the information currently available, we cannot offer to take the case further.

The rejection must be respectful and may include a correction route if important information is missing.

---

## 3. Core design principles

1. The user must not repeat information already given.
2. AI must explain why each new piece of information is needed.
3. Only one task should be presented at a time.
4. The user must see what is complete and what remains.
5. Mandatory information must be clearly separated from information that can come later.
6. Documents must not block case creation unless legally or operationally necessary.
7. The handoff to a human caseworker must feel explicit and reassuring.
8. The user must understand when they become a client and when the case is formally opened.

---

## 4. Minimum information needed to open a case

The case may be opened when the following are complete:

- Full legal name
- Email address
- Telephone number
- Address, if operationally required
- Identity verification status, if required at this stage
- Acceptance of terms
- Consent to process health and case information
- Explicit request for ErstatningsHjælp to continue with the case
- Confirmed summary of the treatment story
- Confirmed understanding that the screening is preliminary

The following should normally be allowed later:

- Medical records
- Images and scans
- Letters and decisions
- Receipts and expense documentation
- Employer information
- Detailed loss calculations
- Additional witnesses or contacts
- Supplementary timeline details

---

# 5. Detailed flow

## M4.0 — Transition from screening

### Purpose

Move the user from “initial screening” to “let us make the case ready” without creating a sales interruption.

### What the user sees

> We can see several aspects of your case that make it worth reviewing more closely.
>
> The next step is to make the case ready for a caseworker. This normally takes about 10 minutes.

Primary action:

> Continue and make my case ready

Secondary action:

> Read my summary again

### What AI does

- Uses the Module 3 screening outcome
- Selects approved user-facing wording
- Avoids scores and percentages
- Explains that the screening is not a final legal or medical conclusion
- Creates an onboarding session

### Data collected

- User decision to continue
- Timestamp
- Screening route used
- Screening outcome

### Required

Yes

### Can be postponed

No

### Human review trigger

If the screening outcome is “needs human review before offer”, do not continue directly to normal case creation.

---

## M4.1 — Confirm the case summary

### Purpose

Ensure that the user agrees with the story that will be used to create the case.

### What the user sees

> Before we create the case, please check that we have understood your story correctly.

Show a plain-language summary containing:

- What happened
- Where it happened
- Approximately when it happened
- What the user experienced afterwards
- What concerns the user most
- What remains uncertain

Actions:

- Yes, this is correct
- It is partly correct
- I want to change something

### What AI does

- Generates a concise summary
- Marks inferred information clearly
- Allows corrections without restarting the flow
- Updates the structured case model

### Data collected

- Confirmed case summary
- Corrections
- Confirmation timestamp

### Required

Yes

### Can be postponed

No

### Human review trigger

If the user makes a major correction that changes the screening outcome, return the case to Module 3 screening.

---

## M4.2 — Contact details

### Purpose

Collect the minimum information needed to contact the user and create a client profile.

### What the user sees

AI introduces one item at a time:

> What is the best email address for updates about your case?

Then:

> What telephone number should we use if we need to contact you?

Then legal name if not already known.

### What AI does

- Pre-fills any information already known
- Asks for confirmation instead of asking again
- Validates email and telephone format
- Explains why contact information is needed

### Data collected

- Full name
- Email
- Telephone
- Preferred contact method
- Optional preferred contact time

### Required

- Name: Yes
- Email: Yes
- Telephone: Yes
- Preferred contact method: Recommended

### Can be postponed

No for core contact data

### Human review trigger

None unless data appears inconsistent or fraudulent.

---

## M4.3 — Address and identity information

### Purpose

Collect identity and address details only when operationally necessary.

### What the user sees

> We need a few identity details so the case can be created correctly and matched with future documents.

Possible fields:

- Address
- Postal code
- City
- Date of birth
- CPR number, only if required and handled securely

### What AI does

- Explains why sensitive information is requested
- Collects only the minimum required information
- Never displays full sensitive identifiers after entry
- Uses masking where possible

### Data collected

- Address
- Date of birth
- Identity identifier if required
- Verification status

### Required

Depends on legal and operational requirements

### Can be postponed

Some fields may be postponed until formal representation or document collection.

### Human review trigger

- Identity mismatch
- Duplicate client profile
- Missing required verification

---

## M4.4 — Consent and terms

### Purpose

Obtain valid permission to process the case and clearly establish the relationship.

### What the user sees

A plain-language explanation before the formal text:

> To work with your case, we need your permission to store and review the information you have shared.

Separate confirmations should be used for:

- Processing personal and health information
- Contacting the user about the case
- Acceptance of terms
- Request for ErstatningsHjælp to proceed

### What AI does

- Explains each consent in plain Danish
- Links to complete legal text
- Records version numbers and timestamps
- Does not pre-select legal consent checkboxes

### Data collected

- Consent status
- Terms version
- Consent version
- Timestamp
- IP/device metadata if legally appropriate

### Required

Yes

### Can be postponed

No for consent required to create and work on the case

### Human review trigger

If the user declines mandatory consent, the case cannot be opened.

---

## M4.5 — Representation / power of attorney

### Purpose

Obtain authority to act on the user's behalf when required.

### What the user sees

> If we are to collect information or communicate on your behalf, we may need a power of attorney.

Possible options:

- Sign now
- Send it to me later
- I want help understanding it

### What AI does

- Determines whether power of attorney is required now or later
- Explains what it allows and what it does not allow
- Tracks signature status

### Data collected

- Power of attorney required: yes/no
- Signature status
- Signed document reference
- Signature timestamp

### Required

Required before actions that depend on representation

### Can be postponed

Yes, if the case can be opened before representation begins

### Human review trigger

- User has limited legal capacity
- Another person is acting for the user
- Guardianship or estate issues

---

## M4.6 — Document availability check

### Purpose

Understand what the user already has without making documents a barrier.

### What the user sees

> Do you already have any documents connected to the case?

Suggested choices:

- Medical records
- Letters from the hospital or doctor
- Scan or test results
- Photos
- Receipts or expense documentation
- A previous decision
- I do not have anything ready

### What AI does

- Adapts the choices to the case type
- Reassures the user that missing documents are normal
- Creates a personalised document checklist
- Avoids asking for documents that are not relevant

### Data collected

- Document types available
- Document types missing
- User preference: upload now / later

### Required

No

### Can be postponed

Yes

### Human review trigger

If the case cannot be assessed without a particular document, mark it as required before substantive review.

---

## M4.7 — Document upload

### Purpose

Allow documents to be added without overwhelming the user.

### What the user sees

> You can upload what you have now. You can also continue without documents and add them later.

For each upload, show:

- File name
- Document type
- Upload status
- Option to remove or replace

### What AI does

- Classifies the document type
- Extracts dates, providers and relevant events
- Suggests updates to the timeline
- Never silently changes confirmed facts
- Flags unreadable or incomplete files

### Data collected

- File reference
- Document type
- Upload timestamp
- AI extraction status
- Review status

### Required

Usually no

### Can be postponed

Yes

### Human review trigger

- Sensitive document type
- Inconsistent identity
- Corrupted or unreadable file
- Document materially contradicts the user's summary

---

## M4.8 — Final case readiness review

### Purpose

Show the user exactly what will happen when the case is opened.

### What the user sees

> Your case is ready to be created.

Summary sections:

- Your confirmed story
- Your contact information
- Consent and terms
- Documents received
- Documents that can be added later
- What happens next

Primary action:

> Create my case

Secondary action:

> Review my information

### What AI does

- Checks all mandatory data
- Shows unresolved issues
- Prevents creation only when a true mandatory requirement is missing
- Creates a final structured case package

### Data collected

- Final confirmation
- Case creation request
- Timestamp

### Required

Yes

### Can be postponed

No

### Human review trigger

If there are unresolved contradictions or risk flags, create the case in “manual triage required” status.

---

## M4.9 — Case creation

### Purpose

Create the formal case and establish the next operational owner.

### System actions

- Generate case ID
- Link user/client profile
- Save confirmed story
- Save screening result
- Save consent records
- Link uploaded documents
- Assign initial status
- Assign queue or caseworker
- Create audit record
- Create document request list

### Recommended case statuses

- `draft_onboarding`
- `awaiting_consent`
- `awaiting_documents`
- `ready_for_triage`
- `manual_triage_required`
- `assigned_to_caseworker`
- `not_offered`

### User-facing confirmation

> Your case has been created.
>
> A caseworker can now review the information. We will contact you if anything important is missing.

### Required

System step

### Human review trigger

Always enters a human-owned queue after creation.

---

## M4.10 — Handoff to the caseworker

### Purpose

Make the transition from AI-guided onboarding to human case handling explicit.

### What the user sees

> The first part is now complete.
>
> From here, a caseworker will review your information and contact you if something needs clarification.

Show:

- Current status
- Expected next step
- Expected response time, only if operationally reliable
- Missing documents
- How to add information later

### What AI does

- Stops making substantive promises
- Remains available for navigation and simple clarification
- Routes legal, medical or complex case questions to a human

### Data collected

- Handoff timestamp
- Assigned queue
- Assigned caseworker when available

---

# 6. Internal decision logic

## Route 1 — Strong enough to offer help

Conditions may include:

- Case type is within scope
- Time limit does not appear expired
- A treatment or healthcare event is identified
- A relevant consequence is described
- No obvious exclusion rule applies
- User wishes to continue

Action:

- Show a positive but careful Module 3 result
- Continue to Module 4

## Route 2 — Uncertain / manual review

Conditions may include:

- Conflicting dates
- Unclear causation
- Missing essential event information
- Possible limitation issue
- Complex representation issue
- Case type outside normal pattern

Action:

- Do not reject automatically
- Create a manual screening task
- Tell the user that a caseworker must look at it before the next recommendation

## Route 3 — Do not offer help

Conditions may include:

- Clearly outside scope
- Clearly expired with no apparent exception
- No treatment event
- No described harm or consequence
- Duplicate or abusive submission

Action:

- Give a respectful explanation
- Avoid legal certainty unless human-approved
- Offer correction if important information may be missing
- Provide neutral information about other possible routes when appropriate

---

# 7. When does the user become a client?

This must be defined clearly in legal and product terms.

Recommended product model:

### Before acceptance

The person is a prospective client using a screening service.

### Client relationship starts when all are true

- ErstatningsHjælp has offered to continue
- The user explicitly accepts
- Mandatory terms are accepted
- Required consent is recorded
- The case is formally created

The interface must not imply that representation has started earlier than this point.

---

# 8. AI versus human responsibilities

## AI may

- Guide the user through the flow
- Reuse known information
- Summarise and structure the story
- Validate simple contact data
- Explain why information is needed
- Classify uploaded documents
- Extract suggested dates and providers
- Identify missing information
- Prepare the case package

## AI must not independently

- Promise compensation
- Make a final legal conclusion
- Approve representation in exceptional cases
- Resolve identity conflicts
- Decide complex time-limit questions
- Dismiss material contradictions
- Sign or accept legal terms for the user

## Human review is mandatory when

- Screening is uncertain
- The case is outside standard patterns
- Identity or authority is unclear
- Documents materially contradict the story
- The user disputes the AI summary
- There are safeguarding or vulnerability concerns
- A final offer or rejection requires professional judgment

---

# 9. Progress model

Recommended user-facing progress:

1. Story shared — complete
2. First screening — complete
3. Confirm your information — current
4. Consent and case creation — next
5. Documents — now or later
6. Caseworker review — upcoming

Do not use a misleading percentage if the remaining workload varies by case.

Use step labels and completion states instead.

---

# 10. Document priority model

## Required before case creation

Normally none, unless a specific case type demands evidence before acceptance.

## Required before substantive case review

Case-dependent examples:

- Relevant medical records
- Previous decision if an appeal is involved
- Proof of authority if acting for another person

## Helpful but optional

- Photos
- Receipts
- Personal notes
- Correspondence
- Employer documentation

## AI-generated document checklist

The checklist should be based on:

- Case type
- Treatment type
- Consequences
- Timeline
- Existing uploads
- Missing evidence

---

# 11. Data model — minimum conceptual entities

## Client

- Client ID
- Name
- Contact information
- Identity status
- Consent status

## Case

- Case ID
- Status
- Screening outcome
- Confirmed summary
- Case category
- Priority
- Assigned queue
- Assigned caseworker

## Conversation

- Messages
- Confirmations
- Corrections
- AI summaries

## Document

- File reference
- Type
- Source
- Upload date
- Extraction result
- Review status

## Consent record

- Consent type
- Version
- Accepted timestamp
- Withdrawn timestamp

## Task

- Missing information
- Document request
- Manual review
- Follow-up call

---

# 12. Success metrics

Track at minimum:

- Module 3 to Module 4 continuation rate
- Time to complete case creation
- Drop-off by step
- Percentage completing without documents
- Percentage returning later with documents
- Correction rate on AI summary
- Consent completion rate
- Manual review rate
- Case creation completion rate
- Percentage of created cases accepted by human triage
- User satisfaction after onboarding

---

# 13. Recommended first prototype

The first Module 4 prototype should include:

1. Positive screening handoff
2. Confirm case summary
3. Contact information
4. Consent explanation
5. Document availability question
6. Optional upload area
7. Final readiness review
8. Case created confirmation

The prototype should simulate the full journey before real backend logic is connected.

---

# 14. Open decisions

The following must be decided before production implementation:

1. Exact point at which the client relationship begins
2. Whether CPR is needed before case creation
3. Whether MitID is required at onboarding or later
4. Exact consent and terms structure
5. Power of attorney timing
6. Which documents are mandatory by case category
7. Whether a human must approve every offer to continue
8. Expected response time shown to users
9. Pricing model and when it is presented
10. How rejected users may submit corrections or additional information

---

# 15. Definition of done

Module 4 is considered complete when:

- A user can continue from an approved screening result
- The user never has to repeat known information
- All mandatory identity and contact data can be collected
- Valid consent can be recorded
- Documents can be uploaded now or later
- The case summary can be confirmed or corrected
- The case can be formally created
- A clear status and human handoff are shown
- All exceptional cases can be routed to manual review
- The user understands what happens next

---

## Product sentence

> ErstatningsHjælp does not send the user into a form after screening. It continues helping until the case is ready for a human caseworker.
