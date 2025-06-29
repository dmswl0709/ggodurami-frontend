import { jsx as _jsx } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from '../../assets/images/Logo.png';
const LogoWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;
const LogoImage = styled.img `
  width: 150px;
  height: 150px;
  user-select: none;
`;
const LogoText = styled.h1 `
  font-size: 28px;
  font-weight: 700;
  color: #4CAF50;
  margin: 0;
  letter-spacing: -0.5px;
  user-select: none;
`;
export const Logo = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/');
    };
    return (_jsx(LogoWrapper, { onClick: handleLogoClick, children: _jsx(LogoImage, { src: logoImg, alt: "\uAF2C\uB450\uB77C\uBBF8 \uB85C\uACE0" }) }));
};
export default Logo;
