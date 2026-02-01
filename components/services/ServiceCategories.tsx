import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import * as Icon from "react-feather";

interface ServiceCategory {
  title: string;
  description: string;
  color: string;
  items: string[];
  icon: React.ReactNode;
}

const productionCategories: ServiceCategory[] = [
  {
    title: "Developer Content",
    description: "Enable developers to build faster with clear, accurate technical content that showcases your product's capabilities.",
    color: "#E8F4F8",
    icon: <Icon.Code size={24} />,
    items: [
      "Developer Guides",
      "How-to Articles",
      "API Documentation",
      "Tutorials & Quickstarts",
      "Integration Guides",
      "Sample Apps & OSS",
    ],
  },
  {
    title: "Thought Leadership",
    description: "Great content both delights and educates. Grow awareness and establish authority with SME-driven content series.",
    color: "#FEF3F2",
    icon: <Icon.Award size={24} />,
    items: [
      "Blog Articles",
      "Whitepapers & Ebooks",
      "Industry Reports",
      "Email Newsletters",
      "Podcasts",
      "Social Content",
    ],
  },
  {
    title: "SEO & AEO",
    description: "Increase traffic and conversions with high-quality organic content. Optimize for answer engine disruption.",
    color: "#F0FDF4",
    icon: <Icon.Search size={24} />,
    items: [
      "Answer Engine Optimization",
      "Hub & Spoke Architecture",
      "Content Refreshes",
      "Keyword Research",
      "AI-optimized Content",
      "Technical SEO",
    ],
  },
  {
    title: "Product Marketing",
    description: "We learn your product, industry, and audience to help you tell a compelling and accurate product story.",
    color: "#FDF4FF",
    icon: <Icon.Package size={24} />,
    items: [
      "Case Studies",
      "Competitive Analysis",
      "Product Comparisons",
      "Landing Pages",
      "Feature Videos",
      "One Pagers",
    ],
  },
];

const strategyCategories: ServiceCategory[] = [
  {
    title: "Content Strategy",
    description: "Transform from ad-hoc content to a laser-focused program that doesn't rely on chance. Prioritize the most impactful distribution channels and content types.",
    color: "#FEF9C3",
    icon: <Icon.Target size={24} />,
    items: [
      "Content Audits",
      "Topic Identification",
      "Editorial Calendars",
      "Distribution Strategy",
      "Messaging Development",
      "Campaign Planning",
    ],
  },
  {
    title: "SEO / AEO Strategy",
    description: "Get visibility into how you're appearing in Google Search, AI Overviews, and popular LLM-based tools. Build a plan to optimize your presence across each.",
    color: "#E0F2FE",
    icon: <Icon.TrendingUp size={24} />,
    items: [
      "Keyword Research",
      "Goal Setting & Forecasting",
      "Topic Prioritization",
      "Technical SEO Audits",
      "Content & AEO Audits",
      "Strategy Creation",
    ],
  },
  {
    title: "Content Operations",
    description: "From reporting and performance analysis to populating content into your CMS, we handle your content from ideation through publication.",
    color: "#F1F5F9",
    icon: <Icon.Settings size={24} />,
    items: [
      "Analytics & Dashboards",
      "CMS Uploads",
      "Conversion Tracking",
      "AI Workflow Implementation",
      "Performance Analysis",
      "Attribution Reporting",
    ],
  },
];

export default function ServiceCategories() {
  return (
    <>
      <Section>
        <SectionHeader>
          <SectionTitle>Content Production</SectionTitle>
          <SectionSubtitle>
            We embed ourselves in your organization to deliver expert content for every stage of the buyer journey.
          </SectionSubtitle>
        </SectionHeader>
        
        <CategoriesGrid>
          {productionCategories.map((category, index) => (
            <CategoryCard key={index} $bgColor={category.color}>
              <CardHeader>
                <IconWrapper>{category.icon}</IconWrapper>
                <CategoryTitle>{category.title}</CategoryTitle>
              </CardHeader>
              <CategoryDescription>{category.description}</CategoryDescription>
              <ItemsList>
                {category.items.map((item, i) => (
                  <Item key={i}>{item}</Item>
                ))}
              </ItemsList>
            </CategoryCard>
          ))}
        </CategoriesGrid>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Strategy</SectionTitle>
          <SectionSubtitle>
            Run a strategy sprint to sharply define your content program.
          </SectionSubtitle>
        </SectionHeader>
        
        <StrategyGrid>
          {strategyCategories.map((category, index) => (
            <CategoryCard key={index} $bgColor={category.color}>
              <CardHeader>
                <IconWrapper>{category.icon}</IconWrapper>
                <CategoryTitle>{category.title}</CategoryTitle>
              </CardHeader>
              <CategoryDescription>{category.description}</CategoryDescription>
              <ItemsList>
                {category.items.map((item, i) => (
                  <Item key={i}>{item}</Item>
                ))}
              </ItemsList>
            </CategoryCard>
          ))}
        </StrategyGrid>
      </Section>
    </>
  );
}

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 5rem;

  ${sizeAndDown("md")} {
    padding: 0 1.5rem 3rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-family: "Gilroy", sans-serif;
  font-size: 3rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1rem 0;

  ${sizeAndDown("md")} {
    font-size: 2.25rem;
  }
`;

const SectionSubtitle = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
  margin: 0 auto;
  max-width: 600px;

  ${sizeAndDown("md")} {
    font-size: 1rem;
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
  }
`;

const StrategyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
  }
`;

interface CardProps {
  $bgColor: string;
}

const CategoryCard = styled.div<CardProps>`
  background: ${({ $bgColor }) => $bgColor};
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  }

  ${sizeAndDown("md")} {
    padding: 1.5rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
`;

const CategoryTitle = styled.h3`
  font-family: "Averta", sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const CategoryDescription = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  line-height: 1.6;
  margin: 0 0 1.25rem 0;
`;

const ItemsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Item = styled.span`
  font-family: "Averta", sans-serif;
  font-size: 0.85rem;
  background: rgba(255, 255, 255, 0.7);
  color: ${({ theme }) => theme.colors.text};
  padding: 0.4rem 0.85rem;
  border-radius: 20px;
  white-space: nowrap;
`;
