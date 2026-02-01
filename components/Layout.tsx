import React from "react";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import { conf } from "../constants";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MetaData } from "../types";

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
  #__next {
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
  metadata?: MetaData;
  showGraph?: boolean;
}

export default function Layout({ children, metadata, showGraph }: LayoutProps) {
  const data = {
    title: metadata?.title ?? conf.name,
    url: conf.deploy_url + (metadata?.url ?? ""),
    description:
      metadata?.description ??
      "Content Turbine - Turbocharge your product-led growth journey",
    image: metadata?.image || conf.deploy_url + "/social.png",
  };

  return (
    <LayoutContainer>
      <GlobalStyle />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta charSet="UTF-8" />
        <title>{data.title}</title>
        <meta name="title" content={data.title} />
        <meta name="description" content={data.description} />
        {/* TODO: get company tagline and generate metatags, change favicon */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="keywords" content="Content Turbine"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={data.url} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content="Content Turbine" />
        <meta property="og:image" content={data.image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={data.url} />
        <meta property="twitter:title" content={data.title} />
        <meta property="twitter:description" content={data.description} />
        <meta property="twitter:image" content={data.image} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;800;900&family=Inter:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="text/javascript"
          async
          dangerouslySetInnerHTML={{
            __html: `
            window._mfq = window._mfq || [];
            (function() {
              var mf = document.createElement("script");
              mf.type = "text/javascript"; mf.defer = true;
              mf.src = "//cdn.mouseflow.com/projects/5b707b10-f83f-42ce-995d-14703ddfd80c.js";
              document.getElementsByTagName("head")[0].appendChild(mf);
            })();
        `,
          }}
        />
        {/* Contact us form */}
        <script
          type="text/javascript"
          async
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
              .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
              n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
              (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
              ml('account', '40706');
            `,
          }}
        />
      </Head>

      <Navbar />

      <Main>
        {children}
        <script
          type="text/javascript"
          async
          dangerouslySetInnerHTML={{
            __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6273e4b2b0d10b6f3e70c5b7/1g2abamh5';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
              `,
          }}
        ></script>
      </Main>

      <Footer />
    </LayoutContainer>
  );
}
