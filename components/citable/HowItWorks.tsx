import React from "react";
import styled from "styled-components";
import { CFade } from "../Fade";
import { Section, Title } from "../styled";
import { sizeAndDown } from "../../styles/responsive";
import { PRODUCT_NAME } from "./config";

const STEPS = [
  {
    verb: "Crawl",
    color: "#3B82F6",
    body: "We map your public site -- pages, headings, existing structured data, robots.txt, sitemaps -- the same way answer engines and their crawlers do.",
  },
  {
    verb: "Structure",
    color: "#F9968B",
    body: "We build a canonical, machine-readable entity graph of your brand, products, and content, and generate clean JSON-LD you can ship immediately.",
  },
  {
    verb: "Expose",
    color: "#3B82F6",
    body: "That graph becomes queryable through MCP -- resources, tools, and prompts -- so AI agents can pull real facts about your brand, not guesses.",
  },
  {
    verb: "Test & prove",
    color: "#F9968B",
    body: "We run real prompts against ChatGPT, Gemini, Claude, and Perplexity, and track whether you're actually cited -- with evidence, not vibes.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works">
      <CFade>
        <Title>How {PRODUCT_NAME} works</Title>
        <StepGrid>
          {STEPS.map((step, i) => (
            <Step key={step.verb}>
              <StepNumber style={{ color: step.color }}>{String(i + 1).padStart(2, "0")}</StepNumber>
              <StepVerb>{step.verb}</StepVerb>
              <StepBody>{step.body}</StepBody>
            </Step>
          ))}
        </StepGrid>
      </CFade>
    </Section>
  );
}

const StepGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 2.5rem;

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Step = styled.div``;

const StepNumber = styled.div`
  font-family: "Gilroy", sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const StepVerb = styled.h3`
  font-family: "Gilroy", sans-serif;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const StepBody = styled.p`
  font-family: "Averta";
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
`;
