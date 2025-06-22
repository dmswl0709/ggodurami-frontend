// pages/CommunityList.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
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

const TabButton = styled.button<{ active?: boolean }>`
  padding: 12px 24px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  
  &:first-child {
    background-color: ${props => props.active ? '#8B4513' : '#F5DEB3'};
    color: ${props => props.active ? 'white' : '#8B4513'};
    border-radius: 12px 0 0 12px;
  }
  
  &:last-child {
    background-color: ${props => props.active ? '#8B4513' : '#F5DEB3'};
    color: ${props => props.active ? 'white' : '#8B4513'};
    border-radius: 0 12px 12px 0;
    
    &:before {
      content: '📍';
      margin-right: 8px;
    }
  }
  
  &:hover {
    opacity: 0.8;
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

interface CommunityData {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
}

export const CommunityList: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('전체보기');
  
  const communityData: CommunityData[] = [
    {
      id: 1,
      title: '안녕하세요 ~~~ 좋은 정보 공유드려요 !!',
      author: '25경기김포김덕주',
      date: '25.06.02',
      views: 3
    },
    {
      id: 2,
      title: '안녕하세요 ~~~',
      author: '25경기김포김덕주',
      date: '25.06.02',
      views: 2
    },
    {
      id: 3,
      title: '안녕하세요 ~~~',
      author: '25경기김포김덕주',
      date: '25.06.02',
      views: 3
    },
    {
      id: 4,
      title: '안녕하세요 ~~~',
      author: '25경기김포김덕주',
      date: '25.06.02',
      views: 2
    },
    {
      id: 5,
      title: '안녕하세요 ~~~',
      author: '25경기김포김덕주',
      date: '25.06.02',
      views: 3
    },
    {
      id: 6,
      title: '안녕하세요 ~~~',
      author: '25경기김포김덕주',
      date: '25.06.02',
      views: 2
    },
    {
      id: 7,
      title: '안녕하세요 ~~~',
      author: '25경기김포김덕주',
      date: '25.06.02',
      views: 3
    },
    {
      id: 8,
      title: '안녕하세요 ~~~',
      author: '25경기김포김덕주',
      date: '25.06.02',
      views: 2
    }
  ];

  const handleRowClick = (id: number) => {
    navigate('/CommunityDetail');
  };

  const handleWriteClick = () => {
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
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </TabButton>
          ))}
        </TabContainer>

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
              {communityData.map((item) => (
                <TableRow key={item.id} onClick={() => handleRowClick(item.id)}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.author}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.views}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
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
      </ContentWrapper>
    </PageContainer>
  );
};

export default CommunityList;