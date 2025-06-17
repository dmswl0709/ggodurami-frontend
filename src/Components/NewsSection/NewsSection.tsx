import React from 'react';
import styled from 'styled-components';

interface NewsItem {
  id: number;
  category: string;
  title: string;
  description: string;
  date: string;
  author: string;
}

const NewsSection: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      category: '공지사항',
      title: '스마트 농업 현장 문제점 찾아 시설물...',
      description: '미강의 스마트 농업 현장에서 다양한 문제 해결 데이터 수집',
      date: '2025-05-29',
      author: '민혜경'
    },
    {
      id: 2,
      category: '공지사항',
      title: '마을 공동체 참여 없어도 질블금 수령...',
      description: '미강의 스마트 농업 현장에서 다양한 문제 해결 데이터 수집',
      date: '2025-05-29',
      author: '민혜경'
    },
    {
      id: 3,
      category: '공지사항',
      title: '마을 공동체 참여 없어도 질블금 수령...',
      description: '미강의 스마트 농업 현장에서 다양한 문제 해결 데이터 수집',
      date: '2025-05-29',
      author: '민혜경'
    },
    {
      id: 4,
      category: '공지사항',
      title: '마을 공동체 참여 없어도 질블금 수령...',
      description: '미강의 스마트 농업 현장에서 다양한 문제 해결 데이터 수집',
      date: '2025-05-29',
      author: '민혜경'
    }
  ];

  return (
    <NewsContainer>
      <NewsHeader>
        <NewsTitle>지원금 및 세미나 정보</NewsTitle>
        <NavButtons>
          <NavButton>◀</NavButton>
          <NavButton>▶</NavButton>
          <NavButton>≡</NavButton>
        </NavButtons>
      </NewsHeader>
      <NewsGrid>
        {newsItems.map((item) => (
          <NewsCard key={item.id}>
            <CategoryTag>{item.category}</CategoryTag>
            <NewsCardTitle>{item.title}</NewsCardTitle>
            <NewsDescription>{item.description}</NewsDescription>
            <NewsFooter>
              <NewsDate>{item.date}</NewsDate>
              <NewsAuthor>{item.author}</NewsAuthor>
            </NewsFooter>
          </NewsCard>
        ))}
      </NewsGrid>
    </NewsContainer>
  );
};

const NewsContainer = styled.section`
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

const NewsHeader = styled.div`
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

const NewsTitle = styled.h2`
  font-size: 24px;
  color: #333;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    align-self: flex-end;
  }
`;

const NavButton = styled.button`
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

  &:hover {
    background-color: #f5f5f5;
    border-color: #999;
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

const NewsGrid = styled.div`
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

const NewsCard = styled.div`
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

const CategoryTag = styled.span`
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

const NewsCardTitle = styled.h3`
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

const NewsDescription = styled.p`
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

const NewsFooter = styled.div`
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

const NewsDate = styled.span`
  font-size: 12px;
  color: #999;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const NewsAuthor = styled.span`
  font-size: 12px;
  color: #666;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export default NewsSection;