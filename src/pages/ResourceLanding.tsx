import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { sizeAndDown } from "../../styles/responsive";
import * as Icon from "react-feather";
import { conf } from "../../constants";
import { z } from "zod";
import toast from "react-hot-toast";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().min(1, "Company is required").max(100, "Company must be less than 100 characters"),
});

interface ResourceData {
  slug: string;
  type: string;
  title: string;
  headline: string;
  description: string;
  benefits: string[];
  gradient: string;
  icon: React.ReactNode;
}

const resourcesData: ResourceData[] = [
  {
    slug: "ai-content-framework",
    type: "Framework",
    title: "The AI-Era Content Strategy Framework",
    headline: "Build content that wins in the age of AI search",
    description:
      "A comprehensive framework to create technical content that performs across Google, AI Overviews, ChatGPT, Perplexity, and emerging LLM-based discovery tools. Stop guessing—start building structured authority.",
    benefits: [
      "Understand how AI tools evaluate and surface content",
      "Structure your content for maximum discoverability",
      "Create topic clusters that establish authority",
      "Optimize for both traditional SEO and answer engines",
      "Measure what actually matters in the AI era",
    ],
    gradient: "linear-gradient(135deg, #3B82F6 0%, #1e40af 100%)",
    icon: <Icon.FileText size={32} />,
  },
  {
    slug: "content-audit-checklist",
    type: "Checklist",
    title: "Technical Content Audit Checklist",
    headline: "50+ checkpoints to evaluate your developer content",
    description:
      "A practical, actionable checklist to audit your developer documentation, tutorials, API references, and technical blog posts. Identify gaps, prioritize improvements, and benchmark against industry standards.",
    benefits: [
      "Assess content accuracy and technical depth",
      "Evaluate code samples for best practices",
      "Check accessibility and readability scores",
      "Identify outdated or deprecated content",
      "Prioritize high-impact content improvements",
    ],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    icon: <Icon.CheckSquare size={32} />,
  },
  {
    slug: "aeo-playbook",
    type: "Playbook",
    title: "Answer Engine Optimization Playbook",
    headline: "Get cited by ChatGPT, Perplexity, and Claude",
    description:
      "Practical strategies to optimize your content for AI-powered search and discovery. Learn what makes content quotable, how to structure for LLM consumption, and tactics to increase your citation rate.",
    benefits: [
      "Understand how LLMs select and cite sources",
      "Format content for AI consumption patterns",
      "Build authority signals that AI tools trust",
      "Track your visibility in AI search results",
      "Outmaneuver competitors in AI discovery",
    ],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    icon: <Icon.Zap size={32} />,
  },
];

