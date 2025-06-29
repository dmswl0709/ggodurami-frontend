// pages/CommunityWrite.tsx
import React, { useState, useEffect, useMemo, useCallback } from 'react';
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
  // local_id 제거 - 백엔드에서 자동으로 사용자 정보에서 가져옴
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

interface UserInfo {
  id: string;
  username: string;
  email: string;
  local_id: number;
  local_name?: string;
}

interface LoadingStates {
  userInfo: boolean;
  submission: boolean;
}

interface CommunityWriteData {
  title: string;
  content: string;
  tags: string;
  // local_id 제거
}

// API 설정
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://baekend.onrender.com';

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

const getUserInfo = async (): Promise<UserInfo> => {
  const response = await apiClient.get<UserInfo>('/users/me');
  return response.data;
};

// 지역 목록 정의 (표시용으로만 사용)
const LOCAL_OPTIONS = [
  { id: 1, name: '서울특별시' },
  { id: 2, name: '부산광역시' },
  { id: 3, name: '대구광역시' },
  { id: 4, name: '인천광역시' },
  { id: 5, name: '광주광역시' },
  { id: 6, name: '대전광역시' },
  { id: 7, name: '울산광역시' },
  { id: 8, name: '세종특별자치시' },
  { id: 9, name: '경기도' },
  { id: 10, name: '강원도' },
  { id: 11, name: '충청북도' },
  { id: 12, name: '충청남도' },
  { id: 13, name: '전라북도' },
  { id: 14, name: '전라남도' },
  { id: 15, name: '경상북도' },
  { id: 16, name: '경상남도' },
  { id: 17, name: '제주특별자치도' },
];

// 스타일 컴포넌트들
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

