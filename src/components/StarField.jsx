import React from 'react';
import styled, { keyframes } from 'styled-components';

const twinkle = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
`;

const shoot = keyframes`
  0% { 
    transform: translateX(-100px) translateY(100px);
    opacity: 0;
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { 
    transform: translateX(100vw) translateY(-100px);
    opacity: 0;
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
`;

const snowfall = keyframes`
  0% { 
    transform: translateY(-100vh) translateX(0px) rotate(0deg);
    opacity: 0;
  }
  5% { opacity: 1; }
  95% { opacity: 1; }
  100% { 
    transform: translateY(100vh) translateX(150px) rotate(360deg);
    opacity: 0;
  }
`;

const heavySnowfall = keyframes`
  0% { 
    transform: translateY(-100vh) translateX(-50px) rotate(0deg);
    opacity: 0;
  }
  3% { opacity: 0.8; }
  97% { opacity: 0.8; }
  100% { 
    transform: translateY(100vh) translateX(80px) rotate(180deg);
    opacity: 0;
  }
`;

const snowDrift = keyframes`
  0%, 100% { transform: translateX(0px); }
  25% { transform: translateX(30px); }
  75% { transform: translateX(-15px); }
`;

const snowSwirl = keyframes`
  0%, 100% { transform: translateX(0px) rotate(0deg); }
  25% { transform: translateX(40px) rotate(90deg); }
  50% { transform: translateX(20px) rotate(180deg); }
  75% { transform: translateX(-20px) rotate(270deg); }
`;

const gentleFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
`;

const zigzag = keyframes`
  0%, 100% { transform: translateX(0px); }
  10% { transform: translateX(10px); }
  20% { transform: translateX(-5px); }
  30% { transform: translateX(15px); }
  40% { transform: translateX(-10px); }
  50% { transform: translateX(20px); }
  60% { transform: translateX(-15px); }
  70% { transform: translateX(25px); }
  80% { transform: translateX(-20px); }
  90% { transform: translateX(10px); }
`;

const StarFieldContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -10;
  display: block;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%),
    radial-gradient(ellipse at top, rgba(59, 130, 246, 0.1) 0%, transparent 60%),
    radial-gradient(ellipse at left, rgba(168, 85, 247, 0.1) 0%, transparent 60%),
    radial-gradient(ellipse at right, rgba(244, 114, 182, 0.1) 0%, transparent 60%);
  overflow: hidden;
`;

const Star = styled.div`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: ${props => props.$color};
  border-radius: 50%;
  animation: ${twinkle} ${props => props.$duration}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  box-shadow: 0 0 ${props => props.$size * 2}px ${props => props.$color};
  opacity: ${props => props.$opacity};
`;

const ShootingStar = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: linear-gradient(45deg, #ffffff, #60a5fa);
  border-radius: 50%;
  animation: ${shoot} ${props => props.$duration}s linear infinite;
  animation-delay: ${props => props.$delay}s;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, #ffffff, transparent);
    transform-origin: 0 50%;
    transform: rotate(45deg);
  }
`;

const Nebula = styled.div`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  border-radius: 50%;
  background: ${props => props.$color};
  animation: ${pulse} ${props => props.$duration}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  filter: blur(${props => props.$blur}px);
  opacity: 0.3;
`;

const Constellation = styled.div`
  position: absolute;
  top: ${props => props.$top}%;
  left: ${props => props.$left}%;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  animation: ${float} ${props => props.$duration}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
`;

const ConstellationStar = styled.div`
  position: absolute;
  width: 3px;
  height: 3px;
  background: #fbbf24;
  border-radius: 50%;
  box-shadow: 0 0 6px #fbbf24;
  
  &:nth-child(1) { top: 0; left: 0; }
  &:nth-child(2) { top: 20px; left: 30px; }
  &:nth-child(3) { top: 10px; left: 60px; }
  &:nth-child(4) { top: 40px; left: 45px; }
  &:nth-child(5) { top: 50px; left: 15px; }
`;

const ConstellationLine = styled.div`
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, #fbbf24, transparent);
  opacity: 0.4;
  
  &:nth-child(6) {
    top: 10px;
    left: 15px;
    width: 40px;
    transform: rotate(45deg);
  }
  
  &:nth-child(7) {
    top: 30px;
    left: 45px;
    width: 25px;
    transform: rotate(-30deg);
  }
`;

const Snowflake = styled.div`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: ${props => props.$color};
  border-radius: 50%;
  animation: ${snowfall} ${props => props.$duration}s linear infinite;
  animation-delay: ${props => props.$delay}s;
  opacity: ${props => props.$opacity};
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${props => props.$size * 0.8}px;
    height: 1px;
    background: ${props => props.$color};
    box-shadow: 
      0 0 0 1px ${props => props.$color},
      0 ${props => props.$size * 0.3}px 0 0 ${props => props.$color},
      0 ${props => props.$size * -0.3}px 0 0 ${props => props.$color};
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: ${props => props.$size * 0.6}px;
    height: 1px;
    background: ${props => props.$color};
    box-shadow: 
      0 0 0 1px ${props => props.$color},
      0 ${props => props.$size * 0.2}px 0 0 ${props => props.$color},
      0 ${props => props.$size * -0.2}px 0 0 ${props => props.$color};
  }
`;

const SnowParticle = styled.div`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: ${props => props.$heavy ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.8)'};
  border-radius: 50%;
  animation: ${props => props.$heavy ? heavySnowfall : snowfall} ${props => props.$duration}s linear infinite,
             ${props => props.$pattern === 'swirl' ? snowSwirl : props.$pattern === 'zigzag' ? zigzag : snowDrift} ${props => props.$duration * 0.6}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  opacity: ${props => props.$opacity};
  box-shadow: 
    0 0 ${props => props.$size * 2}px rgba(255, 255, 255, 0.6),
    0 0 ${props => props.$size * 4}px rgba(255, 255, 255, 0.3),
    inset 0 0 ${props => props.$size}px rgba(255, 255, 255, 0.8);
  filter: ${props => props.$blur ? `blur(${props.$blur}px)` : 'none'};
`;

const SnowCrystal = styled.div`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  animation: ${snowfall} ${props => props.$duration}s linear infinite,
             ${gentleFloat} ${props => props.$duration * 0.4}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  opacity: ${props => props.$opacity};
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 1px;
    box-shadow: 0 0 ${props => props.$size * 2}px rgba(255, 255, 255, 0.8);
  }
  
  &::before {
    width: ${props => props.$size}px;
    height: 2px;
    transform: translate(-50%, -50%);
  }
  
  &::after {
    width: 2px;
    height: ${props => props.$size}px;
    transform: translate(-50%, -50%);
  }
`;

const LargeSnowflake = styled.div`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  animation: ${snowfall} ${props => props.$duration}s linear infinite,
             ${snowSwirl} ${props => props.$duration * 0.8}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  opacity: ${props => props.$opacity};
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 1px;
    box-shadow: 
      0 0 ${props => props.$size * 3}px rgba(255, 255, 255, 0.9),
      0 0 ${props => props.$size * 6}px rgba(255, 255, 255, 0.4);
  }
  
  &::before {
    width: ${props => props.$size}px;
    height: 3px;
    transform: translate(-50%, -50%);
    box-shadow: 
      0 0 0 1px rgba(255, 255, 255, 0.8),
      0 ${props => props.$size * 0.3}px 0 0 rgba(255, 255, 255, 0.8),
      0 ${props => props.$size * -0.3}px 0 0 rgba(255, 255, 255, 0.8),
      ${props => props.$size * 0.2}px ${props => props.$size * 0.2}px 0 0 rgba(255, 255, 255, 0.6),
      ${props => props.$size * -0.2}px ${props => props.$size * -0.2}px 0 0 rgba(255, 255, 255, 0.6);
  }
  
  &::after {
    width: 3px;
    height: ${props => props.$size}px;
    transform: translate(-50%, -50%);
    box-shadow: 
      0 0 0 1px rgba(255, 255, 255, 0.8),
      ${props => props.$size * 0.3}px 0 0 0 rgba(255, 255, 255, 0.8),
      ${props => props.$size * -0.3}px 0 0 0 rgba(255, 255, 255, 0.8),
      ${props => props.$size * 0.2}px ${props => props.$size * 0.2}px 0 0 rgba(255, 255, 255, 0.6),
      ${props => props.$size * -0.2}px ${props => props.$size * -0.2}px 0 0 rgba(255, 255, 255, 0.6);
  }
`;

export default function StarField() {
  // Generate random stars
  const generateStars = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.8 + 0.2,
      color: [
        '#ffffff',
        '#fbbf24',
        '#60a5fa',
        '#a855f7',
        '#f472b6'
      ][Math.floor(Math.random() * 5)]
    }));
  };

  // Generate shooting stars
  const generateShootingStars = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 50,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 20 + i * 4,
    }));
  };

  // Generate nebulas
  const generateNebulas = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 200 + 100,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 10,
      blur: Math.random() * 30 + 20,
      color: [
        'radial-gradient(circle, rgba(120, 119, 198, 0.4) 0%, transparent 70%)',
        'radial-gradient(circle, rgba(255, 119, 198, 0.3) 0%, transparent 70%)',
        'radial-gradient(circle, rgba(120, 219, 255, 0.4) 0%, transparent 70%)',
        'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
      ][Math.floor(Math.random() * 4)]
    }));
  };

  // Generate constellations
  const generateConstellations = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 80 + 10,
      left: Math.random() * 80 + 10,
      size: Math.random() * 30 + 50,
      duration: Math.random() * 20 + 30,
      delay: Math.random() * 10,
    }));
  };

  const stars = generateStars(100);
  const shootingStars = generateShootingStars(3);
  const nebulas = generateNebulas(5);
  const constellations = generateConstellations(3);

  return (
    <StarFieldContainer>
      {/* Background Stars */}
      {stars.map((star) => (
        <Star
          key={star.id}
          $size={star.size}
          $color={star.color}
          $duration={star.duration}
          $delay={star.delay}
          $opacity={star.opacity}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <ShootingStar
          key={star.id}
          $duration={star.duration}
          $delay={star.delay}
          style={{
            top: `${star.top}%`,
            left: '0%',
          }}
        />
      ))}

      {/* Nebulas */}
      {nebulas.map((nebula) => (
        <Nebula
          key={nebula.id}
          $size={nebula.size}
          $color={nebula.color}
          $duration={nebula.duration}
          $delay={nebula.delay}
          $blur={nebula.blur}
          style={{
            top: `${nebula.top}%`,
            left: `${nebula.left}%`,
          }}
        />
      ))}

      {/* Constellations */}
      {constellations.map((constellation) => (
        <Constellation
          key={constellation.id}
          $top={constellation.top}
          $left={constellation.left}
          $size={constellation.size}
          $duration={constellation.duration}
          $delay={constellation.delay}
        >
          <ConstellationStar />
          <ConstellationStar />
          <ConstellationStar />
          <ConstellationStar />
          <ConstellationStar />
          <ConstellationLine />
          <ConstellationLine />
        </Constellation>
      ))}
    </StarFieldContainer>
  );
}