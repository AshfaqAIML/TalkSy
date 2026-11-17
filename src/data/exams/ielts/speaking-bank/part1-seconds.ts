/**
 * IELTS Speaking Part 1 practice bank — second interview rounds
 * (PROMPT 54 question-bank expansion).
 *
 * One further Part 1 round on each of the nineteen taught topics, so
 * learners can revisit a topic a second time without ever meeting the
 * same question: every set takes a fresh angle — deeper or sideways —
 * on its topic rather than repeating the flagship round's prompts. Each
 * set carries five examiner questions with development guidance, a
 * natural model answer (a demonstration of the layer method, never a
 * script to memorise), a weak-versus-improved pair, six vocabulary
 * entries and server-side keyword expectations.
 *
 * Original TalkSy practice material written in the style of the IELTS
 * Speaking test — all names, places and situations invented; never
 * reproduced exam content.
 */

import { SPEAKING_BANK_SOURCE_NOTE, type SpeakingPart1Set } from "./types";

// ---------------------------------------------------------------------------
// 1. Introduction — second round: character, place and five-year hopes
// ---------------------------------------------------------------------------

export const part1SecondSets: SpeakingPart1Set[] = [
  {
    kind: "part1",
    slug: "ielts-sb-p1-introduction-2",
    title: "Introduction — second round",
    topic: "introduction",
    domain: "everyday",
    difficulty: 1,
    proficiency: "foundation",
    skill: "fluency",
    framing: "Right then — this time we'll begin with a few questions about who you are.",
    questions: [
      {
        question: "How would your closest friends describe your personality?",
        guidance:
          "A self-description question: choose two or three character words, then prove each with a tiny piece of evidence from real life. Saying how the friends see you keeps it honest. Build the layers from your own character, not from the sample.",
        modelAnswer:
          "They'd probably call me calm and stubborn at the same time, which sounds like an insult but isn't. My friend Marta says I'm the one who never panics when plans collapse, and the one who'll argue about a restaurant for an hour. I like to think both are compliments.",
        weak: "They'd say I'm friendly, I suppose.",
        improved:
          "My friends would probably describe me as calm, because when a trip or a plan goes wrong I'm usually the one who stays quiet and sorts it out. They'd also mention that I'm stubborn once I've decided something.",
        expected: ["calm", "friends", "stubborn", "describe"],
      },
      {
        question: "What's the best thing about the place where you live now?",
        guidance:
          "An opinion question about your current home area. Name one thing you genuinely value, then explain why it matters to you with a small everyday detail. Compare the shape of the sample with your own answer, then keep only your own version.",
        modelAnswer:
          "Honestly, it's the river path. I live ten minutes from the water, and in the evenings the whole neighbourhood seems to walk there — couples, dogs, old men with fishing rods. After a noisy day at work it resets my head completely. I'd struggle to give that up.",
        weak: "Probably the park near my flat.",
        improved:
          "The best thing is the riverside park, without a doubt. I run there most mornings before work, and seeing the same regulars — the rowers, the dog walkers — makes the area feel like a proper community rather than somewhere I simply sleep.",
        expected: ["river", "park", "community", "best"],
      },
      {
        question: "Which language would you most like to learn besides English?",
        guidance:
          "Name the language straight away, then give two honest reasons — people you want to talk to, work plans, films you love. One small ambition at the end lifts it beyond a list. Then replace every detail with your own target language.",
        modelAnswer:
          "Japanese, without much doubt. I've watched anime since I was fourteen and I'm tired of depending on subtitles. My brother-in-law is from Osaka too, so at family dinners I'm the one smiling and nodding. My plan is to start properly once I've finished this exam season.",
        weak: "Maybe Japanese, because of films.",
        improved:
          "I'd really like to learn Japanese. Two reasons, mainly: I've grown up watching Japanese animation and always relying on subtitles, and my brother-in-law's family speaks it, so I'd love to join their conversations for once.",
        expected: ["japanese", "subtitles", "family", "learn"],
      },
      {
        question: "What personal quality are you proudest of?",
        guidance:
          "Pick one quality and own it — modesty can shrink a good answer. Say where the quality shows itself in daily life, and if you can, admit the downside of it too. The sample shows the move from claim to proof.",
        modelAnswer:
          "My patience, I think, though it surprises people who know me as chatty. I can sit with a problem for weeks without rushing it, which got me through my brother's renovation last year. The downside is I sometimes wait too long before speaking up in meetings — patience isn't always a virtue there.",
        weak: "I'm probably quite a patient person.",
        improved:
          "I'd say my patience. I don't panic when a problem takes weeks to solve, which helped a lot during my brother's renovation last year, although it means I sometimes stay quiet in meetings when I should speak up sooner.",
        expected: ["patience", "problem", "wait", "speak"],
      },
      {
        question: "Where do you hope to be in your life five years from now?",
        guidance:
          "A future-hopes question, so reach for 'I hope to', 'I'd like to have' and other future forms. Cover work and one personal goal, and admit any uncertainty naturally. Then send the sample back and imagine your own five years.",
        modelAnswer:
          "Realistically, I hope to be leading a small team rather than being led. On the personal side I'd like to have finally learned to drive, which I've postponed for years. Five years sounds long until you remember how fast the last five went, so I try not to plan much beyond that.",
        weak: "Working, hopefully in a better job.",
        improved:
          "In five years I hope to be leading a small team at work, and personally I'd like to have learned to drive at last. Beyond that I try not to plan too far, because the last five years changed direction anyway.",
        expected: ["hope", "team", "drive", "plan"],
      },
    ],
    vocabulary: [
      {
        word: "level-headed",
        partOfSpeech: "adjective",
        meaning: "Calm and sensible in difficult situations.",
        example: "Stay level-headed in the interview and the questions feel much easier.",
      },
      {
        word: "to reset your head",
        partOfSpeech: "phrase (informal)",
        meaning: "To make yourself feel fresh and clear again.",
        example: "Ten minutes by the river resets my head completely after work.",
      },
      {
        word: "subtitle",
        partOfSpeech: "noun",
        meaning: "Words printed on a screen translating what is said.",
        example: "I watch everything with English subtitles, which quietly improved my reading.",
      },
      {
        word: "to postpone",
        partOfSpeech: "verb",
        meaning: "To decide that something will happen later than planned.",
        example: "I've postponed the dentist twice, which I know is silly.",
      },
      {
        word: "a virtue",
        partOfSpeech: "noun",
        meaning: "A good moral quality.",
        example: "Patience is a virtue, as my grandmother always says.",
      },
      {
        word: "to speak up",
        partOfSpeech: "phrasal verb",
        meaning: "To say what you think, especially when it is difficult.",
        example: "If you disagree with the plan, this is the moment to speak up.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 2. Work — second round: the working day, colleagues and staying power
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-work-2",
    title: "Work — second round",
    topic: "work",
    domain: "workplace",
    difficulty: 2,
    proficiency: "intermediate",
    skill: "development",
    framing: "Let's return to work now and go a little deeper.",
    questions: [
      {
        question: "What does a typical working day look like for you?",
        guidance:
          "Walk the examiner through the day in order — start, middle, end — using time markers like 'around nine' or 'after lunch'. One surprising detail makes it memorable. The model demonstrates the sequence; your own working day should replace every part of it.",
        modelAnswer:
          "I'm a pharmacy technician, so my day starts at half seven checking the morning prescriptions. The middle of the day is a blur of shelves and customers. What people don't expect is the paperwork — from four onwards I'm mostly at a screen, and I leave at six feeling like I've had two different jobs.",
        weak: "Busy. I work in an office.",
        improved:
          "I usually start around eight with a quick team meeting, then spend the morning on the main tasks. After lunch comes the paperwork and the emails, and by five I'm tidying up whatever the day has left behind.",
        expected: ["start", "morning", "day", "paperwork"],
      },
      {
        question: "Do you get on well with the people you work with?",
        guidance:
          "Answer yes or no immediately, then bring in one or two named relationships and what you actually do together — lunch, breaks, complaints. Real people make it real. Swap in your own colleagues and your own habits afterwards.",
        modelAnswer:
          "Genuinely well, which I know isn't universal. There's a group of us who eat lunch together every day, and my supervisor Ravi covers for me when my daughter's nursery calls. We're not close friends outside work, but I trust them all with a bad mood, and that's the real test I think.",
        weak: "Yes, my colleagues are nice.",
        improved:
          "Yes, we get on well overall. A few of us have lunch together most days, and when my daughter's nursery calls, my supervisor covers for me without fuss. We rarely meet outside work, but that's fine with me.",
        expected: ["lunch", "together", "well", "trust"],
      },
      {
        question: "What's the most difficult part of your job?",
        guidance:
          "Name the hardest element without complaining for too long, then explain why it's hard and one small way you cope with it. Balance keeps it mature. The sample shows the shape; your own difficulty and your own trick go in it.",
        modelAnswer:
          "Definitely the difficult conversations. When an order goes wrong, someone has to ring the customer and accept the blame, and that someone is usually me. I've learned to write down the three points I need to make beforehand, otherwise I apologise for things that aren't even our fault. It never gets easy, exactly.",
        weak: "The paperwork is quite boring.",
        improved:
          "The hardest part is dealing with angry customers when an order goes wrong. I've learned to write down my three main points before calling, because it stops me apologising for things that aren't our fault at all.",
        expected: ["difficult", "wrong", "customer", "learn"],
      },
      {
        question: "Would you say your job gives you a good balance between work and free time?",
        guidance:
          "A yes-with-nuance answer works best: state your verdict, then let one example from a normal week prove it, warts and all. End with whether you'd change the balance if you could. Answer from your own week, not the sample's.",
        modelAnswer:
          "Mostly yes, and I'm grateful for it. My contract is thirty-five hours and the office genuinely empties by six, so my evenings are mine. The exception is stocktake month, when Saturdays disappear completely. My partner calls it the month we're just colleagues, but I protect the rest of the year fiercely.",
        weak: "Quite good, apart from busy months.",
        improved:
          "On the whole, yes. My contract keeps the evenings free because the office shuts at six, though during stocktake month my Saturdays vanish entirely and my partner barely sees me. For eleven months a year I'd say the balance is healthy.",
        expected: ["balance", "evenings", "saturdays", "contract"],
      },
      {
        question: "Do you think you'll stay in the same line of work until you retire?",
        guidance:
          "This rewards future forms and honest hedging — 'I imagine', 'I can't see myself'. Give a direction rather than a promise, with one reason rooted in your experience. Then argue your own case with your own plans.",
        modelAnswer:
          "I'd say probably, but not in the same chair. I'm a bookkeeper now and I can't imagine leaving numbers entirely, but in ten years I'd like to be advising small businesses rather than entering receipts. My aunt did exactly that at fifty and she's never been busier, which I find quietly reassuring.",
        weak: "Yes, I think I probably will.",
        improved:
          "I think so, though probably not doing exactly what I do now. I'd like to move from record-keeping into advising small businesses, like my aunt did at fifty, so the same field but a slightly different role.",
        expected: ["same", "role", "businesses", "imagine"],
      },
    ],
    vocabulary: [
      {
        word: "to cover for someone",
        partOfSpeech: "phrasal verb",
        meaning: "To do someone's work while they are away.",
        example: "Can you cover for me on Friday? I'm at a wedding all day.",
      },
      {
        word: "without fuss",
        partOfSpeech: "phrase",
        meaning: "Calmly, without complaint or drama.",
        example: "She rearranged the whole meeting without fuss and stayed late to help.",
      },
      {
        word: "a line of work",
        partOfSpeech: "phrase",
        meaning: "A type of job or profession.",
        example: "Teaching is a rewarding line of work, if not a rich one.",
      },
      {
        word: "warts and all",
        partOfSpeech: "phrase",
        meaning: "Including the bad parts as well as the good.",
        example: "I described my job honestly, warts and all, and he still wanted it.",
      },
      {
        word: "to hedge",
        partOfSpeech: "verb",
        meaning: "To avoid committing yourself fully to one answer.",
        example: "It's wise to hedge a little when asked about the future.",
      },
      {
        word: "reassuring",
        partOfSpeech: "adjective",
        meaning: "Making you feel less worried.",
        example: "It was reassuring to hear that everyone found the first week hard.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 3. Study — second round: choices, methods and what comes after
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-study-2",
    title: "Study — second round",
    topic: "study",
    domain: "education",
    difficulty: 2,
    proficiency: "intermediate",
    skill: "grammar",
    framing: "Now we'll look at your studies from a different angle.",
    questions: [
      {
        question: "Why did you choose the subject you're studying?",
        guidance:
          "Give the honest trigger first — a person, a class, an accident even — then one practical reason that sealed the decision. Avoid 'because it's interesting' on its own. The model shows cause layered with story; yours will differ and should.",
        modelAnswer:
          "Honestly, partly laziness. I was good at chemistry at school and choosing it felt safer than starting from zero in something new. But then a summer placement in a water-testing lab changed everything — suddenly the equations had a purpose. So the honest answer is: half accident, half growing curiosity.",
        weak: "Because I like it, basically.",
        improved:
          "Mainly because I was good at chemistry at school, so it felt like the safe choice. But a summer placement in a lab made the subject feel real for me, and that's what turned a safe choice into a genuine interest.",
        expected: ["chemistry", "school", "placement", "choice"],
      },
      {
        question: "What do you find hardest about your course?",
        guidance:
          "Name the struggle precisely — a module, a skill, the workload — then say why it beats you and what you've tried about it. A specific weakness sounds confident, not weak. Replace the sample's struggle with your own before speaking.",
        modelAnswer:
          "Statistics, without a doubt. I can talk about literature for hours, but put a spreadsheet of results in front of me and my mind slides off it. I've started going to the maths help desk on Wednesdays, and the tutor is endlessly patient. Slowly it's turning from my enemy into merely my least favourite thing.",
        weak: "The exams are quite hard.",
        improved:
          "The statistics module is my weakest area by far. My mind simply slides off spreadsheets, so I now visit the maths help desk every Wednesday, and the tutor's patience is slowly making the topic feel less frightening.",
        expected: ["statistics", "tutor", "help", "weak"],
      },
      {
        question: "Do you find it easier to study alone or with other people?",
        guidance:
          "A comparison question — pick a side, then give a concrete study session that proves it. The magic phrase is 'it depends', if you can name exactly what it depends on. Then argue from your own revision experience.",
        modelAnswer:
          "Alone for learning, together for revising, if that makes sense. New material I have to meet quietly on my own with my notes. But before exams, my study group of four takes turns explaining topics to each other, and apparently you remember what you explain far better than what you read.",
        weak: "Alone, it's quieter for me.",
        improved:
          "Definitely alone when I'm learning something new, because I need silence to concentrate. Before exams, though, I revise with a small group, and explaining topics to each other helps the facts stick much better than reading.",
        expected: ["alone", "group", "exams", "explain"],
      },
      {
        question: "How do you usually prepare for an important exam?",
        guidance:
          "Take the examiner through your method step by step — when you start, what materials you use, how you test yourself. One honest confession about a bad habit adds realism. Demonstrate the method with your own routine.",
        modelAnswer:
          "I make a plan two weeks out — every lecture on one page, then I tick them off as I revise. The evening before, I close the books early and cook something complicated to stop myself panicking. My one confession: I rewrite my notes far too beautifully, which is really just expensive procrastination.",
        weak: "I just read my notes again.",
        improved:
          "I plan two weeks ahead and tick off each lecture as I revise it. The night before I stop early and cook to stay calm, although I do waste time rewriting my notes too neatly, if I'm honest.",
        expected: ["plan", "revise", "notes", "before"],
      },
      {
        question: "What would you like to do once you've finished your studies?",
        guidance:
          "Future plans, so future tenses carry it. Name one realistic next step and one longer ambition, and connect both to what you're studying now. Uncertainty is fine if it sounds thoughtful. Build yours from your own next steps.",
        modelAnswer:
          "A gap year first, I've decided, even though my parents think I'm dodging real life. I want to work in my uncle's clinic in Nairobi to see whether I can handle blood before committing to medicine. After that, either medical school or research — the year should tell me which.",
        weak: "Find a good job, probably.",
        improved:
          "First I want a gap year working in my uncle's clinic, to test whether medicine really suits me. After that, I'll either apply to medical school or go into research — the year abroad should make the decision for me.",
        expected: ["gap", "medicine", "school", "research"],
      },
    ],
    vocabulary: [
      {
        word: "placement",
        partOfSpeech: "noun",
        meaning: "A temporary period of work experience as part of a course.",
        example: "My second-year placement was in a hospital pharmacy, and I loved it.",
      },
      {
        word: "workload",
        partOfSpeech: "noun",
        meaning: "The amount of work a person has to do.",
        example: "The workload doubles in the final year, so I've cut my weekend shifts.",
      },
      {
        word: "to revise",
        partOfSpeech: "verb (UK)",
        meaning: "To study something again before an exam.",
        example: "I revised with flashcards on the bus all through May.",
      },
      {
        word: "to procrastinate",
        partOfSpeech: "verb",
        meaning: "To keep delaying something you should be doing.",
        example: "I procrastinate by cleaning the flat whenever a deadline is near.",
      },
      {
        word: "a gap year",
        partOfSpeech: "noun",
        meaning: "A year taken off between stages of study or work.",
        example: "She spent her gap year teaching in a village school.",
      },
      {
        word: "to tick off",
        partOfSpeech: "phrasal verb",
        meaning: "To mark an item on a list as done.",
        example: "There's nothing better than ticking off the last task on a list.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 4. Hometown — second round: scale, landmarks, neighbours and getting about
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-hometown-2",
    title: "Hometown — second round",
    topic: "hometown",
    domain: "society",
    difficulty: 2,
    proficiency: "intermediate",
    skill: "lexical",
    framing: "Let's go back to your hometown for a second visit.",
    questions: [
      {
        question: "What kind of place is your hometown — a city, a town or a village?",
        guidance:
          "Classify the place, then give its scale with a number people can picture — inhabitants, a ten-minute centre, one high street. One detail about the pace of life rounds it off. Describe your own home place with the same precision.",
        modelAnswer:
          "It sits between the two — a market town of about forty thousand, so big enough for three supermarkets but small enough that my old primary school teacher still greets me in the bakery. Everything worth doing is within fifteen minutes on foot, which I only appreciated after moving to the capital.",
        weak: "It's a small town, nothing special.",
        improved:
          "It's a market town of around forty thousand people — too small for a proper city, too big for a village. You can walk across the centre in twenty minutes, yet everyone somehow knows everyone's business.",
        expected: ["town", "thousand", "small", "centre"],
      },
      {
        question: "What's the most interesting building or landmark in your hometown?",
        guidance:
          "Choose one specific building — a bridge, a church, a market hall — and say what it looks like and why it matters locally. A personal memory gives it life. Swap in your hometown's landmark and your own memory of it.",
        modelAnswer:
          "There's an old grain mill on the river, half wooden, with a wheel that still turns — well, turns for tourists now. It's four hundred years old and apparently features in a painting in the national gallery. As children we were convinced a witch lived there, which gave it a certain extra charm.",
        weak: "The old church, I suppose.",
        improved:
          "The old grain mill by the river is the one I'd choose. Its wooden wheel still turns for visitors, and it's said to appear in a famous painting. As a child I genuinely believed a witch lived there.",
        expected: ["mill", "river", "old", "wheel"],
      },
      {
        question: "Is there anything about your hometown that annoys you?",
        guidance:
          "Complain with charm: name one genuine irritation, explain the effect it has on daily life, and ideally add what you'd do about it. Small annoyances are more convincing than big ones. Then air your own grievance instead.",
        modelAnswer:
          "The buses, no contest. Two come at once after a forty-minute gap, and the last one home leaves at nine, which quietly kills the evening economy — nobody stays for a second drink. Everyone complains, nothing changes, and my mother has written to the council four times about it.",
        weak: "The traffic is quite bad.",
        improved:
          "Definitely the bus service. They arrive in pairs after long gaps, and the last one leaves at nine, so evenings out are nearly impossible. My mother has complained to the council four separate times now.",
        expected: ["bus", "nine", "council", "complain"],
      },
      {
        question: "Do people in your hometown mostly know their neighbours?",
        guidance:
          "A question about community: describe the culture — front gardens, shared stairs, festivals — with one example of real neighbourliness you've seen. Acknowledge exceptions if they exist. Illustrate from your own street or block.",
        modelAnswer:
          "Very much so, sometimes to a fault. Our street has a shared WhatsApp group, and when Mr Ferreira came home from hospital, a rota of casseroles appeared on his doorstep within a day. The downside: your business is everyone's business, and my grandmother's bingo wins are reported faster than the news.",
        weak: "Yes, people are friendly there.",
        improved:
          "Yes, neighbours there really look out for each other. When one neighbour came home from hospital, meals appeared on his doorstep for a week. The only drawback is that everyone hears your news before you've told anyone.",
        expected: ["neighbour", "street", "hospital", "everyone"],
      },
      {
        question: "How easy is it to get around your hometown without a car?",
        guidance:
          "Cover the honest answer — walkable centre, terrible buses, bicycle lanes or the lack of them — and say how people actually manage. One habit or workaround makes it concrete. Then describe getting around your own hometown.",
        modelAnswer:
          "In the centre, wonderfully easy — everything is flat and within walking distance, and there's a free bike scheme. The villages around are another story: my aunt lives eight kilometres out and the bus runs three times a day, so half the town informally relies on lifts and one very patient taxi driver.",
        weak: "It's easy, everything is close.",
        improved:
          "Within the town it's easy because it's flat and walkable, and there's even a free bike scheme. Out in the surrounding villages, though, buses only run a few times daily, so people depend on lifts.",
        expected: ["walk", "bike", "bus", "villages"],
      },
    ],
    vocabulary: [
      {
        word: "market town",
        partOfSpeech: "noun",
        meaning: "A small town with a tradition of holding markets.",
        example: "It's a typical market town: quiet all week, packed on Saturdays.",
      },
      {
        word: "landmark",
        partOfSpeech: "noun",
        meaning: "A building or feature that is easy to recognise.",
        example: "The clock tower is the landmark everyone uses when giving directions.",
      },
      {
        word: "to a fault",
        partOfSpeech: "phrase",
        meaning: "(Of a quality) to an excessive degree.",
        example: "She's generous to a fault and lends money she can't spare.",
      },
      {
        word: "rota",
        partOfSpeech: "noun",
        meaning: "A list showing who does a task and when.",
        example: "We drew up a rota for watering the office plants.",
      },
      {
        word: "to look out for someone",
        partOfSpeech: "phrasal verb",
        meaning: "To protect someone or help them.",
        example: "My neighbours look out for my parcels when I'm away.",
      },
      {
        word: "walking distance",
        partOfSpeech: "phrase",
        meaning: "Near enough to walk to.",
        example: "The station is within walking distance, about ten minutes away.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 5. Accommodation — second round: history of the home, wishes and windows
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-accommodation-2",
    title: "Accommodation — second round",
    topic: "accommodation",
    domain: "everyday",
    difficulty: 1,
    proficiency: "foundation",
    skill: "development",
    framing: "I'd like to hear more about the home you live in.",
    questions: [
      {
        question: "How long have you lived in your current home?",
        guidance:
          "State the duration, then tell the small story of how you ended up there — the viewing, the move, the first night. Present perfect does the timing, as in 'I've lived there for three years'. Now retell it with your own home.",
        modelAnswer:
          "Three years this March. We'd been hunting for months, and this flat was the ninth viewing of one exhausting Saturday — I honestly almost stayed in the car. But the light in the living room sold it instantly, and the landlord let us keep the piano that the previous tenant abandoned. Small mercies.",
        weak: "Nearly three years, I think.",
        improved:
          "I've lived there three years this March. It was the last flat we viewed on a tiring house-hunting Saturday, and the afternoon light in the living room convinced us immediately. My flatmate still says it was the piano the old tenant left behind that really closed the deal.",
        expected: ["three", "years", "flat", "light"],
      },
      {
        question: "What do you like most about your home?",
        guidance:
          "Pick one feature rather than a list — the balcony, the morning light, the quiet — and explain what it lets you do or feel. A tiny habit attached to it makes the answer breathe. Choose your own favourite feature now.",
        modelAnswer:
          "The balcony, easily. It's barely two metres square, but it faces the courtyard instead of the road, so it's genuinely peaceful. I have my coffee out there every morning, even in winter wrapped in a blanket, and I've grown herbs in old soup tins along the railing. It's my five square metres of countryside.",
        weak: "The balcony, I like it there.",
        improved:
          "I love our tiny balcony most. It looks onto a quiet courtyard rather than the road, so I drink my morning coffee there in every season, and I've even grown some herbs in old tins.",
        expected: ["balcony", "coffee", "quiet", "herbs"],
      },
      {
        question: "Is there anything about your home you'd like to change?",
        guidance:
          "One wish, clearly named, plus the reason it bothers you and what difference fixing it would make. Ordinary wishes — storage, a bigger fridge, a damp patch — sound believable. Then wish for your own change instead.",
        modelAnswer:
          "The kitchen, wholeheartedly. It was fitted in the nineties, the cupboards are falling apart, and there's one socket for the entire room — one. I've had to choose between the kettle and the toaster every morning for three years. A proper rewire and some decent units would change my whole mood, honestly.",
        weak: "A bigger kitchen would help.",
        improved:
          "I'd renovate the kitchen if I could. The cupboards are collapsing and there's only one electrical socket, so every morning I unplug the toaster to boil the kettle. A proper rewire would honestly change my days.",
        expected: ["kitchen", "cupboard", "socket", "rewire"],
      },
      {
        question: "Would you describe yourself as a tidy person at home?",
        guidance:
          "Be honest and specific about your tidiness — where it's strong, where it collapses — and name your one weakness: the chair that collects clothes, the desk drawers. One habit shows character. Now confess your own.",
        modelAnswer:
          "Depends on the room, honestly. The kitchen is hospital-level clean because I cook every day, but my bedroom has one chair that's technically become a shelf for clothes. I do a proper reset on Sunday mornings with music on, and by Wednesday it's chaos again. I've accepted this about myself.",
        weak: "Not really, my room's messy.",
        improved:
          "Only in the kitchen — I clean as I cook. My bedroom is different: one chair has become a shelf for clothes, and although I tidy properly every Sunday, it's messy again by Wednesday, to be honest.",
        expected: ["kitchen", "bedroom", "clothes", "tidy"],
      },
      {
        question: "What can you see from the windows of your home?",
        guidance:
          "Look through the window in words: name the main view, one detail that changes with the seasons or time of day, and how the view affects your mood. It's describing place, so slow down and notice. Then look through your own window.",
        modelAnswer:
          "From the living room, the backs of four houses and a strip of sky, which sounds bleak but isn't — there's a pear tree that belongs to nobody in particular and goes bright orange every October. The bedroom faces the car park. I've learned to love the security light's honest little routine, even at three in the morning.",
        weak: "Just the street and some trees.",
        improved:
          "Mainly the backs of the neighbouring houses and one pear tree that turns orange every autumn. It sounds dull, but that tree has become my calendar, and I'd honestly miss it if I ever moved.",
        expected: ["tree", "houses", "bedroom", "autumn"],
      },
    ],
    vocabulary: [
      {
        word: "viewing",
        partOfSpeech: "noun",
        meaning: "An appointment to see a property before renting or buying it.",
        example: "We had three viewings booked for Saturday morning, all in the same district.",
      },
      {
        word: "tenant",
        partOfSpeech: "noun",
        meaning: "A person who rents a home from a landlord.",
        example: "The previous tenant left a piano behind when she moved out.",
      },
      {
        word: "courtyard",
        partOfSpeech: "noun",
        meaning: "An open space surrounded by walls or buildings.",
        example: "Our bedroom looks onto a shared courtyard with two lemon trees.",
      },
      {
        word: "to rewire",
        partOfSpeech: "verb",
        meaning: "To put new electrical wiring into a building.",
        example: "The flat needs rewiring before we can install the new kitchen.",
      },
      {
        word: "to do a reset",
        partOfSpeech: "phrase (informal)",
        meaning: "To tidy and organise a space completely.",
        example: "I do a reset every Sunday: laundry, bins, everything back where it belongs.",
      },
      {
        word: "bleak",
        partOfSpeech: "adjective",
        meaning: "Cold, empty and unwelcoming.",
        example: "The view from the office window is fairly bleak — just a car park.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 6. Family — second round: closeness, resemblance, rituals and advice
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-family-2",
    title: "Family — second round",
    topic: "family",
    domain: "society",
    difficulty: 2,
    proficiency: "intermediate",
    skill: "interaction",
    framing: "Let's talk a bit more about your family life.",
    questions: [
      {
        question: "Who in your family are you closest to?",
        guidance:
          "Name the person and their relation to you, then prove the closeness with what you two actually do together — weekly calls, shared jokes, honest advice. One small story is worth three adjectives. Then describe your own closest relative.",
        modelAnswer:
          "My older sister, comfortably. We live in different countries now, but we have a standing video call every Sunday where we mostly complain about our respective jobs. She's the one person I can ring in a crisis at any hour, and she knows all my secrets — including the ones I'd pay her to forget.",
        weak: "My sister, we talk a lot.",
        improved:
          "Definitely my older sister. Although we live in different countries, we video-call every Sunday without fail, and she's the one I ring first whenever anything goes wrong — or right, actually. She knows absolutely everything about me.",
        expected: ["sister", "sunday", "call", "ring"],
      },
      {
        question: "Do you take after anyone in your family?",
        guidance:
          "Say who you resemble in looks and in character — they're often different people — and give one piece of evidence for each. Family vocabulary like 'takes after' and 'the spitting image' lifts the answer. Then trace your own inheritance.",
        modelAnswer:
          "In looks, my father — everyone says I'm the spitting image of him at my age, which is strange when I look at his old photos. In temperament I'm my mother's side entirely: we both leave rooms mid-sentence to fetch something and return having forgotten why. My brother got the patience gene instead.",
        weak: "People say I look like my dad.",
        improved:
          "Physically I take after my father — people say we're almost identical in his old photographs. Character-wise I'm more like my mother: talkative, curious, and hopeless at sitting still for long. My brother, meanwhile, is the calm one of the family.",
        expected: ["father", "mother", "look", "like"],
      },
      {
        question: "What did you and your family enjoy doing together when you were small?",
        guidance:
          "Choose one repeated ritual — Sunday lunches, camping trips, a board game that always ended in argument — and describe it with its sights and sounds. Past tenses throughout, plus one feeling to close. Retrieve your own family ritual now.",
        modelAnswer:
          "Saturday morning pancakes, which was my father's department entirely. He'd blast old soul music and flip the pancakes far too dramatically, and we were allowed one each while the radio argued with him. My mother dealt with the mess afterwards. I still can't hear that particular song without smelling melted butter.",
        weak: "We played games together, I remember.",
        improved:
          "Our ritual was Saturday morning pancakes. My father would put on old soul records and flip the pancakes far too dramatically, while my mother cleared up after everyone. I still associate those songs with the smell of breakfast.",
        expected: ["pancakes", "saturday", "father", "music"],
      },
      {
        question: "Does your family have any traditions you still keep up?",
        guidance:
          "Present one tradition that survives — a particular meal, a summer reunion, a superstition — and say who started it and why it has lasted. If it's fading, admit that honestly. Then present your family's own surviving tradition.",
        modelAnswer:
          "One stubborn one: every New Year we eat twelve grapes at midnight, one per chime, for luck. My grandmother brought it from her village, and even my sceptical uncle does it now, laughing. My cousins and I have carried it into our own homes, so it's outlived her by fifteen years and counting. Grapes everywhere, honestly.",
        weak: "We always have a big dinner together.",
        improved:
          "Yes, our strongest one is eating twelve grapes at midnight every New Year — a tradition my grandmother brought from her village. Even the sceptics in the family join in now, so it's still going strong.",
        expected: ["grapes", "grandmother", "year", "tradition"],
      },
      {
        question: "Do you ask your family for advice when you have a big decision to make?",
        guidance:
          "Say whose advice you seek and whose you avoid, with a reason for each, then give one real example — a job offer, a move — and what the advice achieved. Then describe your own family decision-making habits.",
        modelAnswer:
          "Always, though I'm picky about whose advice I take. My father interrogates decisions like a lawyer, which is useful but exhausting, so for the big ones I go to my aunt first. When I was offered the job in another city, she asked me one question — 'will you still want this at sixty?' — and honestly that settled it.",
        weak: "Sometimes, mainly from my mother.",
        improved:
          "Yes, though I'm careful whose advice I take. My father questions every decision thoroughly, so I save the biggest ones for my aunt, and her single question about a job offer once settled everything for me.",
        expected: ["advice", "aunt", "job", "question"],
      },
    ],
    vocabulary: [
      {
        word: "to take after",
        partOfSpeech: "phrasal verb",
        meaning: "To resemble a relative in looks or character.",
        example: "Everyone says I take after my mother, especially when I laugh.",
      },
      {
        word: "the spitting image",
        partOfSpeech: "phrase",
        meaning: "An exact likeness of someone.",
        example: "My son is the spitting image of his grandfather at that age.",
      },
      {
        word: "temperament",
        partOfSpeech: "noun",
        meaning: "A person's natural character.",
        example: "We share the same calm temperament, my father and I.",
      },
      {
        word: "to keep up",
        partOfSpeech: "phrasal verb",
        meaning: "To continue a tradition or habit.",
        example: "We've kept up the tradition of camping every August.",
      },
      {
        word: "sceptical",
        partOfSpeech: "adjective",
        meaning: "Doubting that something is true or worthwhile.",
        example: "My uncle is sceptical about horoscopes but reads his anyway.",
      },
      {
        word: "to settle it",
        partOfSpeech: "phrase",
        meaning: "To end doubt or disagreement about something.",
        example: "One question from my aunt settled the whole decision.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 7. Friends — second round: origins, common ground and keeping contact
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-friends-2",
    title: "Friends — second round",
    topic: "friends",
    domain: "society",
    difficulty: 2,
    proficiency: "intermediate",
    skill: "fluency",
    framing: "This time, let's dig a little deeper into your friendships.",
    questions: [
      {
        question: "How did you meet your closest friend?",
        guidance:
          "Tell the meeting as a tiny story with a place, a time and one small accident that connected you. Keep it to two or three sentences before saying why it stuck. Every good friendship story has an odd detail — find yours.",
        modelAnswer:
          "On a night train, would you believe. We were both nineteen, squeezed into the same compartment from Kraków to Prague, and she offered me a biscuit before she'd even learned my name. We talked until four in the morning. Ten years later she's still my first call, and we still call it the biscuit treaty.",
        weak: "At university, in first year.",
        improved:
          "We met by chance on a night train when we were nineteen. She offered me a biscuit before she even knew my name, we talked until four in the morning, and somehow we've stayed close ever since.",
        expected: ["train", "biscuit", "nineteen", "talked"],
      },
      {
        question: "What do you and your friends have in common?",
        guidance:
          "Move past 'we like the same things': name two or three genuine shared threads — humour, values, a sport — and admit one difference that balances the friendship. Specifics beat categories every time. Examine your own friendships now.",
        modelAnswer:
          "Our sense of humour, above everything — we find the same things unreasonably funny, usually at inappropriate moments. Most of us also hate small talk, which is possibly why we became close. The differences matter too: Sofia is fearless and I'm cautious, and somehow each of us thinks the other is the useful one.",
        weak: "We like the same music, mostly.",
        improved:
          "Mostly our sense of humour — the same things make us laugh at the same wrong moments. We also share a dislike of small talk. Our differences help too: my friend is fearless where I'm cautious, and that balances us.",
        expected: ["humour", "laugh", "different", "friend"],
      },
      {
        question: "Are you good at keeping in touch with friends who live far away?",
        guidance:
          "Be honest about your record — good, patchy, terrible — then explain your method or your failure: scheduled calls, voice notes, disappearing for months. One example with a named friend grounds it. Assess your own long-distance habits now.",
        modelAnswer:
          "Genuinely good, but only because I cheat: my friend Lena in Oslo and I have the same calendar reminder, first Sunday of the month, no exceptions. My other friendships survive on voice notes that take three listens to understand. The secret, I've decided, is treating distance like a minor scheduling problem rather than a tragedy.",
        weak: "Not really, I forget to reply.",
        improved:
          "I'm better than I used to be, honestly. My friend abroad and I have a fixed video call on the first Sunday of every month, and between those we exchange long, rambling voice notes that keep us close.",
        expected: ["call", "sunday", "voice", "notes"],
      },
      {
        question: "Have you ever become friends with someone you didn't like at first?",
        guidance:
          "A yes answer with a story works best: what your first impression was, what proved it wrong, and what the friendship looks like now. First impressions make a good hook. Recall your own case of being wrong about someone.",
        modelAnswer:
          "Yes — my now-friend Marco, who I dismissed as arrogant in week one because he barely spoke. Then a group project stranded us together at midnight before the deadline, and it turned out he'd been quietly carrying the whole team. He's still the quietest person I know, and now I read quiet differently, thanks to him.",
        weak: "Yes, one colleague, actually.",
        improved:
          "Yes, a colleague I initially dismissed as unfriendly because he rarely spoke. During a stressful project I discovered he'd been quietly doing half the work, and we've been close friends ever since that difficult week.",
        expected: ["quiet", "project", "friend", "dismiss"],
      },
      {
        question: "Do you think you'll still know your current friends in twenty years' time?",
        guidance:
          "This invites prediction, so hedge naturally — 'I'd be surprised if', 'I hope'. Name which friendships you're confident about and why, and acknowledge one that might fade without drama. Then predict your own social future.",
        modelAnswer:
          "The core four, almost certainly — we've already survived three countries, two weddings and one unfortunate shared flat, so twenty years feels survivable. I'd expect the wider circle to reshuffle naturally; some friendships are for a season and that's fine. The real test, my gran says, is whether you can sit in silence with someone, and we've passed that.",
        weak: "I hope so, the close ones.",
        improved:
          "My closest friends, yes — we've survived moves, weddings and one disastrous shared flat, so I'm confident about us. The wider circle will probably change, and I think that's natural over twenty years, to be honest.",
        expected: ["twenty", "friends", "flat", "circle"],
      },
    ],
    vocabulary: [
      {
        word: "by chance",
        partOfSpeech: "phrase",
        meaning: "Accidentally, without being planned.",
        example: "We met by chance in a queue and talked for an hour.",
      },
      {
        word: "to have something in common",
        partOfSpeech: "phrase",
        meaning: "To share interests or characteristics.",
        example: "We had nothing in common on paper, yet we never run out of topics.",
      },
      {
        word: "to keep in touch",
        partOfSpeech: "phrase",
        meaning: "To maintain contact over time or distance.",
        example: "We keep in touch through ridiculous voice notes every week.",
      },
      {
        word: "first impression",
        partOfSpeech: "noun",
        meaning: "The opinion you form of someone when you first meet them.",
        example: "My first impression of him was completely wrong.",
      },
      {
        word: "to dismiss",
        partOfSpeech: "verb",
        meaning: "To decide someone or something is not worth considering.",
        example: "I dismissed her as shy until I saw her on stage.",
      },
      {
        word: "to reshuffle",
        partOfSpeech: "verb",
        meaning: "To rearrange, here the make-up of a group.",
        example: "Every few years my friendship group reshuffles and someone new joins.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 8. Hobbies — second round: origins, costs and the active-versus-restful split
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-hobbies-2",
    title: "Hobbies — second round",
    topic: "hobbies",
    domain: "culture",
    difficulty: 1,
    proficiency: "foundation",
    skill: "lexical",
    framing: "We'll come back to your hobbies and free-time interests now.",
    questions: [
      {
        question: "How did you first get into your main hobby?",
        guidance:
          "Trace the beginning: who or what introduced you, when, and the moment you knew you were hooked. Origin stories are easy to tell and easy to develop. Then tell the origin story of your own main interest.",
        modelAnswer:
          "Through my grandmother's sewing box, really. I was eight and ill one winter, and she taught me a simple stitch to keep me quiet — that's literally how it started. By spring I was making terrible cushions for everyone. Now I quilt properly, and every project still begins with her old tin of needles on the table beside me.",
        weak: "My father taught me to fish.",
        improved:
          "My father taught me to fish when I was about eight, on holiday by a lake. I was hooked immediately, literally and otherwise, and we've fished together most summers since then. It's still the thing we do whenever I visit.",
        expected: ["taught", "eight", "started", "making"],
      },
      {
        question: "Which of your hobbies have you kept up the longest?",
        guidance:
          "Name the hobby and count the years, then say what has kept it alive through life's changes — moves, exams, work. A hobby that survives a busy decade says something about you. Now measure your own longest-lasting interest.",
        modelAnswer:
          "Reading has lasted since childhood, but the longest deliberate hobby is chess — twenty-two years now. It survived because it needs almost nothing: a board travels anywhere, and nowadays a phone is enough. University, two house shares and one very demanding job couldn't kill it. My rating is mediocre, mind you, but the habit is unbreakable.",
        weak: "Reading, since I was small.",
        improved:
          "Chess, without question — about twenty-two years. It has survived every life change because all I need is a phone or a small board, and even my busiest working weeks haven't broken the habit after all these years.",
        expected: ["chess", "years", "survived", "board"],
      },
      {
        question: "Do your hobbies cost you very much money?",
        guidance:
          "Be specific about money: what the hobby costs per year, the biggest single purchase, anything you regret buying. Numbers make an answer concrete and confident. Then do the honest accounts for your own hobby.",
        modelAnswer:
          "More than I admit to my accountant sister. Fabric quietly adds up — I keep a spreadsheet, which tells me quilting cost me about two hundred last year, plus a catastrophic impulse buy: a vintage machine I couldn't resist that has never once worked. I refuse to calculate that as a loss; I call it a display piece.",
        weak: "A bit, for materials mostly.",
        improved:
          "Honestly, yes — the materials add up to a couple of hundred a year, and I once bought an expensive vintage machine on impulse that has never actually worked. I tell people it's a display piece now.",
        expected: ["hundred", "machine", "impulse", "materials"],
      },
      {
        question: "Would you recommend your main hobby to a beginner?",
        guidance:
          "Give a clear verdict, then the honest case for and against: what a beginner needs to start, how steep the learning curve is, who it suits. Recommending is a persuasion task — sell it, warts included. Now sell your own hobby.",
        modelAnswer:
          "Yes, but with a warning label. Quilting is genuinely meditative and you can make your first patchwork cushion in a weekend, which feels wonderful. The trap is fabric shopping — it becomes a second hobby of its own. I'd say: start with scraps, borrow a machine, and finish one small thing before believing you need a whole studio.",
        weak: "Yes, it's relaxing and quite cheap.",
        improved:
          "I would, with one warning. The craft itself is meditative and a first project can be finished in a weekend — but shopping for materials becomes an expensive habit of its own, so my advice is to start small.",
        expected: ["warning", "weekend", "start", "meditative"],
      },
      {
        question: "Do you prefer hobbies that are active or ones that help you relax?",
        guidance:
          "Choose one, or admit you need both at different moments, but justify it with what the hobby does for your head or body. One contrast between an active and a restful week makes it vivid. Compare your own two modes now.",
        modelAnswer:
          "Both, but at different doses — hear me out. If I've been sitting in meetings all day, my brain begs for a run and I feel like a new person afterwards. If the week has been frantic and noisy, quilting in silence resets me instead. The hobby chooses me, really, depending on which tank is empty.",
        weak: "Relaxing ones, after a busy week.",
        improved:
          "It depends on the week, honestly. After a day of sitting still I need something active like a run, but after a noisy, frantic week I want a quiet hobby that slows my brain down.",
        expected: ["week", "run", "quiet", "active"],
      },
    ],
    vocabulary: [
      {
        word: "to get into",
        partOfSpeech: "phrasal verb",
        meaning: "To become interested in an activity.",
        example: "I got into birdwatching during lockdown and never stopped.",
      },
      {
        word: "hooked",
        partOfSpeech: "adjective (informal)",
        meaning: "Unable to stop doing something enjoyable.",
        example: "One lesson was enough — I was completely hooked.",
      },
      {
        word: "impulse buy",
        partOfSpeech: "noun",
        meaning: "Something bought suddenly without planning.",
        example: "The vintage sewing machine was an impulse buy I slightly regret.",
      },
      {
        word: "meditative",
        partOfSpeech: "adjective",
        meaning: "Calming and good for concentrating the mind.",
        example: "I find knitting deeply meditative after a loud day.",
      },
      {
        word: "learning curve",
        partOfSpeech: "noun",
        meaning: "The rate at which a skill is learned.",
        example: "The learning curve is steep for the first month, then it flattens.",
      },
      {
        word: "scrap",
        partOfSpeech: "noun",
        meaning: "A small leftover piece of material.",
        example: "Beginners should practise with scraps before buying expensive fabric.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 9. Food — second round: cooking, tastes and skipped lunches
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-food-2",
    title: "Food — second round",
    topic: "food",
    domain: "everyday",
    difficulty: 2,
    proficiency: "intermediate",
    skill: "lexical",
    framing: "Let's return to the topic of food and cooking.",
    questions: [
      {
        question: "Are you a good cook?",
        guidance:
          "Answer with confidence either way, then prove it: your signature dish, the last thing you cooked, or the disaster that taught you. Humour helps in food answers. Then judge your own cooking honestly and say why.",
        modelAnswer:
          "I'm a solid three dishes, let's put it that way — and all three are curries. Beyond that menu I'm a hazard. My flatmate still mentions the rice incident, where I confidently produced something closer to wallpaper paste. But my lentil curry has been requested at three separate leaving parties, which I consider proof enough.",
        weak: "Not really, I cook simple things.",
        improved:
          "I'd say I cook competently rather than brilliantly. I have a few reliable dishes — mostly curries — that people genuinely ask for, although my flatmate never lets me forget the time I ruined a pot of rice.",
        expected: ["cook", "dishes", "curry", "rice"],
      },
      {
        question: "Did you learn to cook as a child?",
        guidance:
          "Say who, if anyone, taught you and what you were allowed to do in the kitchen — stirring, fetching, watching. If you learned late, say what finally forced you to learn. Then recall your own kitchen childhood.",
        modelAnswer:
          "Only by watching, never by doing — my mother's kitchen had one cook and it wasn't me. I could describe her technique for flatbreads perfectly, but I didn't actually fry one until university, when homesickness did the teaching. My first attempt was charcoal; my twentieth was almost hers. Almost.",
        weak: "No, I only learned recently.",
        improved:
          "Not really — I only watched, because my mother never let anyone else into her kitchen. I finally taught myself her flatbread recipe at university, out of homesickness, and it took about twenty attempts to get close.",
        expected: ["mother", "kitchen", "flatbread", "university"],
      },
      {
        question: "Do you prefer sweet or savoury food?",
        guidance:
          "Pick a side and defend it with examples — breakfast choices, your weakness, what you can't resist. Conceding one exception ('except my aunt's cake') adds balance. Then take your own side with your own evidence.",
        modelAnswer:
          "Savoury, decisively — I'd trade any dessert for an extra portion of chips. Sugar is fine, but it's finished in seconds and then it's gone, whereas good bread with cheese is a whole experience. The one exception is my aunt's lemon cake, which I'd defend with my life. She knows it, and she bakes it when she wants something.",
        weak: "Savoury, definitely. I don't like cakes.",
        improved:
          "Savoury, without hesitation. A good sandwich or chips with cheese satisfies me far longer than any dessert, though I make one exception for my aunt's lemon cake, which is honestly dangerous whenever she brings it round.",
        expected: ["savoury", "chips", "dessert", "cake"],
      },
      {
        question: "Is there any food you really can't stand?",
        guidance:
          "Name the food and be vivid about why — texture, smell, a bad memory — because 'I don't like it' explains nothing. Distinguish taste from trauma if you can. Then confess your own forbidden food and its reason.",
        modelAnswer:
          "Coriander, and I'm sorry because everyone loves it apparently. It tastes soapy to me — a known genetic thing, before you judge — and one leaf can hijack an entire bowl of soup. I've tried hiding it from waiters, picking it out, everything. My friends now order for me with the phrase 'no coriander' attached to my name.",
        weak: "Mushrooms, I hate the texture.",
        improved:
          "Mushrooms are my limit. It's completely a texture thing — the slipperiness ruins a dish for me even when the flavour is fine — so I've politely picked them out of meals since I was a child.",
        expected: ["texture", "mushrooms", "dish", "flavour"],
      },
      {
        question: "Do you ever skip meals when you're busy?",
        guidance:
          "Answer honestly — yes, no, sometimes — then explain which meal goes first and what triggers the skipping: deadlines, travel, a bad habit. The consequences make a good closing line. Then examine your own eating-on-busy-days pattern.",
        modelAnswer:
          "Lunch is the casualty, always. When a deadline lands, eating midday feels like an interruption, so I tell myself a coffee counts. By four I'm shaky and grumpy and raiding the biscuit tin, which is obviously worse. My sister now texts me 'EAT' on my busiest project days, and I'm embarrassed to say it's genuinely effective.",
        weak: "Sometimes lunch, if work is busy.",
        improved:
          "Yes, lunch is the one I sacrifice when a deadline lands. I convince myself a coffee is enough, then end up shaky and raiding the biscuit tin by four. My sister actually texts me reminders on my busiest days.",
        expected: ["lunch", "coffee", "deadline", "busy"],
      },
    ],
    vocabulary: [
      {
        word: "signature dish",
        partOfSpeech: "noun",
        meaning: "The dish a person cooks best and is known for.",
        example: "Her signature dish is a lentil curry that everyone requests.",
      },
      {
        word: "savoury",
        partOfSpeech: "adjective",
        meaning: "Salty or spicy rather than sweet.",
        example: "I'd choose a savoury breakfast over pancakes any day.",
      },
      {
        word: "texture",
        partOfSpeech: "noun",
        meaning: "How food feels in the mouth.",
        example: "I like the flavour of mushrooms but not the texture.",
      },
      {
        word: "casualty",
        partOfSpeech: "noun",
        meaning: "The thing that suffers when plans go wrong.",
        example: "Lunch is always the casualty when I'm busy.",
      },
      {
        word: "to raid",
        partOfSpeech: "verb (informal)",
        meaning: "To search a place for food to eat.",
        example: "I raided the fridge at midnight and found yesterday's curry.",
      },
      {
        word: "to hijack",
        partOfSpeech: "verb",
        meaning: "To take something over completely.",
        example: "One strong spice can hijack an entire dish if you're not careful.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 10. Travel — second round: planning style, solo trips, journeys and disasters
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-travel-2",
    title: "Travel — second round",
    topic: "travel",
    domain: "culture",
    difficulty: 3,
    proficiency: "intermediate",
    skill: "development",
    framing: "Now let's explore your travel habits in a bit more depth.",
    questions: [
      {
        question: "Do you plan your trips in detail or decide things as you go?",
        guidance:
          "Declare your travel personality, then show it in action on one real trip — a spreadsheet, a notebook, or landing with nothing booked. What went right or wrong proves the choice. Then diagnose your own planning style with a real example.",
        modelAnswer:
          "Painfully detailed, and I own it. Before our trip to Georgia I had a colour-coded document — my partner laughed until day three, when my spreadsheet found us the only guesthouse with heating. But I've learned to leave one day deliberately empty, because my favourite memory of that trip, an unexpected supra feast, came from a day I'd left blank on purpose.",
        weak: "I plan everything before I go.",
        improved:
          "I plan in detail, I admit. Before one trip I made a colour-coded itinerary, and it saved us more than once. That said, I now deliberately leave one free day for whatever we discover on the spot.",
        expected: ["plan", "detail", "itinerary", "day"],
      },
      {
        question: "Have you ever travelled on your own?",
        guidance:
          "If yes, say where and what surprised you about solo travel — meals alone, decisions alone, meeting strangers. If no, say whether you'd dare and what worries you. Either way, be concrete. Then tell your own solo story or your solo fears.",
        modelAnswer:
          "Twice, and the first was terrifying for about an hour. I went to Lisbon for a week alone and the silence at dinner nearly defeated me — I took a book everywhere as a shield. But by day three I was chatting to a couple from Seoul in a tram queue and rewriting my plans on a whim. I came home oddly more confident.",
        weak: "Yes, once, to another city.",
        improved:
          "Yes, I spent a week in Lisbon by myself. Dinner alone felt strange at first, so I carried a book everywhere, but by the third day I was happily changing my plans on a whim and chatting to strangers in queues.",
        expected: ["alone", "lisbon", "book", "plans"],
      },
      {
        question: "What's the longest journey you've ever taken?",
        guidance:
          "Name the route and the hours or days it took, then focus on how you survived or suffered — the food, the sleep, the fellow passengers. Journey stories live in the details. Then recount your own longest journey's details.",
        modelAnswer:
          "Thirty-one hours, door to door, from my city to my cousin's wedding in New Zealand. Two flights, one very long layover in Singapore, and a final hop on a plane small enough to count the rivets. I watched four films, slept badly across two seats, and arrived smelling like an airport. Worth it completely — she cried when she saw us at arrivals.",
        weak: "A long flight, about ten hours.",
        improved:
          "Thirty-one hours door to door, flying to a cousin's wedding in New Zealand — two flights and a long layover in Singapore. I watched four films and slept badly, but seeing her face at arrivals made every hour worth it.",
        expected: ["hours", "flights", "layover", "slept"],
      },
      {
        question: "Do you prefer travelling by plane, train or car?",
        guidance:
          "Compare honestly: speed against scenery, airports against stations. Choose your favourite with reasons, and give one journey where that mode won. Admitting the downside of your favourite adds balance. Then argue for your own favourite way to travel.",
        modelAnswer:
          "Trains, and it's not close. You arrive in the middle of the city instead of an hour outside it, you can walk around, and the window does the entertaining. The overnight train I took through the mountains last spring was worth ten flights. Planes win over water, obviously, and cars win when the stations run out — but my heart books the train.",
        weak: "Trains, they're more comfortable.",
        improved:
          "Trains, comfortably. They deliver you to the city centre, you can walk around on board, and the scenery does the entertaining. Planes are faster for long distances, but for anything under six hours I'll always choose the rails.",
        expected: ["trains", "scenery", "city", "planes"],
      },
      {
        question: "Have you ever had a trip that went badly wrong?",
        guidance:
          "Tell the disaster in three beats: what you planned, what happened instead, and how it ended. Keep your tone light — travel disasters are comedy a year later. Then dig up your own cancelled train or lost-booking story.",
        modelAnswer:
          "Our ferry to a Greek island was cancelled due to a strike, and the next sailing was two days later — in high summer. We slept two nights on an airport bench, shared one phone charger with a family from Poland, and finally arrived to find our hotel had given away the room. We laugh about it now; we didn't laugh then.",
        weak: "Yes, a cancelled flight once.",
        improved:
          "Yes — a ferry strike left us stranded for two days in high summer. We slept on airport benches and arrived to find our hotel had given our room away. It's a funny story now, though it wasn't at the time.",
        expected: ["cancelled", "ferry", "hotel", "days"],
      },
    ],
    vocabulary: [
      {
        word: "itinerary",
        partOfSpeech: "noun",
        meaning: "A detailed plan of a journey.",
        example: "I keep a printed itinerary in case my phone dies on the road.",
      },
      {
        word: "layover",
        partOfSpeech: "noun",
        meaning: "A wait between connecting flights.",
        example: "We had an eight-hour layover in Singapore and slept in the airport.",
      },
      {
        word: "on a whim",
        partOfSpeech: "phrase",
        meaning: "Suddenly, without planning.",
        example: "On a whim, we got off the train one stop early and found the best market.",
      },
      {
        word: "to be stranded",
        partOfSpeech: "phrase",
        meaning: "Stuck somewhere unable to leave.",
        example: "The strike stranded hundreds of travellers at the port.",
      },
      {
        word: "sailing",
        partOfSpeech: "noun",
        meaning: "A scheduled journey by ship or ferry.",
        example: "The next sailing isn't until Thursday morning, I'm afraid.",
      },
      {
        word: "scenery",
        partOfSpeech: "noun",
        meaning: "The natural things you can see when travelling.",
        example: "Train travel is slower, but the scenery makes up for it.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 11. Technology — second round: screens, losses, reactions and essentials
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-technology-2",
    title: "Technology — second round",
    topic: "technology",
    domain: "technology",
    difficulty: 3,
    proficiency: "intermediate",
    skill: "grammar",
    framing: "We'll look again at technology, this time at your habits with it.",
    questions: [
      {
        question: "Do you think you spend too much time looking at screens?",
        guidance:
          "Give an honest self-audit: your guess of daily hours, which screen eats them, and whether you'd call it too much. A specific number is more convincing than 'a lot'. Then audit your own screen hours honestly.",
        modelAnswer:
          "Almost certainly, yes. The phone tells me six and a half hours a day, which I refuse to believe until it shows me the graph. Work is maybe three of those; the rest is scrolling in bed and pretending it's relaxation. I've started charging the phone in the kitchen overnight, which sounds small but has honestly changed my mornings.",
        weak: "Probably, like everyone these days.",
        improved:
          "Yes, almost certainly. My phone reports six and a half hours a day, and although work accounts for half of that, the rest is just scrolling in bed. Charging it in the kitchen overnight has helped a little.",
        expected: ["hours", "phone", "scrolling", "bed"],
      },
      {
        question: "How do you feel when you can't find your phone?",
        guidance:
          "Name the feeling precisely — panic, nakedness, relief even — then describe the ritual of the search and what the phone carries that makes it matter. Honest exaggeration is welcome here. Then examine your own lost-phone feelings.",
        modelAnswer:
          "Briefly unhinged, I'm ashamed to say. I check the same three pockets about four times each, as if the phone might have materialised. Once, it slipped down the sofa, and in twenty minutes of searching I'd checked the fridge and the car. The strange part is that I hardly use it for calls — it's the photos and the tickets that make it feel like a lifeline.",
        weak: "A bit panicked, to be honest.",
        improved:
          "Honestly, a little panicked. I search the same pockets repeatedly, as if the phone might reappear, and I once checked the fridge during a hunt. It matters less for calls than for the photos and tickets stored on it.",
        expected: ["panic", "pockets", "phone", "photos"],
      },
      {
        question: "Have you ever broken or lost a device you loved?",
        guidance:
          "Tell the story of the device and its end — the drop, the wash, the theft — with the moment of realisation. What you lost with it, photos or playlists, gives it feeling. Then mourn your own device with the same detail.",
        modelAnswer:
          "I put my first proper camera through a washing machine. Whole wash cycle, fifty minutes, and I only realised when I heard it clunking. It had two years of photos on it, and this was before automatic backups, so everything vanished. My mother still says I cried more for that camera than for our first car, which is unfair. Mostly.",
        weak: "Yes, I dropped my phone once.",
        improved:
          "Yes — my first camera went through a full washing cycle before I noticed the clunking. Two years of photos vanished, because this was before cloud backups, and I genuinely grieved for that little machine for weeks.",
        expected: ["camera", "photos", "washing", "vanished"],
      },
      {
        question: "Does new technology confuse you or excite you?",
        guidance:
          "Choose your reaction, then test it against one gadget or app you welcomed or resisted — smart speakers, AI assistants, contactless payments. Age jokes are optional; honesty compulsory. Then judge your own reaction to one new technology.",
        modelAnswer:
          "Excites me, then confuses me about a week later — that's the honest sequence. I bought a smart speaker on day one and spent a weekend automating the lights like a film villain. Now it misunderstands me whenever the kettle's on. I think the excitement is real; it's just that my patience is shorter than my curiosity, most days.",
        weak: "It excites me, mostly, I suppose.",
        improved:
          "A bit of both, honestly. I'm curious enough to buy things early — my smart speaker is proof — but my patience runs out when they misbehave, so excitement usually wins for about a week before I give up on it.",
        expected: ["excite", "smart", "speaker", "patience"],
      },
      {
        question: "Are there any apps you'd find hard to live without?",
        guidance:
          "Name the app and its job, then go deeper: what it replaced — paper maps, the radio, the wallet — and one moment it saved you. Defending a single app is stronger than listing five. Then plead the case for your own essential app.",
        modelAnswer:
          "The maps app, and I say that as someone who used to be proud of my sense of direction. It's replaced paper maps, arguments at junctions, and the phrase 'we're not lost, we're exploring'. Last year it steered me around a flooded road at midnight in the mountains. My grandfather would call this dependence; I call it a fair swap for never being lost.",
        weak: "Maps, definitely — I'd be lost without it.",
        improved:
          "The maps app, without question. It has replaced paper maps entirely and even saved me from a flooded mountain road at midnight. My grandfather calls it dependence, but I'd happily trade my sense of direction for never being lost again.",
        expected: ["maps", "replaced", "direction", "lost"],
      },
    ],
    vocabulary: [
      {
        word: "to scroll",
        partOfSpeech: "verb",
        meaning: "To move text on a screen up or down with your finger.",
        example: "I scroll through the news while my coffee brews, which I'm trying to stop.",
      },
      {
        word: "to back up",
        partOfSpeech: "phrasal verb",
        meaning: "To make a copy of data in case of loss.",
        example: "Back your photos up to the cloud before you travel.",
      },
      {
        word: "to materialise",
        partOfSpeech: "verb",
        meaning: "To appear suddenly, as if by magic.",
        example: "I checked my pockets again, hoping the ticket would materialise.",
      },
      {
        word: "gadget",
        partOfSpeech: "noun",
        meaning: "A small device that does something clever.",
        example: "My kitchen drawer is full of gadgets I've used exactly once.",
      },
      {
        word: "contactless",
        partOfSpeech: "adjective",
        meaning: "(Of paying) by tapping a card or phone instead of cash.",
        example: "I barely carry cash now that every shop takes contactless.",
      },
      {
        word: "dependence",
        partOfSpeech: "noun",
        meaning: "The state of needing something.",
        example: "My dependence on the maps app grows with every journey.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 12. Education — second round: teachers, exams, trouble and online learning
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-education-2",
    title: "Education — second round",
    topic: "education",
    domain: "education",
    difficulty: 3,
    proficiency: "intermediate",
    skill: "interaction",
    framing: "Let's move on to education and your memories of it.",
    questions: [
      {
        question: "Which teacher from your school days do you remember best?",
        guidance:
          "Name the subject and one identifying habit — the catchphrase, the tie, the way they said your name — then say what they did for you. Gratitude or grievance both work. Then summon your own most memorable teacher into the answer.",
        modelAnswer:
          "Mr Onwualu, my physics teacher, who marked in green pen because 'red wounds and green grows'. He stayed every Thursday to help me rebuild my confidence after I failed a test in front of the class. I passed because of those Thursdays, and now whenever I fix something I hear his voice explaining the problem backwards. He retired last year; I wrote to him.",
        weak: "My maths teacher, she was kind.",
        improved:
          "My maths teacher, without a doubt. She stayed behind every Thursday to rebuild my confidence after I failed a test publicly, and I passed the final exam largely because of her patience that whole year, honestly.",
        expected: ["teacher", "thursday", "confidence", "failed"],
      },
      {
        question: "Do you think exams are the best way to measure a student's ability?",
        guidance:
          "Take a position, then weigh one argument on each side — memory against understanding, stress against fairness — before landing somewhere specific. Opinion questions reward structure. Then construct your own argument for or against exams.",
        modelAnswer:
          "Honestly, no — though I admit nothing better has come along. Exams measure how you perform on one hot afternoon, not how you think across a year. My coursework marks told the truth about me; my exam marks depended on sleep and luck. If I ran a school, I'd blend the two, because throwing away exams entirely would just create a different unfairness.",
        weak: "No, they're too stressful, I think.",
        improved:
          "Not really, no. Exams measure performance on one particular day rather than a year of thinking, and my coursework always reflected my ability more honestly. Still, I'd combine the two rather than abolish exams altogether.",
        expected: ["exams", "measure", "coursework", "day"],
      },
      {
        question: "Did you ever get into trouble at school?",
        guidance:
          "Confess one small crime and tell it properly: what you did, who caught you, the punishment, the lesson. Minor mischief is charming; anything serious won't fit the register. Then confess your own schoolgirl or schoolboy offence.",
        modelAnswer:
          "Once, spectacularly. A friend and I sold homemade biscuits in the playground, undercutting the tuck shop, and business was excellent for three days. Then the head of year confiscated our tin — citing 'unlicensed trading', which still makes me laugh. My mother was summoned; I got a stern chat and, weirdly, a compliment for the maths of it. No regrets, honestly.",
        weak: "Sometimes, for talking in class.",
        improved:
          "Once, memorably: a friend and I sold homemade biscuits in the playground until the head of year confiscated our tin. My mother was summoned for a stern chat, though I quietly kept the profits anyway.",
        expected: ["biscuits", "playground", "confiscated", "mother"],
      },
      {
        question: "Do you think learning online is as effective as learning face to face?",
        guidance:
          "Compare the two honestly: what online does well — pace, replaying, comfort — against what it loses — the teacher's glance, corridor conversations. Land on a verdict with a reason. Then argue from your own experience of both.",
        modelAnswer:
          "For facts, nearly; for people, not yet. I did an online course during the closures and could rewind the teacher, which was genuinely magic. But nobody noticed when I was struggling, because struggling looks like a switched-off camera. Face to face, someone sees your face and asks one question at the right moment. Screens are getting closer, but they can't see your face thinking.",
        weak: "No, online is not the same.",
        improved:
          "Almost, but not quite. Online courses let you rewind and learn at your own pace, which I loved, yet nobody notices when you're struggling behind a camera. Learning face to face means someone reads your face and asks the right question in time.",
        expected: ["online", "rewind", "camera", "face"],
      },
      {
        question: "Is education valued highly in your country?",
        guidance:
          "Say yes, no or 'yes on paper', then explain what that value looks like in practice — family pressure, investment, respect for teachers — and where it falls short. A concrete example of the value or the gap carries it. Then describe your own country's attitude.",
        modelAnswer:
          "Intensely, to the point of pain sometimes. Families save for decades for tuition; a teacher is addressed like a minor dignitary. My grandmother sold her wedding bracelet to cover my mother's exam fees, and nobody in the family considers that unusual. The gap is that we value certificates a touch more than curiosity, which I notice now that I'm learning for pleasure.",
        weak: "Yes, very much, especially families.",
        improved:
          "Extremely highly, sometimes painfully so. Families save for decades to pay for tuition, and teachers are treated with real respect. The shortcoming is that certificates often matter more than genuine curiosity, which I've only noticed recently.",
        expected: ["families", "tuition", "teachers", "certificates"],
      },
    ],
    vocabulary: [
      {
        word: "to rebuild confidence",
        partOfSpeech: "phrase",
        meaning: "To restore belief in yourself after a setback.",
        example: "One kind teacher helped me rebuild my confidence after the failed test.",
      },
      {
        word: "coursework",
        partOfSpeech: "noun",
        meaning: "Work done during a course that counts towards the final mark.",
        example: "My coursework grades were always steadier than my exam results.",
      },
      {
        word: "tuck shop",
        partOfSpeech: "noun (UK)",
        meaning: "A small shop selling sweets and snacks at a school.",
        example: "We'd spend our pocket money at the tuck shop every break time.",
      },
      {
        word: "to confiscate",
        partOfSpeech: "verb",
        meaning: "To take something away officially as a punishment.",
        example: "The teacher confiscated our paper aeroplanes before the lesson started.",
      },
      {
        word: "to fall short",
        partOfSpeech: "phrase",
        meaning: "To fail to reach a standard.",
        example: "The funding falls short of what rural schools actually need.",
      },
      {
        word: "curiosity",
        partOfSpeech: "noun",
        meaning: "The desire to learn and know things.",
        example: "Good exams should reward curiosity, not just memory.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 13. Daily routines — second round: wake-up, wind-down, weekends and commutes
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-daily-routines-2",
    title: "Daily routines — second round",
    topic: "daily-routines",
    domain: "everyday",
    difficulty: 1,
    proficiency: "foundation",
    skill: "grammar",
    framing: "This time let's walk through your everyday routine.",
    questions: [
      {
        question: "What's the first thing you do when you wake up?",
        guidance:
          "Confess the true first action — checking the phone, opening a window, hitting snooze — then say why it's become a habit and how it shapes the start of your day. Present simple carries routines. Then confess your own first move.",
        modelAnswer:
          "I'd love to say stretching, but it's the phone, I'm afraid. I reach for it before I've properly opened my eyes, which I know is terrible — I read somewhere that your brain shouldn't meet the internet before daylight. On good weeks I open the curtains first and leave the phone charging, and those mornings genuinely feel twice as calm.",
        weak: "Check my phone, like everyone.",
        improved:
          "Honestly, I check my phone before I've even opened the curtains, though I know it's a bad habit. On my better mornings I leave it charging and open the window instead, and the day starts much calmer.",
        expected: ["phone", "curtains", "morning", "check"],
      },
      {
        question: "What's usually the last thing you do before you go to bed?",
        guidance:
          "Describe your wind-down in its real order — washing up, a book, one last scroll — and pick out the item that actually sends you to sleep. Small truthful details beat an invented perfect routine. Then walk through your own bedtime sequence.",
        modelAnswer:
          "The same little ceremony for years: I write tomorrow's three most important tasks on a paper card, then read exactly ten pages of whatever novel is going. The card clears my head and the pages tell my body it's night. On the days I skip it, I lie there composing to-do lists in the dark, which proves it works.",
        weak: "Read a few pages, usually.",
        improved:
          "I follow the same small ceremony: I write tomorrow's three main tasks on a card, then read exactly ten pages of my novel. If I skip it, I lie in the dark making lists, so it clearly works.",
        expected: ["tasks", "pages", "card", "read"],
      },
      {
        question: "Are your weekends very different from your weekdays?",
        guidance:
          "Compare the two rhythms — wake-up times, meals, clothes, mood — and pick the one difference that matters most to you. 'Quite different' needs a because. Then measure your own weekday-to-weekend change honestly.",
        modelAnswer:
          "Completely different creatures, my weekdays and weekends. Monday to Friday is an appointment calendar; Saturday morning is mine until noon, and I defend it fiercely — coffee slowly, radio on, no shoes until lunchtime. Sunday evenings dip back towards the week's rhythm, so I cook something slow to soften the landing. The contrast is what keeps both bearable, honestly.",
        weak: "Yes, I rest more at weekends.",
        improved:
          "Very different, yes. Weekdays run on a strict schedule, while Saturday morning belongs entirely to me — slow coffee, the radio, no shoes until lunch. Sunday evening starts tilting back towards routine, though, so the contrast never lasts long.",
        expected: ["weekdays", "saturday", "coffee", "routine"],
      },
      {
        question: "Do you make a plan for your day or just see what happens?",
        guidance:
          "Say which type you are, then show a real day that went to plan — or gloriously didn't. A to-do list app, a paper diary or pure improvisation: describe your actual tool. Then defend your own planning personality.",
        modelAnswer:
          "I plan the bones and improvise the rest. Every evening I write five items on a paper list — never an app, apps forgive too easily — and I manage three of them on a good day. The unplanned gaps are where the good things live, honestly: the long call with my mother, the sudden walk. Plans for structure, accidents for flavour.",
        weak: "I write a list, usually.",
        improved:
          "A bit of both. I write five things on a paper list each evening and manage about three, but I leave gaps for whatever the day brings. The list gives structure; the unplanned parts make it enjoyable.",
        expected: ["list", "plan", "paper", "three"],
      },
      {
        question: "How do you normally spend your journey to work or school?",
        guidance:
          "Paint the commute: the transport, the crowd, and above all what you do inside it — podcast, window, nap, dread. Time and one sensory detail make it real. Then describe your own journey's sounds and habits.",
        modelAnswer:
          "Twenty minutes on the metro, one change at Central, and I know every tile of that station. I listen to the same podcast series — comedy, always, because mornings need rescuing — and I've learned to stand in the exact spot where the doors open. On the days I forget my headphones, those twenty minutes feel like a small exile.",
        weak: "I listen to music on the bus.",
        improved:
          "My commute is twenty minutes on the metro, and I spend it listening to comedy podcasts — mornings need rescuing. I've even learned which exact spot the doors open at, and forgetting my headphones ruins the whole journey.",
        expected: ["metro", "podcast", "minutes", "headphones"],
      },
    ],
    vocabulary: [
      {
        word: "to hit snooze",
        partOfSpeech: "phrase (informal)",
        meaning: "To press the button that delays the alarm.",
        example: "I hit snooze three times before any part of me is awake.",
      },
      {
        word: "wind-down",
        partOfSpeech: "noun",
        meaning: "The relaxing period at the end of a day.",
        example: "My wind-down starts with the kettle and ends with ten pages of a novel.",
      },
      {
        word: "to defend",
        partOfSpeech: "verb",
        meaning: "To protect something from being taken away.",
        example: "I defend my Saturday mornings fiercely — no plans before noon.",
      },
      {
        word: "to-do list",
        partOfSpeech: "noun",
        meaning: "A list of tasks to complete.",
        example: "My to-do list never shrinks, but at least it's honest.",
      },
      {
        word: "improvisation",
        partOfSpeech: "noun",
        meaning: "Doing something without preparation or a plan.",
        example: "Cooking in my house is pure improvisation with whatever's in the fridge.",
      },
      {
        word: "exile",
        partOfSpeech: "noun",
        meaning: "Being sent away from somewhere you want to be (humorous here).",
        example: "Without my headphones, the bus is a twenty-minute exile.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 14. Shopping — second round: enjoyments, second-hand finds and buyer's remorse
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-shopping-2",
    title: "Shopping — second round",
    topic: "shopping",
    domain: "economics",
    difficulty: 2,
    proficiency: "intermediate",
    skill: "fluency",
    framing: "Let's come back to shopping and how you spend your money.",
    questions: [
      {
        question: "Do you enjoy shopping, or do you find it a chore?",
        guidance:
          "Split the answer by shopping type if that's the truth — food shopping versus clothes, for example — and say which part you'd happily outsource. One specific dread or delight seals it. Then sort your own feelings about shopping.",
        modelAnswer:
          "Food shopping yes, everything else is a duty. I'll happily spend an hour in a market choosing tomatoes, and I know my local shop's layout like my own kitchen. But clothes shopping defeats me — the changing rooms, the mirrors, the lighting designed by someone with grudges. I buy jeans online in bulk and return most of them like a coward.",
        weak: "I like shopping, mostly for food.",
        improved:
          "It depends what I'm buying. I enjoy food shopping — choosing vegetables in the market is genuinely relaxing — but honestly, clothes shopping defeats me, so I order jeans online in batches and return whatever doesn't fit.",
        expected: ["food", "clothes", "market", "online"],
      },
      {
        question: "Do you ever buy second-hand things?",
        guidance:
          "Say yes or no with your reason, then bring in one item — a jacket, a bicycle, a bookshelf — and its story. Condition, price and character are the vocabulary of this answer. Then tell your own second-hand story.",
        modelAnswer:
          "Constantly — my flat is basically a museum of other people's pasts. My proudest find is a tweed coat for the price of a sandwich; it had a cinema ticket from 1994 in the pocket, which I kept. Second-hand things come with stories built in, and I like that. Furniture, books, coats: everything except shoes, I'm afraid. A line has to be drawn somewhere.",
        weak: "Yes, mostly books and furniture.",
        improved:
          "Yes, quite often — my flat is furnished almost entirely second-hand. My best find was a tweed coat costing almost nothing, with a cinema ticket from 1994 still in the pocket. I'd draw the line at shoes, though.",
        expected: ["second-hand", "coat", "tweed", "pocket"],
      },
      {
        question: "Do you compare prices before you buy something expensive?",
        guidance:
          "Describe your method — tabs open, a spreadsheet, asking a friend — and one purchase where it paid off or where skipping it cost you. Method plus memory makes the answer. Then confess your own comparison ritual.",
        modelAnswer:
          "Obsessively, and my friends find it hilarious. Before buying my laptop I built a spreadsheet with nine sellers, delivery times and a warranty column, and I saved enough for a decent bag. The one time I skipped the ritual — a kettle in a hurry — it arrived cheaper elsewhere the next morning. The universe punishes laziness; I've accepted my role as the spreadsheet person.",
        weak: "Yes, I check a few websites.",
        improved:
          "Always for anything expensive. Before buying my laptop I compared nine sellers in a spreadsheet and saved enough for a good bag. The one time I skipped comparing, the item dropped in price the next day.",
        expected: ["price", "spreadsheet", "laptop", "cheaper"],
      },
      {
        question: "Have you ever regretted buying something soon afterwards?",
        guidance:
          "Confess the purchase, the moment regret arrived, and what you did — returned it, hid it, wore it defiantly once. Impulse and regret are a natural story arc. Then confess your own buyer's-remorse moment.",
        modelAnswer:
          "A bread maker, bought at midnight after watching one video, delivered to enormous excitement and used exactly twice. It still sits on the counter like a monument to my optimism — I can't return it and I can't look at it. My flatmate suggests we call it a very expensive doorstop. The lesson hasn't stuck, mind you: a fondue set arrived last month.",
        weak: "Yes, some shoes I never wear.",
        improved:
          "Yes — a bread maker I ordered at midnight after a single video and used exactly twice. It sits on the counter mocking me, since it can't be returned. My flatmate calls it an expensive doorstop.",
        expected: ["bread", "midnight", "returned", "expensive"],
      },
      {
        question: "Is there a shop you visit more often than any other?",
        guidance:
          "Name the shop and its hold on you — proximity, price, the staff who know your order — then say what you buy there and how often you genuinely go. Loyalty is worth explaining. Then explain your own most-visited shop.",
        modelAnswer:
          "The little greengrocer two streets away, embarrassingly often — four times a week, easily. The owner now puts aside ripe bananas for me because he's learned my schedule. It's slightly more expensive than the supermarket, but nothing there has ever been wrapped in plastic, and honestly, a two-minute walk beats a car park. I'd miss him if he ever closed.",
        weak: "The corner shop near my house.",
        improved:
          "The greengrocer two streets from my flat — I'm there four times a week. The owner puts aside ripe bananas because he knows my routine, and although it costs slightly more than the supermarket, the two-minute walk is worth it.",
        expected: ["greengrocer", "bananas", "supermarket", "week"],
      },
    ],
    vocabulary: [
      {
        word: "a chore",
        partOfSpeech: "noun",
        meaning: "A boring task that must be done.",
        example: "Food shopping is a pleasure; shoe shopping is a chore.",
      },
      {
        word: "second-hand",
        partOfSpeech: "adjective",
        meaning: "Previously owned by someone else.",
        example: "Most of my furniture is second-hand, and it's better made than new.",
      },
      {
        word: "to pay off",
        partOfSpeech: "phrasal verb",
        meaning: "To bring a good result.",
        example: "Two hours of comparing prices paid off with a much cheaper flight.",
      },
      {
        word: "buyer's remorse",
        partOfSpeech: "phrase",
        meaning: "Regret felt after buying something.",
        example: "The jacket gave me buyer's remorse the moment I got home.",
      },
      {
        word: "doorstop",
        partOfSpeech: "noun",
        meaning: "An object used to hold a door open (humorous for useless gadgets).",
        example: "That gadget turned out to be an eighty-pound doorstop.",
      },
      {
        word: "to put aside",
        partOfSpeech: "phrasal verb",
        meaning: "To keep something for someone.",
        example: "The greengrocer puts aside the ripest tomatoes for his regulars.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 15. Weather — second round: seasons, forecasts, moods and extremes
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-weather-2",
    title: "Weather — second round",
    topic: "weather",
    domain: "environment",
    difficulty: 2,
    proficiency: "intermediate",
    skill: "pronunciation",
    framing: "We'll talk about the weather once more, from a new angle.",
    questions: [
      {
        question: "Does the place where you live have clear seasons?",
        guidance:
          "Say how many seasons your area really has and what marks the change — rain, wind, blossom, light. One sensory detail per season is plenty. Say the season names clearly; they're pronunciation gold. Then map your own area's calendar.",
        modelAnswer:
          "Four, and each one announces itself properly. Winter is grey and short — you leave and return home in the dark. Spring is the drama season: one warm day and every café terrace fills instantly. Summer runs long and dry, and autumn arrives with rain that smells warm on hot pavements. You can almost set your calendar by it, and people do.",
        weak: "Yes, four seasons, quite distinct.",
        improved:
          "Yes, four very distinct ones. Winter is short and grey, spring arrives dramatically with the first warm day, summer is long and dry, and autumn brings warm-smelling rain. The calendar almost tells you the season.",
        expected: ["winter", "spring", "summer", "autumn"],
      },
      {
        question: "What's your favourite season of the year?",
        guidance:
          "Choose one season and defend it with what you do, wear and eat in it, plus the feeling it gives you. Acknowledging its downside shows balance. Stress the season's name confidently. Then argue for your own favourite corner of the year.",
        modelAnswer:
          "Early autumn, that precise fortnight when the heat breaks but the light stays generous. I sleep properly again, the markets fill with figs and grapes, and a jumper finally feels like a treat rather than a chore. Its downside is that it's a countdown — every beautiful week is one closer to the grey. Maybe that's why it feels precious.",
        weak: "Summer, I love the sunshine.",
        improved:
          "Early autumn, without doubt — that fortnight when the heat breaks but the light stays generous. I sleep better, the markets fill with figs, and wearing a jumper feels like a treat again. Its only flaw is how quickly it passes.",
        expected: ["autumn", "light", "sleep", "figs"],
      },
      {
        question: "Do you check the weather forecast before you make plans?",
        guidance:
          "Confess how often and through what — an app, a window, a parent — and give one plan the forecast saved or ruined. Say whether you trust it. Forecast vocabulary grows naturally here. Then examine your own forecasting habits.",
        modelAnswer:
          "Compulsively, I'm the group's unofficial weather officer. Before any trip I check three apps and trust the pessimistic one. Last spring the forecast saved a picnic by warning us a day early, so we moved it indoors with dignity. My father just looks at the sky and is right nearly as often, which I find deeply annoying.",
        weak: "Yes, usually on my phone.",
        improved:
          "Yes, almost compulsively — I'm the one who checks before every trip. Last spring a forecast warning saved our picnic by giving us a day's notice to move it indoors. My father just reads the sky and is right nearly as often.",
        expected: ["forecast", "apps", "picnic", "sky"],
      },
      {
        question: "Does bad weather affect your mood?",
        guidance:
          "Say yes or no, then describe the mechanism honestly — dark mornings, cancelled plans, aching joints — and one coping trick: lamps, walks, soup. 'Weather-sensitive' is a useful word here. Then trace your own weather-mood connection.",
        modelAnswer:
          "Genuinely, yes — I'm what you'd call weather-sensitive. A week of grey skies and I start taking things personally. In February I once cancelled plans twice just because it was drizzling, which is not my proudest hour. My fix is brutal but effective: I go outside anyway, whatever the sky is doing, and the walk resets something. Lamps help too.",
        weak: "Yes, grey days make me tired.",
        improved:
          "Yes, I'm quite weather-sensitive. After a week of grey skies I start taking things personally, and once I cancelled two plans simply because it was drizzling. Going outside anyway, whatever the weather, is my only real fix.",
        expected: ["grey", "weather", "outside", "drizzling"],
      },
      {
        question: "Have you ever experienced really extreme weather?",
        guidance:
          "Tell the story of the storm, flood, heatwave or snowfall with where you were, what you did and what it left behind. Say whether it changed how you see weather. Strong nouns and stress on the big words. Then recall your own extreme-weather day.",
        modelAnswer:
          "Once — a hailstorm in the mountains that arrived sideways. Within minutes the road was white and the car was being drummed on so hard we drove under a bridge and waited it out with strangers. Fifteen minutes, then sunshine, as if nothing had happened. The hailstones were golf-ball sized; I kept one in the freezer for a week as evidence. Nobody believed me otherwise.",
        weak: "Yes, one big storm years ago.",
        improved:
          "Yes — a hailstorm in the mountains once arrived sideways, and we sheltered under a bridge with strangers while it drummed on the roof. Fifteen minutes later the sun was out. I kept one golf-ball-sized hailstone in the freezer as proof.",
        expected: ["hailstorm", "bridge", "minutes", "hailstone"],
      },
    ],
    vocabulary: [
      {
        word: "forecast",
        partOfSpeech: "noun",
        meaning: "A prediction of the weather.",
        example: "The forecast promised sunshine, so of course it rained all afternoon.",
      },
      {
        word: "drizzle",
        partOfSpeech: "verb / noun",
        meaning: "(Of) light, fine rain.",
        example: "It drizzled all morning, just enough to ruin the plan.",
      },
      {
        word: "weather-sensitive",
        partOfSpeech: "adjective",
        meaning: "Strongly affected by weather conditions.",
        example: "I'm weather-sensitive: three grey days and my mood dips.",
      },
      {
        word: "heatwave",
        partOfSpeech: "noun",
        meaning: "A period of unusually hot weather.",
        example: "During the heatwave we slept with wet towels and a fan.",
      },
      {
        word: "hailstone",
        partOfSpeech: "noun",
        meaning: "A small ball of ice that falls in a storm.",
        example: "The hailstones bounced off the pavement like marbles.",
      },
      {
        word: "to break",
        partOfSpeech: "verb (of weather)",
        meaning: "To change after a period of extremes.",
        example: "The heat finally broke on Thursday night with a thunderstorm.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 16. Books — second round: bedside habits, re-reads, sources and lost nights
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-books-2",
    title: "Books — second round",
    topic: "books",
    domain: "culture",
    difficulty: 2,
    proficiency: "intermediate",
    skill: "development",
    framing: "Let's revisit your reading habits in a little more detail.",
    questions: [
      {
        question: "Do you ever read in bed before going to sleep?",
        guidance:
          "Say whether night reading is your habit, what kind of book survives tiredness, and whether it sends you to sleep or keeps you up. One confession — one more chapter — adds charm. Then describe your own bedside reading honestly.",
        modelAnswer:
          "Every night — it's practically a medical requirement now. I've learned the hard way which books survive tiredness: short chapters and gentle plots, nothing with maps at the front. Last month a thriller kept me up until three, and I was useless the next day, so now thrillers are daytime contraband and poetry is the bedtime prescription.",
        weak: "Yes, most nights, for a while.",
        improved:
          "Yes, every night — I can't sleep without a few pages. I've learned to keep the choice gentle, because last month a thriller kept me reading until three and I was useless the next morning at work.",
        expected: ["night", "pages", "thriller", "sleep"],
      },
      {
        question: "Is there a book you've read more than once?",
        guidance:
          "Name the book and why it pulls you back — comfort, detail you missed, a season ritual — and what you noticed the second time. Re-reading says something about you; say it. Then introduce your own repeat read.",
        modelAnswer:
          "Several, but the champion is a short novel about a gardener that I re-read every November, roughly, when the year starts closing. I've read it eight times now and it keeps revealing things — last time I noticed the whole story is quietly about grief, which I'd somehow missed for years. It's less like re-reading and more like visiting someone.",
        weak: "Yes, one novel, a few times.",
        improved:
          "Yes — a short novel about a gardener that I re-read nearly every November. I've read it eight times, and it keeps revealing things: last time I finally noticed the whole story is quietly about grief.",
        expected: ["novel", "gardener", "november", "re-read"],
      },
      {
        question: "Do you read more for information or for entertainment?",
        guidance:
          "Weigh the two honestly — which shelf is fuller, which reading you do at which hour — and name one book from each camp. A clear ratio with a reason is enough. Then weigh your own reading diet.",
        modelAnswer:
          "Roughly seventy-thirty in favour of stories, and the ratio has a schedule: evenings for novels, Sunday mornings for the other kind. My information reading is mostly history, because it disguises itself as entertainment anyway — battles, gossip, letters. The pure reference books I buy with good intentions mostly end up as very expensive coasters, I'm afraid.",
        weak: "Mostly for fun, to relax.",
        improved:
          "Mostly for entertainment, about seventy per cent. Evenings belong to novels, while Sunday mornings are for history books, which disguise information as entertainment anyway. The reference books I buy with good intentions mostly stay unread.",
        expected: ["entertainment", "novels", "history", "information"],
      },
      {
        question: "Where do you usually get the books you read?",
        guidance:
          "Cover your sources — library, bookshop, second-hand stalls, an e-reader app — with one loyalty worth explaining, like a library card you've had for years. Price and memory both make good reasons. Then map your own supply routes.",
        modelAnswer:
          "Three routes, roughly ranked: the library for anything I'm unsure about — I've had the same card since I was seven; second-hand stalls for the serendipity; and full-price bookshops when an author has earned it. My rule is that if a library book changes my life, I buy my own copy afterwards. That rule has cost me a fortune, honestly, but it's a good problem.",
        weak: "The library, mostly, or gifts.",
        improved:
          "The library for anything uncertain — I've had the same card since I was seven — second-hand stalls for lucky finds, and proper bookshops when an author has truly earned my money. It's a three-route system and it works.",
        expected: ["library", "stalls", "bookshops", "card"],
      },
      {
        question: "Have you ever stayed up late to finish a book?",
        guidance:
          "Name the book, the hour you noticed, and the bargain you made with yourself — one more chapter, just to the end of the part. The next day's suffering is the comic ending. Then confess your own one-more-chapter night.",
        modelAnswer:
          "Famously, once a year at least. The worst was a mystery novel I started at eleven 'just for a few pages' and closed at four in the morning, having finished it and immediately regretting nothing and everything. I had a meeting at nine where I apparently introduced the wrong name twice. The book was worth it; the meeting was not. That's my annual ratio anyway.",
        weak: "Yes, once, until about two.",
        improved:
          "Yes — I once started a mystery novel at eleven 'for a few pages' and looked up at four in the morning, finished. The nine o'clock meeting afterwards went badly, but I regret nothing about the book.",
        expected: ["morning", "meeting", "mystery", "finished"],
      },
    ],
    vocabulary: [
      {
        word: "chapter",
        partOfSpeech: "noun",
        meaning: "A main division of a book.",
        example: "I'll read one more chapter, I promised myself at midnight.",
      },
      {
        word: "thriller",
        partOfSpeech: "noun",
        meaning: "An exciting story about crime or danger.",
        example: "Thrillers are banned from my bedside table after that three a.m. incident.",
      },
      {
        word: "to re-read",
        partOfSpeech: "verb",
        meaning: "To read a book again.",
        example: "I re-read my favourite novel every autumn, like a ritual.",
      },
      {
        word: "serendipity",
        partOfSpeech: "noun",
        meaning: "Finding good things by lucky accident.",
        example: "Second-hand bookshops run entirely on serendipity.",
      },
      {
        word: "coaster",
        partOfSpeech: "noun",
        meaning: "A small object you put under a drink (humorous for unread books).",
        example: "My unread reference books have become expensive coasters.",
      },
      {
        word: "page-turner",
        partOfSpeech: "noun",
        meaning: "A book so exciting you can't stop reading it.",
        example: "That mystery was a real page-turner; I lost a night's sleep to it.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 17. Music — second round: instruments, concentration, memories and festivals
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-music-2",
    title: "Music — second round",
    topic: "music",
    domain: "culture",
    difficulty: 2,
    proficiency: "intermediate",
    skill: "lexical",
    framing: "Back to music now — a few more questions about it.",
    questions: [
      {
        question: "Did you learn an instrument when you were at school?",
        guidance:
          "Say yes or no, then tell the story of the instrument itself — the recorder, the violin, the drums — including who chose it and how long you lasted. What remains matters more than skill. Then recall your own school music career.",
        modelAnswer:
          "The violin, for three heroic years, chosen entirely by my mother because it looked disciplined. I was terrible — the neighbours politely closed windows — but I can still read music and hold a tune, which turns out to be the durable part. I sold the violin to my cousin, who now plays beautifully. Every family needs one ironic ending, I suppose.",
        weak: "Yes, the recorder, like everyone.",
        improved:
          "Yes, I learned the violin for three years, mainly because my mother admired it. I was honestly terrible, but I can still read music, and the cousin I sold the violin to now plays it beautifully.",
        expected: ["violin", "music", "years", "read"],
      },
      {
        question: "Do you listen to music while you're working or studying?",
        guidance:
          "Say what works and what doesn't for your concentration — lyrics, playlists, silence — and how the habit started. Distinguish types of task if you can. Then explain your own background-music rules.",
        modelAnswer:
          "Instrumental only — the moment a singer has words, my brain follows them instead of my work. So it's film scores and one lo-fi playlist I've heard so often it's basically wallpaper. For anything with numbers, even that goes off; silence is the only thing maths tolerates. The habit started in my university library, where headphones were essentially social armour.",
        weak: "Sometimes, quiet music helps me.",
        improved:
          "Yes, but only instrumental music — lyrics steal my attention from the page. Film scores are my usual choice, and for anything involving numbers I need complete silence. The habit began in my university library years ago.",
        expected: ["instrumental", "lyrics", "silence", "playlist"],
      },
      {
        question: "Is there a song that always reminds you of a particular time?",
        guidance:
          "Name the song and the moment it drags back — a summer, a person, a kitchen — and describe one sensory detail of that memory. Music as time travel is the theme. Then pick your own memory machine.",
        modelAnswer:
          "One particular summer anthem — I won't name it because it's embarrassing — instantly returns me to a bus I rode every morning at twenty-two, going to a job I hadn't earned yet. The windows were always open, the seats were plastic, and I was terrified and hopeful in equal measure. Now it plays in supermarkets and I have to stand still for a second.",
        weak: "Yes, one song from school trips.",
        improved:
          "Yes — one embarrassing summer anthem returns me instantly to a bus I rode every morning at twenty-two, on my way to my first proper job. I was terrified and hopeful, and hearing it in a supermarket stops me mid-aisle.",
        expected: ["summer", "anthem", "bus", "supermarket"],
      },
      {
        question: "Do you ever sing, even when nobody's listening?",
        guidance:
          "Confess where and what you sing — the shower, the kitchen, the car at full volume — and how seriously you take it. The gap between ambition and ability is the comedy here. Then confess your own private concert habits.",
        modelAnswer:
          "Constantly, tragically. The car is my arena — I perform full concerts at traffic lights with complete choreography, and I've been caught twice by pedestrians. In the kitchen I sing whatever's playing, usually a beat behind the actual melody. My family says my confidence deserves a stage and my voice deserves a lawyer. I consider it my cardio.",
        weak: "Yes, in the shower, obviously.",
        improved:
          "Constantly, and entirely without talent. The car is my arena — full concerts at traffic lights, complete with gestures — and in the kitchen I sing along a beat behind the melody. My family is politely honest about it.",
        expected: ["sing", "car", "kitchen", "melody"],
      },
      {
        question: "Have you ever been to a music festival?",
        guidance:
          "If yes, paint the scene — mud or dust, the crowd, the act you waited hours for. If no, say whether you'd want to, given the queues and the tents. Either way, be vivid about the experience or its appeal. Then stage your own festival story.",
        modelAnswer:
          "Twice, one triumph and one disaster. The triumph: a small folk festival where it rained for three days and nobody cared — wellies, warm cider, strangers sharing tarpaulins. The disaster: an enormous one where I lost my friends in the first hour and my phone died by the second. I still saw the headliner alone and it was, oddly, one of the best sets of my life.",
        weak: "Yes, once, a small local one.",
        improved:
          "Yes, twice. The best was a small folk festival where it rained for three days and nobody minded — wellies, warm cider, strangers under shared tarpaulins. The worst was a huge one where I lost everyone immediately, yet the headliner alone was worth it.",
        expected: ["festival", "rained", "wellies", "headliner"],
      },
    ],
    vocabulary: [
      {
        word: "instrumental",
        partOfSpeech: "adjective",
        meaning: "(Of music) without singing.",
        example: "I can only work to instrumental music; words distract me.",
      },
      {
        word: "film score",
        partOfSpeech: "noun",
        meaning: "The music written for a film.",
        example: "That film score plays in my headphones every deadline week.",
      },
      {
        word: "anthem",
        partOfSpeech: "noun",
        meaning: "A song that represents a time or a group.",
        example: "That song became the anthem of our final summer at school.",
      },
      {
        word: "to hold a tune",
        partOfSpeech: "phrase",
        meaning: "To sing a melody accurately.",
        example: "I can't hold a tune, but nothing can stop me trying.",
      },
      {
        word: "headliner",
        partOfSpeech: "noun",
        meaning: "The main act at a concert or festival.",
        example: "We waited four hours in the rain for the headliner.",
      },
      {
        word: "wellies",
        partOfSpeech: "noun (UK, informal)",
        meaning: "Waterproof boots.",
        example: "Pack your wellies — festival mud is a certainty, not a risk.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 18. Sports — second round: glories, loyalties, boredom and daredevils
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-sports-2",
    title: "Sports — second round",
    topic: "sports",
    domain: "health",
    difficulty: 2,
    proficiency: "intermediate",
    skill: "development",
    framing: "Let's return to the subject of sport and fitness.",
    questions: [
      {
        question: "Did you ever win anything for sport when you were younger?",
        guidance:
          "Confess the trophy or the loss with equal pride — a medal, a certificate, the almost-goal. What the award meant to your younger self is the real story. Then retrieve your own childhood sporting glory.",
        modelAnswer:
          "One bronze medal, district level, relay race, and it lives in a drawer like a royal treasure. We came third out of five, which I choose to describe as podium. My father still tells the story of the baton exchange that nearly went into the crowd. I was twelve and I trained for a whole term — the hardest I've ever worked for anything, honestly.",
        weak: "A small medal once, at school.",
        improved:
          "One bronze medal, for a district relay race — we came third out of five, and my father still tells the story of the nearly-dropped baton. I trained the whole term for it, my proudest childhood effort.",
        expected: ["medal", "relay", "third", "trained"],
      },
      {
        question: "Do you follow a particular team or athlete?",
        guidance:
          "Name the team or athlete, say how the loyalty started — family, a match, a city — and describe one high or low moment you lived through as a fan. Loyalty needs a story. Then explain your own allegiance.",
        modelAnswer:
          "My city's volleyball team, an inheritance from my grandfather rather than a choice. He took me to matches from age six; I inherited the seats, the superstitions and the grudge against a particular referee. Two seasons ago they lost a final in the last second, and I rang my grandfather immediately. We didn't even speak — just sat on the phone, groaning together.",
        weak: "Yes, one football team, since childhood.",
        improved:
          "My city's volleyball team — a loyalty inherited from my grandfather, who took me to matches from the age of six. When they lost a final in the last second, I rang him and we just groaned down the phone together.",
        expected: ["team", "grandfather", "matches", "lost"],
      },
      {
        question: "Is there a sport you find boring to watch?",
        guidance:
          "Name your boredom and explain its cause — the pace, the scoring, the silence — with one vivid example of trying to watch it. Fairness to its fans shows balance. Then prosecute your own least watchable sport.",
        modelAnswer:
          "Cricket, and I say this with apologies to an entire nation. I once watched a full day — a full day — and the score changed by amounts I couldn't detect. My uncle explained it lovingly for an hour and I understood perhaps a fifth. I accept that the boredom is in me, not the sport; its fans seem genuinely happy. But I'd rather watch paint dry, slightly faster.",
        weak: "Golf — it's too slow for me.",
        improved:
          "Cricket, I'm afraid, with apologies to its fans. I once watched a full day and the score changed by amounts I couldn't detect, even after my uncle's patient explanation. I accept the fault is mine, but I still can't enjoy it.",
        expected: ["cricket", "watch", "score", "day"],
      },
      {
        question: "Would you like to try an extreme sport such as skydiving?",
        guidance:
          "Say yes or no with the reason — terror, curiosity, a promise to a friend — and describe what appeals or appals: the fall, the view, the moment before. A condition ('if someone held my hand') adds honesty. Then weigh up your own jump.",
        modelAnswer:
          "Yes, in theory, from a comfortable chair — skydiving is on my list of things I insist I'll do. The appeal is purely that first second after the plane, apparently pure terror then pure silence. My condition is a tandem instructor with ten thousand jumps and no small talk. My brother has actually booked one for us both in spring, so my theory is about to be tested, which is alarming.",
        weak: "Maybe — it looks quite frightening.",
        improved:
          "In theory, yes — skydiving is something I insist I'll try once. The appeal is the second after leaving the plane, and my one condition is a very experienced instructor. My brother has actually booked us a jump, so we'll see.",
        expected: ["skydiving", "plane", "instructor", "jump"],
      },
      {
        question: "Do you think children get enough exercise these days?",
        guidance:
          "Give a clear view, then ground it: what children's routines look like now against yours at that age, and what's to blame or credit — screens, safety, parents, schools. A small proposal at the end shows thought. Then argue your own case.",
        modelAnswer:
          "Less than we did, and I say that as somebody whose childhood was basically outdoors. My nephew's football pitch is a screen the size of his hand. It's not really the children's fault — parents drive them everywhere now because traffic and worry have grown together. Schools try, but one lesson a week can't beat an evening of videos. I'd bring back the walk to school; it did more for me than any sport.",
        weak: "Probably not — screens are everywhere.",
        improved:
          "Honestly, less than my generation did. My nephew's whole football pitch fits on a screen in his hand, and parents now drive children everywhere out of worry. I'd bring back the daily walk to school as a small fix.",
        expected: ["children", "screen", "parents", "school"],
      },
    ],
    vocabulary: [
      {
        word: "relay",
        partOfSpeech: "noun",
        meaning: "A race in which team members pass a baton to each other.",
        example: "Our relay team came third, mostly thanks to the final runner.",
      },
      {
        word: "podium",
        partOfSpeech: "noun",
        meaning: "The platform on which prize winners stand.",
        example: "Third out of five — I still call it a podium finish.",
      },
      {
        word: "allegiance",
        partOfSpeech: "noun",
        meaning: "Loyalty to a team or cause.",
        example: "My allegiance to the club began the day my grandfather first took me.",
      },
      {
        word: "superstition",
        partOfSpeech: "noun",
        meaning: "A habit believed to bring luck.",
        example: "I wear the same scarf to every match — a superstition I can't explain.",
      },
      {
        word: "tandem",
        partOfSpeech: "adjective",
        meaning: "(Of an activity) done in a pair with an expert.",
        example: "My first skydive will be a tandem jump with an instructor.",
      },
      {
        word: "to try out",
        partOfSpeech: "phrasal verb",
        meaning: "To test whether an activity or team suits you.",
        example: "I tried out for the school team three years running before making it.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 19. Social activities — second round: strangers, celebrations and arrivals
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-social-activities-2",
    title: "Social activities — second round",
    topic: "social-activities",
    domain: "society",
    difficulty: 2,
    proficiency: "intermediate",
    skill: "interaction",
    framing: "Finally, let's look again at how you spend time with people.",
    questions: [
      {
        question: "Do you find it easy to start conversations with strangers?",
        guidance:
          "Say yes, no or depends, then describe your technique or your rescue plan — a question, a comment about the queue, silence. One real conversation with a stranger makes it true. Then assess your own stranger-skills honestly.",
        modelAnswer:
          "Depends entirely on the setting. Put me at a wedding where I know the bride, and I'll chat to anyone holding a drink. In a lift, I become a statue. My best trick is asking people about their dog, which works alarmingly well — I once spent forty minutes with a stranger comparing photographs of our respective pets, and we're still in touch.",
        weak: "Not really, I'm quite shy.",
        improved:
          "It depends on the place. At a wedding I'll happily chat to anyone, but in a lift I go silent. My best trick is asking strangers about their dog — it once started a forty-minute conversation.",
        expected: ["wedding", "chat", "stranger", "dog"],
      },
      {
        question: "What's the best party or celebration you've ever been to?",
        guidance:
          "Name the occasion, then build the scene: the place, the food, the moment everyone remembers — a speech, a dance, a power cut. Best-ever answers need one unforgettable detail. Then stage your own best celebration.",
        modelAnswer:
          "My aunt and uncle's fortieth wedding anniversary, in their garden. Half the street came, tables ran the length of the lawn, and my grandmother gave a speech that made the priest cry. Then the power cut, and the party carried on by fairy lights and car headlights until the neighbours gave up complaining and joined in. Eleven hours. My shoes did not survive.",
        weak: "My cousin's wedding, it was lovely.",
        improved:
          "My aunt and uncle's fortieth anniversary, held in their garden. My grandmother's speech made the priest cry, and when the power cut out, the party simply continued by car headlights until the neighbours joined in.",
        expected: ["garden", "speech", "power", "neighbours"],
      },
      {
        question: "Do you usually arrive early, on time or late to social events?",
        guidance:
          "Confess your arrival habit and its consequences — the awkward first twenty minutes or the missed entrance. Then explain why you're like this: upbringing, nerves, optimism. Self-awareness makes this charming. Then confess your own arrival style.",
        modelAnswer:
          "Early, pathologically early, which means I've spent a lot of life helping hosts move chairs. My mother drilled it into us — 'on time is late' — and now I can't unlearn it. The upside is I get the guest of honour's full attention before anyone else arrives. The downside is watching my host finish cooking in silence, apologising, at six forty for a seven o'clock dinner.",
        weak: "Early, always. I can't help it.",
        improved:
          "Pathologically early, thanks to my mother's rule that on time is late. I usually end up helping the host set out chairs, and I've learned to arrive with something to occupy myself during the awkward first stretch.",
        expected: ["early", "mother", "late", "host"],
      },
      {
        question: "Do you enjoy events where you don't know many people?",
        guidance:
          "Say how these events feel — challenge, adventure, ordeal — and what strategy gets you through: finding one friendly face, the food table, a job to do. Growth can be the closing thought. Then judge your own stranger-heavy events.",
        modelAnswer:
          "In hindsight, always; at the time, reluctantly. The first twenty minutes are a mild ordeal — everyone else seems to arrive with a best friend — but my strategy is to make myself useful: helping in the kitchen or refilling drinks gives me a role and a reason to talk. My closest friendship came from a drinks party where we were both hiding by the bookshelf.",
        weak: "Not really, I feel awkward.",
        improved:
          "Reluctantly at first, but yes. The opening minutes are an ordeal, so I make myself useful in the kitchen, which gives me a reason to talk to anyone. My closest friendship began at exactly such a party.",
        expected: ["party", "kitchen", "talk", "friendship"],
      },
      {
        question: "How do you usually celebrate your birthday?",
        guidance:
          "Walk through your birthday ritual in order — who you see, what you eat, the one tradition you insist on. Say whether the day matters to you and why. Then describe your own birthday script.",
        modelAnswer:
          "Quietly, by choice. I take the day off work, have breakfast slowly, and call exactly three people: my mother, my grandmother and my oldest friend, in that order. The one tradition is cake bought, never baked, from the same bakery since I was nineteen. No party, no speeches. The evening is a long walk and a film, and honestly, it's perfect.",
        weak: "Dinner with family, usually at home.",
        improved:
          "Quietly, by choice. I take the day off, call my mother, grandmother and oldest friend in that exact order, and buy — never bake — a cake from the same bakery as every year. The evening is a walk and a film.",
        expected: ["cake", "bakery", "mother", "walk"],
      },
    ],
    vocabulary: [
      {
        word: "to break the ice",
        partOfSpeech: "phrase",
        meaning: "To start a conversation in an awkward situation.",
        example: "The dog question broke the ice with the whole table.",
      },
      {
        word: "in hindsight",
        partOfSpeech: "phrase",
        meaning: "Looking back at the past with knowledge you have now.",
        example: "In hindsight, that party changed my life; at the time it was terrifying.",
      },
      {
        word: "an ordeal",
        partOfSpeech: "noun",
        meaning: "A difficult or unpleasant experience.",
        example: "The first ten minutes at a party are a mild ordeal.",
      },
      {
        word: "to make yourself useful",
        partOfSpeech: "phrase",
        meaning: "To find a helpful role in a situation.",
        example: "I make myself useful in the kitchen when I know nobody.",
      },
      {
        word: "to insist on",
        partOfSpeech: "phrase",
        meaning: "To demand or firmly maintain something.",
        example: "I insist on the same bakery cake every single birthday.",
      },
      {
        word: "to carry on",
        partOfSpeech: "phrasal verb",
        meaning: "To continue doing something.",
        example: "The party carried on by candlelight until the power returned.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },
];
