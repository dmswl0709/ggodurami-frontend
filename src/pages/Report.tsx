// pages/Report.tsx (백엔드 연동 최종 버전 + 자동 이동 기능 + 자동 새로고침)
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  report_id?: string;
  uploaded_files?: number;
}

interface AIAnalysisResponse {
  category: string;
  total_detections: number;
  detections: Array<{
    class_id: number;
    class_name: string;
    confidence: number;
    bbox: {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    };
  }>;
  primary_detection: {
    class_id: number;
    class_name: string;
    confidence: number;
    bbox: {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    };
  } | null;
  error?: string;
}

interface SelectedLocation {
  address: string;
  latitude: number;
  longitude: number;
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
      console.log('🔑 Authorization 헤더 추가');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 🔥 신고 등록 API 함수 (백엔드 구조에 맞게 수정)
const submitReport = async (formData: FormData): Promise<ReportResponse> => {
  try {
    console.log('=== 신고 등록 API 호출 시작 ===');
    
    // FormData 내용 로깅
    console.log('전송할 FormData:');
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        console.log(`${key}: [File] ${value.name} (${value.size} bytes, ${value.type})`);
      } else {
        console.log(`${key}: ${value}`);
      }
    }
    
    const response = await apiClient.post<ReportResponse>('/damage-report', formData, {
      headers: {
        // FormData 사용 시 Content-Type 헤더는 자동으로 설정
      },
    });
    
    console.log('✅ 신고 등록 성공:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('❌ 신고 등록 실패:', error);
    console.error('응답 데이터:', error.response?.data);
    console.error('응답 상태:', error.response?.status);
    throw error;
  }
};

// 🔥 AI 분석 API 함수 (백엔드 구조에 맞게 수정)
const requestAIAnalysis = async (reportId: string): Promise<AIAnalysisResponse | null> => {
  try {
    console.log('=== AI 분석 API 호출 시작 ===');
    console.log('분석할 신고 ID:', reportId);
    
    const response = await apiClient.get<AIAnalysisResponse>(`/damage-report/detect-damage/${reportId}`);
    
    console.log('✅ AI 분석 API 응답:', response.data);
    
    // 에러 응답 처리
    if (response.data.error) {
      console.error('❌ AI 분석 에러:', response.data.error);
      return null;
    }
    
    // 필수 필드 확인
    if (!response.data.primary_detection) {
      console.warn('⚠️ AI 분석 결과에 primary_detection이 없음');
      return null;
    }
    
    return response.data;
  } catch (error: any) {
    console.error('❌ AI 분석 실패:', error);
    console.error('AI 분석 응답 데이터:', error.response?.data);
    console.error('AI 분석 응답 상태:', error.response?.status);
    return null;
  }
};

