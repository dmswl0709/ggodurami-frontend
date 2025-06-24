// pages/CommunityDetail.tsx (수정된 버전)
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Logo } from '../Components/Logo/Logo';
import { HeartButton } from '../Components/HeartButton/HeartButton';

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

interface CommentCreateRequest {
  post_id: string;
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
      // 토큰이 만료되었거나 유효하지 않은 경우
      localStorage.removeItem('accessToken');
      // 즉시 리디렉션하지 않고 오류를 전달하여 컴포넌트에서 처리
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

const createComment = async (data: CommentCreateRequest): Promise<CommentCreateResponse> => {
  try {
    const response = await apiClient.post<CommentCreateResponse>('/comments', data);
    return response.data;
  } catch (error: any) {
    console.error('댓글 작성 오류:', error);
    throw error;
  }
};

// 댓글 목록 조회 함수
const getComments = async (postId: string): Promise<CommentData[]> => {
  try {
    const response = await apiClient.get<{ comments: CommentData[] }>(`/posts/${postId}/comments`);
    return response.data.comments || [];
  } catch (error: any) {
    console.error('댓글 조회 오류:', error);
    return [];
  }
};

// 게시글 상세 조회 (인증 없이)
const getPostDetailPublic = async (postId: string): Promise<PostDetailData> => {
  try {
    const response = await axios.get<PostDetailData>(`${BASE_URL}/posts/${postId}`);
    return response.data;
  } catch (error: any) {
    console.error('공개 게시글 조회 오류:', error);
    throw error;
  }
};

// 로그인 상태 확인 함수
const isLoggedIn = (): boolean => {
  const token = localStorage.getItem('accessToken');
  if (!token) return false;
  
  try {
    // JWT 토큰 만료 확인
    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Date.now() / 1000;
    return payload.exp > currentTime;
  } catch {
    return false;
  }
};

// 스타일 컴포넌트들 (동일)
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

const PostTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
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

export const CommunityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [post, setPost] = useState<PostDetailData | null>(null);
  const [comments, setComments] = useState<CommentData[]>([]);
  const [commentText, setCommentText] = useState('');
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [commentLoading, setCommentLoading] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

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
      
      // 로그인 상태 확인
      const loggedIn = isLoggedIn();
      setUserLoggedIn(loggedIn);
      
      let postData: PostDetailData;
      
      if (loggedIn) {
        // 로그인된 경우 인증이 필요한 API 사용
        try {
          postData = await getPostDetail(id);
        } catch (authError: any) {
          if (authError.response?.status === 401) {
            // 인증 실패 시 공개 API로 재시도
            console.log('인증 실패, 공개 API로 재시도');
            localStorage.removeItem('accessToken');
            setUserLoggedIn(false);
            postData = await getPostDetailPublic(id);
          } else {
            throw authError;
          }
        }
      } else {
        // 로그인되지 않은 경우 공개 API 사용
        postData = await getPostDetailPublic(id);
      }
      
      setPost(postData);
      setLikeCount(postData.likes || 0);
      setLiked(postData.is_liked || false);
      
      // 댓글 데이터 로드 (로그인 상태와 무관하게 시도)
      try {
        const commentsData = await getComments(id);
        setComments(commentsData);
      } catch (commentError) {
        console.log('댓글 로드 실패, 빈 배열로 설정');
        setComments([]);
      }
      
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
    loadPost();
  }, [id]);

  // 좋아요 토글
  const handleLike = async () => {
    if (!id) return;

    if (!userLoggedIn) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }

    try {
      const response = await toggleLike(id);
      setLiked(response.liked);
      
      // total_likes가 있으면 사용, 없으면 로컬에서 계산
      if (response.total_likes !== undefined) {
        setLikeCount(response.total_likes);
      } else {
        if (response.liked) {
          setLikeCount(prev => prev + 1);
        } else {
          setLikeCount(prev => Math.max(0, prev - 1));
        }
      }
      
    } catch (err: any) {
      console.error('좋아요 처리 오류:', err);
      
      let errorMessage = '좋아요 처리 중 오류가 발생했습니다.';
      
      if (err.response?.status === 401) {
        errorMessage = '로그인이 필요합니다.';
        localStorage.removeItem('accessToken');
        setUserLoggedIn(false);
        setTimeout(() => navigate('/login'), 2000);
      } else if (err.response?.status === 404) {
        errorMessage = '존재하지 않는 게시글입니다.';
      } else if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.response?.data?.detail) {
        errorMessage = err.response.data.detail;
      }
      
      alert(errorMessage);
    }
  };

  // 댓글 작성
  const handleCommentSubmit = async () => {
    if (!commentText.trim() || !id) return;

    if (!userLoggedIn) {
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
      
      let errorMessage = '댓글 작성 중 오류가 발생했습니다.';
      
      if (err.response?.status === 401) {
        errorMessage = '로그인이 필요합니다.';
        localStorage.removeItem('accessToken');
        setUserLoggedIn(false);
        setTimeout(() => navigate('/login'), 2000);
      } else if (err.response?.status === 404) {
        errorMessage = '존재하지 않는 게시글입니다.';
      } else if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.response?.data?.detail) {
        if (Array.isArray(err.response.data.detail)) {
          errorMessage = err.response.data.detail.map((item: any) => 
            `${item.loc?.[1] || '필드'}: ${item.msg}`
          ).join(', ');
        } else {
          errorMessage = err.response.data.detail;
        }
      }
      
      alert(errorMessage);
    } finally {
      setCommentLoading(false);
    }
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
    if (!userLoggedIn) {
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
            <PostTitle>{post.title}</PostTitle>
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
              <CommentText>{comment.content}</CommentText>
            </CommentItem>
          ))}
          
          {userLoggedIn ? (
            <CommentForm>
              <CommentInput
                placeholder="댓글을 남겨주세요."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                maxLength={3000}
              />
              <CommentActions>
                <CharCount>{commentText.length}/3000</CharCount>
                <SubmitButton 
                  onClick={handleCommentSubmit}
                  disabled={commentLoading || !commentText.trim()}
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
        
        {/* HeartButton 컴포넌트 사용 */}
        <HeartButton 
          isLiked={liked}
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
    </PageContainer>
  );
};

export default CommunityDetail;