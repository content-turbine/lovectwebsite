import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import TypewriterComponent from "typewriter-effect";
import { conf } from "../../constants";
import { sizeAndDown } from "../../styles/responsive";
import { Button, MidContent, Title } from "../styled";

export default function LetsConnect() {
  const typeText = [
    "product-led growth journey?",
    "product marketing?",
    "technical content?",
    "developer community?",
    "digital events?",
  ];

  return (
    <Container>
      <img src={"assets/illustrations/connect.svg"} />
      <Content>
        <HeroTitle>Ready to turbocharge your</HeroTitle>
        <TypeText>
          <TypewriterComponent
            options={{ strings: typeText, autoStart: true, loop: true }}
          />
        </TypeText>
        <Button href="/contact">
          Get in touch
        </Button>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8rem 1rem;

  img {
    width: 100%;
    max-width: 30vw;
  }

  ${sizeAndDown("md")} {
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 2rem;

  max-width: 40vw;

  ${sizeAndDown("md")} {
    align-items: center;

    max-width: 95vw;
    width: 100%;
  }
`;

const HeroTitle = styled(Title)`
  font-size: 2.5rem;
  border: none;

  font-family: "Gilroy";
  font-weight: 400;

  ${sizeAndDown("md")} {
    font-size: 2.5rem;
    width: 100%;
  }
`;

const TypeText = styled(HeroTitle)`
  margin: -0.5rem 0 1rem 0;
  color: ${({ theme }) => theme.colors.teal};
`;
