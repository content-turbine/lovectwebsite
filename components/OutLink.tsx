import React from "react";
import styled from "styled-components";
import { sizeAndDown } from "../styles/responsive";

interface OutLinkProps {
  href: string;
  circul: string;
  children: React.ReactChild;
}

const Wrapper = styled.a<{ circul: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 45px;
  height: 45px;
  margin: 1rem;

  img {
    width: 27px;
    height: 27px;
    margin: 0;
  }

  ${sizeAndDown("sm")} {
    margin: 0.75rem;
  }
`;

export default function OutLink({ href, circul, children }: OutLinkProps) {
  return (
    <Wrapper
      href={href}
      circul={circul}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </Wrapper>
  );
}
