import {
  LegalWrapper,
  LegalTitle,
  LegalUpdated,
  LegalH2,
  LegalH3,
  LegalP,
  LegalList,
} from "./LegalDocument";

export default function CookiePolicy() {
  return (
    <LegalWrapper>
      <LegalTitle>Content Turbine Cookie Policy</LegalTitle>
      <LegalUpdated>Last Updated: August 11, 2026</LegalUpdated>

      <LegalP>
        This Cookie Policy explains how Content Turbine uses cookies and similar technologies on
        contentturbine.com.
      </LegalP>
      <LegalP>It should be read together with our Privacy Policy.</LegalP>

      <LegalH2>1. What Are Cookies?</LegalH2>
      <LegalP>Cookies are small data files stored on a device when you visit a website.</LegalP>
      <LegalP>
        Websites may also use related technologies such as local storage, pixels, tags and
        similar tools.
      </LegalP>
      <LegalP>
        These technologies can help websites operate, remember preferences, understand visitor
        activity and measure marketing performance.
      </LegalP>

      <LegalH2>2. How Content Turbine Uses Cookies</LegalH2>
      <LegalP>We may use cookies and similar technologies for the following purposes.</LegalP>

      <LegalH3>Essential Technologies</LegalH3>
      <LegalP>These technologies help operate and secure the website.</LegalP>
      <LegalP>They may support functionality such as:</LegalP>
      <LegalList>
        <li>Security</li>
        <li>Fraud prevention</li>
        <li>Network management</li>
        <li>Session functionality</li>
        <li>Preference storage</li>
        <li>Form functionality</li>
      </LegalList>
      <LegalP>These technologies may be necessary for the website to operate properly.</LegalP>

      <LegalH3>Analytics Technologies</LegalH3>
      <LegalP>Analytics technologies help us understand how visitors interact with Content Turbine.</LegalP>
      <LegalP>For example, they may help us understand:</LegalP>
      <LegalList>
        <li>Which pages are visited</li>
        <li>How visitors arrive at our website</li>
        <li>How visitors navigate the site</li>
        <li>Website performance</li>
        <li>Whether errors occur</li>
        <li>How marketing campaigns perform</li>
      </LegalList>
      <LegalP>We use this information to improve the website and our services.</LegalP>

      <LegalH3>Marketing Technologies</LegalH3>
      <LegalP>If Content Turbine uses advertising or marketing technologies, they may help us:</LegalP>
      <LegalList>
        <li>Measure marketing campaigns</li>
        <li>Understand whether advertising resulted in website visits</li>
        <li>Reach relevant business audiences</li>
        <li>Measure campaign effectiveness</li>
      </LegalList>
      <LegalP>
        Depending on applicable law and the technology involved, these activities may constitute
        targeted advertising or "sharing" of personal information.
      </LegalP>
      <LegalP>Where required, we provide appropriate controls.</LegalP>

      <LegalH2>3. Your Choices</LegalH2>
      <LegalP>You can control cookies in several ways.</LegalP>
      <LegalP>Your browser may allow you to:</LegalP>
      <LegalList>
        <li>Block cookies</li>
        <li>Delete existing cookies</li>
        <li>Receive notifications before cookies are stored</li>
      </LegalList>
      <LegalP>Blocking certain technologies may affect website functionality.</LegalP>
      <LegalP>
        Where Content Turbine provides a cookie-preference tool, you may use it to adjust
        available non-essential cookie choices.
      </LegalP>
      <LegalP>
        Where applicable law requires us to recognize legally valid universal opt-out preference
        mechanisms, we will do so as required.
      </LegalP>

      <LegalH2>4. Third-Party Technologies</LegalH2>
      <LegalP>Some technologies used on our website may be provided by third parties.</LegalP>
      <LegalP>Those third parties may process information according to their own privacy practices.</LegalP>

      <LegalH2>5. Changes</LegalH2>
      <LegalP>We may update this Cookie Policy when our technology or practices change.</LegalP>
      <LegalP>The "Last Updated" date identifies the current version.</LegalP>

      <LegalH2>6. Contact</LegalH2>
      <LegalP>Questions about our use of cookies may be sent to:</LegalP>
      <LegalP>
        <a href="mailto:info@contentturbine.com">info@contentturbine.com</a>
      </LegalP>
    </LegalWrapper>
  );
}
