import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const ButtonContainer = styled.div `
  text-align: center;
  justify-content: center; // 버튼을 가운데로 정렬
  margin-top: 0.01rem;
  margin-bottom: 1rem;
`;
const StyledButton = styled.button `
  font-weight: bold;
  padding: 0.75rem 3rem;
  border-radius: 0.5rem;
  background-color: ${({ disabled }) => (disabled ? '#D1D5DB' : '#FBBF77')};
  color: ${({ disabled }) => (disabled ? '#9CA3AF' : '#000000')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#D1D5DB' : '#fbb15f')};
  }
`;
const SubmitButton = ({ onClick, disabled = false }) => (_jsx(ButtonContainer, { children: _jsx(StyledButton, { onClick: onClick, disabled: disabled, children: "\uC81C\uCD9C\uD558\uAE30" }) }));
export default SubmitButton;
