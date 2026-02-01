import { ChevronLeft, ChevronRight } from "react-feather";
import styled from "styled-components";
import { sizeAndDown } from "./responsive";
import React from "react";

const Icon = styled.div<{ className?: string; onClick?: () => void }>`
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

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function NextArrow({ className, style, onClick }: ArrowProps) {
  return (
    <Icon className={className} style={{ ...style }} onClick={onClick}>
      <ChevronRight />
    </Icon>
  );
}

export function PrevArrow({ className, style, onClick }: ArrowProps) {
  return (
    <Icon className={className} style={{ ...style }} onClick={onClick}>
      <ChevronLeft />
    </Icon>
  );
}
