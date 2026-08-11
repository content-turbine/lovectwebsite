import Seo from "../components/Seo";
import AIDataUsePolicy from "../../components/legal/AIDataUsePolicy";

export default function AIDataUse() {
  return (
    <>
      <Seo
        title="AI & Data Use Policy | Content Turbine"
        description="How Content Turbine uses artificial intelligence and handles Customer Content."
        path="/ai-data-use"
      />
      <AIDataUsePolicy />
    </>
  );
}
