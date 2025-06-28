// pages/ReportDetail.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Logo } from '../Components/Logo/Logo';
import Map from '../Components/Map/Map';
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
  max-width: 1200px;
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

const MapContainer = styled.div`
  width: 100%;
  height: 450px;
  margin-bottom: 30px;
  border-radius: 12px;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto 30px auto;
  padding: 0 20px;
  box-sizing: border-box;
  
  iframe, 
  > div {
    width: 100% !important;
    height: 100% !important;
  }
  
  @media (max-width: 1024px) {
    max-width: 95%;
    height: 400px;
    padding: 0 15px;
    margin: 0 auto 25px auto;
  }
  
  @media (max-width: 768px) {
    height: 350px;
    padding: 0 10px;
    margin: 0 auto 20px auto;
  }
  
  @media (max-width: 480px) {
    height: 280px;
    padding: 0 5px;
    margin: 0 auto 15px auto;
  }
`;

const ContentWrapper = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 50px;
  width: 60vw;
  margin: 0 auto 40px auto;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    width: 95vw;
    padding: 30px 20px;
    margin: 0 auto;
  }
  
  @media (max-width: 480px) {
    width: 98vw;
    padding: 25px 15px;
    margin: 0 auto;
  }
`;

const InfoSection = styled.div`
  margin-bottom: 35px;
  
  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 18px;
  
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 12px;
  }
`;

const InfoLabel = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  min-width: 140px;
  margin-right: 15px;
  
  @media (max-width: 1024px) {
    font-size: 17px;
    min-width: 130px;
    margin-right: 12px;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    min-width: 120px;
    margin-right: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
    margin-bottom: 5px;
    min-width: auto;
    margin-right: 0;
  }
`;

const InfoValue = styled.span`
  font-size: 18px;
  color: #555;
  line-height: 1.5;
  
  @media (max-width: 1024px) {
    font-size: 17px;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const ImageSection = styled.div`
  margin-bottom: 35px;
  
  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const ImageLabelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 18px;
  
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 12px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  
  @media (max-width: 1024px) {
    max-width: 450px;
  }
  
  @media (max-width: 768px) {
    max-width: 400px;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const ReportImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 2px solid #ddd;
  margin-bottom: 12px;
`;

const ImageCaption = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
  
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const DetailSection = styled.div`
  margin-top: 25px;
  
  @media (max-width: 768px) {
    margin-top: 20px;
  }
  
  @media (max-width: 480px) {
    margin-top: 15px;
  }
`;

const DetailContent = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  margin: 0;
  
  @media (max-width: 1024px) {
    font-size: 17px;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 18px;
  color: #666;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 18px;
  color: #e74c3c;
  text-align: center;
`;

// API 응답 타입 정의
interface ReportData {
  title: string;
  main_category: string;
  sub_category: string;
  latitude: string;
  longitude: string;
  id?: string;
}

interface ReportDetailData {
  user_id: string;
  username: string;
  main_category: string;
  sub_category: string;
  title: string;
  content: string;
  local: string;
  latitude: string;
  longitude: string;
  files: string[];
  created_at: string;
  id: string;
}

interface ApiResponse {
  reports: ReportData[];
}

// 🔥 파일 URL 생성 함수 추가
const getFileUrl = (filePath: string): string => {
  if (!filePath) return '';
  
  // 이미 완전한 URL인 경우
  if (filePath.startsWith('http://') || filePath.startsWith('https://')) {
    return filePath;
  }
  
  // /static으로 시작하는 경우
  if (filePath.startsWith('/static')) {
    return `http://localhost:8000${filePath}`;
  }
  
  // 파일명만 있는 경우
  return `http://localhost:8000/static/uploads/reports/${filePath}`;
};

// 🔥 이미지 표시 컴포넌트
const ImageDisplay: React.FC<{ files: string[] }> = ({ files }) => {
  if (!files || files.length === 0) {
    return (
      <div style={{
        padding: '40px 20px',
        backgroundColor: '#f8f9fa',
        border: '2px dashed #dee2e6',
        borderRadius: '12px',
        textAlign: 'center',
        color: '#6c757d',
        fontSize: '14px'
      }}>
        <div style={{ marginBottom: '10px' }}>📷</div>
        <div>첨부된 파일이 없습니다</div>
      </div>
    );
  }

  return (
    <div>
      {files.map((file, index) => {
        const fileUrl = getFileUrl(file);
        console.log(`🖼️ 이미지 ${index + 1} URL:`, fileUrl);
        
        return (
          <div key={index} style={{ marginBottom: '15px' }}>
            <ReportImage 
              src={fileUrl}
              alt={`신고 첨부 파일 ${index + 1}`}
              onLoad={() => {
                console.log(`✅ 이미지 ${index + 1} 로드 성공:`, fileUrl);
              }}
              onError={(e) => {
                console.error(`❌ 이미지 ${index + 1} 로드 실패:`, fileUrl);
                
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                
                // 오류 메시지 표시
                const errorDiv = document.createElement('div');
                errorDiv.style.cssText = `
                  padding: 40px 20px;
                  background-color: #f8f9fa;
                  border: 2px dashed #dee2e6;
                  border-radius: 12px;
                  text-align: center;
                  color: #6c757d;
                  font-size: 14px;
                `;
                errorDiv.innerHTML = `
                  <div style="margin-bottom: 10px;">📷</div>
                  <div>이미지를 불러올 수 없습니다</div>
                  <div style="font-size: 12px; margin-top: 5px; color: #999;">
                    URL: ${fileUrl}
                  </div>
                  <div style="font-size: 11px; margin-top: 5px; color: #999;">
                    원본 경로: ${file}
                  </div>
                `;
                
                target.parentNode?.insertBefore(errorDiv, target.nextSibling);
              }}
            />
            <ImageCaption>첨부 파일 {index + 1}</ImageCaption>
          </div>
        );
      })}
    </div>
  );
};

// API 함수들
const fetchRecentReports = async (): Promise<ApiResponse> => {
  try {
    console.log('Attempting to fetch reports from API...');
    
    const response = await fetch('http://localhost:8000/reports/recent', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'cors',
    });
    
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      console.warn(`API call failed with status: ${response.status}. Using mock data.`);
      return getMockData();
    }

    const contentType = response.headers.get('content-type');
    console.log('Content-Type:', contentType);
    
    if (!contentType || !contentType.includes('application/json')) {
      console.warn('API did not return JSON. Using mock data.');
      return getMockData();
    }

    const data = await response.json();
    console.log('✅ API Response successful:', data);
    return data;
  } catch (error) {
    console.error('❌ API call failed:', error);
    console.log('🔄 Falling back to mock data');
    return getMockData();
  }
};

