import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { rgba } from "polished";
import { sizeAndDown } from "../styles/responsive";
import * as Icon from "react-feather";
import { serviceDetails } from "../src/data/serviceDetails";

interface NLinkProps {
  name: string;
  pathname: string;
  isButton: boolean;
  isDropdown?: boolean;
  dropdownItems?: { name: string; pathname: string }[];
}

const resourceDropdownItems = [
  { name: "AI Content Framework", pathname: "/resources/ai-content-framework" },
  { name: "Content Audit Checklist", pathname: "/resources/content-audit-checklist" },
  { name: "AEO Playbook", pathname: "/resources/aeo-playbook" },
];

const serviceDropdownItems = [
  ...serviceDetails.map((s) => ({ name: s.navName, pathname: `/services/${s.slug}` })),
  { name: "All Services", pathname: "/services" },
];

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
    isDropdown: true,
    dropdownItems: serviceDropdownItems,
  },
  {
    name: "Resources",
    pathname: "/resources",
    isButton: false,
    isDropdown: true,
    dropdownItems: resourceDropdownItems,
  },
  {
    name: "About",
    pathname: "/about",
    isButton: false,
  },
  {
    name: "Blog",
    pathname: "/blog",
    isButton: false,
  },
  {
    name: "Let's Chat",
    pathname: "/contact",
    isButton: true,
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    if (document !== null && window !== null) {
      const el = document.getElementById("navbar");
      if (el && el?.offsetTop > 400 && !menuOpen) {
        window.scrollTo({
          top: el?.offsetTop,
          behavior: "smooth",
        });
      }
    }
    setMenuOpen(!menuOpen);
  };

  const renderNavLink = (l: NLinkProps, isMobile: boolean = false) => {
    if (l.isDropdown && l.dropdownItems) {
      const isOpen = openDropdown === l.name;
      return (
        <DropdownContainer
          key={"nav_link_" + l.name}
          onMouseEnter={() => !isMobile && setOpenDropdown(l.name)}
          onMouseLeave={() => !isMobile && setOpenDropdown(null)}
        >
          <DropdownTrigger
            $isButton={false}
            onClick={() => isMobile && setOpenDropdown(isOpen ? null : l.name)}
          >
            {l.name}
            <Icon.ChevronDown size={16} style={{ marginLeft: "4px" }} />
          </DropdownTrigger>
          <DropdownMenu $isOpen={isMobile ? isOpen : undefined} $isMobile={isMobile}>
            {l.dropdownItems.map((item) => (
              <DropdownItem
                key={item.pathname}
                to={item.pathname}
                onClick={() => {
                  if (menuOpen) toggleMenu();
                  setOpenDropdown(null);
                }}
              >
                {item.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </DropdownContainer>
      );
    }

    return (
      <NavLinkStyled
        key={"nav_link_" + l.name}
        to={l.pathname}
        $isButton={l.isButton}
        onClick={() => menuOpen && toggleMenu()}
      >
        {l.name}
        {l.isButton && <Icon.MessageCircle size={16} style={{ marginLeft: "6px" }} />}
      </NavLinkStyled>
    );
  };

  const mlinks_comp = (
    <MLinks $menuOpen={menuOpen}>
      {navbar_links.map((l) => renderNavLink(l, false))}
    </MLinks>
  );

  const mobileLinks_comp = (
    <MLinks $menuOpen={menuOpen}>
      {navbar_links.map((l) => renderNavLink(l, true))}
    </MLinks>
  );

  return (
    <>
      <Nav id="navbar">
        <div className="logo">
          <Link to="/">
            <Logo>
              <img src={"/assets/logo.svg"} alt="Content Turbine Logo" />
            </Logo>
          </Link>
        </div>
        <Hamburger onClick={toggleMenu}>
          {menuOpen ? <Icon.X /> : <Icon.Menu />}
        </Hamburger>
        <DLinkWrapper>{mlinks_comp}</DLinkWrapper>
      </Nav>
      <MLinkWrapper $menuOpen={menuOpen}>{mobileLinks_comp}</MLinkWrapper>
    </>
  );
}

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

const NavLinkStyled = styled(Link)<{ $isButton: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 2rem;
  color: ${({ theme }) => theme.colors.light};
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;

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
    props.$isButton &&
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

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  ${sizeAndDown("md")} {
    flex-direction: column;
    width: 100%;
  }
`;

const DropdownTrigger = styled.span<{ $isButton: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 2rem;
  color: ${({ theme }) => theme.colors.light};
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.teal};
  }

  ${sizeAndDown("lg")} {
    margin: 0 1rem;
  }

  ${sizeAndDown("md")} {
    font-size: 2rem;
    margin: 1rem 0;
    justify-content: center;
  }
`;

const DropdownMenu = styled.div<{ $isOpen?: boolean; $isMobile?: boolean }>`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => rgba(theme.colors.light, 0.15)};
  border-radius: 12px;
  padding: 0.5rem 0;
  min-width: 220px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease-in-out;
  z-index: 100;
  margin-top: 0.5rem;

  ${DropdownContainer}:hover & {
    opacity: 1;
    visibility: visible;
  }

  ${({ $isMobile, $isOpen }) =>
    $isMobile &&
    css`
      position: static;
      transform: none;
      width: 100%;
      margin-top: 0;
      border: none;
      padding: 0.5rem 0;
      background: transparent;
      opacity: ${$isOpen ? 1 : 0};
      visibility: ${$isOpen ? "visible" : "hidden"};
      max-height: ${$isOpen ? "300px" : "0"};
      overflow: hidden;
      text-align: center;

      ${DropdownContainer}:hover & {
        opacity: ${$isOpen ? 1 : 0};
        visibility: ${$isOpen ? "visible" : "hidden"};
      }
    `}
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.75rem 1.25rem;
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => rgba(theme.colors.teal, 0.15)};
    color: ${({ theme }) => theme.colors.teal};
  }

  ${sizeAndDown("md")} {
    font-size: 1.25rem;
    padding: 0.75rem 0;
    text-align: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 8rem;
  margin: 0 auto;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.primary};
  ${sizeAndDown("sm")} {
    padding: 0.5rem 1rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.light};
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

interface MobileProps {
  $menuOpen: boolean;
}

const MLinkWrapper = styled.div<MobileProps>`
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
      props.$menuOpen &&
      css`
        display: inherit;
      `}
  }
  overflow: hidden;
  padding: 3rem 0;
`;

const MLinks = styled.div<MobileProps>`
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

    ${(props) =>
      props.$menuOpen &&
      css`
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        width: 94vw;

        ${NavLinkStyled} {
          font-size: 2rem;
          margin: 1rem 0;
        }
      `}
  }
`;

const Logo = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  text-decoration: none;
  cursor: pointer;

  img {
    margin-right: 1rem;
    height: 90px;
    aspect-ratio: 1/1;
  }
`;
