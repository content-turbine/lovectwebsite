// Public marketing content exposed through the MCP server.
// Mirrors what is already published on contentturbine.com.

export const SITE_URL = "https://www.contentturbine.com";

export const overview = {
  name: "Content Turbine",
  summary:
    "Content Turbine is a content agency for developer-focused and technical B2B companies. We handle strategy, production, and distribution of technical content so engineering and marketing teams do not have to.",
  positioning: [
    "Subject-matter-expert driven technical content, not generic AI output",
    "Built for developer audiences: guides, docs, tutorials, sample apps",
    "Optimized for both traditional SEO and answer engines (AI Overviews, ChatGPT, Perplexity)",
    "Full-service: strategy, creation, optimization, and content operations",
  ],
  process: [
    { stage: "Discovery", detail: "A 30-minute session to assess fit, goals, and current content state." },
    { stage: "Strategy", detail: "Stakeholder brain dumps, SEO/AEO strategy, and an editorial roadmap." },
    { stage: "Create", detail: "Developer content, thought leadership, and product marketing assets." },
    { stage: "Optimize", detail: "Reviews, audits, performance analysis, and continuous improvement." },
  ],
};

export const services = [
  {
    stage: "Discovery",
    title: "Discovery Call",
    description:
      "A 30-minute discovery session to explore where your business is at, what your content goals are, and how our strategy, production, and promotion processes work.",
    includes: ["Business Assessment", "Content Goals Review", "Strategy Walkthrough", "Fit Evaluation"],
  },
  {
    stage: "Strategy",
    title: "The Brain Dump & Content Strategy",
    description:
      "1-on-1 interviews with leadership, engineering, and product teams to extract vision and thought leadership ideas, then define a content strategy and roadmap.",
    includes: [
      "Stakeholder Interviews",
      "Technical Deep Dives",
      "Content Audits",
      "Topic Identification",
      "Editorial Calendars",
      "Distribution Strategy",
    ],
  },
  {
    stage: "Strategy",
    title: "SEO / AEO Strategy",
    description:
      "Visibility into how you appear in Google Search, AI Overviews, and LLM-based tools, plus a plan to optimize your presence across each.",
    includes: [
      "Keyword Research",
      "Goal Setting & Forecasting",
      "Topic Prioritization",
      "Technical SEO Audits",
      "Content & AEO Audits",
      "Strategy Creation",
    ],
  },
  {
    stage: "Strategy",
    title: "Content Operations",
    description:
      "Reporting, performance analysis, and CMS publication — content handled from ideation through publication.",
    includes: [
      "Analytics & Dashboards",
      "CMS Uploads",
      "Conversion Tracking",
      "AI Workflow Implementation",
      "Performance Analysis",
      "Attribution Reporting",
    ],
  },
  {
    stage: "Create",
    title: "Developer Content",
    description:
      "Clear, accurate technical content that enables developers to build faster and showcases your product's capabilities.",
    includes: [
      "Developer Guides",
      "How-to Articles",
      "API Documentation",
      "Tutorials & Quickstarts",
      "Integration Guides",
      "Sample Apps & OSS",
    ],
  },
  {
    stage: "Create",
    title: "Thought Leadership",
    description:
      "SME-driven content series that grow awareness and establish authority.",
    includes: [
      "Blog Articles",
      "Whitepapers & Ebooks",
      "Industry Reports",
      "Email Newsletters",
      "Podcasts",
      "Social Content",
    ],
  },
  {
    stage: "Create",
    title: "Product Marketing",
    description:
      "We learn your product, industry, and audience to tell a compelling and accurate product story.",
    includes: [
      "Case Studies",
      "Competitive Analysis",
      "Product Comparisons",
      "Landing Pages",
      "Feature Videos",
      "One Pagers",
    ],
  },
  {
    stage: "Optimize",
    title: "Content Review & Audits",
    description:
      "Technical and editorial review of existing content to find gaps, fix accuracy issues, and prioritize high-impact improvements.",
    includes: ["Technical Accuracy Review", "Editorial Review", "Content Gap Analysis", "Refresh Prioritization"],
  },
];

export const resources = [
  {
    slug: "ai-content-framework",
    type: "Framework",
    title: "The AI-Era Content Strategy Framework",
    headline: "Build content that wins in the age of AI search",
    description:
      "A framework for creating technical content that performs across Google, AI Overviews, ChatGPT, Perplexity, and emerging LLM-based discovery tools.",
    benefits: [
      "Understand how AI tools evaluate and surface content",
      "Structure your content for maximum discoverability",
      "Create topic clusters that establish authority",
      "Optimize for both traditional SEO and answer engines",
      "Measure what actually matters in the AI era",
    ],
    url: `${SITE_URL}/resources/ai-content-framework`,
  },
  {
    slug: "content-audit-checklist",
    type: "Checklist",
    title: "Technical Content Audit Checklist",
    headline: "50+ checkpoints to evaluate your developer content",
    description:
      "A practical checklist to audit developer documentation, tutorials, API references, and technical blog posts.",
    benefits: [
      "Assess content accuracy and technical depth",
      "Evaluate code samples for best practices",
      "Check accessibility and readability scores",
      "Identify outdated or deprecated content",
      "Prioritize high-impact content improvements",
    ],
    url: `${SITE_URL}/resources/content-audit-checklist`,
  },
  {
    slug: "aeo-playbook",
    type: "Playbook",
    title: "The AEO Playbook",
    headline: "Get cited by the answer engines your buyers actually use",
    description:
      "A playbook for answer engine optimization: how to structure, publish, and measure content so LLM-based tools cite you.",
    benefits: [
      "Learn how answer engines select sources",
      "Structure pages for extraction and citation",
      "Build the entity and authority signals that matter",
      "Track AEO visibility over time",
    ],
    url: `${SITE_URL}/resources/aeo-playbook`,
  },
];

export const contact = {
  website: SITE_URL,
  contactPage: `${SITE_URL}/contact`,
  bookACall: "https://calendly.com/sharalpinto/quick-sync",
  twitter: "https://twitter.com/ContentTurbine",
  linkedin: "https://www.linkedin.com/company/content-turbine/about",
  howToStart:
    "Book a 30-minute discovery call through the contact page, or reach out on LinkedIn or X.",
};