const UserInfoDisplay = styled.div`
  padding: 12px 16px;
  background-color: #e8f5e8;
  border: 2px solid #4CAF50;
  border-radius: 8px;
  font-size: 16px;
  color: #2e7d32;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 15px;
    padding: 10px 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;

const UserInfoNote = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 5px;
  font-weight: normal;
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

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 8px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const CommunityWrite: React.FC = () => {
  const navigate = useNavigate();
  
  // 상태 관리
  const [formData, setFormData] = useState<CommunityWriteData>({
    title: '',
    content: '',
    tags: ''
    // local_id 제거
  });

  const [loadingStates, setLoadingStates] = useState<LoadingStates>({
    userInfo: true,
    submission: false
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  // 에러 처리 함수
  const handleApiError = useCallback((err: any): string => {
    console.error('API 에러:', err);
    
    if (err.response?.status === 401) {
      localStorage.removeItem('accessToken');
      setTimeout(() => navigate('/login'), 2000);
      return '로그인이 만료되었습니다. 로그인 페이지로 이동합니다.';
    }
    
    if (err.response?.status === 422) {
      if (err.response?.data?.detail) {
        if (Array.isArray(err.response.data.detail)) {
          const errors = err.response.data.detail.map((item: any) => {
            const field = item.loc?.[1] || '필드';
            const message = item.msg || '오류';
            return `${field}: ${message}`;
          }).join('\n');
          return `입력 데이터 오류:\n${errors}`;
        } else {
          return `입력 데이터 오류: ${err.response.data.detail}`;
        }
      }
      return '입력 데이터 형식이 올바르지 않습니다. 모든 필드를 확인해주세요.';
    }
    
    if (err.response?.status === 500) {
      return '서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
    }
    
    return err.response?.data?.message || err.message || '알 수 없는 오류가 발생했습니다.';
  }, [navigate]);

  // 태그 유효성 검사
  const validateTags = useCallback((tagsString: string): { isValid: boolean; message?: string } => {
    if (!tagsString.trim()) {
      return { isValid: true }; // 태그는 선택사항
    }
    
    const tags = tagsString.split(',').map(tag => tag.trim()).filter(Boolean);
    
    if (tags.length > 5) {
      return { isValid: false, message: '태그는 최대 5개까지 입력 가능합니다.' };
    }
    
    const invalidTag = tags.find(tag => tag.length > 20);
    if (invalidTag) {
      return { isValid: false, message: '각 태그는 20자를 초과할 수 없습니다.' };
    }
    
    return { isValid: true };
  }, []);

  // 폼 유효성 검사
  const validateForm = useCallback((): { isValid: boolean; message?: string } => {
    if (!formData.title || !formData.content) {
      return { isValid: false, message: '제목과 내용을 모두 입력해주세요.' };
    }
    
    if (formData.title.length < 2) {
      return { isValid: false, message: '제목을 최소 2자 이상 입력해주세요.' };
    }
    
    if (formData.content.length < 10) {
      return { isValid: false, message: '내용을 최소 10자 이상 입력해주세요.' };
    }

    if (!userInfo || !userInfo.local_id) {
      return { isValid: false, message: '사용자 정보를 불러오지 못했습니다. 페이지를 새로고침해주세요.' };
    }

    const tagValidation = validateTags(formData.tags);
    if (!tagValidation.isValid) {
      return { isValid: false, message: tagValidation.message };
    }

    return { isValid: true };
  }, [formData, userInfo, validateTags]);

  // 메모화된 사용자 지역명
  const getUserLocalName = useMemo(() => {
    if (!userInfo?.local_id) return '';
    const localOption = LOCAL_OPTIONS.find(option => option.id === userInfo.local_id);
    return localOption ? localOption.name : `지역 ID: ${userInfo.local_id}`;
  }, [userInfo?.local_id]);

  // 사용자 정보 가져오기
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          setError('로그인이 필요합니다. 로그인 페이지로 이동합니다.');
          timeoutId = setTimeout(() => navigate('/login'), 2000);
          return;
        }

        console.log('🔍 사용자 정보 가져오는 중...');
        const userData = await getUserInfo();
        console.log('✅ 사용자 정보:', userData);
        setUserInfo(userData);
      } catch (err: any) {
        const errorMessage = handleApiError(err);
        setError(errorMessage);
      } finally {
        setLoadingStates(prev => ({ ...prev, userInfo: false }));
      }
    };

    fetchUserInfo();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [navigate, handleApiError]);

  // 입력 핸들러들
  const handleTitleChange = useCallback((value: string) => {
    if (value.length <= 20) {
      setFormData(prev => ({ ...prev, title: value }));
    }
    if (error) setError(null);
  }, [error]);

  const handleContentChange = useCallback((value: string) => {
    if (value.length <= 2000) {
      setFormData(prev => ({ ...prev, content: value }));
    }
    if (error) setError(null);
  }, [error]);

  const handleTagsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, tags: e.target.value }));
    if (error) setError(null);
  }, [error]);

  // 폼 제출 핸들러
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateForm();
    if (!validation.isValid) {
      setError(validation.message || '입력 정보를 확인해주세요.');
      return;
    }

    // 로그인 상태 재확인
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setError('로그인이 필요합니다. 로그인 페이지로 이동합니다.');
      setTimeout(() => navigate('/login'), 2000);
      return;
    }

    setLoadingStates(prev => ({ ...prev, submission: true }));
    setError(null);
    setSuccess(null);

    try {
      // 태그 처리
      const tagsArray = formData.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      // 백엔드에서 자동으로 사용자의 local_id를 사용하므로 제거
      const postData: PostCreateRequest = {
        title: formData.title,
        content: formData.content,
        tags: tagsArray
        // local_id 제거 - 백엔드에서 current_user의 local_id를 자동으로 사용
      };

      console.log('전송할 게시글 데이터:', postData);
      console.log('사용자의 지역 ID (자동 적용):', userInfo!.local_id);

      const response = await createPost(postData);
      
      setSuccess('✅ 게시글이 성공적으로 등록되었습니다!');
      
      // 성공 시 2초 후 커뮤니티 목록으로 이동
      setTimeout(() => {
        navigate('/communityList');
      }, 2000);

    } catch (err: any) {
      const errorMessage = handleApiError(err);
      setError(errorMessage);
    } finally {
      setLoadingStates(prev => ({ ...prev, submission: false }));
    }
  }, [formData, userInfo, validateForm, navigate, handleApiError]);

  // 사용자 정보 로딩 중
  if (loadingStates.userInfo) {
    return (
      <PageContainer>
        <Header>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <HeaderTitle>커뮤니티 글 쓰기</HeaderTitle>
        </Header>
        <ContentWrapper>
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <LoadingSpinner />
            <div>사용자 정보를 불러오는 중...</div>
          </div>
        </ContentWrapper>
      </PageContainer>
    );
  }

  // 사용자 정보를 불러오지 못했을 때
  if (!userInfo) {
    return (
      <PageContainer>
        <Header>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <HeaderTitle>커뮤니티 글 쓰기</HeaderTitle>
        </Header>
        <ContentWrapper>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </ContentWrapper>
      </PageContainer>
    );
  }

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

          {/* 사용자 지역 정보 표시 (선택 불가, 정보성으로만 표시) */}
          <InputGroup>
            <Label>작성 지역</Label>
            <UserInfoDisplay>
              📍 {getUserLocalName}
              <UserInfoNote>* 회원가입 시 설정한 지역으로 자동 등록됩니다</UserInfoNote>
            </UserInfoDisplay>
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
              태그는 쉼표(,)로 구분하여 입력하세요. 최대 5개, 각 태그당 20자 이내로 입력 가능합니다.
            </TagHelper>
          </InputGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}
          
          <ButtonContainer>
            <SubmitButton 
              type="submit"
              disabled={loadingStates.submission}
            >
              {loadingStates.submission ? '등록 중...' : '등록'}
            </SubmitButton>
            
            {loadingStates.submission && (
              <LoadingOverlay>
                <LoadingSpinner />
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