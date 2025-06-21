import React from 'react';
import styled from 'styled-components';

interface FileUploadProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
  required?: boolean;
}

const Container = styled.div`
  margin-bottom: 24px;
  background-color: #FFEFD5;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 12px;
  color: #000;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 8px;
  }
`;

const UploadBox = styled.div`
  border: 1px solid #ccc;
  border-radius: 2px;
  background-color: white;
  overflow: hidden;
  width: 100%;
`;

const UploadHeader = styled.div`
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 6px 10px;
  }

  @media (max-width: 480px) {
    padding: 6px 8px;
  }
`;

const Checkbox = styled.input`
  margin-right: 8px;

  @media (max-width: 480px) {
    margin-right: 6px;
  }
`;

const UploadBody = styled.div`
  padding: 40px 12px;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 32px 12px;
  }

  @media (max-width: 768px) {
    padding: 24px 10px;
  }

  @media (max-width: 480px) {
    padding: 20px 8px;
  }
`;

const InstructionText = styled.p`
  color: #000;
  font-size: 0.875rem;
  margin-bottom: 16px;

  @media (max-width: 1024px) {
    font-size: 0.825rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    margin-bottom: 10px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const IconBox = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #999;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
  }
`;

const UploadFooter = styled.div`
  background-color: #d9d9d9;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px 12px;

  @media (max-width: 768px) {
    padding: 6px 10px;
    gap: 6px;
  }

  @media (max-width: 480px) {
    padding: 6px 8px;
    gap: 6px;
  }
`;

const UploadButton = styled.label`
  font-size: 0.875rem;
  color: #0066cc;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    font-size: 0.825rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const DeleteButton = styled.button<{ disabled: boolean }>`
  font-size: 0.875rem;
  color: #000;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  background: none;
  border: none;

  &:hover {
    text-decoration: ${({ disabled }) => (disabled ? 'none' : 'underline')};
  }

  @media (max-width: 1024px) {
    font-size: 0.825rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const FileList = styled.div`
  margin-top: 16px;

  @media (max-width: 768px) {
    margin-top: 12px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;

const FileItem = styled.div`
  background-color: #f8f8f8;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.875rem;
  word-break: break-word;

  & + & {
    margin-top: 8px;
  }

  span {
    flex: 1 1 auto;
    margin-right: 8px;
    color: #000;
  }

  button {
    color: #cc0000;
    border: none;
    background: none;
    font-size: 0.875rem;
    cursor: pointer;
    flex-shrink: 0;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 1024px) {
      font-size: 0.825rem;
    }

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }

    @media (max-width: 480px) {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 1024px) {
    font-size: 0.825rem;
    padding: 7px 10px;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 6px 10px;

    & + & {
      margin-top: 6px;
    }

    span {
      margin-right: 6px;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 6px 8px;

    span {
      margin-right: 6px;
    }
  }
`;

const FileListTitle = styled.p`
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #000;

  @media (max-width: 1024px) {
    font-size: 0.825rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 6px;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    margin-bottom: 6px;
  }
`;

const HeaderText = styled.span`
  font-size: 0.875rem;
  color: #000;

  @media (max-width: 1024px) {
    font-size: 0.825rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const FileUpload: React.FC<FileUploadProps> = ({ files, onFilesChange, required = false }) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files;
    if (newFiles) {
      const fileArray = Array.from(newFiles);
      onFilesChange([...files, ...fileArray]);
    }
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    onFilesChange(updatedFiles);
  };

  return (
    <Container>
      <Title>사진/동영상</Title>
      <UploadBox>
        <UploadHeader>
          <Checkbox type="checkbox" />
          <HeaderText>파일이름</HeaderText>
        </UploadHeader>

        <UploadBody>
          <InstructionText>이곳을 더블클릭 또는 파일을 드래그 하세요.</InstructionText>
          <IconWrapper>
            <IconBox>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#999"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
              </svg>
            </IconBox>
          </IconWrapper>

          <input
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
        </UploadBody>

        <UploadFooter>
          <UploadButton htmlFor="file-upload">파일 추가</UploadButton>
          <DeleteButton
            onClick={() => onFilesChange([])}
            disabled={files.length === 0}
          >
            전체 삭제
          </DeleteButton>
        </UploadFooter>
      </UploadBox>

      {files.length > 0 && (
        <FileList>
          <FileListTitle>업로드된 파일:</FileListTitle>
          {files.map((file, index) => (
            <FileItem key={index}>
              <span>{file.name}</span>
              <button onClick={() => removeFile(index)}>삭제</button>
            </FileItem>
          ))}
        </FileList>
      )}
    </Container>
  );
};

export default FileUpload;