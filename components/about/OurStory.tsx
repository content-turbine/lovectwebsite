
import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { MidContent, Para, Title } from "../styled";

const IllustrationContainer = styled.div`
  width: 100%;
  max-width: 50vw;

  ${sizeAndDown("md")} {
    max-width: 90vw;
  }
`;

const StyledHero = styled.div`
  padding: 5rem 0;
`;

const HeroTitle = styled(Title)`
  font-size: 3rem;
  margin: 2rem 0;

  font-family: "Inter", sans-serif;
  font-weight: 400;

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
  }
`;

export default function OurStory() {
  return (
    <StyledHero>
      <Content>
        <MidContent>
          <Title>Our Story</Title>
          <Para>
            Developers make everyone&apos;s lives easier. They&apos;re smart and
            love to dig into the details of every problem. But what they
            don&apos;t like are fancy buzz words and jargon that don&apos;t
            really help anyone. In other words, they hate fluff. And that&apos;s
            what most marketers do. But not us.
          </Para>
          <Para>
            We don&apos;t just write, we create content that makes your audience
            want to keep reading. We don&apos;t just make noise, we cut through
            it to make your audience listen to you. We&apos;re a young,
            energetic group of technology enthusiasts who can guide you through
            the complex world of tech marketing. From marketing your product to
            growing a developer community, we take care of all your product
            needs.
          </Para>
        </MidContent>
        <img src={"assets/illustrations/placeholder.svg"} />
      </Content>
    </StyledHero>
  );
}
