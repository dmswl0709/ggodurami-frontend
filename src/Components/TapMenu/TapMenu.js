import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
const TabWrapper = styled.div `
  width: 100%; // 또는 max-width: inherit;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;
const TabContainer = styled.div `
  display: flex;
  width: 50%; /* FileUpload보다 좁게 (반절 정도) */
  min-width: 250px;
  max-width: 500px;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 80%; /* 모바일 대응 */
  }
`;
const TabButton = styled.button `
  flex: 1;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${({ $active }) => ($active ? '#FBBF77' : '#F4F4F4')};
  color: black;
  border: none;
  border-right: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:last-child {
    border-right: none;
  }
`;
const TabMenu = ({ activeTab, onTabChange }) => (_jsx(TabWrapper, { children: _jsxs(TabContainer, { children: [_jsx(TabButton, { "$active": activeTab === 'disaster', onClick: () => onTabChange('disaster'), children: "\uC7AC\uB09C/\uC7AC\uD574" }), _jsx(TabButton, { "$active": activeTab === 'pest', onClick: () => onTabChange('pest'), children: "\uBCD1\uD574\uCDA9" })] }) }));
export default TabMenu;
