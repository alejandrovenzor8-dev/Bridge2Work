import { api } from './api';
import type { Estudiante, LearningPath } from '@/types';

export const studentService = {
  getStudent: (id: string) => api.get<Estudiante>(`/students/${id}`),
  
  createStudent: (data: Partial<Estudiante>) =>
    api.post<Estudiante>('/students', data),
  
  updateStudent: (id: string, data: Partial<Estudiante>) =>
    api.put<Estudiante>(`/students/${id}`, data),
  
  deleteStudent: (id: string) => api.delete(`/students/${id}`),

  getLearningPath: (studentId: string) =>
    api.get<LearningPath[]>(`/students/${studentId}/learning-path`),

  updateStepProgress: (studentId: string, stepId: string, completed: boolean) =>
    api.put(`/students/${studentId}/learning-path/${stepId}`, { completed }),
};
