import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import toast from "react-hot-toast";
import { Input } from "../styled";
import { sizeAndDown } from "../../styles/responsive";
import { CITABLE_API_URL, PRODUCT_NAME } from "./config";

interface Scorecard {
  title_coverage_pct: number;
  meta_description_coverage_pct: number;
  canonical_coverage_pct: number;
  json_ld_coverage_pct: number;
  heading_coverage_pct: number;
  headline: string;
}

interface QuickAuditResponse {
  root_url: string;
  pages_crawled: number;
  capped_at: number;
  scorecard: Scorecard;
}

type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "done"; result: QuickAuditResponse }
  | { status: "error"; message: string };

/**
 * Lead-gen widget: takes a URL, calls the real backend's public
 * POST /v1/quick-audit (a small capped crawl -- see answergraph-lite
 * repo docs/openapi.yaml), and renders a scorecard. Not the full product
 * loop -- just enough to prove the point and capture interest.
 */
export default function FreeAuditWidget() {
  const [url, setUrl] = useState("");
  const [state, setState] = useState<State>({ status: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      toast.error("Enter a website URL first.");
      return;
    }

    let normalized = url.trim();
    if (!/^https?:\/\//i.test(normalized)) normalized = `https://${normalized}`;

    setState({ status: "loading" });
    try {
      const res = await fetch(`${CITABLE_API_URL}/v1/quick-audit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ root_url: normalized }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "That site couldn't be audited. Check the URL and try again.");
      }
      const result: QuickAuditResponse = await res.json();
      setState({ status: "done", result });
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong -- the audit service may still be starting up.";
      setState({ status: "error", message });
      toast.error(message);
    }
  };

  return (
    <Container id="free-audit">
      <Heading>See how {PRODUCT_NAME} scores your site -- free, no signup</Heading>
      <Sub>
        We'll crawl a handful of pages and check what answer engines like ChatGPT, Gemini, and
        Perplexity can actually see: titles, structured data, canonical URLs.
      </Sub>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="yourcompany.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <SubmitButton type="submit" disabled={state.status === "loading"}>
          {state.status === "loading" ? "Scanning..." : "Run free audit"}
        </SubmitButton>
      </Form>

      {state.status === "done" && (
        <ResultCard>
          <ResultHeadline>{state.result.scorecard.headline}</ResultHeadline>
          <ResultMeta>
            Crawled {state.result.pages_crawled} of up to {state.result.capped_at} pages on{" "}
            {state.result.root_url}
          </ResultMeta>
          <Bars>
            <Bar label="Titles" pct={state.result.scorecard.title_coverage_pct} />
            <Bar label="Meta descriptions" pct={state.result.scorecard.meta_description_coverage_pct} />
            <Bar label="Canonical URLs" pct={state.result.scorecard.canonical_coverage_pct} />
            <Bar label="Structured data (JSON-LD)" pct={state.result.scorecard.json_ld_coverage_pct} />
            <Bar label="Headings" pct={state.result.scorecard.heading_coverage_pct} />
          </Bars>
        </ResultCard>
      )}

      {state.status === "error" && <ErrorNote>{state.message}</ErrorNote>}
    </Container>
  );
}

function Bar({ label, pct }: { label: string; pct: number }) {
  return (
    <BarRow>
      <BarLabel>{label}</BarLabel>
      <BarTrack>
        <BarFill style={{ width: `${pct}%` }} $low={pct < 50} />
      </BarTrack>
      <BarPct>{pct}%</BarPct>
    </BarRow>
  );
}

const Container = styled.div`
  max-width: 900px;
  margin: 4rem auto;
  padding: 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => rgba(theme.colors.teal, 0.08)};
  text-align: center;

  ${sizeAndDown("md")} {
    padding: 1.5rem;
    margin: 2.5rem 1rem;
  }
`;

const Heading = styled.h2`
  font-family: "Gilroy", sans-serif;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;

  ${sizeAndDown("md")} {
    font-size: 1.5rem;
  }
`;

const Sub = styled.p`
  font-family: "Averta";
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 640px;
  margin: 0 auto 2rem;
`;

const SubmitButton = styled.button`
  display: inline-block;
  color: ${({ theme }) => theme.colors.light};
  font-family: "Averta";
  font-weight: 700;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.peach};
  border: none;
  padding: 0.85rem 1.75rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
  &:hover:not(:disabled) {
    transform: scale(1.05);
  }
`;

const Form = styled.form`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;

  input {
    flex: 1;
    max-width: 400px;
    margin: 0;
  }
`;

const ResultCard = styled.div`
  margin-top: 2.5rem;
  text-align: left;
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1.5rem 2rem;
`;

const ResultHeadline = styled.p`
  font-family: "Averta";
  font-weight: 700;
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.25rem;
`;

const ResultMeta = styled.p`
  font-family: "Averta";
  font-size: 0.9rem;
  color: #7a7878;
  margin-bottom: 1.5rem;
`;

const Bars = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

const BarRow = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr 48px;
  align-items: center;
  gap: 0.75rem;

  ${sizeAndDown("md")} {
    grid-template-columns: 110px 1fr 40px;
  }
`;

const BarLabel = styled.span`
  font-family: "Averta";
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
`;

const BarTrack = styled.div`
  height: 10px;
  border-radius: 6px;
  background: #e8eef0;
  overflow: hidden;
`;

const BarFill = styled.div<{ $low?: boolean }>`
  height: 100%;
  border-radius: 6px;
  background: ${({ theme, $low }) => ($low ? theme.colors.peach : theme.colors.teal)};
  transition: width 0.4s ease-in-out;
`;

const BarPct = styled.span`
  font-family: "Averta";
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: right;
`;

const ErrorNote = styled.p`
  margin-top: 1.5rem;
  font-family: "Averta";
  color: ${({ theme }) => theme.colors.peach};
`;
