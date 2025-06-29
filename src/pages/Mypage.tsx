// pages/Mypage.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Input } from '../Components/Input/Input';
import { Logo } from '../Components/Logo/Logo';

// 지역 코드 정의
const LOCAL_CODES = {
  1: "서울",
  2: "부산광역시",
  3: "대구광역시",
  4: "인천광역시",
  5: "광주광역시",
  6: "대전광역시",
  7: "울산광역시",
  8: "세종특별자치시",
  9: "경기도",
  11: "충청북도",
  12: "충청남도",
  13: "전라북도",
  14: "전라남도",
  15: "경상북도",
  16: "경상남도",
  17: "제주특별자치도",
};

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #FFEFD5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
  margin-bottom: 0.1px;
  
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const LogoContainer = styled.div`
  margin-top: 20px;  
  margin-bottom: 0px;
  
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

const MyPageContainer = styled.div`
  background-color: #FFEFD5;
  border-radius: 16px;
  padding: 10px 40px 40px 40px;
  width: 100%;
  max-width: 500px;
  
  @media (max-width: 768px) {
    padding: 10px 20px 30px 20px;
    margin: 0 10px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 15px 25px 15px;
  }
`;

const UserIcon = styled.div`
  width: 80px;
  height: 80px;
  border: 3px solid #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -10px auto 20px;
  background-color: #f9f9f9;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin: -10px auto 20px;
  }
  
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    margin: -10px auto 20px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PersonIcon = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #333;
  border-radius: 50% 50% 0 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 35px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 30px;
    border: 2px solid #333;
    border-radius: 30px 30px 0 0;
    border-top: none;
  }
  
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    
    &::before {
      top: 30px;
      width: 50px;
      height: 25px;
    }
  }
  
  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    
    &::before {
      top: 25px;
      width: 45px;
      height: 22px;
    }
  }
`;

const UserTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const EditableSection = styled.div`
  margin-bottom: 20px;
`;

const SectionLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const EditableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
  color: #333;
  
  &:focus {
    outline: none;
    border-color: #4CAF50;
    background-color: white;
  }
  
  &:disabled {
    background-color: #f5f5f5;
    color: #666;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 15px;
  }
`;

const StyledSelect = styled.select`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
  color: #333;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #4CAF50;
    background-color: white;
  }
  
  &:disabled {
    background-color: #f5f5f5;
    color: #666;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 15px;
  }
`;

const EditButton = styled.button`
  padding: 12px 20px;
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background-color: #e0a768;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 13px;
  }
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const SaveButton = styled.button`
  flex: 1;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #45a049;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const CancelButton = styled.button`
  flex: 1;
  padding: 12px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #5a6268;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 18px;
  color: #666;
`;

const ErrorMessage = styled.div`
  background-color: #ffebee;
  color: #c62828;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
`;

const SuccessMessage = styled.div`
  background-color: #e8f5e8;
  color: #2e7d32;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
`;

const InfoText = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 5px;
`;

interface UserData {
  username: string;
  email: string;
  region_name: string;
  crop_name: string;
  local_id: number;
  profile_image?: string;
}

interface ApiResponse {
  mypage: UserData;
}

interface UpdateRequest {
  crop_name: string;
  local_id: number;
}

