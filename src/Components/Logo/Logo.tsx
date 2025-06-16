// components/common/Logo.tsx
import React from 'react';
import styled from 'styled-components';
import logoImg from '../../assets/images/Logo.png';

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
`;

const LogoImage = styled.img`
  width: 150px;
  height: 150px;
`;

const LogoText = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #4CAF50;
  margin: 0;
  letter-spacing: -0.5px;
`;

export const Logo: React.FC = () => {
  return (
    <LogoWrapper>
      <LogoImage src={logoImg} alt="꼬두라미 로고" />
    </LogoWrapper>
  );
};