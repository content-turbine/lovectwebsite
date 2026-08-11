export type BlogCategory = "Writing" | "Strategy" | "Data";

export interface BlogPostSection {
  heading: string;
  paragraphs: string[];
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
        paragraphs: [
          "1. Does the opening paragraph state a direct definition or answer, before any preamble? 2. Are your subheadings phrased as the actual questions a reader would ask, not generic labels like \"Overview\"? 3. Can each paragraph stand alone if quoted out of context, without relying on the previous paragraph to make sense? 4. Are lists and steps marked up as real HTML lists, not paragraphs with dashes?",
        ],
      },
      {
        heading: "Evidence and specificity",
        paragraphs: [
          "5. Does every claim that could be a statistic actually cite a number, a source, or your own data — not a vague qualifier like \"many\" or \"most\"? 6. If you're comparing two things, is there an actual comparison table, not just prose describing both? 7. Have you cut filler sentences that exist only to hit a word count — models tend to skip padding when choosing what to quote.",
        ],
      },
      {
        heading: "Machine access",
        paragraphs: [
          "8. Does your robots.txt allow GPTBot, PerplexityBot, and ClaudeBot, or are you accidentally blocking the crawlers you're trying to get cited by? 9. Do you have Organization, Article, and FAQPage schema where relevant, and is it actually valid — not just present? 10. Is the page reachable without JavaScript rendering, or does content only appear after client-side hydration that a crawler might not wait for?",
        ],
      },
      {
        heading: "Consistency and maintenance",
        paragraphs: [
          "11. Does your brand name, product name, and key terminology match exactly across this page and your other properties — inconsistent naming weakens the entity signals models rely on. 12. Is this page on a re-check schedule, so a definition or number that goes stale doesn't sit there getting (mis)quoted for the next two years?",
          "Run all 12 before you hit publish, and most of the work of getting cited is already done — the rest is consistency over time.",
        ],
      },
    ],
  },
];

export const getBlogPost = (slug?: string) => blogPosts.find((p) => p.slug === slug);
