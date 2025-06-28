// pages/SupportList.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Logo } from '../Components/Logo/Logo';
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
    padding: 30px 30px ;
    margin: 0 40px;
  }
  
  @media (max-width: 480px) {
    padding: 25px 15px;
    margin: 0 5px;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 18px;
  color: #666;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 16px;
  color: #e74c3c;
  text-align: center;
  
  button {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #FBBF77;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    
    &:hover {
      background-color: #E6AB65;
    }
  }
`;

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #ddd;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const TableHeader = styled.thead`
  background-color: #FBBF77;
`;

const TableHeaderRow = styled.tr``;

const TableHeaderCell = styled.th`
  padding: 15px 10px;
  text-align: center;
  font-weight: 600;
  color: #333;
  border-right: 1px solid #bbb;
  
  &:last-child {
    border-right: none;
  }
  
  @media (max-width: 768px) {
    padding: 12px 8px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 6px;
  }
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  background-color: white;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f9f9f9;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.td`
  padding: 15px 10px;
  text-align: center;
  color: #555;
  border-right: 1px solid #eee;
  
  &:last-child {
    border-right: none;
  }
  
  &:nth-child(2) {
    text-align: left;
    padding-left: 15px;
    max-width: 400px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  @media (max-width: 768px) {
    padding: 12px 8px;
    
    &:nth-child(2) {
      padding-left: 12px;
      max-width: 250px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 10px 6px;
    
    &:nth-child(2) {
      padding-left: 10px;
      max-width: 150px;
    }
  }
`;

const LinkCell = styled(TableCell)`
  color: #007bff;
  text-decoration: underline;
  
  &:hover {
    color: #0056b3;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 8px;
`;

const PaginationButton = styled.button<{ active?: boolean }>`
  width: 35px;
  height: 35px;
  border: 1px solid #ddd;
  background-color: ${props => props.active ? '#FBBF77' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#E6AB65' : '#f5f5f5'};
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const ArrowButton = styled(PaginationButton)`
  border-radius: 8px;
`;

const RefreshButton = styled.button`
  margin-bottom: 20px;
  padding: 8px 16px;
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #E6AB65;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const StatusInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  font-size: 14px;
  color: #666;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
    text-align: center;
  }
