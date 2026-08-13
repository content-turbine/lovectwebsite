import Seo from "../components/Seo";
import { useState } from "react";
import VisibilityHero from "../../components/home/VisibilityHero";
import VisibilityFeatures from "../../components/home/VisibilityFeatures";
import Differentiator from "../../components/home/Differentiator";
import WhoWeHelp from "../../components/home/WhoWeHelp";
import TrustedBy from "../../components/TrustedBy";
import TrustedByLogos from "../../components/TrustedByLogos";
import FAQ, { faqJsonLd } from "../../components/home/FAQ";

export default function Home() {
  const [guideOpen, setGuideOpen] = useState(false);
  const openReport = () => {
    setGuideOpen(false);
    document.getElementById("get-report")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

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
      <TrustedByLogos />
      <VisibilityFeatures />
      <Differentiator />
      <WhoWeHelp />
      <TrustedBy />
      <FAQ />
      <aside style={{ position: "fixed", right: "1.25rem", bottom: "1.25rem", zIndex: 1000 }}>
        {guideOpen && (
          <div style={{ width: "min(330px, calc(100vw - 2.5rem))", marginBottom: "0.8rem", padding: "1.1rem", borderRadius: "16px", color: "white", background: "#163538", boxShadow: "0 18px 50px rgba(0,0,0,.28)", fontFamily: "Averta, Arial, sans-serif" }}>
            <strong>Your AI visibility guide</strong>
            <p style={{ margin: ".5rem 0 .8rem", color: "rgba(255,255,255,.75)", fontSize: ".9rem", lineHeight: 1.45 }}>Explore how brands earn citations in AI answers.</p>
            <button type="button" onClick={openReport} style={{ width: "100%", marginTop: ".45rem", padding: ".65rem", textAlign: "left", color: "white", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", cursor: "pointer" }}>How does the free report work?</button>
            <button type="button" onClick={openReport} style={{ width: "100%", marginTop: ".45rem", padding: ".65rem", textAlign: "left", color: "white", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", cursor: "pointer" }}>Get my AI visibility report →</button>
          </div>
        )}
        <button type="button" onClick={() => setGuideOpen((open) => !open)} aria-label="Open AI visibility guide" style={{ width: "60px", height: "60px", display: "grid", placeItems: "center", marginLeft: "auto", color: "#123033", background: "#95e6d7", border: 0, borderRadius: "50%", boxShadow: "0 12px 30px rgba(0,0,0,.25)", cursor: "pointer", fontSize: "1.5rem" }}>✦</button>
      </aside>
    </>
  );
}
