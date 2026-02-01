import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { CFade } from "../Animation";
import { Title } from "../styled";

interface Difference {
  stat: string;
  description: string;
}

const data: Difference[] = [
  {
    stat: "20+",
    description: "Customers",
  },
  {
    stat: "1000+",
    description: "Marketing collaterals",
  },
  {
    stat: "Far too many",
    description: "cups of tea latte consumed",
  },
];

export default function Stats() {
  return (
    <Wrapper>
      <CFade>
        <Title>Talking about numbers…</Title>
        <CardsContainer>
          {data.map((item, index) => (
            <Card key={index}>
              <Data>
                <span id={`STAT_${index}`}>{item.stat.slice(0, -1)}</span>
                <span>{item.stat.slice(-1)}</span>
              </Data>
              <p>{item.description}</p>
            </Card>
          ))}
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

  margin: 3rem 0;

  ${sizeAndDown("md")} {
    h1 {
      margin: 1rem;
      text-align: center;
      border: none;
    }
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 1rem 0;

  ${sizeAndDown("md")} {
    flex-direction: column;
  }
`;

const Data = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.teal};
`;

const Card = styled.div`
  background: #ffffff;
  box-shadow: rgb(0 0 0 / 25%) 0px 1px 8px -3px;
  border-radius: 10px;
  width: 20vw;
  margin: 1rem;
  padding: 1rem 2rem;

  p {
    font-size: 1.5rem;
  }

  ${sizeAndDown("md")} {
    width: auto;
    padding: 1rem;
    margin: 1.5rem;
  }
`;
