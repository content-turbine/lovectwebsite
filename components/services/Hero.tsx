import { Link } from "react-router-dom";
import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import * as Icon from "react-feather";

const StyledHero = styled.section`
  padding: 8rem 2rem 6rem;
  max-width: 1200px;
  margin: 0 auto;

  ${sizeAndDown("md")} {
    padding: 5rem 1.5rem 4rem;
  }
`;

const Headline = styled.h1`
  font-family: "Gilroy", sans-serif;
  font-size: 4rem;
  font-weight: 400;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1.5rem 0;
  max-width: 700px;

  ${sizeAndDown("md")} {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 1.35rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
  line-height: 1.6;
  margin: 0 0 2.5rem 0;
  max-width: 550px;

  ${sizeAndDown("md")} {
    font-size: 1.15rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 1rem 1.75rem;
  font-size: 1rem;
  font-family: "Averta", sans-serif;
  font-weight: 700;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 0.2s ease-in-out;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    transform: translateY(-2px) scale(1.05);
    color: ${({ theme }) => theme.colors.light};
  }
  
  &:active {
    transform: scale(1);
  }
`;

export default function ServicesHero() {
  return (
    <StyledHero>
      <Headline>
        Technical Content That Works Everywhere
      </Headline>
      <Subtitle>
        We engineer high-authority content that ranks in search, gets cited by AI, and builds trust with developers and technical buyers.
      </Subtitle>
      <CTAButton to="/contact">
        Let's talk <Icon.MessageCircle />
      </CTAButton>
    </StyledHero>
  );
}
