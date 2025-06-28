// pages/CommunityDetail.tsx (댓글 수정/삭제 + 게시글 삭제 완전한 코드)
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Logo } from '../Components/Logo/Logo';
import { HeartButton } from '../Components/HeartButton/HeartButton';
import { 
  loginSuccess, 
  logout,
  setLikeStatus,
  removeLikeStatus,
  initializeAuth,
  setUserInfo,
  fetchUserInfo
} from '../Store/slices/authSlice';
import type { RootState } from '../Store/store';

// 타입 정의
interface PostDetailData {
  id: string;
  user_id: string;
  username: string;
  title: string;
  content: string;
  tags: string[];
  created_at: string;
  likes?: number;
  is_liked?: boolean;
}

interface CommentData {
  id: string;
  user_id: string;
  username: string;
  content: string;
  created_at: string;
}

interface LikeResponse {
  message: string;
  liked: boolean;
  total_likes: number;
}

interface LikeStatusResponse {
  post_id: string;
  total_likes: number;
  user_liked: boolean | null;
}

interface MyLikeStatusResponse {
  post_id: string;
  user_id: string;
  liked: boolean;
  total_likes: number;
}

interface CommentsResponse {
  post_id: string;
  comments: CommentData[];
  total: number;
}

interface CommentCreateRequest {
  post_id: string;
  content: string;
}

interface CommentUpdateRequest {
  content: string;
}

interface CommentCreateResponse {
  id: string;
  user_id: string;
  username: string;
  content: string;
  post_id: string;
  created_at: string;
}

interface CommentUpdateResponse {
  id: string;
  user_id: string;
  username: string;
  content: string;
  post_id: string;
  created_at: string;
  updated_at: string;
}

interface DeleteResponse {
  message: string;
}

// API 설정
const BASE_URL = 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 - JWT 토큰 자동 추가
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('🔑 Authorization 헤더 추가:', `Bearer ${token.substring(0, 20)}...`);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 - 401 오류 처리
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log('❌ 401 오류 - 토큰 제거');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userInfo');
      localStorage.removeItem('likedPosts');
    }
    return Promise.reject(error);
  }
);

// API 함수들
const getPostDetail = async (postId: string): Promise<PostDetailData> => {
  try {
    const response = await apiClient.get<PostDetailData>(`/posts/${postId}`);
    return response.data;
  } catch (error: any) {
    console.error('게시글 조회 오류:', error);
    throw error;
  }
};

const toggleLike = async (postId: string): Promise<LikeResponse> => {
  try {
    const response = await apiClient.post<LikeResponse>(`/posts/${postId}/like`);
    return response.data;
  } catch (error: any) {
    console.error('좋아요 토글 오류:', error);
    throw error;
  }
};

