import React from 'react';
import styled from 'styled-components';
import logoImage from "../../assets/images/Logo.png";

const HeaderWrapper = styled.header`
  background-color: #FFEFD5;
  padding: 8px 24px;
  display: flex;
  justify-content: center;
  height: 60px; /* 높이 고정 */
  position: relative;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
`;

const LogoImage = styled.img`
  height: 145px; /* 원하는 크기로 설정 */
  width: auto;
  object-fit: contain;
  position: relative;
  top: -10px; /* 로고만 위로 올리기 */
  
  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s ease;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 32px;
  font-size: 17px;
  font-weight: 700;
  align-items: center;
  
  span {
    cursor: pointer;
    color: #000000;
    
    &:hover {
      opacity: 0.7;
      transition: opacity 0.2s ease;
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Inner>
        <LogoContainer>
          <LogoImage src={logoImage} alt="꼬두라미" />
        </LogoContainer>
        <Nav>
          <span>신고상황</span>
          <span>커뮤니티</span>
          <span>지원금 및 세미나 정보</span>
        </Nav>
      </Inner>
    </HeaderWrapper>
  );
};

export default Header;