import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #FFEFD5;
  padding: 12px 24px;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #2E7D32;
`;

const Nav = styled.nav`
  display: flex;
  gap: 24px;
  font-size: 14px;
  font-weight: 500;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Inner>
        <Logo>꼬두라미</Logo>
        <Nav>
          <span>신고상황</span>
          <span>커뮤니티</span>
          <span>지원금 및 세미나 정보</span>
          <span>로그인/회원가입</span>
          <span>마이페이지</span>
        </Nav>
      </Inner>
    </HeaderWrapper>
  );
};

export default Header;