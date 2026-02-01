import React from "react";
import styled, { keyframes } from "styled-components";
import { sizeAndDown } from "../../styles/responsive";

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.8; }
`;

const Section = styled.section`
  padding: 8rem 2rem;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;

  ${sizeAndDown("md")} {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TextContent = styled.div``;

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
  margin: 1rem 0 1.5rem;

  ${sizeAndDown("md")} {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  margin-bottom: 2rem;
`;

const PointsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Point = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;

const PointIcon = styled.span`
  width: 28px;
  height: 28px;
  background: ${({ theme }) => theme.colors.peach}30;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  flex-shrink: 0;
`;

const Statement = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, #1a3a40 100%);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.teal}20 0%, transparent 70%);
    animation: ${pulse} 4s ease-in-out infinite;
  }
`;

const StatementIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`;

const StatementTitle = styled.h3`
  font-family: "Gilroy", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1rem;
  position: relative;
  z-index: 2;
`;

const StatementText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  opacity: 0.9;
  margin: 0;
  position: relative;
  z-index: 2;
  color: ${({ theme }) => theme.colors.teal};
`;

const points = [
  { icon: "🔮", text: "Buyers don't scroll forever — they ask AI" },
  { icon: "🚫", text: "Generic content gets filtered out by LLMs" },
  { icon: "✨", text: "Technical audiences demand precision, not fluff" },
];

export default function WhyNow() {
  return (
    <Section>
      <Container>
        <Content>
          <TextContent>
            <Eyebrow>The Shift</Eyebrow>
            <Title>Why It Matters Now</Title>
            <Description>
              AI assistants and AI search are transforming technical discovery. 
              The rules have changed — and so must your content strategy.
            </Description>
            <PointsList>
              {points.map((point, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem', fontSize: '1rem', lineHeight: 1.6 }}>
                  <PointIcon>{point.icon}</PointIcon>
                  {point.text}
                </li>
              ))}
            </PointsList>
          </TextContent>

          <Statement>
            <StatementIcon>🌉</StatementIcon>
            <StatementTitle>Bridging the Gap</StatementTitle>
            <StatementText>
              Content Turbine bridges the gap between technical reality and AI visibility. 
              Your expertise deserves to be found.
            </StatementText>
          </Statement>
        </Content>
      </Container>
    </Section>
  );
}
