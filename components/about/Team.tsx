import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { CFade } from "../Animation";
import { Title } from "../styled";

export interface TeamMember {
  photo: string;
  name: string;
  role: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    photo: "sharal_edited.jpeg",
    name: "Sharal Pinto",
    role: "Founder",
    bio: "Leads Content Turbine's strategy and team, drawing on a background across engineering, technical sales, and marketing to help tech companies build content programs that hold up to a technical audience.",
  },
];

export default function Team() {
  return (
    <Wrapper>
      <CFade>
        <Title>Team</Title>
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
                <h3>{item.role}</h3>
                <p>{item.bio}</p>
              </div>
            </Card>
          ))}
          <PlaceholderCard>
            <div className="content">
              <h1>Join the team</h1>
              <p>
                We're growing — writers and strategists we bring on will get a
                byline here and on every piece they publish.
              </p>
            </div>
          </PlaceholderCard>
        </CardsContainer>
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

  ${sizeAndDown("md")} {
    margin: 1rem;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  width: 100%;

  p {
    font-size: 1.05rem;
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
    text-align: center;
    line-height: 1.6;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 4rem 1.5rem 1.5rem;
    width: 100%;

    border-radius: 10px;

    ${sizeAndDown("md")} {
      width: 100%;
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

const PlaceholderCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 220px;
  border: 2px dashed rgba(0, 0, 0, 0.15);
  border-radius: 10px;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem;
  }

  h1 {
    font-size: 1.25rem;
    opacity: 0.6;
    margin: 0 0 0.5rem;
  }

  p {
    color: #7a7878;
    font-size: 0.95rem;
    margin: 0;
  }
`;
