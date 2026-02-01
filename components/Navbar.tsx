import React, { useState } from "react";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import { conf } from "../constants";
import { A } from "./styled";
import { rgba } from "polished";
import { sizeAndDown } from "../styles/responsive";
import * as Icon from "react-feather";
import { useRouter } from "next/router";
import Image from "next/image";
interface NLinkProps {
  name: string;
  pathname: string;
  isButton: boolean;
}

export const navbar_links: NLinkProps[] = [
  {
    name: "Home",
    pathname: "/",
    isButton: false,
  },
  {
    name: "Services",
    pathname: "/services",
    isButton: false,
  },
  {
    name: "About",
    pathname: "/about",
    isButton: false,
  },
  {
    name: "For Creator",
    pathname: "/freelance",
    isButton: false,
  },
  // {
  //   name: "AI",
  //   pathname: "/ai",
  //   isButton: false,
  // },
  {
    name: "Let's Chat",
    pathname: "/contact",
    isButton: true,
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (document !== null && window !== null) {
      const el = document.getElementById("navbar");
      console.log(el?.offsetTop);
      if (el && el?.offsetTop > 400 && !menuOpen) {
        window.scrollTo({
          top: el?.offsetTop,
          behavior: "smooth",
        });
      }
    }
    setMenuOpen(!menuOpen);
  };

  const mlinks_comp = (
    <MLinks menuOpen={menuOpen} id="nav_links">
      {navbar_links.map((l: NLinkProps) => (
        <ScrollLink
          key={"nav_link_" + l.name}
          name={l.name}
          pathname={l.pathname}
          menuOpen={menuOpen}
          setMenuClosed={toggleMenu}
          isButton={l.isButton}
        />
      ))}
    </MLinks>
  );

  return (
    <>
      <Nav menuOpen={menuOpen} id="navbar">
        <div className="logo">
          <Link href="/">
            <Logo>
              <img src={"/assets/logo.svg"} alt="Content Turbine Logo" />
            </Logo>
          </Link>
        </div>
        <Hamburger onClick={toggleMenu}>
          {menuOpen ? <Icon.X></Icon.X> : <Icon.Menu></Icon.Menu>}
        </Hamburger>
        <DLinkWrapper>{mlinks_comp}</DLinkWrapper>
      </Nav>
      <MLinkWrapper menuOpen={menuOpen}>{mlinks_comp}</MLinkWrapper>
    </>
  );
}

interface ScrollLinkProps extends NLinkProps {
  setMenuClosed: () => void;
  menuOpen: boolean;
  isButton: boolean;
}

export const ScrollLink = function NavLink(props: ScrollLinkProps) {
  return (
    <NavA
      href={props.pathname}
      rel="noopener noreferrer"
      isButton={props.isButton}
    >
      {props.name}
    </NavA>
  );
};

const FadeInAnimation = keyframes`  
  from { 
    opacity: 0; 
    transform: translateX(100px) 
  }
  to { 
    opacity: 1; 
    transform: translateX(0px) 
  }
`;

const NavA = styled(A)<{ isButton: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 2rem;
  color: ${({ theme }) => theme.colors.light};
  transition: all 0.2s ease-in-out;

  &::before {
    content: "";
    width: 0;
    height: 2px;

    position: absolute;
    left: 0;
    bottom: -0.5rem;
    background-color: ${({ theme }) => theme.colors.teal};
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    visibility: visible;
    width: 100%;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.teal};
  }
  &:active {
    transform: scale(0.9);
  }

  ${(props) =>
    props.isButton &&
    css`
      background-color: ${({ theme }) => theme.colors.peach};
      padding: 0.75rem;
      border-radius: 10px;

      &:hover {
        transform: scale(1.1);
        color: #fff;
      }

      &::before {
        content: none;
      }
    `}

  ${sizeAndDown("lg")} {
    margin: 0 1rem;
  }
  ${sizeAndDown("md")} {
    animation-name: ${FadeInAnimation};
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: both;
    animation-play-state: running;
  }
`;

const Nav = styled.nav<mobileProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 8rem;
  margin: 0 auto;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  ${sizeAndDown("sm")} {
    padding: 0.5rem 1rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  ${sizeAndDown("md")} {
    display: inherit;
    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

// For desktop
const DLinkWrapper = styled.div`
  position: relative;
  ${sizeAndDown("md")} {
    display: none;
  }
`;

interface mobileProps {
  menuOpen: boolean;
}

const MLinkWrapper = styled.div<mobileProps>`
  position: fixed;
  top: 4rem;
  display: none;
  z-index: 2000;
  ${sizeAndDown("md")} {
    width: 94vw;
    margin: 2rem 3vw;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => rgba(theme.colors.light, 0.2)};

    ${(props) =>
      props.menuOpen &&
      css`
        display: inherit;
      `}
  }
  overflow: hidden;
  padding: 3rem 0;
`;

const MLinks = styled.div<mobileProps>`
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  font-family: "Averta";
  font-weight: bold;

  ${sizeAndDown("md")} {
    display: none;
    animation-name: ${FadeInAnimation};
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: both;
    animation-play-state: running;

    /* width: 100vw; */
    ${(props) =>
      props.menuOpen &&
      css`
        /* position: relative; */
        /* margin: 0rem -2rem; */
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        width: 94vw;

        ${NavA} {
          font-size: 2rem;
          margin: 1rem 0;
        }
      `}
  }
`;

const Logo = styled(A)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;

  img {
    margin-right: 1rem;
    height: 90px;
    aspect-ratio: 1/1;
  }
`;
