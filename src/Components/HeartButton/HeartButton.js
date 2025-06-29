import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
const LikeSection = styled.div `
  text-align: center;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const LikeText = styled.span `
  font-size: 14px;
  color: #555;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
const StyleHeartButton = styled.button `
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
const LikeCount = styled.span `
  font-size: 12px;
  color: #999;
  
  @media (max-width: 480px) {
    font-size: 11px;
  }
`;
export const HeartButton = ({ isLiked, likeCount, onLike, showText = true, showCount = true }) => {
    return (_jsxs(LikeSection, { children: [showText && _jsx(LikeText, { children: "\uAE00 \uB0B4\uC6A9\uC774 \uB9C8\uC74C\uC5D0 \uB4DC\uC168\uB2E4\uBA74" }), _jsx(StyleHeartButton, { onClick: onLike, children: _jsx("img", { src: isLiked ? '/src/assets/images/ffavv.png' : '/src/assets/images/fav.png', alt: isLiked ? '좋아요 취소' : '좋아요' }) }), showCount && _jsxs(LikeCount, { children: ["\uC88B\uC544\uC694 ", likeCount, "\uAC1C"] })] }));
};
export default HeartButton;
