import NewHero from "../../components/home/NewHero";
import Differentiator from "../../components/home/Differentiator";
import HowItWorks from "../../components/home/HowItWorks";
import NewTestimonials from "../../components/home/NewTestimonials";
import WhatWeDo from "../../components/home/WhatWeDo";
import WhoWeHelp from "../../components/home/WhoWeHelp";
import Resources from "../../components/home/Resources";
import LetsConnect from "../../components/home/LetsConnect";
import Newsletter from "../../components/Newsletter";

export default function Home() {
  return (
    <>
      <NewHero />
      <Differentiator />
      <HowItWorks />
      <NewTestimonials />
      <WhatWeDo />
      <WhoWeHelp />
      <Resources />
      <LetsConnect />
      <Newsletter />
    </>
  );
}
