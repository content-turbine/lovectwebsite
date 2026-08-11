import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { rgba } from "polished";
import * as Icon from "react-feather";
import Seo from "../components/Seo";
import { blogPosts, BlogCategory } from "../data/blogPosts";
import { sizeAndDown } from "../../styles/responsive";

const BASE = "https://www.contentturbine.com";
const CATEGORIES: BlogCategory[] = ["Writing", "Strategy", "Data"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">("All");
  const posts = activeCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <Seo
        title="Blog — Technical Marketing Insights | Content Turbine"
        description="Writing, strategy, and data on technical content marketing and answer engine optimization from the Content Turbine team."
        path="/blog"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": `${BASE}/blog#blog`,
            url: `${BASE}/blog`,
            name: "Content Turbine Blog",
            publisher: { "@id": `${BASE}/#organization` },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
            ],
          },
        ]}
      />

      <Wrapper>
        <Header>
          <Eyebrow>Insights</Eyebrow>
          <h1>Writing, strategy, and data on technical content</h1>
          <Lede>
            What we're learning about answer engine optimization, technical content, and getting
            cited — published as we learn it, not gated behind a form.
          </Lede>
        </Header>

        <Filters>
          <FilterButton $active={activeCategory === "All"} onClick={() => setActiveCategory("All")}>
            All
          </FilterButton>
          {CATEGORIES.map((c) => (
            <FilterButton key={c} $active={activeCategory === c} onClick={() => setActiveCategory(c)}>
              {c}
            </FilterButton>
          ))}
        </Filters>

        <Grid>
          {posts.map((post) => (
            <Card key={post.slug} to={`/blog/${post.slug}`}>
              <CategoryTag>{post.category}</CategoryTag>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Meta>
                {post.authorName} · {post.readTime}
              </Meta>
              <span>
                Read more <Icon.ArrowRight size={16} />
              </span>
            </Card>
          ))}
        </Grid>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem 6rem;

  ${sizeAndDown("md")} {
    padding: 3rem 1.5rem 4rem;
  }
`;

const Header = styled.div`
  max-width: 700px;
  margin-bottom: 3rem;

  h1 {
    font-family: "Gilroy", sans-serif;
    font-size: 2.75rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    margin: 0.75rem 0 1rem;
    line-height: 1.15;

    ${sizeAndDown("md")} {
      font-size: 2.1rem;
    }
  }
`;

const Eyebrow = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.teal};
`;

const Lede = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  margin: 0;
`;

const Filters = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  border: 1px solid ${({ theme }) => rgba(theme.colors.primary, 0.25)};
  background: ${({ $active, theme }) => ($active ? theme.colors.primary : "transparent")};
  color: ${({ $active, theme }) => ($active ? theme.colors.light : theme.colors.primary)};
  padding: 0.5rem 1.1rem;
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ $active, theme }) => ($active ? theme.colors.primary : rgba(theme.colors.teal, 0.15))};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const CategoryTag = styled.span`
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.teal};
  margin-bottom: 0.75rem;
`;

const Meta = styled.span`
  font-size: 0.85rem;
  opacity: 0.55;
  margin: 0.75rem 0 1rem;
`;

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  border-radius: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => rgba(theme.colors.primary, 0.15)};
  background: ${({ theme }) => rgba(theme.colors.teal, 0.05)};
  transition: all 0.2s ease-in-out;

  h2 {
    font-family: "Gilroy", sans-serif;
    font-size: 1.35rem;
    font-weight: 600;
    margin: 0 0 0.6rem;
    line-height: 1.3;
  }

  p {
    font-size: 0.98rem;
    line-height: 1.6;
    opacity: 0.75;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  span:last-child {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    margin-top: auto;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.text};
  }
`;
