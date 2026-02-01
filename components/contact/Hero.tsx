import axios from "axios";
import Image from "next/image";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { InputButton, Title } from "../styled";

import { createRef, useEffect, useRef, useState } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

export default function Hero() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const recaptchaRef = useRef(null);

  const onSubmit = async (data: any) => {
    // Execute the reCAPTCHA when the form is submitted
    // @ts-ignore
    recaptchaRef.current.execute();

    axios
      .post("api/form", {
        fields: [
          {
            name: "firstname",
            value: data.firstname,
          },
          {
            name: "lastname",
            value: data.lastname,
          },
          {
            name: "email",
            value: data.email,
          },
          {
            name: "phone",
            value: data.phone,
          },
          {
            name: "message",
            value: data.message,
          },
        ],
        legalConsentOptions: {
          consent: {
            consentToProcess: true,
            text: "I consent to receiving updates from Content Turbine",
          },
        },
      })
      .then((response) => {
        toast.success("Thank you for submitting the form");
        reset();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const onReCAPTCHAChange = async (captchaCode: any) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }

    try {
      const response = await fetch("/api/token", {
        method: "POST",
        body: JSON.stringify({ captcha: captchaCode }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // If the response is ok than show the success alert
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      reset();
    } finally {
      // Reset the reCAPTCHA when the request has failed or succeeeded
      // so that it can be executed again if user submits another email.
      // @ts-ignore
      recaptchaRef.current.reset();
    }
  };

  return (
    <StyledHero>
      <HeroTitle>Contact Us</HeroTitle>
      <Desc>
        Tech leaders trust Content Turbine for high-quality technical marketing
        materials. Let&apos;s chat to discuss how to turbocharge your technical
        content.
      </Desc>
      <Container>
        <img src={"assets/illustrations/contact.svg"} />
        {/* <Form onSubmit={handleSubmit(onSubmit)}>
          <InputRow>
            <Label>First Name</Label>
            <Input
              placeholder="Your first name"
              {...register("firstname", { required: true })}
            />
          </InputRow>

          <InputRow>
            <Label>Last Name</Label>
            <Input
              placeholder="Your last name"
              {...register("lastname", { required: true })}
            />
          </InputRow>

          <InputRow>
            <Label>Company email address</Label>
            <Input
              placeholder="e.g. info@contentturbine.com"
              {...register("email", { required: true })}
            />
          </InputRow>

          <InputRow>
            <Label>Company contact number</Label>
            <Input
              placeholder="e.g. 998 899 898"
              {...register("phone", { required: true })}
            />
          </InputRow>

          <InputRow>
            <Label>Message</Label>
            <TextArea
              rows={3}
              placeholder="Please let us know about your specific requirements so we can come prepared for the call"
              {...register("message")}
            />
          </InputRow>

          <NewsletterCheck>
            <Input
              type="checkbox"
              {...register("consent", { required: false })}
            />
            <p>
              I consent to receiving updates from Content Turbine. Please refer
              to our <Link href="/privacy"> Privacy Policy </Link> for more
              information.
            </p>
          </NewsletterCheck>
          <InputButton type="submit" />
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            onChange={onReCAPTCHAChange}
          />
        </Form> */}
        <div className="ml-embedded" data-form="KDqwWt"></div>
      </Container>

      <Toaster position="bottom-center" reverseOrder={false} />
    </StyledHero>
  );
}

const Desc = styled.p`
  max-width: 85ch;
  font-family: "Averta";
  text-align: center;
  font-size: 1.25rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.teal};
  }
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
`;

const StyledHero = styled.div`
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 1rem 0 2rem 0;
  }

  img {
    width: 100%;
    max-width: 40vw;
    margin: 1rem;
  }

  ${sizeAndDown("md")} {
    img {
      max-width: none;
    }
  }
`;

const HeroTitle = styled(Title)`
  text-align: center;
  font-size: 4rem;
  margin: 2rem 0 0 0;

  font-family: "Gilroy";
  font-weight: 400;
  border: none;
  color: ${({ theme }) => theme.colors.text};

  ${sizeAndDown("md")} {
    margin: 3rem 0 0 0;
    font-size: 2.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${sizeAndDown("md")} {
    flex-direction: column;
  }
`;

const TextArea = styled.textarea`
  font: inherit;
  padding: 0.5rem;
  border-radius: 10px;
  border: none;
  outline: none;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #f7f7f7;
  padding: 1rem;
  border-radius: 16px;

  flex: 1;
  max-width: 35vw;

  ${sizeAndDown("md")} {
    max-width: none;
  }
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 0 1rem 0;
`;

const Label = styled.label`
  font-size: 1rem;
  margin: 0 0 1rem 0;
  font-family: "Averta";
  color: #9d9d9d;
`;

const Input = styled.input`
  font: inherit;
  padding: 0.75rem;
  border-radius: 10px;
  border: none;
  outline: none;

  &[type="checkbox"] {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    appearance: none;
    -webkit-appearance: none;
    background-color: #fff;
    margin: 0;
    border: 2px solid #7a7878;
    border-radius: 4px;
    padding: 0.25rem;
    margin: 0 1rem 0 0;

    &::before {
      content: "";
      width: 1rem;
      height: 1rem;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em ${({ theme }) => theme.colors.peach};
    }

    &:checked::before {
      transform: scale(1);
    }
  }
`;

const NewsletterCheck = styled.div`
  display: flex;
  align-items: center;

  font-family: "Averta";

  a {
    color: ${({ theme }) => theme.colors.teal};
    text-decoration: none;
  }

  p {
    color: #7a7878;
    margin: 1rem 0;
  }
`;
