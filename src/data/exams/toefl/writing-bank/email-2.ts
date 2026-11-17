/**
 * TOEFL Writing Practice Library — Write an Email, batch 2 (PROMPT 50).
 * Tasks toefl-wb-email-21…40: original campus scenarios, one email each,
 * matched to a real recipient across the six purposes (enquiry, request,
 * explanation, scheduling, problem, suggestion).
 *
 * All scenarios and model responses are original TalkSy practice material.
 */

import { TOEFL_WRITING_BANK_SOURCE_NOTE, type ToeflEmailTask } from "./types";

export const email2Tasks: ToeflEmailTask[] = [
  {
    taskType: "write-email",
    slug: "toefl-wb-email-21",
    title: "Explaining a delay with income documents",
    purpose: "explanation",
    recipient: "financial aid office",
    scenario:
      "Your scholarship renewal requires your parents' income documents by the fifteenth of June. Your father's employer is undergoing an annual audit, and its accounts office has told him that no salary letters can be issued until it finishes, expected around the fifth of July. You have the completed tax forms ready, but the missing employer letter leaves the file incomplete. You will email the financial aid office to explain the delay and ask whether your renewal can be processed provisionally meanwhile.",
    keyPoints: [
      "Explain why the employer letter will arrive after the deadline.",
      "Give the expected date the letter will be available.",
      "Mention that the tax forms are already complete.",
      "Ask whether the renewal can proceed provisionally.",
    ],
    wordBand: { min: 45, max: 105 },
    difficulty: 2,
    estimatedMinutes: 10,
    instructions:
      "Write one email to the financial aid office explaining the delay with your renewal documents, giving the expected date and covering every key point politely.",
    taskRequirements: [
      "Identify your scholarship renewal and its deadline.",
      "Explain the audit as the cause of the delay.",
      "State the expected date the letter arrives.",
      "Ask about provisional processing of the rest.",
    ],
    timeGuidance: "Ten minutes: three listing the document facts, five writing, two checking dates.",
    modelResponse:
      "Dear Financial Aid Office,\n\nI am writing about my scholarship renewal, which needs my parents' income documents by the fifteenth of June. The tax forms are complete and ready to submit, but my father's employer is in the middle of an annual audit and cannot issue salary letters until around the fifth of July.\n\nWould it be possible to process the renewal provisionally, and to add the employer letter when it arrives? I can send the audit notice from the accounts office as proof of the delay.\n\nThank you for your help.\n\nKind regards,\nPriyanka Shah\nBusiness Studies, Year 2",
    responseAnalysis:
      "The model separates what is ready from what is missing, which is exactly what an aid officer needs to decide. The cause of the delay is external and documented, the expected date is specific, and the provisional-processing request is framed as a question the office can answer with a rule.",
    usefulExpressions: [
      "I am writing about my scholarship renewal…",
      "Would it be possible to process the renewal provisionally…",
      "when it arrives",
      "Thank you for your help.",
    ],
    grammarObservations: [
      "Cannot with a time phrase until July ties the delay to a fixed cause.",
      "Parallel infinitives to process and to add keep the two-part request balanced.",
    ],
    commonMistakes: [
      "Promising documents with no date, which leaves the file in limbo.",
      "Blaming the employer at length instead of stating the facts.",
    ],
    independentAssignment:
      "Write the email you would send on the fifth of July confirming the employer letter has now been attached.",
    vocabulary: [
      { word: "renewal", partOfSpeech: "noun", definition: "the process of extending a scholarship for another year" },
      { word: "audit", partOfSpeech: "noun", definition: "an official examination of an organisation's accounts" },
      { word: "provisionally", partOfSpeech: "adverb", definition: "temporarily, until the final conditions are met" },
      { word: "documents", partOfSpeech: "noun", definition: "official papers that prove facts" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-22",
    title: "Booking a mock interview before the real one",
    purpose: "scheduling",
    recipient: "career services",
    scenario:
      "You have a graduate-job interview at a logistics company on the twentieth, and you would like a practice session first. The career services centre runs thirty-minute mock interviews with feedback. Your lecture timetable leaves you free on Tuesday afternoons from two and on Thursdays except between three and four, when you have a laboratory class. You would like the earliest slot before the eighteenth, and you wonder whether to bring anything with you.",
    keyPoints: [
      "Request a mock-interview appointment before the eighteenth.",
      "Give your free times on Tuesdays and Thursdays.",
      "Mention the real interview date as the reason.",
      "Ask what you should bring or send in advance.",
    ],
    wordBand: { min: 45, max: 105 },
    difficulty: 2,
    estimatedMinutes: 10,
    instructions:
      "Write one email to the career services centre requesting a mock interview, proposing your available times politely and covering every key point.",
    taskRequirements: [
      "State what you are booking and why.",
      "Give two clear windows of availability.",
      "Name the date of the real interview.",
      "Ask one question about preparation materials.",
    ],
    timeGuidance: "Ten minutes: two checking your diary, six writing, two checking.",
    modelResponse:
      "Dear Career Services,\n\nI would like to book a thirty-minute mock interview, if any slots remain before the eighteenth. I have a graduate-job interview at a logistics company on the twentieth and want to practise first.\n\nI am free on Tuesday afternoons from two o'clock and on Thursdays apart from three to four, when I have a laboratory class. The earlier the session, the better.\n\nShould I bring anything with me, such as the job description or my application form?\n\nThank you for your help.\n\nKind regards,\nDaniel Osei\nLogistics Management, Year 3",
    responseAnalysis:
      "The model gives the deadline before the availability, so whoever books the slot understands why the earliest session matters. The free times are stated as exact windows rather than vague preferences, and the single question about materials shows the writer intends to prepare properly.",
    usefulExpressions: [
      "I would like to book a thirty-minute mock interview…",
      "I am free on Tuesday afternoons from two o'clock…",
      "The earlier the session, the better.",
      "Should I bring anything with me…?",
    ],
    grammarObservations: [
      "The double comparative the earlier the better ties benefit directly to timing.",
      "Apart from excludes one block from an otherwise free day precisely.",
    ],
    commonMistakes: [
      "Requesting a session with no dates, which guarantees a second email.",
      "Forgetting to mention the real interview, so the session is planned blind.",
    ],
    independentAssignment:
      "Write a follow-up email confirming your booked slot and asking for the feedback criteria in advance.",
    vocabulary: [
      { word: "mock", partOfSpeech: "adjective", definition: "imitating the real thing for practice" },
      { word: "slots", partOfSpeech: "noun", definition: "available appointment times" },
      { word: "feedback", partOfSpeech: "noun", definition: "comments on performance to guide improvement" },
      { word: "practise", partOfSpeech: "verb", definition: "to rehearse an activity before performing it" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-23",
    title: "Reporting the late evening shuttle",
    purpose: "problem",
    recipient: "transport office",
    scenario:
      "You attend an evening laboratory session that ends at half past nine, and the 9:40 shuttle from the science park to the main campus has arrived between twenty and thirty minutes late every night for two weeks. The last connection to your residence leaves the campus at 10:15, so you have missed it four times and twice walked home in forty minutes along an unlit road. Four other students from your laboratory share the problem. You will email the transport office with the pattern and ask what can be done.",
    keyPoints: [
      "Describe the two-week pattern of late arrivals.",
      "Explain the missed 10:15 connection and the walk home.",
      "Mention that other students are affected.",
      "Ask what is causing the delay and whether the timetable can change.",
    ],
    wordBand: { min: 50, max: 120 },
    difficulty: 3,
    estimatedMinutes: 11,
    instructions:
      "Write one email to the transport office reporting the pattern of late shuttle arrivals, explaining the consequences for students and covering every key point.",
    taskRequirements: [
      "Give the route, the departure time and the dates.",
      "Quantify the lateness and the missed connections.",
      "Mention the unlit road as a safety concern.",
      "Ask two clear questions about the cause and the fix.",
    ],
    timeGuidance: "Eleven minutes: three assembling the dates, six writing, two checking figures.",
    modelResponse:
      "Dear Transport Office,\n\nI am writing about the 9:40 shuttle from the science park, which has arrived at the main campus between twenty and thirty minutes late every night for the past two weeks. Because the last connection to the residences leaves at 10:15, my laboratory group and I have missed it four times, and twice I have walked home in forty minutes along an unlit road, which feels unsafe.\n\nFour other students from the same evening laboratory can confirm the pattern. Could you tell us what is causing the delay, and whether the timetable can be adjusted or a notice posted while it is fixed?\n\nThank you for looking into this.\n\nKind regards,\nKofi Asante\nChemistry, Year 3",
    responseAnalysis:
      "The model turns personal annoyance into a service report: the pattern is quantified over two weeks, the consequences are named twice over, and the safety point about the unlit road gives the office a reason to act beyond convenience. Two focused questions close it.",
    usefulExpressions: [
      "I am writing about the… shuttle, which has arrived…",
      "which feels unsafe",
      "can confirm the pattern",
      "Thank you for looking into this.",
    ],
    grammarObservations: [
      "Present perfect has arrived sums up a repeated pattern up to now.",
      "Passive can be adjusted and be posted suggests fixes without assigning blame.",
    ],
    commonMistakes: [
      "Reporting one bad night, which reads as an isolated grumble.",
      "Exaggerating the danger instead of describing it factually.",
    ],
    independentAssignment:
      "Write a follow-up email to the transport office reporting whether the shuttle times improved after their reply.",
    vocabulary: [
      { word: "connection", partOfSpeech: "noun", definition: "a later service that an earlier one is timed to meet" },
      { word: "pattern", partOfSpeech: "noun", definition: "something that repeats in a regular way" },
      { word: "unlit", partOfSpeech: "adjective", definition: "having no lighting at all" },
      { word: "adjusted", partOfSpeech: "verb", definition: "changed slightly to fit a new situation" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-24",
    title: "Suggesting a note-splitting plan",
    purpose: "suggestion",
    recipient: "classmate",
    scenario:
      "You and your classmate Marta both found the anatomy midterm harder than expected, and the final examination is in five weeks. The course covers ten body systems, and making full summaries alone would take each of you most of the remaining time. You have thought of a plan: Marta summarises the first five systems and you the last five, then you meet to talk each other through your halves. You will email her to propose the split and suggest a shared online document.",
    keyPoints: [
      "Propose splitting the ten systems between you.",
      "Suggest meeting to explain your halves to each other.",
      "Mention the shared online document you have set up.",
      "Ask Marta which half she would prefer.",
    ],
    wordBand: { min: 45, max: 105 },
    difficulty: 2,
    estimatedMinutes: 10,
    instructions:
      "Write one email to your classmate Marta suggesting the note-splitting plan for the anatomy final, explaining the benefit and covering every key point.",
    taskRequirements: [
      "Open in a friendly way that fits a classmate.",
      "State the split clearly with numbers.",
      "Explain how the explanations will work.",
      "Give her first choice of which half to take.",
    ],
    timeGuidance: "Ten minutes: two planning the split, six writing, two checking tone.",
    modelResponse:
      "Hi Marta,\n\nI keep thinking about how hard we both found the anatomy midterm, and I have an idea for the final. The course covers ten body systems, so what if we split them? You could summarise five and I would summarise the other five, and then we meet and talk each other through our halves.\n\nI have already set up a shared document where we can both paste our summaries. Which half would you rather take?\n\nBest,\nSara Novak\nAnatomy, Year 1",
    responseAnalysis:
      "The model sells the plan in one sentence — what if we split them — and immediately answers the practical question of where the notes will live. Offering Marta first choice of halves is a small concession that makes a busy classmate far more likely to agree.",
    usefulExpressions: [
      "what if we split them?",
      "You could summarise five and I would summarise the other five.",
      "I have already set up a shared document…",
      "Which half would you rather take?",
    ],
    grammarObservations: [
      "What if plus the past simple floats a proposal without pressure.",
      "Would rather in a question invites the reader's preference politely.",
    ],
    commonMistakes: [
      "Assigning yourself the easier half before the other person agrees.",
      "Suggesting a plan with no tool or place for the shared work.",
    ],
    independentAssignment:
      "Write a short email to the whole study group proposing the same split across four people instead of two.",
    vocabulary: [
      { word: "summarise", partOfSpeech: "verb", definition: "to state the main points in a concise form" },
      { word: "halves", partOfSpeech: "noun", definition: "two equal parts of something" },
      { word: "shared", partOfSpeech: "adjective", definition: "used or owned by more than one person" },
      { word: "midterm", partOfSpeech: "noun", definition: "an examination halfway through a course" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-25",
    title: "Asking about waiving a prerequisite",
    purpose: "enquiry",
    recipient: "department administrator",
    scenario:
      "You want to register for 'Intermediate Econometrics' next semester, but the module description lists 'Statistical Methods' as a prerequisite, which you have not taken here. Before transferring to this university, you completed a statistics course at your previous institution with a grade of 91 percent, and you then worked for a year as a junior data analyst. You will email the economics department administrator to ask whether a waiver is possible and what evidence would support it.",
    keyPoints: [
      "Ask whether the prerequisite can be waived in your case.",
      "Outline your equivalent statistics course and grade.",
      "Mention your year of work as a data analyst.",
      "Ask exactly which documents the department needs.",
    ],
    wordBand: { min: 45, max: 105 },
    difficulty: 2,
    estimatedMinutes: 10,
    instructions:
      "Write one email to the department administrator asking whether the statistics prerequisite can be waived, outlining your equivalent background and covering every key point.",
    taskRequirements: [
      "Name the module and the prerequisite it lists.",
      "Summarise your equivalent study and grade.",
      "Add your work experience in one sentence.",
      "Ask for the list of documents the waiver needs.",
    ],
    timeGuidance: "Ten minutes: three listing your evidence, five writing, two checking.",
    modelResponse:
      "Dear Mr Haddad,\n\nI would like to register for 'Intermediate Econometrics' next semester, but it lists 'Statistical Methods' as a prerequisite, which I have not taken here. Could you tell me whether a waiver is possible in my case?\n\nAt my previous institution I completed an equivalent statistics course with a grade of 91 percent, and I then spent a year as a junior data analyst, using regression daily.\n\nIf a waiver can be considered, which documents should I send — the transcript, the syllabus, or a reference from my employer?\n\nThank you for your help.\n\nKind regards,\nLeila Mansour\nEconomics, Year 2",
    responseAnalysis:
      "The model asks the yes-or-no question first and supplies the evidence second, so the administrator can scan one sentence before deciding how carefully to read. Listing the three possible documents as a question saves a slow round of emails about what to attach.",
    usefulExpressions: [
      "Could you tell me whether a waiver is possible…",
      "I then spent a year as a junior data analyst",
      "which documents should I send…",
      "Thank you for your help.",
    ],
    grammarObservations: [
      "Which as a relative pronoun attaches the prerequisite clause to the noun it modifies.",
      "Parallel nouns the transcript, the syllabus, or a reference make the final question easy to answer.",
    ],
    commonMistakes: [
      "Claiming equivalence without offering any document to prove it.",
      "Writing a life history instead of the two facts that matter.",
    ],
    independentAssignment:
      "Write the follow-up email sending the documents the administrator requests and confirming your module registration.",
    vocabulary: [
      { word: "prerequisite", partOfSpeech: "noun", definition: "a course that must be completed before another" },
      { word: "waiver", partOfSpeech: "noun", definition: "official permission to skip a requirement" },
      { word: "equivalent", partOfSpeech: "adjective", definition: "equal in value or content to something else" },
      { word: "regression", partOfSpeech: "noun", definition: "a statistical method for modelling relationships between variables" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-26",
    title: "Borrowing club equipment for culture night",
    purpose: "request",
    recipient: "club president",
    scenario:
      "You are organising the International Students' Culture Night on the twelfth of next month, which needs a projector and a small speaker set for the performances. The international society owns both, and its equipment log shows they are free from the tenth. You will email the society's president to request the equipment from the tenth to the thirteenth, promise to sign the log and return everything charged, and offer a deposit if the committee requires one.",
    keyPoints: [
      "Request the projector and speaker set from the tenth to the thirteenth.",
      "Explain what the Culture Night needs them for.",
      "Promise to sign the equipment log and return them charged.",
      "Offer a deposit if the committee requires one.",
    ],
    wordBand: { min: 45, max: 105 },
    difficulty: 2,
    estimatedMinutes: 10,
    instructions:
      "Write one email to the club president requesting the projector and speakers for Culture Night, giving the dates clearly and covering every key point.",
    taskRequirements: [
      "Name the event and its date early.",
      "Request both items with exact borrowing dates.",
      "State the conditions you will meet on return.",
      "Offer the deposit option in the same email.",
    ],
    timeGuidance: "Ten minutes: two checking dates, six writing, two checking politeness.",
    modelResponse:
      "Hi Chidi,\n\nI am organising the International Students' Culture Night on the twelfth, and I would like to request the society's projector and speaker set for the rehearsals and the show itself. Could I borrow both from the tenth to the thirteenth? The equipment log shows they are free that week.\n\nI will sign the log on collection, keep everything in the society cupboard between events, and return both items fully charged on the thirteenth. If the committee needs a deposit, I am happy to leave one.\n\nThanks very much!\n\nBest wishes,\nHana Suzuki\nInternational Society, Events Team",
    responseAnalysis:
      "The model requests two items with exact dates and then answers the questions a committee would ask before it asks them: storage, charging, the log, the deposit. That completeness is what turns an equipment request from a risk into a routine entry in the log.",
    usefulExpressions: [
      "I would like to request the society's projector and speaker set…",
      "Could I borrow both from the tenth to the thirteenth?",
      "I am happy to leave one.",
      "Thanks very much!",
    ],
    grammarObservations: [
      "Three parallel verbs will sign, keep and return list the conditions compactly.",
      "If the committee needs a deposit floats an offer as a condition.",
    ],
    commonMistakes: [
      "Vague dates like 'around the twelfth', which break the equipment log.",
      "Forgetting to say who is responsible for the gear while borrowed.",
    ],
    independentAssignment:
      "Write the return email confirming both items are back, charged, and noting any fault you found.",
    vocabulary: [
      { word: "projector", partOfSpeech: "noun", definition: "a device that displays video on a screen or wall" },
      { word: "deposit", partOfSpeech: "noun", definition: "money left as security against damage or loss" },
      { word: "rehearsals", partOfSpeech: "noun", definition: "practice sessions before a performance" },
      { word: "cupboard", partOfSpeech: "noun", definition: "a cabinet with doors used for storage" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-27",
    title: "Explaining a missed safety briefing",
    purpose: "explanation",
    recipient: "laboratory supervisor",
    scenario:
      "You have just joined a research group that uses the chemistry building's third-floor laboratory. The compulsory safety briefing for new lab users ran on Monday at nine, but your faculty registration appointment overran by an hour that morning, and you missed it. Your first laboratory session is on Thursday, and you cannot enter without the briefing. You will email the laboratory supervisor, Mr Kovac, to explain what happened and ask how to catch up before Thursday.",
    keyPoints: [
      "Explain why you missed Monday's safety briefing.",
      "Mention that your first lab session is on Thursday.",
      "Ask whether another briefing or an online module exists.",
      "Offer to come at any time that suits him.",
    ],
    wordBand: { min: 40, max: 90 },
    difficulty: 1,
    estimatedMinutes: 9,
    instructions:
      "Write one short email to Mr Kovac explaining why you missed the safety briefing and asking how to complete it before Thursday's session.",
    taskRequirements: [
      "Greet the supervisor and say which group you joined.",
      "Explain the overrunning appointment briefly.",
      "State the Thursday deadline for lab entry.",
      "Ask about the catch-up options available.",
    ],
    timeGuidance: "Nine minutes: two planning, five writing, two checking.",
    modelResponse:
      "Dear Mr Kovac,\n\nI have just joined Dr Berg's research group, and I am writing to explain why I missed Monday's safety briefing for new laboratory users. My faculty registration appointment overran by an hour that morning, and I missed the briefing.\n\nMy first laboratory session is on Thursday, so I need to complete the safety training before then. Is there another briefing, or an online module I could take? I can come at any time that suits you.\n\nKind regards,\nPiotr Nowicki\nChemistry, Year 3",
    responseAnalysis:
      "The model explains the clash in two factual sentences and moves straight to solving the deadline problem, which is what the supervisor actually controls. Offering any convenient time shows willingness without grovelling, and the register stays formal enough for laboratory staff.",
    usefulExpressions: [
      "I am writing to explain why I missed…",
      "so I need to complete the safety training before then",
      "Is there another briefing, or an online module…?",
      "I can come at any time that suits you.",
    ],
    grammarObservations: [
      "Past simple overran reports a single finished event with a consequence.",
      "So joins the deadline to the need, making the urgency clear.",
    ],
    commonMistakes: [
      "Blaming the registration office instead of stating the simple facts.",
      "Asking to skip the briefing, which no supervisor can allow.",
    ],
    independentAssignment:
      "Write a follow-up email confirming you completed the online safety module and attaching the certificate.",
    vocabulary: [
      { word: "briefing", partOfSpeech: "noun", definition: "a meeting at which essential instructions are given" },
      { word: "overran", partOfSpeech: "verb", definition: "continued past the planned end time" },
      { word: "compulsory", partOfSpeech: "adjective", definition: "required and not optional" },
      { word: "supervisor", partOfSpeech: "noun", definition: "the person in charge of a laboratory or research work" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-28",
    title: "Fixing a rehearsal time with your partner",
    purpose: "scheduling",
    recipient: "study-group member",
    scenario:
      "You and your study-group partner Daniel must present a fifteen-minute seminar on Thursday morning for Dr Okoye's research-methods module. You want one full rehearsal with the slides beforehand, and the only realistic moments are Wednesday morning or Thursday at nine, an hour before the seminar. Daniel works at the library cafe until six most evenings, so late sessions are difficult for him. You will email him to propose both options and settle who brings the printed handouts.",
    keyPoints: [
      "Propose Wednesday morning or Thursday at nine for the rehearsal.",
      "Explain why evening rehearsals do not work for Daniel.",
      "Suggest using a library study room.",
      "Agree who prints the handouts before the seminar.",
    ],
    wordBand: { min: 50, max: 120 },
    difficulty: 3,
    estimatedMinutes: 10,
    instructions:
      "Write one email to Daniel proposing a rehearsal time for Thursday's seminar, offering both realistic options and covering every key point.",
    taskRequirements: [
      "Open in a friendly way and name the seminar.",
      "Offer the two rehearsal times with reasons.",
      "Propose the place for the rehearsal.",
      "Settle the handout question in the same email.",
    ],
    timeGuidance: "Ten minutes: two checking both timetables, six writing, two checking.",
    modelResponse:
      "Hi Daniel,\n\nBefore Thursday's research-methods seminar, I would like one full rehearsal with the slides so we can time each section. Would Wednesday morning suit you, or Thursday at nine, an hour before we present? I know the cafe keeps you until six most evenings, so I have kept the options early.\n\nI can book study room four in the library for either slot, and I will bring the printed handouts for the class if you check the slide order.\n\nTell me which day you prefer!\n\nBest,\nCamille Laurent\nResearch Methods, Group 2",
    responseAnalysis:
      "The model proposes two workable slots and explains why they are both early, which shows the partner his evening job was remembered. Dividing the remaining chores — booking against printing and checking — turns the rehearsal into a plan rather than a wish.",
    usefulExpressions: [
      "I would like one full rehearsal with the slides…",
      "Would Wednesday morning suit you, or Thursday at nine?",
      "I have kept the options early.",
      "Tell me which day you prefer!",
    ],
    grammarObservations: [
      "So we can time each section states the purpose of the rehearsal.",
      "Either with a singular noun presents two options as one choice.",
    ],
    commonMistakes: [
      "Proposing times you have not checked against the other diary.",
      "Leaving the handouts unassigned until the morning of the seminar.",
    ],
    independentAssignment:
      "Write the confirmation email after Daniel replies, stating the agreed room, time and handout plan.",
    vocabulary: [
      { word: "rehearsal", partOfSpeech: "noun", definition: "a practice run of a performance or presentation" },
      { word: "handouts", partOfSpeech: "noun", definition: "printed sheets given to an audience" },
      { word: "slot", partOfSpeech: "noun", definition: "a time period reserved for an activity" },
      { word: "suit", partOfSpeech: "verb", definition: "to be convenient for someone" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-29",
    title: "Exchanging a misprinted lab manual",
    purpose: "problem",
    recipient: "campus bookstore manager",
    scenario:
      "Yesterday you bought the chemistry lab manual for this semester at the campus bookstore, paying with your student card. Last night you noticed that pages 41 to 64 are missing and pages 17 to 40 are printed twice in their place. Your first laboratory session using those pages is on Friday morning, and you need a correct copy before then. You will email the bookstore manager to report the fault and ask for an exchange.",
    keyPoints: [
      "Describe exactly which pages are missing and repeated.",
      "State when and where you bought the manual.",
      "Explain that Friday's laboratory session needs the pages.",
      "Request an exchange for a correct copy.",
    ],
    wordBand: { min: 40, max: 90 },
    difficulty: 1,
    estimatedMinutes: 9,
    instructions:
      "Write one short email to the bookstore manager reporting the printing fault in your new lab manual and requesting an exchange before Friday.",
    taskRequirements: [
      "Give the purchase date and the payment method.",
      "Describe the misprint precisely with page numbers.",
      "Mention Friday's session as the deadline.",
      "Ask politely for a replacement copy.",
    ],
    timeGuidance: "Nine minutes: two noting details, five writing, two checking.",
    modelResponse:
      "Dear Bookstore Manager,\n\nYesterday I bought the chemistry lab manual for this semester at your shop, paying by student card. When I opened it at home, I found that pages 41 to 64 are missing and pages 17 to 40 appear twice instead.\n\nMy first laboratory session using those pages is on Friday morning, so I need a correct copy before then. Could I exchange the faulty manual this week?\n\nThank you for your help.\n\nKind regards,\nJae-won Park\nChemistry, Year 1",
    responseAnalysis:
      "The model gives purchase details first, because exchanges begin with a receipt check, then describes the fault so exactly that the manager can spot a bad print batch. Naming Friday's session gives the request its urgency without exaggeration.",
    usefulExpressions: [
      "Yesterday I bought… at your shop",
      "I found that pages 41 to 64 are missing",
      "Could I exchange the faulty manual this week?",
      "Thank you for your help.",
    ],
    grammarObservations: [
      "Are missing and appear twice link present states to their evidence.",
      "Could I exchange turns a demand into a question the shop can answer.",
    ],
    commonMistakes: [
      "Demanding a refund before checking whether replacements exist.",
      "Describing the fault without page numbers, which helps nobody.",
    ],
    independentAssignment:
      "Write a short thank-you email after collecting the replacement copy from the bookstore information desk.",
    vocabulary: [
      { word: "manual", partOfSpeech: "noun", definition: "an instructional book for a course or machine" },
      { word: "exchange", partOfSpeech: "noun", definition: "the replacement of a faulty item for a good one" },
      { word: "faulty", partOfSpeech: "adjective", definition: "not printed or built as it should be" },
      { word: "correct", partOfSpeech: "adjective", definition: "free from faults or errors" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-30",
    title: "Suggesting better plant-based meals",
    purpose: "suggestion",
    recipient: "dining services manager",
    scenario:
      "The main dining hall offers one plant-based hot dish each day, which is often just a side salad or the vegetable of the meat dish. Roughly a third of the students on your corridor eat plant-based meals, and several have started buying food off campus instead. At a neighbouring university, the hall runs a weekly 'world bowl' night with rotating international vegan mains that queue out of the door. You will email the dining services manager to suggest a rotating hot main and clearer labelling.",
    keyPoints: [
      "Describe the current plant-based offering and its limits.",
      "Give evidence of demand from your corridor.",
      "Suggest a rotating hot main and clear labels.",
      "Mention the neighbouring university's successful world-bowl night.",
    ],
    wordBand: { min: 50, max: 120 },
    difficulty: 3,
    estimatedMinutes: 11,
    instructions:
      "Write one email to the dining services manager suggesting improvements to the plant-based menu, supporting your idea with evidence and covering every key point.",
    taskRequirements: [
      "Open politely and state the current problem factually.",
      "Give the evidence that students want more choice.",
      "Propose the rotating main and the labelling change.",
      "Cite the other university's example as proof it works.",
    ],
    timeGuidance: "Eleven minutes: three gathering evidence, six writing, two checking tone.",
    modelResponse:
      "Dear Dining Services Manager,\n\nI am writing with a suggestion about the plant-based menu in the main dining hall. At present there is one hot option each day, often just a salad or the vegetable from the meat dish, so students who eat plant-based meals are left with very little choice.\n\nAbout a third of my corridor eats this way, and several now buy food off campus instead. Could the hall introduce a rotating international vegan main each day, with clear labels at the counter? A neighbouring university runs a weekly world-bowl night that queues out of the door.\n\nI would be glad to help trial the idea or gather feedback from students.\n\nKind regards,\nThabo Molefe\nResidence 5",
    responseAnalysis:
      "The model pairs every criticism with a solution: the thin menu is answered by the rotating main, the unlabelled counter by clear signs. Citing the neighbouring university's queues turns opinion into evidence, and the offer to gather feedback keeps the manager in control of any trial.",
    usefulExpressions: [
      "I am writing with a suggestion about…",
      "so students who eat plant-based meals are left with…",
      "Could the hall introduce a rotating international vegan main…",
      "I would be glad to help trial the idea.",
    ],
    grammarObservations: [
      "Often just a salad is a reduced clause that compresses the criticism.",
      "That queues out of the door is a relative clause used as evidence.",
    ],
    commonMistakes: [
      "Attacking the current menu instead of describing it neutrally.",
      "Suggesting changes with no evidence that other students want them.",
    ],
    independentAssignment:
      "Write a follow-up email sharing the results of a corridor survey on the new vegan options.",
    vocabulary: [
      { word: "plant-based", partOfSpeech: "adjective", definition: "made entirely from plants, with no animal products" },
      { word: "rotating", partOfSpeech: "adjective", definition: "changing regularly in a set order" },
      { word: "labels", partOfSpeech: "noun", definition: "signs showing what a dish contains" },
      { word: "trial", partOfSpeech: "verb", definition: "to test something on a small scale first" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-31",
    title: "Asking how a reduced load affects renewal",
    purpose: "enquiry",
    recipient: "financial aid office",
    scenario:
      "Your Science Merit Award pays half your tuition and renews each year if you maintain a 3.5 grade average and complete thirty credit hours. Last term a doctor-approved reduced load meant you completed only twenty-seven hours, although your average stayed at 3.8. The renewal form asks you to declare any exception, and you are unsure whether the reduced load counts against you. You will email the financial aid office with three precise questions before you submit the form.",
    keyPoints: [
      "Ask whether the reduced load breaks the renewal conditions.",
      "Give your averages and completed hours for both years.",
      "Ask which document proves the medical approval.",
      "Ask whether the renewal decision arrives before enrolment opens.",
    ],
    wordBand: { min: 55, max: 140 },
    difficulty: 4,
    estimatedMinutes: 12,
    instructions:
      "Write one email to the financial aid office asking how your approved reduced load affects the award renewal, giving your record precisely and covering every key point.",
    taskRequirements: [
      "Name the award and quote its two conditions.",
      "Report your own figures against those conditions.",
      "Number the questions so each can be answered.",
      "Give your student number for the file.",
    ],
    timeGuidance: "Twelve minutes: three assembling figures, seven writing, two checking numbers.",
    modelResponse:
      "Dear Financial Aid Office,\n\nMy Science Merit Award renews each year if I keep a 3.5 grade average and complete thirty credit hours. Last term I took a doctor-approved reduced load and completed twenty-seven hours, although my average stayed at 3.8, and I want to be sure how this affects my renewal before I submit the form.\n\nThree questions, if I may. First, does an approved reduced load count against the thirty-hour condition? Second, which document should I attach as proof of the medical approval? Third, will the renewal decision arrive before enrolment opens for next year?\n\nMy student number is 20241750, and I can send the approval letter today.\n\nThank you for your time.\n\nKind regards,\nAisha Rahman\nPhysics, Year 2",
    responseAnalysis:
      "The model quotes the award's conditions before reporting its own figures against them, so the officer can see the exact gap at a glance. The apology-free phrase three questions, if I may keeps the numbered list friendly, and each question needs only a short answer.",
    usefulExpressions: [
      "I am writing about the renewal of my…",
      "Three questions, if I may.",
      "does an approved reduced load count against…",
      "I can send the approval letter today.",
    ],
    grammarObservations: [
      "Does in the direct question checks the rule without hedging language.",
      "Although concedes the weak figure before the strong one is stated.",
    ],
    commonMistakes: [
      "Hiding the reduced load in the hope nobody notices it.",
      "Asking vague questions that a busy officer cannot answer briefly.",
    ],
    independentAssignment:
      "Write the reply you would send after the office confirms the renewal, asking for written confirmation for your records.",
    vocabulary: [
      { word: "renewal", partOfSpeech: "noun", definition: "the process of extending an award for another year" },
      { word: "approval", partOfSpeech: "noun", definition: "official permission granted for an arrangement" },
      { word: "enrolment", partOfSpeech: "noun", definition: "the official process of registering for courses" },
      { word: "reduced", partOfSpeech: "adjective", definition: "made smaller than the standard amount" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-32",
    title: "Requesting a review of your personal statement",
    purpose: "request",
    recipient: "writing centre tutor",
    scenario:
      "Applications for the honours programme close on the thirtieth, and your 700-word personal statement is drafted but uneven: the opening is strong, the middle repeats itself, and the closing rushes. The writing centre offers forty-five-minute draft reviews, but its calendar shows only morning slots left this month, and you have lectures every morning until one o'clock. You will email the writing centre to request an appointment before the twenty-sixth and ask whether to send the draft and the programme prompt in advance.",
    keyPoints: [
      "Request a forty-five-minute review before the twenty-sixth.",
      "Explain the deadline on the thirtieth.",
      "Ask whether to email the draft and prompt beforehand.",
      "Offer to take any afternoon slot that opens.",
    ],
    wordBand: { min: 55, max: 140 },
    difficulty: 4,
    estimatedMinutes: 12,
    instructions:
      "Write one email to the writing centre requesting a review of your personal statement before the application deadline, explaining your constraint and covering every key point.",
    taskRequirements: [
      "State the deadline that makes timing urgent.",
      "Describe the draft honestly, including its weaknesses.",
      "Ask about sending materials before the session.",
      "Offer flexibility on any afternoon opening.",
    ],
    timeGuidance: "Twelve minutes: three planning what the tutor must know, seven writing, two checking.",
    modelResponse:
      "Dear Writing Centre,\n\nI would like to request a forty-five-minute review of my personal statement for the honours programme, whose deadline is the thirtieth. My calendar shows only morning slots remaining, but I have lectures until one o'clock every weekday, so I am writing to ask for help in a tight week.\n\nThe draft runs to about seven hundred words: the opening is strong, but the middle repeats itself and the closing feels rushed. Could I send the draft and the programme prompt in advance, so the tutor can see where the seams are?\n\nIf any afternoon slot opens before the twenty-sixth, even a short one, I will take it gratefully.\n\nThank you for your time.\n\nKind regards,\nMarta Kowalska\nEnglish Literature, Year 2",
    responseAnalysis:
      "The model admits the draft's weaknesses out loud, which tells the tutor the writer is coachable. It states the calendar conflict plainly rather than complaining about it, and the promise to take any afternoon slot at short notice makes the tutor's job easier.",
    usefulExpressions: [
      "I would like to request a forty-five-minute review of…",
      "Could I send the draft and the programme prompt in advance?",
      "even a short one, I will take it gratefully",
      "Thank you for your time.",
    ],
    grammarObservations: [
      "Whose links the programme to its deadline inside one noun phrase.",
      "Runs to describes the length of a draft in natural writer's language.",
    ],
    commonMistakes: [
      "Sending the draft with no explanation of what you want from the session.",
      "Asking for a slot without revealing the conflict that blocks mornings.",
    ],
    independentAssignment:
      "Write the follow-up email after the review, listing the three changes you will make to the draft.",
    vocabulary: [
      { word: "draft", partOfSpeech: "noun", definition: "an early version of a piece of writing" },
      { word: "prompt", partOfSpeech: "noun", definition: "the question or instructions a programme supplies" },
      { word: "review", partOfSpeech: "noun", definition: "a session in which work is examined and improved" },
      { word: "seams", partOfSpeech: "noun", definition: "the joins in a text where sections meet" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-33",
    title: "Explaining a late group submission",
    purpose: "explanation",
    recipient: "course professor",
    scenario:
      "You are the coordinator of group five in Dr Haqq's media-studies module. Your group's presentation file, thirty slides built over two weeks, corrupted the night before the deadline when a laptop crashed and the backup failed to save properly. The group rebuilt the deck from an older version and submitted it fourteen hours after the deadline. Dr Haqq's handbook applies a percentage penalty to late work unless circumstances warrant otherwise. You will write on behalf of the group to explain the timeline and ask for understanding.",
    keyPoints: [
      "Explain what happened to the file and when.",
      "Describe how the group rebuilt the deck.",
      "State exactly when the work was submitted.",
      "Acknowledge the late-submission policy.",
      "Ask whether the circumstances can be considered.",
    ],
    wordBand: { min: 50, max: 120 },
    difficulty: 3,
    estimatedMinutes: 11,
    instructions:
      "Write one email to Dr Haqq explaining, on behalf of your group, why the presentation was submitted late, giving the timeline honestly and covering every key point.",
    taskRequirements: [
      "Identify your group and module at the start.",
      "Give the crash and rebuild timeline in order.",
      "State the submission time without excuses.",
      "Refer to the handbook policy you know applies.",
      "End with a request for understanding, not a demand.",
    ],
    timeGuidance: "Eleven minutes: four getting the timeline straight, five writing, two checking tone.",
    modelResponse:
      "Dear Dr Haqq,\n\nI am writing on behalf of group five to explain why our media-studies presentation arrived fourteen hours after the deadline. The night before submission, the laptop holding the finished file crashed, and the backup failed to save properly, so the thirty-slide deck was suddenly unreadable.\n\nTwo of us rebuilt the presentation from a version saved three days earlier, and the completed file was submitted at two in the afternoon. I know the handbook applies a penalty to late work, and I accept that rule. I would only ask whether the crash counts as circumstances worth considering when the penalty is applied.\n\nThank you for reading our explanation.\n\nKind regards,\nOmar El-Sayed\nGroup five coordinator, Media Studies",
    responseAnalysis:
      "The model separates the story from the policy: the crash, the rebuild and the submission time come first in strict order, and only then is the handbook rule acknowledged and accepted. Asking whether the crash counts leaves the decision entirely with the professor, which is the right posture for a group request.",
    usefulExpressions: [
      "I am writing on behalf of group five to explain…",
      "the backup failed to save properly",
      "I accept that rule.",
      "whether the crash counts as circumstances worth considering",
    ],
    grammarObservations: [
      "Past simple forms crashed, rebuilt and was submitted keep the timeline in order.",
      "Whether introduces an indirect question that does not presuppose an answer.",
    ],
    commonMistakes: [
      "Claiming the crash with no timeline that supports the rebuild story.",
      "Demanding the penalty be dropped instead of asking for consideration.",
    ],
    independentAssignment:
      "Write a note to your group summarising the professor's reply and what each member should do next time to avoid a single point of failure.",
    vocabulary: [
      { word: "corrupted", partOfSpeech: "verb", definition: "damaged so that a file cannot be opened properly" },
      { word: "backup", partOfSpeech: "noun", definition: "a spare copy kept in case the original is lost" },
      { word: "penalty", partOfSpeech: "noun", definition: "a loss imposed for breaking a rule" },
      { word: "coordinator", partOfSpeech: "noun", definition: "the member who organises a group's work" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-34",
    title: "Proposing a cafe shift swap",
    purpose: "scheduling",
    recipient: "classmate",
    scenario:
      "You and Mateo both work evening shifts at the campus cafe. Your sister's graduation ceremony falls on Saturday evening — your usual six-to-ten shift — and you urgently want that day free. Mateo normally works Thursday from two to six, which fits your timetable perfectly, so a straight swap would solve everything. The manager allows swaps only when both parties confirm the arrangement to her in writing. You will email Mateo to propose the exchange and settle the details.",
    keyPoints: [
      "Explain the graduation ceremony that blocks Saturday.",
      "Propose the straight swap: his Thursday for your Saturday.",
      "Suggest confirming to the manager in writing together.",
      "Offer something in return for the favour.",
    ],
    wordBand: { min: 55, max: 140 },
    difficulty: 4,
    estimatedMinutes: 12,
    instructions:
      "Write one email to Mateo proposing the shift swap for your sister's graduation, making the exchange fair and covering every key point.",
    taskRequirements: [
      "Open in a friendly way and explain the family event.",
      "Set out the swap precisely: hours for hours.",
      "Explain the manager's written-confirmation rule.",
      "Offer something real in return.",
    ],
    timeGuidance: "Twelve minutes: three checking the shift times, seven writing, two checking tone.",
    modelResponse:
      "Hi Mateo,\n\nI have a family problem and a plan that might fix it in one step. My sister's graduation ceremony is on Saturday evening, exactly when my six-to-ten cafe shift runs, and I would love to be there. You normally work Thursday from two to six, which fits my timetable perfectly — so could we do a straight swap? I would take your Thursday, and you would take my Saturday.\n\nPriya only approves swaps when we both confirm the arrangement to her in writing, so we could email her together today if you agree. I will also cover one of your Friday closes any week you like.\n\nFingers crossed!\n\nBest,\nNoah Fischer\nCampus Cafe, evening team",
    responseAnalysis:
      "The model leads with the human reason — a sister graduates once — and only then presents the swap as a clean hour-for-hour trade. Handling the manager's confirmation rule inside the email shows the plan is workable, and the Friday-close offer pays the favour forward instead of leaving it one-sided.",
    usefulExpressions: [
      "could we do a straight swap?",
      "exactly when my six-to-ten cafe shift runs",
      "we could email her together today if you agree",
      "Fingers crossed!",
    ],
    grammarObservations: [
      "Would in I would take and you would take maps the exchange symmetrically.",
      "So before could we turns the proposal into one shared decision.",
    ],
    commonMistakes: [
      "Asking someone to give up a shift with nothing offered back.",
      "Leaving the manager's approval to be arranged later and separately.",
    ],
    independentAssignment:
      "Write the joint email to the manager confirming the swap once Mateo agrees, with both shifts spelled out.",
    vocabulary: [
      { word: "swap", partOfSpeech: "noun", definition: "an exchange of one thing for another between two people" },
      { word: "arrangement", partOfSpeech: "noun", definition: "a plan agreed between the people involved" },
      { word: "approve", partOfSpeech: "verb", definition: "to give official permission for something" },
      { word: "cover", partOfSpeech: "verb", definition: "to work someone's shift in their place" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-35",
    title: "Reporting a fault that ruined your samples",
    purpose: "problem",
    recipient: "laboratory supervisor",
    scenario:
      "For your honours project on enzyme activity you have prepared two batches of temperature-sensitive samples, each taking about a day of careful work. Since Monday, the refrigerated centrifuge in laboratory two has been stopping mid-cycle with an E-07 error, and the sample temperature rose above the protocol's limit both times you tried. Your ethics approval caps the total number of samples you may run, and your poster presentation is in three weeks. You will email the laboratory supervisor with the full fault history and ask about repairs and alternative access.",
    keyPoints: [
      "Describe the E-07 fault pattern since Monday.",
      "Explain how the temperature rise ruined two sample batches.",
      "Note the ethics cap and the poster deadline as constraints.",
      "Ask when the centrifuge will be repaired.",
      "Request supervised access to laboratory three's machine meanwhile.",
    ],
    wordBand: { min: 60, max: 160 },
    difficulty: 5,
    estimatedMinutes: 15,
    instructions:
      "Write one email to the laboratory supervisor reporting the centrifuge fault in full technical detail, explaining its consequences for your project and covering every key point.",
    taskRequirements: [
      "Open with the machine, the error code and the start date.",
      "Quantify the damage: batches, days of work, protocol breach.",
      "Connect the fault to the ethics cap and poster deadline.",
      "Make two precise requests: repair timeline and interim access.",
    ],
    timeGuidance: "Allow fifteen minutes: five assembling the fault log, eight writing, two checking the technical terms.",
    modelResponse:
      "Dear Dr Faust,\n\nI am writing to report a recurring fault with the refrigerated centrifuge in laboratory two. Since Monday it has stopped mid-cycle four times, each time showing an E-07 error, and on two of those runs the sample chamber warmed above the limit set in my protocol. As a result, both batches of enzyme samples for my honours project — roughly two days of preparation — exceeded their temperature range and cannot be used.\n\nThis fault now touches two hard limits. My ethics approval caps the total number of samples I may run, so every ruined batch narrows the dataset, and my poster presentation is in three weeks.\n\nCould you tell me when a repair is expected, and whether I might use the centrifuge in laboratory three under supervision until then? I can send the full usage log with timestamps and error codes today.\n\nYours sincerely,\nBilge Aydin\nBiochemistry, Year 4",
    responseAnalysis:
      "The model works like an incident report: machine, code, frequency, then damage measured in days and protocol breaches. Connecting the fault to the ethics cap turns a broken machine into a project risk the supervisor must weigh, and the two requests are concrete enough to answer in one line each.",
    usefulExpressions: [
      "I am writing to report a recurring fault with…",
      "As a result, both batches… cannot be used",
      "Could you tell me when a repair is expected…",
      "I can send the full usage log…",
    ],
    grammarObservations: [
      "Present perfect has stopped sums up repeated failures continuing this week.",
      "Whether I might use keeps the interim-access request deferential and precise.",
    ],
    commonMistakes: [
      "Reporting the fault emotionally instead of logging it precisely.",
      "Asking for access without saying who would supervise it.",
    ],
    independentAssignment:
      "Write a follow-up email to your ethics committee requesting a small amendment for the replacement samples.",
    vocabulary: [
      { word: "centrifuge", partOfSpeech: "noun", definition: "a machine that spins samples at high speed to separate them" },
      { word: "recurring", partOfSpeech: "adjective", definition: "happening again and again" },
      { word: "supervision", partOfSpeech: "noun", definition: "the presence of a qualified person overseeing work" },
      { word: "exceeded", partOfSpeech: "verb", definition: "gone beyond an allowed limit" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-36",
    title: "Proposing a shuttle stop for the new residences",
    purpose: "suggestion",
    recipient: "transport office",
    scenario:
      "Two new residence blocks, Alder Court, housing about three hundred students, opened in September north of the ring road. The nearest shuttle stop is a fifteen-minute walk away along an unlit path with no pavement, and students walking to the 8:30 morning peak are a daily crowd. You have counted more than forty walkers at that time on three separate mornings. You will email the transport office to propose a route-four stop at the roundabout, suggest a one-term trial, and offer survey evidence.",
    keyPoints: [
      "Describe where the new residences are and the walking problem.",
      "Give your walker counts at the morning peak.",
      "Propose a route-four stop at the roundabout.",
      "Suggest a one-term trial with a survey at the end.",
    ],
    wordBand: { min: 55, max: 140 },
    difficulty: 4,
    estimatedMinutes: 12,
    instructions:
      "Write one email to the transport office proposing a new shuttle stop for Alder Court, supporting the idea with your counts and covering every key point.",
    taskRequirements: [
      "Establish the safety problem of the unlit path first.",
      "Present the three morning counts as evidence.",
      "Make the proposal exact: route, stop, roundabout.",
      "Propose a trial and an evaluation, not a permanent change.",
    ],
    timeGuidance: "Twelve minutes: three ordering evidence and proposal, seven writing, two checking.",
    modelResponse:
      "Dear Transport Office,\n\nI am writing to propose a new stop on route four, at the roundabout beside Alder Court. The two new residence blocks north of the ring road house about three hundred students, and the nearest existing stop is a fifteen-minute walk away along an unlit path with no pavement — an awkward walk in daylight and a genuinely unsafe one now that the evenings are dark by five.\n\nI counted more than forty walkers heading for the 8:30 shuttle on three separate mornings last week, which suggests the demand is already there.\n\nWould the office consider a one-term trial stop at the roundabout, with a short passenger survey at the end to judge whether it should stay? I would be glad to help collect responses.\n\nKind regards,\nEmma Sorensen\nAlder Court, block B",
    responseAnalysis:
      "The model sells safety before convenience, which is the argument a transport office must answer. The counts are dated and specific, the proposal names route and location exactly, and framing the change as a trial with its own evaluation lowers the cost of saying yes.",
    usefulExpressions: [
      "I am writing to propose a new stop on…",
      "which suggests the demand is already there",
      "Would the office consider a one-term trial…",
      "I would be glad to help collect responses.",
    ],
    grammarObservations: [
      "Now that the evenings are dark links the risk to the season.",
      "Whether it should stay hands the final judgement to the office.",
    ],
    commonMistakes: [
      "Demanding a permanent stop before any trial has been run.",
      "Giving vague support like 'many students' instead of counted walkers.",
    ],
    independentAssignment:
      "Write the follow-up email reporting the trial survey's results and recommending whether the stop should continue.",
    vocabulary: [
      { word: "roundabout", partOfSpeech: "noun", definition: "a circular junction where roads meet" },
      { word: "pavement", partOfSpeech: "noun", definition: "a paved footpath beside a road" },
      { word: "trial", partOfSpeech: "noun", definition: "a test period before a final decision" },
      { word: "demand", partOfSpeech: "noun", definition: "the level of use a service would attract" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-37",
    title: "Asking about the CV clinic service",
    purpose: "enquiry",
    recipient: "career services",
    scenario:
      "You are a second-year data-science student preparing summer-internship applications. The career services website advertises Wednesday CV clinics but says only that booking is essential and places are limited. You are unsure whether the clinics are open to students on your programme, what a twenty-minute slot realistically covers, and whether the reviewer can also look at your LinkedIn page in the same appointment. Your friend recommended the clinics after a reviewer rewrote her opening paragraph in one visit. You will email career services with these three questions.",
    keyPoints: [
      "Ask whether the clinics are open to your programme.",
      "Ask what a twenty-minute slot covers.",
      "Ask whether a LinkedIn review fits the same appointment.",
      "Mention your field and year so the answer is specific.",
    ],
    wordBand: { min: 50, max: 120 },
    difficulty: 3,
    estimatedMinutes: 10,
    instructions:
      "Write one email to career services asking your three questions about the Wednesday CV clinics, identifying your field politely and covering every key point.",
    taskRequirements: [
      "Introduce yourself as a second-year data-science student.",
      "Reference the website's limited information as your reason.",
      "Ask the three questions in a clear order.",
      "Close by offering to send your CV in advance.",
    ],
    timeGuidance: "Ten minutes: two listing questions, six writing, two checking.",
    modelResponse:
      "Dear Career Services,\n\nI am a second-year data-science student preparing summer-internship applications, and I would like to use the Wednesday CV clinics your website advertises. The page says only that booking is essential and places are limited, so I have three questions before I reserve a slot.\n\nAre the clinics open to students on my programme? What can a twenty-minute appointment realistically cover — a full read, or the opening sections? And could the reviewer also glance at my LinkedIn page in the same session?\n\nI am happy to send my CV ahead of time if that makes the session more useful.\n\nThank you for your help.\n\nKind regards,\nWei Zhang\nData Science, Year 2",
    responseAnalysis:
      "The model explains why it is asking — the website says almost nothing — which keeps the questions from sounding lazy. The three questions are ordered from eligibility to detail, and the offer to send the CV ahead shows the writer wants the session to be productive, not just attended.",
    usefulExpressions: [
      "I would like to use the Wednesday CV clinics…",
      "I have three questions before I reserve a slot.",
      "What can a twenty-minute appointment realistically cover?",
      "I am happy to send my CV ahead of time.",
    ],
    grammarObservations: [
      "Direct questions with are and can keep short queries unmistakably questions.",
      "If that makes the session more useful conditions the offer politely.",
    ],
    commonMistakes: [
      "Booking a slot and only then asking whether the service fits you.",
      "Asking what the service does instead of reading the website first.",
    ],
    independentAssignment:
      "Write the follow-up email after the clinic, thanking the reviewer and listing the two changes you will make.",
    vocabulary: [
      { word: "clinics", partOfSpeech: "noun", definition: "short advisory sessions offered on a regular schedule" },
      { word: "reserve", partOfSpeech: "verb", definition: "to book something in advance" },
      { word: "reviewer", partOfSpeech: "noun", definition: "the person who reads and comments on your work" },
      { word: "advertises", partOfSpeech: "verb", definition: "publicises a service to attract users" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-38",
    title: "Requesting an expedited enrolment letter",
    purpose: "request",
    recipient: "department administrator",
    scenario:
      "Your visa renewal appointment at the immigration office is on the eighth, and you must bring an official enrolment verification letter from the university. You requested the letter through the student portal nine days ago, and the portal's status page still shows the standard two-week processing time, which would finish after your appointment. Your course leader has already written a supporting note you can attach. You will email the department administrator to request expedited processing, offering to collect the letter in person the moment it is ready.",
    keyPoints: [
      "Explain the immigration appointment on the eighth.",
      "Give the portal request details and its slow status.",
      "Request expedited processing of the letter.",
      "Offer to collect it in person as soon as it is ready.",
    ],
    wordBand: { min: 50, max: 120 },
    difficulty: 3,
    estimatedMinutes: 10,
    instructions:
      "Write one email to the department administrator requesting that your enrolment letter be processed urgently, explaining the deadline and covering every key point.",
    taskRequirements: [
      "State the appointment date and what the letter is for.",
      "Give the request date and reference from the portal.",
      "Ask for expedited processing with the reason.",
      "Offer in-person collection to save posting time.",
    ],
    timeGuidance: "Ten minutes: two noting dates, six writing, two checking formality.",
    modelResponse:
      "Dear Ms Nkemelu,\n\nI am writing to request expedited processing of an enrolment verification letter that I ordered through the student portal nine days ago, reference EDU-20841. The status page still shows the standard two-week timeline, but my visa renewal appointment at the immigration office is on the eighth, and the letter must be in my file by then.\n\nCould the letter be prepared sooner, given the deadline? I am glad to collect it from your office in person the moment it is ready, and I can bring my passport and appointment confirmation to verify my identity.\n\nThank you for your help.\n\nKind regards,\nHiroshi Tanaka\nMechanical Engineering, Year 3",
    responseAnalysis:
      "The model opens with the request and its reference number in the same sentence, so the administrator can pull the file instantly. The deadline is stated once with its consequence, the offer to collect in person removes delivery time from the critical path, and identity documents are offered unprompted.",
    usefulExpressions: [
      "I am writing to request expedited processing of…",
      "Could the letter be prepared sooner, given the deadline?",
      "I am glad to collect it… in person",
      "Thank you for your help.",
    ],
    grammarObservations: [
      "Passive could be prepared makes the request without naming a worker.",
      "Given the deadline is a participle clause that justifies the urgency.",
    ],
    commonMistakes: [
      "Blaming the office for the standard timeline instead of explaining the emergency.",
      "Omitting the request reference, which makes files hard to find.",
    ],
    independentAssignment:
      "Write the short thank-you email after collecting the letter, confirming it reached the immigration file safely.",
    vocabulary: [
      { word: "expedited", partOfSpeech: "adjective", definition: "made faster than the normal process" },
      { word: "verification", partOfSpeech: "noun", definition: "the act of proving something is true officially" },
      { word: "renewal", partOfSpeech: "noun", definition: "the extension of an official document's validity" },
      { word: "collect", partOfSpeech: "verb", definition: "to go somewhere and take something that is waiting" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-39",
    title: "Explaining a module change on exchange",
    purpose: "explanation",
    recipient: "exchange-programme coordinator",
    scenario:
      "You arrived at your host university in September and registered for 'Media Law' as the law module in your approved learning agreement. Last week the host department moved the Media Law seminar to Thursday evening, exactly when your compulsory language course meets, and the two cannot be reconciled. The alternative module 'Digital Ethics' carries the same credits, fits your timetable, and your home coordinator has hinted similar swaps are routine. You will email the exchange-programme coordinator, Mr Andersson, to explain the clash and ask for the amendment procedure.",
    keyPoints: [
      "Explain the timetable clash that forced the change.",
      "Present 'Digital Ethics' as the replacement, with matching credits.",
      "Ask for the learning-agreement amendment procedure.",
      "Note the host department's add/drop deadline on the fifteenth.",
    ],
    wordBand: { min: 55, max: 140 },
    difficulty: 4,
    estimatedMinutes: 12,
    instructions:
      "Write one email to Mr Andersson explaining why you must swap a module at your host university, presenting the replacement and covering every key point.",
    taskRequirements: [
      "Identify yourself and your host institution briefly.",
      "Give the clash precisely: course against course.",
      "Show the replacement matches in credits and level.",
      "Ask for the amendment steps before the fifteenth.",
    ],
    timeGuidance: "Twelve minutes: three checking the module facts, seven writing, two checking.",
    modelResponse:
      "Dear Mr Andersson,\n\nI am writing from my host university, where a timetable change has forced one adjustment to my approved learning agreement. The host department has moved the 'Media Law' seminar to Thursday evening, exactly when my compulsory language course meets, and no alternative seminar group exists, so the two can no longer be taken together.\n\nI would like to replace 'Media Law' with 'Digital Ethics', which carries the same credits at the same level and leaves no clash anywhere in my week. The host department's add/drop window closes on the fifteenth, so I would need the amendment confirmed before then.\n\nCould you send me the amendment form and tell me whether my home department must approve the change before the host university processes it?\n\nThank you for your help.\n\nKind regards,\nAna Barbosa\nMedia Studies, exchange year",
    responseAnalysis:
      "The model frames the swap as the host department's doing, which it is, and then does the coordinator's comparison work: credits, level and clash-free timetable are all confirmed in one sentence. Anchoring everything to the fifteenth keeps the request urgent without ever sounding panicked.",
    usefulExpressions: [
      "a timetable change has forced one adjustment…",
      "which carries the same credits at the same level",
      "Could you send me the amendment form…",
      "Thank you for your help.",
    ],
    grammarObservations: [
      "Present perfect has moved and has forced link the change to its consequences.",
      "Whether inside tell me keeps the final question indirect and polite.",
    ],
    commonMistakes: [
      "Swapping modules first and asking for approval afterwards.",
      "Proposing a replacement without checking its credits or level.",
    ],
    independentAssignment:
      "Write the follow-up email confirming the amendment was processed, with the new module on your updated agreement.",
    vocabulary: [
      { word: "amendment", partOfSpeech: "noun", definition: "an official change made to a signed document" },
      { word: "adjustment", partOfSpeech: "noun", definition: "a small change to fit new circumstances" },
      { word: "compulsory", partOfSpeech: "adjective", definition: "required and not optional" },
      { word: "processes", partOfSpeech: "verb", definition: "deals with officially, step by step" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-40",
    title: "Finding a new committee meeting time",
    purpose: "scheduling",
    recipient: "club president",
    scenario:
      "You are the secretary of the astronomy society, and its monthly committee meeting is set for the fourteenth at seven in the evening. Three of the six officers have examinations the following morning and have asked for a change. You are free on the sixteenth at the same time, and the room in the physics building is free on both dates; only the booking would need updating. You will email the president to propose the alternatives and ask for a decision by Friday so the agenda can go out in time.",
    keyPoints: [
      "Explain why the fourteenth no longer works for the committee.",
      "Propose the sixteenth at the same time as an alternative.",
      "Offer to update the room booking once decided.",
      "Ask for a decision by Friday so the agenda goes out.",
    ],
    wordBand: { min: 45, max: 105 },
    difficulty: 2,
    estimatedMinutes: 10,
    instructions:
      "Write one email to the society president proposing a new time for the committee meeting, explaining the exam clash and covering every key point.",
    taskRequirements: [
      "Open by identifying the meeting and its current slot.",
      "Give the reason three officers need the change.",
      "Propose the alternative date you have checked.",
      "Set the Friday decision deadline and explain why.",
    ],
    timeGuidance: "Ten minutes: two checking dates, six writing, two checking.",
    modelResponse:
      "Hi Rosa,\n\nQuick committee problem: three of the six officers have exams the morning after our meeting on the fourteenth, and all three have asked to move it. Could we hold the meeting on the sixteenth at seven instead? The physics-building room is free on both dates, so only the booking would change.\n\nI would need a decision by Friday so the agenda can go out a week ahead as usual. I can update the booking the moment you confirm.\n\nThanks!\n\nBest,\nLena Fischer\nAstronomy Society, secretary",
    responseAnalysis:
      "The model states the problem in its first line, proposes the one date it has already checked, and ties the Friday deadline to a real consequence — the agenda mailing. Offering to handle the booking shows the secretary is solving the problem, not just reporting it.",
    usefulExpressions: [
      "Quick committee problem:",
      "Could we hold the meeting on the sixteenth instead?",
      "I would need a decision by Friday so…",
      "I can update the booking the moment you confirm.",
    ],
    grammarObservations: [
      "All three with have asked quantifies the support for moving.",
      "The moment you confirm is a time clause without a future form.",
    ],
    commonMistakes: [
      "Moving the meeting by announcement instead of proposing it.",
      "Missing the connection between the decision date and the agenda.",
    ],
    independentAssignment:
      "Write the agenda email to all officers confirming the new date and listing three items for discussion.",
    vocabulary: [
      { word: "committee", partOfSpeech: "noun", definition: "the group of officers who run a society" },
      { word: "agenda", partOfSpeech: "noun", definition: "the list of items to discuss at a meeting" },
      { word: "booking", partOfSpeech: "noun", definition: "a reservation of a room for a set time" },
      { word: "officers", partOfSpeech: "noun", definition: "members holding official roles in a society" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
];
