import Hero from "../../components/contact/Hero";
import CalendlyEmbed from "../../components/contact/CalendlyEmbed";
import Stats from "../../components/contact/Stats";
import Testimonials from "../../components/contact/Testimonials";
import TrustedBy from "../../components/TrustedBy";

export default function Contact() {
  return (
    <>
      <Hero />
      <CalendlyEmbed />
      <Stats />
      <Testimonials />
      <TrustedBy />
    </>
  );
}