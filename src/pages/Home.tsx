import Seo from "../components/Seo";
import NewHero from "../../components/home/NewHero";
import Differentiator from "../../components/home/Differentiator";
import HowItWorks from "../../components/home/HowItWorks";
import WhoWeHelp from "../../components/home/WhoWeHelp";
import CaseStudies from "../../components/home/CaseStudies";
import Resources from "../../components/home/Resources";
import TrustedBy from "../../components/TrustedBy";
import FAQ, { faqJsonLd } from "../../components/home/FAQ";

export default function Home() {
  return (
    <>
      <Seo
        title="Content Turbine — Technical Marketing for Tech Leaders"
        description="AI-assisted, human-approved technical marketing content that helps tech leaders build authority and drive results."
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.contentturbine.com/#webpage",
            url: "https://www.contentturbine.com/",
            name: "Content Turbine — Technical Marketing for Tech Leaders",
            description:
              "AI-assisted, human-approved technical marketing content for tech leaders.",
            isPartOf: { "@id": "https://www.contentturbine.com/#website" },
            about: { "@id": "https://www.contentturbine.com/#organization" },
            inLanguage: "en",
          },
          faqJsonLd,
        ]}
      />
      <NewHero />
      <Differentiator />
      <HowItWorks />
      <WhoWeHelp />
      <CaseStudies />
      <Resources />
      <FAQ />
      <TrustedBy />
    </>
  );
}
