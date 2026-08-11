import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { CFade } from "../Animation";

const logos = [
  { name: "IBM", src: "assets/icons/ibm.svg" },
  { name: "Microsoft", src: "assets/icons/microsoft.svg" },
  { name: "Google", src: "assets/icons/google.svg" },
  { name: "Twilio", src: "assets/icons/twilio.svg" },
  { name: "DigitalOcean", src: "assets/icons/digitalocean.svg" },
  { name: "AWS", src: "assets/icons/aws.svg" },
];

export default function ExpertOrigins() {
  return (
    <Container>
      <CFade>
        <Eyebrow>Our Network</Eyebrow>
        <Title>Led by experts from</Title>
        <Subtitle>
          300+ technical content experts from various organizations bring real engineering and
          product experience to every piece we ship.
        </Subtitle>
        <LogoRow>
          {logos.map((logo) => (
            <img key={logo.name} src={logo.src} alt={logo.name} />
          ))}
          <AndMore>and more</AndMore>
        </LogoRow>
      </CFade>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 2rem 5rem;
  text-align: center;

  ${sizeAndDown("md")} {
    padding: 2rem 1.5rem 3rem;
  }
`;

const Eyebrow = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.teal};
`;

const Title = styled.h2`
  font-family: "Gilroy", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0.75rem 0 0.75rem;

  ${sizeAndDown("md")} {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.65;
  max-width: 560px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;

  img {
    height: 32px;
    width: auto;
    max-width: 140px;
    object-fit: contain;
    opacity: 0.55;
  }

  ${sizeAndDown("md")} {
    gap: 2rem;

    img {
      height: 26px;
    }
  }
`;

const AndMore = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.4;
`;
