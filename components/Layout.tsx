import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Toaster } from "react-hot-toast";
import { conf } from "../constants";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const siteTitle = conf.name;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    margin: 0;
  }

  .grecaptcha-badge {
    visibility: hidden;
  }

  * {
    min-width: 0;
    min-height: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  html,
  body,
  #root {
    min-height: 100vh;
    overflow-x: hidden;
  }

  html {
    font-family: "Roboto", sans-serif;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: "Averta";
  }
`;

const LayoutContainer = styled.div`
  margin: 0 auto;
  min-height: 100vh;
`;

const Main = styled.div`
  font-size: 16px;
`;

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <Toaster position="bottom-center" />
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
}
