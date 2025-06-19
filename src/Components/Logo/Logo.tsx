// components/common/Logo.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from '../../assets/images/Logo.png';

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const LogoImage = styled.img`
  width: 150px;
  height: 150px;
  user-select: none;
`;

const LogoText = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #4CAF50;
  margin: 0;
  letter-spacing: -0.5px;
  user-select: none;
`;

export const Logo: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <LogoWrapper onClick={handleLogoClick}>
      <LogoImage src={logoImg} alt="꼬두라미 로고" />
    </LogoWrapper>
  );
};

export default Logo;