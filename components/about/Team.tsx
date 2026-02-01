import Image from "next/image";
import { size } from "polished";
import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { CFade } from "../Animation";
import { Para, Title } from "../styled";

interface TeamMember {
  photo: string;
  name: string;
}

const teamMembers: TeamMember[] = [
  // {
  //   photo: "georgina_burns.jpeg",
  //   name: "Georgina Burns",
  // },
  {
    photo: "sharal_edited.jpeg",
    name: "Sharal Pinto",
  },
  // {
  //   photo: "andy_oram.jpeg",
  //   name: "Andy Oram",
  // },
];

export default function Team() {
  return (
    <Wrapper>
      <CFade>
        <Title>Founder</Title>
        <CardsContainer>
          {teamMembers.map((item, index) => (
            <Card key={index}>
              <img
                id="photo"
                src={`assets/${item.photo}`}
                alt={`${item.name}'s photo`}
              />

              <div className="content">
                <h1>{item.name}</h1>
              </div>
            </Card>
          ))}
        </CardsContainer>
        <Para>
          Our team, led by Sharal Pinto, comprises a diverse set of individuals
          who come with a stellar track record. From thought leaders to
          engineering, technical sales, and marketing experts, these individuals
          are known to excel at helping tech companies exceed their marketing
          goals and steer their teams to new heights.
        </Para>
      </CFade>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  max-width: 1500px;
  padding: 2rem 0;

  p {
    font-size: 1.5rem;
    max-width: 85ch;
  }

  ${sizeAndDown("md")} {
    margin: 1rem;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;

  p {
    font-size: 1.25rem;
  }

  ${sizeAndDown("md")} {
    flex-direction: column;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;

  h3 {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.teal};
    margin: 1rem 0 0.5rem 0;
  }

  p {
    color: #7a7878;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 4rem 0 1rem 0;
    width: 60%;

    border-radius: 10px;

    h1 {
      white-space: nowrap;
    }

    ${sizeAndDown("md")} {
      width: 85%;
    }
  }

  #photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    z-index: 9;
    box-shadow: rgb(0 0 0 / 25%) 0px 1px 8px -3px;

    margin: 1rem 0 -4rem 0;
  }
`;
