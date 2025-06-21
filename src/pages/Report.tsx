// pages/Report.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../Components/Logo/Logo';
import TapMenu from '../Components/TapMenu/TapMenu';
import InputField from '../Components/InputField/InputField';
import FileUpload from '../Components/FileUpload/FileUpload';
import SubmitButton from '../Components/SubmitButton/SubmitButton';
import Container from '../Components/Common/Container';

const Report: React.FC = () => {
  const [activeTab, setActiveTab] = useState('disaster');
  const [files, setFiles] = useState<File[]>([]);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!location || !description || files.length === 0) {
      setError('모든 항목을 입력해주세요.');
      return;
    }

    setError('');
    alert('제출되었습니다.');

    // 초기화
    setFiles([]);
    setLocation('');
    setDescription('');
  };

  return (
    <>
      <Container>
        <MainWrapper>
          <ContentWrapper>
            <Logo />
            <Title>신고하기</Title>
            <TapMenu activeTab={activeTab} onTabChange={setActiveTab} />
            <FileUpload files={files} onFilesChange={setFiles} />

            <LocationSection>
              <SectionTitle>신고 발생지역</SectionTitle>
              <LocationInputWrapper>
                <LocationInput
                  type="text"
                  placeholder="예: 경기도 용인시 수지구"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <LocationButton
                  onClick={() =>
                    alert('위치 자동 입력은 아직 지원되지 않습니다.')
                  }
                >
                  위치 찾기
                </LocationButton>
              </LocationInputWrapper>
            </LocationSection>

            <LocationSection>
              <SectionTitle>신고 내용</SectionTitle>
              <InputField
                type="textarea"
                value={description}
                onChange={setDescription}
                placeholder="상세 내용을 입력하세요"
              />
            </LocationSection>

            <SubmitButtonWrapper>
              <SubmitButton onClick={handleSubmit} disabled={false} />
              {error && <ErrorText>{error}</ErrorText>}
            </SubmitButtonWrapper>
          </ContentWrapper>
        </MainWrapper>
      </Container>
    </>
  );
};

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0.1rem 0;

  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }

  @media (max-width: 480px) {
    padding: 1rem 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1400px;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    max-width: 1024px;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.05rem;
  }
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.01rem 0;
  margin-left: 1.3rem;
  color: black;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin: 0.4rem 0;
    margin-left: 0.5rem;
  }
`;

const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    max-width: 700px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const LocationSection = styled.section`
  width: 100%;
  margin-bottom: 2rem;
  background-color: #FFEFD5;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  margin-bottom: 0.8rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const LocationInputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: row;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 0.75rem;
  }

  @media (max-width: 768px) {
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const LocationInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: white;
  color: black;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #0066ff;
    box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const LocationButton = styled.button`
  padding: 0.75rem 1rem;
  background-color: #FBBF77;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #0052cc;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 0.875rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.75rem;
    font-size: 0.95rem;
  }
`;

const SubmitButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.01rem;
  margin-bottom: 1rem;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.9rem;
  margin-top: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export default Report;