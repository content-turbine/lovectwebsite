import styled from "styled-components";
import { sizeAndDown } from "../styles/responsive";
import { CFade } from "./Animation";
import { trustedLogos } from "../src/data/trustedLogos";

export default function TrustedByLogos() {
  return (
    <Container>
      <CFade>
        <Label>Trusted by companies that build for tomorrow</Label>
        <LogoRow>
          {trustedLogos.map((item) => (
            <img key={item.name} src={item.logo} alt={item.name} />
          ))}
          <AndMore>and more</AndMore>
        </LogoRow>
      </CFade>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2.5rem 2rem;

  ${sizeAndDown("md")} {
    padding: 2rem 1rem;
  }
`;

const Label = styled.p`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.teal};
  margin: 0 0 2rem;
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.5rem;
  max-width: 1100px;
  margin: 0 auto;

  img {
    height: 42px;
    width: auto;
    max-width: 160px;
    object-fit: contain;
    filter: grayscale(1);
    opacity: 0.55;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.9;
    }
  }

  ${sizeAndDown("md")} {
    gap: 2.25rem;

    img {
      height: 32px;
    }
  }
`;

const AndMore = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.4;
`;
