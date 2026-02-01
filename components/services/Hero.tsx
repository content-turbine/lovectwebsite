import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { conf } from "../../constants";
import { Button } from "../styled";

const StyledHero = styled.section`
  padding: 6rem 2rem 4rem;
  max-width: 800px;
  margin: 0 auto;

  ${sizeAndDown("md")} {
    padding: 4rem 1.5rem 3rem;
  }
`;

const Headline = styled.h1`
  font-family: "Gilroy", sans-serif;
  font-size: 3.5rem;
  font-weight: 400;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1.5rem 0;

  ${sizeAndDown("md")} {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 1.35rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  line-height: 1.6;
  margin: 0 0 2rem 0;
  max-width: 600px;

  ${sizeAndDown("md")} {
    font-size: 1.15rem;
  }
`;

export default function ServicesHero() {
  return (
    <StyledHero>
      <Headline>
        Architected Authority for technical products
      </Headline>
      <Subtitle>
        Build a structured knowledge ecosystem that positions your product as the definitive answer—for humans and AI alike.
      </Subtitle>
      <Button href={conf.calendly_link} target="_blank">
        Let's Connect
      </Button>
    </StyledHero>
  );
}
