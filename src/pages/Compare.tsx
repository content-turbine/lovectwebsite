import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { sizeAndDown } from "../../styles/responsive";

const Section = styled.section`
  padding: 6rem 2rem 8rem;
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;

  ${sizeAndDown("md")} {
    padding: 4rem 1rem;
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

const Title = styled.h1`
  font-family: "Gilroy", sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0 1.5rem;

  ${sizeAndDown("md")} {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.light};
  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 700px;
`;

const Thead = styled.thead`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
`;

const Th = styled.th<{ $highlight?: boolean }>`
  padding: 1.5rem 1.25rem;
  text-align: center;
  font-family: "Averta", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  
  &:first-child {
    text-align: left;
    width: 35%;
  }

  ${({ $highlight, theme }) =>
    $highlight &&
    `
    background: ${theme.colors.teal};
    position: relative;
    
    &::before {
      content: "★ OUR APPROACH";
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: ${theme.colors.teal};
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
      font-size: 0.65rem;
      letter-spacing: 0.05em;
      white-space: nowrap;
    }
  `}
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  &:nth-child(even) {
    background: ${({ theme }) => theme.colors.background};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.teal}08;
  }
`;

const Td = styled.td<{ $highlight?: boolean }>`
  padding: 1.25rem;
  text-align: center;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);

  &:first-child {
    text-align: left;
    font-weight: 600;
    font-family: "Averta", sans-serif;
  }

  ${({ $highlight }) =>
    $highlight &&
    `
    background: rgba(44, 206, 210, 0.06);
    font-weight: 600;
  `}
`;

const StatusIcon = styled.span<{ $status: "full" | "partial" | "none" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 0.875rem;

  ${({ $status, theme }) => {
    switch ($status) {
      case "full":
        return `
          background: ${theme.colors.teal}20;
          color: ${theme.colors.teal};
        `;
      case "partial":
        return `
          background: #fef3c7;
          color: #d97706;
        `;
      case "none":
        return `
          background: #fee2e2;
          color: #dc2626;
        `;
    }
  }}
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, #1a3a40 100%);
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.light};
`;

const CTATitle = styled.h3`
  font-family: "Gilroy", sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 1rem;
`;

const CTAText = styled.p`
  font-size: 1.125rem;
  opacity: 0.9;
  margin: 0 0 2rem;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.primary};
  font-family: "Averta", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(44, 206, 210, 0.4);
  }
`;

const comparisonData = [
  {
    capability: "SME-driven content",
    ct: { status: "full", label: "Deep, multi-domain" },
    draftdev: { status: "full", label: "Developer-focused" },
    copytree: { status: "partial", label: "Limited" },
  },
  {
    capability: "Structured for AI answers (GEO/AEO)",
    ct: { status: "full", label: "Built-in" },
    draftdev: { status: "partial", label: "Emerging" },
    copytree: { status: "none", label: "No" },
  },
  {
    capability: "Documentation-grade output",
    ct: { status: "full", label: "Yes" },
    draftdev: { status: "partial", label: "Some" },
    copytree: { status: "none", label: "No" },
  },
  {
    capability: "Content refresh & reuse",
    ct: { status: "full", label: "Systematic" },
    draftdev: { status: "partial", label: "Ad-hoc" },
    copytree: { status: "none", label: "No" },
  },
  {
    capability: "Editorial governance",
    ct: { status: "full", label: "Yes" },
    draftdev: { status: "none", label: "No" },
    copytree: { status: "none", label: "No" },
  },
  {
    capability: "AI as accelerator (not replacement)",
    ct: { status: "full", label: "Yes" },
    draftdev: { status: "partial", label: "Some" },
    copytree: { status: "full", label: "Yes" },
  },
  {
    capability: "Built for technical buyers",
    ct: { status: "full", label: "Yes" },
    draftdev: { status: "full", label: "Yes" },
    copytree: { status: "none", label: "No" },
  },
];

const getStatusIcon = (status: "full" | "partial" | "none") => {
  switch (status) {
    case "full":
      return "✓";
    case "partial":
      return "~";
    case "none":
      return "✕";
  }
};

export default function Compare() {
  return (
    <Section>
      <Container>
        <Header>
          <Eyebrow>Feature Comparison</Eyebrow>
          <Title>How We Stack Up</Title>
          <Subtitle>
            See how Content Turbine compares to other technical content agencies 
            across the capabilities that matter most.
          </Subtitle>
        </Header>

        <TableWrapper>
          <Table>
            <Thead>
              <tr>
                <Th>Capability</Th>
                <Th $highlight>Content Turbine</Th>
                <Th>Draft.dev</Th>
                <Th>Copytree</Th>
              </tr>
            </Thead>
            <Tbody>
              {comparisonData.map((row, index) => (
                <Tr key={index}>
                  <Td>{row.capability}</Td>
                  <Td $highlight>
                    <StatusIcon $status={row.ct.status as "full" | "partial" | "none"}>
                      {getStatusIcon(row.ct.status as "full" | "partial" | "none")}
                    </StatusIcon>
                    <br />
                    <span style={{ fontSize: "0.8rem", opacity: 0.8 }}>{row.ct.label}</span>
                  </Td>
                  <Td>
                    <StatusIcon $status={row.draftdev.status as "full" | "partial" | "none"}>
                      {getStatusIcon(row.draftdev.status as "full" | "partial" | "none")}
                    </StatusIcon>
                    <br />
                    <span style={{ fontSize: "0.8rem", opacity: 0.7 }}>{row.draftdev.label}</span>
                  </Td>
                  <Td>
                    <StatusIcon $status={row.copytree.status as "full" | "partial" | "none"}>
                      {getStatusIcon(row.copytree.status as "full" | "partial" | "none")}
                    </StatusIcon>
                    <br />
                    <span style={{ fontSize: "0.8rem", opacity: 0.7 }}>{row.copytree.label}</span>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableWrapper>

        <CTASection>
          <CTATitle>Ready to build your technical content engine?</CTATitle>
          <CTAText>
            Let's discuss how Content Turbine can help you create content that compounds.
          </CTAText>
          <CTAButton to="/contact">Get in Touch</CTAButton>
        </CTASection>
      </Container>
    </Section>
  );
}
