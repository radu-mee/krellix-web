const aiAutomationVsAiAugmentationLarge = "/articles/AI-automation-vs-AI-augmentation-large.png";
const aiAutomationVsAiAugmentationSmall = "/articles/AI-automation-vs-AI-augmentation-small.png";
const aiIsNotEverywhereYetLarge = "/articles/AI-is-not-everywhere-(Yet)-large.png";
const aiIsNotEverywhereYetSmall = "/articles/AI-is-not-everywhere-(Yet)-small.png";
const aiWontAlwaysMakeYouFasterLarge = "/articles/AI-won't-always-make-you-faster-large.png";
const aiWontAlwaysMakeYouFasterSmall = "/articles/AI-won't-always-make-you-faster-small.png";
const oneAiIsNotATeamLarge = "/articles/One-AI-is-not-a-team-large.png";
const oneAiIsNotATeamSmall = "/articles/One-AI-is-not-a-team-small.png";
const theContextSwitchingTaxLarge = "/articles/The-context-switching-tax-large.png";
const theContextSwitchingTaxSmall = "/articles/The-context-switching-tax-small.png";
const theEndOfTheSearchBarLarge = "/articles/The-end-of-the-search-bar-large.png";
const theEndOfTheSearchBarSmall = "/articles/The-end-of-the-search-bar-small.png";
const theProactiveAiLarge = "/articles/The-proactive-AI-large.png";
const theProactiveAiSmall = "/articles/The-proactive-AI-small.png";
const whatAreAiAgentsLarge = "/articles/What-are-AI-agents-large.png";
const whatAreAiAgentsSmall = "/articles/What-are-AI-agents-small.png";
const whatAreAiEthicsLarge = "/articles/What-are-AI-ethics-large.png";
const whatAreAiEthicsSmall = "/articles/What-are-AI-ethics-small.png";
const whatAreAiHallucinationsLarge = "/articles/What-are-AI-hallucinations-large.png";
const whatAreAiHallucinationsSmall = "/articles/What-are-AI-hallucinations-small.png";
const whatAreAiTokensLarge = "/articles/What-are-AI-tokens-large.png";
const whatAreAiTokensSmall = "/articles/What-are-AI-tokens-small.png";
const whyAiProjectsFailLarge = "/articles/Why-AI-projects-fail-large.png";
const whyAiProjectsFailSmall = "/articles/Why-AI-projects-fail-small.png";

export type BlogPostSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  publishedAtLabel: string;
  publishedAtIso: string;
  readTimeLabel: string;
  heroImageSrc: string;
  heroImageAlt: string;
  thumbnailImageSrc: string;
  thumbnailImageAlt: string;
  content: readonly BlogPostSection[];
};

