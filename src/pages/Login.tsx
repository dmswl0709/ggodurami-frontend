// pages/Login.tsx (업데이트된 버전)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Input } from '../Components/Input/Input';
import { Button } from '../Components/Button/Button';
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
  background-color: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
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

  const handleInputChange = (field: keyof LoginFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      alert('이메일과 비밀번호를 입력해주세요.');
      return;
    }

    // 로그인 성공 시 홈으로 이동
    console.log('로그인 데이터:', formData);
    alert('로그인 성공!');
    navigate('/');
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

          <ButtonGroup>
            <Button type="submit" fullWidth>
              로그인
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
    </PageContainer>
  );
};

export default Login;