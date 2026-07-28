import Seo from "../components/Seo";
import Timeline from "../../components/about/Timeline";
import Team from "../../components/about/Team";
import TrustedBy from "../../components/TrustedBy";

export default function About() {
  return (
    <>
      <Seo
        title="About Content Turbine — Our Story & Team"
        description="Meet the team behind Content Turbine and learn how we blend AI efficiency with human expertise to deliver technical marketing content."
        path="/about"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            url: "https://www.contentturbine.com/about",
            name: "About Content Turbine",
            description:
              "The team, story, and approach behind Content Turbine — a technical content agency for developer-focused B2B companies.",
            mainEntity: { "@id": "https://www.contentturbine.com/#organization" },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.contentturbine.com/" },
              { "@type": "ListItem", position: 2, name: "About", item: "https://www.contentturbine.com/about" },
            ],
          },
        ]}
      />
      <Timeline />
      <Team />
      <TrustedBy />
    </>
  );
}
