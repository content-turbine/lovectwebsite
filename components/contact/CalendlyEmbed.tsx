import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { useEffect } from "react";

export default function CalendlyEmbed() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <CalendlySection>
      <CalendlyContainer>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/contentturbine/discovery-call?hide_gdpr_banner=1&background_color=f5fbff&text_color=17252a&primary_color=2cced2"
          style={{
            minWidth: "320px",
            height: "700px",
            width: "100%",
          }}
        />
      </CalendlyContainer>
    </CalendlySection>
  );
}

const CalendlySection = styled.section`
  padding: 3rem 2rem;
  background: ${({ theme }) => theme.colors.background};
  
  ${sizeAndDown("md")} {
    padding: 2rem 1rem;
  }
`;

const CalendlyContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  .calendly-inline-widget {
    border-radius: 16px;
  }
`;