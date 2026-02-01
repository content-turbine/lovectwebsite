import type { NextPage } from "next";
import BannerSection from "../components/ai/BannerSection";
import Clients from "../components/ai/Clients";
import Faqs from "../components/ai/Faqs";
import Layout from "../components/Layout";

const Ai: NextPage = () => {
  return (
    <Layout>
      <BannerSection />
      <Clients />
      <Faqs />
    </Layout>
  );
};

export default Ai;
