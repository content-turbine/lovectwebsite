import styled from "styled-components";
import { sizeAndDown } from "../styles/responsive";
import { CFade } from "./Animation";
import { Title } from "./styled";

interface Testimonial {
  logo: string;
  quote: string;
  shortQuote: string;
  name: string;
  designation: string;
}

export const testimonials: Testimonial[] = [
  {
    logo: "assets/icons/yugabytedb-logo.png",
    shortQuote: "We would not hesitate to recommend them or to use them again",
    quote:
      "We used Content Turbine to accelerate our developer marketing efforts in the early stages of building YugabyteDB, and the results were fantastic. The content they produce is top-notch, and their team of subject matter experts understand the tech space well. They knew exactly what we were looking for, put together a plan, and executed it! We would not hesitate to recommend them or to use them again.",
    name: "Karthik Ranganathan",
    designation: "Founder of YugabyteDB",
  },
  {
    logo: "assets/icons/fauna.svg",
    shortQuote: "Marketing creativity and technical expertise",
    quote:
      "Only a handful of marketing agencies can deliver high-quality content for emerging technologies. Content Turbine helped scale our marketing efforts in the past year, boosting product growth and exceeding our goals. I highly recommend their team for both their marketing creativity and technical expertise.",
    name: "Becky Quintal",
    designation: "Managing Editor at Fauna",
  },
  {
    logo: "assets/icons/macrometa.png",
    shortQuote: "Right message for a highly technical audience",
    quote:
      "To accelerate our content marketing efforts and develop the right message for a highly technical audience, we worked with Content Turbine. They developed excellent technical content across all the stages of the buyer's journey. The team at Content Turbine is very proactive, reliable, and so fun to work with. I highly recommend them.",
    name: "Chrissie Buchanan",
    designation: "Senior Director of Marketing at Macrometa",
  },
  {
    logo: "assets/icons/Auryc.png",
    shortQuote: "I wish we would have known about them sooner.",
    quote:
      "As a growth stage company, Auryc relied on Content Turbine to be our extended marketing arm. They are a boutique marketing agency bringing a complete set of services from social media and website design to video and blog content. Having everything under one roof saved us a great deal of time and enabled us to strategize effectively. The results were visible in just a few weeks - improved web presence for our brand and many more in-bound conversions for our sales teams. In addition, the team at Content Turbine builds relationships, and I wish we would have known about them sooner.",
    name: "Amod Setlur",
    designation: "Co-Founder of Auryc",
  },
];

export default function TrustedBy() {
  return (
    <Container>
      <CFade>
        <Title>What our customers say about us</Title>
        <TilesGrid>
          {testimonials.map((item, index) => (
            <Tile key={index}>
              <LogoContainer>
                <img src={item.logo} alt={item.name} />
              </LogoContainer>
              <ShortQuote>&quot;{item.shortQuote}&quot;</ShortQuote>
              <Quote>{item.quote}</Quote>
              <Author>
                <AuthorName>{item.name}</AuthorName>
                <Designation>{item.designation}</Designation>
              </Author>
            </Tile>
          ))}
        </TilesGrid>
      </CFade>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 4rem 2rem;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.light};
    border: none;
    margin-bottom: 3rem;
  }

  ${sizeAndDown("md")} {
    padding: 3rem 1rem;

    h1 {
      font-size: 2rem;
    }
  }
`;

const TilesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Tile = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  }

  ${sizeAndDown("md")} {
    padding: 1.5rem;
  }
`;

const LogoContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  width: 160px;
  height: 60px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 32px;
    width: auto;
    max-width: 120px;
    object-fit: contain;
  }
`;

const ShortQuote = styled.p`
  font-family: "Averta";
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.teal};
  margin-bottom: 1rem;
`;

const Quote = styled.blockquote`
  font-family: "Averta";
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  border-left: 3px solid ${({ theme }) => theme.colors.teal};
  padding-left: 1rem;
  margin: 0 0 1.5rem 0;
  flex-grow: 1;
`;

const Author = styled.div`
  margin-top: auto;
`;

const AuthorName = styled.p`
  font-family: "Averta";
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
`;

const Designation = styled.p`
  font-family: "Averta";
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0.25rem 0 0 0;
`;
