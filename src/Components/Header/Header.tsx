import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <TopBar>
        <span>메인페이지</span>
      </TopBar>
      <NavContainer>
        <Logo>
          <LeafIcon>🌿</LeafIcon>
          <span>꼬두라미</span>
        </Logo>
        <NavMenu>
          <NavItem>신고상황</NavItem>
          <NavItem>커뮤니티</NavItem>
          <NavItem>지원금 및 세미나 정보</NavItem>
        </NavMenu>
        <AuthButtons>
          <span>로그인/회원가입</span>
          <span>마이페이지</span>
        </AuthButtons>
      </NavContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #f9f7f4;
  border-bottom: 1px solid #e0e0e0;
`;

const TopBar = styled.div`
  background-color: #333;
  color: white;
  padding: 5px 20px;
  font-size: 12px;
  text-align: left;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: bold;
  color: #2d5a27;
`;

const LeafIcon = styled.span`
  font-size: 28px;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavItem = styled.button`
  font-size: 16px;
  color: #333;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e8f5e8;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 14px;
  color: #666;

  span {
    cursor: pointer;
    &:hover {
      color: #2d5a27;
    }
  }

  @media (max-width: 768px) {
    gap: 10px;
    font-size: 12px;
  }
`;

export default Header;