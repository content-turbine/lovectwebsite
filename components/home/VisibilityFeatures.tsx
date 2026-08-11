import React from "react";
import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { CFade } from "../Animation";

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
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0 0;
  line-height: 1.3;

  span {
    color: ${({ theme }) => theme.colors.teal};
  }

  ${sizeAndDown("md")} {
    font-size: 1.75rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;

  ${sizeAndDown("lg")} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${sizeAndDown("sm")} {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div<{ $highlight?: boolean }>`
  background: ${({ theme }) => theme.colors.light};
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  ${({ $highlight, theme }) =>
    $highlight &&
    `
    background: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
  `}

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
  }
`;

const FeatureIcon = styled.div<{ $highlight?: boolean }>`
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.teal} 100%);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.25rem;

  ${({ $highlight, theme }) =>
    $highlight &&
    `
    background: ${theme.colors.teal};
  `}
`;

const FeatureTitle = styled.h3<{ $highlight?: boolean }>`
  font-family: "Averta", sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.6rem;

  ${({ $highlight, theme }) =>
    $highlight &&
    `
    color: ${theme.colors.light};
  `}
`;

const FeatureDescription = styled.p<{ $highlight?: boolean }>`
  font-size: 0.925rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  margin: 0;

  ${({ $highlight, theme }) =>
    $highlight &&
    `
    color: ${theme.colors.light};
    opacity: 0.9;
  `}
`;

const features = [
  {
    icon: "🔍",
    title: "We scan where AI looks",
    description: "We analyze major AI engines and search surfaces to see what they find about you.",
  },
  {
    icon: "🧪",
    title: "We test what matters",
    description: "We test real buyer questions to see how often you're mentioned or cited.",
  },
  {
    icon: "📊",
    title: "We score what counts",
    description: "Our scoring shows how visible, credible, and competitive you are.",
  },
  {
    icon: "🎯",
    title: "We prioritize what moves the needle",
    description: "A clear list of high-impact opportunities tailored to your content.",
  },
  {
    icon: "🤝",
    title: "We help you win in AI",
    description: "Our expert content team executes the strategy and improves your visibility.",
    highlight: true,
  },
];

export default function VisibilityFeatures() {
  return (
    <Section>
      <Container>
        <CFade>
          <Header>
            <Eyebrow>Why It Matters</Eyebrow>
            <Title>
              AI is changing how buyers discover.
              <br />
              We help your brand get <span>found, trusted, and cited.</span>
            </Title>
          </Header>

          <Grid>
            {features.map((feature) => (
              <FeatureCard key={feature.title} $highlight={feature.highlight}>
                <FeatureIcon $highlight={feature.highlight}>{feature.icon}</FeatureIcon>
                <FeatureTitle $highlight={feature.highlight}>{feature.title}</FeatureTitle>
                <FeatureDescription $highlight={feature.highlight}>
                  {feature.description}
                </FeatureDescription>
              </FeatureCard>
            ))}
          </Grid>
        </CFade>
      </Container>
    </Section>
  );
}
