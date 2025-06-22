// pages/CommunityWrite.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Logo } from '../Components/Logo/Logo';
import InputField from '../Components/InputField/InputField';
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #FFEFD5;
  padding: 5px 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5px;
  padding: 0 10px;
  max-width: 1400px;
  margin: 0 auto 5px auto;
  
  @media (max-width: 1024px) {
    max-width: 95%;
    margin-bottom: 3px;
    padding: 0 15px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2px;
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1px;
    padding: 0 5px;
  }
`;

const LogoContainer = styled.div`
  margin-top: 2px;
  margin-bottom: -50px;
  
  @media (max-width: 768px) {
    margin-top: 1px;
  }
  
  @media (max-width: 480px) {
    margin-top: 1px;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 25px;
  font-weight: 700;
  color: #333;
  margin: 15px 0 0 40px;
  text-align: left;
  
  @media (max-width: 1024px) {
    font-size: 28px;
    margin: 12px 0 0 40px;
  }
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin: 10px 0 0 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 22px;
    margin: 8px 0 0 50px;
  }
`;

const ContentWrapper = styled.div`
  background-color: #FFEFD5;
  border-radius: 16px;
  padding: 60px;
  max-width: 1000px;
  margin: 0 auto 40px auto;
  
  @media (max-width: 1024px) {
    max-width: 90%;
    padding: 40px 30px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    padding: 30px 30px;
    margin: 0 40px;
  }
  
  @media (max-width: 480px) {
    padding: 25px 15px;
    margin: 0 5px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const CharacterLimit = styled.div`
  font-size: 12px;
  color: #666;
  text-align: right;
  margin-top: -15px;
  margin-bottom: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px 60px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #E6AB65;
  }
  
  &:active {
    background-color: #D19B59;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    padding: 12px 50px;
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 40px;
    font-size: 14px;
  }
`;

interface CommunityWriteData {
  author: string;
  title: string;
  content: string;
}

export const CommunityWrite: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CommunityWriteData>({
    author: '',
    title: '',
    content: ''
  });

  const handleAuthorChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      author: value
    }));
  };

  const handleTitleChange = (value: string) => {
    if (value.length <= 20) {
      setFormData(prev => ({
        ...prev,
        title: value
      }));
    }
  };

  const handleContentChange = (value: string) => {
    if (value.length <= 2000) {
      setFormData(prev => ({
        ...prev,
        content: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 간단한 유효성 검사
    if (!formData.author || !formData.title || !formData.content) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    
    if (formData.title.length < 2) {
      alert('제목을 최소 2자 이상 입력해주세요.');
      return;
    }
    
    if (formData.content.length < 10) {
      alert('내용을 최소 10자 이상 입력해주세요.');
      return;
    }
    
    // 실제 구현시에는 여기서 API 호출
    console.log('게시글 등록:', formData);
    
    // 등록 완료 후 커뮤니티 목록으로 이동
    alert('게시글이 등록되었습니다.');
    navigate('/communityList'); // 커뮤니티 목록 페이지로 이동
  };

  return (
    <PageContainer>
      <Header>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <HeaderTitle>커뮤니티 글 쓰기</HeaderTitle>
      </Header>
      
      <ContentWrapper>
        <FormContainer onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="author">작성자 이름(닉네임)</Label>
            <InputField
              type="text"
              value={formData.author}
              onChange={handleAuthorChange}
              placeholder="이름을 작성 해 주세요"
              required
            />
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="title">제목</Label>
            <InputField
              type="text"
              value={formData.title}
              onChange={handleTitleChange}
              placeholder="최소 2자, 최대 20자 작성 가능"
              required
            />
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="content">작성 내용</Label>
            <InputField
              type="textarea"
              value={formData.content}
              onChange={handleContentChange}
              placeholder="내용에 대해 자세히 적어주세요&#10;&#10;• 최소 10자, 2000자 이내 작성 가능"
              rows={12}
              required
            />
            <CharacterLimit>
              {formData.content.length}/2000자
            </CharacterLimit>
          </InputGroup>
          
          <ButtonContainer>
            <SubmitButton type="submit">
              등록
            </SubmitButton>
          </ButtonContainer>
        </FormContainer>
      </ContentWrapper>
    </PageContainer>
  );
};

export default CommunityWrite;