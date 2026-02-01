import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { CFade } from "../Animation";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  highlight?: string;
}

const timelineData: TimelineEvent[] = [
  {
    year: "The Spark",
    title: "A Frustration Became a Mission",
    description: "Tired of seeing brilliant tech products buried under buzzwords and fluff. Developers deserved better—content that respects their intelligence.",
    icon: "💡",
    highlight: "The idea was born"
  },
  {
    year: "The Foundation",
    title: "Assembling the Right Minds",
    description: "Engineers, writers, and marketers who shared one belief: technical content should teach, not trick. No jargon. No fluff. Just value.",
    icon: "🧱",
  },
  {
    year: "First Win",
    title: "Proving the Model Works",
    description: "Our first client saw 3x engagement on technical docs. Word spread. The 'anti-fluff' approach resonated with dev-focused companies.",
    icon: "🎯",
  },
  {
    year: "Scaling Up",
    title: "20+ Companies Trust Us",
    description: "From startups to enterprises, we've helped teams cut through noise and connect with technical audiences authentically.",
    icon: "📈",
    highlight: "20+ customers"
  },
  {
    year: "The Library",
    title: "1000+ Pieces Created",
    description: "Blogs, docs, tutorials, case studies—each one crafted to earn developer trust, not just clicks.",
    icon: "📚",
    highlight: "1000+ collaterals"
  },
  {
    year: "Today",
    title: "Architected Authority",
    description: "We've evolved beyond content. We build structured knowledge libraries that compound—optimized for humans AND AI discovery.",
    icon: "🚀",
  },
  {
    year: "Tomorrow",
    title: "Your Story Joins Ours",
    description: "Every tech company has a story worth telling right. We're here to help you tell yours—without the fluff.",
    icon: "✨",
  },
];

export default function Timeline() {
  return (
    <TimelineWrapper>
      <CFade>
        <TimelineHeader>
          <HeaderIcon>📖</HeaderIcon>
          <HeaderTitle>Our Journey</HeaderTitle>
          <HeaderSubtitle>From frustration to framework—here's how we got here</HeaderSubtitle>
        </TimelineHeader>
        
        <TimelineContainer>
          <TimelineLine />
          {timelineData.map((event, index) => (
            <TimelineItem key={index} $isLeft={index % 2 === 0}>
              <TimelineContent $isLeft={index % 2 === 0}>
                <TimelineIcon>{event.icon}</TimelineIcon>
                <TimelineYear>{event.year}</TimelineYear>
                <TimelineTitle>{event.title}</TimelineTitle>
                <TimelineDescription>{event.description}</TimelineDescription>
                {event.highlight && (
                  <TimelineHighlight>{event.highlight}</TimelineHighlight>
                )}
              </TimelineContent>
              <TimelineDot $hasHighlight={!!event.highlight} />
            </TimelineItem>
          ))}
        </TimelineContainer>
      </CFade>
    </TimelineWrapper>
  );
}

const TimelineWrapper = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  ${sizeAndDown("md")} {
    padding: 3rem 1rem;
  }
`;

const TimelineHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const HeaderIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeaderTitle = styled.h2`
  font-family: "Gilroy", sans-serif;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  
  ${sizeAndDown("md")} {
    font-size: 2.2rem;
  }
`;

const HeaderSubtitle = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
`;

const TimelineContainer = styled.div`
  position: relative;
  padding: 2rem 0;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(
    to bottom,
    transparent,
    ${({ theme }) => theme.colors.teal} 10%,
    ${({ theme }) => theme.colors.teal} 90%,
    transparent
  );
  transform: translateX(-50%);
  
  ${sizeAndDown("md")} {
    left: 20px;
  }
`;

const TimelineItem = styled.div<{ $isLeft: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ $isLeft }) => ($isLeft ? "flex-start" : "flex-end")};
  position: relative;
  margin-bottom: 3rem;
  
  ${sizeAndDown("md")} {
    justify-content: flex-start;
    padding-left: 50px;
  }
`;

const TimelineContent = styled.div<{ $isLeft: boolean }>`
  width: 42%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  position: relative;
  transition: all 0.3s ease;
  
  ${({ $isLeft }) => $isLeft ? `
    margin-right: auto;
    margin-left: 0;
  ` : `
    margin-left: auto;
    margin-right: 0;
  `}
  
  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: ${({ theme }) => theme.colors.teal}40;
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
  
  ${sizeAndDown("md")} {
    width: 100%;
    margin: 0;
  }
`;

const TimelineDot = styled.div<{ $hasHighlight: boolean }>`
  position: absolute;
  left: 50%;
  width: ${({ $hasHighlight }) => ($hasHighlight ? "20px" : "14px")};
  height: ${({ $hasHighlight }) => ($hasHighlight ? "20px" : "14px")};
  background: ${({ theme, $hasHighlight }) => 
    $hasHighlight ? theme.colors.peach : theme.colors.teal};
  border-radius: 50%;
  transform: translateX(-50%);
  border: 3px solid ${({ theme }) => theme.colors.background || "#0f0f0f"};
  z-index: 2;
  box-shadow: ${({ $hasHighlight }) => 
    $hasHighlight ? "0 0 20px rgba(255, 150, 100, 0.5)" : "0 0 10px rgba(0, 200, 200, 0.3)"};
  
  ${sizeAndDown("md")} {
    left: 20px;
  }
`;

const TimelineIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const TimelineYear = styled.span`
  display: inline-block;
  font-family: "Gilroy", sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.teal};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-family: "Gilroy", sans-serif;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;
  
  ${sizeAndDown("md")} {
    font-size: 1.3rem;
  }
`;

const TimelineDescription = styled.p`
  font-family: "Averta", sans-serif;
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  margin: 0;
`;

const TimelineHighlight = styled.span`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.teal}20, ${({ theme }) => theme.colors.peach}20);
  border: 1px solid ${({ theme }) => theme.colors.teal}40;
  border-radius: 20px;
  font-family: "Gilroy", sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.teal};
`;
