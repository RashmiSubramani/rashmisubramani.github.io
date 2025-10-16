import React, { useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { 
    FaGithub, 
    FaExternalLinkAlt, 
    FaCode, 
    FaMobile, 
    FaServer, 
    FaRobot,
    FaStar,
    FaCalendarAlt,
    FaCheckCircle
} from 'react-icons/fa';
import { Container, Section, GradientText, Card, Badge, Grid, Button, float } from '../styles/GlobalStyles';
import { PROJECTS, PROJECT_CATEGORIES, TECH_STACK_COLORS } from '../data/projects-data';

const ProjectsSection = styled(Section)`
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

const CategoryFilter = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
        margin-bottom: 1.5rem;
        gap: 0.75rem;
    }
`;

const FilterButton = styled.button`
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
    border: 2px solid ${props => props.$active ? 'rgba(168, 85, 247, 0.6)' : 'rgba(168, 85, 247, 0.3)'};
    background: ${props => props.$active ? 'rgba(168, 85, 247, 0.2)' : 'rgba(30, 27, 75, 0.3)'};
    color: white;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(15px);

    &:hover {
        background: rgba(168, 85, 247, 0.2);
        border-color: rgba(168, 85, 247, 0.6);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(168, 85, 247, 0.3);
    }
`;

const ProjectCard = styled(Card)`
    background: linear-gradient(135deg,
        rgba(30, 27, 75, 0.4) 0%,
        rgba(55, 48, 163, 0.3) 100%
    );
    backdrop-filter: blur(15px);
    border: 1px solid rgba(168, 85, 247, 0.2);
    color: white;
    position: relative;
    z-index: 1;
    overflow: hidden;
    transition: all 0.4s ease;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(168, 85, 247, 0.1);
    padding: 2rem;
    min-height: 400px;
    display: flex;
    flex-direction: column;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(168, 85, 247, 0.3);
        background: linear-gradient(135deg,
            rgba(30, 27, 75, 0.6) 0%,
            rgba(55, 48, 163, 0.5) 100%
        );
        border-color: rgba(168, 85, 247, 0.4);
    }

    ${props => props.$highlight && `
        border: 2px solid rgba(251, 191, 36, 0.6);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 30px rgba(251, 191, 36, 0.4);

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%);
        }

        &:hover {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 40px rgba(251, 191, 36, 0.5);
        }
    `}

    @media (max-width: 768px) {
        padding: 1.5rem;
        min-height: 350px;
    }
`;

const ProjectHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.95);
    margin-bottom: 0.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    line-height: 1.2;

    @media (max-width: 768px) {
        font-size: 1.25rem;
        gap: 0.375rem;
    }
`;

const ProjectCategory = styled.div`
    font-size: 0.875rem;
    color: rgba(168, 85, 247, 0.8);
    font-weight: 400;
`;

const ProjectStatus = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: #22c55e;
    font-weight: 400;
`;

const ProjectDescription = styled.p`
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 1.25rem;
    font-size: 0.95rem;
`;

const ProjectFeatures = styled.div`
    margin-bottom: 1rem;
`;

const FeaturesTitle = styled.h4`
    font-size: 0.9rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0.5rem;
`;

const FeaturesList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.375rem;
`;

const FeatureItem = styled.li`
    display: flex;
    align-items: flex-start;
    gap: 0.375rem;
    font-size: 0.825rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.4;

    &::before {
        content: '•';
        color: rgba(168, 85, 247, 0.8);
        font-weight: bold;
        margin-top: 0.1rem;
        flex-shrink: 0;
    }
`;

const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    margin-bottom: 1.25rem;
    margin-top: auto;

    @media (max-width: 768px) {
        gap: 0.25rem;
        margin-bottom: 1rem;
    }
`;

const TechBadge = styled(Badge)`
    background: ${props => TECH_STACK_COLORS[props.$tech] || '#667eea'};
    color: ${props => {
        const lightColors = ['#FFCA28', '#F7DF1E']; // Firebase, JavaScript
        const techColor = TECH_STACK_COLORS[props.$tech];
        return lightColors.includes(techColor) ? '#1a1a1a' : 'white';
    }};
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
    font-weight: 500;
    border-radius: 12px;
`;

const ProjectActions = styled.div`
    display: flex;
    gap: 0.75rem;
    margin-top: auto;
`;

const ActionButton = styled(Button)`
    flex: 1;
    padding: 0.6rem 0.8rem;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;

    @media (max-width: 768px) {
        padding: 0.5rem 0.6rem;
        font-size: 0.75rem;
        gap: 0.25rem;
    }
`;

const HighlightBadge = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    z-index: 2;
`;

const ProjectMeta = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
`;

const Projects = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const filteredProjects = selectedCategory === 'All' 
        ? PROJECTS 
        : PROJECTS.filter(project => project.category === selectedCategory);

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Full Stack Web Application': return <FaCode />;
            case 'Frontend Web Application': return <FaCode />;
            case 'Developer Tool': return <FaRobot />;
            case 'Mobile Application': return <FaMobile />;
            case 'API Development': return <FaServer />;
            case 'Test Automation Framework': return <FaRobot />;
            default: return <FaCode />;
        }
    };

    return (
        <ProjectsSection id="projects" ref={ref}>
            <Container>
                <SectionTitle>
                    Featured <GradientText $gradient="linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)">Projects</GradientText>
                </SectionTitle>
                
                <CategoryFilter>
                    {PROJECT_CATEGORIES.map(category => (
                        <FilterButton
                            key={category}
                            $active={selectedCategory === category}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </FilterButton>
                    ))}
                </CategoryFilter>
                
                <Grid $minWidth="300px" $gap="1.5rem">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} $highlight={project.highlight}>
                            {project.highlight && (
                                <HighlightBadge>
                                    <FaStar size={12} />
                                    Featured
                                </HighlightBadge>
                            )}

                            <ProjectHeader>
                                <div>
                                    <ProjectTitle>
                                        {getCategoryIcon(project.category)}
                                        {project.title}
                                    </ProjectTitle>
                                    <ProjectCategory>{project.category}</ProjectCategory>
                                </div>
                                <ProjectStatus>
                                    <FaCheckCircle size={14} />
                                    {project.status}
                                </ProjectStatus>
                            </ProjectHeader>

                            <ProjectDescription>
                                {project.description}
                            </ProjectDescription>

                            <ProjectFeatures>
                                <FeaturesTitle>Key Features</FeaturesTitle>
                                <FeaturesList>
                                    {project.features.slice(0, 3).map((feature, index) => (
                                        <FeatureItem key={index}>
                                            {feature}
                                        </FeatureItem>
                                    ))}
                                </FeaturesList>
                            </ProjectFeatures>

                            <TechStack>
                                {project.technologies.slice(0, 6).map((tech, index) => (
                                    <TechBadge key={index} $tech={tech}>
                                        {tech}
                                    </TechBadge>
                                ))}
                                {project.technologies.length > 6 && (
                                    <TechBadge>
                                        +{project.technologies.length - 6} more
                                    </TechBadge>
                                )}
                            </TechStack>

                            <ProjectActions>
                                <ActionButton
                                    $variant="outline"
                                    as="a"
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub />
                                    Code
                                </ActionButton>
                                {project.liveUrl && (
                                    <ActionButton
                                        $variant="primary"
                                        as="a"
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaExternalLinkAlt />
                                        Demo
                                    </ActionButton>
                                )}
                            </ProjectActions>
                        </ProjectCard>
                    ))}
                </Grid>
            </Container>
        </ProjectsSection>
    );
};

export default Projects;