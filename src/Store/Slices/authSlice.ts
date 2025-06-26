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
    loginSuccess: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
      
      // localStorage에 토큰과 사용자 정보 저장
      localStorage.setItem('accessToken', action.payload.token);
      localStorage.setItem('userInfo', JSON.stringify(action.payload.user));
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
  initializeAuth,
  clearError,
  setLikeStatus,        // 좋아요 상태 설정
  removeLikeStatus,     // 좋아요 상태 제거
  setMultipleLikeStatus, // 여러 좋아요 상태 설정
  clearAllLikeStatus,   // 모든 좋아요 상태 초기화
} = authSlice.actions;

export default authSlice.reducer;