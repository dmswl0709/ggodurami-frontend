import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
// 🔥 API 설정
const API_BASE_URL = 'http://localhost:8000';
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 8000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});
// 🔥 API 함수
const fetchOngoingProjects = async () => {
    try {
        console.log('🔄 NewsSection: 세미나/행사 정보 조회 시작...');
        const response = await apiClient.get('/rda/ongoing-projects');
        console.log('NewsSection API 응답 상태:', response.status);
        console.log('NewsSection API 응답 데이터:', response.data);
        if (response.status === 200 && Array.isArray(response.data)) {
            console.log('✅ NewsSection: 세미나/행사 정보 조회 성공:', response.data.length, '건');
            return response.data;
        }
        else {
            console.warn('❌ NewsSection: 예상과 다른 응답 형식:', response.data);
            throw new Error('Invalid response format');
        }
    }
    catch (error) {
        console.error('❌ NewsSection: 세미나/행사 정보 조회 실패:', error);
        throw error;
    }
};
// 🔥 목업 데이터 (백엔드 연결 실패 시 사용)
const getMockNewsData = () => {
    console.log('📋 NewsSection: 목업 데이터 사용');
    return [
        {
            id: 1,
            category: '공지사항',
            title: '스마트 농업 현장 문제점 찾아 지원금 지원 세미나',
            description: '농촌진흥청에서 주관하는 스마트 농업 현장의 다양한 문제 해결을 위한 데이터 수집 및 지원금 안내',
            date: '2025-06-29',
            author: '농촌진흥청'
        },
        {
            id: 2,
            category: '교육',
            title: '디지털 농업 기술 교육 프로그램 안내',
            description: '최신 디지털 농업 기술 및 스마트팜 운영 노하우에 대한 실무 교육 프로그램',
            date: '2025-06-28',
            author: '농촌진흥청'
        },
        {
            id: 3,
            category: '지원사업',
            title: '친환경 농업 지원 사업 설명회',
            description: '친환경 농업 실천을 위한 각종 지원 사업 및 혜택에 대한 상세 안내',
            date: '2025-06-27',
            author: '농촌진흥청'
        },
        {
            id: 4,
            category: '창업지원',
            title: '농업인 창업 지원 프로그램',
            description: '신규 농업인 및 창업을 희망하는 농업인을 위한 맞춤형 지원 프로그램',
            date: '2025-06-26',
            author: '농촌진흥청'
        }
    ];
};
const NewsSection = () => {
    const navigate = useNavigate();
    const newsGridRef = useRef(null);
    // 🔥 상태 관리
    const [newsItems, setNewsItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // 🔥 데이터 로드 함수
    const loadNewsData = async () => {
        try {
            setLoading(true);
            setError(null);
            const projects = await fetchOngoingProjects();
            // Project[] 형식을 NewsItem[] 형식으로 변환
            const transformedData = projects.slice(0, 8).map((project, index) => ({
                id: index + 1,
                category: '공지사항',
                title: project.title,
                description: `농촌진흥청에서 제공하는 ${project.title.includes('교육') ? '교육' :
                    project.title.includes('지원') ? '지원사업' :
                        project.title.includes('세미나') ? '세미나' : '프로그램'} 정보입니다.`,
                date: new Date().toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                }).replace(/\./g, '-').replace(/ /g, ''),
                author: '농촌진흥청',
                link: project.link
            }));
            setNewsItems(transformedData);
            console.log('✅ NewsSection: 뉴스 데이터 로드 완료:', transformedData.length, '건');
        }
        catch (err) {
            console.error('❌ NewsSection: 데이터 로드 실패:', err);
            setError(err instanceof Error ? err.message : '데이터를 불러올 수 없습니다.');
            // 에러 발생 시 목업 데이터 사용
            setNewsItems(getMockNewsData());
        }
        finally {
            setLoading(false);
        }
    };
    // 🔥 컴포넌트 마운트 시 데이터 로드
    useEffect(() => {
        loadNewsData();
    }, []);
    const handleCardClick = (newsItem) => {
        if (newsItem.link && newsItem.link.startsWith('http')) {
            // 외부 링크인 경우 새 탭에서 열기
            window.open(newsItem.link, '_blank', 'noopener,noreferrer');
            console.log('🔗 NewsSection: 외부 링크 열기:', newsItem.link);
        }
        else {
            // 내부 페이지로 이동
            navigate('/SupportDetail', { state: { supportItem: newsItem } });
            console.log('📄 NewsSection: 내부 페이지 이동:', newsItem.title);
        }
    };
    const handleScrollLeft = () => {
        if (newsGridRef.current) {
            newsGridRef.current.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }
    };
    const handleScrollRight = () => {
        if (newsGridRef.current) {
            newsGridRef.current.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    };
    const handleNavigateToList = () => {
        navigate('/SupportList');
    };
    return (_jsxs(NewsContainer, { children: [_jsxs(NewsHeader, { children: [_jsxs(NewsTitle, { children: ["\uC9C0\uC6D0\uAE08 \uBC0F \uC138\uBBF8\uB098 \uC815\uBCF4", loading && _jsx(LoadingText, { children: " (\uB85C\uB529 \uC911...)" }), error && _jsx(ErrorText, { children: " (\uC5F0\uACB0 \uC624\uB958 - \uBAA9\uC5C5 \uB370\uC774\uD130 \uD45C\uC2DC)" })] }), _jsxs(NavButtons, { children: [_jsx(NavButton, { onClick: handleScrollLeft, disabled: loading, children: "\u25C0" }), _jsx(NavButton, { onClick: handleScrollRight, disabled: loading, children: "\u25B6" }), _jsx(NavButton, { onClick: handleNavigateToList, children: "\u2261" })] })] }), loading ? (_jsx(LoadingContainer, { children: "\uD83D\uDD04 \uC138\uBBF8\uB098 \uC815\uBCF4\uB97C \uBD88\uB7EC\uC624\uB294 \uC911..." })) : (_jsx(NewsGrid, { ref: newsGridRef, children: newsItems.map((item) => (_jsxs(NewsCard, { onClick: () => handleCardClick(item), children: [_jsx(CategoryTag, { children: item.category }), _jsx(NewsCardTitle, { title: item.title, children: item.title }), _jsx(NewsDescription, { children: item.description }), _jsxs(NewsFooter, { children: [_jsx(NewsDate, { children: item.date }), _jsx(NewsAuthor, { children: item.author })] })] }, item.id))) }))] }));
};
const NewsContainer = styled.section `
  width: 100%;
  padding: 40px 20px;
  background-color: #FFEFD5;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }

  @media (max-width: 480px) {
    padding: 16px 12px;
  }
`;
const NewsHeader = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`;
const NewsTitle = styled.h2 `
  font-size: 24px;
  color: #333;
  font-weight: bold;
  margin: 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
