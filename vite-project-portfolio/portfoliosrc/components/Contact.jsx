import React, { useState } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTwitter,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaAt,
  FaComment,
} from "react-icons/fa";
import {
  Container,
  Section,
  GradientText,
  Button,
  Card,
  float,
  shimmer,
  pulse,
} from "../styles/GlobalStyles";

const ContactSection = styled(Section)`
  background: transparent;
  color: white;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  color: white;

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

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 4rem;
  opacity: 0.9;
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled(Card)`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.08) 100%
  );
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.12) 100%
    );
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const ContactForm = styled(Card)`
  background: linear-gradient(
    135deg,
    rgba(30, 27, 75, 0.4) 0%,
    rgba(55, 48, 163, 0.3) 100%
  );
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(118, 75, 162, 0.15);

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(30, 27, 75, 0.6) 0%,
      rgba(55, 48, 163, 0.4) 100%
    );
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(168, 85, 247, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: white;
`;

const FormTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: white;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.06) 100%
  );
  border-radius: 16px;
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.15);

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(255, 255, 255, 0.15) 100%
    );
    transform: translateX(15px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const InfoIcon = styled.div`
  width: 55px;
  height: 55px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
  animation: ${pulse} 3s ease-in-out infinite;
  box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const InfoText = styled.div`
  flex: 1;
`;

const InfoLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 0.25rem;
`;

const InfoValue = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
  position: relative;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  z-index: 2;
  color: #60a5fa;
  font-size: 1.1rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: white;

  &:focus {
    outline: none;
    border-color: #f093fb;
    box-shadow: 0 0 0 3px rgba(240, 147, 251, 0.15),
      0 4px 12px rgba(168, 85, 247, 0.15);
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.25);
  }

  &:hover {
    border-color: rgba(240, 147, 251, 0.4);
    box-shadow: 0 4px 12px rgba(168, 85, 247, 0.12);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.15);
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: white;

  &:focus {
    outline: none;
    border-color: #f093fb;
    box-shadow: 0 0 0 3px rgba(240, 147, 251, 0.15),
      0 4px 12px rgba(168, 85, 247, 0.15);
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.25);
  }

  &:hover {
    border-color: rgba(240, 147, 251, 0.4);
    box-shadow: 0 4px 12px rgba(168, 85, 247, 0.12);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  padding: 1rem 2rem;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
`;

const SocialLink = styled.a`
  width: 60px;
  height: 60px;
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
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${(props) => getSocialGradient(props.$platform)};
    transition: left 0.3s ease;
    z-index: -1;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

    &::before {
      left: 0;
    }
  }
`;

const FloatingElement = styled.div`
  position: absolute;
  width: ${(props) => props.$size || "20px"};
  height: ${(props) => props.$size || "20px"};
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%);
  border-radius: 50%;
  opacity: 0.4;
  animation: ${float} ${(props) => props.$duration || "6s"} ease-in-out infinite;
  top: ${(props) => props.$top || "20%"};
  left: ${(props) => props.$left || "20%"};
  z-index: 0;
  box-shadow: 0 4px 15px rgba(240, 147, 251, 0.3);

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 60%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.8) 0%,
      transparent 70%
    );
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`;

function getSocialGradient(platform) {
  switch (platform) {
    case "linkedin":
      return "linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)";
    case "github":
      return "linear-gradient(135deg, #333 0%, #666 100%)";
    case "email":
      return "linear-gradient(135deg, #ea4335 0%, #fbbc05 100%)";
    case "twitter":
      return "linear-gradient(135deg, #1da1f2 0%, #1991db 100%)";
    default:
      return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  }
}

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    window.location.href = `mailto:rashmisubramani15@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <ContactSection id="contact" ref={ref}>
      <FloatingElement $size="30px" $top="10%" $left="5%" $duration="8s" />
      <FloatingElement $size="20px" $top="80%" $left="10%" $duration="12s" />
      <FloatingElement $size="25px" $top="20%" $left="90%" $duration="10s" />
      <FloatingElement $size="15px" $top="70%" $left="85%" $duration="15s" />

      <Container>
        <SectionTitle>
          Let's{" "}
          <GradientText $gradient="linear-gradient(90deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)">
            Connect
          </GradientText>
        </SectionTitle>

        <SectionSubtitle>
          Ready to collaborate on exciting projects? Let's discuss how we can
          work together to bring your ideas to life.
        </SectionSubtitle>

        <ContactContainer>
          <ContactInfo>
            <InfoTitle>Get in Touch</InfoTitle>

            <InfoItem>
              <InfoIcon>
                <FaEnvelope />
              </InfoIcon>
              <InfoText>
                <InfoLabel>Email</InfoLabel>
                <InfoValue>rashmisubramani15@gmail.com</InfoValue>
              </InfoText>
            </InfoItem>

            <InfoItem>
              <InfoIcon>
                <FaMapMarkerAlt />
              </InfoIcon>
              <InfoText>
                <InfoLabel>Location</InfoLabel>
                <InfoValue>India</InfoValue>
              </InfoText>
            </InfoItem>

            <InfoItem>
              <InfoIcon>
                <FaLinkedin />
              </InfoIcon>
              <InfoText>
                <InfoLabel>LinkedIn</InfoLabel>
                <InfoValue>Connect with me professionally</InfoValue>
              </InfoText>
            </InfoItem>

            <SocialLinks>
              <SocialLink
                href="https://www.linkedin.com/in/rashmi-subramani-851b32ba/"
                target="_blank"
                rel="noopener noreferrer"
                $platform="linkedin"
              >
                <FaLinkedin />
              </SocialLink>
              <SocialLink
                href="https://github.com/RashmiSubramani"
                target="_blank"
                rel="noopener noreferrer"
                $platform="github"
              >
                <FaGithub />
              </SocialLink>
              <SocialLink
                href="mailto:rashmisubramani15@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                $platform="email"
              >
                <FaEnvelope />
              </SocialLink>
              <SocialLink
                href="https://twitter.com/RashmiSubramani"
                target="_blank"
                rel="noopener noreferrer"
                $platform="twitter"
              >
                <FaTwitter />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>

          <ContactForm>
            <FormTitle>Send a Message</FormTitle>

            <form onSubmit={sendEmail}>
              <FormGroup>
                <InputWrapper>
                  <InputIcon>
                    <FaUser />
                  </InputIcon>
                  <FormInput
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </InputWrapper>
              </FormGroup>

              <FormGroup>
                <InputWrapper>
                  <InputIcon>
                    <FaAt />
                  </InputIcon>
                  <FormInput
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </InputWrapper>
              </FormGroup>

              <FormGroup>
                <InputWrapper>
                  <InputIcon>
                    <FaComment />
                  </InputIcon>
                  <FormTextarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </InputWrapper>
              </FormGroup>

              <SubmitButton
                type="submit"
                $variant="primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </SubmitButton>
            </form>
          </ContactForm>
        </ContactContainer>
      </Container>
    </ContactSection>
  );
}
