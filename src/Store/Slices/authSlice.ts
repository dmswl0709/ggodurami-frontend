// store/slices/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface User {
  user_id: string;
  username: string;
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  likedPosts: { [postId: string]: boolean }; // 좋아요 상태 추가
}

// localStorage에서 좋아요 상태 불러오기
const loadLikedPostsFromStorage = (): { [postId: string]: boolean } => {
  try {
    const saved = localStorage.getItem('likedPosts');
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error('좋아요 상태 로드 실패:', error);
    return {};
  }
};

// localStorage에 좋아요 상태 저장하기
const saveLikedPostsToStorage = (likedPosts: { [postId: string]: boolean }) => {
  try {
    localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
  } catch (error) {
    console.error('좋아요 상태 저장 실패:', error);
  }
};

// JWT 토큰에서 user_id 추출하는 함수
const getUserIdFromToken = (token: string): string => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.user_id || payload.sub || '';
  } catch {
    return '';
  }
};

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  loading: false,
  error: null,
  likedPosts: loadLikedPostsFromStorage(), // localStorage에서 초기값 로드
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<{ user?: User; token: string }>) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.error = null;
      
      // 사용자 정보가 제공된 경우 설정
      if (action.payload.user) {
        state.user = action.payload.user;
        localStorage.setItem('userInfo', JSON.stringify(action.payload.user));
      } else {
        // 토큰에서 user_id만 추출하여 임시 사용자 정보 생성
        const userId = getUserIdFromToken(action.payload.token);
        state.user = {
          user_id: userId,
          username: 'loading...', // 나중에 업데이트됨
          email: 'loading...',   // 나중에 업데이트됨
        };
      }
      
      // localStorage에 토큰 저장
      localStorage.setItem('accessToken', action.payload.token);
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = null;
      state.likedPosts = {}; // 로그아웃 시 좋아요 상태 초기화
      
      // localStorage에서 모든 정보 제거
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userInfo');
      localStorage.removeItem('likedPosts'); // 좋아요 상태도 제거
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    // 사용자 정보 업데이트를 위한 새로운 액션
    setUserInfo: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    initializeAuth: (state) => {
      // 페이지 새로고침 시 localStorage에서 토큰 확인
      const token = localStorage.getItem('accessToken');
      const userInfo = localStorage.getItem('userInfo');
      
      if (token && userInfo) {
        try {
          const user = JSON.parse(userInfo);
          state.token = token;
          state.user = user;
          state.isAuthenticated = true;
          
          // 좋아요 상태도 복원
          state.likedPosts = loadLikedPostsFromStorage();
        } catch (error) {
          // 파싱 오류 시 로그아웃 처리
          localStorage.removeItem('accessToken');
          localStorage.removeItem('userInfo');
          localStorage.removeItem('likedPosts');
        }
      } else if (token) {
        // 토큰만 있고 사용자 정보가 없는 경우 토큰에서 user_id 추출
        try {
          const userId = getUserIdFromToken(token);
          if (userId) {
            state.token = token;
            state.isAuthenticated = true;
            state.user = {
              user_id: userId,
              username: 'loading...', // API에서 가져올 예정
              email: 'loading...',
            };
            state.likedPosts = loadLikedPostsFromStorage();
          } else {
            localStorage.removeItem('accessToken');
          }
        } catch (error) {
          localStorage.removeItem('accessToken');
        }
      } else {
        // 토큰이 없으면 좋아요 상태만 로드 (비로그인 사용자도 볼 수 있도록)
        state.likedPosts = {};
        localStorage.removeItem('likedPosts');
      }
    },
    clearError: (state) => {
      state.error = null;
    },
    // 좋아요 상태 관리 액션들 추가
    setLikeStatus: (state, action: PayloadAction<{ postId: string; liked: boolean }>) => {
      const { postId, liked } = action.payload;
      state.likedPosts[postId] = liked;
      
      console.log('🔧 setLikeStatus 액션 실행:');
      console.log('  - postId:', postId);
      console.log('  - liked:', liked);
      console.log('  - 업데이트된 likedPosts:', state.likedPosts);
      
      // localStorage에 즉시 저장 (Redux Toolkit에서는 직접 저장해야 함)
      try {
        const likedPostsToSave = { ...state.likedPosts };
        const jsonString = JSON.stringify(likedPostsToSave);
        localStorage.setItem('likedPosts', jsonString);
        console.log('✅ localStorage 저장 성공:', jsonString);
        
        // 저장 확인
        const saved = localStorage.getItem('likedPosts');
        console.log('🔍 저장 확인:', saved);
      } catch (error) {
        console.error('❌ localStorage 저장 실패:', error);
      }
    },
    removeLikeStatus: (state, action: PayloadAction<string>) => {
      const postId = action.payload;
      delete state.likedPosts[postId];
      
      // localStorage에 즉시 저장
      saveLikedPostsToStorage(state.likedPosts);
      
      console.log('좋아요 상태 제거됨:', postId, 'localStorage 업데이트됨');
    },
    // 여러 게시글의 좋아요 상태를 한번에 설정 (선택사항)
    setMultipleLikeStatus: (state, action: PayloadAction<{ [postId: string]: boolean }>) => {
      state.likedPosts = { ...state.likedPosts, ...action.payload };
      
      // localStorage에 즉시 저장
      saveLikedPostsToStorage(state.likedPosts);
    },
    // 모든 좋아요 상태 초기화 (선택사항)
    clearAllLikeStatus: (state) => {
      state.likedPosts = {};
      
      // localStorage에서도 제거
      localStorage.removeItem('likedPosts');
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  setUser,
  setUserInfo,        // 새로 추가된 액션
  initializeAuth,
  clearError,
  setLikeStatus,        // 좋아요 상태 설정
  removeLikeStatus,     // 좋아요 상태 제거
  setMultipleLikeStatus, // 여러 좋아요 상태 설정
  clearAllLikeStatus,   // 모든 좋아요 상태 초기화
} = authSlice.actions;

// 로그인 API 호출 함수 (컴포넌트에서 사용)
export const loginUser = async (credentials: { email: string; password: string }): Promise<string> => {
  const response = await fetch('http://localhost:8000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || '로그인 실패');
  }

  const data = await response.json();
  return data.access_token; // 백엔드에서 access_token으로 반환
};

// 사용자 정보 가져오는 API 함수
export const fetchUserInfo = async (token: string): Promise<User> => {
  const response = await fetch('http://localhost:8000/mypage', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('사용자 정보를 가져올 수 없습니다');
  }

  const data = await response.json();
  const userId = getUserIdFromToken(token);
  
  return {
    user_id: userId,
    username: data.mypage.username,
    email: data.mypage.email,
  };
};

export default authSlice.reducer;