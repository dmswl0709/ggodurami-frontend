import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// pages/CommunityWrite.tsx
import { useState, useEffect, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Logo } from '../Components/Logo/Logo';
import InputField from '../Components/InputField/InputField';
import { useNavigate } from "react-router-dom";
// API 설정
const BASE_URL = 'http://localhost:8000';
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
// 요청 인터셉터 - JWT 토큰 자동 추가
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
// API 함수
const createPost = async (data) => {
    const response = await apiClient.post('/post', data);
    return response.data;
};
const getUserInfo = async () => {
    const response = await apiClient.get('/users/me');
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
const PageContainer = styled.div `
  min-height: 100vh;
  background-color: #FFEFD5;
  padding: 5px 0;
`;
const Header = styled.div `
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
const LogoContainer = styled.div `
  margin-top: 2px;
  margin-bottom: -50px;
  
  @media (max-width: 768px) {
    margin-top: 1px;
  }
  
  @media (max-width: 480px) {
    margin-top: 1px;
  }
`;
const HeaderTitle = styled.h1 `
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
const ContentWrapper = styled.div `
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
const FormContainer = styled.form `
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const InputGroup = styled.div `
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`;
const Label = styled.label `
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
const CharacterLimit = styled.div `
  font-size: 12px;
  color: #666;
  text-align: right;
  margin-top: -15px;
  margin-bottom: 15px;
`;
const TagInput = styled.input `
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
const TagHelper = styled.div `
  font-size: 12px;
  color: #666;
  margin-top: 5px;
`;
const UserInfoDisplay = styled.div `
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
const UserInfoNote = styled.div `
  font-size: 12px;
  color: #666;
  margin-top: 5px;
  font-weight: normal;
`;
const ErrorMessage = styled.div `
  color: #dc3545;
  font-size: 14px;
  margin-top: 8px;
  padding: 8px 12px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
`;
const SuccessMessage = styled.div `
  color: #155724;
  font-size: 14px;
  margin-top: 8px;
  padding: 8px 12px;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
`;
const ButtonContainer = styled.div `
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: relative;
`;
const SubmitButton = styled.button `
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
const LoadingOverlay = styled.div `
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
const LoadingSpinner = styled.div `
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
export const CommunityWrite = () => {
    const navigate = useNavigate();
    // 상태 관리
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        tags: ''
        // local_id 제거
    });
    const [loadingStates, setLoadingStates] = useState({
        userInfo: true,
        submission: false
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    // 에러 처리 함수
    const handleApiError = useCallback((err) => {
        console.error('API 에러:', err);
        if (err.response?.status === 401) {
            localStorage.removeItem('accessToken');
            setTimeout(() => navigate('/login'), 2000);
            return '로그인이 만료되었습니다. 로그인 페이지로 이동합니다.';
        }
        if (err.response?.status === 422) {
            if (err.response?.data?.detail) {
                if (Array.isArray(err.response.data.detail)) {
                    const errors = err.response.data.detail.map((item) => {
                        const field = item.loc?.[1] || '필드';
                        const message = item.msg || '오류';
                        return `${field}: ${message}`;
                    }).join('\n');
                    return `입력 데이터 오류:\n${errors}`;
                }
                else {
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
    const validateTags = useCallback((tagsString) => {
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
    const validateForm = useCallback(() => {
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
        if (!userInfo?.local_id)
            return '';
        const localOption = LOCAL_OPTIONS.find(option => option.id === userInfo.local_id);
        return localOption ? localOption.name : `지역 ID: ${userInfo.local_id}`;
    }, [userInfo?.local_id]);
    // 사용자 정보 가져오기
    useEffect(() => {
        let timeoutId;
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
            }
            catch (err) {
                const errorMessage = handleApiError(err);
                setError(errorMessage);
            }
            finally {
                setLoadingStates(prev => ({ ...prev, userInfo: false }));
            }
        };
        fetchUserInfo();
        return () => {
            if (timeoutId)
                clearTimeout(timeoutId);
        };
    }, [navigate, handleApiError]);
    // 입력 핸들러들
    const handleTitleChange = useCallback((value) => {
        if (value.length <= 20) {
            setFormData(prev => ({ ...prev, title: value }));
        }
        if (error)
            setError(null);
    }, [error]);
    const handleContentChange = useCallback((value) => {
        if (value.length <= 2000) {
            setFormData(prev => ({ ...prev, content: value }));
        }
        if (error)
            setError(null);
    }, [error]);
    const handleTagsChange = useCallback((e) => {
        setFormData(prev => ({ ...prev, tags: e.target.value }));
        if (error)
            setError(null);
    }, [error]);
    // 폼 제출 핸들러
    const handleSubmit = useCallback(async (e) => {
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
            const postData = {
                title: formData.title,
                content: formData.content,
                tags: tagsArray
                // local_id 제거 - 백엔드에서 current_user의 local_id를 자동으로 사용
            };
            console.log('전송할 게시글 데이터:', postData);
            console.log('사용자의 지역 ID (자동 적용):', userInfo.local_id);
            const response = await createPost(postData);
            setSuccess('✅ 게시글이 성공적으로 등록되었습니다!');
            // 성공 시 2초 후 커뮤니티 목록으로 이동
            setTimeout(() => {
                navigate('/communityList');
            }, 2000);
        }
        catch (err) {
            const errorMessage = handleApiError(err);
            setError(errorMessage);
        }
        finally {
            setLoadingStates(prev => ({ ...prev, submission: false }));
        }
    }, [formData, userInfo, validateForm, navigate, handleApiError]);
    // 사용자 정보 로딩 중
    if (loadingStates.userInfo) {
        return (_jsxs(PageContainer, { children: [_jsxs(Header, { children: [_jsx(LogoContainer, { children: _jsx(Logo, {}) }), _jsx(HeaderTitle, { children: "\uCEE4\uBBA4\uB2C8\uD2F0 \uAE00 \uC4F0\uAE30" })] }), _jsx(ContentWrapper, { children: _jsxs("div", { style: { textAlign: 'center', padding: '40px 0' }, children: [_jsx(LoadingSpinner, {}), _jsx("div", { children: "\uC0AC\uC6A9\uC790 \uC815\uBCF4\uB97C \uBD88\uB7EC\uC624\uB294 \uC911..." })] }) })] }));
    }
    // 사용자 정보를 불러오지 못했을 때
    if (!userInfo) {
        return (_jsxs(PageContainer, { children: [_jsxs(Header, { children: [_jsx(LogoContainer, { children: _jsx(Logo, {}) }), _jsx(HeaderTitle, { children: "\uCEE4\uBBA4\uB2C8\uD2F0 \uAE00 \uC4F0\uAE30" })] }), _jsx(ContentWrapper, { children: error && _jsx(ErrorMessage, { children: error }) })] }));
    }
    return (_jsxs(PageContainer, { children: [_jsxs(Header, { children: [_jsx(LogoContainer, { children: _jsx(Logo, {}) }), _jsx(HeaderTitle, { children: "\uCEE4\uBBA4\uB2C8\uD2F0 \uAE00 \uC4F0\uAE30" })] }), _jsx(ContentWrapper, { children: _jsxs(FormContainer, { onSubmit: handleSubmit, children: [_jsxs(InputGroup, { children: [_jsx(Label, { htmlFor: "title", children: "\uC81C\uBAA9" }), _jsx(InputField, { type: "text", value: formData.title, onChange: handleTitleChange, placeholder: "\uCD5C\uC18C 2\uC790, \uCD5C\uB300 20\uC790 \uC791\uC131 \uAC00\uB2A5", required: true }), _jsxs(CharacterLimit, { children: [formData.title.length, "/20\uC790"] })] }), _jsxs(InputGroup, { children: [_jsx(Label, { htmlFor: "content", children: "\uC791\uC131 \uB0B4\uC6A9" }), _jsx(InputField, { type: "textarea", value: formData.content, onChange: handleContentChange, placeholder: "\uB0B4\uC6A9\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC801\uC5B4\uC8FC\uC138\uC694\n\n\u2022 \uCD5C\uC18C 10\uC790, 2000\uC790 \uC774\uB0B4 \uC791\uC131 \uAC00\uB2A5", rows: 12, required: true }), _jsxs(CharacterLimit, { children: [formData.content.length, "/2000\uC790"] })] }), _jsxs(InputGroup, { children: [_jsx(Label, { children: "\uC791\uC131 \uC9C0\uC5ED" }), _jsxs(UserInfoDisplay, { children: ["\uD83D\uDCCD ", getUserLocalName, _jsx(UserInfoNote, { children: "* \uD68C\uC6D0\uAC00\uC785 \uC2DC \uC124\uC815\uD55C \uC9C0\uC5ED\uC73C\uB85C \uC790\uB3D9 \uB4F1\uB85D\uB429\uB2C8\uB2E4" })] })] }), _jsxs(InputGroup, { children: [_jsx(Label, { htmlFor: "tags", children: "\uD0DC\uADF8 (\uC120\uD0DD\uC0AC\uD56D)" }), _jsx(TagInput, { type: "text", value: formData.tags, onChange: handleTagsChange, placeholder: "\uD0DC\uADF8\uB97C \uC27C\uD45C\uB85C \uAD6C\uBD84\uD574\uC11C \uC785\uB825\uD558\uC138\uC694 (\uC608: \uD1A0\uB9C8\uD1A0, \uC7A5\uB9C8, \uBCD1\uCDA9\uD574)" }), _jsx(TagHelper, { children: "\uD0DC\uADF8\uB294 \uC27C\uD45C(,)\uB85C \uAD6C\uBD84\uD558\uC5EC \uC785\uB825\uD558\uC138\uC694. \uCD5C\uB300 5\uAC1C, \uAC01 \uD0DC\uADF8\uB2F9 20\uC790 \uC774\uB0B4\uB85C \uC785\uB825 \uAC00\uB2A5\uD569\uB2C8\uB2E4." })] }), error && _jsx(ErrorMessage, { children: error }), success && _jsx(SuccessMessage, { children: success }), _jsxs(ButtonContainer, { children: [_jsx(SubmitButton, { type: "submit", disabled: loadingStates.submission, children: loadingStates.submission ? '등록 중...' : '등록' }), loadingStates.submission && (_jsxs(LoadingOverlay, { children: [_jsx(LoadingSpinner, {}), _jsx("div", { children: "\uAC8C\uC2DC\uAE00 \uB4F1\uB85D \uC911..." })] }))] })] }) })] }));
};
export default CommunityWrite;
