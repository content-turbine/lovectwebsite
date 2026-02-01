import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { CFade } from "../Animation";
import { Title } from "../styled";
import { Link } from "react-router-dom";

export default function JoinUs() {
  return (
    <Container>
      <CFade>
        <img src={"assets/illustrations/join.svg"} alt="Join Us" />
        <Content>
          <Title>Looking to accelerate your career journey?</Title>
          <JoinButton to="/freelance">
            Join Us
          </JoinButton>
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

const JoinButton = styled(Link)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.light};
  font-family: "Averta";
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.peach};
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: fit-content;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.colors.light};
  }
  &:active {
    transform: scale(1);
  }
`;
