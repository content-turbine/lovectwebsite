import styled from "styled-components";
import { conf } from "../../constants";
import { sizeAndDown } from "../../styles/responsive";
import { CFade } from "../Animation";
import { Title } from "../styled";

interface Process {
  icon: string;
  title: string;
}

const data: Process[] = [
  {
    icon: "/icons/step1.svg",
    title: "Schedule a call",
  },
  {
    icon: "/icons/step2.svg",
    title: "Get your action plan ready",
  },
  {
    icon: "/icons/step3.svg",
    title: "Let our writers take it on",
  },
];
export default function OurProcess() {
  return (
    <StyledProcess>
      <H1>Get started in 3 steps</H1>
      <StepsContainer>
        <AnotherContainer>
          <Step onClick={() => (window.location.href = conf.calendly_link)}>
            <img src={`/assets/${data[0].icon}`} />
            <h3>{data[0].title}</h3>
          </Step>

          <Step>
            <img src={`/assets/${data[1].icon}`} />
            <h3>{data[1].title}</h3>
          </Step>

          <Step>
            <img src={`/assets/${data[2].icon}`} />
            <h3>{data[2].title}</h3>
          </Step>
        </AnotherContainer>
      </StepsContainer>
    </StyledProcess>
  );
}

const Arrow = styled.div`
  display: flex;
`;

const StyledProcess = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem auto 1rem auto;
`;

const StepsContainer = styled.div`
  margin: 4rem 0 5rem 0;
  padding: 2rem 0;
  width: 100%;

  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
`;

const AnotherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  &::after {
    content: "";
    width: calc(3 * (150px + 3rem));
    position: absolute;
    top: 40%;
    margin: 0 auto;
    border-top: 2px dashed ${({ theme }) => theme.colors.teal};
    z-index: 2;
  }

  ${sizeAndDown("md")} {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &::after {
      display: none;
    }
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  margin: 1rem 3rem;
  font-family: "Averta";
  font-weight: normal;

  @keyframes wiggle {
    0% {
      transform: rotate(0deg);
    }
    80% {
      transform: rotate(0deg);
    }
    85% {
      transform: rotate(5deg);
    }
    95% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  &:first-of-type {
    cursor: pointer;
    animation: wiggle 1.5s both infinite;
    z-index: 99;
  }

  h3 {
    font-weight: bold;
  }

  p {
    max-width: 20ch;
  }

  img {
    width: 150px;
    aspect-ratio: 1/1;
    position: relative;
    background: ${({ theme }) => theme.colors.primary};
    z-index: 99;
  }

  ${sizeAndDown("md")} {
    margin: 1rem;
    justify-content: center;
    p {
      width: 100%;
    }
  }
`;

const H1 = styled(Title)`
  margin: 0 auto;
  width: fit-content;
  font-size: 3rem;

  ${sizeAndDown("md")} {
    text-align: center;
    border: none;
    font-size: 2.5rem;
  }
`;
