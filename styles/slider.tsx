import { ChevronLeft, ChevronRight } from "react-feather";
import styled from "styled-components";
import { sizeAndDown } from "./responsive";

const Icon = styled.div`
  height: 20px;
  width: 20px;
  z-index: 99;

  margin: 0 -2rem;

  svg {
    border: 2px solid #bababa;
    border-radius: 50%;

    color: #bababa;

    transition: 0.25s all;

    &:hover {
      color: #bababa;
      transform: scale(1.1);
    }
  }

  ${sizeAndDown("md")} {
    margin: 0 0.5rem;
  }
`;

export function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Icon className={className} style={{ ...style }} onClick={onClick}>
      <ChevronRight />
    </Icon>
  );
}

export function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Icon className={className} style={{ ...style }} onClick={onClick}>
      <ChevronLeft />
    </Icon>
  );
}
