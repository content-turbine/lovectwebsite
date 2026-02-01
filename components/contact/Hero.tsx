import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <HeroSection>
      <HeroBackground />
      <HeroContent>
        <Fade triggerOnce direction="up">
          <HeroTitle>Let's talk about your content growth engine</HeroTitle>
          <HeroDescription>
            We plan, produce, publish, and promote your first pieces within weeks. 
            Use the calendar below to schedule a discovery call.
          </HeroDescription>
          <EmailFallback>
            Can't find a time that works for you? Email{" "}
            <a href="mailto:info@contentturbine.com">info@contentturbine.com</a>{" "}
            to contact us directly.
          </EmailFallback>
        </Fade>
      </HeroContent>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  position: relative;
  padding: 6rem 2rem 4rem;
  overflow: hidden;
  
  ${sizeAndDown("md")} {
    padding: 4rem 1.5rem 3rem;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.primary}dd 50%,
    ${({ theme }) => theme.colors.teal}40 100%
  );
  z-index: 0;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
  text-align: left;
  
  ${sizeAndDown("md")} {
    text-align: center;
  }
`;

const HeroTitle = styled.h1`
  font-family: "Gilroy", sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.light};
  margin: 0 0 1.5rem;
  line-height: 1.1;
  
  ${sizeAndDown("md")} {
    font-size: 2.25rem;
  }
`;

const HeroDescription = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 1.25rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.light};
  opacity: 0.9;
  margin: 0 0 1.5rem;
  max-width: 600px;
  
  ${sizeAndDown("md")} {
    font-size: 1.1rem;
    margin: 0 auto 1.5rem;
  }
`;

const EmailFallback = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.light};
  opacity: 0.8;
  margin: 0;
  
  a {
    color: ${({ theme }) => theme.colors.teal};
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;