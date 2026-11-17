/**
 * IELTS Speaking Masterclass — Part 3 discussion sets (PROMPT 47, Parts 4
 * and 8).
 *
 * Ten progressively difficult discussion sets, one per theme band, each
 * built of exactly four questions that escalate in level: the first invites
 * opinions on the familiar (accessible), the second and third move into
 * societal causes and comparisons (abstract), and the fourth asks for
 * prediction and evaluation (speculative).
 *
 * Every model answer is an original demonstration of the moves its level
 * demands — opinion with reason, comparison with concession, speculation
 * with evaluation — written to sound spoken, never to be memorised. No item
 * suggests any national accent scores higher, and no band-style label
 * appears anywhere as a claim about the learner.
 */

import type { SpeakingPart3Set } from "./types";
import { SPEAKING_BANK_SOURCE_NOTE } from "./types";

export const speakingBankPart3Sets: SpeakingPart3Set[] = [
// ---------------------------------------------------------------------------
// 1. Technology and daily life — screens (foundation, difficulty 2)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-technology",
  title: "Discussion set — screens and daily life",
  theme: "Technology and daily life",
  difficulty: 2,
  proficiency: "foundation",
  skill: "interaction",
  progression:
    "From your own screen habits to whether the family table can survive the next wave of devices.",
  questions: [
    {
      question: "How much time do you spend looking at screens on a normal day?",
      level: "accessible",
      modelAnswer:
        "Honestly? Far too much, probably. On a working day I'd say eight hours at the laptop, then another couple in the evening scrolling on my phone. It's the first thing I reach for in the morning, which I'm not proud of. My eyes feel it by Friday, and if I go for a walk without any device I actually feel a bit naked. So yes — screens take up more of my day than I'd like to admit.",
      analysis:
        "Gives a direct opinion straight away, then supports it with concrete personal detail and a self-aware conclusion — exactly the opinion-plus-reason move this level asks for.",
      expected: ["screen", "day", "hour", "phone"],
    },
    {
      question: "Why is it so difficult for people to spend less time on their phones and laptops?",
      level: "abstract",
      modelAnswer:
        "I think it's because the whole economy is designed that way, to be honest. Every app is engineered by teams of very clever people whose job is to keep us scrolling — little rewards, notifications, autoplay. Nobody stands a chance, really. We also keep our whole lives on one device, so putting it away feels like cutting yourself off from work, friends and banking all at once. Willpower alone can't fight a system built like that.",
      analysis:
        "Moves beyond personal habit into a systemic cause — engineered design and the device as a life hub — a properly abstract explanation rather than a list of gripes.",
      expected: ["because", "design", "scroll", "device"],
    },
    {
      question: "How does the way older people use technology compare with the way young people use it?",
      level: "abstract",
      modelAnswer:
        "There's a real gap, though it's narrowing. My grandmother still prints her emails, whereas my little cousin edits videos on her phone faster than I can type. Grandparents tend to use technology for a purpose — a video call, a photo of the family — and then close it. Younger people live inside it; the device is the destination, not the tool. Interestingly, though, both groups get lonely without it, so maybe the difference is smaller than it looks.",
      analysis:
        "A clean comparison built on two invented specifics, closed with a concession that questions its own first claim — the compare-and-concede shape this level rewards.",
      expected: ["whereas", "grandmother", "phone", "tool"],
    },
    {
      question: "Do you think families in thirty years' time will be closer to or further from the screens around them?",
      level: "speculative",
      modelAnswer:
        "Honestly, I suspect closer, in every sense. Screens will probably dissolve into walls, tables, even glasses, so people won't 'look at' a device any more — the room itself will be the interface. Whether that pulls families together is another question. If technology becomes invisible, we might stop arguing about it and just talk across the dinner table again. So my best guess is that the devices win, but the battle quietly disappears.",
      analysis:
        "Speculates with hedged language — 'probably', 'might', 'my best guess' — then evaluates the change rather than just predicting it, which is the mark of the top level.",
      expected: ["will", "probably", "might", "screen"],
    },
  ],
  vocabulary: [
    {
      word: "screen time",
      partOfSpeech: "noun",
      meaning: "The amount of time someone spends looking at screens in a day.",
      example: "We argue about screen time at home, and I usually lose.",
    },
    {
      word: "to scroll",
      partOfSpeech: "verb",
      meaning: "To move through content on a device with repeated swipes or flicks.",
      example: "I scroll for ten minutes and somehow an hour has gone.",
    },
    {
      word: "notification",
      partOfSpeech: "noun",
      meaning: "An alert that pops up to say something has happened inside an app.",
      example: "I switched off every notification that wasn't a message from a real person.",
    },
    {
      word: "digital detox",
      partOfSpeech: "noun",
      meaning: "A deliberate break from devices, usually for a set period.",
      example: "My sister swears by a digital detox every January.",
    },
    {
      word: "to be glued to something",
      partOfSpeech: "phrase",
      meaning: "To watch something with complete, unbroken attention.",
      example: "The kids were glued to the tablet all through lunch.",
    },
    {
      word: "willpower",
      partOfSpeech: "noun",
      meaning: "The mental strength needed to resist a temptation.",
      example: "Leaving my phone in another room takes more willpower than the gym.",
    },
    {
      word: "ubiquitous",
      partOfSpeech: "adjective",
      meaning: "Found absolutely everywhere at once.",
      example: "Screens are so ubiquitous now that a waiting room without one feels strange.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 2. Learning and schools — the classroom (foundation, difficulty 2)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-education",
  title: "Discussion set — learning and schools",
  theme: "Learning and schools",
  difficulty: 2,
  proficiency: "foundation",
  skill: "interaction",
  progression: "From your own schooldays to whether exams measure anything worth measuring.",
  questions: [
    {
      question: "Looking back, did you enjoy your own schooldays?",
      level: "accessible",
      modelAnswer:
        "Mostly, yes — though not every part of it. I loved the practical lessons, chemistry and art especially, because you could make a mess and actually do something. What I hated was the pressure around tests; even at ten I remember feeling sick before them. And the canteen food was a crime. But overall I'd say I was lucky with my teachers, and that made the whole experience bearable.",
      analysis:
        "Answers with a clear position, then develops it with concrete childhood detail across likes and dislikes — a full opinion at this level, not just a 'yes'.",
      expected: ["teacher", "love", "test", "because"],
    },
    {
      question: "Why do some children learn much faster than others?",
      level: "abstract",
      modelAnswer:
        "A lot of it is confidence, I'd say. A child who believes they can improve will take risks — put a hand up, try the harder question — and that practice compounds. Home matters too: if dinner-table conversation is full of questions, school feels like a continuation rather than a separate world. Of course raw ability plays its part, but I've seen plenty of 'talented' kids overtaken by stubborn ones who simply kept going.",
      analysis:
        "Argues causation at a general level — confidence, home culture — and closes with a concession about ability, showing both sides of the question.",
      expected: ["confidence", "child", "home", "practice"],
    },
    {
      question: "Are exams a fair way of judging what students can really do?",
      level: "abstract",
      modelAnswer:
        "Fair up to a point, but only a point. Exams are at least equal: everyone sits the same paper under the same clock, which no coursework system can quite claim. The trouble is they measure speed and memory far more than understanding. Some brilliant people simply fall to pieces in a hall with a ticking clock. So I'd call exams a fair filter, but a narrow one — they test one kind of thinking and call it the whole of intelligence.",
      analysis:
        "Concedes the strength of exams — equality of conditions — before attacking what they leave out; the 'fair filter, but narrow' line shows balanced evaluation at its best.",
      expected: ["exam", "fair", "measure", "memory"],
    },
    {
      question: "How might schools change over the next fifty years?",
      level: "speculative",
      modelAnswer:
        "I suspect the building survives, but the timetable doesn't. If AI can explain quadratic equations patiently at two in the morning, the teacher's job shifts to motivation and checking in on the human being. Maybe attendance becomes a few days a week, with the rest spent on projects. What I hope doesn't vanish is the playground — children learning to argue, share and apologise is the one thing no software has ever taught.",
      analysis:
        "Predicts with 'might' and 'maybe', then shifts to evaluating what should be kept — speculation turning into a value judgement at the end.",
      expected: ["teacher", "maybe", "learn", "human"],
    },
  ],
  vocabulary: [
    {
      word: "to fall behind",
      partOfSpeech: "phrase",
      meaning: "To make less progress than the rest of a group.",
      example: "He fell behind in maths and needed a whole term to recover.",
    },
    {
      word: "rote learning",
      partOfSpeech: "noun",
      meaning: "Memorising facts by repetition, without much understanding.",
      example: "Rote learning got me through the exam; I forgot everything a month later.",
    },
    {
      word: "state school",
      partOfSpeech: "noun",
      meaning: "A school funded by the government and free to attend.",
      example: "Our state school had no heating in winter, but the teachers cared enormously.",
    },
    {
      word: "curriculum",
      partOfSpeech: "noun",
      meaning: "The official set of subjects and content a school must teach.",
      example: "The curriculum finally added coding, by which time I'd taught myself three languages badly.",
    },
    {
      word: "to spark an interest",
      partOfSpeech: "phrase",
      meaning: "To awaken a lasting curiosity about something.",
      example: "One visit to the observatory sparked an interest I've never lost.",
    },
    {
      word: "peer pressure",
      partOfSpeech: "noun",
      meaning: "The influence of people your own age on how you behave.",
      example: "At school, peer pressure decides which subjects count as cool.",
    },
    {
      word: "to catch up",
      partOfSpeech: "phrase",
      meaning: "To reach the level of those ahead of you.",
      example: "New students work twice as hard just to catch up with the class.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 3. The environment and habits — waste (intermediate, difficulty 3)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-environment",
  title: "Discussion set — the environment and habits",
  theme: "The environment and habits",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "interaction",
  progression:
    "From your own household habits to who should carry the responsibility for the planet — governments or individuals.",
  questions: [
    {
      question: "What do you do yourself to cut down on waste?",
      level: "accessible",
      modelAnswer:
        "The small stuff, mostly. We reuse glass jars until the labels wear off, I walk to the shop instead of driving, and I've become slightly obsessed with not throwing food away — leftovers get eaten, not binned. None of it is heroic. The honest truth is my biggest contribution was deciding not to buy a second car, which is really just laziness that happens to be green.",
      analysis:
        "A direct personal answer with vivid detail and a self-mocking close — the concrete, human tone that carries an accessible question without drifting into preaching.",
      expected: ["reuse", "food", "walk", "green"],
    },
    {
      question: "Why do many people say they care about the planet but behave as if they don't?",
      level: "abstract",
      modelAnswer:
        "Because caring is free and behaving isn't. Saying you love the planet costs nothing; changing your life costs comfort every single day. There's also distance: a melting glacier is an abstraction, whereas the inconvenience of a cold house is now. And honestly, we're brilliant at outsourcing guilt — buying a reusable cup and feeling the problem is solved. Intentions are real; it's the follow-through that collapses under pressure.",
      analysis:
        "Argues at the level of human psychology — cost, abstraction and outsourced guilt — staying general and analytical, exactly where this level lives.",
      expected: ["planet", "cost", "because", "problem"],
    },
    {
      question: "Should governments force people to live more sustainably, or persuade them?",
      level: "abstract",
      modelAnswer:
        "Persuasion alone has had decades and it's too slow. I think governments have to legislate the floor — ban the worst plastics, set building standards, price carbon properly — and let citizens compete above it. Force without any persuasion breeds resentment, though; the fuel protests showed that. So the honest answer is both, in the right order: make the green choice cheap first, then nudge, and only legislate when the majority is already halfway there.",
      analysis:
        "Takes a clear side, justifies it with concrete policy levers, and concedes the risk of backlash — argument, concession and synthesis in one answer.",
      expected: ["government", "legislate", "green", "cheap"],
    },
    {
      question: "Will cities in fifty years' time be cleaner or dirtier than today's?",
      level: "speculative",
      modelAnswer:
        "Cleaner in the air, dirtier in new ways, I'd guess. Electric transport should make the air measurably better — cities could sound and smell different within a decade. But every technology leaves a new residue: batteries pile up, and the devices we discard have to go somewhere. My hunch is the visible filth disappears and gets replaced by invisible pollution we haven't learnt to measure yet. So the skyline improves while the ground underneath gets quietly worse.",
      analysis:
        "Splits the prediction in two and hedges every claim — 'I'd guess', 'my hunch is' — then closes by evaluating the trade-off, pure speculation done properly.",
      expected: ["clean", "city", "electric", "pollution"],
    },
  ],
  vocabulary: [
    {
      word: "carbon footprint",
      partOfSpeech: "noun",
      meaning: "The total greenhouse gases a person's or activity's existence produces.",
      example: "I calculated my carbon footprint once and instantly regretted knowing the number.",
    },
    {
      word: "to phase out",
      partOfSpeech: "verb",
      meaning: "To remove something gradually rather than all at once.",
      example: "The council is phasing out the petrol buses over the next decade.",
    },
    {
      word: "single-use",
      partOfSpeech: "adjective",
      meaning: "Made to be used once and then thrown away.",
      example: "The café finally ditched single-use cups last spring.",
    },
    {
      word: "landfill",
      partOfSpeech: "noun",
      meaning: "A site where rubbish is buried in the ground.",
      example: "Half of that packaging will still be sitting in landfill when my grandchildren retire.",
    },
    {
      word: "to offset",
      partOfSpeech: "verb",
      meaning: "To compensate for damage by funding an equivalent good elsewhere.",
      example: "The airline invites you to offset your flight by planting trees somewhere far away.",
    },
    {
      word: "sustainable",
      partOfSpeech: "adjective",
      meaning: "Able to carry on indefinitely without exhausting what it depends on.",
      example: "My most sustainable habit is simply owning fewer things.",
    },
    {
      word: "to turn a blind eye",
      partOfSpeech: "phrase",
      meaning: "To deliberately ignore something you know is wrong.",
      example: "We all turn a blind eye to how fast our wardrobes churn.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 4. The changing world of work — careers (intermediate, difficulty 3)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-work",
  title: "Discussion set — the changing world of work",
  theme: "The changing world of work",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "interaction",
  progression: "From your own working day to what a career will even mean in thirty years.",
  questions: [
    {
      question: "Would you rather work in an office or at home?",
      level: "accessible",
      modelAnswer:
        "Home, but only by a small margin. I save ninety minutes of commuting, I can think properly in silence, and the kettle is mine. On the other hand, I miss the accidental conversations — the ten minutes by the coffee machine that sometimes solves more than the meeting does. My ideal is two days in an office for the spark, three at home for the actual work.",
      analysis:
        "Gives a clear preference with concrete reasons, admits the counter-argument honestly, and lands on a considered compromise — a fully developed answer at this level.",
      expected: ["home", "office", "save", "work"],
    },
    {
      question: "Why do so many people now see a job as something temporary rather than for life?",
      level: "abstract",
      modelAnswer:
        "Partly because the employers broke the contract first. When loyalty stopped being repaid with security, people stopped offering it. The other driver is rising expectations of meaning — a job now has to be interesting, not just payable, and few roles stay interesting for forty years. And once your skills age faster than your mortgage, staying put starts to look like the bigger risk.",
      analysis:
        "Explains a social shift with a causal chain — employers, meaning, ageing skills — rather than blaming individuals; the reasoning is the point here.",
      expected: ["because", "loyalty", "skill", "security"],
    },
    {
      question: "Is it better for a society if people stay in one career, or is moving around healthier?",
      level: "abstract",
      modelAnswer:
        "Moving around, on balance, though I'd want limits. Job-hopping spreads skills across an economy and stops industries calcifying; the United States thrives on that churn. But a society of pure mercenaries loses something — apprenticeships, deep craft, the person who's repaired the same machines for thirty years. Perhaps the healthiest model is one core trade, renewed every decade or so, so people carry depth without rusting.",
      analysis:
        "States a position, concedes the cost of the opposite view, and synthesises a middle model — the compare-and-weigh structure this level demands.",
      expected: ["skill", "job", "though", "trade"],
    },
    {
      question: "Do you think people will still have employers in thirty years, or will we all work for ourselves?",
      level: "speculative",
      modelAnswer:
        "Both will exist, but I think the balance tips towards self-employment. If software handles the admin, the cost of going solo keeps falling, and platforms already match workers to buyers in minutes. The catch is what happens to the people in between — no sick pay, no pension, no one to complain to. My prediction is millions of tiny companies, and a slow realisation that we've privatised risk onto individuals who never asked for it.",
      analysis:
        "Predicts a direction with supporting reasons, then evaluates the downside of its own prediction — speculative discussion with a critical edge throughout.",
      expected: ["self-employ", "platform", "risk", "will"],
    },
  ],
  vocabulary: [
    {
      word: "commuting",
      partOfSpeech: "noun",
      meaning: "The daily journey between home and the workplace.",
      example: "My commuting time dropped to zero and my coffee budget doubled.",
    },
    {
      word: "to be made redundant",
      partOfSpeech: "phrase",
      meaning: "To lose your job because the employer no longer needs the role.",
      example: "He was made redundant at fifty-five and started a market stall the same month.",
    },
    {
      word: "work–life balance",
      partOfSpeech: "noun",
      meaning: "How a person's working hours relate to the rest of their life.",
      example: "My work–life balance improved the day I stopped checking email in bed.",
    },
    {
      word: "to climb the ladder",
      partOfSpeech: "phrase",
      meaning: "To advance through a series of better positions.",
      example: "She climbed the ladder for a decade, then traded it all for a small farm.",
    },
    {
      word: "portfolio career",
      partOfSpeech: "noun",
      meaning: "An income assembled from several part-time or freelance roles.",
      example: "A portfolio career sounds glamorous until you invoice four companies in one week.",
    },
    {
      word: "burnout",
      partOfSpeech: "noun",
      meaning: "Deep exhaustion caused by prolonged overwork.",
      example: "Burnout taught me that being busy and being useful are different things.",
    },
    {
      word: "automation",
      partOfSpeech: "noun",
      meaning: "The use of machines and software to do work without people.",
      example: "Automation took the boring parts of my job, which I only miss on payday.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 5. Cities and community life — neighbours (intermediate, difficulty 3)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-cities",
  title: "Discussion set — cities and community life",
  theme: "Cities and community life",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "interaction",
  progression: "From your own street to how millions of strangers should be governed together.",
  questions: [
    {
      question: "Do you know the people who live near you?",
      level: "accessible",
      modelAnswer:
        "Properly, about three of them. I know the baker by name, the woman opposite waters our plants, and there's a family we wave to. Beyond that, it's polite nods. It's a bit thin, honestly. My parents' street was different — doors open, borrowing eggs. Here, I sometimes go a whole weekend without a real conversation with anyone next door, and I don't think my street is unusual.",
      analysis:
        "Answers honestly with a small cast of named characters, then contrasts past and present — concrete detail doing the work an accessible question needs.",
      expected: ["street", "know", "door", "conversation"],
    },
    {
      question: "Why do so many people in big cities feel lonely?",
      level: "abstract",
      modelAnswer:
        "Because cities replace community with convenience. Everything a village did through people — childcare, company, someone to argue with — a city sells back to you as a service, and services don't remember your name. Add the sheer scale: you can pass ten thousand strangers and never the same face twice, so nobody is a person yet. We evolved for small groups; a metropolis is wonderful and it is also, mechanically, isolating.",
      analysis:
        "Explains a social problem through structure rather than individual failings, closing on an evolutionary frame — genuinely abstract reasoning, well beyond anecdote.",
      expected: ["because", "community", "city", "stranger"],
    },
    {
      question: "Are high tower blocks a good solution to housing shortages?",
      level: "abstract",
      modelAnswer:
        "A partial one, and only with conditions. Towers deliver density quickly, which cities badly need, and they can be humane — I've seen blocks in Vienna with gardens on the fifth floor. But cheap towers without services repeat the mistakes of the sixties: corridors, no shops, nothing to belong to. So build up, by all means, but build the school, the clinic and the bus route at the same time, or the tower just stacks the problem.",
      analysis:
        "Takes a conditional position, supports it with an invented example, and warns of the known failure mode — weighing both sides before deciding.",
      expected: ["tower", "density", "cheap", "school"],
    },
    {
      question: "How will city centres change if most people no longer travel in to work?",
      level: "speculative",
      modelAnswer:
        "I think they turn inside out, slowly. If the crowds aren't forced in five days a week, the sandwich shops follow the workers and cluster near homes; the centre has to find another reason to exist. Maybe it becomes more residential, more cultural — a place people choose rather than endure. The risk is a doughnut city: a dead middle surrounded by busy suburbs. I'd guess city centres get quieter, weirder and, if we're lucky, more interesting.",
      analysis:
        "Predicts a structural shift, names a clear risk, then closes with an evaluative flourish — speculation with personality and a judgement attached.",
      expected: ["centre", "maybe", "residential", "risk"],
    },
  ],
  vocabulary: [
    {
      word: "high-rise",
      partOfSpeech: "adjective",
      meaning: "Describes very tall buildings with many storeys.",
      example: "I lived in a high-rise for a year and grew to love the view and hate the lift.",
    },
    {
      word: "commuter belt",
      partOfSpeech: "noun",
      meaning: "The ring around a city where people live and travel in to work.",
      example: "House prices in the commuter belt jumped the month the new line opened.",
    },
    {
      word: "to put down roots",
      partOfSpeech: "phrase",
      meaning: "To settle somewhere and begin treating it as home.",
      example: "We put down roots the year our daughter started school.",
    },
    {
      word: "sprawl",
      partOfSpeech: "noun",
      meaning: "The uncontrolled spread of a city into the countryside.",
      example: "The sprawl has now reached villages that used to be an hour away.",
    },
    {
      word: "sense of community",
      partOfSpeech: "noun",
      meaning: "The feeling of belonging to and trusting the people around you.",
      example: "A sense of community grew out of nothing more than a shared allotment.",
    },
    {
      word: "to displace",
      partOfSpeech: "verb",
      meaning: "To push people or activities out of their original place.",
      example: "The fancy flats displaced the workshops that gave the street its character.",
    },
    {
      word: "ghost town",
      partOfSpeech: "noun",
      meaning: "A place that has lost almost all its people or activity.",
      example: "By seven in the evening the financial district is a ghost town.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 6. Media and influence — the news (intermediate, difficulty 3)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-media",
  title: "Discussion set — media and influence",
  theme: "Media and influence",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "interaction",
  progression: "From your own news habits to who can be trusted to decide what the public sees.",
  questions: [
    {
      question: "Where do you usually get your news?",
      level: "accessible",
      modelAnswer:
        "A mixture, and none of it tidy. I still read one proper newspaper on Sundays — old habit — but during the week it's headlines on my phone, then a podcast while I cook. I've stopped watching television bulletins entirely; they feel slow now. And, like everyone, some reaches me sideways through friends sending links. So: a bit of everything, chosen by convenience rather than conviction.",
      analysis:
        "A frank personal inventory across old and new sources, closed with a wry summary line — the detail and self-awareness this level rewards.",
      expected: ["news", "phone", "read", "television"],
    },
    {
      question: "Why do people increasingly prefer opinion over straight reporting?",
      level: "abstract",
      modelAnswer:
        "Straight reporting is slow and grey, and opinion is instant and vivid. A fact has to be checked; a take can be published while you're still angry, and anger travels further than accuracy ever will. There's a supply problem too — when news is free, the writer is paid by the click, and clicks reward feeling. People didn't become worse; the incentives did. We chose the format that flatters us fastest.",
      analysis:
        "Explains the shift through economics and incentives rather than blaming readers, and the closing line lands the argument in spoken rhythm.",
      expected: ["opinion", "fact", "news", "click"],
    },
    {
      question: "Should there be limits on what the press can publish about public figures' private lives?",
      level: "abstract",
      modelAnswer:
        "Some, and I'd draw the line at genuine public interest. A politician's health or finances affect their job, so that's fair game. Who they're dating is not, unless hypocrisy is involved — someone campaigning on family values while doing the opposite has made it relevant themselves. The test I'd use: would this matter if the person resigned tomorrow? If the answer's no, it's prurience dressed up as journalism.",
      analysis:
        "Sets a principle, applies it to contrasting cases, then constructs a working test — principled reasoning, the abstract level at its most disciplined.",
      expected: ["public", "interest", "politician", "fair"],
    },
    {
      question: "If everyone gets their news from algorithms, what happens to a shared version of the truth?",
      level: "speculative",
      modelAnswer:
        "I think the shared version quietly dies, and I'm not sure we'll notice until it's gone. Two neighbours fed opposite feeds can live in different countries without moving house. Rebuilding it would need something deliberate — a national fact service, or media literacy taught as seriously as maths. Whether we'll do it, I doubt; the anger is profitable. My honest hope is boredom saves us: eventually people tire of being furious and walk back towards boring, verifiable news.",
      analysis:
        "Predicts decline, proposes a remedy, then expresses doubt about it — a full speculative arc that ends in evaluation instead of false certainty.",
      expected: ["doubt", "news", "hope", "media"],
    },
  ],
  vocabulary: [
    {
      word: "headline",
      partOfSpeech: "noun",
      meaning: "The large line at the top of an article that summarises it.",
      example: "I read the headline and skipped the article, which is exactly the problem.",
    },
    {
      word: "echo chamber",
      partOfSpeech: "noun",
      meaning: "A setting where you only ever hear views matching your own.",
      example: "Leaving that platform felt like stepping out of an echo chamber into daylight.",
    },
    {
      word: "to go viral",
      partOfSpeech: "phrase",
      meaning: "To spread extremely quickly across the internet.",
      example: "Her clip went viral, and the bakery had a queue round the block by Friday.",
    },
    {
      word: "clickbait",
      partOfSpeech: "noun",
      meaning: "Sensational content engineered mainly to attract clicks.",
      example: "You'll never guess what happened next — the classic clickbait opener.",
    },
    {
      word: "to fact-check",
      partOfSpeech: "verb",
      meaning: "To verify whether a claim is actually true.",
      example: "I fact-check anything that makes me furious before I share it.",
    },
    {
      word: "press freedom",
      partOfSpeech: "noun",
      meaning: "The right of journalists to publish without state control.",
      example: "Press freedom is easy to praise and expensive to defend.",
    },
    {
      word: "tabloid",
      partOfSpeech: "noun",
      meaning: "A small-format newspaper built around sensational stories.",
      example: "My grandfather read one broadsheet and one tabloid and trusted neither.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 7. Food, health and lifestyle — the table (advanced, difficulty 4)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-health",
  title: "Discussion set — food, health and lifestyle",
  theme: "Food, health and lifestyle",
  difficulty: 4,
  proficiency: "advanced",
  skill: "interaction",
  progression: "From your own kitchen to whether the state should police what people eat.",
  questions: [
    {
      question: "Are you careful about what you eat?",
      level: "accessible",
      modelAnswer:
        "Moderately, and inconsistently. I cook from scratch most nights — vegetables, lentils, that kind of thing — because I like cooking, not because I'm disciplined. Then I'll ruin a whole week's good intentions with one delivery on a Friday. I've stopped calling that cheating; it's just the rhythm I've settled into. I'd say I eat well eighty per cent of the time and enjoy the other twenty without guilt.",
      analysis:
        "An honest, unpretentious self-portrait: a position, the reason behind it, and an accepted contradiction, all delivered in completely natural spoken English.",
      expected: ["cook", "eat", "vegetables", "because"],
    },
    {
      question: "Why is convenience food winning against traditional cooking, even in cultures famous for it?",
      level: "abstract",
      modelAnswer:
        "Because the real cost of a home-cooked meal is time, and time is what nobody has. Grandmothers cooked for hours because someone was home; the double-income household outsources those hours, and industry has industrialised the recipes. It's also a story of kitchens shrinking — new flats barely fit a table, let alone a six-person family. The irony is that we've never known more about nutrition and cooked less; knowledge arrived after the habits left.",
      analysis:
        "Argues from structure — time poverty, housing, industrial scale — and closes on a paradox, which is the highest form this level takes.",
      expected: ["time", "cook", "because", "home"],
    },
    {
      question: "Should governments tax unhealthy food, or is that too much control over personal choice?",
      level: "abstract",
      modelAnswer:
        "I lean towards taxing, with one guardrail: it has to be regressive in reverse — subsidise the good, not just punish the bad. A sugar tax alone lands hardest on poor families; pair it with cheap fruit and free school meals and it's policy, not punishment. As for personal choice, I find that argument selective — the same lobby never objects to advertising aimed at children. Choice is real, but it's made inside a rigged shop.",
      analysis:
        "Takes a side, conditions it with a distributional argument about the poor, then dismantles the opposing position with one image — argumentation of real advanced quality.",
      expected: ["tax", "choice", "sugar", "poor"],
    },
    {
      question: "In fifty years, will eating meat be seen the way we now view smoking?",
      level: "speculative",
      modelAnswer:
        "Possibly, but through economics rather than shame. If lab-grown protein becomes cheaper than a chicken, the moral argument barely needs to happen — people follow the receipt, not the sermon. What's harder to predict is the cultural layer: meals are memory, and Sunday roast is a story people tell about themselves. My guess is meat becomes a ceremonial food, kept for occasions, the way smoking survives at weddings. The majority habit will move; the sentimental crust may take another century.",
      analysis:
        "Predicts through mechanism — price rather than preaching — then separates the economic layer from the cultural one: a genuinely two-level speculation.",
      expected: ["meat", "cheaper", "guess", "smoking"],
    },
  ],
  vocabulary: [
    {
      word: "processed food",
      partOfSpeech: "noun",
      meaning: "Food altered far from its natural state by manufacturing and additives.",
      example: "Most of my freezer is processed food arranged to look like cooking.",
    },
    {
      word: "moderation",
      partOfSpeech: "noun",
      meaning: "Having a little of something rather than none or too much.",
      example: "I believe in moderation, mostly because I'm moderate about believing in it.",
    },
    {
      word: "to binge",
      partOfSpeech: "verb",
      meaning: "To consume a large amount in one short, uncontrolled burst.",
      example: "I binged an entire series over one weekend and my eyes have not forgiven me.",
    },
    {
      word: "well-being",
      partOfSpeech: "noun",
      meaning: "A person's overall state of body and mind.",
      example: "My well-being improved most when I fixed my sleep, not my diet.",
    },
    {
      word: "sedentary",
      partOfSpeech: "adjective",
      meaning: "Involving very little physical movement.",
      example: "My job is so sedentary that reaching the printer counts as cardio.",
    },
    {
      word: "a balanced diet",
      partOfSpeech: "phrase",
      meaning: "Eating a sensible variety of foods in sensible proportions.",
      example: "A balanced diet in my house means the vegetables and the biscuits agree to share a plate.",
    },
    {
      word: "portion",
      partOfSpeech: "noun",
      meaning: "The amount of one food served in a single helping.",
      example: "Restaurant portions have quietly doubled since my parents were young.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 8. Culture and traditions — inheritance (advanced, difficulty 4)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-culture",
  title: "Discussion set — culture and traditions",
  theme: "Culture and traditions",
  difficulty: 4,
  proficiency: "advanced",
  skill: "interaction",
  progression:
    "From the traditions you keep to whether any tradition deserves to survive on ceremony alone.",
  questions: [
    {
      question: "Which traditions matter most in your family?",
      level: "accessible",
      modelAnswer:
        "Food ones, overwhelmingly. Every festival has its dish that only one aunt is allowed to make, and arguing about it is half the tradition. We also keep a strange habit of photographing everyone at the same table in the same order, so you can flip through the years like a slow film. Weddings matter too, but honestly it's the kitchen rituals that would cause a family crisis if they stopped.",
      analysis:
        "One vivid inherited practice described with affection and specificity, then ranked openly against the alternatives — the accessible move done with real personality.",
      expected: ["family", "festival", "food", "tradition"],
    },
    {
      question: "Why do some traditions survive for centuries while others vanish within a generation?",
      level: "abstract",
      modelAnswer:
        "The ones that survive usually do a job as well as mean something. A tradition that organises the harvest, feeds the neighbours or marries the couple has a function; a tradition that only performs itself is one recession away from extinction. Adaptation matters too — the celebrations that moved onto phones and planes kept going. Essentially, traditions endure when they're allowed to change and die the moment they become a museum piece.",
      analysis:
        "Offers a theory — function plus adaptability — and states the conditions of failure; the argument is abstract and quotable in equal measure.",
      expected: ["survive", "change", "function", "tradition"],
    },
    {
      question: "Is it better for a country to preserve its old culture or to embrace the global one?",
      level: "abstract",
      modelAnswer:
        "The framing worries me, honestly — as if the two were rival armies. Cultures have never been pure; every 'ancient' national costume is a snapshot of one decade's trade routes. That said, a country shouldn't just absorb: small languages and local festivals die in a generation without deliberate protection. So my position is preserve the substance, relax about the surface — guard the language and the stories, and let the dress and the menu borrow freely.",
      analysis:
        "Challenges the question's premise before answering it, then proposes a substance-versus-surface distinction — sophisticated critical engagement of the kind this level exists for.",
      expected: ["culture", "language", "protect", "pure"],
    },
    {
      question: "Will any of today's traditions still be recognisable in two hundred years?",
      level: "speculative",
      modelAnswer:
        "The portable ones, I suspect. Traditions travel better than they stay put: whatever fits in a suitcase — a recipe, a song, a way of blessing children — will survive, because migration guarantees the carriers. What I think vanishes is anything that depends on a fixed place: the harvest festival needs a harvest, and the field may be a suburb by then. My bet is the rituals survive while their reasons quietly rot, which humans seem fine with.",
      analysis:
        "Predicts along one clear principle — portability — then closes with a wry evaluation of how little humans mind losing original meanings.",
      expected: ["survive", "migration", "place", "suspect"],
    },
  ],
  vocabulary: [
    {
      word: "heritage",
      partOfSpeech: "noun",
      meaning: "The traditions, buildings and objects handed down through generations.",
      example: "Our heritage is mostly recipes and grudges, both guarded jealously.",
    },
    {
      word: "custom",
      partOfSpeech: "noun",
      meaning: "A habitual practice a group treats as completely normal.",
      example: "Taking off shoes at the door is a custom visitors adopt within a week.",
    },
    {
      word: "to pass something down",
      partOfSpeech: "phrase",
      meaning: "To hand a skill or object to the next generation.",
      example: "The loom was passed down, though nobody alive can work it.",
    },
    {
      word: "assimilation",
      partOfSpeech: "noun",
      meaning: "The slow adoption of a surrounding culture by a minority group.",
      example: "Assimilation took my grandparents one generation and their recipes three.",
    },
    {
      word: "rites of passage",
      partOfSpeech: "noun",
      meaning: "Ceremonies marking a move from one stage of life to the next.",
      example: "Every culture invents rites of passage; exams are simply ours.",
    },
    {
      word: "intangible",
      partOfSpeech: "adjective",
      meaning: "Existing without physical form — a song or a skill rather than an object.",
      example: "A recipe is intangible, which is why it matters more than the pan.",
    },
    {
      word: "to die out",
      partOfSpeech: "phrase",
      meaning: "To disappear completely, usually gradually.",
      example: "The dialect is dying out with the last three people who still argue in it.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 9. Shopping and consumption — the till (advanced, difficulty 4)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-shopping",
  title: "Discussion set — shopping and consumption",
  theme: "Shopping and consumption",
  difficulty: 4,
  proficiency: "advanced",
  skill: "interaction",
  progression:
    "From your own last purchase to whether an economy built on wanting more can survive its own success.",
  questions: [
    {
      question: "Do you enjoy shopping, or is it just a chore?",
      level: "accessible",
      modelAnswer:
        "Depends entirely on the aisle. Food shopping I genuinely love — markets especially, arguing about tomatoes, that's my idea of a good Saturday. But shopping for anything technical fills me with dread: I stand in the shop knowing less than when I walked in. And clothes shopping I've outsourced to my sister, who enjoys it and has better judgement. So: pleasure in the market, chore in the mall.",
      analysis:
        "A split verdict supported by three vivid contrasting cases and closed with a tidy antithesis — the range, humour and shape this level rewards.",
      expected: ["shop", "enjoy", "chore", "market"],
    },
    {
      question: "Why do people buy things they don't need, even when money is tight?",
      level: "abstract",
      modelAnswer:
        "Because the purchase is rarely about the object. When money's tight, spending becomes a way of feeling in control of something — you can't fix your wages, but you can choose the kettle. There's status anxiety too, now performed publicly on social media, where a new purchase is content. And retailers engineer the rest: buy-now-pay-later makes the future self pay for the present one, which feels, wrongly, like free money.",
      analysis:
        "A three-layer explanation — psychology, status performance, credit engineering — that moves from inner feeling outward to systems; the kettle image anchors the abstraction.",
      expected: ["because", "control", "status", "money"],
    },
    {
      question: "Is consumerism a personal weakness or a designed outcome?",
      level: "abstract",
      modelAnswer:
        "Designed, almost entirely. Nobody wakes up wanting a fourth blender; the wanting is manufactured, tested and optimised by an industry whose whole science is dissatisfaction. Calling it a personal weakness suits the industry beautifully — it hides the machinery and sells the cure, usually another purchase. Where individuals do carry responsibility is in the aggregate: no one designer forces the choice, but a hundred million small choices create the demand that justifies the next factory.",
      analysis:
        "Chooses a side decisively, exposes the framing that serves the other side, then locates personal responsibility in aggregate — a triple-move answer.",
      expected: ["design", "industry", "weakness", "choice"],
    },
    {
      question: "Can an economy built on people buying more survive an age when people want less?",
      level: "speculative",
      modelAnswer:
        "It has to mutate rather than die, I think. Growth can migrate from quantity to quality and service — repair, craft, experiences — and some countries already count wellbeing in their numbers. But I doubt the transition is voluntary; more likely, climate limits force it, and marketing then rebrands sufficiency as a lifestyle. The economy will survive; whether it stays recognisably an economy of desire is the real question. My guess: desire gets redirected rather than reduced.",
      analysis:
        "Predicts transformation with supporting reasons, then redefines the question itself before answering it — speculative discussion that interrogates its own premise is top-band work.",
      expected: ["growth", "survive", "doubt", "economy"],
    },
  ],
  vocabulary: [
    {
      word: "to make ends meet",
      partOfSpeech: "phrase",
      meaning: "To have just enough money to cover the basics.",
      example: "We made ends meet by treating weekends as a rumour.",
    },
    {
      word: "impulse purchase",
      partOfSpeech: "noun",
      meaning: "Something bought suddenly, with no planning at all.",
      example: "The queue at the till is where my impulse purchases live.",
    },
    {
      word: "retail therapy",
      partOfSpeech: "noun",
      meaning: "Shopping done to lift the mood rather than fill a need.",
      example: "Retail therapy works until the statement arrives.",
    },
    {
      word: "to haggle",
      partOfSpeech: "verb",
      meaning: "To argue over the price in order to pay less.",
      example: "I haggle at markets and then apologise immediately afterwards.",
    },
    {
      word: "disposable income",
      partOfSpeech: "noun",
      meaning: "Money left once tax and essentials are paid — the part you choose about.",
      example: "I have disposable income in the same way I have self-control: in theory.",
    },
    {
      word: "consumer goods",
      partOfSpeech: "noun",
      meaning: "Everyday products bought by households rather than businesses.",
      example: "The loft is a museum of consumer goods we outgrew.",
    },
    {
      word: "to live within your means",
      partOfSpeech: "phrase",
      meaning: "To spend no more than you actually earn.",
      example: "Living within your means is easiest when the means are generous.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 10. Travel and a connected world — the map (advanced, difficulty 5)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-travel",
  title: "Discussion set — travel and a connected world",
  theme: "Travel and a connected world",
  difficulty: 5,
  proficiency: "advanced",
  skill: "interaction",
  progression:
    "From your own travel habits to whether a world of frictionless movement would still be worth moving around in.",
  questions: [
    {
      question: "Do you prefer travelling alone or with company?",
      level: "accessible",
      modelAnswer:
        "Alone, though I'd never have said that ten years ago. Solo travel is the only time I make decisions purely for myself — stop for three hours in a bookshop, skip the famous thing entirely. Company adds warmth, obviously, but it also adds a negotiation to every hour. My compromise now is travelling alone and meeting people on the road: the best of both, and the goodbyes are brief enough to be bearable.",
      analysis:
        "States a preference with a past self to contrast against, weighs the opposite case fairly, then lands on a synthesis — full and natural.",
      expected: ["alone", "travel", "solo", "compromise"],
    },
    {
      question: "Why does travel broaden some people's minds and leave others exactly as they were?",
      level: "abstract",
      modelAnswer:
        "Because distance alone does nothing — it's friction that teaches, and many trips now remove the friction. If you fly somewhere, eat food you recognise and photograph a monument, your opinions return home untouched. The traveller who is lost, overcharged and forced into a stranger's kitchen has no choice but to revise something. Curiosity is trainable, though, which is why the same person can have a closed mind at twenty and an open one at forty.",
      analysis:
        "Proposes a counter-intuitive mechanism — friction rather than distance — and defends it through two contrasting traveller portraits; abstraction carried by concrete images.",
      expected: ["because", "mind", "travel", "opinion"],
    },
    {
      question: "Does easy, cheap travel connect the world or flatten it?",
      level: "abstract",
      modelAnswer:
        "Both, and the flattening is winning. Cheap flights carry millions to the same thirty streets, eating the same brunch, until everywhere starts to resemble everywhere else — connection without encounter. Meanwhile the people actually connected are those who stay: the food, the music and the remittances move more than the tourists do. Real connection happens when travel is slow enough for boredom, and boredom is precisely what low-cost flying was built to abolish.",
      analysis:
        "Answers a both-ways question with a verdict, an invented image for each side, and a paradox to close — the level's full toolkit.",
      expected: ["cheap", "connect", "travel", "flatten"],
    },
    {
      question: "If movement ever becomes truly frictionless — anywhere on earth in an hour — what happens to the idea of 'somewhere'?",
      level: "speculative",
      modelAnswer:
        "Somewhere becomes a mood rather than a place, I suspect. If every point on the map is equally reachable, distance stops meaning anything, and the places that matter will be the ones that can't be hurried — a language, a friendship, a reputation. What I'm less sure about is whether anyone will still want to wander; desire needs an obstacle, and we may have to start protecting inconvenience deliberately, the way we now protect wilderness.",
      analysis:
        "Answers the hardest question in the bank with a redefinition, honest uncertainty, and a final policy turn — speculation at the very top of the scale.",
      expected: ["place", "distance", "wander", "sure"],
    },
  ],
  vocabulary: [
    {
      word: "to broaden your horizons",
      partOfSpeech: "phrase",
      meaning: "To widen your experience of the world and how you read it.",
      example: "Two weeks of night trains broadened my horizons and ruined my sleep.",
    },
    {
      word: "off the beaten track",
      partOfSpeech: "phrase",
      meaning: "Far from the places most visitors go.",
      example: "The best meal of the trip came from a village well off the beaten track.",
    },
    {
      word: "itinerary",
      partOfSpeech: "noun",
      meaning: "A planned route or schedule for a journey.",
      example: "My itinerary is really a list of places I will happily abandon.",
    },
    {
      word: "to immerse yourself",
      partOfSpeech: "phrase",
      meaning: "To involve yourself completely in a place or an activity.",
      example: "You only truly immerse yourself once your phone stops working.",
    },
    {
      word: "sustainable tourism",
      partOfSpeech: "noun",
      meaning: "Travel managed so it does not ruin what people travel to see.",
      example: "Sustainable tourism usually means fewer people like me, which I accept in principle.",
    },
    {
      word: "culture shock",
      partOfSpeech: "noun",
      meaning: "The disorientation of arriving among unfamiliar ways of life.",
      example: "The culture shock was the silence on the train, not the food.",
    },
    {
      word: "to get under your skin",
      partOfSpeech: "phrase",
      meaning: "To affect you deeply and refuse to leave.",
      example: "One rainy week there got under my skin and never left.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},
];
