import { Post, User, Comment } from '../types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Generic API fetch function with error handling
async function apiRequest<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`API request failed for ${endpoint}:`, error);
    throw error;
  }
}

// Posts API
export const postsApi = {
  getAll: (): Promise<Post[]> => apiRequest<Post[]>('/posts'),
  getById: (id: number): Promise<Post> => apiRequest<Post>(`/posts/${id}`),
  getByUserId: (userId: number): Promise<Post[]> => apiRequest<Post[]>(`/posts?userId=${userId}`),
};

// Users API
export const usersApi = {
  getAll: (): Promise<User[]> => apiRequest<User[]>('/users'),
  getById: (id: number): Promise<User> => apiRequest<User>(`/users/${id}`),
};

// Comments API
export const commentsApi = {
  getAll: (): Promise<Comment[]> => apiRequest<Comment[]>('/comments'),
  getByPostId: (postId: number): Promise<Comment[]> => apiRequest<Comment[]>(`/comments?postId=${postId}`),
};

// Utility function to simulate loading delay (for demo purposes)
export const delay = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms));