// src/types/auth.ts
export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
    phone_num: string;
    local_id: number;
  }
  
  export interface RegisterResponse {
    message: string;
  }
  
  export interface ApiError {
    message: string;
    detail?: string;
  }
  