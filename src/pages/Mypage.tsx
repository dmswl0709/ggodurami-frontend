// pages/Mypage.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Input } from '../Components/Input/Input';
import {Logo} from '../Components/Logo/Logo';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #FFEFD5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
  margin-bottom: 0.1px;
  
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const LogoContainer = styled.div`
margin-top: 20px;  
margin-bottom: 0px;
  
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

const MyPageContainer = styled.div`
  background-color: #FFEFD5;
  border-radius: 16px;
  padding: 10px 40px 40px 40px;
  width: 100%;
  max-width: 500px;

  
  @media (max-width: 768px) {
    padding: 10px 20px 30px 20px;
    margin: 0 10px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 15px 25px 15px;
  }
`;

const UserIcon = styled.div`
  width: 80px;
  height: 80px;
  border: 3px solid #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -10px auto 20px;
  background-color: #f9f9f9;
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin: -10px auto 20px;
  }
  
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    margin: -10px auto 20px;
  }
`;

const PersonIcon = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #333;
  border-radius: 50% 50% 0 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 35px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 30px;
    border: 2px solid #333;
    border-radius: 30px 30px 0 0;
    border-top: none;
  }
  
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    
    &::before {
      top: 30px;
      width: 50px;
      height: 25px;
    }
  }
  
  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    
    &::before {
      top: 25px;
      width: 45px;
      height: 22px;
    }
  }
`;

const UserTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const RegionSection = styled.div`
  margin-bottom: 20px;
`;

const RegionLabel = styled.label`
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
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;

const RegionInput = styled.input`
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
  
  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 15px;
  }
`;

const EditButton = styled.button`
  padding: 12px 20px;
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #45a049;
  }
  
  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 13px;
  }
`;

interface UserData {
  name: string;
  email: string;
  region: string;
  job: string;
}

export const Mypage: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    name: '오은지',
    email: 'xiumin4567@naver.com',
    region: '전북특별자치도 전주시 (지역번호 :13)',
    job: '배추'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (field: keyof UserData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleRegionEdit = () => {
    setIsEditing(!isEditing);
    // 여기에 지역 변경 로직 추가
  };

  return (
    <PageContainer>
      <Header>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Header>
      
      <MyPageContainer>
        <UserIcon>
          <PersonIcon />
        </UserIcon>
        
        <UserTitle>USER 1</UserTitle>
        
        <Input
          label="이름"
          type="text"
          placeholder="이름을 입력하세요"
          value={userData.name}
          onChange={handleInputChange('name')}
        />
        
        <Input
          label="이메일"
          type="email"
          placeholder="이메일을 입력하세요"
          value={userData.email}
          onChange={handleInputChange('email')}
        />
        
        <RegionSection>
          <RegionLabel>지역 ID (선택)</RegionLabel>
          <RegionContainer>
            <RegionInput
              type="text"
              value={userData.region}
              onChange={handleInputChange('region')}
              disabled={!isEditing}
            />
            <EditButton onClick={handleRegionEdit}>
              {isEditing ? '저장' : '지역변경'}
            </EditButton>
          </RegionContainer>
        </RegionSection>
        
        <Input
          label="재배 작물"
          type="text"
          placeholder="재배하는 작물을 입력하세요"
          value={userData.job}
          onChange={handleInputChange('job')}
        />
      </MyPageContainer>
    </PageContainer>
  );
};
export default Mypage;