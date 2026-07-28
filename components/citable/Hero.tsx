import React from "react";
import styled from "styled-components";
import { CFade } from "../Fade";
import { Button } from "../styled";
import { sizeAndDown } from "../../styles/responsive";
import { PRODUCT_NAME } from "./config";

export default function Hero() {
  return (
    <Container>
      <CFade>
        <Eyebrow>Answer Engine Optimization, minus the guesswork</Eyebrow>
        <Headline>
          Make your brand <em>citable</em> by ChatGPT, Gemini, Claude &amp; Perplexity.
        </Headline>
        <Subhead>
          {PRODUCT_NAME} crawls your site, builds a machine-readable knowledge layer, and tests
          whether AI answer engines actually cite you -- so you're not guessing whether AI search
          traffic is happening to you or for you.
        </Subhead>
        <CtaRow>
          <Button href="#free-audit">Get your free AI visibility audit</Button>
          <SecondaryButton href="#waitlist">Join the waitlist</SecondaryButton>
        </CtaRow>
      </CFade>
    </Container>
  );
}

const Container = styled.div`
  max-width: 900px;
  margin: 5rem auto 2rem;
  padding: 0 1.5rem;
  text-align: center;

  ${sizeAndDown("md")} {
    margin: 3rem auto 1.5rem;
  }
`;

const Eyebrow = styled.p`
  font-family: "Averta";
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.teal};
  margin-bottom: 1rem;
`;

const Headline = styled.h1`
  font-family: "Gilroy", sans-serif;
  font-weight: 800;
  font-size: 3rem;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;

  em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.peach};
  }

  ${sizeAndDown("md")} {
    font-size: 2.1rem;
  }
`;

const Subhead = styled.p`
  font-family: "Averta";
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 680px;
  margin: 0 auto 2.5rem;

  ${sizeAndDown("md")} {
    font-size: 1.05rem;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.teal};
`;

const CtaRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;
