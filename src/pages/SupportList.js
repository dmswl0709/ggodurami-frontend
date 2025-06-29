import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// pages/SupportList.tsx
import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Logo } from '../Components/Logo/Logo';
import { useNavigate } from "react-router-dom";
const PageContainer = styled.div `
  min-height: 100vh;
  background-color: #FFEFD5;
  padding: 5px 0;
`;
const Header = styled.div `
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
const LogoContainer = styled.div `
  margin-top: 2px;
  margin-bottom: -50px;
  
  @media (max-width: 768px) {
    margin-top: 1px;
  }
  
  @media (max-width: 480px) {
    margin-top: 1px;
  }
`;
const HeaderTitle = styled.h1 `
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
const ContentWrapper = styled.div `
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
const LoadingContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 18px;
  color: #666;
`;
const ErrorContainer = styled.div `
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
const TableContainer = styled.div `
  width: 100%;
  overflow-x: auto;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #ddd;
`;
const Table = styled.table `
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
const TableHeader = styled.thead `
  background-color: #FBBF77;
`;
const TableHeaderRow = styled.tr ``;
const TableHeaderCell = styled.th `
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
const TableBody = styled.tbody ``;
const TableRow = styled.tr `
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
const TableCell = styled.td `
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
const LinkCell = styled(TableCell) `
  color: #007bff;
  text-decoration: underline;
  
  &:hover {
    color: #0056b3;
  }
`;
const PaginationContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 8px;
  flex-wrap: wrap;
`;
const PaginationButton = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'active',
}) `
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
  
  &:hover:not(:disabled) {
    background-color: ${props => props.active ? '#E6AB65' : '#f5f5f5'};
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
const ArrowButton = styled(PaginationButton) `
  border-radius: 8px;
  width: 40px;
