import * as Icon from "react-feather";
import React, { useState } from "react";
import { rgba } from "polished";
import styled from "styled-components";
import { Section, Title } from "../styled";
import { sizeAndDown } from "../../styles/responsive";

interface DropdownData {
  title: string;
  description: string;
  color: string;
}

const data: DropdownData[] = [
  {
    color: "#F9968B",
    title: "When will I get access?",
    description:
      "No, we are not. Our matching engine tries to match gigs to writers based on the skillset. In addition, our clients can select certain writers as their preferred ones based on previously completed tasks.",
  },
  {
    color: "#3B82F6",
    title: "Who is this for?",
    description:
      "No, we are not. Our matching engine tries to match gigs to writers based on the skillset. In addition, our clients can select certain writers as their preferred ones based on previously completed tasks.",
  },
  {
    color: "#3B82F6",
    title: "Who is this for?",
    description:
      "No, we are not. Our matching engine tries to match gigs to writers based on the skillset. In addition, our clients can select certain writers as their preferred ones based on previously completed tasks.",
  },
  {
    color: "#F9968B",
    title: "When will I get access?",
    description:
      "No, we are not. Our matching engine tries to match gigs to writers based on the skillset. In addition, our clients can select certain writers as their preferred ones based on previously completed tasks.",
  },
];

const Faqs = () => {
  const [openDropdown, setOpenDropdowns] = useState<number[]>([]);

  const handleDropdown = (index: number) => {
    if (openDropdown.includes(index)) {
      setOpenDropdowns(openDropdown.filter((item) => item !== index));
    } else {
      setOpenDropdowns([...openDropdown, index]);
    }
  };

  return (
    <div className="">
      <br /><br />
      <Heading>
        Frequently Asked Questions
      </Heading>
      <div>
        <div id="faq-ai">
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
        <div>
          {/* Image placeholder */}
        </div>
      </div>
    </div>
  );
};

export default Faqs;

const DropdownSection = styled(Section)`
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
  color: #0F1B3D;

  ${sizeAndDown("md")} {
    font-size: 2.5rem;
    text-align: center;
  }
`;
