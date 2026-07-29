import Seo from "../components/Seo";
import Hero from "../../components/services/Hero";
import ServiceCategories from "../../components/services/ServiceCategories";
import FAQ from "../../components/services/FAQ";
import TrustedBy from "../../components/TrustedBy";
import ServiceIndex from "../../components/services/ServiceIndex";

export default function Services() {
  return (
    <>
      <Seo
        title="Services — Technical Marketing Content | Content Turbine"
        description="Create, optimize, and review high-quality technical marketing content built to drive results for developer-focused and B2B tech companies."
        path="/services"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Technical marketing content",
            provider: { "@id": "https://www.contentturbine.com/#organization" },
            areaServed: "Worldwide",
            url: "https://www.contentturbine.com/services",
            description:
              "Create, optimize, and review technical marketing content for tech companies.",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Content Turbine services",
              itemListElement: [
                "Discovery call",
                "Content strategy & brain dump",
                "SEO / AEO strategy",
                "Technical content creation",
                "Content audits & optimization",
              ].map((name) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name },
              })),
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                q: "How is Content Turbine different from other technical marketing agencies?",
                a: "We offer the full suite of services a tech firm needs, and our writers are experts from engineering, technical sales, and marketing backgrounds. Every piece is held to a high editorial standard and reviewed for accuracy and relevance to your audience.",
              },
              {
                q: "Can I get a single deliverable like whitepapers or blogs only?",
                a: "We start from one of our packages rather than one-off deliverables. On the free consultation call we help you pick the best-fit package and customize it if needed.",
              },
              {
                q: "Do you offer free trials?",
                a: "We don't offer free trials, but you can review our past work and start with a pilot program after getting in touch.",
              },
              {
                q: "How do I get started with Content Turbine?",
                a: "Book a free consultation through the contact page, or use the chat button to send your details and we'll get back to you.",
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.contentturbine.com/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://www.contentturbine.com/services" },
            ],
          },
        ]}
      />
      <Hero />
      <ServiceIndex />
      <ServiceCategories />
      <TrustedBy />
      <FAQ />
    </>
  );
}
