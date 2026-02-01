import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { conf } from "../../constants";
import { Button } from "../styled";
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

const CTAButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 1.75rem;
  font-size: 1rem;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

export default function ServicesHero() {
  return (
    <StyledHero>
      <Headline>
        Architected Authority for technical products
      </Headline>
      <Subtitle>
        Create a structured knowledge ecosystem tailored to your goals—whether you're building developer awareness or scaling content operations.
      </Subtitle>
      <CTAButton href={conf.calendly_link} target="_blank">
        Let's talk <Icon.MessageCircle />
      </CTAButton>
    </StyledHero>
  );
}
