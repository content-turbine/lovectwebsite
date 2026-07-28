import * as Icon from "react-feather";
import React, { useState } from "react";
import { rgba } from "polished";
import styled from "styled-components";
import { Section, Title } from "../styled";
import { sizeAndDown } from "../../styles/responsive";
import { PRODUCT_NAME } from "./config";

interface DropdownData {
  title: string;
  description: string;
  color: string;
}

const data: DropdownData[] = [
  {
    color: "#F9968B",
    title: "What is Answer Engine Optimization (AEO)?",
    description:
      "Making sure AI answer engines (ChatGPT, Gemini, Claude, Perplexity, Google AI Overviews) can find, understand, and cite your content -- the AI-era counterpart to SEO.",
  },
  {
    color: "#2CCED2",
    title: `How is ${PRODUCT_NAME} different from AEO monitoring dashboards?`,
    description:
      "Most tools only tell you whether you're cited. We also build the machine-readable layer (JSON-LD + MCP endpoints) that makes you citable in the first place, then test whether it's working.",
  },
  {
    color: "#2CCED2",
    title: "Do I need to change my site to use this?",
    description:
      "No. We generate JSON-LD suggestions and an MCP layer without requiring a rebuild or a CMS plugin -- you review and ship the fixes on your own schedule.",
  },
  {
    color: "#F9968B",
    title: "What does the free audit actually check?",
    description:
      "It crawls a handful of your public pages and checks title tags, meta descriptions, canonical URLs, and existing structured data (JSON-LD) -- the raw materials answer engines need to cite you accurately.",
  },
  {
    color: "#2CCED2",
    title: "When do I get full access?",
    description:
      "We're onboarding from the waitlist in order, with priority for people who refer others. Join above to lock in your spot.",
  },
];

const Faqs = () => {
  const [openDropdown, setOpenDropdowns] = useState<number[]>([]);

  const handleDropdown = (index: number) => {
    if (openDropdown.includes(index)) {
      setOpenDropdowns(openDropdown.filter((item) => item !== index));
    } else {
      setOpenDropdowns([...openDropdown, index]);
    }
  };

  return (
    <Section id="faq">
      <Heading>Frequently Asked Questions</Heading>
      <div>
        {data.map((item, index) => {
          const isOpen = openDropdown.includes(index);
          return (
            <DropdownSection key={item.title} style={{ borderLeft: `4px solid ${item.color}` }}>
              <DropdownHeader onClick={() => handleDropdown(index)}>
                <span>{item.title}</span>
                {isOpen ? <Icon.ChevronUp size={20} /> : <Icon.ChevronDown size={20} />}
              </DropdownHeader>
              {isOpen && <DropdownBody>{item.description}</DropdownBody>}
            </DropdownSection>
          );
        })}
      </div>
    </Section>
  );
};

export default Faqs;

const Heading = styled(Title)`
  text-align: center;
  border-bottom: none;
  margin-bottom: 2.5rem;
`;

const DropdownSection = styled.div`
  background: ${({ theme }) => rgba(theme.colors.teal, 0.06)};
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const DropdownHeader = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 1.25rem 1.5rem;
  font-family: "Averta";
  font-weight: 700;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: left;

  ${sizeAndDown("md")} {
    font-size: 0.95rem;
  }
`;

const DropdownBody = styled.p`
  font-family: "Averta";
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  padding: 0 1.5rem 1.25rem;
  line-height: 1.5;
`;
