import Seo from "../components/Seo";
import Timeline from "../../components/about/Timeline";
import Team from "../../components/about/Team";
import TrustedBy from "../../components/TrustedBy";

export default function About() {
  return (
    <>
      <Seo
        title="About Content Turbine — Our Story & Team"
        description="Meet the team behind Content Turbine and learn how we blend AI efficiency with human expertise to deliver technical marketing content."
        path="/about"
      />
      <Timeline />
      <Team />
      <TrustedBy />
    </>
  );
}
