import React from "react";
import styled, { keyframes } from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { conf } from "../../constants";
import turbineIcon from "@/assets/content-turbine-logo-white.png";

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
`;

const popUp = keyframes`
  0% { 
    opacity: 0; 
    transform: translateY(20px) scale(0.9); 
  }
  100% { 
    opacity: 1; 
    transform: translateY(0) scale(1); 
  }
`;

const strikeReveal = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
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

const TaglineWrapper = styled.div`
  margin-bottom: 2.5rem;
  padding-left: 1rem;
  border-left: 4px solid ${({ theme }) => theme.colors.teal};
  animation: ${popUp} 0.6s ease-out 0.3s both;
`;

const TaglineText = styled.p`
  font-family: "Gilroy", sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.light};
  margin: 0;
  line-height: 1.4;
  
  ${sizeAndDown("md")} {
    font-size: 1.35rem;
  }
`;

const StrikeWord = styled.span`
  position: relative;
  display: inline-block;
  opacity: 0.7;
  
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: -2px;
    right: -2px;
    height: 3px;
    background: ${({ theme }) => theme.colors.peach};
    transform: translateY(-50%);
    animation: ${strikeReveal} 0.4s ease-out 0.8s both;
  }
`;

const HighlightWord = styled.span`
  color: ${({ theme }) => theme.colors.teal};
  animation: ${popUp} 0.5s ease-out 1s both;
  display: inline-block;
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

const FloatingBubble = styled.div<{ $size: string; $top?: string; $right?: string; $left?: string; $bottom?: string; $delay?: number }>`
  position: absolute;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  background: ${({ theme }) => theme.colors.teal}20;
  border: 1px solid ${({ theme }) => theme.colors.teal}40;
  border-radius: 50%;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || 0}s;
  top: ${({ $top }) => $top || "auto"};
  right: ${({ $right }) => $right || "auto"};
  left: ${({ $left }) => $left || "auto"};
  bottom: ${({ $bottom }) => $bottom || "auto"};
`;

const spinSlow = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const TurbineImage = styled.img`
  width: 180px;
  height: 180px;
  animation: ${spinSlow} 15s linear infinite;
  filter: drop-shadow(0 0 20px rgba(44, 206, 210, 0.5));
  
  ${sizeAndDown("md")} {
    width: 140px;
    height: 140px;
  }
`;

export default function NewHero() {
  return (
    <StyledHero>
      <Container>
        <Grid>
          <Content>
            <Title>
              Technical Content Built for <span>Humans, Search & AI</span>
            </Title>
            <Subtitle>
              Content Turbine helps B2B software companies turn deep technical expertise 
              into high-authority content that ranks in search, shows up in AI answers, 
              and earns trust from real engineers.
            </Subtitle>
            <TaglineWrapper>
              <TaglineText>
                <StrikeWord>Not just written.</StrikeWord> <HighlightWord>Engineered to drive results.</HighlightWord>
              </TaglineText>
            </TaglineWrapper>
            <ButtonGroup>
              <Button $primary href="/contact">
                Talk to Us →
              </Button>
              <Button href="#see-the-difference">
                See the Difference
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
              <TurbineImage src={turbineIcon} alt="Content Turbine" />
              <FloatingBubble $size="60px" $top="20%" $left="15%" $delay={0.5} />
              <FloatingBubble $size="40px" $top="60%" $right="20%" $delay={1.2} />
              <FloatingBubble $size="80px" $bottom="10%" $left="30%" $delay={0.8} />
              <FloatingBubble $size="30px" $top="40%" $right="10%" $delay={1.8} />
              <FloatingBubble $size="50px" $top="10%" $right="25%" $delay={2.2} />
            </MainVisual>
          </Visual>
        </Grid>
      </Container>
    </StyledHero>
  );
}
