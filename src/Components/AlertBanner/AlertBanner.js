import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // ✅ 추가
const AlertBanner = () => {
    const navigate = useNavigate(); // ✅ 훅 사용
    const handleClick = () => {
        navigate('/report'); // ✅ /report 페이지로 이동
    };
    return (_jsx(BannerContainer, { children: _jsxs(BannerContent, { onClick: handleClick, children: [" ", _jsx(AlertIcon, { children: "\u26A0\uFE0F" }), _jsx(BannerText, { children: "\uC2E4\uC2DC\uAC04 \uD53C\uD574 \uC2E0\uACE0\uD558\uAE30" })] }) }));
};
const BannerContainer = styled.div `
  margin: 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
const BannerContent = styled.button `
  width: 100%;
  padding: 15px 200px;
  background-color: #fff;
  border: 2px solid #ff6b6b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #fff5f5;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.2);
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;
const AlertIcon = styled.span `
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const BannerText = styled.span `
  font-size: 22px;
  color: #ff6b6b;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export default AlertBanner;
