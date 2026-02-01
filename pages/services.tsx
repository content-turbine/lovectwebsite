import type { NextPage } from "next";
import Layout from "../components/Layout";
import FAQ from "../components/services/FAQ";
import ServicesHero from "../components/services/Hero";
import OurProcess from "../components/services/OurProcess";
import Share from "../components/services/Share";
import WhatWeOffer from "../components/services/WhatWeOffer";

const Services: NextPage = () => {
  return (
    <Layout>
      <ServicesHero />
      <OurProcess />
      <WhatWeOffer />
      {/* <FAQ /> */}
      <Share />
    </Layout>
  );
};

export default Services;
