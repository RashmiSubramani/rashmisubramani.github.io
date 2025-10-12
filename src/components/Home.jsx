import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTwitter,
  FaDownload,
} from "react-icons/fa";
import profilePic from "../images/solo.jpeg";
import {
  Container,
  Button,
  GradientText,
  FlexCenter,
  float,
  pulse,
  shimmer,
} from "../styles/GlobalStyles";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: transparent;
  position: relative;
  overflow: hidden;

`;

const HeroContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  color: white;
`;

const Greeting = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TypedContainer = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  height: 60px;
  display: flex;
  align-items: center;

  .typed-cursor {
    color: #4facfe;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Subtitle = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2rem;
  max-width: 90%;

  p {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

const HeroButtons = styled(FlexCenter)`
  gap: 1rem;
  margin-bottom: 3rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const SocialLinks = styled(FlexCenter)`
  gap: 1.5rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const BackgroundCircle = styled.div`
  position: absolute;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  animation: ${pulse} 4s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 50%;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7);
    z-index: -1;
    animation: ${float} 6s ease-in-out infinite;
    opacity: 0.6;
  }

  &::after {
    content: "";
    position: absolute;
    top: 20%;
    left: 20%;
    right: 20%;
    bottom: 20%;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 70%
    );
    animation: ${shimmer} 3s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
  }
`;

export default function Home() {
  const roles = [
    "Senior Software Engineer",
    "Frontend Expert",
    "Test Automation Engineer",
  ];

  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent>
          <Greeting>
            Hi, I'm{" "}
            <GradientText $gradient="linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)">
              Rashmi
            </GradientText>
          </Greeting>

          <TypedContainer>
            <ReactTyped
              strings={roles}
              typeSpeed={50}
              backSpeed={30}
              backDelay={2000}
              loop
            />
          </TypedContainer>

          <Title>
            I build scalable frontend solutions and robust automation frameworks
            that turn ideas into reality
          </Title>

          <Subtitle>
            <p>
              Bridging creativity and precision through elegant UI design and
              bulletproof test automation, I drive quality, scalability, and
              efficiency — empowering teams with systems and strategies that
              scale effortlessly.
            </p>
          </Subtitle>

          <HeroButtons>
            <Button $variant="primary" as={Link} to="/contact">
              Let's Connect
            </Button>
            <Button 
              $variant="outline" 
              as="a" 
              href="/resume.pdf" 
              download="Rashmi_Subramani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload style={{ marginRight: "0.5rem" }} />
              Get Resume
            </Button>
          </HeroButtons>

          <SocialLinks>
            <SocialLink
              href="https://www.linkedin.com/in/rashmi-subramani-851b32ba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href="https://github.com/RashmiSubramani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </SocialLink>
            <SocialLink
              href="mailto:rashmisubramani15@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </SocialLink>
            <SocialLink
              href="https://twitter.com/RashmiSubramani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </SocialLink>
          </SocialLinks>
        </HeroContent>

        <ImageContainer>
          <BackgroundCircle />
          <ProfileImage src={profilePic} alt="Rashmi Subramani" />
        </ImageContainer>
      </HeroContainer>
    </HeroSection>
  );
}
