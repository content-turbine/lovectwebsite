import { Link, Navigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { rgba } from "polished";
import * as Icon from "react-feather";
import Seo from "../components/Seo";
import { getServiceDetail, serviceDetails } from "../data/serviceDetails";
import { sizeAndDown } from "../../styles/responsive";

const BASE = "https://www.contentturbine.com";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceDetail(slug);

  if (!service) return <Navigate to="/services" replace />;

  const url = `${BASE}/services/${service.slug}`;
  const others = serviceDetails.filter((s) => s.slug !== service.slug);

  return (
    <>
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            serviceType: service.title,
            url,
            description: service.definition,
            provider: { "@id": `${BASE}/#organization` },
            areaServed: "Worldwide",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: `${service.title} deliverables`,
              itemListElement: service.deliverables.map((name) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name },
              })),
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: `How Content Turbine delivers ${service.title}`,
            description: service.definition,
            step: service.steps.map((s, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: s.name,
              text: s.detail,
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
              { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
              { "@type": "ListItem", position: 3, name: service.title, item: url },
            ],
          },
        ]}
      />

      <Article>
        <Breadcrumbs aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/services">Services</Link>
          <span aria-hidden="true">/</span>
          <strong>{service.title}</strong>
        </Breadcrumbs>

        <h1>{service.title}</h1>
        <Definition>{service.definition}</Definition>
        {service.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        <section aria-labelledby="who">
          <h2 id="who">Who this is for</h2>
          <Bullets>
            {service.whoItsFor.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </Bullets>
        </section>

        <section aria-labelledby="how">
          <h2 id="how">How it works, step by step</h2>
          <Steps>
            {service.steps.map((s) => (
              <li key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.detail}</p>
              </li>
            ))}
          </Steps>
        </section>

        <section aria-labelledby="compare">
          <h2 id="compare">{service.comparison.caption}</h2>
          <TableWrap>
            <table>
              <caption>{service.comparison.caption}</caption>
              <thead>
                <tr>
                  {service.comparison.columns.map((c) => (
                    <th key={c} scope="col">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {service.comparison.rows.map((row) => (
                  <tr key={row[0]}>
                    <th scope="row">{row[0]}</th>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrap>
        </section>

        <section aria-labelledby="deliverables">
          <h2 id="deliverables">What you get</h2>
          <Bullets>
            {service.deliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </Bullets>
        </section>

        {service.examples && (
          <section aria-labelledby="examples">
            <h2 id="examples">See it in action</h2>
            {service.examples.map((ex) => (
              <Example key={ex.title}>
                <h3>{ex.title}</h3>
                <p>{ex.excerpt}</p>
              </Example>
            ))}
          </section>
        )}

        <section aria-labelledby="faq">
          <h2 id="faq">Frequently asked questions</h2>
          {service.faqs.map((f) => (
            <Faq key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </Faq>
          ))}
        </section>

        <Cta>
          <h2>Talk through {service.title.toLowerCase()}</h2>
          <p>
            Book a 30-minute discovery call and we&apos;ll tell you honestly whether this is the
            right place to start.
          </p>
          <CtaButton to="/contact">
            Let&apos;s talk <Icon.MessageCircle size={18} />
          </CtaButton>
        </Cta>

        <RelatedNav aria-labelledby="related">
          <h2 id="related">Other services</h2>
          <RelatedList>
            {others.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.navName}</Link>
              </li>
            ))}
            <li>
              <Link to="/services">All services</Link>
            </li>
          </RelatedList>
        </RelatedNav>
      </Article>
    </>
  );
}

const Article = styled.article`
  max-width: 820px;
  margin: 0 auto;
  padding: 4rem 1.5rem 6rem;
  color: ${({ theme }) => theme.colors.text};

  h1 {
    font-family: "Gilroy", sans-serif;
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.1;
    margin: 0 0 1.5rem;

    ${sizeAndDown("md")} {
      font-size: 2.25rem;
    }
  }

  h2 {
    font-family: "Gilroy", sans-serif;
    font-size: 1.9rem;
    font-weight: 500;
    margin: 3.5rem 0 1rem;

    ${sizeAndDown("md")} {
      font-size: 1.6rem;
    }
  }

  h3 {
    font-family: "Averta", sans-serif;
    font-size: 1.15rem;
    margin: 0 0 0.35rem;
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

const Definition = styled.p`
  font-size: 1.25rem !important;
  line-height: 1.7 !important;
  opacity: 1 !important;
  border-left: 4px solid ${({ theme }) => theme.colors.teal};
  background: ${({ theme }) => rgba(theme.colors.teal, 0.08)};
  padding: 1.25rem 1.5rem;
  border-radius: 0 12px 12px 0;
  margin: 0 0 2rem;
`;

const Bullets = styled.ul`
  padding-left: 1.25rem;
  li {
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 0.5rem;
    opacity: 0.85;
  }
`;

const Steps = styled.ol`
  counter-reset: step;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    counter-increment: step;
    position: relative;
    padding: 0 0 1.5rem 3.25rem;
    border-left: 2px solid ${({ theme }) => rgba(theme.colors.teal, 0.35)};
    margin-left: 1rem;

    &:last-child {
      border-left-color: transparent;
      padding-bottom: 0;
    }

    &::before {
      content: counter(step);
      position: absolute;
      left: -1.1rem;
      top: 0;
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Gilroy", sans-serif;
      font-weight: 700;
      color: #fff;
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  p {
    margin: 0;
  }
`;

const TableWrap = styled.div`
  overflow-x: auto;

  caption {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
    min-width: 560px;
  }

  th,
  td {
    text-align: left;
    padding: 0.85rem 1rem;
    border-bottom: 1px solid ${({ theme }) => rgba(theme.colors.primary, 0.15)};
    vertical-align: top;
  }

  thead th {
    background: ${({ theme }) => rgba(theme.colors.teal, 0.12)};
    font-family: "Averta", sans-serif;
  }

  tbody th {
    font-weight: 700;
    width: 28%;
  }
`;

const Example = styled.blockquote`
  margin: 0 0 1.25rem;
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  border-left: 4px solid ${({ theme }) => rgba(theme.colors.primary, 0.35)};
  background: ${({ theme }) => rgba(theme.colors.primary, 0.04)};

  h3 {
    font-size: 1rem;
    opacity: 0.7;
  }

  p {
    margin: 0;
    font-style: italic;
  }
`;

const Faq = styled.div`
  border-bottom: 1px solid ${({ theme }) => rgba(theme.colors.primary, 0.12)};
  padding: 1.1rem 0;

  h3 {
    font-size: 1.1rem;
  }

  p {
    margin: 0;
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
  flex-wrap: wrap;
  gap: 0.75rem;

  a {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 100px;
    border: 1px solid ${({ theme }) => rgba(theme.colors.primary, 0.25)};
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-size: 0.95rem;
  }

  a:hover {
    background: ${({ theme }) => rgba(theme.colors.teal, 0.15)};
  }
`;
