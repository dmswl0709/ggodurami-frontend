import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const StyledButton = styled.button.withConfig({
    shouldForwardProp: (prop) => !['variant', 'fullWidth'].includes(prop),
}) `
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  ${props => props.variant === 'primary' && `
    background-color: #F4B942;
    color: white;
    
    &:hover {
      background-color: #E5A532;
      transform: translateY(-1px);
    }
    
    &:active {
      transform: translateY(0);
    }
  `}

  ${props => props.variant === 'secondary' && `
    background-color: transparent;
    color: #666;
    border: 1px solid #ddd;
    
    &:hover {
      background-color: #f5f5f5;
    }
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    
    &:hover {
      transform: none;
    }
  }
`;
export const Button = ({ children, onClick, type = 'button', variant = 'primary', fullWidth = false, disabled = false }) => {
    return (_jsx(StyledButton, { type: type, onClick: onClick, variant: variant, fullWidth: fullWidth, disabled: disabled, children: children }));
};
