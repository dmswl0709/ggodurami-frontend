// src/api/auth.ts
import { apiClient } from './config';
export const authAPI = {
    // 회원가입
    register: async (data) => {
        const response = await apiClient.post('/register', data);
        return response.data;
    },
};
