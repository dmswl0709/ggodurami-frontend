// components/HeartButton/HeartButton.tsx
import React from 'react';
import styled from 'styled-components';

interface HeartButtonProps {
  isLiked: boolean;
  likeCount: number;
  onLike: () => void;
  showText?: boolean;
  showCount?: boolean;
}

const LikeSection = styled.div`
  text-align: center;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const LikeText = styled.span`
  font-size: 14px;
  color: #555;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const StyleHeartButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  transition: all 0.3s ease;
  border-radius: 50%;
  
  &:hover {
    transform: scale(1.1);
    background-color: rgba(251, 191, 119, 0.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  img {
    width: 40px;
    height: 40px;
    transition: all 0.3s ease;
    
    @media (max-width: 768px) {
      width: 35px;
      height: 35px;
    }
    
    @media (max-width: 480px) {
      width: 30px;
      height: 30px;
    }
  }
`;

const LikeCount = styled.span`
  font-size: 12px;
  color: #999;
  
  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const HeartButton: React.FC<HeartButtonProps> = ({ 
  isLiked, 
  likeCount, 
  onLike, 
  showText = true, 
  showCount = true 
}) => {
  return (
    <LikeSection>
      {showText && <LikeText>글 내용이 마음에 드셨다면</LikeText>}
      <StyleHeartButton onClick={onLike}>
        <img 
          src={isLiked ? '/images/ffavv.png' : '/images/fav.png'} 
          alt={isLiked ? '좋아요 취소' : '좋아요'} 
        />
      </StyleHeartButton>
      {showCount && <LikeCount>좋아요 {likeCount}개</LikeCount>}
    </LikeSection>
  );
};

export default HeartButton;