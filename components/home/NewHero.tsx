import React from "react";
import styled, { keyframes } from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { conf } from "../../constants";

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
`;

const StyledHero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, #1a3a40 100%);
  padding: 6rem 2rem;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -20%;
    width: 80%;
    height: 150%;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.teal}15 0%, transparent 70%);
    animation: ${pulse} 8s ease-in-out infinite;
  }

  ${sizeAndDown("md")} {
    padding: 4rem 1.5rem;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Content = styled.div`
  color: ${({ theme }) => theme.colors.light};
`;

const Eyebrow = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.teal};
  margin-bottom: 1.5rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.teal}20;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.teal}40;
`;

const Title = styled.h1`
  font-family: "Gilroy", sans-serif;
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 1.5rem 0;
  
  span {
    color: ${({ theme }) => theme.colors.teal};
  }

  ${sizeAndDown("md")} {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 1.25rem;
  line-height: 1.7;
  opacity: 0.9;
  margin: 0 0 2rem 0;
  max-width: 540px;

  ${sizeAndDown("md")} {
    font-size: 1.1rem;
  }
`;

const Tagline = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.teal};
  font-style: italic;
  margin-bottom: 2.5rem;
  padding-left: 1rem;
  border-left: 3px solid ${({ theme }) => theme.colors.teal};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Button = styled.a<{ $primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-family: "Averta", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;

  ${({ $primary, theme }) =>
    $primary
      ? `
    background: ${theme.colors.teal};
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.teal};
    
    &:hover {
      background: transparent;
      color: ${theme.colors.teal};
      transform: translateY(-2px);
    }
  `
      : `
    background: transparent;
    color: ${theme.colors.light};
    border: 2px solid ${theme.colors.light}40;
    
    &:hover {
      border-color: ${theme.colors.teal};
      color: ${theme.colors.teal};
      transform: translateY(-2px);
    }
  `}
`;

const Visual = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FloatingCard = styled.div<{ $delay?: number; $top?: string; $right?: string; $left?: string }>`
  position: absolute;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || 0}s;
  top: ${({ $top }) => $top || "auto"};
  right: ${({ $right }) => $right || "auto"};
  left: ${({ $left }) => $left || "auto"};
  display: flex;
  align-items: center;
  
  ${sizeAndDown("md")} {
    display: none;
  }
`;

const CardIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 0.75rem;
`;

const CardText = styled.span`
  color: ${({ theme }) => theme.colors.light};
  font-size: 0.9rem;
  font-weight: 500;
`;

const MainVisual = styled.div`
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.teal}30 0%, transparent 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.teal}30;
  
  &::before {
    content: "";
    position: absolute;
    width: 280px;
    height: 280px;
    border: 2px dashed ${({ theme }) => theme.colors.teal}40;
    border-radius: 50%;
    animation: spin 30s linear infinite;
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  ${sizeAndDown("md")} {
    width: 280px;
    height: 280px;
    margin: 0 auto;
    
    &::before {
      width: 220px;
      height: 220px;
    }
  }
`;

const TurbineIcon = styled.div`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.teal};
`;

export default function NewHero() {
  return (
    <StyledHero>
      <Container>
        <Grid>
          <Content>
            <Eyebrow>Content Turbine</Eyebrow>
            <Title>
              Technical Content That Drives <span>Discovery, Trust & Growth</span>
            </Title>
            <Subtitle>
              We help B2B software and developer-focused companies build high-authority 
              technical content that ranks in AI search, performs in SEO, and converts 
              engineers, architects, and technical buyers at scale.
            </Subtitle>
            <Tagline>
              A smarter way to produce technical content — faster, more credible, 
              and built for the AI era.
            </Tagline>
            <ButtonGroup>
              <Button $primary href={conf.calendly_link} target="_blank">
                Get a Demo →
              </Button>
              <Button href="/services">
                See Work
              </Button>
            </ButtonGroup>
          </Content>
          
          <Visual>
            <FloatingCard $delay={0} $top="10%" $right="0">
              <CardIcon>🎯</CardIcon>
              <CardText>AI-Optimized</CardText>
            </FloatingCard>
            <FloatingCard $delay={1} $top="30%" $left="0">
              <CardIcon>⚡</CardIcon>
              <CardText>SEO-Ready</CardText>
            </FloatingCard>
            <FloatingCard $delay={2} $top="60%" $right="5%">
              <CardIcon>🔧</CardIcon>
              <CardText>Developer-First</CardText>
            </FloatingCard>
            <MainVisual>
              <TurbineIcon>⚙️</TurbineIcon>
            </MainVisual>
          </Visual>
        </Grid>
      </Container>
    </StyledHero>
  );
}
