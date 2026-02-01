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
    title: "Technical Content Was Broken",
    description: "Brilliant tech products buried under buzzwords. Developers drowning in fluff. Marketing that talked AT technical audiences, not WITH them.",
    icon: "🔥",
    isProblem: true,
  },
  {
    phase: "The Insight",
    title: "Developers Hate Being Sold To",
    description: "They want to learn, not be marketed to. They want proof, not promises. They want code, not claims.",
    icon: "💡",
    isProblem: true,
  },
  {
    phase: "The Mission",
    title: "No-Fluff Technical Content",
    description: "We assembled engineers, writers, and marketers who believe technical content should teach, not trick.",
    icon: "🎯",
  },
  {
    phase: "The Proof",
    title: "20+ Companies Trusted Us",
    description: "From startups to enterprises—3x engagement on docs, developer communities built from scratch.",
    icon: "📈",
    highlight: "20+ customers",
  },
  {
    phase: "The Scale",
    title: "1000+ Pieces That Work",
    description: "Blogs, docs, tutorials, case studies—each crafted to earn developer trust, not just clicks.",
    icon: "📚",
    highlight: "1000+ collaterals",
  },
  {
    phase: "The Evolution",
    title: "Architected Authority",
    description: "Beyond content. We build structured knowledge libraries that compound—optimized for humans AND AI discovery.",
    icon: "🚀",
  },
];

export default function Timeline() {
  return (
    <TimelineWrapper>
      <Fade triggerOnce>
        <TimelineHeader>
          <HeaderBadge>Our Story</HeaderBadge>
          <HeaderTitle>From Frustration to Framework</HeaderTitle>
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
  background: ${({ $isProblem }) => 
    $isProblem 
      ? "linear-gradient(135deg, rgba(255, 100, 100, 0.08), rgba(255, 150, 100, 0.05))"
      : "rgba(255, 255, 255, 0.03)"
  };
  backdrop-filter: blur(10px);
  border: 1px solid ${({ $isProblem, theme }) => 
    $isProblem 
      ? "rgba(255, 100, 100, 0.2)"
      : "rgba(255, 255, 255, 0.08)"
  };
  border-radius: 16px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ $isProblem }) => 
      $isProblem 
        ? "0 20px 40px rgba(255, 100, 100, 0.15)"
        : "0 20px 40px rgba(0, 0, 0, 0.2)"
    };
    border-color: ${({ $isProblem, theme }) => 
      $isProblem 
        ? "rgba(255, 100, 100, 0.4)"
        : theme.colors.teal + "40"
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
