/**
 * TOEFL Writing Practice Library — Write an Email, batch 3 (PROMPT 50).
 * Tasks toefl-wb-email-41…60: original campus scenarios, one email each,
 * matched to a real recipient across the six purposes (enquiry, request,
 * explanation, scheduling, problem, suggestion).
 *
 * All scenarios and model responses are original TalkSy practice material.
 */

import { TOEFL_WRITING_BANK_SOURCE_NOTE, type ToeflEmailTask } from "./types";

export const email3Tasks: ToeflEmailTask[] = [
  {
    taskType: "write-email",
    slug: "toefl-wb-email-41",
    title: "Questioning two quiz answers",
    purpose: "problem",
    recipient: "course professor",
    scenario:
      "In Friday's online quiz for Dr Kowalczyk's hydrology module, questions seven and twelve were marked incorrect, but the answers you gave match the lecture slides almost word for word. You have taken two screenshots that place your answer beside slide fourteen of lecture six, where the same figures appear. The quiz counts for five percent of the module grade, and you want the marking key checked before the results are finalised. You will email Dr Kowalczyk with the details.",
    keyPoints: [
      "Identify the two questions and the quiz date.",
      "Explain that your answers match slide fourteen.",
      "Mention the screenshots you can attach.",
      "Ask politely for the marking key to be checked.",
    ],
    wordBand: { min: 45, max: 105 },
    difficulty: 2,
    estimatedMinutes: 10,
    instructions:
      "Write one email to Dr Kowalczyk questioning the marking of two quiz answers politely, pointing to the evidence and covering every key point.",
    taskRequirements: [
      "Name the module, quiz and question numbers.",
      "Point to the exact slide that supports you.",
      "Offer the screenshots rather than asserting you are right.",
      "Ask for a check, not for marks to be changed.",
    ],
    timeGuidance: "Ten minutes: two gathering the evidence, six writing, two softening tone.",
    modelResponse:
      "Dear Dr Kowalczyk,\n\nI am writing about Friday's online quiz in your hydrology module. Questions seven and twelve were marked incorrect, but as far as I can see, my answers match slide fourteen of lecture six, where the same figures appear.\n\nI have two screenshots that place my answers beside the slide, and I would be glad to send them. Could the marking key for those two questions be checked before the results are finalised? I may of course be missing something.\n\nThank you for your time.\n\nKind regards,\nMarta Silva\nEnvironmental Engineering, Year 2",
    responseAnalysis:
      "The model challenges a grade without challenging the grader: the evidence is placed on the table rather than argued from, the request targets the key rather than the marks, and the closing admission that the writer may be missing something removes any hint of accusation.",
    usefulExpressions: [
      "I am writing about Friday's online quiz…",
      "as far as I can see",
      "Could the marking key… be checked?",
      "I may of course be missing something.",
    ],
    grammarObservations: [
      "Were marked is a passive that reports the system, not a person.",
      "As far as I can see hedges the claim without weakening it.",
    ],
    commonMistakes: [
      "Demanding the marks instead of asking for a check.",
      "Sending screenshots with no explanation of what they show.",
    ],
    independentAssignment:
      "Write the short reply you would send if the professor confirms the key was wrong and restores the marks.",
    vocabulary: [
      { word: "quiz", partOfSpeech: "noun", definition: "a short test, often counting a little toward a grade" },
      { word: "marked", partOfSpeech: "verb", definition: "given a score or judgement by a grader" },
      { word: "figures", partOfSpeech: "noun", definition: "numbers or diagrams used as evidence in a lecture" },
      { word: "finalised", partOfSpeech: "verb", definition: "made final after all checks are done" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-42",
    title: "Suggesting a silent study zone in the union",
    purpose: "suggestion",
    recipient: "student union office",
    scenario:
      "During examination weeks the library is full by nine in the morning, and finding a seat becomes a matter of luck. The students' union building has a large lower hall that stands almost empty in the evenings, with rows of stacking chairs and good lighting already in place. The union ran a pop-up cafe in that hall last spring, so temporary use is clearly possible. You will email the student union office to suggest turning the hall into a silent study zone for the two exam weeks.",
    keyPoints: [
      "Describe the library crowding during exam weeks.",
      "Point out the empty lower hall and its existing furniture.",
      "Mention the pop-up cafe as proof temporary use works.",
      "Offer to volunteer for setting up and staffing the zone.",
    ],
    wordBand: { min: 45, max: 105 },
    difficulty: 2,
    estimatedMinutes: 10,
    instructions:
      "Write one email to the student union office suggesting the lower hall as a silent study zone, giving evidence for the idea and covering every key point.",
    taskRequirements: [
      "Establish the problem with the crowded library first.",
      "Show that the hall is ready to use as it is.",
      "Cite the pop-up cafe precedent briefly.",
      "Offer practical help, such as volunteering for setup.",
    ],
    timeGuidance: "Ten minutes: three planning the argument, five writing, two checking.",
    modelResponse:
      "Dear Student Union Office,\n\nDuring exam weeks the library fills by nine in the morning and seat-hunting eats the first hour of many students' revision. The union's lower hall, however, stands almost empty every evening, with stacking chairs and good lighting already in place.\n\nCould the hall be opened as a silent study zone for the two exam weeks? The pop-up cafe you ran there last spring shows the space can take temporary use. I would be glad to volunteer for the setup and to help staff a sign-in table.\n\nThank you for considering it.\n\nKind regards,\nSofia Rossi\nLanguages, Year 3",
    responseAnalysis:
      "The model builds the case in two halves — a problem everyone recognises and a solution already furnished and lit. The cafe precedent answers the office's likeliest objection in advance, and the volunteer offer attaches the writer's work to the idea, not just the writer's opinion.",
    usefulExpressions: [
      "During exam weeks the library fills by nine…",
      "Could the hall be opened as a silent study zone…",
      "shows the space can take temporary use",
      "I would be glad to volunteer…",
    ],
    grammarObservations: [
      "However in mid-position contrasts the empty hall with the full library.",
      "Passive could be opened leaves the arrangements entirely to the union.",
    ],
    commonMistakes: [
      "Criticising the library's space instead of proposing the union's.",
      "Offering an idea with no offer of help to run it.",
    ],
    independentAssignment:
      "Write the follow-up email proposing two quiet-zone rules, such as phone use and food, for the office to consider.",
    vocabulary: [
      { word: "temporary", partOfSpeech: "adjective", definition: "lasting only for a limited period" },
      { word: "volunteer", partOfSpeech: "verb", definition: "to offer to do work without payment" },
      { word: "zone", partOfSpeech: "noun", definition: "an area set aside for a particular purpose" },
      { word: "staff", partOfSpeech: "verb", definition: "to provide people to run a service" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-43",
    title: "Asking for a space in a full laboratory section",
    purpose: "enquiry",
    recipient: "laboratory supervisor",
    scenario:
      "You switched into 'Molecular Techniques' ten days ago after your quantitative-methods module was cancelled, and all four laboratory sections show as full on the portal. The module is required for your programme and for graduating on time. You also missed the biosafety induction, which ran before your transfer was processed, though the online version remains open until the end of the month. Your programme leader has written a note confirming the module is compulsory for your cohort. You will email the laboratory supervisor to ask whether a place can be found and whether the online induction counts.",
    keyPoints: [
      "Explain why you joined the module late.",
      "Ask whether any of the four sections can take one more student.",
      "Ask whether the online biosafety induction is accepted.",
      "Mention your programme leader's supporting note.",
    ],
    wordBand: { min: 55, max: 140 },
    difficulty: 4,
    estimatedMinutes: 12,
    instructions:
      "Write one email to the laboratory supervisor asking for a place in a full laboratory section and about the online induction, explaining your late arrival and covering every key point.",
    taskRequirements: [
      "Explain the cancelled module that forced the late transfer.",
      "State clearly why the module cannot wait a term.",
      "Ask about section availability and the induction together.",
      "Offer the programme leader's note as supporting evidence.",
    ],
    timeGuidance: "Twelve minutes: three listing the facts, seven writing, two checking.",
    modelResponse:
      "Dear Ms Okoro,\n\nI switched into 'Molecular Techniques' ten days ago after my quantitative-methods module was cancelled, and I am writing because all four laboratory sections currently show as full. The module is required for my programme, so waiting a term would delay my graduation, and my programme leader has written a note confirming this.\n\nTwo questions, if I may. Is there any section that could take one more student, even on a waiting-list basis? And does the online biosafety induction count in place of the session I missed before my transfer was processed? The online version remains open until the end of the month, and I would complete it immediately.\n\nI can send the programme leader's note today.\n\nThank you for your time.\n\nKind regards,\nAyesha Khan\nBiotechnology, Year 3",
    responseAnalysis:
      "The model makes the stakes clear before it asks for anything — a required module, a delayed graduation, a confirming note — and then limits itself to two answerable questions. The promise to complete the online induction immediately shows the writer is removing obstacles, not adding them.",
    usefulExpressions: [
      "I am writing because all four laboratory sections currently show as full",
      "Two questions, if I may.",
      "even on a waiting-list basis",
      "I can send the programme leader's note today.",
    ],
    grammarObservations: [
      "Would in would delay projects the consequence of waiting one term.",
      "Does the induction count asks about a rule, not a favour.",
    ],
    commonMistakes: [
      "Asking for a place without proving the module is required.",
      "Leaving the missed induction unmentioned until the first session.",
    ],
    independentAssignment:
      "Write the follow-up email confirming which section you joined and that the induction certificate is attached.",
    vocabulary: [
      { word: "induction", partOfSpeech: "noun", definition: "the training that introduces new workers to a place's rules" },
      { word: "sections", partOfSpeech: "noun", definition: "the smaller class groups a module is taught in" },
      { word: "transfer", partOfSpeech: "noun", definition: "an official move between modules or institutions" },
      { word: "required", partOfSpeech: "adjective", definition: "necessary for completing a programme" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-44",
    title: "Requesting home access to licensed software",
    purpose: "request",
    recipient: "IT help desk",
    scenario:
      "Your dissertation requires the statistics package 'StataLine', whose university licence covers the laboratory machines only. You spend Tuesdays and Thursdays at home caring for your grandmother, which the department knows, and your analysis deadlines fall on both kinds of day. The licence office website mentions a 'remote-desktop option' and a limited number of home installations for taught students, without explaining how to apply. Your supervisor, Dr Walsh, has already emailed to say the software is essential for your chapter on regional data. You will email the IT help desk to request either arrangement, with your supervisor's support noted.",
    keyPoints: [
      "Request a home installation or remote-desktop access to StataLine.",
      "Explain the caring days that keep you off campus.",
      "Note your supervisor's support for the request.",
      "Offer to sign any usage agreement the licence requires.",
    ],
    wordBand: { min: 55, max: 140 },
    difficulty: 4,
    estimatedMinutes: 12,
    instructions:
      "Write one email to the IT help desk requesting home access to the statistics software, explaining your situation and covering every key point.",
    taskRequirements: [
      "Name the software and the two access options you know of.",
      "Give the caring arrangement as the reason for needing home access.",
      "Refer to your supervisor's email of support.",
      "Offer to complete any licence agreement immediately.",
    ],
    timeGuidance: "Twelve minutes: three assembling the licence details, seven writing, two checking.",
    modelResponse:
      "Dear IT Help Desk,\n\nI would like to request home access to the statistics package StataLine for my dissertation. The university licence currently covers the laboratory machines only, but I spend Tuesdays and Thursdays at home caring for my grandmother, and my analysis deadlines fall on both kinds of day. My supervisor, Dr Walsh, has emailed to confirm that the software is essential for my regional-data chapter.\n\nThe licence office website mentions a remote-desktop option and a limited number of home installations for taught students, but not how to apply for either. Could you advise which of the two options would suit my situation, and what the application involves? I am glad to sign any usage agreement the licence requires and to install whatever security software is needed.\n\nThank you for your help.\n\nKind regards,\nIbrahim Diallo\nGeography, Year 4",
    responseAnalysis:
      "The model does the licence office's homework for it: both access routes are named, the constraint that rules out laboratories is explained in one sentence, and the supervisor's confirmation converts preference into necessity. The closing offer to sign and install anything removes the last excuse for delay.",
    usefulExpressions: [
      "I would like to request home access to…",
      "Could you tell me which of the two would suit my situation?",
      "I am glad to sign any usage agreement…",
      "Thank you for your help.",
    ],
    grammarObservations: [
      "Either pins the request to two known options rather than an open wish.",
      "Whatever security software is needed leaves the conditions open generously.",
    ],
    commonMistakes: [
      "Installing pirated or borrowed copies instead of asking for the licence.",
      "Requesting the software without explaining why laboratory access fails.",
    ],
    independentAssignment:
      "Write the follow-up email confirming the installation worked and reporting the licence number you were given.",
    vocabulary: [
      { word: "licence", partOfSpeech: "noun", definition: "official permission to use software or facilities" },
      { word: "installations", partOfSpeech: "noun", definition: "acts of setting up software on a machine" },
      { word: "agreement", partOfSpeech: "noun", definition: "a document setting conditions both sides accept" },
      { word: "essential", partOfSpeech: "adjective", definition: "absolutely necessary for the purpose" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-45",
    title: "Explaining why you must reduce club duties",
    purpose: "explanation",
    recipient: "club president",
    scenario:
      "You are the events officer of the baking society, running the weekly Thursday stall and the monthly workshop. This term your engineering programme added two extra laboratory afternoons, and your Monday is now full until seven. You can no longer run the stall every week, and you know the society depends on it for funds. Rather than resign outright, you want to explain the situation to the president, propose staying on until a replacement is trained, and hand over the supplier contacts neatly.",
    keyPoints: [
      "Explain the timetable change that blocks your duties.",
      "Say which duties you can no longer perform.",
      "Propose staying until a replacement is trained.",
      "Describe the handover you will prepare.",
    ],
    wordBand: { min: 45, max: 105 },
    difficulty: 2,
    estimatedMinutes: 10,
    instructions:
      "Write one email to the club president explaining why you must step back from your society duties, proposing a handover plan and covering every key point.",
    taskRequirements: [
      "Open warmly, as to a fellow committee member.",
      "Give the timetable change as the honest reason.",
      "Name the duties that must go and any you can keep.",
      "Propose the handover with dates or items.",
    ],
    timeGuidance: "Ten minutes: three planning the handover list, five writing, two checking warmth.",
    modelResponse:
      "Hi Imani,\n\nI need to explain a change in my circumstances. Engineering added two laboratory afternoons this term, and my Monday now runs until seven, so I can no longer run the Thursday stall every week — and I know how much the society's funds depend on it.\n\nRather than resign outright, I would like to stay on until a replacement is trained. I can keep the monthly workshop for now, prepare a one-page guide to the stall, and prepare a supplier handover in a shared document by the end of the month.\n\nBest wishes,\nTomas Lima\nBaking Society, events officer",
    responseAnalysis:
      "The model explains before it retreats: the timetable facts come first, then the honest admission about the stall, and only then the plan. Keeping the workshop while surrendering the stall shows the writer is rebalancing, not abandoning, and the handover items are named and dated.",
    usefulExpressions: [
      "I need to explain a change in my circumstances.",
      "Rather than resign outright, I would like to…",
      "I can keep the monthly workshop for now",
      "hand over the supplier contacts",
    ],
    grammarObservations: [
      "No longer marks the exact moment an ongoing duty becomes impossible.",
      "Parallel verbs keep, prepare and hand list the handover compactly.",
    ],
    commonMistakes: [
      "Resigning in one line with no handover, which strands the committee.",
      "Hiding the real reason, which invites rumours and worry.",
    ],
    independentAssignment:
      "Write the announcement email to the whole society introducing the new events officer and the handover date.",
    vocabulary: [
      { word: "circumstances", partOfSpeech: "noun", definition: "the facts of a person's current situation" },
      { word: "handover", partOfSpeech: "noun", definition: "the organised transfer of a role to someone else" },
      { word: "stall", partOfSpeech: "noun", definition: "a small stand where goods are sold" },
      { word: "resign", partOfSpeech: "verb", definition: "to give up an official role" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-46",
    title: "Arranging a make-up laboratory session",
    purpose: "scheduling",
    recipient: "laboratory supervisor",
    scenario:
      "You missed Tuesday's microbiology laboratory because of a hospital appointment that ran long, and the module rules require the practical work to be completed within two weeks. Two classmates missed the same session for different reasons, and the supervisor's office says make-up practicals run only when a small group can be assembled. You are free on Thursday and Friday afternoons, and one classmate is free only on Fridays. You will email the supervisor to propose a joint make-up and ask what paperwork the module requires.",
    keyPoints: [
      "Explain the appointment that made you miss the lab.",
      "Note the two classmates who need the same session.",
      "Propose Friday afternoon as the time that suits all three.",
      "Ask what paperwork the module requires for a make-up.",
    ],
    wordBand: { min: 55, max: 140 },
    difficulty: 4,
    estimatedMinutes: 12,
    instructions:
      "Write one email to the laboratory supervisor proposing a joint make-up laboratory session, explaining the situation and covering every key point.",
    taskRequirements: [
      "State the missed session and its two-week completion rule.",
      "Mention the two classmates and their constraints.",
      "Propose a specific day that fits all three students.",
      "Ask about forms or signatures before the session.",
    ],
    timeGuidance: "Twelve minutes: three reconciling three timetables, seven writing, two checking.",
    modelResponse:
      "Dear Ms Okoro,\n\nI missed Tuesday's microbiology laboratory because a hospital appointment ran long, and I understand the module rules give me two weeks to complete the practical work. Two classmates missed the same session for different reasons, and I believe your office runs make-up practicals only when a small group can be assembled.\n\nWould a joint session be possible on a Friday afternoon? I am free on Thursdays and Fridays, and one of the two classmates can only manage Fridays, so Friday seems the fairest day for all three of us.\n\nCould you also tell me what paperwork the module requires — a medical note for my file, or a form the three of us sign together?\n\nThank you for your help.\n\nKind regards,\nBeatriz Costa\nMicrobiology, Year 2",
    responseAnalysis:
      "The model assembles the make-up group for the supervisor: the three absences, their different causes and the one day that satisfies everyone are laid out before the request is made. Asking about paperwork in the same email prevents a second round of messages before the session can be booked.",
    usefulExpressions: [
      "I missed Tuesday's microbiology laboratory because…",
      "Would a joint session be possible on a Friday afternoon?",
      "so Friday seems the fairest day for all three of us",
      "Could you also tell me what paperwork the module requires?",
    ],
    grammarObservations: [
      "Modal can in can only manage states a constraint without complaint.",
      "Seems in Friday seems hedges the judgement while still proposing it.",
    ],
    commonMistakes: [
      "Asking for an individual make-up when the rule requires a group.",
      "Proposing days you have not checked with the other students.",
    ],
    independentAssignment:
      "Write the follow-up email to your two classmates confirming the agreed Friday and who brings what.",
    vocabulary: [
      { word: "make-up", partOfSpeech: "adjective", definition: "arranged to replace something that was missed" },
      { word: "practicals", partOfSpeech: "noun", definition: "laboratory sessions where techniques are practised" },
      { word: "assembled", partOfSpeech: "verb", definition: "brought together as a group" },
      { word: "paperwork", partOfSpeech: "noun", definition: "the forms a process officially requires" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-47",
    title: "Reporting an examination timetable clash",
    purpose: "problem",
    recipient: "registrar's office",
    scenario:
      "The examination timetable published on Friday lists your 'Hydrology' and 'German Language II' papers both on the twelfth of January at nine-thirty in the morning, in different halls. The regulations say clashes should be detected automatically and one paper rescheduled, but no such arrangement appears on your personalised timetable. Both departmental offices have confirmed the times are correct as published. Your student number appears on both module registrations, so the system should have matched them. You will email the registrar's office to report the clash and ask how it will be resolved.",
    keyPoints: [
      "Report the two exams set for the same date and time.",
      "Note that no automatic rescheduling has appeared.",
      "Mention that both departments confirmed the published times.",
      "Ask how and by when the clash will be resolved.",
    ],
    wordBand: { min: 50, max: 120 },
    difficulty: 3,
    estimatedMinutes: 11,
    instructions:
      "Write one email to the registrar's office reporting the examination clash precisely, noting what you have already checked and covering every key point.",
    taskRequirements: [
      "Give both module codes and the shared date and time.",
      "State that the automatic clash check seems to have failed.",
      "Report the confirmation you received from both offices.",
      "Ask for the resolution and its timing.",
    ],
    timeGuidance: "Eleven minutes: three checking the details, six writing, two checking.",
    modelResponse:
      "Dear Registrar's Office,\n\nI am writing to report a clash on the examination timetable published last Friday. My 'Hydrology' and 'German Language II' papers are both set for the twelfth of January at nine-thirty in the morning, in different halls, and my personalised timetable shows no rescheduled sitting for either.\n\nI have checked with both departmental offices, and each confirms its time is correct as published, so the automatic clash check appears to have missed this pair. My student number is 20242291.\n\nCould you tell me how the clash will be resolved, and by when, so I can plan my revision?\n\nThank you for your help.\n\nKind regards,\nNils Andersen\nEarth Sciences and German, Year 2",
    responseAnalysis:
      "The model reports the clash as a systems failure, not a complaint: the timetable facts, the missing automatic fix and the two departmental confirmations build a case the office can verify in minutes. Asking for the resolution date turns the problem into a task with a deadline.",
    usefulExpressions: [
      "I am writing to report a clash on…",
      "the automatic clash check appears to have missed this pair",
      "Could you tell me how the clash will be resolved, and by when?",
      "Thank you for your help.",
    ],
    grammarObservations: [
      "Appears to have missed softens the claim about the system's failure.",
      "Either with a negative covers both possible sittings at once.",
    ],
    commonMistakes: [
      "Assuming one department made a mistake and emailing it angrily.",
      "Reporting the clash without your student number or module codes.",
    ],
    independentAssignment:
      "Write the follow-up email confirming the rescheduled sitting you were offered and acknowledging the change.",
    vocabulary: [
      { word: "clash", partOfSpeech: "noun", definition: "a conflict between two scheduled events" },
      { word: "rescheduled", partOfSpeech: "adjective", definition: "moved to a new time" },
      { word: "sitting", partOfSpeech: "noun", definition: "one occasion when an exam is held" },
      { word: "personalised", partOfSpeech: "adjective", definition: "adjusted to one individual's record" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-48",
    title: "Suggesting better hay-fever stock levels",
    purpose: "suggestion",
    recipient: "campus pharmacy",
    scenario:
      "Every May the campus pharmacy runs out of the cheaper generic antihistamine tablets for about a fortnight, and students who need them daily either buy the expensive brand version or travel to a shop in town. You have hay fever yourself and missed the cheap supply last year, as did two people on your corridor. A friend at another campus says their pharmacy doubles its generic order from April and posts a shelf note when stock runs out. You will email the pharmacy with the suggestion.",
    keyPoints: [
      "Describe the May shortage and its effect on daily users.",
      "Suggest increasing the generic order from April.",
      "Suggest a shelf note when stock runs out.",
      "Mention the other campus's practice as evidence.",
    ],
    wordBand: { min: 50, max: 120 },
    difficulty: 3,
    estimatedMinutes: 11,
    instructions:
      "Write one email to the campus pharmacy suggesting how to avoid the May hay-fever shortage, supporting your idea with the other campus's practice and covering every key point.",
    taskRequirements: [
      "Describe the shortage pattern with its dates.",
      "Explain the two costly alternatives students face.",
      "Propose the larger April order and the shelf note.",
      "Cite the other campus pharmacy's example.",
    ],
    timeGuidance: "Eleven minutes: three noting the effects, six writing, two checking tone.",
    modelResponse:
      "Dear Campus Pharmacy,\n\nI would like to suggest a small change ahead of the hay-fever season. Every May the generic antihistamine tablets sell out for about a fortnight, and students who rely on a daily dose are left choosing between the expensive brand version and a trip into town — I missed the cheap supply myself last year, and so did two neighbours on my corridor.\n\nCould the pharmacy double its generic order from April, as I hear another campus pharmacy does, and post a simple shelf note when stock does run out? Both steps would save many students a frustrating walk.\n\nThank you for considering it.\n\nKind regards,\nLaura Berg\nBiology, Year 2",
    responseAnalysis:
      "The model turns a yearly annoyance into a two-part suggestion, each part cheap to implement. Personal experience — a missed supply, neighbours affected — shows the writer knows the demand, and the borrowed example from another campus proves the fix works rather than merely sounding nice.",
    usefulExpressions: [
      "I would like to suggest a small change ahead of…",
      "students who rely on a daily dose are left choosing between…",
      "Could the pharmacy double its generic order…",
      "Thank you for considering it.",
    ],
    grammarObservations: [
      "So did two neighbours is a short echo clause that adds witnesses.",
      "When stock does run out places the note exactly where it matters.",
    ],
    commonMistakes: [
      "Complaining about prices instead of proposing a supply fix.",
      "Suggesting ideas with no example of them working elsewhere.",
    ],
    independentAssignment:
      "Write a follow-up email thanking the pharmacy for the larger order and reporting whether stock lasted the season.",
    vocabulary: [
      { word: "generic", partOfSpeech: "adjective", definition: "not sold under a brand name, usually cheaper" },
      { word: "antihistamine", partOfSpeech: "noun", definition: "medicine that reduces allergy symptoms" },
      { word: "dose", partOfSpeech: "noun", definition: "one measured amount of a medicine" },
      { word: "fortnight", partOfSpeech: "noun", definition: "a period of two weeks" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-49",
    title: "Asking whether a book is in stock",
    purpose: "enquiry",
    recipient: "campus bookstore manager",
    scenario:
      "Your organic-chemistry module begins on the fourteenth of October, and the first assignment needs the textbook 'Organic Chemistry: A Guided Tour'. The bookstore's website shows no copies available and no arrival date. You want to know whether the shop itself has copies that the website misses, what the price is, and whether one could be held for a day while you come in to pay. You will email the bookstore manager with these questions.",
    keyPoints: [
      "Ask whether the shop has copies the website misses.",
      "Ask the price of the textbook.",
      "Ask whether a copy can be held for a day.",
      "Explain that the module starts on the fourteenth.",
    ],
    wordBand: { min: 40, max: 90 },
    difficulty: 1,
    estimatedMinutes: 8,
    instructions:
      "Write one short email to the bookstore manager asking about the textbook's availability and price, covering every key point politely.",
    taskRequirements: [
      "Give the book's title and your module's start date.",
      "Ask the three questions in order.",
      "Offer to come in quickly to pay.",
      "Close politely with your name and year.",
    ],
    timeGuidance: "Eight minutes: one to plan, five to write, two to check.",
    modelResponse:
      "Dear Bookstore Manager,\n\nMy organic-chemistry module starts on the fourteenth of October, and its first assignment needs 'Organic Chemistry: A Guided Tour'. Your website shows no copies and no arrival date. Does the shop itself have any that the website misses? Could you also tell me the price, and whether one copy could be held for a day while I come in to pay?\n\nThank you for your help.\n\nKind regards,\nRavi Nair\nChemistry, Year 1",
    responseAnalysis:
      "The model asks three small questions in a single short email and answers the manager's obvious counter-question — how urgent is it? — with the module's start date. Offering to come in and pay makes holding a copy a low-risk favour for the shop.",
    usefulExpressions: [
      "Your website shows no copies and no arrival date.",
      "Does the shop itself have any…?",
      "Could you also tell me the price…",
      "Thank you for your help.",
    ],
    grammarObservations: [
      "Any in questions replaces some when the quantity is unknown.",
      "While I come in to pay gives the holding period a purpose.",
    ],
    commonMistakes: [
      "Asking to reserve a book without saying when you can pay.",
      "Forgetting the title, which makes any search impossible.",
    ],
    independentAssignment:
      "Write the follow-up email confirming you collected the book and thanking the manager for holding it.",
    vocabulary: [
      { word: "copies", partOfSpeech: "noun", definition: "individual books of the same title" },
      { word: "price", partOfSpeech: "noun", definition: "the amount of money something costs" },
      { word: "arrival", partOfSpeech: "noun", definition: "the act of stock reaching the shop" },
      { word: "held", partOfSpeech: "verb", definition: "kept aside temporarily for one buyer" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-50",
    title: "Asking a partner to send her notes",
    purpose: "request",
    recipient: "study-group member",
    scenario:
      "Your study-group partner Lena was due to bring her half of the presentation notes to this morning's session, but you missed the session because of a dentist appointment that overran. The seminar for Dr Okonkwo's module is on Monday, and you need her notes to prepare your own half so the two sections connect. She offered to send them last week, and you will now email to request them by tomorrow morning, promising your slides in return.",
    keyPoints: [
      "Explain why you missed this morning's session.",
      "Request her half of the notes by tomorrow morning.",
      "Mention that Monday's seminar needs both halves to connect.",
      "Promise to send your slides in return.",
    ],
    wordBand: { min: 40, max: 90 },
    difficulty: 1,
    estimatedMinutes: 8,
    instructions:
      "Write one short email to Lena requesting the presentation notes, explaining your absence briefly and covering every key point.",
    taskRequirements: [
      "Open in a friendly way, as between partners.",
      "Explain the dentist appointment in one sentence.",
      "State what you need and by when.",
      "Offer your own half of the work in exchange.",
    ],
    timeGuidance: "Eight minutes: one to plan, five to write, two to check.",
    modelResponse:
      "Hi Lena,\n\nSorry I missed this morning's session — my dentist appointment overran badly. Could you send your half of the presentation notes by tomorrow morning if you can? Our seminar is on Monday, and I need your section to prepare mine so the two halves connect properly.\n\nI will send you my finished slides tonight in return, so you can see where the join comes.\n\nThanks so much!\n\nBest,\nJulia Costa\nEducation Studies, Year 2",
    responseAnalysis:
      "The model apologises once, briefly, and then gets to business: what is needed, by when, and why the deadline is real. Promising the slides tonight converts the request into an exchange between equals, which is the right register for a partner, not a subordinate.",
    usefulExpressions: [
      "Sorry I missed this morning's session —",
      "Could you send your half of the notes by tomorrow morning?",
      "I will send you my finished slides tonight in return",
      "Thanks so much!",
    ],
    grammarObservations: [
      "If you can after a deadline softens the request to a partner.",
      "So introduces the reason why the two halves must connect.",
    ],
    commonMistakes: [
      "Blaming the partner for not sending the notes sooner.",
      "Requesting without offering anything back in a two-person team.",
    ],
    independentAssignment:
      "Write the reply Lena might send, attaching her notes and confirming the order of the two sections.",
    vocabulary: [
      { word: "halves", partOfSpeech: "noun", definition: "the two equal parts of a shared piece of work" },
      { word: "section", partOfSpeech: "noun", definition: "one part of a longer piece of work" },
      { word: "overran", partOfSpeech: "verb", definition: "lasted longer than planned" },
      { word: "join", partOfSpeech: "noun", definition: "the point where two parts meet" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-51",
    title: "Explaining a withdrawal and your status",
    purpose: "explanation",
    recipient: "registrar's office",
    scenario:
      "Last Friday you withdrew from 'Advanced Thermodynamics' on medical grounds, supported by a doctor's letter the registry has already received. You now carry three modules, and as an international student your visa conditions require full-time enrolment, which your programme defines as three modules minimum. The withdrawal letter you received says nothing about your status. Your programme leader believes the three modules satisfy the rule, but the visa office needs it in writing. You will email the registrar's office to explain the withdrawal, confirm that your enrolment still counts as full-time, and ask what documentation keeps your record compliant.",
    keyPoints: [
      "Explain the medically supported withdrawal and its date.",
      "State the three modules you now carry.",
      "Ask whether your enrolment still counts as full-time.",
      "Ask what documentation keeps your visa record compliant.",
    ],
    wordBand: { min: 55, max: 140 },
    difficulty: 4,
    estimatedMinutes: 12,
    instructions:
      "Write one email to the registrar's office explaining your withdrawal and asking how your full-time status is now recorded, covering every key point precisely.",
    taskRequirements: [
      "Give the module, the date and the medical grounds.",
      "Quote the programme's own definition of full-time.",
      "Ask the two status questions separately.",
      "Offer the doctor's letter and programme leader's note.",
    ],
    timeGuidance: "Twelve minutes: four assembling the visa details, six writing, two checking.",
    modelResponse:
      "Dear Registrar's Office,\n\nLast Friday I withdrew from 'Advanced Thermodynamics' on medical grounds, supported by a doctor's letter the registry has already received. I want to check one consequence before it becomes a problem.\n\nAs an international student, my visa conditions require full-time enrolment, which my programme defines as three modules minimum. I now carry exactly three modules, and my programme leader believes this satisfies the rule, but the immigration office will need the university's confirmation in writing.\n\nTwo questions. Does my current enrolment still count as full-time after the withdrawal? And what documentation should sit in my record to show the reduced load was medically approved?\n\nI can send the doctor's letter and my programme leader's note today.\n\nThank you for your time.\n\nKind regards,\nVikram Mehta\nMechanical Engineering, Year 3",
    responseAnalysis:
      "The model explains the withdrawal in its first sentence and then frames the visa question as a check the office can make from records it already holds. Quoting the programme's own three-module definition pins the standard, and the two questions are separated so each can be answered with a yes or a form number.",
    usefulExpressions: [
      "I want to check one consequence before it becomes a problem.",
      "which my programme defines as three modules minimum",
      "Does my current enrolment still count as full-time?",
      "I can send the doctor's letter…",
    ],
    grammarObservations: [
      "Which introduces the programme's definition as the governing standard.",
      "Should in what documentation should sit asks about proper practice.",
    ],
    commonMistakes: [
      "Assuming three modules are fine without written confirmation.",
      "Explaining the illness at length instead of the status question.",
    ],
    independentAssignment:
      "Write the short email you would forward to the immigration office once the university confirms your full-time status.",
    vocabulary: [
      { word: "withdrawal", partOfSpeech: "noun", definition: "the official act of leaving a module" },
      { word: "enrolment", partOfSpeech: "noun", definition: "your official registration as a student" },
      { word: "compliant", partOfSpeech: "adjective", definition: "meeting all the rules that apply" },
      { word: "consequence", partOfSpeech: "noun", definition: "a result that follows from an action" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-52",
    title: "Booking an allergy consultation slot",
    purpose: "scheduling",
    recipient: "campus pharmacy",
    scenario:
      "The campus pharmacy runs twenty-minute allergy consultations on weekday afternoons. Your lectures end at ten past two, and you must catch the 4:15 bus to your part-time job, so the workable window is tight. You would like a slot on Tuesday or Thursday, and you also want to know whether to bring your previous prescription box, which shows the tablets that stopped working last spring. The pharmacy's online diary shows free slots on both days but cannot answer questions. You will email the pharmacy to propose two times and settle the practical details.",
    keyPoints: [
      "Request a consultation on Tuesday or Thursday afternoon.",
      "Explain the window between 2:10 and 4:15.",
      "Ask whether to bring the previous prescription box.",
      "Offer to take the earliest available slot.",
    ],
    wordBand: { min: 50, max: 120 },
    difficulty: 3,
    estimatedMinutes: 10,
    instructions:
      "Write one email to the campus pharmacy requesting an allergy consultation, proposing your two possible afternoons and covering every key point.",
    taskRequirements: [
      "State the service you want and your tight window.",
      "Propose Tuesday or Thursday with the reason.",
      "Ask about the prescription box in advance.",
      "Offer flexibility within the two afternoons.",
    ],
    timeGuidance: "Ten minutes: two checking the bus times, six writing, two checking.",
    modelResponse:
      "Dear Campus Pharmacy,\n\nI would like to book one of your twenty-minute allergy consultations, if possible on a Tuesday or Thursday afternoon. My lectures finish at ten past two, and I need to catch the 4:15 bus to my part-time job, so the window between those times is the only one I can manage.\n\nWould either day have a slot in that window? I am also unsure whether to bring my previous prescription box, which shows the tablets that stopped working last spring, or just the details of them.\n\nI will happily take the earliest slot on either day.\n\nThank you for your help.\n\nKind regards,\nGrace Mensah\nNutrition, Year 2",
    responseAnalysis:
      "The model turns a complicated availability problem into a single clear window, then proposes two days inside it. Asking about the prescription box in advance saves the consultation time itself for the allergy questions, and the willingness to take the earliest slot signals flexibility without abandoning the bus constraint.",
    usefulExpressions: [
      "I would like to book one of your… consultations",
      "the window between those times is the only one I can manage",
      "Would either day have a slot in that window?",
      "I will happily take the earliest slot…",
    ],
    grammarObservations: [
      "Whether to bring balances a question between two courses of action.",
      "Either day treats the two afternoons as one open choice.",
    ],
    commonMistakes: [
      "Booking a slot you cannot reach because of transport.",
      "Arriving without the previous prescription and wasting the session.",
    ],
    independentAssignment:
      "Write the confirmation email after the consultation, summarising the pharmacist's advice in two short lines.",
    vocabulary: [
      { word: "consultation", partOfSpeech: "noun", definition: "a meeting with a professional for advice" },
      { word: "prescription", partOfSpeech: "noun", definition: "a doctor's written order for medicine" },
      { word: "slot", partOfSpeech: "noun", definition: "a reserved time for an appointment" },
      { word: "window", partOfSpeech: "noun", definition: "a short period when something is possible" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-53",
    title: "Reporting the flooded changing rooms",
    purpose: "problem",
    recipient: "gymnasium facilities manager",
    scenario:
      "The shower drains in the west-wing changing rooms of the sports centre have been backing up since Thursday. Grey water now spreads across the floor near the lockers every evening, one wet-floor sign is the only response, and the evening swimming sessions send forty or more people through the area. Last night you slipped near the benches and caught the rail to stay upright. Two other swimmers mentioned near-misses of their own. You will email the gymnasium facilities manager with the details and ask for repairs and a temporary closure.",
    keyPoints: [
      "Describe the backing-up drains and the spreading water.",
      "Report the near-slip and the other swimmers' near-misses.",
      "Note how many people use the area each evening.",
      "Request a repair timeline and a temporary closure of the bays.",
    ],
    wordBand: { min: 55, max: 140 },
    difficulty: 4,
    estimatedMinutes: 12,
    instructions:
      "Write one email to the gymnasium facilities manager reporting the flooding in the west-wing changing rooms, including the safety details and covering every key point.",
    taskRequirements: [
      "Give the location and the day the problem started.",
      "Describe the water, the floor and the single sign.",
      "Report your slip and the other near-misses factually.",
      "Ask for two things: repair timing and temporary closure.",
    ],
    timeGuidance: "Twelve minutes: three ordering the safety facts, seven writing, two checking tone.",
    modelResponse:
      "Dear Facilities Manager,\n\nI am writing to report a safety problem in the west-wing changing rooms at the sports centre. Since Thursday, the shower drains have been backing up, and grey water now spreads across the floor near the lockers every evening. The only response so far has been a single wet-floor sign.\n\nLast night I slipped on the wet floor near the benches and caught the rail to stay upright, and two other swimmers have told me of near-misses of their own. With forty or more people passing through after the evening sessions, the risk is growing nightly.\n\nCould you tell me when the repair will happen, and whether the affected shower bays can be closed off in the meantime?\n\nThank you for acting on this.\n\nKind regards,\nFiona Walsh\nSports Centre member, evening swim",
    responseAnalysis:
      "The model reports a safety problem the way facilities staff need it: location, start date, what has and has not been done, then injuries and near-misses as evidence of risk. The two requests — repair date and temporary closure — are modest and specific, which makes them hard to defer.",
    usefulExpressions: [
      "I am writing to report a safety problem in…",
      "The only response so far has been…",
      "and two other swimmers have told me of near-misses",
      "Could you tell me when the repair will happen?",
    ],
    grammarObservations: [
      "Present perfect have been backing up and have told report ongoing situations.",
      "Whether the bays can be closed frames closure as a question, not an order.",
    ],
    commonMistakes: [
      "Exaggerating a near-slip into an injury, which destroys credibility.",
      "Reporting the mess without the location details staff need.",
    ],
    independentAssignment:
      "Write a short follow-up reporting that the repair solved the flooding and thanking the manager for closing the bays.",
    vocabulary: [
      { word: "drains", partOfSpeech: "noun", definition: "pipes that carry waste water away" },
      { word: "near-misses", partOfSpeech: "noun", definition: "accidents that almost happened" },
      { word: "bays", partOfSpeech: "noun", definition: "separate sections of showers or lockers" },
      { word: "closure", partOfSpeech: "noun", definition: "the act of shutting a place or area" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-54",
    title: "Suggesting a sponsorship session at the fair",
    purpose: "suggestion",
    recipient: "career services",
    scenario:
      "The annual careers fair in March hosts about sixty employer stands, but almost all are local firms that cannot sponsor work visas. Many international students on your course are seeking placements that offer sponsorship, and they end up skipping the fair altogether. The international students' officer supports the idea of a dedicated forty-five-minute talk on sponsorship rules, plus a marked area for sponsors-certified employers. A quick poll of your course found twenty-two of thirty respondents wanted exactly this. You will email career services with the proposal and the evidence.",
    keyPoints: [
      "Describe why many international students skip the fair.",
      "Propose a forty-five-minute talk on sponsorship rules.",
      "Propose a marked area for sponsors-certified employers.",
      "Give the poll result and the officer's support as evidence.",
    ],
    wordBand: { min: 55, max: 140 },
    difficulty: 4,
    estimatedMinutes: 12,
    instructions:
      "Write one email to career services proposing a sponsorship session at the careers fair, presenting your evidence and covering every key point.",
    taskRequirements: [
      "Establish the gap: local firms, no sponsorship options.",
      "Propose the talk and the marked area separately.",
      "Quote the poll figures precisely.",
      "Note the international students' officer's support.",
    ],
    timeGuidance: "Twelve minutes: three ordering evidence and proposal, seven writing, two checking tone.",
    modelResponse:
      "Dear Career Services,\n\nI am writing with a suggestion for the March careers fair, drawn from what international students on my course keep saying. The fair's stands are almost entirely local firms that cannot sponsor work visas, so students who need sponsored placements simply stop attending — a quick poll of my course found twenty-two of thirty respondents had given up on the fair for exactly this reason.\n\nTwo changes might bring them back. A forty-five-minute talk on sponsorship rules, perhaps from an immigration adviser, would answer the questions we all share. And a marked area for sponsors-certified employers would let students plan their hour at the fair around firms they can actually work for. The international students' officer supports both ideas.\n\nI would gladly share the poll responses in full.\n\nKind regards,\nZainab Farah\nComputer Science, Year 3",
    responseAnalysis:
      "The model lets the students' own words carry the argument — a poll with real numbers, an officer's backing — and then proposes two separable changes, each cheap to run. Framing the marked area as a planning tool for students shows career services a benefit to the fair, not a burden on it.",
    usefulExpressions: [
      "I am writing with a suggestion for…",
      "drawn from what international students keep saying",
      "Two changes might bring them back.",
      "I would gladly share the poll responses in full.",
    ],
    grammarObservations: [
      "Might in might bring them back keeps the prediction modest.",
      "Had given up is past perfect inside reported speech after found.",
    ],
    commonMistakes: [
      "Blaming career services for policies that only employers control.",
      "Proposing the session without evidence that students want it.",
    ],
    independentAssignment:
      "Write the follow-up email reporting how many students attended the sponsorship talk and what they asked.",
    vocabulary: [
      { word: "sponsorship", partOfSpeech: "noun", definition: "an employer's legal support for a work visa" },
      { word: "respondents", partOfSpeech: "noun", definition: "people who answer a survey or poll" },
      { word: "dedicated", partOfSpeech: "adjective", definition: "set aside for one specific purpose" },
      { word: "placements", partOfSpeech: "noun", definition: "periods of work experience in a degree programme" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-55",
    title: "Asking about summer storage and early arrival",
    purpose: "enquiry",
    recipient: "housing office",
    scenario:
      "Your tenancy in Willow Court ends on the twentieth of June, but you fly home and return only on the first of September for the new academic year. Between terms you must decide what to do with four boxes of belongings and your bicycle. Your new contract for the following year starts on the first of September, and your flight actually lands three days early, on the twenty-ninth of August. You will email the housing office to ask about summer storage costs, early-arrival charges, and whether subletting your room for July to a conference assistant is permitted.",
    keyPoints: [
      "Ask about storing four boxes and a bicycle over the summer, with costs.",
      "Ask about moving in on the twenty-ninth of August and the nightly charge.",
      "Ask whether subletting the room for July is permitted.",
      "Give your room number and both contract dates.",
    ],
    wordBand: { min: 60, max: 160 },
    difficulty: 5,
    estimatedMinutes: 14,
    instructions:
      "Write one email to the housing office asking your three questions about the summer period between contracts, giving your contract details and covering every key point.",
    taskRequirements: [
      "Give your room, your current contract end and the September start.",
      "Ask about storage for the boxes and the bicycle, with costs.",
      "Ask about the three early nights and their charge.",
      "Ask about the July sublet and any approval it needs.",
    ],
    timeGuidance: "Allow fourteen minutes: four sorting the three questions, eight writing, two checking.",
    modelResponse:
      "Dear Housing Office,\n\nI am writing about the summer gap between my two contracts. My current tenancy in Willow Court, room 118, ends on the twentieth of June; my new contract begins on the first of September, but my flight lands on the twenty-ninth of August, three days early. Three questions, please.\n\nFirst, can the office store four boxes of belongings and a bicycle over the summer, and what would the charge be? Second, could I move into my new room on the twenty-ninth of August, and is there a nightly rate for the three extra nights? Third, if I sublet the room for July to a conference assistant on the university's approved list, is that permitted under the tenancy terms, and whose approval would it need?\n\nI can pay any storage or early-arrival charges immediately.\n\nThank you for your help.\n\nKind regards,\nHana Kim\nWillow Court, room 118",
    responseAnalysis:
      "The model pins every question to dates and numbers — room, two contracts, one landing day — so the office can price the summer in a single reply. Numbering the three requests keeps them separable, and the closing promise to pay immediately answers the office's likeliest hesitation before it is raised.",
    usefulExpressions: [
      "I am writing about the summer gap between…",
      "Three questions, please.",
      "is there a nightly rate for the three extra nights?",
      "I can pay any storage or early-arrival charges immediately.",
    ],
    grammarObservations: [
      "Could in could I move requests permission rather than mere ability.",
      "Whose approval turns an open requirement into a concrete question.",
    ],
    commonMistakes: [
      "Bundling storage, arrival and subletting into one vague paragraph.",
      "Forgetting that the flight lands before the contract starts.",
    ],
    independentAssignment:
      "Write the follow-up confirming the storage booking and the early-arrival payment once the office replies.",
    vocabulary: [
      { word: "tenancy", partOfSpeech: "noun", definition: "the legal right to live in a rented room" },
      { word: "sublet", partOfSpeech: "verb", definition: "to rent your room to someone else temporarily" },
      { word: "storage", partOfSpeech: "noun", definition: "a place or service for keeping goods safely" },
      { word: "nightly", partOfSpeech: "adjective", definition: "charged or occurring per night" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-56",
    title: "Requesting a correction to your recorded name",
    purpose: "request",
    recipient: "registrar's office",
    scenario:
      "Your legal name is Yekaterina Soboleva, but the university records show 'Ekaterina Sobolava' — the initial letter is missing and the second name is misspelled. You discovered the errors when the examination entry card arrived last week, and graduation diplomas are printed from these records in six weeks. Changing a name requires a form, identity verification, and a departmental signature, and you must complete all of it in time for the print run. You will email the registrar's office to request the correction, with your passport ready as evidence.",
    keyPoints: [
      "Request the correction of both spelling errors, with exact spellings given.",
      "Explain the diploma print run in six weeks as the deadline.",
      "Offer your passport for identity verification, in person if needed.",
      "Ask which form the correction requires and who must sign it.",
    ],
    wordBand: { min: 60, max: 160 },
    difficulty: 5,
    estimatedMinutes: 14,
    instructions:
      "Write one email to the registrar's office requesting a correction to the spelling of your name before diplomas are printed, giving both spellings exactly and covering every key point.",
    taskRequirements: [
      "State both the wrong and the correct spelling exactly.",
      "Explain when you found the error and why it is urgent.",
      "Offer the passport and in-person verification.",
      "Ask about the form, the signature and the safe deadline.",
    ],
    timeGuidance: "Allow fourteen minutes: four checking every spelling, eight writing, two checking the deadline.",
    modelResponse:
      "Dear Registrar's Office,\n\nI am writing to request a correction to the spelling of my name in the university records. My legal name is Yekaterina Soboleva, but the records show 'Ekaterina Sobolava': the initial Y is missing, and Soboleva has become Sobolava. I found both errors on my examination entry card last week.\n\nThe reason for writing now is the graduation print run: my understanding is that diplomas are printed from the records in six weeks, and I would like the correction completed safely before then. My passport carries the correct spelling, and I can present the original at your desk on any weekday, or send a certified copy if that is sufficient.\n\nCould you tell me which form the correction requires, whether a departmental signature is needed, and by what date the request should reach you?\n\nThank you for your help.\n\nYours faithfully,\nYekaterina Soboleva\nPhysics, Year 4",
    responseAnalysis:
      "The model spells out both versions of the name letter by letter, because a correction request is useless unless the target spelling is unambiguous. The deadline is framed around the print run rather than personal worry, the passport is offered in two acceptable forms, and the final questions ask for a safe date rather than demanding one.",
    usefulExpressions: [
      "I am writing to request a correction to…",
      "the initial Y is missing, and Soboleva has become Sobolava",
      "I can present the original at your desk on any weekday",
      "by what date the request should reach you?",
    ],
    grammarObservations: [
      "Present simple verbs state the two spellings as permanent facts.",
      "Whether inside tell me keeps indirect questions in statement order.",
    ],
    commonMistakes: [
      "Writing the correct name without quoting the wrong one it replaces.",
      "Leaving the correction until after the diploma print run.",
    ],
    independentAssignment:
      "Write the short thank-you email after the correction is confirmed, asking for an updated student card.",
    vocabulary: [
      { word: "correction", partOfSpeech: "noun", definition: "an official change that fixes an error" },
      { word: "verification", partOfSpeech: "noun", definition: "the process of proving identity or truth" },
      { word: "certified", partOfSpeech: "adjective", definition: "officially confirmed as a true copy" },
      { word: "diplomas", partOfSpeech: "noun", definition: "the certificates awarded at graduation" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-57",
    title: "Explaining a delay in your data collection",
    purpose: "explanation",
    recipient: "dissertation supervisor",
    scenario:
      "Your dissertation studies sleep quality in student athletes and planned sixty questionnaire responses by the middle of March. Five weeks in, you have nineteen, because the athletics clubs paused their training sessions during the indoor championships and your access windows vanished with them. Your submission date is the fifteenth of June. You must now explain the shortfall to your supervisor, Dr Lindqvist, present a recovery plan — two additional clubs, an extended collection window, and an ethics amendment for an online version — and propose a revised timeline. You have already spoken to both new clubs and they have agreed in principle.",
    keyPoints: [
      "Explain the recruitment shortfall and what caused it.",
      "Present the three-part recovery plan.",
      "Give the revised timeline with the new submission date.",
      "Ask for comments on the ethics amendment before submitting it.",
    ],
    wordBand: { min: 60, max: 160 },
    difficulty: 5,
    estimatedMinutes: 15,
    instructions:
      "Write one email to Dr Lindqvist explaining the delay in your data collection, presenting the recovery plan and revised timeline, and covering every key point.",
    taskRequirements: [
      "Give the planned and actual numbers of responses.",
      "Explain the championships pause as the cause.",
      "Set out the recovery plan in labelled parts.",
      "Ask for feedback on the ethics amendment.",
    ],
    timeGuidance: "Allow fifteen minutes: five organising plan and timeline, eight writing, two checking dates.",
    modelResponse:
      "Dear Dr Lindqvist,\n\nI am writing to explain a delay in my dissertation data collection and to set out how I plan to recover. The project planned sixty questionnaire responses on sleep quality by the middle of March; five weeks in, I have nineteen. The cause is external: the athletics clubs paused training during the indoor championships, and my agreed access windows vanished with the sessions.\n\nMy recovery plan has three parts. I have approached two additional clubs, both of which have agreed in principle to take part; I will extend the collection window to the end of April; and I will submit an ethics amendment for an online version of the questionnaire.\n\nWith those in place, I would begin analysis on the twentieth of April and submit on the fifteenth of June as planned. Could you comment on the ethics amendment before I submit it?\n\nWith best wishes,\nCormac Gallagher\nSport Science, Year 4",
    responseAnalysis:
      "The model reports bad news in the first paragraph and has a plan ready in the second, which is the order supervisors can work with. Numbers make the shortfall precise — sixty planned, nineteen collected — and the recovery plan's three parts each remove a specific obstacle, with the original submission date defended.",
    usefulExpressions: [
      "I am writing to explain a delay in… and to set out how I plan to recover.",
      "My recovery plan has three parts.",
      "both of which have agreed in principle",
      "Could you comment on… before I submit it?",
    ],
    grammarObservations: [
      "Past simple paused and vanished separate finished causes from present facts.",
      "Would in I would begin marks the timeline as proposed, not fixed.",
    ],
    commonMistakes: [
      "Reporting the delay with no recovery plan attached.",
      "Promising the original date without showing how the numbers recover.",
    ],
    independentAssignment:
      "Write the follow-up email attaching the completed ethics amendment and confirming the two clubs' start dates.",
    vocabulary: [
      { word: "shortfall", partOfSpeech: "noun", definition: "the amount by which a target is missed" },
      { word: "amendment", partOfSpeech: "noun", definition: "an official change to an approved plan" },
      { word: "recovery", partOfSpeech: "noun", definition: "a plan to get back on course after a setback" },
      { word: "questionnaire", partOfSpeech: "noun", definition: "a written set of questions used for collecting data" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-58",
    title: "Arranging a practice viva with two panellists",
    purpose: "scheduling",
    recipient: "department administrator",
    scenario:
      "Your master's viva examination is on the twenty-second, and programme rules require a practice viva with two academic staff members at least a week before. The two panellists your director of studies suggested, Dr Romero and Dr Chen, keep packed calendars, and seminar room 2.14 — the only room with the projector your slides need — is booked most mornings. You are free on the mornings of the eighth, the eleventh and the fourteenth, and in the afternoons of any day. You will email the department administrator, Ms Nkemelu, to ask her to coordinate a ninety-minute slot.",
    keyPoints: [
      "Explain the practice-viva requirement and its deadline.",
      "Name the two panellists and the room constraint.",
      "Propose the three morning windows that suit you.",
      "Ask her to coordinate the panellists and book the projector room.",
      "Offer to send calendar invitations once a slot is agreed.",
    ],
    wordBand: { min: 60, max: 160 },
    difficulty: 5,
    estimatedMinutes: 15,
    instructions:
      "Write one email to Ms Nkemelu asking her to coordinate your practice viva, naming the panellists, the room and your free windows, and covering every key point.",
    taskRequirements: [
      "State the requirement and the one-week deadline clearly.",
      "Name both panellists and explain the projector-room constraint.",
      "List your three morning windows, with afternoon flexibility.",
      "Ask her to negotiate with the panellists, not just to book.",
    ],
    timeGuidance: "Allow fifteen minutes: five mapping everyone's constraints, eight writing, two checking dates.",
    modelResponse:
      "Dear Ms Nkemelu,\n\nMy master's viva takes place on the twenty-second, and the programme requires a practice viva with two academic staff at least a week beforehand. Dr Romero and Dr Chen have been suggested as panellists, and I would be grateful for your help in coordinating a ninety-minute slot with them.\n\nOne constraint complicates the room: the session needs a projector for my slides, and seminar room 2.14, the only suitable one, is booked most mornings. I am free on the mornings of the eighth, the eleventh and the fourteenth; if none of those works for both panellists, any afternoon suits me.\n\nCould you find a slot that fits the panellists' calendars and book room 2.14, or tell me which windows they could manage so I can write to them directly? I will send calendar invitations the moment a time is agreed.\n\nThank you so much for your help.\n\nKind regards,\nPeter Nakamura\nMaster's candidate, Water Engineering",
    responseAnalysis:
      "The model hands the administrator a solvable puzzle: the deadline, the two names, the projector constraint and the writer's three windows are all on the table. The alternative request — tell me which windows work so I can write to them — ensures the email has a result even if a full service proves impossible, and the invitation promise closes the loop.",
    usefulExpressions: [
      "I would be grateful for your help in coordinating…",
      "if none of those works for both panellists, any afternoon suits me",
      "Could you find a slot that fits…",
      "I will send calendar invitations the moment a time is agreed.",
    ],
    grammarObservations: [
      "If none of those works keeps the fallback plan in one clause.",
      "The moment a time is agreed is a time clause with present simple.",
    ],
    commonMistakes: [
      "Asking for a booking without naming the panellists or the room.",
      "Leaving yourself no flexibility when calendars are packed.",
    ],
    independentAssignment:
      "Write the follow-up email to both panellists confirming the agreed slot and attaching your practice questions.",
    vocabulary: [
      { word: "viva", partOfSpeech: "noun", definition: "a spoken examination where candidates defend their work" },
      { word: "panellists", partOfSpeech: "noun", definition: "the examiners who sit on a panel" },
      { word: "coordinating", partOfSpeech: "verb", definition: "arranging several people's schedules into one plan" },
      { word: "constraint", partOfSpeech: "noun", definition: "a fact that limits the possible arrangements" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-59",
    title: "Reporting that your internship terms changed",
    purpose: "problem",
    recipient: "career services",
    scenario:
      "You were matched to a marketing-analytics internship through the university's placement scheme: twenty paid hours weekly, on Tuesdays and Thursdays, fitting around your lectures — the handbook promises placements are paid and timetabled around study. The host company's contract, which arrived yesterday, states a one-month unpaid 'training period', moves the hours to Monday-to-Friday evenings, and adds a non-compete clause the scheme never mentioned. The contract must be signed by the fifth. Two other students on the scheme report similar changes to their offers. You will email career services to report the mismatch and ask them to intervene.",
    keyPoints: [
      "List the three terms that changed against the scheme's promises.",
      "Give the sign-by date on the fifth as the deadline.",
      "Mention the other students reporting similar changes.",
      "Ask career services to contact the host or re-match you.",
    ],
    wordBand: { min: 60, max: 160 },
    difficulty: 5,
    estimatedMinutes: 15,
    instructions:
      "Write one email to career services reporting the mismatch between your internship contract and the placement scheme's terms, listing the changes precisely and covering every key point.",
    taskRequirements: [
      "Open by identifying the scheme and the placement.",
      "List the three changes against the promised terms.",
      "State the fifth as the deadline that makes it urgent.",
      "Make two requests: contact the host, or re-match you.",
    ],
    timeGuidance: "Allow fifteen minutes: five comparing contract with handbook, eight writing, two checking tone.",
    modelResponse:
      "Dear Career Services,\n\nI am writing to report a serious mismatch between my placement-scheme internship and the contract the host company sent me yesterday. The scheme matched me to a marketing-analytics placement of twenty paid hours weekly on Tuesdays and Thursdays, arranged around my lectures. The contract instead requires a one-month unpaid training period, moves the hours to Monday-to-Friday evenings — which collide with my teaching timetable — and adds a non-compete clause the scheme's handbook never mentioned.\n\nThe handbook promises that placements are paid and timetabled around study, so all three changes fall outside those terms. Two other students on the scheme tell me their offers were changed.\n\nThe contract must be signed by the fifth. Could your office contact the host company about restoring the agreed terms, or begin re-matching me to another placement? I can send the contract and the original offer email today.\n\nThank you for your help.\n\nKind regards,\nDaniyar Abdullayev\nBusiness Analytics, Year 3",
    responseAnalysis:
      "The model lines up promise against contract, term by term, which is the comparison career services must make anyway. The handbook's own words are quoted as the standard, the other affected student shows a pattern rather than one student's grievance, and the two requests give the office an exit that protects the writer either way.",
    usefulExpressions: [
      "I am writing to report a serious mismatch between…",
      "The contract instead requires…",
      "fall outside those terms",
      "Could your office contact the host company…",
    ],
    grammarObservations: [
      "Instead marks each contract term as a replacement for the promised one.",
      "Were changed is passive, reporting what happened without accusing a person.",
    ],
    commonMistakes: [
      "Signing the changed contract because the deadline feels close.",
      "Complaining about the company without citing the scheme's own terms.",
    ],
    independentAssignment:
      "Write the follow-up email reporting how career services resolved the mismatch and confirming your new placement terms.",
    vocabulary: [
      { word: "mismatch", partOfSpeech: "noun", definition: "a difference between two things that should agree" },
      { word: "placement", partOfSpeech: "noun", definition: "a job arranged as part of a study programme" },
      { word: "intervene", partOfSpeech: "verb", definition: "to step in to resolve a dispute" },
      { word: "restoring", partOfSpeech: "verb", definition: "bringing back to the original agreed state" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-60",
    title: "Proposing an emergency micro-loan scheme",
    purpose: "suggestion",
    recipient: "financial aid office",
    scenario:
      "International students sometimes face sudden costs — an emergency flight home, a deposit when a shared flat collapses — that their monthly transfers cannot absorb. The aid office's current route is a full application with a four-week decision, which helps nobody booking a flight tonight. You have surveyed the international students' forum: one hundred and twenty responses, and forty-one percent reported at least one such shock last year. You decide to email the financial aid office and propose an interest-free micro-loan pilot of up to three hundred units, repaid within a term.",
    keyPoints: [
      "Outline the sudden costs the current process cannot meet.",
      "Quote the survey figures as evidence of need.",
      "Propose the pilot: amount, interest-free terms, one-term repayment.",
      "Suggest a fast three-working-day decision window.",
      "Offer to share the survey data and help draft criteria.",
    ],
    wordBand: { min: 60, max: 160 },
    difficulty: 5,
    estimatedMinutes: 15,
    instructions:
      "Write one email to the financial aid office proposing an emergency micro-loan pilot for international students, presenting your survey evidence and covering every key point.",
    taskRequirements: [
      "Open with the gap: four-week decisions versus same-day crises.",
      "Give the survey's headline numbers precisely.",
      "Set out the pilot's terms: amount, interest, repayment window.",
      "Keep the tone collaborative, offering your help.",
    ],
    timeGuidance: "Allow fifteen minutes: five assembling the proposal and figures, eight writing, two checking tone.",
    modelResponse:
      "Dear Financial Aid Office,\n\nI am writing to propose a pilot scheme that would fill a gap your current process leaves open. International students sometimes face sudden costs — an emergency flight home, a deposit when a shared flat collapses — that monthly transfers cannot absorb, and the full aid application takes four weeks to decide.\n\nThe need is measurable: a survey I ran on the international students' forum collected one hundred and twenty responses, and forty-one percent reported at least one such shock last year.\n\nThe pilot I have in mind is small and contained: interest-free loans of up to three hundred units, repaid within the same term, decided within three working days, and reviewed after one year. A similar scheme at two partner universities reports repayment rates above ninety percent.\n\nI would gladly share the survey data in full and help draft the eligibility criteria.\n\nYours sincerely,\nLan Pham\nInternational Students' Forum, representative",
    responseAnalysis:
      "The model defines the gap before proposing the fix: four-week decisions against same-day shocks. The survey numbers give the office a reason to act beyond one student's opinion, the pilot's terms are specific enough to cost, and the partner-university repayment figure answers the obvious risk question before it is asked.",
    usefulExpressions: [
      "I am writing to propose a pilot scheme that…",
      "The need is measurable:",
      "repaid within the same term, decided within three working days",
      "I would gladly share the full survey data…",
    ],
    grammarObservations: [
      "Would fill and would share frame the proposal and the offer as hypotheses.",
      "Parallel past-participles repaid, decided and reviewed compress the pilot's terms.",
    ],
    commonMistakes: [
      "Proposing loans without addressing how repayment is secured.",
      "Presenting anecdote as evidence where numbers would persuade.",
    ],
    independentAssignment:
      "Write the follow-up email to the forum members reporting the office's response and what the pilot would require from applicants.",
    vocabulary: [
      { word: "pilot", partOfSpeech: "noun", definition: "a small trial of a scheme before wider use" },
      { word: "repaid", partOfSpeech: "verb", definition: "paid back in full after borrowing" },
      { word: "eligibility", partOfSpeech: "noun", definition: "the conditions that qualify someone for a scheme" },
      { word: "absorb", partOfSpeech: "verb", definition: "to take in a cost without failing" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
];
