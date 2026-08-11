import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";

export const LegalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80ch;
  margin: 3rem auto 5rem;

  ${sizeAndDown("md")} {
    width: auto;
    margin: 2rem 1.5rem 3rem;
  }
`;

export const LegalTitle = styled.h1`
  font-family: "Gilroy", sans-serif;
  font-size: 2.25rem;
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 2px solid ${({ theme }) => theme.colors.teal};
  padding-bottom: 1rem;
  margin: 0 0 0.5rem;

  ${sizeAndDown("md")} {
    font-size: 1.75rem;
  }
`;

export const LegalUpdated = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
  margin: 0 0 2.5rem;
`;

export const LegalH2 = styled.h2`
  font-family: "Gilroy", sans-serif;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 2.5rem 0 1rem;
`;

export const LegalH3 = styled.h3`
  font-family: "Gilroy", sans-serif;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 1.75rem 0 0.75rem;
`;

export const LegalP = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1.1rem;
`;

export const LegalList = styled.ul`
  margin: 0 0 1.1rem;
  padding-left: 1.5rem;

  li {
    font-family: "Averta", sans-serif;
    font-size: 1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.4rem;
  }
`;
