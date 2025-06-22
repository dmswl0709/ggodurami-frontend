// pages/SupportList.tsx
import React from 'react';
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

interface SupportData {
  id: number;
  title: string;
  category: string;
  manager: string;
  date: string;
  views: number;
}

export const SupportList: React.FC = () => {
  const navigate = useNavigate();
  
  const supportData: SupportData[] = [
    {
      id: 1,
      title: '스마트 농업 현장 문제점 찾아 지원금 ....',
      category: '제목',
      manager: '민해경',
      date: '25.06.02',
      views: 3
    },
    {
      id: 2,
      title: '스마트 농업 현장 문제점 찾아 지원금 ....',
      category: '제목',
      manager: '민해경',
      date: '25.06.02',
      views: 2
    },
    {
      id: 3,
      title: '스마트 농업 현장 문제점 찾아 지원금 ....',
      category: '제목',
      manager: '민해경',
      date: '25.06.02',
      views: 3
    },
    {
      id: 4,
      title: '스마트 농업 현장 문제점 찾아 지원금 ....',
      category: '제목',
      manager: '민해경',
      date: '25.06.02',
      views: 2
    },
    {
      id: 5,
      title: '스마트 농업 현장 문제점 찾아 지원금 ....',
      category: '제목',
      manager: '민해경',
      date: '25.06.02',
      views: 3
    },
    {
      id: 6,
      title: '스마트 농업 현장 문제점 찾아 지원금 ....',
      category: '제목',
      manager: '민해경',
      date: '25.06.02',
      views: 2
    },
    {
      id: 7,
      title: '스마트 농업 현장 문제점 찾아 지원금 ....',
      category: '제목',
      manager: '민해경',
      date: '25.06.02',
      views: 3
    },
    {
      id: 8,
      title: '스마트 농업 현장 문제점 찾아 지원금 ....',
      category: '제목',
      manager: '민해경',
      date: '25.06.02',
      views: 2
    }
  ];

  const handleRowClick = (id: number) => {
    navigate(`/support/${id}`);
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
          <TableContainer>
            <Table>
              <TableHeader>
                <TableHeaderRow>
                  <TableHeaderCell>번호</TableHeaderCell>
                  <TableHeaderCell>제목</TableHeaderCell>
                  <TableHeaderCell>담당자</TableHeaderCell>
                  <TableHeaderCell>작성일</TableHeaderCell>
                  <TableHeaderCell>조회수</TableHeaderCell>
                </TableHeaderRow>
              </TableHeader>
              <TableBody>
                {supportData.map((item) => (
                  <TableRow key={item.id} onClick={() => handleRowClick(item.id)}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.manager}</TableCell>
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

export default SupportList;