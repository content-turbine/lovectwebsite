import { Routes, Route, Navigate } from "react-router-dom";
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
import CitablePage from "./pages/Citable";
import ServiceDetailPage from "./pages/ServiceDetail";
import BlogPage from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/freelance" element={<FreelancePage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/writers_portal_agreement" element={<WritersPortalAgreementPage />} />
          {/* Old lead-magnet pages, redirected to their equivalent blog articles */}
          <Route path="/resources/ai-content-framework" element={<Navigate to="/blog/topic-clusters-still-beat-keyword-lists" replace />} />
          <Route path="/resources/content-audit-checklist" element={<Navigate to="/blog/auditing-developer-content-beyond-does-it-rank" replace />} />
          <Route path="/resources/aeo-playbook" element={<Navigate to="/blog/why-ai-engines-cite-one-source-not-five" replace />} />
          <Route path="/citable" element={<CitablePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </Layout>
      <Analytics />
    </>
  );
}

export default App;
