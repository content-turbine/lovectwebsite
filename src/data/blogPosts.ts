export type BlogCategory = "Writing" | "Strategy" | "Data";

export interface BlogPostSection {
  heading: string;
  paragraphs: string[];
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  authorName: string;
  date: string;
  readTime: string;
  metaDescription: string;
  excerpt: string;
  intro: string[];
  sections: BlogPostSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-we-measure-ai-citation-share",
    title: "How We Measure AI Citation Share (and Why Most SEO Tools Get It Wrong)",
    category: "Data",
    authorName: "Sharal Pinto",
    date: "2026-06-02",
    readTime: "8 min read",
    metaDescription:
      "Most SEO tools bolt an \"AI visibility\" score onto keyword rank tracking. Here's the prompt-set methodology we actually use to measure AI citation share.",
    excerpt:
      "Most SEO tools bolt an \"AI visibility\" score onto their existing keyword rank tracker. That's the wrong unit of measurement — here's the prompt-set methodology we use instead.",
    intro: [
      "Every SEO platform added an \"AI Overviews\" or \"AI visibility\" column to its dashboard in the last year. Almost all of them compute it the same way: take the keywords you already rank for, check whether an AI Overview shows up on the results page, and report whether you're in it. That tells you something about keywords you already win. It tells you nothing about the questions your buyers are actually typing into ChatGPT, Perplexity, or Claude — which rarely look like search keywords at all.",
      "We measure citation share differently, because the unit that matters for answer engines isn't the keyword — it's the prompt.",
    ],
    sections: [
      {
        heading: "Start from prompts, not keywords",
        paragraphs: [
          "A keyword is something like \"CI/CD pipeline tools.\" A prompt is something like \"what's the difference between a CI/CD pipeline tool and a build server, and which one do I actually need for a five-person team?\" Nobody types the second one into Google, but it's exactly the kind of question people ask an AI assistant, and it's a completely different retrieval problem.",
          "For every client, we build a fixed set of 30–60 prompts sourced from actual buyer language: sales call transcripts, support tickets, and community forum threads in their category. That set becomes the baseline we track over time — not a generic list of category keywords.",
        ],
      },
      {
        heading: "Run the same prompt set across every engine, every month",
        paragraphs: [
          "We run the full prompt set against ChatGPT, Perplexity, Google AI Overviews, and Claude on a fixed monthly cadence, and record three things for each prompt: whether the client is cited, whether a named competitor is cited instead, and whether nobody is cited at all.",
          "That third bucket — nobody cited — is usually the biggest opportunity in a category, and it's invisible to tools that only check whether you personally show up. An empty answer means the engine couldn't find a citable source at all, which is a much easier gap to fill than displacing an already-cited competitor.",
        ],
      },
      {
        heading: "Citation share is a ratio, not a boolean",
        paragraphs: [
          "We report citation share as \"cited in X out of Y prompts in the set,\" tracked month over month, alongside prompt coverage (the percentage of the buyer's actual questions where the client appears at all, cited or not). A single \"are you in AI Overviews: yes/no\" metric collapses both numbers into one and hides which one is actually moving.",
          "In practice, structural fixes — schema, definition-lead openings, crawl access for AI user agents — tend to move prompt coverage first, within weeks. Citation share against competitors on contested prompts moves slower, over a few months of consistent publishing, because it requires actually out-authoring whoever is currently cited.",
        ],
      },
    ],
  },
  {
    slug: "aeo-checklist-before-you-publish",
    title: "The AEO Checklist: 12 Structural Fixes Before You Publish Another Blog Post",
    category: "Strategy",
    authorName: "Sharal Pinto",
    date: "2026-06-18",
    readTime: "10 min read",
    metaDescription:
      "12 structural checks — definition-lead openings, schema, crawl access, and more — to run on a page before you publish it, so answer engines can actually cite it.",
    excerpt:
      "A well-written page and a citable page are not the same thing. Here are the 12 structural checks we run on every page before it publishes.",
    intro: [
      "A page can be well-written, technically accurate, and completely invisible to answer engines, because being citable is a structural property, not a quality one. An AI model can only quote a passage it can cleanly extract — which means the same page can rank fine on Google and never get pulled into a single AI answer.",
      "This is the checklist we run on every client page before it ships. None of it requires rewriting your voice; all of it is about structure.",
    ],
    sections: [
      {
        heading: "Extractability",
        paragraphs: [],
        items: [
          "Does the opening paragraph state a direct definition or answer, before any preamble?",
          "Are your subheadings phrased as the actual questions a reader would ask, not generic labels like \"Overview\"?",
          "Can each paragraph stand alone if quoted out of context, without relying on the previous paragraph to make sense?",
          "Are lists and steps marked up as real HTML lists, not paragraphs with dashes?",
        ],
      },
      {
        heading: "Evidence and specificity",
        paragraphs: [],
        items: [
          "Does every claim that could be a statistic actually cite a number, a source, or your own data — not a vague qualifier like \"many\" or \"most\"?",
          "If you're comparing two things, is there an actual comparison table, not just prose describing both?",
          "Have you cut filler sentences that exist only to hit a word count? Models tend to skip padding when choosing what to quote.",
        ],
      },
      {
        heading: "Machine access",
        paragraphs: [],
        items: [
          "Does your robots.txt allow GPTBot, PerplexityBot, and ClaudeBot, or are you accidentally blocking the crawlers you're trying to get cited by?",
          "Do you have Organization, Article, and FAQPage schema where relevant, and is it actually valid, not just present?",
          "Is the page reachable without JavaScript rendering, or does content only appear after client-side hydration that a crawler might not wait for?",
        ],
      },
      {
        heading: "Consistency and maintenance",
        paragraphs: [
          "Run all 12 before you hit publish, and most of the work of getting cited is already done — the rest is consistency over time.",
        ],
        items: [
          "Does your brand name, product name, and key terminology match exactly across this page and your other properties? Inconsistent naming weakens the entity signals models rely on.",
          "Is this page on a re-check schedule, so a definition or number that goes stale doesn't sit there getting misquoted for the next two years?",
        ],
      },
    ],
  },
  {
    slug: "ghostwriting-doesnt-mean-impersonating-you",
    title: "Ghostwriting Doesn't Mean Impersonating You",
    category: "Writing",
    authorName: "Sharal Pinto",
    date: "2026-07-03",
    readTime: "6 min read",
    metaDescription:
      "The real failure mode in executive ghostwriting isn't \"it doesn't sound like them\" — it's a flattened version of them that only exists in LinkedIn posts.",
    excerpt:
      "The real failure mode in executive ghostwriting isn't \"it doesn't sound like them.\" It's a flattened version of them that only exists in LinkedIn posts.",
    intro: [
      "Every founder who has tried ghostwriting worries about the same thing: will it sound like me? That's the wrong worry. A competent writer can match sentence rhythm and vocabulary from a few samples. The actual failure mode is subtler — a post that technically sounds like the founder but only ever says things a LinkedIn post would say: safe, upbeat, missing the specific complaint or opinion they'd actually voice in a room.",
    ],
    sections: [
      {
        heading: "The interview is the product, not the writing",
        paragraphs: [
          "If a ghostwriter starts from a topic and asks \"what do you think about X,\" they'll get the sanitized answer a founder gives a journalist. The material worth publishing comes out when you ask about a specific decision instead: why did you turn down that acquisition offer, what did you get wrong in the last hiring round, what's the one thing competitors do that you refuse to copy.",
          "That's why the interview structure matters more than the drafting. A recorded 30-minute conversation built around specific, recent decisions produces four to six posts of raw material. A generic \"brain dump\" session produces one usable post and a lot of throat-clearing.",
        ],
      },
      {
        heading: "Cadence beats inspiration",
        paragraphs: [
          "Founders who post when they feel inspired top out at one or two posts a month, and the gaps between them are where an audience forgets you exist. The fix isn't motivation — it's decoupling publishing from mood by running the interview on a fixed schedule regardless of whether that week feels eventful.",
          "In practice, a founder who commits to one recorded interview every two weeks ends up with more publishable material than one, because most of what's worth saying only becomes obvious in hindsight, a week or two after the decision, not in the moment.",
        ],
      },
      {
        heading: "The moderation problem nobody mentions",
        paragraphs: [
          "The comments are where a ghostwritten program is won or lost, and it's the part founders plan for the least. A post that gets real engagement generates replies that deserve a personal response, not a canned one — and if nobody's watching the thread, the two best comments sit unanswered next to a reply from a stranger trying to sell SEO services.",
          "Someone needs to flag which threads are worth the founder's actual time within a few hours of posting, not a few days later when the conversation has already moved on.",
        ],
      },
    ],
  },
  {
    slug: "what-refresh-it-actually-means",
    title: "What \"Refresh It\" Actually Means: The Four Outcomes of a Content Audit",
    category: "Strategy",
    authorName: "Sharal Pinto",
    date: "2026-07-17",
    readTime: "7 min read",
    metaDescription:
      "A content audit that ends in a spreadsheet of scores isn't finished. Every URL needs one of four classifications: keep, refresh, consolidate, or retire.",
    excerpt:
      "A content audit that ends in a spreadsheet of scores isn't finished yet. Every URL needs one of four classifications, each with a different job to do next.",
    intro: [
      "\"We should refresh our old content\" is the default conclusion of almost every content audit, and it's usually wrong for at least half the library. Refreshing is the right call for exactly one kind of page. The other three outcomes get skipped because they're less satisfying to say out loud, not because they matter less.",
    ],
    sections: [
      {
        heading: "Keep: don't touch what's still working",
        paragraphs: [
          "A page ranking well, converting, and still technically accurate needs nothing — and the biggest risk to it is an editor who can't resist \"improving\" something that isn't broken. The instinct to touch every page in an audit is worth resisting on the ones that are already earning their place.",
        ],
      },
      {
        heading: "Refresh: real demand, decaying execution",
        paragraphs: [
          "This is the case that gets all the attention because it's the highest-leverage: a page with existing links, history, and residual search demand that's underperforming because the code samples are outdated, the stats are three years old, or a competitor published something more current. Refreshing it is cheaper than writing something new and inherits authority a fresh page would have to earn from zero.",
        ],
      },
      {
        heading: "Consolidate: three pages fighting each other",
        paragraphs: [
          "Most libraries accumulate near-duplicate pages over time — three \"getting started\" guides written by three different people over three years, each targeting a slightly different version of the same query. They cannibalize each other's rankings instead of reinforcing one. The fix is merging them into one canonical page and redirecting the others, not refreshing all three in parallel.",
        ],
      },
      {
        heading: "Retire: no demand left to serve",
        paragraphs: [
          "Some pages covered a feature that got deprecated, a partnership that ended, or a trend that expired. No amount of refreshing brings back search demand that no longer exists. The honest move is to redirect or remove it, not spend a writer's afternoon polishing a page nobody is going to find.",
          "A content audit that only produces scores without forcing this classification just tells you what you probably already suspected. The classification is the actual deliverable — it's what turns a spreadsheet into a work queue.",
        ],
      },
    ],
  },
  {
    slug: "three-places-ai-drafts-actually-lie",
    title: "The Three Places AI Drafts Actually Lie",
    category: "Writing",
    authorName: "Sharal Pinto",
    date: "2026-07-30",
    readTime: "7 min read",
    metaDescription:
      "AI-drafted content doesn't fail on grammar. It fails in three specific, recurring ways — and knowing the pattern is faster than reading every sentence with equal suspicion.",
    excerpt:
      "AI-drafted content doesn't fail on grammar. It fails in three specific, recurring ways, and knowing the pattern is faster than reading every sentence with equal suspicion.",
    intro: [
      "\"Read it carefully\" isn't a review process, it's a hope. Reviewers who treat every sentence as equally suspect burn hours and still miss things, because the actual failure modes of AI-drafted content cluster in three predictable places. Knowing where to look is faster than reading everything twice.",
    ],
    sections: [
      {
        heading: "Invented statistics that sound exactly right",
        paragraphs: [
          "A model asked to support a claim will often produce a specific-sounding number — \"73% of engineering teams\" — that isn't hallucinated in an obviously wrong way; it's plausible enough to pass a skim. The tell isn't that the number looks fake, it's that it can't be traced to a source. Every statistic in an AI draft needs a citation checked against a real document, not a gut check on whether it sounds reasonable.",
        ],
      },
      {
        heading: "Citations that say something adjacent, not the claim itself",
        paragraphs: [
          "A more subtle failure than a fabricated source is a real source that gets misrepresented — a study about correlation cited as if it proved causation, or a quote pulled from context that reverses its original meaning. This one survives a fact-check that only confirms the source exists, because the source does exist. It only gets caught by someone who actually opens the link and reads what it says.",
        ],
      },
      {
        heading: "Code that reads correctly and doesn't run",
        paragraphs: [
          "Generated code samples are fluent in the syntax of whatever language they're written in, which is exactly why they're dangerous to publish unverified: a method that doesn't exist on that SDK version, a parameter order that's plausible but wrong, an import that was renamed two releases ago. It looks right to anyone who doesn't actually execute it.",
          "The only reliable check is running the sample against the real product, not reading it and deciding it looks plausible — which is the same standard a reader will apply, right up until it fails for them.",
        ],
      },
    ],
  },
  {
    slug: "topic-clusters-still-beat-keyword-lists",
    title: "Topic Clusters Still Beat Keyword Lists, Even for AI Search",
    category: "Strategy",
    authorName: "Sharal Pinto",
    date: "2026-08-04",
    readTime: "8 min read",
    metaDescription:
      "A flat list of keyword-targeted posts and a topic cluster look similar in a spreadsheet. They perform completely differently once AI engines are the ones reading your site.",
    excerpt:
      "A flat list of keyword-targeted posts and a topic cluster look similar in a spreadsheet. They perform completely differently once AI engines are the ones reading your site.",
    intro: [
      "Most content plans are still a spreadsheet of keywords, one row per post, sorted by search volume. That approach produced fine results for a decade of Google rankings, and it's exactly the structure that falls apart once AI engines are the ones parsing your site — because a model isn't ranking pages against a query, it's trying to assemble an answer from whatever it can find, and a pile of disconnected posts gives it nothing to assemble from.",
      "The fix isn't a new tactic, it's the old one done properly: a pillar page and a cluster of supporting pages that actually link to each other and agree with each other. Most teams say they do this. Few actually do.",
    ],
    sections: [
      {
        heading: "A keyword list produces orphan pages",
        paragraphs: [
          "Row 47 in a keyword spreadsheet becomes a blog post that links to nothing and gets linked from nothing, because the spreadsheet has no concept of relationship between rows. Six months later you have eighty posts and no page a reader — or a model — would recognize as the canonical one on any given topic.",
          "A cluster starts from the opposite direction: pick the handful of topics you actually want to be known for, write one comprehensive pillar page per topic, then build supporting pages that each answer one narrow sub-question and link back to the pillar. The volume of content can be identical. The shape is not.",
        ],
      },
      {
        heading: "Pillar structure is a trust signal, not just internal linking",
        paragraphs: [
          "Internal links get talked about as an SEO mechanic, but their real function is telling any reader — human or model — which page you consider authoritative on a topic. A model retrieving passages about your category is more likely to surface and trust a page that other pages on your own site treat as the reference, the same way a human would trust the page every other page cites.",
          "This is also why clusters compound and keyword lists don't: every new supporting page you publish adds another vote of confidence to the pillar, instead of just adding another disconnected row to the spreadsheet.",
        ],
      },
      {
        heading: "One canonical definition, everywhere",
        paragraphs: [
          "A cluster forces a decision a keyword list never does: pick one definition of your core term and use it identically on the pillar and every supporting page. Teams without that discipline end up with three pages defining the same concept three slightly different ways, written by three different people over two years — which reads as inconsistency to a model deciding which of your pages to trust as the source of truth.",
        ],
      },
      {
        heading: "Where this breaks down",
        paragraphs: [
          "Clusters fail when the pillar page is written first and the supporting pages are backfilled to justify it, instead of built from real questions a buyer actually asks. That produces a tidy internal-linking diagram and content nobody searches for. Start the cluster from the sales calls and support tickets, not the content calendar.",
        ],
      },
    ],
  },
  {
    slug: "auditing-developer-content-beyond-does-it-rank",
    title: "Auditing Developer Content: What We Actually Check Beyond \"Does It Rank\"",
    category: "Data",
    authorName: "Sharal Pinto",
    date: "2026-08-07",
    readTime: "9 min read",
    metaDescription:
      "Ranking well and being technically correct are unrelated properties of a developer doc. Here's what we actually check when auditing docs, tutorials, and API references.",
    excerpt:
      "Ranking well and being technically correct are unrelated properties of a developer doc. Here's what we actually check when we audit one.",
    intro: [
      "A developer tutorial can rank on page one, get steady traffic, and still be actively wrong — a deprecated method call, a parameter order that changed two major versions ago, a code sample that throws on a fresh install. Traffic tells you a page is findable. It tells you nothing about whether the thing a developer copy-pastes from it actually works.",
      "That gap is why a technical content audit needs a different checklist than a general SEO audit. Below is what we actually check, not what a rank-tracking tool can check for us.",
    ],
    sections: [
      {
        heading: "Technical accuracy isn't a proofread",
        paragraphs: [
          "A proofread catches typos and awkward phrasing. It does not catch a method that was renamed in the SDK's last major release, because the sentence describing it still reads perfectly grammatically. Every technical claim — a method signature, a default value, a supported platform — gets checked against the current version of the actual product, not against how confident the sentence sounds.",
        ],
      },
      {
        heading: "Every code sample gets executed, not read",
        paragraphs: [
          "This is the single highest-value check in a developer content audit and the one most likely to get skipped, because reading code and running code both feel like verification. They aren't the same. We run every sample in a clean environment against the current SDK before a page passes audit, and it's routine to find imports that no longer resolve or a config key that was renamed.",
        ],
      },
      {
        heading: "Accessibility and readability are pass/fail, not a score",
        paragraphs: [],
        items: [
          "Does every code block have a language annotation, so syntax highlighting and screen readers both handle it correctly?",
          "Do images and diagrams have real alt text describing what they show, not the filename?",
          "Is there a heading structure a reader can actually navigate with, or is the whole page one wall of H2s with no H3s beneath them?",
        ],
      },
      {
        heading: "The prioritization step most audits skip",
        paragraphs: [
          "A spreadsheet of forty pages with pass/fail scores isn't a plan, it's a list. We rank failing pages by current traffic and inbound link count before anyone starts fixing anything, because a broken code sample on a page getting ten visits a month is a very different priority than the same problem on your most-linked getting-started guide. Fix in traffic order, not alphabetical order.",
        ],
      },
    ],
  },
  {
    slug: "why-ai-engines-cite-one-source-not-five",
    title: "Why AI Engines Cite One Source and Not the Five Others Saying the Same Thing",
    category: "Strategy",
    authorName: "Sharal Pinto",
    date: "2026-08-10",
    readTime: "7 min read",
    metaDescription:
      "Being correct is table stakes. When five pages all say roughly the same true thing, here's what actually determines which one gets cited.",
    excerpt:
      "Being correct is table stakes. When five pages all say roughly the same true thing, here's what actually determines which one gets cited.",
    intro: [
      "Run the same prompt against ChatGPT or Perplexity often enough and a pattern shows up: on any contested topic, there are usually five or six pages that all say something roughly correct, and the model consistently picks one of them to cite. It's rarely the most comprehensive page, and it's almost never the oldest. Correctness turns out to be the floor everyone already cleared, not the thing separating the cited page from the other four.",
    ],
    sections: [
      {
        heading: "Specificity beats agreement",
        paragraphs: [
          "\"Caching improves performance\" and \"caching cut our p95 API latency from 340ms to 60ms after we added a 5-minute TTL on the product endpoint\" are both true. Only one of them is quotable, because a model generating an answer needs a passage it can lift with a concrete claim attached — a number, a named tool, a specific before-and-after. The vaguer of two equally correct pages loses by default, not because it's wrong.",
        ],
      },
      {
        heading: "Named authorship is a citation signal",
        paragraphs: [
          "A claim attributed to a named person with a stated role reads as more citable than the identical claim published anonymously, and it's a pattern that shows up consistently across engines. This isn't the model checking credentials — it's that named authorship correlates with the kind of accountable, specific writing that tends to be extractable in the first place. Anonymous corporate copy tends to hedge; a named person willing to put their title next to a claim tends not to.",
        ],
      },
      {
        heading: "Freshness timestamps outrank freshness claims",
        paragraphs: [
          "A page that says \"updated for 2026\" in the copy and a page with a visible, structured last-modified date are not equally fresh to a model — only the second one is verifiably fresh. If your CMS doesn't expose a real modified date in the page's metadata, a claim of currency in the prose is just more prose, and it competes with every other page also claiming to be current.",
        ],
      },
      {
        heading: "The uncomfortable implication",
        paragraphs: [
          "If five pages already say the same true thing, publishing a sixth that says it the same way doesn't add a citation opportunity — it adds another page competing for the same slot. The move that actually shifts citation share is adding the specific number, the named source, or the structured comparison none of the existing five have, not writing a better-phrased version of what they already say.",
        ],
      },
    ],
  },
];

export const getBlogPost = (slug?: string) => blogPosts.find((p) => p.slug === slug);
