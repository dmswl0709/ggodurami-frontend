// pages/SignUp.tsx (지역 선택 드롭다운 추가 버전)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Input } from '../Components/Input/Input';
import { Button } from '../Components/Button/Button';
import { Checkbox } from '../Components/Checkbox/Checkbox';
import { Logo } from '../Components/Logo/Logo';

// 전역 타이머 타입 선언
declare global {
  interface Window {
    emailTimeout: NodeJS.Timeout;
  }
}
const LOCAL_CODES = {
  1: "서울",
  2: "부산광역시",
  3: "대구광역시",
  4: "인천광역시",
  5: "광주광역시",
  6: "대전광역시",
  7: "울산광역시",
  8: "세종특별자치시",
  9: "경기도",
  11: "충청북도",
  12: "충청남도",
  13: "전라북도",
  14: "전라남도",
  15: "경상북도",
  16: "경상남도",
  17: "제주특별자치도",
};

// 타입 정의
interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  phone_num: string;
  crop_name: string;
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

const RegionSection = styled.div`
  margin-bottom: 20px;
`;

const SectionLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const RegionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
  color: #333;
  
  &:focus {
    outline: none;
    border-color: #4CAF50;
    background-color: white;
  }
  
  &:disabled {
    background-color: #f5f5f5;
    color: #666;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 15px;
  }
`;

const StyledSelect = styled.select`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
  color: #333;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #4CAF50;
    background-color: white;
  }
  
  &:disabled {
    background-color: #f5f5f5;
    color: #666;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 15px;
  }
`;

const RegionButton = styled.button`
  padding: 12px 20px;
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background-color: #e0a768;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 13px;
  }
