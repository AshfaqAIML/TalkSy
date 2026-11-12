/**
 * Advanced speaking activities (B2 – C1) — the seven required types:
 * discussions, debates, interview simulations, presentations, impromptu
 * speaking, storytelling and professional communication.
 */

import type { SpeakingActivity } from "./types";

export const advancedSpeakingActivities: SpeakingActivity[] = [
  {
    id: "spk-adv-discussion",
    slug: "discussions",
    tier: "advanced",
    kind: "discussion",
    title: "Discussions",
    description:
      "Explore a topic from several sides: weigh arguments, concede points, and steer toward a shared conclusion.",
    estimatedMinutes: 10,
    tags: ["speaking", "critical-thinking"],
    tasks: [
      {
        id: "di1",
        type: "open",
        title: "Remote work: blessing or burnout?",
        prompt:
          "Discuss remote work with a partner who mostly opposes it. Present your position, respond to one counter-argument, and propose a compromise. Speak for about a minute and a half.",
        hints: [
          "Discussion language: 'That's a fair point, however…', 'Building on what you said…', 'Where I see it differently is…'",
          "A good discussion ends with a synthesis, not a winner.",
        ],
        cues: [
          { id: "c1", label: "Your position, with nuance" },
          { id: "c2", label: "One argument + evidence or experience" },
          { id: "c3", label: "Respond to the counter-argument" },
          { id: "c4", label: "A compromise or synthesis" },
        ],
        checklist: [
          { id: "position", label: "You stated a nuanced position", anyOf: ["i believe", "in my view", "on balance", "my position", "i would argue", "i think", "largely", "to a great extent"] },
          { id: "argument", label: "You developed an argument with support", anyOf: ["because", "for instance", "for example", "research", "in my experience", "studies", "data"] },
          { id: "concede", label: "You acknowledged a counter-argument", anyOf: ["admittedly", "granted", "it's true that", "that's a fair point", "of course", "critics argue", "some argue", "however"] },
          { id: "synthesis", label: "You moved toward a synthesis or compromise", anyOf: ["perhaps a", "middle ground", "hybrid", "compromise", "best of both", "what if", "one solution", "combine"] },
        ],
        topicKeywords: ["remote", "work", "office", "flexibility", "team", "balance"],
        targetWords: ["flexibility", "commute", "collaboration", "boundaries", "productivity", "isolation", "hybrid"],
        minWords: 90,
        targetSeconds: 90,
        maxSeconds: 210,
        difficulty: "hard",
        modelAnswer:
          "On balance, I'd argue remote work has done more good than harm — but only for people who can draw boundaries. The flexibility is transformative: no commute means two extra hours a day, and my own team shipped some of its best work from kitchens and bedrooms. That said, the counter-argument about isolation is real; junior staff especially miss the informal learning of an office. So my position is a structured hybrid: two or three anchor days for collaboration, deep-work days at home, and explicit rules like 'cameras on before ten'. The problem was never the location — it was pretending one arrangement fits everyone.",
      },
    ],
  },
  {
    id: "spk-adv-debate",
    slug: "debates",
    tier: "advanced",
    kind: "debate",
    title: "Debates",
    description:
      "Argue a position you might not hold: open strongly, rebut cleanly, close memorably. Judged on structure and signposting.",
    estimatedMinutes: 10,
    tags: ["speaking", "argumentation"],
    tasks: [
      {
        id: "de1",
        type: "open",
        title: "Motion: Social media does more harm than good",
        prompt:
          "You are speaking FOR the motion. Deliver a one-minute opening argument: claim, two supports, rebuttal of the obvious objection, and a closing line.",
        hints: [
          "Debate frame: 'The motion stands because…', 'My opponent will say…, but…', 'For these reasons, the motion must stand.'",
          "Concede nothing you don't have to — but rebut fairly.",
        ],
        cues: [
          { id: "c1", label: "Opening claim" },
          { id: "c2", label: "Support 1" },
          { id: "c3", label: "Support 2" },
          { id: "c4", label: "Pre-emptive rebuttal" },
          { id: "c5", label: "Closing line" },
        ],
        checklist: [
          { id: "claim", label: "You opened with a clear claim", anyOf: ["the motion", "i propose", "we must", "my position", "i stand", "this house", "i firmly"] },
          { id: "supports", label: "You gave two distinct supports", anyOf: ["first", "second", "firstly", "secondly", "moreover", "furthermore", "additionally"] },
          { id: "rebuttal", label: "You rebutted the opposing view", anyOf: ["opponents", "the other side", "my opponent", "sceptics", "skeptics", "will argue", "will say", "but this", "however"] },
          { id: "close", label: "You closed with a memorable line", anyOf: ["for these reasons", "in conclusion", "therefore", "the motion", "ladies and gentlemen", "i urge", "must stand", "i rest"] },
        ],
        topicKeywords: ["social media", "harm", "good", "society", "mental", "connect"],
        targetWords: ["algorithm", "polarisation", "polarization", "attention", "wellbeing", "well-being", "misinformation", "amplify", "deliberately"],
        minWords: 100,
        targetSeconds: 90,
        maxSeconds: 210,
        difficulty: "challenge",
        modelAnswer:
          "This house believes social media does more harm than good — and I stand firmly behind that motion. Firstly, the architecture is the harm: engagement algorithms deliberately amplify outrage, because anger is the cheapest attention there is. Secondly, the mental-health evidence is no longer contestable; rates of anxiety among teenagers track the platforms' own adoption curves almost perfectly. My opponents will point to connection — the grandmother seeing her grandson's first steps. But note what that argument concedes: the good is what users bring, the harm is what the system adds. We are not debating whether people can be kind online; we are debating whether these platforms, as built, net harm us. The evidence says they do. For these reasons, the motion must stand.",
      },
    ],
  },
  {
    id: "spk-adv-interview",
    slug: "interview-simulations",
    tier: "advanced",
    kind: "interview-simulation",
    title: "Interview Simulations",
    description:
      "The STAR method under pressure: situation, task, action, result — plus salary questions answered with grace.",
    estimatedMinutes: 12,
    tags: ["speaking", "career"],
    tasks: [
      {
        id: "iv1",
        type: "open",
        title: "Tell me about a challenge you overcame",
        prompt:
          "Answer the classic interview question with the STAR method: Situation, Task, Action, Result. Keep it under two minutes and end with what you learned.",
        hints: [
          "STAR signposts help the listener: 'The situation was…', 'My task was…', 'What I did…', 'The result…'",
          "Numbers make results credible: 'cut the delay by 40%'.",
        ],
        cues: [
          { id: "c1", label: "Situation — where and when" },
          { id: "c2", label: "Task — your responsibility" },
          { id: "c3", label: "Action — what YOU did" },
          { id: "c4", label: "Result — with a number if possible" },
          { id: "c5", label: "What you learned" },
        ],
        checklist: [
          { id: "situation", label: "You set the situation briefly", anyOf: ["situation", "at the time", "when i was", "in my", "we were", "the company", "my team was"] },
          { id: "task", label: "You defined your task or role", anyOf: ["my task", "my role", "i was responsible", "my job", "i had to", "my responsibility"] },
          { id: "action", label: "You described concrete actions you took", anyOf: ["what i did", "i decided", "i organised", "i organized", "i built", "i negotiated", "i proposed", "i led", "so i"] },
          { id: "result", label: "You stated a concrete result", anyOf: ["as a result", "the result", "in the end", "we managed", "it reduced", "it increased", "we finished", "per cent", "percent", "%"] },
          { id: "learned", label: "You said what you learned", anyOf: ["i learned", "i learnt", "taught me", "since then", "takeaway"] },
        ],
        topicKeywords: ["situation", "task", "action", "result", "learned"],
        minWords: 90,
        targetSeconds: 100,
        maxSeconds: 210,
        difficulty: "hard",
        modelAnswer:
          "Certainly. The situation: in my previous role, our biggest client threatened to leave because deliveries were arriving late. My task as operations lead was to find the cause within one week and present a fix. What I did was map every step of the process and discover that 80% of the delay came from a single handover between two departments that nobody owned. I proposed a shared dashboard, negotiated the rules with both managers, and ran a two-week pilot. As a result, average delivery time fell by 30% and the client renewed for two more years. What I learned is that most 'people problems' are actually handover problems — and that measuring a conflict calmly is faster than arguing about it.",
      },
      {
        id: "iv2",
        type: "open",
        title: "Why should we hire you?",
        prompt:
          "Answer 'Why should we hire you?' in under a minute: match your two strongest strengths to the role, and add one differentiator.",
        hints: [
          "Structure: strength → evidence → link to their need.",
          "The differentiator should be true and memorable — not a cliché.",
        ],
        checklist: [
          { id: "strength1", label: "You presented a first strength with evidence", anyOf: ["first", "i bring", "my strength", "i have", "years of", "experience in"] },
          { id: "strength2", label: "You presented a second strength", anyOf: ["second", "also", "additionally", "beyond that", "moreover"] },
          { id: "link", label: "You linked strengths to the role or company", anyOf: ["your", "this role", "the position", "your team", "this job", "which is exactly"] },
          { id: "differentiator", label: "You added a differentiator", anyOf: ["what sets me apart", "uniquely", "unlike most", "few people", "in addition", "and finally", "i am also", "i'm also"] },
        ],
        topicKeywords: ["hire", "strength", "experience", "role", "team"],
        minWords: 70,
        targetSeconds: 70,
        maxSeconds: 180,
        difficulty: "hard",
        modelAnswer:
          "You should hire me for two reasons. First, I bring exactly the technical depth this role asks for — five years building the same kind of data pipelines, most recently at twice your current scale. Second, I'm the person teams call when a launch is at risk; last year I led the recovery of a project that was six weeks behind, and we shipped on time. Beyond that, what sets me apart is that I document as I go — the next hire will inherit a system they can actually understand, which your job posting suggests you care about.",
      },
    ],
  },
  {
    id: "spk-adv-presentation",
    slug: "presentations",
    tier: "advanced",
    kind: "presentation",
    title: "Presentations",
    description:
      "A clear structure beats beautiful slides every time: hook, agenda, three points with signposting, and a call to action.",
    estimatedMinutes: 12,
    tags: ["speaking", "professional"],
    tasks: [
      {
        id: "pt1",
        type: "open",
        title: "A two-minute product pitch",
        prompt:
          "Present a two-minute pitch for a product or idea you know. Open with a hook, preview your structure, deliver three signposted points, and end with a call to action.",
        hints: [
          "Signpost relentlessly: 'Let's start with…', 'That brings me to…', 'So, to sum up…'",
          "The hook should be a question, number or story — never 'Today I want to talk about…' alone.",
        ],
        cues: [
          { id: "c1", label: "Hook — grab attention" },
          { id: "c2", label: "Preview — what you will cover" },
          { id: "c3", label: "Point 1, 2, 3 — signposted" },
          { id: "c4", label: "Summary + call to action" },
        ],
        checklist: [
          { id: "hook", label: "You opened with a hook", anyOf: ["imagine", "did you know", "every year", "what if", "how many", "have you ever", "three years ago", "millions", "ask yourself"] },
          { id: "preview", label: "You previewed the structure", anyOf: ["i'll cover", "i will cover", "three things", "three points", "let me show", "in the next", "firstly", "here's what"] },
          { id: "signposts", label: "You signposted between points", anyOf: ["let's start", "first", "second", "third", "that brings me", "now", "next", "finally", "moving on"] },
          { id: "cta", label: "You closed with a summary and call to action", anyOf: ["to sum up", "in summary", "so what", "i invite", "i encourage", "let's", "join", "try", "start today", "i ask"] },
        ],
        topicKeywords: ["product", "problem", "solution", "you", "today"],
        minWords: 120,
        targetSeconds: 120,
        maxSeconds: 240,
        difficulty: "hard",
        modelAnswer:
          "Have you ever lost an hour of your day just deciding what to eat? Millions of us do, every single day. In the next two minutes I'll show you three things: the problem, our answer, and what you can do about it today. Let's start with the problem — decision fatigue is real, and it eats our willpower before the workday even begins. Second, our answer: a meal planner that learns your tastes and locks a weekly menu in ninety seconds. Third, the results: our first thousand users report five hours saved per week and noticeably less stress around food. So, to sum up: the problem is universal, the solution is learning, and the results are measurable. I invite you to try it free for a month — and take your evenings back.",
      },
    ],
  },
  {
    id: "spk-adv-impromptu",
    slug: "impromptu-speaking",
    tier: "advanced",
    kind: "impromptu",
    title: "Impromptu Speaking",
    description:
      "Thirty seconds to think, ninety to speak. Structure on the fly with PREP: Point, Reason, Example, Point.",
    estimatedMinutes: 8,
    tags: ["speaking", "thinking"],
    tasks: [
      {
        id: "im1",
        type: "open",
        title: "Talk about 'doors'",
        prompt:
          "Speak for about ninety seconds on the word 'doors' — literal or metaphorical. Use PREP: make a point, give a reason, tell a quick example, restate the point.",
        hints: [
          "Buy thinking time by restating the topic: 'Doors — an ordinary word with a strange power…'",
          "One example told well beats three listed badly.",
        ],
        checklist: [
          { id: "point", label: "You made a clear point early", anyOf: ["i want to", "doors are", "a door is", "what strikes me", "the way i see", "doors represent", "doors teach"] },
          { id: "reason", label: "You gave a reason", anyOf: ["because", "the reason", "which is why", "that's why", "since"] },
          { id: "example", label: "You told one concrete example or story", anyOf: ["for example", "for instance", "i remember", "when i", "my grandmother", "last year", "one day", "in my life"] },
          { id: "restate", label: "You returned to your point at the end", anyOf: ["so you see", "that is why", "in the end", "and that", "which brings us back", "so next time"] },
        ],
        topicKeywords: ["door", "open", "close", "because", "life"],
        minWords: 80,
        targetSeconds: 90,
        maxSeconds: 200,
        difficulty: "hard",
        modelAnswer:
          "Doors — such an ordinary word, and yet almost every big moment of a life happens at one. The point I want to make is that doors matter most at the moment of opening, not after. The reason is psychological: an open door you have already walked through becomes normal within a week, but the decision to push the handle stays with you forever. For example, I remember standing outside my first job interview for ten minutes before I could make my hand move. That door led to a career, yes — but what I actually keep is the memory of choosing to open it. So you see, a door is never really wood or glass; it is a decision you can touch. And that is why the hardest doors to open are always the ones that matter.",
      },
      {
        id: "im2",
        type: "open",
        title: "Talk about 'the colour blue'",
        prompt:
          "Ninety seconds on 'the colour blue'. Any angle: nature, culture, feelings, design. PREP structure again.",
        hints: ["Start concrete, end universal.", "'Blue' gives you sky, sea, sadness, jeans, cold, calm — pick two."],
        checklist: [
          { id: "point", label: "You made a clear point", anyOf: ["i want to", "blue is", "what i love", "the way i see", "blue shows", "blue teaches", "for me blue"] },
          { id: "reason", label: "You gave a reason", anyOf: ["because", "the reason", "which is why", "that's why", "since"] },
          { id: "example", label: "You gave a concrete example", anyOf: ["for example", "for instance", "i remember", "when i", "the sea", "the sky", "in art", "picasso", "my city"] },
          { id: "restate", label: "You circled back to your point", anyOf: ["so you see", "that is why", "in the end", "and that", "which brings us back", "so perhaps"] },
        ],
        topicKeywords: ["blue", "colour", "color", "sky", "sea", "calm"],
        minWords: 70,
        targetSeconds: 80,
        maxSeconds: 200,
        difficulty: "challenge",
        modelAnswer:
          "What I love about blue is that it is the colour of both the biggest things and the quietest feelings. My point: no other colour works at both extremes. The reason is that we meet blue mostly as distance — sky, sea, far mountains — so we have learned to read it as calm and depth at the same time. For example, think of Picasso's blue period: he painted sadness, but the paintings are strangely restful to look at, because blue lets both be true. And that is why, when I need to think, I look for the horizon and not at my desk. Blue is distance you can rest in — and perhaps that is the whole trick of it.",
      },
    ],
  },
  {
    id: "spk-adv-storytelling",
    slug: "storytelling",
    tier: "advanced",
    kind: "storytelling",
    title: "Storytelling",
    description:
      "Craft a story with tension: a character who wants something, an obstacle that costs something, and a turn that surprises.",
    estimatedMinutes: 10,
    tags: ["speaking", "narrative"],
    tasks: [
      {
        id: "st1",
        type: "open",
        title: "The ninety-second story: 'the last train'",
        prompt:
          "Tell an original story that starts with the words 'The last train left at midnight.' Build a character, an obstacle, and one surprising turn.",
        hints: [
          "Open in the middle of action; flash back only if you must.",
          "Surprise options: a reversal, a small detail that changes meaning, an ending that echoes the opening line.",
        ],
        cues: [
          { id: "c1", label: "Character + what they want" },
          { id: "c2", label: "The obstacle" },
          { id: "c3", label: "The turn — something changes" },
          { id: "c4", label: "An ending that lands" },
        ],
        checklist: [
          { id: "character", label: "You established a character with a want", anyOf: ["wanted to", "needed to", "was trying to", "had to", "she wanted", "he wanted", "i wanted", "hoping to"] },
          { id: "obstacle", label: "You built an obstacle or cost", anyOf: ["but", "however", "unfortunately", "the problem", "too late", "until", "suddenly"] },
          { id: "turn", label: "The story took a turn", anyOf: ["then", "suddenly", "that's when", "in that moment", "to her surprise", "to his surprise", "instead", "realised", "realized"] },
          { id: "landing", label: "The ending landed deliberately", anyOf: ["and that", "in the end", "from that day", "she never", "he never", "i never", "which is why", "even now"] },
        ],
        topicKeywords: ["train", "midnight", "station", "story"],
        minWords: 110,
        targetSeconds: 110,
        maxSeconds: 240,
        difficulty: "challenge",
        modelAnswer:
          "The last train left at midnight, and Nadia was two platforms away from it. She had one suitcase, one scholarship letter, and a mother who had already said goodbye twice at the door. What she wanted was simple: to be on that train before she lost her nerve. The obstacle was smaller and worse — her shoe had broken on the stairs, and the platform signs were lying about which track the train was on. She ran anyway, one shoe on, one shoe in her fist. Then, at the top of the stairs, she stopped — because the train wasn't leaving. It was waiting, doors open, and the guard was holding a red umbrella over a small boy who had lost his mother in the crowd. Nadia spent the last minute before the border of her old life helping a stranger find his mother, and somehow that was the moment she stopped being afraid. The train left at 12:04. She was on it. And that, she would say years later, is how she learned that the doors that matter open while you are busy being kind.",
      },
    ],
  },
  {
    id: "spk-adv-professional",
    slug: "professional-communication",
    tier: "advanced",
    kind: "professional-communication",
    title: "Professional Communication",
    description:
      "The polite power moves of workplace English: disagreeing without friction, saying no with warmth, and delivering bad news honestly.",
    estimatedMinutes: 10,
    tags: ["speaking", "professional", "workplace"],
    tasks: [
      {
        id: "pc1",
        type: "open",
        title: "Pushing back on a deadline",
        prompt:
          "Your manager wants a report by Friday; you believe Monday is realistic. Record how you raise this: acknowledge, present the facts, propose an alternative, and protect the relationship.",
        hints: [
          "Soften the verb, not the facts: 'I'm worried the report won't be solid by Friday' keeps respect AND the truth.",
          "Always bring an alternative to a 'no'.",
        ],
        cues: [
          { id: "c1", label: "Acknowledge the request and its importance" },
          { id: "c2", label: "Present the constraint factually" },
          { id: "c3", label: "Propose an alternative or compromise" },
          { id: "c4", label: "Check the relationship is intact" },
        ],
        checklist: [
          { id: "ack", label: "You acknowledged the request positively", anyOf: ["i understand", "i know this is", "thank you for", "i appreciate", "i see why", "of course", "absolutely"] },
          { id: "constraint", label: "You stated the constraint with facts", anyOf: ["the issue is", "the problem", "currently", "as it stands", "two of the", "the data", "won't be", "will not be", "realistically"] },
          { id: "alternative", label: "You proposed an alternative", anyOf: ["what i can do", "would it work", "could we", "one option", "instead", "i could deliver", "by monday", "partial", "interim"] },
          { id: "relationship", label: "You protected the relationship", anyOf: ["i want to", "because i want", "my priority", "so that we", "does that work for you", "happy to discuss", "tell me if"] },
        ],
        topicKeywords: ["friday", "deadline", "report", "team", "alternative"],
        targetWords: ["realistic", "priority", "compromise", "interim", "feasible", "align", "deliverable"],
        minWords: 80,
        targetSeconds: 80,
        maxSeconds: 200,
        difficulty: "hard",
        modelAnswer:
          "Thanks for flagging this — I know Friday matters because the board meets on Monday, and I want that report to make us look good. The issue is the numbers: two of the three regional teams report on Thursday evening, and a Friday deadline means I'd be presenting unverified data. What I can do is deliver a one-page interim summary on Friday with the verified half, and the complete report by Monday noon. That way the board still sees momentum, and nothing in the deck is a guess. Does that work for you? I'd rather negotiate the scope than the quality.",
      },
      {
        id: "pc2",
        type: "open",
        title: "Saying no to extra work — warmly",
        prompt:
          "A respected colleague asks you to join their project this month. You genuinely cannot. Record your answer: value them, decline clearly, offer what you CAN do, and close warmly.",
        hints: [
          "A clear 'no' early is kinder than a soft maybe.",
          "The offer you can fulfil ('review the draft next month') turns a no into a boundary, not a rejection.",
        ],
        checklist: [
          { id: "value", label: "You showed you value the project or person", anyOf: ["thank you", "i really", "it sounds", "i'd love to", "i would love", "great project", "honoured", "honored"] },
          { id: "decline", label: "You declined clearly", anyOf: ["i can't", "i cannot", "i won't be able", "i will not be able", "i'm not able", "i'm unable", "this month isn't", "as much as i'd like"] },
          { id: "reason", label: "You gave a brief honest reason", anyOf: ["because", "i'm already", "my current", "right now", "at the moment", "committed"] },
          { id: "offer", label: "You offered something you can do", anyOf: ["what i can", "i could", "happy to", "next month", "i'd be glad", "let me know if", "i can review", "i can spare"] },
        ],
        topicKeywords: ["project", "no", "time", "offer", "work"],
        minWords: 60,
        targetSeconds: 60,
        maxSeconds: 180,
        difficulty: "hard",
        modelAnswer:
          "Thank you for thinking of me — genuinely, it's a great project and I'd love to be part of it. But I have to be honest: I can't take it on this month. My current release goes live in three weeks, and if I join now I'd be the weakest link in your team, which is the opposite of what you need. What I can do is review your proposal next month, and I can spare an hour next week if you want a sounding board. The offer to help is real — the calendar just isn't.",
      },
    ],
  },
];
