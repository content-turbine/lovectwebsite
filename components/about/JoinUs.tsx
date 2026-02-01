import Image from "next/image";
import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { CFade } from "../Animation";
import { Button, Title } from "../styled";

export default function JoinUs() {
  return (
    <Container>
      <CFade>
        <img src={"assets/illustrations/join.svg"} />
        <Content>
          <Title>Looking to accelerate your career journey?</Title>
          <Button
          href="/freelance"
            rel="noreferrer noopener"
          >
            Join Us
          </Button>
        </Content>
      </CFade>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem 1rem;

  img {
    width: 100%;
    max-width: 30vw;
  }

  ${sizeAndDown("md")} {
    flex-direction: column;

    img {
      max-width: none;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 1rem 2rem;

  max-width: 30vw;

  h1 {
    font-size: 2.5rem;
    border: none;
  }

  ${sizeAndDown("md")} {
    max-width: 95vw;
    justify-content: center;

    h1 {
      font-size: 2.5rem;
    }
  }
`;
