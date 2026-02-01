import React from "react";
import styled, { keyframes } from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { conf } from "../../constants";

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const Section = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, #0f2528 100%);
  position: relative;
  overflow: hidden;

  ${sizeAndDown("md")} {
    padding: 5rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const Title = styled.h2`
  font-family: "Gilroy", sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.light};
  margin: 0 0 1.5rem;
  line-height: 1.2;

  span {
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.teal}, ${({ theme }) => theme.colors.peach}, ${({ theme }) => theme.colors.teal});
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${shimmer} 3s linear infinite;
  }

  ${sizeAndDown("md")} {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.light};
  opacity: 0.8;
  margin: 0 0 2.5rem;
  line-height: 1.6;

  ${sizeAndDown("md")} {
    font-size: 1.1rem;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 3rem;
  background: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.primary};
  font-family: "Averta", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px ${({ theme }) => theme.colors.teal}40;
  }
`;

const FloatingOrb = styled.div<{ $size: number; $top: string; $left: string; $delay: number }>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background: radial-gradient(circle, ${({ theme }) => theme.colors.teal}20 0%, transparent 70%);
  border-radius: 50%;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  animation: float 8s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;

  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-30px) scale(1.1); }
  }
`;

export default function FinalCTA() {
  return (
    <Section>
      <FloatingOrb $size={300} $top="-10%" $left="-5%" $delay={0} />
      <FloatingOrb $size={200} $top="60%" $left="80%" $delay={2} />
      <FloatingOrb $size={150} $top="30%" $left="90%" $delay={4} />
      
      <Container>
        <Title>
          Go from reactive content to a <span>turbine of technical authority</span>.
        </Title>
        <Subtitle>
          Let's build content that drives discovery, earns trust, and compounds over time.
        </Subtitle>
        <Button href={conf.calendly_link} target="_blank">
          Start Your Strategy Session →
        </Button>
      </Container>
    </Section>
  );
}
