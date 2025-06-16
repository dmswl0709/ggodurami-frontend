// components/Input/Input.tsx
import React from 'react';
import styled from 'styled-components';

interface InputProps {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
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

export const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false
}) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </InputWrapper>
  );
};

