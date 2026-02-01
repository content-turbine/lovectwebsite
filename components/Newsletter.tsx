import axios from "axios";
import Image from "next/image";
import { toNamespacedPath } from "path";
import { rgba } from "polished";
import { useState } from "react";
import styled from "styled-components";
import { sizeAndDown } from "../styles/responsive";
import { Button, Input, Title } from "./styled";
import toast, { Toaster } from "react-hot-toast";
import { CFade } from "./Animation";

export default function Newsletter() {
  const [email, setEmail] = useState<string>();

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
      .then((response) => {
        toast.success("Thank you for submitting the form.");
        setEmail("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
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
              onChange={(event) => setEmail(event.target.value)}
            />
            <Button onClick={handleSubmit}>Subscribe</Button>
          </Form>
        </div>
        <img src={"assets/illustrations/mail.svg"} />
      </CFade>

      <Toaster position="bottom-center" reverseOrder={false} />
    </Container>
  );
}

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

  h1 {
    margin: 1rem 0 1rem 0;
  }
`;

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
