// pages/Home.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header/Header';
import AlertBanner from '../Components/AlertBanner/AlertBanner';
import NewsSection from '../Components/NewsSection/NewsSection';
import Container from '../Components/Common/Container';
import TopBar from '../Components/TopBar/TopBar';
import MapSection from '../Components/Map/Map';

// ReportDetail과 동일한 타입 정의
interface ReportData {
  title: string;
  main_category: string;
  sub_category: string;
  latitude: string;
  longitude: string;
  id?: string;
}

interface ApiResponse {
  reports: ReportData[];
}

// API 함수들 (ReportDetail과 동일)
const fetchRecentReports = async (): Promise<ApiResponse> => {
  try {
    console.log('🏠 Home: 최근 신고 데이터 조회 시작...');
    
    const response = await fetch('http://baekend.onrender.com/reports/recent', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'cors',
    });
    
    console.log('🏠 Home: API 응답 상태:', response.status);
    
    if (!response.ok) {
      console.warn(`🏠 Home: API 호출 실패 (${response.status}), 목업 데이터 사용`);
      return getMockData();
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.warn('🏠 Home: JSON 응답이 아님, 목업 데이터 사용');
      return getMockData();
    }

    const data = await response.json();
    console.log('✅ Home: 실제 신고 데이터 로드 성공:', data.reports?.length || 0, '건');
    return data;
  } catch (error) {
    console.error('❌ Home: API 호출 실패:', error);
    console.log('🔄 Home: 목업 데이터로 대체');
    return getMockData();
  }
};

// 목업 데이터 함수 (ReportDetail과 동일)
const getMockData = (): ApiResponse => {
  console.log('📋 Home: 목업 데이터 사용');
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
      },
      {
        title: "대구 산불",
        main_category: "재난",
        sub_category: "산불",
        latitude: "35.8714",
        longitude: "128.6014",
        id: "mock_report_4"
      },
      {
        title: "부산 태풍",
        main_category: "재난",
        sub_category: "태풍",
        latitude: "35.1796",
        longitude: "129.0756",
        id: "mock_report_5"
      }
    ]
  };
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  // 신고 데이터 상태 관리
  const [reportsData, setReportsData] = useState<ReportData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // 🔥 선택된 신고 정보 상태 추가 (마커 위 박스용)
  const [selectedReport, setSelectedReport] = useState<ReportData | null>(null);

  // 컴포넌트 마운트 시 신고 데이터 로드
  useEffect(() => {
    const loadReports = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await fetchRecentReports();
        setReportsData(data.reports);
        
        console.log('🏠 Home: 신고 데이터 로드 완료:', {
          총신고수: data.reports.length,
          유효한좌표: data.reports.filter(r => r.latitude && r.longitude).length
        });
        
      } catch (err) {
        console.error('❌ Home: 신고 데이터 로드 실패:', err);
        setError('신고 데이터를 불러올 수 없습니다.');
        // 오류 발생 시에도 목업 데이터 시도
        const mockData = getMockData();
        setReportsData(mockData.reports);
      } finally {
        setLoading(false);
      }
    };

    loadReports();
  }, []);

  // 🔥 마커 클릭 시 마커 위에 신고내역 박스 표시
  const handleMarkerClick = (reportId: string) => {
    console.log('🏠 Home: 마커 클릭됨, 마커 위 신고내역 박스 표시:', reportId);
    
    // 🔥 빈 문자열이면 InfoWindow 닫기
    if (reportId === '') {
      setSelectedReport(null);
      return;
    }
    
    const clickedReport = reportsData.find(report => report.id === reportId);
    if (clickedReport) {
      setSelectedReport(clickedReport);
    }
  };

  // 🔥 마커 위 신고내역 박스 클릭 시 ReportDetail 페이지로 이동
  const handleReportBoxClick = () => {
    if (selectedReport?.id) {
      console.log('🏠 Home: 신고내역 박스 클릭됨, ReportDetail로 이동:', selectedReport.id);
      
      navigate('/ReportDetail', { 
        state: { 
          selectedReportId: selectedReport.id,
          fromHome: true 
        } 
      });
    }
  };

  console.log('🏠 Home 렌더링:', {
    loading,
    error,
    reportsCount: reportsData.length,
    selectedReport: selectedReport?.title
  });

  return (
    <>
      <TopBar />
      <Header />
      <Container>
        <MainWrapper>
          {/* 🔥 ReportDetail과 동일한 Map 컴포넌트 사용 */}
          <MapWrapper>
            <MapContainer>
              <MapSection 
                reports={reportsData} 
                onMarkerClick={handleMarkerClick}
                selectedReport={selectedReport}
                onReportBoxClick={handleReportBoxClick}
              />
            </MapContainer>
          </MapWrapper>
          
          <AlertBanner />
          <NewsSection />
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
`;

// 🔥 지도 섹션 스타일링 수정
const MapWrapper = styled.section`
  width: 100%;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 22px;
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 8px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 15px;
    padding: 0 10px;
  }
`;

// 🔥 지도 컨테이너 (상대 위치 설정)
const MapContainer = styled.div`
  position: relative;
  width: 100%;
`;

export default Home;