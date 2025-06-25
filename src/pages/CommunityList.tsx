// pages/CommunityList.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Logo } from '../Components/Logo/Logo';
import { useNavigate } from "react-router-dom";

// 타입 정의
interface PostData {
  no: number;
  id: string;
  title: string;
  username: string;
  created_at: string;
  likes: number;
}

interface PostsResponse {
  posts: PostData[];
}

// API 설정
const BASE_URL = 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 - JWT 토큰 자동 추가 (지역별 조회 시 필요)
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

// API 함수들
const getAllPosts = async (): Promise<PostsResponse> => {
  const response = await apiClient.get<PostsResponse>('/posts');
  return response.data;
};

const getLocalPosts = async (): Promise<PostsResponse> => {
  const response = await apiClient.get<PostsResponse>('/post/local');
  return response.data;
};

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
  padding: 30px 60px 60px 60px;
  max-width: 1000px;
  margin: 0 auto 40px auto;
  
  @media (max-width: 1024px) {
    max-width: 90%;
    padding: 20px 30px 40px 30px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    padding: 15px 30px 30px 30px;
    margin: 0 40px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 15px 25px 15px;
    margin: 0 5px;
  }
`;

const TopControls = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const TabButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== '$active',
})<{ $active?: boolean }>`
  padding: 12px 24px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  
  &:first-child {
    background-color: ${props => props.$active ? '#8B4513' : '#F5DEB3'};
    color: ${props => props.$active ? 'white' : '#8B4513'};
    border-radius: 12px 0 0 12px;
  }
  
  &:last-child {
    background-color: ${props => props.$active ? '#8B4513' : '#F5DEB3'};
    color: ${props => props.$active ? 'white' : '#8B4513'};
    border-radius: 0 12px 12px 0;
    
    &:before {
      content: '📍';
      margin-right: 8px;
    }
  }
  
  &:hover {
    opacity: 0.8;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

const WriteButton = styled.button`
  padding: 10px 20px;
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #E6AB65;
  }
  
  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 12px;
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
  }
  
  @media (max-width: 768px) {
    padding: 12px 8px;
    
    &:nth-child(2) {
      padding-left: 12px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 10px 6px;
    
    &:nth-child(2) {
      padding-left: 10px;
    }
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #666;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #dc3545;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  margin: 20px 0;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #666;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 8px;
`;

const PaginationButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>`
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

export const CommunityList: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('전체보기');
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 게시글 데이터 로드
  const loadPosts = async (tabType: string) => {
    setLoading(true);
    setError(null);

    try {
      let response: PostsResponse;
      
      if (tabType === '전체보기') {
        response = await getAllPosts();
      } else {
        // 지역별 - 로그인 필요
        const token = localStorage.getItem('accessToken');
        if (!token) {
          setError('지역별 게시글을 보려면 로그인이 필요합니다.');
          setLoading(false);
          return;
        }
        response = await getLocalPosts();
      }
      
      setPosts(response.posts || []);
    } catch (err: any) {
      console.error('게시글 로드 오류:', err);
      
      let errorMessage = '게시글을 불러오는 중 오류가 발생했습니다.';
      
      if (err.response?.status === 401) {
        errorMessage = '로그인이 필요합니다.';
        if (activeTab === '지역별') {
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        }
      } else if (err.response?.status === 500) {
        errorMessage = '서버 내부 오류가 발생했습니다.';
      } else if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.response?.data?.detail) {
        errorMessage = err.response.data.detail;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // 컴포넌트 마운트 시 전체 게시글 로드
  useEffect(() => {
    loadPosts('전체보기');
  }, []);

  // 탭 변경 시 데이터 로드
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    loadPosts(tab);
  };

  // 날짜 포맷 함수
  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      const year = date.getFullYear().toString().slice(-2);
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}.${month}.${day}`;
    } catch {
      return dateString;
    }
  };

  const handleRowClick = (id: string) => {
    navigate(`/CommunityDetail/${id}`);
  };

  const handleWriteClick = () => {
    // 글쓰기는 로그인 필요
    const token = localStorage.getItem('accessToken');
    if (!token) {
      alert('글쓰기를 하려면 로그인이 필요합니다.');
      navigate('/login');
      return;
    }
    navigate('/CommunityWrite');
  };

  const tabs = ['전체보기', '지역별'];

  return (
    <PageContainer>
      <Header>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <HeaderTitle>커뮤니티</HeaderTitle>
      </Header>
      
      <ContentWrapper>
        <TopControls>
          <WriteButton onClick={handleWriteClick}>
            글쓰기
          </WriteButton>
        </TopControls>

        <TabContainer>
          {tabs.map((tab) => (
            <TabButton
              key={tab}
              $active={activeTab === tab}
              onClick={() => handleTabChange(tab)}
              disabled={loading}
            >
              {tab}
            </TabButton>
          ))}
        </TabContainer>

        {loading && <LoadingMessage>게시글을 불러오는 중...</LoadingMessage>}
        
        {error && <ErrorMessage>{error}</ErrorMessage>}

        {!loading && !error && (
          <>
            <TableContainer>
              <Table>
                <TableHeader>
                  <TableHeaderRow>
                    <TableHeaderCell>번호</TableHeaderCell>
                    <TableHeaderCell>제목</TableHeaderCell>
                    <TableHeaderCell>작성자</TableHeaderCell>
                    <TableHeaderCell>작성일</TableHeaderCell>
                    <TableHeaderCell>좋아요 수</TableHeaderCell>
                  </TableHeaderRow>
                </TableHeader>
                <TableBody>
                  {posts.length === 0 ? (
                    <tr>
                      <TableCell colSpan={5}>
                        <EmptyMessage>게시글이 없습니다.</EmptyMessage>
                      </TableCell>
                    </tr>
                  ) : (
                    posts.map((post) => (
                      <TableRow key={post.id} onClick={() => handleRowClick(post.id)}>
                        <TableCell>{post.no}</TableCell>
                        <TableCell>{post.title}</TableCell>
                        <TableCell>{post.username}</TableCell>
                        <TableCell>{formatDate(post.created_at)}</TableCell>
                        <TableCell>{post.likes}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            
            {posts.length > 0 && (
              <PaginationContainer>
                <ArrowButton>←</ArrowButton>
                <PaginationButton active>1</PaginationButton>
                <PaginationButton>2</PaginationButton>
                <PaginationButton>3</PaginationButton>
                <PaginationButton>4</PaginationButton>
                <PaginationButton>5</PaginationButton>
                <PaginationButton>6</PaginationButton>
                <PaginationButton>7</PaginationButton>
                <ArrowButton>→</ArrowButton>
              </PaginationContainer>
            )}
          </>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default CommunityList;