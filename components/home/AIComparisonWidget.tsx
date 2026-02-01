import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { sizeAndDown } from "../../styles/responsive";

const WidgetContainer = styled.div`
  margin-top: 4rem;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 24px;
  padding: 2.5rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);

  ${sizeAndDown("md")} {
    padding: 1.5rem;
    margin-top: 3rem;
  }
`;

const WidgetHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const WidgetTitle = styled.h3`
  font-family: "Gilroy", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.5rem;
`;

const WidgetSubtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.colors.background};
  padding: 0.5rem;
  border-radius: 12px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const Tab = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 0.875rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-family: "Averta", sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ $active, theme }) => 
    $active ? theme.colors.primary : "transparent"};
  color: ${({ $active, theme }) => 
    $active ? theme.colors.light : theme.colors.text};

  &:hover {
    background: ${({ $active, theme }) => 
      $active ? theme.colors.primary : "rgba(0, 0, 0, 0.05)"};
  }
`;

const ContentArea = styled.div`
  position: relative;
  min-height: 360px;

  ${sizeAndDown("md")} {
    min-height: auto;
  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const glitch = keyframes`
  0%, 100% { transform: translateX(0); }
  10% { transform: translateX(-2px); }
  20% { transform: translateX(2px); }
  30% { transform: translateX(-1px); }
  40% { transform: translateX(1px); }
  50% { transform: translateX(0); }
`;

const AIOnlyPanel = styled.div<{ $visible: boolean }>`
  display: ${({ $visible }) => ($visible ? "block" : "none")};
`;

const ContentTurbinePanel = styled.div<{ $visible: boolean }>`
  display: ${({ $visible }) => ($visible ? "block" : "none")};
`;

const OutputBox = styled.div<{ $variant: "ai" | "ct" }>`
  background: ${({ $variant }) => 
    $variant === "ai" ? "#FEF2F2" : "#ECFDF5"};
  border: 2px solid ${({ $variant }) => 
    $variant === "ai" ? "#FCA5A5" : "#6EE7B7"};
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;

  ${sizeAndDown("md")} {
    padding: 1.25rem;
  }
`;

const OutputLabel = styled.div<{ $variant: "ai" | "ct" }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  background: ${({ $variant }) => 
    $variant === "ai" ? "#FEE2E2" : "#D1FAE5"};
  color: ${({ $variant }) => 
    $variant === "ai" ? "#DC2626" : "#059669"};
`;

const OutputTitle = styled.h4`
  font-family: "Averta", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1rem;
`;

const OutputText = styled.p<{ $hasError?: boolean }>`
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1rem;
  
  ${({ $hasError }) => $hasError && `
    position: relative;
  `}
`;

const ErrorHighlight = styled.span`
  background: linear-gradient(to bottom, transparent 60%, #FCA5A5 60%);
  position: relative;
  animation: ${pulse} 2s ease-in-out infinite;
  
  &::after {
    content: "⚠️";
    position: absolute;
    top: -0.5rem;
    right: -1.25rem;
    font-size: 0.75rem;
  }
`;

const GlitchText = styled.span`
  animation: ${glitch} 3s ease-in-out infinite;
  display: inline-block;
  color: #DC2626;
  font-weight: 600;
`;

const IssuesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

const IssueBadge = styled.div<{ $variant: "error" | "warning" | "success" }>`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.875rem;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${({ $variant }) => 
    $variant === "error" ? "#FEE2E2" : 
    $variant === "warning" ? "#FEF3C7" : "#D1FAE5"};
  color: ${({ $variant }) => 
    $variant === "error" ? "#DC2626" : 
    $variant === "warning" ? "#D97706" : "#059669"};
  border: 1px solid ${({ $variant }) => 
    $variant === "error" ? "#FECACA" : 
    $variant === "warning" ? "#FDE68A" : "#A7F3D0"};
`;

const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
  }
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  border: 1px solid #A7F3D0;
`;

const BenefitIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #D1FAE5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
`;

const BenefitText = styled.div`
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
  
  strong {
    display: block;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }
`;

const InteractiveHint = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
`;

export default function AIComparisonWidget() {
  const [activeTab, setActiveTab] = useState<"ai" | "ct">("ai");

  return (
    <WidgetContainer>
      <WidgetHeader>
        <WidgetTitle>See the Difference</WidgetTitle>
        <WidgetSubtitle>
          Compare raw AI output vs. expert-enhanced content
        </WidgetSubtitle>
      </WidgetHeader>

      <TabContainer>
        <Tab $active={activeTab === "ai"} onClick={() => setActiveTab("ai")}>
          🤖 AI Only
        </Tab>
        <Tab $active={activeTab === "ct"} onClick={() => setActiveTab("ct")}>
          ⚡ Content Turbine
        </Tab>
      </TabContainer>

      <ContentArea>
        <AIOnlyPanel $visible={activeTab === "ai"}>
          <OutputBox $variant="ai">
            <OutputLabel $variant="ai">
              <span>⚠️</span> Raw AI Output
            </OutputLabel>
            <OutputTitle>
              "How to Configure Kubernetes Pods"
            </OutputTitle>
            <OutputText $hasError>
              To configure a Kubernetes pod, you need to create a <ErrorHighlight>YAML manifest file</ErrorHighlight>. 
              The pod spec requires a <GlitchText>containerPort: 8080</GlitchText> which must match your 
              <ErrorHighlight> service.yaml port selector</ErrorHighlight>. 
              For resource limits, set <GlitchText>memory: 128mb</GlitchText> (note: should be "Mi" not "mb")...
            </OutputText>
            <OutputText>
              The ReplicaSet will automatically <ErrorHighlight>restart failed containers every 30 seconds</ErrorHighlight> 
              (outdated — this varies by configuration). You can also use the deprecated 
              <GlitchText> --generator flag</GlitchText> with kubectl run...
            </OutputText>

            <IssuesList>
              <IssueBadge $variant="error">🔴 Hallucinated Facts</IssueBadge>
              <IssueBadge $variant="error">🔴 Syntax Errors</IssueBadge>
              <IssueBadge $variant="warning">🟡 Outdated Info</IssueBadge>
              <IssueBadge $variant="warning">🟡 Deprecated APIs</IssueBadge>
              <IssueBadge $variant="error">🔴 Missing Context</IssueBadge>
              <IssueBadge $variant="warning">🟡 Generic Examples</IssueBadge>
            </IssuesList>
          </OutputBox>
        </AIOnlyPanel>

        <ContentTurbinePanel $visible={activeTab === "ct"}>
          <OutputBox $variant="ct">
            <OutputLabel $variant="ct">
              <span>✓</span> SME-Verified Content
            </OutputLabel>
            <OutputTitle>
              "Kubernetes Pod Configuration: A Practical Guide"
            </OutputTitle>
            <OutputText>
              This guide walks through pod configuration patterns we've validated across 
              production clusters. Each example includes version-specific notes for 
              Kubernetes 1.28+ and links to official documentation for deeper reference.
            </OutputText>
            <OutputText>
              <strong>Resource Limits Best Practice:</strong> Use proper unit notation 
              (e.g., <code>memory: 128Mi</code>) and always set both requests and limits 
              to enable QoS classification. We've included a runnable example you can 
              test in your cluster.
            </OutputText>

            <BenefitsList>
              <BenefitItem>
                <BenefitIcon>🧠</BenefitIcon>
                <BenefitText>
                  <strong>SME Verified</strong>
                  Every claim validated by practitioners
                </BenefitText>
              </BenefitItem>
              <BenefitItem>
                <BenefitIcon>🔗</BenefitIcon>
                <BenefitText>
                  <strong>Runnable Examples</strong>
                  Code that actually works, tested in real clusters
                </BenefitText>
              </BenefitItem>
              <BenefitItem>
                <BenefitIcon>📅</BenefitIcon>
                <BenefitText>
                  <strong>Version Aware</strong>
                  Clearly marked for K8s 1.28+ compatibility
                </BenefitText>
              </BenefitItem>
              <BenefitItem>
                <BenefitIcon>🎯</BenefitIcon>
                <BenefitText>
                  <strong>AI + SEO Ready</strong>
                  Structured for LLM citation & search discovery
                </BenefitText>
              </BenefitItem>
            </BenefitsList>
          </OutputBox>
        </ContentTurbinePanel>
      </ContentArea>

      <InteractiveHint>
        👆 Toggle between tabs to compare outputs
      </InteractiveHint>
    </WidgetContainer>
  );
}
