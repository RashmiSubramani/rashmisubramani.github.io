import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import {
  FaCertificate,
  FaAward,
  FaCode,
  FaTools,
  FaGraduationCap,
} from "react-icons/fa";
import { CERTIFICATIONS } from "../data/portfolio-data";
import {
  Container,
  Section,
  GradientText,
  Card,
  Badge,
  Grid,
  float,
  pulse,
} from "../styles/GlobalStyles";

const CertificationsSection = styled(Section)`
  background: transparent;
  color: white;
  position: relative;
  overflow: hidden;
  font-family: var(--font-Merienda-One);
  margin-top: 3rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 25% 25%,
        rgba(59, 130, 246, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 75% 75%,
        rgba(168, 85, 247, 0.08) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 50% 50%,
        rgba(34, 197, 94, 0.06) 0%,
        transparent 70%
      );
    opacity: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="0.8" fill="rgba(59,130,246,0.15)"/><circle cx="80" cy="80" r="1" fill="rgba(168,85,247,0.12)"/><circle cx="50" cy="10" r="0.6" fill="rgba(34,197,94,0.1)"/><circle cx="10" cy="90" r="0.9" fill="rgba(59,130,246,0.08)"/></svg>')
      repeat;
    background-size: 120px 120px;
    opacity: 0;
    animation: ${float} 30s linear infinite;
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
    margin-bottom: 1.5rem;

    &::after {
      width: 60px;
      height: 3px;
    }
  }
`;

const CertificationCard = styled.div`
  /* Always use dark theme for now to test */
  background: linear-gradient(
    135deg,
    rgba(30, 27, 75, 0.4) 0%,
    rgba(55, 48, 163, 0.3) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(168, 85, 247, 0.1);
  backdrop-filter: blur(15px);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(59, 130, 246, 0.1) 0%,
      rgba(168, 85, 247, 0.1) 50%,
      rgba(34, 197, 94, 0.1) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    border-radius: 20px;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(168, 85, 247, 0.3);
    background: linear-gradient(
      135deg,
      rgba(30, 27, 75, 0.6) 0%,
      rgba(55, 48, 163, 0.4) 100%
    );
    border-color: rgba(255, 255, 255, 0.2);
  }

  &:hover::before {
    opacity: 1;
  }
`;

const CertificationIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${(props) => getCategoryGradient(props.$category)};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

  ${CertificationCard}:hover & {
    transform: scale(1.08);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }
`;

const CertificationYear = styled.div`
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 1.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);

  ${CertificationCard}:hover & {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
  }
`;

const CertificationName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 1rem;
  line-height: 1.4;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  ${CertificationCard}:hover & {
    color: #ffffff;
    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
`;

const CertificationDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  ${CertificationCard}:hover & {
    color: rgba(255, 255, 255, 0.9);
    transform: translateY(-1px);
  }
`;

const CategoryBadge = styled.div`
  background: ${(props) => getCategoryColor(props.$category)};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 400;
  display: inline-block;
  margin-bottom: 1rem;
  margin-left: 1rem;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  ${CertificationCard}:hover & {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
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
  padding: 0.6rem 1.5rem;
  border-radius: 2rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: ${(props) =>
    props.$active ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)"};
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  font-size: 0.875rem;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

function getCategoryGradient(category) {
  switch (category) {
    case "Programming":
      return "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)";
    case "Frontend Development":
      return "linear-gradient(135deg, #a855f7 0%, #8b5cf6 100%)";
    case "Test Automation":
      return "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)";
    case "DevOps":
      return "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)";
    case "Agile & Management":
      return "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)";
    case "Computer Science":
      return "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)";
    case "System Design":
      return "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)";
    case "API Testing":
      return "linear-gradient(135deg, #10b981 0%, #059669 100%)";
    default:
      return "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)";
  }
}

function getCategoryColor(category) {
  switch (category) {
    case "Programming":
      return "#3b82f6";
    case "Frontend Development":
      return "#a855f7";
    case "Test Automation":
      return "#06b6d4";
    case "DevOps":
      return "#22c55e";
    case "Agile & Management":
      return "#f59e0b";
    case "Computer Science":
      return "#8b5cf6";
    case "System Design":
      return "#ef4444";
    case "API Testing":
      return "#10b981";
    default:
      return "#3b82f6";
  }
}

function getCategoryIcon(category) {
  switch (category) {
    case "Programming":
      return <FaCode />;
    case "Frontend Development":
      return <FaCode />;
    case "Test Automation":
      return <FaTools />;
    case "DevOps":
      return <FaTools />;
    case "Agile & Management":
      return <FaAward />;
    case "Computer Science":
      return <FaGraduationCap />;
    case "System Design":
      return <FaTools />;
    case "API Testing":
      return <FaTools />;
    default:
      return <FaCertificate />;
  }
}

export default function Certifications() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const categories = [
    "All",
    ...new Set(CERTIFICATIONS.map((cert) => cert.category)),
  ];

  const filteredCertifications =
    selectedCategory === "All"
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((cert) => cert.category === selectedCategory);

  return (
    <CertificationsSection id="certifications" ref={ref}>
      <Container>
        <SectionTitle>
          Professional <GradientText>Certifications</GradientText>
        </SectionTitle>

        <CategoryFilter>
          {categories.map((category) => (
            <FilterButton
              key={category}
              $active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </CategoryFilter>

        <Grid $minWidth="280px" $gap="1.5rem">
          {filteredCertifications.map((cert) => (
            <CertificationCard key={cert.id}>
              <CertificationIcon $category={cert.category}>
                {getCategoryIcon(cert.category)}
              </CertificationIcon>

              <CertificationYear>{cert.completionYear}</CertificationYear>

              <CategoryBadge $category={cert.category}>
                {cert.category}
              </CategoryBadge>

              <CertificationName>{cert.certificationName}</CertificationName>

              <CertificationDescription>
                {cert.certificateDescription}
              </CertificationDescription>
            </CertificationCard>
          ))}
        </Grid>
      </Container>
    </CertificationsSection>
  );
}
