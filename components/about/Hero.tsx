import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MidContent, Title, Button, Para } from "../styled";
import { sizeAndDown } from "../../styles/responsive";
import { CFade } from "../Animation";
import Image from "next/image";
import { conf } from "../../constants";

const StyledHero = styled.div`
  padding: 3rem 0;

  a {
    color: ${({ theme }) => theme.colors.teal};
    text-decoration: none;
  }

  p {
    font-size: 1.45rem;
    color: rgba(#111, 0.6);
  }

  ${sizeAndDown("md")} {
    padding: 2rem 0;
  }
`;

const HeroTitle = styled(Title)`
  font-size: 3.5rem;
  margin: 2rem 0;

  font-family: "Gilroy";
  font-weight: 400;
  border: none;

  ${sizeAndDown("md")} {
    text-align: center;
    margin: 3rem 0;
    font-size: 2.5rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  ${sizeAndDown("md")} {
    flex-direction: column;
  }
`;

const Story = styled.div`
  padding: 5rem 0;
  display: flex;
  align-items: center;
  font-family: "Averta";

  img {
    width: 100%;
    max-width: 40vw;
  }

  ${sizeAndDown("md")} {
    flex-direction: column;
    padding: 2rem 0;
    img {
      max-width: 90vw;
    }
  }
`;

export default function AboutHero() {
  return (
    <StyledHero>
      <Content>
        <CFade>
          <HeroTitle>Hi there! We&apos;re Content Turbine!</HeroTitle>
          <Story>
            <img src={"assets/illustrations/about_hero.svg"} />
            <MidContent>
              <Para>
                We are a passionate team of individuals with a good blend of
                technical skills, storytelling talent, and technology knowledge.
                What started as a desire to learn about cutting-edge technology
                has today become a full-scale technical marketing agency.
              </Para>

              <Para>
                We understand the frustration that buzzwords and jargon can
                cause developers and technical professionals. So, at Content
                Turbine, we offer no-nonsense, no-fluff technical content
                marketing to engage and teach technical audiences.
              </Para>

              <Para>
                We&apos;re glad you&apos;re here, and can&apos;t wait to help
                you scale your tech marketing efforts! Schedule a time to chat
                <a
                  href={conf.calendly_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  here.{" "}
                </a>
                See you soon!
              </Para>
            </MidContent>
          </Story>
        </CFade>
      </Content>
    </StyledHero>
  );
}
