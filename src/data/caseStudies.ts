export interface CaseStudy {
  companyType: string;
  serviceSlug: string;
  serviceName: string;
  role: string;
  challenge: string;
  approach: string;
  result: string;
  metric: string;
}

export const caseStudies: CaseStudy[] = [
  {
    companyType: "A Series B API infrastructure company",
    serviceSlug: "answer-engine-optimization",
    serviceName: "Answer Engine Optimization",
    role: "VP of Marketing",
    challenge:
      "Their docs and comparison pages were being summarized by AI Overviews and ChatGPT with zero attribution back to the brand, while a better-funded competitor kept getting cited by name.",
    approach:
      "Content Turbine ran a baseline citation audit across a 40-prompt set, rewrote their top comparison and \"how it works\" pages with definition-lead openings and schema markup, and published a monthly cadence of answer-first content.",
    result:
      "Citation share on the tracked prompt set rose from being cited in 1 answer out of 10 to 6 out of 10 within four months, with the brand now outcited on head-to-head comparison prompts.",
    metric: "6x increase in AI citation share in 4 months",
  },
  {
    companyType: "A seed-stage developer-tools startup",
    serviceSlug: "linkedin-thought-leadership",
    serviceName: "LinkedIn Thought Leadership",
    role: "Co-founder & CTO",
    challenge:
      "The CTO had strong opinions worth publishing but no time to write, and a first attempt at posting personally fizzled out after three weeks.",
    approach:
      "Content Turbine ran bi-weekly recorded interviews, ghostwrote 3 posts a week in his voice, and managed the publishing calendar so momentum never depended on him finding a free evening.",
    result:
      "Follower count grew steadily over the engagement, and inbound DMs from the posts turned into two sales conversations that reached the pipeline stage in the first quarter.",
    metric: "4x follower growth and 2 pipeline-stage leads in one quarter",
  },
  {
    companyType: "A self-serve API company",
    serviceSlug: "developer-content",
    serviceName: "Developer Content & Docs",
    role: "Head of Developer Relations",
    challenge:
      "Trial signups were dropping off inside the first ten minutes because the quickstart guide referenced an old SDK version and the sample code no longer ran.",
    approach:
      "Content Turbine engineers rebuilt the quickstart against the current SDK, added a runnable sample app, and put every tutorial on a re-test schedule tied to release cadence so this couldn't quietly happen again.",
    result:
      "Developers completing the quickstart without hitting a support ticket increased substantially, and time-to-first-successful-API-call dropped from the trial's first session to under ten minutes.",
    metric: "Support tickets from new trials cut by more than half",
  },
];
