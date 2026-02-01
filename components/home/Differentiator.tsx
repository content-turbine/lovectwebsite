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
  max-width: 1000px;
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
  margin: 1rem 0 1rem;

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

const MainCard = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, #1a3a40 100%);
  border-radius: 24px;
  padding: 4rem;
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  margin-bottom: 2rem;

  ${sizeAndDown("md")} {
    padding: 2.5rem 1.5rem;
  }
`;

const MainTitle = styled.h3`
  font-family: "Gilroy", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1.5rem;

  ${sizeAndDown("md")} {
    font-size: 1.5rem;
  }
`;

const Taglines = styled.div`
  margin-bottom: 2.5rem;
`;

const Tagline = styled.p`
  font-size: 1.125rem;
  margin: 0.5rem 0;
  opacity: 0.85;
  
  span {
    color: ${({ theme }) => theme.colors.teal};
    font-weight: 600;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  text-align: left;

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const FeatureTitle = styled.h4`
  font-family: "Averta", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.teal};
  margin: 0 0 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.85;
  margin: 0;
`;

const features = [
  {
    title: "SME-driven content engineering",
    description: "Not surface-level writing. Deep technical collaboration with your experts.",
  },
  {
    title: "AI optimization built into engineering",
    description: "Content that AI can answer from, not just compete with. Not tacked on.",
  },
];

export default function Differentiator() {
  return (
    <Section>
      <Container>
        <Header>
          <Eyebrow>vs Draft.dev & Copytree</Eyebrow>
          <Title>What Sets Us Apart</Title>
          <Subtitle>
            While Draft.dev produces developer-friendly content and Copytree focuses on 
            AI-accelerated writing workflows, Content Turbine builds structured knowledge 
            ecosystems that power both AI and human discovery.
          </Subtitle>
        </Header>

        <MainCard>
          <MainTitle>Real Tech Expertise. Architected Authority.</MainTitle>
          <Taglines>
            <Tagline>Not just prompts. <span>Not just posts.</span></Tagline>
            <Tagline>Architected <span>authority</span>.</Tagline>
          </Taglines>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <div key={index} style={{ background: 'rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </div>
            ))}
          </FeaturesGrid>
        </MainCard>
      </Container>
    </Section>
  );
}
