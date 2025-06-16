// src/Components/TopBar/TopBar.tsx
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const TopBarWrapper = styled.div`
  background-color: #FFEFD5;
  padding: 4px 24px 0 24px;
  display: flex;
  justify-content: center;
`;

const TopBarInner = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

const TopBarNav = styled.nav`
  display: flex;
  gap: 24px;
  font-size: 16px;
  font-weight: 700;

  span {
    cursor: pointer;
    color: #666464;

    &:hover {
      opacity: 0.7;
      transition: opacity 0.2s ease;
    }
  }
`;

const TopBar = () => {
  const navigate = useNavigate(); // ✅ navigate 선언

  return (
    <TopBarWrapper>
      <TopBarInner>
        <TopBarNav>
          <span onClick={() => navigate("/login")}>
            로그인 / 회원가입
          </span>
          <span>마이페이지</span>
        </TopBarNav>
      </TopBarInner>
    </TopBarWrapper>
  );
};

export default TopBar;