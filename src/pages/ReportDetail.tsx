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

// 🔥 AI 진단 결과 관련 스타일
const AISection = styled.div`
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

const AIResultContainer = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: 2px solid #007bff;
  border-radius: 12px;
  padding: 20px;
  margin-top: 10px;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 14px;
  }
`;

const AIBadge = styled.div`
  position: absolute;
  top: -10px;
  left: 20px;
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
`;

const AIResultItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

const AILabel = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #495057;
  min-width: 120px;
  margin-right: 12px;
  
  @media (max-width: 1024px) {
    font-size: 15px;
    min-width: 110px;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    min-width: 100px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 4px;
    min-width: auto;
    margin-right: 0;
  }
`;

const AIValue = styled.span`
  font-size: 16px;
  color: #212529;
  font-weight: 500;
  
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ConfidenceBar = styled.div<{ confidence: number }>`
  width: 100%;
  height: 8px;
  background-color: #e9ecef;
  border-radius: 4px;
  margin-top: 6px;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.confidence}%;
    background: linear-gradient(90deg, 
      ${props => props.confidence >= 80 ? '#28a745' : 
        props.confidence >= 60 ? '#ffc107' : '#dc3545'} 0%, 
      ${props => props.confidence >= 80 ? '#20c997' : 
        props.confidence >= 60 ? '#fd7e14' : '#e74c3c'} 100%);
    border-radius: 4px;
    transition: width 0.3s ease;
  }
`;

const NoAIResult = styled.div`
  text-align: center;
  color: #6c757d;
  font-style: italic;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px dashed #dee2e6;
`;

// 🔥 타입 정의
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

interface AIDetectionResult {
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
}

interface ApiResponse {
  reports: ReportData[];
}

// 🔥 유틸리티 함수들
const getFileUrl = (filePath: string): string => {
  if (!filePath) return '';
  
  if (filePath.startsWith('http://') || filePath.startsWith('https://')) {
    return filePath;
  }
  
  if (filePath.startsWith('/static')) {
    return `http://baekend.onrender.com${filePath}`;
  }
  
  return `http://baekend.onrender.com/static/uploads/reports/${filePath}`;
};

// 🔥 수정된 AI 진단 결과 표시 컴포넌트
const AIResultDisplay: React.FC<{ 
  aiResult: AIDetectionResult | null; 
  loading: boolean; 
  error?: string | null;
}> = ({ aiResult, loading, error }) => {
  // 로딩 중일 때
  if (loading) {
    return (
      <AIResultContainer>
        <AIBadge>AI 분석</AIBadge>
        <div style={{ textAlign: 'center', color: '#666', padding: '20px 0' }}>
          🤖 AI가 이미지를 분석하는 중...
        </div>
      </AIResultContainer>
    );
  }

  // 에러가 있을 때
  if (error) {
    return (
      <NoAIResult>
        <div style={{ marginBottom: '10px' }}>⚠️ AI 진단 중 오류 발생</div>
        <div style={{ fontSize: '12px', color: '#999' }}>{error}</div>
      </NoAIResult>
    );
  }

  // AI 결과가 없거나 null일 때
  if (!aiResult) {
    return (
      <NoAIResult>
        🤖 AI 진단 결과가 없습니다
      </NoAIResult>
    );
  }

  // primary_detection이 없거나 null일 때
  if (!aiResult.primary_detection) {
    return (
      <NoAIResult>
        🤖 AI가 병해충을 탐지하지 못했습니다
      </NoAIResult>
    );
  }

  // 정상적인 AI 결과 표시
  try {
    const confidencePercentage = Math.round(aiResult.primary_detection.confidence * 100);

    return (
      <AIResultContainer>
        <AIBadge>AI 분석</AIBadge>
        
        <AIResultItem>
          <AILabel>탐지 카테고리:</AILabel>
          <AIValue>{aiResult.category || '알 수 없음'}</AIValue>
        </AIResultItem>
        
        <AIResultItem>
          <AILabel>주요 진단:</AILabel>
          <AIValue>{aiResult.primary_detection.class_name || '알 수 없음'}</AIValue>
        </AIResultItem>
        
        <AIResultItem>
          <AILabel>신뢰도:</AILabel>
          <div style={{ flex: 1 }}>
            <AIValue>{confidencePercentage}%</AIValue>
            <ConfidenceBar confidence={confidencePercentage} />
          </div>
        </AIResultItem>
        
        <AIResultItem>
          <AILabel>총 탐지 수:</AILabel>
          <AIValue>{aiResult.total_detections || 0}개</AIValue>
        </AIResultItem>
        
        {aiResult.detections && aiResult.detections.length > 1 && (
          <AIResultItem style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <AILabel style={{ marginBottom: '8px' }}>추가 탐지 결과:</AILabel>
            <div style={{ width: '100%' }}>
              {aiResult.detections.slice(1).map((detection, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '4px 0',
                  fontSize: '14px',
                  color: '#6c757d'
                }}>
                  <span>{detection.class_name || '알 수 없음'}</span>
                  <span>{Math.round((detection.confidence || 0) * 100)}%</span>
                </div>
              ))}
            </div>
          </AIResultItem>
        )}
      </AIResultContainer>
    );
  } catch (renderError) {
    console.error('AI 결과 렌더링 오류:', renderError);
    return (
      <NoAIResult>
        <div style={{ marginBottom: '10px' }}>⚠️ AI 결과 표시 중 오류 발생</div>
        <div style={{ fontSize: '12px', color: '#999' }}>결과 데이터 형식이 올바르지 않습니다</div>
      </NoAIResult>
    );
  }
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

