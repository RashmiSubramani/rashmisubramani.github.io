import styled, { createGlobalStyle, keyframes } from 'styled-components';

// Enhanced keyframes for animations
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(79, 172, 254, 0.3); }
  50% { box-shadow: 0 0 30px rgba(79, 172, 254, 0.6); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    background: transparent;
  }

  body {
    font-family: 'Merienda One', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    color: white;
    background: transparent;
    overflow-x: hidden;
    overflow-y: overlay; /* Use overlay scrolling when supported */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background 0.5s ease, color 0.5s ease;
    min-height: 100vh;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
  }

  body::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  /* Show scrollbar only when actively scrolling */
  body.scrolling::-webkit-scrollbar {
    width: 8px;
  }

  body.scrolling::-webkit-scrollbar-thumb {
    background: rgba(168, 85, 247, 0.6);
    border-radius: 4px;
  }

  body.scrolling::-webkit-scrollbar-track {
    background: transparent;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.025em;
  }

  h1 { font-size: clamp(2.5rem, 5vw, 4rem); }
  h2 { font-size: clamp(2rem, 4vw, 3rem); }
  h3 { font-size: clamp(1.5rem, 3vw, 2rem); }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:focus {
      outline: 2px solid #60a5fa;
      outline-offset: 2px;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Enhanced Custom Scrollbar - Hidden by default, shows on scroll */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(168, 85, 247, 0.6);
  }

  /* Show scrollbar on scroll */
  ::-webkit-scrollbar-thumb:active {
    background: rgba(168, 85, 247, 0.8);
  }

  /* Auto-hide scrollbar for Webkit browsers */
  * {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
  }

  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 4px;
    transition: background 0.3s ease;
  }

  /* Show scrollbar on hover over scrollable content */
  *:hover::-webkit-scrollbar-thumb {
    background: rgba(168, 85, 247, 0.4);
  }

  *:hover::-webkit-scrollbar-thumb:hover {
    background: rgba(168, 85, 247, 0.8);
  }

  /* Enhanced Selection Styles */
  ::selection {
    background: #bfdbfe;
    color: #1e3a8a;
  }

  ::-moz-selection {
    background: #bfdbfe;
    color: #1e3a8a;
  }

  /* Focus styles for accessibility */
  *:focus-visible {
    outline: 2px solid #60a5fa;
    outline-offset: 2px;
  }
`;

// Export keyframes for use in components
export { float, pulse, shimmer, glow, fadeInUp, slideInLeft, slideInRight };

// Common styled components
export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Section = styled.section`
  padding: 6rem 0;
  position: relative;

  /* Add subtle transition borders between sections */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent);
    z-index: 10;
  }

  /* Connect sections with gradient overlay */
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(59, 130, 246, 0.1) 25%, 
      rgba(168, 85, 247, 0.1) 50%, 
      rgba(34, 197, 94, 0.1) 75%, 
      transparent 100%
    );
    z-index: 9;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

export const GradientText = styled.span`
  background: ${props => props.$gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
`;

export const Card = styled.div`
  background: linear-gradient(135deg, rgba(30, 27, 75, 0.4) 0%, rgba(55, 48, 163, 0.3) 100%);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(168, 85, 247, 0.1);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  backdrop-filter: blur(15px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(34, 197, 94, 0.2) 100%);
    opacity: 0;
    transition: opacity 0.5s ease;
    border-radius: 20px;
  }

  &:hover {
    transform: translateY(-12px) scale(1.03);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(168, 85, 247, 0.3);
    
    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 16px;
    
    &:hover {
      transform: translateY(-6px) scale(1.02);
    }
  }
`;

export const GlassCard = styled(Card)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 20px 40px 0 rgba(31, 38, 135, 0.5);
  }
`;

export const Button = styled.button`
  padding: 0.875rem 2rem;
  border-radius: 1rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  ${props => props.$variant === 'primary' && `
    background: linear-gradient(135deg, rgba(30, 27, 75, 0.95) 0%, rgba(55, 48, 163, 0.95) 50%, rgba(168, 85, 247, 0.95) 100%);
    color: white;
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px 0 rgba(116, 79, 168, 0.8);
    }
    
    &:active {
      transform: translateY(-1px);
    }
  `}

  ${props => props.$variant === 'outline' && `
    background: transparent;
    border: 2px solid #3b82f6;
    color: #3b82f6;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      transition: width 0.3s ease;
      z-index: -1;
    }
    
    &:hover {
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(14, 165, 233, 0.3);
      
      &::after {
        width: 100%;
      }
    }
  `}

  ${props => props.$variant === 'ghost' && `
    background: transparent;
    color: #4b5563;
    
    &:hover {
      background: #f3f4f6;
      transform: translateY(-1px);
    }
  `}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.$minWidth || '300px'}, 1fr));
  gap: ${props => props.$gap || '2rem'};
  margin: 2rem 0;
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.$gap || '1rem'};
  flex-wrap: ${props => props.$wrap || 'nowrap'};
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  background: #dbeafe;
  color: #1e40af;

  ${props => props.$variant === 'success' && `
    background: #d1fae5;
    color: #065f46;
  `}

  ${props => props.$variant === 'warning' && `
    background: #fef3c7;
    color: #92400e;
  `}

  ${props => props.$variant === 'error' && `
    background: #fee2e2;
    color: #991b1b;
  `}
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.$progress || 0}%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: inherit;
    transition: width 1s ease-in-out;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.$size || '3rem'};
  height: ${props => props.$size || '3rem'};
  border-radius: 0.75rem;
  background: ${props => props.$background || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  color: white;
  font-size: ${props => props.$iconSize || '1.5rem'};
  margin-bottom: 1rem;
`;

// Add floating progress dots for section navigation
export const SectionIndicator = styled.div`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    right: 1rem;
    gap: 0.8rem;
  }
`;

export const IndicatorDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.$active 
    ? 'linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #22c55e 100%)'
    : 'rgba(255, 255, 255, 0.3)'
  };
  border: 2px solid ${props => props.$active ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.2)'};
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${props => props.$active ? '20px' : '8px'};
    height: ${props => props.$active ? '20px' : '8px'};
    background: ${props => props.$active 
      ? 'linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #22c55e 100%)'
      : 'transparent'
    };
    border-radius: 50%;
    opacity: ${props => props.$active ? '0.3' : '0'};
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(1.2);
    background: linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #22c55e 100%);
  }
`;