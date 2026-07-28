import Seo from "../components/Seo";
import NewHero from "../../components/home/NewHero";
import Differentiator from "../../components/home/Differentiator";
import HowItWorks from "../../components/home/HowItWorks";
import WhoWeHelp from "../../components/home/WhoWeHelp";
import Resources from "../../components/home/Resources";
import LetsConnect from "../../components/home/LetsConnect";
import TrustedBy from "../../components/TrustedBy";

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
            "@type": "Organization",
            name: "Content Turbine",
            url: "https://www.contentturbine.dev/",
            description:
              "AI-assisted, human-approved technical marketing content for tech leaders.",
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Content Turbine",
            url: "https://www.contentturbine.dev/",
          },
        ]}
      />
      <NewHero />
      <Differentiator />
      <HowItWorks />
      <WhoWeHelp />
      <Resources />
      <LetsConnect />
      <TrustedBy />
    </>
  );
}
