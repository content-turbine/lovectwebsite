import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

// Import page components
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";
import PrivacyPage from "./pages/Privacy";
import FreelancePage from "./pages/Freelance";
import AIPage from "./pages/AI";
import WritersPortalAgreementPage from "./pages/WritersPortalAgreement";
import ResourceLandingPage from "./pages/ResourceLanding";
import CitablePage from "./pages/Citable";

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/freelance" element={<FreelancePage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/writers_portal_agreement" element={<WritersPortalAgreementPage />} />
          <Route path="/resources/:slug" element={<ResourceLandingPage />} />
          <Route path="/citable" element={<CitablePage />} />
        </Routes>
      </Layout>
      <Analytics />
    </>
  );
}

export default App;