export default function ResourceLanding() {
  const { slug } = useParams<{ slug: string }>();
  const resource = resourcesData.find((r) => r.slug === slug);
  const [formState, setFormState] = useState({ name: "", email: "", company: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!resource) {
    return (
      <NotFound>
        <h1>Resource not found</h1>
        <p>The resource you're looking for doesn't exist.</p>
      </NotFound>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    const validation = leadSchema.safeParse(formState);
    if (!validation.success) {
      const firstError = validation.error.issues[0];
      toast.error(firstError.message);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: conf.web3forms_key,
          name: formState.name,
          email: formState.email,
          company: formState.company,
          resource_requested: resource?.title,
          resource_type: resource?.type,
          subject: `New Lead: ${resource?.title} Download`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        toast.success("Thank you! Check your email for the resource.");
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Page>
      <HeroSection $gradient={resource.gradient}>
        <HeroContent>
          <ResourceType>{resource.type}</ResourceType>
          <Headline>{resource.headline}</Headline>
          <HeroDescription>{resource.description}</HeroDescription>
        </HeroContent>
        <HeroVisual>
          <IconBox>{resource.icon}</IconBox>
        </HeroVisual>
      </HeroSection>

      <ContentSection>
        <MainContent>
          <SectionTitle>What You'll Learn</SectionTitle>
          <BenefitsList>
            {resource.benefits.map((benefit, index) => (
              <BenefitItem key={index}>
                <BenefitIcon>
                  <Icon.Check size={18} />
                </BenefitIcon>
                <span>{benefit}</span>
              </BenefitItem>
            ))}
          </BenefitsList>

          <Divider />

          <SectionTitle>Who This Is For</SectionTitle>
          <AudienceGrid>
            <AudienceCard>
              <AudienceIcon>
                <Icon.Users size={24} />
              </AudienceIcon>
              <AudienceLabel>Developer Marketing Teams</AudienceLabel>
            </AudienceCard>
            <AudienceCard>
              <AudienceIcon>
                <Icon.Edit3 size={24} />
              </AudienceIcon>
              <AudienceLabel>Technical Content Leaders</AudienceLabel>
            </AudienceCard>
            <AudienceCard>
              <AudienceIcon>
                <Icon.TrendingUp size={24} />
              </AudienceIcon>
              <AudienceLabel>Growth & SEO Managers</AudienceLabel>
            </AudienceCard>
          </AudienceGrid>
        </MainContent>

        <FormSidebar>
          <FormCard>
            {isSubmitted ? (
              <SuccessMessage>
                <SuccessIcon>
                  <Icon.CheckCircle size={48} />
                </SuccessIcon>
                <SuccessTitle>Check your inbox!</SuccessTitle>
                <SuccessText>
                  We've sent the {resource.type.toLowerCase()} to your email. Want to discuss your content strategy?
                </SuccessText>
                <CTAButton href={conf.calendly_link} target="_blank">
                  Book a Discovery Call <Icon.ArrowRight size={16} />
                </CTAButton>
              </SuccessMessage>
            ) : (
              <>
                <FormTitle>Get the {resource.type}</FormTitle>
                <FormSubtitle>Enter your details and you can download {resource.title} right away.</FormSubtitle>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label>Full Name</Label>
                    <Input
                      type="text"
                      placeholder="Jane Smith"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Work Email</Label>
                    <Input
                      type="email"
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Company</Label>
                    <Input
                      type="text"
                      placeholder="Acme Inc."
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      required
                    />
                  </FormGroup>
                  <SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : `Download ${resource.type}`}
                  </SubmitButton>
                  <PrivacyNote>We respect your privacy. Unsubscribe anytime.</PrivacyNote>
                </Form>
              </>
            )}
          </FormCard>
        </FormSidebar>
      </ContentSection>
    </Page>
  );
}

const Page = styled.div`
  min-height: 100vh;
`;

const NotFound = styled.div`
  padding: 10rem 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

const HeroSection = styled.section<{ $gradient: string }>`
  background: ${({ $gradient }) => $gradient};
  padding: 8rem 2rem 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 0 0 32px 32px;

  ${sizeAndDown("md")} {
    flex-direction: column;
    padding: 5rem 1.5rem 3rem;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
`;

const ResourceType = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  margin-bottom: 1.5rem;
`;

const Headline = styled.h1`
  font-family: "Gilroy", sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: white;
  line-height: 1.15;
  margin: 0 0 1.5rem;

  ${sizeAndDown("md")} {
    font-size: 2.25rem;
  }
`;

const HeroDescription = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin: 0;
  max-width: 550px;

  ${sizeAndDown("md")} {
    font-size: 1rem;
  }
`;

const HeroVisual = styled.div`
  flex-shrink: 0;

  ${sizeAndDown("md")} {
    display: none;
  }
`;

const IconBox = styled.div`
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 4rem;

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
    padding: 2rem 1.5rem;
    gap: 2rem;
  }
`;

const MainContent = styled.div``;

const SectionTitle = styled.h2`
  font-family: "Gilroy", sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1.5rem;
`;

const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  font-family: "Averta", sans-serif;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

const BenefitIcon = styled.div`
  width: 28px;
  height: 28px;
  background: ${({ theme }) => theme.colors.teal}20;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.teal};
  flex-shrink: 0;
  margin-top: 2px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.text}15;
  margin: 3rem 0;
`;

const AudienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
  }
`;

const AudienceCard = styled.div`
  background: ${({ theme }) => theme.colors.primary}08;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
`;

const AudienceIcon = styled.div`
  color: ${({ theme }) => theme.colors.teal};
  margin-bottom: 0.75rem;
`;

const AudienceLabel = styled.span`
  font-family: "Averta", sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const FormSidebar = styled.div`
  ${sizeAndDown("md")} {
    order: -1;
  }
`;

const FormCard = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.text}15;
  border-radius: 20px;
  padding: 2rem;
  position: sticky;
  top: 120px;
`;

const FormTitle = styled.h3`
  font-family: "Gilroy", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.5rem;
`;

const FormSubtitle = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  line-height: 1.5;
  margin: 0 0 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const Label = styled.label`
  font-family: "Averta", sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  font-family: "Averta", sans-serif;
  font-size: 1rem;
  padding: 0.85rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.text}20;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.teal};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text}50;
  }
`;

const SubmitButton = styled.button`
  font-family: "Averta", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  background: ${({ theme }) => theme.colors.peach};
  border: none;
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 0.5rem;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px ${({ theme }) => theme.colors.peach}40;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const PrivacyNote = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
  text-align: center;
  margin: 0.5rem 0 0;
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 1rem 0;
`;

const SuccessIcon = styled.div`
  color: ${({ theme }) => theme.colors.teal};
  margin-bottom: 1rem;
`;

const SuccessTitle = styled.h3`
  font-family: "Gilroy", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.75rem;
`;

const SuccessText = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  line-height: 1.6;
  margin: 0 0 1.5rem;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: "Averta", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  background: ${({ theme }) => theme.colors.teal};
  border-radius: 10px;
  padding: 1rem 1.5rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px ${({ theme }) => theme.colors.teal}40;
  }
`;
