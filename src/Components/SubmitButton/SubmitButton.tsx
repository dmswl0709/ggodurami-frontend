import React from 'react';
import styled from 'styled-components';

interface SubmitButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const ButtonContainer = styled.div`
  text-align: center;
  justify-content: center; // 버튼을 가운데로 정렬
  margin-top: 1rem;
`;

const StyledButton = styled.button<{ disabled: boolean }>`
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

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, disabled = false }) => (
  <ButtonContainer>
    <StyledButton onClick={onClick} disabled={disabled}>
      제출하기
    </StyledButton>
  </ButtonContainer>
);

export default SubmitButton;