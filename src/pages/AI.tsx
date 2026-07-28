import Seo from "../components/Seo";
import BannerSection from "../../components/ai/BannerSection";
import Clients from "../../components/ai/Clients";
import Faqs from "../../components/ai/Faqs";
import TrustedBy from "../../components/TrustedBy";

export default function AI() {
  return (
    <>
      <Seo
        title="AI-Assisted, Human-Approved Content | Content Turbine"
        description="See how Content Turbine combines AI efficiency with human editorial review to produce trustworthy technical marketing content."
        path="/ai"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: "https://www.contentturbine.dev/ai",
            name: "AI-Assisted, Human-Approved Content",
            description:
              "How Content Turbine combines AI efficiency with human editorial review to produce trustworthy technical marketing content.",
            about: { "@id": "https://www.contentturbine.dev/#organization" },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                q: "Does Content Turbine publish raw AI output?",
                a: "No. AI accelerates research and drafting, but subject-matter experts shape the content and human editors review every piece before it ships.",
              },
              {
                q: "Who is AI-assisted content for?",
                a: "Technical B2B and developer-tool companies that need to publish more credible content than their in-house team can produce alone, without sacrificing accuracy.",
              },
              {
                q: "How does AI-assisted content affect search and AI answer engines?",
                a: "Human-reviewed, expert-sourced content performs better in both Google and AI answer engines because it carries verifiable claims, clear structure, and genuine expertise — the signals those systems reward.",
              },
            ].map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.contentturbine.dev/" },
              { "@type": "ListItem", position: 2, name: "AI", item: "https://www.contentturbine.dev/ai" },
            ],
          },
        ]}
      />
      <BannerSection />
      <Clients />
      <Faqs />
      <TrustedBy />
    </>
  );
}
