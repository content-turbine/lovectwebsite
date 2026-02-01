import NewHero from "../../components/home/NewHero";
import Differentiator from "../../components/home/Differentiator";
import HowItWorks from "../../components/home/HowItWorks";
import WhoWeHelp from "../../components/home/WhoWeHelp";
import Resources from "../../components/home/Resources";
import LetsConnect from "../../components/home/LetsConnect";
import TrustedBy from "../../components/TrustedBy";

export default function Home() {
  return (
    <>
      <NewHero />
      <Differentiator />
      <HowItWorks />
      <WhoWeHelp />
      <Resources />
      <LetsConnect />
      <TrustedBy />
    </>
  );
}
