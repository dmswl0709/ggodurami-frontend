// pages/Login.tsx (비밀번호 변경 기능 추가 버전)
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Input } from '../Components/Input/Input';
import { Button } from '../Components/Button/Button';
import { Logo } from '../Components/Logo/Logo';
import { useAppDispatch, useAppSelector } from '../Store/hooks';
import { loginStart, loginSuccess, loginFailure, clearError } from '../Store/slices/authSlice';

// 타입 정의
interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
  access_token: string;
}

interface UserResponse {
  mypage: {
    user_id: string;
    username: string;
    email: string;
    region_name?: string;
    crop_name?: string;
    local_id?: number;
    profile_image?: string;
  };
}

interface ChangePasswordRequest {
  current_password: string;
  new_password: string;
}

interface ChangePasswordResponse {
  message: string;
}

// API 설정
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://baekend.onrender.com';

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

const getCurrentUser = async (token: string): Promise<UserResponse> => {
  const response = await apiClient.get<UserResponse>('/mypage', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const changePassword = async (data: ChangePasswordRequest, token: string): Promise<ChangePasswordResponse> => {
  const response = await apiClient.patch<ChangePasswordResponse>('/change-password', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// 스타일 컴포넌트들
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

// 비밀번호 변경 모달 스타일
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContainer = styled.div`
  background-color: #FFEFD5;
  border-radius: 16px;
  padding: 30px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 480px) {
    padding: 20px;
    margin: 0 10px;
  }
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const ModalButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const ModalButton = styled.button`
  flex: 1;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const CancelButton = styled(ModalButton)`
  background-color: #6c757d;
  color: white;
  
  &:hover {
    background-color: #5a6268;
  }
`;

const ConfirmButton = styled(ModalButton)`
  background-color: #FBBF77;
  color: white;
  
  &:hover {
    background-color: #E6AB65;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const LoginStep = styled.div`
  margin-bottom: 20px;
`;

const StepTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
`;

const StepDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.4;
`;

interface LoginFormData {
  email: string;
  password: string;
}

interface PasswordChangeData {
  email: string;
  password: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}


const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error, isAuthenticated } = useAppSelector((state) => state.auth);
  
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [success, setSuccess] = useState<string | null>(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordStep, setPasswordStep] = useState<'login' | 'change'>('login');
  const [passwordChangeData, setPasswordChangeData] = useState<PasswordChangeData>({
    email: '',
    password: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordError, setPasswordError] = useState<string>('');
  const [passwordSuccess, setPasswordSuccess] = useState<string>('');

  // 이미 로그인되어 있으면 홈으로 리다이렉트
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  // 컴포넌트 마운트 시 에러 클리어
  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleInputChange = (field: keyof LoginFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    // 입력 시 에러 메시지 클리어
    if (error) dispatch(clearError());
  };

  const handlePasswordInputChange = (field: keyof PasswordChangeData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordChangeData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    if (passwordError) setPasswordError('');
  };

  const validateForm = (): boolean => {
    if (!formData.email || !formData.password) {
      dispatch(loginFailure('이메일과 비밀번호를 입력해주세요.'));
      return false;
    }

    // 이메일 형식 체크
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      dispatch(loginFailure('올바른 이메일 형식을 입력해주세요.'));
      return false;
    }

    return true;
  };

  const validatePasswordChange = (): boolean => {
    if (!passwordChangeData.currentPassword || !passwordChangeData.newPassword || !passwordChangeData.confirmPassword) {
      setPasswordError('모든 필드를 입력해주세요.');
      return false;
    }

    if (passwordChangeData.newPassword.length < 6) {
      setPasswordError('새 비밀번호는 최소 6자 이상이어야 합니다.');
      return false;
    }

    if (passwordChangeData.newPassword !== passwordChangeData.confirmPassword) {
      setPasswordError('새 비밀번호와 확인 비밀번호가 일치하지 않습니다.');
      return false;
    }

    if (passwordChangeData.currentPassword === passwordChangeData.newPassword) {
      setPasswordError('새 비밀번호는 현재 비밀번호와 달라야 합니다.');
      return false;
    }

    return true;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    dispatch(loginStart());

    try {
      // 1. 로그인 API 호출
      const loginData: LoginRequest = {
        email: formData.email,
        password: formData.password
      };

      console.log('전송할 로그인 데이터:', loginData);

      const loginResponse = await loginUser(loginData);
      console.log('로그인 응답:', loginResponse);

      // 2. 사용자 정보 조회
      const userResponse = await getCurrentUser(loginResponse.access_token);
      console.log('사용자 정보:', userResponse);

      // 3. Redux 상태 업데이트
      dispatch(loginSuccess({
        user: {
          user_id: userResponse.mypage.user_id,
          username: userResponse.mypage.username,
          email: userResponse.mypage.email,
        },
        token: loginResponse.access_token,
      }));
      
      setSuccess(loginResponse.message);
      
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
      
      dispatch(loginFailure(errorMessage));
    }
  };

  const handlePasswordChangeLogin = async () => {
    if (!passwordChangeData.email || !passwordChangeData.password) {
      setPasswordError('이메일과 현재 비밀번호를 입력해주세요.');
      return;
    }

    setPasswordLoading(true);
    setPasswordError('');

    try {
      // 임시 로그인으로 토큰 획득
      const loginData: LoginRequest = {
        email: passwordChangeData.email,
        password: passwordChangeData.password
      };

      const loginResponse = await loginUser(loginData);
      
      // 임시 토큰을 저장하고 다음 단계로
      setPasswordChangeData(prev => ({
        ...prev,
        currentPassword: prev.password
      }));
      
      setPasswordStep('change');
      
    } catch (err: any) {
      console.error('비밀번호 변경 로그인 오류:', err);
      
      let errorMessage = '로그인에 실패했습니다.';
      if (err.response?.status === 401) {
        errorMessage = '이메일 또는 비밀번호가 틀렸습니다.';
      } else if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      }
      
      setPasswordError(errorMessage);
    } finally {
      setPasswordLoading(false);
    }
  };

  const handlePasswordChange = async () => {
    if (!validatePasswordChange()) {
      return;
    }

    setPasswordLoading(true);
    setPasswordError('');

    try {
      // 먼저 로그인하여 토큰 획득
      const loginResponse = await loginUser({
        email: passwordChangeData.email,
        password: passwordChangeData.currentPassword
      });

      // 비밀번호 변경 API 호출
      const changeData: ChangePasswordRequest = {
        current_password: passwordChangeData.currentPassword,
        new_password: passwordChangeData.newPassword
      };

      const response = await changePassword(changeData, loginResponse.access_token);
      
      setPasswordSuccess(response.message);
      
      // 성공 시 2초 후 모달 닫기
      setTimeout(() => {
        setShowPasswordModal(false);
        setPasswordStep('login');
        setPasswordChangeData({
          email: '',
          password: '',
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
        setPasswordSuccess('');
      }, 2000);

    } catch (err: any) {
      console.error('비밀번호 변경 오류:', err);
      
      let errorMessage = '비밀번호 변경에 실패했습니다.';
      
      if (err.response?.status === 401) {
        errorMessage = '현재 비밀번호가 틀렸습니다.';
      } else if (err.response?.status === 400) {
        errorMessage = '비밀번호 형식이 올바르지 않습니다.';
      } else if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.response?.data?.detail) {
        if (Array.isArray(err.response.data.detail)) {
          errorMessage = err.response.data.detail.map((item: any) => 
            `${item.loc?.[1] || '필드'}: ${item.msg}`
          ).join(', ');
        } else {
          errorMessage = err.response.data.detail;
        }
      }
      
      setPasswordError(errorMessage);
    } finally {
      setPasswordLoading(false);
    }
  };

  const openPasswordModal = () => {
    setShowPasswordModal(true);
    setPasswordStep('login');
    setPasswordError('');
    setPasswordSuccess('');
    setPasswordChangeData({
      email: '',
      password: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const closePasswordModal = () => {
    setShowPasswordModal(false);
    setPasswordStep('login');
    setPasswordError('');
    setPasswordSuccess('');
    setPasswordChangeData({
      email: '',
      password: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
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
              <LinkText onClick={openPasswordModal}>
                비밀번호 변경
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

      {/* 비밀번호 변경 모달 */}
      {showPasswordModal && (
        <ModalOverlay>
          <ModalContainer>
            <ModalTitle>비밀번호 변경</ModalTitle>
            
            {passwordStep === 'login' ? (
              <LoginStep>
                <StepTitle>1단계: 본인 확인</StepTitle>
                <StepDescription>
                  비밀번호 변경을 위해 현재 계정 정보를 입력해주세요.
                </StepDescription>
                
                <Input
                  label="이메일"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  value={passwordChangeData.email}
                  onChange={handlePasswordInputChange('email')}
                />
                
                <Input
                  label="현재 비밀번호"
                  type="password"
                  placeholder="현재 비밀번호를 입력하세요"
                  value={passwordChangeData.password}
                  onChange={handlePasswordInputChange('password')}
                />
                
                {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
                
                <ModalButtonGroup>
                  <CancelButton onClick={closePasswordModal} disabled={passwordLoading}>
                    취소
                  </CancelButton>
                  <ConfirmButton 
                    onClick={handlePasswordChangeLogin}
                    disabled={passwordLoading}
                  >
                    {passwordLoading ? '확인 중...' : '다음'}
                  </ConfirmButton>
                </ModalButtonGroup>
              </LoginStep>
            ) : (
              <LoginStep>
                <StepTitle>2단계: 새 비밀번호 설정</StepTitle>
                <StepDescription>
                  새로운 비밀번호를 입력해주세요. (최소 6자 이상)
                </StepDescription>
                
                <Input
                  label="새 비밀번호"
                  type="password"
                  placeholder="새 비밀번호를 입력하세요"
                  value={passwordChangeData.newPassword}
                  onChange={handlePasswordInputChange('newPassword')}
                />
                
                <Input
                  label="새 비밀번호 확인"
                  type="password"
                  placeholder="새 비밀번호를 다시 입력하세요"
                  value={passwordChangeData.confirmPassword}
                  onChange={handlePasswordInputChange('confirmPassword')}
                />
                
                {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
                {passwordSuccess && <SuccessMessage>{passwordSuccess}</SuccessMessage>}
                
                <ModalButtonGroup>
                  <CancelButton 
                    onClick={() => setPasswordStep('login')} 
                    disabled={passwordLoading}
                  >
                    이전
                  </CancelButton>
                  <ConfirmButton 
                    onClick={handlePasswordChange}
                    disabled={passwordLoading}
                  >
                    {passwordLoading ? '변경 중...' : '비밀번호 변경'}
                  </ConfirmButton>
                </ModalButtonGroup>
              </LoginStep>
            )}
          </ModalContainer>
        </ModalOverlay>
      )}
    </PageContainer>
  );
};

export default Login;