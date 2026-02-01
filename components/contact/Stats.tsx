import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { Fade } from "react-awesome-reveal";

const stats = [
  { value: "300+", label: "Subject Matter Experts" },
  { value: "20+", label: "Clients" },
  { value: "1000+", label: "Content Pieces Published" },
  { value: "100%", label: "Technical Audience" },
];

export default function Stats() {
  return (
    <StatsSection>
      <Fade triggerOnce>
        <SectionHeader>
          <HeaderBadge>Track Record</HeaderBadge>
          <HeaderTitle>A content creation agency with proven results</HeaderTitle>
          <HeaderDescription>
            We have worked with successful companies, including some of the most well-known in the tech industry.
          </HeaderDescription>
        </SectionHeader>
      </Fade>
      
      <StatsGrid>
        {stats.map((stat, index) => (
          <Fade key={index} triggerOnce delay={index * 100}>
            <StatCard>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          </Fade>
        ))}
      </StatsGrid>
    </StatsSection>
  );
}

const StatsSection = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.background};
  
  ${sizeAndDown("md")} {
    padding: 3rem 1.5rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
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
  margin: 0 0 1rem;
  
  ${sizeAndDown("md")} {
    font-size: 1.75rem;
  }
`;

const HeaderDescription = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  margin: 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  
  ${sizeAndDown("md")} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem 1.5rem;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.colors.teal}30;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.teal};
    box-shadow: 0 10px 30px ${({ theme }) => theme.colors.teal}20;
  }
`;

const StatValue = styled.div`
  font-family: "Gilroy", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.teal};
  margin-bottom: 0.5rem;
  
  ${sizeAndDown("md")} {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-family: "Averta", sans-serif;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;