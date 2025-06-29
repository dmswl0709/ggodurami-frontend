import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// pages/Report.tsx (자동 새로고침 제거 + 지역찾기 안내 메시지 개선)
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Logo from '../Components/Logo/Logo';
import TapMenu from '../Components/TapMenu/TapMenu';
import InputField from '../Components/InputField/InputField';
import FileUpload from '../Components/FileUpload/FileUpload';
import SubmitButton from '../Components/SubmitButton/SubmitButton';
import Container from '../Components/Common/Container';
import FindLocal from '../Components/FindLocal/FindLocal';
// API 설정
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://baekend.onrender.com';
const apiClient = axios.create({
    baseURL: BASE_URL,
});
// 요청 인터셉터 - JWT 토큰 자동 추가
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log('🔑 Authorization 헤더 추가');
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
// 🔥 신고 등록 API 함수 (백엔드 구조에 맞게 수정)
const submitReport = async (formData) => {
    try {
        console.log('=== 신고 등록 API 호출 시작 ===');
        // FormData 내용 로깅
        console.log('전송할 FormData:');
        for (const [key, value] of formData.entries()) {
            if (value instanceof File) {
                console.log(`${key}: [File] ${value.name} (${value.size} bytes, ${value.type})`);
            }
            else {
                console.log(`${key}: ${value}`);
            }
        }
        const response = await apiClient.post('/damage-report', formData, {
            headers: {
            // FormData 사용 시 Content-Type 헤더는 자동으로 설정
            },
        });
        console.log('✅ 신고 등록 성공:', response.data);
        return response.data;
    }
    catch (error) {
        console.error('❌ 신고 등록 실패:', error);
        console.error('응답 데이터:', error.response?.data);
        console.error('응답 상태:', error.response?.status);
        throw error;
    }
};
// 🔥 AI 분석 API 함수 (백엔드 구조에 맞게 수정)
const requestAIAnalysis = async (reportId) => {
    try {
        console.log('=== AI 분석 API 호출 시작 ===');
        console.log('분석할 신고 ID:', reportId);
        const response = await apiClient.get(`/damage-report/detect-damage/${reportId}`);
        console.log('✅ AI 분석 API 응답:', response.data);
        // 에러 응답 처리
        if (response.data.error) {
            console.error('❌ AI 분석 에러:', response.data.error);
            return null;
        }
        // 필수 필드 확인
        if (!response.data.primary_detection) {
            console.warn('⚠️ AI 분석 결과에 primary_detection이 없음');
            return null;
        }
        return response.data;
    }
    catch (error) {
        console.error('❌ AI 분석 실패:', error);
        console.error('AI 분석 응답 데이터:', error.response?.data);
        console.error('AI 분석 응답 상태:', error.response?.status);
        return null;
    }
};
const Report = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('disaster');
    const [files, setFiles] = useState([]);
    const [location, setLocation] = useState('');
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedDisasterType, setSelectedDisasterType] = useState('');
    const [selectedPestType, setSelectedPestType] = useState('');
    const [isMapOpen, setIsMapOpen] = useState(false);
    // 🔥 AI 분석 관련 상태
    const [aiAnalyzing, setAiAnalyzing] = useState(false);
    const [aiResult, setAiResult] = useState(null);
    // 지도에서 위치 선택 처리
    const handleLocationSelect = (selectedLocation) => {
        console.log('🗺️ 받은 위치 데이터:', selectedLocation);
        if (!selectedLocation) {
            console.error('선택된 위치 데이터가 없습니다.');
            return;
        }
        if (typeof selectedLocation.latitude !== 'number' || typeof selectedLocation.longitude !== 'number') {
            console.error('위도/경도가 숫자 형태가 아닙니다:', selectedLocation);
            return;
        }
        setLocation(selectedLocation.address || '');
        setLatitude(selectedLocation.latitude);
        setLongitude(selectedLocation.longitude);
        setIsMapOpen(false);
        console.log('✅ 위치 설정 완료:', {
            address: selectedLocation.address,
            latitude: selectedLocation.latitude,
            longitude: selectedLocation.longitude
        });
    };
    const handleLocationSearch = () => {
        setIsMapOpen(true);
    };
    // 카테고리 매핑 함수
    const getCategoryValues = () => {
        if (activeTab === 'disaster') {
            const categoryMap = {
                'earthquake': { main: '재난', sub: '지진' },
                'typhoon': { main: '재난', sub: '태풍' },
                'snow': { main: '재난', sub: '폭설' },
            };
            return categoryMap[selectedDisasterType] || null;
        }
        else {
            const categoryMap = {
                'disease': { main: '병해충', sub: '병해' },
                'insect': { main: '병해충', sub: '해충' },
            };
            return categoryMap[selectedPestType] || null;
        }
    };
    const validateForm = () => {
        const selectedType = activeTab === 'disaster' ? selectedDisasterType : selectedPestType;
        if (!selectedType) {
            setError('신고 유형을 선택해주세요.');
            return false;
        }
        if (!title.trim()) {
            setError('제목을 입력해주세요.');
            return false;
        }
        if (!location.trim()) {
            setError('신고 발생지역을 입력해주세요.');
            return false;
        }
        if (latitude === null || longitude === null ||
            typeof latitude !== 'number' || typeof longitude !== 'number' ||
            isNaN(latitude) || isNaN(longitude)) {
            setError('지도에서 정확한 위치를 선택해주세요.');
            return false;
        }
        if (!description.trim()) {
            setError('신고 내용을 입력해주세요.');
            return false;
        }
        if (files.length === 0) {
            setError('최소 1개의 파일을 업로드해주세요.');
            return false;
        }
        return true;
    };
    // 🔥 페이지 이동 함수
    const navigateToReportDetail = () => {
        console.log('📍 ReportDetail 페이지로 이동');
        navigate('/ReportDetail');
    };
    // 🔥 수정된 handleSubmit - 신고 완료 후 자동 이동 기능 추가
    const handleSubmit = async () => {
        setError('');
        setSuccess('');
        setAiResult(null);
        const token = localStorage.getItem('accessToken');
        if (!token) {
            setError('로그인이 필요합니다.');
            return;
        }
        if (!validateForm()) {
            return;
        }
        setLoading(true);
        try {
            console.log('=== 신고 제출 시작 ===');
            const formData = new FormData();
            const categoryValues = getCategoryValues();
            if (!categoryValues) {
                setError('올바른 카테고리를 선택해주세요.');
                setLoading(false);
                return;
            }
            // 백엔드 API 명세에 맞게 FormData 구성
            formData.append('main_category', categoryValues.main);
            formData.append('sub_category', categoryValues.sub);
            formData.append('title', title.trim());
            formData.append('content', description.trim());
            formData.append('local', location.trim());
            // 위도/경도 추가
            const lat = latitude;
            const lng = longitude;
            if (lat !== null && lng !== null &&
                typeof lat === 'number' && typeof lng === 'number' &&
                !isNaN(lat) && !isNaN(lng)) {
                formData.append('latitude', lat.toString());
                formData.append('longitude', lng.toString());
                console.log('✅ 위도/경도 FormData에 추가됨:', lat.toString(), lng.toString());
            }
            else {
                setError('위치 정보가 올바르지 않습니다. 다시 지역을 선택해주세요.');
                setLoading(false);
                return;
            }
            // 파일들 추가 (백엔드에서 'files' 필드명으로 받음)
            files.forEach((file, index) => {
                formData.append('files', file);
                console.log(`📎 파일 ${index + 1} 추가:`, file.name, file.type, file.size + ' bytes');
            });
            // 1단계: 신고 등록
            const response = await submitReport(formData);
            let successMessage = response.message || '✅ 신고가 성공적으로 접수되었습니다.';
            console.log('🎉 신고 제출 성공:', {
                report_id: response.report_id,
                uploaded_files: response.uploaded_files
            });
            // 🔥 2단계: 병해충 신고인 경우 AI 분석 실행
            if (categoryValues.main === '병해충' && response.report_id) {
                console.log('🤖 병해충 신고 감지 - AI 분석 시작');
                setAiAnalyzing(true);
                // AI 분석 요청 (5초 지연 후 - 백엔드에서 파일 처리 완료 대기)
                setTimeout(async () => {
                    try {
                        console.log('🔍 AI 분석 실행 중...');
                        const aiAnalysisResult = await requestAIAnalysis(response.report_id);
                        if (aiAnalysisResult && aiAnalysisResult.primary_detection) {
                            setAiResult(aiAnalysisResult);
                            const confidence = Math.round(aiAnalysisResult.primary_detection.confidence * 100);
                            const className = aiAnalysisResult.primary_detection.class_name;
                            successMessage += `\n\n🤖 AI 분석도 완료되었습니다!\n주요 진단: ${className} (신뢰도: ${confidence}%)`;
                            console.log('🎉 AI 분석 완료:', aiAnalysisResult);
                        }
                        else {
                            successMessage += '\n\n⚠️ AI 분석에서 병해충을 감지하지 못했거나 분석에 실패했습니다.';
                            console.log('⚠️ AI 분석 결과 없음');
                        }
                        setSuccess(successMessage);
                        setAiAnalyzing(false);
                        // 🔥 AI 분석 완료 후 2초 뒤 자동 이동
                        setTimeout(() => {
                            console.log('🔄 AI 분석 완료 - ReportDetail 페이지로 이동');
                            navigateToReportDetail();
                        }, 2000);
                    }
                    catch (aiError) {
                        console.error('AI 분석 중 오류:', aiError);
                        successMessage += '\n\n⚠️ AI 분석 중 오류가 발생했지만 신고는 정상적으로 접수되었습니다.';
                        setSuccess(successMessage);
                        setAiAnalyzing(false);
                        // 🔥 AI 분석 실패해도 2초 뒤 자동 이동
                        setTimeout(() => {
                            console.log('🔄 AI 분석 실패했지만 ReportDetail 페이지로 이동');
                            navigateToReportDetail();
                        }, 2000);
                    }
                }, 5000); // 5초 지연
            }
            else {
                // 🔥 재난 신고인 경우는 AI 분석 없이 바로 성공 메시지 표시 후 자동 이동
                setSuccess(successMessage);
                // 2초 후 자동 이동
                setTimeout(() => {
                    console.log('🔄 재난 신고 완료 - ReportDetail 페이지로 이동');
                    navigateToReportDetail();
                }, 2000);
            }
            // 성공 시 폼 초기화
            setFiles([]);
            setLocation('');
            setLatitude(null);
            setLongitude(null);
            setTitle('');
            setDescription('');
            setSelectedDisasterType('');
            setSelectedPestType('');
        }
        catch (err) {
            console.error('❌ 신고 제출 오류:', err);
            let errorMessage = '신고 제출 중 오류가 발생했습니다.';
            if (err.response?.status === 401) {
                errorMessage = '로그인이 만료되었습니다. 다시 로그인해주세요.';
            }
            else if (err.response?.status === 404) {
                errorMessage = 'API 엔드포인트를 찾을 수 없습니다. 서버 설정을 확인해주세요.';
            }
            else if (err.response?.status === 413) {
                errorMessage = '파일 크기가 너무 큽니다. 더 작은 파일을 업로드해주세요.';
            }
            else if (err.response?.status === 415) {
                errorMessage = '지원하지 않는 파일 형식입니다.';
            }
            else if (err.response?.status === 422) {
                console.error('422 에러 상세:', err.response.data);
                if (err.response?.data?.detail) {
                    if (Array.isArray(err.response.data.detail)) {
                        const errors = err.response.data.detail.map((item) => {
                            const field = item.loc?.[1] || '알 수 없는 필드';
                            const message = item.msg || '유효하지 않은 값';
                            return `${field}: ${message}`;
                        }).join('\n');
                        errorMessage = `입력 데이터 오류:\n${errors}`;
                    }
                    else {
                        errorMessage = `입력 데이터 오류: ${err.response.data.detail}`;
                    }
                }
                else {
                    errorMessage = '입력 데이터 형식이 올바르지 않습니다. 모든 필드를 확인해주세요.';
                }
            }
            else if (err.response?.status === 500) {
                errorMessage = '서버 내부 오류가 발생했습니다.';
            }
            else if (err.response?.data?.message) {
                errorMessage = err.response.data.message;
            }
            else if (err.code === 'ERR_NETWORK') {
                errorMessage = '서버에 연결할 수 없습니다. 서버가 실행 중인지 확인해주세요.';
            }
            setError(errorMessage);
        }
        finally {
            setLoading(false);
        }
    };
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSelectedDisasterType('');
        setSelectedPestType('');
        setError('');
        setSuccess('');
        setAiResult(null);
    };
    const renderRadioButtons = () => {
        if (activeTab === 'disaster') {
            return (_jsx(RadioSection, { children: _jsxs(RadioGroup, { children: [_jsxs(RadioOption, { children: [_jsx(RadioInput, { type: "radio", id: "earthquake", name: "disasterType", value: "earthquake", checked: selectedDisasterType === 'earthquake', onChange: (e) => setSelectedDisasterType(e.target.value) }), _jsx(RadioLabel, { htmlFor: "earthquake", children: "\uC9C0\uC9C4,\uC0B0\uBD88" })] }), _jsxs(RadioOption, { children: [_jsx(RadioInput, { type: "radio", id: "typhoon", name: "disasterType", value: "typhoon", checked: selectedDisasterType === 'typhoon', onChange: (e) => setSelectedDisasterType(e.target.value) }), _jsx(RadioLabel, { htmlFor: "typhoon", children: "\uD0DC\uD48D,\uD638\uC6B0" })] }), _jsxs(RadioOption, { children: [_jsx(RadioInput, { type: "radio", id: "snow", name: "disasterType", value: "snow", checked: selectedDisasterType === 'snow', onChange: (e) => setSelectedDisasterType(e.target.value) }), _jsx(RadioLabel, { htmlFor: "snow", children: "\uD3ED\uC124" })] })] }) }));
        }
        else if (activeTab === 'pest') {
            return (_jsx(RadioSection, { children: _jsxs(RadioGroup, { children: [_jsxs(RadioOption, { children: [_jsx(RadioInput, { type: "radio", id: "disease", name: "pestType", value: "disease", checked: selectedPestType === 'disease', onChange: (e) => setSelectedPestType(e.target.value) }), _jsx(RadioLabel, { htmlFor: "disease", children: "\uC9C8\uBCD1" })] }), _jsxs(RadioOption, { children: [_jsx(RadioInput, { type: "radio", id: "insect", name: "pestType", value: "insect", checked: selectedPestType === 'insect', onChange: (e) => setSelectedPestType(e.target.value) }), _jsx(RadioLabel, { htmlFor: "insect", children: "\uD574\uCDA9" })] })] }) }));
        }
        return null;
    };
    // 🔥 AI 분석 결과 표시 컴포넌트
    const renderAIResult = () => {
        if (!aiResult && !aiAnalyzing)
            return null;
        return (_jsx(AIResultSection, { children: aiAnalyzing ? (_jsxs(AIAnalyzingContainer, { children: [_jsx(AIIcon, { children: "\uD83E\uDD16" }), _jsxs(AIAnalyzingText, { children: ["AI\uAC00 \uC5C5\uB85C\uB4DC\uB41C \uC774\uBBF8\uC9C0\uB97C \uBD84\uC11D\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4...", _jsx("br", {}), _jsx("small", { style: { color: '#666' }, children: "\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694. (\uC57D 5\uCD08 \uC18C\uC694)" })] })] })) : aiResult ? (_jsxs(AIResultContainer, { children: [_jsx(AIIcon, { children: "\uD83C\uDF89" }), _jsxs(AIResultContent, { children: [_jsx(AIResultTitle, { children: "AI \uBD84\uC11D \uC644\uB8CC!" }), _jsxs(AIResultDetail, { children: [_jsx("strong", { children: "\uD0D0\uC9C0\uB41C \uBCD1\uD574\uCDA9:" }), " ", aiResult.primary_detection?.class_name || '감지되지 않음', _jsx("br", {}), _jsx("strong", { children: "\uC2E0\uB8B0\uB3C4:" }), " ", aiResult.primary_detection ? Math.round(aiResult.primary_detection.confidence * 100) : 0, "%", _jsx("br", {}), _jsx("strong", { children: "\uCD1D \uD0D0\uC9C0 \uC218:" }), " ", aiResult.total_detections, "\uAC1C", _jsx("br", {}), _jsx("strong", { children: "\uCE74\uD14C\uACE0\uB9AC:" }), " ", aiResult.category] })] })] })) : null }));
    };
    return (_jsxs(_Fragment, { children: [_jsx(Container, { children: _jsx(MainWrapper, { children: _jsxs(ContentWrapper, { children: [_jsx(Logo, {}), _jsx(Title, { children: "\uC2E0\uACE0\uD558\uAE30" }), _jsx(TapMenu, { activeTab: activeTab, onTabChange: handleTabChange }), renderRadioButtons(), _jsxs(LocationSection, { children: [_jsx(SectionTitle, { children: "\uC2E0\uACE0 \uC81C\uBAA9" }), _jsx(LocationInput, { type: "text", placeholder: "\uC2E0\uACE0 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694", value: title, onChange: (e) => setTitle(e.target.value) })] }), _jsx(FileUpload, { files: files, onFilesChange: setFiles }), _jsxs(LocationSection, { children: [_jsx(SectionTitle, { children: "\uC2E0\uACE0 \uBC1C\uC0DD\uC9C0\uC5ED" }), _jsxs(LocationInputWrapper, { children: [_jsx(LocationInput, { type: "text", placeholder: "\uC9C0\uC5ED\uCC3E\uAE30 \uBC84\uD2BC\uC744 \uB20C\uB7EC \uC9C0\uB3C4\uC5D0\uC11C \uC704\uCE58\uB97C \uC120\uD0DD\uD558\uC138\uC694", value: location, onChange: (e) => setLocation(e.target.value) }), _jsx(LocationButton, { onClick: handleLocationSearch, children: "\uD83D\uDDFA\uFE0F \uC9C0\uC5ED\uCC3E\uAE30" })] }), latitude && longitude && (_jsxs(LocationInfo, { children: ["\uD83D\uDCCD \uC120\uD0DD\uB41C \uC88C\uD45C: \uC704\uB3C4 ", latitude.toFixed(6), ", \uACBD\uB3C4 ", longitude.toFixed(6)] })), _jsxs(LocationHelpText, { children: ["\uD83D\uDCA1 \uC9C0\uC5ED\uCC3E\uAE30 \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uC9C0\uB3C4\uAC00 \uC5F4\uB9AC\uACE0, \uC6D0\uD558\uB294 \uC704\uCE58\uB97C \uD074\uB9AD\uD558\uC5EC \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", _jsx("br", {}), "\uD83D\uDD04 \uC9C0\uB3C4\uAC00 \uBCF4\uC774\uC9C0 \uC54A\uAC70\uB098 \uB85C\uB529\uC774 \uAE38\uC5B4\uC9C0\uBA74 \uD398\uC774\uC9C0 \uC0C8\uB85C\uACE0\uCE68\uC744 \uD574\uC8FC\uC138\uC694."] })] }), _jsxs(LocationSection, { children: [_jsx(SectionTitle, { children: "\uC2E0\uACE0 \uB0B4\uC6A9" }), _jsx(InputField, { type: "textarea", value: description, onChange: setDescription, placeholder: "\uC0C1\uC138 \uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694" })] }), activeTab === 'pest' && (_jsx(AINoticeSection, { children: _jsxs(AINoticeContainer, { children: [_jsx(AINoticeIcon, { children: "\uD83E\uDD16" }), _jsxs(AINoticeContent, { children: [_jsx(AINoticeTitle, { children: "AI \uC790\uB3D9 \uBD84\uC11D \uC11C\uBE44\uC2A4" }), _jsx(AINoticeText, { children: "\uBCD1\uD574\uCDA9 \uC2E0\uACE0 \uC2DC \uC5C5\uB85C\uB4DC\uB41C \uC774\uBBF8\uC9C0\uB97C YOLO AI\uAC00 \uC790\uB3D9\uC73C\uB85C \uBD84\uC11D\uD558\uC5EC \uBCD1\uD574\uCDA9 \uC885\uB958\uB97C \uC2DD\uBCC4\uD574\uB4DC\uB9BD\uB2C8\uB2E4. \uBD84\uC11D\uC5D0\uB294 \uC57D 5\uCD08\uAC00 \uC18C\uC694\uB429\uB2C8\uB2E4." })] })] }) })), _jsxs(SubmitButtonWrapper, { children: [error && _jsx(ErrorText, { children: error }), success && (_jsxs(SuccessTextWrapper, { children: [_jsx(SuccessText, { children: success }), _jsx(NavigationNotice, { children: "\uD83D\uDCCD \uC7A0\uC2DC \uD6C4 \uC2E0\uACE0 \uC0C1\uC138 \uD398\uC774\uC9C0\uB85C \uC790\uB3D9 \uC774\uB3D9\uB429\uB2C8\uB2E4..." })] })), renderAIResult(), _jsx(SubmitButton, { onClick: handleSubmit, disabled: loading || aiAnalyzing }), (loading || aiAnalyzing) && (_jsx(LoadingText, { children: loading && !aiAnalyzing ? '신고 제출 중...' :
                                            aiAnalyzing ? 'AI 분석 중...' :
                                                '처리 중...' }))] })] }) }) }), _jsx(FindLocal, { isOpen: isMapOpen, onClose: () => setIsMapOpen(false), onLocationSelect: handleLocationSelect })] }));
};
// 🔥 기존 스타일 컴포넌트들
const MainWrapper = styled.main `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0.1rem 0;

  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }

  @media (max-width: 480px) {
    padding: 1rem 0;
  }
`;
const ContentWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1400px;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    max-width: 1024px;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.05rem;
  }
