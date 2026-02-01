import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MidContent, Title, Button } from "../styled";
import { sizeAndDown } from "../../styles/responsive";
import { CFade } from "../Animation";

import { size } from "polished";
import { conf } from "../../constants";

const StyledHero = styled.div`
  padding: 7rem 0;

  img {
    width: 100%;
    max-width: 40vw;
  }

  ${sizeAndDown("md")} {
    img {
      max-width: 90vw;
    }
  }
`;

const HeroTitle = styled(Title)`
  font-size: 3rem;
  margin: 2rem 0;

  font-family: "Gilroy";
  font-weight: 400;
  border: none;

  ${sizeAndDown("md")} {
    margin: 3rem 0;
    font-size: 2.5rem;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${sizeAndDown("md")} {
    flex-direction: column;
    margin: 0 0 5rem 0;
  }
`;

export default function ServicesHero() {
  return (
    <StyledHero>
      <Content>
        <img src={"assets/illustrations/services_hero.svg"} />
        <MidContent>
          <HeroTitle>Solutions to turbocharge your product</HeroTitle>

          <Button href={conf.calendly_link} target="_blank">
            Let&apos;s Connect
          </Button>
        </MidContent>
      </Content>
    </StyledHero>
  );
}
