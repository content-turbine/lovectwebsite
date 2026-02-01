import axios from "axios";
import { rgba } from "polished";
import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { sizeAndDown } from "../styles/responsive";
import { Title } from "./styled";
import toast, { Toaster } from "react-hot-toast";
import { CFade } from "./Animation";

export default function Newsletter() {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = () => {
    axios
      .post("/api/contact", {
        properties: [
          {
            property: "email",
            value: email,
          },
        ],
      })
      .then(() => {
        toast.success("Thank you for submitting the form.");
        setEmail("");
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "An error occurred");
      });
  };

  return (
    <Container>
      <CFade>
        <div>
          <Title>Newsletter</Title>
          <Form>
            <p>All the latest buzz in tech delivered straight to your inbox.</p>
            <Input
              placeholder="Enter your email address"
              value={email}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
            />
            <SubmitButton type="button" onClick={handleSubmit}>Subscribe</SubmitButton>
          </Form>
        </div>
        <img src={"assets/illustrations/mail.svg"} alt="Newsletter" />
      </CFade>

      <Toaster position="bottom-center" reverseOrder={false} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: space-evenly;
  padding: 4rem 1rem;

  background-color: ${({ theme }) => rgba(theme.colors.teal, 0.2)};

  h1 {
    font-weight: 400;
    border: none;
    margin: 0.5rem 0;
    color: #379ddb;
  }

  p {
    font-size: 1.35rem;
    font-family: "Averta";
  }

  img {
    width: 100%;
    max-width: 20vw;
  }

  ${sizeAndDown("md")} {
    flex-direction: column-reverse;

    img {
      max-width: 300px;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
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

const SubmitButton = styled.button`
  display: inline-block;
  color: ${({ theme }) => theme.colors.light};
  font-family: "Averta";
  font-weight: 700;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.peach};
  border: none;
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: fit-content;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.colors.light};
  }
  &:active {
    transform: scale(1);
  }
`;
