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
  max-width: 1000px;
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

const RolesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
  }
`;

const RoleCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: ${({ theme }) => theme.colors.teal}60;
    transform: translateY(-4px);
  }
`;

const RoleTitle = styled.h3`
  font-family: "Averta", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.teal};
  margin: 0 0 0.75rem;
`;

const RoleValue = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
  margin: 0;
`;

const roles = [
  {
    title: "Head of Content",
    value: "Higher visibility with less manual rewrite",
  },
  {
    title: "Product Marketing",
    value: "Credible content that converts technical buyers",
  },
  {
    title: "Developer Relations",
    value: "Tutorial & example-first content that developers trust",
  },
  {
    title: "SEO / Growth",
    value: "Content that ranks now — not just tomorrow",
  },
];

export default function WhoWeHelp() {
  return (
    <Section>
      <Container>
        <Header>
          <Eyebrow>Audience</Eyebrow>
          <Title>Who We Help</Title>
        </Header>

        <RolesGrid>
          {roles.map((role, index) => (
            <RoleCard key={index}>
              <RoleTitle>{role.title}</RoleTitle>
              <RoleValue>{role.value}</RoleValue>
            </RoleCard>
          ))}
        </RolesGrid>
      </Container>
    </Section>
  );
}