// 🔥 API 함수들
const fetchRecentReports = async (): Promise<ApiResponse> => {
  try {
    console.log('🔄 신고 목록 조회 시작...');
    
    const response = await fetch('http://baekend.onrender.com/reports/recent', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'cors',
    });
    
    console.log('API 응답 상태:', response.status);
    
    if (!response.ok) {
      console.warn(`API 호출 실패: ${response.status}. 목업 데이터 사용.`);
      return getMockData();
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.warn('JSON 응답이 아님. 목업 데이터 사용.');
      return getMockData();
    }

    const data = await response.json();
    console.log('✅ 신고 목록 조회 성공:', data);
    return data;
  } catch (error) {
    console.error('❌ API 호출 실패:', error);
    console.log('🔄 목업 데이터로 대체');
    return getMockData();
  }
};

const fetchReportDetail = async (reportId: string): Promise<ReportDetailData | null> => {
  try {
    console.log(`🔍 신고 상세 정보 조회: ${reportId}`);
    
    // 🔥 여러 가능한 엔드포인트를 시도
    const possibleEndpoints = [
      `http://baekend.onrender.com/damage-report/${reportId}`,
      `http://baekend.onrender.com/reports/${reportId}`,
      `http://baekend.onrender.com/report/${reportId}`,
      `http://baekend.onrender.com/damage-reports/${reportId}`
    ];
    
    for (const endpoint of possibleEndpoints) {
      try {
        console.log(`🔄 시도 중인 엔드포인트: ${endpoint}`);
        
        const response = await fetch(endpoint, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          mode: 'cors',
        });
        
        console.log(`📡 ${endpoint} 응답 상태: ${response.status}`);
        
        if (response.ok) {
          const data = await response.json();
          console.log('✅ 신고 상세 정보 조회 성공:', data);
          return data;
        } else if (response.status === 404) {
          console.log(`❌ ${endpoint}에서 404 - 다음 엔드포인트 시도`);
          continue;
        } else {
          console.warn(`⚠️ ${endpoint}에서 ${response.status} 오류`);
          continue;
        }
      } catch (endpointError) {
        console.error(`❌ ${endpoint} 호출 실패:`, endpointError);
        continue;
      }
    }
    
    console.warn('❌ 모든 엔드포인트에서 신고 상세 조회 실패');
    return null;
  } catch (error) {
    console.error('❌ 신고 상세 조회 실패:', error);
    return null;
  }
};

