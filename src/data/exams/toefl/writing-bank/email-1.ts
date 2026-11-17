/**
 * TOEFL Writing Practice Library — Write an Email, batch 1 (PROMPT 50).
 * Tasks toefl-wb-email-01…20: original campus scenarios, one email each,
 * matched to a real recipient across the six purposes (enquiry, request,
 * explanation, scheduling, problem, suggestion).
 *
 * All scenarios and model responses are original TalkSy practice material.
 */

import { TOEFL_WRITING_BANK_SOURCE_NOTE, type ToeflEmailTask } from "./types";

export const email1Tasks: ToeflEmailTask[] = [
  {
    taskType: "write-email",
    slug: "toefl-wb-email-01",
    title: "Asking about an inter-library loan",
    purpose: "enquiry",
    recipient: "library services",
    scenario:
      "You are writing a term paper on coastal erosion for Dr Whitcombe's geography module. The one book that covers your case study, 'Shifting Shorelines: A Century of Coastal Change', does not appear in your university's catalogue at all; an online search shows it is held by a library two hundred kilometres away. A friend mentions that libraries can sometimes request titles from one another. You also want to check how many books a second-year student may borrow at once, because you already have seven at home. You decide to email the library services desk with both questions.",
    keyPoints: [
      "Ask whether the library can request the book from another library.",
      "Give the full title and author so staff can identify it.",
      "Ask how many books a second-year student may hold at once.",
    ],
    wordBand: { min: 45, max: 105 },
    difficulty: 2,
    estimatedMinutes: 10,
    instructions:
      "Write one email to the library services desk asking politely about the missing book and the borrowing limit, covering every key point in your own words.",
    taskRequirements: [
      "Open with a greeting that suits a services desk.",
      "Give the full title and author of the book.",
      "Keep the two questions separate and easy to find.",
      "Close politely and identify yourself as a second-year student.",
    ],
    timeGuidance: "Spend about ten minutes: two planning, six writing, two checking.",
    modelResponse:
      "Dear Library Services,\n\nI am writing a term paper on coastal erosion for Dr Whitcombe's geography module, and one essential book is missing from your catalogue. Could you tell me whether it is possible to request 'Shifting Shorelines: A Century of Coastal Change' by Helena Marsh from another library?\n\nI would also like to know how many books a second-year student may borrow at once, as I currently have seven on loan.\n\nThank you for your help.\n\nKind regards,\nPriya Raman\nGeography, Year 2",
    responseAnalysis:
      "The model states its purpose in the first sentence, quotes the full title and author so staff can act immediately, separates the two questions into their own paragraphs, and closes with thanks and full identification — the efficient, friendly register a busy services desk expects.",
    usefulExpressions: [
      "Could you tell me whether…",
      "I would also like to know…",
      "I currently have seven on loan.",
      "Thank you for your help.",
    ],
    grammarObservations: [
      "Indirect questions keep statement word order after whether: whether it is possible, not whether is it possible.",
      "The conjunction as joins the reason to the request without a heavier because-clause.",
    ],
    commonMistakes: [
      "Giving only a partial title, which forces staff to guess the right edition.",
      "Burying the second question inside the first paragraph where readers overlook it.",
    ],
    independentAssignment:
      "Write a short follow-up email thanking the desk for arranging the loan and asking how to renew the book once.",
    vocabulary: [
      { word: "catalogue", partOfSpeech: "noun", definition: "the organised list of everything a library holds" },
      { word: "request", partOfSpeech: "verb", definition: "to ask someone politely to provide something" },
      { word: "borrow", partOfSpeech: "verb", definition: "to take something with permission and return it later" },
      { word: "essential", partOfSpeech: "adjective", definition: "completely necessary for the purpose you have" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-02",
    title: "Requesting an extension while ill",
    purpose: "request",
    recipient: "course professor",
    scenario:
      "You are taking Professor Nowak's cognitive psychology module. A 500-word reading response on an attention experiment is due this Wednesday at noon. You caught a heavy flu at the weekend, and although you finished the reading on Sunday, you have not been able to write anything coherent since Monday. Your temperature keeps rising in the evenings, and the campus health centre advised rest. You would like until Friday morning to submit. This is the first time you have asked any professor for extra time, and you decide to email Professor Nowak to request it.",
    keyPoints: [
      "Request an extension until Friday morning for the reading response.",
      "Explain briefly that flu has stopped you from writing.",
      "Mention that the reading itself is already finished.",
      "Offer to provide proof from the health centre if needed.",
    ],
    wordBand: { min: 50, max: 120 },
    difficulty: 3,
    estimatedMinutes: 11,
    instructions:
      "Write one email to Professor Nowak requesting an extension on the reading response, giving your reasons politely and covering every key point in your own words.",
    taskRequirements: [
      "Open politely with the professor's name and your module.",
      "State what you are requesting and by when.",
      "Give the reason honestly and without long excuses.",
      "Offer documentation from the health centre.",
    ],
    timeGuidance: "Allow eleven minutes: plan for two, write for seven, check tone for two.",
    modelResponse:
      "Dear Professor Nowak,\n\nI am writing to request a short extension for the reading response due this Wednesday in your cognitive psychology module. I finished the reading on Sunday, but I have had a heavy flu since Monday, and the health centre has advised rest until it passes.\n\nWould it be possible to submit the response by Friday morning instead? I expect to be well enough by then, and I can bring a note from the health centre if that would help.\n\nThank you very much for considering this.\n\nKind regards,\nTomas Delgado\nPsychology, Year 2",
    responseAnalysis:
      "The model requests first and explains second, so the professor knows within one sentence what is being asked. It separates the request from the supporting reason, gives a concrete new deadline rather than a vague plea, and offers evidence unprompted, which builds the credibility a first-time extension request needs.",
    usefulExpressions: [
      "I am writing to request…",
      "Would it be possible to…",
      "I can bring a note from the health centre.",
      "Thank you very much for considering this.",
    ],
    grammarObservations: [
      "Polite requests use Would it be possible to plus the base verb rather than the bare imperative.",
      "Present perfect I have had describes an illness that began in the past and continues now.",
    ],
    commonMistakes: [
      "Apologising at length before reaching the request, which hides the main point.",
      "Asking for an extension without naming a specific new deadline.",
    ],
    independentAssignment:
      "Write the thank-you email you would send after the professor grants the extension, confirming your new submission day.",
    vocabulary: [
      { word: "extension", partOfSpeech: "noun", definition: "extra time allowed for finishing a piece of work" },
      { word: "coherent", partOfSpeech: "adjective", definition: "clear and logically connected in expression" },
      { word: "advised", partOfSpeech: "verb", definition: "recommended a course of action to someone" },
      { word: "considering", partOfSpeech: "verb", definition: "thinking about a request before deciding on it" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-03",
    title: "Explaining an absence from a lecture",
    purpose: "explanation",
    recipient: "course professor",
    scenario:
      "You are a first-year student in Dr Ferreira's cell biology module. On Tuesday you woke with a bad migraine and could not attend the nine o'clock lecture on cell division. You spent the morning in a dark room and visited the campus health centre in the afternoon, where a nurse confirmed the migraine. A classmate has already lent you the lecture notes, but you want to explain your absence to Dr Ferreira yourself and check whether anything was handed out in person.",
    keyPoints: [
      "Say exactly which lecture you missed and why.",
      "Mention your visit to the campus health centre.",
      "Explain that a classmate has lent you the notes.",
      "Ask whether anything was handed out in person.",
    ],
    wordBand: { min: 40, max: 90 },
    difficulty: 1,
    estimatedMinutes: 9,
    instructions:
      "Write one short email to Dr Ferreira explaining your absence from Tuesday's lecture politely, covering every key point in your own words.",
    taskRequirements: [
      "Greet the doctor by name and identify your module.",
      "State the day and the reason for the absence.",
      "Mention the notes and the health centre visit.",
      "Close politely with your full name.",
    ],
    timeGuidance: "Take nine minutes: two to plan, five to write, two to check.",
    modelResponse:
      "Dear Dr Ferreira,\n\nI want to explain why I missed Tuesday's nine o'clock lecture on cell division. I woke with a bad migraine and could not look at a screen, so I spent the morning resting and saw a nurse at the campus health centre in the afternoon.\n\nA classmate has lent me the notes, so I am catching up. Please tell me if anything was handed out in person.\n\nKind regards,\nInes Duarte\nCell Biology, Year 1",
    responseAnalysis:
      "The model explains rather than excuses: it names the lecture, gives the reason in two short sentences, shows it is already catching up, and ends with one small question. Nothing is demanded, and the tone stays respectful and factual throughout.",
    usefulExpressions: [
      "I want to explain why…",
      "so I am catching up",
      "Please tell me if…",
      "Kind regards,",
    ],
    grammarObservations: [
      "Past simple narrates the finished events of Tuesday: woke, spent, saw.",
      "Present perfect has lent connects a past action to the present situation.",
    ],
    commonMistakes: [
      "Over-apologising in every sentence, which makes a short absence sound serious.",
      "Forgetting to name the lecture, leaving the professor guessing which class.",
    ],
    independentAssignment:
      "Write a similar explanation email to a tutor about missing a tutorial because of a delayed train.",
    vocabulary: [
      { word: "migraine", partOfSpeech: "noun", definition: "a severe recurring headache often with blurred vision" },
      { word: "absence", partOfSpeech: "noun", definition: "the state of being away from a place" },
      { word: "handed out", partOfSpeech: "verb", definition: "distributed to the people who were present" },
      { word: "catching up", partOfSpeech: "verb", definition: "doing missed work to reach the same point as others" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-04",
    title: "Moving a meeting with your advisor",
    purpose: "scheduling",
    recipient: "academic advisor",
    scenario:
      "You have a ten-minute progress meeting with your academic advisor, Ms Okonkwo, this Thursday at three o'clock. On Monday the geology department moved the compulsory field-trip briefing to Thursday afternoon, and every student on the module must attend. You have already checked your timetable: you are free on Monday afternoon from two onwards and on Friday morning until eleven. You need to email Ms Okonkwo quickly to move the meeting to one of those times.",
    keyPoints: [
      "Explain that a compulsory briefing now clashes with the meeting.",
      "Propose Monday afternoon or Friday morning as alternatives.",
      "Apologise for the short notice.",
      "Ask her to confirm whichever time suits her.",
    ],
    wordBand: { min: 40, max: 90 },
    difficulty: 1,
    estimatedMinutes: 9,
    instructions:
      "Write one short email to Ms Okonkwo asking to move Thursday's meeting, proposing your free times politely and covering every key point.",
    taskRequirements: [
      "Greet your advisor by name and state the current slot.",
      "Give the clash as the reason for moving it.",
      "Offer two specific alternative times.",
      "Ask for confirmation and apologise for the short notice.",
    ],
    timeGuidance: "Nine minutes total: plan two, write five, check two.",
    modelResponse:
      "Dear Ms Okonkwo,\n\nI am afraid I cannot keep our meeting this Thursday at three, because the geology department has moved a compulsory field-trip briefing to Thursday afternoon.\n\nWould Monday after two or Friday before eleven work for you instead? I am free at both times and happy to come to your office.\n\nI am sorry for the short notice, and I hope one of these slots suits you.\n\nBest wishes,\nJonas Weber\nGeology, Year 2",
    responseAnalysis:
      "The model cancels politely before it proposes: the clash is stated in one sentence, then two concrete alternatives are offered so the advisor can answer with a single word. Apologising for the short notice keeps the relationship warm despite the inconvenience.",
    usefulExpressions: [
      "I am afraid I cannot keep our meeting…",
      "Would Monday after two or Friday before eleven work for you?",
      "I am sorry for the short notice.",
      "Best wishes,",
    ],
    grammarObservations: [
      "Present perfect has moved explains a change that affects the present arrangement.",
      "Offering alternatives with or keeps the request easy to answer in one line.",
    ],
    commonMistakes: [
      "Cancelling without proposing any new time, which creates another email round.",
      "Forgetting to say which meeting you mean when the advisor sees many students.",
    ],
    independentAssignment:
      "Write a reply confirming the new time your advisor chooses, and note one topic you want to discuss.",
    vocabulary: [
      { word: "compulsory", partOfSpeech: "adjective", definition: "required by a rule that must be obeyed" },
      { word: "briefing", partOfSpeech: "noun", definition: "a meeting at which essential instructions are given" },
      { word: "slots", partOfSpeech: "noun", definition: "short periods of time set aside for an activity" },
      { word: "notice", partOfSpeech: "noun", definition: "advance warning about a change of plan" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-05",
    title: "Reporting a broken radiator",
    purpose: "problem",
    recipient: "housing office",
    scenario:
      "You live in room 214 of Maple Hall. Since Saturday the radiator under your window has been completely cold, even though the valve is fully open, and the room drops to a temperature where you cannot study at your desk in the evening. Your neighbours in 212 and 216 say their radiators are also cold, so the fault may affect the whole corridor. The residence assistant looked at it on Monday and told you to contact the housing office directly. Nights are getting colder, and you want the heating repaired quickly.",
    keyPoints: [
      "Describe the radiator fault and how long it has lasted.",
      "Mention that neighbouring rooms have the same problem.",
      "Explain the effect on your evening study.",
      "Ask for a repair visit as soon as possible.",
    ],
    wordBand: { min: 45, max: 105 },
    difficulty: 2,
    estimatedMinutes: 10,
    instructions:
      "Write one email to the housing office reporting the heating problem in your room clearly and politely, covering every key point in your own words.",
    taskRequirements: [
      "Give your room number and residence name early.",
      "Describe the fault, its duration and its effect.",
      "Mention the two neighbouring rooms with the same issue.",
      "Request a repair and thank the office.",
    ],
    timeGuidance: "Ten minutes: two for details, six for writing, two for checking.",
    modelResponse:
      "Dear Housing Office,\n\nI am writing to report a heating problem in room 214 of Maple Hall. The radiator under the window has been completely cold since Saturday, although the valve is fully open. The room is now too cold for evening study, and my neighbours in 212 and 216 report the same fault, so the issue may run along the whole corridor.\n\nOur residence assistant examined the radiator on Monday and advised me to contact you directly. Could a technician visit this week if possible?\n\nThank you for your help.\n\nKind regards,\nSofia Marchetti\nMaple Hall, room 214",
    responseAnalysis:
      "The model leads with the location, because a repair team needs the address before anything else. It gives the fault, its duration and the effect in factual sentences, adds the neighbouring rooms so the office can spot a system-wide cause, and keeps the request for a visit short and reasonable.",
    usefulExpressions: [
      "I am writing to report…",
      "has been completely cold since Saturday",
      "Could a technician visit this week if possible?",
      "Thank you for your help.",
    ],
    grammarObservations: [
      "Present perfect has been cold marks a state that began in the past and continues.",
      "The conjunction although concedes the counter-argument that the valve is already open.",
    ],
    commonMistakes: [
      "Describing anger instead of the fault, which slows down the repair.",
      "Leaving out the room number, forcing the office to ask for it.",
    ],
    independentAssignment:
      "Write a follow-up email reporting that the technician fixed the radiator and thanking the office for the quick response.",
    vocabulary: [
      { word: "radiator", partOfSpeech: "noun", definition: "a device that heats a room with hot water" },
      { word: "valve", partOfSpeech: "noun", definition: "the control that opens and closes a pipe" },
      { word: "technician", partOfSpeech: "noun", definition: "a trained worker who repairs equipment" },
      { word: "corridor", partOfSpeech: "noun", definition: "a long passage in a building with rooms off it" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-06",
    title: "Suggesting an earlier club meeting",
    purpose: "suggestion",
    recipient: "club president",
    scenario:
      "You are a member of the university hiking club. The weekly planning meeting runs from six until eight in the evening, but the last shuttle to the north-campus residences leaves at ten past eight from the sports centre. You have missed it twice and walked forty minutes home in the dark. The meeting room is free from half past five, and two other members have complained about the same problem. You decide to email the club president with a simple suggestion.",
    keyPoints: [
      "Suggest starting the meeting half an hour earlier.",
      "Explain the problem with the last shuttle.",
      "Mention that the room is free from half past five.",
      "Ask the president what other members think.",
    ],
    wordBand: { min: 40, max: 90 },
    difficulty: 1,
    estimatedMinutes: 8,
    instructions:
      "Write one short email to the club president suggesting an earlier start for the weekly meeting, giving your reason politely and covering every key point.",
    taskRequirements: [
      "Greet the president in a friendly way.",
      "State your suggestion clearly in one sentence.",
      "Give the shuttle problem as the main reason.",
      "Invite the president's opinion before deciding.",
    ],
    timeGuidance: "Eight minutes: plan one, write five, check two.",
    modelResponse:
      "Hi Amara,\n\nI have a small suggestion for our Tuesday planning meetings. Could we start at half past five instead of six, since the room is free from then anyway? Several of us now miss the ten-past-eight shuttle and walk home in the dark after the meeting.\n\nWhat do you think? I am happy to ask around before we change anything.\n\nBest wishes,\nKwame Mensah\nHiking Club member",
    responseAnalysis:
      "The model states the suggestion in the second sentence, supports it with the shared shuttle problem rather than private convenience, and ends by handing the decision back to the president. The informal greeting and short sentences match a friendly club setting.",
    usefulExpressions: [
      "I have a small suggestion for…",
      "Could we start at half past five instead of six?",
      "What do you think?",
      "I am happy to ask around.",
    ],
    grammarObservations: [
      "Since introduces the supporting reason directly after the suggestion it justifies.",
      "Could we softens a proposal into a question the reader can easily refuse.",
    ],
    commonMistakes: [
      "Complaining about the current time before proposing the better one.",
      "Presenting the change as already decided, which annoys a club president.",
    ],
    independentAssignment:
      "Write an email to the same president suggesting a weekend day-trip destination, with one reason for your choice.",
    vocabulary: [
      { word: "shuttle", partOfSpeech: "noun", definition: "a bus that runs back and forth on a short route" },
      { word: "suggestion", partOfSpeech: "noun", definition: "an idea put forward for other people to consider" },
      { word: "members", partOfSpeech: "noun", definition: "people who belong to a club or group" },
      { word: "miss", partOfSpeech: "verb", definition: "to fail to catch a bus or train" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-07",
    title: "Asking how to transfer summer credit",
    purpose: "enquiry",
    recipient: "registrar's office",
    scenario:
      "You spent July at a summer school run by Riverside University and passed 'Introduction to Data Analytics' with a grade of A, earning three credits. Your own university's handbook says summer courses taken elsewhere can sometimes count toward a degree, which would let you drop one module next year and lighten a heavy timetable. Nothing on the registrar's portal explains the procedure. Before you plan next year, you need to email the registrar's office and ask how the transfer actually works and what proof they need.",
    keyPoints: [
      "Ask which form or portal request starts a credit transfer.",
      "Ask whether the credits count toward your major or only electives.",
      "Give the course title, grade and credit value from the summer school.",
      "Ask for the deadline so you can plan next year's modules.",
    ],
    wordBand: { min: 55, max: 140 },
    difficulty: 4,
    estimatedMinutes: 12,
    instructions:
      "Write one email to the registrar's office asking how to transfer your summer-course credit, covering every key point and giving the course facts they will need.",
    taskRequirements: [
      "Open formally, since registrars handle official records.",
      "Give the course title, grade and credit value early.",
      "Ask about the form, the counting rule and the deadline.",
      "Offer to send the official transcript immediately.",
    ],
    timeGuidance: "Give the task twelve minutes: three to order the questions, seven to write, two to check.",
    modelResponse:
      "Dear Registrar's Office,\n\nI studied 'Introduction to Data Analytics' at Riverside University's summer school this July, passed with a grade of A, and earned three credits that I would like to count toward my degree here. Could you explain how the transfer process works in my case?\n\nFirst, which form or portal request should I submit to have the course assessed? Second, would the credits count toward my economics major, or only as general electives? Third, is there a deadline for submitting the paperwork, since I need to finalise next year's module choices?\n\nI already hold the official transcript from Riverside and can send it today. My student number is 20241088.\n\nThank you for your help.\n\nYours faithfully,\nRaj Patel\nEconomics, Year 2",
    responseAnalysis:
      "The model gives the course facts before the questions, because the office needs them to answer at all. Numbering the three questions as First, Second, Third stops any of them being skipped, the transcript offer removes a follow-up email, and the formal Yours faithfully matches an office that does not know the writer personally.",
    usefulExpressions: [
      "Could you explain how the transfer process works…",
      "First… Second… Third…",
      "I already hold the official transcript…",
      "Yours faithfully,",
    ],
    grammarObservations: [
      "Numbering adverbs First, Second, Third mark parallel questions so the reply can address each one.",
      "Would in would the credits count asks about a possibility rather than asserting a right.",
    ],
    commonMistakes: [
      "Assuming the office knows which summer school or course you mean.",
      "Sending the questions in three separate emails instead of one organised message.",
    ],
    independentAssignment:
      "Write the reply you would send after the office answers, confirming which modules you will now drop next year.",
    vocabulary: [
      { word: "transcript", partOfSpeech: "noun", definition: "the official record of a student's courses and grades" },
      { word: "credits", partOfSpeech: "noun", definition: "units counting toward the completion of a degree" },
      { word: "electives", partOfSpeech: "noun", definition: "modules students choose freely outside their major" },
      { word: "assessed", partOfSpeech: "verb", definition: "officially evaluated to decide its value" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-08",
    title: "Requesting a letter of recommendation",
    purpose: "request",
    recipient: "course professor",
    scenario:
      "You are applying for a summer research internship at the Baltic Marine Institute, which needs two recommendation letters by the twenty-first of next month. You took Professor Lindgren's oceanography module last year and earned an A minus, and last term you helped run her open-day stand for two afternoons, explaining sonar displays to visitors. You believe she remembers your work, but three weeks is a short time, and professors receive many such requests. You will email her to ask whether she can write a strong letter and what she needs from you.",
    keyPoints: [
      "Ask whether she would be willing to write a strong letter by the deadline.",
      "Remind her exactly who you are and of your module result.",
      "Mention the open-day stand so she recalls you directly.",
      "List the materials you can send and offer to meet briefly.",
    ],
    wordBand: { min: 60, max: 160 },
    difficulty: 5,
    estimatedMinutes: 14,
    instructions:
      "Write one email to Professor Lindgren requesting a recommendation letter for the internship, reminding her of your work politely and covering every key point in your own words.",
    taskRequirements: [
      "Open with a specific reminder of who you are.",
      "State the deadline and the programme clearly.",
      "Attach or offer CV, transcript and statement drafts.",
      "Give her an easy way to decline, and offer a meeting.",
    ],
    timeGuidance: "Give this fourteen minutes: four planning the reminders, eight writing, two softening the tone.",
    modelResponse:
      "Dear Professor Lindgren,\n\nI am applying for a summer research internship at the Baltic Marine Institute, which requires two recommendation letters by the twenty-first of next month. I hope you might consider writing one for me.\n\nYou may remember me from your oceanography module last year, where I earned an A minus, and from your open-day stand last term, where I helped explain the sonar displays to visitors for two afternoons. Your module is what turned my interest in currents into a serious plan.\n\nIf you are able to support the application, I can send my CV, my transcript and a draft of my research statement today, and I would be glad to meet briefly at any time that suits you. If your schedule does not allow it, I completely understand.\n\nThank you very much for considering my request.\n\nWith thanks,\nMei-Ling Chen\nMarine Science, Year 3",
    responseAnalysis:
      "The model asks early but does not presume: the reminders follow immediately so the professor can recall the writer without searching records, the attachments list saves her a reply, and the escape clause about her schedule makes declining easy. That humility, plus the concrete deadline, is what makes such requests succeed.",
    usefulExpressions: [
      "I hope you might consider writing one for me.",
      "You may remember me from…",
      "If you are able to support the application…",
      "I completely understand.",
    ],
    grammarObservations: [
      "If-clauses with the present simple frame a polite request: if you are able to support it.",
      "Might in you might consider doubles the politeness of may by removing any pressure.",
    ],
    commonMistakes: [
      "Writing Dear Professor with no name, which suggests a copy-and-paste request.",
      "Hiding the deadline at the end, where the reader may miss its urgency.",
    ],
    independentAssignment:
      "Write the thank-you email you would send the day after the professor agrees, confirming exactly what you will send her.",
    vocabulary: [
      { word: "internship", partOfSpeech: "noun", definition: "a temporary position giving supervised work experience" },
      { word: "recommendation", partOfSpeech: "noun", definition: "a formal statement supporting someone's application" },
      { word: "draft", partOfSpeech: "noun", definition: "an early version of a document still being improved" },
      { word: "sonar", partOfSpeech: "noun", definition: "equipment using sound waves to detect objects underwater" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-09",
    title: "Explaining a late module drop",
    purpose: "explanation",
    recipient: "academic advisor",
    scenario:
      "You are registered for five modules this term, including 'Art History: The Baroque'. Nine days ago the official deadline for dropping a module passed. Since then, your part-time job at a logistics firm has doubled your shifts because two colleagues left, and you are struggling to keep up with the reading for all five courses. You have decided the Baroque module has to go, but dropping it now needs your academic advisor's support. You will email Mr Duarte to explain the situation honestly and ask what the late-drop procedure involves.",
    keyPoints: [
      "Explain why you now need to drop the Baroque module.",
      "Admit that the official drop deadline has already passed.",
      "Ask what the late-drop procedure requires from you.",
      "Ask whether the drop appears on your transcript.",
    ],
    wordBand: { min: 50, max: 120 },
    difficulty: 3,
    estimatedMinutes: 11,
    instructions:
      "Write one email to Mr Duarte explaining why you must drop the module after the deadline, admitting the missed date honestly and covering every key point.",
    taskRequirements: [
      "Greet your advisor and state which module you mean.",
      "Explain the work situation that forced the change.",
      "Admit the deadline passed without blaming anyone.",
      "Ask two clear questions about the procedure.",
    ],
    timeGuidance: "Eleven minutes: three to order the facts, six to write, two to check honesty and tone.",
    modelResponse:
      "Dear Mr Duarte,\n\nI would like to explain why I need to drop 'Art History: The Baroque' from my five modules this term. I know the official deadline passed nine days ago, and I take responsibility for missing it.\n\nThe reason is my part-time job: two colleagues left the logistics firm last month, my shifts have doubled, and I can no longer keep up with the reading for all five courses. Rather than risk failing one, I want to drop the module with the least damage.\n\nCould you tell me what the late-drop procedure requires, and whether the drop is recorded on my transcript?\n\nThank you for your patience.\n\nKind regards,\nElena Petrova\nHistory of Art, Year 2",
    responseAnalysis:
      "The model separates facts from responsibility: the workload explanation comes first, the admission of missing the deadline stands alone in its own sentence, and the two procedural questions close the email. Advisors respond well to this structure because nothing is hidden and the request is easy to act on.",
    usefulExpressions: [
      "I would like to explain why…",
      "I take responsibility for missing it.",
      "Could you tell me what the procedure requires…",
      "Thank you for your patience.",
    ],
    grammarObservations: [
      "Present perfect have doubled links the colleagues' departure to the current overload.",
      "Rather than plus the base verb rejects one action in favour of another.",
    ],
    commonMistakes: [
      "Blaming the job or the university instead of owning the missed deadline.",
      "Asking to drop a module without naming its exact title.",
    ],
    independentAssignment:
      "Write the follow-up email confirming you have handed in the late-drop form and thanking your advisor for supporting it.",
    vocabulary: [
      { word: "deadline", partOfSpeech: "noun", definition: "the latest time by which something must be done" },
      { word: "shifts", partOfSpeech: "noun", definition: "scheduled periods of work at a job" },
      { word: "procedure", partOfSpeech: "noun", definition: "the official series of steps for doing something" },
      { word: "transcript", partOfSpeech: "noun", definition: "the official record of a student's courses and results" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-10",
    title: "Rescheduling a clashing tutorial",
    purpose: "scheduling",
    recipient: "course professor",
    scenario:
      "Professor Marchetti's Italian cinema tutorial for group B was moved this morning from Wednesday to Thursday at two o'clock, when the lecture theatres are being refurbished. Thursday at two is the only slot for your compulsory statistics laboratory, and both activities record attendance. Group C meets on Wednesday at ten and group D on Thursday at four; neither clashes with anything on your timetable. You will email Professor Marchetti to ask to switch groups before the change is locked in on Friday.",
    keyPoints: [
      "Explain the new clash between the moved tutorial and the lab.",
      "Ask to move from group B to group C or D.",
      "Say that neither new group clashes with your timetable.",
      "Ask for a reply before the timetable locks on Friday.",
    ],
    wordBand: { min: 50, max: 120 },
    difficulty: 3,
    estimatedMinutes: 10,
    instructions:
      "Write one email to Professor Marchetti asking to change tutorial groups because of the new clash, covering every key point politely and in your own words.",
    taskRequirements: [
      "Identify your current group and the clash immediately.",
      "Name the two groups you could join instead.",
      "Confirm you have checked your own timetable.",
      "Request an answer before Friday's lock-in.",
    ],
    timeGuidance: "Ten minutes: two to list the facts, six to write, two to check the dates.",
    modelResponse:
      "Dear Professor Marchetti,\n\nThe refurbishment timetable has moved my group B Italian cinema tutorial to Thursday at two, which is exactly when my compulsory statistics laboratory meets, so I can no longer attend both. Could I move to group C on Wednesday at ten, or to group D on Thursday at four? I have checked my timetable carefully, and neither of those slots clashes with anything else.\n\nIf it is possible, I would be grateful for a decision before the new groups are locked in on Friday.\n\nThank you very much.\n\nKind regards,\nDiego Morales\nStatistics and Film, Year 2",
    responseAnalysis:
      "The model gives the collision in one sentence and the solution in the next, so the professor can act without rereading. Naming both alternative groups doubles the chance of a quick yes, and the Friday deadline is framed as a request rather than a demand.",
    usefulExpressions: [
      "which is exactly when…",
      "Could I move to group C…?",
      "I have checked my timetable carefully.",
      "I would be grateful for a decision before…",
    ],
    grammarObservations: [
      "Which introduces a relative clause that pins the clash to a precise time.",
      "Neither with a singular verb refuses both slots in one clean word.",
    ],
    commonMistakes: [
      "Complaining about the refurbishment instead of solving the clash.",
      "Proposing one alternative only, which stalls if that group is full.",
    ],
    independentAssignment:
      "Write the confirmation email you would send after joining group C, noting the change for your own records.",
    vocabulary: [
      { word: "refurbishment", partOfSpeech: "noun", definition: "the work of renovating and improving a building" },
      { word: "compulsory", partOfSpeech: "adjective", definition: "required by the rules of the module" },
      { word: "clashes", partOfSpeech: "verb", definition: "conflicts so that both cannot happen at once" },
      { word: "locked in", partOfSpeech: "verb", definition: "fixed so that no further changes are possible" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-11",
    title: "Reporting Wi-Fi dropouts during a test",
    purpose: "problem",
    recipient: "IT help desk",
    scenario:
      "You sat the online statistics test last Friday from two to three in the afternoon in your room in Cedar Court, block three. During the test the residence Wi-Fi disconnected three times, and each reconnection cost you several minutes. With twelve minutes remaining, the platform submitted your answers automatically and closed, although you had planned to review two questions. You took screenshots of each error message with the clock visible. Your module leader has asked for written confirmation of the outage from the IT help desk, so you must report the problem with full details.",
    keyPoints: [
      "Describe when and where the disconnections happened.",
      "Explain how the automatic submission cut the test short.",
      "Mention the screenshots you can attach.",
      "Ask for written confirmation of the outage for your module leader.",
    ],
    wordBand: { min: 55, max: 140 },
    difficulty: 4,
    estimatedMinutes: 12,
    instructions:
      "Write one email to the IT help desk reporting the Wi-Fi dropouts that hit your online test, giving precise details and covering every key point in your own words.",
    taskRequirements: [
      "Give the date, the time window and your room block.",
      "State the number of dropouts and their effect.",
      "Offer the screenshots as evidence.",
      "Request written confirmation for the module leader.",
    ],
    timeGuidance: "Allow twelve minutes: three ordering the timeline, seven writing, two checking numbers.",
    modelResponse:
      "Dear IT Help Desk,\n\nI am writing about the Wi-Fi outages that interrupted an online statistics test in Cedar Court, block three, last Friday between two and three in the afternoon. The connection dropped three times during the hour, and every reconnection cost me several minutes of the test.\n\nWith twelve minutes still remaining, the platform automatically submitted my answers and closed the window, although I had planned to review two questions. I took a screenshot after each error message, with the on-screen clock visible, and I can attach all three.\n\nMy module leader needs written confirmation of the outage before she can consider a retake. Could your team check the access point for block three and confirm the disconnections in writing?\n\nThank you for your help.\n\nKind regards,\nSamuel Okafor\nStatistics, Year 2",
    responseAnalysis:
      "The model works as a record: date, block and time window come first, the dropouts and their cost follow, and the screenshots turn memory into evidence. Because the stated goal is written confirmation rather than a personal favour, the desk can process it as a routine incident report.",
    usefulExpressions: [
      "I am writing about the Wi-Fi outages that…",
      "I can attach all three.",
      "Could your team check… and confirm… in writing?",
      "Thank you for your help.",
    ],
    grammarObservations: [
      "Past perfect had planned shows an intention that existed before the interruption.",
      "The connector although signals a contrast between the automatic closure and the writer's plan.",
    ],
    commonMistakes: [
      "Demanding a retake from the help desk, which cannot grant one.",
      "Reporting the outage without dates or room numbers, which makes checking impossible.",
    ],
    independentAssignment:
      "Write a short email to your module leader enclosing the help desk's confirmation and formally requesting the retake.",
    vocabulary: [
      { word: "outage", partOfSpeech: "noun", definition: "a period when a service stops working" },
      { word: "reconnection", partOfSpeech: "noun", definition: "the process of getting a connection back" },
      { word: "screenshots", partOfSpeech: "noun", definition: "images capturing what was on a screen" },
      { word: "retake", partOfSpeech: "noun", definition: "a second attempt at a test" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-12",
    title: "Suggesting an exam review session",
    purpose: "suggestion",
    recipient: "course professor",
    scenario:
      "You are one of about eighty students in Professor Achebe's macroeconomics module. The final examination is in four weeks, and much of the class finds the material on IS-LM diagrams the hardest part of the course. In the class group chat, students keep asking each other the same worked-example questions, and someone suggested asking for a review session. You are willing to collect questions beforehand and book a room. You will email Professor Achebe to propose a session during reading week and explain how it could run.",
    keyPoints: [
      "Propose a review session during reading week.",
      "Explain that many students struggle with the IS-LM diagrams.",
      "Offer to collect questions and book a room in advance.",
      "Suggest a format of worked problems followed by questions.",
    ],
    wordBand: { min: 50, max: 120 },
    difficulty: 3,
    estimatedMinutes: 11,
    instructions:
      "Write one email to Professor Achebe suggesting a review session before the examination, showing that the idea has class support and covering every key point.",
    taskRequirements: [
      "Open respectfully and name the module and examination.",
      "Give the evidence that students are struggling.",
      "Propose the reading-week timing and a clear format.",
      "Offer practical help so the session is easy to accept.",
    ],
    timeGuidance: "Eleven minutes: three planning the proposal, six writing, two softening requests.",
    modelResponse:
      "Dear Professor Achebe,\n\nSeveral of us in your macroeconomics class would like to suggest a review session before the final examination in four weeks. The IS-LM diagram questions cause the most difficulty, and the same worked examples keep circulating in the class group chat without ever being settled.\n\nWould you consider running one session during reading week? If it helps, I could collect questions from students in advance and book a suitable room, so the time could go to worked problems followed by open questions.\n\nPlease let me know if this would be useful, or if the class should organise something informally instead.\n\nThank you for reading.\n\nKind regards,\nNadia Haddad\nEconomics, Year 2",
    responseAnalysis:
      "The model grounds the suggestion in evidence — the same unanswered questions circulating in the chat — before proposing anything. Offering to collect questions and book a room removes the two chores that usually stop professors accepting, and the closing alternative keeps the request pressure-free.",
    usefulExpressions: [
      "Several of us would like to suggest…",
      "Would you consider running one session…",
      "If it helps, I could…",
      "Please let me know if this would be useful.",
    ],
    grammarObservations: [
      "Could in I could collect states an offer without presuming acceptance.",
      "Followed by attaches one activity to another to sketch the session format.",
    ],
    commonMistakes: [
      "Demanding extra teaching as if it were owed to the class.",
      "Proposing a session with no date, room or format in mind.",
    ],
    independentAssignment:
      "Write a follow-up email to the class list summarising the professor's answer and what each student should bring.",
    vocabulary: [
      { word: "examination", partOfSpeech: "noun", definition: "a formal test at the end of a course" },
      { word: "circulating", partOfSpeech: "verb", definition: "passing from person to person" },
      { word: "advance", partOfSpeech: "noun", definition: "the state of being done before an event" },
      { word: "informally", partOfSpeech: "adverb", definition: "in a casual way without official structure" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-13",
    title: "Asking about courses and housing on exchange",
    purpose: "enquiry",
    recipient: "exchange-programme coordinator",
    scenario:
      "You have been accepted for a one-semester exchange at a partner university in the Netherlands starting in February. Your learning agreement, which lists the courses you will take abroad, must be submitted by the thirtieth of November, and your programme handbook is unclear on three points. You need to know whether 'Dutch Golden Age Painting' counts toward your art-history major here, whether student housing in Utrecht is guaranteed or must be arranged separately, and whether the housing deposit is refundable if you withdraw before arrival. The coordinator, Ms Bergman, deals with two hundred exchange students.",
    keyPoints: [
      "Ask whether the painting course counts toward your major.",
      "Ask whether exchange housing is guaranteed or applied for separately.",
      "Ask whether the housing deposit is refundable after withdrawal.",
      "Mention the thirtieth-of-November deadline for the learning agreement.",
    ],
    wordBand: { min: 60, max: 160 },
    difficulty: 5,
    estimatedMinutes: 14,
    instructions:
      "Write one email to Ms Bergman asking your three exchange questions in an organised way, showing you understand the deadline pressure and covering every key point.",
    taskRequirements: [
      "Open by identifying yourself as an accepted exchange student.",
      "Number the three questions so none is missed.",
      "Give the deadline that makes a quick answer important.",
      "Offer to send your draft learning agreement if useful.",
    ],
    timeGuidance: "Allow fourteen minutes: four sorting the three questions, eight writing, two checking the tone.",
    modelResponse:
      "Dear Ms Bergman,\n\nI have been accepted for the spring exchange at the partner university in the Netherlands and am preparing my learning agreement, which is due by the thirtieth of November. Before I finalise the course list, I would be grateful for your guidance on three points.\n\nFirst, could you confirm that 'Dutch Golden Age Painting' will count toward my art-history major here, as my adviser believes it should? Second, is student housing in Utrecht guaranteed for exchange students, or must I apply for it separately, and by when? Third, if I withdraw before arrival, is the housing deposit refundable in full or in part?\n\nI can send my draft learning agreement today if that would help you check the first point. My student number is 20243317.\n\nThank you very much for your time.\n\nKind regards,\nIsabelle Fontaine\nArt History, Year 2",
    responseAnalysis:
      "The model front-loads the deadline so the coordinator understands the urgency without being told to hurry. Each question is numbered and phrased so a short answer settles it, the draft-agreement offer saves a round of emails, and the whole message can be answered in five minutes by a busy coordinator.",
    usefulExpressions: [
      "I would be grateful for your guidance on three points.",
      "First… Second… Third…",
      "is the deposit refundable in full or in part?",
      "I can send my draft learning agreement today.",
    ],
    grammarObservations: [
      "Indirect whether-questions keep statement word order after verbs like confirm and know.",
      "Conditional if I withdraw frames the third question as a future possibility.",
    ],
    commonMistakes: [
      "Mixing the three questions into one paragraph so one is always missed.",
      "Failing to give a student number, which delays any housing answer.",
    ],
    independentAssignment:
      "Write the short thank-you email you would send after Ms Bergman answers, confirming which housing steps you will take.",
    vocabulary: [
      { word: "agreement", partOfSpeech: "noun", definition: "a written document recording what has been decided" },
      { word: "deposit", partOfSpeech: "noun", definition: "money paid in advance as security for a booking" },
      { word: "refundable", partOfSpeech: "adjective", definition: "able to be paid back if plans change" },
      { word: "finalise", partOfSpeech: "verb", definition: "to complete the last details of something" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-14",
    title: "Requesting a hold on a popular book",
    purpose: "request",
    recipient: "library services",
    scenario:
      "The only library copy of 'Statistics for Social Scientists' is on loan until the twelfth of December, but your methods essay is due on the third. Two other students on your course need the same book, and the reading list calls it essential. You have read the library's pages on holds and recalls, but the wording is confusing: one page says a hold queues you for the next return, another says a recall shortens the loan to seven days. You will email the library services desk to request whichever option gets the book back sooner.",
    keyPoints: [
      "Request a hold or recall on the library copy.",
      "Give the title and the current due date.",
      "Explain that your essay is due on the third of December.",
      "Ask which option returns the book sooner.",
    ],
    wordBand: { min: 45, max: 105 },
    difficulty: 2,
    estimatedMinutes: 10,
    instructions:
      "Write one email to the library services desk requesting that the book be held or recalled for you, explaining the essay deadline and covering every key point.",
    taskRequirements: [
      "Give the title and the loan's due date.",
      "State your own essay deadline clearly.",
      "Ask for whichever service returns the book sooner.",
      "Offer to collect the book the day it arrives.",
    ],
    timeGuidance: "Ten minutes: two to note the dates, six to write, two to check.",
    modelResponse:
      "Dear Library Services,\n\nI would like to request a hold, or a recall if that is faster, on the only copy of 'Statistics for Social Scientists', which the catalogue shows as on loan until the twelfth of December. My methods essay is due on the third, and the reading list describes the book as essential.\n\nCould you tell me which of the two services would bring the copy back sooner, and whether the current borrower would then have seven days to return it?\n\nI can collect the book on the day it arrives.\n\nMany thanks,\nYuki Tanaka\nSociology, Year 2",
    responseAnalysis:
      "The model names the two services and asks the desk to choose between them, which is smarter than guessing. Both deadlines — the loan date and the essay date — appear in the first paragraph, and the promise to collect immediately shows the desk the request is serious.",
    usefulExpressions: [
      "I would like to request a hold on…",
      "Could you tell me which… would bring the copy back sooner?",
      "the reading list describes the book as essential",
      "I can collect the book on the day it arrives.",
    ],
    grammarObservations: [
      "Would in would bring and would then have discusses hypothetical outcomes politely.",
      "The inserted phrase if that is faster lets the writer offer a choice inside one sentence.",
    ],
    commonMistakes: [
      "Demanding that another borrower be forced to return the book immediately.",
      "Forgetting the essay date, which is the whole reason for urgency.",
    ],
    independentAssignment:
      "Write a follow-up asking whether the library can also reserve the book's electronic version for the same period.",
    vocabulary: [
      { word: "hold", partOfSpeech: "noun", definition: "a request that a library keep a returned item for you" },
      { word: "recall", partOfSpeech: "noun", definition: "a notice asking a borrower to return an item early" },
      { word: "loan", partOfSpeech: "noun", definition: "the period for which an item is borrowed" },
      { word: "borrower", partOfSpeech: "noun", definition: "the person who has taken something out on loan" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-15",
    title: "Explaining the circumstances of a noise complaint",
    purpose: "explanation",
    recipient: "housing office",
    scenario:
      "You share flat six in Elm House with three other students. On Saturday your project group finished its presentation at ten in the evening after three weeks of work, and the five of you celebrated in the kitchen for about twenty minutes, louder than you realised. On Monday the housing office sent a formal noise-complaint notice quoting the quiet-hours rule that starts at eleven. This is the first complaint against your flat, and the notice invites a written response within five working days. You will explain what happened, apologise and set out the steps you have already taken.",
    keyPoints: [
      "Acknowledge the complaint and accept responsibility for the noise.",
      "Explain exactly what the celebration was and how long it lasted.",
      "Apologise without making excuses.",
      "Describe the preventive steps your flat has agreed.",
      "Ask whether the complaint can stay off your formal record.",
    ],
    wordBand: { min: 60, max: 160 },
    difficulty: 5,
    estimatedMinutes: 14,
    instructions:
      "Write one email to the housing office responding to the noise-complaint notice, explaining the circumstances honestly and covering every key point in your own words.",
    taskRequirements: [
      "Refer to the notice and the flat number early.",
      "Give a factual account of the Saturday evening.",
      "Apologise clearly in its own sentence.",
      "List the concrete steps now in place.",
      "Close with a reasonable request about the record.",
    ],
    timeGuidance: "Give it fourteen minutes: four planning the account, eight writing, two trimming any excuses.",
    modelResponse:
      "Dear Housing Office,\n\nI am writing in response to the noise-complaint notice issued to flat six, Elm House, on Monday. My project group finished a three-week presentation at ten on Saturday evening, and the five of us celebrated in the kitchen for about twenty minutes. We did not notice the volume or the hour, but that is our responsibility, and I apologise without reservation. This is the first complaint our flat has received.\n\nSince the notice arrived, we have agreed three measures: late-evening gatherings will move to the common room, the kitchen door will stay shut after ten, and we have posted the quiet-hours rule on the noticeboard as a reminder.\n\nI would be grateful if the complaint could be recorded informally given our clean history. Please tell me if you need anything further from us.\n\nYours sincerely,\nFreya Lindqvist\nFlat six, Elm House",
    responseAnalysis:
      "The model treats the notice as a document that deserves a document: the account of Saturday is factual, the apology stands alone and admits responsibility before the reasons, and the three numbered measures show change rather than promise it. The final request is modest, which makes it easy to grant.",
    usefulExpressions: [
      "I am writing in response to…",
      "I apologise without reservation.",
      "we have agreed three measures:",
      "Please tell me if you need anything further.",
    ],
    grammarObservations: [
      "The passive could be recorded keeps the request about files impersonal and soft.",
      "Present perfect have agreed and have posted prove the measures already exist.",
    ],
    commonMistakes: [
      "Denying the noise or blaming neighbours, which turns a warning into a dispute.",
      "Promising vague improvements instead of naming specific changes.",
    ],
    independentAssignment:
      "Write a short email to your flatmates summarising the office's reply and confirming who does which preventive step.",
    vocabulary: [
      { word: "notice", partOfSpeech: "noun", definition: "an official written announcement or warning" },
      { word: "apologise", partOfSpeech: "verb", definition: "to express regret for something done wrong" },
      { word: "measures", partOfSpeech: "noun", definition: "specific actions taken to deal with a problem" },
      { word: "informally", partOfSpeech: "adverb", definition: "without entering an official record" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-16",
    title: "Planning a term of supervision meetings",
    purpose: "scheduling",
    recipient: "research supervisor",
    scenario:
      "Your dissertation on urban beekeeping is due in May, and your supervisor, Dr Kessler, returns from sabbatical on the first Monday of October. The department requires five logged supervision meetings per term, and your own timetable is complicated: you teach tutorial groups all Tuesday, you attend Dr Kessler's methods seminar on Wednesday mornings, and in the second week of December you will be at a three-day conference in Vienna. You have looked at your calendar and believe a fortnightly Thursday slot could work for both of you, with one meeting held online during your absence.",
    keyPoints: [
      "Propose a fortnightly Thursday slot for the five meetings.",
      "Explain the Tuesday teaching and Wednesday seminar constraints.",
      "Suggest one online meeting during the December conference.",
      "Ask whether she prefers in-person or online for the rest.",
      "Offer to send calendar invitations once the pattern is agreed.",
    ],
    wordBand: { min: 60, max: 160 },
    difficulty: 5,
    estimatedMinutes: 15,
    instructions:
      "Write one email to Dr Kessler proposing a pattern of supervision meetings for the term, showing you have thought around both calendars and covering every key point.",
    taskRequirements: [
      "Acknowledge her return and the five-meeting requirement.",
      "Present the Thursday proposal with the reason behind it.",
      "State the two fixed constraints on your week.",
      "Handle the December absence with a concrete alternative.",
      "End by offering to send the calendar invitations.",
    ],
    timeGuidance: "Allow fifteen minutes: five mapping both calendars, eight writing, two checking dates against each other.",
    modelResponse:
      "Dear Dr Kessler,\n\nWelcome back from sabbatical. Now that the term is starting, I would like to propose a meeting pattern for the five supervision sessions the department requires for my urban beekeeping dissertation.\n\nMy week is fixed around teaching tutorials on Tuesdays and your Wednesday-morning methods seminar, but Thursday is free. Would a fortnightly Thursday slot at eleven suit you — for example, weeks two, four, six, eight and ten? In week ten I will be at the Vienna conference, so that session could be held online, or moved to the following Tuesday if you prefer to keep every meeting in person.\n\nOnce the pattern is agreed, I will send calendar invitations for the whole term so nothing slips. Please adjust any date that clashes with your own commitments.\n\nWith best wishes,\nAhmed Hassan\nEnvironmental Science, Year 4",
    responseAnalysis:
      "The model solves the scheduling problem before asking the supervisor to react: constraints, proposal, exception and follow-up arrive in that order, each in its own sentence group. Naming example weeks turns a vague pattern into a bookable calendar, and the offer to send invitations removes every remaining piece of work.",
    usefulExpressions: [
      "Now that the term is starting, I would like to propose…",
      "Would a fortnightly Thursday slot at eleven suit you?",
      "or moved to the following Tuesday if you prefer…",
      "Please adjust any date that clashes…",
    ],
    grammarObservations: [
      "Dashes set off the example weeks as an aside that could be deleted.",
      "Conditional if you prefer hands the final choice of format to the supervisor.",
    ],
    commonMistakes: [
      "Proposing one single date instead of a repeating pattern.",
      "Forgetting the December absence until the invitation is already sent.",
    ],
    independentAssignment:
      "Write a follow-up confirming the agreed pattern and attaching the first meeting's agenda of three items.",
    vocabulary: [
      { word: "fortnightly", partOfSpeech: "adjective", definition: "happening once every two weeks" },
      { word: "sabbatical", partOfSpeech: "noun", definition: "a period away from normal duties for study or travel" },
      { word: "pattern", partOfSpeech: "noun", definition: "a regular arrangement that repeats" },
      { word: "invitations", partOfSpeech: "noun", definition: "requests sent through a calendar app to book a meeting" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-17",
    title: "Reporting a damaged library book",
    purpose: "problem",
    recipient: "library services",
    scenario:
      "You borrowed 'Marine Biology of the North Atlantic' from the main library ten days ago. On Monday, heavy rain found a split seam in your backpack, and the book's pages thirty to seventy warped and its cover was stained, even though you had wrapped it in a scarf. The book is still readable, but it is clearly damaged. You want to report the damage honestly before returning it at the desk and find out what the replacement fee will be.",
    keyPoints: [
      "Describe the water damage to the book honestly.",
      "Explain how the rain got into your backpack.",
      "Say when you will return the book in person.",
      "Ask what the replacement fee will be.",
    ],
    wordBand: { min: 40, max: 90 },
    difficulty: 1,
    estimatedMinutes: 9,
    instructions:
      "Write one short email to the library services desk reporting the damage to the book you borrowed, covering every key point honestly and in your own words.",
    taskRequirements: [
      "Name the book and say when you borrowed it.",
      "Describe the damage and how it happened.",
      "Promise to return the book in person.",
      "Ask politely about the replacement fee.",
    ],
    timeGuidance: "Nine minutes: two planning, five writing, two checking honesty.",
    modelResponse:
      "Dear Library Services,\n\nI am returning 'Marine Biology of the North Atlantic' with water damage and wanted to report it before I bring the book to the desk. On Monday, rain entered my backpack through a split seam, and pages thirty to seventy have warped, with some staining on the cover.\n\nI will return the copy in person tomorrow. Could you tell me what the replacement fee will be?\n\nThank you for understanding.\n\nKind regards,\nMarina Sousa\nMarine Science, Year 1",
    responseAnalysis:
      "The model reports first and asks about money second, which is the honest order. The damage description is precise — page numbers and the split seam — so the desk can decide on the fee without inspecting photographs, and returning in person shows good faith.",
    usefulExpressions: [
      "I am returning… with water damage",
      "rain entered my backpack through a split seam",
      "I will return the copy in person tomorrow.",
      "Could you tell me what the replacement fee will be?",
    ],
    grammarObservations: [
      "Present perfect have warped describes damage that is now visible.",
      "Wanted in I wanted to report softens the announcement into a courtesy.",
    ],
    commonMistakes: [
      "Returning the book silently and waiting for the fine to appear.",
      "Blaming the weather as though it removed your responsibility.",
    ],
    independentAssignment:
      "Write a follow-up email asking whether you may keep the damaged copy after paying the replacement fee.",
    vocabulary: [
      { word: "warped", partOfSpeech: "adjective", definition: "bent out of shape, usually by heat or water" },
      { word: "seam", partOfSpeech: "noun", definition: "the line where two edges of a bag are sewn" },
      { word: "stained", partOfSpeech: "adjective", definition: "marked with a discoloured patch" },
      { word: "replacement", partOfSpeech: "noun", definition: "the act of providing something new for what was damaged" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-18",
    title: "Proposing changes to a seminar series",
    purpose: "suggestion",
    recipient: "department administrator",
    scenario:
      "The philosophy department's public seminar series runs on Tuesdays at five in the afternoon, and attendance has fallen from around forty to fewer than twelve over two terms. You have counted heads as a student helper and surveyed thirty-four students: most cite the clash with sports training and evening labs, many say titles are announced too late to plan around, and several ask for recordings. You believe three changes could revive the series, and you will email the department administrator, Ms Adeyemi, with a structured proposal she can take to the teaching committee.",
    keyPoints: [
      "Present the attendance figures as the reason for writing.",
      "Propose alternating some seminars into a morning slot.",
      "Propose announcing titles two weeks ahead.",
      "Propose recording sessions for the department portal.",
      "Offer to share the survey data with the committee.",
    ],
    wordBand: { min: 60, max: 160 },
    difficulty: 5,
    estimatedMinutes: 15,
    instructions:
      "Write one email to Ms Adeyemi proposing three changes to the seminar series, supporting each with evidence from your survey and covering every key point.",
    taskRequirements: [
      "Open with the attendance problem, not with criticism.",
      "Introduce each change with its supporting survey reason.",
      "Keep the tone collaborative, as to a colleague.",
      "Offer concrete help with any pilot the committee approves.",
    ],
    timeGuidance: "Allow fifteen minutes: five organising proposal and evidence, eight writing, two checking the tone.",
    modelResponse:
      "Dear Ms Adeyemi,\n\nAs one of the student helpers who counts attendance at the philosophy department's Tuesday seminars, I would like to propose some changes that might revive the series. Attendance has fallen from around forty to fewer than twelve over two terms, and my survey of thirty-four students points to practical causes rather than lack of interest.\n\nFirst, alternating some sessions into a late-morning slot would remove the clash with sports training and evening labs that most respondents named. Second, announcing titles two weeks ahead would let students plan; many said they only hear about a seminar the day before. Third, recording sessions for the department portal would serve the students who cannot attend at all.\n\nI would gladly share the full survey data with the teaching committee, and I am happy to help with a pilot of any one change next term.\n\nYours sincerely,\nLucas Brandt\nPhilosophy, Year 3",
    responseAnalysis:
      "The model argues from evidence it actually has: counted heads and a survey of thirty-four. Each proposal is paired with the reason respondents gave, so the committee sees student voices rather than one opinion, and the offer to run a pilot turns a critique into shared work.",
    usefulExpressions: [
      "I would like to propose… changes that might…",
      "First… Second… Third…",
      "points to practical causes rather than lack of interest",
      "I am happy to help with a pilot…",
    ],
    grammarObservations: [
      "Would in would remove and would let presents each change as an effect worth testing.",
      "Comparative fewer than twelve keeps the falling-attendance claim precise and defensible.",
    ],
    commonMistakes: [
      "Criticising the organisers personally instead of the scheduling choices.",
      "Proposing changes with no evidence that other students agree.",
    ],
    independentAssignment:
      "Write a follow-up email to the committee summarising the pilot results and recommending whether to keep the new slot.",
    vocabulary: [
      { word: "attendance", partOfSpeech: "noun", definition: "the number of people who turn up to an event" },
      { word: "respondents", partOfSpeech: "noun", definition: "the people who answered a survey" },
      { word: "revive", partOfSpeech: "verb", definition: "to bring new life and interest to something" },
      { word: "pilot", partOfSpeech: "noun", definition: "a small trial run before a full decision" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-19",
    title: "Asking whether an older edition works",
    purpose: "enquiry",
    recipient: "course professor",
    scenario:
      "The reading list for Dr Reyes's physiology module asks for 'Human Physiology: From Cells to Systems', eleventh edition, which costs one hundred and eighty units at the campus bookstore. A graduating student is selling the ninth edition for twenty-five, and the library's two copies of the eleventh are always borrowed. The chapter titles look almost identical, but you cannot tell whether the page numbers or problem sets differ. Before you spend the money, you will email Dr Reyes to ask whether the older edition is acceptable and what exactly changes between editions.",
    keyPoints: [
      "Ask whether the ninth edition is acceptable for the module.",
      "Mention the price difference as your reason for asking.",
      "Ask which chapters or problem sets differ between editions.",
      "Offer to consult whichever edition she recommends.",
    ],
    wordBand: { min: 50, max: 120 },
    difficulty: 3,
    estimatedMinutes: 10,
    instructions:
      "Write one email to Dr Reyes asking whether the older textbook edition will serve for her module, giving your reason politely and covering every key point.",
    taskRequirements: [
      "Name the module, the book and both editions.",
      "Explain the price difference that prompts the question.",
      "Ask precisely what differs between the two editions.",
      "Close by accepting her recommendation in advance.",
    ],
    timeGuidance: "Ten minutes: two listing the facts, six writing, two checking the numbers.",
    modelResponse:
      "Dear Dr Reyes,\n\nThe reading list for your physiology module asks for the eleventh edition of 'Human Physiology: From Cells to Systems', which costs one hundred and eighty at the bookstore. A graduating student is offering me the ninth edition for twenty-five, and the price difference matters to my budget this term.\n\nWould the older edition still be acceptable for your course? If so, could you tell me which chapters or problem sets change between the two editions, so I can borrow the library copy for just those parts? I will happily consult whichever edition you recommend.\n\nThank you for your time.\n\nKind regards,\nFatima Nasser\nBiomedical Science, Year 1",
    responseAnalysis:
      "The model shows the professor the exact trade the student is considering — one hundred and eighty against twenty-five — which explains the question without pleading poverty. Asking which parts differ, rather than whether everything differs, gives the professor an easy, specific answer.",
    usefulExpressions: [
      "the price difference matters to my budget",
      "Would the older edition still be acceptable…?",
      "could you tell me which chapters or problem sets change…",
      "I will happily consult whichever edition you recommend.",
    ],
    grammarObservations: [
      "Whichever plus noun leaves the final decision entirely with the professor.",
      "If so is a compact conditional that avoids repeating the whole question.",
    ],
    commonMistakes: [
      "Buying the old edition first and asking permission afterwards.",
      "Complaining about textbook prices instead of asking a precise question.",
    ],
    independentAssignment:
      "Write a follow-up email asking whether the graduating seller's copy includes the online access code the module mentions.",
    vocabulary: [
      { word: "edition", partOfSpeech: "noun", definition: "one version of a book printed at a particular time" },
      { word: "acceptable", partOfSpeech: "adjective", definition: "good enough for a stated purpose" },
      { word: "budget", partOfSpeech: "noun", definition: "the money available for spending in a period" },
      { word: "recommend", partOfSpeech: "verb", definition: "to advise something as the best choice" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "write-email",
    slug: "toefl-wb-email-20",
    title: "Requesting approval for a course overload",
    purpose: "request",
    recipient: "academic advisor",
    scenario:
      "You want to take six modules next term instead of the usual five so that you can graduate one term early and save a term's tuition. Your grade average is 3.7, you have never missed a deadline, and you have already mapped all six modules onto the timetable without a single clash. University rules allow an overload only with an academic advisor's signature on the overload form, which must reach the registry by the fifteenth of January. You will email your advisor, Ms Ibarra, to request her approval and a short appointment to sign the form.",
    keyPoints: [
      "Request approval to take six modules next term.",
      "Give your academic reasons and your grade average.",
      "Mention the mapped timetable with no clashes.",
      "Ask for a short appointment to sign the form before the fifteenth.",
    ],
    wordBand: { min: 55, max: 140 },
    difficulty: 4,
    estimatedMinutes: 12,
    instructions:
      "Write one email to Ms Ibarra requesting approval for a six-module overload, presenting your preparation as evidence and covering every key point in your own words.",
    taskRequirements: [
      "State the request and your reason in the opening lines.",
      "Give the grade average and deadline record as evidence.",
      "Show that you have already solved the timetable.",
      "Ask for a brief appointment before the January deadline.",
    ],
    timeGuidance: "Twelve minutes: three gathering your evidence, seven writing, two checking formality.",
    modelResponse:
      "Dear Ms Ibarra,\n\nI would like your approval to take six modules next term instead of the usual five, so that I can graduate one term early and save a term's tuition. I know an overload is a serious commitment, so let me briefly set out my preparation.\n\nMy current grade average is 3.7 with no missed deadlines, and I have mapped all six modules onto next term's timetable without a single clash; the plan is attached. I have also spoken to two of the module leaders, who raised no concerns about workload.\n\nCould we meet briefly before the fifteenth of January so that you can sign the overload form if you are satisfied? I am free any weekday afternoon.\n\nThank you for considering this.\n\nKind regards,\nAmina Diallo\nEconomics, Year 2",
    responseAnalysis:
      "The model anticipates the advisor's main worry — workload — and answers it with evidence before it is raised: the average, the deadline record, the clash-free timetable and the module leaders' views. The request closes with a concrete, low-cost action: one short meeting before the deadline.",
    usefulExpressions: [
      "I would like your approval to…",
      "let me briefly set out my preparation",
      "Could we meet briefly before…",
      "Thank you for considering this.",
    ],
    grammarObservations: [
      "So that clauses state purpose precisely, linking the overload to graduation.",
      "Present perfect have mapped and have spoken turn claims into finished work.",
    ],
    commonMistakes: [
      "Requesting the overload as a right rather than an exception.",
      "Omitting the deadline, leaving the advisor to discover it too late.",
    ],
    independentAssignment:
      "Write the confirmation email after the meeting, summarising what was signed and what you promised to check each month.",
    vocabulary: [
      { word: "overload", partOfSpeech: "noun", definition: "a course load heavier than the normal maximum" },
      { word: "commitment", partOfSpeech: "noun", definition: "something that needs regular time and effort" },
      { word: "approval", partOfSpeech: "noun", definition: "official agreement that something may proceed" },
      { word: "workload", partOfSpeech: "noun", definition: "the amount of work a plan involves" },
    ],
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
];
