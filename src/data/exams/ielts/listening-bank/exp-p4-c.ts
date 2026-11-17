/**
 * IELTS Listening Masterclass — audio question bank expansion.
 * PROMPT 54 expansion, Part 4 batch C: seven further academic-lecture
 * recordings (one lecturer, note/summary/sentence completion plus multiple
 * choice) covering the unified question-bank domains.
 *
 * Every recording is original TalkSy practice material written in the style
 * of the test — never official IELTS examination content.
 */

import { BANK_SOURCE_NOTE, type BankExercise } from "./types";

export const expP4CExercises: BankExercise[] = [
  {
    slug: "ielts-lb-p4-taste",
    title: "The science of taste",
    part: 4,
    difficulty: 4,
    estimatedMinutes: 8,
    topic: "science",
    accentMix: ["british"],
    intro:
      "You will hear part of a lecture on the science of taste. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "ashworth", name: "Dr Helen Ashworth", role: "senior lecturer in sensory physiology", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "ashworth", text: "Good morning, everyone. This week in the senses module we turn to taste — or, to give it its technical name, gustation. It's the sense people assume they understand best, and understand least. I'll begin by dismantling a myth." },
      { id: "s2", speakerId: "ashworth", text: "Almost everyone has met the taste map: sweet at the tip of the tongue, bitter at the back, sour and salty along the sides. That diagram has survived a century of textbooks, and it is simply wrong. Every region of the tongue that carries taste receptors can detect all five of the basic tastes." },
      { id: "s3", speakerId: "ashworth", text: "Those five are sweet, sour, salty, bitter and the latecomer, umami — a Japanese word usually rendered into English as savoury. It was identified at the start of the twentieth century by a chemist studying seaweed broth, and it took the rest of the world most of a century to accept umami as a genuine taste rather than a suggestion." },
      { id: "s4", speakerId: "ashworth", text: "So where does detection happen? In taste buds — and here's the first surprise: the tongue holds the majority, but buds also sit on the soft palate and along the throat, which is one reason flavour lingers after you swallow." },
      { id: "s5", speakerId: "ashworth", text: "Each bud is a cluster of some fifty to a hundred receptor cells, and it is constantly rebuilt. The textbook figure says every bud is renewed every seven days. The current consensus — and do note this carefully, because the older figure still gets repeated — is that a whole taste bud turns over roughly every ten days, with individual cells replaced even faster.", pauseAfterMs: 200 },
      { id: "s6", speakerId: "ashworth", text: "Once a receptor fires, the signal runs along two cranial nerves into the brain stem, and from there up to the insula — a fold of cortex tucked deep behind your ear. That's where sweet becomes sweet." },
      { id: "s7", speakerId: "ashworth", text: "Let's turn now to flavour, because this is the point students find hardest. Taste on its own is a blunt instrument: what we call flavour is mostly smell — volatile compounds from the food drifting up behind the palate into the nose. That's the retronasal route, and it does most of the work." },
      { id: "s8", speakerId: "ashworth", text: "The classic demonstration: blindfolded volunteers sip a fruit drink while holding their nose, and report something faintly sweet and little else. Release the nose, and the flavour floods in instantly. Try it tonight with your dinner." },
      { id: "s9", speakerId: "ashworth", text: "Temperature matters as well. Bitterness in coffee reads far harsher while the cup is scalding than once it has cooled, and a little chill numbs sweetness — which is why melted ice cream tastes oversweet." },
      { id: "s10", speakerId: "ashworth", text: "What's striking here is the variation between people. Count the fungiform papillae — the mushroom-shaped bumps scattered over the front of the tongue — and you find a spectrum. Those at the top end, roughly a quarter of the population, are classified as supertasters: they experience bitterness, especially in certain vegetables, far more intensely than the rest of us.", pauseAfterMs: 200 },
      { id: "s11", speakerId: "ashworth", text: "The food industry follows this work closely. Public-health campaigns want salt and sugar cut; the problem is that reformulated products taste thin. One workaround is the bitter blocker — a compound that dampens the bitter receptors, so less sugar is needed to balance a recipe." },
      { id: "s12", speakerId: "ashworth", text: "Before I conclude, a caveat. Taste is not chemistry alone; expectation steers it too. Pour the same wine into an expensive-looking bottle and a plain one, and many of the same people will describe two different drinks. The tongue reports; the brain edits." },
      { id: "s13", speakerId: "ashworth", text: "Next week: the vestibular system, and how your ear keeps you upright. Read chapter nine beforehand, and bring a pencil — there will be diagrams.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–6",
        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "THE SCIENCE OF TASTE — lecture notes" }],
          [{ kind: "text", text: "The myth" }],
          [{ kind: "text", text: "The 'taste map' gives each basic taste its own area of the" }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "The five basic tastes" }],
          [{ kind: "text", text: "Umami is usually translated into English as" }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Where detection happens" }],
          [{ kind: "text", text: "Buds sit on the tongue, in the throat and on the soft" }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "A whole taste bud is rebuilt roughly every" }, { kind: "blank", no: 4 }, { kind: "text", text: "days" }],
          [{ kind: "text", text: "Flavour" }],
          [{ kind: "text", text: "Most of what we call flavour is supplied by the sense of" }, { kind: "blank", no: 5 }],
          [{ kind: "text", text: "People and variation" }],
          [{ kind: "text", text: "Supertasters have an above-average count of" }, { kind: "blank", no: 6 }, { kind: "text", text: "papillae" }],
        ],
        blanks: [
          { no: 1, answer: "tongue", alternatives: [] },
          { no: 2, answer: "savoury", alternatives: [] },
          { no: 3, answer: "palate", alternatives: [] },
          { no: 4, answer: "ten", alternatives: ["10"], numbers: true },
          { no: 5, answer: "smell", alternatives: [] },
          { no: 6, answer: "fungiform", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: true,
        meta: {
          skills: ["detail", "paraphrase", "note-taking", "corrections"],
          keywords: ["taste map", "savoury", "soft palate", "every ten days", "smell", "fungiform"],
          trap: {
            family: "correction",
            lure: ["seven"],
            note:
              "The textbook figure of seven days is the lure — the lecturer corrects it to roughly every ten days, and the corrected value is the one that scores.",
          },
          explanation:
            "The notes track the lecture's signposted stages: every tongue region detects all five basic tastes, umami translates as savoury, buds also sit on the soft palate, a whole bud renews roughly every ten days — the corrected figure, not the textbook's seven — flavour is largely smell, and supertasters carry extra fungiform papillae.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does the lecturer say about the traditional taste map?",
        options: [
          "It was drawn up to help food companies market sugar.",
          "It is misleading, because every part of the tongue can detect all five basic tastes.",
          "It is broadly accurate, except that it leaves out umami.",
        ],
        correct: [1],
        meta: {
          skills: ["gist", "paraphrase", "detail"],
          keywords: ["simply wrong", "all five", "taste map"],
          explanation:
            "The lecturer calls the taste map simply wrong and stresses that every receptor-bearing region of the tongue can detect all five basic tastes, so the option describing the map as misleading is correct. It was never a food-company diagram, and she says it fails for every taste, not only umami.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 8",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "Why does the lecturer describe volunteers sipping a drink while holding their nose?",
        options: [
          "To show how much of flavour depends on retronasal smell.",
          "To prove that bitter tastes fade as a drink cools.",
          "To demonstrate that supertasters detect flavours sooner than others.",
        ],
        correct: [0],
        meta: {
          skills: ["purpose", "paraphrase", "detail"],
          keywords: ["holding their nose", "retronasal", "floods in"],
          explanation:
            "The nose-holding demonstration shows that flavour floods in only once the nose is released, proving that retronasal smell, not taste alone, carries most of what we call flavour. Temperature and supertaster sensitivity are discussed elsewhere in the lecture, but neither is the point of the demonstration.",
        },
      },
    ],
    transcriptNote:
      "The textbook's seven-day renewal figure is corrected to ten days — the designed lure for question 4 — while the taste map is rejected outright and the nose-pinching demonstration carries the flavour point for questions 7 and 8.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-crowdfunding",
    title: "Crowdfunding and small business",
    part: 4,
    difficulty: 3,
    estimatedMinutes: 7,
    topic: "economics",
    accentMix: ["british"],
    intro:
      "You will hear part of a lecture on crowdfunding and small business. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "reid", name: "Dr Samuel Reid", role: "lecturer in entrepreneurship at the business school", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "reid", text: "Good afternoon. Today's business-school lecture steps outside the bank manager's office and onto the internet, to look at crowdfunding — and at what it realistically offers a small business that cannot get a conventional loan." },
      { id: "s2", speakerId: "reid", text: "The idea is older than the web. When France gave the United States the Statue of Liberty, the stone pedestal was paid for by more than a hundred thousand small donations collected through a newspaper. Swap the newspaper for a website and you have the modern model: many people, each contributing a little." },
      { id: "s3", speakerId: "reid", text: "Platforms generally run one of three models. On a rewards platform, backers pledge money in return for a product or a perk — effectively a pre-order. On an equity platform, they buy a small slice of the company itself. And on a lending platform, the crowd supplies a loan that the business repays with interest." },
      { id: "s4", speakerId: "reid", text: "Why would a founder choose this route? Let's turn to the motives. First, finance: a young firm with no collateral and no trading history is precisely the customer a bank is least keen on. Second — and this is the underrated one — validation. If strangers will pre-order a product that does not yet exist, the founder holds evidence of real demand rather than a supportive family's reassurance." },
      { id: "s5", speakerId: "reid", text: "Third, marketing. A campaign is a public audition: it gathers an audience, earns press mentions, and leaves the founder with a mailing list even when the funding fails." },
      { id: "s6", speakerId: "reid", text: "What separates campaigns that hit their target from the rest? The research is remarkably consistent. Campaigns with a short film do far better than those without. A realistic target matters too — ask for too much and you may end up with nothing, because most platforms operate an all-or-nothing rule: fall short of the threshold and every pledge is returned to its owner.", pauseAfterMs: 200 },
      { id: "s7", speakerId: "reid", text: "Momentum counts as much as the total. A typical successful campaign raises a third of its goal within the first few days, largely from the founder's own network, and that early surge persuades strangers the project is credible." },
      { id: "s8", speakerId: "reid", text: "Now the risks — and let me spend a moment here, because the success stories get the headlines. Delivery is the big one. A project that asks for twenty thousand pounds and receives ninety thousand has just acquired ninety thousand pounds' worth of obligations, often without the capacity to fulfil them." },
      { id: "s9", speakerId: "reid", text: "There is exposure, too: a public pitch is a public blueprint, and unscrupulous competitors have copied ideas mid-campaign. And the platforms are not charities — most charge a fee of around five per cent of everything raised, plus payment-processing costs on top." },
      { id: "s10", speakerId: "reid", text: "What's striking, across the studies, is which projects flourish: craft, design and food — things whose appeal you can show in ninety seconds of film. A specialist machine part struggles to make the same emotional case." },
      { id: "s11", speakerId: "reid", text: "So my advice to a small business weighing it up: treat a campaign as a pre-sale with obligations attached, not as a gift. Budget for the fee, plan the updates, and above all be certain you can deliver what you promise, at the price you promise it." },
      { id: "s12", speakerId: "reid", text: "Next week we'll examine invoice finance and other alternatives, and you'll hear from a founder whose campaign hit its target in eleven hours — and who now describes that as the worst thing that ever happened to her company.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "summary",
        label: "Questions 1–6",
        instruction: "Complete the summary below. Write ONE WORD ONLY for each answer.",
        layout: [
          [{ kind: "text", text: "In rewards-based crowdfunding," }, { kind: "blank", no: 1 }, { kind: "text", text: "receive a product or perk for their money, while on lending platforms the crowd is repaid with" }, { kind: "blank", no: 2 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "The lecturer highlights a further gain: pre-orders give" }, { kind: "blank", no: 3 }, { kind: "text", text: "that demand is real. Under most platforms' all-or-nothing rule, every pledge is" }, { kind: "blank", no: 4 }, { kind: "text", text: "if the target is missed." }],
          [{ kind: "text", text: "Founders must budget for a platform" }, { kind: "blank", no: 5 }, { kind: "text", text: "of around five per cent, and remember that overfunding can leave a business unable to" }, { kind: "blank", no: 6 }, { kind: "text", text: "its orders." }],
        ],
        blanks: [
          { no: 1, answer: "backers", alternatives: [] },
          { no: 2, answer: "interest", alternatives: [] },
          { no: 3, answer: "validation", alternatives: [] },
          { no: 4, answer: "returned", alternatives: [] },
          { no: 5, answer: "fee", alternatives: [] },
          { no: 6, answer: "deliver", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: false,
        meta: {
          skills: ["paraphrase", "gist", "detail", "note-taking"],
          keywords: ["backers pledge", "repays with interest", "validation", "every pledge is returned", "fee", "deliver"],
          explanation:
            "The summary compresses the lecture's mechanics and warnings: backers on a rewards platform receive products or perks, lending platforms are repaid with interest, validation is the underrated motive, pledges are returned under the all-or-nothing rule, platforms charge a fee of about five per cent, and overfunded projects must still deliver what they promised.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "Which benefit of crowdfunding does the lecturer describe as underrated?",
        options: [
          "The free publicity a campaign earns, including a ready-made mailing list.",
          "The proof of demand provided by strangers pre-ordering an unfinished product.",
          "The interest-free advance a platform pays out once the target is reached.",
        ],
        correct: [1],
        meta: {
          skills: ["opinion", "paraphrase", "detail"],
          keywords: ["underrated", "evidence of real demand", "mailing list"],
          trap: {
            family: "mention-lure",
            lure: ["mailing list"],
            note:
              "The mailing list is a genuine benefit, but it belongs to the marketing motive; the underrated benefit the lecturer singles out is validation — evidence of real demand.",
          },
          explanation:
            "The lecturer names finance first, validation second — explicitly labelling it the underrated benefit — and marketing third. The mailing list is genuine but belongs to the marketing motive, so the publicity option is the designed lure; the underrated benefit is the proof of demand that pre-orders from strangers provide.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 8",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What is the point of the founder's story at the end of the lecture?",
        options: [
          "Instant success can load a business with obligations it cannot meet.",
          "Reaching the target quickly attracts much better press coverage.",
          "Founders should set their funding target far above what they need.",
        ],
        correct: [0],
        meta: {
          skills: ["intention", "paraphrase", "gist"],
          keywords: ["eleven hours", "worst thing", "obligations"],
          explanation:
            "The closing anecdote is a warning about overfunding: a campaign that reaches its target in eleven hours has instantly acquired obligations on the same scale, echoing the earlier point about delivery risk. The lecturer is not praising fast funding, and nothing in the talk recommends setting higher targets.",
        },
      },
    ],
    transcriptNote:
      "The lecturer ranks his three motives, singling out validation as the underrated one, and the closing eleven-hour anecdote is a warning about delivery obligations, not a celebration of speed.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-medieval",
    title: "The first universities",
    part: 4,
    difficulty: 5,
    estimatedMinutes: 9,
    topic: "history",
    accentMix: ["british"],
    intro:
      "You will hear part of a lecture on the first universities in medieval Europe. First you have some time to look at questions 1 to 7. (pause) Now listen and answer questions 1 to 9.",
    speakers: [
      { id: "whitfield", name: "Professor Clare Whitfield", role: "professor of medieval history", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "whitfield", text: "Good morning. In this session of the medieval-history module we go back to the twelfth century to ask where the university came from — and the first thing to grasp is that nobody built one. A university was not a campus; it was a corporation, and the word universitas means a guild." },
      { id: "s2", speakerId: "whitfield", text: "A guild needs members. In some cities the masters formed the guild; in others, the students did. That single difference produced two rival models, and I want to walk you through both." },
      { id: "s3", speakerId: "whitfield", text: "Bologna, the oldest, took the student route. Its law students — many of them in their twenties, paying their own way — organised themselves into guilds and hired their professors on contract. The students set the fees, and they could fine a lecturer for starting late, for skating over difficult chapters, or for wandering away from the assigned text. An underperforming master simply wasn't rehired." },
      { id: "s4", speakerId: "whitfield", text: "Paris ran the opposite arrangement: there, the guild of masters controlled teaching, licences and discipline, and theology sat at the top of the curriculum. The colleges of Paris began not as teaching institutions but as charitable boarding houses — the most famous of them, later known as the Sorbonne, was endowed around twelve fifty-seven to lodge poor students who could not afford the city's rents.", pauseAfterMs: 200 },
      { id: "s5", speakerId: "whitfield", text: "Notice what the two models share: the university owned almost nothing. Teaching happened in hired halls and churches. The institution was its people and their privileges, not their real estate." },
      { id: "s6", speakerId: "whitfield", text: "Turning now to what students actually studied. The undergraduate course was the seven liberal arts — the trivium of grammar, logic and rhetoric, then the quadrivium of arithmetic, geometry, music and astronomy. Only beyond that came the higher faculties of law, medicine and theology." },
      { id: "s7", speakerId: "whitfield", text: "How was it taught? Two formats dominated. The lectio: the master read a passage of the set text aloud, slowly, and commented line by line — because books were scarce, and a single volume might cost as much as a master mason earned in a year. Owning copies of your own was out of the question for nearly everyone in the room." },
      { id: "s8", speakerId: "whitfield", text: "Alongside it ran the disputatio: a formal debate, governed by strict rules, in which one student defended a thesis against objections raised by his classmates. It is the ancestor of the modern viva, and it trained a particular kind of quick, adversarial thinking.", pauseAfterMs: 200 },
      { id: "s9", speakerId: "whitfield", text: "Now the migration story. In twelve hundred and nine, after the townsfolk of Oxford hanged two students — the documents make grim reading — a party of scholars walked east and settled in the fenland town of Cambridge. The date the modern city prefers to celebrate is twelve fifteen, an anniversary chosen for its tidiness, but the documentary trail points firmly to twelve hundred and nine." },
      { id: "s10", speakerId: "whitfield", text: "Who were these students? Boys of fourteen or fifteen, occasionally younger; all of them male; granted a rough clerical status that placed them outside the town courts. They wore gowns, were sorted into 'nations' by homeland, and — this is the detail visitors miss — they all spoke Latin. Whatever your mother tongue, inside the hall you argued in Latin." },
      { id: "s11", speakerId: "whitfield", text: "And what did a degree confer? A licence to teach — with the ambitious principle that it should carry weight everywhere: a master of Paris could, in theory, teach in Bologna or Oxford. That idea, a qualification valid far beyond the place that granted it, may be the most durable gift the Middle Ages made to higher education." },
      { id: "s12", speakerId: "whitfield", text: "Historians of an older generation dismissed the medieval arts course as sterile logic-chopping — all syllogisms and no curiosity. I'd push back on that verdict. Inside those syllogisms, students learned to test an argument, to separate a claim from its evidence, and to lose a debate gracefully. That is a curriculum, not an obstacle course." },
      { id: "s13", speakerId: "whitfield", text: "Next week we reach the printing press, when the scarcity that justified the lecture hall suddenly vanished and the universities had to decide what they were for. Read the set chapter, and bring your questions with you.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–7",
        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "THE FIRST UNIVERSITIES — lecture notes" }],
          [{ kind: "text", text: "Definitions" }],
          [{ kind: "text", text: "'Universitas' originally meant a" }, { kind: "blank", no: 1 }, { kind: "text", text: "of masters or students" }],
          [{ kind: "text", text: "Bologna — the student model" }],
          [{ kind: "text", text: "Student guilds hired professors, set fees and could even" }, { kind: "blank", no: 2 }, { kind: "text", text: "a lecturer for starting late" }],
          [{ kind: "text", text: "Paris — the masters' model" }],
          [{ kind: "text", text: "Teaching and licences were controlled by the guild of" }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "The Sorbonne began as a charitable" }, { kind: "blank", no: 4 }, { kind: "text", text: "house for poor students" }],
          [{ kind: "text", text: "Curriculum and teaching" }],
          [{ kind: "text", text: "Undergraduates studied the seven" }, { kind: "blank", no: 5 }, { kind: "text", text: "arts: the trivium and the quadrivium" }],
          [{ kind: "text", text: "The disputatio: a" }, { kind: "blank", no: 6 }, { kind: "text", text: "held to strict rules, ancestor of the viva" }],
          [{ kind: "text", text: "Cambridge" }],
          [{ kind: "text", text: "Scholars settled there in" }, { kind: "blank", no: 7 }],
        ],
        blanks: [
          { no: 1, answer: "guild", alternatives: [] },
          { no: 2, answer: "fine", alternatives: [] },
          { no: 3, answer: "masters", alternatives: [] },
          { no: 4, answer: "boarding", alternatives: [] },
          { no: 5, answer: "liberal", alternatives: [] },
          { no: 6, answer: "debate", alternatives: [] },
          { no: 7, answer: "1209", alternatives: [], numbers: true },
        ],
        wordLimit: 1,
        numbersAllowed: true,
        meta: {
          skills: ["detail", "paraphrase", "note-taking", "numbers"],
          keywords: ["guild", "fine a lecturer", "guild of masters", "boarding houses", "liberal arts", "formal debate", "twelve hundred and nine"],
          trap: {
            family: "correction",
            lure: ["twelve fifteen", "1215"],
            note:
              "The city's preferred date of twelve fifteen is the lure — the lecturer corrects it to twelve hundred and nine, the year the documents actually support.",
          },
          explanation:
            "The notes follow the lecture's two models and the migration story: a universitas was a guild; Bologna's student guilds could fine their hired lecturers; in Paris the guild of masters controlled teaching; the Sorbonne began as a charitable boarding house; undergraduates read the seven liberal arts; the disputatio was a formal debate; and the documented founding of Cambridge is twelve hundred and nine, not the tidier twelve fifteen the city celebrates.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 8",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "According to the lecturer, why did masters read the set text aloud, line by line?",
        options: [
          "The guild's rules required every word to be recited from memory.",
          "Books were scarce and costly, so students could not own copies.",
          "Slow reading gave students time to translate from their mother tongues.",
        ],
        correct: [1],
        meta: {
          skills: ["detail", "paraphrase", "cause"],
          keywords: ["read a passage", "scarce", "master mason"],
          explanation:
            "The lectio existed because books were scarce and a single volume could cost a master mason's annual earnings, so the master read the set text aloud and the students listened. Nothing is said about memorisation requirements, and translation is not the reason given, however plausible it may sound.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 9",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What is the lecturer's own opinion of the medieval arts course?",
        options: [
          "It deserved the older historians' verdict of sterile logic-chopping.",
          "It built genuine skills of argument and evidence-testing despite its reputation.",
          "Its main purpose was to occupy students between religious festivals.",
        ],
        correct: [1],
        meta: {
          skills: ["opinion", "attribution", "paraphrase"],
          keywords: ["sterile logic-chopping", "push back", "syllogisms"],
          trap: {
            family: "attribution",
            lure: ["sterile logic-chopping"],
            note:
              "The sterile logic-chopping verdict is attributed to an older generation of historians; the lecturer explicitly pushes back against it, so the option repeating their verdict is the trap.",
          },
          explanation:
            "The sterile logic-chopping verdict belongs to an older generation of historians; the lecturer explicitly pushes back on it, crediting the syllogism-based course with teaching students to test arguments, separate claims from evidence, and lose debates gracefully. Her own view is therefore that the course trained real analytical skills.",
        },
      },
    ],
    transcriptNote:
      "Two designed traps: the Cambridge foundation date is corrected from twelve fifteen to twelve hundred and nine, and the 'sterile logic-chopping' verdict is an older generation's view that the lecturer explicitly rejects.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-wildlife-corridors",
    title: "Wildlife corridors",
    part: 4,
    difficulty: 4,
    estimatedMinutes: 8,
    topic: "environment",
    accentMix: ["british"],
    intro:
      "You will hear part of a lecture on wildlife corridors. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "hollis", name: "Dr James Hollis", role: "conservation biologist giving a departmental seminar", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "hollis", text: "Good afternoon, and welcome to this week's conservation seminar. Our subject is connectivity — the wildlife corridor: what it is, whether it works, and what it costs the rest of us." },
      { id: "s2", speakerId: "hollis", text: "Start with the problem it answers. A century of road-building, farming and suburban sprawl has chopped the landscape into fragments. Each wood, marsh or moor becomes an island, and island populations are fragile: cut off from their neighbours, they inbreed, lose genetic variety, and a single harsh winter or epidemic can erase one forever. Conservationists call this fragmentation, and it is arguably the quietest of the environmental crises." },
      { id: "s3", speakerId: "hollis", text: "The remedy looks disarmingly simple on paper: keep, or restore, strips of habitat — a hedgerow, a riverside margin, a line of trees — so that the islands touch. Animals can then disperse, find mates beyond their natal patch, and recolonise ground emptied by fire or disease. That is all a corridor is." },
      { id: "s4", speakerId: "hollis", text: "Corridors come in more shapes than people expect. The most photogenic is the green bridge: a fully vegetated overpass carrying grass and shrubs across a motorway, so that wildlife crosses overhead, mostly unaware the road exists. The Netherlands has been building these ecoducts since the nineteen eighties, and a few have become minor tourist attractions." },
      { id: "s5", speakerId: "hollis", text: "Cheaper, and largely invisible, are the underpasses: culverts and tunnels beneath the carriageway, suiting otters, badgers and amphibians on their spring migration to breeding ponds. Where a continuous strip is impossible, there are stepping stones — a chain of small woods or ponds spaced close enough that an animal can hopscotch from one to the next." },
      { id: "s6", speakerId: "hollis", text: "Does any of it work? Let me offer one piece of evidence from our own department. A colleague sampled the DNA of dormice — small, strictly arboreal rodents, which almost never cross open ground — from woods linked by an old hedgerow network, and compared them with dormice from equally large but isolated woods. The hedgerow populations showed clear gene flow; the isolated ones showed none. The mice, in effect, were commuting along the hedges.", pauseAfterMs: 200 },
      { id: "s7", speakerId: "hollis", text: "Camera-trap studies on the big green bridges tell a similar story. Within months of opening, the cameras record deer, elk and even bears using the structure — provided it is wide, planted with native shrubs for cover, and fenced along the road edge so that animals are funnelled towards the crossing instead of wandering into traffic." },
      { id: "s8", speakerId: "hollis", text: "What's striking here is how much detail decides success or failure. A narrow, grass-only bridge may satisfy the generalists and still fail the shy species that need cover. Width, vegetation, and the fencing that steers animals towards the crossing can matter as much as the corridor's very existence." },
      { id: "s9", speakerId: "hollis", text: "Now the costs. A large green bridge runs to several million pounds, which is why transport agencies applaud them in principle and hesitate in the budget meeting. On farmland, a hedgerow corridor is cheap but not free: it takes land out of production, and it needs decades of the right management." },
      { id: "s10", speakerId: "hollis", text: "And don't assume any hedge will serve. Dormice need a thick, untrimmed hedgerow; a gappy one, flailed hard every autumn, is no use to them at all — it may as well not exist." },
      { id: "s11", speakerId: "hollis", text: "Before I conclude, one honest caveat: connectivity cuts both ways. The same corridor that lets dormice disperse can speed the spread of wildfire, epidemic disease or invasive plants. One review described river corridors acting as expressways for alien species." },
      { id: "s12", speakerId: "hollis", text: "So the design question is never simply 'connect everything'. It is: connect for the species you are trying to help, and think hard about what else might travel the same path. Next week, please come with the county hedgerow survey in front of you — we'll argue about where the next corridor should go.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–6",
        instruction: "Complete the notes below. Write ONE WORD ONLY for each answer.",
        layout: [
          [{ kind: "text", text: "WILDLIFE CORRIDORS — lecture notes" }],
          [{ kind: "text", text: "The problem" }],
          [{ kind: "text", text: "Habitat" }, { kind: "blank", no: 1 }, { kind: "text", text: "leaves isolated populations at risk" }],
          [{ kind: "text", text: "The remedy" }],
          [{ kind: "text", text: "Animals can disperse, find mates and" }, { kind: "blank", no: 2 }, { kind: "text", text: "ground emptied by fire or disease" }],
          [{ kind: "text", text: "Forms a corridor can take" }],
          [{ kind: "text", text: "Green bridge: a fully vegetated" }, { kind: "blank", no: 3 }, { kind: "text", text: "across a motorway" }],
          [{ kind: "text", text: "Underpasses and" }, { kind: "blank", no: 4 }, { kind: "text", text: "beneath the carriageway suit otters and amphibians" }],
          [{ kind: "text", text: "A chain of small woods or ponds works as" }, { kind: "blank", no: 5 }, { kind: "text", text: "stones" }],
          [{ kind: "text", text: "What makes a crossing succeed" }],
          [{ kind: "text", text: "A crossing's" }, { kind: "blank", no: 6 }, { kind: "text", text: ", cover and funnel fencing decide which species use it" }],
        ],
        blanks: [
          { no: 1, answer: "fragmentation", alternatives: [] },
          { no: 2, answer: "recolonise", alternatives: [] },
          { no: 3, answer: "overpass", alternatives: [] },
          { no: 4, answer: "culverts", alternatives: [] },
          { no: 5, answer: "stepping", alternatives: [] },
          { no: 6, answer: "width", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: false,
        meta: {
          skills: ["detail", "paraphrase", "note-taking"],
          keywords: ["fragmentation", "recolonise", "overpass", "culverts", "stepping stones", "width"],
          explanation:
            "The notes gather the lecture's definitions: fragmentation is the problem; corridors let animals disperse and recolonise emptied ground; a green bridge is a vegetated overpass; culverts and underpasses serve otters and amphibians; stepping stones are chains of closely spaced patches; and width — alongside cover and fencing — decides which species will actually use a crossing.",
        },
      },
      {
        id: "q2",
        type: "sentence",
        label: "Questions 7–8",
        instruction: "Complete the sentences below. Write NO MORE THAN TWO WORDS for each answer.",
        layout: [
          [{ kind: "text", text: "7 In the dormouse study, woods linked by hedgerows showed clear" }, { kind: "blank", no: 7 }, { kind: "text", text: ", unlike isolated woods." }],
          [{ kind: "text", text: "8 Dormice will use only a hedgerow that is thick and" }, { kind: "blank", no: 8 }, { kind: "text", text: "." }],
        ],
        blanks: [
          { no: 7, answer: "gene flow", alternatives: [] },
          { no: 8, answer: "untrimmed", alternatives: [] },
        ],
        wordLimit: 2,
        numbersAllowed: false,
        meta: {
          skills: ["detail", "paraphrase", "negation"],
          keywords: ["gene flow", "thick, untrimmed hedgerow"],
          trap: {
            family: "negation",
            lure: ["gappy"],
            note:
              "The negation is the trap: a gappy hedgerow is dismissed as no use at all, so only a thick, untrimmed hedge satisfies the sentence.",
          },
          explanation:
            "The dormouse DNA study showed clear gene flow along the hedgerow network and none in isolated woods. For the second sentence, the lecturer negates the assumption that any hedge will do: dormice need a thick, untrimmed hedgerow, while a gappy, flailed one is explicitly dismissed as no use at all.",
        },
      },
    ],
    transcriptNote:
      "The dormouse study separates gene flow from mere movement, and question 8 turns on the negation — gappy hedgerows are dismissed as useless, so only 'thick and untrimmed' scores.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-automation",
    title: "Workplace automation",
    part: 4,
    difficulty: 4,
    estimatedMinutes: 8,
    topic: "workplace",
    accentMix: ["british"],
    intro:
      "You will hear part of a lecture on automation in the workplace. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "sandhu", name: "Dr Priya Sandhu", role: "reader in organisational behaviour", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "sandhu", text: "Good morning. Today's lecture in the organisational-behaviour series takes on the question that follows me out of every careers fair: automation, and whether the machines are coming for your job. My aim is to swap the headlines for the research findings." },
      { id: "s2", speakerId: "sandhu", text: "The most useful single idea is this: automation rarely takes jobs; it takes tasks. A job — a nurse's, an accountant's, a farmer's — is a bundle of tasks, and machines absorb the routine ones: repetitive, rule-following, predictable work. What remains, and what grows, is the non-routine share." },
      { id: "s3", speakerId: "sandhu", text: "The classic case is the cash machine. When self-service machines spread through the nineteen eighties and nineties, forecasters expected branch staff to vanish. The numbers told a different story: branches became cheaper to run, banks opened more of them, and tellers were redeployed to advice and sales — helping customers choose products a screen couldn't explain." },
      { id: "s4", speakerId: "sandhu", text: "There's a name for that pattern: the productivity effect. When one task becomes cheaper, demand for the human work around it tends to rise. A recent hospital trial showed the same twist — software flagged suspicious scans, radiologists read them faster, and as referrals grew, the clinicians' workload went up, not down." },
      { id: "s5", speakerId: "sandhu", text: "Let's turn to where the damage does fall. Routine jobs in the middle of the skill distribution — clerical work, repetitive assembly, basic bookkeeping — have hollowed out. Labour economists call this polarisation: strong demand at the top for abstract, analytical work, steady demand at the bottom for manual work that resists mechanisation, and a shrinking middle." },
      { id: "s6", speakerId: "sandhu", text: "So which tasks resist the machines? Three families keep appearing in the studies. Judgement under ambiguity — deciding what matters when the rules run out. Negotiation and persuasion — reading the room, adjusting the pitch. And dexterity combined with empathy — the plumber's hands, the carer's reassurance — which turns out to be extraordinarily difficult to replicate.", pauseAfterMs: 200 },
      { id: "s7", speakerId: "sandhu", text: "What does automation feel like from the inside? My team followed a warehouse that introduced voice-picking: headsets that tell pickers where to walk and what to grab. Productivity rose by about a fifth, and pickers said their evenings were less exhausted — no more mental route-planning on the way home. But several also reported that shifts felt shorter and yet duller, because the thinking had been taken out of the walk." },
      { id: "s8", speakerId: "sandhu", text: "There's a lesson buried in that anecdote: efficiency and engagement are not the same dial, and a system can raise the first while quietly lowering the second." },
      { id: "s9", speakerId: "sandhu", text: "For managers, that is the design challenge, and it has a name: the human-in-the-loop principle. Let the machine carry the routine and flag the exceptions; keep people in charge of the odd cases and the judgement calls. Systems built that way get adopted. Systems that treat people as leftover machinery quietly fail." },
      { id: "s10", speakerId: "sandhu", text: "What's striking in the survey data is that the biggest obstacle is not the technology at all — it's training. In the firms we studied, workers who received structured retraining reported the highest satisfaction after automation arrived, while firms that simply reassigned people watched resignations and error rates climb together." },
      { id: "s11", speakerId: "sandhu", text: "So when students ask whether automation is a threat, my answer is: it's a task renegotiation. The job you'll hold in ten years probably carries today's title. What changes is the mix inside it — and how willing your employer is to retrain you for the new blend." },
      { id: "s12", speakerId: "sandhu", text: "Next week: the four-day-week trials, and whether compressed schedules survive contact with a Monday morning. Please read the distribution-centre case study, and mark the points where you'd have designed the system differently.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–6",
        instruction: "Complete the notes below. Write ONE WORD ONLY for each answer.",
        layout: [
          [{ kind: "text", text: "WORKPLACE AUTOMATION — lecture notes" }],
          [{ kind: "text", text: "Core finding" }],
          [{ kind: "text", text: "Research suggests automation removes routine" }, { kind: "blank", no: 1 }, { kind: "text", text: ", not whole jobs" }],
          [{ kind: "text", text: "The cash-machine story" }],
          [{ kind: "text", text: "Bank tellers were redeployed to" }, { kind: "blank", no: 2 }, { kind: "text", text: "and sales work" }],
          [{ kind: "text", text: "Where losses concentrate" }],
          [{ kind: "text", text: "Middle-skill routine work declines: a pattern called" }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Tasks that resist automation" }],
          [{ kind: "text", text: "Resistant task 1:" }, { kind: "blank", no: 4 }, { kind: "text", text: "under ambiguity — deciding what matters when the rules run out" }],
          [{ kind: "text", text: "Resistant task 2: dexterity combined with" }, { kind: "blank", no: 5 }],
          [{ kind: "text", text: "Resistant task 3: negotiation and persuasion — reading the room" }],
          [{ kind: "text", text: "Making it work" }],
          [{ kind: "text", text: "Satisfaction is highest where firms provide structured" }, { kind: "blank", no: 6 }],
        ],
        blanks: [
          { no: 1, answer: "tasks", alternatives: [] },
          { no: 2, answer: "advice", alternatives: [] },
          { no: 3, answer: "polarisation", alternatives: [] },
          { no: 4, answer: "judgement", alternatives: [] },
          { no: 5, answer: "empathy", alternatives: [] },
          { no: 6, answer: "retraining", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: false,
        meta: {
          skills: ["detail", "paraphrase", "note-taking"],
          keywords: ["takes tasks", "advice and sales", "polarisation", "judgement under ambiguity", "empathy", "structured retraining"],
          explanation:
            "The notes collect the lecture's core findings: automation removes routine tasks rather than whole jobs; tellers were redeployed to advice and sales; the hollowing of middle-skill work is called polarisation; the resistant skills are judgement, negotiation and dexterity with empathy; and satisfaction after automation depends on structured retraining.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What did the hospital trial with the scan-reading software show?",
        options: [
          "Cheaper diagnosis reduced the number of scans that clinicians ordered.",
          "Automating part of a task can increase the demand for the human part.",
          "Radiologists' accuracy declined when they relied on the software's flags.",
        ],
        correct: [1],
        meta: {
          skills: ["inference", "paraphrase", "gist"],
          keywords: ["productivity effect", "referrals", "radiologists"],
          explanation:
            "The hospital trial illustrates the productivity effect: because software made reading scans cheaper and faster, clinicians ordered more, referrals grew, and the radiologists' workload rose rather than fell. The trial is evidence that automation can increase demand for the human part of a task, not reduce it.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 8",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "How did the warehouse pickers describe working with voice-picking?",
        options: [
          "Productive but dull, because the system removed the mental route-planning.",
          "More exhausting, because every shift involved far more walking.",
          "Unsettling, because the headsets kept giving confusing instructions.",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "negation", "paraphrase"],
          keywords: ["voice-picking", "less exhausted", "duller"],
          trap: {
            family: "negation",
            lure: ["exhausted"],
            note:
              "The script says the pickers' evenings were less exhausted — the negation is easy to miss. Fatigue decreased; what increased was monotony, so the 'more exhausting' option flips the finding.",
          },
          explanation:
            "The pickers reported two things: productivity up by about a fifth and evenings less exhausted, yet shifts that felt duller because the mental route-planning had gone. The option claiming they grew more tired flips the negation — tiredness is precisely what the pickers said decreased.",
        },
      },
    ],
    transcriptNote:
      "The warehouse pickers were less tired but more bored, which is the double finding behind question 8, and the hospital trial shows the radiologists' workload rising because of automation, not shrinking.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-music-brain",
    title: "Music and the brain",
    part: 4,
    difficulty: 5,
    estimatedMinutes: 9,
    topic: "science",
    accentMix: ["british"],
    intro:
      "You will hear part of a public lecture on music and the brain. First you have some time to look at questions 1 to 7. (pause) Now listen and answer questions 1 to 9.",
    speakers: [
      { id: "chair", name: "Session chair", role: "host of the public science series", accent: "british" },
      { id: "osei", name: "Dr Daniel Osei", role: "guest neuroscientist speaking on music and the brain", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "chair", text: "Good evening, and welcome to the public science series. Our speaker tonight is Dr Daniel Osei, a neuroscientist who has spent fifteen years asking what a brain is really doing while it listens to music. Daniel — the floor is yours." },
      { id: "s2", speakerId: "osei", text: "Thank you. Let me open with a claim I'll defend for the next half hour: there is no single music centre in the brain. Listening to music recruits more of the cortex, and more systems at once, than almost anything else we ask the brain to do." },
      { id: "s3", speakerId: "osei", text: "Put a volunteer in a scanner with a favourite track and the auditory cortex lights up, of course — but so does the motor system, quietly firing along with the beat, and so does the limbic reward circuitry, the same network that answers to food and friendship. The brain doesn't merely process music; it participates in it." },
      { id: "s4", speakerId: "osei", text: "Let's turn to the most measurable pleasure music offers: the chill, the shiver at the chorus. A study from Montreal tracked it with brain scanning, and the finding worth carrying away is a timing trick. Dopamine rose in one region while the listener was anticipating the peak — the build-up, the bar before the drop — and in a second region at the peak itself. Reward is delivered twice: once for the prediction, once for its arrival.", pauseAfterMs: 200 },
      { id: "s5", speakerId: "osei", text: "That anticipatory machinery has a mischievous cousin: the earworm. Collect people's involuntary loops and the same profile keeps appearing — simple melodic contours, plenty of repetition, and often one small oddity, an unexpected jump or an extra beat, that snags the attention. Unfinished songs loop far more readily than finished ones. The brain, it seems, cannot leave a melody unresolved." },
      { id: "s6", speakerId: "osei", text: "Now two clinical terms, and I'll ask you to keep them apart, because people who write about the mind confuse them constantly. The first is amusia — the genuine, congenital form of tone-deafness. It is mainly a deficit of pitch: people with amusia can't tell whether two notes differ, even though their sense of rhythm is often perfectly intact. It runs in families, and it is rarer than people assume — only a few per cent of the population." },
      { id: "s7", speakerId: "osei", text: "The second is musical anhedonia. These are people — perhaps three in every hundred — who hear music perfectly well, whose hearing and whose reward circuitry test as entirely normal, yet who feel nothing at all when it plays. They'll tell you, mildly, that they've never understood the fuss. For me, this is the most elegant demonstration that musical pleasure is a specific circuit, not a general one.", pauseAfterMs: 200 },
      { id: "s8", speakerId: "osei", text: "What's striking is how trainable that circuitry proves. Career musicians develop thicker wiring — the corpus callosum, the bridge between the hemispheres, measurably enlarges. But a childhood of scales isn't required: in one study, adults with no training took piano lessons for six months, and by the end their responses to piano tones had measurably sharpened. The adult brain stays open for business." },
      { id: "s9", speakerId: "osei", text: "Clinicians exploit that openness. After a stroke, a patient may lose speech entirely — aphasia — while the machinery for melody, which lives partly in the other hemisphere, survives. Therapists train such patients to sing the phrases they cannot say, on a rising contour, and then peel the melody away until plain speech returns. With Parkinson's patients, a steady rhythmic cue can unlock a walking rhythm that verbal instruction alone cannot." },
      { id: "s10", speakerId: "osei", text: "So why does this matter beyond the clinic? Here is my closing argument. At its root, the brain is a prediction engine — it survives by guessing what happens next. Music is prediction turned into sport: it sets an expectation, teases it, delays it, then either keeps the promise or elegantly breaks it. That is why a mere pastime can feel like a whole-body event." },
      { id: "s11", speakerId: "osei", text: "Whether music evolved for courtship, for bonding mothers and infants, or as a fortunate accident, the jury is still out — and I rather enjoy the argument. What is not in doubt is what it does now: it is the prediction engine's favourite gym. Thank you for listening." },
      { id: "s12", speakerId: "chair", text: "Thank you, Daniel. We'll take questions in the atrium, and the recording will be online from tomorrow.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–7",
        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "MUSIC AND THE BRAIN — lecture notes" }],
          [{ kind: "text", text: "Whole-brain activity" }],
          [{ kind: "text", text: "Music engages the auditory cortex, the motor system and the" }, { kind: "blank", no: 1 }, { kind: "text", text: "circuitry" }],
          [{ kind: "text", text: "The chill response" }],
          [{ kind: "text", text: "Dopamine rises while the listener is" }, { kind: "blank", no: 2 }, { kind: "text", text: "the peak, and again at the peak itself" }],
          [{ kind: "text", text: "Earworms" }],
          [{ kind: "text", text: "Typical features: simple melodic" }, { kind: "blank", no: 3 }, { kind: "text", text: ", much repetition, one small oddity" }],
          [{ kind: "text", text: "Two clinical conditions" }],
          [{ kind: "text", text: "Amusia: mainly a deficit of" }, { kind: "blank", no: 4 }, { kind: "text", text: ", not of rhythm" }],
          [{ kind: "text", text: "Musical" }, { kind: "blank", no: 5 }, { kind: "text", text: ": hearing and reward responses are normal, yet music brings no pleasure" }],
          [{ kind: "text", text: "Plasticity and therapy" }],
          [{ kind: "text", text: "Adult beginners' brains measurably changed after" }, { kind: "blank", no: 6 }, { kind: "text", text: "months of piano lessons" }],
          [{ kind: "text", text: "Some stroke patients are trained to" }, { kind: "blank", no: 7 }, { kind: "text", text: "phrases they cannot say" }],
        ],
        blanks: [
          { no: 1, answer: "reward", alternatives: [] },
          { no: 2, answer: "anticipating", alternatives: [] },
          { no: 3, answer: "contours", alternatives: [] },
          { no: 4, answer: "pitch", alternatives: [] },
          { no: 5, answer: "anhedonia", alternatives: [] },
          { no: 6, answer: "six", alternatives: ["6"], numbers: true },
          { no: 7, answer: "sing", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: true,
        meta: {
          skills: ["detail", "paraphrase", "note-taking", "vocabulary"],
          keywords: ["reward circuitry", "anticipating the peak", "melodic contours", "deficit of pitch", "anhedonia", "six months", "sing the phrases"],
          trap: {
            family: "similar-sound",
            lure: ["amusia"],
            note:
              "Amusia and anhedonia sound alike and sit close together in the lecture; the condition of feeling no pleasure is musical anhedonia, while amusia is the pitch deficit that answers the previous blank.",
          },
          explanation:
            "The notes follow the lecture's arc: music recruits the reward circuitry along with the auditory and motor regions; dopamine rises while anticipating the peak as well as at its arrival; earworms have simple melodic contours; amusia is a deficit of pitch; musical anhedonia is the absent-pleasure condition; adult beginners changed after six months of lessons; and aphasic patients are trained to sing phrases they cannot say.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 8",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does the lecturer find most instructive about musical anhedonia?",
        options: [
          "It shows that musical pleasure runs on a specific circuit, though hearing and general reward are normal.",
          "It confirms that an inability to carry a tune always accompanies an absence of pleasure.",
          "It proves that everyone can be taught to enjoy music with practice.",
        ],
        correct: [0],
        meta: {
          skills: ["inference", "paraphrase", "gist"],
          keywords: ["specific circuit", "three in every hundred", "anhedonia"],
          explanation:
            "For the lecturer, musical anhedonia is elegant precisely because hearing and general reward circuitry test as normal, which shows that musical pleasure depends on a specific circuit. He carefully separates the condition from amusia, the pitch deficit, and never claims anhedonia can be trained away.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 9",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "How does the lecturer finally explain music's hold on the brain?",
        options: [
          "It evolved so that communities could coordinate work through rhythm.",
          "It exercises the brain's core talent for predicting what comes next.",
          "It keeps auditory regions busy that would otherwise sit idle.",
        ],
        correct: [1],
        meta: {
          skills: ["conclusion", "paraphrase", "gist"],
          keywords: ["prediction engine", "expectation", "gym"],
          explanation:
            "His closing argument is that the brain is a prediction engine and music is prediction turned into sport — an expectation set, teased and either satisfied or elegantly broken. The evolutionary origins are described as unresolved, so the coordination option overstates the evidence, and idle capacity is never mentioned.",
        },
      },
    ],
    transcriptNote:
      "Keep amusia and anhedonia apart — the pitch deficit comes first in the lecture, the missing-pleasure condition second — and note that dopamine is released during anticipation as well as at the peak itself.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-fair-trade",
    title: "Fair trade",
    part: 4,
    difficulty: 4,
    estimatedMinutes: 8,
    topic: "economics",
    accentMix: ["british"],
    intro:
      "You will hear part of a lecture on fair trade. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "mensah", name: "Dr Grace Mensah", role: "development economist", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "mensah", text: "Good afternoon. This week's development-economics lecture examines a label you walk past every time you buy coffee: fair trade. What does the mark actually guarantee, who gains from it, and what do the evaluations say?" },
      { id: "s2", speakerId: "mensah", text: "The mechanics first, because they are widely misunderstood. Fair trade is a certification, not a charity. Certified producer organisations — usually cooperatives of smallholder farmers — are guaranteed a minimum price for their crop. When the world market price drops below that floor, the cooperative still receives the guaranteed minimum; when the market price stands higher, the floor simply doesn't apply. On top of the price, buyers pay a social premium: a fixed sum per tonne, which the cooperative's members vote to spend on community projects." },
      { id: "s3", speakerId: "mensah", text: "That premium is the part farmers themselves talk about most, and the list is refreshingly unglamorous: school roofs, a village well, drying tables for the coffee harvest, a refrigerator for a small clinic's vaccines." },
      { id: "s4", speakerId: "mensah", text: "Now let's turn to the evidence on income, because this is where the argument gets interesting. In years when the world price slumps, the floor works exactly like insurance — studies of coffee cooperatives during price troughs find certified farmers holding incomes steady while uncertified neighbours take the fall." },
      { id: "s5", speakerId: "mensah", text: "But in years when the world price sits comfortably above the floor — as it did through much of the twenty-tens — the guaranteed minimum pays nothing extra, and the benefit shrinks to the premium, which is real but modest." },
      { id: "s6", speakerId: "mensah", text: "There are three criticisms worth taking seriously, and I'll give each its due. First, inclusion. Certification is organised around cooperatives of landowning farmers, so the very poorest people in these communities — seasonal pickers, tenants, labourers without land — stand largely outside the scheme. The safety net, in other words, catches those who already hold a plot.", pauseAfterMs: 200 },
      { id: "s7", speakerId: "mensah", text: "Second, quality. The guaranteed price is paid per tonne regardless of cup quality, and some economists argue this weakens the incentive to invest in better processing — though the cooperative studies I've read find the effect small, and those drying tables in point three suggest the opposite conclusion." },
      { id: "s8", speakerId: "mensah", text: "Third, cost. Certification is not free: annual fees, audit preparation, record-keeping. For a large cooperative those overheads spread thin; for a small one they can bite deep into the premium." },
      { id: "s9", speakerId: "mensah", text: "There's a demand-side limit as well, which consumers rarely hear about. A cooperative may earn the right to sell all of its crop on fair-trade terms, yet only a fraction of that crop finds certified buyers. The remainder sells at the ordinary world price." },
      { id: "s10", speakerId: "mensah", text: "Who pays the markup? You do — and the behavioural research suggests most of you will: in surveys, consumers report a willingness to pay something like ten to fifteen per cent more, and trust in the label survives contact with the small print better than most advertising claims. A few years ago, roughly a third of the bananas sold in this country carried the mark." },
      { id: "s11", speakerId: "mensah", text: "Where does that leave the scheme? My own reading of the evidence is that fair trade is a good safety net and a poor development strategy. The deeper problems — dependence on a single crop, and the fact that most of coffee's final value is captured after it leaves the farm — need different tools: diversification, and investment in processing at origin, so that roasting, not just growing, happens in the producing country.", pauseAfterMs: 200 },
      { id: "s12", speakerId: "mensah", text: "Next week we'll look at one country that tried exactly that industrial policy, and at what became of its coffee sector. Do the reading, and bring your objections — this is a lecture that welcomes disagreement.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "summary",
        label: "Questions 1–6",
        instruction: "Complete the summary below. Write NO MORE THAN TWO WORDS for each answer.",
        layout: [
          [{ kind: "text", text: "Fair trade guarantees certified cooperatives a minimum price plus a social" }, { kind: "blank", no: 1 }, { kind: "text", text: ", and when the world price falls below the" }, { kind: "blank", no: 2 }, { kind: "text", text: ", farmers'" }, { kind: "blank", no: 3 }, { kind: "text", text: "are protected." }],
          [{ kind: "text", text: "However, the scheme favours landowning farmers over seasonal" }, { kind: "blank", no: 4 }, { kind: "text", text: "and other landless workers, and cooperatives must pay annual" }, { kind: "blank", no: 5 }, { kind: "text", text: "and audit costs. Only part of a certified crop finds" }, { kind: "blank", no: 6 }, { kind: "text", text: "on fair-trade terms." }],
        ],
        blanks: [
          { no: 1, answer: "premium", alternatives: [] },
          { no: 2, answer: "floor", alternatives: [] },
          { no: 3, answer: "incomes", alternatives: [] },
          { no: 4, answer: "pickers", alternatives: [] },
          { no: 5, answer: "fees", alternatives: [] },
          { no: 6, answer: "buyers", alternatives: ["certified buyers"] },
        ],
        wordLimit: 2,
        numbersAllowed: false,
        meta: {
          skills: ["paraphrase", "gist", "detail", "note-taking"],
          keywords: ["social premium", "guaranteed minimum", "incomes steady", "seasonal pickers", "annual fees", "certified buyers"],
          explanation:
            "The summary compresses the mechanics and the critiques: certified cooperatives receive a social premium on top of the price; the floor protects incomes when the world price falls below it; landless workers such as seasonal pickers stand outside the scheme; annual fees and audit costs bite; and only part of the crop finds certified buyers, so the rest sells at the ordinary world price.",
        },
      },
      {
        id: "q2",
        type: "sentence",
        label: "Questions 7–8",
        instruction: "Complete the sentences below. Write NO MORE THAN TWO WORDS for each answer.",
        layout: [
          [{ kind: "text", text: "7 The lecturer's verdict: fair trade works as a" }, { kind: "blank", no: 7 }, { kind: "text", text: "but not as a development strategy." }],
          [{ kind: "text", text: "8 More of coffee's final value should stay in the producing country through" }, { kind: "blank", no: 8 }, { kind: "text", text: "at origin." }],
        ],
        blanks: [
          { no: 7, answer: "safety net", alternatives: [] },
          { no: 8, answer: "roasting", alternatives: ["processing"] },
        ],
        wordLimit: 2,
        numbersAllowed: false,
        meta: {
          skills: ["paraphrase", "detail", "conclusion"],
          keywords: ["safety net", "roasting", "processing at origin"],
          explanation:
            "Her verdict is quoted almost directly: a good safety net but a poor development strategy. For the second sentence, the deeper fix is value captured at origin — roasting or otherwise processing the crop in the producing country — rather than exporting it raw and watching the value leave.",
        },
      },
    ],
    transcriptNote:
      "The price floor only pays out when the world price falls below it, and the closing verdict separates a safety net from a development strategy, which carries questions 7 and 8.",
    source: BANK_SOURCE_NOTE,
  },
];
