import Seo from "../components/Seo";
import VisibilityHero from "../../components/home/VisibilityHero";
import VisibilityFeatures from "../../components/home/VisibilityFeatures";
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
        title="Content Turbine — See How Visible Your Brand Is in AI Answers"
        description="We scan how ChatGPT, Gemini, and Perplexity see your brand, then our expert content team executes the strategy to get you cited."
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.contentturbine.com/#webpage",
            url: "https://www.contentturbine.com/",
            name: "Content Turbine — See How Visible Your Brand Is in AI Answers",
            description:
              "We scan how AI answer engines see your brand, then our expert content team executes the strategy to get you cited.",
            isPartOf: { "@id": "https://www.contentturbine.com/#website" },
            about: { "@id": "https://www.contentturbine.com/#organization" },
            inLanguage: "en",
          },
          faqJsonLd,
        ]}
      />
      <VisibilityHero />
      <TrustedBy />
      <VisibilityFeatures />
      <Differentiator />
      <HowItWorks />
      <WhoWeHelp />
      <CaseStudies />
      <Resources />
      <FAQ />
    </>
  );
}
