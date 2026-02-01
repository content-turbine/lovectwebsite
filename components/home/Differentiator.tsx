import React from "react";
import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import AIComparisonWidget from "./AIComparisonWidget";

const Section = styled.section`
  padding: 8rem 2rem;
  background: ${({ theme }) => theme.colors.background};

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
  font-size: 2.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0 1.5rem;
  line-height: 1.2;

  ${sizeAndDown("md")} {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.7;
`;

const ComparisonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: stretch;

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Column = styled.div<{ $variant: "old" | "new" }>`
  background: ${({ $variant, theme }) =>
    $variant === "old" ? theme.colors.light : theme.colors.primary};
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid ${({ $variant }) =>
    $variant === "old" ? "rgba(0, 0, 0, 0.08)" : "transparent"};

  ${sizeAndDown("md")} {
    padding: 2rem 1.5rem;
  }
`;

const ColumnTitle = styled.h3<{ $variant: "old" | "new" }>`
  font-family: "Gilroy", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ $variant, theme }) =>
    $variant === "old" ? theme.colors.text : theme.colors.light};
  margin: 0 0 2rem;
  text-align: center;
  opacity: ${({ $variant }) => ($variant === "old" ? 0.6 : 1)};

  ${sizeAndDown("md")} {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Item = styled.li<{ $variant: "old" | "new" }>`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ $variant, theme }) =>
    $variant === "old" ? theme.colors.text : theme.colors.light};
  opacity: ${({ $variant }) => ($variant === "old" ? 0.7 : 0.95)};
`;

const ItemIcon = styled.span<{ $variant: "old" | "new" }>`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  background: ${({ $variant, theme }) =>
    $variant === "old" ? "rgba(0, 0, 0, 0.05)" : `${theme.colors.teal}30`};
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${sizeAndDown("md")} {
    padding: 0.5rem 0;
  }
`;

const VSBadge = styled.span`
  font-family: "Gilroy", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.teal};
  background: ${({ theme }) => theme.colors.teal}15;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  
  ${sizeAndDown("md")} {
    padding: 0.75rem 1.5rem;
  }
`;

const oldWayItems = [
  { icon: "📝", text: "Generic content mills and freelancer marketplaces" },
  { icon: "🔍", text: "Keyword-stuffed blog posts for SEO" },
  { icon: "📄", text: "One-off articles that decay over time" },
  { icon: "🤖", text: "AI-generated content with no expertise" },
  { icon: "📊", text: "Vanity metrics: views and shares" },
];

const newWayItems = [
  { icon: "🧠", text: "SME-driven content with deep technical depth" },
  { icon: "🎯", text: "Structured for AI answers (GEO/AEO) + SEO" },
  { icon: "📚", text: "Reusable knowledge libraries that compound" },
  { icon: "⚡", text: "AI as accelerator, humans as experts" },
  { icon: "📈", text: "Business outcomes: pipeline and authority" },
];

export default function Differentiator() {
  return (
    <Section id="see-the-difference">
      <Container>
        <Header>
          <Eyebrow>What Sets Us Apart</Eyebrow>
          <Title>Technical content is evolving</Title>
          <Subtitle>
            Most content agencies produce words. We engineer knowledge ecosystems 
            that power both human discovery and AI answers.
          </Subtitle>
        </Header>

        <ComparisonWrapper>
          <Column $variant="old">
            <ColumnTitle $variant="old">The Old Way</ColumnTitle>
            <ItemList>
              {oldWayItems.map((item, index) => (
                <Item key={index} $variant="old">
                  <ItemIcon $variant="old">{item.icon}</ItemIcon>
                  {item.text}
                </Item>
              ))}
            </ItemList>
          </Column>

          <Divider>
            <VSBadge>VS</VSBadge>
          </Divider>

          <Column $variant="new">
            <ColumnTitle $variant="new">The Content Turbine Way</ColumnTitle>
            <ItemList>
              {newWayItems.map((item, index) => (
                <Item key={index} $variant="new">
                  <ItemIcon $variant="new">{item.icon}</ItemIcon>
                  {item.text}
                </Item>
              ))}
            </ItemList>
          </Column>
        </ComparisonWrapper>

        <AIComparisonWidget />
      </Container>
    </Section>
  );
}
