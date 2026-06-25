'use client';

import { useCallback } from 'react';
import api from '@/services/api';
import type { User } from '@/types';

export function useAuth() {
  const login = useCallback(async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    const { token, user } = response.data.data;
    localStorage.setItem('token', token);
    return user;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
  }, []);

  const register = useCallback(async (data: any) => {
    const response = await api.post('/auth/register', data);
    return response.data.data;
  }, []);

  return { login, logout, register };
}