`;

// 🔥 타입 정의
interface Project {
  title: string;
  link: string;
}

interface SupportData {
  id: number;
  title: string;
  link: string;
  date: string;
  source: string;
}

// 🔥 API 설정
const API_BASE_URL = 'http://localhost:8000';

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10초 타임아웃
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// 🔥 API 함수
const fetchOngoingProjects = async (): Promise<Project[]> => {
  try {
    console.log('🔄 세미나/행사 정보 조회 시작...');
    
    const response = await apiClient.get('/rda/ongoing-projects');
    
    console.log('API 응답 상태:', response.status);
    console.log('API 응답 데이터:', response.data);
    
    if (response.status === 200 && Array.isArray(response.data)) {
      console.log('✅ 세미나/행사 정보 조회 성공:', response.data.length, '건');
      return response.data;
    } else {
      console.warn('❌ 예상과 다른 응답 형식:', response.data);
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error('❌ 세미나/행사 정보 조회 실패:', error);
    
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        throw new Error('요청 시간이 초과되었습니다.');
      } else if (error.response) {
        throw new Error(`서버 오류: ${error.response.status}`);
      } else if (error.request) {
        throw new Error('서버에 연결할 수 없습니다.');
      }
    }
    
    throw new Error('알 수 없는 오류가 발생했습니다.');
  }
};

// 🔥 목업 데이터 (백엔드 연결 실패 시 사용)
const getMockData = (): SupportData[] => {
  console.log('📋 목업 데이터 사용');
  return [
    {
      id: 1,
      title: '스마트 농업 현장 문제점 찾아 지원금 지원 세미나',
      link: 'https://www.rda.go.kr/example1',
      date: '25.06.02',
      source: '농촌진흥청'
    },
    {
      id: 2,
      title: '디지털 농업 기술 교육 프로그램 안내',
      link: 'https://www.rda.go.kr/example2',
      date: '25.06.01',
      source: '농촌진흥청'
    },
    {
      id: 3,
      title: '친환경 농업 지원 사업 설명회',
      link: 'https://www.rda.go.kr/example3',
      date: '25.05.30',
      source: '농촌진흥청'
    },
    {
      id: 4,
      title: '농업인 창업 지원 프로그램',
      link: 'https://www.rda.go.kr/example4',
      date: '25.05.29',
      source: '농촌진흥청'
    },
    {
      id: 5,
      title: '농작물 병해충 방제 기술 세미나',
      link: 'https://www.rda.go.kr/example5',
      date: '25.05.28',
      source: '농촌진흥청'
    }
  ];
};

export const SupportList: React.FC = () => {
  const navigate = useNavigate();
  
  // 🔥 상태 관리
  const [supportData, setSupportData] = useState<SupportData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  
  // 🔥 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;
  
  // 🔥 데이터 로드 함수
  const loadSupportData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const projects = await fetchOngoingProjects();
      
      // Project[] 형식을 SupportData[] 형식으로 변환
      const transformedData: SupportData[] = projects.map((project, index) => ({
        id: index + 1,
        title: project.title,
        link: project.link,
        date: new Date().toLocaleDateString('ko-KR', {
          year: '2-digit',
          month: '2-digit',
          day: '2-digit'
        }).replace(/\./g, '.').replace(/ /g, ''),
        source: '농촌진흥청'
      }));
      
      setSupportData(transformedData);
      setLastUpdated(new Date());
      
      console.log('✅ 지원 데이터 로드 완료:', transformedData.length, '건');
    } catch (err) {
      console.error('❌ 데이터 로드 실패:', err);
      setError(err instanceof Error ? err.message : '데이터를 불러올 수 없습니다.');
      
      // 에러 발생 시 목업 데이터 사용
      setSupportData(getMockData());
      setLastUpdated(new Date());
    } finally {
      setLoading(false);
    }
  };
  
  // 🔥 컴포넌트 마운트 시 데이터 로드
  useEffect(() => {
    loadSupportData();
  }, []);
  
  // 🔥 페이지네이션 계산
  const totalPages = Math.ceil(supportData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = supportData.slice(startIndex, endIndex);
  
  // 🔥 행 클릭 핸들러
  const handleRowClick = (item: SupportData) => {
    if (item.link && item.link.startsWith('http')) {
      // 외부 링크인 경우 새 탭에서 열기
      window.open(item.link, '_blank', 'noopener,noreferrer');
      console.log('🔗 외부 링크 열기:', item.link);
    } else {
      // 내부 페이지로 이동
      navigate('/SupportDetail', { state: { supportItem: item } });
      console.log('📄 내부 페이지 이동:', item.title);
    }
  };
  
  // 🔥 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log('📄 페이지 변경:', page);
  };
  
  // 🔥 새로고침 핸들러
  const handleRefresh = () => {
    console.log('🔄 데이터 새로고침');
    loadSupportData();
  };

  return (
    <PageContainer>
      <Header>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <HeaderTitle>지원금 및 세미나</HeaderTitle>
      </Header>
      
      <ContentWrapper>
        {/* 🔥 상태 정보 및 새로고침 버튼 */}
        <StatusInfo>
          <div>
            총 {supportData.length}건의 세미나/행사 정보 
            {lastUpdated && (
              <span style={{ marginLeft: '10px', fontSize: '12px' }}>
                (마지막 업데이트: {lastUpdated.toLocaleTimeString('ko-KR')})
              </span>
            )}
          </div>
          <RefreshButton onClick={handleRefresh} disabled={loading}>
            {loading ? '새로고침 중...' : '🔄 새로고침'}
          </RefreshButton>
        </StatusInfo>
        
        {/* 🔥 에러 상태 */}
        {error && (
          <ErrorContainer>
            <div>⚠️ {error}</div>
            <div style={{ fontSize: '14px', marginTop: '5px' }}>
              목업 데이터로 표시됩니다.
            </div>
            <button onClick={handleRefresh}>다시 시도</button>
          </ErrorContainer>
        )}
        
        {/* 🔥 로딩 상태 */}
        {loading ? (
          <LoadingContainer>
            🔄 세미나/행사 정보를 불러오는 중...
          </LoadingContainer>
        ) : (
          <>
            {/* 🔥 테이블 */}
            <TableContainer>
              <Table>
                <TableHeader>
                  <TableHeaderRow>
                    <TableHeaderCell>번호</TableHeaderCell>
                    <TableHeaderCell>제목</TableHeaderCell>
                    <TableHeaderCell>출처</TableHeaderCell>
                    <TableHeaderCell>등록일</TableHeaderCell>
                  </TableHeaderRow>
                </TableHeader>
                <TableBody>
                  {currentItems.length > 0 ? (
                    currentItems.map((item) => (
                      <TableRow key={item.id} onClick={() => handleRowClick(item)}>
                        <TableCell>{startIndex + currentItems.indexOf(item) + 1}</TableCell>
                        <TableCell title={item.title}>{item.title}</TableCell>
                        <TableCell>{item.source}</TableCell>
                        <TableCell>{item.date}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} style={{ textAlign: 'center', padding: '40px' }}>
                        표시할 데이터가 없습니다.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            
            {/* 🔥 페이지네이션 */}
            {totalPages > 1 && (
              <PaginationContainer>
                <ArrowButton 
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  ←
                </ArrowButton>
                
                {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 7) {
                    pageNum = i + 1;
                  } else if (currentPage <= 4) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 3) {
                    pageNum = totalPages - 6 + i;
                  } else {
                    pageNum = currentPage - 3 + i;
                  }
                  
                  return (
                    <PaginationButton
                      key={pageNum}
                      active={currentPage === pageNum}
                      onClick={() => handlePageChange(pageNum)}
                    >
                      {pageNum}
                    </PaginationButton>
                  );
                })}
                
                <ArrowButton 
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  →
                </ArrowButton>
              </PaginationContainer>
            )}
          </>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default SupportList;