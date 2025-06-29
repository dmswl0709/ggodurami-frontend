import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
const CheckboxWrapper = styled.div `
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const CheckboxInput = styled.input `
  width: 18px;
  height: 18px;
  margin-right: 10px;
  cursor: pointer;
  accent-color: #4CAF50;
`;
const CheckboxLabel = styled.label `
  font-size: 14px;
  color: #333;
  cursor: pointer;
  user-select: none;
`;
export const Checkbox = ({ label, checked, onChange }) => {
    return (_jsxs(CheckboxWrapper, { children: [_jsx(CheckboxInput, { type: "checkbox", checked: checked, onChange: (e) => onChange(e.target.checked) }), _jsx(CheckboxLabel, { children: label })] }));
};
