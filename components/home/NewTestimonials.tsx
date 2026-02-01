import React from "react";
import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";

const Section = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.primary} 0%, #1a3a40 100%);
  color: ${({ theme }) => theme.colors.light};

  ${sizeAndDown("md")} {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
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
  font-size: 3rem;
  font-weight: 700;
  margin: 1rem 0 0;

  ${sizeAndDown("md")} {
    font-size: 2rem;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
`;

const QuoteMark = styled.div`
  font-size: 4rem;
  font-family: Georgia, serif;
  color: ${({ theme }) => theme.colors.teal};
  line-height: 1;
  margin-bottom: 1rem;
  opacity: 0.6;
`;

const Quote = styled.blockquote`
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.7;
  margin: 0 0 1.5rem;
  opacity: 0.95;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.div`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.teal}30;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
`;

const AuthorInfo = styled.div``;

const AuthorTitle = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) => theme.colors.teal};
`;

const AuthorCompany = styled.p`
  font-size: 0.875rem;
  margin: 0.25rem 0 0;
  opacity: 0.7;
`;

const testimonials = [
  {
    quote:
      "Content Turbine transformed our developer content strategy — from static blogs to measurable authority assets.",
    title: "Head of Developer Marketing",
    company: "SaaS Scale-Up",
    avatar: "👨‍💼",
  },
  {
    quote:
      "We saw relevance in both search and AI assistant answers within 12 weeks.",
    title: "Director of Content",
    company: "Enterprise Software",
    avatar: "👩‍💻",
  },
];

export default function NewTestimonials() {
  return (
    <Section>
      <Container>
        <Header>
          <Eyebrow>Results</Eyebrow>
          <Title>Customer Success</Title>
        </Header>

        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <QuoteMark>"</QuoteMark>
              <Quote>{testimonial.quote}</Quote>
              <Author>
                <AuthorAvatar>{testimonial.avatar}</AuthorAvatar>
                <AuthorInfo>
                  <AuthorTitle>{testimonial.title}</AuthorTitle>
                  <AuthorCompany>{testimonial.company}</AuthorCompany>
                </AuthorInfo>
              </Author>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </Section>
  );
}
