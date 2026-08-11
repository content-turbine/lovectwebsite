import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { Fade, Slide } from "react-awesome-reveal";

interface TimelineEvent {
  phase: string;
  title: string;
  description: string;
  icon: string;
  highlight?: string;
  isProblem?: boolean;
}

const timelineData: TimelineEvent[] = [
  {
    phase: "The Problem",
    title: "AI Broke How Buyers Find You",
    description: "Search used to mean ten blue links. Now ChatGPT, Gemini, and Perplexity synthesize one answer and cite a handful of sources. Most technical content is still written for a Google crawler that's no longer the only reader deciding whether you get found.",
    icon: "🔥",
    isProblem: true,
  },
  {
    phase: "The Insight",
    title: "Being Correct Isn't Being Cited",
    description: "AI answer engines don't rank pages, they select sources to quote. Technically accurate isn't enough — content has to be structured so a model can actually extract and trust a claim, or it gets skipped in favor of whoever made theirs easier to cite.",
    icon: "💡",
    isProblem: true,
  },
  {
    phase: "The Mission",
    title: "Content Built to Be Cited, Not Just Read",
    description: "We assembled engineers, writers, and marketers to build technical content structured for both human trust and AI retrieval — so your brand is the one ChatGPT and Perplexity actually reference, not the one that only ranked.",
    icon: "🎯",
  },
  {
    phase: "The Proof",
    title: "20+ Companies Trusted Us",
    description: "From startups to enterprises — content structured to earn developer trust and hold up when an AI engine goes looking for a source to cite.",
    icon: "📈",
    highlight: "20+ customers",
  },
  {
    phase: "The Scale",
    title: "1000+ Pieces That Work",
    description: "Blogs, docs, tutorials, case studies — each built to earn developer trust and stay extractable enough for AI engines to quote.",
    icon: "📚",
    highlight: "1000+ collaterals",
  },
  {
    phase: "The Outcome",
    title: "Content That Compounds",
    description: "Beyond one-off pieces. We build structured knowledge libraries that grow your authority over time — visible to search, trusted by developers, and cited by AI.",
    icon: "🚀",
  },
];

export default function Timeline() {
  return (
    <TimelineWrapper>
      <Fade triggerOnce>
        <TimelineHeader>
          <HeaderBadge>Our Story</HeaderBadge>
          <HeaderTitle>From Frustration to Outcomes</HeaderTitle>
        </TimelineHeader>
      </Fade>

      <ZigZagContainer>
        {timelineData.map((event, index) => (
          <ZigZagRow key={index} $isEven={index % 2 === 0}>
            <Slide 
              direction={index % 2 === 0 ? "left" : "right"} 
              triggerOnce 
              delay={index * 100}
            >
              <EventCard $isProblem={event.isProblem}>
                <EventIcon $isProblem={event.isProblem}>{event.icon}</EventIcon>
                <EventContent>
                  <EventPhase $isProblem={event.isProblem}>{event.phase}</EventPhase>
                  <EventTitle>{event.title}</EventTitle>
                  <EventDescription>{event.description}</EventDescription>
                  {event.highlight && (
                    <EventHighlight>{event.highlight}</EventHighlight>
                  )}
                </EventContent>
                <Connector $isEven={index % 2 === 0} $isLast={index === timelineData.length - 1} />
              </EventCard>
            </Slide>
          </ZigZagRow>
        ))}
      </ZigZagContainer>
    </TimelineWrapper>
  );
}

const TimelineWrapper = styled.section`
  padding: 4rem 2rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden;
  
  ${sizeAndDown("md")} {
    padding: 3rem 1rem 1rem;
  }
`;

const TimelineHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const HeaderBadge = styled.span`
  display: inline-block;
  font-family: "Gilroy", sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.teal};
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1.5rem;
  background: ${({ theme }) => theme.colors.teal}15;
  border-radius: 20px;
`;

const HeaderTitle = styled.h1`
  font-family: "Gilroy", sans-serif;
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  
  ${sizeAndDown("md")} {
    font-size: 2rem;
  }
`;

const ZigZagContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

const ZigZagRow = styled.div<{ $isEven: boolean }>`
  display: flex;
  justify-content: ${({ $isEven }) => ($isEven ? "flex-start" : "flex-end")};
  padding: ${({ $isEven }) => ($isEven ? "0 0 0 0" : "0 0 0 15%")};
  
  ${sizeAndDown("md")} {
    justify-content: center;
    padding: 0;
  }
`;

const EventCard = styled.div<{ $isProblem?: boolean }>`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.5rem;
  max-width: 550px;
  background: ${({ $isProblem, theme }) => 
    $isProblem 
      ? "linear-gradient(135deg, rgba(255, 100, 100, 0.12), rgba(255, 150, 100, 0.08))"
      : `linear-gradient(135deg, ${theme.colors.teal}15, ${theme.colors.teal}08)`
  };
  backdrop-filter: blur(10px);
  border: 2px solid ${({ $isProblem, theme }) => 
    $isProblem 
      ? "rgba(255, 100, 100, 0.3)"
      : theme.colors.teal + "40"
  };
  border-radius: 16px;
  transition: all 0.3s ease;
  box-shadow: ${({ $isProblem, theme }) => 
    $isProblem 
      ? "0 8px 24px rgba(255, 100, 100, 0.1)"
      : `0 8px 24px ${theme.colors.teal}15`
  };
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ $isProblem, theme }) => 
      $isProblem 
        ? "0 20px 40px rgba(255, 100, 100, 0.2)"
        : `0 20px 40px ${theme.colors.teal}25`
    };
    border-color: ${({ $isProblem, theme }) => 
      $isProblem 
        ? "rgba(255, 100, 100, 0.5)"
        : theme.colors.teal + "70"
    };
  }
  
  ${sizeAndDown("md")} {
    max-width: 100%;
    padding: 1.25rem;
  }
`;

const EventIcon = styled.div<{ $isProblem?: boolean }>`
  font-size: 2rem;
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $isProblem, theme }) => 
    $isProblem 
      ? "rgba(255, 100, 100, 0.15)"
      : theme.colors.teal + "15"
  };
  border-radius: 12px;
`;

const EventContent = styled.div`
  flex: 1;
`;

const EventPhase = styled.span<{ $isProblem?: boolean }>`
  display: inline-block;
  font-family: "Gilroy", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ $isProblem, theme }) => 
    $isProblem ? "#ff6b6b" : theme.colors.teal
  };
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.25rem;
`;

const EventTitle = styled.h3`
  font-family: "Gilroy", sans-serif;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.5rem 0;
  
  ${sizeAndDown("md")} {
    font-size: 1.1rem;
  }
`;

const EventDescription = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.75;
  margin: 0;
`;

const EventHighlight = styled.span`
  display: inline-block;
  margin-top: 0.75rem;
  padding: 0.4rem 0.9rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.teal}25, ${({ theme }) => theme.colors.peach}20);
  border: 1px solid ${({ theme }) => theme.colors.teal}50;
  border-radius: 16px;
  font-family: "Gilroy", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.teal};
`;

const Connector = styled.div<{ $isEven: boolean; $isLast: boolean }>`
  display: ${({ $isLast }) => ($isLast ? "none" : "block")};
  position: absolute;
  bottom: -1rem;
  ${({ $isEven }) => ($isEven ? "right: 30px" : "left: 30px")};
  width: 2px;
  height: 1rem;
  background: ${({ theme }) => theme.colors.teal}40;
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background: ${({ theme }) => theme.colors.teal};
    border-radius: 50%;
  }
  
  ${sizeAndDown("md")} {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  }
`;
