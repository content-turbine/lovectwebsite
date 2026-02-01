import styled, { css } from "styled-components";
import { sizeAndDown } from "../styles/responsive";

export const mixins = {
  hover: () => css`
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
    &:active {
      transform: scale(1);
    }
  `,
};

export const Section = styled.section`
  max-width: 1400px;
  margin: 5rem auto;

  ${sizeAndDown("md")} {
    margin: 3rem auto;
    padding: 0.5rem;
  }
`;

export const Section1 = styled.section`
  max-width: 1400px;
  margin: 5rem auto;

  .change_color {
    color: ${({ theme }) => theme.colors.text};
    font-family: arial;
    font-size: 20px;
  }

  ${sizeAndDown("md")} {
    margin: 3rem auto;
    padding: 0.5rem;
  }
`;

export const Title1 = styled.h1`
  font-size: 2.7rem;
  color: ${({ theme }) => theme.colors.text};
  ${sizeAndDown("md")} {
    font-size: 2.4rem;
  }
`;

export const Title = styled.h1`
  font-family: "Gilroy", sans-serif;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  border-bottom: 2px solid ${({ theme }) => theme.colors.teal};

  ${sizeAndDown("md")} {
    font-size: 2.4rem;
  }
`;

export const Para = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  margin: 2rem 0;
  font-family: "Averta";

  ${sizeAndDown("md")} {
    font-size: 1.4rem;
  }
`;

export const Para1 = styled.p`
  font-size: 1.35rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;

  ${sizeAndDown("md")} {
    font-size: 1.4rem;
  }
`;

export const Para2 = styled.p`
  font-size: 1.35rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;

  ${sizeAndDown("md")} {
    font-size: 1.4rem;
  }
`;

export const Para3 = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;

  ${sizeAndDown("md")} {
    font-size: 1.4rem;
  }
`;

export const MidContent = styled.div`
  max-width: 40vw;
  margin: 0 2rem;

  ${sizeAndDown("md")} {
    max-width: 95vw;
  }
`;

export const A = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Button = styled(A)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.light};
  font-family: "Averta";
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.peach};

  padding: 1rem 2rem;
  margin: 3px;
  width: 250px;
  border-radius: ${({ theme }) => theme.borderRadius};

  width: fit-content;
  &:hover {
    color: ${({ theme }) => theme.colors.light};
  }
  ${mixins.hover()}
`;

export const InputButton = styled.input`
  display: inline-block;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1rem;
  font-family: "Averta";
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.peach};
  border: none;
  cursor: pointer;

  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};

  width: fit-content;
  &:hover {
    color: ${({ theme }) => theme.colors.light};
  }
  ${mixins.hover()}
`;

export const Input = styled.input`
  border-radius: 10px;
  border: none;
  padding: 0.75rem;
  margin: 1rem 0;

  font-size: 1.25rem;
  line-height: 2rem;
  font-family: "Averta";

  &::placeholder {
    color: #7a7878;
  }
`;
