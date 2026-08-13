import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { rgba } from "polished";
import * as Icon from "react-feather";
import Seo from "../components/Seo";
import { blogPosts, getBlogPost } from "../data/blogPosts";
import { teamMembers } from "../../components/about/Team";
import { sizeAndDown } from "../../styles/responsive";

const BASE = "https://www.contentturbine.com";

const reportCtas: Record<string, { after: string; eyebrow: string; title: string; body: string; button: string }> = {
  "how-we-measure-ai-citation-share": {
    after: "Start from prompts, not keywords",
    eyebrow: "See the methodology applied to your brand",
    title: "What is your AI citation share?",
    body: "See the buyer questions where AI engines cite you, a competitor, or nobody at all.",
    button: "Get your AI visibility report",
  },
  "aeo-checklist-before-you-publish": {
    after: "Machine access",
    eyebrow: "Find the structural gaps first",
    title: "Could AI engines actually cite your site?",
    body: "Get a clear view of crawl access, extractability, evidence, and the content gaps holding you back.",
    button: "Check my AI visibility",
  },
  "topic-clusters-still-beat-keyword-lists": {
    after: "Pillar structure is a trust signal, not just internal linking",
    eyebrow: "Turn topic clusters into evidence",
    title: "See which topics AI associates with your brand.",
    body: "Our report shows the questions, sources, and competitor content shaping AI answers in your category.",
    button: "See my report",
  },
  "what-refresh-it-actually-means": {
    after: "Retire: no demand left to serve",
    eyebrow: "Move from audit to action",
    title: "Get a prioritized content action plan.",
    body: "Find the pages and topics that deserve attention first—based on how AI engines see your category.",
    button: "Get my action plan",
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const url = `${BASE}/blog/${post.slug}`;
  const author = teamMembers.find((m) => m.name === post.authorName);
  const others = blogPosts.filter((p) => p.slug !== post.slug);
  const reportCta = reportCtas[post.slug];

  return (
    <>
      <Seo
        title={`${post.title} | Content Turbine Blog`}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription,
            url,
            datePublished: post.date,
            author: { "@type": "Person", name: post.authorName },
            publisher: { "@id": `${BASE}/#organization` },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          },
        ]}
      />

      <Article>
        <Breadcrumbs aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/blog">Blog</Link>
        </Breadcrumbs>

        <CategoryTag>{post.category}</CategoryTag>
        <h1>{post.title}</h1>
        <Byline>
          {post.authorName}
          {author && <span> · {author.role}</span>}
          <span> · {post.readTime}</span>
        </Byline>

        {post.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        {post.sections.map((section) => (
          <React.Fragment key={section.heading}>
            <section>
              <h2>{section.heading}</h2>
              {section.items && (
                <ChecklistItems>
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ChecklistItems>
              )}
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
            {reportCta?.after === section.heading && (
              <ReportCta>
                <span>{reportCta.eyebrow}</span>
                <h2>{reportCta.title}</h2>
                <p>{reportCta.body}</p>
                <ReportCtaButton href="/#get-report">{reportCta.button} <Icon.ArrowRight size={18} /></ReportCtaButton>
              </ReportCta>
            )}
          </React.Fragment>
        ))}

        <Cta>
          <h2>Want content like this for your product?</h2>
          <p>
            Book a 30-minute discovery call and we&apos;ll tell you honestly whether this is the
            right place to start.
          </p>
          <CtaButton to="/contact">
            Let&apos;s talk <Icon.MessageCircle size={18} />
          </CtaButton>
        </Cta>

        <RelatedNav aria-labelledby="related">
          <h2 id="related">More from the blog</h2>
          <RelatedList>
            {others.map((p) => (
              <li key={p.slug}>
                <Link to={`/blog/${p.slug}`}>{p.title}</Link>
              </li>
            ))}
            <li>
              <Link to="/blog">All posts</Link>
            </li>
          </RelatedList>
        </RelatedNav>
      </Article>
    </>
  );
}

const Article = styled.article`
  max-width: 780px;
  margin: 0 auto;
  padding: 4rem 1.5rem 6rem;
  color: ${({ theme }) => theme.colors.text};

  h1 {
    font-family: "Gilroy", sans-serif;
    font-size: 2.75rem;
    font-weight: 500;
    line-height: 1.15;
    margin: 0 0 1rem;

    ${sizeAndDown("md")} {
      font-size: 2rem;
    }
  }

  h2 {
    font-family: "Gilroy", sans-serif;
    font-size: 1.75rem;
    font-weight: 500;
    margin: 3rem 0 1rem;

    ${sizeAndDown("md")} {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.08rem;
    line-height: 1.75;
    opacity: 0.85;
  }
`;

const Breadcrumbs = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  opacity: 0.7;

  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CategoryTag = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.teal};
  margin-bottom: 0.75rem;
`;

const Byline = styled.p`
  font-size: 0.95rem !important;
  opacity: 0.6 !important;
  margin: 0 0 2rem !important;
`;

const ChecklistItems = styled.ol`
  padding-left: 1.25rem;
  margin: 0 0 1.5rem;

  li {
    font-size: 1.08rem;
    line-height: 1.75;
    opacity: 0.85;
    margin-bottom: 0.75rem;
  }
`;

const Cta = styled.section`
  margin-top: 3.5rem;
  padding: 2rem;
  border-radius: 16px;
  background: ${({ theme }) => rgba(theme.colors.primary, 0.06)};

  h2 {
    margin-top: 0;
  }
`;

const ReportCta = styled.aside`
  margin: 3rem 0 0;
  padding: 2rem;
  border-radius: 16px;
  color: #fff;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, #173c3d 100%);
  box-shadow: 0 16px 45px rgba(16, 35, 38, 0.16);

  > span {
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.teal};
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  h2 { margin: 0; color: #fff; }
  p { margin: 0.75rem 0 1.25rem; color: rgba(255, 255, 255, 0.78); }
`;

const ReportCtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.15rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.teal};
  font-family: "Averta", sans-serif;
  font-weight: 700;
  text-decoration: none;
`;

const CtaButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 0.9rem 1.6rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: "Averta", sans-serif;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.light};
  }
`;

const RelatedNav = styled.nav`
  margin-top: 3rem;
`;

const RelatedList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 600;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.teal};
  }
`;
