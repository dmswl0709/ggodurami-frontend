import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logoImage from "../../assets/images/Logo.png";
const HeaderWrapper = styled.header `
  background-color: #FFEFD5;
  padding: 8px 24px;
  display: flex;
  justify-content: center;
  height: 60px;
  position: relative;
`;
const Inner = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 100%;
`;
const LogoContainer = styled.div `
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
`;
const LogoImage = styled.img `
  height: 145px;
  width: auto;
  object-fit: contain;
  position: relative;
  top: -10px;
  
  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s ease;
  }
`;
const Nav = styled.nav `
  display: flex;
  gap: 32px;
  font-size: 17px;
  font-weight: 700;
  align-items: center;
  
  span {
    cursor: pointer;
    color: #000000;
    
    &:hover {
      opacity: 0.7;
      transition: opacity 0.2s ease;
    }
  }
`;
const Header = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/');
    };
    return (_jsx(HeaderWrapper, { children: _jsxs(Inner, { children: [_jsx(LogoContainer, { onClick: handleLogoClick, children: _jsx(LogoImage, { src: logoImage, alt: "\uAF2C\uB450\uB77C\uBBF8" }) }), _jsxs(Nav, { children: [_jsx("span", { onClick: () => navigate("/ReportDetail"), children: "\uC2E0\uACE0\uC0C1\uD669" }), _jsx("span", { onClick: () => navigate("/CommunityList"), children: "\uCEE4\uBBA4\uB2C8\uD2F0" }), _jsx("span", { onClick: () => navigate("/SupportList"), children: "\uC9C0\uC6D0\uAE08 \uBC0F \uC138\uBBF8\uB098 \uC815\uBCF4" })] })] }) }));
};
export default Header;
