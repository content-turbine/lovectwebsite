import Seo from "../components/Seo";
import BannerSection from "../../components/ai/BannerSection";
import Clients from "../../components/ai/Clients";
import Faqs from "../../components/ai/Faqs";
import TrustedBy from "../../components/TrustedBy";

export default function AI() {
  return (
    <>
      <Seo
        title="AI-Assisted, Human-Approved Content | Content Turbine"
        description="See how Content Turbine combines AI efficiency with human editorial review to produce trustworthy technical marketing content."
        path="/ai"
      />
      <BannerSection />
      <Clients />
      <Faqs />
      <TrustedBy />
    </>
  );
}
