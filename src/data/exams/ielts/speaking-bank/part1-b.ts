/**
 * IELTS Speaking Part 1 practice bank — file B (PROMPT 47, Part 8).
 *
 * Interview rounds eleven to nineteen of the nineteen-topic Part 1
 * library: one set per taught topic, five examiner questions each,
 * escalating from warm-up facts to developed and hypothetical answers.
 * Every question carries development guidance, a natural model answer —
 * a demonstration of the layer method (direct answer → reason → detail
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
// 11. Technology — devices, habits and digital change (intermediate, lexical)
// ---------------------------------------------------------------------------

export const speakingBankPart1SetsB: SpeakingPart1Set[] = [
  {
    kind: "part1",
    slug: "ielts-sb-p1-technology",
    title: "Part 1 practice — Technology",
    topic: "technology",
    difficulty: 3,
    proficiency: "intermediate",
    skill: "lexical",
    framing: "Let's talk now about the technology you use.",
    questions: [
      {
        question: "Which devices do you use most in your daily life?",
        guidance:
          "Name the main device, then describe what you actually do with it hour to hour. Function details — apps, settings, habits — build vocabulary range here. The model is a demonstration of precision; catalogue your own pocket electronics.",
        modelAnswer:
          "My phone first, honestly, from alarm to lights-out — podcasts on the tram, payments at the bakery, my whole calendar. Second is a battered laptop that overheats if I open two documents. There's also a smartwatch my sister gave me; I trust it for steps and ignore it for everything else.",
        weak: "Just my phone and laptop.",
        improved:
          "Mainly my phone — I use it for messages, maps and banking all day. I also rely on my laptop for coursework, and a tablet for reading in bed.",
        expected: ["phone", "use", "computer", "app", "every"],
      },
      {
        question: "How often do you check your phone, would you estimate?",
        guidance:
          "Give a number or comparison, then what pulls you back — notifications, boredom, habit — and your feeling about it. Self-awareness sounds fluent. Notice how the sample stays concrete; count your own screen habit.",
        modelAnswer:
          "By the phone's own shameful statistics, about ninety times a day. Every pause in the day — lifts, queues, kettle boiling — my thumb unlocks it automatically. I did a digital detox weekend and managed six hours before capitulating. It's not information I need; it's a reflex I've trained like a bad muscle.",
        weak: "Constantly, I'm afraid to say.",
        improved:
          "Far too often — probably every ten minutes. Work messages are the main reason, but I also open it automatically whenever I'm bored, which I'm trying to cut down.",
        expected: ["phone", "check", "often", "day", "time"],
      },
      {
        question: "Do you prefer texting people or calling them?",
        guidance:
          "Choose your channel and defend it — speed, tone, record-keeping — with a real example of when it mattered. A sentence on when the other option wins adds nuance. The sample demonstrates the weighing; balance your own communication habits.",
        modelAnswer:
          "Texting for logistics, calling for meaning — that's the house rule I've settled on. Arranging dinner needs four words and an emoji; consoling a friend needs a voice. My mum, naturally, ignores this entirely and voice-notes me ten-minute essays. I've learned to love those, actually — they're her letters.",
        weak: "Texting, it's quicker for me.",
        improved:
          "I mostly prefer texting, because I can reply when it suits me and everything's in writing. For important news, though, I'd always rather call and hear someone's voice.",
        expected: ["prefer", "text", "call", "because", "message"],
      },
      {
        question: "How has technology changed since you were a child?",
        guidance:
          "Pick two or three concrete changes and date them — broadband arriving, smartphones at fourteen, streaming replacing shelves. Personal timelines ground abstract change. The sample shows the chronology technique; write your own timeline into it.",
        modelAnswer:
          "Unrecognisably. My childhood internet was one desktop, one dial-up tone, and absolute war if the phone rang mid-download. By secondary school, smartphones had swallowed the camera, the map, the Walkman and the bank, one by one. Now my fridge emails me about cheese. I wouldn't trade it, but I do miss buying an album and living with it.",
        weak: "Everything's on phones now.",
        improved:
          "Hugely. When I was small we had one shared family computer, whereas now I carry a powerful phone everywhere, and even my grandmother video-calls us weekly.",
        expected: ["change", "phone", "computer", "child", "now"],
      },
      {
        question: "If you had to give up one piece of technology for a month, which would be easiest to lose?",
        guidance:
          "Choose the sacrifice, explain why it is expendable — redundancy, boredom, low stakes — and name what you would struggle to surrender instead. Light reasoning with one example. Borrow the trade-off structure and pick your own victim.",
        modelAnswer:
          "The smartwatch, no contest — it's decorative data telling me things my body already knows. The television could go too; I stream on the laptop anyway. My phone, though? A month without it would mean printed maps, cash again, and actually remembering appointments. The watch goes; the phone stays with me like a limb.",
        weak: "The TV, I never watch it.",
        improved:
          "The television would be easiest, since I never watch it. Everything I want is on my laptop, whereas losing my phone would make daily life genuinely difficult.",
        expected: ["would", "give", "phone", "easy", "use"],
      },
    ],
    vocabulary: [
      {
        word: "device",
        partOfSpeech: "noun",
        meaning: "A piece of electronic equipment, especially a portable one.",
        example: "Every device in my bag demands a different charger, naturally.",
      },
      {
        word: "screen time",
        partOfSpeech: "noun phrase",
        meaning: "Time spent looking at device screens.",
        example: "My weekly screen-time report arrives like a court summons every Sunday.",
      },
      {
        word: "to sync",
        partOfSpeech: "verb",
        meaning: "To make data match across devices automatically.",
        example: "My photos sync across three devices, including one I've lost.",
      },
      {
        word: "notification",
        partOfSpeech: "noun",
        meaning: "An alert that an app or message is waiting.",
        example: "I muted every notification except calls from my family, and my focus improved.",
      },
      {
        word: "digital detox",
        partOfSpeech: "noun phrase",
        meaning: "A deliberate break from devices.",
        example: "Our digital detox lasted until someone needed a recipe at lunchtime.",
      },
      {
        word: "user-friendly",
        partOfSpeech: "adjective",
        meaning: "Easy to operate without instruction.",
        example: "The new ticket machine is genuinely user-friendly, which shocked everyone.",
      },
      {
        word: "obsolete",
        partOfSpeech: "adjective",
        meaning: "No longer used because something newer exists.",
        example: "My MP3 player is obsolete, beloved, and still in my gym bag.",
      },
      {
        word: "to be glued to",
        partOfSpeech: "phrase",
        meaning: "To be unable to stop watching something.",
        example: "The whole carriage was glued to their screens during the announcement, me included.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 12. Education — learning, school and reform (intermediate)
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-education",
    title: "Part 1 practice — Education",
    topic: "education",
    difficulty: 3,
    proficiency: "intermediate",
    skill: "development",
    framing: "I'd like to ask you some questions about education.",
    questions: [
      {
        question: "Are you currently studying, working, or a bit of both?",
        guidance:
          "Clarify your situation in one clean sentence, then add course or job details and where it is heading. The examiner is orientating — precision now pays off later. The sample maps the structure; put your own situation in it.",
        modelAnswer:
          "Both, awkwardly — I'm a lab technician four days a week and completing a part-time master's in analytical chemistry on the fifth. It's a juggling act, but my employer pays half the fees, which softens the pain. The aim is research work within two years. Sleep is scheduled for later.",
        weak: "I'm working as a teacher.",
        improved:
          "I'm working as a secondary school teacher, teaching geography to teenagers. The best part is the field trips, and the hardest part is marking, which follows me home every weekend.",
        expected: ["work", "study", "because", "current", "course"],
      },
      {
        question: "How often did your teachers give you homework when you were at school?",
        guidance:
          "Answer with a rhythm — every day, weekly essays — then detail one subject's demands and your coping strategy. School memories are rich material, so use them. The layering is demonstrated, not scripted; recall your own homework load.",
        modelAnswer:
          "Daily, in the core subjects — maths especially, thirty problems a night, no mercy. Languages got essays on alternating weeks, and history wanted source analysis by Friday, always Friday. I coped with a rota worked out with two friends. Our system broke down beautifully around exam season, every single year.",
        weak: "Every day, quite a lot.",
        improved:
          "Almost every day. Maths and science set exercises nightly, while English gave us a longer essay each week, so I learned to plan my evenings early on.",
        expected: ["school", "homework", "teacher", "day", "study"],
      },
      {
        question: "Did you prefer studying subjects you were good at or ones you found difficult?",
        guidance:
          "Choose one and be honest about the psychology — comfort versus growth. A named subject on each side makes it concrete. Preference answers earn depth through honesty, so use the shape demonstrated and confess your own tendencies.",
        modelAnswer:
          "Instinct says the ones I was good at — music and English were free marks and I basked in them. But the honest answer is physics, which I was terrible at, gave me the best feeling of achievement. Every scraped pass felt earned. Comfort is nice; difficulty is where I actually learned how to learn.",
        weak: "The ones I was good at.",
        improved:
          "Probably the ones I was good at, like geography, because succeeding felt good. Looking back, though, chemistry taught me more, since I had to work properly at it.",
        expected: ["subject", "prefer", "good", "difficult", "because"],
      },
      {
        question: "Do you think schools have changed much since your parents were young?",
        guidance:
          "Compare eras on one or two fronts — discipline, technology, subjects — with a family detail as evidence. 'My mother says…' is a natural way in. The sample models the generational comparison; add your own family's evidence.",
        modelAnswer:
          "My mother's stories sound like another century, because they were. She stood when teachers entered, copied from the board for hours, and was strapped for left-handedness. Now my nephew's school issues tablets and emails progress reports weekly. Whether discipline became kindness or just permissiveness — that argument splits our dinner table every Christmas.",
        weak: "Yes, more technology now.",
        improved:
          "Definitely. My parents remember strict discipline and chalkboards, whereas today's classrooms have interactive screens, and students are encouraged to discuss rather than just memorise facts.",
        expected: ["school", "change", "now", "student", "technology"],
      },
      {
        question: "If you could add one new subject to the school curriculum, what would it be?",
        guidance:
          "Propose your subject, argue its case — life skills, citizenship, money, emotions — and sketch one lesson you would teach. Imaginative but practical answers shine here. Study how the sample builds its case, then design your own reform.",
        modelAnswer:
          "Personal finance, without a doubt — compound interest, contracts, tax forms. I left school able to factorise a quadratic and unable to read a payslip. My first lesson would be decoding a rental agreement in plain language. Second choice would be first aid; both feel like education pretending to be common sense.",
        weak: "Maybe coding, it's useful.",
        improved:
          "I'd add coding, actually, because it teaches logical thinking. Even one lesson a week building tiny programmes would help students understand the technology they use every day.",
        expected: ["subject", "school", "would", "teach", "because"],
      },
    ],
    vocabulary: [
      {
        word: "curriculum",
        partOfSpeech: "noun",
        meaning: "The full set of subjects a school teaches.",
        example: "The curriculum finally added media literacy, about a decade late by my reckoning.",
      },
      {
        word: "to fall behind",
        partOfSpeech: "phrasal verb",
        meaning: "To fail to keep pace with a class or schedule.",
        example: "I fell behind after the flu and spent a term catching up in silence.",
      },
      {
        word: "state school",
        partOfSpeech: "noun phrase",
        meaning: "(British) A school funded by the government, free to attend.",
        example: "I went to a state school with leaking windows and extraordinary teachers.",
      },
      {
        word: "to excel at",
        partOfSpeech: "phrase",
        meaning: "To be exceptionally good at something.",
        example: "She excelled at anything with numbers and suffered through everything else.",
      },
      {
        word: "cramming",
        partOfSpeech: "noun",
        meaning: "Intense last-minute study before an exam.",
        example: "Cramming got me through my finals but taught me nothing that stayed.",
      },
      {
        word: "well-rounded",
        partOfSpeech: "adjective",
        meaning: "Developed across many areas, not only one.",
        example: "The school pushed us to be well-rounded — grades, sport, and a compulsory recorder.",
      },
      {
        word: "to grade",
        partOfSpeech: "verb",
        meaning: "To mark work and assign a score or level.",
        example: "Teachers grade on screen now, which my old physics master calls 'marking with a mouse'.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 13. Daily routines — the typical day (foundation, fluency focus)
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-routines",
    title: "Part 1 practice — Daily routines",
    topic: "daily-routines",
    difficulty: 1,
    proficiency: "foundation",
    skill: "fluency",
    framing: "Let's talk about a typical day for you.",
    questions: [
      {
        question: "What time do you usually get up on a working day?",
        guidance:
          "State the time, then build around it — alarm habits, the first thing you do, who else is awake. Keep moving; this warm-up rewards flow, not perfection. The sample sets the pace; describe your own first hour.",
        modelAnswer:
          "Half six, most days, though the alarm goes at six twenty-five for self-respect. I lie there negotiating for five minutes, then it's straight to the kettle. My flatmate and I have a silent rota in the kitchen — she gets the first shower, I get the first coffee, nobody speaks till seven.",
        weak: "Around seven, usually.",
        improved:
          "Around seven on work days. I like a slow start, so I make coffee and read the news for twenty minutes before I even think about showering.",
        expected: ["morning", "wake", "early", "usually", "work"],
      },
      {
        question: "How often do you finish work at a reasonable hour?",
        guidance:
          "Say the frequency plainly, then give the pattern — which days run late and why. One detail about the effect on your evening rounds it off. Match the sample's easy pace with your own working rhythm.",
        modelAnswer:
          "Three days out of five, if I'm honest. Tuesdays and Thursdays swallow me whole — back-to-back meetings, then the inbox aftermath. The good days, though, I'm out by five-thirty and at the swimming pool by six. There's something deeply civilised about an evening that still contains daylight.",
        weak: "Not very often, sadly.",
        improved:
          "Not very often, sadly. Mondays always run late because of meetings, so on the good days I try to leave by six and get a walk in before dark.",
        expected: ["work", "finish", "late", "day", "week"],
      },
      {
        question: "Are you more productive in the morning or the evening?",
        guidance:
          "Pick your peak time, give one reason rooted in your routine, and prove it with a habit. Keep delivery smooth — this set trains pace. Follow the model's rhythm while reporting your own energy levels.",
        modelAnswer:
          "Morning, before ten, when my mind is a clean desk. That's when the hard thinking gets done — reports, tricky emails, anything with consequences. By evening I'm good only for laundry-level decisions. Left to myself, I'd start work at seven and vanish by three, but offices disagree with my biology.",
        weak: "Mornings, I think, definitely.",
        improved:
          "I'm much more productive in the mornings, mainly because I sleep early and wake up fresh. I do my serious tasks before lunch and save easy jobs for the afternoon.",
        expected: ["morning", "productive", "evening", "energy", "work"],
      },
      {
        question: "Is your daily routine now very different from when you were younger?",
        guidance:
          "Compare the two routines with one or two specifics — sleep times, commuting, freedom — then say which you prefer and why. Then-versus-now contrast does the developing. Copy the shape and set your own timelines against each other.",
        modelAnswer:
          "Unrecognisable, and mostly because of the commute. As a student I woke at noon and considered it virtuous; now the six-forty alarm feels like a legal requirement. The routine is stricter, but I've noticed I waste less of my life. My younger self would be appalled and slightly impressed.",
        weak: "Yes, I get up earlier now.",
        improved:
          "Very different, yes. As a student my days started whenever I pleased, but work has fixed my hours, and honestly I prefer it because free time feels more valuable now.",
        expected: ["routine", "change", "use", "now", "sleep"],
      },
      {
        question: "If you had a completely free day tomorrow, how would you spend it?",
        guidance:
          "Walk through the ideal day in order — morning, afternoon, evening — with one or two specifics in each. Conditionals and sequencers carry it. The model demonstrates the flow; send yourself on your own perfect day.",
        modelAnswer:
          "Slowly, that's the whole fantasy. Sleep until eight — wild luxury — then a long breakfast with actual newsprint. The afternoon would go to the coast by train with a paperback and no purpose. Dinner at the little Ethiopian place, home by ten — my ideal day contains almost nothing, and that's precisely the point.",
        weak: "Sleep late, I suppose.",
        improved:
          "I'd probably sleep late and then meet friends for a long brunch. In the afternoon I'd go to the cinema or a gallery, since I rarely get time for either during the week.",
        expected: ["would", "day", "free", "sleep", "friend"],
      },
    ],
    vocabulary: [
      {
        word: "to get up",
        partOfSpeech: "phrasal verb",
        meaning: "To leave your bed after waking.",
        example: "I get up on the second alarm; the first is purely decorative.",
      },
      {
        word: "to run late",
        partOfSpeech: "phrase",
        meaning: "To be behind schedule.",
        example: "Mondays run late by design; I've stopped fighting it.",
      },
      {
        word: "peak hours",
        partOfSpeech: "noun phrase",
        meaning: "The busiest times of the day.",
        example: "Travelling outside peak hours turned my commute into a reading session.",
      },
      {
        word: "to wind down",
        partOfSpeech: "phrasal verb",
        meaning: "To relax gradually after effort.",
        example: "I wind down with a podcast and the lights half-dimmed.",
      },
      {
        word: "night owl",
        partOfSpeech: "noun phrase",
        meaning: "A person who is active and alert late at night.",
        example: "I married a night owl; we meet at dinner and part ways at ten.",
      },
      {
        word: "to lie in",
        partOfSpeech: "phrase",
        meaning: "(British) To stay in bed later than usual.",
        example: "A lie-in till nine feels like a small public holiday.",
      },
      {
        word: "downtime",
        partOfSpeech: "noun",
        meaning: "Time set aside for rest, with nothing scheduled.",
        example: "My Sundays are protected downtime — no plans, no apologies.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 14. Shopping — habits, channels and temptations (foundation, fluency)
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-shopping",
    title: "Part 1 practice — Shopping",
    topic: "shopping",
    difficulty: 2,
    proficiency: "foundation",
    skill: "fluency",
    framing: "Now, some questions about shopping.",
    questions: [
      {
        question: "Where do you usually do your weekly shopping?",
        guidance:
          "Name the place and the rhythm — supermarket Fridays, market Saturdays — then one preference detail about it. The material is easy, so aim for a relaxed pace. The sample shows the layers; stock them with your own shopping habits.",
        modelAnswer:
          "Saturday mornings at the farmers' market first, then the supermarket for everything it can't provide. The market stallholders know me by now and save the proper tomatoes. Total time, two hours, plus one compulsory coffee. I've tried online delivery twice and both times the substitutions broke my spirit.",
        weak: "At the supermarket near my flat.",
        improved:
          "I do most of it at a big supermarket on Saturdays, plus a small corner shop during the week for milk and bread. The supermarket is cheaper, so it makes sense to go once.",
        expected: ["shop", "supermarket", "week", "buy", "usually"],
      },
      {
        question: "How often do you buy things you don't really need?",
        guidance:
          "Confess the frequency cheerfully, then name your weakness and the trigger — sales, boredom, apps. Honest humour sounds fluent. Match the sample's lightness while confessing your own impulse purchases.",
        modelAnswer:
          "More than I'd admit to my accountant. My weakness is stationery — I own eleven notebooks and a fountain pen I can't fully control. Boredom scrolling causes half of it; the other half is sales disguised as opportunities. There's a parcel arriving today, in fact, that I have no memory of ordering.",
        weak: "Too often, especially online.",
        improved:
          "Probably every couple of weeks. I'm weak for cheap books and phone accessories, and the shopping apps with their notifications definitely don't help my self-control.",
        expected: ["buy", "often", "online", "because", "thing"],
      },
      {
        question: "Do you prefer shopping in physical shops or online?",
        guidance:
          "Pick a side, then give two reasons with one concrete example each — trying things on versus doorstep convenience. A short concession balances it. The sample paces the argument; run your own comparison at the same speed.",
        modelAnswer:
          "Physical shops for clothes and anything with a fit; online for everything else. I once ordered trousers described as 'slim charcoal' that arrived neither slim nor, arguably, trousers. Books, cables, toothpaste — online wins, no question. For anything I'll wear more than once, I need to squint at myself in a mirror first.",
        weak: "Online, it's more convenient.",
        improved:
          "I prefer online shopping for convenience and price, especially for books and electronics. For clothes, though, I still go to real shops, because sizes are never reliable when you order.",
        expected: ["prefer", "online", "shop", "because", "buy"],
      },
      {
        question: "Has the way you shop changed over the last ten years?",
        guidance:
          "Sketch then and now — cash to card, shops to apps — and name the moment it tipped. One habit you kept adds character. The model shows the arc; trace your own shopping history through it.",
        modelAnswer:
          "Almost entirely digital now, which still faintly surprises me. Ten years ago, Saturday meant cash from the machine and a wander down the high street. Now my wallet is a phone and the high street is a delivery slot. The one habit I've kept is the Christmas bookshop trip — some rituals are worth defending.",
        weak: "Yes, I shop online more now.",
        improved:
          "Yes, completely. I used to buy everything from local shops with cash, but now almost all my shopping happens through apps, and deliveries arrive the same day.",
        expected: ["change", "online", "shop", "use", "now"],
      },
      {
        question: "If you were given a generous gift card, what would you spend it on?",
        guidance:
          "Choose quickly and commit — the joy is in the specifics. Say what, where and one guilty addition. Conditionals keep it hypothetical. The model spends its card with enthusiasm; go and spend your own.",
        modelAnswer:
          "Books and boots, the classic boring answer — but let me be specific. A hardback of every Alice Munro novel, then proper leather walking boots I'd never buy for myself. There'd be a guilt-free fifty left for the stationery shop, and we both know what happens there. A gift card makes the sensible things feel like treats.",
        weak: "Probably clothes or books.",
        improved:
          "I'd probably spend it on new clothes and a few books. Both are things I need anyway, but with a gift card I'd choose the more expensive ones guilt-free.",
        expected: ["would", "spend", "buy", "money", "because"],
      },
    ],
    vocabulary: [
      {
        word: "window shopping",
        partOfSpeech: "noun phrase",
        meaning: "Looking at shop displays without intending to buy.",
        example: "We went window shopping and somehow came home with a lamp.",
      },
      {
        word: "bargain",
        partOfSpeech: "noun",
        meaning: "Something bought for much less than its usual price.",
        example: "The winter coat was a bargain — seventy per cent off and it actually fits.",
      },
      {
        word: "to splash out",
        partOfSpeech: "phrasal verb",
        meaning: "(Informal) To spend a lot on something special.",
        example: "Once a year we splash out on a proper restaurant dinner.",
      },
      {
        word: "impulse buy",
        partOfSpeech: "noun phrase",
        meaning: "An unplanned purchase made on the spur of the moment.",
        example: "The ceramic avocado was an impulse buy I've never once regretted.",
      },
      {
        word: "to browse",
        partOfSpeech: "verb",
        meaning: "To look through goods casually without a set target.",
        example: "I browse the second-hand shelves most Fridays and buy perhaps monthly.",
      },
      {
        word: "loyalty card",
        partOfSpeech: "noun phrase",
        meaning: "A card collecting points for repeated purchases.",
        example: "My loyalty card proves my caffeine habit better than any diary could.",
      },
      {
        word: "out of stock",
        partOfSpeech: "phrase",
        meaning: "Temporarily unavailable in a shop.",
        example: "The obvious present was out of stock, so I improvised with theatre tickets.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 15. Weather — seasons, habits and climate (foundation, fluency)
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-weather",
    title: "Part 1 practice — Weather",
    topic: "weather",
    difficulty: 1,
    proficiency: "foundation",
    skill: "fluency",
    framing: "Let's talk about the weather where you live.",
    questions: [
      {
        question: "What's the weather like in your country at this time of year?",
        guidance:
          "Describe the season directly — temperature, rain, light — then one detail about how life adjusts to it. Keep it conversational; this is a rhythm-settler. The sample sets the tempo; describe your own sky.",
        modelAnswer:
          "Grey, honestly, and I mean grey as a lifestyle. November in Manchester drizzles sideways and the streetlights come on at four. Everyone develops a uniform of dark coats and resignation. Then a bright Sunday arrives out of nowhere and the whole city forgives everything and floods into the parks.",
        weak: "It's cold and rainy now.",
        improved:
          "It's cold and rainy most days. The wind gets quite strong too, so people wear heavy coats, and I honestly can't wait for spring to arrive.",
        expected: ["weather", "rain", "cold", "season", "grey"],
      },
      {
        question: "How often does the weather stop you doing things you've planned?",
        guidance:
          "Give the honest frequency, then one recent example of a plan that drowned or melted. A coping strategy rounds it off. Keep the pace easy; weather talk rewards natural delivery over complexity.",
        modelAnswer:
          "Regularly between October and March — it's basically a fourth flatmate with opinions. Last month a birthday picnic moved indoors in eleven minutes flat. My coping strategy is layers, a decent umbrella and lowered expectations. The barbecue owners of this city live in permanent optimism, which I admire.",
        weak: "Quite often in winter.",
        improved:
          "Quite often in winter, actually. Last week a football match was cancelled because the pitch froze, so we watched films at a friend's house instead.",
        expected: ["weather", "often", "rain", "plan", "because"],
      },
      {
        question: "Do you prefer hot weather or cold weather?",
        guidance:
          "Choose and defend it through what it lets you do — sleep, walk, eat — plus one honest complaint about your chosen side. A quick jab at the alternative adds texture. Borrow the sample's even pace for your own preference.",
        modelAnswer:
          "Cold, controversially. You can always add layers, but there's a legal limit to removing them. Cold weather means proper coats, roasted things and sleep like a hibernating animal. Heat turns me into a damp, irritable version of myself by eleven a.m. I'd take a frosty park over a beach any single day.",
        weak: "Hot weather, I like summer.",
        improved:
          "I much prefer hot weather, mainly because I grew up near the coast. Summer means swimming and long evenings outside, although I do find it hard to sleep in a heatwave.",
        expected: ["prefer", "hot", "cold", "weather", "because"],
      },
      {
        question: "Do you think the weather in your region has changed since you were a child?",
        guidance:
          "Give your impression with one or two observations — later winters, stranger storms — and what people say locally. Uncertainty is fine; vagueness is not. Follow the model's shape and compare your childhood skies with today's.",
        modelAnswer:
          "Noticeably, and the older generation here says so constantly. Winters used to mean snow that stayed for weeks; now it's one polite dusting a year, if that. Summers stretch longer and the storms arrive angrier — the church roof has opinions. Whether that's climate change or my neighbours grumbling, the apples on our allotment ripen a month early.",
        weak: "Yes, summers are hotter now.",
        improved:
          "I think so. Winters feel shorter and milder than when I was small, and the summer rains are heavier too, though I couldn't say if that's long-term change.",
        expected: ["weather", "change", "summer", "winter", "now"],
      },
      {
        question: "Would you consider moving somewhere with a completely different climate?",
        guidance:
          "Answer yes or no with the pull or push behind it — sun, seasons, family — and one hesitation. Weather answers reward personality, so let one image do the work. Track the model's structure, then picture your own relocation.",
        modelAnswer:
          "Constantly tempted, yes — usually around the third grey week of February. Lisbon or Nice call to me: proper light, winters that don't require tactical clothing. What stops me is family and the fear I'd miss real seasons — autumn is my one non-negotiable. Maybe a compromise: somewhere with four seasons and better publicity.",
        weak: "Maybe, if it was sunny.",
        improved:
          "I'd quite like to, honestly. Somewhere warm by the sea would lift my mood in winter, though I'd probably miss the mountains and the cool autumn mornings.",
        expected: ["would", "move", "weather", "warm", "country"],
      },
    ],
    vocabulary: [
      {
        word: "drizzle",
        partOfSpeech: "noun",
        meaning: "Light, fine rain.",
        example: "A persistent drizzle set in before the ceremony and never left.",
      },
      {
        word: "humid",
        partOfSpeech: "adjective",
        meaning: "Containing a high amount of water vapour; sticky air.",
        example: "August is so humid that laundry dries reluctantly and tempers shorten.",
      },
      {
        word: "to brighten up",
        partOfSpeech: "phrasal verb",
        meaning: "(Of weather) To become sunny or brighter.",
        example: "It brightened up the moment we surrendered and went indoors.",
      },
      {
        word: "to be caught out",
        partOfSpeech: "phrase",
        meaning: "To be surprised by bad weather unprepared.",
        example: "I was caught out by hail in July, of all months, and sheltered in a bookshop.",
      },
      {
        word: "scorching",
        partOfSpeech: "adjective",
        meaning: "Extremely hot.",
        example: "Two scorching weeks in the city and everyone becomes a philosopher about evening walks.",
      },
      {
        word: "frost",
        partOfSpeech: "noun",
        meaning: "Thin ice that forms on surfaces when it is very cold.",
        example: "The frost patterns on the shed window are better than any screensaver.",
      },
      {
        word: "changeable",
        partOfSpeech: "adjective",
        meaning: "Likely to change suddenly and often.",
        example: "Pack for changeable weather; in one afternoon you'll wear everything.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 16. Books — reading habits (intermediate, lexical focus)
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-books",
    title: "Part 1 practice — Books",
    topic: "books",
    difficulty: 3,
    proficiency: "intermediate",
    skill: "lexical",
    framing: "I'd like to ask you about your reading habits.",
    questions: [
      {
        question: "What kinds of books do you usually read?",
        guidance:
          "Name your genre and one favourite example, then say what the genre gives you. Titles and precise genre words build lexical range here. The sample shows the specificity; shelve your own tastes in it.",
        modelAnswer:
          "Mostly literary fiction with a weakness for anything set at sea. Right now I'm rereading a Norwegian novel about a lighthouse keeper that I first borrowed eight years ago. Non-fiction sneaks in — usually essay collections for the commute. My rule is one doorstop novel, then something slim as a palate cleanser.",
        weak: "Mostly thrillers and detective stories.",
        improved:
          "I mostly read thrillers, especially ones set in remote places. They keep me completely hooked on the tram, and I usually finish one every couple of weeks.",
        expected: ["book", "read", "novel", "because", "story"],
      },
      {
        question: "How many books do you manage to finish in a year?",
        guidance:
          "Give your number honestly, then compare it with your past self or your ambition, and name what limits it. A reading-habit detail makes it human. The layering is demonstrated; count your own annual pages.",
        modelAnswer:
          "Twenty-odd in a good year, down from forty at university when I read on every bus. The phone ate my reading time like a moth eating a jumper. This year's fix is paper only after nine p.m., and it's working — I've finished four since January and remembered all of them, which is the real test.",
        weak: "Maybe five or six a year.",
        improved:
          "Five or six a year now, fewer than before. Work takes most of my evenings, so I mainly read on holiday and on Sunday mornings with coffee.",
        expected: ["book", "read", "year", "time", "week"],
      },
      {
        question: "Do you prefer reading paper books or e-books?",
        guidance:
          "Choose your format and argue from experience — the smell, the search function, luggage weight — with one concrete reading moment as evidence. Concede the other's strength briefly. Follow the sample's weighing and defend your own shelf.",
        modelAnswer:
          "Paper for keeps, e-book for travel — a truce, not a preference. On holiday, an e-reader holds twelve novels and weighs less than a sandwich, which settles that argument. At home, though, I want margins to argue in and a spine to crack. The tablet also tempts me towards other apps; a paperback never once opened a browser.",
        weak: "Paper books, they feel nicer.",
        improved:
          "I prefer paper books because I remember what I read better and I love owning physical copies. For travelling, though, the e-reader is unbeatable for weight.",
        expected: ["prefer", "paper", "read", "because", "book"],
      },
      {
        question: "Did anyone read to you when you were a child?",
        guidance:
          "Name the reader and the ritual — bedtime, Sundays, a particular voice — then say what it gave you. One remembered title grounds the answer in memory. The sample demonstrates the recall; read your own childhood into it.",
        modelAnswer:
          "My grandmother, every night I stayed at her house, and she refused to skip a word. We worked through an entire railway series and a scandalous amount of Enid Blyton. She did all the voices, even the engines. I blame her entirely for my suspiciously large library card and my habit of reading menus aloud.",
        weak: "Yes, my mother at bedtime.",
        improved:
          "Yes, my mother read to my sister and me every night, usually animal stories. Those half hours made me love books early, and I still reread one of them most Christmases.",
        expected: ["child", "read", "story", "parent", "love"],
      },
      {
        question: "If a friend recommended a book you ended up disliking, what would you do?",
        guidance:
          "This tests tact: describe finishing or abandoning it, and how you would tell the friend honestly but kindly. Realistic social reasoning works best. Note the sample's balance, then navigate your own friendship book politics.",
        modelAnswer:
          "I'd give it a fair trial — sixty pages is my contract — and then quietly put it down forever. If she asked directly, I'd be honest but specific: the sentences were gorgeous, the plot and I disagreed. Recommendations are really gifts of taste, so I'd still take her next one. I once hated a book she adored; we now laugh about it.",
        weak: "I'd just stop reading it.",
        improved:
          "I'd just stop reading it, to be honest. I'd tell my friend gently that it wasn't for me, though I'd still try her next recommendation, because tastes differ.",
        expected: ["friend", "book", "tell", "honest", "would"],
      },
    ],
    vocabulary: [
      {
        word: "hard to put down",
        partOfSpeech: "phrase",
        meaning: "So gripping that the reader continues unwilling to stop.",
        example: "The spy thriller was hard to put down, even at two in the morning.",
      },
      {
        word: "to skim",
        partOfSpeech: "verb",
        meaning: "To read quickly for the general idea only.",
        example: "I skimmed the first chapter and promised myself I'd return to it properly.",
      },
      {
        word: "page-turner",
        partOfSpeech: "noun",
        meaning: "A book so exciting the reader rushes through it.",
        example: "That courtroom drama is a proper page-turner — my station stop came and went.",
      },
      {
        word: "to be engrossed in",
        partOfSpeech: "phrase",
        meaning: "To be completely absorbed by something.",
        example: "He was so engrossed in the biography that the kettle boiled dry.",
      },
      {
        word: "well-thumbed",
        partOfSpeech: "adjective",
        meaning: "Much used and therefore worn at the edges.",
        example: "My well-thumbed atlas has been to nine countries and one washing machine.",
      },
      {
        word: "plot twist",
        partOfSpeech: "noun phrase",
        meaning: "An unexpected turn in a story.",
        example: "The plot twist arrived on page four hundred and I gasped on a tram.",
      },
      {
        word: "to dip in and out of",
        partOfSpeech: "phrase",
        meaning: "To read something occasionally rather than continuously.",
        example: "Essay collections are made to be dipped in and out of, like a good box of chocolates.",
      },
      {
        word: "audiobook",
        partOfSpeech: "noun",
        meaning: "A recorded reading of a book.",
        example: "Audiobooks converted my commute into a small mobile library.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 17. Music — listening habits and live sound (intermediate)
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-music",
    title: "Part 1 practice — Music",
    topic: "music",
    difficulty: 3,
    proficiency: "intermediate",
    skill: "development",
    framing: "Let's talk about music now.",
    questions: [
      {
        question: "What kind of music do you listen to most these days?",
        guidance:
          "Name the genre and one or two artists, then explain the context — cooking, commuting, concentrating. Music answers need anchors to avoid staying abstract. The sample demonstrates the anchoring; tune it to your own playlists.",
        modelAnswer:
          "A lot of West African highlife lately, which I discovered through my barber's shop playlist. It's my cooking music — guitar lines that make chopping onions feel ceremonial. At work I switch to ambient instrumentals, anything without lyrics to steal my English brain. My most-played artist this year is apparently a cellist I can't pronounce.",
        weak: "Mostly pop and a bit of jazz.",
        improved:
          "Mainly pop music, with a bit of jazz when I'm working. Pop keeps me company on the commute, and the jazz station helps me concentrate in the evenings.",
        expected: ["music", "listen", "because", "song", "play"],
      },
      {
        question: "How often do you hear live music?",
        guidance:
          "State the frequency, then the venue and the last gig with one detail — the crowd, the sound, the ticket price. Live-music vocabulary does the developing here. Report your own concert calendar in the same layered way.",
        modelAnswer:
          "Far less than I'd like — twice a year, maybe three. The last proper gig was a brass band in a church hall, of all things, and it was magnificent. Standing tickets near me hover around a full day's wage, so I've become strategic. My compromise is the free lunchtime concerts at the conservatoire, which are criminally underattended.",
        weak: "Rarely, concerts are expensive.",
        improved:
          "Only once or twice a year, sadly. Tickets for big artists are expensive, but there's a free open-air series in my city each summer that I never miss.",
        expected: ["music", "live", "concert", "often", "ticket"],
      },
      {
        question: "Do you prefer listening to music on your own or at social events?",
        guidance:
          "Choose and explain what each setting gives you — detail, volume, shared singing — with one memory of doing it that way. A sentence about the other setting balances it. Copy the structure, then stage your own listening habits.",
        modelAnswer:
          "On my own, with headphones, at a volume my GP would question. Alone, I catch the bass line and the lyrics properly; at parties, music becomes wallpaper for shouting over. That said, one New Year's concert had three thousand strangers singing together, and I felt it in my ribs. Both have their place, but my default is solitude and good speakers.",
        weak: "On my own, it's more peaceful.",
        improved:
          "Definitely on my own. I notice the details in the songs better, and I can replay favourites, although singing along at festivals with friends is wonderful too.",
        expected: ["prefer", "music", "listen", "alone", "because"],
      },
      {
        question: "Has the music you like changed much since your teenage years?",
        guidance:
          "Contrast the playlist then and now, and trace one bridge — an artist, a friend, a film — that carried you across. Taste evolution shows reflection. Follow the sample's arc and trace your own musical history.",
        modelAnswer:
          "Enormously, though with embarrassing roots. At fourteen it was aggressive metal played at a volume that concerned the neighbours; now it's mostly acoustic, plus one notorious rapper turned jazz pianist. The bridge was a film soundtrack that sampled a saxophone record. My mum says my music finally reached a civilised volume, which I accept as praise.",
        weak: "Yes, my taste is calmer now.",
        improved:
          "Quite a lot. As a teenager I only listened to loud rock, but through a friend I discovered soul music, and now my playlists are far more varied.",
        expected: ["music", "change", "teenager", "now", "listen"],
      },
      {
        question: "If you could play any musical instrument perfectly, which would you choose?",
        guidance:
          "Pick your instrument and give two reasons — its sound, its role in a band, portability — plus one thing you would actually play. Enthusiasm carries hypotheticals. Study the layering and then take your imaginary seat in the orchestra.",
        modelAnswer:
          "The double bass, and I've thought about this more than is healthy. It's the instrument you lean into, physically, and every band quietly depends on it. I'd play in a small jazz trio on Sunday evenings, standards only, badly paid and perfectly happy. Piano is tempting for its self-sufficiency, but the bass has my whole heart.",
        weak: "The guitar, probably.",
        improved:
          "I'd choose the guitar, honestly. You can carry it anywhere and accompany singing, and I'd love to sit around a campfire playing songs everyone knows.",
        expected: ["would", "play", "instrument", "music", "because"],
      },
    ],
    vocabulary: [
      {
        word: "gig",
        partOfSpeech: "noun",
        meaning: "(Informal) A live music performance.",
        example: "We queued three hours for a gig in a room above a pub, worth every minute.",
      },
      {
        word: "playlist",
        partOfSpeech: "noun",
        meaning: "A selected list of tracks, often shared or streamed.",
        example: "My running playlist begins deceptively gently and betrays me by track four.",
      },
      {
        word: "earworm",
        partOfSpeech: "noun",
        meaning: "A tune that repeats itself endlessly in the head.",
        example: "The advert's jingle is a certified earworm; I've been humming it since Tuesday.",
      },
      {
        word: "on repeat",
        partOfSpeech: "phrase",
        meaning: "Played continuously from a short list.",
        example: "One album has been on repeat in our kitchen all month; the neighbours know it too.",
      },
      {
        word: "acoustic",
        partOfSpeech: "adjective",
        meaning: "Made without electronic amplification.",
        example: "The acoustic encore silenced the room completely.",
      },
      {
        word: "to sing along",
        partOfSpeech: "phrasal verb",
        meaning: "To sing with a song being played or performed.",
        example: "Nobody sings along at classical concerts, which I find quietly heroic.",
      },
      {
        word: "soundtrack",
        partOfSpeech: "noun",
        meaning: "The music accompanying a film or show.",
        example: "A single soundtrack can rescue an otherwise forgettable film.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 18. Sports — exercise, spectating and dreams (intermediate)
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-sports",
    title: "Part 1 practice — Sports",
    topic: "sports",
    difficulty: 3,
    proficiency: "intermediate",
    skill: "development",
    framing: "I'd like to ask you about sport and exercise.",
    questions: [
      {
        question: "What sports or exercise do you do regularly?",
        guidance:
          "Name your main activity with frequency and where, then one detail about standard or routine. Precision about your actual week beats listing aspirations. The model shows how; substitute your own training schedule.",
        modelAnswer:
          "Swimming, twice a week before work — forty lengths, badly, but consistently. There's also a Sunday five-a-side team where my role is roughly 'enthusiastic obstacle'. The swimming is the real sport; the football is social cover. Between them, my knees complain but my general mood is excellent.",
        weak: "I go running sometimes.",
        improved:
          "I go running once or twice a week, usually around the park near my flat. It clears my head after work, and I'm slowly building up to a ten-kilometre race.",
        expected: ["sport", "exercise", "play", "week", "because"],
      },
      {
        question: "How often do you watch sport, live or on television?",
        guidance:
          "Give the numbers for watching separately from doing, then one ritual or event you never miss. Distinguishing live from broadcast adds precision. Report your own spectating habits through the demonstrated layers.",
        modelAnswer:
          "Doing beats watching in my house, but I do follow the Six Nations every spring — that's non-negotiable rugby with my dad and a curry. Live matches, once or twice a season in the cheap seats, where the chanting is best. Otherwise, football highlights while ironing is about my limit.",
        weak: "Only big finals, honestly.",
        improved:
          "Only the big finals, honestly. I don't follow a league properly, but I'll watch a cup final with my flatmates, and live matches are rare because tickets cost too much.",
        expected: ["watch", "sport", "week", "match", "team"],
      },
      {
        question: "Do you prefer individual sports or team sports?",
        guidance:
          "Choose and explain through what each demands of you — discipline, company, accountability — with one experience of each if possible. Contrast does the development work here. The sample frames the trade-off; weigh your own sporting character in it.",
        modelAnswer:
          "Team sports for joy, individual for sanity — I need both, honestly. Swimming is moving meditation, no one to let down but me. Five-a-side is the opposite: shared blame, shared celebration, a pint after. If forced to choose, I'd take the team version; misery divided is bearable, and goals are sweeter multiplied.",
        weak: "Team sports, they're more fun.",
        improved:
          "I prefer team sports, mainly because the social side keeps me going. When I ran alone I gave up quickly, but with a team I never want to miss training.",
        expected: ["prefer", "team", "sport", "because", "alone"],
      },
      {
        question: "Did you do more sport when you were younger than you do now?",
        guidance:
          "Compare the volume and variety then and now, and name what changed — time, injuries, priorities. One lost and one found activity balances it. Follow the then-now shape with your own sporting history.",
        modelAnswer:
          "Shamefully, yes — childhood was just sport with meals attached. I did gymnastics, hockey and athletics weekly; now it's two swims and whatever five-a-side survives. Work and a desk did the damage, plus one wrist that clicks meteorologically. The difference is intensity: at fourteen I trained for trophies, now I train to outwit my chair.",
        weak: "Yes, much more at school.",
        improved:
          "Yes, a lot more. At school I trained four times a week across two sports, but since starting work it's dropped to one, and I really notice the difference in my energy.",
        expected: ["sport", "young", "school", "more", "now"],
      },
      {
        question: "If you could be professionally good at any sport, which would you pick?",
        guidance:
          "Choose your sport and build the fantasy with specifics — the venue, the moment of glory, the lifestyle. Playful hypotheticals still reward structure. See how the sample commits to the dream, then go professional in your own imagination.",
        modelAnswer:
          "Tennis, and I mean proper tour-level tennis. I'd choose the long, grinding five-set matches in the heat, the ones that become legends. The lifestyle appeals less than the duels — one opponent, no teammates to hide behind, every flaw exposed and repaired in public. Grass court final, tie-break in the fifth — I've rehearsed the speech since I was nine.",
        weak: "Football, it pays the best.",
        improved:
          "Football, obviously — the fame and the stadium roar. I'd want to be a midfielder, running the whole game, because I like the idea of controlling the tempo.",
        expected: ["would", "sport", "play", "good", "because"],
      },
    ],
    vocabulary: [
      {
        word: "to keep fit",
        partOfSpeech: "phrase",
        meaning: "To stay in good physical condition.",
        example: "I keep fit by cycling to work and pretending it's a training plan.",
      },
      {
        word: "five-a-side",
        partOfSpeech: "noun",
        meaning: "(British) Small-sided football, usually indoors.",
        example: "Our five-a-side team has one tactic: pass to Dani and apologise.",
      },
      {
        word: "personal best",
        partOfSpeech: "noun phrase",
        meaning: "An athlete's best-ever performance in an event.",
        example: "I shaved four seconds off my personal best and talked about it for a fortnight.",
      },
      {
        word: "spectator",
        partOfSpeech: "noun",
        meaning: "A person watching an event.",
        example: "I'm a nervous spectator; my family bans me from close matches.",
      },
      {
        word: "to warm up",
        partOfSpeech: "phrasal verb",
        meaning: "To prepare the body gently before exercise.",
        example: "We warm up with a jog and a competitive round of stretching.",
      },
      {
        word: "season ticket",
        partOfSpeech: "noun phrase",
        meaning: "A pass admitting the holder to all home matches.",
        example: "His season ticket has been in the family longer than the house.",
      },
      {
        word: "to thrash",
        partOfSpeech: "verb",
        meaning: "(Informal) To defeat heavily.",
        example: "We were thrashed 7–1 by a team whose goalkeeper brought a novel.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },

  // ---------------------------------------------------------------------------
  // 19. Social activities — gathering, parties and time with others
  // ---------------------------------------------------------------------------

  {
    kind: "part1",
    slug: "ielts-sb-p1-social",
    title: "Part 1 practice — Social activities",
    topic: "social-activities",
    difficulty: 3,
    proficiency: "intermediate",
    skill: "development",
    framing: "Finally, let's talk about how you like to spend time with other people.",
    questions: [
      {
        question: "What do you usually do when you meet up with friends?",
        guidance:
          "Give your default activity, the usual venue and the group size, then one tradition that has developed. Concrete social details make the answer. The sample models the layering; describe your own typical evening out.",
        modelAnswer:
          "Food is the constant — we build everything around a table. The default is six of us at the Turkish place on Fridays, mezzé shared across the whole table, arguments about the bill. Afterwards it splits: board games at Tomas's flat, or one beer standing at the bar. The group chat has run for eight years without a week of silence.",
        weak: "We usually just get coffee.",
        improved:
          "We usually just get coffee and talk for hours. There's a place near the station that never rushes us, and honestly the conversation matters more than anything else we'd do.",
        expected: ["friend", "meet", "usually", "talk", "because"],
      },
      {
        question: "How often do you go to parties or big social gatherings?",
        guidance:
          "Give the honest frequency and your feeling about big gatherings — love, tolerate, avoid — plus one recent example. Attitude words do the developing. Follow the sample's candour with your own party calendar.",
        modelAnswer:
          "Once or twice a month, which is exactly my tolerance. Big parties are fun for the first ninety minutes, then I start negotiating with the exits. The last one was a rooftop birthday where I ended up in the kitchen talking to a stranger about mushrooms till two. That's my party pattern: hide in a corner, find one person, have the best conversation.",
        weak: "Not very often these days.",
        improved:
          "Maybe once a month, usually birthdays or leaving parties. I enjoy the first hour, but loud music tires me, so I often end up chatting quietly in the kitchen.",
        expected: ["party", "often", "month", "friend", "because"],
      },
      {
        question: "Do you prefer small gatherings or large events?",
        guidance:
          "Pick your scale and defend it through what it gives you — conversation, energy, anonymity — with one example of each. An honest note about introversion or sociability adds personality. Borrow the frame and calibrate your own ideal crowd size.",
        modelAnswer:
          "Small gatherings, six people maximum, where conversation can go deep rather than wide. Large events have their moments — festivals are glorious, anonymous collective joy — but a good dinner party is where I actually see my friends. At big events you spend the night shouting 'WHAT?' at people you like. Give me a kitchen, a table, and time.",
        weak: "Small ones, with close friends.",
        improved:
          "I much prefer small gatherings. With four or five people you can have real conversations, whereas at big events I tend to float around without properly talking to anyone.",
        expected: ["prefer", "small", "group", "because", "talk"],
      },
      {
        question: "Do you think socialising has changed since your parents' generation?",
        guidance:
          "Compare forms of socialising — pubs versus apps, letters versus voice notes — with one observation from your own family. Avoid blaming technology wholesale; nuance scores. The sample demonstrates the balance; socialise your own comparison into it.",
        modelAnswer:
          "The mechanics have changed completely, the appetite hasn't. My parents' generation socialised by default — the pub, the club night, the unannounced visit. Now everything is a calendar invite, and half the chat happens in group messages my mum calls 'the typing'. Yet people still find their way to tables and kitchens. The tools changed; the tribal instinct survived intact.",
        weak: "Yes, it's all online now.",
        improved:
          "Yes, I'd say so. My parents' friends would just knock on each other's doors, whereas we organise everything through apps and group chats weeks in advance, though people still meet just as often.",
        expected: ["social", "change", "now", "people", "online"],
      },
      {
        question: "If you could organise a perfect day out for a group of friends, what would it involve?",
        guidance:
          "Plan the day in sequence — morning, afternoon, evening — with a venue, an activity and a food plan. Decisiveness and small specifics make it vivid. The model demonstrates the itinerary structure; organise your own perfect day inside it.",
        modelAnswer:
          "I've genuinely planned this: minibus to the coast at nine, whatever the weather decides. Morning walk along the cliffs, sandwiches on a wall, an unscheduled stop wherever looks interesting. Afternoon in the town — the tiny aquarium, the chip shop with the queue — then home by eight for guitars and cards in someone's living room. Low cost, high chaos, no itinerary beyond 'left at the harbour'.",
        weak: "A picnic, maybe, in summer.",
        improved:
          "Probably a picnic in the park in summer. Everyone brings one dish, we play badminton and cards, and it costs almost nothing, which suits every wallet in our group.",
        expected: ["would", "day", "friend", "together", "food"],
      },
    ],
    vocabulary: [
      {
        word: "to meet up",
        partOfSpeech: "phrasal verb",
        meaning: "To gather informally with people you know.",
        example: "We meet up every first Thursday, wherever life has scattered us.",
      },
      {
        word: "get-together",
        partOfSpeech: "noun",
        meaning: "An informal social gathering.",
        example: "Sunday get-togethers at my aunt's involve cards, cake and gossip.",
      },
      {
        word: "to catch up",
        partOfSpeech: "phrasal verb",
        meaning: "To exchange news after time apart.",
        example: "We caught up over one coffee that lasted three hours.",
      },
      {
        word: "the life and soul (of the party)",
        partOfSpeech: "phrase",
        meaning: "The most lively, entertaining person at a gathering.",
        example: "My cousin is the life and soul of every party until midnight exactly.",
      },
      {
        word: "wallflower",
        partOfSpeech: "noun",
        meaning: "A shy person who stays at the edge of social events.",
        example: "I'm a wallflower with opinions — quiet at parties, loud in kitchens.",
      },
      {
        word: "to have people over",
        partOfSpeech: "phrase",
        meaning: "To invite people to one's home.",
        example: "We have people over most Fridays; the sofa has learned to accommodate ten.",
      },
      {
        word: "small talk",
        partOfSpeech: "noun phrase",
        meaning: "Light conversation about unimportant things.",
        example: "I can manage small talk for one drink, then I start asking real questions.",
      },
    ],
    source: SPEAKING_BANK_SOURCE_NOTE,
  },
];
