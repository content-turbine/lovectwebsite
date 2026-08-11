import Seo from "../components/Seo";
import TermsOfService from "../../components/legal/TermsOfService";

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms of Service | Content Turbine"
        description="The terms governing access to and use of Content Turbine's website, products, and services."
        path="/terms"
      />
      <TermsOfService />
    </>
  );
}
