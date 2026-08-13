import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import toast from "react-hot-toast";
import * as Icon from "react-feather";
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

const STATUS_COLORS: Record<string, string> = {
  Good: "#22C55E",
  "Needs Work": "#F59E0B",
  Weak: "#F59E0B",
};

const statusMetrics = [
  { area: "tl", label: "Retrieval", hint: "Can AI find your content?", status: "Good" },
  { area: "tr", label: "Intent Coverage", hint: "Do you answer key questions?", status: "Needs Work" },
  { area: "ml", label: "Freshness", hint: "Is your content up to date?", status: "Good" },
  { area: "mr", label: "Content Integrity", hint: "Is your content original & safe?", status: "Good" },
  { area: "bottom", label: "Evidence Strength", hint: "Is your content credible?", status: "Weak" },
];

const barMetrics = [
  { label: "Citation Coverage", hint: "How often you're cited", value: 58, color: "#22C55E" },
  { label: "Citation Share", hint: "How often you win", value: 31, color: "#F9968B" },
  { label: "Answer Match", hint: "How well you answer", value: 76, color: "#3B82F6" },
];

const pulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.9; }
`;

const StyledHero = styled.section`
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at 78% 25%, ${({ theme }) => theme.colors.teal}20 0%, transparent 55%),
    linear-gradient(180deg, ${({ theme }) => theme.colors.primary} 0%, #142326 100%);
  padding: 6rem 2rem 5rem;

  &::before {
    content: "";
    position: absolute;
    top: -30%;
    right: -10%;
    width: 60%;
    height: 120%;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.teal}20 0%, transparent 70%);
    animation: ${pulse} 8s ease-in-out infinite;
  }

  ${sizeAndDown("md")} {
    padding: 4rem 1.25rem;
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  ${sizeAndDown("lg")} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Content = styled.div`
  color: #fff;
`;

const Title = styled.h1`
  font-family: "Gilroy", sans-serif;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 1.25rem 0;

  span {
    color: ${({ theme }) => theme.colors.teal};
  }

  ${sizeAndDown("md")} {
    font-size: 2.1rem;
  }
`;

const Subtitle = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65);
  margin: 0 0 2rem 0;
  max-width: 480px;

  strong {
    color: ${({ theme }) => theme.colors.light};
    font-weight: 700;
  }
`;

const Form = styled.form`
  display: flex;
  gap: 0.75rem;
  max-width: 560px;

  ${sizeAndDown("sm")} {
    flex-direction: column;
  }
`;

const EmailInput = styled.input`
  flex: 1.4;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.06);
  padding: 1.1rem 1.25rem;
  font-size: 1.05rem;
  font-family: "Averta", sans-serif;
  color: #fff;

  &::placeholder {
    color: rgba(255, 255, 255, 0.45);
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
  padding: 1.1rem 1.5rem;
  font-family: "Averta", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  white-space: nowrap;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.teal} 0%, ${({ theme }) => theme.colors.primary} 100%);
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.25);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(59, 130, 246, 0.35);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ConfirmationCard = styled.div`
  max-width: 480px;
  padding: 1.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid ${({ theme }) => theme.colors.teal}40;
  color: #fff;
  font-size: 1.05rem;
`;

const ReportCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.75rem 2rem;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
`;

const ReportHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const ReportTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const ReportTitle = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.text};
`;

const SampleTag = styled.span`
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.peach};
  background: ${({ theme }) => theme.colors.peach}15;
  border: 1px solid ${({ theme }) => theme.colors.peach}40;
  padding: 0.15rem 0.5rem;
  border-radius: 100px;
`;

const ReportDomain = styled.span`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.4);
`;

const ScoreArea = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas:
    "tl gauge tr"
    "ml gauge mr"
    ".  bottom  .";
  align-items: center;
  gap: 0.5rem 1rem;
  margin-bottom: 1.5rem;

  ${sizeAndDown("sm")} {
    grid-template-columns: 1fr;
    grid-template-areas:
      "gauge"
      "tl"
      "tr"
      "ml"
      "mr"
      "bottom";
    text-align: center;
    justify-items: center;
  }
`;

const MetricBlock = styled.div<{ $area: string }>`
  grid-area: ${({ $area }) => $area};
`;

const MetricLabel = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.2rem;
`;

const MetricHint = styled.p`
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.4);
  margin: 0 0 0.4rem;
  line-height: 1.4;
`;

const StatusBadge = styled.span<{ $status: string }>`
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  padding: 0.15rem 0.5rem;
  border-radius: 6px;
  color: ${({ $status }) => STATUS_COLORS[$status]};
  background: ${({ $status }) => STATUS_COLORS[$status]}18;
`;

