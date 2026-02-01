import Slider from "react-slick";
import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { NextArrow, PrevArrow } from "../../styles/slider";
import { CFade } from "../Animation";
import { Title } from "../styled";

interface content {
  image: string;
  title: string;
  description: string;
}

interface services {
  title: string;
  description?: string;
  data: content[];
}

const data: services[] = [
  {
    title: "Grow a developer-centric product community",
    description:
      "Engage with technical audiences on multiple platforms to create a supportive community of developers",
    data: [
      {
        image: "icons/developer-guide.png",
        title: "Developer Guides",
        description: "Enable developers to make the best use of your product",
      },
      {
        image: "icons/how-to.png",
        title: "How-to articles",
        description:
          "Empower developers with guided, well-researched articles ",
      },
      {
        image: "icons/documentation.png",
        title: "Documentation",
        description: "Explain the ins and outs of your product",
      },
      {
        image: "icons/newsletter.png",
        title: "Community newsletters",
        description: "Share exciting updates with your developer community",
      },
      {
        image: "icons/social.svg",
        title: "Social",
        description: "Engaging developer-centric social posts",
      },
    ],
  },
  {
    title: "Research and identify new product use cases",
    description:
      "Understand where you stand in your industry and explore options to expand market reach.",
    data: [
      {
        image: "icons/market-research.svg",
        title: "Market research",
        description: "Stay on top of everything happening in your niche",
      },
      {
        image: "icons/product_comparison.svg",
        title: "Product comparisons",
        description: "Compare against competition and improve your product ",
      },
      {
        image: "icons/product-differentiator.png",
        title: "Product differentiators",
        description: "Stand out and be a boss in your industry",
      },
      {
        image: "icons/strategy.svg",
        title: "Competitive strategies",
        description: "Execute and review your strategy for best results ",
      },
    ],
  },
  {
    title: "Build product ecosystem integrations and demo apps",
    description:
      "Showcase your product's value proposition with open-source product integrations and demos.",
    data: [
      {
        image: "icons/oss_sample_apps.png",
        title: "OSS sample apps",
        description: "Demonstrate your product features using open-source",
      },
      {
        image: "icons/integration_faq.svg",
        title: "Integration FAQs",
        description:
          "Say hello to precise information and goodbye to confused customers",
      },
      {
        image: "icons/ecosystem_launch_kits.png",
        title: "Ecosystem launch kits",
        description: "Essential material to make your integrations a success",
      },
      {
        image: "icons/social.svg",
        title: "Social",
        description:
          "Communicate news, trends, and product updates on social channels",
      },
    ],
  },
  {
    title: "Scale your digital events to reach more developers",
    description:
      "Jazz up your digital events with custom promotional packs and exciting add-ons.",
    data: [
      {
        image: "icons/twitch_stream.svg",
        title: "Twitch overlays/stickers",
        description:
          "Create appealing and engaging real-time viewing experiences",
      },
      {
        image: "icons/presentation_slide_templates.svg",
        title: "Slide decks",
        description: "Eye-catching decks that showcase your brand",
      },
      {
        image: "icons/zoom_background.svg",
        title: "Zoom backgrounds",
        description:
          "Capture your audience's admiration with aesthetic backgrounds",
      },
      {
        image: "icons/frame.svg",
        title: "Zoom frames/bumpers",
        description: "Add a touch of finesse to live conferences",
      },
      {
        image: "icons/swag-box.svg",
        title: "SWAG boxes",
        description: "Complement your events with the perfect goodies",
      },
    ],
  },
  {
    title: "Craft memorable product campaigns",
    description:
      "Leave a lasting impression on your target audience through multiple communication channels.",
    data: [
      {
        image: "icons/blogs.svg",
        title: "Blogs",
        description:
          "Drive conversions with SEO-optimized, in-depth technical articles ",
      },
      {
        image: "icons/ebook.svg",
        title: "Whitepaper/Ebook",
        description: "Establish credibility and gain trust with your customers",
      },
      {
        image: "icons/landing-page.svg",
        title: "Landing pages",
        description: "Entice customers with stunning landing pages ",
      },
      {
        image: "icons/product_feature.png",
        title: "Product feature videos",
        description: "Captivate your audience with cool videos",
      },
      {
        image: "icons/case_studies.svg",
        title: "Case studies",
        description: "Celebrate your customer wins and the impact you created",
      },
      {
        image: "icons/newsletter.png",
        title: "Newsletters",
        description: "Connect with your product community on a regular basis",
      },
      {
        image: "icons/social.svg",
        title: "Social",
        description:
          "Communicate news, trends, and product updates on social channels",
      },
    ],
  },
];

export default function WhatWeOffer() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <H1>What do we offer?</H1>
      {data.map((item, index) => (
        <CardsContainer key={index} id={String(index)}>
          <H3>
            {/* <div className="number">{("0" + ++index).slice(-2)}</div> */}
            {item.title}
          </H3>
          <Description>{item.description}</Description>
          <CFade>
            <Slider {...settings}>
              {item.data.map((t, i) => (
                <Card key={i}>
                  <img src={`assets/${t.image}`} />
                  <div className="content">
                    <p className="title">{t.title}</p>
                    <p>{t.description} &nbsp;</p>
                  </div>
                </Card>
              ))}
            </Slider>
          </CFade>
        </CardsContainer>
      ))}
    </Container>
  );
}

const Description = styled.p`
  font-family: "Averta";
  font-weight: normal;
`;

const H1 = styled(Title)`
  margin: 1rem auto;
  width: fit-content;
  font-size: 3.5rem;

  ${sizeAndDown("md")} {
    text-align: center;
    border: none;
  }
`;

const H3 = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin: 3rem auto -1rem auto;
  color: ${({ theme }) => theme.colors.teal};

  font-family: "Averta";
  font-weight: bolder;

  .number {
    font-size: 3.5rem;
    margin: 0 0.5rem 0 0;
    color: #dadada;
  }

  ${sizeAndDown("md")} {
    font-size: 1.5rem;
    margin: 1rem;

    .number {
      font-size: 2rem;
    }
  }
`;

const Container = styled.div`
  text-align: center;
  margin: 0 0 5rem 0;
`;

const CardsContainer = styled.div`
  display: block;
  /* So as to shift the content below navbar when scroll to id */
  padding: 4.5rem 0;
  margin: -4.5rem auto;

  max-width: 1500px;

  p {
    margin: 2rem 0;
  }

  .slick-slider .slick-initialized {
    padding: 1rem;
  }

  ${sizeAndDown("md")} {
    width: 90% !important;

    p {
      font-size: 1.25rem;
    }
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 20px;

  h3 {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.teal};
    margin: 1rem 0 0.5rem 0;
  }

  background: #ffffff;
  box-shadow: rgb(0 0 0 / 25%) 0px 1px 8px -3px;
  border-radius: 10px;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0.5rem 1rem;

    .title {
      text-transform: uppercase;
      font-weight: 800;
      font-size: 1.25rem;
      font-family: "Averta";
      font-weight: bold;
    }

    p {
      font-family: "Averta";
      font-weight: normal;
      font-size: 1.1rem;
      margin: 0.5rem 0;
      padding: 0.5rem 0 0.5rem 0;
      color: #17252a;
      font-weight: 400;
    }
  }

  img {
    width: 50px;
    aspect-ratio: 1/1;

    margin: 1rem auto;
  }

  ${sizeAndDown("md")} {
    width: 70% !important;
    .title{
      font-size: 1.2rem !important;
    }
  }
`;