`;
const Title = styled.h1 `
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.01rem 0;
  margin-left: 1.3rem;
  color: black;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin: 0.4rem 0;
    margin-left: 0.5rem;
  }
`;
const RadioSection = styled.section `
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
`;
const RadioGroup = styled.div `
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const RadioOption = styled.div `
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const RadioInput = styled.input `
  width: 1.2rem;
  height: 1.2rem;
  accent-color: #FBBF77;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 1.1rem;
    height: 1.1rem;
  }
`;
const RadioLabel = styled.label `
  font-size: 1rem;
  font-weight: 500;
  color: black;
  cursor: pointer;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
const LocationSection = styled.section `
  width: 100%;
  margin-bottom: 2rem;
  background-color: #FFEFD5;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;
const SectionTitle = styled.h2 `
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  margin-bottom: 0.8rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
const LocationInputWrapper = styled.div `
  display: flex;
  gap: 0.5rem;
  flex-direction: row;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 0.75rem;
  }

  @media (max-width: 768px) {
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;
const LocationInput = styled.input `
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: white;
  color: black;
  box-sizing: border-box;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #FBBF77;
    box-shadow: 0 0 0 2px rgba(251, 191, 119, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;
const LocationButton = styled.button `
  padding: 0.75rem 1rem;
  background-color: #FBBF77;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #E6AB65;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 0.875rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.75rem;
    font-size: 0.95rem;
  }
`;
const LocationInfo = styled.div `
  font-size: 0.85rem;
  color: #007bff;
  margin-top: 0.5rem;
  font-weight: 500;
  padding: 8px 12px;
  background-color: #e7f3ff;
  border-radius: 4px;
  border-left: 4px solid #007bff;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
const LocationHelpText = styled.div `
  font-size: 0.8rem;
  color: #666;
  margin-top: 0.5rem;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;
// 🔥 AI 관련 스타일 컴포넌트들
const AINoticeSection = styled.section `
  width: 100%;
  margin-bottom: 2rem;
`;
const AINoticeContainer = styled.div `
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
  border: 2px solid #2196f3;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 2px 8px rgba(33, 150, 243, 0.1);

  @media (max-width: 768px) {
    gap: 10px;
    padding: 14px 16px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 12px 14px;
  }
`;
const AINoticeIcon = styled.div `
  font-size: 24px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
const AINoticeContent = styled.div `
  flex: 1;
`;
const AINoticeTitle = styled.h3 `
  font-size: 16px;
  font-weight: 600;
  color: #1976d2;
  margin: 0 0 6px 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
const AINoticeText = styled.p `
  font-size: 14px;
  color: #424242;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
const AIResultSection = styled.div `
  width: 100%;
  margin: 1rem 0;
`;
const AIAnalyzingContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #fff3e0 0%, #fce4ec 100%);
  border: 2px solid #ff9800;
  border-radius: 12px;
  padding: 16px 20px;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.7; }
    100% { opacity: 1; }
  }

  @media (max-width: 768px) {
    gap: 10px;
    padding: 14px 16px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 12px 14px;
    flex-direction: column;
    text-align: center;
  }
`;
const AIResultContainer = styled.div `
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: linear-gradient(135deg, #e8f5e8 0%, #f3e5f5 100%);
  border: 2px solid #4caf50;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.1);

  @media (max-width: 768px) {
    gap: 10px;
    padding: 14px 16px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 12px 14px;
    flex-direction: column;
    text-align: center;
  }
`;
const AIIcon = styled.div `
  font-size: 24px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
const AIAnalyzingText = styled.div `
  font-size: 14px;
  color: #e65100;
  font-weight: 500;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
const AIResultContent = styled.div `
  flex: 1;
`;
const AIResultTitle = styled.h3 `
  font-size: 16px;
  font-weight: 600;
  color: #2e7d32;
  margin: 0 0 8px 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
const AIResultDetail = styled.div `
  font-size: 14px;
  color: #424242;
  line-height: 1.6;

  strong {
    color: #2e7d32;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
const SubmitButtonWrapper = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.01rem;
  margin-bottom: 1rem;
`;
const ErrorText = styled.div `
  color: #dc3545;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-align: center;
  padding: 8px 12px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;
const SuccessTextWrapper = styled.div `
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
const SuccessText = styled.div `
  color: #155724;
  font-size: 0.9rem;
  text-align: center;
  padding: 8px 12px;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  white-space: pre-line;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;
const NavigationNotice = styled.div `
  color: #0066cc;
  font-size: 0.85rem;
  text-align: center;
  padding: 6px 12px;
  background-color: #e6f3ff;
  border: 1px solid #b3d9ff;
  border-radius: 4px;
  font-weight: 500;
  width: 100%;
  box-sizing: border-box;
  animation: fadeInOut 2s infinite;

  @keyframes fadeInOut {
    0% { opacity: 0.7; }
    50% { opacity: 1; }
    100% { opacity: 0.7; }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
const LoadingText = styled.div `
  color: #666;
  font-size: 0.9rem;
  margin-top: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;
export default Report;
