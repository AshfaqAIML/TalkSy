/**
 * Enrichment metadata (difficulty + post-submission explanations) for the
 * IELTS mock library in src/data/exams/ielts. Keys are
 * "<sectionKey>:<questionOrder>" within each mock; applied by the seed
 * script to existing MockTestQuestion rows. Original EnglishPath content.
 */
export type SeedQuestionMeta = {
  /** 1-5, 1 = foundation (A2-B1) … 5 = advanced (C1-C2). */
  difficulty: number;
  /** 15-45 words; references the actual answer key. */
  explanation: string;
};
export type SeedMockMeta = Record<string, SeedQuestionMeta>;

export const LIBRARY_SEED_META: Record<string, SeedMockMeta> = {
  "IELTS Academic Full Mock 1 (sample length)": {
    "listening:1": {
      difficulty: 2,
      explanation:
        "The form takes 'Harper' (spelled out H-A-R-P-E-R), 'gold' — the membership that includes every scheduled class — and 'fourth', since Rita moves the start from the first of March to the fourth.",
    },
    "listening:2": {
      difficulty: 2,
      explanation:
        "Option A is correct: the start moved from 9:00 to 9:30 and volunteers meet at the side gate. The speaker corrects both time and place — the main gate stays locked all weekend.",
    },
    "listening:3": {
      difficulty: 3,
      explanation:
        "The pair agree on options A and D: the ethics approval deadline is the binding constraint ('without it you can't interview anyone'), and twenty interviews suffice 'if we're honest about the limits'. The licence worry is dismissed.",
    },
    "listening:4": {
      difficulty: 3,
      explanation:
        "The godwit descends to feed at first light over 'mudflats' and steers by stars, the earth's magnetic field and an internal 'clock'. Both words occur once in the lecture; mudflats is the spelling risk.",
    },
    "reading:1": {
      difficulty: 2,
      explanation:
        "Option B matches the survey figures exactly: 'around a third of online fashion is returned, against roughly a tenth of goods bought in physical stores.' The other options exaggerate or contradict the passage.",
    },
    "reading:2": {
      difficulty: 3,
      explanation:
        "False. The statement claims 'no measurable effect', but the passage reports that early carbon-labelling trials 'cut returns by several per cent' — a real, if modest, effect.",
    },
    "reading:3": {
      difficulty: 2,
      explanation:
        "True. The passage says retailers adjust prices so that 'shoppers who keep what they buy subsidise shoppers who do not' — 'help pay for' is a direct paraphrase of 'subsidise'.",
    },
    "reading:4": {
      difficulty: 3,
      explanation:
        "Yes. Paragraph D states that 'competition on search pages rewards generosity, because a liberal returns policy raises conversion' — matching the claim that search-page competition actively rewards generous returns policies.",
    },
    "reading:5": {
      difficulty: 3,
      explanation:
        "Not Given. The writer discusses carbon costs and possible regulation but never proposes banning online shopping. Do not let the environmental tone of the passage decide a view the writer never states.",
    },
    "reading:6": {
      difficulty: 3,
      explanation:
        "Paragraph B is the destination for goods that never resurface — sold in bulk to discounters or destroyed. Paragraph C holds the real-but-modest measure: carbon labelling, which 'cut returns by several per cent'.",
    },
    "reading:7": {
      difficulty: 3,
      explanation:
        "The summary needs 'conversion' — what a generous returns policy raises and the ranking algorithm measures — and 'collective action', the writer's alternative to regulation for changing the economics. Respect the two-word limit.",
    },
    "writing:1": {
      difficulty: 3,
      explanation:
        "Task 1 wants a report on cinema admissions from 97 million in 1990 to 44 million in 2020, via the 2010 peak of 171 million. Select main features, compare, and give an opinion-free overview.",
    },
    "writing:2": {
      difficulty: 4,
      explanation:
        "A discussion essay: some say home working mainly benefits staff, others that it harms teamwork and culture. Cover both views in separate body paragraphs, add your own opinion early, and write at least 250 words.",
    },
    "speaking:1": {
      difficulty: 2,
      explanation:
        "Part 1 interview about where you live and food. Extend each answer two or three sentences beyond a bare yes or no — examiners are sampling everyday vocabulary and natural fluency, not exotic ideas.",
    },
    "speaking:2": {
      difficulty: 3,
      explanation:
        "The cue card asks for an everyday object: what it is, how long you have had it, its use, and why it matters. Cover all four bullets and speak for the full two minutes.",
    },
    "speaking:3": {
      difficulty: 4,
      explanation:
        "Part 3 turns abstract: over-ownership, attachment to objects, repair versus replacement. Speculate with phrases like 'I'd argue that', support views with reasons, and show range through concession and comparison structures.",
    },
  },

  "IELTS Academic Full Mock 2 (sample length)": {
    "listening:1": {
      difficulty: 2,
      explanation:
        "The note needs 'twenty-second' (Thursday the 22nd, afternoon), 'Beacon' — spelled B-E-A-C-O-N — and 'drum', the part that will not finish its cycle. The machine's age is context, not an answer.",
    },
    "listening:2": {
      difficulty: 2,
      explanation:
        "Option A: the DVDs moved to the second floor from the ground floor, where the children's zone now sits. Newspapers went to the first floor — B and C swap the floors.",
    },
    "listening:3": {
      difficulty: 3,
      explanation:
        "The tutor's two warnings are A and C: ranking more than five items builds analysis on noise, and leading questions force answers, so pilot them on five friends. The ethics point is labelled 'a practical one'.",
    },
    "listening:4": {
      difficulty: 3,
      explanation:
        "Cities run two or three degrees hotter than the surrounding 'fields', and trees cool by evaporation as well as 'shadow'. Both single-word answers are spoken once in the lecture; 'shade' is accepted.",
    },
    "reading:1": {
      difficulty: 3,
      explanation:
        "Paragraph B explains why human eyes still beat algorithms at awkward patterns — heading ii. Paragraph D asks what volunteers get out of it, finding 'the pleasure of being useful' — heading iv.",
    },
    "reading:2": {
      difficulty: 2,
      explanation:
        "True. Projects 'cross-check novices against known answers so that a reliable accuracy score can be attached to each contributor' — precisely the reliability scoring the statement describes.",
    },
    "reading:3": {
      difficulty: 3,
      explanation:
        "False. Averaged crowd judgement is 'frequently indistinguishable from a panel of specialists', and medical volunteers matched trained staff. The sceptics' quality worry is raised only to be contradicted.",
    },
    "reading:4": {
      difficulty: 3,
      explanation:
        "Not Given. Whether the volunteers' satisfaction survives the move to phone screens 'is the subject of current study' — an open question, with no expectation stated either way.",
    },
    "reading:5": {
      difficulty: 3,
      explanation:
        "Yes. The writer says 'the appeal is not only cheap labour, though it is certainly cheap' — the crowd model is regarded as cheaper than the alternative it replaces.",
    },
    "reading:6": {
      difficulty: 3,
      explanation:
        "The summary takes 'experts' (volunteers beat the team's own experts in a day) and 'specialists' (aggregate judgement is hard to distinguish from 'a panel of specialists'). Both words come from the passage.",
    },
    "writing:1": {
      difficulty: 3,
      explanation:
        "The table compares four museums across Q4 2024 and Q4 2025: City History rose to 96k, the Portrait Gallery fell to 48k, and average stay grew from 78 to 94 minutes. Group risers against fallers.",
    },
    "writing:2": {
      difficulty: 4,
      explanation:
        "A two-part Task 2 on longer lifespans: the problems for families, then what governments can do. Devote a paragraph to each half — caregiving strain, then policy responses — with reasons and examples in 250+ words.",
    },
    "speaking:1": {
      difficulty: 2,
      explanation:
        "Interview questions on study or work, internet use for work versus leisure, and recent routine changes. Answer directly, then add one reason or example; natural range matters more than perfect grammar.",
    },
    "speaking:2": {
      difficulty: 3,
      explanation:
        "Describe an event you attended and enjoyed: the event, your company, what happened, and why you enjoyed it. Narrate in past tenses and finish on the 'explain' bullet for a strong close.",
    },
    "speaking:3": {
      difficulty: 4,
      explanation:
        "Part 3 asks why some events unite people, how public celebrations have changed, and whether governments should fund festivals. Argue positions with reasons and handle the 'should' questions with modals and concessions.",
    },
  },

  "IELTS General Training Full Mock 1 (sample length)": {
    "listening:1": {
      difficulty: 2,
      explanation:
        "The appointment card takes 'four' (Thursday the 13th at four), 'Wojcik' spelled W-O-J-C-I-K, and 'T-shirt' — bring shorts and a T-shirt. The Tuesday morning slot is the distractor to avoid.",
    },
    "listening:2": {
      difficulty: 2,
      explanation:
        "Option A: pottery moves to Wednesdays at seven and the fee rises to £5 for the new kilns. The leaflet's ceramics-fair date is also corrected, but B and C keep the outdated details.",
    },
    "listening:3": {
      difficulty: 3,
      explanation:
        "Options B and C: both students found the report-layout section hardest, and the second adds file-management troubles with versions. The typing test was fine and the spreadsheets 'turned out to be the easiest part'.",
    },
    "listening:4": {
      difficulty: 3,
      explanation:
        "The lecture's final sentences supply 'sound' — no device captures a smell the way a microphone captures sound — and 'nose', the perfumer's basic tool that no machine has replaced.",
    },
    "reading:1": {
      difficulty: 2,
      explanation:
        "Option A restates the concessions line: over-65s, students and jobseekers get '25% off ONE course per person per term'. That is a discount on one course — not free courses, and missed sessions are rescheduled, not refunded.",
    },
    "reading:2": {
      difficulty: 3,
      explanation:
        "False. The refundable £10 deposit is for pottery tools; photography learners must bring their own camera. The deposit attaches to a different course — a classic GT small-print trap.",
    },
    "reading:3": {
      difficulty: 3,
      explanation:
        "Option A: the certificate must be dated within two years, but the employer 'will fund renewal for the right candidate', so an older certificate can still lead to hire. Verbal swaps are explicitly rejected.",
    },
    "reading:4": {
      difficulty: 1,
      explanation:
        "True — among the entitlements the advert lists 'a free meal on every shift', word for word the statement's claim. A direct detail check on the benefits list.",
    },
    "reading:5": {
      difficulty: 2,
      explanation:
        "Not Given. The advert covers duties, certificates, leave, swaps and uniforms; opening days are never mentioned, so nothing in the text supports any claim about Sundays.",
    },
    "reading:6": {
      difficulty: 3,
      explanation:
        "Option A: landlords 'now prefer short, flexible terms with independents' because a street that changes monthly draws visitors — footfall research says people travel for it. Banning chains is never claimed.",
    },
    "reading:7": {
      difficulty: 4,
      explanation:
        "False. The baker earns from Monday-night sourdough classes and the bookshop from paid reading evenings: paragraph B says traders now sell 'presence', not stock. The bike shop's margins are the only ones spelled out.",
    },
    "reading:8": {
      difficulty: 3,
      explanation:
        "No. The writer calls nostalgia for the high street of 1985 'chasing the wrong thing' — the opposite of a useful guide. The elegiac opening about the butcher and the bank is the trap.",
    },
    "reading:9": {
      difficulty: 2,
      explanation:
        "Yes. The passage says some councils treat vacancy as the product: 'a pop-up market of five empty units draws more visitors than one permanent shop that nobody visits twice'.",
    },
    "reading:10": {
      difficulty: 5,
      explanation:
        "Not Given. The closing lines say places that answer the non-revenue question well are busy 'whatever they sell' — busyness is never linked to selling more goods. Keep your own market assumptions out of the judgement.",
    },
    "reading:11": {
      difficulty: 2,
      explanation:
        "One word from the passage: 'use' — 'buildings whose use changes as often as the weather'. The summary sentence is nearly verbatim, so scan for it rather than paraphrasing.",
    },
    "writing:1": {
      difficulty: 3,
      explanation:
        "A formal complaint about a celebration cake with a misspelled inscription and wrong flavour: describe the order, state what you want done, and explain why it matters. Stay firm and polite — never angry.",
    },
    "writing:2": {
      difficulty: 4,
      explanation:
        "Discuss both views — big-city living versus a healthier, happier countryside — then give your own opinion. Balance the two body paragraphs, state your position in the introduction, and support it with examples.",
    },
    "speaking:1": {
      difficulty: 2,
      explanation:
        "Everyday interview questions: where your home town is, how it has changed, and music while you work. Answer personally and concretely — Part 1 checks fluency and common topic vocabulary.",
    },
    "speaking:2": {
      difficulty: 3,
      explanation:
        "The cue card: a piece of music you like — what it is, when you first heard it, how it makes you feel, and why it means something. Use the prep minute for one note per bullet.",
    },
    "speaking:3": {
      difficulty: 4,
      explanation:
        "Abstract discussion: government funding of music education, why some songs last generations, and technology's effect on new musicians. Build from opinion to reasoned argument, using speculation and examples.",
    },
  },

  "IELTS General Training Full Mock 2 (sample length)": {
    "listening:1": {
      difficulty: 2,
      explanation:
        "Three blanks: 'Naylor' (spelled N-A-Y-L-O-R), 'six' items for a standard member, and 'sixth' — the card goes live tomorrow, the sixth. Catch the six/sixth contrast at speed.",
    },
    "listening:2": {
      difficulty: 2,
      explanation:
        "Option A: the training evening is the twentieth, lasting two hours — not the twelfth for one hour. The side-entrance rule concerns school groups during the front-steps repairs, not the training session.",
    },
    "listening:3": {
      difficulty: 3,
      explanation:
        "Options A and B: take the welcome desk ('you'll learn the museum in a week') and the school workshops ('you will never learn the collection faster'). Fundraising calls and evening openings are explicitly discouraged.",
    },
    "listening:4": {
      difficulty: 3,
      explanation:
        "Green tea is heated within hours of picking to stop 'oxidation', and coastal 'ports' keep the older pronunciation because the word arrived by sea. Dense Part 4 vocabulary makes both blanks demanding.",
    },
    "reading:1": {
      difficulty: 2,
      explanation:
        "Option A: Route 14 is withdrawn, so 'passengers should use Route 3, which runs every 20 minutes and accepts Route 14 tickets for one month.' B confuses the two routes; Sunday buses start later.",
    },
    "reading:2": {
      difficulty: 2,
      explanation:
        "True. Evening services after 19:30 are discontinued only 'Monday–Thursday'; 'Friday and Saturday evenings unchanged' — so a Route 22 bus after 19:30 on a Friday still runs.",
    },
    "reading:3": {
      difficulty: 2,
      explanation:
        "False. Season-ticket refunds are 'available at the travel shop for any ticket with a month or more remaining'; the text adds 'no refunds at the driver's window' — the direct contradiction.",
    },
    "reading:4": {
      difficulty: 2,
      explanation:
        "Option A: the study day 'is paid and fixed — Tuesday for this intake, and it may not be swapped to save the day for production.' Home-to-site mileage is also unpaid.",
    },
    "reading:5": {
      difficulty: 2,
      explanation:
        "True. An apprentice unwell on an exam day 'must inform the provider before nine o'clock to qualify for a resit' — exactly the condition the statement describes.",
    },
    "reading:6": {
      difficulty: 2,
      explanation:
        "Not Given. The policy covers study days, exams, mileage and absence rules; weekend pay is never mentioned, so no judgement can be made either way.",
    },
    "reading:7": {
      difficulty: 3,
      explanation:
        "Option A: the passage defines 'teleport errors' as arriving 'without any sense of the space in between', and says route-as-sequence navigators are more prone to them. Internal-map navigators cope when a road closes.",
    },
    "reading:8": {
      difficulty: 2,
      explanation:
        "True. In the city trials sketch maps improved 'with the largest gains among the people who had been most screen-dependent' — the statement's claim, almost word for word.",
    },
    "reading:9": {
      difficulty: 3,
      explanation:
        "Not Given. The writer says navigation apps have 'quietly atrophied a skill' but never proposes uninstalling them. A critical tone about technology is not the same as a stated recommendation.",
    },
    "reading:10": {
      difficulty: 2,
      explanation:
        "Yes. The writer says the sense of direction 'behaves like a muscle: it weakens unused and responds to deliberate exercise' — precisely the trainable-as-muscle claim.",
    },
    "reading:11": {
      difficulty: 2,
      explanation:
        "One word: 'sequence' — the two types are those who build an internal map and 'those who learn a route as a sequence of turns'. The summary copies the passage closely.",
    },
    "writing:1": {
      difficulty: 3,
      explanation:
        "A semi-formal letter to a neighbour about late-evening drum practice after one failed conversation: describe the disturbance, propose a compromise on times or sound-proofing, and offer help. Friendly, not aggressive.",
    },
    "writing:2": {
      difficulty: 4,
      explanation:
        "Weigh whether grandparents' help with childcare brings more advantages than disadvantages. Take a clear position, give both sides concrete examples, and answer the 'outweigh' question explicitly in your conclusion.",
    },
    "speaking:1": {
      difficulty: 2,
      explanation:
        "Interview on your typical morning, preferred way to travel, and a place you want to visit. Two or three sentences per answer, moving naturally between present habits and future plans.",
    },
    "speaking:2": {
      difficulty: 3,
      explanation:
        "Describe a person who taught you something important: who they are, what and how they taught, and what difference it made. End on the difference — reflection, not just description.",
    },
    "speaking:3": {
      difficulty: 4,
      explanation:
        "Discussion on whether some subjects need particular teachers, training versus subject knowledge, and the next twenty years of teaching. Speculate with modals and defend generalisations with reasons.",
    },
  },

  "IELTS Listening Section Mock (Academic) 1": {
    "listening:1": {
      difficulty: 2,
      explanation:
        "The form takes 'climbing' — the course with equipment provided and no hire charge — 'Pettersen' (P-E-double-T-E-R-S-E-N) and 'eight forty-five'; the clerk stresses it is not nine o'clock as last term.",
    },
    "listening:2": {
      difficulty: 2,
      explanation:
        "Option A: the visitor centre now closes at four, not five as the website says, and the fire assembly point is the car park — the old lake instruction was 'a mistake'.",
    },
    "listening:3": {
      difficulty: 3,
      explanation:
        "The writing-requirements clash (weekly firm notes versus the university's reflective piece) is raised by Student 1; commuting time and travel costs by Student 2. The supervisor only resolves and agrees.",
    },
    "listening:4": {
      difficulty: 3,
      explanation:
        "One word: 'pipe' — the cost per litre 'rises with every kilometre of pipe the water must travel', which is why inland cities that need desalination most can least use it.",
    },
    "listening:5": {
      difficulty: 3,
      explanation:
        "Options A and C: the real cost drivers are energy ('plants follow cheap electricity around the world') and brine disposal with its permits. Membranes are mass-produced, and subsidies push prices down, not up.",
    },
    "listening:6": {
      difficulty: 2,
      explanation:
        "Option A: the reading room opens Tuesday to Friday only, with Saturdays reserved for school visits — a correction to the briefing pack. The online catalogue stays available around the clock.",
    },
    "listening:7": {
      difficulty: 2,
      explanation:
        "Two words allowed; the answer is 'station' — use 'the open-air site at the station', where the first two hours are free for members. The Duke Street multi-storey closed on Monday.",
    },
  },

  "IELTS Listening Section Mock (General Training) 1": {
    "listening:1": {
      difficulty: 2,
      explanation:
        "The quote form needs 'ninth' (leaving on the ninth of June), 'single' — single-trip, not annual — and 'inhalers', which the £29 premium includes. The date of birth is given, not blanked.",
    },
    "listening:2": {
      difficulty: 2,
      explanation:
        "Option A: the kitchens 'are open all night now' and cookware is provided. What changed is the fans — frying after 10 p.m. sets off the alarm once night mode begins.",
    },
    "listening:3": {
      difficulty: 3,
      explanation:
        "Options A and B: the inter-library loan guarantee is gone (items can take three weeks) and the evening scanning service has been lost. The repository and self-booked study rooms still work.",
    },
    "listening:4": {
      difficulty: 3,
      explanation:
        "One word: 'timetable' — the waggle dance is 'less a map than a timetable with an expiry time', because information about a flower patch decays within the hour.",
    },
    "listening:5": {
      difficulty: 2,
      explanation:
        "Option A: the £4 transport allowance is 'paid only to staff who start after eight in the evening' — a seven o'clock start disqualifies you. The recruiter flags this as the part people miss.",
    },
    "listening:6": {
      difficulty: 2,
      explanation:
        "The draft outline is due by the 'seventeenth', a fortnight before the thirty-first full-application deadline, or the submission slips a round. This number must be computed, not just heard.",
    },
  },

  "IELTS Academic Reading Section Mock 1": {
    "reading:1": {
      difficulty: 3,
      explanation:
        "Paragraph B matches heading i — the tractor and soluble nitrogen made disturbance instant and redefined the field as a 'factory floor'. Paragraph C matches ii: restoration is 'cheaper than expected'.",
    },
    "reading:2": {
      difficulty: 2,
      explanation:
        "True. Paragraph A says soil performs services 'that no technology reproduces at any price' — the statement's 'no existing technology' restates it directly.",
    },
    "reading:3": {
      difficulty: 3,
      explanation:
        "True. Paragraph C reports the fastest organic-matter gains 'on the poorest land — precisely the fields conventional agronomy had written off'; 'previously considered hopeless' paraphrases 'written off'.",
    },
    "reading:4": {
      difficulty: 3,
      explanation:
        "Not Given. Paragraph D says verification 'invites both fraud and honest error', but the writer never says soil-carbon markets should be closed — only that the arithmetic of audits defeats them.",
    },
    "reading:5": {
      difficulty: 3,
      explanation:
        "Yes. The reviews conclude 'the science is sound at the level of fields, and unusable at the level of trade' — exactly the statement's pairing of trustworthy field science with failed trade use.",
    },
    "reading:6": {
      difficulty: 2,
      explanation:
        "Option A: soluble nitrogen 'let farmers feed crops without feeding the soil'. Yields rose where the package travelled, not fell, and no invention order for tractor versus nitrogen is given.",
    },
  },

  "IELTS General Training Reading Section Mock 1": {
    "reading:1": {
      difficulty: 2,
      explanation:
        "Option A: 'late keys forfeit the deposit entirely' — lateness alone loses the £50; breakage is a separate condition. Hirers may never switch the boiler on themselves.",
    },
    "reading:2": {
      difficulty: 1,
      explanation:
        "True. The notes state the hall 'is warmed from one hour before your booking' — word for word the statement's claim. A straightforward detail check.",
    },
    "reading:3": {
      difficulty: 2,
      explanation:
        "Not Given. The cleaner 'comes at dawn, not after your event', but the notes never mention paying the cleaner or charging hirers for cleaning.",
    },
    "reading:4": {
      difficulty: 2,
      explanation:
        "Option A: 'the rostering app is how shifts are offered and accepted', and phoning the office is discouraged. Mileage between visits is paid; the home-to-first-visit leg is not.",
    },
    "reading:5": {
      difficulty: 2,
      explanation:
        "True — the advert promises to train the right candidate 'including a paid first-aid certificate', so the employer funds it. Experience is preferred, but 'aptitude outranks it'.",
    },
    "reading:6": {
      difficulty: 2,
      explanation:
        "Not Given. The advert covers duties, training, the app and mileage; whether workers may bring children on visits is simply never addressed.",
    },
    "reading:7": {
      difficulty: 3,
      explanation:
        "Option A: 'Where councils measured loans alone, branches closed; where they measured visits… the same buildings filled.' The internet prophecy 'has aged worst' — lending held up.",
    },
    "reading:8": {
      difficulty: 3,
      explanation:
        "False. After cheap broadband reached the poorest districts, 'lending held up better than anyone modelled' — the opposite of a fall. The closure prophecy is what failed.",
    },
    "reading:9": {
      difficulty: 2,
      explanation:
        "One word: 'zones' — the future library is 'a building of zones rather than a single hush', a street indoors with rooms off it, some loud and some not.",
    },
  },

  "IELTS Academic Writing Section Mock 1": {
    "writing:1": {
      difficulty: 3,
      explanation:
        "Two linked charts: cameras fall from 61% to 22% of sales while services climb to 31%, against totals rising from £410m to £688m. Report shares and absolute figures together, with one clear overview.",
    },
    "writing:2": {
      difficulty: 4,
      explanation:
        "Discussion essay: compulsory foreign-language study versus subjects with clearer career applications. Present both views fairly in separate paragraphs, commit to your own opinion with reasons and examples, and exceed 250 words.",
    },
  },

  "IELTS General Training Writing Section Mock 1": {
    "writing:1": {
      difficulty: 3,
      explanation:
        "A formal request to a club secretary: introduce yourself and your interests, ask about fees, times and equipment, and say what the outdated website gets wrong. Give all three bullets equal coverage.",
    },
    "writing:2": {
      difficulty: 4,
      explanation:
        "An advantages/disadvantages essay on shops opening public holidays. Weigh benefits against workers' rest, decide clearly whether the advantages outweigh the disadvantages, and hold that position through both body paragraphs.",
    },
  },

  "IELTS Speaking Section Mock (Academic) 1": {
    "speaking:1": {
      difficulty: 2,
      explanation:
        "Opening interview on work or study, childhood ambitions and sport. Extend each answer a sentence or two beyond the minimum — fluency and everyday range are what Part 1 samples.",
    },
    "speaking:2": {
      difficulty: 3,
      explanation:
        "Cue card: a journey that took longer than expected — destination, what happened, how you passed the time, and your feelings by the end. Tell it as a past-tense story with a reflective close.",
    },
    "speaking:3": {
      difficulty: 4,
      explanation:
        "Abstract questions: does cheap travel breed impatience, is some waiting good for us, why might future generations travel less? Speculate, justify and exemplify — description alone will not carry Part 3.",
    },
    "speaking:4": {
      difficulty: 2,
      explanation:
        "Second-round Part 1 on cooking, today's breakfast and a childhood food memory. Keep answers short and lively, shifting naturally between present habits and past memories.",
    },
    "speaking:5": {
      difficulty: 4,
      explanation:
        "Extension discussion: is cooking a life skill every school leaver should have, and should schools or families teach it? Take a position, defend it with reasons, and consider the counter-argument.",
    },
  },

  "IELTS Speaking Section Mock (General Training) 1": {
    "speaking:1": {
      difficulty: 2,
      explanation:
        "Interview about your household, usual weekends and how they have changed over the years. Concrete personal detail with simple, natural linking beats a rehearsed speech every time.",
    },
    "speaking:2": {
      difficulty: 3,
      explanation:
        "Cue card: a time you helped someone — who, the situation, what you did, and how you felt afterwards. Sequence the story clearly and give the closing feeling real weight.",
    },
    "speaking:3": {
      difficulty: 4,
      explanation:
        "Discussion on whether neighbours should help more, why some communities feel close, and social media's effect on helping. Move from personal anecdote to societal argument with generalising language.",
    },
    "speaking:4": {
      difficulty: 2,
      explanation:
        "Second-round questions on apps: how many you use, which single one you would keep, and changing phone habits. Choose quickly and justify the choice — hesitation costs fluency.",
    },
    "speaking:5": {
      difficulty: 4,
      explanation:
        "Extension: should children learn technology at school or at home, and was pre-machine life better or simply harder? Compare past and present and evaluate rather than just describe.",
    },
  },

  "Drill — True/False/Not Given vs Yes/No/Not Given": {
    "reading:1": {
      difficulty: 2,
      explanation:
        "True. Paragraph A: the canal arm was 'dug straight to the casting floor so that coal came in and iron went out without a cart ever touching a road' — the statement's paraphrase.",
    },
    "reading:2": {
      difficulty: 2,
      explanation:
        "True. Paragraph B: after the switch to electric fittings, 'orders halved inside three years' — a fifty per cent fall within three years, as the statement claims.",
    },
    "reading:3": {
      difficulty: 2,
      explanation:
        "Not Given. The garden gnomes are 'one infamous batch' the board never discussed in writing; profitability is never mentioned, however memorable the detail feels.",
    },
    "reading:4": {
      difficulty: 3,
      explanation:
        "Yes. The foundry's later reputation was 'built on precisely the work the accounts department had once tried to refuse' — the writer implies those earlier refusals were short-sighted.",
    },
    "reading:5": {
      difficulty: 2,
      explanation:
        "No. The foundry closed 'not because demand failed but because the land under it became worth more than the output' — the statement contradicts paragraph D directly.",
    },
    "reading:6": {
      difficulty: 2,
      explanation:
        "Not Given. The archive is 'now catalogued by volunteers who knew the men who made it'; the writer expresses no view on handing it to a university.",
    },
  },

  "Drill — Matching headings": {
    "reading:1": {
      difficulty: 3,
      explanation:
        "The pairs: A–i 'Built around one contract'; B–ii 'A single customer's departure'; C–iii 'Saved by the work others refused'; D–iv 'Closed by the land, not the market'. Headings v and vi quote details, not paragraph claims.",
    },
  },

  "Drill — Task 1 overview sentences": {
    "writing:1": {
      difficulty: 2,
      explanation:
        "Option B wins: energy use is 'dominated by gas and electricity', together 'well over half', with no category changing dramatically — biggest features, no figures, no opinion. Option A recycles numbers; option C editorialises.",
    },
    "writing:2": {
      difficulty: 2,
      explanation:
        "Option A: 'after a severe collapse in 2020, attendance recovered past its previous peak and continued rising to a new high' — the trend's shape, not its individual figures.",
    },
    "writing:3": {
      difficulty: 3,
      explanation:
        "Option B: hiring 'grew in every city, with the steepest rise in Seoul', comparing cities instead of reciting Seoul's figures alone. The bicycles-versus-cars option is opinion, which Task 1 forbids.",
    },
    "writing:4": {
      difficulty: 2,
      explanation:
        "Option A: five stages 'from harvesting to packaging', and 'cyclical because waste is returned to compost' — the process's defining feature. Option B only sequences the first steps.",
    },
    "writing:5": {
      difficulty: 3,
      explanation:
        "Option B: 'agriculture has disappeared, replaced by housing and retail' — the fundamental change in one sentence. The alternatives list a single change or mourn progress instead of summarising.",
    },
  },

  "Drill — Paraphrase recognition (reading)": {
    "reading:1": {
      difficulty: 2,
      explanation:
        "The faithful paraphrase keeps the order of events: 'The pattern became visible only after digitisation.' The decoys reverse cause and timing — digitisation did not follow the pattern.",
    },
    "reading:2": {
      difficulty: 2,
      explanation:
        "'A meaningful share never returns to the shelf' preserves the quantifier. 'Nothing ever returns' overstates it, and 'most items within a week' invents a time frame the line never gives.",
    },
    "reading:3": {
      difficulty: 2,
      explanation:
        "'Old-fashioned shade is the cheapest medicine' keeps both relations — shade is the medicine, cheapness is its property. The other options swap the nouns' roles.",
    },
    "reading:4": {
      difficulty: 3,
      explanation:
        "The passive restatement, 'Prices are quietly adjusted so that expected returns are covered', keeps agent, action and purpose aligned. The decoys scramble who does what to whom.",
    },
    "reading:5": {
      difficulty: 3,
      explanation:
        "'The science works at field level but cannot serve trade' mirrors the parallel claim 'sound at the level of fields, and unusable at the level of trade' without flipping either half.",
    },
  },

  "Drill — GT Section 1: notices and conditions": {
    "reading:1": {
      difficulty: 2,
      explanation:
        "The £5 price is 'Off-peak only (weekdays before 9 a.m. and after 6 p.m.)'; peak sessions cost £9. 'Swim anytime' is headline bait — the small print sets the conditions.",
    },
    "reading:2": {
      difficulty: 2,
      explanation:
        "On Wednesdays 'the office is used for training', so lost property is closed that day. Donation applies only to items unclaimed after eight weeks — a different condition entirely.",
    },
    "reading:3": {
      difficulty: 3,
      explanation:
        "Existing students cannot take a free taster themselves; they 'may bring a friend to one taster between them per term'. The free offer is 'for new students only'.",
    },
    "reading:4": {
      difficulty: 2,
      explanation:
        "After 10 p.m. the service is hourly, and 22:40 falls after 10 p.m. — so the hourly option is correct. The every-20-minutes rate applies only outside the weekday peaks, before 10 p.m.",
    },
    "reading:5": {
      difficulty: 3,
      explanation:
        "The small room's Friday-and-weekend rate is £35, plus the £15 Sunday cleaning surcharge — £50 in total, with VAT already included. The £20 headline holds only Monday to Thursday.",
    },
  },

  "Drill — GT letters: choosing the right tone": {
    "writing:1": {
      difficulty: 1,
      explanation:
        "An unnamed hotel manager takes 'Dear Sir or Madam' closing with 'Yours faithfully' — the fixed pairing for unnamed recipients. First names and 'Cheers' belong to friends, not managers.",
    },
    "writing:2": {
      difficulty: 2,
      explanation:
        "'I would be grateful if the boiler could be repaired this week' is polite, indirect and specific — right for a landlord. Ultimatums and blunt commands break the formal register.",
    },
    "writing:3": {
      difficulty: 1,
      explanation:
        "For a close friend, warmth fits: 'We missed you on Saturday — the food was brilliant and you'd have loved it.' Formally registering disappointment suits officials, not friends.",
    },
    "writing:4": {
      difficulty: 2,
      explanation:
        "Semi-formal to a manager you know: 'Priya — could I slip off an hour early on Friday? I'd make the time up.' Friendly, professional, and offering a solution.",
    },
    "writing:5": {
      difficulty: 2,
      explanation:
        "A named recipient pairs 'Dear Ms Okafor' with 'Yours sincerely'. 'Yours faithfully' belongs to 'Dear Sir or Madam'; 'See you soon' is too casual for a semi-formal letter.",
    },
  },

  "Drill — Listening: numbers, dates and spelling (Academic)": {
    "listening:1": {
      difficulty: 2,
      explanation:
        "The invoice is 'fifteen pounds fifty — that's fifteen fifty, not fifty fifteen': write 15.50. The £13 deposit, spelled out as one-three, is a separate figure.",
    },
    "listening:2": {
      difficulty: 2,
      explanation:
        "'Quarter to seven in the morning' is 6:45 — the clerk corrects the timetable's 7:15. Practise converting quarter-past and quarter-to phrases straight into figures.",
    },
    "listening:3": {
      difficulty: 2,
      explanation:
        "The surname is 'Krzyzewski', spelled K-R-Z-Y-Z-E-W-S-K-I. The speaker warns that people drop the first Z — check both Zs when you write it down.",
    },
    "listening:4": {
      difficulty: 2,
      explanation:
        "The delivery date is the 'thirtieth' of April — not the thirteenth, which is fully booked. The teen-versus-ty ending decides this item.",
    },
    "listening:5": {
      difficulty: 1,
      explanation:
        "The address number is 'Forty-two' — write 42 before Harcourt Avenue. Flat C and Felicity Lane are extra detail around the blank, not the answer.",
    },
  },

  "Drill — Listening: numbers, dates and spelling (General Training)": {
    "listening:1": {
      difficulty: 2,
      explanation:
        "The alteration fee is 'nine pounds — nine, not ninety'; ninety is what the suit cost. One syllable separates the two figures, so hold the correction in mind.",
    },
    "listening:2": {
      difficulty: 2,
      explanation:
        "The missing digits are 'nine-one-oh' — 910 — which the neighbour explicitly contrasts with the old nine-one-two. Corrections inside phone numbers are a classic dictation trap.",
    },
    "listening:3": {
      difficulty: 2,
      explanation:
        "The street is 'Lowndes' — L-O-W-N-D-E-S, one word, Terrace separate. Do not write 'Lounds', the road by the station that belongs to a different firm.",
    },
    "listening:4": {
      difficulty: 2,
      explanation:
        "The morning slot is 'ten to eight' — 7:50 a.m. The afternoon option, twenty past three today, does not fit the blank's tomorrow-morning context.",
    },
    "listening:5": {
      difficulty: 2,
      explanation:
        "The customer corrects the grocer: 'Thirteen, please — thirteen rolls, not thirty.' The teen/ty distinction, not the food item, is what this item tests.",
    },
  },

  "Drill — Cue-card long turn (Academic)": {
    "speaking:1": {
      difficulty: 3,
      explanation:
        "Cue card: an advertisement you remember well — what it advertised, where you saw it, what happened in it, and why it stayed with you. Sketch the four corners in the prep minute, then speak to time.",
    },
    "speaking:2": {
      difficulty: 3,
      explanation:
        "Cue card: a decision that took a long time — what it was, why it was difficult, what you chose, and how you feel now. Narrate the difficulty, then close on the present feeling.",
    },
  },

  "Drill — Cue-card long turn (General Training)": {
    "speaking:1": {
      difficulty: 2,
      explanation:
        "Cue card: a meal you remember well — where, who with, what you ate, and why it stayed with you. Concrete food vocabulary and a clear final reflection carry the marks.",
    },
    "speaking:2": {
      difficulty: 2,
      explanation:
        "Cue card: a shop you like going to — where it is, what it sells, how often you go, and why you return. Fill the two minutes with fresh detail rather than repetition.",
    },
  },
};
