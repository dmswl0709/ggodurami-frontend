// pages/Login.tsx (백엔드 연동 버전)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Input } from '../Components/Input/Input';
import { Button } from '../Components/Button/Button';
import { Logo } from '../Components/Logo/Logo';

// 타입 정의
interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
  access_token: string;
}

// API 설정
const BASE_URL = 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API 함수
const loginUser = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>('/login', data);
  return response.data;
};

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #FFEFD5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const FormContainer = styled.div`
  background-color: #FFEFD5;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0);
  width: 100%;
  max-width: 400px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`;

const LinkGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #eee;
`;

const LinkText = styled.button`
  background: none;
  border: none;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  
  &:hover {
    color: #4CAF50;
  }
`;

const SignUpLink = styled(LinkText)`
  color: #4CAF50;
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 14px;
  margin-top: 8px;
  padding: 8px 12px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
`;

const SuccessMessage = styled.div`
  color: #155724;
  font-size: 14px;
  margin-top: 8px;
  padding: 8px 12px;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  z-index: 10;
`;

const RelativeContainer = styled.div`
  position: relative;
`;

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleInputChange = (field: keyof LoginFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    // 입력 시 에러 메시지 클리어
    if (error) setError(null);
  };

  const validateForm = (): boolean => {
    if (!formData.email || !formData.password) {
      setError('이메일과 비밀번호를 입력해주세요.');
      return false;
    }

    // 이메일 형식 체크
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('올바른 이메일 형식을 입력해주세요.');
      return false;
    }

    return true;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // 백엔드 API 호출
      const loginData: LoginRequest = {
        email: formData.email,
        password: formData.password
      };

      console.log('전송할 로그인 데이터:', loginData);

      const response = await loginUser(loginData);
      
      // 토큰을 localStorage에 저장
      localStorage.setItem('accessToken', response.access_token);
      
      setSuccess(response.message);
      
      // 성공 시 1.5초 후 홈으로 이동
      setTimeout(() => {
        navigate('/');
      }, 1500);

    } catch (err: any) {
      console.error('로그인 오류:', err);
      console.error('응답 데이터:', err.response?.data);
      console.error('응답 상태:', err.response?.status);
      
      // 에러 메시지 추출
      let errorMessage = '로그인 중 오류가 발생했습니다.';
      
      if (err.response?.status === 401) {
        errorMessage = '이메일 또는 비밀번호가 틀렸습니다.';
      } else if (err.response?.status === 500) {
        errorMessage = '서버 내부 오류가 발생했습니다.';
      } else if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.response?.data?.detail) {
        if (Array.isArray(err.response.data.detail)) {
          // FastAPI 유효성 검사 에러
          errorMessage = err.response.data.detail.map((item: any) => 
            `${item.loc?.[1] || '필드'}: ${item.msg}`
          ).join(', ');
        } else {
          errorMessage = err.response.data.detail;
        }
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    console.log('비밀번호 찾기 클릭');
    alert('비밀번호 찾기 기능은 준비 중입니다.');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <PageContainer>
      <RelativeContainer>
        <FormContainer>
          <Logo />
          
          <form onSubmit={handleLogin}>
            <Input
              label="이메일"
              type="email"
              placeholder="이메일을 입력하세요."
              value={formData.email}
              onChange={handleInputChange('email')}
              required
            />

            <Input
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력하세요."
              value={formData.password}
              onChange={handleInputChange('password')}
              required
            />

            {error && <ErrorMessage>{error}</ErrorMessage>}
            {success && <SuccessMessage>{success}</SuccessMessage>}

            <ButtonGroup>
              <Button 
                type="submit" 
                fullWidth
                disabled={loading}
              >
                {loading ? '로그인 중...' : '로그인'}
              </Button>
            </ButtonGroup>

            <LinkGroup>
              <LinkText onClick={handleForgotPassword}>
                아직 회원이 아니신가요?
              </LinkText>
              <SignUpLink onClick={handleSignUp}>
                회원가입
              </SignUpLink>
            </LinkGroup>
          </form>
        </FormContainer>
        
        {loading && (
          <LoadingOverlay>
            <div>로그인 중...</div>
          </LoadingOverlay>
        )}
      </RelativeContainer>
    </PageContainer>
  );
};

export default Login;