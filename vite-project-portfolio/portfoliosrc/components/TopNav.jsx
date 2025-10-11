import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/photoLogo.png";

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${(props) =>
    props.$isScrolled
      ? "linear-gradient(135deg, rgba(30, 27, 75, 0.95) 0%, rgba(55, 48, 163, 0.95) 50%, rgba(168, 85, 247, 0.95) 100%)"
      : "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(30, 27, 75, 0.3) 50%, rgba(0, 0, 0, 0.2) 100%)"};
  backdrop-filter: blur(15px);
  border-bottom: ${(props) =>
    props.$isScrolled
      ? "1px solid rgba(168, 85, 247, 0.3)"
      : "1px solid rgba(255, 255, 255, 0.2)"};
  padding: 1rem 0;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.$isScrolled
      ? "0 4px 32px rgba(168, 85, 247, 0.2), 0 2px 16px rgba(0, 0, 0, 0.3)"
      : "0 2px 16px rgba(0, 0, 0, 0.2), 0 1px 8px rgba(0, 0, 0, 0.1)"};
`;

const NavContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  width: 100%;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
  }
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-left: 1rem;
  filter: ${(props) =>
    props.$isScrolled
      ? "brightness(1.2) contrast(1.1)"
      : "brightness(1) contrast(1)"};

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${(props) => (props.$isOpen ? "0" : "-100%")};
    height: 100vh;
    width: 100%;
    background: linear-gradient(
      135deg,
      rgba(30, 27, 75, 0.95) 0%,
      rgba(55, 48, 163, 0.95) 50%,
      rgba(168, 85, 247, 0.95) 100%
    );
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    transition: all 0.3s ease;
    z-index: 999;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (min-width: 1025px) {
    gap: 2.5rem;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.125rem;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.5px;

  &:hover {
    background: ${(props) =>
      props.$isScrolled
        ? "rgba(168, 85, 247, 0.2)"
        : "rgba(255, 255, 255, 0.15)"};
    transform: translateY(-2px);
    border-radius: 8px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #a855f7 0%, #3b82f6 50%, #06b6d4 100%);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 80%;
  }

  ${(props) =>
    props.$active &&
    `
    &::after {
      width: 80%;
    }
  `}

  @media (max-width: 768px) {
    color: white;
    font-size: 1.75rem;
    padding: 1rem 1.5rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: block;
    z-index: 1001;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export default function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/certifications", label: "Certifications" },
    { to: "/experience", label: "Experience" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <NavContainer $isScrolled={isScrolled}>
      <NavContent>
        {/* Logo - Far Left */}
        <Logo src={logo} alt="Rashmi Subramani" $isScrolled={isScrolled} />

        {/* Navigation Links - Center */}
        <NavLinks $isOpen={isMobileMenuOpen}>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                $isScrolled={isScrolled}
                $active={isLinkActive(item.to)}
                onClick={closeMobileMenu}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </NavLinks>

        {/* Mobile Menu Button */}
        <NavActions>
          <MobileMenuButton
            $isScrolled={isScrolled}
            onClick={handleMobileMenuToggle}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </NavActions>
      </NavContent>
    </NavContainer>
  );
}
