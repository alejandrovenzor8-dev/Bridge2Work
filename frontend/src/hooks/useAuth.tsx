'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthState } from '@/types';
import { getStoredUser, getToken, setToken, removeToken, setStoredUser } from '@/lib/auth';

interface AuthContextType extends AuthState {
  login: (token: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const token = getToken();
    const user = getStoredUser();
    if (token && user) {
      setState({ token, user, isAuthenticated: true });
    }
  }, []);

  function login(token: string, user: User) {
    setToken(token);
    setStoredUser(user);
    setState({ token, user, isAuthenticated: true });
  }

  function logout() {
    removeToken();
    setState({ token: null, user: null, isAuthenticated: false });
  }

  return <AuthContext.Provider value={{ ...state, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
