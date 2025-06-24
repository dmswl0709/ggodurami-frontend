// src/Components/TopBar/TopBar.tsx
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout, initializeAuth, setUser } from '../../store/slices/authSlice';
import axios from 'axios';

// API 설정
const BASE_URL = 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 사용자 정보 조회 API
const getCurrentUser = async (token: string) => {
  const response = await apiClient.get('/mypage', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.mypage;
};

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
  align-items: center;

  span {
    cursor: pointer;
    color: #666464;

    &:hover {
      opacity: 0.7;
      transition: opacity 0.2s ease;
    }
  }
`;

const AuthSection = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
`;

const AuthButton = styled.span`
  cursor: pointer;
  color: #666464;
  
  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
`;

const UserName = styled.span`
  color: #4CAF50;
  font-weight: 600;
`;

const LogoutButton = styled.span`
  cursor: pointer;
  color: #dc3545;
  font-size: 14px;
  
  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease;
  }
`;

const MyPageButton = styled.span`
  cursor: pointer;
  color: #007bff;
  font-size: 14px;
  
  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease;
  }
`;

const TopBar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated, user, token } = useAppSelector((state) => state.auth);

  // 컴포넌트 마운트 시 인증 상태 초기화
  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

  // 토큰이 있지만 사용자 정보가 없으면 사용자 정보 가져오기
  useEffect(() => {
    const fetchUserInfo = async () => {
      if (token && !user) {
        try {
          const userInfo = await getCurrentUser(token);
          dispatch(setUser({
            user_id: userInfo.user_id,
            username: userInfo.username,
            email: userInfo.email,
          }));
        } catch (error) {
          console.error('사용자 정보 조회 실패:', error);
          // 토큰이 유효하지 않으면 로그아웃
          dispatch(logout());
        }
      }
    };

    fetchUserInfo();
  }, [token, user, dispatch]);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      dispatch(logout());
      navigate('/');
    }
  };

  const handleMyPage = () => {
    navigate('/Mypage');
  };

  return (
    <TopBarWrapper>
      <TopBarInner>
        <TopBarNav>
          {isAuthenticated && user ? (
            // 로그인된 상태
            <UserInfo>
              <UserName>{user.username}님</UserName>
              <MyPageButton onClick={handleMyPage}>
                마이페이지
              </MyPageButton>
              <LogoutButton onClick={handleLogout}>
                로그아웃
              </LogoutButton>
            </UserInfo>
          ) : (
            // 로그인되지 않은 상태
            <AuthSection>
              <AuthButton onClick={handleLogin}>
                로그인 / 회원가입
              </AuthButton>
              <AuthButton onClick={handleMyPage}>
                마이페이지
              </AuthButton>
            </AuthSection>
          )}
        </TopBarNav>
      </TopBarInner>
    </TopBarWrapper>
  );
};

export default TopBar;