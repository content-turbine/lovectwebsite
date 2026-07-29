export interface ServiceDetail {
  slug: string;
  navName: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Definition-lead opening: starts with "<Term> is ..." */
  definition: string;
  intro: string[];
  whoItsFor: string[];
  steps: { name: string; detail: string }[];
  comparison: {
    caption: string;
    columns: [string, string, string];
    rows: [string, string, string][];
  };
  deliverables: string[];
  faqs: { q: string; a: string }[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "answer-engine-optimization",
    navName: "Answer Engine Optimization (AEO)",
    title: "Answer Engine Optimization (AEO)",
    metaTitle: "Answer Engine Optimization (AEO) Services | Content Turbine",
    metaDescription:
      "Answer engine optimization makes your content citable by ChatGPT, Perplexity, Google AI Overviews, and Claude. See our AEO process, deliverables, and FAQs.",
    definition:
      "Answer engine optimization (AEO) is the practice of structuring, publishing, and maintaining content so that AI answer engines — ChatGPT, Perplexity, Google AI Overviews, Claude, and Copilot — retrieve it, quote it, and cite your brand as the source.",
    intro: [
      "Traditional SEO optimizes for a ranked list of ten blue links. AEO optimizes for a single synthesized answer. The two overlap — crawlability, authority, and topical depth still matter — but answer engines add requirements that classic SEO checklists ignore: extractable passages, explicit definitions, structured data, verifiable evidence, and consistent entity signals across the web.",
      "Content Turbine runs AEO as an ongoing program, not a one-time audit. We measure how often your brand appears in AI answers for the prompts your buyers actually type, fix the structural reasons you are being skipped, and publish content designed to be the passage a model quotes.",
    ],
    whoItsFor: [
      "B2B software companies losing top-of-funnel traffic to AI Overviews",
      "Developer-tool teams whose docs are being summarized without attribution",
      "Marketing leads who need AI visibility reporting alongside SEO reporting",
    ],
    steps: [
      {
        name: "Baseline your AI visibility",
        detail:
          "We build a prompt set that mirrors how your buyers ask questions, run it across ChatGPT, Perplexity, Google AI Overviews, and Claude, and record where you are cited, where a competitor is cited, and where nobody is.",
      },
      {
        name: "Audit extractability",
        detail:
          "We review your highest-value pages for definition-lead openings, question-shaped headings, self-contained paragraphs, schema markup, and crawl access for AI user agents such as GPTBot and PerplexityBot.",
      },
      {
        name: "Fix entity and authority signals",
        detail:
          "We align Organization, Product, FAQPage, and HowTo schema, reconcile inconsistent naming across your site and third-party profiles, and identify the third-party sources answer engines already trust in your category.",
      },
      {
        name: "Publish answer-first content",
        detail:
          "Subject-matter-expert-sourced pages built around real questions, opening with a direct answer, backed by original data, comparisons, and step-by-step instructions models can lift verbatim.",
      },
      {
        name: "Measure and iterate monthly",
        detail:
          "Citation share, prompt coverage, and referral traffic from AI tools are tracked in a dashboard and reviewed each month, feeding the next round of content and fixes.",
      },
    ],
    comparison: {
      caption: "How AEO differs from traditional SEO",
      columns: ["Dimension", "Traditional SEO", "Answer Engine Optimization"],
      rows: [
        ["Target result", "Ranked link on a results page", "Cited passage inside a generated answer"],
        ["Unit of optimization", "The page", "The passage or paragraph"],
        ["Primary signals", "Keywords, backlinks, page speed", "Extractability, entities, schema, evidence"],
        ["Ideal opening", "Keyword-rich introduction", "Direct definition or answer in the first sentence"],
        ["Success metric", "Rankings, clicks, impressions", "Citation share and prompt coverage"],
        ["Refresh trigger", "Ranking decline", "Losing citations to a competitor"],
      ],
    },
    deliverables: [
      "AI visibility baseline and prompt-set report",
      "Extractability and schema audit with prioritized fixes",
      "Crawl-access configuration for AI user agents",
      "Answer-first content calendar",
      "Monthly citation-share dashboard",
    ],
    faqs: [
      {
        q: "What is answer engine optimization?",
        a: "Answer engine optimization is the practice of structuring and publishing content so AI answer engines retrieve, quote, and cite it. It focuses on extractable passages, explicit definitions, structured data, and verifiable evidence rather than on ranking a link.",
      },
      {
        q: "Is AEO different from SEO?",
        a: "Yes, though they overlap. SEO optimizes a page to rank; AEO optimizes a passage to be quoted. Strong SEO fundamentals help, but answer engines add requirements — definition-lead openings, question-shaped headings, schema, and citable evidence — that most SEO checklists do not cover.",
      },
      {
        q: "How long does AEO take to show results?",
        a: "Structural fixes such as schema and crawl access can change citations within a few weeks. Building citation share for competitive prompts typically takes three to six months of consistent publishing.",
      },
      {
        q: "How do you measure AEO performance?",
        a: "We track citation share across a fixed prompt set, prompt coverage (the percentage of buyer questions where you appear), and referral sessions from AI tools, reported monthly.",
      },
    ],
  },
  {
    slug: "linkedin-thought-leadership",
    navName: "LinkedIn Thought Leadership",
    title: "LinkedIn Thought Leadership",
    metaTitle: "LinkedIn Thought Leadership for Tech Founders | Content Turbine",
    metaDescription:
      "Ghostwritten LinkedIn thought leadership for technical founders and executives. See our interview-led process, deliverables, cadence, and FAQs.",
    definition:
      "LinkedIn thought leadership is an executive publishing program in which a founder, CTO, or technical leader shares first-hand opinions, lessons, and data on LinkedIn on a consistent cadence, so their point of view — and their company — becomes familiar to buyers before a sales conversation starts.",
    intro: [
      "The bottleneck is never ideas. Technical leaders have more insight than they can publish; what they lack is the time to turn it into posts and the editorial judgment to know which ideas are worth the airtime.",
      "Content Turbine solves that with interview-led ghostwriting. We extract your thinking in short recorded sessions, shape it into posts that sound like you, and run the calendar so publishing never depends on you having a free evening.",
    ],
    whoItsFor: [
      "Founders and CTOs at developer-tool and B2B software companies",
      "Executives launching a category or repositioning a product",
      "Technical leaders hiring senior engineers who research before applying",
    ],
    steps: [
      {
        name: "Voice and positioning session",
        detail:
          "A 60-minute session to define the two or three narratives you want to own, the opinions you are willing to defend publicly, and the tone that reads as authentically you.",
      },
      {
        name: "Recorded brain dumps",
        detail:
          "Every two weeks we run a 30-minute interview. You talk; we ask follow-ups. One session typically yields four to six posts worth of raw material.",
      },
      {
        name: "Drafting and editing",
        detail:
          "Our editors turn transcripts into posts with a clear hook, one idea, concrete specifics from your work, and a natural close. You review in a shared doc with inline comments.",
      },
      {
        name: "Publishing and cadence management",
        detail:
          "We schedule two to four posts per week, watch comment threads, and flag conversations worth your personal reply.",
      },
      {
        name: "Monthly performance review",
        detail:
          "We report impressions, follower growth, profile views, and inbound conversations, then adjust the narrative mix based on what earned real engagement.",
      },
    ],
    comparison: {
      caption: "Ghostwritten LinkedIn programs compared",
      columns: ["Approach", "What it costs you", "Typical outcome"],
      rows: [
        ["DIY posting", "3–5 hours per week of executive time", "Authentic voice, inconsistent cadence"],
        ["Generic AI generation", "Minutes per post", "High volume, low credibility, no original insight"],
        ["Agency writing without interviews", "Low time investment", "Generic posts that could belong to any company"],
        ["Interview-led ghostwriting", "60 minutes every two weeks", "Consistent cadence in your real voice, sourced from your work"],
      ],
    },
    deliverables: [
      "Narrative and positioning brief",
      "Bi-weekly recorded interview sessions",
      "8–16 ghostwritten posts per month",
      "Comment-thread monitoring and reply prompts",
      "Monthly performance report",
    ],
    faqs: [
      {
        q: "How much of my time does this take?",
        a: "About 60 minutes every two weeks for the interview, plus roughly 15 minutes a week reviewing drafts. Everything else is handled by our team.",
      },
      {
        q: "Will the posts actually sound like me?",
        a: "Yes. Every post is sourced from a recorded conversation with you, so the arguments, examples, and phrasing come from your own words rather than from a prompt.",
      },
      {
        q: "How often should an executive post on LinkedIn?",
        a: "Two to four times per week is the range where reach compounds without diluting quality. We recommend starting at two and increasing once the interview pipeline is producing surplus material.",
      },
      {
        q: "Do you use AI to write the posts?",
        a: "We use AI for transcription and research support. Drafting and editing are done by human editors working from your recorded material, and nothing is published without your approval.",
      },
    ],
  },
  {
    slug: "developer-content",
    navName: "Developer Content & Docs",
    title: "Developer Content & Documentation",
    metaTitle: "Developer Content & Documentation Services | Content Turbine",
    metaDescription:
      "Technically accurate developer guides, tutorials, quickstarts, and API documentation written and tested by engineers. See the process, deliverables, and FAQs.",
    definition:
      "Developer content is technical writing produced for an engineering audience — quickstarts, tutorials, integration guides, API references, and sample applications — where every code sample is executed and verified before publication.",
    intro: [
      "Developers do not evaluate products by reading marketing pages. They open the docs, copy the quickstart, and decide within minutes whether your product is worth another hour. Content that is vague, outdated, or untested costs you that evaluation.",
      "Content Turbine writers come from engineering, technical sales, and developer relations backgrounds. Every tutorial we publish has been built and run against your actual product, in a real environment, before it ships.",
    ],
    whoItsFor: [
      "API-first and infrastructure companies with a self-serve motion",
      "Developer relations teams with more roadmap than writing capacity",
      "Product teams whose docs have drifted behind the current release",
    ],
    steps: [
      {
        name: "Product onboarding",
        detail:
          "Our writers set up your product as a new developer would, documenting friction along the way. That first-run report is often the most valuable deliverable of the engagement.",
      },
      {
        name: "Content architecture",
        detail:
          "We map the developer journey — evaluate, install, integrate, ship, troubleshoot — and identify which pages are missing, duplicated, or out of date.",
      },
      {
        name: "Draft and build",
        detail:
          "Each piece is written alongside working code. Sample apps are committed to a repository so readers can clone and run them.",
      },
      {
        name: "Technical review",
        detail:
          "A second engineer reproduces every step from a clean environment, then your team reviews for accuracy and product positioning.",
      },
      {
        name: "Publish and maintain",
        detail:
          "We publish into your CMS or docs repo and re-test content on a scheduled cadence so releases do not silently break your tutorials.",
      },
    ],
    comparison: {
      caption: "Developer content vs. general marketing content",
      columns: ["Dimension", "General marketing content", "Developer content"],
      rows: [
        ["Reader intent", "Learn what a product does", "Get something working right now"],
        ["Author profile", "Generalist writer", "Engineer or technical practitioner"],
        ["Code samples", "Illustrative, rarely run", "Executed and verified before publishing"],
        ["Review gate", "Editorial review", "Editorial plus reproduction from a clean environment"],
        ["Failure mode", "Reads as bland", "Reader hits an error and abandons the product"],
        ["Maintenance", "Refresh occasionally", "Re-test each release cycle"],
      ],
    },
    deliverables: [
      "Quickstarts and getting-started guides",
      "Step-by-step tutorials with runnable sample apps",
      "API reference and integration guides",
      "First-run developer experience report",
      "Scheduled accuracy re-tests",
    ],
    faqs: [
      {
        q: "Do your writers actually run the code?",
        a: "Yes. Every tutorial and quickstart is built against your live product, and a second engineer reproduces the steps from a clean environment before publication.",
      },
      {
        q: "Can you write in our existing docs framework?",
        a: "We work in Markdown, MDX, Docusaurus, Mintlify, ReadMe, and most headless CMS platforms, and can commit directly to your docs repository.",
      },
      {
        q: "How do you keep documentation from going stale?",
        a: "We schedule re-tests tied to your release cadence and flag any page whose code path changed, so breakages are caught before customers report them.",
      },
      {
        q: "How much engineering time do you need from us?",
        a: "Typically one 45-minute kickoff with an engineer, plus asynchronous review. Our writers self-serve the product wherever possible.",
      },
    ],
  },
  {
    slug: "technical-seo-content",
    navName: "SEO & Content Strategy",
    title: "SEO & Content Strategy",
    metaTitle: "Technical SEO & Content Strategy for B2B Software | Content Turbine",
    metaDescription:
      "Keyword research, topic clusters, and editorial roadmaps built for technical B2B audiences and answer engines. See the process, deliverables, and FAQs.",
    definition:
      "SEO and content strategy is the process of deciding which topics a company should own, in what order, and in what format — grounded in search demand, buyer intent, competitive difficulty, and the company's own technical expertise.",
    intro: [
      "Most technical companies do not have a writing problem; they have a prioritization problem. Effort gets spread across topics with no search demand, no differentiation, or no path to a product conversation.",
      "We build a roadmap that starts from what your engineers uniquely know, filters it through real demand data, and sequences it into clusters that compound in authority instead of competing with each other.",
    ],
    whoItsFor: [
      "Teams publishing consistently but seeing flat organic growth",
      "Companies entering a new category or launching a second product line",
      "Marketing leads who need a defensible roadmap to present internally",
    ],
    steps: [
      {
        name: "Expertise inventory",
        detail:
          "Interviews with engineering, product, and support to surface the problems your team solves that competitors cannot credibly write about.",
      },
      {
        name: "Demand and difficulty research",
        detail:
          "Keyword and prompt research across search engines and answer engines, scored by volume, intent, difficulty, and proximity to your product.",
      },
      {
        name: "Cluster design",
        detail:
          "Topics are grouped into pillar-and-spoke clusters with a defined internal linking model, so each new page strengthens the ones around it.",
      },
      {
        name: "Technical SEO audit",
        detail:
          "Crawlability, indexation, rendering, site structure, schema, and Core Web Vitals reviewed, with fixes ranked by traffic impact against effort.",
      },
      {
        name: "Roadmap and forecast",
        detail:
          "A quarter-by-quarter publishing plan with traffic and pipeline forecasts, briefs for the first cluster, and a reporting dashboard.",
      },
    ],
    comparison: {
      caption: "Ad hoc publishing vs. cluster-based strategy",
      columns: ["Dimension", "Ad hoc publishing", "Cluster-based strategy"],
      rows: [
        ["Topic selection", "Whatever is top of mind", "Scored on demand, difficulty, and product fit"],
        ["Internal linking", "Incidental", "Designed pillar-and-spoke model"],
        ["Authority effect", "Each post starts from zero", "Pages compound within a cluster"],
        ["Answer engine fit", "Rarely considered", "Prompt research included alongside keywords"],
        ["Reporting", "Pageviews", "Cluster rankings, conversions, and citation share"],
      ],
    },
    deliverables: [
      "Keyword and prompt research set",
      "Topic cluster map with internal linking model",
      "Technical SEO audit with prioritized fixes",
      "Quarterly editorial roadmap and forecast",
      "Content briefs for the first cluster",
    ],
    faqs: [
      {
        q: "How long before an SEO strategy produces traffic?",
        a: "For a domain with existing authority, expect movement in three months and meaningful compounding by month six. New domains typically take six to twelve months.",
      },
      {
        q: "Do you include answer engines in keyword research?",
        a: "Yes. We research the prompts buyers use in ChatGPT and Perplexity alongside traditional keywords, because the two demand curves are not identical.",
      },
      {
        q: "Can you work with our existing content team?",
        a: "Often we do. Many clients use us for strategy, briefs, and technical review while their in-house writers produce the drafts.",
      },
      {
        q: "What if our content is already ranking?",
        a: "Then the fastest wins are usually refreshes and internal linking rather than net-new pages. We prioritize accordingly after the audit.",
      },
    ],
  },
  {
    slug: "content-audits",
    navName: "Content Audits & Refreshes",
    title: "Content Audits & Refreshes",
    metaTitle: "Technical Content Audits & Refreshes | Content Turbine",
    metaDescription:
      "Audit your existing technical content for accuracy, search performance, and AI citability — then refresh the pages that matter most. Process, deliverables, FAQs.",
    definition:
      "A content audit is a systematic review of an existing content library that scores every page on technical accuracy, search performance, conversion contribution, and AI citability, then classifies it as keep, refresh, consolidate, or retire.",
    intro: [
      "Most established technical companies already own the pages they need. What they lack is a clear read on which of those pages are decaying, which are duplicating each other, and which would outperform anything new if given two hours of attention.",
      "Refreshing a page that already has links and history is consistently the cheapest traffic available. Our audits are built to find those pages first.",
    ],
    whoItsFor: [
      "Libraries of 50+ pages with uneven performance",
      "Companies after a rebrand, pivot, or major product release",
      "Teams whose traffic declined after an algorithm update or AI Overviews rollout",
    ],
    steps: [
      {
        name: "Inventory and data merge",
        detail:
          "We crawl every URL and join it with analytics, Search Console, and conversion data into a single scored spreadsheet.",
      },
      {
        name: "Score each page",
        detail:
          "Pages are rated on technical accuracy, search performance, conversion contribution, extractability for answer engines, and strategic relevance.",
      },
      {
        name: "Classify",
        detail:
          "Every URL is labelled keep, refresh, consolidate, or retire, with the reasoning recorded so decisions can be defended later.",
      },
      {
        name: "Prioritize by impact",
        detail:
          "Refresh candidates are ranked by expected gain against effort, giving you a queue you can work through in order.",
      },
      {
        name: "Execute the refreshes",
        detail:
          "Our writers rework the top candidates: updated code and claims, definition-lead openings, added schema, tightened internal links, and redirects for consolidated pages.",
      },
    ],
    comparison: {
      caption: "Refreshing existing content vs. publishing new content",
      columns: ["Dimension", "Refreshing existing pages", "Publishing new pages"],
      rows: [
        ["Time to impact", "Days to weeks", "Three to six months"],
        ["Existing authority", "Inherited links and history", "Starts at zero"],
        ["Effort per page", "Low to moderate", "High"],
        ["Best used for", "Decaying pages with real demand", "Uncovered topics and new clusters"],
        ["Risk", "Limited upside if demand has vanished", "May not rank at all"],
      ],
    },
    deliverables: [
      "Scored inventory of every URL",
      "Keep / refresh / consolidate / retire classification",
      "Prioritized refresh queue with effort estimates",
      "Redirect and consolidation plan",
      "Executed refreshes for the top-priority pages",
    ],
    faqs: [
      {
        q: "How often should we audit our content?",
        a: "Once a year for a full audit, with a lightweight quarterly check on your top 20 pages. Audit sooner after a rebrand, a major release, or a sharp traffic drop.",
      },
      {
        q: "Is refreshing better than writing new content?",
        a: "For pages with existing links and residual demand, refreshing almost always returns faster. New content is the right call for topics you do not yet cover.",
      },
      {
        q: "What happens to pages you recommend retiring?",
        a: "They are either redirected to the closest surviving page or consolidated into a stronger one, so their link equity is preserved rather than discarded.",
      },
      {
        q: "Do you also check AI citability during the audit?",
        a: "Yes. Every page is scored for extractability — definition-lead openings, question-shaped headings, schema, and self-contained passages — alongside its search metrics.",
      },
    ],
  },
];

export const getServiceDetail = (slug?: string) =>
  serviceDetails.find((s) => s.slug === slug);