/**
 * TOEFL Listening Practice Library — Listen to an Announcement, batch 3
 * (PROMPT 49). Difficulty 3: five announcements with embedded conditions,
 * exceptions and follow-up actions — the kind whose small print carries
 * the marks.
 *
 * All scripts are original TalkSy practice material.
 */

import { TOEFL_LISTENING_BANK_SOURCE_NOTE, type ToeflListeningExercise } from "./types";

export const ann3Exercises: ToeflListeningExercise[] = [
  {
    slug: "toefl-lb-ann-11", title: "The grant with strings", taskType: "announcement",
    scene: "research office briefing", difficulty: 3, estimatedMinutes: 5,
    intro: "You will hear an announcement about a funding scheme. Answer the questions about its conditions.",
    speakers: [{ id: "ro", name: "Officer", role: "research office staff announcing a scheme", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "ro", text: "The bridging fund reopens next week. Up to four thousand for twelve months of salary while you resubmit a failed grant — with conditions worth hearing before you cheer." },
      { id: "s2", speakerId: "ro", text: "First, it funds resubmission, not new ideas: the project must be the one the referees rejected, with their criticisms answered in writing." },
      { id: "s3", speakerId: "ro", text: "Second, the money follows the person, not the post: if you move institution, the remainder travels with you and the new employer administers it." },
      { id: "s4", speakerId: "ro", text: "Third — and this is where applications fail — the twelve months start on the award date, not your first working day. Two applicants this year lost a quarter of the funding to that clause." },
      { id: "s5", speakerId: "ro", text: "Finally, one page on what the year buys: the scheme wants to see the revision plan, the two referees' names, and a date for resubmission. Applications close in six weeks." },
    ],
    transcriptNote: "Four conditions, one of which (the clock) is the standard killer. The fund follows the person, which surprises most listeners.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "What does the fund pay for?",
        options: ["Any new project", "Salary while resubmitting a failed grant — the same project, with referees' criticisms answered", "Equipment", "Conference travel"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["funds resubmission, not new ideas"], explanation: "The scheme is deliberately conservative: same project, answered referees. The item checks the restriction that defines it. Answer anchored in the recording: \u201cfunds resubmission, not new ideas\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 2, stem: "What happens to the money if the holder moves institution?",
        options: ["It is cancelled", "It follows the person — the remainder travels and the new employer administers it", "It stays with the old employer", "Half is repaid"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the money follows the person, not the post"], explanation: "The grant is portable to the person. The item checks the rule that runs against most listeners' assumption. The audible clue is \u201cthe money follows the person, not the post\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 3, stem: "From when do the twelve months run?",
        options: ["The first working day", "The award date — applicants have lost a quarter of the funding to this clause", "The resubmission date", "Whenever the holder chooses"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the twelve months start on the award date, not your first wo"], explanation: "The clock starts at award. The item checks the clause flagged as where applications fail. Listen for \u201cthe twelve months start on the award date, not your first wo\u201d — that phrase in the script settles the item." },
      },
      {
        no: 4, stem: "What must the one-page attachment contain?",
        options: ["A budget", "The revision plan, the two referees' names, and a resubmission date", "A CV", "Letters of support"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the revision plan, the two referees' names, and a date for r"], explanation: "The page asks for plan, referees, date. The item checks the three-part list as given. Answer anchored in the recording: \u201cthe revision plan, the two referees' names, and a date for r\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 5, stem: "When do applications close?",
        options: ["Next week", "In six weeks", "At the end of the year", "Rolling"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["applications close in six weeks"], explanation: "Six weeks from the announcement. The item checks the deadline that closes the announcement. The audible clue is \u201capplications close in six weeks\u201d: catch it and the keyed answer follows." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-ann-12", title: "The evacuation that is a drill", taskType: "announcement",
    scene: "laboratory block, tannoy", difficulty: 3, estimatedMinutes: 5,
    intro: "You will hear an announcement about building works and fire procedures. Answer the questions about what applies.",
    speakers: [{ id: "fa", name: "Facilities manager", role: "facilities staff on the tannoy", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "fa", text: "Two things at once, so listen carefully. From Monday, the east stairwell is closed for four weeks, and the west stairwell becomes the only fire route from floors two and three." },
      { id: "s2", speakerId: "fa", text: "During those weeks, the assembly point moves to the car park, because the usual lawn is where the crane will be standing." },
      { id: "s3", speakerId: "fa", text: "If the alarm sounds in those weeks, treat it as real even though a drill is scheduled — you will not be told which it is until you are outside." },
      { id: "s4", speakerId: "fa", text: "Labs on floor two with experiments that cannot be left: the shutdown protocol applies, thirty seconds maximum, then out by the west stairwell. Nothing is worth the extra minute." },
      { id: "s5", speakerId: "fa", text: "The drill itself happens one morning in week two; the date is not announced, so the honest position is that any alarm could be either." },
    ],
    transcriptNote: "The announcement's core rule is deliberate ambiguity: treat every alarm as real. The assembly point and the stairwell both move for the same four weeks.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "Which stairwell serves floors two and three during the works?",
        options: ["The east", "The west — the east is closed for four weeks", "Both, alternating", "Neither"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the east stairwell is closed for four weeks"], explanation: "West only, east closed. The item checks the substitution that all other instructions depend on. Listen for \u201cthe east stairwell is closed for four weeks\u201d — that phrase in the script settles the item." },
      },
      {
        no: 2, stem: "Why does the assembly point move to the car park?",
        options: ["It is closer", "The usual lawn will be under the crane", "The car park is bigger", "Insurance"],
        correct: 1,
        meta: { skills: ["speaker-intention"], keywords: ["the usual lawn is where the crane will be standing"], explanation: "The crane takes the lawn. The item checks the stated cause of the relocation. Answer anchored in the recording: \u201cthe usual lawn is where the crane will be standing\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 3, stem: "What are listeners told to do if the alarm sounds during the four weeks?",
        options: ["Assume it is the drill", "Treat it as real — you will not be told which it is until outside", "Phone reception", "Wait for a second signal"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["treat it as real even though a drill is scheduled"], explanation: "The policy is enforced ambiguity. The item checks the rule, which is the announcement's centre. The audible clue is \u201ctreat it as real even though a drill is scheduled\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 4, stem: "What may floor-two labs do before leaving?",
        options: ["Nothing at all", "Run the shutdown protocol, thirty seconds maximum, then out by the west stairwell", "Finish the current step", "Collect samples"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the shutdown protocol applies, thirty seconds maximum"], explanation: "Thirty seconds of shutdown, then west stairwell. The item checks the allowance and its cap together. Listen for \u201cthe shutdown protocol applies, thirty seconds maximum\u201d — that phrase in the script settles the item." },
      },
      {
        no: 5, stem: "When is the drill, and is the date published?",
        options: ["Week two, date unannounced — any alarm could be either", "Week one, published", "Week four, published", "It was cancelled"],
        correct: 0,
        meta: { skills: ["details"], keywords: ["the drill itself happens one morning in week two; the date i"], explanation: "One morning in week two, unannounced. The item checks the timing and the concealment, which complete the ambiguity rule. Answer anchored in the recording: \u201cthe drill itself happens one morning in week two; the date i\u201d — hear that phrase and the item resolves." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-ann-13", title: "The pay rise that depends on the form", taskType: "announcement",
    scene: "staff noticeboard, read aloud", difficulty: 3, estimatedMinutes: 5,
    intro: "You will hear an announcement about a pay review. Answer the questions about what is required.",
    speakers: [{ id: "hr", name: "HR partner", role: "HR staff explaining a review process", accent: "british" }],
    segments: [
      { id: "s1", speakerId: "hr", text: "The annual review runs differently this year, and the difference is a form your manager fills in about you, with you in the room." },
      { id: "s2", speakerId: "hr", text: "Evidence boxes: three, and the instruction is specifics — 'delivered the migration' scores, 'worked hard' does not." },
      { id: "s3", speakerId: "hr", text: "You may attach anything the manager has not seen — emails, release notes, the rescued schedule. If it is not in the boxes, it did not happen, as far as the panel is concerned." },
      { id: "s4", speakerId: "hr", text: "The panel meets in week six and sees the forms blind: your name is stripped, so the reading is of the evidence, not the person." },
      { id: "s5", speakerId: "hr", text: "One caution from last year: the average form had one specific and two adjectives, and those are the forms that came back with a standard rise and a polite paragraph." },
    ],
    transcriptNote: "The process is evidence-driven and blind. The instruction distinguishes specifics from adjectives, and last year's failure mode is named.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "How does this year's review differ?",
        options: ["It is shorter", "A form is completed by the manager with the employee present, and evidence boxes carry the weight", "There is no panel", "It is by seniority"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["a form your manager fills in about you, with you in the room"], explanation: "Presence plus evidence boxes is the change. The item checks the mechanism, which everything else follows from. The audible clue is \u201ca form your manager fills in about you, with you in the room\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 2, stem: "What kind of content scores, according to the announcement?",
        options: ["Adjectives", "Specifics — 'delivered the migration' scores, 'worked hard' does not", "Length", "Seniority of the referee"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["specifics — 'delivered the migration' scores, 'worked hard' "], explanation: "The contrast is specifics against adjectives. The item checks the criterion with its worked example. Listen for \u201cspecifics — 'delivered the migration' scores, 'worked hard' \u201d — that phrase in the script settles the item." },
      },
      {
        no: 3, stem: "What may employees attach to the form?",
        options: ["Nothing", "Anything the manager has not seen — emails, release notes, the rescued schedule", "Only signed letters", "References from clients only"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["anything the manager has not seen — emails, release notes"], explanation: "Unseen evidence may be attached. The item checks the allowance and its examples. Answer anchored in the recording: \u201canything the manager has not seen — emails, release notes\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 4, stem: "In what sense does the panel read the forms blind?",
        options: ["In dim lighting", "Names are stripped, so the reading is of evidence, not person", "They close their eyes", "They are external"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["your name is stripped, so the reading is of the evidence, no"], explanation: "Blind means anonymised. The item checks the specific meaning of the term in this process. The audible clue is \u201cyour name is stripped, so the reading is of the evidence, no\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 5, stem: "What happened to last year's average form?",
        options: ["It failed", "It returned a standard rise and a polite paragraph", "It was re-read", "It won an appeal"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["those are the forms that came back with a standard rise and "], explanation: "The failure mode is the standard rise plus polite paragraph. The item checks the consequence cited as the caution. Listen for \u201cthose are the forms that came back with a standard rise and \u201d — that phrase in the script settles the item." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-ann-14", title: "The archive closure that opens access", taskType: "announcement",
    scene: "records office, front desk", difficulty: 3, estimatedMinutes: 5,
    intro: "You will hear an announcement about a collection's change of status. Answer the questions about what now applies.",
    speakers: [{ id: "ar", name: "Archivist", role: "county archivist announcing a change", accent: "australian" }],
    segments: [
      { id: "s1", speakerId: "ar", text: "From the first of the month, the parish registers move to the new reading room, and here is the part that sounds bad and is good." },
      { id: "s2", speakerId: "ar", text: "The original volumes will no longer be issued to readers. They go into climate storage, and the scans replace them at every desk." },
      { id: "s3", speakerId: "ar", text: "The scans are of the whole page, margins and all — the marginal notes researchers actually travel for are now searchable by keyword." },
      { id: "s4", speakerId: "ar", text: "Anyone who needs the physical volume for evidence the scan cannot carry — ink, watermark, repair — applies to the curator with a stated reason, and the volume comes to the desk within a day." },
      { id: "s5", speakerId: "ar", text: "Booking changes: the reading room now takes same-day walk-ins, because the scans removed the bottleneck that made booking necessary." },
    ],
    transcriptNote: "A closure of physical access is paired with an expansion of computational access. The curator route stays open for material evidence.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "What happens to the original volumes?",
        options: ["They are issued as before", "They go into climate storage and scans replace them at every desk", "They are displayed", "They are sold"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["no longer be issued to readers"], explanation: "Storage for originals, scans for readers. The item checks the swap the announcement describes as bad-sounding and good. Answer anchored in the recording: \u201cno longer be issued to readers\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 2, stem: "What do the scans include that earlier copies did not?",
        options: ["Only the text", "The whole page, margins and all — marginal notes searchable by keyword", "Colour plates", "Translations"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the whole page, margins and all"], explanation: "Whole-page scanning with searchable margins. The item checks the feature that converts researchers to the new system. The audible clue is \u201cthe whole page, margins and all\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 3, stem: "How can a reader still consult a physical volume?",
        options: ["By booking a week ahead", "Apply to the curator with a stated reason; the volume reaches the desk within a day", "It is impossible now", "By writing to the council"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["applies to the curator with a stated reason"], explanation: "The curator route stays open for material evidence. The item checks the exception and its speed. Listen for \u201capplies to the curator with a stated reason\u201d — that phrase in the script settles the item." },
      },
      {
        no: 4, stem: "What evidence qualifies as a reason, in the announcement's wording?",
        options: ["Any preference", "Evidence the scan cannot carry — ink, watermark, repair", "Reading speed", "Handwriting style only"],
        correct: 1,
        meta: { skills: ["vocabulary"], keywords: ["evidence the scan cannot carry — ink, watermark, repair"], explanation: "The test is material evidence beyond the scan. The item checks the qualifying reasons as listed. Answer anchored in the recording: \u201cevidence the scan cannot carry — ink, watermark, repair\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 5, stem: "Why does the reading room now accept walk-ins?",
        options: ["Staff numbers rose", "The scans removed the booking bottleneck", "The room doubled in size", "Booking was unpopular"],
        correct: 1,
        meta: { skills: ["speaker-intention"], keywords: ["the scans removed the bottleneck that made booking necessary"], explanation: "The cause is the removal of the physical bottleneck. The item checks the reasoning behind the procedural change. The audible clue is \u201cthe scans removed the bottleneck that made booking necessary\u201d: catch it and the keyed answer follows." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-ann-15", title: "The insurance that needs declaring", taskType: "announcement",
    scene: "sports club AGM, read aloud", difficulty: 3, estimatedMinutes: 5,
    intro: "You will hear an announcement about club insurance. Answer the questions about what members must do.",
    speakers: [{ id: "cl", name: "Club secretary", role: "club secretary addressing members", accent: "british" }],
    segments: [
      { id: "s1", speakerId: "cl", text: "The club's insurance renews next month, and the insurer has added a clause that changes what you owe me." },
      { id: "s2", speakerId: "cl", text: "Every member now declares existing injuries on the joining form — not diagnosed conditions, which the insurer covers separately, but injuries you know about." },
      { id: "s3", speakerId: "cl", text: "Undeclared injuries are the gap the insurer found in last year's claims: two of the three refusals were members who had not mentioned a knee." },
      { id: "s4", speakerId: "cl", text: "The form has one line for it, and my advice is to overuse the line — the clause only bites on what is not declared, never on what is." },
      { id: "s5", speakerId: "cl", text: "Current members: you do not fill the joining form again; reply to the email with the same one line by the fourteenth, or your cover lapses to the basic tier automatically." },
    ],
    transcriptNote: "The clause bites only on omission; declaring is always safe. Current members reply by email by the fourteenth or drop to basic tier.",
    targetSkill: "comprehension",
    questions: [
      {
        no: 1, stem: "What must members now declare?",
        options: ["Diagnosed conditions only", "Existing injuries they know about — diagnosed conditions are covered separately", "Everything medical since birth", "Nothing"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["declares existing injuries"], explanation: "Injuries yes, conditions separately. The item checks the boundary the clause draws. Listen for \u201cdeclares existing injuries\u201d — that phrase in the script settles the item." },
      },
      {
        no: 2, stem: "What did last year's refusals have in common?",
        options: ["Late forms", "Undeclared injuries — two of three refusals involved unmentioned knees", "Wrong tier", "Expired membership"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["two of the three refusals were members who had not mentioned"], explanation: "Omission caused the refusals. The item checks the claim pattern the insurer found. Answer anchored in the recording: \u201ctwo of the three refusals were members who had not mentioned\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 3, stem: "When does the clause bite?",
        options: ["Always", "Only on what is not declared — never on what is", "On weekends", "After the first claim"],
        correct: 1,
        meta: { skills: ["comprehension"], keywords: ["the clause only bites on what is not declared, never on what is"], explanation: "The asymmetry is the advice's basis. The item checks the direction of the risk, which is why overuse of the line is safe." },
      },
      {
        no: 4, stem: "What must current members do, by when?",
        options: ["Rejoin the club", "Reply to the email with the one line by the fourteenth, or lapse to basic tier automatically", "Visit a doctor", "Pay a fee"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["reply to the email with the same one line by the fourteenth"], explanation: "Email reply by the fourteenth; silence has a stated consequence. The item checks the action, deadline and default together. The audible clue is \u201creply to the email with the same one line by the fourteenth\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 5, stem: "What does the secretary recommend about the one line?",
        options: ["Use it sparingly", "Overuse it — declaring is always safe, omission never is", "Leave it blank if unsure", "Ask a friend"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["my advice is to overuse the line"], explanation: "Overuse is advised because the risk is one-sided. The item checks the recommendation and its rationale. Listen for \u201cmy advice is to overuse the line\u201d — that phrase in the script settles the item." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
];
