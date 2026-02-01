import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/home/Hero";
import Layout from "../components/Layout";
import LetsConnect from "../components/home/LetsConnect";
import Newsletter from "../components/Newsletter";
import Reasons from "../components/home/Reasons";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import Share from "../components/services/Share";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Reasons />
      <Testimonials />
      <LetsConnect />
      {/* <Newsletter /> */}
      <Share />
    </Layout>
  );
};

export default Home;
