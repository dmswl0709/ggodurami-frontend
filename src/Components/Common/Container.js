import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const Container = ({ children }) => {
    return _jsx(StyledContainer, { children: children });
};
const StyledContainer = styled.div `
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;
export default Container;