const Gauge = styled.div<{ $pct: number }>`
  grid-area: gauge;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: conic-gradient(
    #22c55e 0deg ${({ $pct }) => $pct * 1.2}deg,
    #f59e0b ${({ $pct }) => $pct * 1.2}deg ${({ $pct }) => $pct * 1.2 + 65}deg,
    ${({ theme }) => theme.colors.teal} ${({ $pct }) => $pct * 1.2 + 65}deg 360deg
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const GaugeInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GaugeScore = styled.span`
  font-family: "Gilroy", sans-serif;
  font-size: 2.25rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1;
`;

const GaugeMax = styled.span`
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 0.3rem;
`;

const GaugeCaption = styled.span`
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: rgba(0, 0, 0, 0.4);
`;

const Divider = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  margin: 0 0 1.5rem;
`;

const BarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-bottom: 1.5rem;

  ${sizeAndDown("sm")} {
    grid-template-columns: 1fr;
  }
`;

const BarLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
  margin: 0 0 0.3rem;
`;

const BarValue = styled.p`
  font-family: "Gilroy", sans-serif;
  font-size: 1.75rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.2rem;
`;

const BarHint = styled.p`
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.4);
  margin: 0 0 0.5rem;
`;

const BarTrack = styled.div`
  height: 6px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

const BarFill = styled.div<{ $pct: number; $color: string }>`
  height: 100%;
  width: ${({ $pct }) => $pct}%;
  background: ${({ $color }) => $color};
  border-radius: 4px;
`;

const ReportFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
`;

const FooterMuted = styled.span`
  color: rgba(0, 0, 0, 0.4);
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
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
      toast.success("Thanks. Our team is putting together your AI visibility report and will reach out to walk you through it.");
    } catch (err) {
      setStatus("idle");
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <StyledHero>
      <Container>
        <CFade>
          <Grid>
            <Content>
              <Title>
                See how visible your brand is <span>in AI answers.</span>
              </Title>
              <Subtitle>
                ChatGPT, Gemini, and Perplexity are already citing someone in your space.{" "}
                <strong>Our expert content team makes sure it's you.</strong>
              </Subtitle>

              {status === "submitted" ? (
                <ConfirmationCard>
                  Thanks. Our team is putting together your AI visibility report and will
                  reach out to walk you through it.
                </ConfirmationCard>
              ) : (
                <Form onSubmit={handleSubmit} id="get-report">
                  <EmailInput
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "submitting"}
                  />
                  <SubmitButton type="submit" disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending..." : "Get AI visibility report"}
                  </SubmitButton>
                </Form>
              )}
            </Content>

            <ReportCard>
              <ReportHeader>
                <ReportTitleRow>
                  <ReportTitle>AI VISIBILITY REPORT</ReportTitle>
                  <SampleTag>Sample</SampleTag>
                </ReportTitleRow>
                <ReportDomain>acme.com</ReportDomain>
              </ReportHeader>

              <ScoreArea>
                {statusMetrics
                  .filter((m) => m.area !== "bottom")
                  .map((m) => (
                    <MetricBlock key={m.label} $area={m.area}>
                      <MetricLabel>{m.label}</MetricLabel>
                      <MetricHint>{m.hint}</MetricHint>
                      <StatusBadge $status={m.status}>{m.status}</StatusBadge>
                    </MetricBlock>
                  ))}

                <Gauge $pct={64}>
                  <GaugeInner>
                    <GaugeMax>/100</GaugeMax>
                    <GaugeScore>64</GaugeScore>
                    <GaugeCaption>AI VISIBILITY SCORE</GaugeCaption>
                  </GaugeInner>
                </Gauge>

                {statusMetrics
                  .filter((m) => m.area === "bottom")
                  .map((m) => (
                    <MetricBlock key={m.label} $area={m.area}>
                      <MetricLabel>{m.label}</MetricLabel>
                      <MetricHint>{m.hint}</MetricHint>
                      <StatusBadge $status={m.status}>{m.status}</StatusBadge>
                    </MetricBlock>
                  ))}
              </ScoreArea>

              <Divider />

              <BarGrid>
                {barMetrics.map((bar) => (
                  <div key={bar.label}>
                    <BarLabel>{bar.label}</BarLabel>
                    <BarValue>{bar.value}%</BarValue>
                    <BarHint>{bar.hint}</BarHint>
                    <BarTrack>
                      <BarFill $pct={bar.value} $color={bar.color} />
                    </BarTrack>
                  </div>
                ))}
              </BarGrid>

              <ReportFooter>
                <FooterMuted>Top issues</FooterMuted>
                <FooterLink href="#get-report">
                  Get your real report <Icon.ArrowRight size={14} />
                </FooterLink>
              </ReportFooter>
            </ReportCard>
          </Grid>
        </CFade>
      </Container>
    </StyledHero>
  );
}
