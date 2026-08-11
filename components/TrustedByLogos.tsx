import styled from "styled-components";
import { sizeAndDown } from "../styles/responsive";
import { CFade } from "./Animation";
import { testimonials } from "./TrustedBy";

export default function TrustedByLogos() {
  return (
    <Container>
      <CFade>
        <Label>Trusted by companies that build for tomorrow</Label>
        <LogoRow>
          {testimonials.map((item) => (
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
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
  margin: 0 0 1.75rem;
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;

  img {
    height: 28px;
    width: auto;
    max-width: 130px;
    object-fit: contain;
    opacity: 0.85;
  }

  ${sizeAndDown("md")} {
    gap: 2rem;

    img {
      height: 22px;
    }
  }
`;

const AndMore = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.4;
`;