const LoadingText = styled.span `
  font-size: 14px;
  color: #666;
  font-weight: normal;
  margin-left: 8px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
const ErrorText = styled.span `
  font-size: 12px;
  color: #e74c3c;
  font-weight: normal;
  margin-left: 8px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;
const LoadingContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 16px;
  color: #666;
  background-color: #f9f9f9;
  border-radius: 10px;
  border: 2px dashed #ddd;
`;
const NavButtons = styled.div `
  display: flex;
  gap: 10px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    align-self: flex-end;
  }
`;
const NavButton = styled.button `
  width: 40px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #666;
  transition: all 0.2s;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: #f5f5f5;
    border-color: #999;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    font-size: 12px;
  }
`;
const NewsGrid = styled.div `
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 10px;
  width: 100%;

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }

  @media (max-width: 768px) {
    gap: 15px;
    
    &::-webkit-scrollbar {
      height: 6px;
    }
  }

  @media (max-width: 480px) {
    gap: 12px;
    
    &::-webkit-scrollbar {
      height: 5px;
    }
  }
`;
const NewsCard = styled.div `
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  min-width: 280px;
  max-width: 320px;
  flex-shrink: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 8px;
    min-width: 250px;
    max-width: 280px;
  }

  @media (max-width: 480px) {
    padding: 14px;
    min-width: 220px;
    max-width: 250px;
  }

  @media (max-width: 360px) {
    min-width: 200px;
    max-width: 220px;
  }
`;
const CategoryTag = styled.span `
  background-color: #e8f5e8;
  color: #2d5a27;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  align-self: flex-start;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 3px 6px;
  }
`;
const NewsCardTitle = styled.h3 `
  font-size: 16px;
  color: #333;
  margin: 12px 0 8px 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 15px;
    margin: 10px 0 6px 0;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin: 8px 0 6px 0;
  }
`;
const NewsDescription = styled.p `
  font-size: 13px;
  color: #666;
  margin-bottom: 16px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: keep-all;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    margin-bottom: 10px;
  }
`;
const NewsFooter = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
  margin-top: auto;

  @media (max-width: 768px) {
    padding-top: 10px;
  }

  @media (max-width: 480px) {
    padding-top: 8px;
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }
`;
const NewsDate = styled.span `
  font-size: 12px;
  color: #999;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;
const NewsAuthor = styled.span `
  font-size: 12px;
  color: #666;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;
export default NewsSection;
