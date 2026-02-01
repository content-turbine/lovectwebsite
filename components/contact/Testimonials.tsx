import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { Fade } from "react-awesome-reveal";

const testimonials = [
  {
    quote: "Content Turbine really accelerated our developer-focused marketing efforts. They helped us build a competitive advantage as a developer-friendly platform without pulling away our internal technical teams to write that content.",
    name: "Senior DevRel Lead",
    company: "Enterprise Database Company",
  },
  {
    quote: "I was thoroughly impressed by the smooth onboarding and ability to adapt to our product suite. Their attention to detail and dedication to aligning content with our brand have significantly impacted our developer-focused content strategy.",
    name: "Content Marketing Manager",
    company: "Cloud Infrastructure Provider",
  },
];

export default function Testimonials() {
  return (
    <TestimonialsSection>
      <Fade triggerOnce>
        <SectionHeader>
          <HeaderBadge>Testimonials</HeaderBadge>
          <HeaderTitle>What our clients are saying</HeaderTitle>
        </SectionHeader>
      </Fade>
      
      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <Fade key={index} triggerOnce delay={index * 150}>
            <TestimonialCard>
              <QuoteIcon>"</QuoteIcon>
              <Quote>{testimonial.quote}</Quote>
              <Author>
                <AuthorName>{testimonial.name}</AuthorName>
                <AuthorCompany>@{testimonial.company}</AuthorCompany>
              </Author>
            </TestimonialCard>
          </Fade>
        ))}
      </TestimonialsGrid>
    </TestimonialsSection>
  );
}

const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.primary}10 100%
  );
  
  ${sizeAndDown("md")} {
    padding: 3rem 1.5rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const HeaderBadge = styled.span`
  display: inline-block;
  font-family: "Gilroy", sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.teal};
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1.5rem;
  background: ${({ theme }) => theme.colors.teal}15;
  border-radius: 20px;
`;

const HeaderTitle = styled.h2`
  font-family: "Gilroy", sans-serif;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  
  ${sizeAndDown("md")} {
    font-size: 1.75rem;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
  
  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TestimonialCard = styled.div`
  position: relative;
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.teal}20;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  
  ${sizeAndDown("md")} {
    padding: 2rem;
  }
`;

const QuoteIcon = styled.span`
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  font-family: Georgia, serif;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.teal}30;
  line-height: 1;
`;

const Quote = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1.5rem;
  font-style: italic;
`;

const Author = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.teal}20;
  padding-top: 1rem;
`;

const AuthorName = styled.div`
  font-family: "Gilroy", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.25rem;
`;

const AuthorCompany = styled.div`
  font-family: "Averta", sans-serif;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.teal};
  text-transform: uppercase;
  letter-spacing: 1px;
`;