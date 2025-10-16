import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { StarField, ScrollHandler, TopNav } from './';
import styled from 'styled-components';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const NavigationArrow = styled.button`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, 
    rgba(168, 85, 247, 0.3) 0%, 
    rgba(59, 130, 246, 0.3) 100%
  );
  backdrop-filter: blur(15px);
  border: 1px solid rgba(168, 85, 247, 0.4);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  &:hover {
    background: linear-gradient(135deg, 
      rgba(168, 85, 247, 0.5) 0%, 
      rgba(59, 130, 246, 0.5) 100%
    );
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 12px 40px rgba(168, 85, 247, 0.4);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

const RightArrow = styled(NavigationArrow)`
  right: 0.5rem;

  @media (max-width: 768px) {
    right: 0.5rem;
  }
`;

const LeftArrow = styled(NavigationArrow)`
  left: 0.5rem;

  @media (max-width: 768px) {
    left: 0.5rem;
  }
`;

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = ['/', '/about', '/skills', '/projects', '/certifications', '/experience', '/contact'];
  const currentIndex = routes.indexOf(location.pathname);

  const goToNext = () => {
    if (currentIndex < routes.length - 1) {
      navigate(routes[currentIndex + 1]);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      navigate(routes[currentIndex - 1]);
    }
  };

  return (
    <>
      <StarField />
      <ScrollHandler />
      <div style={{ background: 'transparent' }}>
        <TopNav />
        <Outlet />
        
        <LeftArrow 
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          title="Previous page"
        >
          <FaChevronLeft />
        </LeftArrow>

        <RightArrow 
          onClick={goToNext}
          disabled={currentIndex === routes.length - 1}
          title="Next page"
        >
          <FaChevronRight />
        </RightArrow>
      </div>
    </>
  );
}