import type { NextPage } from "next";
import Layout from "../components/Layout";
import Policy from "../components/privacy/Policy";

const Privacy: NextPage = () => {
  return (
    <Layout>
      <Policy />
    </Layout>
  );
};

export default Privacy;
