
// pages/SignUp.tsx (업데이트된 버전)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Input } from '../Components/Input/Input';
import { Button } from '../Components/Button/Button';
import { Checkbox } from '../Components/Checkbox/Checkbox';
import { Logo } from '../Components/Logo/Logo';

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

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  phone: string;
  regionId: string;
}

interface CheckboxState {
  ageConfirm: boolean;
  specialChars: boolean;
  duplicateCheck: boolean;
}

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
    email: '',
    password: '',
    phone: '',
    regionId: ''
  });

  const [checkboxes, setCheckboxes] = useState<CheckboxState>({
    ageConfirm: false,
    specialChars: false,
    duplicateCheck: true
  });

  const handleInputChange = (field: keyof SignUpFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleCheckboxChange = (field: keyof CheckboxState) => (checked: boolean) => {
    setCheckboxes(prev => ({
      ...prev,
      [field]: checked
    }));
  };

  const handleFindRegion = () => {
    console.log('지역찾기 클릭');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.password || !formData.phone || !formData.regionId) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    if (!checkboxes.ageConfirm || !checkboxes.specialChars) {
      alert('필수 약관에 동의해주세요.');
      return;
    }

    console.log('회원가입 데이터:', formData, checkboxes);
    alert('회원가입이 완료되었습니다!');
    navigate('/login');
  };

  return (
    <PageContainer>
      <FormContainer>
        <Logo />
        
        <form onSubmit={handleSubmit}>
          <Input
            label="이름"
            placeholder="이름을 입력하세요."
            value={formData.name}
            onChange={handleInputChange('name')}
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
            placeholder="전화번호를 입력하세요."
            value={formData.phone}
            onChange={handleInputChange('phone')}
            required
          />

          <RegionIdWrapper>
            <RegionIdInput>
              <Input
                label="지역 ID (선택)"
                placeholder="지역ID를 입력하세요."
                value={formData.regionId}
                onChange={handleInputChange('regionId')}
              />
            </RegionIdInput>
            <FindRegionButton
              variant="secondary"
              onClick={handleFindRegion}
              type="button"
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

          <Button type="submit" fullWidth>
            회원가입
          </Button>
        </form>
      </FormContainer>
    </PageContainer>
  );
};

export default SignUp;