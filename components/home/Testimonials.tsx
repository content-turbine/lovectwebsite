import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { NextArrow, PrevArrow } from "../../styles/slider";
import { Title } from "../styled";

interface FeedbackType {
  photo: string;
  quote: string;
  name: string;
  short: string;
  designation: string;
}
const FeedbackData: FeedbackType[] = [
  {
    photo: "icons/yugabytedb-logo.png",
    quote:
      "We used Content Turbine to accelerate our developer marketing efforts in the early stages of building YugabyteDB, and the results were fantastic. The content they produce is top-notch, and their team of subject matter experts understand the tech space well. They knew exactly what we were looking for, put together a plan, and executed it! We would not hesitate to recommend them or to use them again.",
    name: "Karthik Ranganathan",
    short: "We would not hesitate to recommend them or to use them again",
    designation: "Founder of YugabyteDB",
  },
  {
    photo: "icons/fauna.svg",
    quote:
      "Only a handful of marketing agencies can deliver high-quality content for emerging technologies. Content Turbine helped scale our marketing efforts in the past year, boosting product growth and exceeding our goals. I highly recommend their team for both their marketing creativity and technical expertise.",
    name: "Becky Quintal",
    short: "Marketing creativity and technical expertise",
    designation: "Managing Editor at Fauna",
  },
  {
    photo: "icons/macrometa.png",
    quote:
      "To accelerate our content marketing efforts and develop the right message for a highly technical audience, we worked with Content Turbine. They developed excellent technical content across all the stages of the buyer's journey. The team at Content Turbine is very proactive, reliable, and so fun to work with. I highly recommend them.",
    name: "Chrissie Buchanan",
    short: "Right message for a highly technical audience",
    designation: "Senior Director of Marketing at Macrometa",
  },
  {
    photo: "icons/Auryc.png",
    quote:
      "As a growth stage company, Auryc relied on Content Turbine to be our extended marketing arm. They are a boutique marketing agency bringing a complete set of services from social media and website design to video and blog content. Having everything under one roof saved us a great deal of time and enabled us to strategize effectively. The results were visible in just a few weeks - improved web presence for our brand and many more in-bound conversions for our sales teams. In addition, the team at Content Turbine builds relationships, and I wish we would have known about them sooner.",
    name: "Amod Setlur",
    short: "I wish we would have known about them sooner.",
    designation: "Co-Founder of Auryc",
  },
];

export default function Testimonials() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <StyledTestimonials>
      <Title>What our customers say about us</Title>

      <Slider {...sliderSettings}>
        {FeedbackData.map((item, index) => (
          <div key={index}>
            <Card>
              <div className="image">
                <Sparkle top="0" left="-5%"></Sparkle>
                <Sparkle top="90%" left="30%"></Sparkle>
                <Sparkle top="0" left="85%"></Sparkle>
                <img src={`assets/${item.photo}`} />
              </div>
              <div className="content">
                <p className="short">&quot;{item.short}&quot;</p>
                <blockquote>{item.quote}</blockquote>
                <p>{item.name}</p>
                <p>{item.designation}</p>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
    </StyledTestimonials>
  );
}
const StyledTestimonials = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 2rem 4rem;
  margin: 8rem 0;

  h1 {
    width: fit-content;
    margin: 0 auto;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.light};
    border-color: ${({ theme }) => theme.colors.light};

    border: none;
  }

  ${sizeAndDown("md")} {
    margin: 4rem 0;
    padding: 2rem 1rem;

    h1 {
      font-size: 2.5rem;
    }
  }
`;

const Sparkle = styled.div<{ top: string; left: string }>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background: ${({ theme }) => theme.colors.peach};
  height: 0.5rem;
  width: 0.5rem;
  transform: rotate(45deg);
  transition: font-size 0.3s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: inherit;

    top: -0.5em;
    right: -1.5em;
    height: 1em;
    width: 1em;
    border-radius: 50%;
  }

  &::after {
    top: 1.2em;
    right: -1.3em;
    height: 0.6em;
    width: 0.6em;
    border-radius: 0.2em;
  }

  &:hover {
    font-size: 1.1em;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
  padding: 0 2rem;
  overflow: hidden;

  font-family: "Averta";

  .image {
    flex: none;
    position: relative;
    img {
      height: 150px;
      aspect-ratio: 1/1;
      object-fit: contain;
      padding: 1rem;
    }

    background-color: #fff;
    border-radius: 50%;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;
    justify-content: center;
    font-size: 1.1rem;
    padding: 2rem 1rem;

    .short {
      font-size: 1.5rem;
    }

    blockquote {
      border-left: 5px solid #bababa;
      padding-left: 1rem;
      font-size: 1rem;
      margin: 1rem 0;
      max-width: 80ch;
    }

    p {
      margin: 0.5rem 0;
    }
  }

  ${sizeAndDown("md")} {
    flex-direction: column !important;
    align-items: center !important;
    margin: 0;
    padding: 0;

    .content {
      padding: 2rem;

      blockquote {
        margin: 1rem 0;
        width: 80%;
      }
    }
  }
`;
