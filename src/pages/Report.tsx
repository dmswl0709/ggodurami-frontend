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
  const [selectedDisasterType, setSelectedDisasterType] = useState('');
  const [selectedPestType, setSelectedPestType] = useState('');

  const handleSubmit = () => {
    const selectedType = activeTab === 'disaster' ? selectedDisasterType : selectedPestType;
    
    if (!location || !description || files.length === 0 || !selectedType) {
      setError('모든 항목을 입력해주세요.');
      return;
    }

    setError('');
    alert('제출되었습니다.');

    // 초기화
    setFiles([]);
    setLocation('');
    setDescription('');
    setSelectedDisasterType('');
    setSelectedPestType('');
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // 탭 변경 시 라디오 버튼 선택 초기화
    setSelectedDisasterType('');
    setSelectedPestType('');
    setError('');
  };

  const renderRadioButtons = () => {
    if (activeTab === 'disaster') {
      return (
        <RadioSection>
          <RadioGroup>
            <RadioOption>
              <RadioInput
                type="radio"
                id="earthquake"
                name="disasterType"
                value="earthquake"
                checked={selectedDisasterType === 'earthquake'}
                onChange={(e) => setSelectedDisasterType(e.target.value)}
              />
              <RadioLabel htmlFor="earthquake">지진,산불</RadioLabel>
            </RadioOption>
            <RadioOption>
              <RadioInput
                type="radio"
                id="typhoon"
                name="disasterType"
                value="typhoon"
                checked={selectedDisasterType === 'typhoon'}
                onChange={(e) => setSelectedDisasterType(e.target.value)}
              />
              <RadioLabel htmlFor="typhoon">태풍,호우</RadioLabel>
            </RadioOption>
            <RadioOption>
              <RadioInput
                type="radio"
                id="snow"
                name="disasterType"
                value="snow"
                checked={selectedDisasterType === 'snow'}
                onChange={(e) => setSelectedDisasterType(e.target.value)}
              />
              <RadioLabel htmlFor="snow">폭설</RadioLabel>
            </RadioOption>
          </RadioGroup>
        </RadioSection>
      );
    } else if (activeTab === 'pest') {
      return (
        <RadioSection>
          <RadioGroup>
            <RadioOption>
              <RadioInput
                type="radio"
                id="disease"
                name="pestType"
                value="disease"
                checked={selectedPestType === 'disease'}
                onChange={(e) => setSelectedPestType(e.target.value)}
              />
              <RadioLabel htmlFor="disease">질병</RadioLabel>
            </RadioOption>
            <RadioOption>
              <RadioInput
                type="radio"
                id="insect"
                name="pestType"
                value="insect"
                checked={selectedPestType === 'insect'}
                onChange={(e) => setSelectedPestType(e.target.value)}
              />
              <RadioLabel htmlFor="insect">해충</RadioLabel>
            </RadioOption>
          </RadioGroup>
        </RadioSection>
      );
    }
    return null;
  };

  return (
    <>
      <Container>
        <MainWrapper>
          <ContentWrapper>
            <Logo />
            <Title>신고하기</Title>
            <TapMenu activeTab={activeTab} onTabChange={handleTabChange} />
            
            {renderRadioButtons()}
            
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

const RadioSection = styled.section`
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const RadioOption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RadioInput = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  accent-color: #FBBF77;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 1.1rem;
    height: 1.1rem;
  }
`;

const RadioLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: black;
  cursor: pointer;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
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