import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { sizeAndDown } from "../../styles/responsive";

const Section = styled.section`
  padding: 8rem 2rem;
  background: ${({ theme }) => theme.colors.background};

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
  font-size: 2.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0 1.5rem;
  line-height: 1.2;

  ${sizeAndDown("md")} {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  }
`;

const CardIcon = styled.div`
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.teal}15, ${({ theme }) => theme.colors.teal}30);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-family: "Averta", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.75rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.75;
  margin: 0;
`;

const CTAContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const CompareLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Averta", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const differentiators = [
  {
    icon: "🧠",
    title: "SME-Driven Depth",
    description:
      "Real subject-matter experts collaborate with your team—not surface-level writers chasing keywords.",
  },
  {
    icon: "🤖",
    title: "Built for AI Discovery",
    description:
      "Structured for AI search engines (GEO/AEO). Your content becomes the answer, not just another result.",
  },
  {
    icon: "📚",
    title: "Knowledge Architecture",
    description:
      "We build reusable content libraries that compound over time—not one-off blog posts that decay.",
  },
];

export default function Differentiator() {
  return (
    <Section>
      <Container>
        <Header>
          <Eyebrow>Why Content Turbine</Eyebrow>
          <Title>What Sets Us Apart</Title>
          <Subtitle>
            Most content agencies produce words. We engineer technical knowledge 
            ecosystems that power both human discovery and AI answers.
          </Subtitle>
        </Header>

        <Grid>
          {differentiators.map((item, index) => (
            <Card key={index}>
              <CardIcon>{item.icon}</CardIcon>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          ))}
        </Grid>

        <CTAContainer>
          <CompareLink to="/compare">
            See how we compare
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </CompareLink>
        </CTAContainer>
      </Container>
    </Section>
  );
}
