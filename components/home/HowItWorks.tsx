import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import * as Icon from "react-feather";
const Section = styled.section`
  padding: 4rem 2rem 8rem;
  background: ${({ theme }) => theme.colors.background};

  ${sizeAndDown("md")} {
    padding: 2rem 1.5rem 4rem;
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
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0 0.75rem;

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
  line-height: 1.7;
`;

const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const TimelineConnector = styled.div`
  position: absolute;
  left: 40px;
  top: 40px;
  bottom: 40px;
  width: 4px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.teal} 0%,
    ${({ theme }) => theme.colors.primary} 50%,
    ${({ theme }) => theme.colors.teal} 100%
  );
  border-radius: 2px;

  ${sizeAndDown("md")} {
    left: 28px;
  }
`;

const StepRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem 0;
  position: relative;

  ${sizeAndDown("md")} {
    gap: 1.25rem;
    padding: 1.5rem 0;
  }
`;

const CircleWrapper = styled.div`
  position: relative;
  z-index: 2;
  flex-shrink: 0;
`;

const StepCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.teal} 0%,
    ${({ theme }) => theme.colors.primary} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Gilroy", sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.light};
  box-shadow: 
    0 8px 24px rgba(44, 206, 210, 0.3),
    0 0 0 6px ${({ theme }) => theme.colors.background},
    0 0 0 8px rgba(44, 206, 210, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 
      0 12px 32px rgba(44, 206, 210, 0.4),
      0 0 0 6px ${({ theme }) => theme.colors.background},
      0 0 0 10px rgba(44, 206, 210, 0.3);
  }

  ${sizeAndDown("md")} {
    width: 56px;
    height: 56px;
    font-size: 1.25rem;
    box-shadow: 
      0 4px 16px rgba(44, 206, 210, 0.3),
      0 0 0 4px ${({ theme }) => theme.colors.background},
      0 0 0 6px rgba(44, 206, 210, 0.2);
  }
`;

const StepContent = styled.div`
  flex: 1;
  padding-top: 0.5rem;

  ${sizeAndDown("md")} {
    padding-top: 0;
  }
`;

const StepLabel = styled.span`
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.teal};
  background: rgba(44, 206, 210, 0.1);
  padding: 0.35rem 0.75rem;
  border-radius: 100px;
  margin-bottom: 0.5rem;
`;

const StepTitle = styled.h3`
  font-family: "Gilroy", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.75rem;

  ${sizeAndDown("md")} {
    font-size: 1.25rem;
  }
`;

const StepDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  margin: 0;
`;

const StepHighlight = styled.span`
  color: ${({ theme }) => theme.colors.teal};
  font-weight: 600;
`;

const CTAWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  padding-left: 80px;
  
  ${sizeAndDown("md")} {
    padding-left: 0;
    margin-top: 2rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  font-family: "Gilroy", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.teal} 0%,
    ${({ theme }) => theme.colors.primary} 100%
  );
  color: ${({ theme }) => theme.colors.light};
  box-shadow: 0 8px 24px rgba(44, 206, 210, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(44, 206, 210, 0.4);
    color: ${({ theme }) => theme.colors.light};
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const steps = [
  {
    number: "1",
    label: "Explore",
    title: "Discovery Call",
    description: (
      <>
        Before we begin, we want to make sure we're a <StepHighlight>good fit</StepHighlight> for you. 
        In our 30-minute discovery session, we'll explore where your business is at, what your content goals are, 
        and walk you through our content strategy, production, and promotion processes.
      </>
    ),
  },
  {
    number: "2",
    label: "Plan",
    title: "The Brain Dump & Strategy",
    description: (
      <>
        We schedule <StepHighlight>1-on-1 interviews</StepHighlight> with your leadership team to extract vision 
        and thought leadership content ideas. We gather product details, brand guidelines, positioning, 
        ICPs, and competitors. Then we analyze your setup and define your <StepHighlight>content strategy and roadmap</StepHighlight>.
      </>
    ),
  },
  {
    number: "3",
    label: "Ship",
    title: "Production & Go Live",
    description: (
      <>
        With strategy locked in, we kick off production immediately. 
        You'll have your <StepHighlight>first content published within 3 weeks</StepHighlight>. We then execute 
        on weekly content delivery and monthly reporting & strategy calls to stay aligned with your goals.
      </>
    ),
  },
];

export default function HowItWorks() {
  return (
    <Section>
      <Container>
        <Header>
          <Eyebrow>Our Process</Eyebrow>
          <Title>How We Work With You</Title>
          <Subtitle>
            Designed for speed and alignment. Three focused stages take you from 
            initial discovery to published content within weeks.
          </Subtitle>
        </Header>

        <Timeline>
          <TimelineConnector />
          {steps.map((step, index) => (
            <StepRow key={index}>
              <CircleWrapper>
                <StepCircle>{step.number}</StepCircle>
              </CircleWrapper>
              <StepContent>
                <StepLabel>{step.label}</StepLabel>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepContent>
            </StepRow>
          ))}
        </Timeline>
        
        <CTAWrapper>
          <CTAButton to="/contact">
            Let's Talk <Icon.MessageCircle size={20} />
          </CTAButton>
        </CTAWrapper>
      </Container>
    </Section>
  );
}
