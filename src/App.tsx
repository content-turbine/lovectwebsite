import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

// Import page components
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";
import PrivacyPage from "./pages/Privacy";
import FreelancePage from "./pages/Freelance";
import AIPage from "./pages/AI";
import WritersPortalAgreementPage from "./pages/WritersPortalAgreement";

function App() {
  return (
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
      </Routes>
    </Layout>
  );
}

export default App;
