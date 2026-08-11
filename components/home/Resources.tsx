import React from "react";
import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import * as Icon from "react-feather";

const Section = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.primary}08;

  ${sizeAndDown("md")} {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
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
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0 0;

  ${sizeAndDown("md")} {
    font-size: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
  }
`;

const ResourceCard = styled.a`
  background: ${({ theme }) => theme.colors.light};
  border-radius: 20px;
  padding: 0;
  border: 1px solid rgba(0, 0, 0, 0.08);
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.colors.teal}60;
  }
`;

const CardVisual = styled.div<{ $gradient: string }>`
  height: 140px;
  background: ${({ $gradient }) => $gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;

const CardIcon = styled.div`
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1;
`;

const CardContent = styled.div`
  padding: 1.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ResourceType = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.teal};
  margin-bottom: 0.5rem;
`;

const ResourceTitle = styled.h3`
  font-family: "Averta", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.75rem;
  line-height: 1.35;
  flex: 1;
`;

const ResourceDescription = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  line-height: 1.6;
  margin: 0 0 1rem;
`;

const ResourceCTA = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.teal};
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: auto;

  svg {
    transition: transform 0.2s ease;
  }

  ${ResourceCard}:hover & svg {
    transform: translateX(4px);
  }
`;

const resources = [
  {
    icon: <Icon.FileText size={28} />,
    type: "Framework",
    title: "The AI-Era Content Strategy Framework",
    description: "A step-by-step framework to build content that performs in Google, AI Overviews, and LLM-based tools.",
    cta: "Download Framework",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #1e40af 100%)",
    href: "/resources/ai-content-framework",
  },
  {
    icon: <Icon.CheckSquare size={28} />,
    type: "Checklist",
    title: "Technical Content Audit Checklist",
    description: "50+ checkpoints to evaluate your developer docs, tutorials, and technical blog content quality.",
    cta: "Get the Checklist",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    href: "/resources/content-audit-checklist",
  },
  {
    icon: <Icon.Zap size={28} />,
    type: "Playbook",
    title: "Answer Engine Optimization Playbook",
    description: "Practical tactics to optimize your content for ChatGPT, Perplexity, Claude, and AI search results.",
    cta: "Access Playbook",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    href: "/resources/aeo-playbook",
  },
];

export default function Resources() {
  return (
    <Section>
      <Container>
        <Header>
          <Eyebrow>Free Resources</Eyebrow>
          <Title>Resources to Get You Started</Title>
        </Header>

        <Grid>
          {resources.map((resource, index) => (
            <ResourceCard key={index} href={resource.href}>
              <CardVisual $gradient={resource.gradient}>
                <CardIcon>{resource.icon}</CardIcon>
              </CardVisual>
              <CardContent>
                <ResourceType>{resource.type}</ResourceType>
                <ResourceTitle>{resource.title}</ResourceTitle>
                <ResourceDescription>{resource.description}</ResourceDescription>
                <ResourceCTA>
                  {resource.cta} <Icon.ArrowRight size={16} />
                </ResourceCTA>
              </CardContent>
            </ResourceCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
