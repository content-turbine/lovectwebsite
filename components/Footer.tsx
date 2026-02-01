import Link from "next/link";
import React, { useContext } from "react";
import styled from "styled-components";
import { sizeAndDown } from "../styles/responsive";
import { conf } from "../constants";
import OutLink from "./OutLink";
import { navbar_links, ScrollLink } from "./Navbar";
import { SocialLinks } from "../constants";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="row">
        <div className="info">
          <h2>
            <Link href="/">Content Turbine</Link>
          </h2>
          <a href="mailto:info@contentturbine.com" id="mail">
            info@contentturbine.com
          </a>
          <div className="contacts">
            <OutLink href={SocialLinks.twitter} circul="#FEBB07">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5835 5.75976C26.6093 6.19143 25.5628 6.48309 24.4627 6.61493C25.5978 5.93568 26.4471 4.86664 26.852 3.60726C25.7855 4.24075 24.6182 4.68665 23.401 4.92559C22.5824 4.0516 21.4982 3.47231 20.3167 3.27765C19.1352 3.08299 17.9225 3.28385 16.8668 3.84906C15.8111 4.41426 14.9716 5.31218 14.4785 6.40341C13.9855 7.49465 13.8665 8.71814 14.14 9.88393C11.979 9.77542 9.8649 9.21374 7.935 8.23532C6.00509 7.2569 4.30248 5.88362 2.93767 4.20459C2.471 5.00959 2.20267 5.94293 2.20267 6.93693C2.20215 7.83176 2.42251 8.71288 2.8442 9.50212C3.26588 10.2914 3.87586 10.9643 4.62 11.4613C3.75699 11.4338 2.91302 11.2006 2.15834 10.7811V10.8511C2.15825 12.1061 2.59238 13.3225 3.38705 14.2939C4.18173 15.2653 5.288 15.9318 6.51817 16.1804C5.71758 16.3971 4.87823 16.429 4.0635 16.2738C4.41058 17.3536 5.08667 18.298 5.9971 18.9745C6.90753 19.6511 8.00674 20.026 9.14084 20.0468C7.21564 21.5581 4.83804 22.3779 2.3905 22.3743C1.95695 22.3744 1.52376 22.3491 1.09317 22.2984C3.57756 23.8958 6.46957 24.7436 9.42317 24.7403C19.4215 24.7403 24.8873 16.4593 24.8873 9.27726C24.8873 9.04393 24.8815 8.80826 24.871 8.57493C25.9342 7.80606 26.8519 6.85397 27.5812 5.76326L27.5835 5.75976Z"
                  fill="white"
                />
              </svg>
            </OutLink>
            <OutLink href={SocialLinks.linkedin} circul="#FFA401">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.125 3.19275C1.125 2.64435 1.34285 2.11841 1.73063 1.73063C2.11841 1.34285 2.64435 1.125 3.19275 1.125H23.805C24.0768 1.12456 24.346 1.17772 24.5972 1.28145C24.8484 1.38518 25.0766 1.53744 25.2689 1.72951C25.4612 1.92157 25.6137 2.14968 25.7177 2.40076C25.8217 2.65185 25.8751 2.92098 25.875 3.19275V23.805C25.8753 24.0768 25.822 24.346 25.7181 24.5972C25.6143 24.8484 25.4619 25.0767 25.2698 25.269C25.0776 25.4612 24.8494 25.6137 24.5983 25.7177C24.3471 25.8217 24.0779 25.8751 23.8061 25.875H3.19275C2.92111 25.875 2.65214 25.8215 2.4012 25.7175C2.15025 25.6135 1.92226 25.4611 1.73023 25.269C1.53821 25.0768 1.38592 24.8488 1.28208 24.5978C1.17823 24.3468 1.12485 24.0778 1.125 23.8061V3.19275ZM10.9215 10.5615H14.2729V12.2445C14.7566 11.277 15.9941 10.4063 17.8538 10.4063C21.4189 10.4063 22.2638 12.3334 22.2638 15.8693V22.419H18.6559V16.6748C18.6559 14.661 18.1721 13.5248 16.9436 13.5248C15.2393 13.5248 14.5305 14.7499 14.5305 16.6748V22.419H10.9215V10.5615ZM4.734 22.2649H8.343V10.4063H4.734V22.2638V22.2649ZM8.85938 6.5385C8.86618 6.84751 8.81119 7.15476 8.69764 7.44223C8.5841 7.7297 8.41427 7.99159 8.19814 8.21254C7.982 8.43348 7.72391 8.60903 7.43901 8.72888C7.15411 8.84873 6.84815 8.91047 6.53906 8.91047C6.22998 8.91047 5.92401 8.84873 5.63911 8.72888C5.35421 8.60903 5.09612 8.43348 4.87999 8.21254C4.66386 7.99159 4.49403 7.7297 4.38048 7.44223C4.26693 7.15476 4.21195 6.84751 4.21875 6.5385C4.23211 5.93196 4.48243 5.35477 4.91612 4.93052C5.34981 4.50628 5.93238 4.26872 6.53906 4.26872C7.14575 4.26872 7.72832 4.50628 8.162 4.93052C8.59569 5.35477 8.84602 5.93196 8.85938 6.5385Z"
                  fill="white"
                />
              </svg>
            </OutLink>
          </div>
        </div>
        <div className="links">
          {navbar_links.map((l) => (
            <ScrollLink
              key={"nav_link_" + l.name}
              name={l.name}
              pathname={l.pathname}
              menuOpen={false}
              setMenuClosed={() => {}}
              isButton={false}
            />
          ))}
        </div>
      </div>

      <div className="stuff">
        <ul>
          <li>
            <Link href="/">Content Turbine</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem 1rem;

  background: ${({ theme }) => theme.colors.primary};

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;

    .links {
      display: flex;
      align-items: center;
      justify-content: center;

      .list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: white;
        margin: 1rem;

        ul {
          display: flex;
          flex-direction: column;
          text-align: left;
          list-style-type: square;
          padding: 0 0.5rem;

          a {
            margin: 0;
            &:hover {
              color: ${({ theme }) => theme.colors.teal};
            }
          }
        }
      }
    }
  }

  .details {
    display: flex;
  }

  a {
    color: ${({ theme }) => theme.colors.background};
  }

  .info {
    width: 30vw;
    color: ${({ theme }) => theme.colors.background};

    h2 {
      font-weight: 500;
    }
  }

  a {
    text-decoration: none;
    margin: 0 2rem;
  }

  .contacts {
    display: flex;

    svg {
      path {
        fill: ${({ theme }) => theme.colors.background};
      }
    }
  }

  .links {
    text-align: right;
  }

  .stuff {
    width: 100vw;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      list-style-type: none;

      margin: 0;
      padding: 0.3rem;
      li {
        white-space: nowrap;
      }
      li + li::before {
        content: "|";
        padding: 0 0.5rem;
      }
    }

    a {
      &:hover {
        color: ${({ theme }) => theme.colors.teal};
      }
    }
  }

  ${sizeAndDown("md")} {
    flex-direction: column;
    padding: 1rem;

    .row {
      flex-direction: column;
    }

    .info {
      width: 100%;
    }

    a {
      margin: 0 0.5rem;
    }
  }
`;