const getMyLikeStatus = async (postId: string): Promise<MyLikeStatusResponse> => {
  try {
    console.log('🎯 개별 좋아요 상태 조회 시도:', postId);
    
    const token = localStorage.getItem('accessToken');
    if (!token) {
      throw new Error('토큰이 없습니다');
    }
    
    const response = await apiClient.get<MyLikeStatusResponse>(`/posts/${postId}/like-status/me`);
    console.log('✅ 개별 좋아요 상태 응답:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('❌ 내 좋아요 상태 조회 오류:', error);
    console.error('오류 상세:', {
      status: error.response?.status,
      message: error.response?.data?.detail || error.message,
      headers: error.config?.headers
    });
    throw error;
  }
};

const getLikeStatus = async (postId: string): Promise<LikeStatusResponse> => {
  try {
    const response = await apiClient.get<LikeStatusResponse>(`/posts/${postId}/like-status`);
    return response.data;
  } catch (error: any) {
    console.error('좋아요 상태 조회 오류:', error);
    throw error;
  }
};

const createComment = async (data: CommentCreateRequest): Promise<CommentCreateResponse> => {
  try {
    const response = await apiClient.post<CommentCreateResponse>('/comments', data);
    return response.data;
  } catch (error: any) {
    console.error('댓글 작성 오류:', error);
    throw error;
  }
};

const getComments = async (postId: string): Promise<CommentsResponse> => {
  try {
    const response = await apiClient.get<CommentsResponse>(`/posts/${postId}/comments`);
    return response.data;
  } catch (error: any) {
    console.error('댓글 조회 오류:', error);
    throw error;
  }
};

// 🔥 댓글 수정 API
const updateComment = async (commentId: string, data: CommentUpdateRequest): Promise<CommentUpdateResponse> => {
  try {
    const response = await apiClient.patch<CommentUpdateResponse>(`/comments/${commentId}`, data);
    return response.data;
  } catch (error: any) {
    console.error('댓글 수정 오류:', error);
    throw error;
  }
};

// 🔥 댓글 삭제 API
const deleteComment = async (commentId: string): Promise<DeleteResponse> => {
  try {
    const response = await apiClient.delete<DeleteResponse>(`/comments/${commentId}`);
    return response.data;
  } catch (error: any) {
    console.error('댓글 삭제 오류:', error);
    throw error;
  }
};

const deletePost = async (postId: string): Promise<DeleteResponse> => {
  try {
    const response = await apiClient.delete<DeleteResponse>(`/posts/${postId}`);
    return response.data;
  } catch (error: any) {
    console.error('게시글 삭제 오류:', error);
    throw error;
  }
};

const getPostDetailPublic = async (postId: string): Promise<PostDetailData> => {
  try {
    const response = await axios.get<PostDetailData>(`${BASE_URL}/posts/${postId}`);
    return response.data;
  } catch (error: any) {
    console.error('공개 게시글 조회 오류:', error);
    throw error;
  }
};

const getLikeStatusPublic = async (postId: string): Promise<LikeStatusResponse> => {
  try {
    const response = await axios.get<LikeStatusResponse>(`${BASE_URL}/posts/${postId}/like-status`);
    return response.data;
  } catch (error: any) {
    console.error('공개 좋아요 상태 조회 오류:', error);
    throw error;
  }
};

const getCommentsPublic = async (postId: string): Promise<CommentsResponse> => {
  try {
    const response = await axios.get<CommentsResponse>(`${BASE_URL}/posts/${postId}/comments`);
    return response.data;
  } catch (error: any) {
    console.error('공개 댓글 조회 오류:', error);
    throw error;
  }
};

// JWT 토큰에서 user_id를 추출하는 함수
const getCurrentUserIdFromToken = (): string | null => {
  const token = localStorage.getItem('accessToken');
  if (!token) return null;
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.user_id || payload.sub || null;
  } catch {
    return null;
  }
};

// JWT 토큰 유효성 검사 함수
const isTokenValid = (token: string): boolean => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Date.now() / 1000;
    return payload.exp > currentTime;
  } catch {
    return false;
  }
};

// 사용자 정보를 mypage API에서 가져오는 함수
const fetchCurrentUserInfo = async (): Promise<any> => {
  const token = localStorage.getItem('accessToken');
  if (!token) return null;

  try {
    const response = await apiClient.get('/mypage');
    return response.data.mypage;
  } catch (error) {
    console.error('사용자 정보 가져오기 실패:', error);
    return null;
  }
};

// 스타일 컴포넌트들 (동일하므로 생략)
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #FFEFD5;
  padding: 5px 0;
`;

const Header = styled.div`
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

const LogoContainer = styled.div`
  margin-top: 2px;
  margin-bottom: -50px;
  
  @media (max-width: 768px) {
    margin-top: 1px;
  }
  
  @media (max-width: 480px) {
    margin-top: 1px;
  }
`;

const HeaderTitle = styled.h1`
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

const ContentWrapper = styled.div`
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

const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #666;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #dc3545;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  margin: 20px 0;
`;

const PostContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  border: 1px solid #ddd;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const PostHeader = styled.div`
  background-color: #FBBF77;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const PostHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const PostTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
  flex: 1;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  margin-left: 10px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #c82333;
  }
  
  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 11px;
  }
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #666;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`;

const PostContent = styled.div`
  margin-bottom: 30px;
`;

const ContentText = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 10px;
  white-space: pre-wrap;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 15px 0;
`;

const Tag = styled.span`
  background-color: #FFEFD5;
  color: #8B4513;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  border: 1px solid #ddd;
`;

const CommentSection = styled.div`
  margin-top: 40px;
`;

const CommentHeader = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CommentItem = styled.div`
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const CommentMeta = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
`;

const CommentText = styled.div`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

// 🔥 댓글 수정/삭제 관련 스타일 컴포넌트
const CommentActionButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const CommentActionButton = styled.button`
  background: none;
  border: none;
  color: #666;
  font-size: 12px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f0f0f0;
    color: #333;
  }
  
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

const EditCommentInput = styled.textarea`
  width: 100%;
  min-height: 60px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 14px;
  resize: vertical;
  margin-bottom: 8px;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #FBBF77;
  }
`;

const EditActions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

const EditButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const SaveButton = styled(EditButton)`
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

const CancelButton = styled(EditButton)`
  background-color: #6c757d;
  color: white;
  
  &:hover {
    background-color: #5a6268;
  }
`;

