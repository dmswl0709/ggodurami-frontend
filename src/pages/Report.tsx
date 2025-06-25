// pages/Report.tsx (정리된 버전)
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Logo from '../Components/Logo/Logo';
import TapMenu from '../Components/TapMenu/TapMenu';
import InputField from '../Components/InputField/InputField';
import FileUpload from '../Components/FileUpload/FileUpload';
import SubmitButton from '../Components/SubmitButton/SubmitButton';
import Container from '../Components/Common/Container';
import FindLocal from '../Components/FindLocal/FindLocal';


// 타입 정의
interface ReportResponse {
  message: string;
}

// API 설정
const BASE_URL = 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: BASE_URL,
});

// 요청 인터셉터 - JWT 토큰 자동 추가
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API 함수
const submitReport = async (formData: FormData): Promise<ReportResponse> => {
  const response = await apiClient.post<ReportResponse>('/report-damage', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

const Report: React.FC = () => {
  const [activeTab, setActiveTab] = useState('disaster');
  const [files, setFiles] = useState<File[]>([]);
  const [location, setLocation] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedDisasterType, setSelectedDisasterType] = useState('');
  const [selectedPestType, setSelectedPestType] = useState('');
  const [isMapOpen, setIsMapOpen] = useState(false);

  // 지도에서 위치 선택 처리
  const handleLocationSelect = (selectedLocation: SelectedLocation) => {
    setLocation(selectedLocation.address);
    setIsMapOpen(false);
  };

  // 지역찾기 버튼 클릭
  const handleLocationSearch = () => {
    setIsMapOpen(true);
  };

  // 카테고리 매핑 함수
  const getCategoryValues = () => {
    if (activeTab === 'disaster') {
      const categoryMap: { [key: string]: { main: string; sub: string } } = {
        'earthquake': { main: '재난', sub: '지진' },
        'typhoon': { main: '재난', sub: '태풍' },
        'snow': { main: '재난', sub: '폭설' },
      };
      return categoryMap[selectedDisasterType] || null;
    } else {
      const categoryMap: { [key: string]: { main: string; sub: string } } = {
        'disease': { main: '병해충', sub: '병해' },
        'insect': { main: '병해충', sub: '해충' },
      };
      return categoryMap[selectedPestType] || null;
    }
  };

  const validateForm = (): boolean => {
    const selectedType = activeTab === 'disaster' ? selectedDisasterType : selectedPestType;
    
    if (!selectedType) {
      setError('신고 유형을 선택해주세요.');
      return false;
    }

    if (!title.trim()) {
      setError('제목을 입력해주세요.');
      return false;
    }

    if (!location.trim()) {
      setError('신고 발생지역을 입력해주세요.');
      return false;
    }

    if (!description.trim()) {
      setError('신고 내용을 입력해주세요.');
      return false;
    }

    if (files.length === 0) {
      setError('최소 1개의 파일을 업로드해주세요.');
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    setError('');
    setSuccess('');

    const token = localStorage.getItem('accessToken');
    if (!token) {
      setError('로그인이 필요합니다.');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      
      const categoryValues = getCategoryValues();
      if (!categoryValues) {
        setError('올바른 카테고리를 선택해주세요.');
        setLoading(false);
        return;
      }

      formData.append('category', `${categoryValues.main}/${categoryValues.sub}`);
      formData.append('title', title.trim());
      formData.append('content', description.trim());
      formData.append('local', location.trim());

      files.forEach((file) => {
        formData.append('files', file);
      });

      const response = await submitReport(formData);
      
      setSuccess(response.message || '✅ 신고가 성공적으로 접수되었습니다.');
      
      // 성공 시 폼 초기화
      setFiles([]);
      setLocation('');
      setTitle('');
      setDescription('');
      setSelectedDisasterType('');
      setSelectedPestType('');

    } catch (err: any) {
      console.error('신고 제출 오류:', err);
      
      let errorMessage = '신고 제출 중 오류가 발생했습니다.';
      
      if (err.response?.status === 401) {
        errorMessage = '로그인이 만료되었습니다. 다시 로그인해주세요.';
      } else if (err.response?.status === 413) {
        errorMessage = '파일 크기가 너무 큽니다. 더 작은 파일을 업로드해주세요.';
      } else if (err.response?.status === 415) {
        errorMessage = '지원하지 않는 파일 형식입니다.';
      } else if (err.response?.status === 500) {
        errorMessage = '서버 내부 오류가 발생했습니다.';
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
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedDisasterType('');
    setSelectedPestType('');
    setError('');
    setSuccess('');
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

            <LocationSection>
              <SectionTitle>신고 제목</SectionTitle>
              <LocationInput
                type="text"
                placeholder="신고 제목을 입력하세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </LocationSection>
            
            <FileUpload files={files} onFilesChange={setFiles} />

            <LocationSection>
              <SectionTitle>신고 발생지역</SectionTitle>
              <LocationInputWrapper>
                <LocationInput
                  type="text"
                  placeholder="지역찾기 버튼을 눌러 지도에서 위치를 선택하세요"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <LocationButton onClick={handleLocationSearch}>
                  🗺️ 지역찾기
                </LocationButton>
              </LocationInputWrapper>
              <LocationHelpText>
                💡 지역찾기 버튼을 누르면 지도가 열리고, 원하는 위치를 클릭하여 선택할 수 있습니다.
              </LocationHelpText>
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
              {error && <ErrorText>{error}</ErrorText>}
              {success && <SuccessText>{success}</SuccessText>}
              <SubmitButton 
                onClick={handleSubmit} 
                disabled={loading}
              />
              {loading && <LoadingText>제출 중...</LoadingText>}
            </SubmitButtonWrapper>
          </ContentWrapper>
        </MainWrapper>
      </Container>

      {/* 지역찾기 컴포넌트 */}
      <FindLocal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        onLocationSelect={handleLocationSelect}
      />
    </>
  );
};

// 스타일 컴포넌트들
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
  box-sizing: border-box;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #FBBF77;
    box-shadow: 0 0 0 2px rgba(251, 191, 119, 0.2);
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
    background-color: #E6AB65;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
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

const LocationHelpText = styled.div`
  font-size: 0.8rem;
  color: #666;
  margin-top: 0.5rem;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 0.75rem;
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
  color: #dc3545;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-align: center;
  padding: 8px 12px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const SuccessText = styled.div`
  color: #155724;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-align: center;
  padding: 8px 12px;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const LoadingText = styled.div`
  color: #666;
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