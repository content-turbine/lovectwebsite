import * as Icon from "react-feather";
import React, { useState } from "react";
import { rgba } from "polished";
import styled from "styled-components";
import { Section, Title } from "../styled";
import { sizeAndDown } from "../../styles/responsive";
import img from "./assets/QueIMG.png";

interface DropdownData {
  title: string;
  description: string;
  color: string;
}

const data: DropdownData[] = [
  {
    color: "#F9968B",
    title: "What's the screening process to onboard writers?",
    description:
      "Each writer applying must pass a screening process designed to measure subject matter expertise, professionalism, and communication skills. The full screening process takes between a couple of days to a week to complete.",
  },
  {
    color: "#3B82F6",
    title: "Are we a bidding marketplace?",
    description:
      "No, we are not. Our matching engine tries to match gigs to writers based on the skillset. In addition, our clients can select certain writers as their preferred ones based on previously completed tasks.",
  },
  {
    color: "#0F1B3D",
    title: "How is my rating determined overall?",
    description:
      "Your overall rating is determined using a complex combination score that includes the content rating, client approval rate, number of completed and client-accepted gigs, and account age.",
  },
  {
    color: "#F5FBFF",
    title: "Is this a full-time opportunity or a freelance writing gig?",
    description:
      "At Content Turbine, you work with us as a freelance content writer. It is not a full-time job! The frequency of work is not fixed and you get to work at your own pace as long as you can meet the set deadline.",
  },
  {
    color: "#F5FBFF",
    title: "What are the requirements for writers?",
    description:
      "In addition to the screening process, we require writers to be 18 years or older, reside in a country where we can make payments, and have a reliable internet connection. Content Turbine will not be responsible for any consequence that arises as a result of misuse of any kind of Website or our Services that may occur by virtue of any person including a minor registering for the Services/products provided.",
  },
  {
    color: "#F5FBFF",
    title: "How much do writers get paid?",
    description:
      "It typically depends on the complexity of the technical article, length, and subject-matter expertise needed. In general, new writers start at $150 per article and we have a 5-point level system that allows writers to earn more depending on their rating and articles completed.",
  },
  {
    color: "#F5FBFF",
    title: "Do you charge a fee for writers?",
    description:
      "No fee for joining the platform. You'll be charged a $1.99 fee for any payment request that is less than $20.00.",
  },
];

export default function FAQ() {
  const [openDropdown, setOpenDropdowns] = useState<number[]>([]);

  const handleDropdown = (index: number) => {
    if (openDropdown.includes(index)) {
      setOpenDropdowns(openDropdown.filter((item) => item !== index));
    } else {
      setOpenDropdowns([...openDropdown, index]);
    }
  };

  return (
    <div className="faq_main">
      <Heading>
        Frequently Asked Questions
      </Heading>
      <div className="faq-cntainer">
        <div className="faq-ques">
          <DropdownSection>
            <DropdownWrapper>
              {data.map((f, index) => (
                <Dropdown
                  key={index + f.title}
                  $color={f.color}
                  onClick={() => handleDropdown(index)}
                >
                  <div className="content">
                    <div className="left">
                      <h1>{f.title}</h1>
                    </div>
                    <div className="right">
                      {openDropdown.includes(index) ? (
                        <Icon.ChevronUp />
                      ) : (
                        <Icon.ChevronDown />
                      )}
                    </div>
                  </div>
                  {openDropdown.includes(index) && (
                    <p
                      className="gray line-height"
                      dangerouslySetInnerHTML={{ __html: f.description }}
                    />
                  )}
                </Dropdown>
              ))}
            </DropdownWrapper>
          </DropdownSection>
        </div>
        <div className="faq-image">
          <img src={img} alt="FAQ" className="" />
        </div>
      </div>
    </div>
  );
}

const DropdownSection = styled(Section)`
  padding-left: 53px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  width: 100%;
`;

const Dropdown = styled.div<{ $color: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 900px;
  padding: 1.25rem;

  cursor: pointer;
  border-bottom: 1px solid #ccc;
  font-family: "Averta";

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.teal};
  }

  h1 {
    margin: 0;
    font-size: 1.35rem;
  }

  h3 {
    margin: 0.5rem 1rem;
    font-size: 2rem;
    font-weight: normal;
    color: ${({ theme }) => rgba(theme.colors.text, 0.6)};
  }

  p {
    font-size: 1rem;
  }

  div {
    display: flex;
    align-items: center;
  }

  .circle {
    background-color: ${(props) => props.$color};
    height: 41px;
    width: 41px;
    border-radius: 50%;
    margin: 0 0.5rem;
  }

  &:hover {
    h1 {
      color: ${({ theme }) => theme.colors.teal};
    }
    border-color: ${({ theme }) => theme.colors.teal};

    svg {
      color: ${({ theme }) => theme.colors.teal};
    }
  }

  ${sizeAndDown("md")} {
    padding: 1rem;
    width: 90%;

    h1 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.25rem;
    }
  }
`;

const Heading = styled(Title)`
  font-size: 3rem;
  text-align: center;
  border: none;
  color: #3B82F6;

  ${sizeAndDown("md")} {
    font-size: 2.5rem;
    text-align: center;
  }
`;
