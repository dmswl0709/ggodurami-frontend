// pages/CommunityDetail.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Logo } from '../Components/Logo/Logo';
import { HeartButton } from '../Components/HeartButton/HeartButton';
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
    padding: 30px 30px;
    margin: 0 40px;
  }
  
  @media (max-width: 480px) {
    padding: 25px 15px;
    margin: 0 5px;
  }
`;

const PostContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  border: 1px solid #ddd;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const PostHeader = styled.div`
  background-color: #FBBF77;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const PostTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #666;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`;

const PostContent = styled.div`
  margin-bottom: 30px;
`;

const ContentSection = styled.div`
  margin-bottom: 25px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #FBBF77;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  
  &:before {
    content: '👇';
    margin-right: 8px;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const ContentText = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 10px;
  
  ul {
    margin: 10px 0;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 5px;
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Divider = styled.div`
  text-align: center;
  margin: 30px 0;
  color: #ccc;
  font-size: 14px;
`;

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  gap: 10px;
`;

const LikeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #555;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  @media (max-width: 480px) {
    padding: 8px 15px;
    font-size: 12px;
  }
`;

const CommentSection = styled.div`
  margin-top: 40px;
`;

const CommentHeader = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CommentItem = styled.div`
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const CommentMeta = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
`;

const CommentText = styled.div`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const CommentForm = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const CommentInput = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  resize: vertical;
  font-family: inherit;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #FBBF77;
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 10px;
  }
`;

const CommentActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }
`;

const CharCount = styled.span`
  font-size: 12px;
  color: #999;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #E6AB65;
  }
  
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  gap: 10px;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const ListButton = styled(ActionButton)`
  background-color: #FBBF77;
  color: white;
  
  &:hover {
    background-color: #E6AB65;
  }
`;

const ReplyButton = styled(ActionButton)`
  background-color: #FBBF77;
  color: white;
  
  &:hover {
    background-color: #E6AB65;
  }
`;

export const CommunityDetail: React.FC = () => {
  const navigate = useNavigate();
  const [commentText, setCommentText] = useState('');
  const [liked, setLiked] = useState(false);
  
  const handleBackToList = () => {
    navigate('/CommunityList');
  };
  
  const handleReply = () => {
    navigate('/CommunityWrite');
  };
  
  const handleLike = () => {
    setLiked(!liked);
  };
  
  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      // 댓글 제출 로직
      setCommentText('');
    }
  };

  return (
    <PageContainer>
      <Header>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <HeaderTitle>커뮤니티</HeaderTitle>
      </Header>
      
      <ContentWrapper>
        <PostContainer>
          <PostHeader>
            <PostTitle>안녕하세요~~~ 좋은 정보 공유드려요 !!</PostTitle>
            <PostMeta>
              <span>2025/06/02 &nbsp;&nbsp;&nbsp; 작성자 : 25경기김포김덕주 &nbsp;&nbsp;&nbsp; 좋아요 : 3</span>
            </PostMeta>
          </PostHeader>
          
          <PostContent>
            <ContentSection>
              <SectionTitle>초보 농부라면?</SectionTitle>
              <ContentText>
                <ul>
                  <li>농업 경험, 나이 농사, 기후 조건 불문합니다</li>
                  <li>새내 농부님들을 성장 최적 교육</li>
                  <li>성공한 경험자, 성공한 앞길기능~초월기 기능</li>
                </ul>
                <p>초보 농부제는 꼭 없이 좋습니다.</p>
                <p>나중에만에서 따뜻한 이야기와 함께 읽지 안으시죠.</p>
              </ContentText>
            </ContentSection>
            
            <Divider>• • • • •</Divider>
            
            <ContentSection>
              <SectionTitle>서비 농부라면?</SectionTitle>
              <ContentText>
                <ul>
                  <li>안선의 격없이 높은가지에서 안석성 옵션이 됩니다.</li>
                  <li>직품 속의 화려한 외 경험 블루 수 있습니다.</li>
                  <li>초월 농부생을 화정하여 바라본 만가킴을 흉내내었기오른.</li>
                </ul>
                <p>신제 농부제는 나의 이야기 봅니다.</p>
                <p>안전의 집들을 거음놈은 새에붐의 오직 원하셨습니다.</p>
              </ContentText>
            </ContentSection>
          </PostContent>
          
        </PostContainer>
        
        <CommentSection>
          <CommentHeader>💬 댓글 1</CommentHeader>
          
          <CommentItem>
            <CommentMeta>좋은 정보 감사드려요 ~~~ 2025.06.02 12:20 25경세천포김수</CommentMeta>
          </CommentItem>
          
          <CommentForm>
            <CommentInput
              placeholder="댓글을 남겨주세요."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <CommentActions>
              <CharCount>{commentText.length}/3000</CharCount>
              <SubmitButton onClick={handleCommentSubmit}>등록</SubmitButton>
            </CommentActions>
          </CommentForm>
        </CommentSection>
        
        {/* HeartButton 컴포넌트 사용 */}
        <HeartButton 
          isLiked={liked}
          likeCount={liked ? 4 : 3}
          onLike={handleLike}
          showText={true}
          showCount={true}
        />
        
        <ActionButtons>
          <ListButton onClick={handleBackToList}>다음 글</ListButton>
          <ReplyButton onClick={handleReply}>목록</ReplyButton>
        </ActionButtons>
      </ContentWrapper>
    </PageContainer>
  );
};

export default CommunityDetail;