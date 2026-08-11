import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { sizeAndDown } from "../styles/responsive";
import { SocialLinks } from "../constants";

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <TopRow>
          <BrandSection>
            <LogoTitle>
              <Link to="/">Content Turbine</Link>
            </LogoTitle>
            <Tagline>Technical Content Built for the Future of Search & AI Discovery</Tagline>
          </BrandSection>
          
          <LinksSection>
            <LinkColumn>
              <ColumnTitle>Company</ColumnTitle>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </LinkColumn>
            <LinkColumn>
              <ColumnTitle>Legal</ColumnTitle>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/cookies">Cookie Policy</FooterLink>
              <FooterLink to="/ai-data-use">AI &amp; Data Use Policy</FooterLink>
            </LinkColumn>
          </LinksSection>

          <SocialSection>
            <ColumnTitle>Connect</ColumnTitle>
            <EmailLink href="mailto:info@contentturbine.com">
              info@contentturbine.com
            </EmailLink>
            <SocialIcons>
              <SocialLink href={SocialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.5835 5.75976C26.6093 6.19143 25.5628 6.48309 24.4627 6.61493C25.5978 5.93568 26.4471 4.86664 26.852 3.60726C25.7855 4.24075 24.6182 4.68665 23.401 4.92559C22.5824 4.0516 21.4982 3.47231 20.3167 3.27765C19.1352 3.08299 17.9225 3.28385 16.8668 3.84906C15.8111 4.41426 14.9716 5.31218 14.4785 6.40341C13.9855 7.49465 13.8665 8.71814 14.14 9.88393C11.979 9.77542 9.8649 9.21374 7.935 8.23532C6.00509 7.2569 4.30248 5.88362 2.93767 4.20459C2.471 5.00959 2.20267 5.94293 2.20267 6.93693C2.20215 7.83176 2.42251 8.71288 2.8442 9.50212C3.26588 10.2914 3.87586 10.9643 4.62 11.4613C3.75699 11.4338 2.91302 11.2006 2.15834 10.7811V10.8511C2.15825 12.1061 2.59238 13.3225 3.38705 14.2939C4.18173 15.2653 5.288 15.9318 6.51817 16.1804C5.71758 16.3971 4.87823 16.429 4.0635 16.2738C4.41058 17.3536 5.08667 18.298 5.9971 18.9745C6.90753 19.6511 8.00674 20.026 9.14084 20.0468C7.21564 21.5581 4.83804 22.3779 2.3905 22.3743C1.95695 22.3744 1.52376 22.3491 1.09317 22.2984C3.57756 23.8958 6.46957 24.7436 9.42317 24.7403C19.4215 24.7403 24.8873 16.4593 24.8873 9.27726C24.8873 9.04393 24.8815 8.80826 24.871 8.57493C25.9342 7.80606 26.8519 6.85397 27.5812 5.76326L27.5835 5.75976Z" fill="currentColor"/>
                </svg>
              </SocialLink>
              <SocialLink href={SocialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.125 3.19275C1.125 2.64435 1.34285 2.11841 1.73063 1.73063C2.11841 1.34285 2.64435 1.125 3.19275 1.125H23.805C24.0768 1.12456 24.346 1.17772 24.5972 1.28145C24.8484 1.38518 25.0766 1.53744 25.2689 1.72951C25.4612 1.92157 25.6137 2.14968 25.7177 2.40076C25.8217 2.65185 25.8751 2.92098 25.875 3.19275V23.805C25.8753 24.0768 25.822 24.346 25.7181 24.5972C25.6143 24.8484 25.4619 25.0767 25.2698 25.269C25.0776 25.4612 24.8494 25.6137 24.5983 25.7177C24.3471 25.8217 24.0779 25.8751 23.8061 25.875H3.19275C2.92111 25.875 2.65214 25.8215 2.4012 25.7175C2.15025 25.6135 1.92226 25.4611 1.73023 25.269C1.53821 25.0768 1.38592 24.8488 1.28208 24.5978C1.17823 24.3468 1.12485 24.0778 1.125 23.8061V3.19275ZM10.9215 10.5615H14.2729V12.2445C14.7566 11.277 15.9941 10.4063 17.8538 10.4063C21.4189 10.4063 22.2638 12.3334 22.2638 15.8693V22.419H18.6559V16.6748C18.6559 14.661 18.1721 13.5248 16.9436 13.5248C15.2393 13.5248 14.5305 14.7499 14.5305 16.6748V22.419H10.9215V10.5615ZM4.734 22.2649H8.343V10.4063H4.734V22.2638V22.2649ZM8.85938 6.5385C8.86618 6.84751 8.81119 7.15476 8.69764 7.44223C8.5841 7.7297 8.41427 7.99159 8.19814 8.21254C7.982 8.43348 7.72391 8.60903 7.43901 8.72888C7.15411 8.84873 6.84815 8.91047 6.53906 8.91047C6.22998 8.91047 5.92401 8.84873 5.63911 8.72888C5.35421 8.60903 5.09612 8.43348 4.87999 8.21254C4.66386 7.99159 4.49403 7.7297 4.38048 7.44223C4.26693 7.15476 4.21195 6.84751 4.21875 6.5385C4.23211 5.93196 4.48243 5.35477 4.91612 4.93052C5.34981 4.50628 5.93238 4.26872 6.53906 4.26872C7.14575 4.26872 7.72832 4.50628 8.162 4.93052C8.59569 5.35477 8.84602 5.93196 8.85938 6.5385Z" fill="currentColor"/>
                </svg>
              </SocialLink>
            </SocialIcons>
          </SocialSection>
        </TopRow>

        <Divider />

        <BottomRow>
          <Copyright>© 2026 Content Turbine</Copyright>
          <BottomLinks>
            <Link to="/privacy">Privacy</Link>
            <span>•</span>
            <Link to="/terms">Terms</Link>
          </BottomLinks>
        </BottomRow>
      </Container>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 4rem 2rem 2rem;

  ${sizeAndDown("md")} {
    padding: 3rem 1.5rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 3rem;

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const BrandSection = styled.div``;

const LogoTitle = styled.h2`
  font-family: "Gilroy", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1rem;

  a {
    color: ${({ theme }) => theme.colors.light};
    text-decoration: none;
    
    &:hover {
      color: ${({ theme }) => theme.colors.teal};
    }
  }
`;

const Tagline = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.7;
  margin: 0;
  max-width: 300px;
`;

const LinksSection = styled.div`
  display: flex;
  gap: 3rem;

  ${sizeAndDown("md")} {
    gap: 2rem;
  }
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ColumnTitle = styled.h4`
  font-family: "Averta", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.teal};
  margin: 0 0 0.5rem;
`;

const FooterLink = styled(Link)`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.light};
  opacity: 0.8;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.teal};
  }
`;

const SocialSection = styled.div``;

const EmailLink = styled.a`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  display: block;
  margin-bottom: 1rem;
  opacity: 0.8;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.teal};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.light};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 3rem 0 1.5rem;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${sizeAndDown("md")} {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  opacity: 0.6;
  margin: 0;
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 0.875rem;

  a {
    color: ${({ theme }) => theme.colors.light};
    opacity: 0.6;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      opacity: 1;
      color: ${({ theme }) => theme.colors.teal};
    }
  }

  span {
    opacity: 0.4;
  }
`;
