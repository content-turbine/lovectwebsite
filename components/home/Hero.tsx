import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { MidContent, Title, Button } from "../styled";
import { sizeAndDown } from "../../styles/responsive";
import { CFade } from "../Animation";
import TypewriterComponent from "typewriter-effect";
import { conf } from "../../constants";
import Link from "next/link";

const StyledHero = styled.div`
  padding: 7rem 0;

  img {
    width: 100%;
    max-width: 40vw;
  }

  ${sizeAndDown("md")} {
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 0;

    img {
      max-width: none;
      margin: 3rem 0 -0.25rem;
    }
  }
`;

const HeroTitle = styled(Title)`
  font-size: 3.5rem;
  margin: 2rem 0;
  border: none;
  width: 50vw;

  font-family: "Gilroy";
  font-weight: 400;

  .Typewriter__wrapper {
    color: ${({ theme }) => theme.colors.teal};
    width: max-content;
    word-wrap: normal;

    /* &::before {
      content: "product-led growth journey";
      color: transparent;
    } */
  }

  ${sizeAndDown("md")} {
    margin: 3rem 0;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.light};
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${sizeAndDown("md")} {
    flex-direction: column;
  }
`;

export default function Hero() {
  const [imageSource, setImageSource] = useState(
    "assets/illustrations/hero_desktop.svg"
  );

  const typeText = [
    "product-led growth",
    "product marketing",
    "technical content",
    "developer community",
    "digital events",
    "freelance writing dream"
  ];

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 992) {
      setImageSource("assets/illustrations/hero_mobile.svg");
    }
  }, []);

  return (
    <StyledHero>
      <Content>
        <MidContent>
          <HeroTitle>
            Turbocharge your{" "}
            <TypewriterComponent
              options={{
                strings: typeText,
                autoStart: true,
                loop: true,
              }}
            />
          </HeroTitle>

          <Button href={conf.calendly_link} target="_blank">
          I&apos;m a business
          </Button>
          <Button href="/freelance">I&apos;m a creator</Button>
        </MidContent>
        <img src={imageSource} />
      </Content>
    </StyledHero>
  );
}
