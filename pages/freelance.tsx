import type { NextPage } from "next";
import ContentCreatorsWeNeed from "../components/for-creator/ContentCreatorsWeNeed";
import ContentTurbineDelivers from "../components/for-creator/ContentTurbineDelivers";
import CreatorsSay from "../components/for-creator/CreatorsSay";
import Faq from "../components/for-creator/Faq";
import HandleTheRest from "../components/for-creator/HandleTheRest";
import WritersPortalBanner from "../components/for-creator/WritersPortalBanner";
import Layout from "../components/Layout";
import Head from 'next/head'

const Freelance: NextPage = () => {
  return (
    <>
    <Head>
      <script async src="https://cdnjs.waitlistpanda.com/embed/web/index.min.js" charSet="utf-8" defer></script>
    </Head>
    <Layout>
      <WritersPortalBanner />
      <ContentCreatorsWeNeed />
      <HandleTheRest />
      <ContentTurbineDelivers />
      <CreatorsSay />
      <Faq />
    </Layout>
    </>
  );
};

export default Freelance;
