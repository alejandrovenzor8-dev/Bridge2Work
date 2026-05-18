import { api } from './api';
import type { Universidad, UniversityAnalytics } from '@/types';

export const universityService = {
  getUniversity: (id: string) => api.get<Universidad>(`/universities/${id}`),
  
  createUniversity: (data: Partial<Universidad>) =>
    api.post<Universidad>('/universities', data),
  
  updateUniversity: (id: string, data: Partial<Universidad>) =>
    api.put<Universidad>(`/universities/${id}`, data),
  
  deleteUniversity: (id: string) => api.delete(`/universities/${id}`),

  getAnalytics: (universidadId: string) =>
    api.get<UniversityAnalytics>(`/universities/${universidadId}/analytics`),

  getCareerComparison: (universidadId: string) =>
    api.get<any>(`/universities/${universidadId}/career-comparison`),
};