// 신고 상세 정보 가져오기
const fetchReportDetail = async (reportId: string): Promise<ReportDetailData | null> => {
  try {
    console.log(`Fetching report detail for ID: ${reportId}`);
    
    const response = await fetch(`http://localhost:8000/report/${reportId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'cors',
    });
    
    if (!response.ok) {
      console.warn(`Failed to fetch report detail: ${response.status}`);
      return null;
    }

    const data = await response.json();
    console.log('✅ Report detail fetched:', data);
    return data;
  } catch (error) {
    console.error('❌ Failed to fetch report detail:', error);
    return null;
  }
};

// 목업 데이터 함수
const getMockData = (): ApiResponse => {
  console.log('📋 Using mock data');
  return {
    reports: [
      {
        title: "다저벌악",
        main_category: "병해충",
        sub_category: "병해",
        latitude: "35.7336908241694",
        longitude: "127.06573190851746",
        id: "mock_report_1"
      },
      {
        title: "제주도 태풍",
        main_category: "재난",
        sub_category: "태풍",
        latitude: "33.2375195759578",
        longitude: "126.515860406201",
        id: "mock_report_2"
      },
      {
        title: "전주 지진 발생",
        main_category: "재난",
        sub_category: "지진",
        latitude: "37.5665",
        longitude: "126.978",
        id: "mock_report_3"
      }
    ]
  };
};

export const ReportDetail: React.FC = () => {
  const [reportsData, setReportsData] = useState<ReportData[]>([]);
  const [selectedReportDetail, setSelectedReportDetail] = useState<ReportDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  useEffect(() => {
    const loadReports = async () => {
      try {
        setLoading(true);
        const data = await fetchRecentReports();
        setReportsData(data.reports);
        setError(null);
        
        console.log('Reports loaded successfully:', data.reports);
        
        data.reports.forEach((report, index) => {
          console.log(`Report ${index}:`, {
            title: report.title,
            id: report.id,
            hasId: !!report.id
          });
        });
      } catch (err) {
        setError('데이터를 불러올 수 없습니다.');
        console.error('Critical error loading reports:', err);
      } finally {
        setLoading(false);
      }
    };

    loadReports();
  }, []);

  // 마커 클릭 시 호출되는 함수
  const handleMarkerClick = async (reportId: string) => {
    console.log('handleMarkerClick called with:', reportId);
    
    if (!reportId) {
      console.warn('Report ID is missing');
      return;
    }

    setLoadingDetail(true);
    try {
      // 임시 ID인 경우 목업 데이터 표시
      if (reportId.startsWith('temp_') || reportId.startsWith('mock_')) {
        console.log('Using mock detail data for:', reportId);
        
        const mockDetail: ReportDetailData = {
          user_id: "mock_user_id",
          username: "테스트 사용자",
          main_category: "병해충",
          sub_category: "병해",
          title: reportId.includes('다저벌악') ? "다저벌악" : 
                 reportId.includes('태풍') ? "제주도 태풍" :
                 reportId.includes('지진') ? "전주 지진 발생" : "테스트 신고",
          content: "이것은 테스트 신고 내용입니다. 실제 API 연동 시 실제 데이터로 대체됩니다.",
          local: "테스트 지역",
          latitude: "37.5665",
          longitude: "126.978",
          files: [],
          created_at: new Date().toISOString(),
          id: reportId
        };
        
        setSelectedReportDetail(mockDetail);
      } else {
        // 실제 API 호출
        const detail = await fetchReportDetail(reportId);
        setSelectedReportDetail(detail);
      }
    } catch (error) {
      console.error('Error fetching report detail:', error);
    } finally {
      setLoadingDetail(false);
    }
  };

  // 🔥 파일 정보 디버깅을 위한 useEffect 추가
  useEffect(() => {
    if (selectedReportDetail) {
      console.log('=== 선택된 신고 상세 정보 ===');
      console.log('제목:', selectedReportDetail.title);
      console.log('파일 정보:', selectedReportDetail.files);
      console.log('파일 개수:', selectedReportDetail.files?.length || 0);
      
      if (selectedReportDetail.files && selectedReportDetail.files.length > 0) {
        selectedReportDetail.files.forEach((file, index) => {
          console.log(`파일 ${index + 1}:`, file);
          console.log(`파일 ${index + 1} URL:`, getFileUrl(file));
        });
      }
    }
  }, [selectedReportDetail]);

  if (loading) {
    return (
      <PageContainer>
        <LoadingContainer>
          신고 정보를 불러오는 중...
        </LoadingContainer>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <ErrorContainer>
          <div>{error}</div>
        </ErrorContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <HeaderTitle>신고상황 세부 페이지</HeaderTitle>
      </Header>
      
      <MapContainer>
        <Map reports={reportsData} onMarkerClick={handleMarkerClick} />
      </MapContainer>
      
      <ContentWrapper>
        {selectedReportDetail ? (
          <InfoSection>
            <InfoItem>
              <InfoLabel style={{ color: '#d32f2f', fontWeight: 700, fontSize: '20px' }}>
                📋 선택된 신고 상세 정보
              </InfoLabel>
            </InfoItem>
            
            {loadingDetail ? (
              <DetailContent>상세 정보를 불러오는 중...</DetailContent>
            ) : (
              <>
                <InfoItem>
                  <InfoLabel>신고 제목:</InfoLabel>
                  <InfoValue>{selectedReportDetail.title}</InfoValue>
                </InfoItem>
                
                <InfoItem>
                  <InfoLabel>신고자:</InfoLabel>
                  <InfoValue>{selectedReportDetail.username}</InfoValue>
                </InfoItem>
                
                <InfoItem>
                  <InfoLabel>카테고리:</InfoLabel>
                  <InfoValue>
                    {selectedReportDetail.main_category}
                    {selectedReportDetail.sub_category && ` > ${selectedReportDetail.sub_category}`}
                  </InfoValue>
                </InfoItem>
                
                <InfoItem>
                  <InfoLabel>발생 지역:</InfoLabel>
                  <InfoValue>{selectedReportDetail.local}</InfoValue>
                </InfoItem>
                
                <InfoItem>
                  <InfoLabel>좌표:</InfoLabel>
                  <InfoValue>
                    위도: {selectedReportDetail.latitude}, 경도: {selectedReportDetail.longitude}
                  </InfoValue>
                </InfoItem>
                
                <InfoItem>
                  <InfoLabel>신고 일시:</InfoLabel>
                  <InfoValue>
                    {new Date(selectedReportDetail.created_at).toLocaleString('ko-KR')}
                  </InfoValue>
                </InfoItem>
                
                <DetailSection>
                  <InfoItem>
                    <InfoLabel>신고 내용:</InfoLabel>
                  </InfoItem>
                  <DetailContent style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px', marginTop: '10px' }}>
                    {selectedReportDetail.content}
                  </DetailContent>
                </DetailSection>
                
                {/* 🔥 수정된 첨부 파일 표시 부분 */}
                <ImageSection>
                  <ImageLabelContainer>
                    <InfoLabel>첨부 파일:</InfoLabel>
                  </ImageLabelContainer>
                  <ImageContainer>
                    <ImageDisplay files={selectedReportDetail.files || []} />
                  </ImageContainer>
                </ImageSection>
              </>
            )}
          </InfoSection>
        ) : (
          <InfoSection>
            <InfoItem>
              <InfoLabel style={{ color: '#666', fontWeight: 600, fontSize: '18px' }}>
                🗺️ 실시간 신고 현황
              </InfoLabel>
            </InfoItem>
            <DetailContent style={{ textAlign: 'center', padding: '40px 20px', color: '#666' }}>
              지도의 마커를 클릭하면 해당 신고의 상세 정보를 확인할 수 있습니다.
              <br />
              <br />
              <span style={{ fontSize: '14px', color: '#999' }}>
                💡 빨간색 마커: 재난/재해 신고 | 파란색 마커: 병해충 신고
              </span>
            </DetailContent>
          </InfoSection>
        )}

        {reportsData.length > 0 && (
          <DetailSection>
            <InfoItem>
              <InfoLabel>최근 신고 현황:</InfoLabel>
            </InfoItem>
            <DetailContent>
              총 {reportsData.length}건의 신고가 접수되어 지도에 표시되고 있습니다.
              {reportsData.some(report => report.latitude && report.longitude) && 
                ` (위치 정보가 있는 신고: ${reportsData.filter(report => report.latitude && report.longitude).length}건)`
              }
            </DetailContent>
          </DetailSection>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default ReportDetail;
                