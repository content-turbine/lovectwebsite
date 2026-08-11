import { useState } from "react";
import styled from "styled-components";
import { sizeAndDown } from "../styles/responsive";
import { CFade } from "./Animation";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We used Content Turbine to accelerate our developer marketing efforts in the early stages of building YugabyteDB, and the results were fantastic. The content they produce is top-notch, and their team of subject matter experts understand the tech space well. They knew exactly what we were looking for, put together a plan, and executed it! We would not hesitate to recommend them or to use them again.",
    name: "Karthik Ranganathan",
    designation: "Founder of YugabyteDB",
  },
  {
    quote:
      "Only a handful of marketing agencies can deliver high-quality content for emerging technologies. Content Turbine helped scale our marketing efforts in the past year, boosting product growth and exceeding our goals. I highly recommend their team for both their marketing creativity and technical expertise.",
    name: "Becky Quintal",
    designation: "Managing Editor at Fauna",
  },
  {
    quote:
      "To accelerate our content marketing efforts and develop the right message for a highly technical audience, we worked with Content Turbine. They developed excellent technical content across all the stages of the buyer's journey. The team at Content Turbine is very proactive, reliable, and so fun to work with. I highly recommend them.",
    name: "Chrissie Buchanan",
    designation: "Senior Director of Marketing at Macrometa",
  },
  {
    quote:
      "As a growth stage company, Auryc relied on Content Turbine to be our extended marketing arm. They are a boutique marketing agency bringing a complete set of services from social media and website design to video and blog content. Having everything under one roof saved us a great deal of time and enabled us to strategize effectively. The results were visible in just a few weeks - improved web presence for our brand and many more in-bound conversions for our sales teams. In addition, the team at Content Turbine builds relationships, and I wish we would have known about them sooner.",
    name: "Amod Setlur",
    designation: "Co-Founder of Auryc",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({ item }: { item: Testimonial }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Tile>
      <Header>
        <Avatar>{initials(item.name)}</Avatar>
        <div>
          <AuthorName>{item.name}</AuthorName>
          <Designation>{item.designation}</Designation>
        </div>
      </Header>

      <Quote $expanded={expanded}>{item.quote}</Quote>

      <ReadMore type="button" onClick={() => setExpanded((v) => !v)}>
        {expanded ? "Read less" : "Read more"} <span>{expanded ? "⌃" : "⌄"}</span>
      </ReadMore>
    </Tile>
  );
}

export default function TrustedBy() {
  return (
    <Container>
      <CFade>
        <Title>What our customers say about us</Title>
        <Subtitle>See what our customers are saying about working with us.</Subtitle>
        <TilesGrid>
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </TilesGrid>
      </CFade>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 6rem 2rem;

  ${sizeAndDown("md")} {
    padding: 3rem 1rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-family: "Gilroy", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.75rem;

  ${sizeAndDown("md")} {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
  margin: 0 0 3rem;
`;

const TilesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  ${sizeAndDown("lg")} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
  }
`;

const Tile = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1.25rem;
`;

const Avatar = styled.div`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.teal} 100%);
  color: ${({ theme }) => theme.colors.light};
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthorName = styled.p`
  font-family: "Averta";
  font-weight: 700;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const Designation = styled.p`
  font-family: "Averta";
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
  margin: 0.15rem 0 0 0;
`;

const Quote = styled.p<{ $expanded: boolean }>`
  font-family: "Averta";
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.85;
  margin: 0 0 0.5rem 0;
  flex-grow: 1;

  ${({ $expanded }) =>
    !$expanded &&
    `
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`;

const ReadMore = styled.button`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: auto;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font-family: "Averta";
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.teal};
`;
