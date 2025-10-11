import React from "react"
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaRocket, FaLightbulb, FaUsers, FaAward, FaGraduationCap, FaCogs, FaShieldAlt, FaChartLine } from 'react-icons/fa'
import { Container, Section, GradientText, Card, Grid, fadeInUp } from '../styles/GlobalStyles'

const AboutSection = styled(Section)`
  background: transparent;
  color: white;
  position: relative;
  overflow: hidden;
  font-family: var(--font-Merienda-One);
  margin-top: 3rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 30%,
        rgba(59, 130, 246, 0.05) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 70%,
        rgba(168, 85, 247, 0.05) 0%,
        transparent 50%
      );
    pointer-events: none;
    z-index: 0;
  }

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
    content: '';
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
    margin-bottom: 2rem;
    
    &::after {
      width: 60px;
      height: 3px;
    }
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const AboutContent = styled(Card)`
  background: linear-gradient(135deg, 
    rgba(30, 27, 75, 0.4) 0%, 
    rgba(55, 48, 163, 0.3) 100%
  );
  backdrop-filter: blur(15px);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(168, 85, 247, 0.1);
  position: relative;
  z-index: 1;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(168, 85, 247, 0.2);
    background: linear-gradient(135deg, 
      rgba(30, 27, 75, 0.6) 0%, 
      rgba(55, 48, 163, 0.5) 100%
    );
  }
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  strong {
    color: rgba(255, 255, 255, 0.95);
    font-weight: 600;
    background: linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #22c55e 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
  }
`;

const HighlightCard = styled.div`
  background: linear-gradient(135deg, 
    rgba(30, 27, 75, 0.4) 0%, 
    rgba(55, 48, 163, 0.3) 100%
  );
  backdrop-filter: blur(15px);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 20px;
  padding: 1.5rem 1rem;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(168, 85, 247, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(59, 130, 246, 0.2) 0%, 
      rgba(168, 85, 247, 0.2) 50%,
      rgba(34, 197, 94, 0.2) 100%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    border-radius: 20px;
  }

  &:hover {
    transform: translateY(-12px) scale(1.03);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(168, 85, 247, 0.3);
    background: linear-gradient(135deg, 
      rgba(30, 27, 75, 0.6) 0%, 
      rgba(55, 48, 163, 0.5) 100%
    );
    border-color: rgba(168, 85, 247, 0.4);
  }

  &:hover::before {
    opacity: 1;
  }
`;

const HighlightIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #3b82f6 0%, #a855f7 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.4rem;
  margin: 0 auto 1rem;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  transition: all 0.4s ease;

  ${HighlightCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 12px 35px rgba(168, 85, 247, 0.6);
  }
`;

const HighlightTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 0.5rem;
  line-height: 1.3;
  transition: all 0.3s ease;

  ${HighlightCard}:hover & {
    color: #ffffff;
    text-shadow: 0 4px 12px rgba(168, 85, 247, 0.4);
  }
`;

const HighlightDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.3s ease;

  ${HighlightCard}:hover & {
    color: rgba(255, 255, 255, 0.85);
  }
`;

export default function About() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const highlights = [
        {
            icon: <FaCogs />,
            title: "Frontend Architect",
            description: "Designing micro-frontend ecosystems with React, Redux, and modern JavaScript that scale across multiple product teams and thousands of daily users."
        },
        {
            icon: <FaShieldAlt />,
            title: "Quality Pioneer",
            description: "Championing test-driven development with 95% automation coverage using Selenium, Cypress, and Playwright. Zero critical bugs in production for 2+ years."
        },
        {
            icon: <FaAward />,
            title: "Recognized Excellence",
            description: "Rockstar Hire Award 2022 at Kissflow for exceptional technical contributions and leadership in driving innovation across the engineering organization."
        },
        {
            icon: <FaGraduationCap />,
            title: "Forever Learner",
            description: "9+ cutting-edge certifications in DevOps, React, System Design, and advanced testing. Always exploring emerging technologies to stay ahead of the curve."
        }
    ];

    return(
        <AboutSection id="about" ref={ref}>
            <Container>
                <SectionTitle>
                    About <GradientText $gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #22c55e 100%)">Me</GradientText>
                </SectionTitle>
                
                <AboutContainer>
                    <AboutContent>
                        <AboutText>
                            Hi there! 👋 I'm <strong>Rashmi Subramani</strong>, a <strong>Senior Software Engineer</strong> passionate about crafting digital experiences that balance creativity with precision. Currently at Kissflow, I design and build scalable, user-focused frontend architectures that power thousands of users worldwide.
                        </AboutText>
                        
                        <AboutText>
                            With over <strong>7 years of experience</strong>, I bring the precision of a Quality Engineer and the creativity of a Frontend Developer. My foundation in test automation and quality engineering has shaped the way I build — ensuring every product is as robust behind the scenes as it is seamless for users.
                        </AboutText>
                        
                        <AboutText>
                            Bridging creativity and precision — from elegant UI architecture to bulletproof test automation — I focus on driving <strong>scalability, reusability, and maintainability</strong> through thoughtful design systems and automation frameworks that stand the test of scale.
                        </AboutText>
                        
                        <AboutText>
                            I'm deeply motivated by <strong>continuous improvement and knowledge sharing</strong>, whether it's optimizing architecture, mentoring peers, or streamlining development workflows. My ultimate goal: to empower teams with frontend systems and testing strategies that scale effortlessly and bring ideas to life with confidence.
                        </AboutText>
                        
                        <AboutText>
                            Let's create something extraordinary together! ✨
                        </AboutText>
                    </AboutContent>
                    
                    <HighlightsGrid>
                        {highlights.map((highlight, index) => (
                            <HighlightCard key={index}>
                                <HighlightIcon>
                                    {highlight.icon}
                                </HighlightIcon>
                                <HighlightTitle>{highlight.title}</HighlightTitle>
                                <HighlightDescription>{highlight.description}</HighlightDescription>
                            </HighlightCard>
                        ))}
                    </HighlightsGrid>
                </AboutContainer>
            </Container>
        </AboutSection>
    )
}