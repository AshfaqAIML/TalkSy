/**
 * IELTS Speaking Masterclass — further Part 3 discussion sets
 * (PROMPT 54 expansion — Part 3 discussion sets batch A).
 *
 * Fifteen original discussion sets expanding the question bank beyond the
 * ten theme bands of part3-sets.ts. Each set is built of exactly four
 * questions that escalate in level: the first invites opinions on the
 * familiar (accessible), the second and third move into societal causes
 * and comparisons (abstract), and the fourth asks for prediction and
 * evaluation (speculative).
 *
 * Every model answer is a fresh demonstration of the moves its level
 * demands — opinion with reason, comparison with concession, speculation
 * with evaluation — written to sound spoken, never to be memorised. No
 * prompt or model text is recycled from anywhere else in the bank, no
 * item ties any national accent to a higher score, and the wording keeps
 * UK spelling throughout.
 */

import { SPEAKING_BANK_SOURCE_NOTE, type SpeakingPart3Set } from "./types";

export const part3MoreSetsA: SpeakingPart3Set[] = [
// ---------------------------------------------------------------------------
// 1. Social media and friendship (intermediate, difficulty 3)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-social-media",
  title: "Discussion set — social media and friendship",
  theme: "Social media and friendship",
  domain: "technology",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "interaction",
  progression:
    "From your own contact list to whether 'liking' someone can still count as friendship in the decades ahead.",
  questions: [
    {
      question: "Do you find it easy to keep in touch with friends online?",
      level: "accessible",
      modelAnswer:
        "Yes, mostly — it's where half my friendships actually live now. I've got a couple of close friends abroad, and without group chats and video calls we'd have drifted apart years ago. Having said that, online contact can feel a bit thin sometimes; a heart emoji isn't the same as a proper catch-up. So I'd say it keeps the door open, but it doesn't do all the work on its own.",
      analysis:
        "A direct answer with a personal reason, then a concession that keeps it honest — the opinion-plus-balance move that holds up at this level.",
      expected: ["online", "friend", "chat", "call"],
    },
    {
      question: "Why do many people feel lonelier even though they're more connected than ever?",
      level: "abstract",
      modelAnswer:
        "It's a strange contradiction, isn't it? I think seeing everyone's highlight reel makes ordinary life feel a bit grey by comparison. You can have five hundred contacts and still have nobody to ring at midnight. Online connection is wide but shallow — lots of little taps on a screen, not many real conversations. So the technology multiplies contacts without automatically deepening any of them, and that gap is where the loneliness creeps in.",
      analysis:
        "Explains a social paradox through cause and effect rather than anecdote, with a metaphor doing the abstract work — exactly the move up from personal opinion.",
      expected: ["lonel", "connect", "contact", "shallow"],
    },
    {
      question: "Is it easier to make friends online or face to face, in your view?",
      level: "abstract",
      modelAnswer:
        "Face to face, probably, though I'd argue online is easier for the first step. In person you get tone, body language, shared laughter — all the signals that build trust quickly. Online, anyone can appear charming for a few messages, and you can't quite smell whether you'd enjoy their company. On the other hand, shy people find the screen a gentler door. So online wins the introductions, but real friendship still has to happen in the room.",
      analysis:
        "Sides with one option, concedes the other honestly, then draws a two-part verdict — the compare-and-concede shape this level rewards.",
      expected: ["face", "online", "trust", "easier"],
    },
    {
      question: "Do you think online friendships will ever completely replace the face-to-face kind?",
      level: "speculative",
      modelAnswer:
        "I doubt it, to be honest — though they'll keep blurring. My generation already treats an online friend as a real friend, and the next one may not see any distinction at all. But humans are built for presence: a hug, a meal, sitting in the same silence. Maybe in fifty years we'll have holograms that fake that convincingly, but I suspect we'll still value the version you can actually touch. The form will change; the need probably won't.",
      analysis:
        "Hedges throughout — 'I doubt it', 'maybe', 'I suspect' — and finishes by evaluating what stays constant, not just what changes.",
      expected: ["doubt", "online", "friend", "change"],
    },
  ],
  vocabulary: [
    {
      word: "to keep in touch",
      partOfSpeech: "phrase",
      meaning: "To stay in contact with someone over time, however informally.",
      example: "We keep in touch mostly through voice notes these days.",
    },
    {
      word: "to drift apart",
      partOfSpeech: "phrase",
      meaning: "To slowly become distant from a friend without anyone deciding to.",
      example: "University friends often drift apart once jobs take over.",
    },
    {
      word: "highlight reel",
      partOfSpeech: "noun",
      meaning: "The polished, happy version of someone's life that they show online.",
      example: "Nobody posts their Monday morning; it's all highlight reel.",
    },
    {
      word: "fair-weather friend",
      partOfSpeech: "noun",
      meaning: "Someone who is friendly only when things are going well.",
      example: "The redundancy showed me who my fair-weather friends were.",
    },
    {
      word: "to hit it off",
      partOfSpeech: "phrase",
      meaning: "To like each other immediately, from the first meeting.",
      example: "We hit it off in the queue and talked for an hour.",
    },
    {
      word: "companionship",
      partOfSpeech: "noun",
      meaning: "The feeling of having someone's company, not just their attention.",
      example: "A dog offers companionship without any small talk.",
    },
    {
      word: "to ghost someone",
      partOfSpeech: "verb",
      meaning: "To cut off contact with someone online without explanation.",
      example: "He ghosted the group chat and nobody knows why.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 2. Public transport in cities (advanced, difficulty 4)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-public-transport",
  title: "Discussion set — public transport in cities",
  theme: "Public transport in cities",
  domain: "society",
  difficulty: 4,
  proficiency: "advanced",
  skill: "development",
  progression:
    "From the journeys you make each week to whether the private car can survive another generation of city living.",
  questions: [
    {
      question: "How do you usually get around the place where you live?",
      level: "accessible",
      modelAnswer:
        "A mix, really. I take the metro to work most days because it's predictable — no traffic, no hunting for parking. At weekends I'll walk or grab a bus if the weather's bad, and I only use a car for big shopping trips. So the bus and the underground do the daily heavy lifting; the car's basically a van for luggage at this point.",
      analysis:
        "Answers concretely with a reason attached to each mode, and the little joke at the end shows development beyond a plain list.",
      expected: ["metro", "bus", "walk", "car"],
    },
    {
      question: "Why do some cities manage to get people onto public transport while others fail?",
      level: "abstract",
      modelAnswer:
        "It mostly comes down to whether the network treats the passenger as a customer or an afterthought. Where it works — I'm thinking of places with cheap fares, frequent services and one ticket for everything — using the bus feels easier than driving. Where it fails, the service is patchy and unpredictable, so anyone who can afford a car buys one. There's a political choice underneath it too: cities that invest early tend to lock in the habit for a generation.",
      analysis:
        "Argues from a general principle, supports it with parallel cases, then reaches below the surface for a political cause — proper abstract reasoning.",
      expected: ["network", "fare", "servic", "cit"],
    },
    {
      question: "Should driving in a city centre ever be restricted, even if drivers complain?",
      level: "abstract",
      modelAnswer:
        "Yes, I think sometimes it has to be. A city centre is shared space, and one car occupies the room of a dozen pedestrians or a full bus. If driving stays free and easy, everyone pays in noise, dirty air and delays. That said, you can't just punish drivers before the alternative is decent — that just taxes poorer people. The fair order is: put the tram in first, then charge for the car.",
      analysis:
        "Takes a stand, justifies it with the common-good argument, then sets a condition on it — the reasoned position-plus-qualification this level needs.",
      expected: ["centre", "car", "bus", "shared"],
    },
    {
      question: "Will privately owned cars disappear from big cities within your lifetime?",
      level: "speculative",
      modelAnswer:
        "I'd expect them to become a minority, though 'disappear' is strong. Once self-driving pods and decent rentals are everywhere, owning a metal box that sits unused ninety-five per cent of the day will look like keeping a horse in the garage. My guess is city centres go car-light first, suburbs decades later. The odd thing is the emotional side — people love their cars. Habit will outlive logic by quite a margin.",
      analysis:
        "Predicts in stages rather than one leap, qualifies the wording, and ends on an evaluation of behaviour versus reason — top-level speculation.",
      expected: ["car", "guess", "own", "citi"],
    },
  ],
  vocabulary: [
    {
      word: "to get around",
      partOfSpeech: "phrase",
      meaning: "To travel from place to place within an area.",
      example: "It's a small town; you can get around on a bicycle.",
    },
    {
      word: "fare",
      partOfSpeech: "noun",
      meaning: "The money you pay to travel on a bus, train or metro.",
      example: "Off-peak fares are half the price here.",
    },
    {
      word: "rush hour",
      partOfSpeech: "noun",
      meaning: "The busy morning and evening periods when most people commute.",
      example: "The tram is standing-room only in the rush hour.",
    },
    {
      word: "congestion",
      partOfSpeech: "noun",
      meaning: "Traffic so heavy that vehicles barely move.",
      example: "Congestion is worst where the ring road narrows.",
    },
    {
      word: "park and ride",
      partOfSpeech: "noun",
      meaning: "A scheme where you leave the car outside the city and take a bus or train in.",
      example: "We used the park and ride rather than pay city parking.",
    },
    {
      word: "commuter",
      partOfSpeech: "noun",
      meaning: "A person who travels regularly between home and work.",
      example: "The first train is packed with sleepy commuters.",
    },
    {
      word: "to price someone out",
      partOfSpeech: "phrase",
      meaning: "To make something so expensive that someone can no longer afford it.",
      example: "Rising fares could price students out of the network.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 3. Advertising and persuasion (advanced, difficulty 4)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-advertising",
  title: "Discussion set — advertising and persuasion",
  theme: "Advertising and persuasion",
  domain: "economics",
  difficulty: 4,
  proficiency: "advanced",
  skill: "lexical",
  progression:
    "From the adverts that follow you around to whether persuasion can survive honesty at all.",
  questions: [
    {
      question: "Do adverts influence what you buy, would you say?",
      level: "accessible",
      modelAnswer:
        "More than I'd like to admit. I like to think I'm immune, but then I catch myself reaching for the brand with the nicer packaging. Online it's worse — the adverts already know what I looked at on Tuesday. I'd say they shape the shortlist rather than the final click: I still choose, but between options someone has paid to put in front of me.",
      analysis:
        "Admits the influence honestly, then narrows the claim to something precise — the self-aware twist lifts it above a plain yes.",
      expected: ["advert", "brand", "online", "immune"],
    },
    {
      question: "Why does advertising work even on people who claim to ignore it?",
      level: "abstract",
      modelAnswer:
        "Because ignoring an advert is still processing it, in a way. The message slips in under the critical radar — a jingle you hate is still a jingle you know. Familiarity does the quiet work: when you're standing in the aisle, the brand you've seen a hundred times feels safe, and safe usually wins. Nobody thinks they're being persuaded; they think they're choosing sensibly, which is precisely the trick.",
      analysis:
        "Explains a psychological mechanism with everyday imagery — the aisle, the jingle — turning a theory into something you can see.",
      expected: ["familiar", "brand", "persuad", "ignor"],
    },
    {
      question: "Is there a meaningful line between informing customers and manipulating them?",
      level: "abstract",
      modelAnswer:
        "In principle, yes, though the line is thinner than the industry admits. Informing says 'this exists, here's what it does'; manipulating engineers the feeling that you're incomplete without it. The trouble is that all persuasion borrows emotion to some degree — even a poster for a charity leans on pity. So I'd draw the line at honesty about the product, and let the storytelling in; the moment an advert lies about what it sells, it's crossed.",
      analysis:
        "Defines both terms first, concedes that emotion is always present, then places the boundary on truth — a properly structured abstract judgement.",
      expected: ["inform", "manipul", "honest", "line"],
    },
    {
      question: "Do you think advertising as we know it will still exist in fifty years?",
      level: "speculative",
      modelAnswer:
        "In some form, surely — the appetite to sell won't vanish. But the glossy TV-spot version is probably on its way out. My guess is it dissolves into entertainment and recommendations so seamless you won't call them adverts; the persuasion happens while you think you're being amused. Whether that's better or worse, I honestly can't decide. An advert you can see you can argue with. One you can't may be the most effective and least honest ever built.",
      analysis:
        "Predicts transformation rather than extinction, then weighs the ethics of the outcome — exactly the evaluate-the-future move this final level demands.",
      expected: ["advert", "guess", "persuad", "honest"],
    },
  ],
  vocabulary: [
    {
      word: "to target an audience",
      partOfSpeech: "phrase",
      meaning: "To aim a message at a particular group of people.",
      example: "The trainer ads target people who've already searched for gyms.",
    },
    {
      word: "jingle",
      partOfSpeech: "noun",
      meaning: "A short catchy tune used to make a brand memorable.",
      example: "That jingle has lived in my head since childhood.",
    },
    {
      word: "brand loyalty",
      partOfSpeech: "noun",
      meaning: "The habit of buying the same brand again and again.",
      example: "Brand loyalty is why some people never switch phones.",
    },
    {
      word: "subliminal",
      partOfSpeech: "adjective",
      meaning: "Working below the level of conscious notice.",
      example: "People joke about subliminal messages in old cinema adverts.",
    },
    {
      word: "to fall for something",
      partOfSpeech: "phrase",
      meaning: "To be deceived or persuaded by something.",
      example: "I fell for the 'limited offer' and bought two.",
    },
    {
      word: "product placement",
      partOfSpeech: "noun",
      meaning: "Paying for a product to appear inside a film or show.",
      example: "The detective drinks that cola in every scene — classic product placement.",
    },
    {
      word: "hard sell",
      partOfSpeech: "noun",
      meaning: "A forceful, direct attempt to make someone buy.",
      example: "I walked out; the hard sell was exhausting.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 4. Zoos and animal welfare (intermediate, difficulty 3)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-zoos",
  title: "Discussion set — zoos and animal welfare",
  theme: "Zoos and animal welfare",
  domain: "science",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "interaction",
  progression:
    "From childhood visits to the monkey house to whether our grandchildren will forgive us for keeping animals at all.",
  questions: [
    {
      question: "Did you visit zoos much when you were a child?",
      level: "accessible",
      modelAnswer:
        "Once or twice a year, and I loved it at the time. A school trip to the zoo meant a coach journey, a packed lunch and the smell of the monkey house — unforgettable in both good and bad ways. Looking back, the enclosures felt smaller than they seemed through a child's eyes. I rarely visit now, which probably says something about how the magic wears off.",
      analysis:
        "Personal memory with sensory detail, then a reflective turn at the end — the answer grows beyond the question without leaving it.",
      expected: ["zoo", "school", "child", "visit"],
    },
    {
      question: "Why do people still visit zoos when so much footage of animals is available free online?",
      level: "abstract",
      modelAnswer:
        "Presence, mostly. A screen shows you what an animal looks like; a zoo puts you in the same room, with the smell and the sheer scale of the thing. There's also a day-out ritual attached — the walking, the picnic, the map. And I suppose some parents treat it as education, a living encyclopaedia. Whether that justifies a captive life is a fair question, but it does explain the queues.",
      analysis:
        "Gives a layered explanation — experience, ritual, education — and leaves the ethics hanging honestly instead of resolving it too neatly.",
      expected: ["zoo", "smell", "education", "captive"],
    },
    {
      question: "Can keeping animals in captivity ever genuinely be for their benefit?",
      level: "abstract",
      modelAnswer:
        "Sometimes, I'd say, though it's a convenient phrase to hide behind. For a species on the brink, a breeding programme can be the difference between surviving and not — the panda is the showpiece example. But a hedgehog in a small cage isn't being saved from anything. So my line is this: captivity serves the animal when it's about the species' future, and merely entertains us when it's about the ticket money.",
      analysis:
        "Concedes the strongest case first, then draws a personal boundary in one clean sentence — a judgement with a principle behind it.",
      expected: ["breed", "captiv", "speci", "cage"],
    },
    {
      question: "Do you think zoos will still exist in a hundred years' time?",
      level: "speculative",
      modelAnswer:
        "I suspect they'll exist but be almost unrecognisable — more arks than attractions. As wild spaces shrink, keeping a species may genuinely become the only way to keep it, and zoos will look more like conservation hospitals with public viewing windows. Or perhaps public opinion moves the other way, and our grandchildren see today's cages the way we see circus animals. My money's on the first, but the second keeps the industry honest.",
      analysis:
        "Offers two futures, commits to one, and explains what the rejected scenario does — speculative thinking with a built-in check on itself.",
      expected: ["zoo", "suspect", "conserv", "grandchildren"],
    },
  ],
  vocabulary: [
    {
      word: "enclosure",
      partOfSpeech: "noun",
      meaning: "The fenced or walled area where a zoo keeps one group of animals.",
      example: "The elephants have a whole field as their enclosure.",
    },
    {
      word: "captivity",
      partOfSpeech: "noun",
      meaning: "The state of being kept by humans, not living wild.",
      example: "Some birds simply refuse to breed in captivity.",
    },
    {
      word: "breeding programme",
      partOfSpeech: "noun",
      meaning: "A planned effort to help a species reproduce safely.",
      example: "The breeding programme brought the wild horse back from near zero.",
    },
    {
      word: "endangered",
      partOfSpeech: "adjective",
      meaning: "At serious risk of dying out as a species.",
      example: "The poster listed a dozen endangered animals.",
    },
    {
      word: "enrichment",
      partOfSpeech: "noun",
      meaning: "Objects or activities given to captive animals to keep their minds busy.",
      example: "Keepers hide food in boxes as enrichment for the otters.",
    },
    {
      word: "to release into the wild",
      partOfSpeech: "phrase",
      meaning: "To set a captive animal free in its natural habitat.",
      example: "Half the litter will eventually be released into the wild.",
    },
    {
      word: "anthropomorphic",
      partOfSpeech: "adjective",
      meaning: "Describing animals as if they had human feelings and motives.",
      example: "It's anthropomorphic to say the lion looks bored, but I still say it.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 5. Homework and learning outside school (intermediate, difficulty 3)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-homework",
  title: "Discussion set — homework and learning outside school",
  theme: "Homework and learning outside school",
  domain: "education",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "fluency",
  progression:
    "From your own evenings of exercises to whether schools of the future will set any work at all.",
  questions: [
    {
      question: "Was homework a big part of your life as a student?",
      level: "accessible",
      modelAnswer:
        "Huge, looking back. Homework ran my secondary-school evenings — two or three subjects a night — and weekends vanished under projects. I didn't hate all of it; copying vocab lists actually calmed me down. But the long essays ate Sunday evenings alive. My mum had a rule that dinner came first, whatever was due, which probably kept me halfway sane.",
      analysis:
        "A candid personal picture with one contrasting detail — the calming vocab lists — which keeps it human rather than a complaint.",
      expected: ["homework", "weekend", "essay", "school"],
    },
    {
      question: "Why does homework help some students while exhausting others?",
      level: "abstract",
      modelAnswer:
        "It depends on what the work asks of you. Practice suits the confident — a student who almost understands benefits from another ten questions. But for the student who's lost, the same page is a reminder of failure, done alone at the kitchen table with no teacher to rescue them. And homes aren't equal: quiet rooms, help, a computer — the assignment assumes them all. So homework quietly amplifies whatever start you already had.",
      analysis:
        "Separates the task from the learner, then widens the lens to the home — two causes, not one, which is what abstract explanation needs.",
      expected: ["student", "practic", "home", "homework"],
    },
    {
      question: "Should the amount of homework be decided by teachers or by families?",
      level: "abstract",
      modelAnswer:
        "Teachers should set it, but families ought to have a say in how it lands. A teacher sees the whole class and knows what a topic needs; a parent sees one exhausted child at ten at night. To me the sensible version is a cap on total hours agreed centrally, with teachers free to choose the content. Otherwise you get either blanket drudgery or a negotiating session at every kitchen table.",
      analysis:
        "Weighs the two sides' knowledge, then proposes a compromise structure — answering a should-question with a design, not just a preference.",
      expected: ["teacher", "famili", "class", "hour"],
    },
    {
      question: "Will schools still set homework in fifty years, do you think?",
      level: "speculative",
      modelAnswer:
        "I'd guess the word survives but the thing changes shape. If AI can generate a worksheet in a second, grinding through thirty identical exercises stops teaching anything — so I suspect the tasks migrate towards projects, arguments and things a machine can't do for you. Perhaps homework becomes discussion with your family, logged somehow. Or it simply shrinks to nothing, and we discover children were never short of learning — only of time to play.",
      analysis:
        "Predicts by redefining the object — homework survives as something else — and closes on an evaluative twist about play, which is the top-level flourish.",
      expected: ["homework", "guess", "project", "machin"],
    },
  ],
  vocabulary: [
    {
      word: "assignment",
      partOfSpeech: "noun",
      meaning: "A specific piece of work given to a student, often with a deadline.",
      example: "The assignment has to be in by Friday.",
    },
    {
      word: "deadline",
      partOfSpeech: "noun",
      meaning: "The latest time something must be finished by.",
      example: "I work better the night before a deadline, sadly.",
    },
    {
      word: "to cram",
      partOfSpeech: "verb",
      meaning: "To try to learn a lot very quickly before a test.",
      example: "I crammed two years of history into one weekend.",
    },
    {
      word: "to fall behind",
      partOfSpeech: "phrase",
      meaning: "To fail to keep up with the level or pace of a class.",
      example: "Once you fall behind in maths, everything after it feels harder.",
    },
    {
      word: "rote learning",
      partOfSpeech: "noun",
      meaning: "Memorising by repetition without much understanding.",
      example: "Rote learning got me through the vocab test and taught me nothing.",
    },
    {
      word: "revision",
      partOfSpeech: "noun",
      meaning: "Going over material again before a test.",
      example: "Revision starts the night before, like a law of nature.",
    },
    {
      word: "extracurricular",
      partOfSpeech: "adjective",
      meaning: "Outside the official subjects of a school.",
      example: "Debating was the extracurricular that actually helped me.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 6. Sport for ordinary people (intermediate, difficulty 3)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-amateur-sport",
  title: "Discussion set — sport for ordinary people",
  theme: "Sport for ordinary people",
  domain: "health",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "interaction",
  progression:
    "From your own weekly exercise to whether the watching habit is quietly killing the doing habit.",
  questions: [
    {
      question: "How much exercise do you manage in a normal week?",
      level: "accessible",
      modelAnswer:
        "Not as much as I'd like, honestly. I aim for three runs a week and usually manage two, one of them short. There's a five-a-side game on Thursdays that keeps me honest — the others notice if I skip it. Weekends are a long walk and nothing more heroic. So: regular exercise, but nothing like an athlete's timetable.",
      analysis:
        "Self-deprecating honesty with a reason and a specific detail — the Thursday game — that makes the answer feel lived-in.",
      expected: ["exercise", "run", "week", "walk"],
    },
    {
      question: "Why do adults give up sport even when they know it's good for them?",
      level: "abstract",
      modelAnswer:
        "Because knowing and doing live in different rooms, I think. Adult life quietly removes every structure that used to make us move — no more school timetables, team-mates expecting you, games at a set time. What's left is willpower, and willpower is the first thing tiredness beats. Add the awkwardness of being a beginner again at forty, and it's easier to watch sport than to be bad at it.",
      analysis:
        "Blames structure, not laziness — a cause most people haven't considered — and the closing line lands the idea memorably.",
      expected: ["willpower", "adult", "structur", "watch"],
    },
    {
      question: "Is it healthier for a society to encourage team games or individual exercise?",
      level: "abstract",
      modelAnswer:
        "For sheer health, individual probably wins — a jog needs no eleven other people to exist. But societies aren't only built of hearts and lungs; team games teach cooperation, losing gracefully, turning up for others. Kids who only ever exercise alone miss a whole classroom. My instinct is both, weighted by age: team sport young, when character forms, and solitary exercise later, when schedules fragment.",
      analysis:
        "Grants each side its strongest ground, then resolves with a both-and answer split by life stage — a comparison that ends in a synthesis.",
      expected: ["team", "exercis", "health", "individual"],
    },
    {
      question: "Will machines that exercise for us ever make physical effort obsolete?",
      level: "speculative",
      modelAnswer:
        "Oddly, I think the opposite is likelier. The more machines do, the more deliberate moving becomes — a choice, almost a statement, like baking bread you could buy. Maybe medical tech patches some of the damage, so bodies idle without paying the full price. But I can't picture a future where people don't want to feel capable. My bet is effort becomes a luxury good: less common, more prized, and possibly subscription-based.",
      analysis:
        "Argues against the premise of the question — a bold speculative move — then lands a concrete, half-mocking prediction to finish.",
      expected: ["machin", "effort", "future", "mov"],
    },
  ],
  vocabulary: [
    {
      word: "to keep fit",
      partOfSpeech: "phrase",
      meaning: "To stay in reasonable physical shape through regular activity.",
      example: "I keep fit by cycling to work and pretending it's a hobby.",
    },
    {
      word: "sedentary",
      partOfSpeech: "adjective",
      meaning: "Involving much sitting and little movement.",
      example: "My job is sedentary; my knees remind me.",
    },
    {
      word: "to work out",
      partOfSpeech: "phrasal verb",
      meaning: "To exercise, especially in a structured way.",
      example: "He works out at six before anyone else is awake.",
    },
    {
      word: "team-mate",
      partOfSpeech: "noun",
      meaning: "Another member of your team in a game or sport.",
      example: "A team-mate covered my shift at the weekend.",
    },
    {
      word: "to take up a sport",
      partOfSpeech: "phrase",
      meaning: "To begin doing a sport regularly.",
      example: "I took up swimming at fifty and wish I'd done it at five.",
    },
    {
      word: "personal best",
      partOfSpeech: "noun",
      meaning: "Someone's own fastest or best performance so far.",
      example: "Shaving four seconds off my personal best kept me smiling for days.",
    },
    {
      word: "fair play",
      partOfSpeech: "noun",
      meaning: "Honesty and respect for the rules and the other side.",
      example: "He called the point against himself — fair play, honestly.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 7. The future of libraries (advanced, difficulty 4)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-libraries-future",
  title: "Discussion set — the future of libraries",
  theme: "The future of libraries",
  domain: "culture",
  difficulty: 4,
  proficiency: "advanced",
  skill: "development",
  progression:
    "From the last library you sat in to whether a room of books can justify itself in a digital century.",
  questions: [
    {
      question: "When did you last use a library, and what for?",
      level: "accessible",
      modelAnswer:
        "About a month ago, oddly enough, to borrow an actual paper novel — my format of choice is still print. But I use the building more than the books: it's my fallback office when home is too loud, and I've printed things there, and once I sat a practice exam in the quiet room. So the library works for me as a free public living room that happens to contain literature.",
      analysis:
        "One memory expanded into a portrait of the building's wider uses — the answer develops from anecdote into a small thesis.",
      expected: ["library", "book", "borrow", "quiet"],
    },
    {
      question: "If everyone can read a book on a screen for free, what are libraries actually for now?",
      level: "abstract",
      modelAnswer:
        "I'd argue they were never really about the books — the books were the excuse for a shared, quiet, non-commercial place. Screens deliver text but not the other things: warmth in winter, a desk you're allowed to occupy for hours, staff who'll help with a form. In poorer areas they're sometimes the only free internet point left. So what they're for now is what they were quietly for all along: a room society keeps open on purpose.",
      analysis:
        "Reframes the institution — from storehouse to kept-open room — which is a genuinely abstract move, argued through services not sentiment.",
      expected: ["screen", "quiet", "free", "room"],
    },
    {
      question: "Should public money keep funding buildings whose main product can be stored on a phone?",
      level: "abstract",
      modelAnswer:
        "Yes, and I'd say the premise is the weak part. A phone stores the text; it doesn't provide the place, and place is the expensive half. Compare the running costs of one library with what society pays for the loneliness, the literacy gaps, the cold rooms it prevents — it's not close. That said, I'd accept closures where a town genuinely can't sustain a building, provided the service travels — a van, a pop-up, something. Fund the function; the walls are negotiable.",
      analysis:
        "Attacks the assumption inside the question before answering it, then makes one concession with a condition — a fully argued position, not a cheer.",
      expected: ["librari", "place", "fund", "servic"],
    },
    {
      question: "Do you think there will still be physical libraries in a hundred years?",
      level: "speculative",
      modelAnswer:
        "I'd bet on a few, but fewer and stranger. The ones that survive will be the ones that stopped defending books and started hosting — workshops, archives, a quiet place that nothing commercial offers. Half may close as reading moves entirely onto screens. But I notice we still keep candlesticks after electric light, and steam railways after diesel. Some institutions get kept not because they're needed but because we'd be poorer without them — and libraries feel like that kind of thing.",
      analysis:
        "Predicts with a number attached, then argues from historical analogy — candlesticks, steam — which is exactly the evidence-shaped speculation this level wants.",
      expected: ["librari", "surviv", "screen", "keep"],
    },
  ],
  vocabulary: [
    {
      word: "to borrow",
      partOfSpeech: "verb",
      meaning: "To take a book from a library and return it later.",
      example: "You can borrow six books at a time on one card.",
    },
    {
      word: "lending",
      partOfSpeech: "noun",
      meaning: "The service of giving items out temporarily.",
      example: "The lending service now includes tools and toys.",
    },
    {
      word: "archive",
      partOfSpeech: "noun",
      meaning: "A collection of historical records kept carefully.",
      example: "The local archive holds maps going back two centuries.",
    },
    {
      word: "quiet room",
      partOfSpeech: "noun",
      meaning: "A space set aside for silent study.",
      example: "The quiet room is sacrosanct — even phones are embarrassed there.",
    },
    {
      word: "to browse",
      partOfSpeech: "verb",
      meaning: "To look through shelves or pages without a particular aim.",
      example: "I went in to browse and left with four books.",
    },
    {
      word: "public funding",
      partOfSpeech: "noun",
      meaning: "Money a government provides for a service.",
      example: "The swimming pool survives on the same public funding as the library.",
    },
    {
      word: "to be a thing of the past",
      partOfSpeech: "phrase",
      meaning: "To no longer exist or be done.",
      example: "Paper maps are nearly a thing of the past, yet I still buy them.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 8. Volunteering and unpaid work (intermediate, difficulty 3)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-volunteering",
  title: "Discussion set — volunteering and unpaid work",
  theme: "Volunteering and unpaid work",
  domain: "society",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "fluency",
  progression:
    "From your own unpaid hours to whether a society can ever run on goodwill alone.",
  questions: [
    {
      question: "Have you ever given your time to help others for free?",
      level: "accessible",
      modelAnswer:
        "A little, yes. At university I helped at a food bank most Saturdays — heavy crates, early start, but the sort of tired you feel good about. These days it's smaller: shifting for an elderly neighbour, or translating letters for a cousin who's still learning the language. I wouldn't call myself a volunteer exactly, but I've tasted the habit and I like it.",
      analysis:
        "Concrete memories at two scales — organised and informal — closed with an honest self-assessment rather than a medal.",
      expected: ["volunteer", "help", "food", "neighbour"],
    },
    {
      question: "Why do people volunteer when they could be paid for their time elsewhere?",
      level: "abstract",
      modelAnswer:
        "Because pay isn't the only currency, I suppose. Volunteering buys belonging — a team, a purpose, being needed on a Saturday morning. Some of it is honest idealism, wanting the neighbourhood to be a bit kinder. And there's the exchange nobody says aloud: experience, references, a way into work. Motives are usually mixed, and honestly that's fine — the crate gets carried whether the feeling behind it is pure or not.",
      analysis:
        "Names several drivers and refuses to rank them morally — the honesty of the last line is what makes the abstraction convincing.",
      expected: ["volunteer", "purpos", "experi", "belong"],
    },
    {
      question: "Should vital services ever be left to volunteers rather than paid professionals?",
      level: "abstract",
      modelAnswer:
        "As a stopgap, reluctantly — as a plan, no. Goodwill is real but it's seasonal: exam terms, harvests, life events all thin the rota precisely when need peaks. Professionals can be held to standards, trained, replaced; a volunteer can just drift away, and you can't really blame them. My worry is the phrase 'community spirit' becoming cover for funding that was quietly withdrawn. Let volunteers add to a service; never let them be the structure.",
      analysis:
        "Distinguishes emergency from system, explains why goodwill is structurally unreliable, then names the political danger — an argument with three storeys.",
      expected: ["volunteer", "goodwill", "profession", "structur"],
    },
    {
      question: "Might volunteering become compulsory for young people in some countries?",
      level: "speculative",
      modelAnswer:
        "I'd be surprised if it's compulsory by name, but I can imagine it by another name — a 'national service year', something on the CV that's quietly expected. Governments love cheap labour dressed as character-building. Whether it survives contact with fairness is another matter: forced helping isn't helping, it's a sentence. My guess is soft pressure rather than law — the wink that says your application goes better with a stint of service behind it.",
      analysis:
        "Predicts a euphemism rather than a law, then evaluates it against fairness — the sceptical, layered ending this level exists to test.",
      expected: ["compulsori", "guess", "govern", "pressur"],
    },
  ],
  vocabulary: [
    {
      word: "to volunteer",
      partOfSpeech: "verb",
      meaning: "To offer time and work freely, without payment.",
      example: "She volunteers at the shelter every other Sunday.",
    },
    {
      word: "goodwill",
      partOfSpeech: "noun",
      meaning: "Willingness to help based on kindness rather than duty.",
      example: "The festival runs on pure goodwill and borrowed chairs.",
    },
    {
      word: "rota",
      partOfSpeech: "noun",
      meaning: "A list showing who does a task at which time.",
      example: "I'm off the coffee rota this week, thank goodness.",
    },
    {
      word: "to give something back",
      partOfSpeech: "phrase",
      meaning: "To help the community that has helped you.",
      example: "I coach juniors to give something back.",
    },
    {
      word: "charity work",
      partOfSpeech: "noun",
      meaning: "Unpaid work done to help people in need.",
      example: "His charity work began with washing dishes at a shelter.",
    },
    {
      word: "out of the goodness of your heart",
      partOfSpeech: "phrase",
      meaning: "Purely from kindness, with no reward expected.",
      example: "Nobody sorts the recycling out of the goodness of their heart.",
    },
    {
      word: "unpaid internship",
      partOfSpeech: "noun",
      meaning: "A period of work for experience rather than wages.",
      example: "The unpaid internship taught me plenty and paid me nothing.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 9. Robots in daily life (advanced, difficulty 4)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-robots-daily-life",
  title: "Discussion set — robots in daily life",
  theme: "Robots in daily life",
  domain: "technology",
  difficulty: 4,
  proficiency: "advanced",
  skill: "interaction",
  progression:
    "From the machines already under your stairs to whether handing over the housework hands over anything else.",
  questions: [
    {
      question: "Which jobs around your home would you happily hand to a machine?",
      level: "accessible",
      modelAnswer:
        "The boring middle of the week, basically — ironing, hoovering, cleaning the bathroom. Those jobs never end and never thank you. I'd keep cooking, oddly, because I enjoy the process even when it goes wrong. And I'd think twice about a robot that tidies, since half the fun of visitors is pretending the house always looks like this.",
      analysis:
        "Sorts tasks by feeling, not efficiency, and the joke at the end shows a personality actually using the question.",
      expected: ["robot", "iron", "cook", "clean"],
    },
    {
      question: "Why are people happy to let machines do physical work but uneasy about them making decisions?",
      level: "abstract",
      modelAnswer:
        "Because a vacuum can't be wrong in a way that matters. Physical work is visible and checkable — if the floor's clean, the machine did its job. Decisions are different: we can't see the reasoning, only the result, and when it goes wrong we can't interrogate it. There's also the matter of blame — with a human you can ask why; with a system you get an apology template. People accept servants and distrust judges.",
      analysis:
        "Builds the distinction on visibility and accountability, then compresses it into one aphorism — servants versus judges — which is the abstract move.",
      expected: ["decis", "machin", "wrong", "blame"],
    },
    {
      question: "Does a home full of machines make people more or less capable?",
      level: "abstract",
      modelAnswer:
        "Both, and the direction depends on what we do with the hours we buy back. Saved from chores, some people cook better, read more, learn things. Others watch the hours disappear into a screen and can barely assemble a shelf. There's a real skill-atrophy risk — calculators didn't make us worse at maths as a species, but GPS has definitely thinned my sense of direction. Capable at what? is the question hiding underneath: we'll be differently capable, and that's not automatically worse.",
      analysis:
        "Answers with both branches honestly, uses a self-example as evidence, and ends by redefining the question's key word — layered abstract thinking.",
      expected: ["capabl", "skill", "hour", "screen"],
    },
    {
      question: "If robots take over most household tasks, what will happen to people's pride in their homes?",
      level: "speculative",
      modelAnswer:
        "I suspect it drifts from the doing to the arranging. When nobody scrubs the floor, a clean floor stops being an achievement — it's just the machine's default state. Pride moves up a level: to interiors, objects, the home as a self-portrait. Some people may lose the quiet satisfaction of an hour's honest tidying, and I think that's a real loss. But we adjusted the same way with bread and sewing, and nostalgia is not a plan.",
      analysis:
        "Traces a psychological consequence through stages, admits a loss, then dismisses pure nostalgia as an argument — evaluation is the finish line here.",
      expected: ["pride", "machin", "suspect", "hom"],
    },
  ],
  vocabulary: [
    {
      word: "chore",
      partOfSpeech: "noun",
      meaning: "A small routine job around the home.",
      example: "Taking the bins out is the chore I negotiate hardest.",
    },
    {
      word: "to hoover",
      partOfSpeech: "verb",
      meaning: "To clean a floor with a vacuum cleaner (UK).",
      example: "I hoovered at midnight to avoid the morning.",
    },
    {
      word: "labour-saving",
      partOfSpeech: "adjective",
      meaning: "Designed to reduce the work a task needs.",
      example: "Every labour-saving device seems to add a step.",
    },
    {
      word: "to take the drudgery out of",
      partOfSpeech: "phrase",
      meaning: "To remove the boring, repeated part of a task.",
      example: "The dishwasher took the drudgery out of Sunday.",
    },
    {
      word: "to be hands-on",
      partOfSpeech: "phrase",
      meaning: "To do things yourself rather than delegating them.",
      example: "She's hands-on with the garden; gloves on every weekend.",
    },
    {
      word: "automation",
      partOfSpeech: "noun",
      meaning: "The use of machines to do work formerly done by people.",
      example: "Automation reached my kitchen before my office.",
    },
    {
      word: "to ease off",
      partOfSpeech: "phrasal verb",
      meaning: "To become less strong or demanding over time.",
      example: "My suspicion of the thing eased off after it cleaned under the sofa.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 10. Cities that keep growing (advanced, difficulty 5)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-growing-cities",
  title: "Discussion set — cities that keep growing",
  theme: "Cities that keep growing",
  domain: "society",
  difficulty: 5,
  proficiency: "advanced",
  skill: "development",
  progression:
    "From your own city's sprawl to whether anywhere can remain a good place to live at unlimited size.",
  questions: [
    {
      question: "Has the place you live in grown much since you first knew it?",
      level: "accessible",
      modelAnswer:
        "Enormously — it's barely recognisable in parts. Where I grew up, the edge of town was a field; now it's a retail park and the field is a memory people argue about. Whole districts have appeared in ten years, and the skyline has a second layer of towers. Some of it I like — the old dock area is lively now. But growth has outrun the buses, and you can feel it at five in the evening.",
      analysis:
        "Change shown through one vanished landmark, then judged — liked here, failing there — which turns nostalgia into observation.",
      expected: ["grow", "town", "field", "tower"],
    },
    {
      question: "Why do cities keep growing even when the people in them complain about them?",
      level: "abstract",
      modelAnswer:
        "Because the complaint and the cause are the same thing. Cities concentrate opportunity — jobs, hospitals, universities, the chance of a better life — and every one of those pulls more people in, who then need shops, builders, teachers, who pull in more. It's a loop with no natural brake. Individuals grumble about the queue while standing in it, because the alternative — fewer chances somewhere smaller — is worse. We don't grow cities on purpose; we grow them by each of us choosing the least bad option.",
      analysis:
        "Describes a self-reinforcing system and ends by explaining the paradox in the question instead of dodging it — systemic reasoning at its best.",
      expected: ["opportuniti", "loop", "peopl", "grow"],
    },
    {
      question: "Is there a size at which a city stops being a good place to live?",
      level: "abstract",
      modelAnswer:
        "I don't think it's a number — it's a relationship between size and management. Tokyo is vast and works; places a tenth of it are gridlocked, because infrastructure either runs ahead of population or chases it. When it chases, the city has passed its good size, whatever that number is. So my honest answer is a city becomes unlivable the day it grows faster than it can absorb — some reach that at two million, some never do.",
      analysis:
        "Refuses the number, replaces it with a ratio, and defends it with a real example — reframing the question is the highest abstract skill.",
      expected: ["size", "infrastructur", "manag", "citi"],
    },
    {
      question: "Will the megacities of 2100 be better or worse places than today's?",
      level: "speculative",
      modelAnswer:
        "Both at once, I suspect, and split by floor. The managed top — flood defences, vertical farms, districts that generate their own power — could be extraordinary. The underside, where growth outruns governance, risks becoming a kind of shadow city with neither sewers nor law. Technology gives cities the means; politics decides whether it's shared. My honest prediction is a wider gap inside each city than between cities — and that the word 'urban' will mean your neighbourhood, not your metropolis.",
      analysis:
        "Predicts division rather than a single future, separates capability from politics, and ends by redefining a word — the full speculative toolkit in one answer.",
      expected: ["citi", "predict", "technolog", "gap"],
    },
  ],
  vocabulary: [
    {
      word: "urban sprawl",
      partOfSpeech: "noun",
      meaning: "The spreading of a city into the countryside around it.",
      example: "The valley is all urban sprawl now; you can't tell where one town ends.",
    },
    {
      word: "infrastructure",
      partOfSpeech: "noun",
      meaning: "The underlying systems a place needs: roads, pipes, power.",
      example: "The infrastructure was built for a city half this size.",
    },
    {
      word: "megacity",
      partOfSpeech: "noun",
      meaning: "An urban area of more than ten million people.",
      example: "Several megacities will pass thirty million by mid-century.",
    },
    {
      word: "commute",
      partOfSpeech: "noun",
      meaning: "The regular journey between home and work.",
      example: "My commute grew twenty minutes in five years.",
    },
    {
      word: "overcrowding",
      partOfSpeech: "noun",
      meaning: "Having too many people in one place for comfort or safety.",
      example: "Overcrowding on the platform is the first sign the city has outgrown its rails.",
    },
    {
      word: "governance",
      partOfSpeech: "noun",
      meaning: "The way an organisation or city is run and held to account.",
      example: "Good governance is rarer than good engineering.",
    },
    {
      word: "gridlocked",
      partOfSpeech: "adjective",
      meaning: "So blocked by traffic that nothing moves at all.",
      example: "The ring road is gridlocked by half past four.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 11. The effects of tourism (advanced, difficulty 4)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-tourism-effects",
  title: "Discussion set — the effects of tourism",
  theme: "The effects of tourism",
  domain: "culture",
  difficulty: 4,
  proficiency: "advanced",
  skill: "lexical",
  progression:
    "From the trips you actually take to whether the world can be loved to death by its admirers.",
  questions: [
    {
      question: "Do you think travel broadens the mind, or is that just a phrase?",
      level: "accessible",
      modelAnswer:
        "It can, but it's conditional, I think. A fortnight in a resort that could be anywhere teaches you about swimming pools. But even a rough trip — wrong buses, terrible hotels — teaches patience and how to be a guest somewhere. My own travel certainly rearranged some assumptions I had. So the phrase is true the way exercise is true: only if you actually do the work.",
      analysis:
        "Challenges the cliché, then rescues it with a condition and a comparison — the answer is an argument, not a quote.",
      expected: ["travel", "resort", "teach", "trip"],
    },
    {
      question: "Why does tourism sometimes damage the very places people come to see?",
      level: "abstract",
      modelAnswer:
        "Because popularity and fragility travel together. A place becomes worth visiting because it's unspoiled; being visited is precisely what spoils it — the paradox at the centre of tourism itself. Venice is the textbook: so many people want Venice that Venice risks becoming a museum of itself, with locals priced out and the real city gone. Love, at scale, behaves like erosion. And nobody is to blame individually, which is why nothing changes.",
      analysis:
        "States the paradox cleanly, then proves it with a named case and a metaphor — the abstract point lands as something you can picture.",
      expected: ["tourism", "unspoiled", "paradox", "visit"],
    },
    {
      question: "Who should decide how many visitors a fragile place can take — the market or the authorities?",
      level: "abstract",
      modelAnswer:
        "The authorities, with the market as a tool rather than a driver. Left alone, price only rations by wealth, so the last person who can afford Venice gets in and the city keeps eroding. Caps, timed tickets, cruise limits — blunt instruments, but they at least measure the damage. The market can then allocate within the cap, which keeps some fairness in it. Decide the number first, let money arrange the queue; never the other way round.",
      analysis:
        "Chooses a side, shows why the rival fails, then assigns each its proper role — a design answer, which is rare and rewarded.",
      expected: ["market", "cap", "authoriti", "price"],
    },
    {
      question: "Will travel in the future be restricted in the way some people now predict?",
      level: "speculative",
      modelAnswer:
        "I'd expect soft restrictions long before hard ones. Carbon budgets per flight, taxes that climb with distance, queues at borders that simply get longer — friction rather than prohibition. Flying may quietly become a luxury again, the way it started. And perhaps virtual visits soak up some of the longing. But the desire to stand in a place is stubborn; I suspect we'll ration it, not cure it. The grandkids will find our mile-high weekends as strange as we find smoking on aeroplanes.",
      analysis:
        "Predicts mechanisms, not headlines, and evaluates the present through the eyes of the future — the perspective shift is the mark of the top.",
      expected: ["restrict", "flight", "luxuri", "suspect"],
    },
  ],
  vocabulary: [
    {
      word: "tourist trap",
      partOfSpeech: "noun",
      meaning: "A place set up to extract money from visitors rather than show them anything.",
      example: "The old town became a tourist trap with the same fridge magnets everywhere.",
    },
    {
      word: "off the beaten track",
      partOfSpeech: "phrase",
      meaning: "Away from the places most visitors go.",
      example: "The best meal of the trip was in a village well off the beaten track.",
    },
    {
      word: "shoulder season",
      partOfSpeech: "noun",
      meaning: "The months either side of peak season, quieter and cheaper.",
      example: "We travel in the shoulder season: April, October.",
    },
    {
      word: "overtourism",
      partOfSpeech: "noun",
      meaning: "Too many visitors for a place to absorb.",
      example: "Overtourism has turned the old town into a shop with streets.",
    },
    {
      word: "souvenir",
      partOfSpeech: "noun",
      meaning: "Something bought to remember a place by.",
      example: "The fridge magnet is the national souvenir; the shelf is full.",
    },
    {
      word: "ecotourism",
      partOfSpeech: "noun",
      meaning: "Travel that claims to protect nature rather than harm it.",
      example: "Ecotourism helps, but only where the numbers stay tiny.",
    },
    {
      word: "to haggle",
      partOfSpeech: "verb",
      meaning: "To argue about the price of something.",
      example: "You haggle at the market or you pay the dreaming price.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 12. Changing eating habits (intermediate, difficulty 3)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-eating-habits",
  title: "Discussion set — changing eating habits",
  theme: "Changing eating habits",
  domain: "health",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "grammar",
  progression:
    "From your own kitchen table to whether any food tradition can survive the century intact.",
  questions: [
    {
      question: "Do you cook much, or rely on ready-made food?",
      level: "accessible",
      modelAnswer:
        "A bit of both, leaning towards cooking in a good week. I can do about six meals on rotation — nothing fancy, but edible and quick. When work gets heavy the rotation collapses and it's supermarket ready meals, which I don't feel great about. Sunday is the exception: I cook properly then, mostly because nobody's rushing me and it's the one day I'm not too tired to care.",
      analysis:
        "Gives the honest mixed picture with a condition attached to each habit, and a reason for the Sunday exception — organised, personal, true.",
      expected: ["cook", "meal", "readi", "tired"],
    },
    {
      question: "Why are traditional cooking skills fading in so many households?",
      level: "abstract",
      modelAnswer:
        "Mainly because the economics that sustained them have gone. Grandmothers cooked daily because someone was home all day; now both adults are out, commutes are long, and tiredness is the main ingredient at seven in the evening. Skills also need a chain — you learn by watching someone who has time. Break that chain for a generation and the knowledge just stops. Convenience food didn't beat tradition in a fair fight; it walked in when tradition's guard was down.",
      analysis:
        "Explains through structural change and a broken chain of transmission — the closing line turns the analysis into a small story.",
      expected: ["tradit", "skill", "conveni", "time"],
    },
    {
      question: "Should governments interfere in what people eat, or is food a private matter?",
      level: "abstract",
      modelAnswer:
        "It's private up to the point where the bill stops being private. If a state funds the hospitals, it has some legitimate interest in the flood of sugar arriving daily. But there's a dignity line: information, labelling, making the good option the cheap option — those I'd accept. Outright bans on pleasure foods feel nannyish and mostly fail. So nudge, don't prohibit: tax the wrong things quietly, subsidise the right ones loudly.",
      analysis:
        "Sets a principle, lists acceptable tools, rejects the crude one — and the final contrast, quietly against loudly, is a proper rhetorical finish.",
      expected: ["tax", "label", "privat", "subsidis"],
    },
    {
      question: "Will people in fifty years eat very differently from us, do you think?",
      level: "speculative",
      modelAnswer:
        "I'd say different ingredients, same appetites. Lab-grown meat and insects will probably be normal to people who currently find them unthinkable — disgust is very trainable. But I suspect the shape of eating survives: a table, an evening, people together, because that part was never about nutrition. What might really change it is medicine: diets designed per person, from a sample, rather than one plate for everyone. The fork stays; the menu gets personal.",
      analysis:
        "Separates what changes from what won't, explains why disgust fades, and closes on a chiasmus — speculation with an elegant shape.",
      expected: ["eat", "probabl", "meat", "peopl"],
    },
  ],
  vocabulary: [
    {
      word: "home cooking",
      partOfSpeech: "noun",
      meaning: "Food prepared at home from basic ingredients.",
      example: "There's no home cooking like your grandmother's, and that's half the problem.",
    },
    {
      word: "ready meal",
      partOfSpeech: "noun",
      meaning: "A pre-prepared dish needing only reheating.",
      example: "The freezer holds three ready meals and no excuses.",
    },
    {
      word: "to eat out",
      partOfSpeech: "phrase",
      meaning: "To have a meal in a restaurant rather than at home.",
      example: "We eat out on Fridays; the kitchen has the night off.",
    },
    {
      word: "dietary requirements",
      partOfSpeech: "noun",
      meaning: "The specific things a person must or mustn't eat.",
      example: "The restaurant asks about dietary requirements before you order.",
    },
    {
      word: "processed food",
      partOfSpeech: "noun",
      meaning: "Food changed heavily from its natural state, usually packaged.",
      example: "The ingredients list on processed food reads like a chemistry exam.",
    },
    {
      word: "to be fussy about food",
      partOfSpeech: "phrase",
      meaning: "To be difficult to please when eating.",
      example: "I'm fussy about fish, which limits half the menu.",
    },
    {
      word: "plant-based",
      partOfSpeech: "adjective",
      meaning: "Made from plants, with little or no animal product.",
      example: "The plant-based sausage fooled everyone at the barbecue.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 13. Children and money (advanced, difficulty 4)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-children-and-money",
  title: "Discussion set — children and money",
  theme: "Children and money",
  domain: "economics",
  difficulty: 4,
  proficiency: "advanced",
  skill: "lexical",
  progression:
    "From Saturday pocket money to whether a cashless world can teach the value of a coin at all.",
  questions: [
    {
      question: "Did you get pocket money when you were a child?",
      level: "accessible",
      modelAnswer:
        "I did, from about seven — a small amount of pocket money every Saturday, tied to nothing, which I now think was the point. I blew the first month's on sweets and then had to face five empty Saturdays, which taught more than any lecture could have. Later there were top-ups for odd jobs. Looking back, being broke at nine was the cheapest financial education my parents ever bought me.",
      analysis:
        "A memory turned into an argument — the wasted month is cited as evidence, and the last line lands it with wit.",
      expected: ["money", "saturda", "job", "educ"],
    },
    {
      question: "Why do so many adults struggle with money despite years of schooling?",
      level: "abstract",
      modelAnswer:
        "Because schools teach about money in the abstract, and money only punishes you in the particular. You can define compound interest and still finance a sofa you can't afford at twenty-three. The habits are emotional, not technical — spending calms people, saving doesn't — and no curriculum reaches feelings. And children copy households: a family that never talks about money produces adults who can't either. The maths was never the hard part.",
      analysis:
        "Splits the problem into knowledge and emotion, then adds imitation at home — three causes, each named in a sentence you could quote.",
      expected: ["money", "school", "habit", "children"],
    },
    {
      question: "Is it better to teach children about money through allowance, or through earning?",
      level: "abstract",
      modelAnswer:
        "Earning teaches the source; allowance teaches the managing — and managing is the scarcer skill. A child who only ever gets money by working learns that money arrives, never that it behaves. So I'd run both, sequenced: an allowance as a baseline, so saving and delaying are learned early, topped up by genuinely paid jobs later, so effort and price get connected. The mistake is paying for everything — then money is only a wage, and patience never gets a lesson.",
      analysis:
        "Grants each method its exact virtue, then prescribes a sequence — the answer designs a policy instead of picking a side.",
      expected: ["earn", "allowanc", "child", "sav"],
    },
    {
      question: "If cash disappears entirely, will children still be able to grasp what money is?",
      level: "speculative",
      modelAnswer:
        "Harder, but not impossible — they'll just learn it the way they learn time. Nobody under ten has felt an hour, yet they come to feel it through waiting. The worry with cashless is that money loses its friction: a tap is over before the regret can arrive. I'd expect parents to invent rituals — jars filled with tokens, visible counters, some physical stand-in — because the idea of value needs a body. The concept survives; the lesson just needs a new prop.",
      analysis:
        "Answers by analogy, identifies the real danger — lost friction — then predicts a human adaptation — the jars — which is specific, not vague.",
      expected: ["money", "cashless", "tap", "parent"],
    },
  ],
  vocabulary: [
    {
      word: "pocket money",
      partOfSpeech: "noun",
      meaning: "A small regular amount given to a child, not earned.",
      example: "The pocket money is spent by Monday, every Monday.",
    },
    {
      word: "allowance",
      partOfSpeech: "noun",
      meaning: "Money given regularly, often for a purpose or as a baseline.",
      example: "Her allowance covers travel and nothing more.",
    },
    {
      word: "to save up for something",
      partOfSpeech: "phrase",
      meaning: "To keep money aside over time for a particular thing.",
      example: "I'm saving up for a bicycle that my legs will pay for later.",
    },
    {
      word: "to budget",
      partOfSpeech: "verb",
      meaning: "To plan how money will be spent over a period.",
      example: "I budget badly: the plan survives to the twelfth.",
    },
    {
      word: "impulse buy",
      partOfSpeech: "noun",
      meaning: "Something bought suddenly, without planning.",
      example: "The museum shop exists entirely for impulse buys.",
    },
    {
      word: "to make ends meet",
      partOfSpeech: "phrase",
      meaning: "To have just enough money to cover basic needs.",
      example: "They made ends meet by mending everything twice.",
    },
    {
      word: "financial literacy",
      partOfSpeech: "noun",
      meaning: "The knowledge needed to manage money sensibly.",
      example: "Financial literacy is taught in one lesson and tested for the rest of life.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 14. Smartphones and young children (advanced, difficulty 4)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-smartphones-children",
  title: "Discussion set — smartphones and young children",
  theme: "Smartphones and young children",
  domain: "technology",
  difficulty: 4,
  proficiency: "advanced",
  skill: "interaction",
  progression:
    "From the age you'd hand one over to whether a childhood can still be slow in a fast decade.",
  questions: [
    {
      question: "At what age do you think a child should first have a smartphone?",
      level: "accessible",
      modelAnswer:
        "Later than the current fashion, I'd say — around twelve, when they can walk home alone and need to call. Before that it's a toy with a door to the internet attached, and children that age can't manage the door. Even at twelve I'd start with a brick that only calls and texts, then the smartphone a year later, once the habit of looking up has formed. The phone should follow the need, not the playground.",
      analysis:
        "Answers with an age and a reason, then stages the handover — the answer designs a pathway rather than quoting a rule.",
      expected: ["twelve", "children", "phone", "year"],
    },
    {
      question: "Why do parents give young children phones even when they have doubts?",
      level: "abstract",
      modelAnswer:
        "Because the doubt sits next to a stronger fear. A phone is a safety blanket — reach your child anywhere, track the bus, the walk home. And there's a peer current: once most of the class has one, holding out makes your child the exception, and parents blink. Add the honest convenience — a quiet child in a restaurant — and it's rarely a decision anyone makes calmly. It's a trade made tired, between two worries, and the visible one wins.",
      analysis:
        "Explains the behaviour through competing fears rather than bad parenting — generous, systemic, and honest about the quiet-child convenience.",
      expected: ["parent", "child", "fear", "class"],
    },
    {
      question: "Is a child's attention a thing parents should protect like sleep, or is that over-controlling?",
      level: "abstract",
      modelAnswer:
        "I'd protect it the way you protect sleep — with structure, not panic. Attention is trainable and it's lootable: an app can shred it in seconds, and children don't get it back the way adults do. But over-controlling fails too — forbidden fruit is the sweetest and they'll find a screen somewhere. The workable middle is boredom by default: no screens on ordinary days, so the mind has to make its own fun. That's not control; it's just a slower default.",
      analysis:
        "Accepts the analogy, rejects the extreme, then coins a policy — 'boredom by default' — a phrase that carries the whole argument.",
      expected: ["attent", "screen", "children", "sleep"],
    },
    {
      question: "What do you think childhood will look like for children born into fully connected homes?",
      level: "speculative",
      modelAnswer:
        "Quieter and noisier at once, I suspect. The odd part won't be the devices — those will fade into the walls — but the absence of any offline to escape to. Kids may grow up fluent in systems and strangers to boredom, and boredom is where a lot of selves get invented. On the other hand, they'll collaborate across distances we found exotic. I'd guess we'll eventually treat connection like sugar: fine in meals, banned at midnight, and fought over at every table.",
      analysis:
        "Predicts an absence rather than a gadget, weighs a genuine gain, and closes with a governing analogy — that last move is the marker here.",
      expected: ["boredom", "connect", "guess", "kid"],
    },
  ],
  vocabulary: [
    {
      word: "to grow up with something",
      partOfSpeech: "phrase",
      meaning: "To have something present throughout your childhood.",
      example: "My niece is growing up with a speaker that answers her.",
    },
    {
      word: "device",
      partOfSpeech: "noun",
      meaning: "A piece of electronic equipment, usually one with a screen.",
      example: "Every surface in their house charges a device.",
    },
    {
      word: "to supervise",
      partOfSpeech: "verb",
      meaning: "To watch over an activity to keep it safe.",
      example: "You supervise the pond, the knife and the internet equally.",
    },
    {
      word: "peer pressure",
      partOfSpeech: "noun",
      meaning: "The push to behave like others in your group.",
      example: "Peer pressure gets the credit for most first phones.",
    },
    {
      word: "digital native",
      partOfSpeech: "noun",
      meaning: "Someone who has never known life without the internet.",
      example: "Digital natives swipe at paper magazines — genuinely.",
    },
    {
      word: "to unplug",
      partOfSpeech: "verb",
      meaning: "To deliberately disconnect from devices for a while.",
      example: "We unplug on the first Sunday of the month; the survivors get pancakes.",
    },
    {
      word: "content",
      partOfSpeech: "noun",
      meaning: "The material a screen serves you — videos, games, feeds.",
      example: "The content finds her; she never has to look.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 15. Learning online (advanced, difficulty 5)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-online-learning",
  title: "Discussion set — learning online",
  theme: "Learning online",
  domain: "education",
  difficulty: 5,
  proficiency: "advanced",
  skill: "grammar",
  progression:
    "From the courses you've started to whether curiosity can survive the disappearance of the classroom.",
  questions: [
    {
      question: "Have you ever tried learning something entirely online?",
      level: "accessible",
      modelAnswer:
        "Several times, with mixed results, I'll admit. I finished a statistics course properly — weekly quizzes kept me honest. A guitar one lasted two evenings; my fingers hurt and the app forgave me too easily. What I've noticed is the starting is easy and free; the finishing is expensive and lonely. The courses I completed had deadlines, or a person somewhere expecting me. Without either, my browser tab just becomes a guilty bookmark.",
      analysis:
        "Two contrasting attempts used as evidence, then a generalisation drawn from them — personal experience turned into a rule about finishing.",
      expected: ["online", "cours", "finish", "deadlin"],
    },
    {
      question: "Why does online learning work well for some learners and not for others?",
      level: "abstract",
      modelAnswer:
        "Largely it's a match between the method and the learner's self-discipline, and the silence. Online gives freedom — exactly the thing some people can't operate. If you can structure your own afternoon, it's paradise; if you need a room, a timetable and mild social embarrassment to keep you going, it's a desert. Motivation is only half of it: the other half is having somewhere to be seen struggling, which a bedroom doesn't supply. Loneliness, oddly, is the main dropout reason.",
      analysis:
        "The desert and paradise contrast carries the abstraction, and the final claim — loneliness, not laziness — reframes the whole question.",
      expected: ["learner", "motiv", "onlin", "structur"],
    },
    {
      question: "Can online education ever be as formative as sitting in a room with a teacher?",
      level: "abstract",
      modelAnswer:
        "For knowledge, yes, probably — a good recorded explanation beats a tired Tuesday lesson. For formation, it's harder. Half of what a teacher does is model a person: how to hold an argument, how to be wrong gracefully, that adults can be kind. A screen transmits content efficiently and wisdom accidentally. Where online is genuinely formative, it's usually because a small group met regularly — the room travelled through the wire. The format isn't the barrier; the solitude is.",
      analysis:
        "Splits knowledge from formation, defines what a teacher models, and ends by correcting its own first claim — layered and self-aware.",
      expected: ["teacher", "onlin", "format", "solitud"],
    },
    {
      question: "If classrooms disappear altogether, what will children lose that we haven't yet named?",
      level: "speculative",
      modelAnswer:
        "My guess is the loss is relational, not educational, and it's already half-named: the friend made in the queue, the fight on the pitch, the teacher who noticed you were quiet. Schools are where children rehearse a public; screens can't stage that. Perhaps something subtler goes too — the shared boring afternoon, which is where most lifelong friendships were soldered. I'd predict societies that go fully remote will reinvent schools within a generation, because the need is older than the building.",
      analysis:
        "Names the unnameable through small scenes, then predicts a reinvention — arguing that the institution is older and stronger than its format.",
      expected: ["school", "children", "predict", "friend"],
    },
  ],
  vocabulary: [
    {
      word: "self-paced",
      partOfSpeech: "adjective",
      meaning: "Allowing the learner to set their own speed.",
      example: "Self-paced suits me until the pace becomes zero.",
    },
    {
      word: "to drop out",
      partOfSpeech: "phrasal verb",
      meaning: "To leave a course before finishing it.",
      example: "I drop out of courses at the second module; it's a tradition.",
    },
    {
      word: "distance learning",
      partOfSpeech: "noun",
      meaning: "Studying away from an institution, by post or internet.",
      example: "Distance learning began with posted tapes, believe it or not.",
    },
    {
      word: "discussion forum",
      partOfSpeech: "noun",
      meaning: "An online space where learners post questions and replies.",
      example: "The discussion forum was three people politely agreeing.",
    },
    {
      word: "to keep up with",
      partOfSpeech: "phrase",
      meaning: "To stay level with the pace of a group or course.",
      example: "Without a cohort I can't keep up with anything.",
    },
    {
      word: "hands-on experience",
      partOfSpeech: "noun",
      meaning: "Learning by physically doing the thing itself.",
      example: "No video teaches welding like hands-on experience with burns.",
    },
    {
      word: "cohort",
      partOfSpeech: "noun",
      meaning: "The group of students who start a course together.",
      example: "The cohort kept me going; the content was optional.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},
];