// 🔥 수정된 AI 진단 API 함수
const fetchAIDiagnosis = async (reportId: string): Promise<{ 
  result: AIDetectionResult | null; 
  error?: string | null 
}> => {
  try {
    console.log(`🤖 AI 진단 요청: ${reportId}`);
    
    const response = await fetch(`http://baekend.onrender.com/damage-report/detect-damage/${reportId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'cors',
    });
    
    console.log('AI 진단 응답 상태:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.warn(`❌ AI diagnosis API failed with status: ${response.status}, body: ${errorText}`);
      
      let errorMessage = 'AI 진단 서비스에 연결할 수 없습니다';
      if (response.status === 404) {
        errorMessage = '해당 신고를 찾을 수 없습니다';
      } else if (response.status === 500) {
        errorMessage = 'AI 분석 중 서버 오류가 발생했습니다';
      } else if (response.status >= 400 && response.status < 500) {
        errorMessage = '잘못된 요청입니다';
      }
      
      return { result: null, error: errorMessage };
    }

    const data = await response.json();
    console.log('AI 진단 응답 데이터:', data);
    
    // 에러 응답 처리
    if (data.error) {
      console.warn(`❌ AI 진단 에러: ${data.error}`);
      return { result: null, error: data.error };
    }
    
    // 빈 결과 처리
    if (!data || typeof data !== 'object') {
      console.warn('❌ AI 진단 결과 형식 오류');
      return { result: null, error: '응답 데이터 형식이 올바르지 않습니다' };
    }
    
    // primary_detection이 없는 경우 처리
    if (!data.primary_detection) {
      console.log('ℹ️ AI 진단 완료 - 탐지 결과 없음');
      return { result: { ...data, primary_detection: null }, error: null };
    }
    
    console.log('✅ AI 진단 성공:', data);
    return { result: data, error: null };
    
  } catch (error) {
    console.error('❌ AI 진단 요청 실패:', error);
    
    let errorMessage = 'AI 진단 중 오류가 발생했습니다';
    if (error instanceof TypeError && error.message.includes('fetch')) {
      errorMessage = '네트워크 연결을 확인해주세요';
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    return { result: null, error: errorMessage };
  }
};

const getMockData = (): ApiResponse => {
  console.log('📋 목업 데이터 사용');
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

// 🔥 메인 컴포넌트
export const ReportDetail: React.FC = () => {
  const [reportsData, setReportsData] = useState<ReportData[]>([]);
  const [selectedReportDetail, setSelectedReportDetail] = useState<ReportDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [aiDiagnosis, setAiDiagnosis] = useState<AIDetectionResult | null>(null);
  const [loadingAI, setLoadingAI] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null); // 🔥 AI 에러 상태 추가

  // 🔥 초기 데이터 로드
  useEffect(() => {
    const loadReports = async () => {
      try {
        setLoading(true);
        const data = await fetchRecentReports();
        setReportsData(data.reports || []);
        setError(null);
        
        console.log('신고 목록 로드 완료:', data.reports);
      } catch (err) {
        setError('데이터를 불러올 수 없습니다.');
        console.error('신고 목록 로드 중 치명적 오류:', err);
      } finally {
        setLoading(false);
      }
    };

    loadReports();
  }, []);

  // 🔥 수정된 마커 클릭 핸들러
  const handleMarkerClick = async (reportId: string) => {
    console.log('🗺️ 마커 클릭:', reportId);
    
    if (!reportId) {
      console.warn('❌ Report ID가 없습니다');
      return;
    }

    // 상태 초기화
    setLoadingDetail(true);
    setLoadingAI(false);
    setAiDiagnosis(null);
    setAiError(null); // AI 에러 상태도 초기화
    setSelectedReportDetail(null);
    
    try {
      if (reportId.startsWith('temp_') || reportId.startsWith('mock_')) {
        console.log('🎭 목업 데이터 사용:', reportId);
        
        const mockDetail: ReportDetailData = {
          user_id: "mock_user_id",
          username: "테스트 사용자",
          main_category: "병해충",
          sub_category: "해충",
          title: reportId.includes('다저벌악') ? "다저벌악" : 
                 reportId.includes('태풍') ? "제주도 태풍" :
                 reportId.includes('지진') ? "전주 지진 발생" : "테스트 신고",
          content: `이것은 ${reportId} 신고에 대한 상세 내용입니다.`,
          local: "테스트 지역",
          latitude: "37.5665",
          longitude: "126.978",
          files: [],
          created_at: new Date().toISOString(),
          id: reportId
        };
        
        setSelectedReportDetail(mockDetail);
        
        // 병해충 신고인 경우만 AI 진단 (목업)
        if (mockDetail.main_category === "병해충") {
          setLoadingAI(true);
          setTimeout(() => {
            const mockAIResult: AIDetectionResult = {
              category: "해충",
              total_detections: 1,
              detections: [{
                class_id: 2,
                class_name: "담배가루이",
                confidence: 0.9696160554885864,
                bbox: {
                  x1: 90.16170501708984,
                  y1: 64.73558044433594,
                  x2: 161.48237609863282,
                  y2: 155.47138977050781
                }
              }],
              primary_detection: {
                class_id: 2,
                class_name: "담배가루이",
                confidence: 0.9696160554885864,
                bbox: {
                  x1: 90.16170501708984,
                  y1: 64.73558044433594,
                  x2: 161.48237609863282,
                  y2: 155.47138977050781
                }
              }
            };
            setAiDiagnosis(mockAIResult);
            setLoadingAI(false);
          }, 2000);
        }
      } else {
        // 실제 API 호출
        console.log('🌐 실제 API 호출 시작');
        const detail = await fetchReportDetail(reportId);
        
        if (detail) {
          setSelectedReportDetail(detail);
          console.log('✅ 신고 상세 정보 로드 완료:', detail);
          
          // 병해충 신고인 경우만 AI 진단 실행
          if (detail.main_category === "병해충") {
            console.log('🤖 병해충 신고 감지 - AI 진단 시작');
            setLoadingAI(true);
            
            try {
              const { result: aiResult, error: aiErrorMessage } = await fetchAIDiagnosis(reportId);
              setAiDiagnosis(aiResult);
              setAiError(aiErrorMessage || null);

              
              if (aiResult) {
                console.log('🎉 AI 진단 성공:', aiResult);
              } else if (aiErrorMessage) {
                console.log('⚠️ AI 진단 에러:', aiErrorMessage);
              } else {
                console.log('ℹ️ AI 진단 완료 - 탐지 결과 없음');
              }
            } catch (aiError) {
              console.error('AI 진단 중 예외 발생:', aiError);
              setAiDiagnosis(null);
              setAiError('AI 진단 중 예상치 못한 오류가 발생했습니다');
            } finally {
              setLoadingAI(false);
            }
          }
        } else {
          console.error('❌ 신고 상세 정보 로드 실패 - 목업 데이터 사용');
          
          // 🔥 API 실패 시 목업 데이터로 대체
          const fallbackDetail: ReportDetailData = {
            user_id: "fallback_user",
            username: "신고자",
            main_category: "병해충",
            sub_category: "해충",
            title: `신고 ID: ${reportId}`,
            content: `API 연결에 실패하여 임시 데이터를 표시합니다. 신고 ID: ${reportId}`,
            local: "위치 정보 불명",
            latitude: "37.5665",
            longitude: "126.978",
            files: [],
            created_at: new Date().toISOString(),
            id: reportId
          };
          setSelectedReportDetail(fallbackDetail);
          
          // 병해충 신고인 경우 목업 AI 결과도 제공
          if (fallbackDetail.main_category === "병해충") {
            setLoadingAI(true);
            setTimeout(() => {
              const fallbackAIResult: AIDetectionResult = {
                category: "해충",
                total_detections: 1,
                detections: [{
                  class_id: 0,
                  class_name: "알 수 없는 병해충",
                  confidence: 0.5,
                  bbox: { x1: 0, y1: 0, x2: 100, y2: 100 }
                }],
                primary_detection: {
                  class_id: 0,
                  class_name: "알 수 없는 병해충",
                  confidence: 0.5,
                  bbox: { x1: 0, y1: 0, x2: 100, y2: 100 }
                }
              };
              setAiDiagnosis(fallbackAIResult);
              setLoadingAI(false);
            }, 1000);
          }
        }
      }
    } catch (error) {
      console.error('❌ 마커 클릭 처리 중 전체 오류:', error);
    } finally {
      setLoadingDetail(false);
    }
  };

  // 🔥 파일 정보 디버깅
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
                
                {/* 🔥 AI 진단 결과 섹션 - 병해충 신고인 경우만 표시 */}
                {selectedReportDetail.main_category === "병해충" && (
                  <AISection>
                    <InfoItem>
                      <InfoLabel>🤖 AI 진단 결과:</InfoLabel>
                    </InfoItem>
                    <AIResultDisplay 
                      aiResult={aiDiagnosis} 
                      loading={loadingAI} 
                      error={aiError}
                    />
                  </AISection>
                )}
                
                {/* 🔥 첨부 파일 표시 */}
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
                <br />
                🤖 병해충 신고의 경우 AI 진단 결과도 함께 확인할 수 있습니다.
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
              <br />
              <span style={{ fontSize: '14px', color: '#666', marginTop: '8px', display: 'inline-block' }}>
                🤖 병해충 관련 신고: {reportsData.filter(report => report.main_category === "병해충").length}건 (AI 진단 가능)
              </span>
            </DetailContent>
          </DetailSection>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default ReportDetail;