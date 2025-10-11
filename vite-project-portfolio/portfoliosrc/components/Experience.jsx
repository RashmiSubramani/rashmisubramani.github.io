import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { EXPERIENCE } from "../data/portfolio-data.js";
import {
  Container,
  Section,
  GradientText,
  Card,
  Badge,
  float,
  pulse,
} from "../styles/GlobalStyles";

const ExperienceSection = styled(Section)`
  background: transparent !important;
  background-color: transparent !important;
  color: white;
  position: relative;
  z-index: 0;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: white;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #22c55e 100%);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;

    &::after {
      width: 60px;
      height: 3px;
    }
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 60px;

  &::before {
    content: "";
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(102, 126, 234, 0.3) 10%,
      rgba(118, 75, 162, 0.8) 25%,
      rgba(240, 147, 251, 1) 50%,
      rgba(118, 75, 162, 0.8) 75%,
      rgba(102, 126, 234, 0.3) 90%,
      transparent 100%
    );
    z-index: 1;
    border-radius: 2px;

    @media (max-width: 768px) {
      left: 20px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 32px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(255, 255, 255, 0.6) 20%,
      rgba(255, 255, 255, 0.9) 50%,
      rgba(255, 255, 255, 0.6) 80%,
      transparent 100%
    );
    z-index: 2;
    animation: ${float} 8s ease-in-out infinite;
    border-radius: 1px;

    @media (max-width: 768px) {
      left: 21px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 4rem;
  position: relative;
  margin-left: 60px;

  &::before {
    content: "";
    position: absolute;
    left: -90px;
    top: 30px;
    width: 16px;
    height: 16px;
    background: linear-gradient(135deg, #667eea 0%, #f093fb 100%);
    border: 4px solid rgba(255, 255, 255, 1);
    border-radius: 50%;
    z-index: 5;
    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.1),
      0 0 0 16px rgba(102, 126, 234, 0.05), 0 0 20px rgba(102, 126, 234, 0.3),
      0 0 40px rgba(240, 147, 251, 0.2);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    @media (max-width: 768px) {
      left: -100px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: -82px;
    top: 38px;
    width: 6px;
    height: 6px;
    background: rgba(255, 255, 255, 1);
    border-radius: 50%;
    z-index: 6;
    animation: ${pulse} 3s ease-in-out infinite;

    @media (max-width: 768px) {
      left: -92px;
    }
  }

  &:hover::before {
    transform: scale(1.3);
    box-shadow: 0 0 0 12px rgba(255, 255, 255, 0.15),
      0 0 0 24px rgba(102, 126, 234, 0.08), 0 0 30px rgba(102, 126, 234, 0.5),
      0 0 60px rgba(240, 147, 251, 0.4);
  }

  @media (max-width: 768px) {
    margin-left: 80px;
  }
`;

const ExperienceCard = styled(Card)`
  width: 100%;
  max-width: calc(100% - 40px);
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(30, 27, 75, 0.4) 0%,
    rgba(55, 48, 163, 0.3) 100%
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 8px 32px rgba(168, 85, 247, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-12px) scale(1.01);
    box-shadow: 0 32px 64px rgba(0, 0, 0, 0.4),
      0 16px 48px rgba(168, 85, 247, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: calc(100% - 40px);
    margin: 0;
  }
`;

const ConnectionPath = styled.svg`
  position: absolute;
  top: 20px;
  left: -60px;
  width: 60px;
  height: 20px;
  z-index: 3;
  pointer-events: none;

  @media (max-width: 768px) {
    left: -80px;
    width: 80px;
  }
`;

const ConnectionContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const CompanyIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.25rem;
`;

const JobTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 0.5rem;
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechBadge = styled.span`
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.2) 0%,
    rgba(168, 85, 247, 0.2) 100%
  );
  color: rgba(255, 255, 255, 0.9);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(168, 85, 247, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(59, 130, 246, 0.3) 0%,
      rgba(168, 85, 247, 0.3) 100%
    );
    border-color: rgba(168, 85, 247, 0.5);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(168, 85, 247, 0.3);
    color: rgba(255, 255, 255, 1);
  }
`;

const Achievements = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Achievement = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.4;
`;

const KeyProjects = styled.div`
  margin-top: 1.5rem;
`;

const ProjectsTitle = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.75rem;
`;

const ProjectsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ProjectItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;

  &::before {
    content: "🚀";
    margin-top: 0.1rem;
  }
`;

const ImpactSection = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.1) 0%,
    rgba(240, 147, 251, 0.1) 100%
  );
  border-radius: 12px;
  border-left: 4px solid #f093fb;
`;

const ImpactTitle = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 0.5rem;
`;

const ImpactText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  line-height: 1.5;
  font-style: italic;
`;

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <ExperienceSection id="experience" ref={ref}>
      <Container>
        <SectionTitle>
          Professional{" "}
          <GradientText $gradient="linear-gradient(90deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)">
            Experience
          </GradientText>
        </SectionTitle>

        <Timeline>
          {EXPERIENCE.map((item, index) => (
            <TimelineItem key={item.id} $index={index}>
              <ConnectionContainer>
                <ConnectionPath viewBox="0 0 60 20" preserveAspectRatio="none">
                  <defs>
                    <linearGradient
                      id={`connectionGradient${index}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="rgba(102,126,234,0.8)" />
                      <stop offset="50%" stopColor="rgba(240,147,251,0.8)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
                    </linearGradient>
                    <filter id={`glow${index}`}>
                      <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <path
                    d="M 0 10 Q 20 5, 45 10 Q 55 12, 60 10"
                    stroke={`url(#connectionGradient${index})`}
                    strokeWidth="2"
                    fill="none"
                    filter={`url(#glow${index})`}
                    opacity="0.9"
                  />
                </ConnectionPath>

                <ExperienceCard $index={index}>
                  <CompanyHeader>
                    <CompanyIcon>
                      <FaBriefcase />
                    </CompanyIcon>
                    <CompanyInfo>
                      <CompanyName>{item.company}</CompanyName>
                      <JobTitle>{item.designation}</JobTitle>
                    </CompanyInfo>
                  </CompanyHeader>

                  <Duration>
                    <FaCalendarAlt />
                    {item.year}
                  </Duration>

                  <Description>{item.description}</Description>

                  <TechStack>
                    {item.technologies.map((tech, techIndex) => (
                      <TechBadge key={techIndex}>{tech}</TechBadge>
                    ))}
                  </TechStack>

                  <Achievements>
                    {/* {item.achievements.slice(0, 3).map((achievement, achIndex) => (
                                            <Achievement key={achIndex}>
                                                {achievement}
                                            </Achievement>
                                        ))} */}
                    {item.achievements.map((achievement, achIndex) => (
                      <Achievement key={achIndex}>{achievement}</Achievement>
                    ))}
                    {/* {item.achievements.length > 3 && (
                                            <Achievement>
                                                +{item.achievements.length - 3} more achievements
                                            </Achievement>
                                        )} */}
                  </Achievements>

                  {item.impact && (
                    <ImpactSection>
                      <ImpactTitle>Key Impact</ImpactTitle>
                      <ImpactText>{item.impact}</ImpactText>
                    </ImpactSection>
                  )}
                </ExperienceCard>
              </ConnectionContainer>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
}