`;

const InfoText = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 5px;
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
  crop_name: string;
  local_id: number;
  region_name: string;
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
    crop_name: '',
    local_id: 0,
    region_name: ''
  });

  const [checkboxes, setCheckboxes] = useState<CheckboxState>({
    ageConfirm: false,
    specialChars: false,
    duplicateCheck: false
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [editingRegion, setEditingRegion] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false); // 이메일 중복 확인 상태

  // 비밀번호 조건 실시간 검증
  const validatePasswordConditions = (password: string) => {
    const lengthValid = password.length >= 8 && password.length <= 15;
    const specialCharValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    setCheckboxes(prev => ({
      ...prev,
      ageConfirm: lengthValid,
      specialChars: specialCharValid
    }));
  };

  // 이메일 중복 확인 함수 (실제로는 API 호출)
  const checkEmailDuplicate = async (email: string) => {
    // 간단한 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailChecked(false);
      setCheckboxes(prev => ({ ...prev, duplicateCheck: false }));
      return;
    }

    try {
      // 실제 환경에서는 이메일 중복 확인 API 호출
      // const response = await apiClient.post('/check-email', { email });
      
      // 임시로 모든 이메일을 사용 가능한 것으로 처리
      // 실제로는 백엔드 응답에 따라 처리
      setTimeout(() => {
        setEmailChecked(true);
        setCheckboxes(prev => ({ ...prev, duplicateCheck: true }));
      }, 500);
      
    } catch (error) {
      setEmailChecked(false);
      setCheckboxes(prev => ({ ...prev, duplicateCheck: false }));
    }
  };

  // 지역 ID로 지역 이름 찾기
  const getRegionNameById = (localId: number): string => {
    return LOCAL_CODES[localId as keyof typeof LOCAL_CODES] || '';
  };

  const handleInputChange = (field: keyof SignUpFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // 실시간 검증
    if (field === 'password') {
      validatePasswordConditions(value);
    } else if (field === 'email') {
      // 이메일 입력 시 중복 확인 체크박스 초기화
      setEmailChecked(false);
      setCheckboxes(prev => ({ ...prev, duplicateCheck: false }));
      
      // 디바운스를 위해 타이머 사용
      clearTimeout(window.emailTimeout);
      window.emailTimeout = setTimeout(() => {
        if (value.trim()) {
          checkEmailDuplicate(value);
        }
      }, 1000);
    }
    
    // 입력 시 에러 메시지 클리어
    if (error) setError(null);
  };

  const handleCheckboxChange = (field: keyof CheckboxState) => (checked: boolean) => {
    // 자동 검증된 체크박스는 수동으로 변경할 수 없도록 제한
    if (field === 'ageConfirm' || field === 'specialChars' || field === 'duplicateCheck') {
      return; // 자동 검증 체크박스는 사용자가 직접 변경할 수 없음
    }
    
    setCheckboxes(prev => ({
      ...prev,
      [field]: checked
    }));
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocalId = parseInt(e.target.value);
    const selectedRegionName = getRegionNameById(selectedLocalId);
    
    setFormData(prev => ({
      ...prev,
      local_id: selectedLocalId,
      region_name: selectedRegionName
    }));
  };

  const handleRegionEdit = () => {
    setEditingRegion(!editingRegion);
    if (editingRegion) {
      // 편집 취소 시 초기값으로 복원
      setFormData(prev => ({
        ...prev,
        local_id: 0,
        region_name: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    // 필수 필드 체크
    if (!formData.username || !formData.email || !formData.password || !formData.phone_num) {
      setError('모든 필수 필드를 입력해주세요.');
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
        crop_name: formData.crop_name,
        local_id: formData.local_id || 1 // 기본값 1 (서울)
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

            <Input
              label="재배작물"
              placeholder="재배하는 작물을 입력하세요"
              value={formData.crop_name}
              onChange={handleInputChange('crop_name')}
            />

            {/* 지역 선택 섹션 */}
            <RegionSection>
              <SectionLabel>지역 (선택)</SectionLabel>
              <RegionContainer>
                <InputContainer>
                  {editingRegion ? (
                    <StyledSelect
                      value={formData.local_id}
                      onChange={handleRegionChange}
                    >
                      <option value={0}>지역을 선택하세요</option>
                      {Object.entries(LOCAL_CODES).map(([id, name]) => (
                        <option key={id} value={parseInt(id)}>
                          {name} (지역번호: {id})
                        </option>
                      ))}
                    </StyledSelect>
                  ) : (
                    <StyledInput
                      type="text"
                      value={formData.local_id ? `${formData.region_name} (지역번호: ${formData.local_id})` : '지역을 선택해주세요'}
                      disabled={true}
                      placeholder="지역을 선택해주세요"
                    />
                  )}
                  <RegionButton 
                    type="button"
                    onClick={handleRegionEdit} 
                    disabled={loading}
                  >
                    {editingRegion ? '취소' : '지역찾기'}
                  </RegionButton>
                </InputContainer>
                {editingRegion && (
                  <InfoText>
                    💡 지역을 선택하면 지역번호가 자동으로 설정됩니다.
                  </InfoText>
                )}
              </RegionContainer>
            </RegionSection>

            <CheckboxSection>
              <Checkbox
                label="8자 이상, 15자 이하로 설정해 주세요."
                checked={checkboxes.ageConfirm}
                onChange={handleCheckboxChange('ageConfirm')}
                disabled={true} // 자동 검증이므로 사용자가 직접 클릭할 수 없음
              />
              
              <Checkbox
                label="특수 문자를 사용해 주세요."
                checked={checkboxes.specialChars}
                onChange={handleCheckboxChange('specialChars')}
                disabled={true} // 자동 검증이므로 사용자가 직접 클릭할 수 없음
              />
              
              <Checkbox
                label={emailChecked ? "사용 가능한 이메일입니다." : "이메일 중복 확인 중..."}
                checked={checkboxes.duplicateCheck}
                onChange={handleCheckboxChange('duplicateCheck')}
                disabled={true} // 자동 검증이므로 사용자가 직접 클릭할 수 없음
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