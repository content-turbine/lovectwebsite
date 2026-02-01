import React from "react";
import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";

const Section = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.primary} 0%, #1a3a40 100%);
  color: ${({ theme }) => theme.colors.light};

  ${sizeAndDown("md")} {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const Eyebrow = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.teal};
`;

const Title = styled.h2`
  font-family: "Gilroy", sans-serif;
  font-size: 3rem;
  font-weight: 700;
  margin: 1rem 0 0;

  ${sizeAndDown("md")} {
    font-size: 2rem;
  }
`;

const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 40px;
    left: 10%;
    right: 10%;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.teal}, transparent);
    
    ${sizeAndDown("md")} {
      display: none;
    }
  }

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Step = styled.div`
  text-align: center;
  position: relative;
`;

const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.colors.teal};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-family: "Gilroy", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  z-index: 2;
`;

const StepTitle = styled.h3`
  font-family: "Averta", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 1rem;
`;

const StepDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  opacity: 0.85;
  margin: 0 0 1.25rem;
`;

const StepDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

const StepDetail = styled.li`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.teal};
  padding: 0.35rem 0;
  padding-left: 1.25rem;
  position: relative;

  &::before {
    content: "→";
    position: absolute;
    left: 0;
    opacity: 0.7;
  }
`;

const steps = [
  {
    number: "1",
    title: "Strategy & Tech Discovery",
    description:
      "We start with your product, your architecture, and your experts — not a keyword list.",
    details: ["Deep understanding → deep trust"],
  },
  {
    number: "2",
    title: "Structured Authority Frameworks",
    description: "We create content that's AI extractable, developer-ready, and search optimized:",
    details: [
      "Runnable examples",
      "Clear claims + evidence",
      "Embedded references + schema",
      "Canonical documentation-style sections",
    ],
  },
  {
    number: "3",
    title: "Integrated Workflows",
    description: "We co-author with your teams using workflows built for:",
    details: [
      "Editorial governance",
      "Tracked revisions",
      "SME review loops",
      "Republishing cadence",
    ],
  },
  {
    number: "4",
    title: "Compounding Outcomes",
    description: "Not one-off posts — sustainable content growth:",
    details: [
      "Refresh cycles",
      "Cross-format reuse",
      "Predictive performance forecasting",
    ],
  },
];

export default function HowItWorks() {
  return (
    <Section>
      <Container>
        <Header>
          <Eyebrow>The Process</Eyebrow>
          <Title>How It Works</Title>
        </Header>

        <Steps>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepNumber>{step.number}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
              <StepDetails>
                {step.details.map((detail, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: '#2CCED2', padding: '0.35rem 0', paddingLeft: '1.25rem', position: 'relative' }}>→ {detail}</li>
                ))}
              </StepDetails>
            </Step>
          ))}
        </Steps>
      </Container>
    </Section>
  );
}
