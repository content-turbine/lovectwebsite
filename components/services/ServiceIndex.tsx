import { Link } from "react-router-dom";
import styled from "styled-components";
import { rgba } from "polished";
import * as Icon from "react-feather";
import { serviceDetails } from "../../src/data/serviceDetails";
import { sizeAndDown } from "../../styles/responsive";

export default function ServiceIndex() {
  return (
    <Wrapper aria-labelledby="service-index">
      <Heading id="service-index">Explore our services</Heading>
      <Lede>
        Each service has its own page with the full process, deliverables, and answers to the
        questions buyers ask us most.
      </Lede>
      <Grid>
        {serviceDetails.map((s) => (
          <Card key={s.slug} to={`/services/${s.slug}`}>
            <h3>{s.navName}</h3>
            <p>{s.definition}</p>
            <span>
              Read more <Icon.ArrowRight size={16} />
            </span>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;

  ${sizeAndDown("md")} {
    padding: 0 1.5rem 3rem;
  }
`;

const Heading = styled.h2`
  font-family: "Gilroy", sans-serif;
  font-size: 2.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.75rem;
`;

const Lede = styled.p`
  font-family: "Averta", sans-serif;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.65;
  max-width: 640px;
  margin: 0 0 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
`;

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.5rem;
  border-radius: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => rgba(theme.colors.primary, 0.15)};
  background: ${({ theme }) => rgba(theme.colors.teal, 0.05)};
  transition: all 0.2s ease-in-out;

  h3 {
    font-family: "Gilroy", sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
    margin: 0;
  }

  p {
    font-size: 0.98rem;
    line-height: 1.6;
    opacity: 0.75;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    margin-top: auto;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.teal};
  }
`;