import Seo from "../components/Seo";
import PrivacyPolicy from "../../components/legal/PrivacyPolicy";

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy | Content Turbine"
        description="Read the Content Turbine privacy policy to learn how we collect, use, and protect your personal information."
        path="/privacy"
      />
      <PrivacyPolicy />
    </>
  );
}
