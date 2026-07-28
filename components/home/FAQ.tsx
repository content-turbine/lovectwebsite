import React from "react";
import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";

const Section = styled.section`
  padding: 8rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};

  ${sizeAndDown("md")} {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
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
  margin: 1rem 0 3rem;

  ${sizeAndDown("md")} {
    font-size: 2rem;
  }
`;

const Item = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.75rem 2rem;
  margin-bottom: 1.25rem;
`;

const Question = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
`;

const Answer = styled.p`
  margin: 0;
  line-height: 1.7;
  opacity: 0.85;
`;

export const faqs = [
  {
    question: "What does Content Turbine do?",
    answer:
      "Content Turbine is a technical content agency for B2B software and developer-tool companies. We handle content strategy, production, and optimization — technical guides, tutorials, documentation, sample apps, and thought leadership — so engineering and marketing teams don't have to.",
  },
  {
    question: "Who is Content Turbine for?",
    answer:
      "Founders, heads of marketing, developer relations leads, and product marketers at technical B2B companies who need content that developers actually trust and that ranks in both search results and AI answer engines.",
  },
  {
    question: "How does the engagement work?",
    answer:
      "Four stages: a 30-minute discovery call to assess fit; a strategy phase with stakeholder interviews, SEO/AEO research, and an editorial roadmap; a create phase producing the content; and an optimize phase covering audits, performance analysis, and continuous improvement.",
  },
  {
    question: "Do you use AI to write the content?",
    answer:
      "We use AI to accelerate research and drafting, but every piece is shaped by subject-matter experts and reviewed by human editors before it ships. Nothing is published as raw AI output.",
  },
  {
    question: "What is answer engine optimization (AEO)?",
    answer:
      "AEO is optimizing content so AI systems — Google AI Overviews, ChatGPT, Perplexity, Claude — can find, parse, and cite it. In practice that means crawlable pages, clear question-and-answer structure, structured data, and verifiable, well-sourced claims.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a 30-minute discovery call through the contact page. We'll review your goals, current content, and whether we're a fit before any proposal.",
  },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FAQ() {
  return (
    <Section id="faq">
      <Container>
        <Eyebrow>FAQ</Eyebrow>
        <Title>Common questions</Title>
        {faqs.map((f) => (
          <Item key={f.question}>
            <Question>{f.question}</Question>
            <Answer>{f.answer}</Answer>
          </Item>
        ))}
      </Container>
    </Section>
  );
}
