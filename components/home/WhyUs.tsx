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
  margin: 1rem 0 1.5rem;

  ${sizeAndDown("md")} {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  max-width: 600px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border-radius: 16px;
  padding: 2.5rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.teal}20;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-family: "Averta", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  margin: 0;
`;

const BottomStatement = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.light};
`;

const StatementTitle = styled.h3`
  font-family: "Gilroy", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
`;

const StatementText = styled.p`
  font-size: 1.125rem;
  opacity: 0.9;
  margin: 0;
  color: ${({ theme }) => theme.colors.teal};
`;

const differentiators = [
  {
    icon: "👨‍💻",
    title: "Serve Developers & Practitioners",
    description:
      "Content crafted for engineers, architects, and technical decision-makers — not just 'readers'. We speak their language.",
  },
  {
    icon: "🤖",
    title: "AI & LLM Discoverable",
    description:
      "Structured for AI assistants and LLM search engines. Your content becomes the answer, not just another result.",
  },
  {
    icon: "📈",
    title: "Measurable Results",
    description:
      "Drive real outcomes: lead quality, search traffic, SERP visibility. Not vanity metrics — business impact.",
  },
];

export default function WhyUs() {
  return (
    <Section>
      <Container>
        <Header>
          <Eyebrow>Why Content Turbine</Eyebrow>
          <Title>Not just writing. Strategic technical authority.</Title>
          <Subtitle>
            Draft.dev and Copytree generate content — we engineer technical 
            narratives that compound over time.
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

        <BottomStatement>
          <StatementTitle>We don't write words.</StatementTitle>
          <StatementText>
            We build reusable, structured technical knowledge libraries that scale.
          </StatementText>
        </BottomStatement>
      </Container>
    </Section>
  );
}
