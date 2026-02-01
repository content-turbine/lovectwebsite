import Image from "next/image";
import { rgba } from "polished";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { CFade } from "../Animation";
import { MidContent, Title } from "../styled";

const data = [
  "Grow a developer-centric product community",
  "Research and identify new product use cases",
  "Build product ecosystem integrations and demo apps",
  "Scale your digital events to reach more developers",
  "Craft memorable product campaigns",
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (document) {
      document.onmouseover = function (e: any) {
        if (e.target.id.includes("ITEM_")) {
          // console.log(e.target.id);
          setActiveIndex(Number(e.target.id.split("ITEM_")[1]));
        }
      };
    }
  }, [activeIndex]);

  return (
    <Wrapper>
      <Title> Our Solutions </Title>
      <Container>
        <img src={`assets/illustrations/${activeIndex}.svg`} />
        <List>
          <CFade>
            {data.map((item, id) => (
              <ItemContainer
                key={id}
                id={`ITEM_${id}`}
                active={activeIndex === id}
                href={`/services#${id}`}
              >
                <ItemNum>{("0" + ++id).slice(-2)}</ItemNum>
                <ListItem content={item}>{item}</ListItem>
              </ItemContainer>
            ))}
          </CFade>
        </List>
      </Container>
    </Wrapper>
  );
}

const ItemContainer = styled.a<{ active: boolean }>`
  display: flex;
  font-weight: ${(props) => (props.active ? "700" : "normal")};
  text-decoration: none;
  font-family: "Averta";

  &:hover {
    font-weight: 700;
  }
`;

const ItemNum = styled.p`
  font-weight: normal;
  display: inline-block;
  justify-content: center;
  z-index: -1;
  font-size: 3rem;
  font-weight: inherit;
  margin: 0 0.5rem 0 0;
  color: ${({ theme }) => rgba(theme.colors.teal, 0.8)};

  ${sizeAndDown("md")} {
    margin: 0 2rem 0 0;
    font-size: 2.75rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 1rem;
  height: 80vh;

  ${sizeAndDown("md")} {
    padding: 1rem 0.5rem;
    height: fit-content;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    width: 25vw;
    aspect-ratio: 1/1;
    padding: 0 2rem;
  }

  ${sizeAndDown("md")} {
    flex-direction: column;
    img {
      width: 100%;
    }
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 1rem;
  list-style-type: none;

  ${sizeAndDown("md")} {
    width: 100%;
  }
`;

const ListItem = styled.li<{ content: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;

  font-size: 1.4rem;
  margin: 1rem 0;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", sans-serif;
  color: ${({ theme }) => theme.colors.text};
  position: relative;

  cursor: pointer;

  &::after {
    content: "${(props) => props.content}";

    white-space: nowrap;
    overflow: hidden;
    visibility: hidden;
    user-select: none;
    pointer-events: none;
    font-weight: 700;
  }

  ${sizeAndDown("md")} {
    font-size: 1.25rem;
    margin: 0.25rem;
  }
`;
