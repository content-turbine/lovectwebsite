import type { NextPage } from "next";
import AboutHero from "../components/about/Hero";
import JoinUs from "../components/about/JoinUs";
import OurStory from "../components/about/OurStory";
import Stats from "../components/about/Stats";
import Team from "../components/about/Team";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";

const Home: NextPage = () => {
  return (
    <Layout>
      <AboutHero />
      <Team />
      <Stats />
      <JoinUs />
      {/* <Newsletter /> */}
    </Layout>
  );
};

export default Home;
