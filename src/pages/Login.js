import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// pages/Login.tsx (비밀번호 변경 기능 추가 버전)
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Input } from '../Components/Input/Input';
import { Button } from '../Components/Button/Button';
import { Logo } from '../Components/Logo/Logo';
import { useAppDispatch, useAppSelector } from '../Store/hooks';
import { loginStart, loginSuccess, loginFailure, clearError } from '../Store/slices/authSlice';
// API 설정
const BASE_URL = 'http://localhost:8000';
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
// API 함수
const loginUser = async (data) => {
    const response = await apiClient.post('/login', data);
    return response.data;
};
const getCurrentUser = async (token) => {
    const response = await apiClient.get('/mypage', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
const changePassword = async (data, token) => {
    const response = await apiClient.patch('/change-password', data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
// 스타일 컴포넌트들
const PageContainer = styled.div `
  min-height: 100vh;
  background-color: #FFEFD5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const FormContainer = styled.div `
  background-color: #FFEFD5;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0);
  width: 100%;
  max-width: 400px;
`;
const ButtonGroup = styled.div `
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`;
const LinkGroup = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #eee;
`;
const LinkText = styled.button `
  background: none;
  border: none;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  
  &:hover {
    color: #4CAF50;
  }
`;
const SignUpLink = styled(LinkText) `
  color: #4CAF50;
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
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
  border-radius: 16px;
  z-index: 10;
`;
const RelativeContainer = styled.div `
  position: relative;
`;
// 비밀번호 변경 모달 스타일
const ModalOverlay = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;
const ModalContainer = styled.div `
  background-color: #FFEFD5;
  border-radius: 16px;
  padding: 30px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 480px) {
    padding: 20px;
    margin: 0 10px;
  }
`;
const ModalTitle = styled.h2 `
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;
const ModalButtonGroup = styled.div `
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
const ModalButton = styled.button `
  flex: 1;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
`;
const CancelButton = styled(ModalButton) `
  background-color: #6c757d;
  color: white;
  
  &:hover {
    background-color: #5a6268;
  }
`;
const ConfirmButton = styled(ModalButton) `
  background-color: #FBBF77;
  color: white;
  
  &:hover {
    background-color: #E6AB65;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
const LoginStep = styled.div `
  margin-bottom: 20px;
`;
const StepTitle = styled.h3 `
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
`;
const StepDescription = styled.p `
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.4;
`;
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { loading, error, isAuthenticated } = useAppSelector((state) => state.auth);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [success, setSuccess] = useState(null);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [passwordStep, setPasswordStep] = useState('login');
    const [passwordChangeData, setPasswordChangeData] = useState({
        email: '',
        password: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [passwordLoading, setPasswordLoading] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [passwordSuccess, setPasswordSuccess] = useState('');
    // 이미 로그인되어 있으면 홈으로 리다이렉트
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);
    // 컴포넌트 마운트 시 에러 클리어
    useEffect(() => {
        dispatch(clearError());
    }, [dispatch]);
    const handleInputChange = (field) => (e) => {
        setFormData(prev => ({
            ...prev,
            [field]: e.target.value
        }));
        // 입력 시 에러 메시지 클리어
        if (error)
            dispatch(clearError());
    };
    const handlePasswordInputChange = (field) => (e) => {
        setPasswordChangeData(prev => ({
            ...prev,
            [field]: e.target.value
        }));
        if (passwordError)
            setPasswordError('');
    };
    const validateForm = () => {
        if (!formData.email || !formData.password) {
            dispatch(loginFailure('이메일과 비밀번호를 입력해주세요.'));
            return false;
        }
        // 이메일 형식 체크
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            dispatch(loginFailure('올바른 이메일 형식을 입력해주세요.'));
            return false;
        }
        return true;
    };
    const validatePasswordChange = () => {
        if (!passwordChangeData.currentPassword || !passwordChangeData.newPassword || !passwordChangeData.confirmPassword) {
            setPasswordError('모든 필드를 입력해주세요.');
            return false;
        }
        if (passwordChangeData.newPassword.length < 6) {
            setPasswordError('새 비밀번호는 최소 6자 이상이어야 합니다.');
            return false;
        }
        if (passwordChangeData.newPassword !== passwordChangeData.confirmPassword) {
            setPasswordError('새 비밀번호와 확인 비밀번호가 일치하지 않습니다.');
            return false;
        }
        if (passwordChangeData.currentPassword === passwordChangeData.newPassword) {
            setPasswordError('새 비밀번호는 현재 비밀번호와 달라야 합니다.');
            return false;
        }
        return true;
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        dispatch(loginStart());
        try {
            // 1. 로그인 API 호출
            const loginData = {
                email: formData.email,
                password: formData.password
            };
            console.log('전송할 로그인 데이터:', loginData);
            const loginResponse = await loginUser(loginData);
            console.log('로그인 응답:', loginResponse);
            // 2. 사용자 정보 조회
            const userResponse = await getCurrentUser(loginResponse.access_token);
            console.log('사용자 정보:', userResponse);
            // 3. Redux 상태 업데이트
            dispatch(loginSuccess({
                user: {
                    user_id: userResponse.mypage.user_id,
                    username: userResponse.mypage.username,
                    email: userResponse.mypage.email,
                },
                token: loginResponse.access_token,
            }));
            setSuccess(loginResponse.message);
            // 성공 시 1.5초 후 홈으로 이동
            setTimeout(() => {
                navigate('/');
            }, 1500);
        }
        catch (err) {
            console.error('로그인 오류:', err);
            console.error('응답 데이터:', err.response?.data);
            console.error('응답 상태:', err.response?.status);
            // 에러 메시지 추출
            let errorMessage = '로그인 중 오류가 발생했습니다.';
            if (err.response?.status === 401) {
                errorMessage = '이메일 또는 비밀번호가 틀렸습니다.';
            }
            else if (err.response?.status === 500) {
                errorMessage = '서버 내부 오류가 발생했습니다.';
            }
            else if (err.response?.data?.message) {
                errorMessage = err.response.data.message;
            }
            else if (err.response?.data?.detail) {
                if (Array.isArray(err.response.data.detail)) {
                    // FastAPI 유효성 검사 에러
                    errorMessage = err.response.data.detail.map((item) => `${item.loc?.[1] || '필드'}: ${item.msg}`).join(', ');
                }
                else {
                    errorMessage = err.response.data.detail;
                }
            }
            else if (err.message) {
                errorMessage = err.message;
            }
            dispatch(loginFailure(errorMessage));
        }
    };
    const handlePasswordChangeLogin = async () => {
        if (!passwordChangeData.email || !passwordChangeData.password) {
            setPasswordError('이메일과 현재 비밀번호를 입력해주세요.');
            return;
        }
        setPasswordLoading(true);
        setPasswordError('');
        try {
            // 임시 로그인으로 토큰 획득
            const loginData = {
                email: passwordChangeData.email,
                password: passwordChangeData.password
            };
            const loginResponse = await loginUser(loginData);
            // 임시 토큰을 저장하고 다음 단계로
            setPasswordChangeData(prev => ({
                ...prev,
                currentPassword: prev.password
            }));
            setPasswordStep('change');
        }
        catch (err) {
            console.error('비밀번호 변경 로그인 오류:', err);
            let errorMessage = '로그인에 실패했습니다.';
            if (err.response?.status === 401) {
                errorMessage = '이메일 또는 비밀번호가 틀렸습니다.';
            }
            else if (err.response?.data?.message) {
                errorMessage = err.response.data.message;
            }
            setPasswordError(errorMessage);
        }
        finally {
            setPasswordLoading(false);
        }
    };
    const handlePasswordChange = async () => {
        if (!validatePasswordChange()) {
            return;
        }
        setPasswordLoading(true);
        setPasswordError('');
        try {
            // 먼저 로그인하여 토큰 획득
            const loginResponse = await loginUser({
                email: passwordChangeData.email,
                password: passwordChangeData.currentPassword
            });
            // 비밀번호 변경 API 호출
            const changeData = {
                current_password: passwordChangeData.currentPassword,
                new_password: passwordChangeData.newPassword
            };
            const response = await changePassword(changeData, loginResponse.access_token);
            setPasswordSuccess(response.message);
            // 성공 시 2초 후 모달 닫기
            setTimeout(() => {
                setShowPasswordModal(false);
                setPasswordStep('login');
                setPasswordChangeData({
                    email: '',
                    password: '',
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                });
                setPasswordSuccess('');
            }, 2000);
        }
        catch (err) {
            console.error('비밀번호 변경 오류:', err);
            let errorMessage = '비밀번호 변경에 실패했습니다.';
            if (err.response?.status === 401) {
                errorMessage = '현재 비밀번호가 틀렸습니다.';
            }
            else if (err.response?.status === 400) {
                errorMessage = '비밀번호 형식이 올바르지 않습니다.';
            }
            else if (err.response?.data?.message) {
                errorMessage = err.response.data.message;
            }
            else if (err.response?.data?.detail) {
                if (Array.isArray(err.response.data.detail)) {
                    errorMessage = err.response.data.detail.map((item) => `${item.loc?.[1] || '필드'}: ${item.msg}`).join(', ');
                }
                else {
                    errorMessage = err.response.data.detail;
                }
            }
            setPasswordError(errorMessage);
        }
        finally {
            setPasswordLoading(false);
        }
    };
    const openPasswordModal = () => {
        setShowPasswordModal(true);
        setPasswordStep('login');
        setPasswordError('');
        setPasswordSuccess('');
        setPasswordChangeData({
            email: '',
            password: '',
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        });
    };
    const closePasswordModal = () => {
        setShowPasswordModal(false);
        setPasswordStep('login');
        setPasswordError('');
        setPasswordSuccess('');
        setPasswordChangeData({
            email: '',
            password: '',
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        });
    };
    const handleSignUp = () => {
        navigate('/signup');
    };
    return (_jsxs(PageContainer, { children: [_jsxs(RelativeContainer, { children: [_jsxs(FormContainer, { children: [_jsx(Logo, {}), _jsxs("form", { onSubmit: handleLogin, children: [_jsx(Input, { label: "\uC774\uBA54\uC77C", type: "email", placeholder: "\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694.", value: formData.email, onChange: handleInputChange('email'), required: true }), _jsx(Input, { label: "\uBE44\uBC00\uBC88\uD638", type: "password", placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.", value: formData.password, onChange: handleInputChange('password'), required: true }), error && _jsx(ErrorMessage, { children: error }), success && _jsx(SuccessMessage, { children: success }), _jsx(ButtonGroup, { children: _jsx(Button, { type: "submit", fullWidth: true, disabled: loading, children: loading ? '로그인 중...' : '로그인' }) }), _jsxs(LinkGroup, { children: [_jsx(LinkText, { onClick: openPasswordModal, children: "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD" }), _jsx(SignUpLink, { onClick: handleSignUp, children: "\uD68C\uC6D0\uAC00\uC785" })] })] })] }), loading && (_jsx(LoadingOverlay, { children: _jsx("div", { children: "\uB85C\uADF8\uC778 \uC911..." }) }))] }), showPasswordModal && (_jsx(ModalOverlay, { children: _jsxs(ModalContainer, { children: [_jsx(ModalTitle, { children: "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD" }), passwordStep === 'login' ? (_jsxs(LoginStep, { children: [_jsx(StepTitle, { children: "1\uB2E8\uACC4: \uBCF8\uC778 \uD655\uC778" }), _jsx(StepDescription, { children: "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD\uC744 \uC704\uD574 \uD604\uC7AC \uACC4\uC815 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694." }), _jsx(Input, { label: "\uC774\uBA54\uC77C", type: "email", placeholder: "\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694", value: passwordChangeData.email, onChange: handlePasswordInputChange('email') }), _jsx(Input, { label: "\uD604\uC7AC \uBE44\uBC00\uBC88\uD638", type: "password", placeholder: "\uD604\uC7AC \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694", value: passwordChangeData.password, onChange: handlePasswordInputChange('password') }), passwordError && _jsx(ErrorMessage, { children: passwordError }), _jsxs(ModalButtonGroup, { children: [_jsx(CancelButton, { onClick: closePasswordModal, disabled: passwordLoading, children: "\uCDE8\uC18C" }), _jsx(ConfirmButton, { onClick: handlePasswordChangeLogin, disabled: passwordLoading, children: passwordLoading ? '확인 중...' : '다음' })] })] })) : (_jsxs(LoginStep, { children: [_jsx(StepTitle, { children: "2\uB2E8\uACC4: \uC0C8 \uBE44\uBC00\uBC88\uD638 \uC124\uC815" }), _jsx(StepDescription, { children: "\uC0C8\uB85C\uC6B4 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694. (\uCD5C\uC18C 6\uC790 \uC774\uC0C1)" }), _jsx(Input, { label: "\uC0C8 \uBE44\uBC00\uBC88\uD638", type: "password", placeholder: "\uC0C8 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694", value: passwordChangeData.newPassword, onChange: handlePasswordInputChange('newPassword') }), _jsx(Input, { label: "\uC0C8 \uBE44\uBC00\uBC88\uD638 \uD655\uC778", type: "password", placeholder: "\uC0C8 \uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uC785\uB825\uD558\uC138\uC694", value: passwordChangeData.confirmPassword, onChange: handlePasswordInputChange('confirmPassword') }), passwordError && _jsx(ErrorMessage, { children: passwordError }), passwordSuccess && _jsx(SuccessMessage, { children: passwordSuccess }), _jsxs(ModalButtonGroup, { children: [_jsx(CancelButton, { onClick: () => setPasswordStep('login'), disabled: passwordLoading, children: "\uC774\uC804" }), _jsx(ConfirmButton, { onClick: handlePasswordChange, disabled: passwordLoading, children: passwordLoading ? '변경 중...' : '비밀번호 변경' })] })] }))] }) }))] }));
};
export default Login;
