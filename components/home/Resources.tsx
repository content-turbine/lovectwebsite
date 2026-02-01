import React from "react";
import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";

const Section = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.primary}08;

  ${sizeAndDown("md")} {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1000px;
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
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  text-decoration: none;
  transition: all 0.3s ease;
  display: block;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
    border-color: ${({ theme }) => theme.colors.teal}40;
  }
`;

const ResourceIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ResourceTitle = styled.h3`
  font-family: "Averta", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.5rem;
  line-height: 1.4;
`;

const ResourceArrow = styled.span`
  color: ${({ theme }) => theme.colors.teal};
  font-size: 0.9rem;
  font-weight: 600;
`;

const resources = [
  {
    icon: "📘",
    title: "The AI Era Technical Content Playbook",
    href: "/blog",
  },
  {
    icon: "🤖",
    title: "How to Optimize for AI Assistants in 2026",
    href: "/blog",
  },
  {
    icon: "🏗️",
    title: "Structured Content Frameworks for Technical Brands",
    href: "/blog",
  },
];

export default function Resources() {
  return (
    <Section>
      <Container>
        <Header>
          <Eyebrow>Learn</Eyebrow>
          <Title>Featured Guides</Title>
        </Header>

        <Grid>
          {resources.map((resource, index) => (
            <a key={index} href={resource.href} style={{ background: 'white', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(0, 0, 0, 0.08)', textDecoration: 'none', transition: 'all 0.3s ease', display: 'block' }}>
              <ResourceIcon>{resource.icon}</ResourceIcon>
              <ResourceTitle>{resource.title}</ResourceTitle>
              <ResourceArrow>Read more →</ResourceArrow>
            </a>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
