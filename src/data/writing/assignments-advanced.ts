/**
 * Advanced writing assignments — the eight required kinds: formal letters,
 * professional emails, reports, argumentative essays, opinion writing,
 * analytical writing, structured reports and professional communication.
 */

import type { WritingAssignment } from "./types";

export const advancedWritingAssignments: WritingAssignment[] = [
  {
    id: "wrt-adv-formal-letters",
    slug: "formal-letters",
    tier: "advanced",
    kind: "formal-letters",
    title: "Formal Letters",
    description:
      "Complaints, applications and requests — the formal register with its fixed moves and courteous power.",
    estimatedMinutes: 20,
    tags: ["writing", "formal"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "fl1",
        title: "A formal complaint that stays polite",
        prompt:
          "Write a formal letter of complaint (12–16 sentences) to a hotel about a serious problem during your stay. Ask for a specific remedy.",
        instructions: [
          "Your address and date at the top (may be abbreviated), then the recipient.",
          "Open with the purpose: 'I am writing to express my concern about…'.",
          "Facts paragraph: what happened, when, with dates and details.",
          "Impact paragraph: how it affected you — measured, not dramatic.",
          "Request paragraph: state exactly what remedy you expect and by when.",
          "Close formally: 'Yours faithfully/Yours sincerely' + name.",
        ],
        hints: [
          "Formal but human: 'I was disappointed to find…' beats 'Your hotel is a disaster'.",
          "'Yours faithfully' when you name is unknown (Dear Sir or Madam); 'Yours sincerely' when you have a name.",
          "One specific request outperforms three vague ones.",
        ],
        difficulty: "hard",
        minWords: 140,
        maxWords: 300,
        targetMinutes: 15,
        checklist: [
          { id: "recipient", label: "A formal salutation", anyOf: ["dear sir", "dear madam", "dear mr", "dear mrs", "dear ms", "dear manager", "to whom"] },
          { id: "purpose", label: "Purpose stated formally", anyOf: ["i am writing to", "i write to", "i wish to", "i am contacting you"] },
          { id: "facts", label: "Facts with dates/details", anyOf: ["on ", "during my stay", "room", "night of", "when i"] },
          { id: "impact", label: "Impact described calmly", anyOf: ["as a result", "unfortunately", "this meant", "consequently", "i was forced", "disappointed"] },
          { id: "request", label: "A specific remedy requested", anyOf: ["i would be grateful", "i request", "i would ask that", "i expect", "refund", "compensation", "i look forward to hearing"] },
          { id: "close", label: "Formal close and name", anyOf: ["yours faithfully", "yours sincerely"] },
        ],
        topicKeywords: ["stay", "room", "i would", "however", "grateful"],
        expectedParagraphs: { min: 4, max: 6 },
        modelText:
          "Dear Sir or Madam,\n\nI am writing to express my concern about my stay at the Harbourview Hotel from 12 to 15 March, booked directly through your website (reference HV-40217).\n\nOn the first night, the heating in room 214 failed. I reported this at reception at 11 p.m. and was told maintenance would visit in the morning; no one came, and the second night was equally cold. In addition, the room was not cleaned on 14 March despite the tag on the door, and the promised replacement towels never arrived.\n\nAs a result, I paid full price for three nights during one of which the room was unusable for several hours, and I lost a morning waiting for maintenance that never appeared. I have stayed at your hotel twice before and expected better.\n\nI would therefore be grateful if you could refund one night of the booking and review the follow-up procedures at reception. I look forward to hearing from you within fourteen days.\n\nYours faithfully,\nDaniel Reyes",
        modelTextNotes:
          "The power of this letter is arithmetic: facts, impact, one request, one deadline — no anger anywhere.",
      },
    ],
  },
  {
    id: "wrt-adv-professional-emails",
    slug: "professional-emails",
    tier: "advanced",
    kind: "professional-emails",
    title: "Professional Emails",
    description:
      "Emails that get things done at work: crisp subject lines, one ask per email, and a close that keeps the relationship.",
    estimatedMinutes: 18,
    tags: ["writing", "workplace"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "pe1",
        title: "The deadline renegotiation",
        prompt:
          "Write a professional email (10–14 sentences) to a client explaining that a deadline cannot be met — and offering a concrete alternative.",
        instructions: [
          "Subject: state the topic, not the apology.",
          "First sentence: context, not preamble.",
          "State the problem honestly and briefly — no long excuses.",
          "Offer a concrete alternative with dates.",
          "End with a clear next step and a warm, professional close.",
        ],
        hints: [
          "Bring a solution, not just bad news — the alternative is the real message.",
          "Name a specific new date; 'as soon as possible' means nothing.",
        ],
        difficulty: "hard",
        minWords: 110,
        maxWords: 240,
        targetMinutes: 13,
        checklist: [
          { id: "subject", label: "A clear subject line", anyOf: ["subject:", "subject :"] },
          { id: "context", label: "Immediate context", anyOf: ["thank you for", "following up", "regarding", "about the", "as discussed", "re your"] },
          { id: "problem", label: "Problem stated honestly", anyOf: ["unfortunately", "i must inform", "we will not be able", "we cannot", "we've encountered", "a delay", "unable to"] },
          { id: "alternative", label: "A concrete alternative", anyOf: ["instead", "what i can offer", "i propose", "i suggest", "by ", "we can deliver", "the revised"] },
          { id: "nextstep", label: "A clear next step", anyOf: ["could we", "does this work", "let me know", "i suggest we", "shall we", "please confirm", "happy to discuss"] },
          { id: "close", label: "Professional close", anyOf: ["best regards", "kind regards", "best,", "regards,", "thank you for your understanding"] },
        ],
        topicKeywords: ["deadline", "we", "deliver", "thank", "regards"],
        expectedParagraphs: { min: 3, max: 5 },
        modelText:
          "Subject: Revised timeline for the Brookfield website launch\n\nHi Priya,\n\nThank you for the call on Monday — the new design direction is exciting, and I want to make sure we launch it well.\n\nUnfortunately, I must inform you that the original 30 April launch date is no longer realistic. The payment integration you requested last week adds roughly six working days, and our developer is out for two of them. Rather than cut testing at the end, I would rather move the date with your agreement.\n\nWhat I can offer instead: full launch on 9 May, or a soft launch of the catalogue pages on 30 April with payments following on 9 May. The second option keeps your original date in the press release while protecting the checkout quality.\n\nCould we take ten minutes tomorrow to choose? I am free from 2 p.m.\n\nBest regards,\nTomas",
        modelTextNotes:
          "Notice: the alternative paragraph is the longest. Solutions deserve more words than problems.",
      },
    ],
  },
  {
    id: "wrt-adv-reports",
    slug: "reports",
    tier: "advanced",
    kind: "reports",
    title: "Reports",
    description:
      "Findings before narrative: an executive summary, sections with headings, and recommendations that can be acted on.",
    estimatedMinutes: 25,
    tags: ["writing", "report"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "rp1",
        title: "The canteen report",
        prompt:
          "Write a short report (14–18 sentences) for your manager on canteen usage. Invent plausible data. Use headings and finish with recommendations.",
        instructions: [
          "Title line, then a 2–3 sentence summary of what the report found.",
          "Section 'Findings': 2–3 key facts with numbers.",
          "Section 'Issues': what the findings mean, the main problem.",
          "Section 'Recommendations': 2–3 concrete actions, ranked.",
          "Neutral register throughout — reports inform, they do not complain.",
        ],
        hints: [
          "Numbers make a report: '62% of staff' beats 'most staff'.",
          "Recommendations should be verifiable: 'pilot a salad bar for one month' can be evaluated; 'improve food' cannot.",
        ],
        difficulty: "hard",
        minWords: 150,
        maxWords: 320,
        targetMinutes: 20,
        checklist: [
          { id: "summary", label: "An opening summary", anyOf: ["summary", "this report", "overview", "purpose of this report"] },
          { id: "headings", label: "Section headings", anyOf: ["findings", "issues", "recommendations", "introduction", "background", "methods"] },
          { id: "data", label: "Findings with numbers or data", anyOf: ["%", "per cent", "percent", "of staff", "survey", "average", "increase", "decrease", "rose", "fell"] },
          { id: "issues", label: "Interpretation of the findings", anyOf: ["this suggests", "the main issue", "the reason", "appears to", "indicates", "because"] },
          { id: "recommendations", label: "Concrete recommendations", anyOf: ["recommend", "we should", "it is suggested", "the report recommends", "first step"] },
          { id: "neutral", label: "Neutral register", anyOf: ["the data", "respondents", "staff", "the survey", "figures"] },
        ],
        topicKeywords: ["report", "canteen", "staff", "recommend", "survey"],
        expectedParagraphs: { min: 4, max: 8 },
        modelText:
          "Report: Staff Canteen Usage, Autumn Term\n\nSummary. This report presents the results of a survey of 214 staff members about canteen use. Overall satisfaction is positive, but usage drops sharply in winter, and the main reason is waiting time at peak hours.\n\nFindings. Seventy-one per cent of respondents use the canteen at least twice a week, with the busiest period between 12:30 and 13:15. Average reported waiting time in this window is eleven minutes, against four minutes earlier or later. When asked why they avoid the canteen in winter, 58% cited the queue and 21% cited limited hot options after 13:00.\n\nIssues. The data suggests that the canteen loses its winter customers not to quality but to pace: the same food, served faster, would likely recover much of the drop. The absence of hot food late in the service compounds the problem for staff on later shifts.\n\nRecommendations. First, pilot a pre-order collection window for the 12:30–13:15 peak, measurable by uptake in one month. Second, extend hot food service to 14:00 on a trial basis. Third, publish queue times weekly so the effects of both changes can be tracked against this term's baseline.",
        modelTextNotes:
          "Every claim in the recommendations can be checked in a month — that is what makes them professional.",
      },
    ],
  },
  {
    id: "wrt-adv-argumentative",
    slug: "argumentative-essays",
    tier: "advanced",
    kind: "argumentative-essays",
    title: "Argumentative Essays",
    description:
      "Claim, evidence, rebuttal — argue a position with steel, not volume.",
    estimatedMinutes: 25,
    tags: ["writing", "argument"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "ae1",
        title: "Should social media platforms be legally responsible for misinformation?",
        prompt:
          "Write an argumentative essay (16–20 sentences) taking a clear position on the motion above.",
        instructions: [
          "Introduction: define the question, state your thesis in one sentence.",
          "Argument 1: your strongest claim + evidence (data, precedent or reasoning).",
          "Argument 2: a second, independent claim + evidence.",
          "Rebuttal: present the best counter-argument fairly, then answer it.",
          "Conclusion: restate the thesis in new words and widen the frame.",
        ],
        hints: [
          "Concede what is true in the counter-argument before dismantling it — fairness is persuasive.",
          "Evidence can be precedent, mechanism or data. Adjectives are none of these.",
        ],
        difficulty: "challenge",
        minWords: 180,
        maxWords: 360,
        targetMinutes: 22,
        checklist: [
          { id: "thesis", label: "A clear thesis", anyOf: ["this essay argues", "i will argue", "should be held responsible", "must be held", "the position of this essay", "i contend"] },
          { id: "claim1", label: "First claim developed", anyOf: ["first", "the strongest", "the primary", "to begin", "one argument"] },
          { id: "evidence1", label: "Evidence for it", anyOf: ["for example", "for instance", "as seen in", "evidence", "precedent", "since ", "which means", "the result"] },
          { id: "claim2", label: "Second claim developed", anyOf: ["second", "furthermore", "moreover", "a further", "additionally"] },
          { id: "rebuttal", label: "Counter-argument answered", anyOf: ["opponents", "critics argue", "it could be said", "some contend", "however", "yet this", "granted", "admittedly"] },
          { id: "conclusion", label: "Conclusion that widens the frame", anyOf: ["in conclusion", "to conclude", "ultimately", "the question is not", "what is at stake"] },
        ],
        topicKeywords: ["platforms", "responsible", "misinformation", "however", "because"],
        targetWords: ["precedent", "liability", "incentive", "regulation", "amplify", "moderation", "democratic", "concede"],
        expectedParagraphs: { min: 5, max: 7 },
        modelText:
          "Few policy questions are as heated as whether social media platforms should bear legal responsibility for the misinformation they carry. This essay argues that they should — narrowly, transparently, and only for content their own systems choose to amplify.\n\nThe strongest argument is one of incentives. Platforms profit from engagement, and falsehood reliably outperforms truth on that measure; a system that profits from a harm while bearing none of its costs will produce more of the harm. Liability is how societies align costs with benefits — it is why we hold factories responsible for what their chimneys emit, even though the factory did not invent the smoke.\n\nA second argument is precedent. When a newspaper prints a defamatory letter, the newspaper is answerable, because publication is an act. A platform's recommendation engine performs the same act millions of times a second, yet claims the innocence of a postal service. The distinction is not principle but scale, and scale is a poor excuse for immunity.\n\nCritics argue, fairly, that liability would force platforms into over-broad censorship, silencing legitimate speech to avoid risk. Granted — full liability for everything carried would be both unworkable and dangerous. But this argues for a narrow rule, not for none: responsibility confined to algorithmic amplification, where the platform acts rather than merely hosts.\n\nIn conclusion, the question is not whether platforms create falsehood — they do not — but whether they may profit from distributing it while the costs fall on everyone else. A narrow duty of care over what their systems amplify is the honest answer to that question.",
        modelTextNotes:
          "The rebuttal concedes a real risk and then uses it to sharpen the thesis — the strongest move in argumentation.",
      },
    ],
  },
  {
    id: "wrt-adv-opinion",
    slug: "opinion-writing",
    tier: "advanced",
    kind: "opinion-writing",
    title: "Opinion Writing",
    description:
      "A newspaper-style opinion piece: a hook, a stance you actually defend, and prose with a pulse.",
    estimatedMinutes: 22,
    tags: ["writing", "opinion"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "ow1",
        title: "Op-ed: the four-day week",
        prompt:
          "Write an opinion piece (14–18 sentences) for a newspaper on whether the four-day working week is a good idea. Take a clear side.",
        instructions: [
          "Hook: an image, fact or scene in the first two sentences — no 'In today's society'.",
          "State your position by sentence three.",
          "Two reasons, each with texture (example, anecdote or consequence).",
          "Answer the strongest objection in one honest paragraph.",
          "End with a line the reader remembers.",
        ],
        hints: [
          "Opinion writing may be warm, personal and rhythmic — but every claim still needs support.",
          "The last line should echo the first image, not summarise the essay.",
        ],
        difficulty: "hard",
        minWords: 160,
        maxWords: 320,
        targetMinutes: 18,
        checklist: [
          { id: "hook", label: "A hook in the opening", anyOf: ["it is", "imagine", "every", "last ", "on monday", "the clock", "most people", "ask any"] },
          { id: "stance", label: "Clear position by sentence three", anyOf: ["i believe", "i am convinced", "we should", "the answer is", "my answer", "in my view", "i think"] },
          { id: "reason1", label: "A first reason with texture", anyOf: ["because", "when ", "for example", "in ", "consider"] },
          { id: "reason2", label: "A second reason with texture", anyOf: ["second", "moreover", "there is also", "and there is", "beyond that"] },
          { id: "objection", label: "The strongest objection answered", anyOf: ["sceptics", "skeptics", "critics", "the objection", "of course", "it is true that", "some will say"] },
          { id: "kicker", label: "A memorable closing line", anyOf: ["the point", "what we", "the question", "time is", "the clock", "in the end", "after all"] },
        ],
        topicKeywords: ["week", "work", "hours", "because", "time"],
        expectedParagraphs: { min: 4, max: 6 },
        modelText:
          "It is 6:40 on a Tuesday, and the train is full of people rehearsing the same quiet arithmetic: how much of today is actually mine? I believe the four-day week is a good idea — not as a perk, but as a correction to a measurement error we have lived with for a century.\n\nThe first reason is productivity's quiet truth: output does not scale with hours. Trials from the UK to New Zealand report the same result — roughly the same work from fewer days, because meetings shrink, interruptions fall, and Tuesday afternoons stop being a performance of effort.\n\nThe second reason is what the fifth day was supposed to buy and no longer does. Wages tracked productivity for decades and then stopped; if the deal is no longer 'more money for more hours', the honest renegotiation is 'the same money for better hours'.\n\nSceptics will say that hospitals and restaurants cannot close on Fridays, and they are right — but no serious proposal asks them to. The four-day week means four days of contracted time per person, not a shuttered Friday; rosters already solve harder puzzles than this.\n\nThe clock on the train wall says the arithmetic has already been done by everyone on board. The only question left is which century we want the answer to arrive in.",
        modelTextNotes:
          "The opening image returns in the closing line — that loop is what makes an op-ed feel finished.",
      },
    ],
  },
  {
    id: "wrt-adv-analytical",
    slug: "analytical-writing",
    tier: "advanced",
    kind: "analytical-writing",
    title: "Analytical Writing",
    description:
      "Break a thing into its parts, weigh them, and say what the parts add up to — analysis, not opinion.",
    estimatedMinutes: 25,
    tags: ["writing", "analysis"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "an1",
        title: "Why does the advertisement work?",
        prompt:
          "Analyse the advertisement described in the instructions (14–18 sentences): identify its persuasive techniques and judge which matter most.",
        instructions: [
          "THE AD: 'A television commercial opens on a dark kitchen at 3 a.m. A mother is awake, feeding a baby. A voice-over says: \"Nobody sees this. We do.\" The product — a pension plan — appears only in the final three seconds, with the company logo and the words: For the years nobody claps for.'",
          "Introduction: name the object of analysis and your central claim.",
          "Analysis 1: one technique, how it works, with a quoted detail.",
          "Analysis 2: a second technique, with a quoted detail.",
          "Analysis 3: a third element (structure, timing or slogan).",
          "Conclusion: which technique carries the most weight, and why.",
        ],
        hints: [
          "Analysis answers HOW and WHY, never just WHAT: 'uses emotion' is description; 'delays the brand so gratitude attaches to the company' is analysis.",
          "Quote small details — the exact words 'nobody claps for' are your evidence.",
        ],
        difficulty: "challenge",
        minWords: 170,
        maxWords: 340,
        targetMinutes: 20,
        checklist: [
          { id: "claim", label: "A central analytical claim", anyOf: ["this analysis", "the advertisement", "the ad", "i will analyse", "i will analyze", "the commercial", "argues that", "succeeds because", "works by"] },
          { id: "technique1", label: "First technique analysed", anyOf: ["emotion", "emotional", "pathos", "empathy", "identification", "the viewer", "audience"] },
          { id: "quote1", label: "A quoted detail as evidence", anyOf: ["\"nobody sees this", "'nobody sees this", "\"nobody claps", "'nobody claps", "3 a.m", "voice-over", "final three seconds"] },
          { id: "technique2", label: "Second technique analysed", anyOf: ["delay", "brand", "logo", "only", "withholds", "structure", "timing", "appears"] },
          { id: "technique3", label: "A third element analysed", anyOf: ["slogan", "tagline", "language", "words", "rhythm", "contrast", "for the years"] },
          { id: "judgment", label: "A reasoned judgement at the end", anyOf: ["the most", "carries", "weight", "decisive", "it is the", "because"] },
        ],
        topicKeywords: ["advertisement", "ad", "viewer", "brand", "because"],
        expectedParagraphs: { min: 5, max: 7 },
        modelText:
          "A pension plan is the least cinematic product imaginable, and that impossibility is precisely what the advertisement exploits. This analysis argues that the commercial works through identification, strategic delay and linguistic contrast — and that delay is the load-bearing technique.\n\nThe first technique is identification with unseen labour. The 3 a.m. kitchen offers the viewer a scene of care that is usually invisible, and the voice-over's line — \"Nobody sees this. We do.\" — performs the act of seeing that the scene depicts. The audience is positioned as the one witness to its own unrecognised effort, which is a far stronger bond than any product feature could create.\n\nThe second technique is the strategic delay of the brand. For twenty-seven of thirty seconds, no product appears at all; the pension plan surfaces only in the final three. This sequencing does something specific: it allows gratitude, and the sense of being understood, to accumulate unattached, and then binds it to the logo at the last possible moment. Had the brand opened the commercial, the same scene would read as an intrusion.\n\nThe third element is linguistic contrast in the slogan. \"For the years nobody claps for\" answers \"Nobody sees this\" almost word for word: nobody/nobody, sees/claps. The echo turns the commercial's observation into the company's promise — the language itself argues that this brand noticed what others did not.\n\nThe delay nonetheless carries the most weight. Identification and slogan both depend on it: without the withheld logo, there is no unattached feeling to bind, and no payoff for the echo. The advertisement's real product, in those first twenty-seven seconds, is trust manufactured in the dark.",
        modelTextNotes:
          "Each paragraph names a technique, shows the exact words, and explains the mechanism — description never substitutes for explanation.",
      },
    ],
  },
  {
    id: "wrt-adv-structured",
    slug: "structured-reports",
    tier: "advanced",
    kind: "structured-reports",
    title: "Structured Reports",
    description:
      "The full professional format: terms of reference, procedure, findings, analysis, recommendations — numbered, cross-referenced, actionable.",
    estimatedMinutes: 30,
    tags: ["writing", "report", "professional"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "sr1",
        title: "The remote-work review",
        prompt:
          "Write a structured internal report (16–20 sentences) reviewing your team's remote-work practice, with numbered sections and evidence-based recommendations.",
        instructions: [
          "1. Terms of reference: who asked for the report, its scope, in 2 sentences.",
          "2. Procedure: how the evidence was gathered (survey, interviews, data).",
          "3. Findings: 3–4 numbered findings with data.",
          "4. Analysis: what the findings mean taken together.",
          "5. Recommendations: 2–3 numbered recommendations, each with an owner and a review date.",
          "Impersonal register: 'the survey found', not 'I think'.",
        ],
        hints: [
          "Findings describe; analysis interprets; recommendations act. Keep the three separate.",
          "Every recommendation needs an owner and a date, or it is a wish.",
        ],
        difficulty: "challenge",
        minWords: 200,
        maxWords: 380,
        targetMinutes: 25,
        checklist: [
          { id: "terms", label: "Terms of reference section", anyOf: ["terms of reference", "1.", "purpose", "this report was", "scope"] },
          { id: "procedure", label: "Procedure section", anyOf: ["procedure", "method", "the survey", "interviews", "data was collected", "over "] },
          { id: "findings", label: "Numbered findings with data", anyOf: ["finding", "findings", "%", "per cent", "percent", "of respondents"] },
          { id: "analysis", label: "Analysis section", anyOf: ["analysis", "taken together", "this suggests", "the pattern", "indicates"] },
          { id: "recommendations", label: "Numbered recommendations with owners/dates", anyOf: ["recommend", "should", "by ", "review", "owner", "within"] },
          { id: "impersonal", label: "Impersonal register", anyOf: ["the report", "the survey", "the data", "the team", "respondents"] },
        ],
        topicKeywords: ["report", "remote", "team", "findings", "recommendations"],
        expectedParagraphs: { min: 5, max: 10 },
        modelText:
          "Internal Report: Remote-Work Practice, Marketing Team\n\n1. Terms of reference. This report was commissioned by the Head of Marketing in September to review the team's remote-work practice after two years of the hybrid policy, and to recommend adjustments before the January planning cycle.\n\n2. Procedure. Evidence was gathered from a survey of all 28 team members (26 responses), structured interviews with six staff, and helpdesk data covering VPN dropouts and meeting-room bookings for the period June–August.\n\n3. Findings. (i) Eighty-one per cent of respondents want to retain the hybrid policy, but 65% report that the current fixed days create 'coordination debt' — work waiting for a colleague's office day. (ii) Tuesday and Thursday are the busiest office days, while Monday occupancy averages 22%, making shared desks look scarce when they are not. (iii) Interview data shows junior staff disproportionately value office days for learning, while senior staff cite focus at home. (iv) Meeting-room bookings on office days exceed capacity between 11:00 and 15:00 in 43% of weeks reviewed.\n\n4. Analysis. Taken together, the findings suggest the problem is not the amount of remote work but the allocation of shared days: the team concentrates onto two days, creating queues for rooms and people, while Monday's empty office signals a policy nobody believes in. The divergence between junior and senior needs indicates that a single rule will keep producing losers on both sides.\n\n5. Recommendations. (1) Replace fixed days with a team agreement of two anchor days per week, chosen quarterly and published on the shared calendar — owner: team lead, in place by 1 December. (2) Reserve two bookable focus rooms for junior staff office days and pair them with a monthly skills session — owner: office manager, pilot from January. (3) Publish a monthly dashboard of occupancy and booking data so the next review compares evidence rather than impressions — owner: operations, first dashboard 31 January.",
        modelTextNotes:
          "Notice the arithmetic of credibility: 26 responses, 81%, 22%, 43% — and every recommendation has a number, an owner and a date.",
      },
    ],
  },
  {
    id: "wrt-adv-professional",
    slug: "professional-communication-writing",
    tier: "advanced",
    kind: "professional-communication-writing",
    title: "Professional Communication",
    description:
      "The hard messages of working life: disagreeing in writing, giving difficult feedback, and saying no without burning bridges.",
    estimatedMinutes: 22,
    tags: ["writing", "workplace", "diplomacy"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "pc1",
        title: "Disagreeing with a decision — in writing",
        prompt:
          "Write a message (12–16 sentences) to a senior colleague disagreeing with a decision they have announced. Be direct about your disagreement and constructive about the path forward.",
        instructions: [
          "Open by naming the decision and your respect for its intent.",
          "State your disagreement clearly, in one sentence, early — do not bury it.",
          "Give your two strongest reasons, each with a concrete consequence.",
          "Offer a path that partly adopts their goal with different means.",
          "Close by accepting that the decision is theirs, warmly.",
        ],
        hints: [
          "Disagree with the reasoning, never with the person: 'I worry this will…' not 'you are wrong to…'.",
          "Directness is kindness here: a buried disagreement is read later as sabotage.",
        ],
        difficulty: "hard",
        minWords: 140,
        maxWords: 280,
        targetMinutes: 16,
        checklist: [
          { id: "intent", label: "Respect for the intent named", anyOf: ["i understand", "i know", "i appreciate", "the goal of", "i can see why", "the intention"] },
          { id: "disagreement", label: "Disagreement stated clearly and early", anyOf: ["however, i", "i disagree", "i have concerns", "i am not convinced", "i worry that", "i don't believe", "i do not believe"] },
          { id: "reason1", label: "First reason with a consequence", anyOf: ["first", "because", "the risk", "this would", "the result", "which would"] },
          { id: "reason2", label: "Second reason with a consequence", anyOf: ["second", "moreover", "there is also", "in addition", "and if"] },
          { id: "alternative", label: "A constructive path offered", anyOf: ["an alternative", "what if", "could we", "i would suggest", "one option", "might achieve the same"] },
          { id: "acceptance", label: "Warm close that accepts their call", anyOf: ["your call", "your decision", "of course", "whatever you decide", "i will support", "happy to discuss"] },
        ],
        topicKeywords: ["decision", "i", "we", "because", "however"],
        expectedParagraphs: { min: 4, max: 6 },
        modelText:
          "Dear Marta,\n\nThank you for setting out the new client-review process so clearly — I know the aim is faster sign-offs, and after last quarter's delays nobody doubts the goal.\n\nHowever, I disagree with removing the technical review step, and I want to say so plainly rather than let it surface later. First, the step exists because two of our three largest clients reversed approvals last year when technical issues appeared after sign-off; removing it risks trading a slow yes for an expensive no. Second, the step currently takes an average of one day; the four-week delays in March came from the approval chain above it, which this change does not touch.\n\nOne option that might achieve the same speed: keep the technical review but run it in parallel with the legal check instead of after it. That would cut roughly three days from the cycle while keeping the safety we actually bought the step for.\n\nOf course, the decision is yours, and I will implement whatever you choose fully. If it would help, I can bring the parallel-review numbers to Thursday's meeting.\n\nBest regards,\nIvan",
        modelTextNotes:
          "The disagreement appears in paragraph two, not paragraph four — and the alternative is as concrete as the criticism.",
      },
    ],
  },
];
