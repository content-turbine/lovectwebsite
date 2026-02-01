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

const discoveryCategories: ServiceCategory[] = [
  {
    title: "Discovery Call",
    description: "Before we begin, we want to make sure we're a good fit for you. In our 30-minute discovery session, we'll explore where your business is at, what your content goals are, and walk you through our content strategy, production, and promotion processes.",
    color: "#E0F7F8",
    icon: <Icon.Phone size={24} />,
    items: [
      "Business Assessment",
      "Content Goals Review",
      "Strategy Walkthrough",
      "Fit Evaluation",
    ],
  },
  {
    title: "The Brain Dump",
    description: "Through 1-on-1 interviews with your leadership, engineering, and product teams, we extract the vision, technical depth, and strategic priorities that will fuel your content program.",
    color: "#E8F4F8",
    icon: <Icon.Compass size={24} />,
    items: [
      "Technical Deep Dives",
      "Stakeholder Interviews",
      "Audience Analysis",
      "Product Architecture Review",
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

export default function ServiceCategories() {
  return (
    <FlowContainer>
      {/* Flow Line */}
      <FlowLine />
      
      {/* Stage 1: Discovery */}
      <FlowStage>
        <StageMarker>
          <StageNumber>1</StageNumber>
        </StageMarker>
        <StageLabel>Explore</StageLabel>
        <SectionHeader>
          <SectionTitle>Discovery</SectionTitle>
          <SectionSubtitle>
            We immerse ourselves in your product, market, and technical landscape to build a deep understanding.
          </SectionSubtitle>
        </SectionHeader>
        
        <DiscoveryGrid>
          {discoveryCategories.map((category, index) => (
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
        </DiscoveryGrid>
      </FlowStage>

      {/* Stage 2: Strategy */}
      <FlowStage>
        <StageMarker>
          <StageNumber>2</StageNumber>
        </StageMarker>
        <StageLabel>Plan</StageLabel>
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
      </FlowStage>

      {/* Stage 3: Content Production */}
      <FlowStage>
        <StageMarker>
          <StageNumber>3</StageNumber>
        </StageMarker>
        <StageLabel>Ship</StageLabel>
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
      </FlowStage>
    </FlowContainer>
  );
}

const FlowContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 5rem;
  padding-left: 5rem;

  ${sizeAndDown("md")} {
    padding: 0 1.5rem 3rem;
    padding-left: 3.5rem;
  }
`;

const FlowLine = styled.div`
  position: absolute;
  left: 2.5rem;
  top: 2rem;
  bottom: 5rem;
  width: 3px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.teal} 0%,
    ${({ theme }) => theme.colors.primary} 50%,
    ${({ theme }) => theme.colors.peach} 100%
  );
  border-radius: 2px;

  ${sizeAndDown("md")} {
    left: 1rem;
    width: 2px;
  }
`;

const FlowStage = styled.section`
  position: relative;
  margin-bottom: 5rem;

  &:last-child {
    margin-bottom: 0;
  }

  ${sizeAndDown("md")} {
    margin-bottom: 3rem;
  }
`;

const StageMarker = styled.div`
  position: absolute;
  left: -3.5rem;
  top: 0;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.teal}, ${({ theme }) => theme.colors.primary});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(44, 206, 210, 0.3);
  z-index: 2;

  ${sizeAndDown("md")} {
    left: -2.5rem;
    width: 36px;
    height: 36px;
  }
`;

const StageNumber = styled.span`
  font-family: "Gilroy", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;

  ${sizeAndDown("md")} {
    font-size: 1rem;
  }
`;

const StageLabel = styled.span`
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.teal};
  background: rgba(44, 206, 210, 0.1);
  padding: 0.35rem 0.75rem;
  border-radius: 100px;
  margin-bottom: 0.75rem;
`;

const SectionHeader = styled.div`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-family: "Gilroy", sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.75rem 0;

  ${sizeAndDown("md")} {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
  margin: 0;
  max-width: 600px;

  ${sizeAndDown("md")} {
    font-size: 1rem;
  }
`;

const DiscoveryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
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
