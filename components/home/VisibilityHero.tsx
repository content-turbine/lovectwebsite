import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import toast from "react-hot-toast";
import { z } from "zod";
import { CFade } from "../Animation";
import { sizeAndDown } from "../../styles/responsive";
import { isWorkEmail } from "../../src/utils/workEmail";

const leadSchema = z.object({
  email: z
    .string()
    .min(1, "Enter your work email.")
    .refine((value) => isWorkEmail(value), {
      message: "Please use a company email address, not a personal one.",
    }),
});

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
`;

const StyledHero = styled.section`
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, #1a3a40 100%);
  padding: 6rem 2rem;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -20%;
    width: 80%;
    height: 150%;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.teal}15 0%, transparent 70%);
    animation: ${pulse} 8s ease-in-out infinite;
  }

  ${sizeAndDown("md")} {
    padding: 4rem 1.5rem;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
`;

const Eyebrow = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.teal};
  margin-bottom: 1.5rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.teal}20;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.teal}40;
`;

const Title = styled.h1`
  font-family: "Gilroy", sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 1.5rem 0;

  span {
    color: ${({ theme }) => theme.colors.teal};
  }

  ${sizeAndDown("md")} {
    font-size: 2.25rem;
  }
`;

const Subtitle = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 1.25rem;
  line-height: 1.7;
  opacity: 0.9;
  margin: 0 auto 2.5rem;
  max-width: 560px;

  ${sizeAndDown("md")} {
    font-size: 1.1rem;
  }
`;

const Form = styled.form`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  max-width: 480px;
  margin: 0 auto;

  ${sizeAndDown("sm")} {
    flex-direction: column;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.08);
  padding: 1rem 1.25rem;
  font-size: 1rem;
  font-family: "Averta", sans-serif;
  color: ${({ theme }) => theme.colors.light};

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.teal};
  }
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.75rem;
  font-family: "Averta", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  white-space: nowrap;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const TrustLine = styled.p`
  margin: 1.25rem 0 0;
  font-size: 0.85rem;
  opacity: 0.65;
`;

const ConfirmationCard = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid ${({ theme }) => theme.colors.teal}40;
  font-size: 1.05rem;
`;

type FormStatus = "idle" | "submitting" | "submitted";

export default function VisibilityHero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = leadSchema.safeParse({ email });
    if (!validation.success) {
      toast.error(validation.error.issues[0].message);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/lead-notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: validation.data.email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("submitted");
      toast.success("Thanks -- our team will reach out to schedule your strategy call.");
    } catch (err) {
      setStatus("idle");
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <StyledHero>
      <Container>
        <CFade>
          <Eyebrow>Answer Engine Optimization</Eyebrow>
          <Title>
            See how visible your brand is <span>in AI answers</span>
          </Title>
          <Subtitle>
            ChatGPT, Gemini, and Perplexity are already citing someone in your space. Our
            content team makes sure it&apos;s you -- talk to us about a strategy built for AI
            answer engines, not just search.
          </Subtitle>

          {status === "submitted" ? (
            <ConfirmationCard>
              Thanks -- our team will reach out to schedule your strategy call.
            </ConfirmationCard>
          ) : (
            <>
              <Form onSubmit={handleSubmit}>
                <EmailInput
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "submitting"}
                />
                <SubmitButton type="submit" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending..." : "Get a Free Strategy Call"}
                </SubmitButton>
              </Form>
              <TrustLine>Company email only &middot; A real person reviews every request</TrustLine>
            </>
          )}
        </CFade>
      </Container>
    </StyledHero>
  );
}
