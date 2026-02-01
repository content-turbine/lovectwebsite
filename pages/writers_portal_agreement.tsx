import type { NextPage } from "next";
import Layout from "../components/Layout";
import WritersPortalAgreement from "../components/writers-portal-agreement/writers-portal-agreement";

const Privacy: NextPage = () => {
  return (
    <Layout>
      <WritersPortalAgreement />
    </Layout>
  );
};

export default Privacy;