import { useState, useEffect } from 'react';
import { ApiState } from '../types';
import { postsApi, usersApi } from '../lib/api';

// Generic hook for API calls
export function useApi<T>(
  apiCall: () => Promise<T>,
  dependencies: any[] = []
): ApiState<T> & { refetch: () => void } {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const data = await apiCall();
      setState({ data, loading: false, error: null });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return {
    ...state,
    refetch: fetchData,
  };
}

// Specific hooks for common API calls
export function usePosts() {
  return useApi(() => postsApi.getAll());
}

export function useUsers() {
  return useApi(() => usersApi.getAll());
}

export function usePost(id: number) {
  return useApi(() => postsApi.getById(id), [id]);
}

export function useUser(id: number) {
  return useApi(() => usersApi.getById(id), [id]);
}