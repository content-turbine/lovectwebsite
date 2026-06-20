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
      />
      <Hero />
      <CalendlyEmbed />
      <Stats />
      <TrustedBy />
    </>
  );
}