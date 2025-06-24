// pages/CommunityWrite.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Logo } from '../Components/Logo/Logo';
import InputField from '../Components/InputField/InputField';
import { useNavigate } from "react-router-dom";

// 타입 정의
interface PostCreateRequest {
  title: string;
  content: string;
  tags: string[];
}

interface PostCreateResponse {
  user_id: string;
  username: string;
  title: string;
  content: string;
  tags: string[];
  local_id: number;
  created_at: string;
  likes: number;
  id: string;
}

// API 설정
const BASE_URL = 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 - JWT 토큰 자동 추가
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API 함수
const createPost = async (data: PostCreateRequest): Promise<PostCreateResponse> => {
  const response = await apiClient.post<PostCreateResponse>('/post', data);
  return response.data;
};

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #FFEFD5;
  padding: 5px 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5px;
  padding: 0 10px;
  max-width: 1400px;
  margin: 0 auto 5px auto;
  
  @media (max-width: 1024px) {
    max-width: 95%;
    margin-bottom: 3px;
    padding: 0 15px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2px;
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1px;
    padding: 0 5px;
  }
`;

const LogoContainer = styled.div`
  margin-top: 2px;
  margin-bottom: -50px;
  
  @media (max-width: 768px) {
    margin-top: 1px;
  }
  
  @media (max-width: 480px) {
    margin-top: 1px;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 25px;
  font-weight: 700;
  color: #333;
  margin: 15px 0 0 40px;
  text-align: left;
  
  @media (max-width: 1024px) {
    font-size: 28px;
    margin: 12px 0 0 40px;
  }
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin: 10px 0 0 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 22px;
    margin: 8px 0 0 50px;
  }
`;

const ContentWrapper = styled.div`
  background-color: #FFEFD5;
  border-radius: 16px;
  padding: 60px;
  max-width: 1000px;
  margin: 0 auto 40px auto;
  
  @media (max-width: 1024px) {
    max-width: 90%;
    padding: 40px 30px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    padding: 30px 30px;
    margin: 0 40px;
  }
  
  @media (max-width: 480px) {
    padding: 25px 15px;
    margin: 0 5px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const CharacterLimit = styled.div`
  font-size: 12px;
  color: #666;
  text-align: right;
  margin-top: -15px;
  margin-bottom: 15px;
`;

const TagInput = styled.input`
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
  
  @media (max-width: 768px) {
    font-size: 15px;
    padding: 10px 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;

const TagHelper = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 5px;
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 14px;
  margin-top: 8px;
  padding: 8px 12px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
`;

const SuccessMessage = styled.div`
  color: #155724;
  font-size: 14px;
  margin-top: 8px;
  padding: 8px 12px;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: relative;
`;

const SubmitButton = styled.button`
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px 60px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #E6AB65;
  }
  
  &:active {
    background-color: #D19B59;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    padding: 12px 50px;
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 40px;
    font-size: 14px;
  }
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

interface CommunityWriteData {
  title: string;
  content: string;
  tags: string;
}

export const CommunityWrite: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CommunityWriteData>({
    title: '',
    content: '',
    tags: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleTitleChange = (value: string) => {
    if (value.length <= 20) {
      setFormData(prev => ({
        ...prev,
        title: value
      }));
    }
    // 입력 시 에러 메시지 클리어
    if (error) setError(null);
  };

  const handleContentChange = (value: string) => {
    if (value.length <= 2000) {
      setFormData(prev => ({
        ...prev,
        content: value
      }));
    }
    // 입력 시 에러 메시지 클리어
    if (error) setError(null);
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      tags: e.target.value
    }));
    // 입력 시 에러 메시지 클리어
    if (error) setError(null);
  };

  const validateForm = (): boolean => {
    if (!formData.title || !formData.content) {
      setError('제목과 내용을 모두 입력해주세요.');
      return false;
    }
    
    if (formData.title.length < 2) {
      setError('제목을 최소 2자 이상 입력해주세요.');
      return false;
    }
    
    if (formData.content.length < 10) {
      setError('내용을 최소 10자 이상 입력해주세요.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // 로그인 상태 확인
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setError('로그인이 필요합니다. 로그인 페이지로 이동합니다.');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // 태그 처리 (쉼표로 분리하고 공백 제거)
      const tagsArray = formData.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      // 백엔드 API 형식에 맞게 데이터 변환
      const postData: PostCreateRequest = {
        title: formData.title,
        content: formData.content,
        tags: tagsArray
      };

      console.log('전송할 게시글 데이터:', postData);

      const response = await createPost(postData);
      
      setSuccess('✅ 게시글이 성공적으로 등록되었습니다!');
      
      // 성공 시 2초 후 커뮤니티 목록으로 이동
      setTimeout(() => {
        navigate('/communityList');
      }, 2000);

    } catch (err: any) {
      console.error('게시글 등록 오류:', err);
      console.error('응답 데이터:', err.response?.data);
      console.error('응답 상태:', err.response?.status);
      
      // 에러 메시지 추출
      let errorMessage = '게시글 등록 중 오류가 발생했습니다.';
      
      if (err.response?.status === 401) {
        errorMessage = '로그인이 만료되었습니다. 다시 로그인해주세요.';
        setTimeout(() => {
          localStorage.removeItem('accessToken');
          navigate('/login');
        }, 2000);
      } else if (err.response?.status === 500) {
        errorMessage = '서버 내부 오류가 발생했습니다.';
      } else if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.response?.data?.detail) {
        if (Array.isArray(err.response.data.detail)) {
          // FastAPI 유효성 검사 에러
          errorMessage = err.response.data.detail.map((item: any) => 
            `${item.loc?.[1] || '필드'}: ${item.msg}`
          ).join(', ');
        } else {
          errorMessage = err.response.data.detail;
        }
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <Header>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <HeaderTitle>커뮤니티 글 쓰기</HeaderTitle>
      </Header>
      
      <ContentWrapper>
        <FormContainer onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="title">제목</Label>
            <InputField
              type="text"
              value={formData.title}
              onChange={handleTitleChange}
              placeholder="최소 2자, 최대 20자 작성 가능"
              required
            />
            <CharacterLimit>
              {formData.title.length}/20자
            </CharacterLimit>
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="content">작성 내용</Label>
            <InputField
              type="textarea"
              value={formData.content}
              onChange={handleContentChange}
              placeholder="내용에 대해 자세히 적어주세요&#10;&#10;• 최소 10자, 2000자 이내 작성 가능"
              rows={12}
              required
            />
            <CharacterLimit>
              {formData.content.length}/2000자
            </CharacterLimit>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="tags">태그 (선택사항)</Label>
            <TagInput
              type="text"
              value={formData.tags}
              onChange={handleTagsChange}
              placeholder="태그를 쉼표로 구분해서 입력하세요 (예: 토마토, 장마, 병충해)"
            />
            <TagHelper>
              태그는 쉼표(,)로 구분하여 입력하세요. 게시글 검색에 도움이 됩니다.
            </TagHelper>
          </InputGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}
          
          <ButtonContainer>
            <SubmitButton 
              type="submit"
              disabled={loading}
            >
              {loading ? '등록 중...' : '등록'}
            </SubmitButton>
            
            {loading && (
              <LoadingOverlay>
                <div>게시글 등록 중...</div>
              </LoadingOverlay>
            )}
          </ButtonContainer>
        </FormContainer>
      </ContentWrapper>
    </PageContainer>
  );
};

export default CommunityWrite;