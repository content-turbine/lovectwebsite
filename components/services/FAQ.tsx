import * as Icon from "react-feather";
import React, { useState } from "react";
import { rgba } from "polished";
import styled from "styled-components";
import { Section, Title } from "../styled";
import { sizeAndDown } from "../../styles/responsive";
import { conf } from "../../constants";

interface DropdownData {
  title: string;
  description: string;
  color: string;
}
const data: DropdownData[] = [
  {
    color: "#F9968B",
    title:
      "How is Content Turbine different from other technical marketing agencies?",
    description:
      "As you can see from our services, we offer the whole suite of services any tech firm needs. When it comes to content specifically, our writers are experts from various disciplines like engineering, technical sales, and marketing. We hold the content we produce to high quality standards and ensure that it is engaging and relevant to your audience.",
  },
  {
    color: "#3B82F6",
    title:
      "Can I just get specific services like whitepapers or blogs from Content Turbine?",
    description:
      "No, you'll have to select one of the packages we've listed above, to begin with. In our free consultation call, we can guide you to select the best package according to your needs and even customize it if required.",
  },
  {
    color: "#0F1B3D",
    title: "Do you offer free trials?",
    description:
      "No, we don't offer free trials. However, you can see our work and get started with a pilot program once you get in touch with us.",
  },
  {
    color: "#F5FBFF",
    title: "How do I get in touch to get started?",
    description: `You can book a free consultation with us from <a href=${conf.calendly_link} target="_blank" rel="noopener noreferrer"> here </a> or you can click the "Let's Chat" button and fill in your details. We'll get back to you soon.`,
  },
];
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

interface DropdownProps {
  color: string;
}

const Dropdown = styled.div<DropdownProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 900px;
  padding: 1.25rem;

  cursor: pointer;
  border-bottom: 1px solid #ccc;
  font-family: "Averta";

  /* border-radius: 17px; */
  /* border: 4px solid ${({ theme }) => theme.colors.text}; */

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
    background-color: ${(props) => props.color};
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

  ${sizeAndDown("md")} {
    font-size: 2.5rem;
  }
`;

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
    <DropdownSection>
      <Heading>Frequently Asked Questions</Heading>
      <DropdownWrapper>
        {data.map((f, index) => (
          <Dropdown
            key={index + f.title}
            color={f.color}
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
              <p dangerouslySetInnerHTML={{ __html: f.description }} />
            )}
          </Dropdown>
        ))}
      </DropdownWrapper>
    </DropdownSection>
  );
}