// API 설정
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://baekend.onrender.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터: JWT 토큰 자동 추가
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') || localStorage.getItem('accessToken') || localStorage.getItem('authToken');
    console.log('🔑 사용할 토큰:', token);
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('📤 Authorization 헤더:', config.headers.Authorization);
    } else {
      console.warn('⚠️ 토큰이 없습니다!');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const Mypage: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    username: '',
    email: '',
    region_name: '',
    crop_name: '',
    local_id: 0,
    profile_image: ''
  });

  const [originalData, setOriginalData] = useState<UserData>({
    username: '',
    email: '',
    region_name: '',
    crop_name: '',
    local_id: 0,
    profile_image: ''
  });

  const [editingRegion, setEditingRegion] = useState(false);
  const [editingCrop, setEditingCrop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  // 지역 이름으로 지역 ID 찾기
  const getLocalIdByName = (regionName: string): number => {
    const entry = Object.entries(LOCAL_CODES).find(([_, name]) => name === regionName);
    return entry ? parseInt(entry[0]) : 0;
  };

  // 지역 ID로 지역 이름 찾기
  const getRegionNameById = (localId: number): string => {
    return LOCAL_CODES[localId as keyof typeof LOCAL_CODES] || '';
  };

  // 사용자 정보 가져오기
  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      setError('');
      
      const token = localStorage.getItem('token') || localStorage.getItem('accessToken') || localStorage.getItem('authToken');
      console.log('🔍 현재 저장된 토큰들:');
      console.log('token:', localStorage.getItem('token'));
      console.log('accessToken:', localStorage.getItem('accessToken'));
      console.log('authToken:', localStorage.getItem('authToken'));
      
      if (!token) {
        setError('로그인이 필요합니다. 다시 로그인해주세요.');
        return;
      }
      
      console.log('API 요청 URL:', `${API_BASE_URL}/mypage`);
      console.log('사용할 토큰:', token);
      
      const response = await api.get<ApiResponse>('/mypage');
      console.log('✅ API 응답 성공:', response.data);
      console.log('📊 mypage 데이터 상세:', JSON.stringify(response.data.mypage, null, 2));
      
      const fetchedData = response.data.mypage;
      
      console.log('🔍 각 필드 확인:');
      console.log('username:', fetchedData.username);
      console.log('email:', fetchedData.email);
      console.log('region_name:', fetchedData.region_name);
      console.log('crop_name:', fetchedData.crop_name);
      console.log('local_id:', fetchedData.local_id);
      console.log('profile_image:', fetchedData.profile_image);
      
      setUserData(fetchedData);
      setOriginalData(fetchedData);
    } catch (err) {
      console.error('❌ 사용자 정보 조회 실패:', err);
      if (axios.isAxiosError(err)) {
        console.error('응답 상태:', err.response?.status);
        console.error('응답 데이터:', err.response?.data);
        console.error('요청 헤더:', err.config?.headers);
        
        if (err.response?.status === 401) {
          setError('인증이 만료되었습니다. 다시 로그인해주세요.');
          localStorage.removeItem('token');
          localStorage.removeItem('accessToken');
          localStorage.removeItem('authToken');
        } else if (err.response?.status === 500) {
          setError('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } else {
          setError(`사용자 정보를 불러오는데 실패했습니다. (${err.response?.status})`);
        }
      } else {
        setError('네트워크 오류가 발생했습니다.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // 사용자 정보 업데이트
  const updateUserData = async () => {
    try {
      setIsSaving(true);
      setError('');
      setSuccessMessage('');

      // PATCH API 명세에 맞게 데이터 구성
      const updateData: UpdateRequest = {
        crop_name: userData.crop_name,
        local_id: userData.local_id
      };

      console.log('📤 업데이트 요청 데이터:', updateData);

      const response = await api.patch('/mypage', updateData);
      console.log('✅ 업데이트 응답:', response.data);
      
      // 업데이트 성공 후 원본 데이터도 갱신
      setOriginalData({
        ...originalData,
        crop_name: userData.crop_name,
        local_id: userData.local_id,
        region_name: getRegionNameById(userData.local_id)
      });
      
      setSuccessMessage('정보가 성공적으로 업데이트되었습니다.');
      setEditingRegion(false);
      setEditingCrop(false);
      
      // 3초 후 성공 메시지 숨기기
      setTimeout(() => setSuccessMessage(''), 3000);
      
    } catch (err) {
      console.error('❌ 사용자 정보 업데이트 실패:', err);
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          setError('인증이 만료되었습니다. 다시 로그인해주세요.');
        } else if (err.response?.status === 400) {
          setError('입력한 정보가 올바르지 않습니다.');
        } else {
          setError('정보 업데이트에 실패했습니다.');
        }
      } else {
        setError('네트워크 오류가 발생했습니다.');
      }
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleInputChange = (field: keyof UserData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocalId = parseInt(e.target.value);
    const selectedRegionName = getRegionNameById(selectedLocalId);
    
    setUserData(prev => ({
      ...prev,
      local_id: selectedLocalId,
      region_name: selectedRegionName
    }));
  };

  const handleRegionEdit = () => {
    setEditingRegion(!editingRegion);
    if (editingRegion) {
      // 편집 취소 시 원래 데이터로 복원
      setUserData(prev => ({
        ...prev,
        local_id: originalData.local_id,
        region_name: originalData.region_name
      }));
    }
  };

  const handleCropEdit = () => {
    setEditingCrop(!editingCrop);
    if (editingCrop) {
      // 편집 취소 시 원래 데이터로 복원
      setUserData(prev => ({
        ...prev,
        crop_name: originalData.crop_name
      }));
    }
  };

  const handleSave = async () => {
    await updateUserData();
  };

  const handleCancel = () => {
    setUserData(originalData);
    setEditingRegion(false);
    setEditingCrop(false);
    setError('');
    setSuccessMessage('');
  };

  const hasChanges = () => {
    return userData.crop_name !== originalData.crop_name || 
           userData.local_id !== originalData.local_id;
  };

  if (isLoading) {
    return (
      <PageContainer>
        <Header>
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </Header>
        <LoadingSpinner>사용자 정보를 불러오는 중...</LoadingSpinner>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Header>
      
      <MyPageContainer>
        <UserIcon>
          {userData.profile_image ? (
            <ProfileImage 
              src={userData.profile_image} 
              alt="프로필 사진"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parentElement = e.currentTarget.parentElement;
                if (parentElement) {
                  const defaultIcon = document.createElement('div');
                  defaultIcon.innerHTML = '<div style="width: 40px; height: 40px; border: 2px solid #333; border-radius: 50% 50% 0 0; position: relative;"></div>';
                  parentElement.appendChild(defaultIcon);
                }
              }}
            />
          ) : (
            <PersonIcon />
          )}
        </UserIcon>
        
        <UserTitle>{userData.username || 'USER'}</UserTitle>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        
        <Input
          label="이름"
          type="text"
          placeholder="이름을 입력하세요"
          value={userData.username}
          onChange={handleInputChange('username')}
         // disabled={true}
        />
        
        <Input
          label="이메일"
          type="email"
          placeholder="이메일을 입력하세요"
          value={userData.email}
          onChange={handleInputChange('email')}
         // disabled={true}
        />
        
        {/* 지역 편집 섹션 */}
        <EditableSection>
          <SectionLabel>지역</SectionLabel>
          <EditableContainer>
            <InputContainer>
              {editingRegion ? (
                <StyledSelect
                  value={userData.local_id}
                  onChange={handleRegionChange}
                >
                  <option value={0}>지역을 선택하세요</option>
                  {Object.entries(LOCAL_CODES).map(([id, name]) => (
                    <option key={id} value={parseInt(id)}>
                      {name} (지역번호: {id})
                    </option>
                  ))}
                </StyledSelect>
              ) : (
                <StyledInput
                  type="text"
                  value={`${userData.region_name} (지역번호: ${userData.local_id})`}
                  disabled={true}
                />
              )}
              <EditButton onClick={handleRegionEdit} disabled={isSaving}>
                {editingRegion ? '취소' : '지역변경'}
              </EditButton>
            </InputContainer>
            {editingRegion && (
              <InfoText>
                💡 지역을 선택하면 지역번호가 자동으로 설정됩니다.
              </InfoText>
            )}
          </EditableContainer>
        </EditableSection>
        
        {/* 재배 작물 편집 섹션 */}
        <EditableSection>
          <SectionLabel>재배 작물</SectionLabel>
          <EditableContainer>
            <InputContainer>
              <StyledInput
                type="text"
                placeholder="재배하는 작물을 입력하세요"
                value={userData.crop_name}
                onChange={handleInputChange('crop_name')}
                disabled={!editingCrop}
              />
              <EditButton onClick={handleCropEdit} disabled={isSaving}>
                {editingCrop ? '취소' : '작물변경'}
              </EditButton>
            </InputContainer>
            {editingCrop && (
              <InfoText>
                💡 현재 재배하고 있는 주요 작물을 입력해주세요.
              </InfoText>
            )}
          </EditableContainer>
        </EditableSection>

        {/* 저장/취소 버튼 - 변경사항이 있을 때만 표시 */}
        {(editingRegion || editingCrop) && hasChanges() && (
          <ActionButtonsContainer>
            <CancelButton onClick={handleCancel} disabled={isSaving}>
              취소
            </CancelButton>
            <SaveButton onClick={handleSave} disabled={isSaving}>
              {isSaving ? '저장 중...' : '저장'}
            </SaveButton>
          </ActionButtonsContainer>
        )}
      </MyPageContainer>
    </PageContainer>
  );
};

export default Mypage;