const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: "ai-is-not-everywhere-yet",
    category: "News",
    title: "AI is not everywhere (Yet)",
    excerpt: "Here's why the hype is ahead of reality.",
    publishedAtLabel: "Feb 16, 2026",
    publishedAtIso: "2026-02-16",
    readTimeLabel: "5 min read",
    heroImageSrc: aiIsNotEverywhereYetLarge,
    heroImageAlt: "Abstract monochrome wave pattern",
    thumbnailImageSrc: aiIsNotEverywhereYetSmall,
    thumbnailImageAlt: "Abstract monochrome wave pattern",
    content: [
      {
        heading: "AI is everywhere. That's what you hear.",
        paragraphs: [
          "In headlines, keynote talks, and rambling Twitter threads, it feels like every company has already deployed AGI into every corner of their business. Like the machines have already taken over. Like people are being fired by robots before lunchtime.",
          "And yet, go talk to someone who's actually tried to change something at a real company, and you'll get an entirely different story.",
          "It's not that AI isn't powerful. It's not that it won't transform work. It's that right now, the world of actual work isn't fully ready for it.",
          "Here's the truth nobody tells you: AI adoption in the corporate world is slower, messier, and more political than the media narrative. We're seeing early adoption in pockets, but the average organization is still stuck in first gear.",
        ],
      },
      {
        heading: "The hype vs. The reality",
        paragraphs: [
          "Look at what the headlines say:",
          "- AI is replacing workers!",
          "- Every business is automating!",
          "- The future is here!",
          "It's a great story. It's easy to digest. It sells clicks and subscriptions.",
          "But reality is more complicated.",
          "Most companies don't run on greenfield projects and bold experimentation. They run on processes, approvals, budget cycles, legacy systems, and risk aversion. They run on people who have been doing things one way for 10, 15, 20 years. They run on inertia.",
          "So when someone says, \"Let's automate this with AI,\" the reaction isn't \"Great, do it!\"",
          "It's: who owns this workflow, how this integrates with existing systems, what the security concerns are, what the vendor risk is, who's going to maintain it, and what happens if it fails.",
          "That's not resistance to innovation. That's basic operational reality.",
        ],
      },
      {
        heading: "Cultural friction > Technical friction",
        paragraphs: [
          "The real barrier to AI isn't the tech. Tensor cores don't care about org charts. APIs don't care about politics.",
          "The barrier is people.",
          "Corporate culture is slow by design. It's optimized for predictability, compliance, and scalability, not experimentation. Most teams are rewarded for stability, not disruption. Budgets are allocated through planning processes that take months. Anyone proposing change has to navigate 3 managers, 2 committees, and 17 risk assessments.",
          "Meanwhile, in press narratives, AI has already conquered everything.",
          "That gap between narrative and reality is where a lot of misunderstanding comes from.",
        ],
      },
      {
        heading: "Yes, there are exceptions",
        paragraphs: [
          "Some companies are aggressively adopting AI.",
          "Notably:",
          "- Tech firms building with AI from day one",
          "- Teams with strong data infrastructure",
          "- Groups with leaders who genuinely understand the technology",
          "Those exceptions get press. They get case studies. They get shared as if every business looks like them.",
          "But the average organization? It's not there yet.",
          "The majority are still experimenting with pilot projects, struggling to integrate tools, trying to upskill teams, debating governance and ethics, and wondering how to actually measure ROI.",
          "That's not inertia, that's transition.",
        ],
      },
      {
        heading: "The AI revolution is not a light switch",
        paragraphs: [
          "The expectation that AI will instantly change everything is a misunderstanding of how change happens in large organizations.",
          "Real transformation happens incrementally, with champions, through iteration, and with governance.",
          "Today's AI hype assumes adoption will be instantaneous and universal. That's wishful thinking.",
          "Tomorrow's reality will look like this instead: slow, uneven, and deeply contextual.",
          "Some sectors will move fast. Some will lag. Some teams within the same company will be miles ahead of others.",
          "That's not failure. That's normal.",
        ],
      },
      {
        heading: "So why all the hype?",
        paragraphs: [
          "Because stories that oversell change are easier to sell.",
          "A narrative where AI replaces everyone tomorrow is simple, dramatic, and sharable.",
          "A narrative where adoption is messy, political, and incremental is harder to package, harder to promote, and harder to tell in a headline.",
          "But it's the truth.",
        ],
      },
      {
        heading: "Conclusion: AI isn't everywhere yet",
        paragraphs: [
          "AI is powerful. It's real. It will transform work.",
          "But it's not equally distributed. It's not instant. It's not frictionless.",
          "AI adoption will be real, but it will be uneven, messy, and painfully human.",
          "The revolution won't be televised. It will be managed, governed, and rolled out one team at a time.",
          "So if you're hearing the media narrative and feeling like you're behind, remember this: the hype is universal. The reality is practical.",
          "And the real transformation is happening, quietly, somewhere between the two.",
        ],
      },
    ],
  },
  {
    slug: "the-proactive-ai",
    category: "Updates",
    title: "The proactive AI",
    excerpt: "Reactive AI answers. Proactive AI creates leverage.",
    publishedAtLabel: "Feb 16, 2026",
    publishedAtIso: "2026-02-16",
    readTimeLabel: "5 min read",
    heroImageSrc: theProactiveAiLarge,
    heroImageAlt: "Abstract colorful scanline pattern",
    thumbnailImageSrc: theProactiveAiSmall,
    thumbnailImageAlt: "Abstract colorful scanline pattern",
    content: [
      {
        heading: "For years, the dominant model felt inevitable",
        paragraphs: [
          "You ask. It answers. You prompt. It responds.",
          "It sounds efficient and it feels intuitive, but for most people, relying on reactive AI alone is not a path to real productivity. In many cases, it quietly limits what these tools could actually deliver.",
        ],
      },
      {
        heading: "The quiet friction you don't notice",
        paragraphs: [
          "Reactive AI does not announce itself as a bottleneck. It just adds cognitive overhead to every interaction.",
          "You have to remember to ask, know what to ask, and catch the right moment to ask it. Every insight the model could offer stays dormant until you summon it.",
          "Meanwhile, deadlines approach, patterns go unnoticed, automation opportunities stay untapped, and relevant information remains buried until you search for it.",
          "You do not lose productivity in one dramatic moment. You lose momentum across hundreds of small moments. And momentum is what matters.",
        ],
      },
      {
        heading: "The illusion of full utilization",
        paragraphs: [
          "Many people assume they are getting full value because they use AI regularly.",
          "But if you only engage when you remember, the AI never surfaces what you did not think to ask, and context keeps resetting, then usage is partial, not complete.",
          "Calendar conflicts remain unflagged. Repetitive tasks stay manual. Knowledge gaps stay invisible. The longer you stay reactive, the wider the gap between capability and impact.",
        ],
      },
      {
        heading: "Human assistants rarely work this way",
        paragraphs: [
          "A skilled assistant does not wait silently until addressed. They notice patterns, anticipate needs, flag issues early, and remind you of what matters before it becomes urgent.",
          "The best assistants reduce cognitive load because they operate with context. They act before being asked every single time.",
          "If that is the standard we value in human support, settling for purely reactive AI means accepting a lower bar than necessary.",
        ],
      },
      {
        heading: "There's a ceiling to reactive",
        paragraphs: [
          "You can only remember to prompt so often. You can only formulate requests so precisely. You can only hold so much context in your head.",
          "There is always a cap to value from tools that only respond.",
          "The upside is much larger with systems that monitor and alert, learn your patterns, draft before you ask, connect dots across conversations, and anticipate instead of waiting.",
          "Productivity gains come from leverage, not just effort.",
        ],
      },
      {
        heading: "When reactive does work",
        paragraphs: [
          "Reactive interaction is useful for discrete tasks: one question, one output, one isolated problem.",
          "Power users with highly structured workflows can still extract strong value from reactive setups.",
          "But for most people using AI sporadically, forgetting to engage it, or not knowing what to ask, this model rarely produces sustained productivity gains.",
          "Reactive AI handles tasks. It rarely transforms workflows.",
        ],
      },
      {
        heading: "Tasks are not transformation",
        paragraphs: [
          "Reactive AI is excellent for answering questions, generating content on demand, solving specific problems, and surfacing information quickly.",
          "But that is different from transforming how work operates end to end.",
          "Reactive creates answers. Proactive creates leverage.",
          "Confusing those two leads to years of incremental usage without systemic improvement.",
        ],
      },
      {
        heading: "The real limitation is under-utilization",
        paragraphs: [
          "For most people, the bottleneck is not model capability. It is integration quality.",
          "Forgetting to ask, not knowing what is possible, and mistaking availability for integration keeps outcomes capped.",
          "Work keeps moving, deadlines keep coming, and inefficiencies compound whether you notice them or not.",
          "Reactive AI can feel sufficient while quietly keeping effort high and leverage low.",
        ],
      },
      {
        heading: "We need to change that",
        paragraphs: [
          "The technology is ready. The real question is whether expectations are ready to evolve.",
          "We should demand AI that anticipates, not just responds. That integrates, not just answers. That works alongside us continuously, not only when summoned.",
          "The future is not better responses to better prompts. It is systems that understand enough context to act before you ask.",
        ],
      },
    ],
  },
  {
    slug: "the-end-of-the-search-bar",
    category: "Insights",
    title: "The end of the search bar",
    excerpt: "What comes next is faster, deeper, and conversational.",
    publishedAtLabel: "Feb 16, 2026",
    publishedAtIso: "2026-02-16",
    readTimeLabel: "5 min read",
    heroImageSrc: theEndOfTheSearchBarLarge,
    heroImageAlt: "Abstract diagonal signal pattern",
    thumbnailImageSrc: theEndOfTheSearchBarSmall,
    thumbnailImageAlt: "Abstract diagonal signal pattern",
    content: [
      {
        heading: "Watch someone under 20 look something up",
        paragraphs: [
          "They do not open Google, type keywords, and scan blue links across multiple tabs to stitch an answer together.",
          "They ask in plain language and expect a direct response.",
          "This is not laziness. It is a preview of where everyone is heading.",
        ],
      },
      {
        heading: "Search solved a 1998 problem",
        paragraphs: [
          "When search engines emerged, the web was chaotic. The search bar made discovery possible and changed everything.",
          "But that solved the problem of finding anything at all. Today's challenge is different.",
        ],
      },
      {
        heading: "We're drowning, not searching",
        paragraphs: [
          "Information is no longer scarce. It is overwhelming.",
          "For meaningful questions, result pages are crowded with SEO pages, ads, and click-optimized content. Useful insight exists, but extracting it requires heavy cognitive work from the user.",
          "You must evaluate sources, filter commercial bias, synthesize fragments, and keep your original intent intact while navigating endless tabs.",
          "Search retrieves. It does not synthesize.",
        ],
      },
      {
        heading: "AI inverts the model",
        paragraphs: [
          "Traditional search gives you links and asks you to do the integration work.",
          "AI gives you answers and performs synthesis across sources in one place.",
          "This is not a small UX tweak. It is a structural shift in information retrieval.",
          "The bottleneck was never access. It was synthesis. AI removes that bottleneck.",
        ],
      },
      {
        heading: "What changes when retrieval becomes invisible",
        paragraphs: [
          "Once finding information becomes effortless, people ask better and more complex questions.",
          "Instead of splitting a nuanced decision into many separate searches, users can ask one rich question and refine it conversationally in real time.",
          "That expands what is practically searchable.",
        ],
      },
      {
        heading: "The skills are shifting",
        paragraphs: [
          "Classic research skills still matter, but their weight is changing.",
          "The emerging edge is asking precise questions, probing for depth, spotting uncertainty, and validating outputs against reality.",
          "The advantage no longer belongs only to people who search fastest. It belongs to people who frame problems well and act on answers effectively.",
        ],
      },
      {
        heading: "Google isn't dead. But it is shrinking.",
        paragraphs: [
          "Search will remain useful for navigation, local discovery, quick factual checks, and media lookup.",
          "But for complex reasoning, learning, and decision support, the search bar is already losing ground, not because it failed, but because better interaction arrived.",
        ],
      },
      {
        heading: "The shift is already happening",
        paragraphs: [
          "You can see it in younger usage patterns, in platform responses, and in personal behavior changes across the last year.",
          "The search bar had a remarkable multi-decade run as the interface to human knowledge.",
          "That era is ending. What comes next is faster, deeper, and conversational.",
        ],
      },
    ],
  },
  {
    slug: "ai-automation-vs-ai-augmentation",
    category: "Insights",
    title: "AI automation vs AI augmentation",
    excerpt: "Why augmentation keeps winning in real-world outcomes.",
    publishedAtLabel: "Mar 04, 2026",
    publishedAtIso: "2026-03-04",
    readTimeLabel: "6 min read",
    heroImageSrc: aiAutomationVsAiAugmentationLarge,
    heroImageAlt: "Abstract layered helix pattern",
    thumbnailImageSrc: aiAutomationVsAiAugmentationSmall,
    thumbnailImageAlt: "Abstract layered helix pattern",
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "There are two schools of thought in AI right now, and the one getting the most attention is probably the wrong one.",
          "The first says: automate everything. Remove the human. Make it faster, cheaper, and fully autonomous. Let the AI handle it end to end.",
          "The second says: augment the human. Keep people in the loop. Use AI to make human judgment sharper, faster, and better informed - not to replace it.",
          "The first story is sexier. It makes better headlines. It sounds more like _the future_.",
          "The second story is messier, quieter, and backed by significantly better data.",
        ],
      },
      {
        heading: "The automation fantasy",
        paragraphs: [
          "Let's be honest about why full automation is so appealing.",
          "It promises the dream scenario: you set up the system, you walk away, and things just _happen_. No bottlenecks. No human error. No salaries. The machine does the work. You collect the output.",
          "It's clean. It's elegant. And in certain narrow contexts - data entry, transaction processing, repetitive manufacturing - it works.",
          "But the moment you step outside those narrow contexts and into the messy territory of knowledge work - strategy, creative decisions, product direction, complex analysis - full automation starts breaking down in ways that aren't immediately obvious.",
          "The errors don't look like errors. They look like _plausible outputs_. The AI confidently produces something that reads well, checks the surface-level boxes, and is subtly, consequentially wrong in ways only a domain expert would catch.",
          "And if there's no domain expert in the loop? The wrong answer ships.",
        ],
      },
      {
        heading: "What the research actually says",
        paragraphs: [
          "Here's where the automation-everything narrative runs into a wall of data.",
          "A 2025 study from Stanford and Carnegie Mellon compared human professionals against fully autonomous AI agents across 16 realistic, multi-step tasks. The hybrid approach - human-led workflows augmented by AI - outperformed fully autonomous agents by 68.7%. That's not a rounding error. That's a category difference.",
          "The researchers found that AI augmentation improved human efficiency by 24.3%, while full automation actually slowed work by 17.7% because of the verification and debugging overhead needed to fix agent mistakes. In other words, the time saved by removing the human was eaten up by the time needed to clean up after the machine.",
          "A study published in _Management Science_ found something similar. Humans alone achieved 68% accuracy on judgment tasks. Full automation hit 77%. But augmentation - humans working _with_ AI - reached 80%. And when the researchers optimized the framework to combine both approaches intelligently, accuracy jumped to 88%.",
          "Meanwhile, a meta-analysis from MIT's Center for Collective Intelligence reviewed over 100 studies and found a more nuanced picture. On average, human-AI teams performed worse than the best of humans or AI alone. But the devil was in the details: when humans outperformed the AI on their own, adding AI to the mix created genuine synergy - the combination beat both. When AI was already better, adding humans often degraded performance through overreliance or unnecessary second-guessing.",
          "The takeaway isn't that humans should always be in the loop regardless of context. It's that the _design_ of the collaboration matters enormously. And blanket automation skips that design work entirely.",
        ],
      },
      {
        heading: "Why augmentation produces better results",
        paragraphs: [
          "The case for augmentation isn't sentimental. It's structural.",
          "Knowledge work - the kind most of us do - is defined by ambiguity. The right answer isn't sitting in a dataset waiting to be retrieved. It has to be _constructed_ through judgment, context, experience, and trade-offs that change depending on the situation.",
          "AI is exceptionally good at the retrieval part. It can surface patterns in data, generate drafts, identify anomalies, and process information at a scale no human can match. What it can't do is reliably evaluate whether its own output is _good_ in context.",
          "Research from Harvard Business School showed that AI can't reliably distinguish good ideas from mediocre ones or guide long-term business strategies on its own. The high-performing entrepreneurs in the study didn't just use AI to generate options - they used their own judgment to evaluate which options were actually worth pursuing. The low performers took the AI's generic suggestions at face value. Same tool, wildly different outcomes.",
          "That's the augmentation thesis in a nutshell: AI expands the range of what you can consider. Human judgment narrows it to what actually matters.",
          "Remove the human, and you get volume without discernment. Keep the human, and you get both.",
        ],
      },
      {
        heading: "The hidden cost of removing people",
        paragraphs: [
          "There's a cost to full automation that rarely shows up in the pitch deck: the slow erosion of human capability.",
          "When AI handles the messy, repetitive tasks that once built judgment, junior employees miss the chance to develop it. The people who were supposed to learn by doing - by making mistakes, by struggling through ambiguity - never get that exposure. They inherit a system they don't fully understand and can't meaningfully evaluate.",
          "This isn't a hypothetical concern. Organizations risk ending up with managers who've never done the underlying work and hollowed-out leadership pipelines.",
          "Full automation optimizes for today's output at the expense of tomorrow's capability. Augmentation preserves the feedback loop that makes people better over time.",
        ],
      },
      {
        heading: "The \"automate or die\" pressure",
        paragraphs: [
          "If the data supports augmentation, why does the automation narrative dominate?",
          "Because it's simpler to sell.",
          "\"We replaced 40 people with an AI system\" is a boardroom headline. \"We made 40 people 30% more effective with AI support\" is a footnote. One sounds revolutionary. The other sounds incremental. Guess which one gets the keynote slot.",
          "There's also a genuine incentive misalignment. Vendors selling AI products benefit from the automation story because it implies you need _more_ AI, _more_ autonomy, _more_ spending. The augmentation story implies you need _better_ AI deployed _more thoughtfully_ - which is harder to monetize in a SaaS pricing model.",
          "And so the market pushes a narrative that doesn't match the evidence. Companies buy into full automation, hit the wall of \"plausible-but-wrong\" outputs, and either blame the tool or - worse - don't realize the quality has degraded until the damage is done.",
        ],
      },
      {
        heading: "Where we stand at Krellix",
        paragraphs: [
          "We're not neutral on this.",
          "Krellix is built on the augmentation model. Every design decision we've made reflects a belief that AI works best when it's _collaborating_ with a human, not replacing one.",
          "Our agents don't run off autonomously and deliver finished work for you to rubber-stamp. They work _with_ you in conversation. They bring different perspectives - a marketing lens, an engineering lens, an analytical lens - and they engage with each other and with you. But the human stays in the center of the process.",
          "Not because we think AI isn't capable. It is. But because the best outcomes - the ones the research consistently points to - come from systems designed around human judgment, not around its removal.",
          "We think the companies building for full automation are solving the wrong problem. The problem isn't \"how do we get humans out of the way.\" The problem is \"how do we make human judgment faster, better informed, and more impactful.\"",
          "Those are very different design goals, and they lead to very different products.",
        ],
      },
      {
        heading: "This isn't a philosophical debate",
        paragraphs: [
          "It's easy to frame automation vs. augmentation as an abstract argument about the future of work. It's not.",
          "It's a practical question with measurable answers. And the answers, consistently, point in the same direction:",
          "Companies that deploy AI to augment human workers have been found to outperform those pursuing automation-only strategies by a factor of three.",
          "After ChatGPT launched, job postings for roles involving structured, repetitive tasks dropped 13% - but demand for roles requiring analytical, technical, or creative work grew 20%.",
          "PwC's 2025 Global AI Jobs Barometer found that wages are rising fastest in the most AI-exposed industries - not because those workers are being replaced, but because AI is making them more productive and more valuable.",
          "The market isn't rewarding automation. It's rewarding augmentation - at scale, across industries, with real money.",
        ],
      },
      {
        heading: "The uncomfortable middle ground",
        paragraphs: [
          "Here's the thing no one in the automation camp wants to admit: keeping humans in the loop is _harder_ to build for.",
          "Full automation is architecturally simpler. The system runs. It produces output. Done. Building for augmentation means designing interaction points, feedback loops, context-sharing mechanisms, and interfaces that actually make human judgment _better_ instead of just adding a checkbox.",
          "It's more work. It's more nuanced. It's a harder sell in a market that wants silver bullets.",
          "But it's where the results are. And pretending otherwise - pretending that the path to better work is removing the human from it - is going to age badly.",
          "The most productive future isn't one where AI does everything for you. It's one where AI makes everything you do _better_.",
          "That's the bet we're making. And the data says it's the right one.",
        ],
      },
    ],
  },
  {
    slug: "the-context-switching-tax",
    category: "Updates",
    title: "The context switching tax",
    excerpt: "The hidden productivity cost of disconnected AI tools.",
    publishedAtLabel: "Mar 11, 2026",
    publishedAtIso: "2026-03-11",
    readTimeLabel: "6 min read",
    heroImageSrc: theContextSwitchingTaxLarge,
    heroImageAlt: "Abstract drifting strata pattern",
    thumbnailImageSrc: theContextSwitchingTaxSmall,
    thumbnailImageAlt: "Abstract drifting strata pattern",
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "You probably added three new AI tools to your workflow this year. Maybe more.",
          "One for writing. One for code. One for research. One for meetings. One for images. And you still have all the _other_ tools - Slack, email, Notion, your project management app, your CRM, whatever else has accumulated over the years.",
          "Each one of these tools promised to save you time. And individually, they probably do. But collectively? They've created a new problem that nobody warned you about.",
          "You're spending more time _switching between tools_ than you're saving by using them.",
        ],
      },
      {
        heading: "The 23-minute problem",
        paragraphs: [
          "There's a number that should haunt every knowledge worker: 23 minutes and 15 seconds.",
          "That's how long it takes, on average, to fully regain focus after switching context. Not after a major interruption - after _any_ meaningful context switch. Toggling from your AI writing tool to Slack. Jumping from a code review to your email. Moving from a research conversation with ChatGPT to updating a doc in Notion.",
          "Each switch feels like it takes seconds. The recovery takes minutes. And the math gets ugly fast.",
          "Research from Harvard Business Review found that knowledge workers toggle between applications roughly 1,200 times per day. Microsoft's 2025 Work Trend Index reported that during core work hours, employees face an interruption every two minutes. And according to Asana, 60% of knowledge workers' time goes to coordination - communicating about work, searching for information, switching between apps - leaving only 40% for the actual skilled work they were hired to do.",
          "That's not a productivity problem. That's a structural failure.",
        ],
      },
      {
        heading: "AI was supposed to fix this",
        paragraphs: [
          "Here's the uncomfortable irony: AI tools were supposed to make us more productive. And at the task level, they do. You can write a first draft in minutes. You can debug code faster. You can summarize a document in seconds.",
          "But nobody optimized for _the space between tasks_.",
          "The AI tool market exploded by solving individual problems in isolation. Need better writing? Here's an AI for that. Need help with data analysis? Here's another one. Need design feedback? There's an app for that too.",
          "The result is a perfectly modern version of the same old problem: tool sprawl. Except now it's _AI_ tool sprawl, which somehow feels more absurd because the whole point was to reduce complexity.",
          "You now have powerful tools that each do one thing well - and none of them know what the others are doing. Your writing tool doesn't know about the strategic decisions you made in your project management tool. Your code assistant doesn't know about the user requirements you discussed in another app. Your research tool starts from zero every single time.",
          "Each tool is a walled garden. And every time you move between gardens, you pay the tax.",
        ],
      },
      {
        heading: "What context switching actually costs you",
        paragraphs: [
          "Let's make this concrete.",
          "The obvious cost is time. If you switch context 50 times a day - which is conservative for most knowledge workers - and each switch costs even 5 minutes of degraded focus, that's over four hours of impaired productivity. Every day. Not from laziness. From architecture.",
          "But time isn't the real cost. The real cost is _cognitive quality_.",
          "Research has found that heavy multitasking can cause a temporary drop of up to 10 IQ points - a bigger cognitive hit than losing a night's sleep. The American Psychological Association reports that interruptions as short as five seconds can triple error rates on complex cognitive work.",
          "When you're switching between six different AI tools throughout the day, you're not just losing minutes. You're losing the quality of your thinking. The nuance in your writing. The depth of your analysis. The connective insights that only emerge when you can hold a complex problem in your head long enough to actually _think_ about it.",
          "That's the tax nobody accounts for. Not the seconds of toggling. The hours of shallow thinking that follow.",
        ],
      },
      {
        heading: "The fragmentation problem is getting worse, not better",
        paragraphs: [
          "The AI market incentivizes fragmentation.",
          "Every startup builds a point solution. Every enterprise vendor bolts AI onto their existing product. Every new tool creates its own context, its own conversation history, its own memory (if it has memory at all). Nothing connects.",
          "And the integration story is mostly a lie. \"Integrations\" usually mean you can push a notification from one tool to another, or export a CSV. They don't mean shared context. They don't mean one tool knows what you decided in another tool yesterday. They don't mean continuity.",
          "So what happens in practice is this: you have a brilliant conversation with an AI about your product strategy at 10am. At 11am, you open a different tool to work on marketing copy. The marketing tool knows nothing about the strategy conversation. You re-explain. You re-contextualize. You re-prompt.",
          "Multiply that across a full workday, across every tool in your stack, and you start to understand why people are exhausted by 3pm despite \"just sitting at a computer.\"",
        ],
      },
      {
        heading: "The fix isn't better tools. It's fewer walls.",
        paragraphs: [
          "Most productivity advice for context switching focuses on individual behavior. Batch your tasks. Turn off notifications. Use the Pomodoro technique. Block your calendar.",
          "That's fine. But it's treating the symptom, not the cause.",
          "The cause is structural: your tools don't share context. Every app is a cognitive island. And every crossing between islands costs you focus, time, and quality.",
          "The real fix isn't discipline. It's architecture.",
          "What if your AI tools weren't separate apps at all? What if the agent helping you with marketing knew about the technical constraints your engineering agent flagged yesterday? What if your analyst agent could reference the strategic decision you made last week without you re-explaining it?",
          "That's not a pipe dream. That's just what happens when you stop building isolated tools and start building a workspace.",
        ],
      },
      {
        heading: "The workspace question",
        paragraphs: [
          "People don't work in apps. They work in _projects_. And projects span multiple disciplines, multiple conversations, and multiple time horizons.",
          "When you force that reality through a dozen disconnected tools, you pay the context switching tax on every transition. Every re-explanation. Every lost thread. Every \"wait, what did we decide about that?\"",
          "The question the AI industry should be asking isn't \"how do we make each tool smarter?\" It's \"how do we stop forcing people to leave one context to enter another?\"",
          "Because the cost isn't in the tools themselves. It's in the gaps between them.",
        ],
      },
      {
        heading: "The math nobody's doing",
        paragraphs: [
          "Let's say you use five AI tools and switch between them 30 times a day. If each switch costs an average of 9.5 minutes of degraded focus (the figure from a joint Cornell and Qatalog study), that's nearly five hours of impaired cognitive performance. Every day.",
          "Now think about what would change if those transitions happened _inside_ a single context instead of across five separate ones. The switches between disciplines don't disappear - you still move from marketing thinking to engineering thinking - but the context travels with you. You don't re-explain. You don't re-onboard the AI. You don't lose the thread.",
          "You wouldn't get all five hours back. But even reclaiming half of it would represent a transformative change in how much deep, focused work you can actually do in a day.",
          "And the compounding effect matters. One good hour of deep work produces more value than three hours of fragmented shallow work. It's not linear. The quality of output scales non-linearly with the duration of uninterrupted focus.",
          "The AI industry is obsessed with making each individual tool 10% smarter. Nobody's working on eliminating the 40% productivity drain that happens in the spaces between them.",
        ],
      },
      {
        heading: "The tools are the problem",
        paragraphs: [
          "We've been conditioned to think that more tools means more capability. The AI era has supercharged that instinct - there's a new, shiny AI app for every conceivable task, and each one promises to save you time.",
          "But the time they save on individual tasks is being consumed - and then some - by the cognitive overhead of managing them all. The switching. The re-explaining. The fragmented context. The shallow thinking that comes from never staying in one place long enough to go deep.",
          "The future of AI productivity isn't about building smarter individual tools. It's about building systems that respect how human attention actually works - systems that preserve context across disciplines, reduce transitions, and let you stay in flow instead of constantly rebuilding it.",
          "Context switching costs the U.S. economy an estimated $450 billion annually. But the personal cost is more specific and more immediate: it's the difference between ending your day feeling like you accomplished something and ending it wondering where the time went.",
          "Your tools shouldn't be the reason for the second one.",
        ],
      },
    ],
  },
  {
    slug: "one-ai-is-not-a-team",
    category: "News",
    title: "One AI is not a team",
    excerpt: "Why multi-agent collaboration beats one assistant for complex work.",
    publishedAtLabel: "Mar 18, 2026",
    publishedAtIso: "2026-03-18",
    readTimeLabel: "6 min read",
    heroImageSrc: oneAiIsNotATeamLarge,
    heroImageAlt: "Abstract vector bloom pattern",
    thumbnailImageSrc: oneAiIsNotATeamSmall,
    thumbnailImageAlt: "Abstract vector bloom pattern",
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "You've probably had this experience.",
          "You ask an AI to review your marketing strategy. It gives you a decent answer. Then you ask it to evaluate the technical feasibility of that same strategy. It gives you another decent answer. But those two answers don't talk to each other. There's no pushback. No tension. No one saying, \"That sounds great on paper, but here's why it won't work.\"",
          "You got two separate monologues when what you needed was a conversation.",
          "That's the gap no one's talking about. AI is getting smarter every month. But it's still working alone.",
        ],
      },
      {
        heading: "The \"one assistant\" problem",
        paragraphs: [
          "Here's the thing about single-assistant AI: it's modeled on a bad metaphor.",
          "The metaphor is the personal assistant. One person who handles everything - scheduling, writing, research, strategy, code review, design feedback. One mind that somehow holds expertise across every domain you need.",
          "In the real world, that person doesn't exist. No one hires a single employee and says, \"You're my marketer, my engineer, my analyst, my designer, and my strategist. Good luck.\"",
          "That would be absurd. And yet, that's exactly how we use AI right now.",
          "We open one chat window and expect expert-level output across completely different disciplines. Marketing copy, then database architecture, then competitive analysis, then UX feedback. The AI obliges every time. It never says, \"That's not my area - let me bring in someone who knows better.\"",
          "And that's the problem. Not that it can't do these things. But that it does all of them from the same perspective, with the same assumptions, in the same voice. No second opinion. No counterargument. No one in the room to say, \"Wait, have we thought about this differently?\"",
        ],
      },
      {
        heading: "How humans actually work",
        paragraphs: [
          "Think about the best work you've ever done. Was it solo?",
          "Probably not.",
          "It was probably a conversation. A back-and-forth between people with different expertise. The engineer who says, \"That's not technically feasible the way you've scoped it.\" The designer who pushes back on the flow. The analyst who asks, \"What metric are we actually optimizing for?\"",
          "Great work emerges from _tension_ between perspectives. From people who see the same problem differently and are willing to argue about it.",
          "A single AI assistant doesn't give you that. It gives you one perspective, trying very hard to sound like all of them.",
        ],
      },
      {
        heading: "What if AI worked the way teams do?",
        paragraphs: [
          "This is the question that leads somewhere interesting.",
          "Instead of one AI that pretends to know everything, what if you had multiple agents - each with a defined role, a specific lens, a distinct expertise - and they could _talk to each other_?",
          "Not in some abstract, theoretical way. In the same conversation. In real time. Where you ask a question and the marketing agent responds, and then the engineering agent pushes back, and then the analyst weighs in with data considerations.",
          "That's not science fiction. That's just how teams work. We've just never applied that structure to AI.",
        ],
      },
      {
        heading: "The case for multi-agent collaboration",
        paragraphs: [
          "The idea is simple, even if the execution isn't:",
          "Different problems require different expertise. A code review and a brand strategy have almost nothing in common. The mental model, the evaluation criteria, the vocabulary - all different. Forcing one AI to context-switch between them produces mediocre results in both.",
          "But give each domain to a dedicated agent? Now you get depth instead of breadth. You get an agent that _only_ thinks about code quality, working alongside one that _only_ thinks about market positioning.",
          "And here's the part that matters: they can build on each other's thinking.",
          "A marketing agent drafts a go-to-market plan. A business analyst flags unrealistic assumptions in the metrics. The marketing agent revises. That loop - the back-and-forth, the refinement through disagreement - is where the quality lives.",
          "Single-assistant AI skips that loop entirely. You get the first draft. Maybe a second if you prompt it. But you never get the _debate_.",
        ],
      },
      {
        heading: "What gets lost without the room",
        paragraphs: [
          "There's a concept in team dynamics that's hard to replicate: the thing that happens when someone's idea collides with someone else's constraint.",
          "A product manager says, \"We should launch in Q2.\" An engineer says, \"Not with the current architecture.\" A designer says, \"The onboarding flow isn't ready regardless.\" And through that collision, the actual plan emerges - not the one anyone started with, but the one that survives contact with reality.",
          "That collision doesn't happen in a single-assistant model. You can prompt it to \"think like an engineer\" and then \"think like a marketer,\" but it's still one mind roleplaying. There's no genuine friction. No independent perspective that holds its ground.",
          "Multi-agent systems create that friction by design. Each agent has its own lens, its own priorities, its own criteria for what \"good\" looks like. When they disagree, the disagreement is _structural_, not performed. And that's where the value is.",
        ],
      },
      {
        heading: "This is what we're building at Krellix",
        paragraphs: [
          "We didn't set out to build another AI assistant. The world has plenty of those.",
          "We set out to build what actually matches how people work: a team.",
          "Krellix gives you specialized AI agents - a Code Reviewer, a Marketing Pro, a Business Analyst, a Design Expert, a Writing Coach - that collaborate in the same conversation. They hand off to each other when a topic crosses disciplines. They build on each other's output. They push back when something doesn't hold up from their perspective.",
          "It's not about having more AI. It's about having the _right_ AI for each part of the problem, and letting them work together the way a real team would.",
        ],
      },
      {
        heading: "Why this isn't just a better chatbot",
        paragraphs: [
          "The distinction matters.",
          "A better chatbot is still one mind trying to be everything. You can make it faster, give it more memory, fine-tune its personality. But the fundamental architecture is the same: one model, one perspective, one thread.",
          "A multi-agent workspace is structurally different. It's not about making one AI smarter. It's about creating a system where different intelligences interact, challenge each other, and produce output that no single agent could produce alone.",
          "That's a different product category. And honestly, it's a harder one to build. But it's the one that actually reflects how knowledge work happens.",
        ],
      },
      {
        heading: "The uncomfortable truth",
        paragraphs: [
          "Multi-agent AI isn't magic. It doesn't eliminate the need for human judgment. If anything, it demands _more_ of it - because now you're directing a team, not just prompting a tool.",
          "You still need to know what questions to ask. You still need to evaluate the output. You still need to make the final call.",
          "But the gap between \"you alone with one chatbot\" and \"you leading a team of specialized agents\" is enormous. It's the difference between brainstorming in the shower and brainstorming in a room full of smart people who know your project inside out.",
          "One of those produces ideas. The other produces decisions.",
        ],
      },
      {
        heading: "Where this is heading",
        paragraphs: [
          "The AI industry is obsessed with making individual models more powerful. Bigger context windows. Better reasoning. Faster responses.",
          "All of that matters. But it's solving the wrong bottleneck.",
          "The bottleneck isn't intelligence. It's collaboration.",
          "The most powerful AI in the world, sitting in a single chat window with no teammates, will always underperform a team of specialized agents that challenge assumptions and build on each other's work.",
          "That's not a prediction. That's just how work has always functioned.",
          "AI is finally powerful enough to work in teams. The question is whether we'll keep using it like it's 2023 - one chat, one assistant, one context window - or build something that actually matches the complexity of real work.",
          "We think the answer is obvious. But we're biased.",
        ],
      },
    ],
  },
  {
    slug: "what-are-ai-agents",
    category: "Explainers",
    title: "What are AI agents",
    excerpt: "A clear breakdown of what agents are, how they work, and where they fit.",
    publishedAtLabel: "Mar 22, 2026",
    publishedAtIso: "2026-03-22",
    readTimeLabel: "7 min read",
    heroImageSrc: whatAreAiAgentsLarge,
    heroImageAlt: "Abstract helix-style AI signal animation",
    thumbnailImageSrc: whatAreAiAgentsSmall,
    thumbnailImageAlt: "Abstract helix-style AI signal animation",
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "If you've been paying attention to AI over the last year, you've seen the term \"AI agents\" everywhere. Every company is launching them. Every keynote mentions them. Every LinkedIn post treats them like the next big thing.",
          "But ask ten people what an AI agent actually _is_, and you'll get twelve answers.",
          "So let's cut through the noise. Here's what AI agents are, how they work, why they matter, and what they can't do - explained without the jargon.",
        ],
      },
      {
        heading: "The simple version",
        paragraphs: [
          "An AI agent is software that can pursue a goal on your behalf, making decisions along the way about how to get there.",
          "That's it. That's the core idea.",
          "What makes an agent different from a regular AI chatbot is that a chatbot _responds_ to your input, while an agent _acts_ on it. A chatbot answers your question. An agent works on your problem.",
          "When you ask ChatGPT to write you an email, that's a chatbot. It takes your prompt, generates a response, and waits for your next instruction.",
          "When you tell an AI system to \"research competitors in the European market, compare their pricing models, and draft a summary with recommendations\" - and it breaks that down into steps, searches the web, pulls data, synthesizes findings, and delivers a finished output - that's an agent.",
          "The difference is autonomy. A chatbot needs you to drive. An agent can navigate.",
        ],
      },
      {
        heading: "How AI agents actually work",
        paragraphs: [
          "Under the hood, AI agents run on a loop that looks something like this: perceive, reason, act, check, repeat.",
          "**Perceive.** The agent takes in information - your instructions, data from external sources, results from previous steps, context from memory. It builds a picture of what it's working with.",
          "**Reason.** Based on that picture, the agent decides what to do next. This is where the large language model (LLM) at the core of the agent does its work - breaking the goal into subtasks, figuring out which tools to use, and planning a sequence of actions.",
          "**Act.** The agent does something: searches the web, queries a database, calls an API, writes a document, asks another agent for help, or generates a piece of content. This is what separates agents from chatbots - they don't just generate text, they use tools to interact with the world.",
          "**Check.** After acting, the agent evaluates the result. Did it get what it needed? Is the output good enough? Does the plan need to change? If something's off, the agent loops back and tries a different approach.",
          "**Repeat.** This cycle continues until the goal is reached or the agent determines it can't make further progress.",
          "The whole process can happen in seconds for simple tasks, or unfold across multiple steps over several minutes for complex ones. The key insight is that the agent is making decisions at each step - it's not following a script.",
        ],
      },
      {
        heading: "What makes an agent different from a chatbot",
        paragraphs: [
          "This is where most explanations get confusing, so let's make it concrete.",
          "**A chatbot** is reactive. You type, it responds. You type again, it responds again. It has no memory of what you said yesterday (unless the platform adds that as a feature). It doesn't use tools. It doesn't break problems into steps. It doesn't take action on your behalf. It generates text. Period.",
          "**An AI agent** is proactive. You give it a goal, and it figures out the steps. It can access external data sources, use specialized tools, coordinate with other agents, remember previous interactions, and adjust its approach based on what it learns along the way.",
          "Think of it this way: a chatbot is like texting a smart friend. An agent is like hiring a freelancer. The friend answers your questions. The freelancer does the work.",
        ],
      },
      {
        heading: "The building blocks of an agent",
        paragraphs: [
          "Every AI agent, regardless of how sophisticated it is, relies on a few core components:",
          "**A language model.** This is the brain - typically a large language model like GPT, Claude, or Gemini. It handles understanding your instructions, reasoning through problems, and generating outputs. The model is what gives the agent its general intelligence.",
          "**Memory.** Agents need to remember what happened earlier in the conversation, what decisions were made in previous sessions, and what they've learned along the way. Without memory, every interaction starts from zero - which is exactly the problem with most chatbots today.",
          "**Tools.** This is what gives agents their power. Tools are external capabilities the agent can call on: web search, database queries, code execution, API calls, file operations, calculators, and more. A language model on its own can only generate text. An agent with tools can actually _do_ things.",
          "**Planning.** For complex goals, the agent needs to decompose the task into smaller steps and figure out the right order to execute them. This is where the \"intelligence\" really shows - the ability to look at a messy, multi-part problem and create a structured plan of attack.",
          "**A feedback loop.** Good agents check their own work. They evaluate whether the output meets the goal, whether the data they gathered is sufficient, and whether their approach needs to change. This self-correction is what makes agents more reliable than a single-shot prompt.",
        ],
      },
      {
        heading: "Single agents vs. multi-agent systems",
        paragraphs: [
          "Most people encounter AI agents as individual tools - one agent handling one task. But the more interesting development is what happens when multiple agents work together.",
          "In a multi-agent system, different agents have different specializations. One might focus on research, another on writing, another on data analysis, another on code. They communicate with each other, hand off tasks, and build on each other's output.",
          "This mirrors how human teams work. You don't ask one person to do the market research, the financial modeling, the copywriting, and the design review. You assemble a team with different skills and let them collaborate.",
          "Multi-agent systems bring the same principle to AI. Instead of one model trying to be good at everything, you get specialized agents that each do one thing well - and a coordination layer that manages how they work together.",
          "This is still an emerging area, and getting agents to collaborate reliably is one of the hardest problems in AI right now. But it's also where the most significant productivity gains are likely to come from.",
        ],
      },
      {
        heading: "What agents are good at",
        paragraphs: [
          "AI agents excel in a few specific scenarios:",
          "**Multi-step research.** Anything that requires gathering information from multiple sources, synthesizing it, and producing a structured output. Competitive analysis, market research, literature reviews, due diligence.",
          "**Repetitive workflows with variation.** Tasks that follow a general pattern but require judgment at each step. Processing customer inquiries, reviewing documents, generating reports from data.",
          "**Coordination across domains.** Problems that span multiple areas of expertise - say, evaluating a product launch from marketing, engineering, and financial perspectives simultaneously.",
          "**Tasks you'd delegate to a junior employee.** This is a useful mental model. If you'd hand the task to a smart intern with clear instructions and check their work when they're done, it's probably a good fit for an agent.",
        ],
      },
      {
        heading: "What agents are bad at",
        paragraphs: [
          "The hype around AI agents tends to skip this part, but it's important:",
          "**Novel strategic decisions.** Agents can gather information and present options, but they can't make judgment calls that require deep domain expertise, ethical reasoning, or an understanding of your specific context that hasn't been explicitly shared.",
          "**Tasks with no clear success criteria.** Agents need to know what \"done\" looks like. Open-ended, ambiguous goals - \"make our brand cooler\" - don't give the agent enough to work with. The more specific the goal, the better the agent performs.",
          "**High-stakes actions without oversight.** Agents can and do make mistakes. They hallucinate. They misunderstand instructions. They take confident action based on incorrect assumptions. For anything with real consequences - financial transactions, legal documents, public communications - human review is essential.",
          "**Understanding your actual context.** An agent knows what you tell it and what it can look up. It doesn't know the politics of your organization, the unspoken preferences of your audience, or the history behind a decision you made six months ago. That context lives in your head, and no agent can access it unless you provide it.",
        ],
      },
      {
        heading: "Why agents matter right now",
        paragraphs: [
          "The reason everyone is talking about AI agents in 2026 isn't because the concept is new - it's because the technology has finally caught up with the idea.",
          "Language models are now good enough at reasoning and planning to handle multi-step tasks without falling apart. Tool integration has matured to the point where agents can reliably interact with external systems. And frameworks for building and deploying agents have gone from experimental to production-ready.",
          "Gartner predicts that 40% of enterprise applications will use AI agents by the end of 2026, up from less than 5% in 2025. A survey of over 1,300 professionals found that 57% already have agents running in production environments.",
          "The shift from chatbots to agents represents a fundamental change in how AI fits into work. Chatbots are tools you _use_. Agents are teammates you _delegate to_. That's a much bigger idea, and it's why the category is getting so much attention.",
        ],
      },
      {
        heading: "The gap between the promise and the reality",
        paragraphs: [
          "The agent narrative right now is running ahead of the actual capability - which is normal for any major technology shift, but worth being honest about.",
          "Most \"AI agents\" available today are closer to sophisticated chatbots with a few tool integrations than to the autonomous digital workers that the marketing describes. They work well for structured, well-defined tasks. They struggle with ambiguity, edge cases, and anything that requires genuine understanding of context.",
          "The quality gap between a demo and a production deployment is significant. Agents that look impressive in a controlled presentation often break down when faced with real-world messiness - inconsistent data, ambiguous instructions, unexpected edge cases.",
          "And the organizational challenges are real. Deploying agents requires clear data infrastructure, well-defined workflows, appropriate governance, and people who understand both the capabilities and the limitations. Most organizations aren't there yet.",
          "None of this means agents aren't valuable. They are. But the most useful framing right now is pragmatic: agents are powerful tools for specific, well-scoped tasks within workflows that have been thoughtfully designed to include them. They're not magic. They're not autonomous employees. They're a new kind of software that's genuinely useful when deployed with realistic expectations.",
        ],
      },
      {
        heading: "Where agents are heading",
        paragraphs: [
          "The trajectory is clear, even if the timeline isn't.",
          "Agents are getting better at working together. Protocols like Anthropic's Model Context Protocol (MCP) and Google's Agent2Agent (A2A) are creating standards for how agents communicate and share context. This interoperability is what will eventually enable complex multi-agent workflows that span across tools and platforms.",
          "Agents are getting better at learning from experience. The ability to store and retrieve context from previous interactions means agents can improve over time and avoid repeating the same mistakes.",
          "And agents are becoming more accessible. Frameworks that once required significant engineering expertise are being replaced by no-code and low-code tools that let non-technical users build and deploy agents within their existing workflows.",
          "The endgame - which is years away, not months - is AI that doesn't just respond to your questions but actively participates in your work. Not by replacing your judgment, but by handling the execution that sits between your decisions.",
          "We're not there yet. But the building blocks are in place, and the gap between today's agents and that future is closing faster than most people expect.",
        ],
      },
    ],
  },
  {
    slug: "why-ai-projects-fail",
    category: "Insights",
    title: "Why AI projects fail",
    excerpt: "Most failures are organizational, not technical - and the pattern is predictable.",
    publishedAtLabel: "Mar 25, 2026",
    publishedAtIso: "2026-03-25",
    readTimeLabel: "7 min read",
    heroImageSrc: whyAiProjectsFailLarge,
    heroImageAlt: "Abstract layered drift pattern",
    thumbnailImageSrc: whyAiProjectsFailSmall,
    thumbnailImageAlt: "Abstract layered drift pattern",
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "In 2025, enterprises invested $684 billion in AI. Over 80% of those projects failed to deliver their intended value. 42% of companies abandoned most of their AI initiatives entirely - up from 17% the year before.",
          "MIT estimates that 95% of generative AI pilots never scale into anything that moves the bottom line.",
          "These aren't numbers from AI skeptics. They come from RAND, MIT, S&P Global, BCG, and Gartner - organizations that are broadly bullish on the technology. And they're all saying the same thing: the failure rate is extraordinary, and it's not getting better.",
          "The question isn't whether AI works. It does. The question is why organizations keep deploying it in ways that don't.",
        ],
      },
      {
        heading: "It's not a technology problem",
        paragraphs: [
          "The natural assumption is that AI projects fail because the technology isn't ready. The models hallucinate. The outputs aren't reliable. The accuracy isn't there.",
          "Sometimes that's true. But it's not the main reason.",
          "RAND Corporation analyzed dozens of failed projects and interviewed 65 data scientists and engineers. The failures weren't primarily technical. They were organizational. The top causes: misaligned objectives, poor data foundations, unclear ownership, and lack of sustained executive support.",
          "84% of failures were leadership-driven. 73% lacked clear success metrics before launch. 56% lost executive sponsorship within six months.",
          "The technology worked fine. The organizations using it didn't know what they wanted it to do.",
        ],
      },
      {
        heading: "The pilot trap",
        paragraphs: [
          "There's a pattern that repeats across industries, and it looks like this:",
          "Someone in leadership reads about AI. A pilot is approved. A small team builds a proof of concept. The demo looks impressive. Everyone agrees it has potential. And then... nothing.",
          "The pilot sits. It doesn't scale. It doesn't connect to actual workflows. Nobody owns the transition from \"cool demo\" to \"production system.\" The team that built it moves on to the next thing. Six months later, the project is quietly shelved.",
          "88% of AI proof-of-concepts never make it to production. The average organization scrapped 46% of its AI POCs before they reached that stage.",
          "The problem isn't that pilots fail technically. It's that organizations treat pilots as the _end_ rather than the _beginning_. They measure success by whether the demo works, not by whether it changes how work actually gets done.",
          "A pilot that doesn't connect to a workflow is a science experiment. And science experiments don't compound into business value.",
        ],
      },
      {
        heading: "The problem nobody wants to talk about: data",
        paragraphs: [
          "Every AI vendor talks about capabilities. Very few talk about the prerequisite: data.",
          "Informatica's 2025 survey found that the top obstacles to AI success were data quality and readiness (43%), lack of technical maturity (43%), and shortage of skills (35%). Gartner predicted that 60% of AI projects unsupported by AI-ready data would be abandoned through 2026.",
          "Here's what that means in practice: an organization decides to use AI for customer insights. They discover that their customer data lives in four different systems, with inconsistent formats, duplicated records, and no governance layer. Before they can even start the AI part, they need to do six months of data work.",
          "Most organizations aren't prepared for that. They bought the AI expecting it to be a light switch. It's actually a renovation.",
          "The unsexy truth is that the companies succeeding with AI are spending 50-70% of their timeline and budget on data readiness - extraction, normalization, governance, quality dashboards - before they touch a model. The ones failing are spending that time on demos and pitch decks.",
        ],
      },
      {
        heading: "Solving the wrong problem",
        paragraphs: [
          "One of the most common failure modes is deploying AI for problems that didn't need AI in the first place.",
          "It sounds obvious. But the hype cycle creates enormous pressure to use AI _somewhere_, and that pressure leads to backwards reasoning: \"We need an AI project\" becomes the starting point, rather than \"We have a problem - is AI the right solution?\"",
          "McKinsey's 2025 survey found that organizations reporting significant financial returns from AI were twice as likely to have redesigned end-to-end workflows _before_ selecting modeling techniques. They started with the problem and worked backward to the tool. The failing organizations started with the tool and went looking for a problem.",
          "This isn't unique to AI. It's how every technology hype cycle works. But the cost of getting it wrong with AI is unusually high, because the implementation complexity is real and the sunk costs escalate quickly. The average failed project costs $4.2 million for abandoned initiatives and $6.8 million for projects that are completed but deliver no value.",
          "Spending $6.8 million to build something that doesn't help is worse than not building anything at all. At least doing nothing doesn't erode organizational trust in the technology.",
        ],
      },
      {
        heading: "The adoption gap",
        paragraphs: [
          "Even when the technology works and the data is ready, there's a third failure point that catches most organizations off guard: people.",
          "AI changes how work gets done. That's the entire point. But changing how work gets done means changing workflows, responsibilities, and in many cases, roles. People resist that - not because they're irrational, but because they're being asked to trust a system they don't fully understand, using processes that haven't been designed yet, with outcomes nobody can guarantee.",
          "A BCG study found that only 4% of companies have cutting-edge AI capabilities. 74% struggle to generate any tangible value. The gap between the two isn't technology - it's organizational readiness.",
          "The successful projects invest in change management. They redesign workflows _around_ the AI, rather than bolting AI _onto_ existing processes. They train people not just to use the tool, but to understand what it does and doesn't do well. They set realistic expectations.",
          "The failing projects deploy the tool and send an email.",
        ],
      },
      {
        heading: "Why the failure rate is actually double",
        paragraphs: [
          "Here's a detail that makes the numbers even worse: AI projects fail at twice the rate of non-AI technology projects.",
          "RAND found that the 80%+ failure rate for AI is roughly double the failure rate for traditional IT initiatives. The same organizations that can successfully deploy a CRM or migrate to a cloud platform are failing at AI at twice the rate.",
          "Why? Because AI projects have a unique combination of challenges that traditional IT projects don't:",
          "The outcomes are probabilistic, not deterministic. A CRM either stores customer data or it doesn't. An AI model gives you a probability, and what you do with that probability depends on context, judgment, and workflow design that someone has to figure out.",
          "The inputs are messy. Traditional software needs structured data in a defined format. AI needs _lots_ of data, from diverse sources, cleaned and normalized in ways that require significant upfront investment.",
          "The value is often indirect. An AI model that improves recommendation quality by 12% is meaningless unless someone has designed the downstream workflow to capture that improvement as revenue, cost savings, or customer satisfaction. The model doesn't do that on its own.",
          "Each of these challenges is manageable. But managing all three simultaneously, while also navigating organizational politics, change management, and executive impatience, is where projects break down.",
        ],
      },
      {
        heading: "What the 20% do differently",
        paragraphs: [
          "The 20% of AI projects that succeed share a few patterns that the 80% don't.",
          "They define success metrics _before_ they build. Projects with clear pre-approval metrics achieve a 54% success rate. Without them: 12%. That's the single biggest differentiator.",
          "They invest in data readiness. A formal data readiness assessment raises the success rate from 14% to 47%. It's not exciting work. But it's the foundation everything else depends on.",
          "They maintain executive sponsorship. Projects with sustained leadership support succeed 68% of the time. Projects that lose it succeed 11% of the time. AI initiatives require longer timelines than most technology projects, and without someone in leadership who keeps protecting the budget and the team, they die.",
          "They treat AI as a workflow transformation, not an IT project. Success rate for organizations that frame AI as transformation: 61%. For those that treat it as an IT initiative: 18%.",
          "None of this is about the technology. All of it is about how organizations make decisions, allocate resources, and manage change.",
        ],
      },
      {
        heading: "The uncomfortable conclusion",
        paragraphs: [
          "AI is a powerful technology that most organizations are deploying badly.",
          "Not because the models are weak. Not because the vendors are dishonest. Not because the use cases aren't real. But because organizations keep treating AI as a technology problem when it's actually a design problem - a question of workflows, incentives, data infrastructure, and organizational patience.",
          "The companies that succeed with AI are boring about it. They start with a clear problem. They spend months on data. They redesign workflows. They set measurable goals. They invest in training. They protect the project from the inevitable moment when someone asks, \"Why isn't this working yet?\"",
          "The companies that fail with AI are exciting about it. They announce bold visions. They launch flashy pilots. They demo to the board. And then they quietly abandon the project twelve months later when it turns out that the exciting part was the easy part.",
          "80% of AI projects fail. But 80% of the reasons have nothing to do with AI.",
        ],
      },
    ],
  },
  {
    slug: "ai-wont-always-make-you-faster",
    category: "Updates",
    title: "AI won't always make you faster",
    excerpt: "AI boosts output, but without judgment it can increase workload and mistakes.",
    publishedAtLabel: "Mar 28, 2026",
    publishedAtIso: "2026-03-28",
    readTimeLabel: "7 min read",
    heroImageSrc: aiWontAlwaysMakeYouFasterLarge,
    heroImageAlt: "Abstract vector bloom flow",
    thumbnailImageSrc: aiWontAlwaysMakeYouFasterSmall,
    thumbnailImageAlt: "Abstract vector bloom flow",
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "There's a story the AI industry loves to tell: give anyone access to AI, and they'll be more productive. Doesn't matter who they are, what they know, or how much experience they have. The tool does the heavy lifting. You just steer.",
          "It's a great story. It's democratic. It's empowering. And the research increasingly shows it's not that simple.",
        ],
      },
      {
        heading: "The experience gap nobody talks about",
        paragraphs: [
          "In 2025, a landmark study tracked 5,172 customer support agents at a Fortune 500 company who were given access to a generative AI assistant. The average productivity gain was 15% - a solid number.",
          "But the average hid a much more interesting story.",
          "Less experienced agents saw massive improvements. They resolved more issues, faster, with better quality. The AI essentially functioned like a senior colleague whispering the right answer in their ear.",
          "The most experienced agents? Small gains in speed. And _small declines in quality_.",
          "That finding didn't get the headlines. But it should have. Because it tells you something important about what AI actually does: it closes the gap between novice and competent. It does _not_ automatically push competent toward exceptional.",
        ],
      },
      {
        heading: "The map is not the terrain",
        paragraphs: [
          "A 2026 study from Harvard Business School made this even sharper. Researchers gave marketing specialists, software developers, and web analysts access to AI tools and asked them to perform each other's jobs.",
          "AI helped everyone get started. It was great for conceptualization - generating ideas, framing problems, structuring an approach. But when it came to execution - the detailed, context-dependent, hands-on part of the work - people without domain experience still produced noticeably worse output.",
          "Marketing specialists with AI couldn't match the quality of web analysts doing their own job. The technology filled knowledge gaps, but it couldn't replace the lived experience of actually understanding the domain.",
          "As the researchers put it: AI can provide the map. But navigating the terrain is another matter.",
        ],
      },
      {
        heading: "When AI makes you slower",
        paragraphs: [
          "Here's the finding that should make everyone uncomfortable.",
          "A randomized controlled trial published in 2025 tracked 16 experienced open-source developers completing 246 tasks on codebases they'd worked on for an average of five years. Half the tasks allowed AI tools; half didn't.",
          "Before starting, the developers predicted AI would reduce their completion time by 24%. After finishing, they estimated it had saved them about 20%.",
          "The actual result? AI increased completion time by 19%.",
          "The tool made experienced developers _slower_, not faster. And they didn't even realize it.",
          "The researchers attributed this to several factors: the overhead of managing AI suggestions, the time spent verifying and correcting AI output, and the disruption to established workflows that these developers had refined over years. The AI didn't understand the codebase the way they did. It generated plausible code that required significant review - and the review process ate up more time than just doing the work themselves.",
          "This isn't an anti-AI finding. It's a finding about _context_. When you already have deep expertise in a domain, adding AI doesn't always help. It can introduce noise into a process that was already efficient.",
        ],
      },
      {
        heading: "The judgment bottleneck",
        paragraphs: [
          "There's a pattern emerging across all of this research, and it points to something the productivity discourse consistently gets wrong.",
          "The bottleneck for most knowledge work isn't _production_. It's _judgment_.",
          "AI is extraordinarily good at production. It can generate text, code, analysis, summaries, and drafts faster than any human. It can produce a hundred options where you might have considered three.",
          "But the value of those options depends entirely on whether you can evaluate them. Can you tell the difference between a good strategy and one that sounds good? Can you distinguish technically correct code from code that will cause problems at scale? Can you recognize when AI-generated marketing copy hits the wrong tone for your audience?",
          "That's judgment. And judgment comes from experience, domain knowledge, and an understanding of context that AI doesn't have.",
          "Research from Harvard Business School studied entrepreneurs using AI for business advice. The high-performing entrepreneurs used AI to generate options, then applied their own judgment to select the right ones. The low performers took AI's suggestions at face value. Same tool. Same access. Wildly different outcomes.",
          "The difference wasn't the AI. It was what the human brought to the table.",
        ],
      },
      {
        heading: "Speed without direction",
        paragraphs: [
          "This is the core problem with the \"AI makes everyone more productive\" narrative.",
          "Speed is only valuable if you're going in the right direction. And AI has no idea what the right direction is. It has no judgment about whether the output it produced is actually _good_ for your specific situation. It just produces.",
          "Give an experienced product manager AI tools, and they'll use those tools to explore options they wouldn't have had time to consider, validate assumptions faster, and stress-test their thinking. They get better, faster - because they already know what good looks like.",
          "Give the same tools to someone without that foundation, and they'll produce more output. It might look polished. It might be grammatically perfect and formatted beautifully. But it may be strategically wrong, technically naive, or contextually off-target in ways that only become visible after the damage is done.",
          "A survey of 2,500 professionals found that 77% reported AI actually _increased_ their workload. Nearly half said they didn't know how to unlock the productivity benefits. The tools were there. The judgment to use them well wasn't.",
        ],
      },
      {
        heading: "The dangerous middle ground",
        paragraphs: [
          "There's a particularly treacherous zone that nobody warns you about: the space where AI output is _almost_ right.",
          "When AI produces something obviously wrong, you catch it. When it produces something excellent, you benefit. But when it produces something that's 85% correct - coherent, reasonable, plausible - that's when the real risk lives.",
          "Because 85% correct is harder to evaluate than 50% correct. It requires _more_ expertise to spot the subtle problems, not less. And the confidence that AI output carries - the polished formatting, the authoritative tone - makes it even harder to question.",
          "This is where less experienced people get burned. Not because they're less intelligent, but because they haven't yet developed the pattern recognition to identify what's wrong with something that looks right.",
          "AI doesn't solve this problem. In many cases, it makes it worse by producing a higher volume of plausible-but-flawed output that overwhelms the judgment capacity of the person reviewing it.",
        ],
      },
      {
        heading: "What this means for how we use AI",
        paragraphs: [
          "None of this is an argument against AI. It's an argument for being honest about what AI actually does.",
          "AI is an amplifier. It takes whatever you bring to the table - your expertise, your judgment, your understanding of context - and it multiplies it. If you bring deep knowledge, AI makes you more effective. If you bring shallow understanding, AI makes you more _efficiently_ shallow.",
          "That's a crucial distinction. And it has implications that the industry would rather not discuss.",
          "It means that investing in human expertise isn't optional - it's the prerequisite for AI to work well. It means that the people who benefit most from AI aren't the ones with the best prompts. They're the ones with the best judgment.",
          "And it means that the organizations seeing real returns from AI aren't the ones that deployed the most tools. They're the ones that paired those tools with people who know what good looks like.",
        ],
      },
      {
        heading: "The unsexy answer",
        paragraphs: [
          "The AI productivity conversation has been dominated by tools, models, and capabilities. Which model is fastest. Which tool has the best features. Which prompt technique unlocks the most value.",
          "But the research keeps pointing to the same unsexy conclusion: the variable that matters most is the human.",
          "Not the human as a prompt engineer. Not the human as an AI operator. The human as someone with the knowledge, experience, and judgment to evaluate what AI produces and direct it toward outcomes that actually matter.",
          "AI won't make you faster if you don't know where you're going. It'll just get you to the wrong destination sooner.",
          "The hype says AI democratizes expertise. The data says it amplifies whatever expertise you already have.",
          "Those are very different stories. And the difference between them is where most of the disappointment is hiding.",
        ],
      },
    ],
  },
  {
    slug: "what-are-ai-ethics",
    category: "Explainers",
    title: "What are AI ethics",
    excerpt: "The practical guardrails that keep AI fair, transparent, and accountable.",
    publishedAtLabel: "Mar 27, 2026",
    publishedAtIso: "2026-03-27",
    readTimeLabel: "6 min read",
    heroImageSrc: whatAreAiEthicsLarge,
    heroImageAlt: "Abstract ethical signal field",
    thumbnailImageSrc: whatAreAiEthicsSmall,
    thumbnailImageAlt: "Abstract ethical signal field",
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "In 2018, Amazon discovered that its AI-powered hiring tool was systematically penalizing resumes that contained the word \"women's\" - as in \"women's chess club\" or \"women's basketball.\" The model had been trained on a decade of hiring data that reflected the company's historically male-dominated workforce, and it had learned to treat gender signals as negative indicators.",
          "Amazon scrapped the tool. But the episode illustrates something important: AI doesn't have values. It has training data. And when that training data reflects human biases, the AI reproduces them - at scale, at speed, and without guilt.",
          "That's why AI ethics exists.",
        ],
      },
      {
        heading: "The simple definition",
        paragraphs: [
          "AI ethics is the field of study and practice concerned with ensuring that artificial intelligence systems are developed, deployed, and used in ways that are fair, transparent, accountable, and beneficial to people.",
          "It's not a single set of rules. It's an ongoing conversation - spanning researchers, companies, governments, and civil society - about how to build AI systems that do more good than harm, and how to manage the risks when they don't.",
          "The core question behind AI ethics is deceptively simple: just because we _can_ build something, _should_ we? And if we do build it, what guardrails need to be in place?",
        ],
      },
      {
        heading: "Why AI ethics matters now",
        paragraphs: [
          "Ethics has always been part of technology, but AI creates a set of challenges that are different in kind - not just in degree - from previous technologies.",
          "**Scale.** An AI system can make millions of decisions per day. A biased hiring model doesn't discriminate against one candidate - it discriminates against thousands simultaneously, across every application it processes.",
          "**Opacity.** Many AI systems are effectively black boxes. They produce outputs, but even their creators often can't fully explain _why_ a specific decision was made. When a loan application is denied by an AI, the applicant may have no way to understand or challenge the reasoning.",
          "**Autonomy.** As AI systems take on more decision-making power - from content moderation to medical diagnosis to criminal sentencing - the stakes of getting it wrong increase dramatically. A wrong recommendation from a movie algorithm is annoying. A wrong recommendation from a medical AI can be life-threatening.",
          "**Speed of deployment.** AI capabilities are advancing faster than the laws, regulations, and institutional norms designed to govern them. Companies are shipping products today that raise ethical questions we don't yet have agreed-upon frameworks to answer.",
          "This gap - between what AI can do and what we've decided it should do - is where AI ethics operates.",
        ],
      },
      {
        heading: "The core principles",
        paragraphs: [
          "While there's no single, universal code of AI ethics, the same principles show up across most frameworks, from academic research to corporate guidelines to government regulation:",
          "**Fairness.** AI systems should not discriminate based on race, gender, age, disability, or other protected characteristics. In practice, this is harder than it sounds - because training data often reflects historical patterns of discrimination, and \"fairness\" itself can be defined in multiple, sometimes conflicting ways.",
          "**Transparency.** People should be able to understand, at least at a general level, how an AI system makes decisions. This includes knowing when they're interacting with AI in the first place, and having access to information about how the system works and what data it was trained on.",
          "**Accountability.** When an AI system causes harm - whether through a biased decision, an error, or misuse - there should be clear lines of responsibility. Someone needs to be answerable. The fact that \"the algorithm did it\" is not an acceptable explanation when a person is harmed.",
          "**Privacy.** AI systems often require large amounts of data, including personal data. Ethical AI practice means collecting only what's necessary, protecting it rigorously, being transparent about how it's used, and giving people control over their own data.",
          "**Safety.** AI systems should be reliable and should not cause harm. This includes both direct harm (a self-driving car hitting a pedestrian) and indirect harm (a recommendation algorithm pushing someone toward increasingly extreme content).",
          "**Human oversight.** For high-stakes decisions, humans should remain in the loop. An AI can recommend, suggest, or flag - but the final decision, particularly in areas with significant consequences, should involve human judgment.",
        ],
      },
      {
        heading: "Where AI ethics gets complicated",
        paragraphs: [
          "Principles are easy to state. Applying them is where things get messy.",
          "**Fairness can conflict with itself.** Consider a hiring model. Should it aim for equal acceptance rates across demographic groups (demographic parity)? Or should it aim to treat equally qualified candidates the same regardless of demographics (equal opportunity)? These sound similar but can produce different outcomes, and choosing between them is a values decision, not a technical one.",
          "**Transparency has limits.** Some AI models - particularly deep neural networks - are so complex that even their developers can't fully explain why they produce specific outputs. You can make the training data transparent, or the decision rules, but the internal reasoning of a large language model isn't really \"explainable\" in a way that satisfies most people's sense of what explanation means.",
          "**Privacy and performance pull in opposite directions.** AI systems generally get better with more data. But collecting more data means more privacy risk. Finding the right balance requires judgment calls that depend on context - medical AI may justify more data collection than a shopping recommendation engine.",
          "**Who decides?** This is the meta-ethical question. The researchers building AI systems tend to be concentrated in a handful of countries, companies, and demographic groups. The values embedded in those systems - what counts as \"fair,\" what content is \"harmful,\" what decisions should be automated - reflect the perspectives of their creators, not necessarily the people those systems affect.",
        ],
      },
      {
        heading: "Real-world ethical failures",
        paragraphs: [
          "AI ethics isn't abstract. The consequences of getting it wrong are documented and concrete:",
          "**Biased criminal sentencing.** The COMPAS algorithm, used in U.S. courts to assess recidivism risk, was found to be significantly more likely to incorrectly flag Black defendants as high-risk compared to white defendants. The tool influenced real sentencing decisions.",
          "**Discriminatory lending.** AI-powered credit scoring systems have been shown to charge higher interest rates to borrowers in minority communities, not because of individual creditworthiness but because of patterns in the training data that correlate zip code and demographic factors with risk.",
          "**Facial recognition errors.** Multiple studies have found that facial recognition systems have significantly higher error rates for women and people with darker skin tones. When these systems are used in law enforcement, the consequences of a false match can include wrongful arrest.",
          "**Content moderation at scale.** Social media algorithms optimized for engagement have been shown to amplify divisive, sensational, and extreme content because that content drives more clicks and time-on-platform. The algorithm is working exactly as designed - but the societal effects are harmful.",
          "**Deepfakes and misinformation.** Generative AI can create highly realistic fake images, videos, and audio. This capability has been used for non-consensual content, political manipulation, and fraud. The technology itself is neutral, but its misuse raises serious ethical questions about what safeguards should exist.",
        ],
      },
      {
        heading: "The regulatory landscape",
        paragraphs: [
          "Governments are starting to catch up - slowly.",
          "The European Union's AI Act, which becomes fully applicable in August 2026, is the most comprehensive AI regulation in the world. It classifies AI systems by risk level and imposes strict requirements on high-risk applications, including mandatory transparency, human oversight, and risk assessments.",
          "The United States doesn't have federal AI legislation yet, but individual states are moving. Colorado has introduced requirements for high-risk AI in employment contexts. California has its own consumer privacy protections. Executive orders have established AI safety guidelines for federal agencies.",
          "China has implemented regulations around deepfakes, recommendation algorithms, and generative AI content.",
          "The trend is clear: regulation is coming. The companies that are proactively building ethical practices into their AI development today will be better positioned when compliance becomes mandatory.",
        ],
      },
      {
        heading: "What ethical AI practice actually looks like",
        paragraphs: [
          "Beyond the principles and regulations, organizations that take AI ethics seriously tend to do a few things consistently:",
          "**They audit their data.** Before deploying an AI system, they examine the training data for bias, representativeness, and quality. They ask: does this data reflect the world as it is, or as it was during a period we're trying to move past?",
          "**They test for disparate impact.** They don't just measure overall accuracy. They measure accuracy _across groups_ - by gender, race, age, geography - to identify whether the system performs differently for different populations.",
          "**They define boundaries.** They decide in advance what the AI system should and shouldn't be used for, and they enforce those boundaries. Not every problem needs an AI solution, and not every AI capability should be deployed.",
          "**They maintain human oversight.** For high-stakes decisions, they keep humans in the loop - not as a rubber stamp, but as genuine reviewers with the authority and information to override the AI when necessary.",
          "**They document and communicate.** They make it clear to users when they're interacting with AI, how the AI works, and what its limitations are. Transparency isn't just a principle - it's a practice.",
        ],
      },
      {
        heading: "The bottom line",
        paragraphs: [
          "AI ethics isn't a constraint on innovation. It's a precondition for trust.",
          "The organizations that will succeed with AI over the long term aren't the ones that move fastest. They're the ones that move thoughtfully - that build systems their customers, employees, and regulators can trust because those systems were designed with fairness, transparency, and accountability from the beginning.",
          "AI is powerful. But power without principles doesn't end well. It never has, with any technology.",
          "The question facing every organization deploying AI isn't just \"Can we build this?\" It's \"Should we build this? And if we do, have we thought carefully about who it affects and how?\"",
          "That question is the beginning of AI ethics. And it's one that never stops being relevant.",
        ],
      },
    ],
  },
  {
    slug: "what-are-ai-hallucinations",
    category: "Explainers",
    title: "What are AI hallucinations",
    excerpt: "Why AI outputs can sound right while being wrong - and how to manage it.",
    publishedAtLabel: "Mar 17, 2026",
    publishedAtIso: "2026-03-17",
    readTimeLabel: "6 min read",
    heroImageSrc: whatAreAiHallucinationsLarge,
    heroImageAlt: "Abstract uncertainty ripple pattern",
    thumbnailImageSrc: whatAreAiHallucinationsSmall,
    thumbnailImageAlt: "Abstract uncertainty ripple pattern",
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "In early 2023, a lawyer in New York submitted a legal brief to the court that cited six relevant cases as precedent. There was just one problem: none of those cases existed. The lawyer had used ChatGPT to research case law, and ChatGPT had invented cases that sounded completely real - complete with plausible case names, citations, and summaries - but were entirely fabricated.",
          "That's an AI hallucination. And it's one of the most important things to understand about how these tools work.",
        ],
      },
      {
        heading: "What hallucination actually means",
        paragraphs: [
          "An AI hallucination occurs when a language model generates output that sounds confident and plausible but is factually wrong, made up, or disconnected from reality.",
          "The term \"hallucination\" is borrowed from human psychology, where it describes perceiving something that isn't there. AI hallucinations work similarly: the model produces text that _looks_ like it's based on real information, but isn't. It's not lying - it doesn't have beliefs or intentions. It's generating the most statistically probable next sequence of words, and sometimes that sequence happens to be nonsense dressed up as fact.",
          "This can range from subtle to spectacular. A hallucination might be a wrong date in an otherwise accurate summary. It might be a fabricated quote attributed to a real person. It might be a completely invented scientific study, complete with authors, journal name, and findings. Or it might be a confident explanation of something that directly contradicts reality.",
          "The common thread is that the output _feels_ authoritative. It reads like it should be correct. And that's exactly what makes hallucinations dangerous.",
        ],
      },
      {
        heading: "Why AI models hallucinate",
        paragraphs: [
          "To understand hallucination, you need to understand how language models work at a basic level.",
          "A large language model doesn't \"know\" things the way a human does. It hasn't memorized a database of facts that it retrieves on demand. Instead, it has learned statistical patterns from vast amounts of text. When you ask it a question, it generates a response by predicting, one token at a time, what word is most likely to come next based on the patterns it learned during training.",
          "This is a fundamentally different process than looking something up. The model isn't checking a source. It's constructing a plausible-sounding response based on patterns. Most of the time, those patterns produce accurate output because the training data contained accurate information. But when the model encounters a question where its training data is thin, conflicting, or absent, it doesn't say \"I don't know.\" It does the only thing it can do: it keeps predicting the next most likely word.",
          "And the next most likely word, strung together into sentences and paragraphs, can produce something that reads perfectly but is completely wrong.",
          "Several specific factors make hallucinations more likely:",
          "**Gaps in training data.** If the model wasn't trained on sufficient information about a topic, it fills in the gaps with plausible-sounding fabrication. This is especially common for niche topics, recent events (past the model's knowledge cutoff), and highly specific factual claims.",
          "**Ambiguous prompts.** When a prompt is vague or could be interpreted multiple ways, the model may latch onto an interpretation that leads it down an inaccurate path. The more specific and well-structured your prompt, the less room for the model to wander.",
          "**Overconfidence in patterns.** Language models are optimized to produce fluent, confident-sounding text. There's no built-in mechanism that makes the model express uncertainty proportional to how uncertain it actually is. It generates text with the same confident tone whether it's on solid ground or making things up entirely.",
          "**Training data bias and errors.** If the training data itself contains errors, biases, or misinformation, the model can learn and reproduce those inaccuracies. The model has no way to distinguish between reliable and unreliable sources in its training data - it just learns patterns from all of it.",
        ],
      },
      {
        heading: "Types of hallucination",
        paragraphs: [
          "Not all hallucinations are the same, and recognizing the different types helps you know what to watch for.",
          "**Factual fabrication.** The model invents facts, statistics, quotes, citations, or events that don't exist. This is the most well-known type and the easiest to spot - if you check.",
          "**Subtle inaccuracy.** The model gets most of the details right but introduces small errors - a wrong date, a misattributed quote, an incorrect number. These are harder to catch because the surrounding context is accurate.",
          "**Confident nonsense.** The model produces output that is grammatically perfect and sounds authoritative but is logically incoherent or meaningless. This often happens with highly technical or specialized topics.",
          "**Source hallucination.** The model cites sources - books, papers, URLs, studies - that don't exist. This is particularly insidious because the format of a citation carries an implicit claim of verifiability, and many people trust the citation without checking it.",
          "**Inconsistency.** The model contradicts itself within the same response or across responses. It might say one thing in paragraph two and the opposite in paragraph five, both with equal confidence.",
        ],
      },
      {
        heading: "Why hallucinations are hard to fix",
        paragraphs: [
          "This is the part that surprises most people: hallucination isn't a bug that can be patched. It's a fundamental consequence of how language models work.",
          "Because these models generate text through statistical prediction rather than fact retrieval, there will always be cases where the predicted output doesn't match reality. You can reduce the frequency of hallucinations through better training data, fine-tuning, retrieval-augmented generation (RAG, where the model is connected to external data sources it can reference), and improved prompting techniques. But you can't eliminate them entirely without fundamentally changing how the technology works.",
          "This is why every responsible AI provider includes some version of the disclaimer: \"AI can make mistakes. Check important information.\"",
          "It's not a throwaway line. It's the most important thing you can understand about these tools.",
        ],
      },
      {
        heading: "How to protect yourself",
        paragraphs: [
          "If you use AI tools for anything that matters - work, research, decision-making - here's how to manage the hallucination risk:",
          "**Never trust AI output for factual claims without verification.** This is the single most important habit. If an AI tells you a statistic, a date, a name, a quote, or a citation - check it. The model doesn't know whether it's right. You need to.",
          "**Be specific in your prompts.** Vague, open-ended prompts give the model more room to fabricate. The more specific and structured your prompt, the more constrained the output - and the less opportunity for hallucination.",
          "**Ask for sources, then verify them.** You can ask the model to provide sources for its claims. But remember: the model can hallucinate sources just as easily as it hallucinates facts. The sources it provides are only useful as starting points for your own verification.",
          "**Use AI for drafts, not final answers.** The best mental model for working with language models is to treat their output as a first draft from a smart but unreliable assistant. It's a starting point that requires your review, not a finished product you can trust as-is.",
          "**Recognize the high-risk domains.** Hallucinations are most dangerous in areas where accuracy is critical and errors have real consequences: legal work, medical advice, financial analysis, academic research, journalism. In these domains, human review isn't optional - it's essential.",
          "**Watch for the confidence trap.** The most dangerous hallucinations are the ones that sound the most confident. If the model presents information with absolute certainty and no caveats, that's actually a reason to be _more_ careful, not less. Real expertise usually comes with nuance. Perfect confidence is often a signal that the model is on autopilot.",
        ],
      },
      {
        heading: "The honest trade-off",
        paragraphs: [
          "AI hallucination is the price we pay for having models that can generate fluent, creative, useful text on virtually any topic. The same mechanism that allows a language model to write a compelling essay, brainstorm ideas, or explain a complex concept is the mechanism that sometimes produces fabricated facts.",
          "You can't have one without the other - at least not with current technology.",
          "The tools are still enormously useful. But they're useful the way a brilliant, well-read colleague is useful: someone whose ideas are worth listening to, whose work is worth building on, but whose claims you should always verify before acting on them.",
          "AI doesn't hallucinate because it's broken. It hallucinates because generating plausible language and guaranteeing factual accuracy are two fundamentally different tasks - and current AI is designed for the first one, not the second.",
          "Understanding that distinction is the difference between using these tools well and being burned by them.",
        ],
      },
    ],
  },
  {
    slug: "what-are-ai-tokens",
    category: "Explainers",
    title: "What are AI tokens",
    excerpt: "The token budget behind context windows, cost, and model behavior.",
    publishedAtLabel: "Mar 10, 2026",
    publishedAtIso: "2026-03-10",
    readTimeLabel: "6 min read",
    heroImageSrc: whatAreAiTokensLarge,
    heroImageAlt: "Abstract token stream lines",
    thumbnailImageSrc: whatAreAiTokensSmall,
    thumbnailImageAlt: "Abstract token stream lines",
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "Every time you type a message into ChatGPT, Claude, or any other AI tool, something happens behind the scenes that most people never think about: your words get chopped up into pieces.",
          "Those pieces are called tokens. And understanding them - even at a basic level - changes how you think about what AI can and can't do.",
        ],
      },
      {
        heading: "Tokens are how AI reads",
        paragraphs: [
          "Humans read words. AI reads tokens.",
          "A token is a chunk of text that a language model uses as its basic unit of processing. Sometimes a token is a whole word. Sometimes it's part of a word. Sometimes it's a single character or a piece of punctuation.",
          "For example, the word \"understanding\" might be split into two tokens: \"understand\" and \"ing.\" The word \"cat\" is usually one token. A long, uncommon word like \"cryptocurrency\" might become three or four tokens.",
          "This happens through a process called tokenization - where your input text gets converted into a sequence of tokens that the model can process. It's the very first thing that happens when you send a prompt to an AI, and the very last thing that happens when the AI generates a response. The model doesn't think in words. It thinks in tokens.",
        ],
      },
      {
        heading: "Why it matters: the context window",
        paragraphs: [
          "Here's where tokens become practically important.",
          "Every AI model has a limit on how many tokens it can process at once. This limit is called the context window. It includes _both_ your input (the prompt, any documents you've attached, the conversation history) _and_ the model's output (its response).",
          "If a model has a 128,000-token context window, that's the total budget for everything - what you send in and what comes back out. Once you hit the limit, the model can't process any more information. It either cuts off or starts losing track of earlier parts of the conversation.",
          "This is why AI tools sometimes \"forget\" things you said earlier in a long conversation. It's not that the AI is being careless. It's that the conversation has exceeded the token budget, and older tokens have been pushed out.",
          "Understanding context windows explains a lot of frustrating AI behavior. When a model seems to ignore instructions you gave at the beginning of a long conversation, or when it loses track of a document you uploaded, the answer is almost always: tokens ran out.",
        ],
      },
      {
        heading: "How big is a token?",
        paragraphs: [
          "A rough rule of thumb for English text: one token is approximately three-quarters of a word. Or put differently, 100 words is roughly 130-140 tokens.",
          "But it varies. Common English words tend to be single tokens. Rare words, technical jargon, non-English languages, and code often get split into more tokens. This means the same amount of meaningful content can cost very different amounts of tokens depending on what language it's in or how technical it is.",
          "A simple paragraph of conversational English might be 50 tokens. The same amount of information expressed in dense legal language or Python code might be 80-100 tokens.",
          "This isn't something most casual users need to worry about. But if you're working with AI in a professional context - building applications, processing documents, or running AI at scale - token counts directly affect performance, cost, and what's possible.",
        ],
      },
      {
        heading: "Tokens and cost",
        paragraphs: [
          "For AI APIs (where developers build applications using AI models), tokens are how you get charged. You pay per token - both for the tokens you send in (input tokens) and the tokens the model generates back (output tokens).",
          "This means that a long, detailed prompt costs more than a short one. A response that generates a full report costs more than one that gives a two-sentence answer. And processing a 50-page document costs more than processing a one-page summary.",
          "Different models have different pricing per token. More capable models typically cost more per token. This creates a practical trade-off: you can use a powerful model for complex tasks (and pay more), or a lighter model for simple tasks (and pay less).",
          "For individual users of tools like ChatGPT or Claude, this happens behind the scenes - your subscription covers a certain amount of usage. But for businesses building AI into their products, token economics is one of the most important factors in whether an AI application is financially viable.",
        ],
      },
      {
        heading: "Why tokenization isn't perfect",
        paragraphs: [
          "Tokenization works well for common English text, but it has limitations worth knowing about.",
          "**Non-English languages often require more tokens.** Because most major language models were trained predominantly on English text, their tokenizers are optimized for English. The same sentence in Japanese, Arabic, or Hindi might require significantly more tokens than its English equivalent - which means higher costs and faster context window exhaustion for non-English users.",
          "**Code tokenizes differently than prose.** Programming languages have their own patterns - brackets, indentation, variable names - that don't map neatly onto natural language tokenization. This is why specialized coding models often use different tokenizers than general-purpose language models.",
          "**Numbers can be unpredictable.** Large numbers, dates, and mathematical expressions can tokenize in unexpected ways. The number \"123456789\" might become multiple tokens, and the model may not \"understand\" it as a number the way humans do. This is one reason AI models sometimes struggle with precise arithmetic.",
          "**Typos and unusual text cost extra.** Because tokenizers are built around common word patterns, misspelled words or unusual formatting often get split into more tokens than correctly spelled text. The model still processes them, but less efficiently.",
        ],
      },
      {
        heading: "What this means for how you use AI",
        paragraphs: [
          "A few practical implications:",
          "**Longer isn't always better.** A well-structured, concise prompt often produces better results than a sprawling one - partly because it leaves more of the context window available for the model's response, and partly because shorter, clearer inputs give the model less room for misinterpretation.",
          "**Conversation history has a cost.** In a long conversation, the model is processing the entire history every time it generates a new response. This is why AI tools can slow down or lose coherence in very long threads. Starting a new conversation when you switch topics isn't just tidier - it can produce better results.",
          "**Document size matters.** When you upload a large document for an AI to analyze, you're using a significant chunk of the context window. If the document is too large, the model may not be able to process it all at once, or it may not have enough room left to generate a thorough response.",
          "**Be aware of the budget.** When you're using AI for anything important, think of tokens as a budget. You have a finite amount of space for your input and the model's output. The more wisely you use that space - with clear, focused prompts and relevant context - the better the results.",
        ],
      },
      {
        heading: "The bottom line",
        paragraphs: [
          "Tokens are the invisible currency of every AI interaction. They determine what the model can process, how much it costs, and where its limits are.",
          "You don't need to count them manually. But understanding that they exist - and that every AI conversation is constrained by a token budget - makes you a more effective user of these tools. Most of the moments where AI seems to \"break\" - forgetting context, producing incomplete answers, struggling with long documents - trace back to tokens.",
          "The model isn't confused. It's just out of budget.",
        ],
      },
    ],
  },
];

export function getBlogPosts(): readonly BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAtIso).getTime() - new Date(a.publishedAtIso).getTime(),
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

