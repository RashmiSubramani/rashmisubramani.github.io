import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { 
  FaJsSquare, 
  FaPython, 
  FaJava, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaVuejs,
  FaGitAlt,
  FaDocker,
  FaJenkins,
  FaGithub
} from 'react-icons/fa';
import { 
  SiSelenium, 
  SiCypress, 
  SiTestinglibrary,
  SiPostman,
  SiJira,
  SiRedux,
  SiTailwindcss,
  SiAntdesign,
  SiWebpack,
  SiVite,
  SiJest,
  SiFigma,
  SiCucumber
} from 'react-icons/si';
import { Container, Section, GradientText, Card, Grid, float, shimmer } from '../styles/GlobalStyles';
import { SKILLS } from '../data/portfolio-data';

const SkillsSection = styled(Section)`
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
        circle at 25% 25%,
        rgba(168, 85, 247, 0.05) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 75% 75%,
        rgba(59, 130, 246, 0.05) 0%,
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
  margin-bottom: 2rem;
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
    margin-bottom: 1.5rem;
    
    &::after {
      width: 60px;
      height: 3px;
    }
  }
`;


const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 0;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.2rem;
    padding: 0.5rem 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }
`;

const SkillCard = styled.div`
  background: linear-gradient(135deg, 
    rgba(30, 27, 75, 0.4) 0%, 
    rgba(55, 48, 163, 0.3) 100%
  );
  backdrop-filter: blur(15px);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(168, 85, 247, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(168, 85, 247, 0.2) 0%, 
      rgba(59, 130, 246, 0.2) 50%,
      rgba(34, 197, 94, 0.2) 100%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    border-radius: 20px;
  }

  &:hover {
    transform: translateY(-12px) scale(1.05);
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

const SkillIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  color: ${props => props.$color || 'rgba(168, 85, 247, 0.9)'};
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  filter: drop-shadow(0 4px 12px ${props => props.$color ? `${props.$color}40` : 'rgba(168, 85, 247, 0.4)'});
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, ${props => props.$color ? `${props.$color}30` : 'rgba(168, 85, 247, 0.2)'} 0%, transparent 70%);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.5s ease;
  }

  ${SkillCard}:hover & {
    color: #ffffff;
    transform: scale(1.25) rotate(10deg);
    filter: drop-shadow(0 12px 24px ${props => props.$color ? `${props.$color}80` : 'rgba(168, 85, 247, 0.6)'});
  }

  ${SkillCard}:hover &::before {
    opacity: 1;
    width: 100px;
    height: 100px;
  }
`;

const SkillName = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  letter-spacing: 0.3px;
  transition: all 0.4s ease;
  text-transform: uppercase;

  ${SkillCard}:hover & {
    color: #ffffff;
    text-shadow: 0 4px 12px rgba(168, 85, 247, 0.4);
    transform: translateY(-2px);
  }
`;

const IconMap = {
  JavaScript: FaJsSquare,
  Java: FaJava,
  React: FaReact,
  'HTML5': FaHtml5,
  'CSS3': FaCss3Alt,
  'Redux Toolkit': SiRedux,
  'Tailwind CSS': SiTailwindcss,
  'Ant Design': SiAntdesign,
  'ShadCN UI': FaReact,
  Selenium: SiSelenium,
  Cypress: SiCypress,
  Playwright: SiTestinglibrary,
  Jest: SiJest,
  Cucumber: SiCucumber,
  TestNG: SiTestinglibrary,
  'Rest Assured': SiPostman,
  Webpack: SiWebpack,
  Vite: SiVite,
  Jenkins: FaJenkins,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Figma: SiFigma,
  JIRA: SiJira
};

const SkillColors = {
  // Frontend
  JavaScript: '#f7df1e',
  React: '#61dafb',
  'HTML5': '#e34f26',
  'CSS3': '#1572b6',
  'Redux Toolkit': '#764abc',
  'Tailwind CSS': '#06b6d4',
  'Ant Design': '#1890ff',
  'ShadCN UI': '#61dafb',
  
  // Backend/Languages  
  Java: '#ed8b00',
  
  // Testing
  Selenium: '#43b02a',
  Cypress: '#69d3a7',
  Playwright: '#2eac4a',
  Jest: '#c21325',
  Cucumber: '#00a818',
  TestNG: '#ff6b35',
  'Rest Assured': '#ff6c37',
  
  // Tools
  Webpack: '#8dd6f9',
  Vite: '#646cff',
  Jenkins: '#d4002a',
  Git: '#f05032',
  GitHub: '#181717',
  Figma: '#f24e1e',
  JIRA: '#0052cc'
};

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const getIcon = (skillName) => {
    const IconComponent = IconMap[skillName];
    return IconComponent ? <IconComponent /> : null;
  };

  const getSkillColor = (skillName) => {
    return SkillColors[skillName] || 'rgba(168, 85, 247, 0.9)';
  };

  return (
    <SkillsSection id="skills" ref={ref}>
      <Container>
        <SectionTitle>
          Technical <GradientText $gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #22c55e 100%)">Skills</GradientText>
        </SectionTitle>
        
        <SkillsGrid>
          {SKILLS.map((skill, skillIndex) => (
            <SkillCard key={skillIndex}>
              <SkillIcon $color={getSkillColor(skill.name)}>
                {getIcon(skill.name)}
              </SkillIcon>
              
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;