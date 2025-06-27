// pages/ReportDetail.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Logo } from '../Components/Logo/Logo';
import Map from '../Components/Map/Map';
import Container from '../Components/Common/Container';
import { useNavigate } from "react-router-dom";
import BakanaeImage from '../assets/images/Bakanae disease.jpeg';

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
  max-width: 1200px;
  margin: 0 auto 40px auto;
  
  @media (max-width: 1024px) {
    max-width: 95%;
    padding: 40px 30px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    margin: 0 10px;
  }
  
  @media (max-width: 480px) {
    padding: 25px 15px;
    margin: 0 5px;
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
}

interface ApiResponse {
  reports: ReportData[];
}

// API 함수
const fetchRecentReports = async (): Promise<ApiResponse> => {
  try {
    console.log('Attempting to fetch reports from API...');
    
    // CORS 헤더와 함께 요청
    const response = await fetch('http://localhost:8000/reports/recent', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'cors', // CORS 모드 명시
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    
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

// 목업 데이터 함수 (실제 API 응답 형태로 수정)
const getMockData = (): ApiResponse => {
  console.log('📋 Using mock data');
  return {
    reports: [
      {
        title: "다저벌악",
        main_category: "병해충",
        sub_category: "병해",
        latitude: "35.7336908241694",
        longitude: "127.06573190851746"
      },
      {
        title: "제주도 태풍",
        main_category: "재난",
        sub_category: "태풍",
        latitude: "33.2375195759578",
        longitude: "126.515860406201"
      },
      {
        title: "전주 지진 발생",
        main_category: "재난",
        sub_category: "지진",
        latitude: "37.5665",
        longitude: "126.978"
      }
    ]
  };
};

export const ReportDetail: React.FC = () => {
  const [reportsData, setReportsData] = useState<ReportData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReports = async () => {
      try {
        setLoading(true);
        const data = await fetchRecentReports();
        setReportsData(data.reports);
        setError(null);
        console.log('Reports loaded successfully:', data.reports);
      } catch (err) {
        // 이제 fetchRecentReports에서 목업 데이터를 반환하므로 
        // 여기서는 실제 치명적인 오류만 처리
        setError('데이터를 불러올 수 없습니다.');
        console.error('Critical error loading reports:', err);
      } finally {
        setLoading(false);
      }
    };

    loadReports();
  }, []);

  // 더미 데이터 (API에서 받아온 데이터가 부족한 경우 기본 표시용)
  const defaultReportData = {
    pestType: '병해충',
    diseaseType: '노균병',
    location: '전북특별자치도 전주시 완산구 망내로 28',
    reportContent: '벼 줄자 전염 병해충이 발견 됐어요.',
    reportTime: '',
    detailContent: '최근 대규모 공동육묘장이 증가하고, 모 기르는(육묘) 기간의 단축, 벼씨 소독 기술 교육과 홍보 등으로 모판에서의 키다리병 발생이 점차 줄어드는 추세 인 것 같아요',
    imageUrl: BakanaeImage,
    imageCaption: '벼 키다리병(못자리)'
  };

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
        <Map reports={reportsData} />
      </MapContainer>
      
      <Container>
        <ContentWrapper>
          <InfoSection>
            <InfoItem>
              <InfoLabel>발생 유형 :</InfoLabel>
              <InfoValue>{defaultReportData.pestType}</InfoValue>
            </InfoItem>
            
            <InfoItem>
              <InfoLabel>병해충명 :</InfoLabel>
              <InfoValue>{defaultReportData.diseaseType}</InfoValue>
            </InfoItem>
            
            <InfoItem>
              <InfoLabel>발생 지역 주소 :</InfoLabel>
              <InfoValue>{defaultReportData.location}</InfoValue>
            </InfoItem>
  
            <ImageSection>
              <ImageLabelContainer>
                <InfoLabel>접수된 신고 사진 :</InfoLabel>
              </ImageLabelContainer>
              <ImageContainer>
                <ReportImage 
                  src={defaultReportData.imageUrl} 
                  alt={defaultReportData.imageCaption}
                />
                <ImageCaption>{defaultReportData.imageCaption}</ImageCaption>
              </ImageContainer>
            </ImageSection>
          </InfoSection>
          
          <DetailSection>
            <InfoItem>
              <InfoLabel>접수된 신고 내용:</InfoLabel>
            </InfoItem>
            <DetailContent>
              {defaultReportData.detailContent}
            </DetailContent>
          </DetailSection>

          {/* 실시간 신고 목록 표시 */}
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
      </Container>
    </PageContainer>
  );
};

export default ReportDetail;