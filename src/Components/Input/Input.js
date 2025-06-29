import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
const InputWrapper = styled.div `
  margin-bottom: 20px;
`;
const Label = styled.label `
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;
const StyledInput = styled.input `
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
  color: #333;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4CAF50;
    background-color: white;
  }

  &::placeholder {
    color: #999;
  }
`;
export const Input = ({ label, type = 'text', placeholder, value, onChange, required = false }) => {
    return (_jsxs(InputWrapper, { children: [_jsx(Label, { children: label }), _jsx(StyledInput, { type: type, placeholder: placeholder, value: value, onChange: onChange, required: required })] }));
};
