// src/components/SubmitButton/SubmitButton.tsx
import React from 'react';

interface SubmitButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, disabled = false }) => (
  <div className="text-center mt-4">
    <button
      onClick={onClick}
      disabled={disabled}
      className={`font-semibold py-3 px-12 rounded-lg transition-colors ${
        disabled
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-orange-300 hover:bg-orange-400 text-gray-800'
      }`}
    >
      제출하기
    </button>
  </div>
);

export default SubmitButton;