`;
const RefreshButton = styled.button `
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
const StatusInfo = styled.div `
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
const PaginationInfo = styled.div `
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  color: #666;
`;
// 페이지네이션 상수
const ITEMS_PER_PAGE = 10;
// API 설정
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
// API 함수
const fetchOngoingProjects = async () => {
    try {
        console.log('🔄 세미나/행사 정보 조회 시작...');
        const response = await apiClient.get('/rda/ongoing-projects');
        console.log('API 응답 상태:', response.status);
        console.log('API 응답 데이터:', response.data);
        if (response.status === 200 && Array.isArray(response.data)) {
            console.log('✅ 세미나/행사 정보 조회 성공:', response.data.length, '건');
            return response.data;
        }
        else {
            console.warn('❌ 예상과 다른 응답 형식:', response.data);
            throw new Error('Invalid response format');
        }
    }
    catch (error) {
        console.error('❌ 세미나/행사 정보 조회 실패:', error);
        if (axios.isAxiosError(error)) {
            if (error.code === 'ECONNABORTED') {
                throw new Error('요청 시간이 초과되었습니다.');
            }
            else if (error.response) {
                throw new Error(`서버 오류: ${error.response.status}`);
            }
            else if (error.request) {
                throw new Error('서버에 연결할 수 없습니다.');
            }
        }
        throw new Error('알 수 없는 오류가 발생했습니다.');
    }
};
// 목업 데이터 (백엔드 연결 실패 시 사용) - 더 많은 데이터로 확장
const getMockData = () => {
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
        },
        {
            id: 6,
            title: '첨단농업 기술 도입 지원사업 안내',
            link: 'https://www.rda.go.kr/example6',
            date: '25.05.27',
            source: '농촌진흥청'
        },
        {
            id: 7,
            title: '농업 6차 산업화 지원 프로그램',
            link: 'https://www.rda.go.kr/example7',
            date: '25.05.26',
            source: '농촌진흥청'
        },
        {
            id: 8,
            title: '스마트팜 구축 지원사업 설명회',
            link: 'https://www.rda.go.kr/example8',
            date: '25.05.25',
            source: '농촌진흥청'
        },
        {
            id: 9,
            title: '농업인 교육프로그램 운영 안내',
            link: 'https://www.rda.go.kr/example9',
            date: '25.05.24',
            source: '농촌진흥청'
        },
        {
            id: 10,
            title: '농촌융복합산업 활성화 세미나',
            link: 'https://www.rda.go.kr/example10',
            date: '25.05.23',
            source: '농촌진흥청'
        },
        {
            id: 11,
            title: '농업 신기술 보급사업 안내',
            link: 'https://www.rda.go.kr/example11',
            date: '25.05.22',
            source: '농촌진흥청'
        },
        {
            id: 12,
            title: '청년농업인 정착 지원 프로그램',
            link: 'https://www.rda.go.kr/example12',
            date: '25.05.21',
            source: '농촌진흥청'
        },
        {
            id: 13,
            title: '농업 빅데이터 활용 교육과정',
            link: 'https://www.rda.go.kr/example13',
            date: '25.05.20',
            source: '농촌진흥청'
        },
        {
            id: 14,
            title: '농업분야 인공지능 기술 세미나',
            link: 'https://www.rda.go.kr/example14',
            date: '25.05.19',
            source: '농촌진흥청'
        },
        {
            id: 15,
            title: '농산물 가공기술 교육 프로그램',
            link: 'https://www.rda.go.kr/example15',
            date: '25.05.18',
            source: '농촌진흥청'
        }
    ];
};
export const SupportList = () => {
    const navigate = useNavigate();
    // 상태 관리
    const [allSupportData, setAllSupportData] = useState([]); // 전체 데이터
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lastUpdated, setLastUpdated] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
    // 페이지네이션 계산
    const totalPages = Math.ceil(allSupportData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    // 현재 페이지에 표시할 데이터
    const currentItems = useMemo(() => {
        return allSupportData.slice(startIndex, endIndex);
    }, [allSupportData, startIndex, endIndex]);
    // 페이지 버튼 배열 생성
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 7;
        if (totalPages <= maxVisiblePages) {
            // 전체 페이지가 7개 이하면 모두 표시
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        }
        else {
            // 현재 페이지를 중심으로 표시할 페이지 계산
            let startPage = Math.max(1, currentPage - 3);
            let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
            // 끝 페이지가 총 페이지보다 작으면 시작 페이지 조정
            if (endPage - startPage < maxVisiblePages - 1) {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }
            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }
        }
        return pageNumbers;
    };
    // 데이터 로드 함수
    const loadSupportData = async () => {
        try {
            setLoading(true);
            setError(null);
            setCurrentPage(1); // 데이터 새로고침 시 첫 페이지로 이동
            const projects = await fetchOngoingProjects();
            // Project[] 형식을 SupportData[] 형식으로 변환
            const transformedData = projects.map((project, index) => ({
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
            setAllSupportData(transformedData);
            setLastUpdated(new Date());
            console.log('✅ 지원 데이터 로드 완료:', transformedData.length, '건');
        }
        catch (err) {
            console.error('❌ 데이터 로드 실패:', err);
            setError(err instanceof Error ? err.message : '데이터를 불러올 수 없습니다.');
            // 에러 발생 시 목업 데이터 사용
            setAllSupportData(getMockData());
            setLastUpdated(new Date());
        }
        finally {
            setLoading(false);
        }
    };
    // 컴포넌트 마운트 시 데이터 로드
    useEffect(() => {
        loadSupportData();
    }, []);
    // 행 클릭 핸들러
    const handleRowClick = (item) => {
        if (item.link && item.link.startsWith('http')) {
            // 외부 링크인 경우 새 탭에서 열기
            window.open(item.link, '_blank', 'noopener,noreferrer');
            console.log('🔗 외부 링크 열기:', item.link);
        }
        else {
            // 내부 페이지로 이동
            navigate('/SupportDetail', { state: { supportItem: item } });
            console.log('📄 내부 페이지 이동:', item.title);
        }
    };
    // 페이지 변경 핸들러
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            setCurrentPage(page);
            // 페이지 변경 시 맨 위로 스크롤
            window.scrollTo({ top: 0, behavior: 'smooth' });
            console.log('📄 페이지 변경:', page);
        }
    };
    // 이전 페이지로 이동
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };
    // 다음 페이지로 이동
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };
    // 새로고침 핸들러
    const handleRefresh = () => {
        console.log('🔄 데이터 새로고침');
        loadSupportData();
    };
    return (_jsxs(PageContainer, { children: [_jsxs(Header, { children: [_jsx(LogoContainer, { children: _jsx(Logo, {}) }), _jsx(HeaderTitle, { children: "\uC9C0\uC6D0\uAE08 \uBC0F \uC138\uBBF8\uB098" })] }), _jsxs(ContentWrapper, { children: [_jsxs(StatusInfo, { children: [_jsxs("div", { children: ["\uCD1D ", allSupportData.length, "\uAC74\uC758 \uC138\uBBF8\uB098/\uD589\uC0AC \uC815\uBCF4", lastUpdated && (_jsxs("span", { style: { marginLeft: '10px', fontSize: '12px' }, children: ["(\uB9C8\uC9C0\uB9C9 \uC5C5\uB370\uC774\uD2B8: ", lastUpdated.toLocaleTimeString('ko-KR'), ")"] }))] }), _jsx(RefreshButton, { onClick: handleRefresh, disabled: loading, children: loading ? '새로고침 중...' : '🔄 새로고침' })] }), error && (_jsxs(ErrorContainer, { children: [_jsxs("div", { children: ["\u26A0\uFE0F ", error] }), _jsx("div", { style: { fontSize: '14px', marginTop: '5px' }, children: "\uBAA9\uC5C5 \uB370\uC774\uD130\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4." }), _jsx("button", { onClick: handleRefresh, children: "\uB2E4\uC2DC \uC2DC\uB3C4" })] })), loading ? (_jsx(LoadingContainer, { children: "\uD83D\uDD04 \uC138\uBBF8\uB098/\uD589\uC0AC \uC815\uBCF4\uB97C \uBD88\uB7EC\uC624\uB294 \uC911..." })) : (_jsxs(_Fragment, { children: [_jsx(TableContainer, { children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableHeaderRow, { children: [_jsx(TableHeaderCell, { children: "\uBC88\uD638" }), _jsx(TableHeaderCell, { children: "\uC81C\uBAA9" }), _jsx(TableHeaderCell, { children: "\uCD9C\uCC98" }), _jsx(TableHeaderCell, { children: "\uB4F1\uB85D\uC77C" })] }) }), _jsx(TableBody, { children: currentItems.length > 0 ? (currentItems.map((item, index) => (_jsxs(TableRow, { onClick: () => handleRowClick(item), children: [_jsx(TableCell, { children: startIndex + index + 1 }), _jsx(TableCell, { title: item.title, children: item.title }), _jsx(TableCell, { children: item.source }), _jsx(TableCell, { children: item.date })] }, item.id)))) : (_jsx(TableRow, { children: _jsx(TableCell, { colSpan: 4, style: { textAlign: 'center', padding: '40px' }, children: "\uD45C\uC2DC\uD560 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." }) })) })] }) }), totalPages > 1 && (_jsxs(_Fragment, { children: [_jsxs(PaginationContainer, { children: [_jsx(ArrowButton, { onClick: handlePreviousPage, disabled: currentPage === 1, children: "\u2190" }), getPageNumbers().map((pageNum) => (_jsx(PaginationButton, { active: currentPage === pageNum, onClick: () => handlePageChange(pageNum), children: pageNum }, pageNum))), _jsx(ArrowButton, { onClick: handleNextPage, disabled: currentPage === totalPages, children: "\u2192" })] }), _jsx(PaginationInfo, { children: allSupportData.length > 0 && (_jsxs(_Fragment, { children: [startIndex + 1, "-", Math.min(endIndex, allSupportData.length), " / \uCD1D ", allSupportData.length, "\uAC1C (\uD398\uC774\uC9C0 ", currentPage, "/", totalPages, ")"] })) })] }))] }))] })] }));
};
export default SupportList;
