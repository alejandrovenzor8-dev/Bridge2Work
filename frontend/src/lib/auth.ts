import { User, Role } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

interface AuthResponse {
  token: string;
  user: User;
}

export async function loginUser(email: string, password: string): Promise<AuthResponse> {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Login failed');
  }
  return res.json();
}

export async function registerUser(
  name: string,
  email: string,
  password: string,
  role: Role
): Promise<AuthResponse> {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, role }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Registration failed');
  }
  return res.json();
}

export function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('b2w_token');
}

export function setToken(token: string): void {
  localStorage.setItem('b2w_token', token);
}

export function removeToken(): void {
  localStorage.removeItem('b2w_token');
  localStorage.removeItem('b2w_user');
}

export function getStoredUser(): User | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem('b2w_user');
  if (!raw) return null;
  try { return JSON.parse(raw) as User; } catch { return null; }
}

export function setStoredUser(user: User): void {
  localStorage.setItem('b2w_user', JSON.stringify(user));
}

export function getDashboardPath(role: Role): string {
  const paths: Record<Role, string> = {
    ADMIN: '/admin',
    EMPRESA: '/empresa',
    UNIVERSIDAD: '/universidad',
    ESTUDIANTE: '/estudiante',
  };
  return paths[role] || '/estudiante';
}
