import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const Container = styled.div `
  margin-bottom: 24px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 16px;
  }
`;
const StyledInput = styled.input `
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: white;
  color: black;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: #0066ff;
    box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.1);
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.7rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.65rem;
  }
`;
const StyledTextarea = styled.textarea `
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: white;
  color: black;
  box-sizing: border-box;
  outline: none;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  line-height: 1.5;

  &:focus {
    border-color: #0066ff;
    box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.1);
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 1024px) {
    font-size: 0.95rem;
    min-height: 110px;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.7rem;
    min-height: 100px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.65rem;
    min-height: 90px;
  }
`;
const InputField = ({ type = 'text', value, onChange, placeholder, required = false, rows = 4, }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };
    return (_jsx(Container, { children: type === 'textarea' ? (_jsx(StyledTextarea, { value: value, onChange: handleChange, placeholder: placeholder, rows: rows, required: required })) : (_jsx(StyledInput, { type: "text", value: value, onChange: handleChange, placeholder: placeholder, required: required })) }));
};
export default InputField;
