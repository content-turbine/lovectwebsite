import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import * as Icon from "react-feather";

interface ServiceItem {
  name: string;
}

interface ServiceCategory {
  title: string;
  description: string;
  color: string;
  items: ServiceItem[];
}

const categories: ServiceCategory[] = [
  {
    title: "Developer Content",
    description: "Enable developers to make the best use of your product with clear, accurate technical content.",
    color: "#2CCED2",
    items: [
      { name: "Developer Guides" },
      { name: "How-to Articles" },
      { name: "API Documentation" },
      { name: "Tutorials & Quickstarts" },
      { name: "Integration Guides" },
      { name: "Sample Apps & OSS" },
    ],
  },
  {
    title: "Thought Leadership",
    description: "Establish authority with SME-driven content that showcases deep product and industry expertise.",
    color: "#F9968B",
    items: [
      { name: "Blog Articles" },
      { name: "Whitepapers & Ebooks" },
      { name: "Industry Reports" },
      { name: "Email Newsletters" },
      { name: "Podcasts" },
      { name: "Social Content" },
    ],
  },
  {
    title: "SEO & AEO",
    description: "Optimize for both traditional search and AI answer engines with structured, authoritative content.",
    color: "#26474E",
    items: [
      { name: "Answer Engine Optimization" },
      { name: "Hub & Spoke Architecture" },
      { name: "Content Refreshes" },
      { name: "Keyword Research" },
      { name: "Technical SEO" },
      { name: "AI-optimized Content" },
    ],
  },
  {
    title: "Product Marketing",
    description: "Tell a compelling product story that resonates with technical buyers.",
    color: "#2CCED2",
    items: [
      { name: "Case Studies" },
      { name: "Competitive Analysis" },
      { name: "Product Comparisons" },
      { name: "Landing Pages" },
      { name: "Feature Videos" },
      { name: "One Pagers" },
    ],
  },
  {
    title: "Content Strategy",
    description: "Transform ad-hoc content into a focused program with clear goals and measurable outcomes.",
    color: "#F9968B",
    items: [
      { name: "Content Audits" },
      { name: "Topic Identification" },
      { name: "Editorial Calendars" },
      { name: "Distribution Strategy" },
      { name: "Performance Analytics" },
      { name: "Campaign Planning" },
    ],
  },
];

export default function ServiceCategories() {
  return (
    <Container>
      <SectionTitle>Content Production</SectionTitle>
      <SectionSubtitle>
        We embed ourselves in your organization to deliver expert content for every stage of the buyer journey.
      </SectionSubtitle>
      
      <CategoriesGrid>
        {categories.map((category, index) => (
          <CategoryCard key={index} $accentColor={category.color}>
            <CardHeader>
              <CategoryTitle>{category.title}</CategoryTitle>
              <Icon.ArrowUpRight size={24} />
            </CardHeader>
            <CategoryDescription>{category.description}</CategoryDescription>
            <ItemsList>
              {category.items.map((item, i) => (
                <Item key={i}>{item.name}</Item>
              ))}
            </ItemsList>
          </CategoryCard>
        ))}
      </CategoriesGrid>
    </Container>
  );
}

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem 6rem;

  ${sizeAndDown("md")} {
    padding: 1rem 1.5rem 4rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Gilroy", sans-serif;
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1rem 0;

  ${sizeAndDown("md")} {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 1.25rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  margin: 0 auto 3rem;
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

interface CardProps {
  $accentColor: string;
}

const CategoryCard = styled.div<CardProps>`
  background: ${({ $accentColor }) => $accentColor}15;
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    border-color: ${({ $accentColor }) => $accentColor};
    transform: translateY(-4px);
  }

  ${sizeAndDown("md")} {
    padding: 1.5rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;

  svg {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.4;
  }
`;

const CategoryTitle = styled.h3`
  font-family: "Averta", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const CategoryDescription = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  line-height: 1.5;
  margin: 0 0 1.5rem 0;
`;

const ItemsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Item = styled.span`
  font-family: "Averta", sans-serif;
  font-size: 0.875rem;
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  white-space: nowrap;
`;
