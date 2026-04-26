import { Post, User, Comment, DummyUser, ReqresUser } from '../types';

// API Base URLs
const JSONPLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com';
const DUMMYJSON_URL = 'https://dummyjson.com';
const REQRES_URL = 'https://reqres.in/api';

// Generic API fetch function with error handling
async function apiRequest<T>(baseUrl: string, endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`API request failed for ${baseUrl}${endpoint}:`, error);
    throw error;
  }
}

// JSONPlaceholder API (https://jsonplaceholder.typicode.com)
export const postsApi = {
  getAll: (): Promise<Post[]> => apiRequest<Post[]>(JSONPLACEHOLDER_URL, '/posts'),
  getById: (id: number): Promise<Post> => apiRequest<Post>(JSONPLACEHOLDER_URL, `/posts/${id}`),
  getByUserId: (userId: number): Promise<Post[]> => apiRequest<Post[]>(JSONPLACEHOLDER_URL, `/posts?userId=${userId}`),
};

// JSONPlaceholder Users API
export const usersApi = {
  getAll: (): Promise<User[]> => apiRequest<User[]>(JSONPLACEHOLDER_URL, '/users'),
  getById: (id: number): Promise<User> => apiRequest<User>(JSONPLACEHOLDER_URL, `/users/${id}`),
};

// JSONPlaceholder Comments API
export const commentsApi = {
  getAll: (): Promise<Comment[]> => apiRequest<Comment[]>(JSONPLACEHOLDER_URL, '/comments'),
  getByPostId: (postId: number): Promise<Comment[]> => apiRequest<Comment[]>(JSONPLACEHOLDER_URL, `/comments?postId=${postId}`),
};

// DummyJSON API (https://dummyjson.com)
export const dummyJsonApi = {
  getUsers: (): Promise<{ users: DummyUser[] }> => apiRequest<{ users: DummyUser[] }>(DUMMYJSON_URL, '/users'),
  getProducts: (): Promise<any> => apiRequest<any>(DUMMYJSON_URL, '/products'),
  getPosts: (): Promise<any> => apiRequest<any>(DUMMYJSON_URL, '/posts'),
};

// Reqres API (https://reqres.in) - Free public API
export const reqresApi = {
  getUsers: (page: number = 1): Promise<{ data: ReqresUser[], total: number, total_pages: number }> => 
    apiRequest<{ data: ReqresUser[], total: number, total_pages: number }>(REQRES_URL, `/users?page=${page}`),
  getUser: (id: number): Promise<{ data: ReqresUser }> => 
    apiRequest<{ data: ReqresUser }>(REQRES_URL, `/users/${id}`),
  createUser: (userData: { name: string, job: string }): Promise<any> =>
    fetch(`${REQRES_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    }).then(res => res.json()),
};

// Combined API for chat demo - uses multiple APIs
export const chatApi = {
  // Get users from multiple sources
  getAllUsers: async (): Promise<User[]> => {
    try {
      // Primary: JSONPlaceholder users
      const jsonUsers = await usersApi.getAll();
      
      // Fallback: Try DummyJSON users if needed
      try {
        const dummyUsers = await dummyJsonApi.getUsers();
        console.log('DummyJSON users loaded:', dummyUsers.users.length);
      } catch (error) {
        console.log('DummyJSON fallback failed:', error);
      }
      
      // Fallback: Try Reqres users if needed
      try {
        const reqresUsers = await reqresApi.getUsers();
        console.log('Reqres users loaded:', reqresUsers.data.length);
      } catch (error) {
        console.log('Reqres fallback failed:', error);
      }
      
      return jsonUsers;
    } catch (error) {
      console.error('All user APIs failed:', error);
      throw error;
    }
  },
  
  // Get messages/comments from JSONPlaceholder
  getAllMessages: (): Promise<Comment[]> => commentsApi.getAll(),
};

// Utility function to simulate loading delay (for demo purposes)
export const delay = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms));