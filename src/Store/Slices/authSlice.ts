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
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  loading: false,
  error: null,
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
      // localStorage에서 토큰 제거
      localStorage.removeItem('accessToken');
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    initializeAuth: (state) => {
      // 페이지 새로고침 시 localStorage에서 토큰 확인
      const token = localStorage.getItem('accessToken');
      if (token) {
        state.token = token;
        state.isAuthenticated = true;
        // 사용자 정보는 별도 API 호출로 가져와야 함
      }
    },
    clearError: (state) => {
      state.error = null;
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
} = authSlice.actions;

export default authSlice.reducer;
