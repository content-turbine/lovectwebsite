import Seo from "../components/Seo";
import Hero from "../../components/contact/Hero";
import CalendlyEmbed from "../../components/contact/CalendlyEmbed";
import Stats from "../../components/contact/Stats";
import TrustedBy from "../../components/TrustedBy";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Content Turbine — Book a Discovery Call"
        description="Get in touch with Content Turbine to discuss your technical marketing strategy and book a discovery call with our team."
        path="/contact"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: "https://www.contentturbine.com/contact",
            name: "Contact Content Turbine",
            description:
              "Book a 30-minute discovery call with Content Turbine to discuss your technical content strategy.",
            mainEntity: { "@id": "https://www.contentturbine.com/#organization" },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.contentturbine.com/" },
              { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.contentturbine.com/contact" },
            ],
          },
        ]}
      />
      <Hero />
      <CalendlyEmbed />
      <Stats />
      <TrustedBy />
    </>
  );
}