const CommentForm = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const CommentInput = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  resize: vertical;
  font-family: inherit;
  font-size: 14px;
  background-color: white;
  color: #333;
  box-sizing: border-box;
  
  &::placeholder {
    color: #999;
  }
  
  &:focus {
    outline: none;
    border-color: #FBBF77;
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 10px;
  }
`;

const CommentActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }
`;

const CharCount = styled.span`
  font-size: 12px;
  color: #999;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #E6AB65;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  gap: 10px;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const ListButton = styled(ActionButton)`
  background-color: #FBBF77;
  color: white;
  
  &:hover {
    background-color: #E6AB65;
  }
`;

const ReplyButton = styled(ActionButton)`
  background-color: #FBBF77;
  color: white;
  
  &:hover {
    background-color: #E6AB65;
  }
`;

const LoginPrompt = styled.div`
  background-color: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 8px;
  padding: 16px;
  margin: 20px 0;
  text-align: center;
  
  p {
    margin: 0 0 12px 0;
    color: #856404;
  }
  
  button {
    background-color: #FBBF77;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    margin: 0 4px;
    
    &:hover {
      background-color: #E6AB65;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const ModalTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
`;

const ModalMessage = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 25px;
  text-align: center;
  line-height: 1.5;
`;

const ModalButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const CancelModalButton = styled(ModalButton)`
  background-color: #6c757d;
  color: white;
  
  &:hover {
    background-color: #5a6268;
  }
`;

const ConfirmModalButton = styled(ModalButton)`
  background-color: #dc3545;
  color: white;
  
  &:hover {
    background-color: #c82333;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const CommunityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Redux state에서 인증 정보와 좋아요 상태 가져오기
  const { isAuthenticated, user, likedPosts } = useSelector((state: RootState) => state.auth);
  
  const [post, setPost] = useState<PostDetailData | null>(null);
  const [comments, setComments] = useState<CommentData[]>([]);
  const [commentText, setCommentText] = useState('');
  const [likeCount, setLikeCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [commentLoading, setCommentLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // 🔥 댓글 수정/삭제 관련 state
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editingCommentText, setEditingCommentText] = useState('');
  const [commentUpdateLoading, setCommentUpdateLoading] = useState(false);
  const [commentDeleteLoading, setCommentDeleteLoading] = useState(false);
  const [deletingCommentId, setDeletingCommentId] = useState<string | null>(null);

  // Redux에서 현재 게시글의 좋아요 상태 가져오기
  const isLiked = id ? (likedPosts[id] || false) : false;

  // 🔥 현재 사용자가 댓글 작성자인지 확인 (수정된 버전)
  const isCommentOwner = (comment: CommentData): boolean => {
    console.log('=== 댓글 권한 체크 ===');
    console.log('isAuthenticated:', isAuthenticated);
    console.log('user:', user);
    console.log('comment.user_id:', comment.user_id);
    console.log('comment.username:', comment.username);
    
    if (!isAuthenticated) {
      console.log('❌ 인증되지 않음');
      return false;
    }
    
    // 방법 1: Redux의 user 정보 사용 (있는 경우)
    if (user && user.user_id && user.username !== 'loading...') {
      const currentUserId = String(user.user_id);
      const commentUserId = String(comment.user_id);
      const isOwner = currentUserId === commentUserId && currentUserId !== '';
      console.log('Redux 사용자 ID로 비교:', currentUserId, '===', commentUserId, '=', isOwner);
      return isOwner;
    }
    
    // 방법 2: 토큰에서 직접 user_id 추출
    const tokenUserId = getCurrentUserIdFromToken();
    if (tokenUserId) {
      const commentUserId = String(comment.user_id);
      const isOwner = tokenUserId === commentUserId;
      console.log('토큰 사용자 ID로 비교:', tokenUserId, '===', commentUserId, '=', isOwner);
      return isOwner;
    }
    
    console.log('❌ 사용자 ID를 확인할 수 없음');
    return false;
  };

  // 🔥 현재 사용자가 게시글 작성자인지 확인 (수정된 버전)
  const isPostOwner = (): boolean => {
    console.log('=== 게시글 권한 체크 ===');
    console.log('isAuthenticated:', isAuthenticated);
    console.log('post:', post);
    console.log('user:', user);
    
    if (!isAuthenticated || !post) {
      console.log('❌ 인증되지 않음 또는 게시글 없음');
      return false;
    }
    
    // 방법 1: Redux의 user 정보 사용 (있는 경우)
    if (user && user.user_id && user.username !== 'loading...') {
      const currentUserId = String(user.user_id);
      const postUserId = String(post.user_id);
      const isOwner = currentUserId === postUserId && currentUserId !== '';
      console.log('Redux 사용자 ID로 비교:', currentUserId, '===', postUserId, '=', isOwner);
      return isOwner;
    }
    
    // 방법 2: 토큰에서 직접 user_id 추출
    const tokenUserId = getCurrentUserIdFromToken();
    if (tokenUserId) {
      const postUserId = String(post.user_id);
      const isOwner = tokenUserId === postUserId;
      console.log('토큰 사용자 ID로 비교:', tokenUserId, '===', postUserId, '=', isOwner);
      return isOwner;
    }
    
    console.log('❌ 사용자 ID를 확인할 수 없음');
    return false;
  };

  // 좋아요 상태 동기화 함수
  const syncLikeStatusWithServer = async (postId: string) => {
    console.log('🔄 서버와 좋아요 상태 동기화 시작');
    
    const token = localStorage.getItem('accessToken');
    if (!token || !isTokenValid(token)) {
      console.log('❌ 유효하지 않은 토큰');
      return;
    }

    try {
      const serverLikeData = await getMyLikeStatus(postId);
      console.log('📡 서버에서 받은 좋아요 데이터:', serverLikeData);
      
      dispatch(setLikeStatus({ 
        postId, 
        liked: serverLikeData.liked 
      }));
      
      const currentLikedPosts = JSON.parse(localStorage.getItem('likedPosts') || '{}');
      currentLikedPosts[postId] = serverLikeData.liked;
      localStorage.setItem('likedPosts', JSON.stringify(currentLikedPosts));
      
      setLikeCount(serverLikeData.total_likes);
      
      console.log('✅ 서버 동기화 완료:', {
        postId,
        liked: serverLikeData.liked,
        totalLikes: serverLikeData.total_likes
      });
      
    } catch (error) {
      console.error('❌ 서버 동기화 실패:', error);
    }
  };

  // 컴포넌트 마운트 시 인증 상태 복원
  useEffect(() => {
    console.log('=== 컴포넌트 마운트 - 인증 상태 복원 ===');
    
    dispatch(initializeAuth());
    
    const token = localStorage.getItem('accessToken');
    const userInfo = localStorage.getItem('userInfo');
    
    console.log('토큰 존재:', !!token);
    console.log('사용자 정보 존재:', !!userInfo);
    
    if (token && userInfo && isTokenValid(token)) {
      try {
        const userData = JSON.parse(userInfo);
        console.log('✅ 인증 상태 복원 완료:', userData.username);
      } catch (error) {
        console.error('❌ 사용자 정보 파싱 오류:', error);
        dispatch(logout());
        localStorage.clear();
      }
    } else {
      console.log('❌ 유효하지 않은 인증 정보 - 로그아웃 처리');
      dispatch(logout());
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userInfo');
    }
  }, [dispatch]);

  // 사용자 정보 로드 useEffect
  useEffect(() => {
    const loadUserInfo = async () => {
      if (isAuthenticated && (!user || !user.user_id || user.username === 'loading...')) {
        console.log('🔄 사용자 정보 로드 시도');
        try {
          const userInfo = await fetchCurrentUserInfo();
          if (userInfo) {
            // 토큰에서 user_id 추출
            const tokenUserId = getCurrentUserIdFromToken();
            
            const completeUserInfo = {
              user_id: tokenUserId || 'unknown',
              username: userInfo.username,
              email: userInfo.email,
            };
            
            dispatch(setUserInfo(completeUserInfo));
            console.log('✅ 사용자 정보 로드 완료:', completeUserInfo);
          }
        } catch (error) {
          console.error('❌ 사용자 정보 로드 실패:', error);
        }
      }
    };

    loadUserInfo();
  }, [isAuthenticated, user, dispatch]);

  // 좋아요 상태 로드 함수
  const loadLikeStatus = async (postId: string) => {
    console.log('=== 좋아요 상태 로드 시작 ===');
    console.log('postId:', postId);
    console.log('isAuthenticated:', isAuthenticated);
    
    try {
      if (isAuthenticated) {
        const token = localStorage.getItem('accessToken');
        if (token && isTokenValid(token)) {
          console.log('✅ 로그인된 사용자 - 개별 좋아요 상태 조회');
          await syncLikeStatusWithServer(postId);
          return;
        } else {
          console.log('❌ 토큰 무효 - 로그아웃 처리');
          dispatch(logout());
          localStorage.clear();
        }
      }
      
      console.log('👤 비로그인 사용자 - 공개 좋아요 수 조회');
      const publicLikeData = await getLikeStatusPublic(postId);
      setLikeCount(publicLikeData.total_likes || 0);
      
    } catch (error) {
      console.error('❌ 좋아요 상태 로드 실패:', error);
      setLikeCount(0);
    }
  };

  // 댓글 데이터 로드
  const loadComments = async (postId: string) => {
    try {
      let commentsData: CommentsResponse;
      
      if (isAuthenticated) {
        try {
          commentsData = await getComments(postId);
        } catch (authError: any) {
          if (authError.response?.status === 401) {
            dispatch(logout());
            localStorage.clear();
            commentsData = await getCommentsPublic(postId);
          } else {
            throw authError;
          }
        }
      } else {
        commentsData = await getCommentsPublic(postId);
      }
      
      setComments(commentsData.comments || []);
    } catch (err) {
      console.error('댓글 로드 실패:', err);
      setComments([]);
    }
  };

  // 게시글 데이터 로드
  const loadPost = async () => {
    if (!id) {
      setError('게시글 ID가 없습니다.');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      let postData: PostDetailData;
      
      if (isAuthenticated) {
        try {
          postData = await getPostDetail(id);
        } catch (authError: any) {
          if (authError.response?.status === 401) {
            dispatch(logout());
            localStorage.clear();
            postData = await getPostDetailPublic(id);
          } else {
            throw authError;
          }
        }
      } else {
        postData = await getPostDetailPublic(id);
      }
      
      setPost(postData);
      
      await Promise.all([
        loadLikeStatus(id),
        loadComments(id)
      ]);
      
    } catch (err: any) {
      console.error('게시글 로드 오류:', err);
      
      let errorMessage = '게시글을 불러오는 중 오류가 발생했습니다.';
      
      if (err.response?.status === 404) {
        errorMessage = '존재하지 않는 게시글입니다.';
      } else if (err.response?.status === 500) {
        errorMessage = '서버 내부 오류가 발생했습니다.';
      } else if (err.code === 'ERR_NETWORK') {
        errorMessage = '서버에 연결할 수 없습니다. 서버가 실행 중인지 확인해주세요.';
      } else if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.response?.data?.detail) {
        errorMessage = err.response.data.detail;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // 컴포넌트 마운트 시 데이터 로드
  useEffect(() => {
    const initializeAndLoadData = async () => {
      dispatch(initializeAuth());
      await new Promise(resolve => setTimeout(resolve, 100));
      await loadPost();
    };

    initializeAndLoadData();
  }, [id, dispatch]);

  // 인증 상태 변경 시 좋아요 상태 서버 동기화
  useEffect(() => {
    const handleAuthChange = async () => {
      if (isAuthenticated && id) {
        console.log('🔄 인증 상태 변경 감지 - 서버와 동기화');
        await syncLikeStatusWithServer(id);
      }
    };

    handleAuthChange();
  }, [isAuthenticated, id]);

  // 좋아요 토글
  const handleLike = async () => {
    if (!id) return;

    if (!isAuthenticated) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }

    try {
      console.log('=== 좋아요 토글 시작 ===');
      console.log('현재 좋아요 상태:', isLiked);
      
      const response = await toggleLike(id);
      console.log('🎯 좋아요 토글 API 응답:', response);
      
      dispatch(setLikeStatus({ 
        postId: id, 
        liked: response.liked 
      }));
      
      const currentLikedPosts = JSON.parse(localStorage.getItem('likedPosts') || '{}');
      currentLikedPosts[id] = response.liked;
      localStorage.setItem('likedPosts', JSON.stringify(currentLikedPosts));
      
      setLikeCount(response.total_likes);
      
      console.log('✅ 좋아요 토글 완료:', {
        postId: id,
        liked: response.liked,
        totalLikes: response.total_likes
      });
      
    } catch (err: any) {
      console.error('❌ 좋아요 처리 오류:', err);
      
      if (err.response?.status === 401) {
        dispatch(logout());
        localStorage.clear();
        alert('로그인이 필요합니다.');
        navigate('/login');
      } else {
        alert('좋아요 처리 중 오류가 발생했습니다.');
      }
    }
  };

  // 댓글 작성
  const handleCommentSubmit = async () => {
    if (!commentText.trim() || !id) return;

    if (!isAuthenticated) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }

    try {
      setCommentLoading(true);
      
      const commentData: CommentCreateRequest = {
        post_id: id,
        content: commentText.trim()
      };

      const newComment = await createComment(commentData);
      
      const formattedComment: CommentData = {
        id: newComment.id,
        user_id: newComment.user_id,
        username: newComment.username,
        content: newComment.content,
        created_at: newComment.created_at
      };

      setComments(prev => [...prev, formattedComment]);
      setCommentText('');
      
    } catch (err: any) {
      console.error('댓글 작성 오류:', err);
      
      if (err.response?.status === 401) {
        dispatch(logout());
        localStorage.clear();
        alert('로그인이 필요합니다.');
        navigate('/login');
      } else {
        alert('댓글 작성 중 오류가 발생했습니다.');
      }
    } finally {
      setCommentLoading(false);
    }
  };

  // 🔥 댓글 수정 시작
  const startEditComment = (comment: CommentData) => {
    setEditingCommentId(comment.id);
    setEditingCommentText(comment.content);
  };
  
  // 🔥 댓글 수정 취소
  const cancelEditComment = () => {
    setEditingCommentId(null);
    setEditingCommentText('');
  };
  
  // CommunityDetail.tsx의 updateComment 함수 수정
const updateComment = async (commentId: string, data: CommentUpdateRequest): Promise<CommentUpdateResponse> => {
    try {
      console.log('댓글 수정 요청:', { commentId, data });
      
      // 백엔드 API 호출 시 정확한 형태로 전송
      const response = await apiClient.patch<CommentUpdateResponse>(`/comments/${commentId}`, {
        content: data.content  // content 필드만 전송
      });
      
      console.log('댓글 수정 응답:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('댓글 수정 오류:', error);
      console.error('요청 URL:', `/comments/${commentId}`);
      console.error('요청 데이터:', data);
      console.error('응답 오류:', error.response?.data);
      throw error;
    }
  };
  
  // saveEditComment 함수도 수정
const saveEditComment = async (commentId: string) => {
    if (!editingCommentText.trim()) {
      alert('댓글 내용을 입력해주세요.');
      return;
    }
  
    try {
      setCommentUpdateLoading(true);
      
      console.log('댓글 수정 시도:', {
        commentId,
        content: editingCommentText.trim()
      });
      
      const updateData: CommentUpdateRequest = {
        content: editingCommentText.trim()
      };
  
      // 직접 API 호출로 변경
      const response = await apiClient.patch(`/comments/${commentId}`, updateData);
      
      console.log('댓글 수정 성공:', response.data);
      
      // 성공 시 댓글 목록 업데이트
      setComments(prev => prev.map(comment => 
        comment.id === commentId 
          ? { ...comment, content: editingCommentText.trim() }
          : comment
      ));
      
      setEditingCommentId(null);
      setEditingCommentText('');
      
      alert('댓글이 수정되었습니다.');
      
    } catch (err: any) {
      console.error('댓글 수정 오류:', err);
      console.error('오류 상세:', {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message
      });
      
      if (err.response?.status === 401) {
        dispatch(logout());
        localStorage.clear();
        alert('로그인이 필요합니다.');
        navigate('/login');
      } else if (err.response?.status === 403) {
        alert('댓글 수정 권한이 없습니다.');
      } else if (err.response?.status === 422) {
        alert('요청 데이터 형식이 올바르지 않습니다.');
      } else {
        alert('댓글 수정 중 오류가 발생했습니다.');
      }
    } finally {
      setCommentUpdateLoading(false);
    }
  };
  
  // 🔥 댓글 삭제
  const handleDeleteComment = async (commentId: string) => {
    if (!confirm('정말로 이 댓글을 삭제하시겠습니까?')) {
      return;
    }

    try {
      setCommentDeleteLoading(true);
      setDeletingCommentId(commentId);
      
      await deleteComment(commentId);
      
      setComments(prev => prev.filter(comment => comment.id !== commentId));
      
      alert('댓글이 삭제되었습니다.');
      
    } catch (err: any) {
      console.error('댓글 삭제 오류:', err);
      
      if (err.response?.status === 401) {
        dispatch(logout());
        localStorage.clear();
        alert('로그인이 필요합니다.');
        navigate('/login');
      } else if (err.response?.status === 403) {
        alert('댓글 삭제 권한이 없습니다.');
      } else {
        alert('댓글 삭제 중 오류가 발생했습니다.');
      }
    } finally {
      setCommentDeleteLoading(false);
      setDeletingCommentId(null);
    }
  };

  // 게시글 삭제
  const handleDeletePost = async () => {
    if (!id) return;

    try {
      setDeleteLoading(true);
      
      const response = await deletePost(id);
      console.log('삭제 성공:', response.message);
      
      dispatch(removeLikeStatus(id));
      
      const currentLikedPosts = JSON.parse(localStorage.getItem('likedPosts') || '{}');
      delete currentLikedPosts[id];
      localStorage.setItem('likedPosts', JSON.stringify(currentLikedPosts));
      
      alert('게시글이 삭제되었습니다.');
      navigate('/CommunityList');
      
    } catch (err: any) {
      console.error('게시글 삭제 오류:', err);
      
      if (err.response?.status === 401) {
        dispatch(logout());
        localStorage.clear();
        alert('로그인이 필요합니다.');
        navigate('/login');
      } else if (err.response?.status === 403) {
        alert('삭제 권한이 없습니다.');
      } else {
        alert('게시글 삭제 중 오류가 발생했습니다.');
      }
    } finally {
      setDeleteLoading(false);
      setShowDeleteModal(false);
    }
  };

  // 삭제 확인 모달 열기
  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };

  // 삭제 확인 모달 닫기
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  // 날짜 포맷 함수
  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${year}.${month}.${day} ${hours}:${minutes}`;
    } catch {
      return dateString;
    }
  };

  const handleBackToList = () => {
    navigate('/CommunityList');
  };
  
  const handleReply = () => {
    if (!isAuthenticated) {
      alert('글쓰기를 하려면 로그인이 필요합니다.');
      navigate('/login');
      return;
    }
    navigate('/CommunityWrite');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRefresh = () => {
    loadPost();
  };

  // ESC 키로 수정 모드 취소
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && editingCommentId) {
        cancelEditComment();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [editingCommentId]);

  // 디버깅을 위한 useEffect
  useEffect(() => {
    console.log('=== Redux 상태 변경 감지 ===');
    console.log('isAuthenticated:', isAuthenticated);
    console.log('user:', user);
    console.log('likedPosts:', likedPosts);
    console.log('현재 게시글 좋아요 상태 (isLiked):', isLiked);
    console.log('localStorage likedPosts:', localStorage.getItem('likedPosts'));
    console.log('토큰에서 추출한 user_id:', getCurrentUserIdFromToken());
    console.log('현재 게시글:', post);
    console.log('댓글 수:', comments.length);
    if (comments.length > 0) {
      console.log('첫 번째 댓글:', comments[0]);
      console.log('첫 번째 댓글 소유자 여부:', isCommentOwner(comments[0]));
    }
    if (post) {
      console.log('게시글 소유자 여부:', isPostOwner());
    }
  }, [isAuthenticated, user, likedPosts, isLiked, post, comments]);

  if (loading) {
    return (
      <PageContainer>
        <Header>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <HeaderTitle>커뮤니티</HeaderTitle>
        </Header>
        <ContentWrapper>
          <LoadingMessage>게시글을 불러오는 중...</LoadingMessage>
        </ContentWrapper>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <Header>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <HeaderTitle>커뮤니티</HeaderTitle>
        </Header>
        <ContentWrapper>
          <ErrorMessage>{error}</ErrorMessage>
          <ActionButtons>
            <ListButton onClick={handleBackToList}>목록으로 돌아가기</ListButton>
            <ReplyButton onClick={handleRefresh}>다시 시도</ReplyButton>
          </ActionButtons>
        </ContentWrapper>
      </PageContainer>
    );
  }

  if (!post) {
    return (
      <PageContainer>
        <Header>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <HeaderTitle>커뮤니티</HeaderTitle>
        </Header>
        <ContentWrapper>
          <ErrorMessage>게시글을 찾을 수 없습니다.</ErrorMessage>
          <ActionButtons>
            <ListButton onClick={handleBackToList}>목록으로 돌아가기</ListButton>
          </ActionButtons>
        </ContentWrapper>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <HeaderTitle>커뮤니티</HeaderTitle>
      </Header>
      
      <ContentWrapper>
        <PostContainer>
          <PostHeader>
            <PostHeaderTop>
              <PostTitle>{post.title}</PostTitle>
              {/* 🔥 게시글 삭제 버튼 - 본인이 작성한 게시글에만 표시 */}
              {isPostOwner() && (
                <DeleteButton 
                  onClick={openDeleteModal}
                  disabled={deleteLoading}
                >
                  {deleteLoading ? '삭제 중...' : '삭제'}
                </DeleteButton>
              )}
            </PostHeaderTop>
            <PostMeta>
              <span>{formatDate(post.created_at)} &nbsp;&nbsp;&nbsp; 작성자: {post.username} &nbsp;&nbsp;&nbsp; 좋아요: {likeCount}</span>
            </PostMeta>
          </PostHeader>
          
          <PostContent>
            <ContentText>{post.content}</ContentText>
            
            {post.tags && post.tags.length > 0 && (
              <TagContainer>
                {post.tags.map((tag, index) => (
                  <Tag key={index}>#{tag}</Tag>
                ))}
              </TagContainer>
            )}
          </PostContent>
        </PostContainer>
        
        <CommentSection>
          <CommentHeader>💬 댓글 {comments.length}</CommentHeader>
          
          {comments.map((comment) => (
            <CommentItem key={comment.id}>
              <CommentMeta>
                {comment.username} · {formatDate(comment.created_at)}
              </CommentMeta>
              
              {editingCommentId === comment.id ? (
                // 🔥 수정 모드
                <div>
                  <EditCommentInput
                    value={editingCommentText}
                    onChange={(e) => setEditingCommentText(e.target.value)}
                    maxLength={3000}
                    disabled={commentUpdateLoading}
                    placeholder="댓글을 수정해주세요."
                  />
                  <div style={{ fontSize: '12px', color: '#999', marginBottom: '8px' }}>
                    {editingCommentText.length}/3000
                  </div>
                  <EditActions>
                    <CancelButton 
                      onClick={cancelEditComment}
                      disabled={commentUpdateLoading}
                    >
                      취소
                    </CancelButton>
                    <SaveButton 
                      onClick={() => saveEditComment(comment.id)}
                      disabled={commentUpdateLoading || !editingCommentText.trim()}
                    >
                      {commentUpdateLoading ? '저장 중...' : '저장'}
                    </SaveButton>
                  </EditActions>
                </div>
              ) : (
                // 🔥 일반 모드
                <div>
                  <CommentText>{comment.content}</CommentText>
                  
                  {/* 🔥 댓글 수정/삭제 버튼 (본인 댓글에만 표시) */}
                  {isAuthenticated && isCommentOwner(comment) && (
                    <CommentActionButtons>
                      <CommentActionButton
                        onClick={() => startEditComment(comment)}
                        disabled={editingCommentId !== null || commentDeleteLoading}
                      >
                        수정
                      </CommentActionButton>
                      <CommentActionButton
                        onClick={() => handleDeleteComment(comment.id)}
                        disabled={
                          editingCommentId !== null || 
                          commentDeleteLoading || 
                          deletingCommentId === comment.id
                        }
                      >
                        {deletingCommentId === comment.id ? '삭제 중...' : '삭제'}
                      </CommentActionButton>
                    </CommentActionButtons>
                  )}
                </div>
              )}
            </CommentItem>
          ))}
          
          {isAuthenticated ? (
            <CommentForm>
              <CommentInput
                placeholder="댓글을 남겨주세요."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                maxLength={3000}
                disabled={editingCommentId !== null}
              />
              <CommentActions>
                <CharCount>{commentText.length}/3000</CharCount>
                <SubmitButton 
                  onClick={handleCommentSubmit}
                  disabled={
                    commentLoading || 
                    !commentText.trim() || 
                    editingCommentId !== null
                  }
                >
                  {commentLoading ? '등록 중...' : '등록'}
                </SubmitButton>
              </CommentActions>
            </CommentForm>
          ) : (
            <LoginPrompt>
              <p>댓글을 작성하려면 로그인이 필요합니다.</p>
              <button onClick={handleLogin}>로그인하기</button>
            </LoginPrompt>
          )}
        </CommentSection>
        
        <HeartButton 
          isLiked={isLiked}
          likeCount={likeCount}
          onLike={handleLike}
          showText={true}
          showCount={true}
        />
        
        <ActionButtons>
          <ListButton onClick={handleBackToList}>목록</ListButton>
          <ReplyButton onClick={handleReply}>글쓰기</ReplyButton>
        </ActionButtons>
      </ContentWrapper>

      {/* 삭제 확인 모달 */}
      {showDeleteModal && (
        <ModalOverlay>
          <ModalContainer>
            <ModalTitle>게시글 삭제</ModalTitle>
            <ModalMessage>
              정말로 이 게시글을 삭제하시겠습니까?<br/>
              삭제된 게시글은 복구할 수 없습니다.
            </ModalMessage>
            <ModalButtons>
              <CancelModalButton onClick={closeDeleteModal}>
                취소
              </CancelModalButton>
              <ConfirmModalButton 
                onClick={handleDeletePost}
                disabled={deleteLoading}
              >
                {deleteLoading ? '삭제 중...' : '삭제'}
              </ConfirmModalButton>
            </ModalButtons>
          </ModalContainer>
        </ModalOverlay>
      )}
    </PageContainer>
  );
};

export default CommunityDetail;