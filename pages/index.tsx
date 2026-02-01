import type { NextPage } from "next";
import Layout from "../components/Layout";
import NewHero from "../components/home/NewHero";
import WhyUs from "../components/home/WhyUs";
import HowItWorks from "../components/home/HowItWorks";
import WhatWeDo from "../components/home/WhatWeDo";
import WhoWeHelp from "../components/home/WhoWeHelp";
import WhyNow from "../components/home/WhyNow";
import NewTestimonials from "../components/home/NewTestimonials";
import Differentiator from "../components/home/Differentiator";
import Resources from "../components/home/Resources";
import FinalCTA from "../components/home/FinalCTA";

const Home: NextPage = () => {
  return (
    <Layout>
      <NewHero />
      <WhyUs />
      <HowItWorks />
      <WhatWeDo />
      <WhoWeHelp />
      <WhyNow />
      <NewTestimonials />
      <Differentiator />
      <Resources />
      <FinalCTA />
    </Layout>
  );
};

export default Home;
