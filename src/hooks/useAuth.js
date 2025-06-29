// src/hooks/useAuth.ts
import { useState } from 'react';
import { authAPI } from '../api/auth';
export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const register = async (userData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await authAPI.register(userData);
            return { success: true, data: response };
        }
        catch (err) {
            const errorMessage = err.response?.data?.message || '회원가입 중 오류가 발생했습니다.';
            setError(errorMessage);
            return { success: false, error: errorMessage };
        }
        finally {
            setLoading(false);
        }
    };
    return {
        register,
        loading,
        error,
        clearError: () => setError(null),
    };
};
