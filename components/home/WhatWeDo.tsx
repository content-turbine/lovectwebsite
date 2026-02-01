import React from "react";
import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";

const Section = styled.section`
  padding: 8rem 2rem;
  background: ${({ theme }) => theme.colors.background};

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
  margin-bottom: 4rem;
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
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0 0;

  ${sizeAndDown("md")} {
    font-size: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  gap: 1.5rem;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
    border-color: ${({ theme }) => theme.colors.teal}40;
  }
`;

const ServiceIcon = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.teal} 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  flex-shrink: 0;
`;

const ServiceContent = styled.div`
  flex: 1;
`;

const ServiceTitle = styled.h3`
  font-family: "Averta", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.75rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  margin: 0;
`;

const ToolsSection = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

const ToolsTitle = styled.h3`
  font-family: "Averta", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const ToolsSubtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  margin-bottom: 2rem;
`;

const ToolsBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const Badge = styled.span`
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.primary}10;
  border: 1px solid ${({ theme }) => theme.colors.primary}20;
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;

const services = [
  {
    icon: "📝",
    title: "Technical Articles & Tutorials",
    description:
      "Practical, precise, trusted — for real technical audiences. Deep dives that developers actually read and share.",
  },
  {
    icon: "📚",
    title: "Documentation Augmentation",
    description:
      "Turn internal knowledge into external authority while preserving accuracy. Bridge the gap between docs and marketing.",
  },
  {
    icon: "🔍",
    title: "AI + SEO-Optimized Content",
    description:
      "Not generic AI output — engineered for AI discovery (GEO/AEO) and human evaluation. Built to be quoted by LLMs.",
  },
  {
    icon: "🔄",
    title: "Content Refresh & Repurposing",
    description:
      "Keep your content evergreen and continually relevant with optimized updates. Maximize ROI from existing assets.",
  },
];

const tools = ["CMS", "Docs Platforms", "Vector Stores", "Analytics", "Governance Systems"];

export default function WhatWeDo() {
  return (
    <Section>
      <Container>
        <Header>
          <Eyebrow>Services</Eyebrow>
          <Title>What We Do</Title>
        </Header>

        <Grid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceContent>
            </ServiceCard>
          ))}
        </Grid>

        <ToolsSection>
          <ToolsTitle>Built for the Modern Content Stack</ToolsTitle>
          <ToolsSubtitle>
            We plug into your existing tools and workflows. Your content. Your systems. Better outcomes.
          </ToolsSubtitle>
          <ToolsBadges>
            {tools.map((tool, index) => (
              <Badge key={index}>{tool}</Badge>
            ))}
          </ToolsBadges>
        </ToolsSection>
      </Container>
    </Section>
  );
}
