// pages/SignUp.tsx (임시 인라인 버전)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Input } from '../Components/Input/Input';
import { Button } from '../Components/Button/Button';
import { Checkbox } from '../Components/Checkbox/Checkbox';
import { Logo } from '../Components/Logo/Logo';

// 타입 정의
interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  phone_num: string;
  local_id: number;
}

interface RegisterResponse {
  message: string;
}

// API 설정 - 직접 백엔드 URL 사용
const BASE_URL = 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API 함수들
const registerUser = async (data: RegisterRequest): Promise<RegisterResponse> => {
  const response = await apiClient.post<RegisterResponse>('/register', data);
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
  max-width: 480px;
`;

const CheckboxSection = styled.div`
  margin: 24px 0;
  padding: 16px;
  background-color: #FFEFD5;
  border-radius: 8px;
`;

const RegionIdWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;
`;

const RegionIdInput = styled.div`
  flex: 1;
`;

const FindRegionButton = styled(Button)`
  white-space: nowrap;
  margin-bottom: 20px;
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

interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  phone_num: string;
  local_id: string;
}

interface CheckboxState {
  ageConfirm: boolean;
  specialChars: boolean;
  duplicateCheck: boolean;
}

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignUpFormData>({
    username: '',
    email: '',
    password: '',
    phone_num: '',
    local_id: '1' // 기본값 설정
  });

  const [checkboxes, setCheckboxes] = useState<CheckboxState>({
    ageConfirm: false,
    specialChars: false,
    duplicateCheck: true
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleInputChange = (field: keyof SignUpFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    // 입력 시 에러 메시지 클리어
    if (error) setError(null);
  };

  const handleCheckboxChange = (field: keyof CheckboxState) => (checked: boolean) => {
    setCheckboxes(prev => ({
      ...prev,
      [field]: checked
    }));
  };

  const handleFindRegion = () => {
    console.log('지역찾기 클릭');
    // 추후 지역 검색 모달이나 페이지로 연결
  };

  const handleTestConnection = async () => {
    console.log('서버 연결 테스트 시작');
    await testConnection();
  };

  const validateForm = (): boolean => {
    // 필수 필드 체크
    if (!formData.username || !formData.email || !formData.password || !formData.phone_num) {
      setError('모든 필드를 입력해주세요.');
      return false;
    }

    // 비밀번호 길이 체크 (8자 이상, 15자 이하)
    if (formData.password.length < 8 || formData.password.length > 15) {
      setError('비밀번호는 8자 이상, 15자 이하로 설정해주세요.');
      return false;
    }

    // 특수문자 포함 체크
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharRegex.test(formData.password)) {
      setError('비밀번호에 특수문자를 포함해주세요.');
      return false;
    }

    // 필수 약관 동의 체크
    if (!checkboxes.ageConfirm || !checkboxes.specialChars) {
      setError('필수 약관에 동의해주세요.');
      return false;
    }

    // 이메일 형식 체크
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('올바른 이메일 형식을 입력해주세요.');
      return false;
    }

    // 전화번호 형식 체크 (간단한 체크)
    const phoneRegex = /^[0-9-]+$/;
    if (!phoneRegex.test(formData.phone_num)) {
      setError('올바른 전화번호 형식을 입력해주세요.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // 백엔드 API 형식에 맞게 데이터 변환
      const registerData: RegisterRequest = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        phone_num: formData.phone_num.replace(/[^0-9]/g, ''), // 숫자만 남기기
        local_id: parseInt(formData.local_id) || 1
      };

      console.log('전송할 데이터:', registerData); // 디버깅용

      const response = await registerUser(registerData);
      
      setSuccess(response.message || '✅ 회원가입이 완료되었습니다!');
      
      // 성공 시 2초 후 로그인 페이지로 이동
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (err: any) {
      console.error('회원가입 오류:', err);
      console.error('응답 데이터:', err.response?.data);
      console.error('응답 상태:', err.response?.status);
      
      // 에러 메시지 추출
      let errorMessage = '회원가입 중 오류가 발생했습니다.';
      
      if (err.response?.status === 500) {
        errorMessage = '서버 내부 오류가 발생했습니다. 백엔드 로그를 확인해주세요.';
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

  return (
    <PageContainer>
      <RelativeContainer>
        <FormContainer>
          <Logo />
          
          <form onSubmit={handleSubmit}>
            <Input
              label="이름"
              placeholder="이름을 입력하세요."
              value={formData.username}
              onChange={handleInputChange('username')}
              required
            />

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

            <Input
              label="전화번호"
              type="tel"
              placeholder="010-1234-5678"
              value={formData.phone_num}
              onChange={handleInputChange('phone_num')}
              required
            />

            <RegionIdWrapper>
              <RegionIdInput>
                <Input
                  label="지역 ID (선택)"
                  placeholder="지역ID를 입력하세요."
                  value={formData.local_id}
                  onChange={handleInputChange('local_id')}
                />
              </RegionIdInput>
              <FindRegionButton
                variant="secondary"
                onClick={handleFindRegion}
                type="button"
                disabled={loading}
              >
                지역찾기
              </FindRegionButton>
            </RegionIdWrapper>

            <CheckboxSection>
              <Checkbox
                label="8자 이상, 15자 이하로 설정해 주세요."
                checked={checkboxes.ageConfirm}
                onChange={handleCheckboxChange('ageConfirm')}
              />
              
              <Checkbox
                label="특수 문자를 사용해 주세요."
                checked={checkboxes.specialChars}
                onChange={handleCheckboxChange('specialChars')}
              />
              
              <Checkbox
                label="중복 확인."
                checked={checkboxes.duplicateCheck}
                onChange={handleCheckboxChange('duplicateCheck')}
              />
            </CheckboxSection>

            {error && <ErrorMessage>{error}</ErrorMessage>}
            {success && <SuccessMessage>{success}</SuccessMessage>}

            <Button 
              type="submit" 
              fullWidth 
              disabled={loading}
            >
              {loading ? '처리중...' : '회원가입'}
            </Button>
          </form>
        </FormContainer>
        
        {loading && (
          <LoadingOverlay>
            <div>처리중...</div>
          </LoadingOverlay>
        )}
      </RelativeContainer>
    </PageContainer>
  );
};

export default SignUp;