import React, { useEffect } from "react";
import Hero from "../../components/citable/Hero";
import FreeAuditWidget from "../../components/citable/FreeAuditWidget";
import HowItWorks from "../../components/citable/HowItWorks";
import Waitlist from "../../components/citable/Waitlist";
import Faqs from "../../components/citable/Faqs";
import { PRODUCT_NAME } from "../../components/citable/config";

export default function Citable() {
  useEffect(() => {
    document.title = `${PRODUCT_NAME} -- Get cited by AI answer engines`;
  }, []);

  return (
    <>
      <Hero />
      <FreeAuditWidget />
      <HowItWorks />
      <Waitlist />
      <Faqs />
    </>
  );
}
