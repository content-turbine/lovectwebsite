import Seo from "../components/Seo";
import Hero from "../../components/services/Hero";
import ServiceCategories from "../../components/services/ServiceCategories";
import FAQ from "../../components/services/FAQ";
import TrustedBy from "../../components/TrustedBy";

export default function Services() {
  return (
    <>
      <Seo
        title="Services — Technical Marketing Content | Content Turbine"
        description="Create, optimize, and review high-quality technical marketing content built to drive results for developer-focused and B2B tech companies."
        path="/services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Technical marketing content",
          provider: { "@type": "Organization", name: "Content Turbine" },
          areaServed: "Global",
          description:
            "Create, optimize, and review technical marketing content for tech companies.",
        }}
      />
      <Hero />
      <ServiceCategories />
      <TrustedBy />
      <FAQ />
    </>
  );
}