const Report: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('disaster');
  const [files, setFiles] = useState<File[]>([]);
  const [location, setLocation] = useState('');
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedDisasterType, setSelectedDisasterType] = useState('');
  const [selectedPestType, setSelectedPestType] = useState('');
  const [isMapOpen, setIsMapOpen] = useState(false);
  
  // 🔥 AI 분석 관련 상태
  const [aiAnalyzing, setAiAnalyzing] = useState(false);
  const [aiResult, setAiResult] = useState<AIAnalysisResponse | null>(null);

  // 🔥 자동 새로고침 로직
  useEffect(() => {
    const handleAutoRefresh = () => {
      const hasRefreshed = sessionStorage.getItem('reportPageRefreshed');
      
      if (!hasRefreshed) {
        console.log('🔄 Report 페이지 최초 접근 - 자동 새로고침 실행');
        sessionStorage.setItem('reportPageRefreshed', 'true');
        
        // 약간의 지연 후 새로고침 (로딩 표시를 위해)
        setTimeout(() => {
          window.location.reload();
        }, 100);
      } else {
        console.log('✅ Report 페이지 새로고침 완료 - 정상 진행');
      }
    };

    handleAutoRefresh();

    // 컴포넌트 언마운트 시 세션 스토리지 정리
    return () => {
      // 다른 페이지로 이동할 때는 플래그 제거하지 않음 (뒤로가기 대응)
    };
  }, []);

  // 🔥 페이지 떠날 때 새로고침 플래그 정리
  useEffect(() => {
    const handleBeforeUnload = () => {
      // 페이지를 완전히 떠날 때만 플래그 제거
      if (window.performance?.navigation?.type === 1) { // reload가 아닌 경우
        sessionStorage.removeItem('reportPageRefreshed');
      }
    };

    const handlePopState = () => {
      // 뒤로가기 시 플래그 제거
      sessionStorage.removeItem('reportPageRefreshed');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // 지도에서 위치 선택 처리
  const handleLocationSelect = (selectedLocation: SelectedLocation) => {
    console.log('🗺️ 받은 위치 데이터:', selectedLocation);
    
    if (!selectedLocation) {
      console.error('선택된 위치 데이터가 없습니다.');
      return;
    }
    
    if (typeof selectedLocation.latitude !== 'number' || typeof selectedLocation.longitude !== 'number') {
      console.error('위도/경도가 숫자 형태가 아닙니다:', selectedLocation);
      return;
    }
    
    setLocation(selectedLocation.address || '');
    setLatitude(selectedLocation.latitude);
    setLongitude(selectedLocation.longitude);
    setIsMapOpen(false);
    
    console.log('✅ 위치 설정 완료:', {
      address: selectedLocation.address,
      latitude: selectedLocation.latitude,
      longitude: selectedLocation.longitude
    });
  };

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

    if (latitude === null || longitude === null || 
        typeof latitude !== 'number' || typeof longitude !== 'number' ||
        isNaN(latitude) || isNaN(longitude)) {
      setError('지도에서 정확한 위치를 선택해주세요.');
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

  // 🔥 페이지 이동 함수 (새로고침 플래그 정리 추가)
  const navigateToReportDetail = () => {
    console.log('📍 ReportDetail 페이지로 이동');
    // 다음 페이지로 이동 전 플래그 정리
    sessionStorage.removeItem('reportPageRefreshed');
    navigate('/ReportDetail');
  };

  // 🔥 수정된 handleSubmit - 신고 완료 후 자동 이동 기능 추가
  const handleSubmit = async () => {
    setError('');
    setSuccess('');
    setAiResult(null);

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
      console.log('=== 신고 제출 시작 ===');
      
      const formData = new FormData();
      
      const categoryValues = getCategoryValues();
      if (!categoryValues) {
        setError('올바른 카테고리를 선택해주세요.');
        setLoading(false);
        return;
      }

      // 백엔드 API 명세에 맞게 FormData 구성
      formData.append('main_category', categoryValues.main);
      formData.append('sub_category', categoryValues.sub);
      formData.append('title', title.trim());
      formData.append('content', description.trim());
      formData.append('local', location.trim());
      
      // 위도/경도 추가
      const lat = latitude;
      const lng = longitude;
      
      if (lat !== null && lng !== null && 
          typeof lat === 'number' && typeof lng === 'number' && 
          !isNaN(lat) && !isNaN(lng)) {
        formData.append('latitude', lat.toString());
        formData.append('longitude', lng.toString());
        console.log('✅ 위도/경도 FormData에 추가됨:', lat.toString(), lng.toString());
      } else {
        setError('위치 정보가 올바르지 않습니다. 다시 지역을 선택해주세요.');
        setLoading(false);
        return;
      }

      // 파일들 추가 (백엔드에서 'files' 필드명으로 받음)
      files.forEach((file, index) => {
        formData.append('files', file);
        console.log(`📎 파일 ${index + 1} 추가:`, file.name, file.type, file.size + ' bytes');
      });

      // 1단계: 신고 등록
      const response = await submitReport(formData);
      
      let successMessage = response.message || '✅ 신고가 성공적으로 접수되었습니다.';
      
      console.log('🎉 신고 제출 성공:', {
        report_id: response.report_id,
        uploaded_files: response.uploaded_files
      });

      // 🔥 2단계: 병해충 신고인 경우 AI 분석 실행
      if (categoryValues.main === '병해충' && response.report_id) {
        console.log('🤖 병해충 신고 감지 - AI 분석 시작');
        setAiAnalyzing(true);
        
        // AI 분석 요청 (5초 지연 후 - 백엔드에서 파일 처리 완료 대기)
        setTimeout(async () => {
          try {
            console.log('🔍 AI 분석 실행 중...');
            const aiAnalysisResult = await requestAIAnalysis(response.report_id!);
            
            if (aiAnalysisResult && aiAnalysisResult.primary_detection) {
              setAiResult(aiAnalysisResult);
              
              const confidence = Math.round(aiAnalysisResult.primary_detection.confidence * 100);
              const className = aiAnalysisResult.primary_detection.class_name;
              
              successMessage += `\n\n🤖 AI 분석도 완료되었습니다!\n주요 진단: ${className} (신뢰도: ${confidence}%)`;
              console.log('🎉 AI 분석 완료:', aiAnalysisResult);
            } else {
              successMessage += '\n\n⚠️ AI 분석에서 병해충을 감지하지 못했거나 분석에 실패했습니다.';
              console.log('⚠️ AI 분석 결과 없음');
            }
            
            setSuccess(successMessage);
            setAiAnalyzing(false);
            
            // 🔥 AI 분석 완료 후 2초 뒤 자동 이동
            setTimeout(() => {
              console.log('🔄 AI 분석 완료 - ReportDetail 페이지로 이동');
              navigateToReportDetail();
            }, 2000);
            
          } catch (aiError) {
            console.error('AI 분석 중 오류:', aiError);
            successMessage += '\n\n⚠️ AI 분석 중 오류가 발생했지만 신고는 정상적으로 접수되었습니다.';
            setSuccess(successMessage);
            setAiAnalyzing(false);
            
            // 🔥 AI 분석 실패해도 2초 뒤 자동 이동
            setTimeout(() => {
              console.log('🔄 AI 분석 실패했지만 ReportDetail 페이지로 이동');
              navigateToReportDetail();
            }, 2000);
          }
        }, 5000); // 5초 지연
        
      } else {
        // 🔥 재난 신고인 경우는 AI 분석 없이 바로 성공 메시지 표시 후 자동 이동
        setSuccess(successMessage);
        
        // 2초 후 자동 이동
        setTimeout(() => {
          console.log('🔄 재난 신고 완료 - ReportDetail 페이지로 이동');
          navigateToReportDetail();
        }, 2000);
      }
      
      // 성공 시 폼 초기화
      setFiles([]);
      setLocation('');
      setLatitude(null);
      setLongitude(null);
      setTitle('');
      setDescription('');
      setSelectedDisasterType('');
      setSelectedPestType('');

    } catch (err: any) {
      console.error('❌ 신고 제출 오류:', err);
      
      let errorMessage = '신고 제출 중 오류가 발생했습니다.';
      
      if (err.response?.status === 401) {
        errorMessage = '로그인이 만료되었습니다. 다시 로그인해주세요.';
      } else if (err.response?.status === 404) {
        errorMessage = 'API 엔드포인트를 찾을 수 없습니다. 서버 설정을 확인해주세요.';
      } else if (err.response?.status === 413) {
        errorMessage = '파일 크기가 너무 큽니다. 더 작은 파일을 업로드해주세요.';
      } else if (err.response?.status === 415) {
        errorMessage = '지원하지 않는 파일 형식입니다.';
      } else if (err.response?.status === 422) {
        console.error('422 에러 상세:', err.response.data);
        if (err.response?.data?.detail) {
          if (Array.isArray(err.response.data.detail)) {
            const errors = err.response.data.detail.map((item: any) => {
              const field = item.loc?.[1] || '알 수 없는 필드';
              const message = item.msg || '유효하지 않은 값';
              return `${field}: ${message}`;
            }).join('\n');
            errorMessage = `입력 데이터 오류:\n${errors}`;
          } else {
            errorMessage = `입력 데이터 오류: ${err.response.data.detail}`;
          }
        } else {
          errorMessage = '입력 데이터 형식이 올바르지 않습니다. 모든 필드를 확인해주세요.';
        }
      } else if (err.response?.status === 500) {
        errorMessage = '서버 내부 오류가 발생했습니다.';
      } else if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.code === 'ERR_NETWORK') {
        errorMessage = '서버에 연결할 수 없습니다. 서버가 실행 중인지 확인해주세요.';
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
    setAiResult(null);
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

  // 🔥 AI 분석 결과 표시 컴포넌트
  const renderAIResult = () => {
    if (!aiResult && !aiAnalyzing) return null;

    return (
      <AIResultSection>
        {aiAnalyzing ? (
          <AIAnalyzingContainer>
            <AIIcon>🤖</AIIcon>
            <AIAnalyzingText>
              AI가 업로드된 이미지를 분석하고 있습니다...
              <br />
              <small style={{ color: '#666' }}>잠시만 기다려주세요. (약 5초 소요)</small>
            </AIAnalyzingText>
          </AIAnalyzingContainer>
        ) : aiResult ? (
          <AIResultContainer>
            <AIIcon>🎉</AIIcon>
            <AIResultContent>
              <AIResultTitle>AI 분석 완료!</AIResultTitle>
              <AIResultDetail>
                <strong>탐지된 병해충:</strong> {aiResult.primary_detection?.class_name || '감지되지 않음'}
                <br />
                <strong>신뢰도:</strong> {aiResult.primary_detection ? Math.round(aiResult.primary_detection.confidence * 100) : 0}%
                <br />
                <strong>총 탐지 수:</strong> {aiResult.total_detections}개
                <br />
                <strong>카테고리:</strong> {aiResult.category}
              </AIResultDetail>
            </AIResultContent>
          </AIResultContainer>
        ) : null}
      </AIResultSection>
    );
  };

  // 🔥 새로고침 상태 확인 및 로딩 화면 표시
  const hasRefreshed = sessionStorage.getItem('reportPageRefreshed');
  
  if (!hasRefreshed) {
    return (
      <Container>
        <RefreshLoadingWrapper>
          <RefreshLoadingContainer>
            <RefreshLoadingSpinner />
            <RefreshLoadingText>
              페이지를 준비하고 있습니다...
              <br />
              <small>잠시만 기다려주세요.</small>
            </RefreshLoadingText>
          </RefreshLoadingContainer>
        </RefreshLoadingWrapper>
      </Container>
    );
  }

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
              {latitude && longitude && (
                <LocationInfo>
                  📍 선택된 좌표: 위도 {latitude.toFixed(6)}, 경도 {longitude.toFixed(6)}
                </LocationInfo>
              )}
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

            {/* 🔥 병해충 탭일 때 AI 분석 안내 메시지 */}
            {activeTab === 'pest' && (
              <AINoticeSection>
                <AINoticeContainer>
                  <AINoticeIcon>🤖</AINoticeIcon>
                  <AINoticeContent>
                    <AINoticeTitle>AI 자동 분석 서비스</AINoticeTitle>
                    <AINoticeText>
                      병해충 신고 시 업로드된 이미지를 YOLO AI가 자동으로 분석하여 
                      병해충 종류를 식별해드립니다. 분석에는 약 5초가 소요됩니다.
                    </AINoticeText>
                  </AINoticeContent>
                </AINoticeContainer>
              </AINoticeSection>
            )}

            <SubmitButtonWrapper>
              {error && <ErrorText>{error}</ErrorText>}
              {success && (
                <SuccessTextWrapper>
                  <SuccessText>{success}</SuccessText>
                  <NavigationNotice>
                    📍 잠시 후 신고 상세 페이지로 자동 이동됩니다...
                  </NavigationNotice>
                </SuccessTextWrapper>
              )}
              
              {/* 🔥 AI 분석 결과 표시 */}
              {renderAIResult()}
              
              <SubmitButton 
                onClick={handleSubmit} 
                disabled={loading || aiAnalyzing}
              />
              {(loading || aiAnalyzing) && (
                <LoadingText>
                  {loading && !aiAnalyzing ? '신고 제출 중...' : 
                   aiAnalyzing ? 'AI 분석 중...' : 
                   '처리 중...'}
                </LoadingText>
              )}
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

// 🔥 새로고침 로딩 관련 스타일 컴포넌트들
const RefreshLoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

const RefreshLoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const RefreshLoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #FBBF77;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const RefreshLoadingText = styled.div`
  color: #666;
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
  
  small {
    font-size: 14px;
    color: #999;
  }
`;

// 🔥 기존 스타일 컴포넌트들
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

const LocationInfo = styled.div`
  font-size: 0.85rem;
  color: #007bff;
  margin-top: 0.5rem;
  font-weight: 500;
  padding: 8px 12px;
  background-color: #e7f3ff;
  border-radius: 4px;
  border-left: 4px solid #007bff;

  @media (max-width: 480px) {
    font-size: 0.8rem;
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

// 🔥 AI 관련 스타일 컴포넌트들
const AINoticeSection = styled.section`
  width: 100%;
  margin-bottom: 2rem;
`;

const AINoticeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
  border: 2px solid #2196f3;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 2px 8px rgba(33, 150, 243, 0.1);

  @media (max-width: 768px) {
    gap: 10px;
    padding: 14px 16px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 12px 14px;
  }
`;

const AINoticeIcon = styled.div`
  font-size: 24px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const AINoticeContent = styled.div`
  flex: 1;
`;

const AINoticeTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1976d2;
  margin: 0 0 6px 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const AINoticeText = styled.p`
  font-size: 14px;
  color: #424242;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const AIResultSection = styled.div`
  width: 100%;
  margin: 1rem 0;
`;

const AIAnalyzingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #fff3e0 0%, #fce4ec 100%);
  border: 2px solid #ff9800;
  border-radius: 12px;
  padding: 16px 20px;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.7; }
    100% { opacity: 1; }
  }

  @media (max-width: 768px) {
    gap: 10px;
    padding: 14px 16px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 12px 14px;
    flex-direction: column;
    text-align: center;
  }
`;

const AIResultContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: linear-gradient(135deg, #e8f5e8 0%, #f3e5f5 100%);
  border: 2px solid #4caf50;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.1);

  @media (max-width: 768px) {
    gap: 10px;
    padding: 14px 16px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 12px 14px;
    flex-direction: column;
    text-align: center;
  }
`;

const AIIcon = styled.div`
  font-size: 24px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const AIAnalyzingText = styled.div`
  font-size: 14px;
  color: #e65100;
  font-weight: 500;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const AIResultContent = styled.div`
  flex: 1;
`;

const AIResultTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #2e7d32;
  margin: 0 0 8px 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const AIResultDetail = styled.div`
  font-size: 14px;
  color: #424242;
  line-height: 1.6;

  strong {
    color: #2e7d32;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
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
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const SuccessTextWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const SuccessText = styled.div`
  color: #155724;
  font-size: 0.9rem;
  text-align: center;
  padding: 8px 12px;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  white-space: pre-line;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const NavigationNotice = styled.div`
  color: #0066cc;
  font-size: 0.85rem;
  text-align: center;
  padding: 6px 12px;
  background-color: #e6f3ff;
  border: 1px solid #b3d9ff;
  border-radius: 4px;
  font-weight: 500;
  width: 100%;
  box-sizing: border-box;
  animation: fadeInOut 2s infinite;

  @keyframes fadeInOut {
    0% { opacity: 0.7; }
    50% { opacity: 1; }
    100% { opacity: 0.7; }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
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