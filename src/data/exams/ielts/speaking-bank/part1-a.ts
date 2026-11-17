/**
 * IELTS Speaking Part 1 practice bank — file A (PROMPT 47, Part 8).
 *
 * Interview rounds one to ten of the nineteen-topic Part 1 library: one
 * set per taught topic, five examiner questions each, escalating from
 * warm-up facts to developed and hypothetical answers. Every question
 * carries development guidance, a natural model answer — a
 * demonstration of the layer method (direct answer → reason → detail
 * or feeling), never a script to memorise — plus a weak-versus-improved
 * pair, topic vocabulary and server-side keyword expectations.
 *
 * Original TalkSy practice material written in the style of the IELTS
 * Speaking test — all names, places and situations invented; never
 * reproduced exam content.
 */

import type { SpeakingPart1Set } from "./types";
import { SPEAKING_BANK_SOURCE_NOTE } from "./types";

// ---------------------------------------------------------------------------
// 1. Introduction — the warm-up identity round (foundation)
// ---------------------------------------------------------------------------

export const speakingBankPart1SetsA: SpeakingPart1Set[] = [
  {
    kind: "part1",
    slug: "ielts-sb-p1-introduction",
    title: "Part 1 practice — Introduction",
    topic: "introduction",
    difficulty: 1,
    proficiency: "foundation",
    skill: "development",
    framing: "To begin with, let's talk about you and your background.",
    questions: [
      {
        question: "Where do you live at the moment?",
        guidance:
          "A simple identity check to ease you in. Give the place first, then one reason or detail — the district, who you share with, how long you've been there. The sample only demonstrates the layers; build your reply from your own address.",
        modelAnswer:
          "I'm living just outside Porto at the moment, in a place called Matosinhos, right by the sea. I moved there about two years ago for my job, and honestly I've stayed because the fish market is two minutes from my door. It suits me down to the ground.",
        weak: "In Lisbon, with my parents.",
        improved:
          "I'm based in Lisbon at the moment, still in my parents' place in the suburbs. I've stayed because rent in the centre is expensive, and it's only twenty minutes on the metro to my course.",
        expected: ["live", "current", "because", "move", "near"],
      },
      {
        question: "How often do you use English in your daily life?",
        guidance:
          "A frequency question, so anchor the answer in an adverb or a routine — 'most days', 'twice a week'. Add where and why it happens. Notice the shape being demonstrated, then describe your own habits in your own words.",
        modelAnswer:
          "Pretty much every day, to be honest. I read news articles on my phone during the commute, and my company has two clients in Sydney, so there's usually an email or a call in English by lunchtime. My spoken English gets less exercise, though.",
        weak: "Only at school, I think.",
        improved:
          "Honestly not that often — mainly in lessons and when I watch series with subtitles. I'd love to use it more, so I've just started a language exchange every Thursday evening at a local café.",
        expected: ["english", "every", "use", "speak", "day"],
      },
      {
        question: "Would you say you're a morning person or an evening person?",
        guidance:
          "Pick a side immediately — hedging wastes your first sentence. Then give the reason and one concrete detail from your routine that proves it. This model is scaffolding to study, not a script to lift; swap in your own habits.",
        modelAnswer:
          "Definitely an evening person, I'd say. My brain only really switches on after about nine at night, which is when I do my best studying and even my cooking. Mornings are survival mode for me — I set two alarms and still grumble.",
        weak: "I prefer the evening, definitely.",
        improved:
          "I'm much better in the evenings, honestly. I think it's because my days start early at work, so by nine at night I finally feel relaxed, and that's when I read or call my sister.",
        expected: ["prefer", "night", "because", "relax", "energy"],
      },
      {
        question: "Has your daily life changed much in the last few years?",
        guidance:
          "A past-versus-now question: signal the change with a time marker, then say what exactly moved — a job, a move, a relationship. One sentence of feeling rounds it off. Borrow the structure, not the sentences themselves.",
        modelAnswer:
          "It has, quite a lot actually. Three years ago I was still a student with a completely open diary, and now I'm a project assistant with a packed calendar. I miss the freedom a bit, though the steady salary is a fair trade.",
        weak: "Yes, a little bit.",
        improved:
          "Yes, quite a bit. I used to be a student with loads of free time, but since starting work my days are much fuller, and I suppose I've become more organised because of it.",
        expected: ["change", "work", "use", "busy", "now"],
      },
      {
        question: "If you could live anywhere in the world, where would you go?",
        guidance:
          "The hypothetical invites conditionals — 'I'd choose… because…'. Name the place, give two reasons with one vivid detail, and react to the idea. It's a demonstration of layering, so make your own dream destination do the work.",
        modelAnswer:
          "I'd probably pick Canada, Vancouver specifically. I've never handled real cold, but I adore mountains and the ocean together, and my cousin Priya lives there and sends photos of her morning walks by the harbour. It feels achievable, in a way other dreams don't.",
        weak: "Maybe Canada or somewhere.",
        improved:
          "I think I'd choose Canada, probably Vancouver. The main reason is the combination of mountains and sea, and my cousin already lives there, so I'd have family nearby while I settled in.",
        expected: ["would", "country", "because", "live", "near"],
      },
    ],
    vocabulary: [
      {
        word: "to be based in",
        partOfSpeech: "phrase",
        meaning: "To live or work mainly in a place.",
        example: "I'm based in Vienna during the week, but my family home is in Graz.",
      },
      {
        word: "to settle in",
        partOfSpeech: "phrasal verb",
        meaning: "To become comfortable in a new place or situation.",
        example: "It took me a whole term to settle in at university, but now it feels like home.",
      },
      {
        word: "hometown",
        partOfSpeech: "noun",
        meaning: "The town or city where you grew up.",
        example: "My hometown is small, so the baker still greets me by name whenever I visit.",
      },
      {
        word: "commute",
        partOfSpeech: "noun",
        meaning: "The regular journey between home and work or study.",
        example: "My commute is only fifteen minutes now, which has improved my whole mood.",
      },
      {
        word: "to switch on",
        partOfSpeech: "phrasal verb",
        meaning: "(Informal) To become alert and focused.",
        example: "My brain doesn't switch on until my second coffee, I'm afraid.",
      },
      {
        word: "a fair trade",
        partOfSpeech: "phrase",
        meaning: "An exchange where both sides gain something acceptable.",
        example: "Giving up my lie-ins for a morning class felt like a fair trade for smaller groups.",
      },
      {
        word: "achievable",
        partOfSpeech: "adjective",
        meaning: "Realistic enough to actually happen.",
        example: "Moving abroad felt like a fantasy until a savings plan made it achievable.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 2. Work — job, hours and career reflection (intermediate)
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-work",
    title: "Part 1 practice — Work",
    topic: "work",
    difficulty: 3,
    proficiency: "intermediate",
    skill: "development",
    framing: "Now I'd like to ask you about your work.",
    questions: [
      {
        question: "What do you do for a living?",
        guidance:
          "Open with your role and employer, then add one duty you enjoy or a small fact about the sector. Two layers are enough here — momentum matters more than completeness, and the model is a shape to copy, not lines to recite.",
        modelAnswer:
          "I'm a radiographer at a private clinic in Leeds. Basically I scan patients all morning and write up reports in the afternoons. It surprised me how much of the job is talking to nervous people — that part is harder than the machines, honestly.",
        weak: "I'm an accountant.",
        improved:
          "I work as an accountant for a food company. Mostly I check the monthly figures and prepare reports, and I like it because the work is very logical and my colleagues are easy to get on with.",
        expected: ["work", "job", "company", "because", "day"],
      },
      {
        question: "How often do you work longer hours than you'd like?",
        guidance:
          "Frequency plus opinion, so give a number or rhythm first, then your reaction to it. A detail from one specific week makes it believable. Treat the sample as a map of your own routine, nothing more.",
        modelAnswer:
          "More often than I'd admit to my doctor, I think. Month-end is the worst — last week I was at my desk until nine three nights running. I don't mind occasional crunches, but when it bleeds into every weekend I start to resent it.",
        weak: "Sometimes, when it's busy.",
        improved:
          "Probably a couple of evenings a week, especially near deadlines. It's usually my own fault for saying yes to everything, though I do get time back when the project calms down.",
        expected: ["week", "often", "busy", "late", "time"],
      },
      {
        question: "Do you prefer working on your own or as part of a team?",
        guidance:
          "Choose one side fast, then defend it with a real example of that preference in action. A concession to the other side adds sophistication if you have time. Copy the move, then argue your own case in your own voice.",
        modelAnswer:
          "Teamwork, hands down — I get my energy from other people. On our ward redesign project, the best ideas came from arguments in the corridor, honestly. I can work alone when I must, but I second-guess everything and get far less done.",
        weak: "I like working in a team.",
        improved:
          "I'd rather work in a team, really. When we designed a new system at my office, everyone contributed ideas, and sharing the pressure made the whole thing feel lighter than working alone.",
        expected: ["team", "prefer", "because", "idea", "alone"],
      },
      {
        question: "Was the job you do now the career you imagined when you were younger?",
        guidance:
          "Compare past hopes with present reality: what you expected, what actually happened, and how you feel about the gap. Past tenses carry this answer. The sample demonstrates the comparison — your story belongs in it instead.",
        modelAnswer:
          "Not even slightly, no. As a teenager I was set on architecture — I filled sketchbooks with impossible houses. Then a summer job in my uncle's logistics firm hooked me instead. Looking back, I don't regret it; buildings still interest me, but only as a hobby now.",
        weak: "No, I wanted to be a pilot.",
        improved:
          "Not at all, actually. Growing up I wanted to be a pilot because my father worked at an airport, but life took a different turn, and honestly my current job suits me better.",
        expected: ["child", "want", "job", "now", "different"],
      },
      {
        question: "If you could change one thing about your job, what would it be?",
        guidance:
          "A wish question, so conditionals again. Name one change, explain the problem it would fix, and add who would benefit besides you. Study how the sample layers its wish, then dream up your own reform.",
        modelAnswer:
          "I'd abolish the Monday planning meeting, no hesitation. Nine of us sit through an hour that could be a two-line email, and the afternoon is half gone before real work starts. I'd give everyone that hour back for actual patient care — morale would rocket.",
        weak: "The salary, I suppose.",
        improved:
          "I'd raise the salary, I suppose. The work itself is fine, but pay in my field lags behind the cost of living, and a rise would let me move closer to the office.",
        expected: ["would", "change", "money", "time", "because"],
      },
    ],
    vocabulary: [
      {
        word: "for a living",
        partOfSpeech: "phrase",
        meaning: "As someone's source of income.",
        example: "She translates novels for a living, which sounds glamorous until deadline season.",
      },
      {
        word: "to write up",
        partOfSpeech: "phrasal verb",
        meaning: "To turn notes or results into a finished document.",
        example: "I stayed late to write up the client notes while they were still fresh.",
      },
      {
        word: "to second-guess",
        partOfSpeech: "verb",
        meaning: "To keep doubting a decision already made.",
        example: "He second-guesses his designs so much that nothing ships on time.",
      },
      {
        word: "to be set on",
        partOfSpeech: "phrase",
        meaning: "To be determined to have or do something.",
        example: "My sister is set on a career in diplomacy, whatever we tell her.",
      },
      {
        word: "crunch",
        partOfSpeech: "noun",
        meaning: "A short period of intense pressure and long hours.",
        example: "Audit season is one long crunch, so I book a holiday straight after it.",
      },
      {
        word: "to hook someone",
        partOfSpeech: "verb",
        meaning: "To capture someone's lasting interest.",
        example: "One documentary about coral reefs hooked me on marine biology for good.",
      },
      {
        word: "morale",
        partOfSpeech: "noun",
        meaning: "The confidence and spirit of a group.",
        example: "Free lunches did more for team morale than any bonus scheme.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 3. Study — courses, habits and school memories (intermediate)
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-study",
    title: "Part 1 practice — Study",
    topic: "study",
    difficulty: 3,
    proficiency: "intermediate",
    skill: "development",
    framing: "Let's move on to talk about your studies.",
    questions: [
      {
        question: "What are you studying at the moment?",
        guidance:
          "Name the subject and institution, then attach one detail — a module, a project, a deadline. Precision early gives you material to reuse later in the round. The demonstration shows the layering; supply your own course facts.",
        modelAnswer:
          "I'm in my second year of a physiotherapy degree at Ghent University. At the moment we're deep in sports injuries, which involves a lot of time in the clinic watching the seniors work. I chose it after a knee injury of my own, funnily enough.",
        weak: "I study economics at university.",
        improved:
          "I'm doing an economics degree in my third year. This term I'm focusing on development economics, and I find it fascinating because it explains the news I read every morning.",
        expected: ["study", "subject", "university", "year", "because"],
      },
      {
        question: "How often do you study outside of class?",
        guidance:
          "Anchor the rhythm first — daily, weekends, before deadlines — then say where and what exactly you do. A specific habit beats a vague 'a lot'. The shape is the lesson; your own revision routine is the content.",
        modelAnswer:
          "Most weekdays, around two hours, plus a longer stretch on Sunday. I've taken over the kitchen table because my flatmate hogs the desk, and we have an agreement about her music. It's less lonely than the library, though the biscuits are a hazard.",
        weak: "Every day, a few hours.",
        improved:
          "Usually every evening for an hour or two, and longer before exams. I work best at the kitchen table at home, where it's quiet and I can spread out my notes.",
        expected: ["study", "day", "hour", "home", "week"],
      },
      {
        question: "Do you prefer studying in the morning or later in the day?",
        guidance:
          "Commit to one time, explain it through your body clock or schedule, and prove it with a habit. A short contrast with the wrong time adds depth. Borrow the pattern and defend your own preference.",
        modelAnswer:
          "Mornings, absolutely, before the world wakes up. By seven I've done my reading and my brain is still clean, whereas after dinner I just reread the same paragraph four times. The compromise is that I draft essays at night, when I'm too tired to be a perfectionist.",
        weak: "In the morning, it's quieter.",
        improved:
          "I prefer mornings because my mind is fresher then. If I start reading by seven, I finish much faster, whereas in the evening I get distracted and reread everything twice.",
        expected: ["morning", "prefer", "because", "evening", "read"],
      },
      {
        question: "Did you enjoy the subjects you studied at school?",
        guidance:
          "Travel back with past tenses: name a subject you loved and one you tolerated, each with a reason. A sentence about how your tastes changed shows reflection. Copy the contrast structure, not the specific memories.",
        modelAnswer:
          "Mostly, yes — history was my obsession, mostly thanks to a teacher who dressed up as Napoleon for the French Revolution module. Chemistry and I never got along; I broke a lot of glassware. Funnily enough, I've drifted back to reading science books for pleasure now.",
        weak: "Some of them, like history.",
        improved:
          "I enjoyed a few subjects, especially history, because our teacher told it like a story. Maths was harder for me, although I liked it more once we got a patient new teacher.",
        expected: ["subject", "school", "enjoy", "because", "teacher"],
      },
      {
        question: "Would you take another course in the future if you had the chance?",
        guidance:
          "This looks ahead with a condition attached: state the course, the trigger that would make it real, and what it would add to your life. Study the sample's layering, then build your own future plan inside it.",
        modelAnswer:
          "Yes, I've had my eye on a sports-nutrition diploma for ages. The catch is the placement hours — I'd need a semester off, which my budget says no to. Once I'm earning, though, that's the first thing I'm booking. Diet advice is half the treatment these days.",
        weak: "Maybe, if I have time.",
        improved:
          "Yes, I'd love to do a short course in graphic design. I'd take it if my schedule allowed, because design skills would help both my studies and the little projects I do for friends.",
        expected: ["would", "course", "future", "learn", "because"],
      },
    ],
    vocabulary: [
      {
        word: "to have one's eye on",
        partOfSpeech: "phrase",
        meaning: "To be interested in and quietly planning to get.",
        example: "I've had my eye on a summer course in Seville since January.",
      },
      {
        word: "placement",
        partOfSpeech: "noun",
        meaning: "A period of supervised practical work as part of a course.",
        example: "My hospital placement taught me more than any lecture ever did.",
      },
      {
        word: "to get along with",
        partOfSpeech: "phrasal verb",
        meaning: "To have a friendly relationship with.",
        example: "I got along with my chemistry teacher far better than with the subject itself.",
      },
      {
        word: "to drift back to",
        partOfSpeech: "phrase",
        meaning: "To return to something slowly and without pressure.",
        example: "After graduation I drifted back to the piano, purely for myself this time.",
      },
      {
        word: "revision",
        partOfSpeech: "noun",
        meaning: "(British) The act of reviewing material for an exam.",
        example: "I leave revision far too late and then panic every May.",
      },
      {
        word: "to spread out",
        partOfSpeech: "phrasal verb",
        meaning: "To arrange materials over a large surface.",
        example: "She spreads her flashcards across the floor and revises like a general planning a battle.",
      },
      {
        word: "the catch",
        partOfSpeech: "phrase",
        meaning: "The hidden difficulty in an attractive plan.",
        example: "The scholarship covers the fees, but the catch is the two-year bond afterwards.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 4. Hometown — the place you grew up (foundation)
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-hometown",
    title: "Part 1 practice — Hometown",
    topic: "hometown",
    difficulty: 2,
    proficiency: "foundation",
    skill: "development",
    framing: "Let's talk about the place where you grew up.",
    questions: [
      {
        question: "Where did you grow up?",
        guidance:
          "Give the place, then paint one picture of it — size, character, one landmark. Settling your nerves at the start matters more than perfection, and the sample merely models the layer order; your hometown supplies the details.",
        modelAnswer:
          "I grew up in Oban, a small port town on the west coast of Scotland. It's the sort of place where the ferry timetable rules everyone's plans. The town centre smells of the smokehouse, and tourists queue for seafood in summer while the rest of us just commute past.",
        weak: "I grew up in a small town.",
        improved:
          "I grew up in a small farming town outside Christchurch. It was quiet and everyone knew each other, which felt claustrophobic as a teenager but friendly enough looking back.",
        expected: ["town", "grow", "small", "because", "family"],
      },
      {
        question: "How often do you go back there now?",
        guidance:
          "State the rhythm — twice a year, most months, rarely — then the reason for it and one detail of what you do when you return. The structure is demonstrated; your own visits fill it in.",
        modelAnswer:
          "Two or three times a year these days. I try for my mum's birthday in March and then a stretch over the holidays. Every visit starts the same way: fish and chips on the harbour wall, whatever the weather. It's my reset button, really.",
        weak: "Once a year, at Christmas.",
        improved:
          "Just once a year, usually at Christmas. Work keeps me in the city, but my grandmother cooks enough for six people, so that one trip is always worth it.",
        expected: ["year", "visit", "family", "back", "because"],
      },
      {
        question: "What did you like best about living there as a child?",
        guidance:
          "Pick one specific pleasure — a place, a ritual, a freedom — and build the reason and a sensory detail around it. One vivid memory beats a list of five. Adapt the layers to your own childhood favourite.",
        modelAnswer:
          "The harbour, without question. We'd fish off the wall for hours with lines we'd made ourselves, and most days caught absolutely nothing and didn't care. In the evenings the water went gold, and my grandad would appear with chips. Simple, but I can still hear the ropes.",
        weak: "Playing outside with friends.",
        improved:
          "I loved the river near our house. My friends and I would spend whole afternoons there catching tadpoles, and it felt like an adventure because nobody supervised us.",
        expected: ["child", "play", "friend", "love", "because"],
      },
      {
        question: "Has the town changed much since you were a child?",
        guidance:
          "Compare then and now with concrete evidence — a closed factory, a new road, house prices. End with your feeling about the change. The sample demonstrates the then-now contrast; your town's story replaces it.",
        modelAnswer:
          "Completely, in some ways. The cannery that employed half my street shut in the nineties, and now those buildings are holiday flats with sea views. The high street is coffee shops and gift shops now. It's prettier than before, but it doesn't feel like it belongs to us anymore.",
        weak: "Yes, it's bigger now.",
        improved:
          "It has changed a lot. A big shopping mall opened on the edge of town, so many small shops closed, and I feel the centre lost a bit of its character.",
        expected: ["change", "now", "shop", "use", "build"],
      },
      {
        question: "Would you say your hometown is a good place for young people to live today?",
        guidance:
          "Give a clear verdict, then defend it — jobs, housing, things to do — and acknowledge one counterpoint. Balanced opinions score well when they still land somewhere. Study the shape, then judge your own town.",
        modelAnswer:
          "For a visit, brilliant; to build a life, harder. Young people stay for the sea and their families, but the decent jobs are all in Glasgow, so most of my classmates left by twenty-five. Remote work is changing that slowly — two friends moved back last year with their laptops.",
        weak: "It's okay, nothing much happens.",
        improved:
          "It's okay, but honestly not much happens. Housing is affordable and the beaches are close, which is nice, though most young people still leave for the capital.",
        expected: ["good", "job", "young", "because", "live"],
      },
    ],
    vocabulary: [
      {
        word: "on the coast",
        partOfSpeech: "phrase",
        meaning: "On the land beside the sea.",
        example: "Our school stood on the coast, and storms cancelled lessons twice a winter.",
      },
      {
        word: "to rule",
        partOfSpeech: "verb",
        meaning: "To control or decide something completely.",
        example: "The tides ruled everyone's diary in my village, fishermen and teachers alike.",
      },
      {
        word: "high street",
        partOfSpeech: "noun phrase",
        meaning: "(British) A town's main shopping street.",
        example: "Our high street has lost the bank but gained two bakeries, so opinions are divided.",
      },
      {
        word: "to belong",
        partOfSpeech: "verb",
        meaning: "To feel part of a place or group.",
        example: "I belong to the swim club, which is really the social heart of the town.",
      },
      {
        word: "to move back",
        partOfSpeech: "phrasal verb",
        meaning: "To return to live in a place you left.",
        example: "My brother moved back last spring and now repairs boats for a living.",
      },
      {
        word: "scarce",
        partOfSpeech: "adjective",
        meaning: "Rare or in short supply.",
        example: "Rented flats are scarce in tourist towns, even in winter.",
      },
      {
        word: "to settle down",
        partOfSpeech: "phrasal verb",
        meaning: "To begin living a stable life in one place.",
        example: "Most of my cousins settled down near my aunt, so Sundays are loud.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 5. Accommodation — where you live now (foundation)
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-accommodation",
    title: "Part 1 practice — Accommodation",
    topic: "accommodation",
    difficulty: 2,
    proficiency: "foundation",
    skill: "development",
    framing: "I'd like to ask some questions about where you live now.",
    questions: [
      {
        question: "Do you live in a house or a flat?",
        guidance:
          "Answer straight — house or flat — then add who with, how long, or one feature. The opening question only warms you up, so keep it smooth. Imitate the layering only, and describe your actual front door.",
        modelAnswer:
          "A flat, on the third floor of a converted printing works in Kraków. My partner and I have been there six years, which says something about the rent freeze. The ceilings are enormous and the lift is tiny, so we carry the bike up three flights.",
        weak: "A flat near the station.",
        improved:
          "I live in a flat on the fourth floor of an old building. I've rented it for three years now, and the best part is the balcony, where I keep all my herbs.",
        expected: ["flat", "live", "room", "because", "floor"],
      },
      {
        question: "How often do people visit you at home?",
        guidance:
          "Give the rhythm and the usual visitors, then one detail of what happens when they come. Notice how the model stays concrete rather than general, then host the question yourself with your own guests.",
        modelAnswer:
          "Fairly often — my flatmate's sister treats our kitchen like her canteen. Proper dinners happen maybe monthly, when I get ambitious about my grandmother's dumplings. Our rule is that nobody leaves before the second pot of tea; it drives the schedule but I secretly like it.",
        weak: "Not often, maybe sometimes.",
        improved:
          "Quite rarely, to be honest — perhaps once a month. My cousin drops by most Sundays though, and we usually end up cooking together and arguing about football.",
        expected: ["visit", "often", "friend", "cook", "home"],
      },
      {
        question: "Which room do you spend the most time in?",
        guidance:
          "Name the room, then explain what pulls you there — light, comfort, a hobby — with one detail that proves it. The answer structure is on show rather than the words, so walk through your own rooms.",
        modelAnswer:
          "The kitchen, easily. It faces east, so breakfast comes with sun, and the radiator under the window makes it the warmest corner in winter. I do my paperwork at that table too. The living room is technically nicer, but nobody told my habits that.",
        weak: "My bedroom, mostly.",
        improved:
          "Definitely my bedroom, because that's where my desk is. I spend hours there reading and studying, and honestly it's the only room that stays tidy and quiet in my flat.",
        expected: ["room", "most", "because", "spend", "quiet"],
      },
      {
        question: "Have you lived in many different places?",
        guidance:
          "Count the moves, name one or two memorable places, and reflect on what each taught you. A short history of homes shows range in past tenses. The demonstration maps the layers; your own addresses fill them.",
        modelAnswer:
          "Four cities in ten years, which sounds chaotic but each move had a reason. University took me to Warsaw, an internship to Berlin, and love dragged me back to Kraków. I've kept a key from every flat in a jar — a small museum of my life, my mum calls it.",
        weak: "Yes, two cities.",
        improved:
          "Two cities, yes. I grew up in one, then moved to the other for university and stayed for work, and each place taught me something different about myself.",
        expected: ["live", "move", "city", "because", "flat"],
      },
      {
        question: "Would you rather live in the countryside or in a big city in the future?",
        guidance:
          "Choose a future and argue it with two concrete pulls — space, work, pace — then concede one drawback. Futures reward 'would' and 'might'. Copy the argument shape and stake out your own tomorrow.",
        modelAnswer:
          "Countryside, eventually, once the mortgage is survivable. I want a garden and silence by nine at night, and my partner wants a workshop. The honest problem is my job — I'd need to negotiate remote days first. City weekends would still tempt us, though; we're not ready for full silence.",
        weak: "The countryside, it's peaceful.",
        improved:
          "I'd choose the countryside, I think. A garden and fresh air sound perfect, though I'd probably miss cinemas and restaurants, so maybe somewhere just outside a city would suit me.",
        expected: ["would", "country", "city", "future", "quiet"],
      },
    ],
    vocabulary: [
      {
        word: "converted",
        partOfSpeech: "adjective",
        meaning: "Changed from one use to another, e.g. a factory becoming flats.",
        example: "They live in a converted chapel with the original stained glass.",
      },
      {
        word: "rent freeze",
        partOfSpeech: "noun phrase",
        meaning: "A period when rent cannot legally rise.",
        example: "The rent freeze ended the same month my lease did, which was brutal timing.",
      },
      {
        word: "to drop by",
        partOfSpeech: "phrasal verb",
        meaning: "To visit casually, without arranging it.",
        example: "Our neighbours drop by with soup whenever anyone looks unwell.",
      },
      {
        word: "mortgage",
        partOfSpeech: "noun",
        meaning: "A loan used to buy a home, repaid over many years.",
        example: "Their mortgage took twenty-five years and one inheritance to clear.",
      },
      {
        word: "spacious",
        partOfSpeech: "adjective",
        meaning: "Having plenty of room.",
        example: "The flat felt spacious until the twins learned to walk.",
      },
      {
        word: "to do up",
        partOfSpeech: "phrasal verb",
        meaning: "(British) To renovate or redecorate.",
        example: "We spent one summer doing up the bathroom, and our friendship survived.",
      },
      {
        word: "cosy",
        partOfSpeech: "adjective",
        meaning: "Small, warm and comfortable.",
        example: "Her study is tiny but cosy — one chair, one lamp, hundreds of books.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 6. Family — household, meals and values (intermediate)
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-family",
    title: "Part 1 practice — Family",
    topic: "family",
    difficulty: 3,
    proficiency: "intermediate",
    skill: "development",
    framing: "Now let's talk a little about your family.",
    questions: [
      {
        question: "Can you tell me about your immediate family?",
        guidance:
          "Introduce the household in two layers: who they are and one trait or role each. Three people maximum, or the answer becomes a list. The sample shows the layering technique — populate it with your own relatives.",
        modelAnswer:
          "There are four of us. My dad runs a hardware shop and can fix literally anything with a hinge; my mum teaches clarinet and fills the house with scales. My brother, eighteen, is the loud one — he debates everything, including the thermostat. I'm apparently the organised one, which is a low bar here.",
        weak: "Four people — parents and a brother.",
        improved:
          "We're a family of four: my parents, my older brother and me. My father's an electrician, my mother works at a clinic, and my brother is obsessed with volleyball.",
        expected: ["family", "brother", "mother", "father", "live"],
      },
      {
        question: "How often does your family eat together?",
        guidance:
          "Lead with the rhythm, then explain what makes it possible or impossible — shifts, distances, habits. One detail from the table makes it live. Follow the demonstrated shape with your own family's mealtimes.",
        modelAnswer:
          "Sunday lunch is sacred; the rest of the week is chaos. Dad closes the shop at two, Mum over-caters spectacularly, and my brother arrives 'in ten minutes' for about an hour. Weeknights, we're all on different shifts, so the kitchen is more petrol station than dining room.",
        weak: "Every evening, usually dinner.",
        improved:
          "Almost every evening now, which surprises me. We eat around seven when my parents get home, and it's usually my mother's soup plus whatever I've attempted to bake.",
        expected: ["together", "dinner", "week", "family", "eat"],
      },
      {
        question: "Would you rather spend a free day with your family or with friends?",
        guidance:
          "Choose one option, give a reason rooted in what you actually do together, then concede a sentence to the other side. Real-life proof carries preference answers. See how the sample balances it, then weigh your own choices.",
        modelAnswer:
          "Depends on the energy I've got, honestly. Family days are gentle — my dad's garden, my mum's playlist, a long slow lunch. Friends bring noise and plans and moving between three bars. If I'm honest, family wins as I get older; my friends would be offended, but they'd understand.",
        weak: "Both, I like both.",
        improved:
          "Honestly I like both in different ways. Friends are for laughing and football, but family time is calmer, and as I've got older I appreciate the quiet family lunches more.",
        expected: ["family", "friend", "prefer", "because", "time"],
      },
      {
        question: "Are families in your country changing, do you think?",
        guidance:
          "Answer yes or no first, then evidence — households, work patterns, traditions — and one example from your own circle. A mild 'I think' keeps it opinionated but honest. Borrow the argument's shape and use your own observations.",
        modelAnswer:
          "Definitely — multigenerational homes are quietly splitting up. My grandparents' house held eight people; my flat holds two and a cat. Work pulls people to the cities, and video calls have replaced the Sunday table. It's progress with a cost, I suppose — we're freer but we see each other on screens.",
        weak: "Yes, people move out earlier now.",
        improved:
          "Yes, families seem smaller and more scattered than before. My cousins all moved abroad for work, for example, and now we mainly keep in touch through a group chat instead of visiting.",
        expected: ["family", "change", "now", "work", "because"],
      },
      {
        question: "If you had children one day, would you raise them the way you were raised?",
        guidance:
          "A values question in disguise. Name one tradition you would keep and one thing you would do differently, with reasons. There is no right answer here, only developed ones — note the structure, then raise your own future children in it.",
        modelAnswer:
          "The bones of it, yes — Sunday lunches and compulsory museum trips stay. What I'd drop is the academic pressure; I remember being eleven and terrified of a maths test. I'd want them to see learning as a game, not a verdict. Easier said than done, I'm sure my mum would agree.",
        weak: "Mostly yes, I think.",
        improved:
          "Largely yes — I'd keep our tradition of eating together every evening. The one thing I'd change is screen time, because my generation grew up online quite suddenly and I'd manage it more carefully.",
        expected: ["child", "would", "raise", "same", "because"],
      },
    ],
    vocabulary: [
      {
        word: "immediate family",
        partOfSpeech: "noun phrase",
        meaning: "Parents, siblings and children — the closest relatives.",
        example: "Only my immediate family came to the graduation; the rest watched online.",
      },
      {
        word: "to over-cater",
        partOfSpeech: "verb",
        meaning: "To prepare much more food than needed.",
        example: "Uncle Marco always over-caters, so nobody leaves his table hungry.",
      },
      {
        word: "multigenerational",
        partOfSpeech: "adjective",
        meaning: "Involving several generations living or gathering together.",
        example: "A multigenerational household means built-in babysitters and constant negotiations.",
      },
      {
        word: "to keep in touch",
        partOfSpeech: "phrase",
        meaning: "To maintain contact over time.",
        example: "We keep in touch through a family group chat that never sleeps.",
      },
      {
        word: "to take after",
        partOfSpeech: "phrasal verb",
        meaning: "To resemble a relative in looks or character.",
        example: "I take after my father — same stubbornness, identical taste in terrible jokes.",
      },
      {
        word: "to split up",
        partOfSpeech: "phrasal verb",
        meaning: "(Of a group) To separate into smaller parts.",
        example: "The reunions got smaller once the cousins split up across three continents.",
      },
      {
        word: "sacred",
        partOfSpeech: "adjective",
        meaning: "Treated as too important to change or cancel.",
        example: "Friday dinner is sacred in our house; even exams don't excuse you.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 7. Friends — closeness, circles and conflict (intermediate)
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-friends",
    title: "Part 1 practice — Friends",
    topic: "friends",
    difficulty: 3,
    proficiency: "intermediate",
    skill: "development",
    framing: "I'd like to ask you about your friends now.",
    questions: [
      {
        question: "Tell me a little about your best friend.",
        guidance:
          "Introduce them with a name, how you met and one defining trait. Keep it to two or three sentences and save material for later questions. The sample models the layers — describe your own closest person.",
        modelAnswer:
          "Her name's Beatriz, and we met in the worst way possible: I sat in her seat on the first day of sixth form. She's a veterinary nurse now, calmer than me about everything except spiders. Twelve years later she's still the first person I phone, usually about nothing.",
        weak: "My best friend is called Dan.",
        improved:
          "My best friend is called Dan, and we've known each other since primary school. He's the calm one — he listens properly, and he always notices when something's wrong.",
        expected: ["friend", "met", "know", "because", "year"],
      },
      {
        question: "How often do you meet up with friends in a normal week?",
        guidance:
          "Quantify it — twice a week, most evenings — then say doing what and with which group. Named habits make frequency answers memorable. The pattern is a demonstration, not dictation; report your own social diary.",
        modelAnswer:
          "Most evenings involve somebody, honestly. Tuesdays are five-a-side with the work crowd, Thursdays a fixed dinner with my two university friends, and the rest is ad hoc. My calendar looks sociable; my bank account tells the real story. Sundays are sacredly empty, by agreement of everyone over thirty.",
        weak: "Once or twice a week.",
        improved:
          "Usually two or three times a week. We play badminton on Wednesdays and sometimes grab breakfast on Saturdays, which works well because everyone's free in the morning.",
        expected: ["week", "friend", "meet", "often", "time"],
      },
      {
        question: "Do you prefer having a few close friends or a wide circle of acquaintances?",
        guidance:
          "Pick a side and defend it with what each type of friendship gives you, plus one honest concession. Abstract words like 'loyalty' only work with an example attached. The sample argues its case — argue yours inside the same shape.",
        modelAnswer:
          "Few and close, without hesitation. My three closest friends know my bank balance and my worst habits, and they stayed through my difficult year. Wide circles are great for parties, but I've watched those friendships evaporate with a change of job. I'd rather invest deeply than widely, I suppose.",
        weak: "A few close friends is better.",
        improved:
          "I'd choose a small circle of close friends. They understand me properly and I can trust them with anything, whereas big groups feel fun but never very deep.",
        expected: ["close", "friend", "prefer", "because", "trust"],
      },
      {
        question: "Is it easier or harder to make friends as an adult than it was at school?",
        guidance:
          "State your verdict, then explain the mechanics — time, contexts, courage — with one comparison between then and now. A short personal example grounds it. Copy the reasoning arc, then explain your own experience.",
        modelAnswer:
          "Harder, undeniably. At school, friendship was structural — eight hours a day, shared enemies, shared exams. Adult friendship needs logistics: bookings, calendars, the humility to say 'shall we be friends?' at thirty-four. I made my newest friend in a pottery class, and it took a full term of nervous coffees.",
        weak: "Harder, because everyone is busy.",
        improved:
          "Definitely harder as an adult. At school you saw the same people daily, so friendships just happened, whereas now you must organise everything and really make an effort.",
        expected: ["adult", "school", "friend", "easier", "because"],
      },
      {
        question: "What would you do if you and a close friend disagreed about something important?",
        guidance:
          "Outline your approach — talk, wait, compromise — then give one concrete step you would actually take. Character shows in this answer. See how the model stays practical, then describe your own way of mending fences.",
        modelAnswer:
          "I'd let the first storm pass, then go round with food — that's my family's peace treaty. With my friend Nadia, we disagreed about her fiancé for a whole year, and food is eventually what fixed it. Some things need saying, but timing and dumplings help enormously.",
        weak: "I would talk to them.",
        improved:
          "I'd probably wait a day or two and then talk honestly. With my closest friends, a calm conversation always works better than an argument, even when the issue is serious.",
        expected: ["talk", "would", "friend", "problem", "because"],
      },
    ],
    vocabulary: [
      {
        word: "to hit it off",
        partOfSpeech: "phrase",
        meaning: "To like each other immediately.",
        example: "We hit it off over a broken projector ten minutes before assembly.",
      },
      {
        word: "social diary",
        partOfSpeech: "noun phrase",
        meaning: "The schedule of one's social commitments.",
        example: "Her social diary is colour-coded; mine is a rumour.",
      },
      {
        word: "to evaporate",
        partOfSpeech: "verb",
        meaning: "To disappear quickly and completely.",
        example: "Half my school friendships evaporated the summer the results came out.",
      },
      {
        word: "to make an effort",
        partOfSpeech: "phrase",
        meaning: "To do something that requires energy you might not spare.",
        example: "Long-distance friendships survive only if both people make an effort.",
      },
      {
        word: "to drift apart",
        partOfSpeech: "phrasal verb",
        meaning: "To become distant without any argument.",
        example: "My university friends and I drifted apart gently over about five years.",
      },
      {
        word: "circle of friends",
        partOfSpeech: "noun phrase",
        meaning: "One's group of friends as a whole.",
        example: "My circle of friends shrank after thirty, and weirdly improved in quality.",
      },
      {
        word: "to mend fences",
        partOfSpeech: "phrase",
        meaning: "To repair a damaged relationship.",
        example: "I mended fences with my oldest friend over one long walk and two ice creams.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 8. Hobbies — free-time interests (foundation)
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-hobbies",
    title: "Part 1 practice — Hobbies",
    topic: "hobbies",
    difficulty: 2,
    proficiency: "foundation",
    skill: "development",
    framing: "Next, I'd like to talk about your free-time interests.",
    questions: [
      {
        question: "What do you do in your free time?",
        guidance:
          "Name your main hobby, then add where, when or how long you've done it. One hobby developed beats four listed. The model demonstrates development — let your own pastime do the talking.",
        modelAnswer:
          "My main thing is birdwatching, which I took up during lockdown and never dropped. I keep a notebook of species from the reservoir near our flat. It sounds sedate, but identifying a new bird gives me a ridiculous thrill — my list is at forty-one now.",
        weak: "I watch films and read.",
        improved:
          "I mainly watch films and read in the evenings. Films help me switch off after work, and I usually get through a novel every fortnight or so.",
        expected: ["free", "time", "hobby", "enjoy", "because"],
      },
      {
        question: "How much time do you manage to spend on hobbies each week?",
        guidance:
          "Be honest and specific — Saturday mornings, an hour a night — then say what limits or enables it. Realistic detail beats an idealised answer. The layering is demonstrated; insert your own weekly routine.",
        modelAnswer:
          "Around five hours if I'm disciplined, which I'm usually not. Saturday morning is protected — that's the long walk with the binoculars. Weekday evenings belong to editing photos and updating my records. My limit is daylight, honestly; in winter the reservoir is a rumour after four o'clock.",
        weak: "Maybe three hours, at weekends.",
        improved:
          "About three hours a week, mostly at weekends. I'd love more time, but my course takes most evenings, so Sunday afternoons are when I really settle down with a book.",
        expected: ["week", "hour", "time", "hobby", "weekend"],
      },
      {
        question: "Do you prefer doing hobbies alone or with other people?",
        guidance:
          "Choose and explain through what the choice gives you — peace, motivation, comparison — with one example of doing it that way. A quick nod to the other option adds balance. Borrow the frame for your own preference.",
        modelAnswer:
          "Alone for the hobby itself, with company for the aftermath. Birdwatching needs silence and patience, and honestly I'm unbearable in a group — I shush people. But afterwards, the online forum and the Sunday pub debrief are half the joy. Solitude with witnesses, if that makes sense.",
        weak: "Alone, it's more relaxing.",
        improved:
          "I prefer doing things alone, mainly because I can go at my own speed. Watching a film or reading is more absorbing without chatter, although I share favourites with friends afterwards.",
        expected: ["alone", "prefer", "because", "quiet", "group"],
      },
      {
        question: "Did you have hobbies as a child that you've given up?",
        guidance:
          "Name the abandoned hobby, the reason it ended, and any feeling about it now. Past tense plus a small note of nostalgia develops the answer fully. Follow the shape and reminisce about your own childhood pursuits.",
        modelAnswer:
          "Violin, tragically for everyone involved. I did six years, two grade exams and one memorable concert where I played a solo a half-step flat. Teenage football took over, then girls, then studying. I've kept the violin under my bed — picking it back up is on my someday list.",
        weak: "Yes, I did karate as a kid.",
        improved:
          "Yes, I did karate for about four years as a child. I stopped when we moved cities and the new club was too far away, and I still slightly regret losing it.",
        expected: ["child", "hobby", "stop", "use", "year"],
      },
      {
        question: "Is there a hobby you'd like to try that you've never done?",
        guidance:
          "Name it, explain the attraction and what has stopped you so far — money, fear, time. Conditionals and 'I've always fancied' fit naturally here. The sample maps the layers; fill them with your own untried pursuit.",
        modelAnswer:
          "Kayaking, persistently. There's a club that trains on the estuary on Sunday mornings, and I've watched them from the footpath for two summers like a ghost. The barrier is partly cost, mostly embarrassment at being a wobbly beginner at my age. This year I've promised myself I'll just book the taster session.",
        weak: "Maybe cooking or something new.",
        improved:
          "I'd really like to try cooking properly, actually. I've watched tutorials for months but never dared, though friends say a beginner's class would make it much less scary.",
        expected: ["would", "try", "hobby", "new", "because"],
      },
    ],
    vocabulary: [
      {
        word: "to take up",
        partOfSpeech: "phrasal verb",
        meaning: "To begin a new hobby or activity.",
        example: "I took up whittling during one snowy winter and now own too many spoons.",
      },
      {
        word: "taster session",
        partOfSpeech: "noun phrase",
        meaning: "A single short class that lets you try an activity.",
        example: "The rowing club offers a free taster session every April.",
      },
      {
        word: "to be into something",
        partOfSpeech: "phrase",
        meaning: "(Informal) To be interested in something.",
        example: "My whole family is into board games; birthdays are basically tournaments.",
      },
      {
        word: "hands-on",
        partOfSpeech: "adjective",
        meaning: "Involving doing rather than watching.",
        example: "Pottery is far more hands-on than I expected, and far messier.",
      },
      {
        word: "to get the bug",
        partOfSpeech: "phrase",
        meaning: "To develop a strong, lasting enthusiasm.",
        example: "I got the bug for cycling after one borrowed bike and a sunny weekend.",
      },
      {
        word: "gear",
        partOfSpeech: "noun",
        meaning: "The equipment needed for an activity.",
        example: "Photography is affordable until you discover lenses; then the gear takes over.",
      },
      {
        word: "to squeeze in",
        partOfSpeech: "phrasal verb",
        meaning: "To fit an activity into a busy schedule.",
        example: "I squeeze in twenty minutes of guitar while dinner is in the oven.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 9. Food — meals, habits and tastes (intermediate, lexical focus)
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-food",
    title: "Part 1 practice — Food",
    topic: "food",
    difficulty: 3,
    proficiency: "intermediate",
    skill: "lexical",
    framing: "Let's move on to food and eating.",
    questions: [
      {
        question: "What's a typical meal in your household?",
        guidance:
          "Name the dish, then add when it's eaten, who cooks it and one sensory detail — smell, texture, taste. Vocabulary carries this answer, so reach for the specific word. The sample is flavour practice, not a recipe to memorise.",
        modelAnswer:
          "Weekday evenings it's dal and rice — my flatmate Simran makes the lentils properly, with garlic tempered in butter at the end. There's always a bowl of yoghurt and a mound of flatbread involved. Weekend cooking is more ambitious; Sunday is whatever the market dictates.",
        weak: "Rice and chicken, most days.",
        improved:
          "Rice and chicken most days, usually with vegetables. My mother cooks in the evenings, and she makes one sauce with lemon that makes even the plain chicken taste special.",
        expected: ["meal", "cook", "rice", "family", "usually"],
      },
      {
        question: "How often do you eat out or order takeaway?",
        guidance:
          "Give the frequency, then split it — sit-down meals versus delivery — and mention cost or health as the reason behind the number. Precise words like 'delivery apps' sound natural. Use the demonstrated layers for your own habits.",
        modelAnswer:
          "More than my budget would approve of. Proper restaurants maybe twice a month; the delivery apps two or three times a week, especially on late shifts. My weakness is a Kurdish place that does flatbread wraps at midnight. Cooking resumes every Monday with heroic intentions.",
        weak: "Two or three times a week.",
        improved:
          "Two or three times a week, usually when I finish work late. I order noodles through an app, but I try to cook at weekends because takeaway gets expensive.",
        expected: ["week", "restaurant", "order", "cook", "often"],
      },
      {
        question: "Do you prefer home-cooked food or restaurant meals?",
        guidance:
          "Commit to one, then compare flavours, cost, health or company — the reason needs substance. One example of each clinches it. Notice the comparative work in the sample, then argue your own preference with your own evidence.",
        modelAnswer:
          "Home-cooked, by a mile — restaurants have a ceiling. When my aunt makes her fish stew, the stock has simmered since morning; no menu can compete with that. What restaurants offer is novelty and someone else washing up. For a weekday, though, nothing beats my own fridge leftovers.",
        weak: "Home food, it's healthier.",
        improved:
          "I prefer home-cooked meals, honestly. You know exactly what goes into the pot, it costs less, and my mother's cooking beats most restaurants I've tried anyway.",
        expected: ["prefer", "home", "cook", "because", "restaurant"],
      },
      {
        question: "How have your eating habits changed since childhood?",
        guidance:
          "Contrast then and now: what you ate, who cooked, what you believed about food. Name one driver of the change — health, budget, moving out. The sample demonstrates the contrast; feed it your own food history.",
        modelAnswer:
          "Massively. As a child I treated vegetables as a negotiation; now I genuinely crave broccoli, which my younger self would find hilarious. Moving out taught me to cook from necessity, then from pleasure. The biggest shift is spice — my tolerance doubled within a year of meeting my flatmate.",
        weak: "I eat more vegetables now.",
        improved:
          "Yes, I eat far more vegetables now. As a child I refused anything green, but since moving out I cook for myself, and I've discovered I actually like broccoli and spinach.",
        expected: ["eat", "change", "child", "now", "cook"],
      },
      {
        question: "If you could only eat one cuisine for the rest of your life, which would you choose?",
        guidance:
          "A playful hypothetical: choose fast, then defend it on variety, comfort or health, and name the dish you could not lose. Play along with energy — it shows personality. Study the shape, then serve your own imaginary sentence.",
        modelAnswer:
          "Japanese, I think, if money were no object. You get clean fish, deep-fried indulgence, noodle comfort and rice in endless forms — that's a whole life's eating in one tradition. Losing cheese would hurt, and I'd mourn bread daily, but I'd keep my ramen. Honestly, I'm drooling at the thought.",
        weak: "Probably Italian, everyone likes it.",
        improved:
          "Probably Italian, to be safe. Between pasta, pizza and risotto I'd never get bored, and losing chilli sauce would hurt, but Italian covers almost every mood.",
        expected: ["would", "cuisine", "choose", "because", "food"],
      },
    ],
    vocabulary: [
      {
        word: "to temper",
        partOfSpeech: "verb",
        meaning: "To fry spices or garlic briefly in hot fat to finish a dish.",
        example: "She tempers the lentils with cumin right at the end, and the kitchen smells divine.",
      },
      {
        word: "takeaway",
        partOfSpeech: "noun",
        meaning: "(British) A meal cooked elsewhere and eaten at home.",
        example: "Friday night is takeaway night; the wok stays in the cupboard.",
      },
      {
        word: "home-cooked",
        partOfSpeech: "adjective",
        meaning: "Prepared at home from basic ingredients.",
        example: "Nothing fixes a bad week like a home-cooked stew and an early night.",
      },
      {
        word: "to crave",
        partOfSpeech: "verb",
        meaning: "To feel a strong desire for a food.",
        example: "I crave sour things when I'm tired — green mango with salt, mainly.",
      },
      {
        word: "comfort food",
        partOfSpeech: "noun phrase",
        meaning: "Simple food eaten for reassurance rather than health.",
        example: "Rainy days call for comfort food: buttered toast and thick soup.",
      },
      {
        word: "fusion",
        partOfSpeech: "adjective",
        meaning: "Blending two culinary traditions.",
        example: "That Korean-Italian fusion place does a kimchi carbonara that shouldn't work but does.",
      },
      {
        word: "to eat out",
        partOfSpeech: "phrase",
        meaning: "To eat at a restaurant rather than at home.",
        example: "We eat out so rarely now that it's become an event, complete with outfits.",
      },
      {
        word: "mouth-watering",
        partOfSpeech: "adjective",
        meaning: "Smelling or looking so good it makes you hungry.",
        example: "The market stalls do mouth-watering skewers that defeat my budget weekly.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 10. Travel — trips, habits and dreams (intermediate)
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-travel",
    title: "Part 1 practice — Travel",
    topic: "travel",
    difficulty: 3,
    proficiency: "intermediate",
    skill: "development",
    framing: "Now I'd like to ask about travel.",
    questions: [
      {
        question: "Where did you go on your most recent trip?",
        guidance:
          "Set the scene with place, duration and purpose, then one impression that stuck. A trip is a ready-made story, so pick your favourite detail. The model maps the layers; your own last journey fills them.",
        modelAnswer:
          "Georgia, the country — ten days in spring for a friend's wedding outside Tbilisi. The banquet went on for six hours, and toasts were made in three languages. Afterwards we drove into the mountains, where the roads are terrifying and the khinkali are unbeatable. My favourite trip in years.",
        weak: "To Hanoi, for a wedding.",
        improved:
          "My most recent trip was to Hanoi in the autumn. I went for a cousin's wedding and stayed an extra week, and the street food and the old quarter completely won me over.",
        expected: ["trip", "visit", "place", "because", "stay"],
      },
      {
        question: "How often do you travel in a typical year?",
        guidance:
          "Give the number honestly, then the pattern — city breaks, one long trip, family visits — and one constraint behind it. Work or budget details make it real. Follow the demonstrated rhythm with your own travel calendar.",
        modelAnswer:
          "Two proper holidays and a scatter of weekend trains. The big trips are annual — this year, the wedding in Georgia — and the weekends go to whatever's cheap by rail. My constraint is leave, not money; I hoard days like a dragon all year and then spend them in one glorious week.",
        weak: "Once a year, usually summer.",
        improved:
          "Usually two or three trips a year. There's one big holiday with my family and a couple of short city breaks with friends, depending on cheap flights.",
        expected: ["year", "travel", "trip", "holiday", "time"],
      },
      {
        question: "Do you prefer travelling to new places or returning somewhere familiar?",
        guidance:
          "Pick one and justify it with what travel gives you — discovery, rest, memories. A contrast sentence about the other option shows balance. The sample shows the argument arc; run your own itinerary through it.",
        modelAnswer:
          "New places, mostly — the first day somewhere unknown is my favourite feeling in the world. Returning has its own magic, though; I've been to Lisbon four times, and knowing which bakery to queue at is a quiet luxury. If time is short, familiarity wins. With two weeks free, give me a map I can't read.",
        weak: "New places, they're more exciting.",
        improved:
          "I definitely prefer new places. Exploring somewhere I've never been gives me energy, although I did enjoy returning to Rome once because we skipped the tourist traps.",
        expected: ["place", "prefer", "new", "because", "travel"],
      },
      {
        question: "Do you think the way people travel has changed much recently?",
        guidance:
          "Answer with a verdict, then evidence — technology, prices, destinations — and one change you've noticed in your own choices. Avoid lectures; keep it personal. Copy the shape and argue from your own bookings.",
        modelAnswer:
          "Completely transformed, even in a decade. My first trips involved printed tickets and a guidebook; now my phone does boarding passes, translation and the itinerary itself. Budget flights turned whole generations into weekend explorers, and remote work means I've answered emails from three countries. The romance of travel is dented, but the access is real.",
        weak: "Yes, people fly more now.",
        improved:
          "Yes, people fly far more now. Cheap airlines made weekends abroad normal, and my friends think nothing of a flight for one match or one concert.",
        expected: ["change", "travel", "now", "people", "fly"],
      },
      {
        question: "Is there a place you dream of visiting one day?",
        guidance:
          "Name it and let yourself describe the pull — landscape, history, food — plus one thing you would actually do there. Dreaming is allowed; keep it specific. The sample demonstrates the wish structure; put your own destination in it.",
        modelAnswer:
          "Patagonia, persistently, since a documentary about glaciers hijacked my evening two years ago. I want to walk the trails at the end of the continent and see weather that argues back. My plan is to save for eighteen months and go before my knees file a formal objection. It's the one trip I'd regret skipping.",
        weak: "Japan, I suppose, like everyone.",
        improved:
          "I'd love to see Japan in spring. Cherry blossoms are the main draw, and I'd also want to try proper sushi in Tokyo and ride the bullet train between cities.",
        expected: ["would", "visit", "country", "dream", "because"],
      },
    ],
    vocabulary: [
      {
        word: "city break",
        partOfSpeech: "noun phrase",
        meaning: "A short holiday spent in a city, usually a long weekend.",
        example: "Our city breaks are planned around one bakery and one museum each.",
      },
      {
        word: "to get around",
        partOfSpeech: "phrasal verb",
        meaning: "To travel from place to place within an area.",
        example: "Getting around Kyoto by bicycle was the best decision of the trip.",
      },
      {
        word: "off the beaten track",
        partOfSpeech: "phrase",
        meaning: "Away from popular tourist routes.",
        example: "The guesthouse was properly off the beaten track — three buses and a river crossing.",
      },
      {
        word: "itinerary",
        partOfSpeech: "noun",
        meaning: "A planned route and schedule for a journey.",
        example: "I keep the itinerary loose now; overscheduling ruined a holiday once.",
      },
      {
        word: "wanderlust",
        partOfSpeech: "noun",
        meaning: "A strong, restless desire to travel.",
        example: "Browsing airport departure boards gives me instant wanderlust.",
      },
      {
        word: "to book ahead",
        partOfSpeech: "phrase",
        meaning: "To reserve something before travelling.",
        example: "In high season you book ahead or you sleep in the station, as I once learned.",
      },
      {
        word: "souvenir",
        partOfSpeech: "noun",
        meaning: "Something kept to remember a place by.",
        example: "My souvenirs are always edible, which creates luggage problems on the way home.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },
];
