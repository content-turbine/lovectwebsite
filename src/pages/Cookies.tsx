import Seo from "../components/Seo";
import CookiePolicy from "../../components/legal/CookiePolicy";

export default function Cookies() {
  return (
    <>
      <Seo
        title="Cookie Policy | Content Turbine"
        description="How Content Turbine uses cookies and similar technologies on contentturbine.com."
        path="/cookies"
      />
      <CookiePolicy />
    </>
  );
}
